(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,a){e.exports=a(22)},15:function(e,n,a){},20:function(e,n,a){},22:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),o=a(7),l=a.n(o),s=(a(15),a(1)),r=a(2),c=a(4),d=a(3),u=a(5),h=a(8),g=a.n(h),p=a(9),m=a.n(p),f=(a(20),t.Component,function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(d.a)(n).call(this,e))).state={showModal:!1,loading:!1,error:null},a}return Object(u.a)(n,e),Object(r.a)(n,[{key:"openModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"onLoginSuccess",value:function(e,n){console.log("logged successfully with "+e)}},{key:"onLoginFail",value:function(e,n){console.log("logging failed with "+e),this.setState({error:n})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"splash"},i.a.createElement("h1",null,"Ventus"),i.a.createElement("h2",null,"A simple and effective chat application designed for university students."),i.a.createElement("div",{className:"login"},i.a.createElement("button",{className:"login-button",onClick:function(){return e.openModal()}},"Log in"),i.a.createElement(g.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:this.state.loading,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this)},loginError:{label:"Couldn't sign in, please try again."},registerError:{label:"Couldn't sign up, please try again."},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:null,onRegister:null,onRecoverPassword:null,loginInputs:[{containerClass:"log",type:"Email",inputClass:"inp",id:"id",name:"name",placeholder:"Email",label:"Email"},{containerClass:"log",type:"Password",inputClass:"inp",id:"id",name:"name",placeholder:"Password",label:"Password"}],registerInputs:[{containerClass:"log",type:"Name",inputClass:"inp",id:"id",name:"name",placeholder:"Name",label:"Name"},{containerClass:"log",type:"Email",inputClass:"inp",id:"id",name:"name",placeholder:"Email",label:"Email"},{containerClass:"log",type:"Password",inputClass:"inp",id:"id",name:"name",placeholder:"Password",label:"Password"}]}}))))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,a){e.exports=a.p+"static/media/placeholder.74c24282.gif"}},[[10,2,1]]]);
//# sourceMappingURL=main.a159b122.chunk.js.map