import { u as useHead } from "./composables.0c0d7626.js";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "stars",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Stars"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><div class="row justify-content-center"><div class="title pb-5 col-12"><h2 class="align-left pb-3 mbr-fonts-style display-5"> User&#39;s Saved Stars</h2></div><div class="card col-12 col-md-6 p-3 col-lg-4"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt="ShopnBold"></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-5"> Watch Star </h4><p class="mbr-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolores doloribus eligendi eum illo placeat quis repellendus sequi tempore! </p><div class="mbr-section-btn align-left"><a href="/" class="btn btn-warning-outline display-4"> $ 790 </a></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stars.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=stars.15c9ce91.js.map
