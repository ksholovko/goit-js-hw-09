var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}refs={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')},refs.form.addEventListener("submit",(function(e){e.preventDefault();const t=parseInt(refs.delayInput.value),n=parseInt(refs.stepInput.value),o=parseInt(refs.amountInput.value);for(let e=0;e<o;e++)i(e+1,t+e*n).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.5a10e13a.js.map
