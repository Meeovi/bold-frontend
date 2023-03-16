import { u as useHead } from "./composables.0c0d7626.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./background9.248de1cc.js";
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
  __name: "affiliates",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Affiliates"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contentSection" }, _attrs))}><section class="features11 cid-tuyL5wbnQP" id="features11-1x"><div class="container"><div class="col-md-12"><div class="media-container-row"><div class="mbr-figure m-auto" style="${ssrRenderStyle({ "width": "50%" })}"><img${ssrRenderAttr("src", _imports_0)} alt="ShopnBold" title=""></div><div class="align-left aside-content"><h2 class="mbr-title pt-2 mbr-fonts-style display-2"> Affiliates</h2><div class="mbr-section-text"><p class="mbr-text mb-5 pt-3 mbr-light mbr-fonts-style display-5"> Click any text or icon to edit or style it. Use the block parameters to hide/show text or icons and change media size or position. </p></div><div class="block-content"><div class="card p-3 pr-3"><div class="media"><div class="align-self-center card-img pb-3"><span class="mbri-extension mbr-iconfont"></span></div><div class="media-body"><h4 class="card-title mbr-fonts-style display-7"> Over 400 Amazing Blocks </h4></div></div><div class="card-box"><p class="block-text mbr-fonts-style display-7"> Mobirise offers several themes that include sliders, galleries, article blocks, counters, accordions, video, animated text, live filtered tables, shop, contact forms, lightbox, testimonials, timelines, google map, progress bars and more. </p></div></div><div class="card p-3 pr-3"><div class="media"><div class="align-self-center card-img pb-3"><span class="mbri-drag-n-drop2 mbr-iconfont"></span></div><div class="media-body"><h4 class="card-title mbr-fonts-style display-7"> Easy and Simple to Use </h4></div></div><div class="card-box"><p class="block-text mbr-fonts-style display-7"> Cut down the development time with drag-and-drop website builder. Drop the blocks into the page, edit content inline and publish - no technical skills required. </p></div></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/affiliates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=affiliates.c9356043.js.map
