(this["webpackJsonppractical-react"]=this["webpackJsonppractical-react"]||[]).push([[0],[,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(17)},,,,,function(e){e.exports=JSON.parse('[{"sistemOperare":["android",1],"nume":"telefon1","memorieStocare":[64,1],"valoare":[2900,2]},{"sistemOperare":["ios",2],"nume":"telefon2","memorieStocare":[64,1],"valoare":[2800,2]},{"sistemOperare":["ios",2],"nume":"telefon3","memorieStocare":[128,1],"valoare":[1800,1]},{"sistemOperare":["android",1],"nume":"telefon4","memorieStocare":[128,1],"valoare":[5000,2]},{"sistemOperare":["ios",2],"nume":"telefon5","memorieStocare":[32,2],"valoare":[4600,2]},{"sistemOperare":["android",1],"nume":"telefon6","memorieStocare":[32,2],"valoare":[3200,2]},{"sistemOperare":["android",1],"nume":"telefon7","memorieStocare":[16,2],"valoare":[1700,1]},{"sistemOperare":["ios",2],"nume":"telefon8","memorieStocare":[16,2],"valoare":[2300,2]},{"sistemOperare":["android",1],"nume":"telefon9","memorieStocare":[128,1],"valoare":[2100,2]},{"sistemOperare":["android",1],"nume":"telefon10","memorieStocare":[16,2],"valoare":[2200,2]},{"sistemOperare":["android",1],"nume":"telefon11","memorieStocare":[16,2],"valoare":[3400,2]},{"sistemOperare":["android",1],"nume":"telefon12","memorieStocare":[16,2],"valoare":[1200,1]},{"sistemOperare":["android",1],"nume":"telefon13","memorieStocare":[16,2],"valoare":[1300,1]},{"sistemOperare":["android",1],"nume":"telefon14","memorieStocare":[16,2],"valoare":[1400,1]},{"sistemOperare":["android",1],"nume":"telefon15","memorieStocare":[32,2],"valoare":[1100,1]},{"sistemOperare":["ios",2],"nume":"telefon[16,1]","memorieStocare":[32,2],"valoare":[900,1]},{"sistemOperare":["android",1],"nume":"telefon17","memorieStocare":[64,1],"valoare":[2200,2]},{"sistemOperare":["ios",2],"nume":"telefon18","memorieStocare":[64,1],"valoare":[800,1]},{"sistemOperare":["ios",2],"nume":"telefon19","memorieStocare":[128,1],"valoare":[700,1]},{"sistemOperare":["android",1],"nume":"telefon20","memorieStocare":[128,1],"valoare":[600,1]},{"sistemOperare":["ios",2],"nume":"telefon21","memorieStocare":[16,2],"valoare":[500,1]},{"sistemOperare":["android",1],"nume":"telefon22","memorieStocare":[16,2],"valoare":[400,1]},{"sistemOperare":["ios",2],"nume":"telefon23","memorieStocare":[16,2],"valoare":[850,1]},{"sistemOperare":["android",1],"nume":"telefon24","memorieStocare":[16,2],"valoare":[950,1]}]')},function(e){e.exports=JSON.parse('[{"textIntrebare":"Ce buget aveti?","raspunsIntrebare":["sub 1500lei","peste 1500lei"],"raspunsConditie":[1,2],"categorie":"valoare"},{"textIntrebare":"Doriti ca telefonul dumneavoastra sa aibe o memorie de stocare mare ?","raspunsIntrebare":["Da","Nu"],"raspunsConditie":[1,2],"categorie":"memorieStocare"},{"textIntrebare":"Ce sistem de operare doriti sa aibe telefonul?","raspunsIntrebare":["Android","IOS"],"raspunsConditie":[1,2],"categorie":"sistemOperare"}]')},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),o=a.n(i),s=(a(6),a(1)),c=a(2),u=a(4),l=a(3),m=a(7),p=a(5),d=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Intrebare"},this.props.text)}}]),t}(n.a.Component),h=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Raspunsuri"},n.a.createElement("div",{onClick:function(){return e.props.date.getRaspunsCurent(1)}},this.props.date.intrebariText[0]),n.a.createElement("div",{onClick:function(){return e.props.date.getRaspunsCurent(2)}},this.props.date.intrebariText[1]),n.a.createElement("div",{onClick:function(){return e.props.date.getRaspunsCurent(3)}},"Nu conteaza"))}}]),t}(n.a.Component),v=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null)}}]),t}(n.a.Component),f=function e(t,a,r,n){var i=this;Object(s.a)(this,e),this.getText=function(){return i.text},this.getCategorie=function(){return i.categorie},this.getRaspunsuriText=function(e){return i.raspunsuriText[e]},this.getRaspunsuri=function(e){return i.raspunsuri[e]},this.text=t,this.raspunsuriText=a,this.raspunsuri=r,this.categorie=n},b=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(l.a)(t).call(this,e)),console.log(e),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,"Telefonul cel mai potrivit pentru dumneavoastra este:"),n.a.createElement("div",null,this.props.date.nume),n.a.createElement("div",null,this.props.date.sistemOperare[0]),n.a.createElement("div",null,this.props.date.memorieStocare[0]),n.a.createElement("div",null,this.props.date.valoare[0]))}}]),t}(n.a.Component),O=a(15),j=a(16),S=[],g=O,C=[];for(var E in j)C.push(new f(j[E].textIntrebare,j[E].raspunsIntrebare,j[E].raspunsConditie,j[E].categorie));var k=C.length;console.log(k);var x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).getRaspunsCurent=a.getRaspunsCurent.bind(Object(m.a)(a)),a.schimbaIntrebarea=a.schimbaIntrebarea.bind(Object(m.a)(a)),a.start=a.start.bind(Object(m.a)(a)),a.state={i:0,raspunsCurent:4,arataFinal:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return 0===this.state.arataFinal?n.a.createElement("div",{className:"Content"},n.a.createElement(d,{text:C[this.state.i].text}),n.a.createElement(h,{date:{intrebariText:C[this.state.i].raspunsuriText,raspunsuri:C[this.state.i].raspunsuri,getRaspunsCurent:this.getRaspunsCurent}}),n.a.createElement(v,null)):n.a.createElement("div",{className:"Content"},n.a.createElement(b,{date:g[0]}),n.a.createElement(v,null))}},{key:"getRaspunsCurent",value:function(e){if(this.setState({raspunsCurent:e}),1===e||2===e){for(var t in g){var a=g[t][C[this.state.i].categorie][1];a===e&&(S.push(g[t]),console.log(e,a))}console.log(g.length),g=S,S=[]}this.schimbaIntrebarea()}},{key:"schimbaIntrebarea",value:function(){this.state.i+1===k?this.setState({arataFinal:1}):this.setState({i:this.state.i+1})}},{key:"start",value:function(){this.setState({i:0}),S=[],g=O}},{key:"arataTelefonFinal",value:function(){}}]),t}(n.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Incepe"},n.a.createElement("div",{onClick:this.props.action},"Incepe"))}}]),t}(n.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleSw=a.handleSw.bind(Object(m.a)(a)),a.state={sw:1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.sw?n.a.createElement("div",{className:"Container"},n.a.createElement(w,{action:this.handleSw})):n.a.createElement("div",{className:"Container"},n.a.createElement(x,null))}},{key:"handleSw",value:function(){console.log("ceva"),this.state.sw?this.setState({sw:0}):this.setState({sw:1})}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.00ca1e2e.chunk.js.map