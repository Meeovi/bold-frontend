import { u as useHead } from "./composables.0c0d7626.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + globalThis.__buildAssetsURL("mbr-1162x555.c8503947.jpg");
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "careers",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Careers"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contentSection" }, _attrs))}><section class="testimonials3 cid-tuyKrCJaJv" id="testimonials3-1w"><div class="container"><div class="media-container-row"><div class="media-content px-3 align-self-center mbr-white py-2"><p class="mbr-text testimonial-text mbr-fonts-style display-7"> It&#39;s really very amazing app that makes me finish html page in 3 minutes that&#39;s usually takes more than 1 hours at least from me if i did it from scratch </p><p class="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7"> Julie C. </p><p class="mbr-author-desc mbr-fonts-style display-7"> INTERFACE DESIGNER </p></div><div class="mbr-figure pl-lg-5" style="${ssrRenderStyle({ "width": "200%" })}"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=careers.7e5908e7.js.map
