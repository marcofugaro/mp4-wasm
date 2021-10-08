var Fr=function(){var h=typeof document!="undefined"&&document.currentScript?document.currentScript.src:void 0;return function(t){t=t||{};var t=typeof t!="undefined"?t:{},u,_;t.ready=new Promise(function(r,n){u=r,_=n}),t.create_buffer=function(n){return t._malloc(n)},t.free_buffer=function(n){return t._free(n)},t.locateFile=function(n,e){return t.simd&&(n=n.replace(/\.wasm$/i,".simd.wasm")),t.getWasmPath?t.getWasmPath(n,e,t.simd):e+n},t.createWebCodecsEncoder=function(n){return pe(t,n)};var d={},l;for(l in t)t.hasOwnProperty(l)&&(d[l]=t[l]);var p=[],H="./this.program",B=function(r,n){throw n},j=typeof window=="object",N=typeof importScripts=="function",M=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",m="";function W(r){return t.locateFile?t.locateFile(r,m):m+r}var x,ar,z,or;(j||N)&&(N?m=self.location.href:typeof document!="undefined"&&document.currentScript&&(m=document.currentScript.src),h&&(m=h),m.indexOf("blob:")!==0?m=m.substr(0,m.lastIndexOf("/")+1):m="",x=function(r){var n=new XMLHttpRequest;return n.open("GET",r,!1),n.send(null),n.responseText},N&&(z=function(r){var n=new XMLHttpRequest;return n.open("GET",r,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),ar=function(r,n,e){var i=new XMLHttpRequest;i.open("GET",r,!0),i.responseType="arraybuffer",i.onload=function(){if(i.status==200||i.status==0&&i.response){n(i.response);return}e()},i.onerror=e,i.send(null)},or=function(r){document.title=r});var Pr=t.print||console.log.bind(console),I=t.printErr||console.warn.bind(console);for(l in d)d.hasOwnProperty(l)&&(t[l]=d[l]);d=null,t.arguments&&(p=t.arguments),t.thisProgram&&(H=t.thisProgram),t.quit&&(B=t.quit);var U;t.wasmBinary&&(U=t.wasmBinary);var Ur=t.noExitRuntime||!0;typeof WebAssembly!="object"&&er("no native wasm support detected");var $,fr=!1,w;function E(r,n,e){for(var i=n+e,a="";!(n>=i);){var f=r[n++];if(!f)return a;if(!(f&128)){a+=String.fromCharCode(f);continue}var c=r[n++]&63;if((f&224)==192){a+=String.fromCharCode((f&31)<<6|c);continue}var o=r[n++]&63;if((f&240)==224?f=(f&15)<<12|c<<6|o:f=(f&7)<<18|c<<12|o<<6|r[n++]&63,f<65536)a+=String.fromCharCode(f);else{var s=f-65536;a+=String.fromCharCode(55296|s>>10,56320|s&1023)}}return a}function T(r,n){return r?E(R,r,n):""}function b(r,n,e,i){if(!(i>0))return 0;for(var a=e,f=e+i-1,c=0;c<r.length;++c){var o=r.charCodeAt(c);if(o>=55296&&o<=57343){var s=r.charCodeAt(++c);o=65536+((o&1023)<<10)|s&1023}if(o<=127){if(e>=f)break;n[e++]=o}else if(o<=2047){if(e+1>=f)break;n[e++]=192|o>>6,n[e++]=128|o&63}else if(o<=65535){if(e+2>=f)break;n[e++]=224|o>>12,n[e++]=128|o>>6&63,n[e++]=128|o&63}else{if(e+3>=f)break;n[e++]=240|o>>18,n[e++]=128|o>>12&63,n[e++]=128|o>>6&63,n[e++]=128|o&63}}return n[e]=0,e-a}function A(r,n,e){return b(r,R,n,e)}function ur(r){for(var n=0,e=0;e<r.length;++e){var i=r.charCodeAt(e);i>=55296&&i<=57343&&(i=65536+((i&1023)<<10)|r.charCodeAt(++e)&1023),i<=127?++n:i<=2047?n+=2:i<=65535?n+=3:n+=4}return n}function Jr(r,n){for(var e="",i=0;!(i>=n/2);++i){var a=J[r+i*2>>1];if(a==0)break;e+=String.fromCharCode(a)}return e}function Kr(r,n,e){if(e===void 0&&(e=2147483647),e<2)return 0;e-=2;for(var i=n,a=e<r.length*2?e/2:r.length,f=0;f<a;++f){var c=r.charCodeAt(f);J[n>>1]=c,n+=2}return J[n>>1]=0,n-i}function Zr(r){return r.length*2}function Qr(r,n){for(var e=0,i="";!(e>=n/4);){var a=O[r+e*4>>2];if(a==0)break;if(++e,a>=65536){var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|f&1023)}else i+=String.fromCharCode(a)}return i}function Mr(r,n,e){if(e===void 0&&(e=2147483647),e<4)return 0;for(var i=n,a=i+e-4,f=0;f<r.length;++f){var c=r.charCodeAt(f);if(c>=55296&&c<=57343){var o=r.charCodeAt(++f);c=65536+((c&1023)<<10)|o&1023}if(O[n>>2]=c,n+=4,n+4>a)break}return O[n>>2]=0,n-i}function rn(r){for(var n=0,e=0;e<r.length;++e){var i=r.charCodeAt(e);i>=55296&&i<=57343&&++e,n+=4}return n}function nn(r,n){return r%n>0&&(r+=n-r%n),r}var lr,vr,R,J,pr,O,D,Rr,Sr;function Wr(r){lr=r,t.HEAP8=vr=new Int8Array(r),t.HEAP16=J=new Int16Array(r),t.HEAP32=O=new Int32Array(r),t.HEAPU8=R=new Uint8Array(r),t.HEAPU16=pr=new Uint16Array(r),t.HEAPU32=D=new Uint32Array(r),t.HEAPF32=Rr=new Float32Array(r),t.HEAPF64=Sr=new Float64Array(r)}var ye=t.INITIAL_MEMORY||16777216,rr,kr=[],Ir=[],Or=[],en=!1;function tn(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)fn(t.preRun.shift());_r(kr)}function an(){en=!0,_r(Ir)}function on(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)cn(t.postRun.shift());_r(Or)}function fn(r){kr.unshift(r)}function sn(r){Ir.unshift(r)}function cn(r){Or.unshift(r)}var X=0,hr=null,nr=null;function un(r){X++,t.monitorRunDependencies&&t.monitorRunDependencies(X)}function ln(r){if(X--,t.monitorRunDependencies&&t.monitorRunDependencies(X),X==0&&(hr!==null&&(clearInterval(hr),hr=null),nr)){var n=nr;nr=null,n()}}t.preloadedImages={},t.preloadedAudios={};function er(r){t.onAbort&&t.onAbort(r),r+="",I(r),fr=!0,w=1,r="abort("+r+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(r);throw _(n),n}var vn="data:application/octet-stream;base64,";function Dr(r){return r.startsWith(vn)}var k;k="mp4.wasm",Dr(k)||(k=W(k));function Vr(r){try{if(r==k&&U)return new Uint8Array(U);if(z)return z(r);throw"both async and sync fetching of the wasm failed"}catch(n){er(n)}}function pn(){return!U&&(j||N)&&typeof fetch=="function"?fetch(k,{credentials:"same-origin"}).then(function(r){if(!r.ok)throw"failed to load wasm binary file at '"+k+"'";return r.arrayBuffer()}).catch(function(){return Vr(k)}):Promise.resolve().then(function(){return Vr(k)})}function hn(){var r={a:fe};function n(c,o){var s=c.exports;t.asm=s,$=t.asm.x,Wr($.buffer),rr=t.asm.B,sn(t.asm.y),ln("wasm-instantiate")}un("wasm-instantiate");function e(c){n(c.instance)}function i(c){return pn().then(function(o){return WebAssembly.instantiate(o,r)}).then(function(o){return o}).then(c,function(o){I("failed to asynchronously prepare wasm: "+o),er(o)})}function a(){return!U&&typeof WebAssembly.instantiateStreaming=="function"&&!Dr(k)&&typeof fetch=="function"?fetch(k,{credentials:"same-origin"}).then(function(c){var o=WebAssembly.instantiateStreaming(c,r);return o.then(e,function(s){return I("wasm streaming compile failed: "+s),I("falling back to ArrayBuffer instantiation"),i(e)})}):i(e)}if(t.instantiateWasm)try{var f=t.instantiateWasm(r,n);return f}catch(c){return I("Module.instantiateWasm callback failed with error: "+c),!1}return a().catch(_),{}}function _r(r){for(;r.length>0;){var n=r.shift();if(typeof n=="function"){n(t);continue}var e=n.func;typeof e=="number"?n.arg===void 0?rr.get(e)():rr.get(e)(n.arg):e(n.arg===void 0?null:n.arg)}}function _n(r,n,e,i){er("Assertion failed: "+T(r)+", at: "+[n?T(n):"unknown filename",e,i?T(i):"unknown function"])}function gn(r,n,e,i,a){}function gr(r){switch(r){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+r)}}function yn(){for(var r=new Array(256),n=0;n<256;++n)r[n]=String.fromCharCode(n);Lr=r}var Lr=void 0;function S(r){for(var n="",e=r;R[e];)n+=Lr[R[e++]];return n}var K={},G={},sr={},dn=48,mn=57;function Hr(r){if(r===void 0)return"_unknown";r=r.replace(/[^a-zA-Z0-9_]/g,"$");var n=r.charCodeAt(0);return n>=dn&&n<=mn?"_"+r:r}function Br(r,n){return r=Hr(r),new Function("body","return function "+r+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(n)}function yr(r,n){var e=Br(n,function(i){this.name=n,this.message=i;var a=new Error(i).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},e}var jr=void 0;function F(r){throw new jr(r)}var Nr=void 0;function qr(r){throw new Nr(r)}function wn(r,n,e){r.forEach(function(o){sr[o]=n});function i(o){var s=e(o);s.length!==r.length&&qr("Mismatched type converter count");for(var v=0;v<r.length;++v)V(r[v],s[v])}var a=new Array(n.length),f=[],c=0;n.forEach(function(o,s){G.hasOwnProperty(o)?a[s]=G[o]:(f.push(o),K.hasOwnProperty(o)||(K[o]=[]),K[o].push(function(){a[s]=G[o],++c,c===f.length&&i(a)}))}),f.length===0&&i(a)}function V(r,n,e){if(e=e||{},!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var i=n.name;if(r||F('type "'+i+'" must have a positive integer typeid pointer'),G.hasOwnProperty(r)){if(e.ignoreDuplicateRegistrations)return;F("Cannot register type '"+i+"' twice")}if(G[r]=n,delete sr[r],K.hasOwnProperty(r)){var a=K[r];delete K[r],a.forEach(function(f){f()})}}function bn(r,n,e,i,a){var f=gr(e);n=S(n),V(r,{name:n,fromWireType:function(c){return!!c},toWireType:function(c,o){return o?i:a},argPackAdvance:8,readValueFromPointer:function(c){var o;if(e===1)o=vr;else if(e===2)o=J;else if(e===4)o=O;else throw new TypeError("Unknown boolean type size: "+n);return this.fromWireType(o[c>>f])},destructorFunction:null})}var dr=[],C=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function mr(r){r>4&&--C[r].refcount==0&&(C[r]=void 0,dr.push(r))}function An(){for(var r=0,n=5;n<C.length;++n)C[n]!==void 0&&++r;return r}function En(){for(var r=5;r<C.length;++r)if(C[r]!==void 0)return C[r];return null}function Tn(){t.count_emval_handles=An,t.get_first_emval=En}function Z(r){switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var n=dr.length?dr.pop():C.length;return C[n]={refcount:1,value:r},n}}}function wr(r){return this.fromWireType(D[r>>2])}function Fn(r,n){n=S(n),V(r,{name:n,fromWireType:function(e){var i=C[e].value;return mr(e),i},toWireType:function(e,i){return Z(i)},argPackAdvance:8,readValueFromPointer:wr,destructorFunction:null})}function br(r){if(r===null)return"null";var n=typeof r;return n==="object"||n==="array"||n==="function"?r.toString():""+r}function Cn(r,n){switch(n){case 2:return function(e){return this.fromWireType(Rr[e>>2])};case 3:return function(e){return this.fromWireType(Sr[e>>3])};default:throw new TypeError("Unknown float type: "+r)}}function Pn(r,n,e){var i=gr(e);n=S(n),V(r,{name:n,fromWireType:function(a){return a},toWireType:function(a,f){if(typeof f!="number"&&typeof f!="boolean")throw new TypeError('Cannot convert "'+br(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Cn(n,i),destructorFunction:null})}function Un(r,n){if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=Br(r.name||"unknownFunctionName",function(){});e.prototype=r.prototype;var i=new e,a=r.apply(i,n);return a instanceof Object?a:i}function xr(r){for(;r.length;){var n=r.pop(),e=r.pop();e(n)}}function Rn(r,n,e,i,a){var f=n.length;f<2&&F("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=n[1]!==null&&e!==null,o=!1,s=1;s<n.length;++s)if(n[s]!==null&&n[s].destructorFunction===void 0){o=!0;break}for(var v=n[0].name!=="void",g="",y="",s=0;s<f-2;++s)g+=(s!==0?", ":"")+"arg"+s,y+=(s!==0?", ":"")+"arg"+s+"Wired";var P="return function "+Hr(r)+"("+g+`) {
if (arguments.length !== `+(f-2)+`) {
throwBindingError('function `+r+" called with ' + arguments.length + ' arguments, expected "+(f-2)+` args!');
}
`;o&&(P+=`var destructors = [];
`);var Y=o?"destructors":"null",q=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],ir=[F,i,a,xr,n[0],n[1]];c&&(P+="var thisWired = classParam.toWireType("+Y+`, this);
`);for(var s=0;s<f-2;++s)P+="var arg"+s+"Wired = argType"+s+".toWireType("+Y+", arg"+s+"); // "+n[s+2].name+`
`,q.push("argType"+s),ir.push(n[s+2]);if(c&&(y="thisWired"+(y.length>0?", ":"")+y),P+=(v?"var rv = ":"")+"invoker(fn"+(y.length>0?", ":"")+y+`);
`,o)P+=`runDestructors(destructors);
`;else for(var s=c?1:2;s<n.length;++s){var Q=s===1?"thisWired":"arg"+(s-2)+"Wired";n[s].destructorFunction!==null&&(P+=Q+"_dtor("+Q+"); // "+n[s].name+`
`,q.push(Q+"_dtor"),ir.push(n[s].destructorFunction))}v&&(P+=`var ret = retType.fromWireType(rv);
return ret;
`),P+=`}
`,q.push(P);var le=Un(Function,q).apply(null,ir);return le}function Sn(r,n,e){if(r[n].overloadTable===void 0){var i=r[n];r[n]=function(){return r[n].overloadTable.hasOwnProperty(arguments.length)||F("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[n].overloadTable+")!"),r[n].overloadTable[arguments.length].apply(this,arguments)},r[n].overloadTable=[],r[n].overloadTable[i.argCount]=i}}function Wn(r,n,e){t.hasOwnProperty(r)?((e===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[e]!==void 0)&&F("Cannot register public name '"+r+"' twice"),Sn(t,r,r),t.hasOwnProperty(e)&&F("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),t[r].overloadTable[e]=n):(t[r]=n,e!==void 0&&(t[r].numArguments=e))}function kn(r,n){for(var e=[],i=0;i<r;i++)e.push(O[(n>>2)+i]);return e}function In(r,n,e){t.hasOwnProperty(r)||qr("Replacing nonexistant public symbol"),t[r].overloadTable!==void 0&&e!==void 0?t[r].overloadTable[e]=n:(t[r]=n,t[r].argCount=e)}function On(r,n,e){var i=t["dynCall_"+r];return e&&e.length?i.apply(null,[n].concat(e)):i.call(null,n)}function Dn(r,n,e){return r.includes("j")?On(r,n,e):rr.get(n).apply(null,e)}function Vn(r,n){var e=[];return function(){e.length=arguments.length;for(var i=0;i<arguments.length;i++)e[i]=arguments[i];return Dn(r,n,e)}}function Ln(r,n){r=S(r);function e(){return r.includes("j")?Vn(r,n):rr.get(n)}var i=e();return typeof i!="function"&&F("unknown function pointer with signature "+r+": "+n),i}var zr=void 0;function Xr(r){var n=Gr(r),e=S(n);return L(n),e}function Hn(r,n){var e=[],i={};function a(f){if(!i[f]&&!G[f]){if(sr[f]){sr[f].forEach(a);return}e.push(f),i[f]=!0}}throw n.forEach(a),new zr(r+": "+e.map(Xr).join([", "]))}function Bn(r,n,e,i,a,f){var c=kn(n,e);r=S(r),a=Ln(i,a),Wn(r,function(){Hn("Cannot call "+r+" due to unbound types",c)},n-1),wn([],c,function(o){var s=[o[0],null].concat(o.slice(1));return In(r,Rn(r,s,null,a,f),n-1),[]})}function jn(r,n,e){switch(n){case 0:return e?function(a){return vr[a]}:function(a){return R[a]};case 1:return e?function(a){return J[a>>1]}:function(a){return pr[a>>1]};case 2:return e?function(a){return O[a>>2]}:function(a){return D[a>>2]};default:throw new TypeError("Unknown integer type: "+r)}}function Nn(r,n,e,i,a){n=S(n),a===-1&&(a=4294967295);var f=gr(e),c=function(v){return v};if(i===0){var o=32-8*e;c=function(v){return v<<o>>>o}}var s=n.includes("unsigned");V(r,{name:n,fromWireType:c,toWireType:function(v,g){if(typeof g!="number"&&typeof g!="boolean")throw new TypeError('Cannot convert "'+br(g)+'" to '+this.name);if(g<i||g>a)throw new TypeError('Passing a number "'+br(g)+'" from JS side to C/C++ side to an argument of type "'+n+'", which is outside the valid range ['+i+", "+a+"]!");return s?g>>>0:g|0},argPackAdvance:8,readValueFromPointer:jn(n,f,i!==0),destructorFunction:null})}function qn(r,n,e){var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],a=i[n];function f(c){c=c>>2;var o=D,s=o[c],v=o[c+1];return new a(lr,v,s)}e=S(e),V(r,{name:e,fromWireType:f,argPackAdvance:8,readValueFromPointer:f},{ignoreDuplicateRegistrations:!0})}function xn(r,n){n=S(n);var e=n==="std::string";V(r,{name:n,fromWireType:function(i){var a=D[i>>2],f;if(e)for(var c=i+4,o=0;o<=a;++o){var s=i+4+o;if(o==a||R[s]==0){var v=s-c,g=T(c,v);f===void 0?f=g:(f+=String.fromCharCode(0),f+=g),c=s+1}}else{for(var y=new Array(a),o=0;o<a;++o)y[o]=String.fromCharCode(R[i+4+o]);f=y.join("")}return L(i),f},toWireType:function(i,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var f,c=typeof a=="string";c||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||F("Cannot pass non-string to std::string"),e&&c?f=function(){return ur(a)}:f=function(){return a.length};var o=f(),s=Er(4+o+1);if(D[s>>2]=o,e&&c)A(a,s+4,o+1);else if(c)for(var v=0;v<o;++v){var g=a.charCodeAt(v);g>255&&(L(s),F("String has UTF-16 code units that do not fit in 8 bits")),R[s+4+v]=g}else for(var v=0;v<o;++v)R[s+4+v]=a[v];return i!==null&&i.push(L,s),s},argPackAdvance:8,readValueFromPointer:wr,destructorFunction:function(i){L(i)}})}function zn(r,n,e){e=S(e);var i,a,f,c,o;n===2?(i=Jr,a=Kr,c=Zr,f=function(){return pr},o=1):n===4&&(i=Qr,a=Mr,c=rn,f=function(){return D},o=2),V(r,{name:e,fromWireType:function(s){for(var v=D[s>>2],g=f(),y,P=s+4,Y=0;Y<=v;++Y){var q=s+4+Y*n;if(Y==v||g[q>>o]==0){var ir=q-P,Q=i(P,ir);y===void 0?y=Q:(y+=String.fromCharCode(0),y+=Q),P=q+n}}return L(s),y},toWireType:function(s,v){typeof v!="string"&&F("Cannot pass non-string to C++ string type "+e);var g=c(v),y=Er(4+g+n);return D[y>>2]=g>>o,a(v,y+4,g+n),s!==null&&s.push(L,y),y},argPackAdvance:8,readValueFromPointer:wr,destructorFunction:function(s){L(s)}})}function Xn(r,n){n=S(n),V(r,{isVoid:!0,name:n,argPackAdvance:0,fromWireType:function(){},toWireType:function(e,i){}})}function tr(r){return r||F("Cannot use deleted val. handle = "+r),C[r].value}function Ar(r,n){var e=G[r];return e===void 0&&F(n+" has unknown type "+Xr(r)),e}function Gn(r,n,e){r=tr(r),n=Ar(n,"emval::as");var i=[],a=Z(i);return O[e>>2]=a,n.toWireType(i,r)}function Yn(r,n){for(var e=new Array(r),i=0;i<r;++i)e[i]=Ar(O[(n>>2)+i],"parameter "+i);return e}function $n(r,n,e,i){r=tr(r);for(var a=Yn(n,e),f=new Array(n),c=0;c<n;++c){var o=a[c];f[c]=o.readValueFromPointer(i),i+=o.argPackAdvance}var s=r.apply(void 0,f);return Z(s)}function Jn(r,n){return r=tr(r),n=tr(n),Z(r[n])}function Kn(r){r>4&&(C[r].refcount+=1)}function Zn(r){return r=tr(r),typeof r=="number"}var Qn={};function Mn(r){var n=Qn[r];return n===void 0?S(r):n}function re(r){return Z(Mn(r))}function ne(r){var n=C[r].value;xr(n),mr(r)}function ee(r,n){r=Ar(r,"_emval_take_value");var e=r.readValueFromPointer(n);return Z(e)}function te(){er()}function ie(r,n,e){R.copyWithin(r,n,n+e)}function ae(r){try{return $.grow(r-lr.byteLength+65535>>>16),Wr($.buffer),1}catch(n){}}function oe(r){var n=R.length;r=r>>>0;var e=2147483648;if(r>e)return!1;for(var i=1;i<=4;i*=2){var a=n*(1+.2/i);a=Math.min(a,r+100663296);var f=Math.min(e,nn(Math.max(r,a),65536)),c=ae(f);if(c)return!0}return!1}yn(),jr=t.BindingError=yr(Error,"BindingError"),Nr=t.InternalError=yr(Error,"InternalError"),Tn(),zr=t.UnboundTypeError=yr(Error,"UnboundTypeError");var fe={a:_n,q:gn,u:bn,t:Fn,m:Pn,k:Bn,d:Nn,c:qn,n:xn,l:zn,v:Xn,j:Gn,w:$n,b:mr,e:Jn,g:Kn,p:Zn,f:re,i:ne,h:ee,o:te,r:ie,s:oe},de=hn(),se=t.___wasm_call_ctors=function(){return(se=t.___wasm_call_ctors=t.asm.y).apply(null,arguments)},Er=t._malloc=function(){return(Er=t._malloc=t.asm.z).apply(null,arguments)},L=t._free=function(){return(L=t._free=t.asm.A).apply(null,arguments)},Gr=t.___getTypeName=function(){return(Gr=t.___getTypeName=t.asm.C).apply(null,arguments)},ce=t.___embind_register_native_and_builtin_types=function(){return(ce=t.___embind_register_native_and_builtin_types=t.asm.D).apply(null,arguments)},ue=t.dynCall_ijiii=function(){return(ue=t.dynCall_ijiii=t.asm.E).apply(null,arguments)},cr;nr=function r(){cr||Tr(),cr||(nr=r)};function Tr(r){if(r=r||p,X>0||(tn(),X>0))return;function n(){cr||(cr=!0,t.calledRun=!0,!fr&&(an(),u(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),on()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n()}if(t.run=Tr,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Tr(),t.ready}}(),me=Fr,Cr=new Uint8Array([0,0,0,1]);function ve(h){console.error(h)}Fr.createFile=Yr;function Yr(h=256){let t=0,u=0,_=new Uint8Array(h);return{contents:function(){return _.slice(0,u)},seek:function(l){t=l},write:function(l){let p=l.byteLength;return d(t+p),_.set(l,t),t+=p,u=Math.max(u,t),p}};function d(l){var p=_.length;if(p>=l)return;var H=1024*1024;l=Math.max(l,p*(p<H?2:1.125)>>>0),p!=0&&(l=Math.max(l,256));let B=_;_=new Uint8Array(l),u>0&&_.set(B.subarray(0,u),0)}}Fr.isWebCodecsSupported=$r;function $r(){return typeof window!="undefined"&&typeof window.VideoEncoder=="function"}function pe(h,t={}){let{width:u,height:_,groupOfPictures:d=20,fps:l=30,fragmentation:p=!1,sequential:H=!1,hevc:B=!1,format:j="annexb",codec:N="avc1.4d0034",acceleration:M,bitrate:m,error:W=ve,encoderOptions:x={},flushFrequency:ar=10}=t;if(!$r())throw new Error("MP4 H264 encoding/decoding depends on WebCodecs API which is not supported in this environment");if(typeof u!="number"||typeof _!="number")throw new Error("Must specify { width, height } options");if(!isFinite(u)||u<0||!isFinite(_)||_<0)throw new Error("{ width, height } options must be positive integers");let z=Yr(),or=h.create_muxer({width:u,height:_,fps:l,fragmentation:p,sequential:H,hevc:B},Ur),Pr={codec:N,width:u,height:_,avc:{format:j},hardwareAcceleration:M,bitrate:m,...x},I=0,U=new window.VideoEncoder({output(w,E){fr(w,E)},error:W});return U.configure(Pr),{async end(){return await U.flush(),U.close(),h.finalize_muxer(or),z.contents()},async addFrame(w){let E=1/l*I*1e6,T=I%d==0,b=new VideoFrame(w,{timestamp:E});U.encode(b,{keyFrame:T}),b.close(),ar!=null&&(I+1)%ar==0&&await U.flush(),I++},async flush(){return U.flush()}};function Ur(w,E,T){z.seek(T);let b=h.HEAPU8.subarray(w,w+E);return z.write(b)!==b.byteLength}function $(w){let E=h._malloc(w.byteLength);h.HEAPU8.set(w,E),h.mux_nal(or,E,w.byteLength),h._free(E)}function fr(w,E){let T=null;if(E.description)try{T=ge(E.description)}catch(A){W(A);return}let b=[];if(T&&(T.sps_list.forEach(A=>{b.push(Cr),b.push(A)}),T.pps_list.forEach(A=>{b.push(Cr),b.push(A)})),j==="annexb"){let A=new Uint8Array(w.byteLength);w.copyTo(A),b.push(A)}else try{let A=new ArrayBuffer(w.byteLength);w.copyTo(A),_e(A).forEach(ur=>{b.push(Cr),b.push(ur)})}catch(A){W(A);return}$(he(b))}}function he(h){let t=h.reduce((d,l)=>d+l.byteLength,0),u=new Uint8Array(t),_=0;for(let d=0;d<h.length;d++){let l=h[d];u.set(l,_),_+=l.byteLength}return u}function _e(h){let t=4,u=0,_=[],d=h.byteLength,l=new Uint8Array(h);for(;u+t<d;){let p=l[u];if(p=(p<<8)+l[u+1],p=(p<<8)+l[u+2],p=(p<<8)+l[u+3],_.push(new Uint8Array(h,u+t,p)),p==0)throw new Error("Error: invalid nal_length 0");u+=t+p}return _}function ge(h){let t=new DataView(h),u=0,_=t.getUint8(u++),d=t.getUint8(u++),l=t.getUint8(u++),p=t.getUint8(u++),H=(t.getUint8(u++)&3)+1;if(H!==4)throw new Error("Expected length_size to indicate 4 bytes");let B=t.getUint8(u++)&31,j=[];for(let m=0;m<B;m++){let W=t.getUint16(u,!1);u+=2;let x=new Uint8Array(t.buffer,u,W);j.push(x),u+=W}let N=t.getUint8(u++),M=[];for(let m=0;m<N;m++){let W=t.getUint16(u,!1);u+=2;let x=new Uint8Array(t.buffer,u,W);M.push(x),u+=W}return{offset:u,version:_,profile:d,compat:l,level:p,length_size:H,pps_list:M,sps_list:j,numSPS:B}}export{Yr as createFile,pe as createWebCodecsEncoderWithModule,me as default,$r as isWebCodecsSupported};
//# sourceMappingURL=mp4.js.map
