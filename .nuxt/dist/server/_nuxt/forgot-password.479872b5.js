import { u as useHead } from "./composables.0c0d7626.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Forgot Password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_table = resolveComponent("v-table");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><form method="post">`);
      _push(ssrRenderComponent(_component_v_table, { class: "table" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<tbody${_scopeId}><tr${_scopeId}><td style="${ssrRenderStyle({ "text-align": "right" })}"${_scopeId}>Enter Email</td><td${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: _ctx.email,
              "onUpdate:modelValue": ($event) => _ctx.email = $event,
              type: "email",
              name: "email",
              hint: "Enter your email so we can send you your password reset link",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</td></tr></tbody>`);
          } else {
            return [
              createVNode("tbody", null, [
                createVNode("tr", null, [
                  createVNode("td", { style: { "text-align": "right" } }, "Enter Email"),
                  createVNode("td", null, [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.email,
                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                      type: "email",
                      name: "email",
                      hint: "Enter your email so we can send you your password reset link",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card_actions, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "blue-darken-1",
              variant: "text",
              onClick: ($event) => _ctx.dialog = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, {
                color: "blue-darken-1",
                variant: "text",
                onClick: ($event) => _ctx.dialog = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgot-password.479872b5.js.map
