(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{CqG3:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(n){for(var l in n)t.hasOwnProperty(l)||(t[l]=n[l])}(l("tct4"))},t68Q:function(n,t,l){"use strict";l.r(t);var u=l("CcnG"),e=function(){return function(){}}(),o=l("pMnS"),r=l("oBZk"),i=l("ZZ/e"),c=l("Ip0R"),a=(l("CqG3"),l("xf3R")),s=function(){function n(n,t){var l=this;this.afs=n,this.date=t,this.userUid="1234",this.a=0,this.b=0,this.c=0,this.products={},this.suggestions=[],this.date.currentMessage.subscribe(function(n){l.userUid=n,l.afs.collection(l.userUid+"_data").valueChanges().subscribe(function(n){n.forEach(function(n){switch(n.type){case 0:l.a++;break;case 1:l.b++;break;case 2:l.c++}})})})}return n.prototype.ngOnInit=function(){},n.prototype.getMax=function(){return Math.max(this.a,Math.max(this.b,this.c))},n.prototype.getSuggestion=function(){var n=[];return console.log(n),n},n.prototype.isMax=function(n){return this.getMax()===n},n.prototype.asd=function(){return this.isMax(this.a)?0:this.isMax(this.b)?1:2},n}(),b=l("fvl4"),f=u.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,14,"ion-card",[],null,null,null,r.t,r.d)),u.ob(1,49152,null,0,i.k,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,9,"ion-item",[],null,null,null,r.x,r.i)),u.ob(3,49152,null,0,i.F,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,1,"ion-icon",[["name","pin"],["slot","start"]],null,null,null,r.w,r.h)),u.ob(5,49152,null,0,i.A,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(6,0,null,0,2,"ion-label",[],null,null,null,r.y,r.j)),u.ob(7,49152,null,0,i.L,[u.h,u.k],null,null),(n()(),u.Db(-1,0,["ion-item in a card, icon left, button right"])),(n()(),u.pb(9,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,null,null,r.r,r.c)),u.ob(10,49152,null,0,i.i,[u.h,u.k],{fill:[0,"fill"]},null),(n()(),u.Db(-1,0,["View"])),(n()(),u.pb(12,0,null,0,2,"ion-card-content",[],null,null,null,r.s,r.e)),u.ob(13,49152,null,0,i.l,[u.h,u.k],null,null),(n()(),u.Db(-1,0,[" This is content, without any paragraph or header tags, within an ion-card-content element. "]))],function(n,t){n(t,5,0,"pin"),n(t,10,0,"outline")},null)}function h(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,r.v,r.g)),u.ob(1,49152,null,0,i.z,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.D,r.o)),u.ob(3,49152,null,0,i.zb,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,r.C,r.n)),u.ob(5,49152,null,0,i.xb,[u.h,u.k],null,null),(n()(),u.Db(-1,0,[" Recommender "])),(n()(),u.pb(7,0,null,null,3,"ion-content",[],null,null,null,r.u,r.f)),u.ob(8,49152,null,0,i.s,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,d)),u.ob(10,278528,null,0,c.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,10,0,t.component.getSuggestion())},null)}function p(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,1,"app-tab4",[],null,null,null,h,f)),u.ob(1,114688,null,0,s,[b.a,a.a],null,null)],function(n,t){n(t,1,0)},null)}var g=u.lb("app-tab4",s,p,{},{},[]),m=l("gIcY"),x=l("ZYCi");l.d(t,"Tab4PageModuleNgFactory",function(){return k});var k=u.mb(e,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[o.a,g]],[3,u.j],u.x]),u.xb(4608,c.j,c.i,[u.u,[2,c.p]]),u.xb(4608,i.b,i.b,[u.z,u.g]),u.xb(4608,i.Db,i.Db,[i.b,u.j,u.q]),u.xb(4608,i.Gb,i.Gb,[i.b,u.j,u.q]),u.xb(4608,m.o,m.o,[]),u.xb(1073742336,c.b,c.b,[]),u.xb(1073742336,i.Bb,i.Bb,[]),u.xb(1073742336,m.m,m.m,[]),u.xb(1073742336,m.d,m.d,[]),u.xb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),u.xb(1073742336,e,e,[]),u.xb(1024,x.k,function(){return[[{path:"",component:s}]]},[])])})},tct4:function(n,t,l){"use strict";l.r(t);var u=l("fvl4"),e=l("X8TH"),o=l("UdJG"),r=l("9V49"),i=l("D4gr"),c=l("83ve"),a=l("htu+");l.d(t,"EnablePersistenceToken",function(){return u.c}),l.d(t,"PersistenceSettingsToken",function(){return u.e}),l.d(t,"FirestoreSettingsToken",function(){return u.d}),l.d(t,"DefaultFirestoreSettings",function(){return u.b}),l.d(t,"associateQuery",function(){return u.f}),l.d(t,"AngularFirestore",function(){return u.a}),l.d(t,"AngularFirestoreModule",function(){return e.a}),l.d(t,"validateEventsArray",function(){return o.b}),l.d(t,"AngularFirestoreCollection",function(){return o.a}),l.d(t,"AngularFirestoreCollectionGroup",function(){return r.a}),l.d(t,"AngularFirestoreDocument",function(){return i.a}),l.d(t,"docChanges",function(){return c.c}),l.d(t,"sortedChanges",function(){return c.d}),l.d(t,"combineChanges",function(){return c.b}),l.d(t,"combineChange",function(){return c.a}),l.d(t,"fromRef",function(){return a.c}),l.d(t,"fromDocRef",function(){return a.b}),l.d(t,"fromCollectionRef",function(){return a.a})},xf3R:function(n,t,l){"use strict";l.d(t,"a",function(){return o});var u=l("26FU"),e=l("CcnG"),o=function(){function n(){this.messageSource=new u.a("default message"),this.currentMessage=this.messageSource.asObservable()}return n.prototype.changeMessage=function(n){this.messageSource.next(n)},n.ngInjectableDef=e.S({factory:function(){return new n},token:n,providedIn:"root"}),n}()}}]);