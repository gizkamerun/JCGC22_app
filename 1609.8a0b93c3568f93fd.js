"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1609],{1609:(A,u,i)=>{i.r(u),i.d(u,{AccountModule:()=>h});var l=i(9808),o=i(2159),s=i(4030),g=i(655),t=i(9863),d=i(6401);function m(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"ion-list",4)(5,"ion-item",5),t.NdJ("click",function(){return t.CHM(n),t.oxw().updatePicture()}),t._uU(6,"Update Picture"),t.qZA(),t.TgZ(7,"ion-item",5),t.NdJ("click",function(){return t.CHM(n),t.oxw().changeUsername()}),t._uU(8,"Change Username"),t.qZA(),t.TgZ(9,"ion-item",5),t.NdJ("click",function(){return t.CHM(n),t.oxw().changePassword()}),t._uU(10,"Change Password"),t.qZA(),t.TgZ(11,"ion-item",5),t.NdJ("click",function(){return t.CHM(n),t.oxw().support()}),t._uU(12,"Support"),t.qZA(),t.TgZ(13,"ion-item",5),t.NdJ("click",function(){return t.CHM(n),t.oxw().logout()}),t._uU(14,"Logout"),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(3),t.Oqu(n.username)}}const p=[{path:"",component:(()=>{class e{constructor(n,c,a){this.alertCtrl=n,this.router=c,this.userData=a}ngAfterViewInit(){this.getUsername()}updatePicture(){console.log("Clicked to update picture")}changeUsername(){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:c=>{this.userData.setUsername(c.username),this.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]})).present()})}getUsername(){this.userData.getUsername().then(n=>{this.username=n})}changePassword(){console.log("Clicked to change password")}logout(){this.userData.logout(),this.router.navigateByUrl("/login")}support(){this.router.navigateByUrl("/support")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.Br),t.Y36(s.F0),t.Y36(d.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["page-account"]],decls:8,vars:1,consts:[["slot","start"],["class","ion-padding-top ion-text-center",4,"ngIf"],[1,"ion-padding-top","ion-text-center"],["src","https://www.gravatar.com/avatar?d=mm&s=140","alt","avatar"],["inset",""],[3,"click"]],template:function(n,c){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Account"),t.qZA()()(),t.TgZ(6,"ion-content"),t.YNc(7,m,15,1,"div",1),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngIf",c.username))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.W2,l.O5,o.q_,o.Ie],styles:["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(p)],s.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,o.Pc,_]]}),e})()}}]);