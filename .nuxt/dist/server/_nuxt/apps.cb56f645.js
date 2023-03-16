import { u as useHead } from "./composables.0c0d7626.js";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "tslib";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "@fortawesome/free-solid-svg-icons";
import "vue-instantsearch/vue3/es";
import "defu";
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "apps",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "ShopnBold App"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="pricing-table1 cid-sodD8qPyJs" id="pricing-tables1-1v"><div class="container"><div class="media-container-row"><div class="plan col-12 mx-2 my-2 justify-content-center col-lg-4"><div class="plan-header text-center pt-5"><h3 class="plan-title mbr-fonts-style display-5"> ShopnBold</h3><div class="plan-price"><span class="price-value mbr-fonts-style display-5"> $ </span><span class="price-figure mbr-fonts-style display-1"> 0</span><small class="price-term mbr-fonts-style display-7"> per month </small></div></div><div class="plan-body pb-5"><div class="plan-list align-center"><ul class="list-group list-group-flush mbr-fonts-style display-7"><li class="list-group-item"><span style="${ssrRenderStyle({ "font-size": "1rem" })}">ShopnBold&#39;s app is for men of ages to find clothing for all occassions.</span><br></li></ul></div><div class="mbr-section-btn text-center pt-4"><a href="https://www.meeovi.com/apps" class="btn btn-primary display-4" target="_blank">GET IT NOW</a></div></div></div><div class="plan col-12 mx-2 my-2 justify-content-center col-lg-4"><div class="plan-header text-center pt-5"><h3 class="plan-title mbr-fonts-style display-5"> ShopnCute</h3><div class="plan-price"><span class="price-value mbr-fonts-style display-5"> $ </span><span class="price-figure mbr-fonts-style display-1"> 0</span><small class="price-term mbr-fonts-style display-7"> per month</small></div></div><div class="plan-body pb-5"><div class="plan-list align-center"><ul class="list-group list-group-flush mbr-fonts-style display-7"><li class="list-group-item"><span style="${ssrRenderStyle({ "font-size": "1rem" })}">ShopnCute&#39;s app is for women of ages to find clothing for all occassions.</span><br></li></ul></div><div class="mbr-section-btn text-center pt-4"><a href="https://www.meeovi.com/apps" class="btn btn-primary display-4" target="_blank">GET IT NOW</a></div></div></div><div class="plan col-12 mx-2 my-2 justify-content-center col-lg-4"><div class="plan-header text-center pt-5"><h3 class="plan-title mbr-fonts-style display-5"> Meeovi</h3><div class="plan-price"><span class="price-value mbr-fonts-style display-5"> $ </span><span class="price-figure mbr-fonts-style display-1"> 0</span><small class="price-term mbr-fonts-style display-7"> per month</small></div></div><div class="plan-body pb-5"><div class="plan-list align-center"><ul class="list-group list-group-flush mbr-fonts-style display-7"><li class="list-group-item"><span style="${ssrRenderStyle({ "font-size": "1rem" })}">Meeovi.com is an all around place for music, games, clothing, podcasts, and more.</span><br></li></ul></div><div class="mbr-section-btn text-center pt-4"><a href="https://www.meeovi.com/apps" class="btn btn-primary display-4" target="_blank">GET IT NOW</a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=apps.cb56f645.js.map
