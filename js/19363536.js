var a9866tf="51la";var a9866pu="";var a9866pf="51la";var a9866su=window.location;var a9866sf=document.referrer;var a9866of="";var a9866op="";var a9866ops=1;var a9866ot=1;var a9866d=new Date();var a9866color="";if (navigator.appName=="Netscape"){a9866color=screen.pixelDepth;} else {a9866color=screen.colorDepth;}try{a9866tf=top.document.referrer;}catch(e){}try{a9866pu =window.parent.location;}catch(e){}try{a9866pf=window.parent.document.referrer;}catch(e){}try{a9866ops=document.cookie.match(new RegExp("(^| )a9866_pages=([^;]*)(;|$)"));a9866ops=(a9866ops==null)?1: (parseInt(unescape((a9866ops)[2]))+1);var a9866oe =new Date();a9866oe.setTime(a9866oe.getTime()+60*60*1000);document.cookie="a9866_pages="+a9866ops+ ";path=/;expires="+a9866oe.toGMTString();a9866ot=document.cookie.match(new RegExp("(^| )a9866_times=([^;]*)(;|$)"));if(a9866ot==null){a9866ot=1;}else{a9866ot=parseInt(unescape((a9866ot)[2])); a9866ot=(a9866ops==1)?(a9866ot+1):(a9866ot);}a9866oe.setTime(a9866oe.getTime()+365*24*60*60*1000);document.cookie="a9866_times="+a9866ot+";path=/;expires="+a9866oe.toGMTString();}catch(e){}try{if(document.cookie==""){a9866ops=-1;a9866ot=-1;}}catch(e){}a9866of=a9866sf;if(a9866pf!=="51la"){a9866of=a9866pf;}if(a9866tf!=="51la"){a9866of=a9866tf;}a9866op=a9866pu;try{lainframe}catch(e){a9866op=a9866su;}a9866src='//web.users.51.la/go.asp?svid=13&id=19363536&tpages='+a9866ops+'&ttimes='+a9866ot+'&tzone='+(0-a9866d.getTimezoneOffset()/60)+'&tcolor='+a9866color+'&sSize='+screen.width+','+screen.height+'&referrer='+escape(a9866of)+'&vpage='+escape(a9866op)+'&vvtime='+a9866d.getTime();setTimeout('a9866img = new Image;a9866img.src=a9866src;',0);(function(){var config = {itv: 1800000,url1:'//ia.51.la/go1?id=19363536',ekc:''};!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(){var e=void 0,t=/id=(\d+)/.exec(config.url1)[1]||"";try{e=u.get("__tins__"+t)}catch(t){e=!1}var n=e&&i.isN(e.sid)&&i.isN(e.expires)&&i.now()-e.sid<18e5?0:1,r=n?1:e.vd+1,o=n?i.now():e.sid,c=i.now()+18e5;return u.set("__tins__"+t,s.stringify({sid:o,vd:r,expires:c}),null,"/"),[n,n?o:u.get("__tins__"+t).sid,r]}function o(){var e=s.parse(s.stringify(i.extend({},y,v))),t=i.obj2url(e),n=config.url1+"&rt="+g+"&"+t,r=new Image(1,1);r.src=n}var i=n(9),c=n(10),u=n(12).store,s=n(11),a=window,f=a.location,p=a.screen,l=a.navigator,g=i.now(),d=!0,m=r(),v={ekc:config.ekc,sid:m[1],tt:c.getMeta.tt,kw:c.getMeta.kw,cu:f.href,pu:c.getRef()},y={rl:p.width+"*"+p.height,lang:l.language||l.browserLanguage,ct:function(){var e=l.connection||l.mozConnection||l.webkitConnection||l.oConnection,t=i.hasIt(l.userAgent,"mobile")&&e?e.type:"unknow";return t}(),pf:function(){var e=d?1:0;return d=0,e}(),ins:m[0],vd:m[2],ce:l.cookieEnabled?1:0,cd:p.colorDepth||p.pixelDepth,ds:c.getMeta.ds};o.version="2.2.1.1",n(13)(y),o()},,,,,,,,,function(e,t){"use strict";function n(e,t){return void 0!==e&&e.indexOf(t)!==-1}function r(e){return function(t){return Object.prototype.toString.call(t)==="[object "+e+"]"}}function o(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function i(e){return e.replace(/&/g,"~_~")}function c(e){var t="";for(var n in e)""!==t&&(t+="&"),t+=n+"="+a(a(i(String(e[n]))));return t}function u(e){return e.replace(/^\s+|\s+$/g,"")}function s(){return+new Date}var a=encodeURIComponent,f=r("Object"),p=r("Number"),l=r("String"),g=r("Array"),d=r("Function"),m=r("RegExp");e.exports={isO:f,isN:p,isF:d,isR:m,isS:l,isA:g,hasIt:n,extend:o,obj2url:c,trim:u,now:s}},function(e,t,n){"use strict";function r(e){return u.getElementsByTagName(e.toLowerCase())}function o(){var e="";try{e=c.top.document.referrer}catch(t){if(c.parent)try{e=c.parent.document.referrer}catch(t){e=""}}return""===e&&(e=u.referrer),e}var i=n(9),c=window,u=c.document,s=function(){var e=r("meta"),t=r("title"),n={kw:"",ds:""},o=void 0;n.tt=t&&i.trim(t[0].innerHTML)||"";for(var c=0;c<e.length;c++)e[c].name&&(o=e[c].name.toLowerCase(),i.hasIt("keywords",o)&&(n.kw=e[c].content.slice(0,100)),i.hasIt("description",o)&&(n.ds=e[c].content.slice(0,30)));return n}();e.exports={getMeta:s,getRef:o}},function(module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports={parse:function parse(sJSON){return eval("("+sJSON+")")},stringify:function(){var e=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n=Array.isArray||function(t){return"[object Array]"===e.call(t)},r={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},o=function(e){return r[e]||"\\u"+(e.charCodeAt(0)+65536).toString(16).substr(1)},i=/[\\"\u0000-\u001F\u2028\u2029]/g;return function r(c){if(null==c)return"null";if("number"==typeof c)return isFinite(c)?c.toString():"null";if("boolean"==typeof c)return c.toString();if("object"===("undefined"==typeof c?"undefined":_typeof(c))){if("function"==typeof c.toJSON)return r(c.toJSON());if(n(c)){for(var u="[",s=0;s<c.length;s++)u+=(s?", ":"")+r(c[s]);return u+"]"}if("[object Object]"===e.call(c)){var a=[];for(var f in c)t.call(c,f)&&a.push(r(f)+": "+r(c[f]));return"{"+a.join(", ")+"}"}}return'"'+c.toString().replace(i,o)+'"'}}()}},function(e,t,n){"use strict";var r=n(10),o=n(11),i={get:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=s*([^;]*).*$)|^.*$"),"$1"))||null},set:function(e,t,n,r,o,i){if(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))return!1;var c="";if(n)switch(n.constructor){case Number:c=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:c="; expires="+n;break;case Date:c="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+c+(o?"; domain="+o:"")+(r?"; path="+r:"")+(i?"; secure":""),!0}},c={get:function(e){return o.parse((r.isMobi?window.localStorage.getItem(e):i.get(e))||"{}")},set:function(e,t,n,o){return r.isMobi?window.localStorage.setItem(e,t):i.set(e,t,n,o)}};e.exports={cookie:i,store:c}},function(e,t,n){"use strict";var r=n(9),o=n(12);e.exports=function(e){var t=o.store.get("__51laig__");t=r.isN(t)?parseInt(t)+1:1,o.cookie.set("__51cke__",config.ekc,null,"/"),e.ing=t,o.store.set("__51laig__",t,null,"/")}}]);}());