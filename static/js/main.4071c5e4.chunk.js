(this["webpackJsonpfootball-manager"]=this["webpackJsonpfootball-manager"]||[]).push([[2],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return b}));var a="GET_LEAGUES",c="SEARCH_LEAGUE",r="GET_TEAMS",o="SEARCH_TEAM",i="LEAGUE_GET_MATCHES",b="TEAM_GET_MATCHES"},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a={white:"#ffffff",black:"#000000",grey:"#eeeeee",rainyDark:"#536591",blue:"#0000ff"},c={main:"4px 4px 8px 0px rgb(34, 60, 80, 0.2)"}},25:function(e,t,n){"use strict";var a=n(4),c=n(0),r=n(26),o=function(){return Object(a.jsx)(r.a,{})};t.a=Object(c.memo)(o)},26:function(e,t,n){"use strict";var a=n(15),c=n(4),r=n(18),o=n(16),i=n(17);function b(){var e=Object(a.a)(["\n  max-width: 95%;\n  margin: 10px auto;\n  padding: 20px;\n  color: ",";\n  font-size: 1.2em;\n  font-weight: 500;\n  background-color: ",";\n  border-radius: 5px;\n  box-sizing: border-box;\n  box-shadow: ",";\n  @media only screen and (max-width: 760px) {\n    max-width: 99%;\n    padding: 10px 20px;\n  }\n"]);return b=function(){return e},e}t.a=function(){return Object(c.jsx)(l,{children:Object(c.jsx)("nav",{children:Object(c.jsx)(r.a,{to:"/",children:"Home"})})})};var u=i.b.white,s=i.b.rainyDark,l=o.a.header(b(),u,s,i.a.main)},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return L}));var a=n(4),c=n(0),r=n.n(c),o=n(14),i=n.n(o),b=n(6),u=n(3),s=n(27),l=n(10),j=n(31),d=n(1),O=n(12),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{leagues:{searchCompetition:"",collection:[]},teams:{searchTeam:"",season:{},collection:[]},matches:{byTeam:{collection:[]},byLeague:{collection:[]}}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,a=t.data;switch(n){case O.a:return Object(d.a)(Object(d.a)({},e),{},{leagues:Object(d.a)(Object(d.a)({},e.leagues),{},{collection:a})});case O.d:return Object(d.a)(Object(d.a)({},e),{},{leagues:Object(d.a)(Object(d.a)({},e.leagues),{},{searchCompetition:a})});case O.b:return Object(d.a)(Object(d.a)({},e),{},{teams:Object(d.a)(Object(d.a)({},e.teams),{},{collection:a})});case O.e:return Object(d.a)(Object(d.a)({},e),{},{teams:Object(d.a)(Object(d.a)({},e.teams),{},{searchTeam:a})});case O.c:return Object(d.a)(Object(d.a)({},e),{},{matches:Object(d.a)(Object(d.a)({},e.matches),{},{byLeague:Object(d.a)(Object(d.a)({},e.matches.byLeague),{},{collection:a})})});case O.f:return Object(d.a)(Object(d.a)({},e),{},{matches:Object(d.a)(Object(d.a)({},e.matches),{},{byTeam:Object(d.a)(Object(d.a)({},e.matches.byTeam),{},{collection:a})})});default:return e}},f=Object(l.c)({global:m}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,g=Object(l.e)(f,h(Object(l.a)(j.a))),p=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},x=n(15),E=n(28),y=n(16),T=(n(45),r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,128))}))),v=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,127))})),_=[{path:"/football-manager/competitions/:id",exact:!0,component:T},{path:"/football-manager/competitions/:id/matches",exact:!0,component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,125))}))},{path:"/football-manager/teams/:id",exact:!0,component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,126))}))},{path:"/football-manager",exact:!0,component:v}],w=function(){return Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(a.jsx)(u.c,{children:_.map((function(e){return Object(a.jsx)(u.a,Object(d.a)({},e),e.path)}))})})},S=n(25);function k(){var e=Object(x.a)(["\n  padding: 5px;\n  background-image: url('./img/bg-main.jpg');\n  background-size: contain;\n  background-position: top;\n  height: calc(100vh - 10px);\n"]);return k=function(){return e},e}var A=y.a.div(k()),C=function(){return Object(a.jsxs)(A,{children:[Object(a.jsx)(S.a,{}),Object(a.jsx)(w,{}),Object(a.jsx)(E.a,{})]})},L=(n(47),Object(b.a)());i.a.render(Object(a.jsx)(s.a,{store:g,children:Object(a.jsx)(u.b,{history:L,children:Object(a.jsx)(C,{})})}),document.getElementById("root")),p()}},[[48,3,4]]]);
//# sourceMappingURL=main.4071c5e4.chunk.js.map