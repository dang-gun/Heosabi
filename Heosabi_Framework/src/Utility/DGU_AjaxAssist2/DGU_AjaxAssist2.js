(()=>{"use strict";var t={510:function(t,e,o){var l=this&&this.__createBinding||(Object.create?function(t,e,o,l){void 0===l&&(l=o);var a=Object.getOwnPropertyDescriptor(e,o);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,l,a)}:function(t,e,o,l){void 0===l&&(l=o),t[l]=e[o]}),a=this&&this.__exportStar||function(t,e){for(var o in t)"default"===o||Object.prototype.hasOwnProperty.call(e,o)||l(e,t,o)},i=this&&this.__awaiter||function(t,e,o,l){return new(o||(o=Promise))((function(a,i){function n(t){try{c(l.next(t))}catch(t){i(t)}}function r(t){try{c(l.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,r)}c((l=l.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const n=o(58);a(o(58),e),e.default=class{constructor(t){this.get=t=>i(this,void 0,void 0,(function*(){return t.method=n.AjaxCallMethodType.Get,!0===t.await?yield this.callAwait(t):this.callAsync(t)})),this.post=t=>i(this,void 0,void 0,(function*(){return t.method=n.AjaxCallMethodType.Post,!0===t.await?yield this.callAwait(t):this.callAsync(t)})),this.put=t=>i(this,void 0,void 0,(function*(){return t.method=n.AjaxCallMethodType.Put,!0===t.await?yield this.callAwait(t):this.callAsync(t)})),this.patch=t=>i(this,void 0,void 0,(function*(){return t.method=n.AjaxCallMethodType.Patch,!0===t.await?yield this.callAwait(t):this.callAsync(t)})),this.delete=t=>i(this,void 0,void 0,(function*(){return t.method=n.AjaxCallMethodType.Delete,!0===t.await?yield this.callAwait(t):this.callAsync(t)})),this.call=t=>i(this,void 0,void 0,(function*(){return!0===t.await?yield this.callAwait(t):this.callAsync(t)})),this.callAwait=t=>i(this,void 0,void 0,(function*(){t.await=!0;let e=null,o=this.CallOptionCheck(t);return yield fetch(o.urlTarget,o.completeFetch).then((t=>{e=this.ResponseToData(t,o.callOption.contentGetType),o.callOption.success&&o.callOption.success(e,t)})).catch((t=>{e=t,o.callOption.error&&o.callOption.error(t)})),e})),this.callAsync=t=>{t.await=!1;let e=this.CallOptionCheck(t),o=null;return o=fetch(e.urlTarget,e.completeFetch).then((t=>{if(e.callOption.success){let o=null;o=this.ResponseToData(t,e.callOption.contentGetType),e.callOption.success(o,t)}return t})).catch((t=>(e.callOption.error(t),t))),o},this.CallOptionCheck=t=>{let e=Object.assign({},this.CallOptionDefult,t),o=Object.assign({},this.CallOptionDefult.fetchOption,t.fetchOption),l=new URL(e.url,window.location.origin);if(e.fetchOption.method||(o.method=e.method),n.AjaxCallMethodType.Get===o.method||n.AjaxCallMethodType.Head===o.method){let t=null;o.body?t=o.body:e.data?t=e.data:e.body&&(t=e.body),delete o.body,t&&(l.search=this.JsonToSearchParams(t).toString())}let a=new n.AjaxCallOptionCheckCompleteDataModel;return a.callOption=e,a.urlTarget=l,a.completeFetch=o,a},this.CallOptionDefult=t||{await:!1,contentGetType:2,method:n.AjaxCallMethodType.Get,url:"",fetchOption:{mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},redirect:"follow",referrer:"no-referrer"},data:null,body:null,success:null,error:null}}JsonToSearchParams(t){let e=new URLSearchParams;for(const[o,l]of Object.entries(t))e.append(o,l.toString());return e}ResponseToData(t,e){let o=null;if(!0===t.ok)switch(e){case 1:o=t;break;case 2:o=t.json();break;case 3:o=t.arrayBuffer();break;default:o=t.text()}return o}}},721:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},310:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},763:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AjaxCallMethodType=void 0,e.AjaxCallMethodType=class{}},195:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AjaxCallOptionCheckCompleteDataModel=void 0,e.AjaxCallOptionCheckCompleteDataModel=class{}},58:function(t,e,o){var l=this&&this.__createBinding||(Object.create?function(t,e,o,l){void 0===l&&(l=o);var a=Object.getOwnPropertyDescriptor(e,o);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,l,a)}:function(t,e,o,l){void 0===l&&(l=o),t[l]=e[o]}),a=this&&this.__exportStar||function(t,e){for(var o in t)"default"===o||Object.prototype.hasOwnProperty.call(e,o)||l(e,t,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.AjaxCallOptionModel=void 0,a(o(721),e),a(o(310),e);const i=o(763);a(o(763),e),a(o(195),e),e.AjaxCallOptionModel=class{constructor(){this.await=!1,this.contentGetType=2,this.method=i.AjaxCallMethodType.Get,this.url="",this.fetchOption={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},redirect:"follow",referrer:"no-referrer",method:null,body:null},this.data=null,this.body=null,this.success=null,this.error=null}}}},e={};!function o(l){var a=e[l];if(void 0!==a)return a.exports;var i=e[l]={exports:{}};return t[l].call(i.exports,i,i.exports,o),i.exports}(510)})();