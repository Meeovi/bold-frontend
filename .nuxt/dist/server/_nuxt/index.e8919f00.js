import { u as useHead } from "./composables.0c0d7626.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_2, a as _imports_3, b as _imports_4 } from "./background3.6a465afb.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blog"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="mbr-section content5 cid-sodmR89GYK mbr-parallax-background" id="content5-14"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.4", "background-color": "rgb(35, 35, 35)" })}"></div><div class="container"><div class="media-container-row"><div class="title col-12 col-md-8"><h2 class="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-1"> Official ShopnBold Blog</h2></div></div></div></section><section class="features3 cid-sodmUo69u9" id="features3-15"><div class="container"><div class="media-container-row"><div class="card p-3 col-12 col-md-6 col-lg-4"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_2)} alt="ShopnBold"></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-7"> No Coding </h4><p class="mbr-text mbr-fonts-style display-7"> Mobirise is an easy website builder - just drop site elements to your page, add content and style it to look the way you like. </p></div><div class="mbr-section-btn text-center"><a href="/" class="btn btn-primary display-4"> Learn More </a></div></div></div><div class="card p-3 col-12 col-md-6 col-lg-4"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3)} alt="ShopnBold"></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-7"> Mobile Friendly </h4><p class="mbr-text mbr-fonts-style display-7"> All sites you make with Mobirise are mobile-friendly. You don&#39;t have to create a special mobile version of your site. </p></div><div class="mbr-section-btn text-center"><a href="/" class="btn btn-primary display-4"> Learn More </a></div></div></div><div class="card p-3 col-12 col-md-6 col-lg-4"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_4)} alt="ShopnBold"></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-7"> Unique Styles </h4><p class="mbr-text mbr-fonts-style display-7"> Mobirise offers many site blocks in several themes, and though these blocks are pre-made, they are flexible. </p></div><div class="mbr-section-btn text-center"><a href="/" class="btn btn-primary display-4"> Learn More </a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.e8919f00.js.map
