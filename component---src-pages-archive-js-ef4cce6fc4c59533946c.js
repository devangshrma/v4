(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nRki:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return h}));var n=a("q1tI"),r=a.n(n),l=a("qhky"),i=a("vOnD"),d=a("20nU"),c=a("nLfd"),o=a("Kvkj"),m=a("g67X"),s=i.d.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"u5epm8-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(function(e){return e.theme.mixins.flexCenter}));t.default=function(e){var t=e.location,a=e.data.allMarkdownRemark.edges,i=Object(n.useRef)(null),h=Object(n.useRef)(null),p=Object(n.useRef)([]);return Object(n.useEffect)((function(){c.a.reveal(i.current,Object(d.srConfig)()),c.a.reveal(h.current,Object(d.srConfig)(200,0)),p.current.forEach((function(e,t){return c.a.reveal(e,Object(d.srConfig)(10*t))}))}),[]),r.a.createElement(o.i,{location:t},r.a.createElement(l.a,{title:"Archive"}),r.a.createElement("main",null,r.a.createElement("header",{ref:i},r.a.createElement("h1",{className:"big-heading"},"Archive"),r.a.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),r.a.createElement(s,{ref:h},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Year"),r.a.createElement("th",null,"Title"),r.a.createElement("th",{className:"hide-on-mobile"},"Made at"),r.a.createElement("th",{className:"hide-on-mobile"},"Built with"),r.a.createElement("th",null,"Link"))),r.a.createElement("tbody",null,a.length>0&&a.map((function(e,t){var a=e.node.frontmatter,n=a.date,l=a.github,i=a.title,d=a.tech,c=a.company;return r.a.createElement("tr",{key:t,ref:function(e){return p.current[t]=e}},r.a.createElement("td",{className:"overline year"},""+new Date(n).getFullYear()),r.a.createElement("td",{className:"title"},i),r.a.createElement("td",{className:"company hide-on-mobile"},c?r.a.createElement("span",null,c):r.a.createElement("span",null,"—")),r.a.createElement("td",{className:"tech hide-on-mobile"},d.length>0&&d.map((function(e,t){return r.a.createElement("span",{key:t},e,"",t!==d.length-1&&r.a.createElement("span",{className:"separator"},"·"))}))),r.a.createElement("td",{className:"links"},r.a.createElement("div",null,l&&r.a.createElement("a",{href:l,"aria-label":"GitHub Link"},r.a.createElement(m.a,{name:"GitHub"})))))})))))))};var h="3731249170"}}]);
//# sourceMappingURL=component---src-pages-archive-js-ef4cce6fc4c59533946c.js.map