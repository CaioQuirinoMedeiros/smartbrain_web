(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/brain-solid.a6e129df.svg"},23:function(e,n,t){e.exports=t(53)},29:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(19),i=t.n(s),o=(t(29),t(2)),l=t.n(o),c=t(12),u=t(4),m=t(5),p=t(6),d=t(8),g=t(7),h=t(9),v=t(20),f=t.n(v).a.create({baseURL:"https://smartbrainbackend.herokuapp.com"}),b=t(21),E=t.n(b),w=function(e){var n=e.onRouteChange,t="home"===e.route?r.a.createElement("ul",{className:"nav_list"},r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return n("signin")}},"Sair"))):r.a.createElement("ul",{className:"nav_list"},r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return n("signin")}},"Entrar")),r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return n("register")}},"Cadastro")));return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"logo_box"},r.a.createElement("img",{src:E.a,alt:"logo",onClick:function(e){e.target.classList.toggle("rotate")}})),r.a.createElement("div",{className:"nav_nav"},t))},C=t(3),N=function(e){function n(){var e,t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:"",loading:"",error:""},t.onInputChange=function(e){var n;t.setState((n={},Object(C.a)(n,e.target.name,e.target.value),Object(C.a)(n,"error",""),n))},t.onSubmitSignIn=function(){var e=Object(u.a)(l.a.mark(function e(n){var a,r,s,i,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.setState({loading:"active",error:""}),a=t.state,r=a.email,s=a.password,i=t.props.loadUser,r.length&&s.length){e.next=7;break}return t.setState({error:"Preencha seu e-mail e senha"}),e.abrupt("return");case 7:return e.prev=7,e.next=10,f.post("signin",{email:r,password:s});case 10:o=e.sent,i(o.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),t.setState({error:"Credenciais inv\xe1lidas"});case 17:return e.prev=17,t.setState({loading:""}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[7,14,17,20]])}));return function(n){return e.apply(this,arguments)}}(),t}return Object(h.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange,n=this.state,t=n.email,a=n.password,s=n.error,i=n.loading,o=s?"active":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.onSubmitSignIn,className:"form_signin"},r.a.createElement("legend",{className:"form_legend"},"Entrar"),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{value:t,onChange:this.onInputChange,type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("label",{htmlFor:"password"},"Senha"),r.a.createElement("input",{value:a,onChange:this.onInputChange,type:"password",name:"password",id:"password",required:!0})),r.a.createElement("div",{className:"input-signin_wrapper"}),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("input",{type:"submit",value:"Login"}),r.a.createElement("div",{className:"lds-dual-ring ".concat(i)}),r.a.createElement("div",{className:"error ".concat(o)},"X")),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("span",{onClick:function(){return e("register")}},"Criar conta"))),r.a.createElement("h4",{className:"errorLogin"},s))}}]),n}(r.a.Component),_=function(e){function n(){var e,t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",loading:"",error:""},t.onInputChange=function(e){var n;t.setState((n={},Object(C.a)(n,e.target.name,e.target.value),Object(C.a)(n,"error",""),n))},t.onSubmitRegister=function(){var e=Object(u.a)(l.a.mark(function e(n){var a,r,s,i,o,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({loading:"active",error:""}),a=t.state,r=a.name,s=a.email,i=a.password,o=t.props.loadUser,r.length&&s.length&&i.length||(t.setState({error:"Preencha os campos corretamente"}),alert("ops")),e.prev=5,e.next=8,f.post("register",{name:r,email:s,password:i});case 8:c=e.sent,o(c.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t.setState({error:"Erro ao registrar usu\xe1rio"});case 15:return e.prev=15,t.setState({loading:""}),e.finish(15);case 18:case"end":return e.stop()}},e,null,[[5,12,15,18]])}));return function(n){return e.apply(this,arguments)}}(),t}return Object(h.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange,n=this.state,t=n.name,a=n.email,s=n.password,i=n.error,o=n.loading,l=i?"active":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.onSubmitRegister,className:"form_signin"},r.a.createElement("legend",{className:"form_legend"},"Criar conta"),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("label",{htmlFor:"name"},"Nome"),r.a.createElement("input",{value:t,onChange:this.onInputChange,type:"text",name:"name",id:"name",required:!0})),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{value:a,onChange:this.onInputChange,type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("label",{htmlFor:"password"},"Senha"),r.a.createElement("input",{value:s,onChange:this.onInputChange,type:"password",name:"password",id:"password",required:!0})),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("input",{type:"submit",value:"Cadastrar"}),r.a.createElement("div",{className:"lds-dual-ring ".concat(o)}),r.a.createElement("div",{className:"error ".concat(l)},"X")),r.a.createElement("div",{className:"input-signin_wrapper"},r.a.createElement("span",{onClick:function(){return e("signin")}},"J\xe1 tenho uma conta"))),r.a.createElement("h4",{className:"errorLogin"},i))}}]),n}(r.a.Component),S=function(e){var n=e.name,t=e.entries;return r.a.createElement("section",{className:"rank"},r.a.createElement("h2",{className:"rank_text"},"Bem-vindo, ",n),r.a.createElement("h3",{className:"rank_num"},"Imagens processadas: ",t))},y=function(e){var n=e.onBtnClear,t=e.onInputChange,a=e.onBtnSubmit,s=e.value;return r.a.createElement("section",{className:"input_box"},r.a.createElement("p",null,"Digite o endere\xe7o de uma imagem para encontrar os rostos!"),r.a.createElement("form",{onSubmit:a,className:"input_wrapper"},r.a.createElement("div",{className:"input_button",onClick:n},"Limpar"),r.a.createElement("input",{value:s,className:"input_text",type:"text",placeholder:"URL",onChange:t}),r.a.createElement("input",{className:"input_button",type:"submit",value:"Enviar"})))},k=function(e){var n=e.imageUrl,t=e.boxes,a=e.error,s=a?r.a.createElement("h3",{className:"errorLogin apiError"},a):t.map(function(e){return r.a.createElement("div",{className:"bounding-box",key:"".concat(e.top).concat(e.left),style:{top:e.top,right:e.right,bottom:e.bottom,left:e.left}})});return r.a.createElement("section",{className:"face-recognition"},r.a.createElement("div",{className:"face_box"},s,r.a.createElement("img",{id:"input-img",src:n,alt:""})))},x=t(22),O=t.n(x),j=JSON.parse('{\n  "particles": {\n    "number": {\n      "value": 120,\n      "density": {\n        "enable": true,\n        "value_area": 800\n      }\n    },\n    "color": {\n      "value": "#ffffff"\n    },\n    "shape": {\n      "type": "circle",\n      "stroke": {\n        "width": 0,\n        "color": "#000000"\n      },\n      "polygon": {\n        "nb_sides": 5\n      },\n      "image": {\n        "src": "img/github.svg",\n        "width": 100,\n        "height": 100\n      }\n    },\n    "opacity": {\n      "value": 0.5,\n      "random": false,\n      "anim": {\n        "enable": false,\n        "speed": 0.5,\n        "opacity_min": 0.1,\n        "sync": false\n      }\n    },\n    "size": {\n      "value": 3,\n      "random": true,\n      "anim": {\n        "enable": false,\n        "speed": 20,\n        "size_min": 0.1,\n        "sync": false\n      }\n    },\n    "line_linked": {\n      "enable": true,\n      "distance": 150,\n      "color": "#ffffff",\n      "opacity": 0.4,\n      "width": 1\n    },\n    "move": {\n      "enable": true,\n      "speed": 3,\n      "direction": "none",\n      "random": false,\n      "straight": false,\n      "out_mode": "out",\n      "bounce": false,\n      "attract": {\n        "enable": false,\n        "rotateX": 600,\n        "rotateY": 1200\n      }\n    }\n  },\n  "interactivity": {\n    "detect_on": "canvas",\n    "events": {\n      "onhover": {\n        "enable": true,\n        "mode": "repulse"\n      },\n      "onclick": {\n        "enable": true,\n        "mode": "push"\n      },\n      "resize": true\n    },\n    "modes": {\n      "grab": {\n        "distance": 400,\n        "line_linked": {\n          "opacity": 1\n        }\n      },\n      "bubble": {\n        "distance": 400,\n        "size": 40,\n        "duration": 2,\n        "opacity": 8,\n        "speed": 3\n      },\n      "repulse": {\n        "distance": 200,\n        "duration": 0.4\n      },\n      "push": {\n        "particles_nb": 4\n      },\n      "remove": {\n        "particles_nb": 2\n      }\n    }\n  },\n  "retina_detect": true\n}'),U={error:"",inputUrl:"",imageUrl:"",boxes:[],route:"signin",user:{id:null,name:null,email:null,entries:null,joined:null}},I=function(e){function n(){var e,t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state=U,t.componentDidMount=function(){var e=localStorage.getItem("@smart_brain:user");e&&t.loadUser(JSON.parse(e))},t.loadUser=function(){var e=Object(u.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({route:"home",user:Object(c.a)({},n)},function(){t.saveUser()});case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.saveUser=function(){localStorage.setItem("@smart_brain:user",JSON.stringify(t.state.user))},t.calculateFaceLocation=function(e){var n=e.map(function(e){return e.region_info.bounding_box}),a=document.getElementById("input-img"),r=Number(a.width),s=Number(a.height),i=n.map(function(e){return{top:s*e.top_row,right:r*(1-e.right_col),bottom:s*(1-e.bottom_row),left:r*e.left_col}});t.setState({boxes:i})},t.onBtnClear=function(){t.setState({inputUrl:"",error:""})},t.onInputChange=function(e){t.setState({inputUrl:e.target.value,error:""})},t.onSubmit=function(){var e=Object(u.a)(l.a.mark(function e(n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t.setState({imageUrl:t.state.inputUrl,boxes:[]});case 3:return e.prev=3,e.next=6,f.post("image",{input:t.state.inputUrl,id:t.state.user.id});case 6:a=e.sent,t.calculateFaceLocation(a.data.regions),t.setState({user:Object(c.a)({},t.state.user,{entries:a.data.entries})},function(){return t.saveUser()}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t.setState({error:"Erro ao processar imagem"});case 14:case"end":return e.stop()}},e,null,[[3,11]])}));return function(n){return e.apply(this,arguments)}}(),t.onRouteChange=function(e){"home"!==e&&(t.setState(U),localStorage.clear("@smart_brain:user")),t.setState({route:e})},t}return Object(h.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this.state,n=e.route,t=e.user,a=e.inputUrl,s=e.imageUrl,i=e.boxes,o=e.error;return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{className:"particles",params:j}),r.a.createElement(w,{route:n,onRouteChange:this.onRouteChange}),"signin"===n?r.a.createElement(N,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):"register"===n?r.a.createElement(_,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,{name:t.name,entries:t.entries}),r.a.createElement(y,{value:a,onBtnClear:this.onBtnClear,onInputChange:this.onInputChange,onBtnSubmit:this.onSubmit}),r.a.createElement(k,{boxes:i,imageUrl:s,error:o})))}}]),n}(a.Component);t(50).config(),i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.48eb30e8.chunk.js.map