(function(){var l=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},m=function(a,b,c){m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return m.apply(null,arguments)};var q=(new Date).getTime();var u=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},w=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=u("0.15"),ga=u("0.01"),ha=u("0.001"),ia=u("0.001"),ja=u("0.2"),ka=w("true",!0);var la=w("false",!1),ma=w("false",!1);var na=function(a,b,c){if(!a)return null;for(var e=0;e<a.length;++e)if((a[e].ad_slot||b)==b&&(a[e].ad_tag_origin||c)==c)return a[e];return null};var z=function(a){z[" "](a);return a};z[" "]=function(){};var A=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{z(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(e){return!1}},B=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var e=new Uint16Array(1);window.crypto.getRandomValues(e);c=e[0]/65536}catch(d){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};var oa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var e;a!=e;)e=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){b=c}}return b};var C=document,E=window,G,pa=null,H=C.getElementsByTagName("script");H&&H.length&&(pa=H[H.length-1]);G=pa;var qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=/\x00/g,I={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},J={"'":"\\'"};var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},L=function(a){return!!a&&"function"==typeof a&&!!a.call},wa=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])},xa=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)},ya=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,xa(a,function(){a.google_onload_fired=!0}))},za=function(){var a=
E.google_unique_id;return"number"==typeof a?a:0},Aa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,e=0;e<b;e++)c^=(c<<5)+(c>>2)+a.charCodeAt(e)&4294967295;return 0<c?c:4294967296+c};var M=!0,Ba={},Ea=function(a,b,c,e){var d=Ca,g,f=M;try{g=b()}catch(h){try{var k=oa(h);b="";h.fileName&&(b=h.fileName);var p=-1;h.lineNumber&&(p=h.lineNumber);f=d(a,k,b,p,c)}catch(n){try{var r=oa(n);a="";n.fileName&&(a=n.fileName);c=-1;n.lineNumber&&(c=n.lineNumber);Ca("pAR",r,a,c,void 0,void 0)}catch(x){Da({context:"mRE",msg:x.toString()+"\n"+(x.stack||"")},void 0)}}if(!f)throw h;}finally{if(e)try{e()}catch(D){}}return g},Ca=function(a,b,c,e,d,g){var f={};if(d)try{d(f)}catch(h){}f.context=a;f.msg=
b.substring(0,512);c&&(f.file=c);0<e&&(f.line=e.toString());f.url=C.URL.substring(0,512);f.ref=C.referrer.substring(0,512);Fa(f);Da(f,g);return M},Da=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Ga(a),e="http"+("http:"==E.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,e=e.substring(0,2E3);E.google_image_requests||(E.google_image_requests=[]);var d=E.document.createElement("img");d.src=e;E.google_image_requests.push(d)}}catch(g){}},Fa=function(a){var b=
a||{};K(Ba,function(a,e){b[e]=E[a]})},Ha=function(a,b){return function(){var c=arguments;return Ea(a,function(){return b.apply(void 0,c)},void 0,void 0)}},N=function(a,b){return Ha(a,b)},Ga=function(a){var b="";K(a,function(a,e){if(0===a||a)b+="&"+e+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};M=!la;Ba={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Ia=!!window.google_async_iframe_id,Ja=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Ka=/Android/;var O=null,La=function(){if(!O){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,A(a))b=a;else break;O=b}return O};var P=function(a,b,c){c||(c=ma?"https":"http");return[c,"://",a,b].join("")};var Ma=function(){},Q=function(a,b,c){switch(typeof b){case "string":Na(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",g=0;g<e;g++)c.push(d),Q(a,b[g],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(g=b[d],"function"!=typeof g&&(c.push(e),Na(d,c),c.push(":"),Q(a,g,c),e=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},R={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Oa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Na=function(a,b){b.push('"');b.push(a.replace(Oa,function(a){if(a in R)return R[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return R[a]=d+b.toString(16)}));b.push('"')};var S="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Pa={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Qa=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];K(a,function(a,e){if(null!=a){var d;try{var g=[];Q(new Ma,a,g);d=g.join("")}catch(f){}d&&(d=d.replace(/\\|\//,"\\$&"),wa(b,e,"=",d,";"))}});return b.join("")},Ra=function(a){for(var b=0,c=S.length;b<c;b++){var e=S[b];Pa[e]||(a[e]=null)}};var T=null;var U=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:m(this.D,this)});this.A=a.google_iframe_oncopy},Sa;var V="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(V)&&(-1!=V.indexOf("&")&&(V=V.replace(qa,"&amp;")),-1!=V.indexOf("<")&&(V=V.replace(ra,"&lt;")),-1!=V.indexOf(">")&&(V=V.replace(sa,"&gt;")),-1!=V.indexOf('"')&&(V=V.replace(ta,"&quot;")),-1!=V.indexOf("'")&&(V=V.replace(ua,"&#39;")),-1!=V.indexOf("\x00")&&(V=V.replace(va,"&#0;")));Sa=V;U.prototype.set=function(a,b){this.A.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",m(this.s,this,a),!1)};
U.prototype.s=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};U.prototype.D=function(a,b){var c=Ta("rx",a),e;a:{if(a&&(e=a.match("dt=([^&]+)"))&&2==e.length){e=e[1];break a}e=""}e=(new Date).getTime()-e;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>e?e+"":"M"));this.set(b,c);return c};var Ta=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),e=c.exec(b);e&&(b=b.replace(c,a+"="+(+e[1]+1||1)));return b};var W;a:{var Ua=l.navigator;if(Ua){var Va=Ua.userAgent;if(Va){W=Va;break a}}W=""}var X=function(a){return-1!=W.indexOf(a)};var Wa=X("Opera")||X("OPR"),Xa=X("Edge")||X("Trident")||X("MSIE"),Ya=X("Gecko")&&!(-1!=W.toLowerCase().indexOf("webkit")&&!X("Edge"))&&!(X("Trident")||X("MSIE"))&&!X("Edge"),Za=-1!=W.toLowerCase().indexOf("webkit")&&!X("Edge"),$a=function(){var a=W;if(Ya)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Xa&&X("Edge"))return/Edge\/([\d\.]+)/.exec(a);if(Xa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Za)return/WebKit\/(\S+)/.exec(a)};
(function(){if(Wa&&l.opera){var a=l.opera.version;return"function"==aa(a)?a():a}var a="",b=$a();b&&(a=b?b[1]:"");return Xa&&!X("Edge")&&(b=(b=l.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var ab=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var bb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y,Z=function(a){this.l=[];this.j=a||window;this.i=0;this.k=null;this.q=0},cb=function(a,b){this.t=a;this.F=b};Z.prototype.r=function(a,b){0!=this.i||0!=this.l.length||b&&b!=window?this.n(a,b):(this.i=2,this.p(new cb(a,window)))};Z.prototype.n=function(a,b){this.l.push(new cb(a,b||this.j));db(this)};Z.prototype.u=function(a){this.i=1;if(a){var b=N("sjr::timeout",m(this.o,this,!0));this.k=this.j.setTimeout(b,a)}};
Z.prototype.o=function(a){a&&++this.q;1==this.i&&(null!=this.k&&(this.j.clearTimeout(this.k),this.k=null),this.i=0);db(this)};Z.prototype.w=function(){return!(!window||!Array)};Z.prototype.B=function(){return this.q};Z.prototype.nq=Z.prototype.r;Z.prototype.nqa=Z.prototype.n;Z.prototype.al=Z.prototype.u;Z.prototype.rl=Z.prototype.o;Z.prototype.sz=Z.prototype.w;Z.prototype.tc=Z.prototype.B;var db=function(a){var b=N("sjr::tryrun",m(a.C,a));a.j.setTimeout(b,0)};
Z.prototype.C=function(){if(0==this.i&&this.l.length){var a=this.l.shift();this.i=2;var b=N("sjr::run",m(this.p,this,a));a.F.setTimeout(b,0);db(this)}};Z.prototype.p=function(a){this.i=0;a.t()};
var eb=function(a){try{return a.sz()}catch(b){return!1}},fb=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&eb(a)&&L(a.nq)&&L(a.nqa)&&L(a.al)&&L(a.rl)},gb=function(){if(Y&&eb(Y))return Y;var a=La(),b=a.google_jobrunner;return fb(b)?Y=b:a.google_jobrunner=Y=new Z(a)},hb=function(a,b){gb().nq(a,b)},ib=function(a,b){gb().nqa(a,b)};var jb=Ia?1==za():!za(),kb=function(){var a=z("script"),b;b=ea("","pagead2.googlesyndication.com");return["<",a,' src="',P(b,"/pagead/js/r20150402/r20150224/show_ads_impl.js",""),'"></',a,">"].join("")},lb=function(a,b,c,e){return function(){var d=!1;e&&gb().al(3E4);var g=a.document.getElementById(b);g&&!A(g.contentWindow)&&3==
a.google_top_js_status&&(a.google_top_js_status=6);try{if(A(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,h=f.document;h.body&&h.body.firstChild||(h.open(),f.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,p;g=c;g=String(g);if(g.quote)p=g.quote();else{f=['"'];for(h=0;h<g.length;h++){var n=g.charAt(h),r=n.charCodeAt(0),x=h+1,D;if(!(D=I[n])){var F;if(31<r&&127>r)F=n;else{var v=n;if(v in J)F=J[v];else if(v in
I)F=J[v]=I[v];else{var t=v,y=v.charCodeAt(0);if(31<y&&127>y)t=v;else{if(256>y){if(t="\\x",16>y||256<y)t+="0"}else t="\\u",4096>y&&(t+="0");t+=y.toString(16).toUpperCase()}F=J[v]=t}}D=F}f[x]=D}f.push('"');p=f.join("")}k.location.replace("javascript:"+p)}d=!0}catch(sb){k=La().google_jobrunner,fb(k)&&k.rl()}d&&(d=Ta("google_async_rrc",c),(new U(a)).set(b,lb(a,b,d,!1)))}},mb=function(a){var b=["<iframe"];K(a,function(a,e){null!=a&&b.push(" "+e+'="'+a+'"')});b.push("></iframe>");return b.join("")},nb=
function(a){var b;if(b=jb){if(!T)a:{var c=[E.top];b=[];for(var e=0,d;d=c[e++];){b.push(d);try{if(d.frames)for(var g=d.frames.length,f=0;f<g&&1024>c.length;++f)c.push(d.frames[f])}catch(h){}}for(g=0;g<b.length;g++)try{var k=b[g].frames.google_esf;if(k){T=k;break a}}catch(p){}T=null}b=!T}return b?(k={style:"display:none"},k["data-ad-client"]=ab(a),k.id="google_esf",k.name="google_esf",a=P(ea("","googleads.g.doubleclick.net"),"/pagead/html/r20150402/r20150224/zrt_lookup.html"),
k.src=a,mb(k)):""},pb=function(a,b,c){var e=b.google_ad_output,d=b.google_ad_format;d||"html"!=e&&null!=e||(d=b.google_ad_width+"x"+b.google_ad_height,c&&(d+="_as"));c=!b.google_ad_slot||ob(b);d=d&&c?d.toLowerCase():"";b.google_ad_format=d;d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];c=[];for(var e=0,g=G.parentElement;g&&25>e;g=g.parentNode,++e)c.push(9!=g.nodeType&&g.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Aa(d.join(":")).toString();d=
a.google_adk2_experiment=a.google_adk2_experiment||B(["C","E"],ia)||"N";if("E"==d){d=G;c=[];for(e=0;d&&25>e;++e){var g=(g=9!=d.nodeType&&d.id)?"/"+g:"",f;a:{if(d&&d.nodeName&&d.parentElement){f=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,p=0;p<h.length;++p){var n=h[p];if(n.nodeName&&n.nodeName.toString().toLowerCase()==f){if(d==n){f="."+k;break a}++k}}}f=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+g+f);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var r=
a.parent,e=0;r&&r!=a&&25>e;++e){for(var x=r.frames,g=0;g<x.length;++g)if(a==x[g]){c.push(g);break}a=r;r=a.parent}}catch(D){}b.google_ad_unit_key_2=Aa(d+c.join()).toString()}else"C"==d&&(b.google_ad_unit_key_2="ctrl")},qb=Math.floor(1E6*Math.random()),rb=function(a){var b;try{b={};for(var c=a.data.split("\n"),e=0;e<c.length;e++){var d=c[e].indexOf("=");-1!=d&&(b[c[e].substr(0,d)]=c[e].substr(d+1))}}catch(g){}c=b[3];if(b[1]==qb&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&
(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},ob=function(a){return a.google_override_format||!bb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used};Ea("sa::main",function(){var a=window,b;var c=a.google_ad_slot;b=a.google_ad_modifications;if(!b||na(b.ad_whitelist,c,void 0))b=null;else{var e=b.space_collapsing||"none";b=(c=na(b.ad_blacklist,c))?{m:!0,v:c.space_collapsing||e}:b.remove_ads_by_default?{m:!0,v:e}:null}if(b&&b.m)Ra(a);else{ya(a);if(!window.google_top_experiment&&!window.google_top_js_status)if(b=window,2!==(b.top==b?0:A(b.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var d;try{d=E.top.frames.google_top_static_frame?
!0:!1}catch(g){d=!1}if(d){if(window.google_top_experiment=B(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],fa),"jp_c"!==window.google_top_experiment){d=window;d.addEventListener?d.addEventListener("message",rb,!1):d.attachEvent&&d.attachEvent("onmessage",rb);window.google_top_js_status=3;d={0:"google_loc_request",1:qb};b=[];for(var f in d)b.push(f+"="+d[f]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1;f=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||
f&&"html"!=f||(window.google_always_use_delayed_impressions_experiment=B(["C","E"],ha));(f=!1===window.google_enable_async)||(f=navigator.userAgent,Ja.test(f)?f=!1:(void 0!==window.google_async_for_oa_experiment||!Ka.test(navigator.userAgent)||Ja.test(navigator.userAgent)||(window.google_async_for_oa_experiment=B(["E","C"],ga)),f=Ka.test(f)?"E"===window.google_async_for_oa_experiment:!0),f=!f||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(f)a.google_loader_used=
"sb",a.google_start_time=q,pb(a,a),document.write(nb(a.google_ad_client)+kb());else{jb&&(d=a.google_ad_client,f=navigator,ka&&a&&d&&f&&(b=a.document,f=b.createElement("script"),d=ab(d),f.async=!0,f.type="text/javascript",f.src=P("pagead2.googlesyndication.com","/pub-config/"+d+".js"),d=b.getElementsByTagName("script")[0],d.parentNode.insertBefore(f,d)));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;d={};f=0;for(b=S.length;f<b;f++)e=S[f],null!=a[e]&&(d[e]=a[e]);d.google_loader_used=
"sa";Ra(a);f=z("script");b={};e=d.google_ad_height;b.width='"'+d.google_ad_width+'"';b.height='"'+e+'"';b.frameborder='"0"';b.marginwidth='"0"';b.marginheight='"0"';b.vspace='"0"';b.hspace='"0"';b.allowtransparency='"true"';b.scrolling='"no"';b.allowfullscreen='"true"';b.onload='"'+Sa+'"';for(var h,e=a.document,c=b.id,k=0;!c||e.getElementById(c);)c="aswift_"+k++;b.id=c;b.name=c;var k=d.google_ad_width,p=d.google_ad_height,c=["<iframe"];for(h in b)b.hasOwnProperty(h)&&wa(c,h+"="+b[h]);c.push('style="left:0;position:absolute;top:0;"');
c.push("></iframe>");h=b.id;k="border:none;height:"+p+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+k+"px;background-color:transparent";e.write(['<ins id="',h+"_expand",'" style="display:inline-table;',k,'"><ins id="',h+"_anchor",'" style="display:block;',k,'">',c.join(" "),"</ins></ins>"].join(""));h=b.id;b=ob(d)?B(["c","e"],ja):null;pb(a,d,"e"==b);e=Qa(d);d=nb(d.google_ad_client);c=(new Date).getTime();k=a.google_top_experiment;if(p=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;var n=a.google_always_use_delayed_impressions_experiment;f=["<!doctype html><html><body>",d,"<",f,">",e,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',h,'";google_start_time=',q,";",k?'google_top_experiment="'+k+'";':"",p?'google_async_for_oa_experiment="'+p+'";':"",n?'google_always_use_delayed_impressions_experiment="'+n+'";':"",b?'google_append_as_for_format_override="'+b+'";':"","google_bpp=",c>q?c-q:1,";google_async_rrc=0;</",f,">",kb(),"</body></html>"].join("");
(a.document.getElementById(h)?hb:ib)(lb(a,h,f,!0))}}});})();
