import { u as useHead } from "./composables.0c0d7626.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./product1.0b352b7e.js";
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
  __name: "giftcards",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gift Cards"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="services2 cid-tuyLlHzifg" id="services2-1z"><div class="container"><div class="col-md-12"><div class="media-container-row"><div class="mbr-figure" style="${ssrRenderStyle({ "width": "50%" })}"><img${ssrRenderAttr("src", _imports_0)} alt="ShopnBold"></div><div class="align-left aside-content"><h2 class="mbr-title pt-2 mbr-fonts-style display-2"> Gift Card</h2><div class="mbr-section-text"><p class="mbr-text text1 pt-2 mbr-light mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolores doloribus eligendi eum illo </p><p class="mbr-text text2 pt-4 mbr-light mbr-fonts-style display-2"> $690 <span class="cost">$890</span></p></div><div class="mbr-section-btn pt-3 align-left"><a href="/" class="btn btn-warning-outline display-4"> Buy Now </a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/giftcards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=giftcards.fb183205.js.map
