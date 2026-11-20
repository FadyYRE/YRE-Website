/*
 * Y/RE Development — Onze diensten.
 * <yre-services mode="page"> : folders that open to the full service with its animated diagram.
 * <yre-services mode="home"> : folders that open to a summary with a link to the services page.
 * Generated from the four service designs; edit the texts in SERVICES below.
 */
const LOGO = 'data:image/png;base64,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';
const SERVICES = [
 {
  "id": "nieuwe-ontwikkeling",
  "title": "Nieuwe ontwikkeling",
  "sub": "Locatie, programma en businesscase op elkaar afstemmen.",
  "intro": "Vanuit het bestemmingsplan en de omgeving halen we het maximale uit een locatie: een optimaal benut volume, het juiste programma en een sterke businesscase.",
  "vals": "<li><button type=\"button\"><b>De bestaande context</b></button></li>\n        <li><button type=\"button\"><b>De kaders van het bestemmingsplan</b></button></li>\n        <li><button type=\"button\"><b>Het volume optimaal benutten</b></button></li>\n        <li><button type=\"button\"><b>Programma op de juiste plek</b></button></li>\n        <li><button type=\"button\"><b>Korrels, passend in de omgeving</b></button></li>\n        <li><button type=\"button\"><b>Ruimte voor groen</b></button></li>",
  "results": "<div><b>Locatie en programma optimaal benut</b><p>Het volume haalt het maximale uit wat het bestemmingsplan toestaat, en elk segment van het programma krijgt de plek waar het het beste werkt.</p></div>\n      <div><b>Hogere vormfactor</b><p>Compacte korrels en efficiënte plattegronden zorgen voor een hogere verhouding tussen woonoppervlak en bruto vloeroppervlak. Hetzelfde volume levert zo meer woonoppervlak op.</p></div>\n      <div><b>Sterke businesscase</b><p>Meer verhuur- en verkoopbaar oppervlak, een programma dat aansluit op de vraag en een plan dat past in bestemmingsplan en omgeving. Dat betekent meer waarde en minder risico.</p></div>",
  "label": "Animatie: vanuit de kaders van het bestemmingsplan en de omgeving wordt het volume optimaal benut, met groen, programma op de juiste plek en korrels"
 },
 {
  "id": "herbestemming-transformatie",
  "title": "Herbestemming & transformatie",
  "sub": "Bestaand vastgoed een nieuwe toekomst geven.",
  "intro": "Wij onderzoeken de ontwikkelpotentie van bestaand vastgoed en vertalen deze naar nieuwe, toekomstbestendige functies. Daarbij brengen we ruimtelijke mogelijkheden, gebruikersbehoeften, technische randvoorwaarden en financiële haalbaarheid samen.<br><br>Van de eerste haalbaarheidsstudie en programmatische verkenning tot het uitwerken van transformatiescenario’s en het begeleiden van ontwerp- en vergunningstrajecten. Zo geven we bestaande gebouwen en locaties een nieuwe toekomst met blijvende waarde.",
  "vals": "<li><button type=\"button\"><b>Het bestaande gebouw</b></button></li>\n        <li><button type=\"button\"><b>De potentie onderzoeken</b></button></li>\n        <li><button type=\"button\"><b>Transformatiescenario</b></button></li>\n        <li><button type=\"button\"><b>Het ontwerp uitontwikkelen</b></button></li>\n        <li><button type=\"button\"><b>Een nieuwe toekomst</b></button></li>",
  "results": "<div><b>Ontwikkelpotentie benut</b><p>Een helder beeld van wat een bestaand gebouw of een bestaande locatie kan worden, onderbouwd met haalbaarheid, programma en transformatiescenario’s.</p></div>\n      <div><b>Toekomstbestendige functies</b><p>Een nieuw programma dat aansluit op de vraag van gebruikers en de omgeving, met ruimtelijke kwaliteit, daglicht en buitenruimte.</p></div>\n      <div><b>Blijvende waarde</b><p>Hergebruik van de bestaande constructie beperkt materiaalgebruik en sloop. Zo krijgt een gebouw een tweede leven, met een haalbare businesscase.</p></div>",
  "label": "Animatie: een leegstaand kantoorgebouw transformeert stap voor stap naar woningen, met een binnenhof, nieuwe gevels, buitenruimtes en een optopping"
 },
 {
  "id": "second-opinion",
  "title": "Second opinion",
  "sub": "Bouwmassa, gebouwstructuur en techniek optimaliseren.",
  "intro": "Voor een lopende ontwikkeling brengen we in kaart wat er misgaat en zetten we heldere spelregels neer. Binnen dat systeem behoudt het ontwerp zijn kwaliteit en verbetert de businesscase.",
  "vals": "<li><button type=\"button\"><b>De lopende ontwikkeling</b></button></li>\n        <li><button type=\"button\"><b>Begrijpen wat er misgaat</b></button></li>\n        <li><button type=\"button\"><b>De spelregels neerzetten</b></button></li>\n        <li><button type=\"button\"><b>Ontwerpen binnen het systeem</b></button></li>\n        <li><button type=\"button\"><b>Kwaliteit behouden</b></button></li>",
  "results": "<div><b>Inzicht in wat er misgaat</b><p>Een scherpe analyse van bouwmassa, gebouwstructuur en techniek laat zien waar waarde verloren gaat en waar de kansen liggen.</p></div>\n      <div><b>Kwaliteit binnen een systeem</b><p>Heldere spelregels voor massa, structuur en techniek. Ze maken het ontwerp efficiënt en goed uitvoerbaar, en laten ruimte voor variatie en architectuur.</p></div>\n      <div><b>Sterkere businesscase</b><p>Meer verhuur- en verkoopbaar oppervlak tegen lagere en beter voorspelbare stichtingskosten. Zo komt een lopende ontwikkeling weer op koers, zonder in te leveren op kwaliteit.</p></div>",
  "label": "Animatie: een lopende ontwikkeling wordt geanalyseerd, er worden spelregels neergezet en binnen dat systeem wordt het ontwerp geoptimaliseerd"
 },
 {
  "id": "supervisie-welstandsregie",
  "title": "Supervisie- & welstandsregie",
  "sub": "Regie op supervisie en welstand.",
  "intro": "Wij sturen ontwerpteams inhoudelijk aan bij de voorbereiding van supervisie- en welstandspresentaties en zorgen voor een overtuigende onderbouwing van het ontwikkelplan. Met heldere procesafspraken, tijdige afstemming en actieve deelname aan commissiebesprekingen bewaken we de ontwerpvoortgang en besluitvorming.",
  "vals": "<li><button type=\"button\"><b>Heldere procesafspraken</b></button></li>\n        <li><button type=\"button\"><b>Ontwerpteam inhoudelijk aansturen</b></button></li>\n        <li><button type=\"button\"><b>Overtuigende onderbouwing</b></button></li>\n        <li><button type=\"button\"><b>Tijdige afstemming en deelname</b></button></li>\n        <li><button type=\"button\"><b>Voortgang en besluitvorming bewaakt</b></button></li>",
  "results": "<div><b>Overtuigende presentaties</b><p>Een ontwerpteam dat op één lijn zit en een ontwikkelplan met een heldere, goed onderbouwde ruimtelijke ambitie, in lijn met de businesscase.</p></div>\n      <div><b>Voorspelbare besluitvorming</b><p>Vaste momenten, vooroverleg en Y/RE aan tafel bij de commissie. Zo liggen verwachtingen vroeg op tafel en verloopt de besluitvorming beter voorspelbaar.</p></div>\n      <div><b>Ontwerpvoortgang geborgd</b><p>We bewaken de ontwerpvoortgang en sturen per fase aan op een helder besluit. Dat helpt de planning op koers te houden en het risico voor de businesscase te beperken.</p></div>",
  "label": "Animatie: Y/RE voert regie tussen ontwerpteam en commissies, met procesafspraken, onderbouwing en bewaking van voortgang en besluitvorming"
 },
 {
  "id": "gedelegeerd-ontwikkelmanagement",
  "title": "Gedelegeerd ontwikkelmanagement",
  "sub": "Ontwikkelmanagement namens de opdrachtgever.",
  "intro": "Wij nemen het ontwikkelmanagement namens de opdrachtgever op ons, van initiatief tot en met vergunning en realisatievoorbereiding. Als verlengstuk van het ontwikkelteam sturen we adviseurs aan, bewaken we planning en haalbaarheid en coördineren we het ontwikkelproces, met heldere verantwoordelijkheden en korte lijnen.",
  "vals": "<li><button type=\"button\"><b>Ontwikkelstrategie</b></button></li>\n        <li><button type=\"button\"><b>Ontwerpteammanagement</b></button></li>\n        <li><button type=\"button\"><b>Planning &amp; procesregie</b></button></li>\n        <li><button type=\"button\"><b>Financiële bewaking</b></button></li>\n        <li><button type=\"button\"><b>Stakeholdermanagement</b></button></li>\n        <li><button type=\"button\"><b>Vergunningstraject</b></button></li>\n        <li><button type=\"button\"><b>Realisatievoorbereiding</b></button></li>\n        <li><button type=\"button\"><b>Rapportage &amp; advies</b></button></li>",
  "results": "<div><b>Eén aanspreekpunt</b><p>Y/RE werkt als verlengstuk van het ontwikkelteam, met heldere verantwoordelijkheden en korte lijnen naar adviseurs, gemeente en andere betrokkenen.</p></div>\n      <div><b>Grip op planning en haalbaarheid</b><p>Planning, programma en businesscase worden doorlopend bewaakt. Ontwerpkeuzes worden financieel getoetst en afwijkingen vroeg gesignaleerd.</p></div>\n      <div><b>Goed onderbouwde besluiten</b><p>Wij informeren tijdig over voortgang, risico's en budget, en maken inzichtelijk welke besluiten nodig zijn. Zo houdt de opdrachtgever de regie, zonder zelf alles te hoeven trekken.</p></div>",
  "label": "Infographic: Y/RE als verlengstuk van het ontwikkelteam, met acht taken van ontwikkelstrategie tot rapportage en advies, van initiatief tot realisatievoorbereiding"
 }
];
const CSS = "\nyre-services{display:block;--bg:#F3F1EC;--ink:#121211;--grey:#5F5B54;--rule:#CFCAC0;color:var(--ink)}\nyre-services *{box-sizing:border-box}\nyre-services [hidden]{display:none!important}\nyre-services .bar{display:none!important}\nyre-services figure{padding-bottom:20px!important}\nyre-services .ysv-item{border-top:1px solid var(--rule)}\nyre-services .ysv-item:first-child{border-top-color:var(--ink)}\nyre-services .ysv-item:last-child{border-bottom:1px solid var(--rule)}\nyre-services .ysv-head{all:unset;box-sizing:border-box;width:100%;cursor:pointer;display:flex;flex-wrap:wrap;align-items:baseline;gap:12px 40px;padding:36px 64px 36px 0;position:relative;transition:background-color .4s}\nyre-services .ysv-head:focus-visible{outline:2px solid var(--ink);outline-offset:4px}\nyre-services .ysv-head:hover .ysv-title{color:var(--grey)}\nyre-services .ysv-num{flex:0 0 64px;font-family:'Archivo',sans-serif;font-size:14px;color:var(--grey)}\nyre-services .ysv-title{flex:6 1 420px;min-width:0;font-family:'Archivo',sans-serif;font-weight:500;font-stretch:90%;font-size:clamp(28px,3.2vw,46px);letter-spacing:-.025em;line-height:1.05;transition:color .3s}\nyre-services .ysv-sub{flex:4 1 300px;min-width:0;font-size:16px;line-height:1.55}\nyre-services .ysv-icon{position:absolute;right:4px;top:50%;width:22px;height:22px;margin-top:-11px}\nyre-services .ysv-icon::before,yre-services .ysv-icon::after{content:\"\";position:absolute;left:0;right:0;top:50%;height:1.5px;margin-top:-.75px;background:var(--ink);transition:transform .45s cubic-bezier(.2,.7,.1,1)}\nyre-services .ysv-icon::after{transform:rotate(90deg)}\nyre-services .ysv-item.open .ysv-icon::after{transform:rotate(0)}\nyre-services .ysv-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .6s cubic-bezier(.2,.7,.1,1)}\nyre-services .ysv-item.open .ysv-body{grid-template-rows:1fr}\nyre-services .ysv-inner{overflow:hidden;min-height:0}\nyre-services .ysv-content{padding:4px 0 clamp(48px,6vw,88px)}\nyre-services .ysv-intro{margin:0;max-width:760px;font-size:clamp(17px,1.4vw,20px);line-height:1.55}\nyre-services .stagewrap{margin-top:clamp(32px,4vw,56px)}\nyre-services .result{margin-top:clamp(48px,6vw,80px)}\nyre-services .ysv-more{display:inline-flex;align-items:center;gap:14px;min-height:44px;font-size:15px;font-weight:500;border-bottom:1px solid var(--ink);padding-bottom:4px;margin:32px 0 0 0;color:var(--ink)}\nyre-services .ysv-more span{display:inline-block;transition:transform .5s cubic-bezier(.2,.7,.1,1)}\nyre-services .ysv-more:hover span{transform:translateX(6px)}\n@media (max-width:760px){\n  yre-services .ysv-head{padding:28px 48px 28px 0;gap:8px 16px}\n  yre-services .ysv-num{flex-basis:100%}\n  yre-services .ysv-intro,yre-services .ysv-more,yre-services[mode=\"home\"] .result{margin-left:0}\n}\n@media (prefers-reduced-motion:reduce){yre-services .ysv-body,yre-services .ysv-icon::before,yre-services .ysv-icon::after{transition:none}}\nyre-services *{box-sizing:border-box}\nyre-services body{font-family:'Instrument Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\nyre-services .wrap{max-width:1440px;margin:0 auto;padding:clamp(48px,7vw,104px) clamp(16px,4vw,56px) clamp(64px,8vw,120px)}\nyre-services .eyebrow{display:block;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--grey)}\nyre-services .rule{height:1px;background:var(--ink);margin:24px 0 clamp(28px,4vw,48px)}\nyre-services .head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:20px 48px}\nyre-services h2{margin:0;font-family:'Archivo',sans-serif;font-weight:500;font-stretch:88%;font-size:clamp(34px,4.6vw,68px);line-height:1.02;letter-spacing:-.03em;max-width:820px}\nyre-services .quote{margin:0;font-size:clamp(16px,1.3vw,18px);line-height:1.55;color:var(--grey);max-width:520px}\nyre-services .stagewrap{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:clamp(24px,3vw,48px);border-top:1px solid var(--ink);border-bottom:1px solid var(--rule);margin-top:clamp(36px,5vw,64px)}\nyre-services figure{margin:0;position:relative;min-width:0;padding-bottom:12px}\nyre-services svg.ysv-scene{display:block;width:100%;height:auto;aspect-ratio:var(--ar,1.5);touch-action:pan-y}\nyre-services .bar{display:flex;justify-content:space-between;align-items:center;gap:16px}\nyre-services .note{font-size:12px;color:var(--grey);letter-spacing:.02em}\nyre-services .controls{display:flex;gap:18px}\nyre-services .controls button,yre-services .steps button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}\nyre-services .controls button{font-size:13px;letter-spacing:.02em;color:var(--grey);min-height:32px;border-bottom:1px solid transparent}\nyre-services .controls button:hover{color:var(--ink);border-bottom-color:var(--ink)}\nyre-services .panel{padding:20px 0 26px;display:flex;flex-direction:column;gap:22px;min-width:0}\nyre-services .state{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--grey);min-height:16px}\nyre-services .state b{color:var(--ink);font-weight:500}\nyre-services .ph{display:flex;justify-content:space-between;align-items:baseline;gap:12px;border-bottom:1px solid var(--ink);padding-bottom:12px}\nyre-services .ph span{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--grey)}\nyre-services .ph b{font-family:'Archivo',sans-serif;font-weight:500;font-size:30px;letter-spacing:-.02em;font-variant-numeric:tabular-nums}\nyre-services .ph b small{font-size:14px;color:var(--grey);font-weight:400;letter-spacing:0}\nyre-services .rows{display:flex;flex-direction:column;gap:16px}\nyre-services .row .rl{display:flex;align-items:center;gap:10px;font-size:14px;margin-bottom:8px}\nyre-services .row .rl .cnt{margin-left:auto;font-variant-numeric:tabular-nums;color:var(--grey);white-space:nowrap}\nyre-services .row .rl .cnt b{color:var(--ink);font-weight:500}\nyre-services .sw{width:14px;height:14px;border:1px solid var(--ink);flex:none}\nyre-services .p-s{background:repeating-linear-gradient(45deg,rgba(18,18,17,.6) 0 1px,var(--bg) 1px 4.5px)}\nyre-services .p-h{background:radial-gradient(circle,rgba(18,18,17,.65) .9px,transparent 1.2px) 0 0/4.5px 4.5px var(--bg)}\nyre-services .p-k{background:repeating-linear-gradient(0deg,rgba(18,18,17,.55) 0 1px,var(--bg) 1px 4.5px)}\nyre-services .track{position:relative;height:14px}\nyre-services .track::before{content:\"\";position:absolute;left:0;right:0;top:50%;height:1px;background:var(--rule)}\nyre-services .fill{position:absolute;left:0;top:0;bottom:0;border:1px solid var(--ink);width:0;opacity:0;transition:opacity .4s}\nyre-services .goal{position:absolute;top:-5px;bottom:-5px;left:88%;width:0;border-left:1px dashed var(--ink)}\nyre-services .goalnote{font-size:12px;color:var(--grey);display:flex;align-items:center;gap:8px}\nyre-services .goalnote i{display:inline-block;height:12px;border-left:1px dashed var(--ink)}\nyre-services .kpis{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;border-top:1px solid var(--rule);padding-top:20px}\nyre-services .kpi{display:flex;flex-direction:column;gap:4px;min-width:0}\nyre-services .kpi span{font-size:12px;color:var(--grey);letter-spacing:.02em}\nyre-services .kpi b{font-family:'Archivo',sans-serif;font-weight:500;font-stretch:92%;font-size:26px;letter-spacing:-.02em;line-height:1.1;font-variant-numeric:tabular-nums;white-space:nowrap}\nyre-services .kpi em{font-style:normal;font-size:12px;color:var(--grey);line-height:1.35}\nyre-services .steps{display:none!important;grid-template-columns:repeat(6,minmax(0,1fr));gap:0 clamp(12px,1.6vw,24px);margin-top:28px}\nyre-services .steps button{text-align:left;display:flex;flex-direction:column;gap:12px;min-height:44px;color:var(--grey);transition:color .4s}\nyre-services .steps button[aria-current=\"step\"]{color:var(--ink)}\nyre-services .seg{display:block;height:1px;background:var(--rule);position:relative;overflow:hidden}\nyre-services .seg i{position:absolute;inset:0;background:var(--ink);transform-origin:left;transform:scaleX(0)}\nyre-services .num{font-family:'Archivo',sans-serif;font-size:13px}\nyre-services .cap{font-size:15px;line-height:1.45;max-width:260px}\nyre-services .dots{display:none;gap:8px;margin-top:14px}\nyre-services .dots button{width:44px;height:28px;display:flex;align-items:center;background:none;border:0;padding:0;cursor:pointer}\nyre-services .dots button span{display:block;width:100%;height:2px;background:var(--rule)}\nyre-services .dots button[aria-current=\"step\"] span{background:var(--ink)}\nyre-services .headline{padding:22px 0 0;min-height:118px;max-width:620px;transition:opacity .35s}\nyre-services .headline .hn{display:none;font-family:'Archivo',sans-serif;font-size:13px;color:var(--grey);margin-bottom:8px}\nyre-services .headline b{display:block;font-family:'Archivo',sans-serif;font-weight:600;font-stretch:90%;font-size:clamp(22px,2.2vw,30px);line-height:1.08;letter-spacing:-.02em}\nyre-services .headline span.hs{display:block;margin-top:8px;font-size:15px;line-height:1.45;color:var(--grey);max-width:520px}\nyre-services .ptitle{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--grey);border-bottom:1px solid var(--ink);padding-bottom:12px}\nyre-services .vals{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-top:1px solid var(--ink)}\nyre-services .vals li{border-bottom:1px solid var(--rule);color:#A8A399;transition:color .4s;position:relative}\nyre-services .vals li button{display:grid;grid-template-columns:minmax(0,1fr);gap:0;width:100%;padding:9px 0;min-height:40px;text-align:left;font:inherit;color:inherit;background:none;border:0;cursor:pointer}\nyre-services .vals li button:hover b{text-decoration:underline;text-underline-offset:3px}\nyre-services .vals li i.pr{position:absolute;left:0;bottom:-1px;height:1px;background:var(--ink);width:0}\nyre-services .vals li .vn{font-family:'Archivo',sans-serif;font-size:13px;padding-top:2px}\nyre-services .vals li b{display:block;font-weight:500;font-size:15px}\nyre-services .vals li span.vs{display:block;font-size:13px;line-height:1.4;margin-top:2px}\nyre-services .vals li.done{color:var(--grey)}\nyre-services .vals li.done b{color:var(--ink)}\nyre-services .vals li.on{color:var(--ink)}\nyre-services .vals li.on b{font-weight:600}\nyre-services .legend{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:8px;font-size:12px;color:var(--grey)}\nyre-services .legend span{display:inline-flex;align-items:center;gap:6px}\nyre-services .legend .sw{width:12px;height:12px}\nyre-services .big{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;padding-top:6px;transition:opacity .5s}\nyre-services .big div{display:flex;flex-direction:column;gap:4px;min-width:0}\nyre-services .big b{font-family:'Archivo',sans-serif;font-weight:600;font-stretch:90%;font-size:clamp(26px,2.4vw,34px);letter-spacing:-.02em;line-height:1;font-variant-numeric:tabular-nums;white-space:nowrap}\nyre-services .big span{font-size:12px;color:var(--grey);line-height:1.35}\nyre-services .steps .cap b{display:block;font-weight:600;color:inherit;margin-bottom:4px;font-size:15px}\nyre-services .steps .cap{font-size:13px}\n@media (max-width:760px){yre-services .headline{min-height:128px}\nyre-services .steps{display:none!important}}\nyre-services .result{margin-top:clamp(64px,8vw,112px)}\nyre-services .result .rh{display:block;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--grey);padding-bottom:16px;border-bottom:1px solid var(--ink)}\nyre-services .rgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px clamp(20px,2.5vw,40px)}\nyre-services .rgrid div{padding-top:24px}\nyre-services .rgrid .rn{display:block;font-family:'Archivo',sans-serif;font-size:13px;color:var(--grey);margin-bottom:10px}\nyre-services .rgrid b{display:block;font-family:'Archivo',sans-serif;font-weight:600;font-stretch:92%;font-size:clamp(22px,2vw,28px);letter-spacing:-.015em;line-height:1.1;margin-bottom:12px}\nyre-services .rgrid p{margin:0;font-size:16px;line-height:1.6;max-width:400px}\n@media (max-width:760px){yre-services .rgrid{grid-template-columns:minmax(0,1fr);gap:0}}\n@media (max-width:1020px){yre-services .stagewrap{grid-template-columns:minmax(0,1fr);gap:0}\nyre-services .panel{border-top:1px solid var(--rule)}}\n@media (max-width:760px){yre-services .steps{grid-template-columns:minmax(0,1fr);gap:0;margin-top:20px}\nyre-services .steps button{display:none}\nyre-services .steps button[aria-current=\"step\"]{display:flex}\nyre-services .steps .seg{display:none}\nyre-services .dots{display:flex}\nyre-services .kpi b{font-size:22px}}";

const FACTORIES = {
  'nieuwe-ontwikkeling': function (root, UID) {
    const $ = id => root.querySelector('[data-id="' + id + '"]');
  const BG = '#F3F1EC', INK = '#121211';
  const svg = $('scene'), G = $('g'), DEFS = $('defs');
  // isometric, the long block rises to the right, the park lies front-right
  const AX = 30 * Math.PI / 180, AY = 30 * Math.PI / 180;
  const CA = Math.cos(AX), SA = Math.sin(AX), CB = Math.cos(AY), SB = Math.sin(AY);
  const P = (x, y, z) => [x * CA + y * CB, -x * SA + y * SB - z];
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const easeOut = v => 1 - Math.pow(1 - v, 3);
  const lerp = (a, b, v) => a + (b - a) * v;
  const win = (t, a, b, f = .5) => clamp((t - a) / f) * clamp((b - t) / f);
  const f2 = n => n.toFixed(2);

  // ---------- timeline (s) ----------
  const T = {
    ctx1: 2.4,
    s1: 4.6, env0: 4.8, env1: 7.0,
    s2: 10.6, bar0: 10.8, bar1: 12.6, pav0: 12.6, pav1: 14.2,
    s3: 16.0, prog0: 16.2, prog1: 17.4,
    s4: 20.0, cut1: 20.8, split0: 20.8, split1: 23.4,
    s5: 25.0, green0: 25.2, green1: 27.0,
    out0: 35.0, end: 36.0
  };
  const LOOP = 2.4;
  const STEPS = [
    { at: 0, title: 'De bestaande context', text: 'De bouwplot tussen de omliggende bebouwing, aan het park.' },
    { at: T.s1, title: 'De kaders van het bestemmingsplan', text: 'Waar en hoe hoog gebouwd mag worden: maximale hoogtes, hoogteaccent en parkzone.' },
    { at: T.s2, title: 'Het volume optimaal benutten', text: 'Hoogte en bouwvlak volledig benut, met lagere volumes die aansluiten op het park.' },
    { at: T.s3, title: 'Programma op de juiste plek', text: 'Huur, sociaal en koop waar ze het beste werken.' },
    { at: T.s4, title: 'Korrels, passend in de omgeving', text: 'Opgebroken in korrels met elk een eigen hoogte en een hoge vormfactor.' },
    { at: T.s5, title: 'Ruimte voor groen', text: 'Een groene binnentuin die aansluit op het park.' }
  ];

  // ---------- scene (metres, simplified reference scheme) ----------
  // x: length from the low end (left) to the social block (right); y: depth from the back to the park
  const PLOT = [[0, -20], [187, -20], [187, 60], [0, 60]];
  const ENV = { acc: { x0: 24, x1: 104, y0: -20, y1: 16, z0: 36.6, h: 48.6 } };
  const context = [
    { x0: 10, x1: 70, y0: -54, y1: -32, h: 27 },
    { x0: 74, x1: 130, y0: -54, y1: -32, h: 30 },
    { x0: 134, x1: 196, y0: -54, y1: -32, h: 24 },
    { x0: -42, x1: -18, y0: -26, y1: 8, h: 18 },
    { x0: 204, x1: 226, y0: -22, y1: 8, h: 21 }
  ];
  const parkTrees = [[40, 82], [64, 96], [90, 80], [116, 98], [142, 82], [168, 96], [196, 84], [80, 112], [150, 114], [208, 104], [120, 122]];
  const PARK = [[10, 70], [180, 68], [222, 78], [226, 112], [190, 128], [100, 128], [40, 116], [6, 92]];
  const greenTrees = [[32, 30], [50, 26], [70, 28], [94, 24], [116, 24], [136, 25], [152, 30], [47, 41], [47, 53], [105, 40], [105, 52], [155, 40], [155, 52], [7, 50]];
  // step 2: the massing as in the diagram; step 5: broken into grains (s2 = tile in the massing, f = grain)
  const BLD = [
    { n: 'G', s2: [0, 16, -4, 22, 33.6], f: [0, 16, -4, 22, 33.6], p: 'h', d: 0 },
    { n: 'F', s2: [24, 40, -16, 6, 39.6], f: [24, 40, -16, 6, 39.6], p: 'h', d: .1 },
    { n: 'E1', s2: [40, 61, -18, 6, 48.6], f: [40, 61, -18, 6, 42.6], p: 'h', d: .2 },
    { n: 'E2', s2: [61, 82, -18, 6, 48.6], f: [61, 82, -18, 10, 48.6], p: 'h', d: .35 },
    { n: 'D', s2: [82, 104, -14, 14, 36.6], f: [82, 104, -14, 16, 42.6], p: 'h', d: .5 },
    { n: 'C', s2: [104, 140, -14, 14, 36.6], f: [104, 140, -14, 14, 36.6], p: 'h', d: .65 },
    { n: 'B', s2: [140, 163, -14, 14, 36.6], f: [140, 163, -14, 10, 39.6], p: 'h', d: .8 },
    { n: 'A', s2: [163, 186.6, -8, 60, 36.6], f: [163, 186.6, -8, 60, 36.6], p: 's', d: .95 },
    { n: 'H', s2: [14, 32, 22, 60, 33.6], f: [14, 32, 22, 60, 33.6], p: 'h', d: 1.1, pav: 0 },
    { n: 'I', s2: [62, 91, 36, 60, 18.6], f: [62, 91, 36, 60, 18.6], p: 'k', d: 1.2, pav: 1 },
    { n: 'J', s2: [118.5, 148.5, 36, 60, 18.6], f: [118.5, 148.5, 36, 60, 18.6], p: 'k', d: 1.3, pav: 2 }
  ];
  const MASS = [
    { x0: 0, x1: 16, y0: -4, y1: 22, h: 33.6, p: 'h', d: 0 },
    { x0: 24, x1: 40, y0: -16, y1: 6, h: 39.6, p: 'h', d: .1 },
    { x0: 40, x1: 82, y0: -18, y1: 6, h: 48.6, p: 'h', d: .2 },
    { x0: 82, x1: 163, y0: -14, y1: 14, h: 36.6, p: 'h', d: .4 },
    { x0: 163, x1: 186.6, y0: -8, y1: 60, h: 36.6, p: 's', d: .6 }
  ];
  const PAVS = BLD.filter(b => b.pav != null);
  const GOAL = [480, 130, 50];

  // viewBox (wide + narrow crop)
  function bounds(corners, extra, mx, my) {
    let a0 = 1e9, a1 = -1e9, b0 = 1e9, b1 = -1e9;
    const grow = (x, y, z) => { const [a, b] = P(x, y, z); a0 = Math.min(a0, a); a1 = Math.max(a1, a); b0 = Math.min(b0, b); b1 = Math.max(b1, b); };
    corners.forEach(([x, y]) => grow(x, y, 0)); extra.forEach(p => grow(...p));
    return { x: a0 - mx, y: b0 - my, w: (a1 - a0) + 2 * mx, h: (b1 - b0) + my + 2 };
  }
  const VB_WIDE = bounds([[-44, -54], [228, -54], [-44, 128], [228, 128]], [[61, -18, 48.6], [74, -54, 30]], 2, 10);
  const VB_NARROW = bounds([[-6, -24], [200, -24], [-6, 80], [200, 84]], [[61, -18, 48.6], [186.6, -8, 36.6], [150, -14, 36.6]], 1, 16);
  let VB = VB_WIDE;
  function setVB(v) {
    VB = v;
    svg.setAttribute('viewBox', `${f2(VB.x)} ${f2(VB.y)} ${f2(VB.w)} ${f2(VB.h)}`);
    svg.style.setProperty('--ar', (VB.w / VB.h).toFixed(3));
  }
  setVB(VB_WIDE);

  // ---------- drawing ----------
  let ppu = 4, out = [], FS = 13;
  const px = n => n / ppu;
  const pts = arr => arr.map(p => { const q = P(...p); return f2(q[0]) + ',' + f2(q[1]); });
  const poly = arr => 'M' + pts(arr).join('L') + 'Z';
  const line = (a, b) => 'M' + pts([a, b]).join('L');
  function path(d, o = {}) {
    let s = `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.noStroke ? 'none' : INK}" stroke-width="${f2(px(o.w ?? 1.2))}" stroke-linejoin="round" stroke-linecap="round"`;
    if (o.fo != null && o.fill) s += ` fill-opacity="${f2(o.fo)}"`;
    if (o.op != null && o.op < 1) s += ` stroke-opacity="${f2(Math.max(0, o.op))}"`;
    if (o.dash) s += ` stroke-dasharray="${f2(px(o.dash[0]))} ${f2(px(o.dash[1]))}"`;
    if (o.draw != null && o.draw < 1) s += ` pathLength="1" stroke-dasharray="${Math.max(0, o.draw).toFixed(3)} 2"`;
    out.push(s + '/>');
  }
  function setPatterns() {
    const w = px(4.5), sw = px(.8), r = px(.85);
    DEFS.innerHTML =
      `<pattern id="ps${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="${f2(w)}" stroke="${INK}" stroke-width="${f2(sw)}" stroke-opacity=".5"/></pattern>` +
      `<pattern id="pg${UID}" patternUnits="userSpaceOnUse" width="${f2(w * 1.6)}" height="${f2(w * 1.6)}"><circle cx="${f2(w * .4)}" cy="${f2(w * .4)}" r="${f2(r * .75)}" fill="${INK}" fill-opacity=".45"/><circle cx="${f2(w * 1.2)}" cy="${f2(w * 1.2)}" r="${f2(r * .75)}" fill="${INK}" fill-opacity=".45"/></pattern>` +
      `<pattern id="pk${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}"><line x1="0" y1="${f2(w / 2)}" x2="${f2(w)}" y2="${f2(w / 2)}" stroke="${INK}" stroke-width="${f2(sw)}" stroke-opacity=".5"/></pattern>` +
      `<pattern id="ph${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}"><circle cx="${f2(w / 2)}" cy="${f2(w / 2)}" r="${f2(r)}" fill="${INK}" fill-opacity=".55"/></pattern>`;
  }
  const PAT = { s: ('url(#ps' + UID + ')'), h: ('url(#ph' + UID + ')'), k: ('url(#pk' + UID + ')') };

  function box(b, z0, z1, o = {}) {
    const { x0, x1, y0, y1 } = b;
    if (z1 - z0 < .05) return;
    const st = { fill: o.fill ?? BG, fo: o.fo ?? 1, w: o.w ?? 1.2, op: o.op, draw: o.draw };
    const fx = [[x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]];
    const fy = [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    const top = [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
    if (o.dash) st.dash = o.dash;
    const side = face => {
      path(poly(face), st);
      if (o.pat && PAT[o.pat] && o.patV > 0) path(poly(face), { fill: PAT[o.pat], fo: o.patV, noStroke: true });
    };
    side(fx); if (o.floors) floorLines(b, z0, z1, 'x', o);
    side(fy); if (o.floors) floorLines(b, z0, z1, 'y', o);
    path(poly(top), { ...st, fill: o.topFill ?? st.fill, fo: o.topFo ?? st.fo });
  }
  function floorLines(b, z0, z1, side, o) {
    const fl = { w: .55, op: (o.op ?? 1) * .3 };
    for (let z = Math.ceil((z0 + .01) / 3) * 3; z < z1 - .4; z += 3) {
      if (side === 'x') path(line([b.x0, b.y0, z], [b.x0, b.y1, z]), fl);
      else path(line([b.x0, b.y1, z], [b.x1, b.y1, z]), fl);
    }
  }
  function tree(x, y, h, r, o = {}) {
    const s = o.s ?? 1; if (s <= .02) return;
    const hh = h * s, rr = r * s;
    path(line([x, y, 0], [x, y, hh - rr]), { w: .8, op: o.op ?? 1, draw: o.draw });
    const [cx, cy] = P(x, y, hh - rr);
    let a = `<circle cx="${f2(cx)}" cy="${f2(cy)}" r="${f2(rr)}" fill="${BG}" stroke="${INK}" stroke-width="${f2(px(.8))}"`;
    if ((o.op ?? 1) < 1) a += ` stroke-opacity="${f2(o.op)}"`;
    if (o.draw != null && o.draw < 1) a += ` pathLength="1" stroke-dasharray="${o.draw.toFixed(3)} 2"`;
    out.push(a + '/>');
  }
  function text(x, y, s, size, op, anchor = 'middle', weight = 400) {
    out.push(`<text x="${f2(x)}" y="${f2(y)}" font-size="${f2(px(size))}" font-weight="${weight}" text-anchor="${anchor}" fill="${INK}" fill-opacity="${f2(op)}" font-family="Instrument Sans, system-ui, sans-serif" stroke="${BG}" stroke-width="${f2(px(3))}" paint-order="stroke">${s}</text>`);
  }
  function label(anchor, dx, dy, txt, v) {
    if (v <= .01) return;
    const parts = txt.split('|'); txt = FS < 13 && parts[1] ? parts[1] : parts[0];
    if (FS < 13) { dx *= .7; dy *= .7; }
    const [ax, ay] = P(...anchor);
    const lx = ax + px(dx), ly = ay + px(dy);
    const reach = easeOut(clamp(v * 1.4));
    const ex = lerp(ax, lx, reach), ey = lerp(ay, ly, reach);
    out.push(`<g opacity="${f2(v)}"><circle cx="${f2(ax)}" cy="${f2(ay)}" r="${f2(px(2.6))}" fill="${INK}"/>`);
    out.push(`<path d="M${f2(ax)},${f2(ay)}L${f2(ex)},${f2(ey)}" stroke="${INK}" stroke-width="${f2(px(.9))}" fill="none"/>`);
    const fs = px(FS), anc = dx < 0 ? 'end' : dx > 0 ? 'start' : 'middle';
    let tx = lx + (dx < 0 ? -px(6) : dx > 0 ? px(6) : 0);
    const ty = dx === 0 ? (dy < 0 ? ly - px(6) : ly + px(6) + fs * .7) : ly + fs * .35;
    const tw = txt.length * fs * .5, pad = px(4);
    if (anc === 'start') tx = Math.min(tx, VB.x + VB.w - tw - pad);
    else if (anc === 'end') tx = Math.max(tx, VB.x + tw + pad);
    else tx = Math.min(Math.max(tx, VB.x + tw / 2 + pad), VB.x + VB.w - tw / 2 - pad);
    out.push(`<text x="${f2(tx)}" y="${f2(ty)}" font-size="${f2(fs)}" text-anchor="${anc}" fill="${INK}" font-family="Instrument Sans, system-ui, sans-serif" stroke="${BG}" stroke-width="${f2(px(4))}" paint-order="stroke" stroke-linejoin="round">${txt}</text></g>`);
  }
  function sortItems(items) {
    const n = items.length, before = items.map(() => []);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const a = items[i], b = items[j];
      const amin = a.x0 * CA + a.y0 * CB, amax = a.x1 * CA + a.y1 * CB, bmin = b.x0 * CA + b.y0 * CB, bmax = b.x1 * CA + b.y1 * CB;
      if (amax <= bmin || bmax <= amin) continue;
      // a is behind b when it lies further right (x) or further back (y)
      if (a.x0 >= b.x1 - 1e-6 || a.y1 <= b.y0 + 1e-6) before[j].push(i);
    }
    const seen = new Array(n).fill(0), order = [];
    const visit = i => { if (seen[i]) return; seen[i] = 1; before[i].forEach(visit); order.push(items[i]); };
    for (let i = 0; i < n; i++) visit(i);
    return order;
  }

  // envelope (bestemmingsplan): zones as ghost volumes with dashed edges
  const ZONES = [
    { x0: 0, x1: 187, y0: -20, y1: 16, h: 36.6 },
    { x0: 163, x1: 187, y0: 16, y1: 60, h: 36.6 },
    { x0: 0, x1: 152, y0: 16, y1: 60, h: 33.6 }
  ];
  function envelope(v, fillV, hi) {
    if (v <= 0) return;
    const o = { fill: BG, fo: .55 * fillV, w: hi ? .9 : .7, op: (hi ? .5 : .22) * v };
    sortItems(ZONES.map(z => ({ ...z }))).forEach(z => box(z, 0, z.h, o));
    const a = ENV.acc;
    box(a, a.z0, a.h, o);
  }


  function arrow(a, b, v, o = {}) {
    if (v <= .01) return;
    const e = [lerp(a[0], b[0], v), lerp(a[1], b[1], v), 0];
    path(line(a, e), { w: 1, op: o.op ?? .9, dash: [4, 3] });
    if (v > .9) {
      const [ex, ey] = P(...e), [sx, sy] = P(...a);
      const ang = Math.atan2(ey - sy, ex - sx), L = px(7);
      const p1 = [ex - L * Math.cos(ang - .45), ey - L * Math.sin(ang - .45)], p2 = [ex - L * Math.cos(ang + .45), ey - L * Math.sin(ang + .45)];
      out.push(`<path d="M${f2(p1[0])},${f2(p1[1])}L${f2(ex)},${f2(ey)}L${f2(p2[0])},${f2(p2[1])}" fill="none" stroke="${INK}" stroke-width="${f2(px(1))}" stroke-opacity="${f2((o.op ?? .9) * prog(v, .9, 1))}" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  }

  // ---------- render ----------
  let ctxDone = false;
  const geo = (b, v) => {
    const a = b.s2, c = b.f;
    return { x0: lerp(a[0], c[0], v), x1: lerp(a[1], c[1], v), y0: lerp(a[2], c[2], v), y1: lerp(a[3], c[3], v), h: lerp(a[4], c[4], v) };
  };
  const box4 = a => ({ x0: a[0], x1: a[1], y0: a[2], y1: a[3], h: a[4] });
  function render(t) {
    out = [];
    const cp = ctxDone ? 1 : ease(prog(t, 0, T.ctx1));
    const fade = 1 - prog(t, T.out0, T.end - .15);
    const cop = .45;

    // ground: park, promenade, plot
    path(poly(PARK.map(([x, y]) => [x, y, 0])), { fill: ('url(#pg' + UID + ')'), fo: .9 * cp, noStroke: true });
    path(poly(PARK.map(([x, y]) => [x, y, 0])), { w: .8, op: cop * .9, draw: cp, dash: cp >= 1 ? [2, 3] : null });
    const gl = { w: .8, op: cop, draw: cp };
    path(line([-44, 63, 0], [228, 63, 0]), gl);
    path(line([-44, 66, 0], [228, 66, 0]), gl);
    path(poly(PLOT.map(([x, y]) => [x, y, 0])), { w: 1.2 + .6 * win(t, 1.4, T.s1 + .3, .6), op: .85, draw: cp });
    { const [x, y] = P(186, 100, 0); text(x, y, 'PARK', 14, .75 * cp, 'middle', 500); }

    // envelope zones stay visible as the frame of reference
    const items = [];
    context.forEach(b => items.push({ ...b, kind: 'ctx' }));
    parkTrees.forEach(([x, y]) => items.push({ x0: x - 2, x1: x + 2, y0: y - 2, y1: y + 2, kind: 'ptree', x, y }));

    // green inner world
    const gV = prog(t, T.green0 - .2, T.green0 + 1.2) * fade;
    if (gV > 0) {
      const green = [[16, 14, 0], [163, 14, 0], [163, 60, 0], [32, 60, 0], [32, 22, 0], [16, 22, 0]];
      path(poly(green), { fill: ('url(#pg' + UID + ')'), fo: gV, noStroke: true });
      path(poly(green), { w: .7, op: .5 * gV, dash: [1.5, 3] });
    }

    const patV = 0;
    if (t < T.s4) {
      MASS.forEach(m => {
        const v = ease(prog(t, T.bar0 + m.d, T.bar0 + m.d + 1.3));
        items.push({ ...m, kind: 'mass', hh: m.h * v, fo: prog(t, T.bar0 + m.d, T.bar0 + m.d + .4) });
      });
      PAVS.forEach(b => {
        const v = ease(prog(t, T.pav0 + b.pav * .3, T.pav0 + b.pav * .3 + 1.1));
        items.push({ ...box4(b.f), p: b.p, kind: 'mass', hh: b.f[4] * v, fo: prog(t, T.pav0 + b.pav * .3, T.pav0 + b.pav * .3 + .4) });
      });
    } else {
      BLD.forEach(b => {
        const v = ease(prog(t, T.split0 + b.d * .6, T.split0 + b.d * .6 + 1.4));
        const g = geo(b, v);
        items.push({ ...g, kind: 'bld', n: b.n, p: b.p, hh: g.h });
      });
    }
    if (t >= T.green0) {
      const tv = prog(t, T.green0, T.green1);
      greenTrees.forEach(([x, y], i) => items.push({ x0: x - 1, x1: x + 1, y0: y - 1, y1: y + 1, kind: 'gtree', x, y, s: easeOut(clamp(tv * 1.6 - i * .05)) }));
    }

    sortItems(items).forEach(it => {
      if (it.kind === 'ctx') box(it, 0, it.h, { op: cop + .4 * win(t, 1.0, T.s1 + .3, .6), w: .8 + .4 * win(t, 1.0, T.s1 + .3, .6), draw: cp });
      else if (it.kind === 'ptree') tree(it.x, it.y, 11, 3.4, { op: cop + .15, draw: cp });
      else if (it.kind === 'mass' || it.kind === 'bld') box(it, 0, it.hh, { pat: it.p, patV, fo: (it.fo ?? 1) * fade, op: fade, floors: 1, w: it.kind === 'bld' ? 1.25 : 1.35 });
      else if (it.kind === 'gtree') tree(it.x, it.y, 10, 3, { s: it.s, op: fade });
    });

    // cut lines where the long mass breaks into grains
    if (t >= T.s4 - .1 && t < T.split0 + .5) {
      const d = ease(prog(t, T.s4, T.cut1));
      const cl = { w: 1.1, dash: [4, 3] };
      const seg = (a, b) => path(line(a, [lerp(a[0], b[0], d), lerp(a[1], b[1], d), lerp(a[2], b[2], d)]), cl);
      seg([61, -18, 48.6], [61, 6, 48.6]); seg([61, 6, 48.6], [61, 6, 0]);
      [104, 140].forEach(x => { seg([x, -14, 36.6], [x, 14, 36.6]); seg([x, 14, 36.6], [x, 14, 0]); });
    }

    // envelope: ghost volumes in step 1, faint outline afterwards
    const envIn = prog(t, T.env0, T.env1);
    envelope(envIn * (t < T.s2 ? 1 : .5) * fade, (1 - prog(t, T.s2 - .4, T.bar0 + .4)) * fade, t < T.s2 + .3);

    // connections to the park
    const ar = i => ease(prog(t, T.green0 + .6 + i * .25, T.green0 + 1.6 + i * .25)) * fade;
    arrow([47, 32, 0], [47, 82, 0], ar(0));
    arrow([105, 30, 0], [105, 82, 0], ar(1));
    arrow([155, 32, 0], [155, 82, 0], ar(2));

    // labels (few, short)
    const l1 = i => win(t, T.env0 + .7 + i * .6, T.s2 + .1, .5);
    label([0, -20, 36.6], -30, -24, 'Max. 36,6 m', l1(0));
    label([64, -20, 48.6], -10, -40, 'Hoogteaccent max. 48,6 m|Accent 48,6 m', l1(1));
    label([152, 60, 33.6], 40, 20, 'Parkzone max. 33,6 m|Parkzone 33,6 m', l1(2));
    const l0 = i => win(t, 1.2 + i * .6, T.s1 + .1, .5);
    label([165, -43, 24], 30, -30, 'Omliggende bebouwing|Omgeving', l0(0));
    label([-30, -9, 18], 10, 60, 'Omliggende bebouwing|Omgeving', l0(1) * (FS < 13 ? 0 : 1));
    label([90, 30, 0], 0, 110, 'Bouwplot|Bouwplot', l0(2));

    const l2 = i => win(t, T.bar1 - .2 + i * 1.6, T.s3 + .1, .5);
    label([61, -6, 48.6], -10, -44, 'Hoogte en bouwvlak optimaal benut|Kaders benut', l2(0));
    label([80, 60, 9], 40, 50, 'Lagere volumes sluiten aan op het park|Lagere volumes', l2(1));

    const l3 = win(t, T.green1 - .6, T.out0, .5) * fade;
    label([105, 46, 0], 50, 70, 'Binnentuin, open naar het park|Binnentuin', l3);

    const l4 = i => win(t, T.prog0 + .2 + i * .5, T.s4 + .1, .5);
    label([122, 0, 36.6], -20, -50, 'Vrije sector huur in de hoofdmassa|Huur', l4(0));
    label([175, 26, 36.6], 30, -36, 'Sociale huur in een eigen blok|Sociaal', l4(1));
    label([133, 48, 18.6], 50, 40, 'Koop aan het park|Koop', l4(2));
    label([23, 41, 33.6], -40, 50, 'Huur in het lagere volume aan de hoek|Huur', l4(3));

    const l5 = win(t, T.split1 - .3, T.s5 + .1, .5);
    label([93, 1, 42.6], -20, -56, 'Korrels met eigen hoogte en adres|Korrels', l5);

    G.innerHTML = out.join('');
  }

  // ---------- panel + headline ----------
  const valsEl = [...$('vals').children];
  valsEl.forEach((li, i) => { li.querySelector('button').addEventListener('click', () => jump(i)); const pr = document.createElement('i'); pr.className = 'pr'; li.appendChild(pr); });
  const hl = $('hl'), hs = $('hs'), hn = $('hn'), headline = $('headline');
  let hlTimer = null;
  function setHeadline(k) {
    headline.style.opacity = 0;
    clearTimeout(hlTimer);
    hlTimer = setTimeout(() => { hn.textContent = '0' + k; hl.textContent = STEPS[k].title; hs.textContent = STEPS[k].text; headline.style.opacity = 1; }, 250);
  }
  let lastKey = '';
  function panel(t) {
    let k = 0; STEPS.forEach((s, i) => { if (t >= s.at) k = i; });
    const end = k < STEPS.length - 1 ? STEPS[k + 1].at : T.out0, pv = prog(t, STEPS[k].at, end);
    valsEl.forEach((li, i) => { li.lastChild.style.width = (i < k ? 100 : i === k ? pv * 100 : 0) + '%'; });
    const key = String(k); if (key === lastKey) return; lastKey = key;
    valsEl.forEach((li, i) => { li.className = i < k ? 'done' : i === k ? 'on' : ''; });
  }

  // ---------- steps ----------
  const stepsEl = $('steps'), dotsEl = $('dots');
  STEPS.forEach((s, i) => {
    const b = document.createElement('button'); b.type = 'button';
    b.innerHTML = `<span class="seg"><i></i></span><span class="cap"><b>${s.title}</b>${s.text}</span>`;
    b.addEventListener('click', () => jump(i)); stepsEl.appendChild(b);
    const d = document.createElement('button'); d.type = 'button'; d.innerHTML = '<span></span>'; d.tabIndex = -1;
    d.addEventListener('click', () => jump(i)); dotsEl.appendChild(d);
  });
  const stepBtns = [...stepsEl.children], dotBtns = [...dotsEl.children], bars = stepBtns.map(b => b.querySelector('i'));
  const ends = STEPS.map((s, i) => i < STEPS.length - 1 ? STEPS[i + 1].at : T.out0);
  let cur = -1;
  function ui(t) {
    let kk = 0; STEPS.forEach((s, i) => { if (t >= s.at) kk = i; });
    if (kk !== cur) {
      cur = kk;
      stepBtns.forEach((b, i) => i === kk ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'));
      dotBtns.forEach((b, i) => i === kk ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'));
      setHeadline(kk);
    }
    bars.forEach((bar, i) => {
      const a = i === 0 && ctxDone ? LOOP - .4 : STEPS[i].at;
      const v = i < kk ? 1 : i > kk ? 0 : prog(t, Math.min(a, ends[i] - .1), ends[i]);
      bar.style.transform = `scaleX(${v.toFixed(3)})`;
    });
  }

  // ---------- loop ----------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = 0, last = null, playing = !reduce, visible = true;
  const playBtn = $('play');
  function setPlaying(p) { playing = p; playBtn.textContent = p ? 'Pauze' : 'Afspelen'; playBtn.setAttribute('aria-pressed', String(!p)); last = null; }
  function size() {
    const w = svg.getBoundingClientRect().width || 1000;
    const want = w < 560 ? VB_NARROW : VB_WIDE; if (want !== VB) setVB(want);
    ppu = w / VB.w; FS = w < 560 ? 11 : 13; setPatterns();
  }
  function frame(now) {
    if (playing && visible) {
      if (last != null) t += Math.min(.05, (now - last) / 1000);
      last = now;
      if (t >= T.ctx1) ctxDone = true;
      if (t >= T.end) t = LOOP;
    } else last = null;
    render(t); panel(t); ui(t);
    requestAnimationFrame(frame);
  }
  function jump(i) {
    const settled = [T.s1 - .3, T.s2 - .3, T.s3 - .3, T.s4 - .3, T.s5 - .3, T.out0 - .3];
    if (reduce) t = settled[i];
    else t = i === 0 ? (ctxDone ? LOOP - .4 : 0) : STEPS[i].at;
    if (i > 0 || reduce) ctxDone = true;
    if (!reduce && !playing) setPlaying(true);
    last = null;
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));
  $('replay').addEventListener('click', () => { ctxDone = false; t = 0; if (!reduce) setPlaying(true); });
  if (reduce) { ctxDone = true; t = T.out0 - .3; setPlaying(false); }
  new ResizeObserver(size).observe(svg); size();
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: .15 }).observe(svg);
  root.__seek = s => { t = s; ctxDone = s >= T.ctx1; setPlaying(false); };
  requestAnimationFrame(frame);
  },
  'herbestemming-transformatie': function (root, UID) {
    const $ = id => root.querySelector('[data-id="' + id + '"]');
  const BG = '#F3F1EC', INK = '#121211';
  const svg = $('scene'), G = $('g'), DEFS = $('defs');
  const AX = 30 * Math.PI / 180, AY = 30 * Math.PI / 180;
  const CA = Math.cos(AX), SA = Math.sin(AX), CB = Math.cos(AY), SB = Math.sin(AY);
  const P = (x, y, z) => [x * CA + y * CB, -x * SA + y * SB - z];
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const easeOut = v => 1 - Math.pow(1 - v, 3);
  const lerp = (a, b, v) => a + (b - a) * v;
  const win = (t, a, b, f = .5) => clamp((t - a) / f) * clamp((b - t) / f);
  const f2 = n => n.toFixed(2);

  // ---------- timeline (s) ----------
  const T = {
    ctx1: 2.2, b0: .5, b1: 2.4,
    s1: 4.8, g0: 5.0, g1: 6.8,
    s2: 10.2, c0: 10.4, c1: 12.4,
    s3: 15.0, f0: 15.2, f1: 16.6, bal0: 16.0, bal1: 17.4, op0: 17.0, op1: 18.4,
    s4: 21.0, gr0: 21.2, gr1: 22.8,
    out0: 29.0, end: 30.0
  };
  const LOOP = .3;
  const STEPS = [
    { at: 0, title: 'Het bestaande gebouw', text: 'Een kantoorgebouw dat zijn oorspronkelijke functie verliest.' },
    { at: T.s1, title: 'De potentie onderzoeken', text: 'Constructie, stramien en verdiepingshoogte bepalen wat het gebouw kan worden.' },
    { at: T.s2, title: 'Transformatiescenario', text: 'Een nieuw programma, bijvoorbeeld wonen, met daglicht tot diep in het gebouw.' },
    { at: T.s3, title: 'Het ontwerp uitontwikkelen', text: 'Nieuwe gevels, eigen buitenruimtes en een optopping waar dat kan.' },
    { at: T.s4, title: 'Een nieuwe toekomst', text: 'Een bestaand gebouw met blijvende waarde voor bewoners en omgeving.' }
  ];

  // ---------- scene (metres, generic) ----------
  const FL = 3.6, H = 21.6;
  const PLOT = [[0, 0], [60, 0], [60, 26], [0, 26]];
  const context = [
    { x0: -28, x1: -8, y0: -6, y1: 12, h: 12 },
    { x0: 66, x1: 88, y0: -4, y1: 24, h: 15 },
    { x0: -4, x1: 30, y0: -32, y1: -14, h: 15 },
    { x0: 34, x1: 70, y0: -32, y1: -14, h: 18 }
  ];
  const trees = [[-10, 36], [6, 36], [22, 36], [38, 36], [54, 36], [70, 36], [86, 36]];
  // the building as four parts: back bar, two wings and the middle (which becomes the courtyard)
  const PARTS = [
    { id: 'back', x0: 0, x1: 60, y0: 0, y1: 10 },
    { id: 'left', x0: 0, x1: 20, y0: 10, y1: 24 },
    { id: 'mid', x0: 20, x1: 40, y0: 10, y1: 24 },
    { id: 'right', x0: 40, x1: 60, y0: 10, y1: 24 }
  ];
  const OPT = { x0: 4, x1: 56, y0: 1.5, y1: 8.5 };
  const BALC = [];
  [[0, 20], [40, 60]].forEach(([a, b]) => { for (let c = a + 4; c < b - 2; c += 6) for (let k = 1; k < 6; k++) BALC.push({ x0: c - 1.8, x1: c + 1.8, y0: 24, y1: 25.6, z: k * FL, k }); });
  const COURT_TREES = [[25, 15], [31, 19], [36, 14], [27, 21]];

  // viewBox (wide + narrow crop)
  function bounds(corners, extra, mx, my) {
    let a0 = 1e9, a1 = -1e9, b0 = 1e9, b1 = -1e9;
    const grow = (x, y, z) => { const [a, b] = P(x, y, z); a0 = Math.min(a0, a); a1 = Math.max(a1, a); b0 = Math.min(b0, b); b1 = Math.max(b1, b); };
    corners.forEach(([x, y]) => grow(x, y, 0)); extra.forEach(p => grow(...p));
    return { x: a0 - mx, y: b0 - my, w: (a1 - a0) + 2 * mx, h: (b1 - b0) + my + 2 };
  }
  const VB_WIDE = bounds([[-32, -32], [92, -32], [-32, 44], [92, 44]], [[0, 0, 25.2], [-4, -32, 15]], 2, 14);
  const VB_NARROW = bounds([[-6, -10], [66, -10], [-6, 34], [66, 34]], [[0, 0, 25.2]], 1, 22);
  let VB = VB_WIDE;
  function setVB(v) {
    VB = v;
    svg.setAttribute('viewBox', `${f2(VB.x)} ${f2(VB.y)} ${f2(VB.w)} ${f2(VB.h)}`);
    svg.style.setProperty('--ar', (VB.w / VB.h).toFixed(3));
  }
  setVB(VB_WIDE);

  // ---------- drawing ----------
  let ppu = 4, out = [], FS = 13;
  const px = n => n / ppu;
  const pts = arr => arr.map(p => { const q = P(...p); return f2(q[0]) + ',' + f2(q[1]); });
  const poly = arr => 'M' + pts(arr).join('L') + 'Z';
  const line = (a, b) => 'M' + pts([a, b]).join('L');
  function path(d, o = {}) {
    let s = `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.noStroke ? 'none' : INK}" stroke-width="${f2(px(o.w ?? 1.2))}" stroke-linejoin="round" stroke-linecap="round"`;
    if (o.fo != null && o.fill) s += ` fill-opacity="${f2(o.fo)}"`;
    if (o.op != null && o.op < 1) s += ` stroke-opacity="${f2(Math.max(0, o.op))}"`;
    if (o.dash) s += ` stroke-dasharray="${f2(px(o.dash[0]))} ${f2(px(o.dash[1]))}"`;
    if (o.draw != null && o.draw < 1) s += ` pathLength="1" stroke-dasharray="${Math.max(0, o.draw).toFixed(3)} 2"`;
    out.push(s + '/>');
  }
  function setPatterns() {
    const w = px(4.5), sw = px(.8), r = px(.85);
    DEFS.innerHTML =
      `<pattern id="ps${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="${f2(w)}" stroke="${INK}" stroke-width="${f2(sw)}" stroke-opacity=".5"/></pattern>` +
      `<pattern id="pg${UID}" patternUnits="userSpaceOnUse" width="${f2(w * 1.6)}" height="${f2(w * 1.6)}"><circle cx="${f2(w * .4)}" cy="${f2(w * .4)}" r="${f2(r * .75)}" fill="${INK}" fill-opacity=".45"/><circle cx="${f2(w * 1.2)}" cy="${f2(w * 1.2)}" r="${f2(r * .75)}" fill="${INK}" fill-opacity=".45"/></pattern>` +
      `<pattern id="pk${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}"><line x1="0" y1="${f2(w / 2)}" x2="${f2(w)}" y2="${f2(w / 2)}" stroke="${INK}" stroke-width="${f2(sw)}" stroke-opacity=".5"/></pattern>` +
      `<pattern id="ph${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}"><circle cx="${f2(w / 2)}" cy="${f2(w / 2)}" r="${f2(r)}" fill="${INK}" fill-opacity=".55"/></pattern>`;
  }
  const PAT = { s: ('url(#ps' + UID + ')'), h: ('url(#ph' + UID + ')'), k: ('url(#pk' + UID + ')') };

  function box(b, z0, z1, o = {}) {
    const { x0, x1, y0, y1 } = b;
    if (z1 - z0 < .05) return;
    const st = { fill: o.fill ?? BG, fo: o.fo ?? 1, w: o.w ?? 1.2, op: o.op, draw: o.draw };
    const fx = [[x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]];
    const fy = [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    const top = [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
    if (o.dash) st.dash = o.dash;
    const side = face => {
      path(poly(face), st);
      if (o.pat && PAT[o.pat] && o.patV > 0) path(poly(face), { fill: PAT[o.pat], fo: o.patV, noStroke: true });
    };
    side(fx); if (o.floors) floorLines(b, z0, z1, 'x', o);
    side(fy); if (o.floors) floorLines(b, z0, z1, 'y', o);
    path(poly(top), { ...st, fill: o.topFill ?? st.fill, fo: o.topFo ?? st.fo });
  }
  function floorLines(b, z0, z1, side, o) {
    const fl = { w: .55, op: (o.op ?? 1) * .3 };
    for (let z = Math.ceil((z0 + .01) / 3) * 3; z < z1 - .4; z += 3) {
      if (side === 'x') path(line([b.x0, b.y0, z], [b.x0, b.y1, z]), fl);
      else path(line([b.x0, b.y1, z], [b.x1, b.y1, z]), fl);
    }
  }
  function tree(x, y, h, r, o = {}) {
    const s = o.s ?? 1; if (s <= .02) return;
    const hh = h * s, rr = r * s;
    path(line([x, y, 0], [x, y, hh - rr]), { w: .8, op: o.op ?? 1, draw: o.draw });
    const [cx, cy] = P(x, y, hh - rr);
    let a = `<circle cx="${f2(cx)}" cy="${f2(cy)}" r="${f2(rr)}" fill="${BG}" stroke="${INK}" stroke-width="${f2(px(.8))}"`;
    if ((o.op ?? 1) < 1) a += ` stroke-opacity="${f2(o.op)}"`;
    if (o.draw != null && o.draw < 1) a += ` pathLength="1" stroke-dasharray="${o.draw.toFixed(3)} 2"`;
    out.push(a + '/>');
  }
  function text(x, y, s, size, op, anchor = 'middle', weight = 400) {
    out.push(`<text x="${f2(x)}" y="${f2(y)}" font-size="${f2(px(size))}" font-weight="${weight}" text-anchor="${anchor}" fill="${INK}" fill-opacity="${f2(op)}" font-family="Instrument Sans, system-ui, sans-serif" stroke="${BG}" stroke-width="${f2(px(3))}" paint-order="stroke">${s}</text>`);
  }
  function label(anchor, dx, dy, txt, v) {
    if (v <= .01) return;
    const parts = txt.split('|'); txt = FS < 13 && parts[1] ? parts[1] : parts[0];
    if (FS < 13) { dx *= .7; dy *= .7; }
    const [ax, ay] = P(...anchor);
    const lx = ax + px(dx), ly = ay + px(dy);
    const reach = easeOut(clamp(v * 1.4));
    const ex = lerp(ax, lx, reach), ey = lerp(ay, ly, reach);
    out.push(`<g opacity="${f2(v)}"><circle cx="${f2(ax)}" cy="${f2(ay)}" r="${f2(px(2.6))}" fill="${INK}"/>`);
    out.push(`<path d="M${f2(ax)},${f2(ay)}L${f2(ex)},${f2(ey)}" stroke="${INK}" stroke-width="${f2(px(.9))}" fill="none"/>`);
    const fs = px(FS), anc = dx < 0 ? 'end' : dx > 0 ? 'start' : 'middle';
    let tx = lx + (dx < 0 ? -px(6) : dx > 0 ? px(6) : 0);
    const ty = dx === 0 ? (dy < 0 ? ly - px(6) : ly + px(6) + fs * .7) : ly + fs * .35;
    const tw = txt.length * fs * .5, pad = px(4);
    if (anc === 'start') tx = Math.min(tx, VB.x + VB.w - tw - pad);
    else if (anc === 'end') tx = Math.max(tx, VB.x + tw + pad);
    else tx = Math.min(Math.max(tx, VB.x + tw / 2 + pad), VB.x + VB.w - tw / 2 - pad);
    out.push(`<text x="${f2(tx)}" y="${f2(ty)}" font-size="${f2(fs)}" text-anchor="${anc}" fill="${INK}" font-family="Instrument Sans, system-ui, sans-serif" stroke="${BG}" stroke-width="${f2(px(4))}" paint-order="stroke" stroke-linejoin="round">${txt}</text></g>`);
  }
  function sortItems(items) {
    const n = items.length, before = items.map(() => []);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const a = items[i], b = items[j];
      const amin = a.x0 * CA + a.y0 * CB, amax = a.x1 * CA + a.y1 * CB, bmin = b.x0 * CA + b.y0 * CB, bmax = b.x1 * CA + b.y1 * CB;
      if (amax <= bmin || bmax <= amin) continue;
      // a is behind b when it lies further right (x) or further back (y)
      if (a.x0 >= b.x1 - 1e-6 || a.y1 <= b.y0 + 1e-6) before[j].push(i);
    }
    const seen = new Array(n).fill(0), order = [];
    const visit = i => { if (seen[i]) return; seen[i] = 1; before[i].forEach(visit); order.push(items[i]); };
    for (let i = 0; i < n; i++) visit(i);
    return order;
  }

  // envelope (bestemmingsplan): zones as ghost volumes with dashed edges
  const ZONES = [
    { x0: 0, x1: 187, y0: -20, y1: 16, h: 36.6 },
    { x0: 163, x1: 187, y0: 16, y1: 60, h: 36.6 },
    { x0: 0, x1: 152, y0: 16, y1: 60, h: 33.6 }
  ];
  function envelope(v, fillV, hi) {
    if (v <= 0) return;
    const o = { fill: BG, fo: .55 * fillV, w: hi ? .9 : .7, op: (hi ? .5 : .22) * v };
    sortItems(ZONES.map(z => ({ ...z }))).forEach(z => box(z, 0, z.h, o));
    const a = ENV.acc;
    box(a, a.z0, a.h, o);
  }


  function arrow(a, b, v, o = {}) {
    if (v <= .01) return;
    const e = [lerp(a[0], b[0], v), lerp(a[1], b[1], v), 0];
    path(line(a, e), { w: 1, op: o.op ?? .9, dash: [4, 3] });
    if (v > .9) {
      const [ex, ey] = P(...e), [sx, sy] = P(...a);
      const ang = Math.atan2(ey - sy, ex - sx), L = px(7);
      const p1 = [ex - L * Math.cos(ang - .45), ey - L * Math.sin(ang - .45)], p2 = [ex - L * Math.cos(ang + .45), ey - L * Math.sin(ang + .45)];
      out.push(`<path d="M${f2(p1[0])},${f2(p1[1])}L${f2(ex)},${f2(ey)}L${f2(p2[0])},${f2(p2[1])}" fill="none" stroke="${INK}" stroke-width="${f2(px(1))}" stroke-opacity="${f2((o.op ?? .9) * prog(v, .9, 1))}" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  }

  // ---------- render ----------
  let ctxDone = false;
  // a rectangle on the front (y = y1) or left (x = x0) face
  function faceRect(b, side, u0, u1, z0, z1, st) {
    const pts = side === 'y'
      ? [[u0, b.y1, z0], [u1, b.y1, z0], [u1, b.y1, z1], [u0, b.y1, z1]]
      : [[b.x0, u0, z0], [b.x0, u1, z0], [b.x0, u1, z1], [b.x0, u0, z1]];
    path(poly(pts), st);
  }
  // office: horizontal ribbon windows per floor
  function ribbons(b, h, v) {
    if (v <= 0) return;
    const st = { w: .7, op: .6 * v };
    for (let z = 0; z < h - .5; z += FL) {
      path(line([b.x0, b.y1, z + 1.1], [b.x1, b.y1, z + 1.1]), st); path(line([b.x0, b.y1, z + 2.7], [b.x1, b.y1, z + 2.7]), st);
      if (b.x0 === 0) { path(line([0, b.y0, z + 1.1], [0, b.y1, z + 1.1]), st); path(line([0, b.y0, z + 2.7], [0, b.y1, z + 2.7]), st); }
    }
  }
  // housing: vertical windows per bay, larger openings in the plinth
  function windows(b, h, v, plinthOnly) {
    if (v <= 0) return;
    const st = { w: .8, op: .75 * v, fill: BG, fo: v };
    const bays = (a, c, step) => { const n = Math.max(1, Math.round((c - a) / step)); const w = (c - a) / n; return [...Array(n)].map((_, i) => a + w * (i + .5)); };
    bays(b.x0, b.x1, 3.6).forEach(c => {
      for (let z = 0; z < h - .5; z += FL) {
        if (plinthOnly && z > 0) break;
        if (z === 0) faceRect(b, 'y', c - 1.4, c + 1.4, .2, 3.0, st);
        else faceRect(b, 'y', c - .7, c + .7, z + .7, z + 2.9, st);
      }
    });
    if (b.x0 === 0 && !plinthOnly) bays(b.y0, b.y1, 3.6).forEach(c => {
      for (let z = FL; z < h - .5; z += FL) faceRect(b, 'x', c - .7, c + .7, z + .7, z + 2.9, st);
    });
  }
  function treeAt(x, y, z, h, r, o = {}) {
    const s = o.s ?? 1; if (s <= .02) return;
    const hh = h * s, rr = r * s;
    path(line([x, y, z], [x, y, z + hh - rr]), { w: .8, op: o.op ?? 1 });
    const [cx, cy] = P(x, y, z + hh - rr);
    out.push(`<circle cx="${f2(cx)}" cy="${f2(cy)}" r="${f2(rr)}" fill="${BG}" stroke="${INK}" stroke-width="${f2(px(.8))}"${(o.op ?? 1) < 1 ? ` stroke-opacity="${f2(o.op)}"` : ''}/>`);
  }
  function render(t) {
    out = [];
    const cp = ctxDone ? 1 : ease(prog(t, 0, T.ctx1));
    const fade = 1 - prog(t, T.out0, T.end - .15);
    const cop = .45;

    // ground: street, plot
    const gl = { w: .8, op: cop, draw: cp };
    path(line([-32, 29, 0], [92, 29, 0]), gl);
    path(line([-32, 32, 0], [92, 32, 0]), gl);
    path(line([-32, 42, 0], [92, 42, 0]), { ...gl, op: cop * .7 });
    path(poly(PLOT.map(([x, y]) => [x, y, 0])), { w: 1.1, op: .8, draw: cp });
    { const [x, y] = P(76, 38, 0); text(x, y + px(4), 'Straat', 12, .6 * cp); }

    const rise = easeOut(prog(t, T.b0, T.b1));
    const cut = ease(prog(t, T.c0, T.c1));
    const fac = ease(prog(t, T.f0, T.f1)) * fade;
    const opt = ease(prog(t, T.op0, T.op1)) * fade;
    const grow = prog(t, T.gr0, T.gr1) * fade;

    const items = [];
    context.forEach(b => items.push({ ...b, kind: 'ctx' }));
    trees.forEach(([x, y]) => items.push({ x0: x - 2, x1: x + 2, y0: y - 2, y1: y + 2, kind: 'tree', x, y }));
    PARTS.forEach(p => {
      const h = p.id === 'mid' ? lerp(H, FL, cut) : H;
      items.push({ ...p, kind: 'part', hh: h * rise });
    });
    if (opt > 0) items.push({ ...OPT, kind: 'opt' });
    BALC.forEach(b => {
      const v = ease(prog(t, T.bal0 + b.k * .12, T.bal0 + b.k * .12 + .8)) * fade;
      if (v > 0) items.push({ ...b, kind: 'balc', v });
    });
    COURT_TREES.forEach(([x, y], i) => items.push({ x0: x - 1, x1: x + 1, y0: y - 1, y1: y + 1, kind: 'ctree', x, y, s: easeOut(clamp(grow * 1.5 - i * .12)) }));

    sortItems(items).forEach(it => {
      if (it.kind === 'ctx') box(it, 0, it.h, { op: cop, w: .8, draw: cp });
      else if (it.kind === 'tree') tree(it.x, it.y, 9, 2.8, { op: cop + .15, draw: cp });
      else if (it.kind === 'part') {
        if (it.hh < .05) return;
        box(it, 0, it.hh, { fo: fade, op: fade });
        // the removed volume of the courtyard as a dashed ghost
        if (it.id === 'mid' && cut > 0 && cut < 1 || it.id === 'mid' && t >= T.c1 && t < T.s3) {
          const gv = it.id === 'mid' ? win(t, T.c0, T.s3, .6) : 0;
          if (gv > 0) box(it, it.hh, H, { fill: null, fo: 0, w: .8, op: .5 * gv, dash: [3, 3] });
        }
        ribbons(it, it.hh, (1 - fac) * fade);
        windows(it, it.hh, fac, it.id === 'mid');
      } else if (it.kind === 'opt') {
        box(it, H, H + FL * opt, { fo: fade, op: fade });
      } else if (it.kind === 'balc') box(it, it.z, it.z + 1.1 * it.v, { fo: it.v, op: it.v, w: .8 });
      else if (it.kind === 'ctree') treeAt(it.x, it.y, FL, 8, 2.6, { s: it.s, op: fade });
    });

    // step 1: the structure revealed (grid and floor heights)
    const gv = win(t, T.g0, T.s2 + .4, .6) * fade;
    if (gv > 0) {
      const d = ease(prog(t, T.g0, T.g1));
      const st = { w: 1, op: .85 * gv, dash: [4, 3] };
      for (let x = 0; x <= 60.01; x += 7.5) path(line([x, 24, 0], [x, 24, H * d]), st);
      for (let y = 0; y <= 24.01; y += 8) path(line([0, y, 0], [0, y, H * d]), st);
      for (let z = FL; z < H; z += FL) path(line([0, 24, z], [60 * d, 24, z]), { w: .9, op: .6 * gv });
    }
    // courtyard ground
    const cg = prog(t, T.c1 - .4, T.c1 + .4) * fade;
    if (cg > 0) path(poly([[21, 11, FL + .01], [39, 11, FL + .01], [39, 23.5, FL + .01], [21, 23.5, FL + .01]]), { w: .7, op: .5 * cg, dash: [1.5, 3] });

    // labels
    const l0 = i => win(t, 1.2 + i * .6, T.s1 + .1, .5);
    label([10, 24, 16], -30, -50, 'Leegstaand kantoorgebouw|Leegstaand kantoor', l0(0));
    label([50, -23, 18], 40, -24, 'Omliggende bebouwing|Omgeving', l0(1));

    const l1 = i => win(t, T.g1 - .6 + i * .6, T.s2 + .2, .5);
    label([37.5, 24, 10], 10, 70, 'Ruim stramien van 7,5 m|Stramien 7,5 m', l1(0));
    label([0, 24, 18], -40, 20, 'Verdiepingshoogte 3,6 m|3,6 m per laag', l1(1));
    label([0, 12, 21.6], -40, -40, 'Diepe vloeren van 24 m|Diepe vloeren', l1(2));

    const l2 = i => win(t, T.c1 - .4 + i * .6, T.s3 + .2, .5);
    label([30, 18, FL], 20, 90, 'Binnenhof voor daglicht en buitenruimte|Binnenhof', l2(0));
    label([45, 5, H], 40, -40, 'Bestaande constructie blijft|Constructie blijft', l2(1));

    const l3 = i => win(t, T.bal1 - .4 + i * .6, T.s4 + .2, .5);
    label([10, 24, 12], -30, 60, 'Woningen met eigen buitenruimte|Buitenruimte', l3(0));
    label([30, 5, H + FL], 20, -44, 'Optopping|Optopping', l3(1));
    label([50, 24, 8], 30, 60, 'Nieuwe gevel met woningritme|Nieuwe gevel', l3(2));

    const l4 = i => win(t, T.gr1 - .4 + i * .6, T.out0, .5) * fade;
    label([30, 17, FL + 4], -10, -70, 'Groene binnenhof|Groen', l4(0));
    label([30, 24, 1.6], 10, 64, 'Plint met voorzieningen|Plint', l4(1));

    G.innerHTML = out.join('');
  }

  // ---------- panel + headline ----------
  const valsEl = [...$('vals').children];
  valsEl.forEach((li, i) => { li.querySelector('button').addEventListener('click', () => jump(i)); const pr = document.createElement('i'); pr.className = 'pr'; li.appendChild(pr); });
  const hl = $('hl'), hs = $('hs'), hn = $('hn'), headline = $('headline');
  let hlTimer = null;
  function setHeadline(k) {
    headline.style.opacity = 0;
    clearTimeout(hlTimer);
    hlTimer = setTimeout(() => { hn.textContent = '0' + k; hl.textContent = STEPS[k].title; hs.textContent = STEPS[k].text; headline.style.opacity = 1; }, 250);
  }
  let lastKey = '';
  function panel(t) {
    let k = 0; STEPS.forEach((s, i) => { if (t >= s.at) k = i; });
    const end = k < STEPS.length - 1 ? STEPS[k + 1].at : T.out0, pv = prog(t, STEPS[k].at, end);
    valsEl.forEach((li, i) => { li.lastChild.style.width = (i < k ? 100 : i === k ? pv * 100 : 0) + '%'; });
    const key = String(k); if (key === lastKey) return; lastKey = key;
    valsEl.forEach((li, i) => { li.className = i < k ? 'done' : i === k ? 'on' : ''; });
  }

  // ---------- steps ----------
  const stepsEl = $('steps'), dotsEl = $('dots');
  STEPS.forEach((s, i) => {
    const b = document.createElement('button'); b.type = 'button';
    b.innerHTML = `<span class="seg"><i></i></span><span class="cap"><b>${s.title}</b>${s.text}</span>`;
    b.addEventListener('click', () => jump(i)); stepsEl.appendChild(b);
    const d = document.createElement('button'); d.type = 'button'; d.innerHTML = '<span></span>'; d.tabIndex = -1;
    d.addEventListener('click', () => jump(i)); dotsEl.appendChild(d);
  });
  const stepBtns = [...stepsEl.children], dotBtns = [...dotsEl.children], bars = stepBtns.map(b => b.querySelector('i'));
  const ends = STEPS.map((s, i) => i < STEPS.length - 1 ? STEPS[i + 1].at : T.out0);
  let cur = -1;
  function ui(t) {
    let kk = 0; STEPS.forEach((s, i) => { if (t >= s.at) kk = i; });
    if (kk !== cur) {
      cur = kk;
      stepBtns.forEach((b, i) => i === kk ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'));
      dotBtns.forEach((b, i) => i === kk ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'));
      setHeadline(kk);
    }
    bars.forEach((bar, i) => {
      const a = i === 0 && ctxDone ? LOOP - .4 : STEPS[i].at;
      const v = i < kk ? 1 : i > kk ? 0 : prog(t, Math.min(a, ends[i] - .1), ends[i]);
      bar.style.transform = `scaleX(${v.toFixed(3)})`;
    });
  }

  // ---------- loop ----------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = 0, last = null, playing = !reduce, visible = true;
  const playBtn = $('play');
  function setPlaying(p) { playing = p; playBtn.textContent = p ? 'Pauze' : 'Afspelen'; playBtn.setAttribute('aria-pressed', String(!p)); last = null; }
  function size() {
    const w = svg.getBoundingClientRect().width || 1000;
    const want = w < 560 ? VB_NARROW : VB_WIDE; if (want !== VB) setVB(want);
    ppu = w / VB.w; FS = w < 560 ? 11 : 13; setPatterns();
  }
  function frame(now) {
    if (playing && visible) {
      if (last != null) t += Math.min(.05, (now - last) / 1000);
      last = now;
      if (t >= T.ctx1) ctxDone = true;
      if (t >= T.end) t = LOOP;
    } else last = null;
    render(t); panel(t); ui(t);
    requestAnimationFrame(frame);
  }
  function jump(i) {
    const settled = [T.s1 - .3, T.s2 - .3, T.s3 - .3, T.s4 - .3, T.out0 - .3];
    if (reduce) t = settled[i];
    else t = i === 0 ? (ctxDone ? LOOP - .4 : 0) : STEPS[i].at;
    if (i > 0 || reduce) ctxDone = true;
    if (!reduce && !playing) setPlaying(true);
    last = null;
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));
  $('replay').addEventListener('click', () => { ctxDone = false; t = 0; if (!reduce) setPlaying(true); });
  if (reduce) { ctxDone = true; t = T.out0 - .3; setPlaying(false); }
  new ResizeObserver(size).observe(svg); size();
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: .15 }).observe(svg);
  root.__seek = s => { t = s; ctxDone = s >= T.ctx1; setPlaying(false); };
  requestAnimationFrame(frame);
  },
  'second-opinion': function (root, UID) {
    const $ = id => root.querySelector('[data-id="' + id + '"]');
  const BG = '#F3F1EC', INK = '#121211';
  const svg = $('scene'), G = $('g'), DEFS = $('defs');
  const AX = 30 * Math.PI / 180, AY = 30 * Math.PI / 180;
  const CA = Math.cos(AX), SA = Math.sin(AX), CB = Math.cos(AY), SB = Math.sin(AY);
  const P = (x, y, z) => [x * CA + y * CB, -x * SA + y * SB - z];
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const easeOut = v => 1 - Math.pow(1 - v, 3);
  const lerp = (a, b, v) => a + (b - a) * v;
  const win = (t, a, b, f = .5) => clamp((t - a) / f) * clamp((b - t) / f);
  const f2 = n => n.toFixed(2);

  // ---------- timeline (s) ----------
  const T = {
    ctx1: 2.2, e0: .6, e1: 2.8,
    s1: 5.2, iss0: 5.4, iss1: 6.8,
    s2: 10.6, gh0: 10.6, gh1: 11.6, rule0: 11.4, rule1: 13.8,
    s3: 16.6, o0: 16.8, o1: 19.4, grid0: 18.2, grid1: 19.8, core0: 18.6, core1: 19.8,
    s4: 22.2, tech0: 22.4, tech1: 24.0,
    out0: 31.0, end: 32.0
  };
  const LOOP = .4;
  const STEPS = [
    { at: 0, title: 'De lopende ontwikkeling', text: 'Een ontwikkeling in voorbereiding, waarvan de businesscase onder druk staat.' },
    { at: T.s1, title: 'Begrijpen wat er misgaat', text: 'Waar zit de inefficiëntie? Bijvoorbeeld in diepe vloeren, veel kernen of een complexe constructie.' },
    { at: T.s2, title: 'De spelregels neerzetten', text: 'Een helder systeem, bijvoorbeeld met een vaste vleugeldiepte, een stramien, vaste kernposities en heldere hoogtes.' },
    { at: T.s3, title: 'Ontwerpen binnen het systeem', text: 'Het volume volgt de spelregels: slanker, rustiger en efficiënter.' },
    { at: T.s4, title: 'Kwaliteit behouden', text: 'Binnen het systeem blijft ruimte voor variatie, daglicht en architectuur.' }
  ];

  // ---------- scene (metres, generic) ----------
  const PLOT = [[0, 0], [86, 0], [86, 54], [0, 54]];
  const context = [
    { x0: -30, x1: -8, y0: -6, y1: 22, h: 18 },
    { x0: 0, x1: 40, y0: -30, y1: -12, h: 21 },
    { x0: 46, x1: 92, y0: -30, y1: -12, h: 18 },
    { x0: 98, x1: 120, y0: -6, y1: 24, h: 15 },
    { x0: 98, x1: 120, y0: 30, y1: 50, h: 12 }
  ];
  const trees = [[-4, 62], [12, 64], [28, 62], [44, 64], [60, 62], [76, 64], [92, 62], [108, 64]];
  // current design: deep floor plates, a cantilever, a penthouse, four cores
  const EX = [
    { x0: 0, x1: 72, y0: 30, y1: 50, z0: 0, h: 21, d: 0 },
    { x0: 52, x1: 72, y0: 0, y1: 30, z0: 0, h: 27, d: .3 },
    { x0: 72, x1: 80, y0: 8, y1: 24, z0: 15, h: 27, d: .6, cant: true },
    { x0: 10, x1: 30, y0: 34, y1: 46, z0: 21, h: 24, d: .9 }
  ];
  const EXCORES = [[12, 40, 21], [38, 40, 21], [62, 42, 21], [62, 12, 27]];
  const DEEP = [[[0, 37], [10, 37], [10, 43], [0, 43], 21], [[30, 37], [72, 37], [72, 43], [30, 43], 21], [[59, 0], [65, 0], [65, 30], [59, 30], 27]];
  // optimised design: slender U, 14 m deep, one grid, two cores
  const OP = [
    { x0: 0, x1: 80, y0: 36, y1: 50, h: 24, d: 0 },
    { x0: 66, x1: 80, y0: 0, y1: 36, h: 27, d: .4 },
    { x0: 0, x1: 14, y0: 10, y1: 36, h: 21, d: .8 }
  ];
  const OPCORES = [[10, 43], [73, 43]];
  const GRID = 7.2;

  // viewBox (wide + narrow crop)
  function bounds(corners, extra, mx, my) {
    let a0 = 1e9, a1 = -1e9, b0 = 1e9, b1 = -1e9;
    const grow = (x, y, z) => { const [a, b] = P(x, y, z); a0 = Math.min(a0, a); a1 = Math.max(a1, a); b0 = Math.min(b0, b); b1 = Math.max(b1, b); };
    corners.forEach(([x, y]) => grow(x, y, 0)); extra.forEach(p => grow(...p));
    return { x: a0 - mx, y: b0 - my, w: (a1 - a0) + 2 * mx, h: (b1 - b0) + my + 2 };
  }
  const VB_WIDE = bounds([[-34, -32], [124, -32], [-34, 72], [124, 72]], [[66, 0, 30], [0, -30, 21]], 2, 10);
  const VB_NARROW = bounds([[-8, -14], [100, -14], [-8, 64], [100, 64]], [[66, 0, 30]], 1, 26);
  let VB = VB_WIDE;
  function setVB(v) {
    VB = v;
    svg.setAttribute('viewBox', `${f2(VB.x)} ${f2(VB.y)} ${f2(VB.w)} ${f2(VB.h)}`);
    svg.style.setProperty('--ar', (VB.w / VB.h).toFixed(3));
  }
  setVB(VB_WIDE);

  // ---------- drawing ----------
  let ppu = 4, out = [], FS = 13;
  const px = n => n / ppu;
  const pts = arr => arr.map(p => { const q = P(...p); return f2(q[0]) + ',' + f2(q[1]); });
  const poly = arr => 'M' + pts(arr).join('L') + 'Z';
  const line = (a, b) => 'M' + pts([a, b]).join('L');
  function path(d, o = {}) {
    let s = `<path d="${d}" fill="${o.fill || 'none'}" stroke="${o.noStroke ? 'none' : INK}" stroke-width="${f2(px(o.w ?? 1.2))}" stroke-linejoin="round" stroke-linecap="round"`;
    if (o.fo != null && o.fill) s += ` fill-opacity="${f2(o.fo)}"`;
    if (o.op != null && o.op < 1) s += ` stroke-opacity="${f2(Math.max(0, o.op))}"`;
    if (o.dash) s += ` stroke-dasharray="${f2(px(o.dash[0]))} ${f2(px(o.dash[1]))}"`;
    if (o.draw != null && o.draw < 1) s += ` pathLength="1" stroke-dasharray="${Math.max(0, o.draw).toFixed(3)} 2"`;
    out.push(s + '/>');
  }
  function setPatterns() {
    const w = px(4.5), sw = px(.8), r = px(.85);
    DEFS.innerHTML =
      `<pattern id="ps${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="${f2(w)}" stroke="${INK}" stroke-width="${f2(sw)}" stroke-opacity=".5"/></pattern>` +
      `<pattern id="pg${UID}" patternUnits="userSpaceOnUse" width="${f2(w * 1.6)}" height="${f2(w * 1.6)}"><circle cx="${f2(w * .4)}" cy="${f2(w * .4)}" r="${f2(r * .75)}" fill="${INK}" fill-opacity=".45"/><circle cx="${f2(w * 1.2)}" cy="${f2(w * 1.2)}" r="${f2(r * .75)}" fill="${INK}" fill-opacity=".45"/></pattern>` +
      `<pattern id="pk${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}"><line x1="0" y1="${f2(w / 2)}" x2="${f2(w)}" y2="${f2(w / 2)}" stroke="${INK}" stroke-width="${f2(sw)}" stroke-opacity=".5"/></pattern>` +
      `<pattern id="ph${UID}" patternUnits="userSpaceOnUse" width="${f2(w)}" height="${f2(w)}"><circle cx="${f2(w / 2)}" cy="${f2(w / 2)}" r="${f2(r)}" fill="${INK}" fill-opacity=".55"/></pattern>`;
  }
  const PAT = { s: ('url(#ps' + UID + ')'), h: ('url(#ph' + UID + ')'), k: ('url(#pk' + UID + ')') };

  function box(b, z0, z1, o = {}) {
    const { x0, x1, y0, y1 } = b;
    if (z1 - z0 < .05) return;
    const st = { fill: o.fill ?? BG, fo: o.fo ?? 1, w: o.w ?? 1.2, op: o.op, draw: o.draw };
    const fx = [[x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]];
    const fy = [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    const top = [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
    if (o.dash) st.dash = o.dash;
    const side = face => {
      path(poly(face), st);
      if (o.pat && PAT[o.pat] && o.patV > 0) path(poly(face), { fill: PAT[o.pat], fo: o.patV, noStroke: true });
    };
    side(fx); if (o.floors) floorLines(b, z0, z1, 'x', o);
    side(fy); if (o.floors) floorLines(b, z0, z1, 'y', o);
    path(poly(top), { ...st, fill: o.topFill ?? st.fill, fo: o.topFo ?? st.fo });
  }
  function floorLines(b, z0, z1, side, o) {
    const fl = { w: .55, op: (o.op ?? 1) * .3 };
    for (let z = Math.ceil((z0 + .01) / 3) * 3; z < z1 - .4; z += 3) {
      if (side === 'x') path(line([b.x0, b.y0, z], [b.x0, b.y1, z]), fl);
      else path(line([b.x0, b.y1, z], [b.x1, b.y1, z]), fl);
    }
  }
  function tree(x, y, h, r, o = {}) {
    const s = o.s ?? 1; if (s <= .02) return;
    const hh = h * s, rr = r * s;
    path(line([x, y, 0], [x, y, hh - rr]), { w: .8, op: o.op ?? 1, draw: o.draw });
    const [cx, cy] = P(x, y, hh - rr);
    let a = `<circle cx="${f2(cx)}" cy="${f2(cy)}" r="${f2(rr)}" fill="${BG}" stroke="${INK}" stroke-width="${f2(px(.8))}"`;
    if ((o.op ?? 1) < 1) a += ` stroke-opacity="${f2(o.op)}"`;
    if (o.draw != null && o.draw < 1) a += ` pathLength="1" stroke-dasharray="${o.draw.toFixed(3)} 2"`;
    out.push(a + '/>');
  }
  function text(x, y, s, size, op, anchor = 'middle', weight = 400) {
    out.push(`<text x="${f2(x)}" y="${f2(y)}" font-size="${f2(px(size))}" font-weight="${weight}" text-anchor="${anchor}" fill="${INK}" fill-opacity="${f2(op)}" font-family="Instrument Sans, system-ui, sans-serif" stroke="${BG}" stroke-width="${f2(px(3))}" paint-order="stroke">${s}</text>`);
  }
  function label(anchor, dx, dy, txt, v) {
    if (v <= .01) return;
    const parts = txt.split('|'); txt = FS < 13 && parts[1] ? parts[1] : parts[0];
    if (FS < 13) { dx *= .7; dy *= .7; }
    const [ax, ay] = P(...anchor);
    const lx = ax + px(dx), ly = ay + px(dy);
    const reach = easeOut(clamp(v * 1.4));
    const ex = lerp(ax, lx, reach), ey = lerp(ay, ly, reach);
    out.push(`<g opacity="${f2(v)}"><circle cx="${f2(ax)}" cy="${f2(ay)}" r="${f2(px(2.6))}" fill="${INK}"/>`);
    out.push(`<path d="M${f2(ax)},${f2(ay)}L${f2(ex)},${f2(ey)}" stroke="${INK}" stroke-width="${f2(px(.9))}" fill="none"/>`);
    const fs = px(FS), anc = dx < 0 ? 'end' : dx > 0 ? 'start' : 'middle';
    let tx = lx + (dx < 0 ? -px(6) : dx > 0 ? px(6) : 0);
    const ty = dx === 0 ? (dy < 0 ? ly - px(6) : ly + px(6) + fs * .7) : ly + fs * .35;
    const tw = txt.length * fs * .5, pad = px(4);
    if (anc === 'start') tx = Math.min(tx, VB.x + VB.w - tw - pad);
    else if (anc === 'end') tx = Math.max(tx, VB.x + tw + pad);
    else tx = Math.min(Math.max(tx, VB.x + tw / 2 + pad), VB.x + VB.w - tw / 2 - pad);
    out.push(`<text x="${f2(tx)}" y="${f2(ty)}" font-size="${f2(fs)}" text-anchor="${anc}" fill="${INK}" font-family="Instrument Sans, system-ui, sans-serif" stroke="${BG}" stroke-width="${f2(px(4))}" paint-order="stroke" stroke-linejoin="round">${txt}</text></g>`);
  }
  function sortItems(items) {
    const n = items.length, before = items.map(() => []);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const a = items[i], b = items[j];
      const amin = a.x0 * CA + a.y0 * CB, amax = a.x1 * CA + a.y1 * CB, bmin = b.x0 * CA + b.y0 * CB, bmax = b.x1 * CA + b.y1 * CB;
      if (amax <= bmin || bmax <= amin) continue;
      // a is behind b when it lies further right (x) or further back (y)
      if (a.x0 >= b.x1 - 1e-6 || a.y1 <= b.y0 + 1e-6) before[j].push(i);
    }
    const seen = new Array(n).fill(0), order = [];
    const visit = i => { if (seen[i]) return; seen[i] = 1; before[i].forEach(visit); order.push(items[i]); };
    for (let i = 0; i < n; i++) visit(i);
    return order;
  }

  // envelope (bestemmingsplan): zones as ghost volumes with dashed edges
  const ZONES = [
    { x0: 0, x1: 187, y0: -20, y1: 16, h: 36.6 },
    { x0: 163, x1: 187, y0: 16, y1: 60, h: 36.6 },
    { x0: 0, x1: 152, y0: 16, y1: 60, h: 33.6 }
  ];
  function envelope(v, fillV, hi) {
    if (v <= 0) return;
    const o = { fill: BG, fo: .55 * fillV, w: hi ? .9 : .7, op: (hi ? .5 : .22) * v };
    sortItems(ZONES.map(z => ({ ...z }))).forEach(z => box(z, 0, z.h, o));
    const a = ENV.acc;
    box(a, a.z0, a.h, o);
  }


  function arrow(a, b, v, o = {}) {
    if (v <= .01) return;
    const e = [lerp(a[0], b[0], v), lerp(a[1], b[1], v), 0];
    path(line(a, e), { w: 1, op: o.op ?? .9, dash: [4, 3] });
    if (v > .9) {
      const [ex, ey] = P(...e), [sx, sy] = P(...a);
      const ang = Math.atan2(ey - sy, ex - sx), L = px(7);
      const p1 = [ex - L * Math.cos(ang - .45), ey - L * Math.sin(ang - .45)], p2 = [ex - L * Math.cos(ang + .45), ey - L * Math.sin(ang + .45)];
      out.push(`<path d="M${f2(p1[0])},${f2(p1[1])}L${f2(ex)},${f2(ey)}L${f2(p2[0])},${f2(p2[1])}" fill="none" stroke="${INK}" stroke-width="${f2(px(1))}" stroke-opacity="${f2((o.op ?? .9) * prog(v, .9, 1))}" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  }

  // ---------- render ----------
  let ctxDone = false;
  function core(cx, cy, z, v, o = {}) {
    if (v <= 0) return;
    box({ x0: cx - 2.5, x1: cx + 2.5, y0: cy - 3, y1: cy + 3 }, z, z + 3.2 * v, { fill: INK, fo: .82 * (o.op ?? 1), topFill: INK, topFo: .5 * (o.op ?? 1), w: .8, op: o.op ?? 1 });
  }
  // vertical grid lines on the visible faces of a box (structure / facade modules)
  function faceLines(b, z1, step, o) {
    const st = { w: o.w ?? .7, op: o.op };
    for (let x = b.x0 + step; x < b.x1 - .5; x += step) path(line([x, b.y1, 0], [x, b.y1, z1 * o.v]), st);
    for (let y = b.y0 + step; y < b.y1 - .5; y += step) path(line([b.x0, y, 0], [b.x0, y, z1 * o.v]), st);
  }
  function render(t) {
    out = [];
    const cp = ctxDone ? 1 : ease(prog(t, 0, T.ctx1));
    const fade = 1 - prog(t, T.out0, T.end - .15);
    const cop = .45;

    // ground: street, plot
    const gl = { w: .8, op: cop, draw: cp };
    path(line([-34, 57, 0], [124, 57, 0]), gl);
    path(line([-34, 60, 0], [124, 60, 0]), gl);
    path(line([-34, 70, 0], [124, 70, 0]), { ...gl, op: cop * .7 });
    path(poly(PLOT.map(([x, y]) => [x, y, 0])), { w: 1.1, op: .8, draw: cp });
    { const [x, y] = P(30, 66, 0); text(x, y + px(4), 'Straat', 12, .6 * cp); }

    const items = [];
    context.forEach(b => items.push({ ...b, kind: 'ctx' }));
    trees.forEach(([x, y]) => items.push({ x0: x - 2, x1: x + 2, y0: y - 2, y1: y + 2, kind: 'tree', x, y }));

    // current design
    const ghost = ease(prog(t, T.gh0, T.gh1));
    const gone = 1 - prog(t, T.rule0 + .4, T.rule1);
    if (gone > 0) EX.forEach(b => {
      const vv = ease(prog(t, T.e0 + b.d, T.e0 + b.d + 1.4));
      items.push({ ...b, kind: 'ex', hh: b.z0 + (b.h - b.z0) * vv, ghost, gone });
    });
    // optimised design
    if (t >= T.o0) OP.forEach(b => {
      const v = ease(prog(t, T.o0 + b.d, T.o0 + b.d + 1.6));
      items.push({ ...b, kind: 'op', hh: b.h * v, fo: prog(t, T.o0 + b.d, T.o0 + b.d + .4) });
    });

    const issV = win(t, T.iss0, T.s2 + .4, .6);
    const gridV = ease(prog(t, T.grid0, T.grid1)) * fade;
    const techV = ease(prog(t, T.tech0, T.tech1)) * fade;
    sortItems(items).forEach(it => {
      if (it.kind === 'ctx') box(it, 0, it.h, { op: cop, w: .8, draw: cp });
      else if (it.kind === 'tree') tree(it.x, it.y, 9, 2.8, { op: cop + .15, draw: cp });
      else if (it.kind === 'ex') {
        const g = it.ghost, op = (1 - .6 * g) * it.gone;
        if (it.hh - it.z0 > .05) box(it, it.z0, it.hh, { fo: g >= 1 ? 0 : (1 - g) * it.gone, op, floors: 1, dash: it.cant && issV > .05 ? [4, 3] : null, w: it.cant ? 1.25 + .5 * issV : 1.25 });
      } else if (it.kind === 'op') {
        if (it.hh > .05) {
          box(it, 0, it.hh, { fo: it.fo * fade, op: fade, floors: 1 });
          if (gridV > 0) faceLines(it, it.hh, GRID, { w: .9, op: .75 * fade, v: gridV });
          if (techV > 0) faceLines(it, it.hh, GRID / 2, { w: .5, op: .3 * fade, v: techV });
        }
      }
    });

    // the rules of the system: footprint, depth, grid, core positions and heights (wireframe)
    const ruleV = ease(prog(t, T.rule0, T.rule1)) * (1 - prog(t, T.o0, T.o0 + 1.4)) * fade;
    if (ruleV > 0) {
      const wf = (b, h, st) => {
        const { x0, x1, y0, y1 } = b, c = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
        c.forEach((p, i) => { const q = c[(i + 1) % 4]; path(line([...p, 0], [...q, 0]), st); path(line([...p, h], [...q, h]), st); path(line([...p, 0], [...p, h]), st); });
      };
      const d1 = prog(ruleV, 0, .4), d2 = prog(ruleV, .3, .7), d3 = prog(ruleV, .6, 1);
      OP.forEach(b => {
        for (let x = Math.ceil(b.x0 / GRID) * GRID; x <= b.x1 + .01; x += GRID) path(line([x, b.y0, 0], [x, b.y1, 0]), { w: .7, op: .55 * d1, dash: [1.5, 2.5] });
        for (let y = Math.ceil(b.y0 / GRID) * GRID; y <= b.y1 + .01; y += GRID) path(line([b.x0, y, 0], [b.x1, y, 0]), { w: .7, op: .55 * d1, dash: [1.5, 2.5] });
        path(poly([[b.x0, b.y0, 0], [b.x1, b.y0, 0], [b.x1, b.y1, 0], [b.x0, b.y1, 0]]), { w: 1.4, op: .9 * d1 });
        if (d3 > 0) wf(b, b.h * d3, { w: .9, op: .7 * d3, dash: [4, 3] });
      });
      OPCORES.forEach(([x, y]) => { if (d2 > 0) wf({ x0: x - 2.5, x1: x + 2.5, y0: y - 3, y1: y + 3 }, 24 * d2, { w: 1, op: .85 * d2 }); });
    }

    // deep floor plates: hatch the dark middle strip on the roofs (issue)
    const exOn = gone * (1 - ghost);
    if (issV * exOn > 0) DEEP.forEach(([a, b, c, d, z]) => {
      const pg = [[...a, z], [...b, z], [...c, z], [...d, z]];
      path(poly(pg), { fill: ('url(#ps' + UID + ')'), fo: issV * exOn, noStroke: true });
      path(poly(pg), { w: .8, op: .8 * issV * exOn, dash: [3, 3] });
    });
    // cores of the current design on the roofs
    const exCoreV = ease(prog(t, T.e1 - .4, T.e1 + .4)) * exOn;
    EXCORES.forEach(([x, y, z]) => core(x, y, z, exCoreV, { op: exOn }));
    // cores of the optimised design
    const opCoreV = ease(prog(t, T.core0, T.core1)) * fade;
    OPCORES.forEach(([x, y]) => core(x, y, 24, opCoreV, { op: fade }));
    // technical: stacked shafts and compact roof plant
    if (techV > 0) {
      [[18, 50], [46, 50], [80, 20]].forEach(([x, y], i) => {
        const h = OP[i === 2 ? 1 : 0].h;
        const xx = i === 2 ? 66 : x, yy = i === 2 ? y : 50;
        path(line([xx, yy, 0], [xx, yy, h * techV]), { w: 1.1, op: .8 * fade, dash: [3, 2] });
      });
      box({ x0: 34, x1: 46, y0: 39, y1: 46 }, 24, 24 + 2 * techV, { w: .8, op: fade, fo: fade });
    }

    // labels
    const l0 = i => win(t, 1.6 + i * .6, T.s1 + .1, .5);
    label([36, 50, 21], -20, -60, 'Lopende ontwikkeling|Lopende ontwikkeling', l0(0));
    label([40, -21, 21], 30, -30, 'Omliggende bebouwing|Omgeving', l0(1));

    const l1 = i => win(t, T.iss0 + .4 + i * .6, T.s2 + .2, .5);
    label([50, 40, 21], -20, -70, 'Diepe vloeren|Diepe vloeren', l1(0));
    label([38, 40, 24.2], -60, -30, 'Veel kernen|Veel kernen', l1(1));
    label([76, 24, 18], 60, 20, 'Complexe constructie|Complexe constructie', l1(2));
    label([20, 46, 24], -50, 30, 'Onrustige opbouw|Onrustige opbouw', l1(3));

    const l2 = i => win(t, T.rule0 + .6 + i * .7, T.s3 + .2, .5);
    label([40, 50, 0], -10, 70, 'Vaste vleugeldiepte|Vaste diepte', l2(0));
    label([7, 28.8, 0], -50, 40, 'Vast stramien|Stramien', l2(1));
    label([73, 43, 24], 50, -30, 'Vaste kernposities|Kernposities', l2(2));
    label([80, 0, 27], 40, -30, 'Heldere hoogtes|Heldere hoogtes', l2(3));

    const l3 = i => win(t, T.o1 - .4 + i * .7, T.s4 + .2, .5);
    label([40, 50, 12], -10, 70, 'Slanker en rustiger volume|Slanker volume', l3(0));
    label([73, 43, 27.2], 50, -30, 'Minder kernen|Minder kernen', l3(1));
    label([28.8, 50, 20], -40, -50, 'Eén stramien|Eén stramien', l3(2));

    const l4 = i => win(t, T.tech1 - .4 + i * .6, T.out0, .5) * fade;
    label([54, 50, 10], 20, 70, 'Variatie binnen het systeem|Variatie', l4(0));
    label([18, 50, 18], -50, 40, 'Prefabricage en herhaling|Prefab', l4(1));
    label([40, 42, 26], -30, -50, 'Gestapelde installaties|Installaties', l4(2));

    G.innerHTML = out.join('');
  }

  // ---------- panel + headline ----------
  const valsEl = [...$('vals').children];
  valsEl.forEach((li, i) => { li.querySelector('button').addEventListener('click', () => jump(i)); const pr = document.createElement('i'); pr.className = 'pr'; li.appendChild(pr); });
  const hl = $('hl'), hs = $('hs'), hn = $('hn'), headline = $('headline');
  let hlTimer = null;
  function setHeadline(k) {
    headline.style.opacity = 0;
    clearTimeout(hlTimer);
    hlTimer = setTimeout(() => { hn.textContent = '0' + k; hl.textContent = STEPS[k].title; hs.textContent = STEPS[k].text; headline.style.opacity = 1; }, 250);
  }
  let lastKey = '';
  function panel(t) {
    let k = 0; STEPS.forEach((s, i) => { if (t >= s.at) k = i; });
    const end = k < STEPS.length - 1 ? STEPS[k + 1].at : T.out0, pv = prog(t, STEPS[k].at, end);
    valsEl.forEach((li, i) => { li.lastChild.style.width = (i < k ? 100 : i === k ? pv * 100 : 0) + '%'; });
    const key = String(k); if (key === lastKey) return; lastKey = key;
    valsEl.forEach((li, i) => { li.className = i < k ? 'done' : i === k ? 'on' : ''; });
  }

  // ---------- steps ----------
  const stepsEl = $('steps'), dotsEl = $('dots');
  STEPS.forEach((s, i) => {
    const b = document.createElement('button'); b.type = 'button';
    b.innerHTML = `<span class="seg"><i></i></span><span class="cap"><b>${s.title}</b>${s.text}</span>`;
    b.addEventListener('click', () => jump(i)); stepsEl.appendChild(b);
    const d = document.createElement('button'); d.type = 'button'; d.innerHTML = '<span></span>'; d.tabIndex = -1;
    d.addEventListener('click', () => jump(i)); dotsEl.appendChild(d);
  });
  const stepBtns = [...stepsEl.children], dotBtns = [...dotsEl.children], bars = stepBtns.map(b => b.querySelector('i'));
  const ends = STEPS.map((s, i) => i < STEPS.length - 1 ? STEPS[i + 1].at : T.out0);
  let cur = -1;
  function ui(t) {
    let kk = 0; STEPS.forEach((s, i) => { if (t >= s.at) kk = i; });
    if (kk !== cur) {
      cur = kk;
      stepBtns.forEach((b, i) => i === kk ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'));
      dotBtns.forEach((b, i) => i === kk ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'));
      setHeadline(kk);
    }
    bars.forEach((bar, i) => {
      const a = i === 0 && ctxDone ? LOOP - .4 : STEPS[i].at;
      const v = i < kk ? 1 : i > kk ? 0 : prog(t, Math.min(a, ends[i] - .1), ends[i]);
      bar.style.transform = `scaleX(${v.toFixed(3)})`;
    });
  }

  // ---------- loop ----------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = 0, last = null, playing = !reduce, visible = true;
  const playBtn = $('play');
  function setPlaying(p) { playing = p; playBtn.textContent = p ? 'Pauze' : 'Afspelen'; playBtn.setAttribute('aria-pressed', String(!p)); last = null; }
  function size() {
    const w = svg.getBoundingClientRect().width || 1000;
    const want = w < 560 ? VB_NARROW : VB_WIDE; if (want !== VB) setVB(want);
    ppu = w / VB.w; FS = w < 560 ? 11 : 13; setPatterns();
  }
  function frame(now) {
    if (playing && visible) {
      if (last != null) t += Math.min(.05, (now - last) / 1000);
      last = now;
      if (t >= T.ctx1) ctxDone = true;
      if (t >= T.end) t = LOOP;
    } else last = null;
    render(t); panel(t); ui(t);
    requestAnimationFrame(frame);
  }
  function jump(i) {
    const settled = [T.s1 - .3, T.s2 - .3, T.s3 - .3, T.s4 - .3, T.out0 - .3];
    if (reduce) t = settled[i];
    else t = i === 0 ? (ctxDone ? LOOP - .4 : 0) : STEPS[i].at;
    if (i > 0 || reduce) ctxDone = true;
    if (!reduce && !playing) setPlaying(true);
    last = null;
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));
  $('replay').addEventListener('click', () => { ctxDone = false; t = 0; if (!reduce) setPlaying(true); });
  if (reduce) { ctxDone = true; t = T.out0 - .3; setPlaying(false); }
  new ResizeObserver(size).observe(svg); size();
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: .15 }).observe(svg);
  root.__seek = s => { t = s; ctxDone = s >= T.ctx1; setPlaying(false); };
  requestAnimationFrame(frame);
  },
  'supervisie-welstandsregie': function (root, UID) {
    const $ = id => root.querySelector('[data-id="' + id + '"]');
  const BG = '#F3F1EC', INK = '#121211', GREY = '#5F5B54', RULE = '#CFCAC0';
  const svg = $('scene'), G = $('g');
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const easeOut = v => 1 - Math.pow(1 - v, 3);
  const lerp = (a, b, v) => a + (b - a) * v;
  const win = (t, a, b, f = .5) => clamp((t - a) / f) * clamp((b - t) / f);
  const f1 = n => n.toFixed(1);

  // ---------- timeline (s) ----------
  const T = {
    s1: 0, tl0: .3, tl1: 2.2, cal0: 1.6, cal1: 3.4,
    s2: 5.6, yre0: 5.8, team0: 6.4, team1: 8.2,
    s3: 11.0, doc0: 11.2, doc1: 13.6,
    s4: 16.4, com0: 16.6, com1: 18.4, meet0: 18.6,
    s5: 22.6, run0: 22.8, run1: 27.0,
    out0: 31.0, end: 32.0
  };
  const LOOP = 0;
  const ctxDone = true;
  const STEPS = [
    { at: T.s1, title: 'Heldere procesafspraken', text: 'Vaste momenten met supervisie en welstand, gekoppeld aan de ontwerpfasen.' },
    { at: T.s2, title: 'Ontwerpteam inhoudelijk aansturen', text: 'Wij sturen architect, landschapsontwerper en adviseurs aan op één lijn.' },
    { at: T.s3, title: 'Overtuigende onderbouwing', text: 'Ruimtelijk concept, beeldkwaliteit, programma en businesscase samengebracht in één helder verhaal.' },
    { at: T.s4, title: 'Tijdige afstemming en deelname', text: 'Vooroverleg en actieve deelname aan de commissiebesprekingen.' },
    { at: T.s5, title: 'Voortgang en besluitvorming bewaakt', text: 'We bewaken de voortgang en werken per fase toe naar een helder besluit.' }
  ];

  // ---------- layouts ----------
  const LAYOUT = {
    wide: {
      vb: [0, 0, 1000, 690], fs: 17, fsS: 14, fsH: 13,
      yre: [500, 215, 64],
      teamHead: [150, 82], team: [[150, 140], [150, 215], [150, 290]], nodeW: 230,
      comHead: [850, 120], com: [[850, 178], [850, 252]],
      doc: [500, 318], docW: 290,
      tl: { x0: 90, x1: 910, y: 612 }
    },
    narrow: {
      vb: [0, 0, 600, 1100], fs: 24, fsS: 20, fsH: 18,
      yre: [300, 330, 70],
      teamHead: [300, 40], team: [[110, 112], [300, 112], [490, 112]], nodeW: 176,
      comHead: [300, 740], com: [[160, 800], [440, 800]], comW: 240,
      doc: [300, 430], docW: 380,
      tl: { x0: 60, x1: 540, y: 990 }
    }
  };
  let L = LAYOUT.wide, narrow = false;
  function setLayout(n) {
    narrow = n; L = n ? LAYOUT.narrow : LAYOUT.wide;
    svg.setAttribute('viewBox', L.vb.join(' '));
    svg.style.setProperty('--ar', (L.vb[2] / L.vb[3]).toFixed(3));
  }
  setLayout(false);

  const TEAM = [['Architect', 'architectuur'], ['Landschap', 'buitenruimte'], ['Adviseurs', 'techniek en kosten']];
  const COM = [['Supervisor', 'samenhang in het plan'], ['Welstand', 'beeldkwaliteit']];
  const DOC = ['Ruimtelijk concept', 'Beeldkwaliteit', 'Programma', 'Businesscase'];
  const PHASES = ['Schetsontwerp', 'Voorlopig ontwerp', 'Definitief ontwerp', 'Vergunning'];
  const PHASES_S = ['SO', 'VO', 'DO', 'Vergunning'];

  // ---------- drawing ----------
  let out = [];
  const esc = s => s.replace(/&/g, '&amp;');
  function txt(x, y, s, o = {}) {
    out.push(`<text x="${f1(x)}" y="${f1(y)}" font-size="${o.size || L.fs}" font-weight="${o.weight || 400}" text-anchor="${o.anchor || 'middle'}" fill="${o.fill || INK}" fill-opacity="${(o.op ?? 1).toFixed(2)}" font-family="${o.display ? "Archivo, 'Instrument Sans', sans-serif" : "'Instrument Sans', system-ui, sans-serif"}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}>${esc(s)}</text>`);
  }
  function ln(x0, y0, x1, y1, o = {}) {
    out.push(`<path d="M${f1(x0)},${f1(y0)}L${f1(x1)},${f1(y1)}" stroke="${o.stroke || INK}" stroke-width="${o.w || 1.2}" fill="none" stroke-linecap="round" stroke-opacity="${(o.op ?? 1).toFixed(2)}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  }
  function node(x, y, w, h, title, sub, v, o = {}) {
    if (v <= .01) return;
    const s = .92 + .08 * easeOut(v);
    out.push(`<g opacity="${v.toFixed(2)}" transform="translate(${f1(x)},${f1(y)}) scale(${s.toFixed(3)})">`);
    out.push(`<rect x="${f1(-w / 2)}" y="${f1(-h / 2)}" width="${f1(w)}" height="${f1(h)}" rx="${f1(h / 2)}" fill="${o.fill || BG}" stroke="${INK}" stroke-width="${o.w || 1.2}"/>`);
    if (sub && !narrow) {
      txt(0, -2, title, { size: L.fs, weight: 600, display: true, fill: o.fill === INK ? BG : INK });
      txt(0, 16, sub, { size: L.fsS - 2, fill: o.fill === INK ? '#D6D2CA' : GREY });
    } else txt(0, L.fs * .36, title, { size: L.fs, weight: 600, display: true, fill: o.fill === INK ? BG : INK });
    out.push('</g>');
  }
  // connection with a travelling pulse
  function conn(a, b, v, t, o = {}) {
    if (v <= .01) return;
    const ex = lerp(a[0], b[0], v), ey = lerp(a[1], b[1], v);
    ln(a[0], a[1], ex, ey, { w: 1.1, op: .8, dash: o.dash });
    if (v >= 1 && o.pulse) {
      [0, .5].forEach(off => {
        let p = ((t * (o.speed || .45)) + off + (o.phase || 0)) % 1;
        if (o.back) p = 1 - p;
        out.push(`<circle cx="${f1(lerp(a[0], b[0], p))}" cy="${f1(lerp(a[1], b[1], p))}" r="${narrow ? 5 : 3.6}" fill="${INK}" opacity="${(o.pop ?? .9).toFixed(2)}"/>`);
      });
    }
  }
  function head(x, y, s, v) { if (v > .01) txt(x, y, s.toUpperCase(), { size: L.fsH, fill: GREY, op: v, ls: '1.2' }); }
  function check(x, y, r, v) {
    if (v <= .01) return;
    out.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${INK}" opacity="${v.toFixed(2)}"/>`);
    out.push(`<path d="M${f1(x - r * .42)},${f1(y)}L${f1(x - r * .08)},${f1(y + r * .36)}L${f1(x + r * .45)},${f1(y - r * .34)}" stroke="${BG}" stroke-width="${narrow ? 3 : 2}" fill="none" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="${clamp(v * 1.4 - .3).toFixed(2)} 2"/>`);
  }

  // ---------- render ----------
  function render(t) {
    out = [];
    const fade = 1 - prog(t, T.out0, T.end - .15);
    const tl = L.tl, n = PHASES.length;
    const mx = i => lerp(tl.x0 + (tl.x1 - tl.x0) / (n * 2), tl.x1 - (tl.x1 - tl.x0) / (n * 2), i / (n - 1));

    // 01 timeline with phases and fixed commission moments
    const tlv = ease(prog(t, T.tl0, T.tl1)) * fade;
    if (tlv > .01) txt(narrow ? 300 : tl.x0, tl.y - (narrow ? 104 : 84), 'ONTWERPPROCES', { size: L.fsH, fill: GREY, op: tlv, ls: '1.2', anchor: narrow ? 'middle' : 'start' });
    if (!narrow) out.push(`<g opacity="${tlv.toFixed(2)}"></g>`);
    ln(tl.x0, tl.y, lerp(tl.x0, tl.x1, tlv), tl.y, { w: 1.4, op: .35 });
    const run = ease(prog(t, T.run0, T.run1)) * fade;
    if (run > 0) ln(tl.x0, tl.y, lerp(tl.x0, tl.x1, run), tl.y, { w: 2.6 });
    PHASES.forEach((p, i) => {
      const v = ease(prog(t, T.tl0 + .3 + i * .3, T.tl0 + 1 + i * .3)) * fade;
      if (v <= 0) return;
      const x = mx(i);
      out.push(`<circle cx="${f1(x)}" cy="${tl.y}" r="${narrow ? 9 : 7}" fill="${BG}" stroke="${INK}" stroke-width="1.4" opacity="${v.toFixed(2)}"/>`);
      txt(x, tl.y + (narrow ? 44 : 34), narrow ? PHASES_S[i] : p, { size: L.fsS, op: v });
      // fixed commission moment above each phase
      const cv = ease(prog(t, T.cal0 + i * .3, T.cal0 + .8 + i * .3)) * fade;
      if (cv > 0) {
        const cy = tl.y - (narrow ? 44 : 36);
        ln(x, tl.y - (narrow ? 9 : 7), x, cy + 9, { w: 1, op: .6 * cv, dash: '3 3' });
        out.push(`<rect x="${f1(x - 9)}" y="${f1(cy - 9)}" width="18" height="18" rx="2" fill="${BG}" stroke="${INK}" stroke-width="1.2" opacity="${cv.toFixed(2)}"/>`);
        ln(x - 9, cy - 3, x + 9, cy - 3, { w: 1.2, op: cv });
      }
      // decision check when the progress passes the phase
      const pass = (i + .5) / n;
      check(x, tl.y, narrow ? 13 : 11, prog(run, pass - .04, pass + .06));
    });
    if (tlv > .5 && !narrow) {
      const lv = win(t, T.cal1 - .6, T.s2 + .4, .5);
      if (lv > 0) txt((tl.x0 + tl.x1) / 2, tl.y - 66, 'Vaste momenten met supervisie en welstand', { size: L.fsS, op: lv });
    }

    // 02 Y/RE and the design team
    const [yx, yy, yr] = L.yre;
    const yv = ease(prog(t, T.yre0, T.yre0 + 1)) * fade;
    const teamV = i => ease(prog(t, T.team0 + i * .3, T.team0 + .9 + i * .3)) * fade;
    const connV = i => ease(prog(t, T.team0 + .5 + i * .3, T.team0 + 1.5 + i * .3)) * fade;
    head(...L.teamHead, 'Ontwerpteam', teamV(0));
    L.team.forEach(([x, y], i) => {
      const a = narrow ? [x, y + 26] : [x + L.nodeW / 2, y], b = narrow ? [yx + (x - yx) * .25, yy - yr] : [yx - yr, yy + (y - yy) * .35];
      conn(a, b, connV(i), t, { pulse: true, back: true, phase: i * .2 });
    });
    L.team.forEach(([x, y], i) => node(x, y, L.nodeW, narrow ? 52 : 56, TEAM[i][0], TEAM[i][1], teamV(i)));
    // timeline link from Y/RE
    const tv2 = ease(prog(t, T.yre0 + .6, T.yre0 + 1.6)) * fade;
    // 03 onderbouwing
    const [dx, dy] = L.doc, dw = L.docW, rowH = narrow ? 44 : 34;
    const dv = ease(prog(t, T.doc0, T.doc0 + .8)) * fade;
    if (dv > 0) {
      const h = rowH * DOC.length + (narrow ? 64 : 48);
      ln(yx, yy + yr, yx, dy, { w: 1.1, op: .8 * dv });
      out.push(`<rect x="${f1(dx - dw / 2)}" y="${f1(dy)}" width="${dw}" height="${f1(h * dv)}" fill="${BG}" stroke="${INK}" stroke-width="1.2" opacity="${dv.toFixed(2)}"/>`);
      if (dv > .6) txt(dx, dy + (narrow ? 38 : 28), 'Y/RE brengt samen', { size: L.fsS, weight: 600, op: prog(dv, .6, 1) });
      DOC.forEach((s, i) => {
        const v = ease(prog(t, T.doc0 + .7 + i * .4, T.doc0 + 1.2 + i * .4)) * fade;
        if (v <= 0) return;
        const ry = dy + (narrow ? 64 : 48) + i * rowH + rowH * .62;
        ln(dx - dw / 2 + 18, ry - rowH * .62 - 1, dx + dw / 2 - 18, ry - rowH * .62 - 1, { w: .8, op: .3 * v, stroke: INK });
        const cr = narrow ? 10 : 8, gap = narrow ? 12 : 10, tw = Math.max(...DOC.map(d => d.length)) * L.fsS * .52, x0 = dx - (2 * cr + gap + tw) / 2;
        check(x0 + cr, ry - L.fsS * .34, cr, v);
        txt(x0 + 2 * cr + gap, ry, s, { size: L.fsS, anchor: 'start', op: v });
      });
    }

    // 04 commissions + Y/RE taking part
    const comV = i => ease(prog(t, T.com0 + i * .4, T.com0 + 1 + i * .4)) * fade;
    const cconV = i => ease(prog(t, T.com0 + .6 + i * .4, T.com0 + 1.6 + i * .4)) * fade;
    if (!narrow) head(...L.comHead, 'Commissies', comV(0));
    L.com.forEach(([x, y], i) => {
      const a = narrow ? [yx + (x - yx) * .3, yy + yr] : [yx + yr, yy + (y - yy) * .3], b = narrow ? [x, y - 26] : [x - L.nodeW / 2, y];
      conn(narrow ? [yx, 706] : a, b, cconV(i), t, { pulse: true, phase: i * .3 });
    });
    if (narrow && cconV(0) > 0) ln(yx, L.doc[1] + rowH * DOC.length + 64, yx, 706, { w: 1.1, op: .8 * cconV(0) });
    L.com.forEach(([x, y], i) => node(x, y, L.comW || L.nodeW, narrow ? 52 : 56, COM[i][0], COM[i][1], comV(i)));
    // meetings on the timeline: Y/RE at the table
    const mv = ease(prog(t, T.meet0, T.meet0 + 1.2)) * fade;
    if (mv > 0) PHASES.forEach((p, i) => {
      const x = mx(i), cy = tl.y - (narrow ? 44 : 36);
      out.push(`<circle cx="${f1(x + (narrow ? 18 : 15))}" cy="${f1(cy)}" r="${narrow ? 7 : 5.5}" fill="${INK}" opacity="${(mv * prog(mv, i * .15, i * .15 + .4)).toFixed(2)}"/>`);
    });
    if (mv > 0 && !narrow) txt((tl.x0 + tl.x1) / 2, tl.y - 66, 'Y/RE aan tafel bij elke bespreking', { size: L.fsS, op: win(t, T.meet0 + .6, T.s5 + .3, .5) });

    // Y/RE node (on top)
    if (yv > 0) {
      const pulse = t > T.yre0 + 1 ? .5 + .5 * Math.sin(t * 2.4) : 0;
      out.push(`<circle cx="${yx}" cy="${yy}" r="${f1(yr + 10 + 6 * pulse)}" fill="none" stroke="${INK}" stroke-width="1" opacity="${(.25 * yv).toFixed(2)}"/>`);
      out.push(`<circle cx="${yx}" cy="${yy}" r="${f1(yr * (.9 + .1 * easeOut(yv)))}" fill="${INK}" opacity="${yv.toFixed(2)}"/>`);
      const lw = yr * 1.25, lh = lw * 99 / 320;
      out.push(`<image href="${LOGO}" x="${f1(yx - lw / 2)}" y="${f1(yy - lh / 2 - (narrow ? 8 : 6))}" width="${f1(lw)}" height="${f1(lh)}" opacity="${yv.toFixed(2)}"/>`);
      txt(yx, yy + (narrow ? 34 : 28), 'regie', { size: L.fsS, fill: '#D6D2CA', op: yv });
    }

    // 05 progress label
    const ev = win(t, T.run1 - .3, T.out0, .5) * fade;

    G.innerHTML = out.join('');
  }

  // ---------- panel + headline ----------
  const valsEl = [...$('vals').children];
  valsEl.forEach((li, i) => { li.querySelector('button').addEventListener('click', () => jump(i)); const pr = document.createElement('i'); pr.className = 'pr'; li.appendChild(pr); });
  const hl = $('hl'), hs = $('hs'), hn = $('hn'), headline = $('headline');
  let hlTimer = null;
  function setHeadline(k) {
    headline.style.opacity = 0;
    clearTimeout(hlTimer);
    hlTimer = setTimeout(() => { hn.textContent = '0' + (k + 1); hl.textContent = STEPS[k].title; hs.textContent = STEPS[k].text; headline.style.opacity = 1; }, 250);
  }
  let lastKey = '', cur = -1;
  function panel(t) {
    let k = 0; STEPS.forEach((s, i) => { if (t >= s.at) k = i; });
    const end = k < STEPS.length - 1 ? STEPS[k + 1].at : T.out0, pv = prog(t, STEPS[k].at, end);
    valsEl.forEach((li, i) => { li.lastChild.style.width = (i < k ? 100 : i === k ? pv * 100 : 0) + '%'; });
    if (k !== cur) { cur = k; setHeadline(k); valsEl.forEach((li, i) => { li.className = i < k ? 'done' : i === k ? 'on' : ''; }); }
  }

  // ---------- loop ----------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = 0, last = null, playing = !reduce, visible = true;
  const playBtn = $('play');
  function setPlaying(p) { playing = p; playBtn.textContent = p ? 'Pauze' : 'Afspelen'; playBtn.setAttribute('aria-pressed', String(!p)); last = null; }
  function size() { const w = svg.getBoundingClientRect().width || 1000; const n = w < 620; if (n !== narrow) setLayout(n); }
  function frame(now) {
    if (playing && visible) {
      if (last != null) t += Math.min(.05, (now - last) / 1000);
      last = now;
      if (t >= T.end) t = LOOP;
    } else last = null;
    render(t); panel(t);
    requestAnimationFrame(frame);
  }
  function jump(i) {
    const settled = [T.s2 - .3, T.s3 - .3, T.s4 - .3, T.s5 - .3, T.out0 - .3];
    t = reduce ? settled[i] : STEPS[i].at;
    if (!reduce && !playing) setPlaying(true);
    last = null;
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));
  $('replay').addEventListener('click', () => { t = 0; if (!reduce) setPlaying(true); });
  if (reduce) { t = T.out0 - .3; setPlaying(false); }
  new ResizeObserver(size).observe(svg); size();
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: .15 }).observe(svg);
  root.__seek = s => { t = s; setPlaying(false); };
  requestAnimationFrame(frame);
  },
  'gedelegeerd-ontwikkelmanagement': function (root, UID) {
    const $ = id => root.querySelector('[data-id="' + id + '"]');
  const BG = '#F3F1EC', INK = '#121211', GREY = '#5F5B54', RULE = '#CFCAC0';
  const svg = $('scene'), G = $('g');
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const prog = (t, a, b) => clamp((t - a) / (b - a));
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const easeOut = v => 1 - Math.pow(1 - v, 3);
  const lerp = (a, b, v) => a + (b - a) * v;
  const win = (t, a, b, f = .5) => clamp((t - a) / f) * clamp((b - t) / f);
  const f1 = n => n.toFixed(1);

  // ---------- content ----------
  const ITEMS = [
    { t: 'Ontwikkelstrategie', d: 'Ontwikkelkaders bepalen, programma afstemmen en haalbaarheid bewaken.', r: [0, 2] },
    { t: 'Ontwerpteammanagement', d: 'Architecten, constructeurs en overige adviseurs selecteren, contracteren en aansturen binnen mandaat.', r: [1, 4] },
    { t: 'Planning & procesregie', d: 'Ontwikkelplanning opstellen, disciplines coördineren en besluitvorming organiseren.', r: [0, 4] },
    { t: 'Financiële bewaking', d: 'Businesscase bewaken, ontwerpkeuzes financieel toetsen en afwijkingen signaleren.', r: [0, 4] },
    { t: 'Stakeholdermanagement', d: 'Afstemming met gemeente, grondeigenaren, beleggers en andere betrokkenen.', r: [0, 4] },
    { t: 'Vergunningstraject', d: 'Supervisie, welstand, onderzoeken en vergunningaanvragen coördineren.', r: [1, 3] },
    { t: 'Realisatievoorbereiding', d: 'Ontwikkelstukken afstemmen met aannemers, technische uitgangspunten bewaken en overdracht voorbereiden.', r: [3, 4] },
    { t: 'Rapportage & advies', d: 'Opdrachtgever informeren over voortgang, risico’s, budget en benodigde besluiten.', r: [0, 4], report: true }
  ];
  const PHASES = ['Initiatief', 'Ontwerp', 'Vergunning', 'Realisatievoorbereiding'];
  const PHASES_S = ['Initiatief', 'Ontwerp', 'Vergunning', 'Realisatie'];

  // ---------- timeline (s) ----------
  const INTRO = 2.6, STEP = 3.6;
  const T = { s0: 0, out0: INTRO + ITEMS.length * STEP + 2.6 };
  T.end = T.out0 + 1;
  const STEPS = ITEMS.map((it, i) => ({ at: i === 0 ? 0 : INTRO + i * STEP, title: it.t, text: it.d }));

  // ---------- layouts ----------
  const LAYOUT = {
    wide: {
      vb: [0, 0, 1000, 590], fs: 16, fsS: 14, fsH: 13, pillW: 290, pillH: 44,
      client: [500, 64], clientW: 250, yre: [500, 262, 64],
      pills: ITEMS.map((_, i) => [i < 4 ? 160 : 840, 176 + (i % 4) * 64]),
      tl: { x0: 70, x1: 930, y: 500 }
    },
    narrow: {
      vb: [0, 0, 600, 1060], fs: 22, fsS: 19, fsH: 17, pillW: 460, pillH: 52,
      client: [300, 58], clientW: 300, yre: [300, 236, 70],
      pills: ITEMS.map((_, i) => [300, 370 + i * 64]),
      tl: { x0: 30, x1: 570, y: 960 }
    }
  };
  let L = LAYOUT.wide, narrow = false;
  function setLayout(n) {
    narrow = n; L = n ? LAYOUT.narrow : LAYOUT.wide;
    svg.setAttribute('viewBox', L.vb.join(' '));
    svg.style.setProperty('--ar', (L.vb[2] / L.vb[3]).toFixed(3));
  }
  setLayout(false);

  // ---------- drawing ----------
  let out = [];
  const esc = s => s.replace(/&/g, '&amp;');
  function txt(x, y, s, o = {}) {
    out.push(`<text x="${f1(x)}" y="${f1(y)}" font-size="${o.size || L.fs}" font-weight="${o.weight || 400}" text-anchor="${o.anchor || 'middle'}" fill="${o.fill || INK}" fill-opacity="${(o.op ?? 1).toFixed(2)}" font-family="${o.display ? "Archivo, 'Instrument Sans', sans-serif" : "'Instrument Sans', system-ui, sans-serif"}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}>${esc(s)}</text>`);
  }
  function ln(x0, y0, x1, y1, o = {}) {
    out.push(`<path d="M${f1(x0)},${f1(y0)}L${f1(x1)},${f1(y1)}" stroke="${o.stroke || INK}" stroke-width="${o.w || 1.2}" fill="none" stroke-linecap="${o.cap || 'round'}" stroke-opacity="${(o.op ?? 1).toFixed(2)}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`);
  }
  function pill(x, y, w, h, title, num, v, act) {
    if (v <= .01) return;
    const s = .94 + .06 * easeOut(v);
    out.push(`<g opacity="${v.toFixed(2)}" transform="translate(${f1(x)},${f1(y)}) scale(${s.toFixed(3)})">`);
    out.push(`<rect x="${f1(-w / 2)}" y="${f1(-h / 2)}" width="${f1(w)}" height="${f1(h)}" rx="${f1(h / 2)}" fill="${act > .5 ? INK : BG}" stroke="${INK}" stroke-width="1.2"/>`);
    const fill = act > .5 ? BG : INK;
    if (num) txt(-w / 2 + (narrow ? 26 : 24), L.fs * .36, num, { size: L.fsS - 1, fill: act > .5 ? '#A8A399' : GREY, anchor: 'start' });
    txt(num ? -w / 2 + (narrow ? 56 : 52) : 0, L.fs * .36, title, { size: L.fs, weight: 600, display: true, fill, anchor: num ? 'start' : 'middle' });
    out.push('</g>');
  }
  function pulses(a, b, t, o = {}) {
    [0, .5].forEach(off => {
      let p = (t * (o.speed || .5) + off) % 1; if (o.back) p = 1 - p;
      out.push(`<circle cx="${f1(lerp(a[0], b[0], p))}" cy="${f1(lerp(a[1], b[1], p))}" r="${narrow ? 5 : 3.6}" fill="${INK}" opacity="${(o.op ?? .9).toFixed(2)}"/>`);
    });
  }
  // point on the circle edge toward a target
  function edge(cx, cy, r, tx, ty) { const a = Math.atan2(ty - cy, tx - cx); return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }

  // ---------- render ----------
  function render(t) {
    out = [];
    const fade = 1 - prog(t, T.out0, T.end - .15);
    let k = -1; ITEMS.forEach((_, i) => { if (t >= INTRO + i * STEP) k = i; });
    const [yx, yy, yr] = L.yre, [cx, cy] = L.client;

    // client + mandate / report lines
    const cv = ease(prog(t, 0, .8)) * fade;
    const lv = ease(prog(t, .8, 1.8)) * fade;
    const top = cy + (narrow ? 30 : 27), bot = yy - yr - 14;
    if (lv > 0) {
      const gx = narrow ? 14 : 12;
      ln(yx - gx, top, yx - gx, lerp(top, bot, lv), { w: 1.1, op: .8 });
      ln(yx + gx, bot, yx + gx, lerp(bot, top, lv), { w: 1.1, op: .8 });
      const lab = ease(prog(t, 1.4, 2.2)) * fade;
      if (lab > 0) {
        txt(yx - gx - 10, (top + bot) / 2 + 5, 'mandaat', { size: L.fsS, anchor: 'end', fill: GREY, op: lab });
        txt(yx + gx + 10, (top + bot) / 2 + 5, 'rapportage', { size: L.fsS, anchor: 'start', fill: GREY, op: lab });
      }
      pulses([yx - gx, top], [yx - gx, bot], t, { speed: .35, op: .7 * lv });
      const rep = k === 7;
      pulses([yx + gx, top], [yx + gx, bot], t * (rep ? 1.8 : 1), { speed: .35, back: true, op: (rep ? 1 : .5) * lv });
    }
    if (cv > 0) {
      const w = L.clientW, h = narrow ? 58 : 54;
      out.push(`<g opacity="${cv.toFixed(2)}"><rect x="${f1(cx - w / 2)}" y="${f1(cy - h / 2)}" width="${w}" height="${h}" rx="4" fill="${BG}" stroke="${INK}" stroke-width="1.4"/>`);
      txt(cx, cy + (narrow ? -2 : -2), 'Opdrachtgever', { size: L.fs + 1, weight: 600, display: true });
      txt(cx, cy + (narrow ? 22 : 17), 'kaders, mandaat en besluiten', { size: L.fsS - 2, fill: GREY });
      out.push('</g>');
    }

    // timeline: van initiatief tot en met realisatievoorbereiding
    const tl = L.tl, n = PHASES.length, seg = (tl.x1 - tl.x0) / n;
    const tv = ease(prog(t, 1.0, 2.4)) * fade;
    if (tv > 0) {
      txt(narrow ? 300 : tl.x0, tl.y - (narrow ? 50 : 42), 'VAN INITIATIEF TOT EN MET REALISATIEVOORBEREIDING', { size: L.fsH, fill: GREY, op: tv, ls: '1.2', anchor: narrow ? 'middle' : 'start' });
      ln(tl.x0, tl.y, lerp(tl.x0, tl.x1, tv), tl.y, { w: 1.4, op: .35 });
      for (let i = 0; i <= n; i++) { const x = tl.x0 + i * seg; ln(x, tl.y - 7, x, tl.y + 7, { w: 1.2, op: .6 * tv }); }
      PHASES.forEach((p, i) => txt(tl.x0 + (i + .5) * seg, tl.y + (narrow ? 36 : 30), narrow ? PHASES_S[i] : p, { size: L.fsS, op: tv }));
    }
    // active range on the timeline
    if (k >= 0) {
      const it = ITEMS[k], a = INTRO + k * STEP, v = ease(prog(t, a + .3, a + 1.3)) * win(t, a, a + STEP + (k === 7 ? 3 : 0), .3) * fade;
      if (v > 0) {
        const x0 = tl.x0 + it.r[0] * seg, x1 = tl.x0 + it.r[1] * seg;
        ln(x0, tl.y, lerp(x0, x1, v), tl.y, { w: narrow ? 7 : 5, cap: 'butt' });
      }
    }

    // workstreams
    L.pills.forEach(([px, py], i) => {
      const a = INTRO + i * STEP;
      const v = ease(prog(t, a, a + .8)) * fade;
      if (v <= 0) return;
      const act = i === k ? 1 : 0;
      // connection to Y/RE
      const pe = narrow ? [px, py - L.pillH / 2] : [px + (px < yx ? L.pillW / 2 : -L.pillW / 2), py];
      const ye = edge(yx, yy, yr + 4, pe[0], pe[1]);
      const cvv = ease(prog(t, a + .2, a + 1)) * fade;
      if (!narrow) {
        ln(ye[0], ye[1], lerp(ye[0], pe[0], cvv), lerp(ye[1], pe[1], cvv), { w: act ? 1.3 : 1, op: act ? .9 : .3 });
        if (act && cvv >= 1) pulses(ye, pe, t, { speed: .5 });
      }
      pill(px, py, L.pillW, L.pillH, ITEMS[i].t, '', v, act);
    });

    // Y/RE
    const yv = ease(prog(t, .3, 1.2)) * fade;
    if (yv > 0) {
      const pulse = .5 + .5 * Math.sin(t * 2.4);
      out.push(`<circle cx="${yx}" cy="${yy}" r="${f1(yr + 10 + 6 * pulse)}" fill="none" stroke="${INK}" stroke-width="1" opacity="${(.25 * yv).toFixed(2)}"/>`);
      out.push(`<circle cx="${yx}" cy="${yy}" r="${f1(yr * (.9 + .1 * easeOut(yv)))}" fill="${INK}" opacity="${yv.toFixed(2)}"/>`);
      const lw = yr * 1.25, lh = lw * 99 / 320;
      out.push(`<image href="${LOGO}" x="${f1(yx - lw / 2)}" y="${f1(yy - lh / 2)}" width="${f1(lw)}" height="${f1(lh)}" opacity="${yv.toFixed(2)}"/>`);
    }
    // intro label

    G.innerHTML = out.join('');
  }

  // ---------- panel + headline ----------
  const valsEl = [...$('vals').children];
  valsEl.forEach((li, i) => { li.querySelector('button').addEventListener('click', () => jump(i)); const pr = document.createElement('i'); pr.className = 'pr'; li.appendChild(pr); });
  const hl = $('hl'), hs = $('hs'), hn = $('hn'), headline = $('headline');
  let hlTimer = null;
  function setHeadline(k) {
    headline.style.opacity = 0;
    clearTimeout(hlTimer);
    hlTimer = setTimeout(() => { hn.textContent = '0' + (k + 1); hl.textContent = STEPS[k].title; hs.textContent = STEPS[k].text; headline.style.opacity = 1; }, 250);
  }
  let cur = -1;
  function panel(t) {
    let k = 0; STEPS.forEach((s, i) => { if (t >= s.at) k = i; });
    const end = k < STEPS.length - 1 ? STEPS[k + 1].at : T.out0, pv = prog(t, STEPS[k].at, end);
    valsEl.forEach((li, i) => { li.lastChild.style.width = (i < k ? 100 : i === k ? pv * 100 : 0) + '%'; });
    if (k !== cur) { cur = k; setHeadline(k); valsEl.forEach((li, i) => { li.className = i < k ? 'done' : i === k ? 'on' : ''; }); }
  }

  // ---------- loop ----------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = 0, last = null, playing = !reduce, visible = true;
  const playBtn = $('play');
  function setPlaying(p) { playing = p; playBtn.textContent = p ? 'Pauze' : 'Afspelen'; playBtn.setAttribute('aria-pressed', String(!p)); last = null; }
  function size() { const w = svg.getBoundingClientRect().width || 1000; const n = w < 620; if (n !== narrow) setLayout(n); }
  function frame(now) {
    if (playing && visible) {
      if (last != null) t += Math.min(.05, (now - last) / 1000);
      last = now;
      if (t >= T.end) t = 0;
    } else last = null;
    render(t); panel(t);
    requestAnimationFrame(frame);
  }
  function jump(i) {
    t = i === 0 ? 0 : STEPS[i].at + (reduce ? 1.6 : 0);
    if (!reduce && !playing) setPlaying(true);
    last = null;
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));
  $('replay').addEventListener('click', () => { t = 0; if (!reduce) setPlaying(true); });
  if (reduce) { t = T.out0 - .3; setPlaying(false); }
  new ResizeObserver(size).observe(svg); size();
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: .15 }).observe(svg);
  root.__seek = s => { t = s; setPlaying(false); };
  requestAnimationFrame(frame);
  }
};

let uid = 0;
function stageHTML(s) {
  return `<div class="stagewrap">
    <figure aria-label="${s.label}" style="margin:0">
      <div class="headline" data-id="headline" aria-live="polite"><span class="hn" data-id="hn">&nbsp;</span><b data-id="hl">&nbsp;</b><span class="hs" data-id="hs">&nbsp;</span></div>
      <svg class="ysv-scene" data-id="scene" role="img" aria-label="${s.title}"><defs data-id="defs"></defs><g data-id="g"></g></svg>
      <div class="bar"><span class="note"></span><div class="controls"><button type="button" data-id="play" aria-pressed="false">Pauze</button><button type="button" data-id="replay">Opnieuw</button></div></div>
    </figure>
    <aside class="panel"><ol class="vals" data-id="vals">${s.vals}</ol></aside>
  </div>
  <div class="steps" data-id="steps" hidden></div><div class="dots" data-id="dots" hidden></div>`;
}

class YreServices extends HTMLElement {
  connectedCallback() {
    if (this._built) return; this._built = true;
    if (!document.getElementById('yre-services-css')) {
      const st = document.createElement('style'); st.id = 'yre-services-css'; st.textContent = CSS; document.head.appendChild(st);
    }
    const home = this.getAttribute('mode') === 'home';
    const link = this.getAttribute('href') || '/diensten';
    this.innerHTML = '<div class="ysv-list">' + SERVICES.map((s, i) => `
      <div class="ysv-item" id="${home ? '' : s.id}" data-svc="${s.id}">
        <button type="button" class="ysv-head" aria-expanded="false" aria-controls="ysv-${s.id}-${home ? 'h' : 'p'}">
          <span class="ysv-title">${s.title.replace('&', '&amp;')}</span><span class="ysv-sub">${s.sub}</span><span class="ysv-icon" aria-hidden="true"></span>
        </button>
        <div class="ysv-body" id="ysv-${s.id}-${home ? 'h' : 'p'}" role="region" aria-label="${s.title}"><div class="ysv-inner"><div class="ysv-content">
          <p class="ysv-intro">${s.intro}</p>
          ${stageHTML(s)}
          <div class="result"><span class="rh">Resultaat</span><div class="rgrid">${s.results}</div></div>
        </div></div></div>
      </div>`).join('') + '</div>';
    this.querySelectorAll('.ysv-item').forEach(item => {
      item.querySelector('.ysv-head').addEventListener('click', () => this.toggle(item));
      item.querySelectorAll('.ysv-inner a, .ysv-inner button').forEach(el => el.tabIndex = -1);
    });
    if (!home) {
      const open = () => {
        const id = decodeURIComponent(location.hash.slice(1));
        const item = id && this.querySelector(`.ysv-item[data-svc="${id}"]`);
        if (item && !item.classList.contains('open')) { this.toggle(item, true); setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); }
      };
      open(); window.addEventListener('hashchange', open);
    }
  }
  toggle(item, fromHash) {
    const willOpen = !item.classList.contains('open');
    this.querySelectorAll('.ysv-item.open').forEach(o => { if (o !== item) this.setOpen(o, false); });
    this.setOpen(item, willOpen);
    if (willOpen) setTimeout(() => { const r = item.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * .6) item.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 650);
    if (this.getAttribute('mode') !== 'home' && !fromHash) {
      try { history.replaceState(null, '', willOpen ? '#' + item.dataset.svc : location.pathname + location.search); } catch (e) {}
    }
  }
  setOpen(item, open) {
    item.classList.toggle('open', open);
    item.querySelector('.ysv-head').setAttribute('aria-expanded', String(open));
    item.querySelectorAll('.ysv-inner a, .ysv-inner button').forEach(el => el.tabIndex = open ? 0 : -1);
    const stage = item.querySelector('.stagewrap');
    if (open && stage && !item._started) {
      item._started = true;
      const root = item.querySelector('.ysv-content');
      requestAnimationFrame(() => FACTORIES[item.dataset.svc](root, '-' + (++uid)));
    }
  }
}
if (!customElements.get('yre-services')) customElements.define('yre-services', YreServices);
