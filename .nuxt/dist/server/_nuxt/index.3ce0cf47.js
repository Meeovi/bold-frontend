import { u as useHead } from "./composables.0c0d7626.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$6, f as _sfc_main$7, g as _sfc_main$8 } from "./wishlists.7a398df7.js";
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
import "./product1.0b352b7e.js";
const __default__ = {
  components: {
    account: _sfc_main$1,
    orders: _sfc_main$2,
    loyalty: _sfc_main$5,
    reviews: _sfc_main$6,
    wishlists: _sfc_main$7,
    designers: _sfc_main$3,
    hearts: _sfc_main$4,
    subscriptions: _sfc_main$8
  },
  data: () => ({
    tab: "option-1"
  })
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_card, { class: "contentCard align-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-row"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event,
              direction: "vertical",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5${_scopeId2}>Account Overview</h5>`);
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-account `);
                            } else {
                              return [
                                createTextVNode(" mdi-account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Account `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-account ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-lock `);
                            } else {
                              return [
                                createTextVNode(" mdi-lock ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Orders `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-lock ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Orders ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h5${_scopeId2}>Your Favorites</h5>`);
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Designers `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Designers ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Stars `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Stars ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Loyalty `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Loyalty ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Reviews `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Reviews ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-7" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Wish List `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Wish List ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Subscriptions `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Subscriptions ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", null, "Account Overview"),
                    createVNode(_component_v_tab, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-account ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Account ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-lock ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Orders ")
                      ]),
                      _: 1
                    }),
                    createVNode("h5", null, "Your Favorites"),
                    createVNode(_component_v_tab, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Designers ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Stars ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Loyalty ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Reviews ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-7" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Wish List ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Subscriptions ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_window, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event,
              class: "contentRight"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-7" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$7, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_window_item, { value: "option-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$8, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$8)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window_item, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-7" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$8)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-row" }, [
                createVNode(_component_v_tabs, {
                  modelValue: _ctx.tab,
                  "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                  direction: "vertical",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode("h5", null, "Account Overview"),
                    createVNode(_component_v_tab, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-account ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Account ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-lock ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Orders ")
                      ]),
                      _: 1
                    }),
                    createVNode("h5", null, "Your Favorites"),
                    createVNode(_component_v_tab, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Designers ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Stars ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Loyalty ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Reviews ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-7" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Wish List ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Subscriptions ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_window, {
                  modelValue: _ctx.tab,
                  "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                  class: "contentRight"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_window_item, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-7" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_window_item, { value: "option-8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$8)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/User/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.3ce0cf47.js.map
