(this["webpackJsonpanime-ui"]=this["webpackJsonpanime-ui"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),s=n.n(a),i=(n(11),n(2)),o=n.n(i),j=n(5),u=n(3),h=n(0);var l=function(){return Object(h.jsx)("header",{children:Object(h.jsxs)("h1",{children:["NETFLIX Remake Has Some ",Object(h.jsx)("strong",{children:"Anime"})," For You!"]})})};var b=function(e){var t=e.topShows;return Object(h.jsx)("aside",{children:Object(h.jsxs)("nav",{children:[Object(h.jsx)("h3",{children:"Top Shows"}),t.map((function(e){return Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.title},e.mal_id)}))]})})};var d=function(e){var t=e.show;return Object(h.jsx)("article",{className:"anime-card",children:Object(h.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("figure",{children:Object(h.jsx)("img",{src:t.image_url,alt:"Anime Image"})}),Object(h.jsx)("h3",{children:t.title})]})})};var f=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"main-head",children:Object(h.jsx)("form",{className:"search-box",onSubmit:e.HandleSearch,children:Object(h.jsx)("input",{type:"search",placeholder:"Looking for a show...?",required:!0,value:e.search,onChange:function(t){return e.setSearch(t.target.value)}})})}),Object(h.jsx)("div",{className:"anime-list",children:e.showList.map((function(e){return Object(h.jsx)(d,{show:e},e.mal_id)}))})]})})};var p=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(u.a)(a,2),i=s[0],d=s[1],p=Object(r.useState)(""),O=Object(u.a)(p,2),m=O[0],x=O[1],v=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity").then((function(e){return e.json()}));case 2:t=e.sent,d(t.top.slice(0,5));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&order_by=title&sort=asc&limit=10")).then((function(e){return e.json()}));case 2:n=e.sent,c(n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){v()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(l,{}),Object(h.jsxs)("div",{className:"content-wrap",children:[Object(h.jsx)(b,{topShows:i}),Object(h.jsx)(f,{HandleSearch:function(e){e.preventDefault(),w(m)},setSearch:x,Search:m,showList:n})]})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.997f4130.chunk.js.map