"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[549],{4399:function(e,i,s){s.d(i,{k:function(){return r}});var t=s(2791),n=s(7689),r=function(){var e=(0,n.TH)().pathname,i=(0,t.useRef)(e);return(0,t.useEffect)((function(){""===i.current&&(i.current=e)}),[e]),i.current}},2549:function(e,i,s){s.r(i),s.d(i,{default:function(){return k}});var t=s(7689),n=s(1087),r=s(1933),c=s(7488),a=s(3649),o=s(4399),l=s(5700),u="MovieDetails_container__Ys+c9",d="MovieDetails_visuallyHidden__+cL0D",h="MovieDetails_data__JrTt7",_="MovieDetails_dataMovies__-kwJw",v="MovieDetails_infoMovies__OxpN4",x="MovieDetails_listLink__Cgi5s",j=(s(2791),"BackButton_button__5Jmp+"),f="BackButton_buttonLabel__3tw2F",m=s(184);var p=function(){var e=(0,t.s0)();return(0,m.jsx)("button",{type:"submit",className:j,onClick:function(){var i=localStorage.getItem("previousPage");e(i||"/")},children:(0,m.jsx)("span",{className:f,children:"Go Back"})})},g=s(2458);function k(){var e=(0,o.k)(),i=(0,t.UO)().movieId,s=(0,r.useQuery)(["movies",i],(function(){return(0,c.Xd)(i)})),j=s.isLoading,f=s.data,k=s.error;if(k)return(0,m.jsxs)("h1",{children:["Error: ",k]});if(j)return(0,m.jsx)("h1",{children:"Loading..."});var w=f.title,b=f.overview,N=f.backdrop_path;return(0,m.jsx)("div",{className:u,children:(0,m.jsxs)(l.Z,{children:[(0,m.jsx)("h1",{className:d,children:"MovieDetails"}),(0,m.jsx)(p,{}),k&&(0,m.jsxs)("h1",{children:["Error: ",k]}),j&&(0,m.jsx)("h1",{children:"Loading..."}),!k&&!j&&(0,m.jsxs)("div",{className:h,children:[(0,m.jsxs)("div",{className:_,children:[N?(0,m.jsx)("img",{src:"".concat(a.b).concat(N),alt:"poster",width:"50%",height:"auto"}):(0,m.jsx)("img",{src:"".concat(g),alt:"",width:200,height:140}),(0,m.jsxs)("ul",{className:v,children:[(0,m.jsx)("li",{children:(0,m.jsx)("h2",{children:w})}),(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:b})})]})]}),(0,m.jsxs)("ul",{className:x,children:[(0,m.jsx)("li",{children:(0,m.jsx)(n.OL,{to:"".concat(e,"/cast"),children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(n.OL,{to:"".concat(e,"/reviews"),children:"Reviews"})})]}),(0,m.jsx)(t.j3,{})]})]})})}},2458:function(e,i,s){e.exports=s.p+"static/media/No-Image.12e64bc7efc49e58e460.png"}}]);
//# sourceMappingURL=549.b4f6d0c8.chunk.js.map