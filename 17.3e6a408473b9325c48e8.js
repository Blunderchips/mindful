(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{CqG3:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(n){for(var t in n)l.hasOwnProperty(t)||(l[t]=n[t])}(t("tct4"))},t68Q:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("oBZk"),r=t("ZZ/e"),a=t("Ip0R"),c=(t("CqG3"),function(){function n(n){var l=this;this.afs=n,this.userUid="1234",this.a=0,this.b=0,this.c=0,this.products={Bank:{},"Medical Aid":{},"Gap Cover":{},Life_Insurance:{},Investment:{},"Car and Home":{},Vitality:{}},this.suggestions=[],this.afs.collection(this.userUid+"_data").valueChanges().subscribe(function(n){n.forEach(function(n){switch(n.type){case 0:l.a++;break;case 1:l.b++;break;case 2:l.c++}})})}return n.prototype.ngOnInit=function(){},n.prototype.getMax=function(){return Math.max(this.a,Math.max(this.b,this.c))},n.prototype.getSuggestion=function(){var n=[];return this.a>0&&n.push(this.products.Vitality),this.b>0&&n.push(this.products.Life_Insurance),this.c>0&&n.push(this.products.Investment),console.log(n),n},n.prototype.isMax=function(n){return this.getMax()===n},n.prototype.asd=function(){return this.isMax(this.a)?0:this.isMax(this.b)?1:2},n}()),s=t("fvl4"),b=u.nb({encapsulation:0,styles:[[""]],data:{}});function f(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,14,"ion-card",[],null,null,null,i.t,i.d)),u.ob(1,49152,null,0,r.k,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,9,"ion-item",[],null,null,null,i.x,i.i)),u.ob(3,49152,null,0,r.F,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,1,"ion-icon",[["name","pin"],["slot","start"]],null,null,null,i.w,i.h)),u.ob(5,49152,null,0,r.A,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(6,0,null,0,2,"ion-label",[],null,null,null,i.y,i.j)),u.ob(7,49152,null,0,r.L,[u.h,u.k],null,null),(n()(),u.Db(-1,0,["ion-item in a card, icon left, button right"])),(n()(),u.pb(9,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,null,null,i.r,i.c)),u.ob(10,49152,null,0,r.i,[u.h,u.k],{fill:[0,"fill"]},null),(n()(),u.Db(-1,0,["View"])),(n()(),u.pb(12,0,null,0,2,"ion-card-content",[],null,null,null,i.s,i.e)),u.ob(13,49152,null,0,r.l,[u.h,u.k],null,null),(n()(),u.Db(-1,0,[" This is content, without any paragraph or header tags, within an ion-card-content element. "]))],function(n,l){n(l,5,0,"pin"),n(l,10,0,"outline")},null)}function h(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,i.v,i.g)),u.ob(1,49152,null,0,r.z,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.D,i.o)),u.ob(3,49152,null,0,r.zb,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,i.C,i.n)),u.ob(5,49152,null,0,r.xb,[u.h,u.k],null,null),(n()(),u.Db(-1,0,[" Recommender "])),(n()(),u.pb(7,0,null,null,3,"ion-content",[],null,null,null,i.u,i.f)),u.ob(8,49152,null,0,r.s,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,f)),u.ob(10,278528,null,0,a.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,10,0,l.component.getSuggestion())},null)}function d(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,1,"app-tab4",[],null,null,null,h,b)),u.ob(1,114688,null,0,c,[s.a],null,null)],function(n,l){n(l,1,0)},null)}var p=u.lb("app-tab4",c,d,{},{},[]),g=t("gIcY"),m=t("ZYCi");t.d(l,"Tab4PageModuleNgFactory",function(){return x});var x=u.mb(e,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[o.a,p]],[3,u.j],u.x]),u.xb(4608,a.j,a.i,[u.u,[2,a.p]]),u.xb(4608,r.b,r.b,[u.z,u.g]),u.xb(4608,r.Db,r.Db,[r.b,u.j,u.q]),u.xb(4608,r.Gb,r.Gb,[r.b,u.j,u.q]),u.xb(4608,g.o,g.o,[]),u.xb(1073742336,a.b,a.b,[]),u.xb(1073742336,r.Bb,r.Bb,[]),u.xb(1073742336,g.m,g.m,[]),u.xb(1073742336,g.d,g.d,[]),u.xb(1073742336,m.n,m.n,[[2,m.t],[2,m.m]]),u.xb(1073742336,e,e,[]),u.xb(1024,m.k,function(){return[[{path:"",component:c}]]},[])])})},tct4:function(n,l,t){"use strict";t.r(l);var u=t("fvl4"),e=t("X8TH"),o=t("UdJG"),i=t("9V49"),r=t("D4gr"),a=t("83ve"),c=t("htu+");t.d(l,"EnablePersistenceToken",function(){return u.c}),t.d(l,"PersistenceSettingsToken",function(){return u.e}),t.d(l,"FirestoreSettingsToken",function(){return u.d}),t.d(l,"DefaultFirestoreSettings",function(){return u.b}),t.d(l,"associateQuery",function(){return u.f}),t.d(l,"AngularFirestore",function(){return u.a}),t.d(l,"AngularFirestoreModule",function(){return e.a}),t.d(l,"validateEventsArray",function(){return o.b}),t.d(l,"AngularFirestoreCollection",function(){return o.a}),t.d(l,"AngularFirestoreCollectionGroup",function(){return i.a}),t.d(l,"AngularFirestoreDocument",function(){return r.a}),t.d(l,"docChanges",function(){return a.c}),t.d(l,"sortedChanges",function(){return a.d}),t.d(l,"combineChanges",function(){return a.b}),t.d(l,"combineChange",function(){return a.a}),t.d(l,"fromRef",function(){return c.c}),t.d(l,"fromDocRef",function(){return c.b}),t.d(l,"fromCollectionRef",function(){return c.a})}}]);