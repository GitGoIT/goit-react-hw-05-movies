"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[256],{127:function(e,t,r){r.d(t,{Df:function(){return c},M1:function(){return f},TP:function(){return i},V0:function(){return o},tx:function(){return p}});var n=r(861),a=r(757),u=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9d504f0d6629b3ea4ce96304b577daca",language:"en-US"}}),c=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day?page=1");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie?query=".concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews?page=1"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},948:function(e,t,r){r.d(t,{Z:function(){return o}});var n={list:"moviesSearchList_list__S+hOA"},a=r(791),u=r(87),s=r(689),c=r(184),i=function(e){var t=e.movies,r=(0,s.TH)(),a=t.map((function(e){var t=e.id,a=e.title;return(0,c.jsx)("li",{className:n.link,children:(0,c.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:r},children:a})},t)}));return(0,c.jsx)("ul",{className:n.list,children:a})},o=(0,a.memo)(i)},256:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),u=r(757),s=r.n(u),c="trendingMovies_error__NHEqq",i=r(791),o=r(127),f=r(643),p=r(948),v=r(184),l=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,i.useState)(!1),d=(0,a.Z)(l,2),h=d[0],m=d[1],g=(0,i.useState)(null),x=(0,a.Z)(g,2),w=x[0],_=x[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,o.Df)();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.massage);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.g4,{height:"80",width:"80",radius:"9",color:"#FF0000",ariaLabel:"three-dots-loading",wrapperStyle:{marginLeft:"45%"},visible:h&&!0}),w&&(0,v.jsx)("p",{className:c,children:"Something goes wrong. Please try again later."}),(0,v.jsx)(p.Z,{movies:r})]})},d=function(){return(0,v.jsx)(l,{})}}}]);
//# sourceMappingURL=256.a6c33126.chunk.js.map