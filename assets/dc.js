/*
 * Y/RE Development — page renderer.
 * Renders the page template in <template id="dc-template"> with the page's
 * component logic, using Preact for efficient DOM updates.
 *
 * Template syntax:
 *   {{ path }}                         value lookup (dotted path)
 *   <sc-if value="{{ cond }}">         conditional block
 *   <sc-for list="{{ items }}" as="x"> repeated block ($index available)
 *   onClick="{{ handler }}"            event binding
 *   ref="{{ fn }}"                     element ref callback
 */
import { h, render, Component, Fragment } from './vendor/preact/index.js';

const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
const WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;

function lookup(scope, path) {
  path = path.trim();
  if (path === 'true') return true;
  if (path === 'false') return false;
  if (path === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
  if (/^(['"]).*\1$/.test(path)) return path.slice(1, -1);
  const parts = path.split('.');
  let v = scope[parts[0]];
  for (let i = 1; i < parts.length && v != null; i++) v = v[parts[i]];
  return v;
}

function interp(str, scope) {
  const whole = str.match(WHOLE);
  if (whole) return lookup(scope, whole[1]);
  return str.replace(HOLE, (m, p) => {
    const v = lookup(scope, p);
    return v == null ? '' : String(v);
  });
}

function kids(node, scope, out) {
  for (let c = node.firstChild; c; c = c.nextSibling) conv(c, scope, out);
}

function conv(node, scope, out) {
  if (node.nodeType === 3) {
    const t = node.nodeValue;
    if (t.indexOf('{{') < 0) { out.push(t); return; }
    const v = interp(t, scope);
    out.push(v == null || v === false ? '' : String(v));
    return;
  }
  if (node.nodeType !== 1) return;
  const tag = node.localName;

  if (tag === 'sc-if') {
    if (interp(node.getAttribute('value') || '', scope)) kids(node, scope, out);
    return;
  }
  if (tag === 'sc-for') {
    const list = interp(node.getAttribute('list') || '', scope) || [];
    const as = node.getAttribute('as') || 'item';
    list.forEach((item, i) => {
      const s = Object.create(scope);
      s[as] = item;
      s.$index = i;
      kids(node, s, out);
    });
    return;
  }

  const props = {};
  for (const a of node.attributes) {
    const name = a.name;
    if (name.startsWith('hint-')) continue;
    let v = a.value;
    if (v.indexOf('{{') >= 0) v = interp(v, scope);

    if (name === 'ref') { props.ref = v; continue; }
    if (name.startsWith('on') && name.length > 2) {
      let ev = name.toLowerCase();
      const type = (node.getAttribute('type') || '').toLowerCase();
      if (ev === 'onchange' && (tag === 'textarea' || (tag === 'input' && type !== 'checkbox' && type !== 'radio'))) ev = 'oninput';
      props[ev] = v;
      continue;
    }
    if (name === 'value' && (tag === 'input' || tag === 'textarea' || tag === 'select')) { props.value = v == null ? '' : v; continue; }
    if (name === 'checked') { props.checked = v === true || v === 'true' || v === ''; continue; }
    if (name === 'draggable') { props.draggable = !(v === false || v === 'false'); continue; }
    if (v === false || v == null) continue;
    props[name] = v === true ? '' : v;
  }

  const children = [];
  kids(node, scope, children);
  out.push(h(tag, props, ...children));
}

let TEMPLATE = null;

export class DCLogic extends Component {
  render() {
    const vals = typeof this.renderVals === 'function' ? this.renderVals() : {};
    const out = [];
    kids(TEMPLATE, vals || {}, out);
    return h(Fragment, null, ...out);
  }
}

export function mount(Comp, props) {
  TEMPLATE = document.getElementById('dc-template').content;
  const root = document.getElementById('app');
  root.textContent = '';
  render(h(Comp, props || {}), root);
  startAtTop();
}

// Always open a newly visited page at the top (also when the site is shown inside a frame),
// unless the address points to a section (#...) or the visitor came back via the back/forward buttons.
function startAtTop() {
  try {
    const nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    if (location.hash || (nav && nav.type === 'back_forward')) return;
    const top = () => {
      window.scrollTo(0, 0);
      if (window.self !== window.top) document.documentElement.scrollIntoView({ block: 'start' });
    };
    top(); requestAnimationFrame(top); setTimeout(top, 120);
  } catch (e) {}
}
