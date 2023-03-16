import { c as catbar, s as search, _ as __nuxt_component_0 } from "./FooterNav.d59f0f28.js";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
const __default__ = {
  data() {
    return {
      components: {
        search,
        catbar
      },
      drawer: null,
      location: "bottom",
      items: [
        {
          title: "Home",
          icon: "fas fa-home"
        },
        {
          title: "Content Manager",
          icon: "fas fa-feather-pointed"
        },
        {
          title: "Settings",
          icon: "fas fa-gear"
        }
      ],
      rail: true,
      loaded: false,
      loading: false
    };
  },
  methods: {
    onClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2e3);
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = ref("light");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_layout = resolveComponent("v-layout");
      const _component_FooterNav = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_app, mergeProps({ theme: theme.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, {
              id: "topnav",
              density: "compact"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center flex-column flex-sm-row fill-height"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-location-dot"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` US `);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        start: "",
                                        icon: "fas fa-location-dot"
                                      }),
                                      createTextVNode(" US ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-location-dot"
                                    }),
                                    createTextVNode(" US ")
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "US",
                                      value: "us",
                                      href: "/"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "US",
                                        value: "us",
                                        href: "/"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "US",
                                      value: "us",
                                      href: "/"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-location-dot"
                                  }),
                                  createTextVNode(" US ")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "US",
                                    value: "us",
                                    href: "/"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-language"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` EN `);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        start: "",
                                        icon: "fas fa-language"
                                      }),
                                      createTextVNode(" EN ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-language"
                                    }),
                                    createTextVNode(" EN ")
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "EN",
                                      value: "en",
                                      href: "/"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "EN",
                                        value: "en",
                                        href: "/"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "EN",
                                      value: "en",
                                      href: "/"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-language"
                                  }),
                                  createTextVNode(" EN ")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "EN",
                                    value: "en",
                                    href: "/"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-dollar-sign"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` USD `);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        start: "",
                                        icon: "fas fa-dollar-sign"
                                      }),
                                      createTextVNode(" USD ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-dollar-sign"
                                    }),
                                    createTextVNode(" USD ")
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "USD",
                                      value: "usd",
                                      href: "/"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "USD",
                                        value: "usd",
                                        href: "/"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "USD",
                                      value: "usd",
                                      href: "/"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-dollar-sign"
                                  }),
                                  createTextVNode(" USD ")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "USD",
                                    value: "usd",
                                    href: "/"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_app_bar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="logobrand" href="/"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, {
                          color: "primary",
                          start: "",
                          icon: "fas fa-shirt"
                        }, null, _parent4, _scopeId3));
                        _push4(`ShopnBold </a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "logobrand",
                            href: "/"
                          }, [
                            createVNode(_component_v_icon, {
                              color: "primary",
                              start: "",
                              icon: "fas fa-shirt"
                            }),
                            createTextVNode("ShopnBold ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center flex-column flex-sm-row fill-height"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props, { href: "/stars" }), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      color: "primary",
                                      start: "",
                                      icon: "fas fa-star"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        color: "primary",
                                        start: "",
                                        icon: "fas fa-star"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props, { href: "/stars" }), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      color: "primary",
                                      start: "",
                                      icon: "fas fa-star"
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "",
                                      value: "",
                                      href: "/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "All Notifications",
                                      value: "notifications",
                                      href: "/user/notifications"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "",
                                        value: "",
                                        href: "/"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_list_item, {
                                        title: "All Notifications",
                                        value: "notifications",
                                        href: "/user/notifications"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "",
                                      value: "",
                                      href: "/"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_list_item, {
                                      title: "All Notifications",
                                      value: "notifications",
                                      href: "/user/notifications"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props, { href: "/stars" }), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "primary",
                                    start: "",
                                    icon: "fas fa-star"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "",
                                    value: "",
                                    href: "/"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_list_item, {
                                    title: "All Notifications",
                                    value: "notifications",
                                    href: "/user/notifications"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-user-circle"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        start: "",
                                        icon: "fas fa-user-circle"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-user-circle"
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Account",
                                      value: "my account",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Orders",
                                      value: "my Orders",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Loyalty",
                                      value: "my Loyalty",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Reviews",
                                      value: "my Reviews",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Stars",
                                      value: "my Stars",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Wish List",
                                      value: "my Wish List",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Designers",
                                      value: "my Designers",
                                      href: "/user/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Logout",
                                      value: "logout",
                                      href: "/logout"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "My Account",
                                        value: "my account",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Orders",
                                        value: "my Orders",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Loyalty",
                                        value: "my Loyalty",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Reviews",
                                        value: "my Reviews",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Stars",
                                        value: "my Stars",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Wish List",
                                        value: "my Wish List",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Designers",
                                        value: "my Designers",
                                        href: "/user/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Logout",
                                        value: "logout",
                                        href: "/logout"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "My Account",
                                      value: "my account",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Orders",
                                      value: "my Orders",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Loyalty",
                                      value: "my Loyalty",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Reviews",
                                      value: "my Reviews",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Stars",
                                      value: "my Stars",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Wish List",
                                      value: "my Wish List",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Designers",
                                      value: "my Designers",
                                      href: "/user/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Logout",
                                      value: "logout",
                                      href: "/logout"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-user-circle"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "My Account",
                                    value: "my account",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Orders",
                                    value: "my Orders",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Loyalty",
                                    value: "my Loyalty",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Reviews",
                                    value: "my Reviews",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Stars",
                                    value: "my Stars",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Wish List",
                                    value: "my Wish List",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Designers",
                                    value: "my Designers",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Logout",
                                    value: "logout",
                                    href: "/logout"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center flex-column flex-sm-row fill-height" }, [
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-location-dot"
                                  }),
                                  createTextVNode(" US ")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "US",
                                    value: "us",
                                    href: "/"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-language"
                                  }),
                                  createTextVNode(" EN ")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "EN",
                                    value: "en",
                                    href: "/"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-dollar-sign"
                                  }),
                                  createTextVNode(" USD ")
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "USD",
                                    value: "usd",
                                    href: "/"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode(_component_v_app_bar_title, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "logobrand",
                          href: "/"
                        }, [
                          createVNode(_component_v_icon, {
                            color: "primary",
                            start: "",
                            icon: "fas fa-shirt"
                          }),
                          createTextVNode("ShopnBold ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex align-center flex-column flex-sm-row fill-height" }, [
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props, { href: "/stars" }), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "primary",
                                    start: "",
                                    icon: "fas fa-star"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "",
                                    value: "",
                                    href: "/"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_list_item, {
                                    title: "All Notifications",
                                    value: "notifications",
                                    href: "/user/notifications"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-user-circle"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "My Account",
                                    value: "my account",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Orders",
                                    value: "my Orders",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Loyalty",
                                    value: "my Loyalty",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Reviews",
                                    value: "my Reviews",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Stars",
                                    value: "my Stars",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Wish List",
                                    value: "my Wish List",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Designers",
                                    value: "my Designers",
                                    href: "/user/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Logout",
                                    value: "logout",
                                    href: "/logout"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_layout, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_main, { id: "sidebarNav" }, null, _parent5, _scopeId4));
                              _push5(`<main id="mainSection"${_scopeId4}>`);
                              _push5(ssrRenderComponent(catbar, null, null, _parent5, _scopeId4));
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                              _push5(`</main>`);
                            } else {
                              return [
                                createVNode(_component_v_main, { id: "sidebarNav" }),
                                createVNode("main", { id: "mainSection" }, [
                                  createVNode(catbar),
                                  renderSlot(_ctx.$slots, "default")
                                ])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_layout, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_main, { id: "sidebarNav" }),
                              createVNode("main", { id: "mainSection" }, [
                                createVNode(catbar),
                                renderSlot(_ctx.$slots, "default")
                              ])
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FooterNav, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_layout, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_main, { id: "sidebarNav" }),
                            createVNode("main", { id: "mainSection" }, [
                              createVNode(catbar),
                              renderSlot(_ctx.$slots, "default")
                            ])
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }),
                    createVNode(_component_FooterNav)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                id: "topnav",
                density: "compact"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center flex-column flex-sm-row fill-height" }, [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-location-dot"
                                }),
                                createTextVNode(" US ")
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "US",
                                  value: "us",
                                  href: "/"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-language"
                                }),
                                createTextVNode(" EN ")
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "EN",
                                  value: "en",
                                  href: "/"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-dollar-sign"
                                }),
                                createTextVNode(" USD ")
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "USD",
                                  value: "usd",
                                  href: "/"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_app_bar_title, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "logobrand",
                        href: "/"
                      }, [
                        createVNode(_component_v_icon, {
                          color: "primary",
                          start: "",
                          icon: "fas fa-shirt"
                        }),
                        createTextVNode("ShopnBold ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_spacer),
                  createVNode("div", { class: "d-flex align-center flex-column flex-sm-row fill-height" }, [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props, { href: "/stars" }), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  color: "primary",
                                  start: "",
                                  icon: "fas fa-star"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "",
                                  value: "",
                                  href: "/"
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_list_item, {
                                  title: "All Notifications",
                                  value: "notifications",
                                  href: "/user/notifications"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-user-circle"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "My Account",
                                  value: "my account",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Orders",
                                  value: "my Orders",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Loyalty",
                                  value: "my Loyalty",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Reviews",
                                  value: "my Reviews",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Stars",
                                  value: "my Stars",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Wish List",
                                  value: "my Wish List",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Designers",
                                  value: "my Designers",
                                  href: "/user/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Logout",
                                  value: "logout",
                                  href: "/logout"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_main, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_layout, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_main, { id: "sidebarNav" }),
                          createVNode("main", { id: "mainSection" }, [
                            createVNode(catbar),
                            renderSlot(_ctx.$slots, "default")
                          ])
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  }),
                  createVNode(_component_FooterNav)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default.827a279d.js.map
