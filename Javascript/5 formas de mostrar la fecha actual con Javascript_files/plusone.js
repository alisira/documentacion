var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=decodeURIComponent,ba=Object,l=window,ca=parseInt,da=encodeURIComponent,p=document,ea=Array,q=String;function ga(a,b){return a.type=b}
var ha="match",r="href",v="split",x="substr",y="join",z="getAttribute",ia="style",A="call",B="prototype",ja="exec",ka="concat",la="appendChild",ma="update",na="getElementById",C="indexOf",oa="action",D="parentNode",E="replace",pa="removeChild",qa="substring",ra="attributes",sa="documentMode",ta="charAt",F="push",ua="type",G="location",va="getElementsByTagName",wa="protocol",xa="width",ya="shift",za="nodeName",H="apply",Aa="height",I="length",Ba="JSON",K="test",L="toString",Ca="bind",Da="charCodeAt",
Ea="toLowerCase",Fa="setAttribute",Ga="getTime",M="createElement",Ha=function(a,b,c){return a[A][H](a[Ca],arguments)},Ia=function(a,b,c){if(!a)throw Error();if(2<arguments[I]){var d=ea[B].slice[A](arguments,2);return function(){var c=ea[B].slice[A](arguments);ea[B].unshift[H](c,d);return a[H](b,c)}}return function(){return a[H](b,arguments)}},Ja=function(a,b,c){Ja=Function[B][Ca]&&-1!=Function[B][Ca][L]()[C]("native code")?Ha:Ia;return Ja[H](null,arguments)};
Function[B].bind=Function[B][Ca]||function(a,b){if(1<arguments[I]){var c=ea[B].slice[A](arguments,1);c.unshift(this,a);return Ja[H](null,c)}return Ja(this,a)};var N=l,P=p,Ka=N[G],La=function(){},Ma=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},Na=function(a){for(var b=0;b<this[I];b++)if(this[b]===a)return b;return-1},Oa=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[I];d++){var e=a[d];e!=c&&b[F](e);c=e}return b},Pa=/&/g,Qa=/</g,Ra=/>/g,Sa=/"/g,Ta=/'/g,Ua=function(a){return q(a)[E](Pa,"&amp;")[E](Qa,"&lt;")[E](Ra,"&gt;")[E](Sa,"&quot;")[E](Ta,"&#39;")},R=function(){var a;if((a=ba.create)&&Ma[K](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},S=function(a,b){return ba[B].hasOwnProperty[A](a,b)},Va=function(a){if(Ma[K](ba.keys))return ba.keys(a);var b=[],c;for(c in a)S(a,c)&&b[F](c);return b},T=function(a,b){a=a||{};for(var c in a)S(a,c)&&(b[c]=a[c])},Wa=function(a){return function(){N.setTimeout(a,0)}},Xa=function(a,b){if(!a)throw Error(b||"");},U=Q(N,"gapi",{});var V=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ja](a)||b[ja](a)))try{c=aa(a[2])}catch(e){}return c},Ya=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Za=function(a){a=a[ha](Ya);var b=R();b.K=a[1];b.l=a[3]?[a[3]]:[];b.v=a[5]?[a[5]]:[];return b},$a=function(a){return a.K+(0<a.l[I]?"?"+a.l[y]("&"):"")+(0<a.v[I]?"#"+a.v[y]("&"):"")},ab=function(a,b){var c=[];if(a)for(var d in a)if(S(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[F](da(d)+
"="+da(e))}return c},bb=function(a,b,c,d){a=Za(a);a.l[F][H](a.l,ab(b,d));a.v[F][H](a.v,ab(c,d));return $a(a)},cb=function(a,b){var c="";2E3<b[I]&&(c=b[qa](2E3),b=b[qa](0,2E3));var d=a[M]("div"),e=a[M]("a");e.href=b;d[la](e);d.innerHTML=d.innerHTML;b=q(d.firstChild[r]);d[D]&&d[D][pa](d);return b+c},db=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var eb=function(a,b,c,d){if(N[c+"EventListener"])N[c+"EventListener"](a,b,!1);else if(N[d+"tachEvent"])N[d+"tachEvent"]("on"+a,b)},fb=function(){var a=P.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent[C]("MSIE")},ib=function(a){var b=gb;if(!fb())try{b()}catch(c){}hb(a)},hb=function(a){if(fb())a();else{var b=!1,c=function(){if(!b)return b=!0,a[H](this,arguments)};N.addEventListener?(N.addEventListener("load",c,!1),N.addEventListener("DOMContentLoaded",c,!1)):N.attachEvent&&
(N.attachEvent("onreadystatechange",function(){fb()&&c[H](this,arguments)}),N.attachEvent("onload",c))}},jb=function(a){for(;a.firstChild;)a[pa](a.firstChild)},kb={button:!0,div:!0,span:!0};var W;W=Q(N,"___jsl",R());Q(W,"I",0);Q(W,"hel",10);var lb=function(a){return W.dpo?W.h:V(a,"jsh",W.h)},mb=function(a){var b=Q(W,"sws",[]);b[F][H](b,a)},nb=function(a){return Q(W,"watt",R())[a]},pb=function(a){var b=Q(W,"PQ",[]);W.PQ=[];var c=b[I];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},qb=function(a){return Q(Q(W,"H",R()),a,R())};var rb=Q(W,"perf",R()),sb=Q(rb,"g",R()),tb=Q(rb,"i",R());Q(rb,"r",[]);R();R();var ub=function(a,b,c){var d=rb.r;"function"===typeof d?d(a,b,c):d[F]([a,b,c])},vb=function(a,b,c){sb[a]=!b&&sb[a]||c||(new Date)[Ga]();ub(a)},xb=function(a,b,c){b&&0<b[I]&&(b=wb(b),c&&0<c[I]&&(b+="___"+wb(c)),28<b[I]&&(b=b[x](0,28)+(b[I]-28)),c=b,b=Q(tb,"_p",R()),Q(b,c,R())[a]=(new Date)[Ga](),ub(a,"_p",c))},wb=function(a){return a[y]("__")[E](/\./g,"_")[E](/\-/g,"_")[E](/\,/g,"_")};var yb=R(),zb=[],X=function(a){throw Error("Bad hint"+(a?": "+a:""));};zb[F](["jsl",function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?W[b]=Q(W,b,[])[ka](c):Q(W,b,c)}if(b=a.u)a=Q(W,"us",[]),a[F](b),(b=/^https:(.*)$/[ja](b))&&a[F]("http:"+b[1])}]);var Ab=/^(\/[a-zA-Z0-9_\-]+)+$/,Bb=/^[a-zA-Z0-9\-_\.,!]+$/,Cb=/^gapi\.loaded_[0-9]+$/,Db=/^[a-zA-Z0-9,._-]+$/,Hb=function(a,b,c,d){var e=a[v](";"),f=e[ya](),g=yb[f],k=null;g?k=g(e,b,c,d):X("no hint processor for: "+f);k||X("failed to generate load url");b=k;c=b[ha](Eb);(d=b[ha](Fb))&&1===d[I]&&Gb[K](b)&&c&&1===c[I]||X("failed sanity: "+a);return k},Kb=function(a,b,c,d){a=Ib(a);Cb[K](c)||X("invalid_callback");b=Jb(b);d=d&&d[I]?Jb(d):null;var e=function(a){return da(a)[E](/%2C/g,",")};return[da(a.$)[E](/%2C/g,
",")[E](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.J?"/am="+e(a.J):"",a.T?"/rs="+e(a.T):"",a.V?"/t="+e(a.V):"","/cb=",e(c)][y]("")},Ib=function(a){"/"!==a[ta](0)&&X("relative path");for(var b=a[qa](1)[v]("/"),c=[];b[I];){a=b[ya]();if(!a[I]||0==a[C]("."))X("empty/relative directory");else if(0<a[C]("=")){b.unshift(a);break}c[F](a)}a={};for(var d=0,e=b[I];d<e;++d){var f=b[d][v]("="),g=aa(f[0]),k=aa(f[1]);2==f[I]&&g&&k&&(a[g]=a[g]||k)}b="/"+c[y]("/");Ab[K](b)||
X("invalid_prefix");c=Lb(a,"k",!0);d=Lb(a,"am");e=Lb(a,"rs");a=Lb(a,"t");return{$:b,version:c,J:d,T:e,V:a}},Jb=function(a){for(var b=[],c=0,d=a[I];c<d;++c){var e=a[c][E](/\./g,"_")[E](/-/g,"_");Db[K](e)&&b[F](e)}return b[y](",")},Lb=function(a,b,c){a=a[b];!a&&c&&X("missing: "+b);if(a){if(Bb[K](a))return a;X("invalid: "+b)}return null},Gb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Fb=/\/cb=/g,Eb=/\/\//g,Mb=function(){var a=lb(Ka[r]);if(!a)throw Error("Bad hint");return a};
yb.m=function(a,b,c,d){(a=a[0])||X("missing_hint");return"https://apis.google.com"+Kb(a,b,c,d)};var Nb=decodeURI("%73cript"),Ob=function(a,b){for(var c=[],d=0;d<a[I];++d){var e=a[d];e&&0>Na[A](b,e)&&c[F](e)}return c},Qb=function(a){"loading"!=P.readyState?Pb(a):P.write("<"+Nb+' src="'+encodeURI(a)+'"></'+Nb+">")},Pb=function(a){var b=P[M](Nb);b[Fa]("src",a);b.async="true";(a=P[va](Nb)[0])?a[D].insertBefore(b,a):(P.head||P.body||P.documentElement)[la](b)},Rb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<zb[I];d++){var e=zb[d][0],f=zb[d][1];f&&S(c,e)&&f(c[e],a,b)}},Tb=function(a,b,c){Sb(function(){var c;
c=b===lb(Ka[r])?Q(U,"_",R()):R();c=Q(qb(b),"_",c);a(c)},c)},Vb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Rb(a,c);var d=a?a[v](":"):[],e=c.h||Mb(),f=Q(W,"ah",R());if(f["::"]&&d[I]){for(var g=[],k=null;k=d[ya]();){var h=k[v]("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,t=g[I]&&g[g[I]-1]||null,m=t;t&&t.hint==h||(m={hint:h,N:[]},g[F](m));m.N[F](k)}var n=g[I];if(1<n){var w=c.callback;w&&(c.callback=function(){0==--n&&w()})}for(;d=g[ya]();)Ub(d.N,c,d.hint)}else Ub(d||[],c,e)},Ub=function(a,
b,c){a=Oa(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,k=b.onerror,h=void 0;"function"==typeof k&&(h=k);var t=null,m=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=Q(qb(c),"r",[]).sort(),n=Q(qb(c),"L",[]).sort(),w=[][ka](k),O=function(a,b){if(m)return 0;N.clearTimeout(t);n[F][H](n,u);var d=((U||{}).config||{})[ma];d?d(e):e&&Q(W,"cu",[])[F](e);if(b){xb("me0",a,w);try{Tb(b,c,h)}finally{xb("me1",a,w)}}return 1};0<f&&(t=N.setTimeout(function(){m=
!0;g()},f));var u=Ob(a,n);if(u[I]){var u=Ob(a,k),J=Q(W,"CP",[]),fa=J[I];J[fa]=function(a){if(!a)return 0;xb("ml1",u,w);var b=function(b){J[fa]=null;O(u,a)&&pb(function(){d&&d();b()})},c=function(){var a=J[fa+1];a&&a()};0<fa&&J[fa-1]?J[fa]=function(){b(c)}:b(c)};if(u[I]){var ob="loaded_"+W.I++;U[ob]=function(a){J[fa](a);U[ob]=null};a=Hb(c,u,"gapi."+ob,k);k[F][H](k,u);xb("ml0",u,w);b.sync||N.___gapisync?Qb(a):Pb(a)}else J[fa](La)}else O(u)&&d&&d()};var Sb=function(a,b){if(W.hee&&0<W.hel)try{return a()}catch(c){b&&b(c),W.hel--,Vb("debug_error",function(){try{l.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(d){throw b&&b(d),d;}};U.load=function(a,b){return Sb(function(){return Vb(a,b)})};var Wb=function(a){var b=l.___jsl=l.___jsl||{};b[a]=b[a]||[];return b[a]},Xb=function(a){var b=l.___jsl=l.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Yb=function(a){return"object"===typeof a&&/\[native code\]/[K](a[F])},Zb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Yb(a[c])&&!Yb(b[c])?Zb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Yb(b[c])?[]:{},Zb(a[c],b[c])):a[c]=b[c])},$b=function(a){if(a&&!/^\s+$/[K](a)){for(;0==a[Da](a[I]-
1);)a=a[qa](0,a[I]-1);var b;try{b=l[Ba].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},ac=function(a){Xb(!0);var b=l.___gcfg,c=Wb("cu");if(b&&b!==l.___gu){var d={};Zb(d,b);c[F](d);l.___gu=b}var b=Wb("cu"),e=p.scripts||p[va]("script")||[],d=[],f=[];f[F][H](f,Wb("us"));for(var g=0;g<e[I];++g)for(var k=e[g],h=0;h<f[I];++h)k.src&&
0==k.src[C](f[h])&&d[F](k);0==d[I]&&0<e[I]&&e[e[I]-1].src&&d[F](e[e[I]-1]);for(e=0;e<d[I];++e)d[e][z]("gapi_processed")||(d[e][Fa]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=$b(f))&&b[F](f));a&&(d={},Zb(d,a),c[F](d));d=Wb("cd");a=0;for(b=d[I];a<b;++a)Zb(Xb(),d[a]);d=Wb("ci");a=0;for(b=d[I];a<b;++a)Zb(Xb(),d[a]);a=0;for(b=c[I];a<b;++a)Zb(Xb(),c[a])},Y=function(a){if(!a)return Xb();a=a[v]("/");for(var b=Xb(),c=0,d=a[I];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[I]&&void 0!==b?b:void 0},bc=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[v]("/"),f=0,g=e[I];f<g-1;++f)var k={},d=d[e[f]]=k;d[e[f]]=b}ac(c)};var cc=function(){var a=l.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),Q(W,"ci",[])[F](a),l.__GOOGLEAPIS=void 0)};var dc={apppackagename:1,callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},ec=!1,fc=R(),gc=function(){if(!ec){for(var a=p[va]("meta"),b=0;b<a[I];++b){var c=a[b].name[Ea]();if(0==c.lastIndexOf("google-signin-",0)){var c=c[qa](14),d=a[b].content;dc[c]&&d&&(fc[c]=d)}}if(l.self!==l.top){var a=p[G][L](),e;for(e in dc)0<dc[e]&&(b=V(a,e,""))&&(fc[e]=b)}ec=!0}e=R();T(fc,e);return e},hc=function(a){return!!(a.clientid&&a.scope&&a.callback)};var ic=l.console,jc=function(a){ic&&ic.log&&ic.log(a)};var kc=function(){return!!W.oa},lc=function(){};var Z=Q(W,"rw",R()),mc=function(a){for(var b in Z)a(Z[b])},nc=function(a,b){var c=Z[a];c&&c.state<b&&(c.state=b)};var oc;var pc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,qc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,rc=function(a){var b=Y("googleapis.config/sessionIndex");null==b&&(b=l.__X_GOOG_AUTHUSER);if(null==b){var c=l.google;c&&(b=c.authuser)}null==b&&(a=a||l[G][r],b=V(a,"authuser")||null,null==b&&(b=(b=a[ha](pc))?b[1]:null));return null==b?null:q(b)},sc=function(a){var b=Y("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||l[G][r])[ha](qc))?
a[1]:null);return null==b?null:q(b)};var tc=function(){this.c=-1};var uc=function(){this.c=-1;this.c=64;this.b=[];this.C=[];this.W=[];this.w=[];this.w[0]=128;for(var a=1;a<this.c;++a)this.w[a]=0;this.A=this.j=0;this.reset()};(function(){function a(){}a.prototype=tc[B];uc.ga=tc[B];uc.prototype=new a;uc.K=function(a,c,d){for(var e=ea(arguments[I]-2),f=2;f<arguments[I];f++)e[f-2]=arguments[f];return tc[B][c][H](a,e)}})();uc[B].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.A=this.j=0};
var vc=function(a,b,c){c||(c=0);var d=a.W;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[Da](c)<<24|b[Da](c+1)<<16|b[Da](c+2)<<8|b[Da](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],k=a.b[3],h=a.b[4],t,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),t=1518500249):(f=c^g^k,t=1859775393):60>e?(f=c&g|k&(c|g),t=2400959708):(f=c^g^k,t=3395469782),f=(b<<5|b>>>27)+
f+h+t+d[e]&4294967295,h=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+h&4294967295};
uc[B].update=function(a,b){if(null!=a){void 0===b&&(b=a[I]);for(var c=b-this.c,d=0,e=this.C,f=this.j;d<b;){if(0==f)for(;d<=c;)vc(this,a,d),d+=this.c;if("string"==typeof a)for(;d<b;){if(e[f]=a[Da](d),++f,++d,f==this.c){vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.c){vc(this,e);f=0;break}}this.j=f;this.A+=b}};
uc[B].digest=function(){var a=[],b=8*this.A;56>this.j?this[ma](this.w,56-this.j):this[ma](this.w,this.c-(this.j-56));for(var c=this.c-1;56<=c;c--)this.C[c]=b&255,b/=256;vc(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var wc=function(){this.G=new uc};wc[B].reset=function(){this.G.reset()};var xc=N.crypto,yc=!1,zc=0,Ac=0,Bc=1,Cc=0,Dc="",Ec=function(a){a=a||N.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[Ga]()%1E6*b;Bc=Bc*b%Cc;0<zc&&++Ac==zc&&eb("mousemove",Ec,"remove","de")},Fc=function(a){var b=new wc;a=unescape(da(a));for(var c=[],d=0,e=a[I];d<e;++d)c[F](a[Da](d));b.G[ma](c);b=b.G.digest();a="";for(c=0;c<b[I];c++)a+="0123456789ABCDEF"[ta](Math.floor(b[c]/16))+"0123456789ABCDEF"[ta](b[c]%16);return a},yc=!!xc&&"function"==typeof xc.getRandomValues;
yc||(Cc=1E6*(screen[xa]*screen[xa]+screen[Aa]),Dc=Fc(P.cookie+"|"+P[G]+"|"+(new Date)[Ga]()+"|"+Math.random()),zc=Y("random/maxObserveMousemove")||0,0!=zc&&eb("mousemove",Ec,"add","at"));var Gc=function(){var a=Bc,a=a+ca(Dc[x](0,20),16);Dc=Fc(Dc);return a/(Cc+Math.pow(16,20))},Hc=function(){var a=new N.Uint32Array(1);xc.getRandomValues(a);return Number("0."+a[0])};var Ic=function(){var a=W.onl;if(!a){a=R();W.onl=a;var b=R();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Jc=function(a,b){var c=b.onload;return"function"===typeof c?(Ic().a(a,c),c):null},Kc=function(a){Xa(/^\w+$/[K](a),"Unsupported id - "+a);Ic();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Lc=function(a){Ic().r(a)};var Mc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Nc={allowtransparency:!0,onload:!0},Oc=0,Pc=function(a){Xa(!a||db[K](a),"Illegal url for new iframe - "+a)},Qc=function(a,b,c,d,e){Pc(c.src);var f,g=Jc(d,c),k=g?Kc(d):"";try{p.all&&(f=a[M]('<iframe frameborder="'+Ua(q(c.frameborder))+'" scrolling="'+Ua(q(c.scrolling))+'" '+k+' name="'+Ua(q(c.name))+'"/>'))}catch(h){}finally{f||(f=a[M]("iframe"),
g&&(f.onload=function(){f.onload=null;g[A](this)},Lc(d)))}for(var t in c)a=c[t],"style"===t&&"object"===typeof a?T(a,f[ia]):Nc[t]||f[Fa](t,q(a));(t=e&&e.beforeNode||null)||e&&e.dontclear||jb(b);b.insertBefore(f,t);f=t?t.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Rc=/^:[\w]+$/,Sc=/:([a-zA-Z_]+):/g,Tc=function(){var a=rc()||"0",b=sc(),c;c=rc(void 0)||a;var d=sc(void 0),e="";c&&(e+="u/"+c+"/");d&&(e+="b/"+d+"/");c=e||null;(e=(d=!1===Y("isLoggedIn"))?"_/im/":"")&&(c="");var f=Y("iframes/:socialhost:"),g=Y("iframes/:im_socialhost:");return oc={socialhost:f,ctx_socialhost:d?g:f,session_index:a,session_delegate:b,session_prefix:c,im_prefix:e}},Uc=function(a,b){return Tc()[b]||""},Vc=function(a){return function(b,c){return a?Tc()[c]||a[c]||"":Tc()[c]||""}};var Wc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Xc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[K](a)?'"'+a[E](b,function(a){var b=Wc[a];if(b)return b;b=a[Da]();return"\\u00"+Math.floor(b/16)[L](16)+(b%16)[L](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?q(a):"null";case "boolean":case "null":return q(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[I]&&!a.propertyIsEnumerable("length")){d=
a[I];for(c=0;c<d;c+=1)b[F](Xc(a[c])||"null");return"["+b[y](",")+"]"}for(c in a)!/___$/[K](c)&&S(a,c)&&"string"===typeof c&&(d=Xc(a[c]))&&b[F](Xc(c)+":"+d);return"{"+b[y](",")+"}"}return""}},Yc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[K](a[E](/\\["\\\/b-u]/g,"@")[E](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[E](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Zc=!1;try{Zc=!!l[Ba]&&'["a"]'===l[Ba].stringify(["a"])&&"a"===l[Ba].parse('["a"]')[0]}catch($c){}
var ad=function(a){try{return l[Ba].parse(a)}catch(b){return!1}},bd=Zc?l[Ba].stringify:Xc,cd=Zc?ad:Yc;var dd=function(a){var b;a[ha](/^https?%3A/i)&&(b=aa(a));return cb(p,b?b:a)},ed=function(a){a=a||"canonical";for(var b=p[va]("link"),c=0,d=b[I];c<d;c++){var e=b[c],f=e[z]("rel");if(f&&f[Ea]()==a&&(e=e[z]("href"))&&(e=dd(e))&&null!=e[ha](/^https?:\/\/[\w\-\_\.]+/i))return e}return l[G][r]};var fd={se:"0"},gd={post:!0},hd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},id="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),jd=Q(W,"WI",R()),kd=function(a,b,c){var d,e;d={};var f=e=a;"plus"==a&&b[oa]&&(e=a+"_"+b[oa],f=a+"/"+b[oa]);(e=Y("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+f+"?usegapi=1");for(var g in fd)d[g]=g+"/"+(b[g]||fd[g])+"/";d=cb(P,e[E](Sc,Vc(d)));g="iframes/"+
a+"/params/";f={};T(b,f);(e=Y("lang")||Y("gwidget/lang"))&&(f.hl=e);gd[a]||(f.origin=l[G].origin||l[G][wa]+"//"+l[G].host);f.exp=Y(g+"exp");if(g=Y(g+"location"))for(e=0;e<g[I];e++){var k=g[e];f[k]=N[G][k]}switch(a){case "plus":case "follow":g=f[r];e=b[oa]?void 0:"publisher";g=(g="string"==typeof g?g:void 0)?dd(g):ed(e);f.url=g;delete f[r];break;case "plusone":g=(g=b[r])?dd(g):ed();f.url=g;g=b.db;e=Y();null==g&&e&&(g=e.db,null==g&&(g=e.gwidget&&e.gwidget.db));f.db=g||void 0;g=b.ecp;e=Y();null==g&&
e&&(g=e.ecp,null==g&&(g=e.gwidget&&e.gwidget.ecp));f.ecp=g||void 0;delete f[r];break;case "signin":f.url=ed()}W.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;for(var h in fd)f[h]&&delete f[h];f.gsrc=Y("iframes/:source:");h=Y("inline/css");"undefined"!==typeof h&&0<c&&h>=c&&(f.ic="1");h=/^#|^fr-/;c={};for(var t in f)S(f,t)&&h[K](t)&&(c[t[E](h,"")]=f[t],delete f[t]);t="q"==Y("iframes/"+a+"/params/si")?f:c;h=gc();for(var m in h)!S(h,m)||S(f,m)||S(c,m)||(t[m]=h[m]);m=[][ka](id);(t=Y("iframes/"+
a+"/methods"))&&"object"===typeof t&&Ma[K](t[F])&&(m=m[ka](t));for(var n in b)S(b,n)&&/^on/[K](n)&&("plus"!=a||"onconnect"!=n)&&(m[F](n),delete f[n]);delete f.callback;c._methods=m[y](",");return bb(d,f,c)},ld=["style","data-gapiscan"],nd=function(a){for(var b=R(),c=0!=a[za][Ea]()[C]("g:"),d=0,e=a[ra][I];d<e;d++){var f=a[ra][d],g=f.name,k=f.value;0<=Na[A](ld,g)||c&&0!=g[C]("data-")||"null"===k||"specified"in f&&!f.specified||(c&&(g=g[x](5)),b[g[Ea]()]=k)}a=a[ia];(c=md(a&&a[Aa]))&&(b.height=q(c));
(a=md(a&&a[xa]))&&(b.width=q(a));return b},md=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=ca(a,10));return b},pd=function(){var a=W.drw;mc(function(b){if(a!==b.id&&4!=b.state&&"share"!=b[ua]){var c=b.id,d=b[ua],e=b.url;b=b.userParams;var f=P[na](c);if(f){var g=kd(d,b,0);g?(f=f[D],e[E](/\#.*/,"")[E](/(\?|&)ic=1/,"")!==g[E](/\#.*/,"")[E](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ga(b,d),od(f,b),(d=Z[f.lastChild.id])&&(d.oid=c),nc(c,4))):delete Z[c]}else delete Z[c]}})};var qd,rd,sd,td,ud,vd=/(?:^|\s)g-((\S)*)(?:$|\s)/,wd={plusone:!0,autocomplete:!0,profile:!0,signin:!0,signin2:!0};qd=Q(W,"SW",R());rd=Q(W,"SA",R());sd=Q(W,"SM",R());td=Q(W,"FW",[]);ud=null;
var yd=function(a,b){xd(void 0,!1,a,b)},xd=function(a,b,c,d){vb("ps0",!0);c=("string"===typeof c?p[na](c):c)||P;var e;e=P[sa];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Va(qd)[ka](Va(rd))[ka](Va(sd));for(var f=[],g=0;g<e[I];g++){var k=e[g];f[F](".g-"+k,"g\\:"+k)}e=c.querySelectorAll(f[y](","))}else e=c[va]("*");c=R();for(f=0;f<e[I];f++){g=e[f];var h=g,k=d,t=h[za][Ea](),m=void 0;h[z]("data-gapiscan")?k=null:(0==t[C]("g:")?m=t[x](2):(h=(h=q(h.className||h[z]("class")))&&vd[ja](h))&&(m=h[1]),k=!m||!(qd[m]||
rd[m]||sd[m])||k&&m!==k?null:m);k&&(wd[k]||0==g[za][Ea]()[C]("g:")||0!=Va(nd(g))[I])&&(g[Fa]("data-gapiscan",!0),Q(c,k,[])[F](g))}if(b)for(var n in c)for(b=c[n],d=0;d<b[I];d++)b[d][Fa]("data-onload",!0);for(var w in c)td[F](w);vb("ps1",!0);if((n=td[y](":"))||a)try{U.load(n,a)}catch(O){jc(O);return}if(zd(ud||{}))for(var u in c){a=c[u];w=0;for(b=a[I];w<b;w++)a[w].removeAttribute("data-gapiscan");Ad(u)}else{d=[];for(u in c)for(a=c[u],w=0,b=a[I];w<b;w++)e=a[w],Bd(u,e,nd(e),d,b);Cd(n,d)}},Dd=function(a){var b=
Q(U,a,{});b.go||(b.go=function(b){return yd(b,a)},b.render=function(b,d){var e=d||{};ga(e,a);return od(b,e)})},Ed=function(a){qd[a]=!0},Fd=function(a){rd[a]=!0},Gd=function(a){sd[a]=!0};var Ad=function(a,b){var c=nb(a);b&&c?(c(b),(c=b.iframeNode)&&c[Fa]("data-gapiattached",!0)):U.load(a,function(){var c=nb(a),e=b&&b.iframeNode,f=b&&b.userParams;e&&c?(c(b),e[Fa]("data-gapiattached",!0)):(c=U[a].go,"signin2"==a?c(e,f):c(e&&e[D],f))})},zd=function(){return!1},Cd=function(){},Bd=function(a,b,c,d,e,f,g){switch(Hd(b,a,f)){case 0:a=sd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;Ad(a,d);break;case 1:var k;if(b[D]){for(var h in c){if(f=S(c,h))f=c[h],f=!!f&&"object"===typeof f&&
(!f[L]||f[L]===ba[B][L]||f[L]===ea[B][L]);if(f)try{c[h]=bd(c[h])}catch(t){delete c[h]}}f=!0;c.dontclear&&(f=!1);delete c.dontclear;lc();h=kd(a,c,e);e=g||{};e.allowPost=1;e.attributes=hd;e.dontclear=!f;g={};g.userParams=c;g.url=h;ga(g,a);var m;c.rd?m=b:(m=p[M]("div"),b[Fa]("data-gapistub",!0),m[ia].cssText="position:absolute;width:450px;left:-10000px;",b[D].insertBefore(m,b));g.siteElement=m;m.id||(b=m,Q(jd,a,0),f="___"+a+"_"+jd[a]++,b.id=f);b=R();b[">type"]=a;T(c,b);f=h;c=m;h=e||{};b=h[ra]||{};Xa(!h.allowPost||
!b.onload,"onload is not supported by post iframe");e=b=f;Rc[K](b)&&(e=Y("iframes/"+e[qa](1)+"/url"),Xa(!!e,"Unknown iframe url config for - "+b));f=cb(P,e[E](Sc,Uc));b=c.ownerDocument||P;m=0;do e=h.id||["I",Oc++,"_",(new Date)[Ga]()][y]("");while(b[na](e)&&5>++m);Xa(5>m,"Error creating iframe id");m={};var n={};b[sa]&&9>b[sa]&&(m.hostiemode=b[sa]);T(h.queryParams||{},m);T(h.fragmentParams||{},n);var w=h.connectWithQueryParams?m:n,O=h.pfname,u=R();u.id=e;u.parent=b[G][wa]+"//"+b[G].host;var J=V(b[G][r],
"parent"),O=O||"";!O&&J&&(J=V(b[G][r],"id",""),O=V(b[G][r],"pfname",""),O=J?O+"/"+J:"");u.pfname=O;T(u,w);(u=V(f,"rpctoken")||m.rpctoken||n.rpctoken)||(u=w.rpctoken=h.rpctoken||q(Math.round(1E8*(yc?Hc():Gc()))));h.rpctoken=u;u=b[G][r];w=R();(J=V(u,"_bsh",W.bsh))&&(w._bsh=J);(u=lb(u))&&(w.jsh=u);h.hintInFragment?T(w,n):T(w,m);f=bb(f,m,n,h.paramsSerializer);n=R();T(Mc,n);T(h[ra],n);n.name=n.id=e;n.src=f;h.eurl=f;if((h||{}).allowPost&&2E3<f[I]){m=Za(f);n.src="";n["data-postorigin"]=f;f=Qc(b,c,n,e);-1!=
navigator.userAgent[C]("WebKit")&&(k=f.contentWindow.document,k.open(),n=k[M]("div"),w={},u=e+"_inner",w.name=u,w.src="",w.style="display:none",Qc(b,n,w,u,h));n=(h=m.l[0])?h[v]("&"):[];h=[];for(w=0;w<n[I];w++)u=n[w][v]("=",2),h[F]([aa(u[0]),aa(u[1])]);m.l=[];n=$a(m);Xa(db[K](n),"Invalid URL: "+n);m=b[M]("form");m.action=n;m.method="POST";m.target=e;m[ia].display="none";for(e=0;e<h[I];e++)n=b[M]("input"),ga(n,"hidden"),n.name=h[e][0],n.value=h[e][1],m[la](n);c[la](m);m.submit();m[D][pa](m);k&&k.close();
k=f}else k=Qc(b,c,n,e,h);g.iframeNode=k;g.id=k[z]("id");k=g.id;c=R();c.id=k;c.userParams=g.userParams;c.url=g.url;ga(c,g[ua]);c.state=1;Z[k]=c;k=g}else k=null;k&&((g=k.id)&&d[F](g),Ad(a,k))}},Hd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(sd[b]){if(kb[a[za][Ea]()])return(a=a.innerHTML)&&a[E](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(rd[b])return 0;if(qd[b])return 1}}return null},od=function(a,b){var c=b[ua];delete b[ua];var d=("string"===typeof a?p[na](a):a)||void 0;if(d){var e={},f;
for(f in b)S(b,f)&&(e[f[Ea]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];Bd(c,d,e,g,0,f,void 0);Cd(c,g)}else jc("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};Q(U,"platform",{}).go=yd;var zd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[I]&&a;c++)a=a[b[c]];b=lb(Ka[r]);return!a||0!=a[C]("n;")&&0!=b[C]("n;")&&a!==b},Cd=function(a,b){Id(a,b)},gb=function(a){xd(a,!0)},Jd=function(a,b){for(var c=b||[],d=0;d<c[I];++d)a(c[d]);for(d=0;d<c[I];d++)Dd(c[d])};
zb[F](["platform",function(a,b,c){ud=c;b&&td[F](b);Jd(Ed,a);Jd(Fd,c._c.annotation);Jd(Gd,c._c.bimodal);cc();ac();if("explicit"!=Y("parsetags")){mb(a);hc(gc())&&!Y("disableRealtimeCallback")&&lc();var d;c&&(a=c.callback)&&(d=Wa(a),delete c.callback);ib(function(){gb(d)})}}]);U._pl=!0;var Kd=function(a){a=(a=Z[a])?a.oid:void 0;if(a){var b=P[na](a);b&&b[D][pa](b);delete Z[a];Kd(a)}};var Ld=/^\{h\:'/,Md=/^!_/,Nd="",Id=function(a,b){function c(){eb("message",d,"remove","de")}function d(d){var g=d.data,k=d.origin;if(Od(g,b)){var h=e;e=!1;h&&vb("rqe");Pd(a,function(){h&&vb("rqd");c();for(var a=Q(W,"RPMQ",[]),b=0;b<a[I];b++)a[b]({data:g,origin:k})})}}if(0!==b[I]){Nd=V(Ka[r],"pfname","");var e=!0;eb("message",d,"add","at");Vb(a,c)}},Od=function(a,b){a=q(a);if(Ld[K](a))return!0;var c=!1;Md[K](a)&&(c=!0,a=a[x](2));if(!/^\{/[K](a))return!1;var d=cd(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=Na[A](b,e)){if("_renderstart"===d.s||d.s===Nd+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=P[na](e);nc(e,2);if(f&&c&&f[xa]&&f[Aa]){a:{d=c[D];e=f||{};if(kc()){var g=c.id;if(g){f=(f=Z[g])?f.state:void 0;if(1===f||4===f)break a;Kd(g)}}(f=d.nextSibling)&&f[z]&&f[z]("data-gapistub")&&(d[D][pa](f),d[ia].cssText="");var f=e[xa],k=e[Aa],h=d[ia];h.textIndent="0";h.margin="0";h.padding="0";h.background="transparent";h.borderStyle="none";h.cssFloat="none";h.styleFloat="none";h.lineHeight="normal";
h.fontSize="1px";h.verticalAlign="baseline";d=d[ia];d.display="inline-block";h=c[ia];h.position="static";h.left=0;h.top=0;h.visibility="visible";f&&(d.width=h.width=f+"px");k&&(d.height=h.height=k+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&nc(g,3)}c["data-csi-wdt"]=(new Date)[Ga]()}}return!0}return!1},Pd=function(a,b){Vb(a,b)};var Qd=function(a,b){this.P=a;var c=b||{};this.Z=Number(c.maxAge)||0;this.M=c.domain;this.R=c.path;this.aa=!!c.secure},Rd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Sd=/^[A-Z_][A-Z0-9_]{0,63}$/;
Qd[B].write=function(a,b){if(!Sd[K](this.P))throw"Invalid cookie name";if(!Rd[K](a))throw"Invalid cookie value";var c=this.P+"="+a;this.M&&(c+=";domain="+this.M);this.R&&(c+=";path="+this.R);var d="number"===typeof b?b:this.Z;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.aa&&(c+=";secure");p.cookie=c;return!0};Qd.iterate=function(a){for(var b=p.cookie[v](/;\s*/),c=0;c<b[I];++c){var d=b[c][v]("="),e=d[ya]();a(e,d[y]("="))}};var Td=function(a){this.Y=a},Ud={};Td[B].write=function(a){Ud[this.Y]=a;return!0};Td.iterate=function(a){for(var b in Ud)Ud.hasOwnProperty(b)&&a(b,Ud[b])};var Vd="https:"===l[G][wa],Wd=Vd||"http:"===l[G][wa]?Qd:Td,Xd=function(a){var b=a[x](1),c="",d=l[G].hostname;if(""!==b){c=ca(b,10);if(isNaN(c))return null;b=d[v](".");if(b[I]<c-1)return null;b[I]==c-1&&(d="."+d)}else d="";return{g:"S"==a[ta](0),domain:d,i:c}},Yd=function(){var a,b=null;Wd.iterate(function(c,d){if(0===c[C]("G_AUTHUSER_")){var e=Xd(c[qa](11));if(!a||e.g&&!a.g||e.g==a.g&&e.i>a.i)a=e,b=d}});return{X:a,B:b}};var Zd=function(a){if(0!==a[C]("GCSC"))return null;var b={O:!1};a=a[x](4);if(!a)return b;var c=a[ta](0);a=a[x](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Xd(a[x](d+1));if(null==e)return b;a=a[qa](0,d);if("_"!==a[ta](0))return b;d="E"===c&&e.g;return!d&&("U"!==c||e.g)||d&&!Vd?b:{O:!0,g:d,da:a[x](1),domain:e.domain,i:e.i}},$d=function(a){if(!a)return[];a=a[v]("=");return a[1]?a[1][v]("|"):[]},ae=function(a){a=a[v](":");return{D:a[0][v]("=")[1],ca:$d(a[1]),fa:$d(a[2]),ea:$d(a[3])}},be=function(){var a=
Yd(),b=a.X,a=a.B;if(null!==a){var c;Wd.iterate(function(a,d){var e=Zd(a);e&&e.O&&e.g==b.g&&e.i==b.i&&(c=d)});if(c){var d=ae(c),e=d&&d.ca[Number(a)],d=d&&d.D;if(e)return{B:a,ba:e,D:d}}}return null};var ce=function(a){this.L=a};ce[B].o=0;ce[B].H=2;ce[B].L=null;ce[B].F=!1;ce[B].U=function(){this.F||(this.o=0,this.F=!0,this.S())};ce[B].S=function(){this.F&&(this.L()?this.o=this.H:this.o=Math.min(2*(this.o||this.H),120),l.setTimeout(Ja(this.S,this),1E3*this.o))};for(var de=0;64>de;++de);var ee=null,kc=function(){return W.oa=!0},lc=function(){W.oa=!0;var a=be();(a=a&&a.B)&&bc("googleapis.config/sessionIndex",a);ee||(ee=Q(W,"ss",new ce(fe)));a=ee;a.U&&a.U()},fe=function(){var a=be(),b=a&&a.ba||null,c=a&&a.D;Vb("auth",{callback:function(){var a=N.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,k=Y("isLoggedIn");b=Y("debug/forceIm")?!1:c&&b||!c&&!b;if(k=k!=b)bc("isLoggedIn",b),lc(),pd(),b||((b=a.signOut)?b():(b=a.setToken)&&b(null));
b=gc();var h=Y("savedUserState"),c=a._guss(b.cookiepolicy),h=h!=c&&"undefined"!=typeof h;bc("savedUserState",c);(k||h)&&hc(b)&&!Y("disableRealtimeCallback")&&a._pimf(b,!0)})}});return!0};vb("bs0",!0,l.gapi._bs);vb("bs1",!0);delete l.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"lexps":[81,97,99,122,123,61,45,30,79,127],"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}},"isPlusUser":true,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"useStandaloneSharingService":true},"csi":{"rate":0.01},"report":{"apiRate":{"gapi\\.signin\\..*":0.05},"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*"],"rate":0.001,"host":"https://apis.google.com"},"client":{"headers":{"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-role","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"],"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Goog-Updated-Authorization","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"]},"rms":"migrated","cors":false},"isLoggedIn":true,"include_granted_scopes":true,"llang":"es","plus_layer":{"isEnabled":false},"iframes":{"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"udc_webconsentflow":{"params":{"url":""},"url":"https://www.google.com/settings/webconsent?usegapi\u003d1"},":source:":"3p","blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},":socialhost:":"https://apis.google.com","shortlists":{"url":""},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"photocomments":{"url":":socialhost:/:session_prefix:_/widget/render/photocomments?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"additnow":{"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"sharetoclassroom":{"url":"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"reportabuse":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.es.MwpgL_K7cV8.O/m\u003d__features__/am\u003dQQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAGLTcCMZXEEHj63goMoz3iB0SpCAKJkQ1Q","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"87ad603184519a319ee048ef56eb172823defed7","dpo":false},"platform":["additnow","backdrop","blogger","comments","commentcount","community","follow","page","person","playreview","plus","plusone","post","reportabuse","savetodrive","savetowallet","shortlists","signin2","udc_webconsentflow","visibility","youtube","ytsubscribe","zoomableimage","photocomments","hangout","sharetoclassroom"],"fp":"87ad603184519a319ee048ef56eb172823defed7","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});