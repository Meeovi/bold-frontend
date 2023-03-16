import { u as useHead } from "./composables.0c0d7626.js";
import "../server.mjs";
import { withAsyncContext, resolveComponent, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { u as useAsyncData } from "./asyncData.bc51beee.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
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
const __default__ = {
  components: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "shipments",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Shipments"
    });
    const { data: pages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => $fetch("/api/pages"), "$QXHQ0rFxk4")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_table = resolveComponent("v-table");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_toolbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "9" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Shipments`);
                      } else {
                        return [
                          createTextVNode("Shipments")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createTextVNode("Shipments")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "2" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "9" }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Shipments")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_table, {
        "fixed-header": "",
        height: "300px",
        width: "100%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-left"${_scopeId}> Page ID </th><th class="text-left"${_scopeId}> Page Name </th><th class="text-left"${_scopeId}> URL </th><th class="text-left"${_scopeId}> Meta Title </th><th class="text-left"${_scopeId}> Created </th><th class="text-left"${_scopeId}> Edit </th></tr></thead><!--[-->`);
            ssrRenderList(unref(pages), (pages2) => {
              _push2(`<tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>${ssrInterpolate(pages2.id)}</td><td${_scopeId}>${ssrInterpolate(pages2.title)}</td><td${_scopeId}>${ssrInterpolate(pages2.url_key)}</td><td${_scopeId}>${ssrInterpolate(pages2.meta_title)}</td><td${_scopeId}>${ssrInterpolate(pages2.created_at)}</td><td${_scopeId}><a${ssrRenderAttr("href", `/admin/database/${pages2.id}`)}${_scopeId}></a></td></tr></tbody>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, " Page ID "),
                  createVNode("th", { class: "text-left" }, " Page Name "),
                  createVNode("th", { class: "text-left" }, " URL "),
                  createVNode("th", { class: "text-left" }, " Meta Title "),
                  createVNode("th", { class: "text-left" }, " Created "),
                  createVNode("th", { class: "text-left" }, " Edit ")
                ])
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(pages), (pages2) => {
                return openBlock(), createBlock("tbody", {
                  key: pages2.id
                }, [
                  createVNode("tr", null, [
                    createVNode("td", null, toDisplayString(pages2.id), 1),
                    createVNode("td", null, toDisplayString(pages2.title), 1),
                    createVNode("td", null, toDisplayString(pages2.url_key), 1),
                    createVNode("td", null, toDisplayString(pages2.meta_title), 1),
                    createVNode("td", null, toDisplayString(pages2.created_at), 1),
                    createVNode("td", null, [
                      createVNode("a", {
                        href: `/admin/database/${pages2.id}`
                      }, null, 8, ["href"])
                    ])
                  ])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Commerce/shipments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=shipments.8e0452cc.js.map
