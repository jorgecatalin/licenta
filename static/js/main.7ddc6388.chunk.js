(this["webpackJsonppractical-react"]=this["webpackJsonppractical-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(33)},16:function(e,t,a){},17:function(e){e.exports=JSON.parse('[{"sistemOperare":["android",1],"nume":"telefon1","memorieStocare":[64,1],"valoare":[2900,2]},{"sistemOperare":["ios",2],"nume":"telefon2","memorieStocare":[64,1],"valoare":[2800,2]},{"sistemOperare":["ios",2],"nume":"telefon3","memorieStocare":[128,1],"valoare":[1800,1]},{"sistemOperare":["android",1],"nume":"telefon4","memorieStocare":[128,1],"valoare":[5000,2]},{"sistemOperare":["ios",2],"nume":"telefon5","memorieStocare":[32,2],"valoare":[4600,2]},{"sistemOperare":["android",1],"nume":"telefon6","memorieStocare":[32,2],"valoare":[3200,2]},{"sistemOperare":["android",1],"nume":"telefon7","memorieStocare":[16,2],"valoare":[1700,1]},{"sistemOperare":["ios",2],"nume":"telefon8","memorieStocare":[16,2],"valoare":[2300,2]},{"sistemOperare":["android",1],"nume":"telefon9","memorieStocare":[128,1],"valoare":[2100,2]},{"sistemOperare":["android",1],"nume":"telefon10","memorieStocare":[16,2],"valoare":[2200,2]},{"sistemOperare":["android",1],"nume":"telefon11","memorieStocare":[16,2],"valoare":[3400,2]},{"sistemOperare":["android",1],"nume":"telefon12","memorieStocare":[16,2],"valoare":[1200,1]},{"sistemOperare":["android",1],"nume":"telefon13","memorieStocare":[16,2],"valoare":[1300,1]},{"sistemOperare":["android",1],"nume":"telefon14","memorieStocare":[16,2],"valoare":[1400,1]},{"sistemOperare":["android",1],"nume":"telefon15","memorieStocare":[32,2],"valoare":[1100,1]},{"sistemOperare":["ios",2],"nume":"telefon[16,1]","memorieStocare":[32,2],"valoare":[900,1]},{"sistemOperare":["android",1],"nume":"telefon17","memorieStocare":[64,1],"valoare":[2200,2]},{"sistemOperare":["ios",2],"nume":"telefon18","memorieStocare":[64,1],"valoare":[800,1]},{"sistemOperare":["ios",2],"nume":"telefon19","memorieStocare":[128,1],"valoare":[700,1]},{"sistemOperare":["android",1],"nume":"telefon20","memorieStocare":[128,1],"valoare":[600,1]},{"sistemOperare":["ios",2],"nume":"telefon21","memorieStocare":[16,2],"valoare":[500,1]},{"sistemOperare":["android",1],"nume":"telefon22","memorieStocare":[16,2],"valoare":[400,1]},{"sistemOperare":["ios",2],"nume":"telefon23","memorieStocare":[16,2],"valoare":[850,1]},{"sistemOperare":["android",1],"nume":"telefon24","memorieStocare":[16,2],"valoare":[950,1]}]')},18:function(e){e.exports=JSON.parse('[{"textIntrebare":"Ce buget aveti?","raspunsIntrebare":["sub 1500lei","peste 1500lei"],"raspunsConditie":[1,2],"categorie":"valoare"},{"textIntrebare":"Doriti ca telefonul dumneavoastra sa aibe o memorie de stocare mare ?","raspunsIntrebare":["Da","Nu"],"raspunsConditie":[1,2],"categorie":"memorieStocare"},{"textIntrebare":"Ce sistem de operare doriti sa aibe telefonul?","raspunsIntrebare":["Android","IOS"],"raspunsConditie":[1,2],"categorie":"sistemOperare"}]')},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),s=a.n(i),o=(a(16),a(1)),c=a(2),l=a(4),u=a(3),m=a(6),p=a(5),h=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Intrebare"},this.props.text)}}]),t}(n.a.Component),d=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Raspunsuri"},n.a.createElement("div",{onClick:function(){return e.props.date.getRaspunsCurent(1)}},this.props.date.intrebariText[0]),n.a.createElement("div",{onClick:function(){return e.props.date.getRaspunsCurent(2)}},this.props.date.intrebariText[1]))}}]),t}(n.a.Component),f=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"MeniuContainer"},0!=this.props.date.i?n.a.createElement("div",{onClick:this.props.date.inapoi},"Inapoi"):"",0===this.props.date.arataFinal?n.a.createElement("div",{onClick:function(){return e.props.date.getRaspunsCurent(3)}},"Nu conteaza"):"",n.a.createElement("div",{onClick:this.props.date.start},"Reseteaza"),this.props.date.i>0&&0===this.props.date.arataFinal?n.a.createElement("div",{onClick:this.props.date.arataTelefonFinal},"Termina"):"")}}]),t}(n.a.Component),v=function e(t,a,r,n){var i=this;Object(o.a)(this,e),this.getText=function(){return i.text},this.getCategorie=function(){return i.categorie},this.getRaspunsuriText=function(e){return i.raspunsuriText[e]},this.getRaspunsuri=function(e){return i.raspunsuri[e]},this.text=t,this.raspunsuriText=a,this.raspunsuri=r,this.categorie=n},b=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),console.log(e),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Raspunsuri"},n.a.createElement("div",null,"Telefonul cel mai potrivit pentru dumneavoastra este:"),n.a.createElement("div",null,this.props.date.nume),n.a.createElement("div",null,this.props.date.sistemOperare[0]),n.a.createElement("div",null,this.props.date.memorieStocare[0]),n.a.createElement("div",null,this.props.date.valoare[0]))}}]),t}(n.a.Component),O=a(17),g=a(18),S=[],j=O,C=[],E=[];for(var T in g)E.push(new v(g[T].textIntrebare,g[T].raspunsIntrebare,g[T].raspunsConditie,g[T].categorie));var y=E.length;console.log(y);var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getRaspunsCurent=a.getRaspunsCurent.bind(Object(m.a)(a)),a.schimbaIntrebarea=a.schimbaIntrebarea.bind(Object(m.a)(a)),a.start=a.start.bind(Object(m.a)(a)),a.inapoi=a.inapoi.bind(Object(m.a)(a)),a.arataTelefonFinal=a.arataTelefonFinal.bind(Object(m.a)(a)),a.state={i:0,raspunsCurent:4,arataFinal:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return 0===this.state.arataFinal?n.a.createElement("div",{className:"Content",from:{opacity:0},to:{opacity:1}},n.a.createElement(h,{text:E[this.state.i].text}),n.a.createElement(d,{date:{intrebariText:E[this.state.i].raspunsuriText,raspunsuri:E[this.state.i].raspunsuri,getRaspunsCurent:this.getRaspunsCurent}}),n.a.createElement(f,{date:{arataTelefonFinal:this.arataTelefonFinal,start:this.start,inapoi:this.inapoi,i:this.state.i,arataFinal:this.state.arataFinal,getRaspunsCurent:this.getRaspunsCurent}})):n.a.createElement("div",{className:"Content"},n.a.createElement(b,{date:j[0]}),n.a.createElement(f,{date:{arataTelefonFinal:this.arataTelefonFinal,start:this.start,inapoi:this.inapoi,i:this.state.i,arataFinal:this.state.arataFinal}}))}},{key:"getRaspunsCurent",value:function(e){if(this.props.action(),this.setState({raspunsCurent:e}),C[this.state.i]=j,1===e||2===e){for(var t in j){j[t][E[this.state.i].categorie][1]===e&&S.push(j[t])}console.log(j.length),j=S,S=[]}this.schimbaIntrebarea()}},{key:"schimbaIntrebarea",value:function(){this.props.action(),this.state.i+1===y?this.setState({arataFinal:1,i:this.state.i+1}):this.setState({i:this.state.i+1})}},{key:"start",value:function(){this.props.action(),this.setState({i:0,arataFinal:0}),S=[],j=O}},{key:"arataTelefonFinal",value:function(){this.props.action(),this.setState({arataFinal:1,i:this.state.i+1})}},{key:"inapoi",value:function(){this.props.action(),j=C[this.state.i-1],console.log(j),this.setState({i:this.state.i-1,arataFinal:0})}}]),t}(n.a.Component),x=a(7),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(x.Spring,{from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:0}},(function(t){return n.a.createElement(x.animated.div,{style:t,className:"Incepe"},n.a.createElement("div",{onClick:e.props.action},"Incepe"))}))}}]),t}(n.a.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSw=a.handleSw.bind(Object(m.a)(a)),a.resetTransition=a.resetTransition.bind(Object(m.a)(a)),a.state={sw:1,resetT:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.state.sw?n.a.createElement(x.Spring,{from:{opacity:0,marginTop:"-50vh"},to:{opacity:1,marginTop:"2vh"},config:{mass:1,tension:200,friction:15}},(function(t){return n.a.createElement(x.animated.div,{style:t,className:"Container"},n.a.createElement(F,{action:e.handleSw}))})):n.a.createElement(x.Spring,{from:{opacity:0,marginTop:"-50vh"},to:{opacity:1,marginTop:"2vh"},config:{mass:1,tension:200,friction:15},reset:this.state.resetT},(function(t){return n.a.createElement(x.animated.div,{style:t,className:"Container"},n.a.createElement(k,{action:e.resetTransition}))})))}},{key:"resetTransition",value:function(){console.log("ceva"),this.setState({resetT:!0})}},{key:"handleSw",value:function(){console.log("handleSw"),this.state.sw?this.setState({sw:0}):this.setState({sw:1}),this.resetTransition()}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.7ddc6388.chunk.js.map