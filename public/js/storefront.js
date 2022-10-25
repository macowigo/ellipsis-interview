! function() {
    "use strict";
    var e = {
            7385: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", { value: !0 }), t.EcommerceIntegration = t.ANALYTICS_ADDED_PAYMENT = t.ANALYTICS_PERFORMED_SEARCH = t.ANALYTICS_STARTED_ORDER = t.ANALYTICS_COMPLETED_ORDER = t.ANALYTICS_ADDED_PRODUCT = t.ANALYTICS_VIEWED_PRODUCT_CATEGORY = t.ANALYTICS_VIEWED_PRODUCT = t.ANALYTICS_PAGE_VIEW = t.ANALYTICS_GENERIC_EVENT = void 0;
                var i = n(997),
                    a = n(542),
                    c = n(6997),
                    s = n(1102),
                    u = n(372),
                    p = n(1930),
                    d = { viewedProduct: /^[ _]?viewed[ _]?product[ _]?$/i, viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i, viewedProductVariant: /^[ _]?viewed[ _]?product[ _]?variant[ _]?$/i, addedProduct: /^[ _]?added[ _]?product[ _]?$/i, completedOrder: /^[ _]?completed[ _]?order[ _]?$/i, startedOrder: /^[ _]?started[ _]?order[ _]?$/i, performedSearch: /^[ _]?performed[ _]?search[ _]?$/i, addedPayment: /^[ _]?added[ _]?payment[ _]?$/i };
                t.ANALYTICS_GENERIC_EVENT = "genericEvent", t.ANALYTICS_PAGE_VIEW = "pageView", t.ANALYTICS_VIEWED_PRODUCT = "viewedProduct", t.ANALYTICS_VIEWED_PRODUCT_CATEGORY = "viewedProductCategory", t.ANALYTICS_ADDED_PRODUCT = "addedProduct", t.ANALYTICS_COMPLETED_ORDER = "completedOrder", t.ANALYTICS_STARTED_ORDER = "startedOrder", t.ANALYTICS_PERFORMED_SEARCH = "performedSearch", t.ANALYTICS_ADDED_PAYMENT = "addedPayment";
                var v = function(e) {
                    function t(t, n, r) { var o = e.call(this, t, n) || this; return o.shopId = void 0, o.checkoutToken = void 0, o.visitToken = void 0, o.uniqueToken = void 0, o.appName = void 0, o.wrapTrack(), r && (o.shopId = r.shopId, o.appName = r.appName, o.checkoutToken = r.checkoutToken, o.visitToken = r.visitToken, o.uniqueToken = r.uniqToken), o }
                    return o(t, e), t.prototype.ensureTrackingConsent = function(e, t) { c.privacyApiMethods.userCanBeTracked() ? e() : (document.addEventListener(a.TrackingConsentEvents.TRACKING_ACCEPTED, e), t()) }, t.prototype.wrapTrack = function() {
                        var e = this.track;
                        this.track = function(t) {
                            var n = t.event,
                                r = !1;
                            for (var o in d) { var i = d[o]; if (this[o] && i.test(n)) { this[o].apply(this, [t]), r = !0; break } }
                            r || e.apply(this, Array.prototype.slice.call(arguments))
                        }
                    }, t.prototype.addMonorailBatchEvent = function(e) {
                        if (this.appName && this.appName in p.appNameToEcommerceEventSchemaId) {
                            var t = this.getEcommercePixelIds();
                            i.addBatchEvent({ schemaId: e.schemaId ? e.schemaId : p.appNameToEcommerceEventSchemaId[this.appName], payload: s.objectAssignFilterUndefined({ shop_id: this.shopId, partner_name: this.getEcommerceMetricsTag(), event_name: e.eventName, unique_token: this.uniqueToken, visit_token: this.visitToken, integration_id: this.getIntegrationId() }, { pixel_id: t && t.length > 0 ? t[0] : void 0, event_properties: e.eventProperties, checkout_token: this.checkoutToken, event_id: e.eventId }) }), e.eventName in p.ecommerceEventNameSchemaId && i.addBatchEvent({ schemaId: p.ecommerceEventNameSchemaId[e.eventName], payload: { shop_id: this.shopId, partner_name: this.getEcommerceMetricsTag() } })
                        }
                    }, t
                }(u.Integration);
                t.EcommerceIntegration = v
            },
            372: function(e, t) {
                var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.Integration = void 0;
                var r = function() {
                    function e(e, t) { this.options = {}, this.options = n(n({}, e), t) }
                    return e.flatten = function(e) { var t = n({}, e); return t.properties = {}, n(n({}, t), e.properties) }, e.isEqual = function(e, t) {
                        for (var n in e)
                            if (e[n] !== t[n]) return !1;
                        for (var n in t)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }, e
                }();
                t.Integration = r
            },
            1930: function(e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.extractSchemaIdFromEventName = t.trekkieAssetContextSchemaId = t.s2sMiddlewareEventSchemaId = t.customerEventSchemaId = t.ecommerceEventNameSchemaId = t.appNameToEcommerceEventSchemaId = t.appNameToPageViewSchemaId = void 0, t.appNameToPageViewSchemaId = { admin: "trekkie_admin_page_view/1.0", appstore: "trekkie_appstore_page_view/1.2", blog: "trekkie_blog_page_view/1.2", brochure: "trekkie_brochure_page_view/1.2", checkout: "trekkie_checkout_page_view/1.2", "compass-web": "trekkie_compass_web_page_view/1.2", docs: "trekkie_docs_page_view/1.2", development: "edge_test/1.0", exchange: "trekkie_exchange_page_view/1.2", experts: "trekkie_experts_page_view/1.0", handshake: "trekkie_handshake_page_view/1.0", identity: "trekkie_identity_page_view/1.2", linkpop: "trekkie_linkpop_page_view/2.0", "marketing-misc": "trekkie_marketing_misc_page_view/1.2", oberlo: "trekkie_oberlo_app_page_view/1.0", "oberlo-home": "trekkie_oberlo_home_page_view/1.3", "oberlo-courses": "trekkie_oberlo_courses_page_view/1.0", opinions: "trekkie_opinions_page_view/1.2", partners: "trekkie_partners_page_view/1.2", "shopify-ping-web": "trekkie_shopify_ping_web_page_view/1.0", smiley: "trekkie_smiley_page_view/1.2", storefront: "trekkie_storefront_page_view/1.2", testing: "edge_test/1.0", themestore: "trekkie_themestore_page_view/1.2", taler: "trekkie_taler_page_view/1.0" }, t.appNameToEcommerceEventSchemaId = { storefront: "trekkie_storefront_ecommerce_event_emit/4.0", checkout: "trekkie_checkout_ecommerce_event_emit/4.0", test: "edge_test_ecommerce_event_emit/1.0" }, t.ecommerceEventNameSchemaId = { addedPayment: "trekkie_ecommerce_event_emit_added_payment/1.0", addedProduct: "trekkie_ecommerce_event_emit_added_product/1.0", completedOrder: "trekkie_ecommerce_event_emit_completed_order/1.0", genericEvent: "trekkie_ecommerce_event_emit_generic_event/1.0", pageView: "trekkie_ecommerce_event_emit_page_view/1.0", performedSearch: "trekkie_ecommerce_event_emit_performed_search/1.0", viewedProductCategory: "trekkie_ecommerce_event_emit_product_category_view/1.0", viewedProduct: "trekkie_ecommerce_event_emit_product_view/1.0", startedOrder: "trekkie_ecommerce_event_emit_started_order/1.0" }, t.customerEventSchemaId = "trekkie_customer_events/2.0", t.s2sMiddlewareEventSchemaId = "storefront_customer_tracking/2.3", t.trekkieAssetContextSchemaId = "trekkie_asset_context/1.1", t.extractSchemaIdFromEventName = function(e) {
                    var t = "monorail://",
                        n = e.toLowerCase();
                    if (0 === n.lastIndexOf(t) && n.length > t.length) return n.substr(t.length)
                }
            },
            793: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.TrackingConsentEvents = void 0, (t.TrackingConsentEvents || (t.TrackingConsentEvents = {})).TRACKING_ACCEPTED = "trackingConsentAccepted" },
            5291: function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }), t.TrackingRegulations = void 0, (n = t.TrackingRegulations || (t.TrackingRegulations = {})).GDPR = "GDPR", n.CCPA = "CCPA", n.NO_VALUE = ""
            },
            542: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.TrackingRegulations = t.TrackingConsentEvents = void 0;
                var r = n(793);
                Object.defineProperty(t, "TrackingConsentEvents", { enumerable: !0, get: function() { return r.TrackingConsentEvents } });
                var o = n(5291);
                Object.defineProperty(t, "TrackingRegulations", { enumerable: !0, get: function() { return o.TrackingRegulations } })
            },
            8878: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                    }, function(e, t) {
                        function n() { this.constructor = e }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = this && this.__assign || function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.FacebookPixel = void 0;
                var a = n(7385),
                    c = n(1503),
                    s = n(6997),
                    u = n(725),
                    p = n(997),
                    d = n(1102),
                    v = n(1930),
                    l = n(2724),
                    f = function(e) {
                        function t(n, r, o) { var a = e.call(this, t.defaultOptions, i(i({}, n), { agent: "shopify" }), r.defaultAttributes) || this; return a.campaignManager = new l.CampaignManager, e.prototype.ensureTrackingConsent.call(a, (function() { a.initialize(o) }), o), a }
                        return o(t, e), t.prototype.isEssential = function() { return !1 }, t.prototype.identify = function(e) { throw new Error("identify is not supported") }, t.prototype.page = function(e) { this.emitEvent("PageView", e.eventId, a.ANALYTICS_PAGE_VIEW) }, t.prototype.track = function(e) { var t = {}; for (var n in e.properties) "revenue" === n ? t.value = this.formatRevenue(e.properties.revenue) : t[n] = e.properties[n] }, t.prototype.viewedProductCategory = function(e) {}, t.prototype.viewedProductVariant = function(e) {}, t.prototype.viewedProduct = function(e) {
                            var t = e.properties,
                                n = { content_ids: this.getProductContentIds(t), content_type: this.getProductContentType(t), content_name: t.name || "", content_category: t.category || "", currency: this.getCurrency(t.currency), value: this.formatRevenue(t.price) };
                            this.emitEvent("ViewContent", e.eventId, a.ANALYTICS_VIEWED_PRODUCT, n)
                        }, t.prototype.addedProduct = function(e) {
                            var t = e.properties,
                                n = { content_ids: this.getProductContentIds(t), content_type: this.getProductContentType(t), content_name: t.name || "", content_category: t.category || "", currency: this.getCurrency(t.currency), value: this.formatRevenue(t.price), num_items: this.getProductNumItems(t) };
                            this.emitEvent("AddToCart", e.eventId, a.ANALYTICS_ADDED_PRODUCT, n)
                        }, t.prototype.addedPayment = function(e) {
                            var t = e.properties,
                                n = { currency: this.getCurrency(t.currency), value: this.formatRevenue(t.total) };
                            this.emitEvent("AddPaymentInfo", e.eventId, a.ANALYTICS_ADDED_PAYMENT, n)
                        }, t.prototype.performedSearch = function(e) {
                            var t = { search_string: e.properties.query || "" };
                            this.emitEvent("Search", e.eventId, a.ANALYTICS_PERFORMED_SEARCH, t)
                        }, t.prototype.startedOrder = function(e) {
                            var t = e.properties,
                                n = { content_ids: this.getOrderContentIds(t), content_type: this.getOrderContentType(t), currency: this.getCurrency(t.currency), value: this.formatRevenue(t.revenue), num_items: this.getOrderNumItems(t) };
                            this.emitEvent("InitiateCheckout", e.eventId, a.ANALYTICS_STARTED_ORDER, n)
                        }, t.prototype.completedOrder = function(e) {
                            var t = e.properties,
                                n = { content_ids: this.getOrderContentIds(t), content_type: this.getOrderContentType(t), currency: this.getCurrency(t.currency), value: this.formatRevenue(t.revenue), num_items: this.getOrderNumItems(t) };
                            if (this.options.conversionsAPIEnabled && t.customerEventData) {
                                var r = (this.campaignManager.fetch() || "").match("&?fbclid=([^&]+)"),
                                    o = null;
                                r && (o = decodeURIComponent(r[1]));
                                var c = JSON.stringify(i(i({}, n), { checkoutURL: u.href() })),
                                    d = { schemaId: v.customerEventSchemaId, payload: { first_name: t.customerEventData.customer.firstName, last_name: t.customerEventData.customer.lastName, event_id: e.eventId, shop_id: this.shopId, facebook_pixel_id: t.customerEventData.pixelID, event_name: "Purchase", payload: c, fbclid: o, fbc: s.read("_fbc") || null, fbp: s.read("_fbp") || null, address: JSON.stringify({ city: t.customerEventData.address.city, province: t.customerEventData.address.province, country: t.customerEventData.address.country, zip: t.customerEventData.address.zip }), phone: t.customerEventData.customer.phoneNumber, email: t.customerEventData.customer.emailAddress, ccpa_enforced: s.isCCPAEnforced() } };
                                p.produce([d]), this.emitEvent("Purchase", e.eventId, a.ANALYTICS_COMPLETED_ORDER, n)
                            } else this.emitEvent("Purchase", e.eventId, a.ANALYTICS_COMPLETED_ORDER, n)
                        }, t.prototype.emitEvent = function(e, t, n, r) { void 0 === r && (r = {}), window.fbq("track", e, r, { eventID: t }), this.addMonorailBatchEvent(d.objectAssignFilterUndefined({ eventName: n }, { eventId: t, eventProperties: JSON.stringify(r) })) }, t.prototype.setLimitedDataUseMode = function() { window.fbq("dataProcessingOptions", ["LDU"], 1, 1e3) }, t.prototype.initialize = function(e) {
                            this.loadFacebookScript();
                            for (var t = this.options, n = 0, r = this.getFacebookPixelIds(t); n < r.length; n++) {
                                var o = r[n];
                                s.privacyApiMethods.userDataCannotBeSold() && this.setLimitedDataUseMode(), window.fbq("init", o), "" !== t.agent && window.fbq("set", "agent", t.agent, o)
                            }
                            e()
                        }, t.prototype.generateScriptTag = function() { var e = c.virtualDocument().createElement("script"); return e.async = !0, e.src = "https://connect.facebook.net/en_US/fbevents.js", e }, t.prototype.getFacebookPixelIds = function(e) {
                            for (var t = [], n = 0, r = e.pixelIds.concat([e.pixelId]); n < r.length; n++) {
                                var o = r[n];
                                null !== o && "" !== o && t.push(o)
                            }
                            return t
                        }, t.prototype.loadFacebookScript = function() {
                            if (!window.fbq || "function" != typeof window.fbq) {
                                window.fbq = function() { window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments) }, window._fbq || (window._fbq = window.fbq), window.fbq.push = window.fbq, window.fbq.loaded = !0, window.fbq.version = "2.0", window.fbq.queue = [];
                                var e = c.virtualDocument().getElementsByTagName("script")[0];
                                void 0 === e ? document.head.appendChild(this.generateScriptTag()) : e.parentNode.insertBefore(this.generateScriptTag(), e)
                            }
                        }, t.prototype.formatRevenue = function(e) { return Number(e || 0).toFixed(2) }, t.prototype.getCurrency = function(e) { return e || "USD" }, t.prototype.getProductContentIds = function(e) { var t = e.productId || e.variantId || e.sku; return t ? [t] : [] }, t.prototype.getProductContentType = function(e) { return e.productId ? "product_group" : "product" }, t.prototype.getProductNumItems = function(e) { return e.quantity || this.getProductContentIds(e).length }, t.prototype.getProductKey = function(e) { return e.productId || e.variantId || e.sku }, t.prototype.getOrderContentIds = function(e) {
                            for (var t = [], n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n],
                                    i = this.getProductKey(o);
                                i && -1 === t.indexOf(i) && t.push(i)
                            }
                            return t
                        }, t.prototype.getOrderContentType = function(e) {
                            for (var t = 0, n = e.products || []; t < n.length; t++)
                                if (n[t].productId) return "product_group";
                            return "product"
                        }, t.prototype.getOrderNumItems = function(e) {
                            for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n];
                                this.getProductKey(o) && (t += o.quantity || 1)
                            }
                            return t
                        }, t.prototype.getEcommerceMetricsTag = function() { return "facebook" }, t.prototype.getIntegrationId = function() { return "FacebookPixel" }, t.prototype.getEcommercePixelIds = function() { var e = this.options; return this.getFacebookPixelIds(e) }, t.defaultOptions = { pixelId: "", pixelIds: [], agent: "shopify", conversionsAPIEnabled: !1 }, t
                    }(a.EcommerceIntegration);
                t.FacebookPixel = f
            },
            7575: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                    }, function(e, t) {
                        function n() { this.constructor = e }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = this && this.__assign || function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.GoogleAnalytics = void 0;
                var a = n(7385),
                    c = n(725),
                    s = n(1503),
                    u = function(e) {
                        function t(n, r, o) { var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this; return i.pageCalled = !1, i.ecommerce = !1, i.enhancedEcommerceLoaded = !1, i.setWindowGa(), e.prototype.ensureTrackingConsent.call(i, (function() { i.initialize(o) }), o), i }
                        return o(t, e), t.prototype.identify = function(e) { throw new Error("identify is not supported") }, t.prototype.isEssential = function() { return !1 }, t.prototype.page = function(e) {
                            this.overrideDefaultPageProperties(e);
                            var t = this.options,
                                n = this.path(e),
                                r = e.name || e.title,
                                o = { page: n, title: r };
                            window.ga("set", o);
                            var i = { page: n, title: r, location: e.url };
                            if (this.pageCalled && delete i.location, window.ga("send", "pageview", i), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_PAGE_VIEW, eventProperties: JSON.stringify(i) }), e.name && t.trackNamedPages) {
                                var c = this.convertPageToTrack(e);
                                c.properties.nonInteraction = !0, this.trackInternal(c)
                            }
                            this.pageCalled = !0
                        }, t.prototype.track = function(e) {}, t.prototype.trackInternal = function(e) {
                            var t = this.options,
                                n = e.properties,
                                r = { eventAction: e.event, eventCategory: n.category || "All", eventLabel: n.label, eventValue: this.formatValue(n.value || n.revenue), nonInteraction: Boolean(n.hasOwnProperty("nonInteraction") ? n.nonInteraction : t.nonInteraction) };
                            window.ga("send", "event", r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_GENERIC_EVENT, eventProperties: JSON.stringify(r) })
                        }, t.prototype.completedOrder = function(e) {
                            var t = e.properties,
                                n = t.total || t.revenue || 0,
                                r = t.orderName || t.checkoutId,
                                o = t.products || [];
                            if (r) {
                                this.ecommerce || (window.ga("require", "ecommerce"), this.ecommerce = !0);
                                var i = { affiliation: t.affiliation, shipping: t.shipping, revenue: n, tax: t.tax, id: r, currency: this.getCurrency(t.currency) };
                                window.ga("ecommerce:addTransaction", i);
                                for (var c = [], s = 0, u = o; s < u.length; s++) {
                                    var p = u[s],
                                        d = this.createProductTrack(t, p),
                                        v = { category: d.category, quantity: this.getProductQuantity(d), price: d.price, name: d.name, sku: d.sku || d.variantId, id: r, currency: this.getCurrency(d.currency) };
                                    window.ga("ecommerce:addItem", v), c.push(v)
                                }
                                window.ga("ecommerce:send"), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_COMPLETED_ORDER, eventProperties: JSON.stringify({ orderInfo: i, items: c }) })
                            }
                        }, t.prototype.viewedProductVariant = function(e) {}, t.prototype.viewedProductEnhanced = function(e) {
                            var t = e.properties;
                            this.loadEnhancedEcommerce(e);
                            var n = this.enhancedEcommerceTrackProduct(t);
                            window.ga("ec:setAction", "detail");
                            var r = this.pushEnhancedEcommerce(e);
                            this.addMonorailBatchEvent({ eventName: a.ANALYTICS_VIEWED_PRODUCT, eventProperties: JSON.stringify({ item: n, event: r }) })
                        }, t.prototype.addedProductEnhanced = function(e) {
                            var t = e.properties;
                            this.loadEnhancedEcommerce(e);
                            var n = this.enhancedEcommerceTrackProduct(t);
                            window.ga("ec:setAction", "add");
                            var r = this.pushEnhancedEcommerce(e);
                            this.addMonorailBatchEvent({ eventName: a.ANALYTICS_ADDED_PRODUCT, eventProperties: JSON.stringify({ item: n, event: r }) })
                        }, t.prototype.startedOrderEnhanced = function(e) {
                            var t = e.properties,
                                n = t.products || [];
                            this.loadEnhancedEcommerce(e);
                            for (var r = [], o = 0, i = n; o < i.length; o++) {
                                var c = i[o],
                                    s = this.createProductTrack(t, c),
                                    u = this.enhancedEcommerceTrackProduct(s);
                                r.push(u)
                            }
                            var p = t.step || 1;
                            window.ga("ec:setAction", "checkout", { step: p });
                            var d = this.pushEnhancedEcommerce(e);
                            this.addMonorailBatchEvent({ eventName: a.ANALYTICS_STARTED_ORDER, eventProperties: JSON.stringify({ items: r, checkoutStep: p, event: d }) })
                        }, t.prototype.completedOrderEnhanced = function(e) {
                            var t = e.properties,
                                n = t.total || t.revenue || 0,
                                r = t.orderName || t.checkoutId,
                                o = t.products || [];
                            if (r) {
                                this.loadEnhancedEcommerce(e);
                                for (var i = [], c = 0, s = o; c < s.length; c++) {
                                    var u = s[c],
                                        p = this.createProductTrack(t, u),
                                        d = this.enhancedEcommerceTrackProduct(p);
                                    i.push(d)
                                }
                                var v = { id: r, affiliation: t.affiliation, revenue: n, tax: t.tax, shipping: t.shipping, coupon: t.coupon };
                                window.ga("ec:setAction", "purchase", v);
                                var l = this.pushEnhancedEcommerce(e);
                                this.addMonorailBatchEvent({ eventName: a.ANALYTICS_COMPLETED_ORDER, eventProperties: JSON.stringify({ orderInfo: v, items: i, event: l }) })
                            }
                        }, t.prototype.initialize = function(e) { this.pageCalled = !1, this.loadGAScript(); var n = this.options; "localhost" === c.hostname() && (n.domain = "none"), n.enhancedEcommerce && this.enhancedEcommerce(), window.ga("create", n.trackingId, { cookieDomain: n.domain || t.defaultOptions.domain, siteSpeedSampleRate: n.siteSpeedSampleRate, sampleRate: n.sampleRate, allowLinker: !0 }), n.doubleClick && window.ga("require", "displayfeatures"), n.enhancedLinkAttribution && window.ga("require", "linkid"), n.anonymizeIp && window.ga("set", "anonymizeIp", !0), e() }, t.prototype.setWindowGa = function() {
                            window.ga && "function" == typeof window.ga || (window.ga = function() {
                                (window.ga.q = window.ga.q || []).push(arguments)
                            })
                        }, t.prototype.loadGAScript = function() {
                            window.GoogleAnalyticsObject = "ga", this.setWindowGa(), window.ga.l = (new Date).getTime();
                            var e = s.virtualDocument().createElement("script");
                            e.async = !0, e.src = "https://www.google-analytics.com/analytics.js";
                            var t = s.virtualDocument().getElementsByTagName("script")[0];
                            void 0 === t ? document.head.appendChild(e) : t.parentNode.insertBefore(e, t)
                        }, t.prototype.enhancedEcommerce = function() { this.viewedProduct = this.viewedProductEnhanced, this.addedProduct = this.addedProductEnhanced, this.startedOrder = this.startedOrderEnhanced, this.completedOrder = this.completedOrderEnhanced }, t.prototype.path = function(e) { var t = e.path; return this.options.includeSearch && e.search && (t += e.search), t }, t.prototype.formatValue = function(e) { return !e || e < 0 ? 0 : Math.round(e) }, t.prototype.getProductQuantity = function(e) { return e.quantity || 1 }, t.prototype.getCurrency = function(e) { return e || "USD" }, t.prototype.createProductTrack = function(e, t) { var n = i({}, t); return n.currency = t.currency || this.getCurrency(e.currency), n }, t.prototype.loadEnhancedEcommerce = function(e) {
                            this.enhancedEcommerceLoaded || (window.ga("require", "ec"), this.enhancedEcommerceLoaded = !0);
                            var t = e.properties;
                            window.ga("set", "&cu", this.getCurrency(t.currency))
                        }, t.prototype.enhancedEcommerceTrackProduct = function(e) { var t = { id: e.sku || e.variantId, name: e.name, category: e.category, quantity: this.getProductQuantity(e), price: e.price, brand: e.brand, variant: e.variant, currency: this.getCurrency(e.currency) }; return e.coupon && (t.coupon = e.coupon), window.ga("ec:addProduct", t), t }, t.prototype.pushEnhancedEcommerce = function(e) {
                            var t = e.properties,
                                n = { eventCategory: t.category || "EnhancedEcommerce", eventAction: e.event || "Action not defined", eventLabel: t.label, nonInteraction: !0 };
                            return window.ga("send", "event", n), n
                        }, t.prototype.convertPageToTrack = function(e) { return { event: e.name ? "Viewed " + e.name + " Page" : "Loaded a Page", properties: e.properties, eventId: e.eventId } }, t.prototype.overrideDefaultPageProperties = function(e) { for (var t in e.properties) "properties" !== t && "name" !== t && t in e && (e[t] = e.properties[t]) }, t.prototype.getEcommerceMetricsTag = function() { return "google_analytics" }, t.prototype.getIntegrationId = function() { return "GoogleAnalytics" }, t.prototype.getEcommercePixelIds = function() { return [this.options.trackingId] }, t.defaultOptions = { anonymizeIp: !1, domain: "auto", doubleClick: !1, enhancedEcommerce: !1, enhancedLinkAttribution: !1, includeSearch: !1, nonInteraction: !1, siteSpeedSampleRate: 1, sampleRate: 100, trackNamedPages: !0, trackingId: "" }, t
                    }(a.EcommerceIntegration);
                t.GoogleAnalytics = u
            },
            5087: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                    }, function(e, t) {
                        function n() { this.constructor = e }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = this && this.__assign || function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.GoogleGtag = void 0;
                var a = n(7385),
                    c = n(5522),
                    s = n(6997),
                    u = function(e) {
                        function t(t, n, r) { var o = e.call(this, {}, t, n.defaultAttributes) || this; return e.prototype.ensureTrackingConsent.call(o, (function() { o.initialize(r) }), r), o }
                        return o(t, e), t.prototype.isEssential = function() { return !0 }, t.prototype.identify = function(e) { throw new Error("identify is not supported") }, t.prototype.track = function(e) {}, t.prototype.setLimitedDataUseMode = function(e) { var t = i({}, e); return t.restricted_data_processing = !0, t }, t.prototype.initialize = function(e) {
                            var t = this.options,
                                n = { send_page_view: !1 };
                            this.loadGtagScript(), s.privacyApiMethods.userDataCannotBeSold() && (n = this.setLimitedDataUseMode(n)), window.gtag("config", t.conversionId, n), e()
                        }, t.prototype.loadGtagScript = function() {
                            var e = this.options;
                            (!window.dataLayer || window.dataLayer && !Array.isArray(window.dataLayer)) && (window.dataLayer = []), (!window.gtag || window.gtag && "function" != typeof window.gtag) && (window.gtag = function() { window.dataLayer.push(arguments) }), window.gtag("js", new Date), c.script({ src: "https://www.googletagmanager.com/gtag/js?id=" + e.conversionId })
                        }, t.prototype.page = function(e) {
                            var t = "page_view",
                                n = { send_to: this.gtagEventLabelFor(t), page_path: e.path || "", page_title: e.name || e.title, page_location: e.url };
                            window.gtag("event", t, n), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_PAGE_VIEW, eventProperties: JSON.stringify(n) })
                        }, t.prototype.viewedProduct = function(e) {
                            var t = "view_item",
                                n = e.properties,
                                r = { send_to: this.gtagEventLabelFor(t), ecomm_prodid: this.generateProductIds([n]), ecomm_totalvalue: n.price * n.quantity, ecomm_pagetype: "product", items: [{ id: n.productId || n.variantId, name: n.name, brand: n.brand, category: n.category, coupon: n.coupon, price: n.price.toString(), quantity: n.quantity, variant: n.variant }] };
                            window.gtag("event", t, r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_VIEWED_PRODUCT, eventProperties: JSON.stringify(r) })
                        }, t.prototype.addedProduct = function(e) {
                            var t = "add_to_cart",
                                n = e.properties,
                                r = { send_to: this.gtagEventLabelFor(t), ecomm_prodid: this.generateProductIds([n]), ecomm_totalvalue: n.price * n.quantity, ecomm_pagetype: "cart", value: n.price * n.quantity, currency: n.currency || "USD", items: [{ id: n.productId || n.variantId, name: n.name, brand: n.brand, category: n.category, coupon: n.coupon, price: n.price.toString(), quantity: n.quantity, variant: n.variant }] };
                            window.gtag("event", t, r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_ADDED_PRODUCT, eventProperties: JSON.stringify(r) })
                        }, t.prototype.completedOrder = function(e) {
                            var t = "purchase",
                                n = e.properties,
                                r = { send_to: this.gtagEventLabelFor(t), transaction_id: n.orderName || n.checkoutId, value: n.revenue, currency: n.currency || "USD", tax: n.tax.toString(), shipping: n.shipping.toString(), items: n.products.map((function(e) { return { id: e.productId || e.variantId, name: e.name, brand: e.brand, category: e.category, coupon: e.coupon, price: e.price.toString(), quantity: e.quantity, variant: e.variant } })) };
                            window.gtag("event", t, r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_COMPLETED_ORDER, eventProperties: JSON.stringify(r) })
                        }, t.prototype.startedOrder = function(e) {
                            var t = "begin_checkout",
                                n = e.properties,
                                r = { send_to: this.gtagEventLabelFor(t), ecomm_prodid: this.generateProductIds(n.products), ecomm_totalvalue: this.cartTotalValue(n.products), ecomm_pagetype: "cart", value: n.revenue, currency: n.currency || "USD", items: n.products.map((function(e) { return { id: e.productId || e.variantId, name: e.name, brand: e.brand, category: e.category, coupon: e.coupon, price: e.price.toString(), quantity: e.quantity, variant: e.variant } })), coupon: n.coupon };
                            window.gtag("event", t, r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_STARTED_ORDER, eventProperties: JSON.stringify(r) })
                        }, t.prototype.performedSearch = function(e) {
                            var t = "search",
                                n = e.properties,
                                r = { send_to: this.gtagEventLabelFor(t), search_term: n.query };
                            window.gtag("event", t, r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_PERFORMED_SEARCH, eventProperties: JSON.stringify(r) })
                        }, t.prototype.addedPayment = function(e) {
                            var t = "add_payment_info",
                                n = e.properties,
                                r = { send_to: this.gtagEventLabelFor(t), currency: n.currency, total: n.total };
                            window.gtag("event", t, r), this.addMonorailBatchEvent({ eventName: a.ANALYTICS_ADDED_PAYMENT, eventProperties: JSON.stringify(r) })
                        }, t.prototype.generateProductIds = function(e) {
                            for (var t = [], n = 0, r = e; n < r.length; n++) {
                                var o = r[n],
                                    i = "shopify_" + this.targetCountry() + "_" + o.productId + "_" + o.variantId;
                                t.push(i)
                            }
                            return t
                        }, t.prototype.cartTotalValue = function(e) {
                            for (var t = 0, n = 0, r = e; n < r.length; n++) {
                                var o = r[n];
                                t += o.price * o.quantity
                            }
                            return t
                        }, t.prototype.targetCountry = function() { return this.options.targetCountry || "US" }, t.prototype.gtagEventLabelFor = function(e) { for (var t = 0, n = this.options.eventLabels; t < n.length; t++) { var r = n[t]; if (r.type === e) return r.action_label } }, t.prototype.getEcommerceMetricsTag = function() { return "google_gtag" }, t.prototype.getEcommercePixelIds = function() { return [this.options.conversionId] }, t.prototype.getIntegrationId = function() { return "GoogleGtag" }, t
                    }(a.EcommerceIntegration);
                t.GoogleGtag = u
            },
            8142: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", { value: !0 }), t.Pinterest = void 0;
                var i = n(7385),
                    a = n(1102),
                    c = function(e) {
                        function t(n, r, o) { var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this; return e.prototype.ensureTrackingConsent.call(i, (function() { i.initialize(o) }), o), i }
                        return o(t, e), t.prototype.identify = function(e) {}, t.prototype.track = function(e) {}, t.prototype.page = function(e) {
                            var t = e.properties;
                            t && "product" === t.pageType || this.emitEvent("PageVisit", e.eventId, i.ANALYTICS_PAGE_VIEW)
                        }, t.prototype.isEssential = function() { return !1 }, t.prototype.viewedProduct = function(e) {
                            var t = e.properties,
                                n = { currency: t.currency, line_items: [{ product_id: t.productId, product_variant_id: t.variantId, product_name: t.name, product_price: t.price, product_quantity: t.quantity }] };
                            this.emitEvent("PageVisit", e.eventId, i.ANALYTICS_VIEWED_PRODUCT, n)
                        }, t.prototype.viewedProductCategory = function(e) { this.emitEvent("ViewCategory", e.eventId, i.ANALYTICS_VIEWED_PRODUCT_CATEGORY) }, t.prototype.addedProduct = function(e) {
                            var t = e.properties,
                                n = { currency: t.currency, line_items: [{ product_id: t.productId, product_variant_id: t.variantId, product_name: t.name, product_price: t.price, product_quantity: Number(e.properties.quantity) }] };
                            this.emitEvent("AddToCart", e.eventId, i.ANALYTICS_ADDED_PRODUCT, n)
                        }, t.prototype.completedOrder = function(e) {
                            var t = e.properties,
                                n = { value: t.revenue, currency: t.currency, order_quantity: this.getOrderNumItems(t), line_items: t.products.map((function(e, t) { return { product_id: e.productId, product_variant_id: e.variantId, product_name: e.name, product_price: e.price, product_quantity: e.quantity } })) };
                            this.emitEvent("Checkout", e.eventId, i.ANALYTICS_COMPLETED_ORDER, n)
                        }, t.prototype.performedSearch = function(e) {
                            var t = { search_query: e.properties.query };
                            this.emitEvent("Search", e.eventId, i.ANALYTICS_PERFORMED_SEARCH, t)
                        }, t.prototype.emitEvent = function(e, t, n, r) { window.pintrk("track", e, Object.assign({ np: "shopify" }, r)), this.addMonorailBatchEvent(a.objectAssignFilterUndefined({ eventName: n }, { eventId: t, eventProperties: r ? JSON.stringify(r) : void 0 })) }, t.prototype.getOrderNumItems = function(e) {
                            for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n];
                                this.getProductKey(o) && (t += o.quantity || 1)
                            }
                            return t
                        }, t.prototype.getProductKey = function(e) { return e.productId || e.variantId || e.sku }, t.prototype.initialize = function(e) {
                            var t = this.options;
                            this.loadPinterestScript(), window.pintrk("load", t.pixelId, { np: "shopify" }), window.pintrk("page"), e()
                        }, t.prototype.loadPinterestScript = function() {
                            if (!window.pintrk || "function" != typeof window.pintrk) {
                                window.pintrk = function() { window.pintrk.queue.push(Array.prototype.slice.call(arguments)) }, window.pintrk.queue = [], window.pintrk.version = "3.0";
                                var e = document.createElement("script");
                                e.async = !0, e.src = "https://s.pinimg.com/ct/core.js";
                                var t = document.getElementsByTagName("script")[0];
                                void 0 === t ? document.head.appendChild(e) : t.parentNode.insertBefore(e, t)
                            }
                        }, t.prototype.getEcommerceMetricsTag = function() { return "pinterest" }, t.prototype.getIntegrationId = function() { return "Pinterest" }, t.prototype.getEcommercePixelIds = function() { return [this.options.pixelId] }, t.defaultOptions = { pixelId: "" }, t
                    }(i.EcommerceIntegration);
                t.Pinterest = c
            },
            3653: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                    }, function(e, t) {
                        function n() { this.constructor = e }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = this && this.__assign || function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.S2S = void 0;
                var a = n(7385),
                    c = n(6997),
                    s = n(725),
                    u = n(997),
                    p = n(1930),
                    d = n(7668),
                    v = function(e) {
                        function t(n, r, o) { var a = e.call(this, t.defaultOptions, i({}, n), r.defaultAttributes) || this; return a.pageID = d.buildToken(), e.prototype.ensureTrackingConsent.call(a, (function() { a.initialize(o) }), o), a }
                        return o(t, e), t.prototype.isEssential = function() { return !1 }, t.prototype.identify = function(e) { throw new Error("identify is not supported") }, t.prototype.page = function(e) {
                            var t = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Page View" }, e.s2sMetadata) };
                            u.produce([t])
                        }, t.prototype.track = function(e) {}, t.prototype.viewedProduct = function(e) {
                            var t = i(i({}, e.properties), { quantity: 1 }),
                                n = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Viewed Product", products: this.formatProductJSON([t]), total_value: this.formatRevenue(t.price), currency: this.getCurrency(t.currency) }, e.s2sMetadata) };
                            u.produce([n])
                        }, t.prototype.addedProduct = function(e) {
                            var t = e.properties,
                                n = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Added Product", products: this.formatProductJSON([t]), total_value: this.formatRevenue(t.price), currency: this.getCurrency(t.currency) }, e.s2sMetadata) };
                            u.produce([n])
                        }, t.prototype.addedPayment = function(e) {
                            var t = e.properties,
                                n = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Added Payment", total_value: this.formatRevenue(t.total), currency: this.getCurrency(t.currency) }, e.s2sMetadata) };
                            u.produce([n])
                        }, t.prototype.performedSearch = function(e) {
                            var t = e.properties,
                                n = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Performed Search", search_string: this.getSearchString(t.query) }, e.s2sMetadata) };
                            u.produce([n])
                        }, t.prototype.startedOrder = function(e) {
                            var t = e.properties,
                                n = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Started Order", products: this.formatProductJSON(t.products), total_value: this.formatRevenue(t.total), currency: this.getCurrency(t.currency) }, e.s2sMetadata) };
                            u.produce([n])
                        }, t.prototype.completedOrder = function(e) {
                            var t = e.properties,
                                n = { schemaId: p.s2sMiddlewareEventSchemaId, payload: this.eventWithMetadata({ event_id: e.eventId, event_name: "Completed Order", first_name: t.customerEventData.customer.firstName, last_name: t.customerEventData.customer.lastName, email: t.customerEventData.customer.emailAddress, phone: t.customerEventData.customer.phoneNumber, products: this.formatProductJSON(t.products), total_value: this.formatRevenue(t.total), currency: this.getCurrency(t.currency), billing_address_city: t.customerEventData.address.city, billing_address_region: t.customerEventData.address.province, billing_address_country: t.customerEventData.address.country, billing_address_zipcode: t.customerEventData.address.zip }, e.s2sMetadata) };
                            u.produce([n])
                        }, t.prototype.formatProductJSON = function(e) {
                            var t = this,
                                n = [];
                            return e.forEach((function(e) { n.push(JSON.stringify({ variant_id: t.formatNumericID(e.variantId), product_id: t.formatNumericID(e.productId), product_gid: e.productGid, name: e.name, price: t.formatRevenue(e.price), sku: e.sku, brand: e.brand, variant: e.variant, category: e.category, quantity: Number(e.quantity || 0) })) })), n
                        }, t.prototype.eventWithMetadata = function(e, t) { return i(i({}, e), { shop_id: this.shopId, facebook_pixel_id: this.getFacebookPixelId(), facebook_capi_enabled: this.isCapiEnabled(), event_time: Date.now(), event_source_url: s.href(), unique_token: this.uniqueToken, page_id: this.pageID, source: "trekkie", ccpa_enforced: c.isCCPAEnforced(), gdpr_enforced: c.isGDPREnforced(), s2s_event_id: null == t ? void 0 : t.s2sEventId, expect_s2s_event_id: null == t ? void 0 : t.expectS2SEventId, expect_s2s_emit: null == t ? void 0 : t.expectS2SEventEmit, s2s_event_id_source: null == t ? void 0 : t.s2sEventIdSource, navigation_type: null == t ? void 0 : t.navigationType, navigation_api: null == t ? void 0 : t.navigationApi }) }, t.prototype.getFacebookPixelId = function() { return this.options.facebookAppPixelId }, t.prototype.isCapiEnabled = function() { return this.options.facebookCapiEnabled }, t.prototype.initialize = function(e) { e() }, t.prototype.getSearchString = function(e) { return e || "" }, t.prototype.formatRevenue = function(e) { return Number(e || 0) }, t.prototype.formatNumericID = function(e) { return null == e || "" === e ? null : Number(e) }, t.prototype.getCurrency = function(e) { return e || "USD" }, t.prototype.getIntegrationId = function() { return "S2S" }, t.prototype.getEcommerceMetricsTag = function() { return "S2S" }, t.prototype.getEcommercePixelIds = function() { var e = this.getFacebookPixelId(); return e ? [e] : [] }, t.defaultOptions = { facebookAppPixelId: "", facebookCapiEnabled: !1, agent: "shopify" }, t
                    }(a.EcommerceIntegration);
                t.S2S = v
            },
            2724: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", { value: !0 }), t.CampaignManager = t.TimestampManager = t.SessionAttribution = t.orderCompletionEventKey = t.sessionAttributionTimestampKey = t.sessionAttributionParamsKey = t.sessionAttributionMonorailSchema = t.sessionAttributionEventKey = void 0;
                var i = n(6997),
                    a = n(7668),
                    c = n(372),
                    s = n(725),
                    u = n(1503);
                t.sessionAttributionEventKey = "session-attribution", t.sessionAttributionMonorailSchema = "trekkie_session_attribution/1.2", t.sessionAttributionParamsKey = "_shopify_sa_p", t.sessionAttributionTimestampKey = "_shopify_sa_t", t.orderCompletionEventKey = "Completed Order";
                var p = function(e) {
                    function n(t, n, r) { var o = e.call(this, {}, t) || this; return o.trekkie = n, o.timestampManager = new d, o.campaignManager = new v, setTimeout((function() { o.attributeSession() }), 0), r(), o }
                    return o(n, e), n.prototype.isEssential = function() { return !0 }, n.prototype.identify = function(e) {}, n.prototype.page = function(e) {}, n.prototype.track = function(e) {
                        var n = this;
                        e.event === t.sessionAttributionEventKey ? setTimeout((function() { n.trekkie.emit(t.sessionAttributionEventKey, e, t.sessionAttributionMonorailSchema) }), 0) : e.event === t.orderCompletionEventKey && (i.clear(t.sessionAttributionTimestampKey), i.clear(t.sessionAttributionParamsKey))
                    }, n.prototype.attributeSession = function() {
                        var e = new Date,
                            n = s.search(),
                            r = this.campaignManager.constructCanonicalUtmString(n);
                        if (this.timestampManager.isValid(e) && this.campaignManager.isValid(r));
                        else {
                            var o = "";
                            try { o = e.toJSON() } catch (e) {}
                            this.track({ event: t.sessionAttributionEventKey, properties: { sa_url: s.href(), sa_referrer: u.virtualDocument().referrer(), sa_utm_string: r, sa_token: a.buildToken(), over_30_minutes: !this.timestampManager.isWithin30MinuteCutOff(e), cross_utc_midnight: this.timestampManager.isWithin30MinuteCutOff(e) && !this.timestampManager.isSameDayAs(e), new_campaign: !this.campaignManager.isValid(r), prev_campaign_params: this.campaignManager.fetch(), last_extended: this.timestampManager.fetch(), local_now: o }, eventId: a.buildToken() })
                        }
                        this.timestampManager.extend(e.toJSON()), this.campaignManager.extend(r)
                    }, n
                }(c.Integration);
                t.SessionAttribution = p;
                var d = function() {
                    function e() {}
                    return e.prototype.fetch = function() { return i.read(t.sessionAttributionTimestampKey) }, e.prototype.extend = function(e) { i.cleanupMyShopifyDotComCookie(t.sessionAttributionTimestampKey), i.write(t.sessionAttributionTimestampKey, e, !1) }, e.prototype.isValid = function(e) { return this.isWithin30MinuteCutOff(e) && this.isSameDayAs(e) }, e.prototype.isWithin30MinuteCutOff = function(e) { return this.testStoredTimestamp((function(e, t) { return t.getTime() - e.getTime() <= 18e5 }), e) }, e.prototype.isSameDayAs = function(e) { return this.testStoredTimestamp((function(e, t) { return e.getUTCDate() === t.getUTCDate() }), e) }, e.prototype.testStoredTimestamp = function(e, t) { var n = this.fetch(); if (!n) return !1; try { return e(new Date(n), t) } catch (e) { return !1 } }, e
                }();
                t.TimestampManager = d;
                var v = function() {
                    function e() {}
                    return e.prototype.fetch = function() { return i.read(t.sessionAttributionParamsKey) }, e.prototype.extend = function(e) { "" === e && (e = this.fetch() || ""), i.cleanupMyShopifyDotComCookie(t.sessionAttributionParamsKey), i.write(t.sessionAttributionParamsKey, e, !1) }, e.prototype.isValid = function(e) { return "" === e || this.fetch() === e }, e.prototype.constructCanonicalUtmString = function(t) {
                        if ("" === t || null == t || "?" === t) return "";
                        t = "?" === t[0] ? t.slice(1) : t;
                        for (var n = {}, r = 0, o = t.split("&"); r < o.length; r++) {
                            var i = o[r].split("=");
                            if (!(i.length < 2)) {
                                var a = this.decodeReplacingPlus(i[0]),
                                    c = this.decodeReplacingPlus(i[1]);
                                c && a && (n[a] = c)
                            }
                        }
                        return e.acceptedQueryStringParams.filter((function(e) { return n[e] })).map((function(e) { return encodeURIComponent(e) + "=" + encodeURIComponent(n[e]) })).join("&")
                    }, e.prototype.decodeReplacingPlus = function(e) { return decodeURIComponent(e.replace(/\+/g, " ")) }, e.acceptedQueryStringParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref", "gclid", "fbclid", "shpxid"], e
                }();
                t.CampaignManager = v
            },
            6971: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", { value: !0 }), t.Snap = void 0;
                var i = n(7385),
                    a = n(1503),
                    c = n(1102),
                    s = function(e) {
                        function t(n, r, o) { var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this; return e.prototype.ensureTrackingConsent.call(i, (function() { i.initialize(o) }), o), i }
                        return o(t, e), t.prototype.isEssential = function() { return !1 }, t.prototype.identify = function(e) { throw new Error("identify is not supported") }, t.prototype.page = function(e) { this.emitEvent("PAGE_VIEW", null == e ? void 0 : e.eventId, i.ANALYTICS_PAGE_VIEW, { integration: "shopify-native" }) }, t.prototype.track = function(e) { var t = {}; for (var n in e.properties) "revenue" === n ? t.price = this.formatRevenue(e.properties.revenue) : t[n] = e.properties[n] }, t.prototype.viewedProductCategory = function(e) {}, t.prototype.viewedProductVariant = function(e) {}, t.prototype.viewedProduct = function(e) {
                            var t = e.properties,
                                n = { item_ids: this.getProductVariantId(t), item_type: this.getProductContentType(t), description: t.name || "", item_category: this.getProductContentIds(t), currency: this.getCurrency(t.currency), price: this.formatRevenue(t.price), integration: "shopify-native" };
                            this.emitEvent("VIEW_CONTENT", e.eventId, i.ANALYTICS_VIEWED_PRODUCT, n)
                        }, t.prototype.addedProduct = function(e) {
                            var t = e.properties,
                                n = { item_ids: this.getProductVariantId(t), item_type: this.getProductContentType(t), description: t.name || "", item_category: this.getProductContentIds(t), currency: this.getCurrency(t.currency), price: this.formatRevenue(t.price), number_items: this.getProductNumItems(t), integration: "shopify-native" };
                            this.emitEvent("ADD_CART", e.eventId, i.ANALYTICS_ADDED_PRODUCT, n)
                        }, t.prototype.addedPayment = function(e) {
                            var t = e.properties,
                                n = { currency: this.getCurrency(t.currency), price: this.formatRevenue(t.total), integration: "shopify-native" };
                            this.emitEvent("ADD_BILLING", e.eventId, i.ANALYTICS_ADDED_PAYMENT, n)
                        }, t.prototype.performedSearch = function(e) {
                            var t = { search_string: e.properties.query || "", integration: "shopify-native" };
                            this.emitEvent("SEARCH", e.eventId, i.ANALYTICS_PERFORMED_SEARCH, t)
                        }, t.prototype.startedOrder = function(e) {
                            var t = e.properties,
                                n = { item_ids: this.getOrderContentIds(t), item_type: this.getOrderContentType(t), currency: this.getCurrency(t.currency), price: this.formatRevenue(t.revenue), number_items: this.getOrderNumItems(t), integration: "shopify-native" };
                            this.emitEvent("START_CHECKOUT", e.eventId, i.ANALYTICS_STARTED_ORDER, n)
                        }, t.prototype.completedOrder = function(e) {
                            var t = e.properties,
                                n = c.objectAssignFilterUndefined({ item_ids: this.getOrderContentIds(t), item_type: this.getOrderContentType(t), currency: this.getCurrency(t.currency), description: t.orderName || "", price: this.formatRevenue(t.revenue), number_items: this.getOrderNumItems(t), integration: "shopify-native" }, { transaction_id: t.orderId });
                            this.emitEvent("PURCHASE", e.eventId, i.ANALYTICS_COMPLETED_ORDER, n)
                        }, t.prototype.initialize = function(e) {
                            this.loadSnapScript();
                            var t = this.options;
                            window.snaptr("init", t.pixelId), e()
                        }, t.prototype.loadSnapScript = function() {
                            if (!window.snaptr || "function" != typeof window.snaptr) {
                                window.snaptr = function() { window.snaptr.handleRequest ? window.snaptr.handleRequest.apply(window.snaptr, arguments) : window.snaptr.queue.push(arguments) }, window.snaptr.queue = [], window.snaptr.push = window.snaptr, window.snaptr.loaded = !0;
                                var e = a.virtualDocument().createElement("script");
                                e.async = !0, e.src = "https://sc-static.net/scevent.min.js";
                                var t = a.virtualDocument().getElementsByTagName("script")[0];
                                void 0 === t ? document.head.appendChild(e) : t.parentNode.insertBefore(e, t)
                            }
                        }, t.prototype.emitEvent = function(e, t, n, r) { window.snaptr("track", e, Object.assign({ integration: "shopify-native" }, r)), this.addMonorailBatchEvent(c.objectAssignFilterUndefined({ eventName: n }, { eventId: t, eventProperties: r ? JSON.stringify(r) : void 0 })) }, t.prototype.formatRevenue = function(e) { return Number(e || 0).toFixed(2) }, t.prototype.getCurrency = function(e) { return e || "USD" }, t.prototype.getProductContentIds = function(e) { var t = e.productId || e.variantId || e.sku; return t ? [t] : [] }, t.prototype.getProductVariantId = function(e) { return e.variantId || e.sku || "" }, t.prototype.getProductContentType = function(e) { return e.productId ? "product_group" : "product" }, t.prototype.getProductNumItems = function(e) { return e.quantity || this.getProductContentIds(e).length }, t.prototype.getProductKey = function(e) { return e.productId || e.variantId || e.sku }, t.prototype.getOrderContentIds = function(e) {
                            for (var t = [], n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n],
                                    i = this.getProductVariantId(o);
                                i && -1 === t.indexOf(i) && t.push(i)
                            }
                            return t
                        }, t.prototype.getOrderContentType = function(e) {
                            for (var t = 0, n = e.products || []; t < n.length; t++)
                                if (n[t].productId) return "product_group";
                            return "product"
                        }, t.prototype.getOrderNumItems = function(e) {
                            for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n];
                                this.getProductKey(o) && (t += o.quantity || 1)
                            }
                            return t
                        }, t.prototype.getEcommerceMetricsTag = function() { return "snap" }, t.prototype.getIntegrationId = function() { return "Snap" }, t.prototype.getEcommercePixelIds = function() { return [this.options.pixelId] }, t.defaultOptions = { pixelId: "" }, t
                    }(i.EcommerceIntegration);
                t.Snap = s
            },
            342: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", { value: !0 }), t.TikTok = void 0;
                var i = n(7385),
                    a = n(1503),
                    c = function(e) {
                        function t(n, r, o) { var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this; return e.prototype.ensureTrackingConsent.call(i, (function() { i.initialize(o) }), o), i }
                        return o(t, e), t.prototype.isEssential = function() { return !1 }, t.prototype.identify = function(e) { throw new Error("identify is not supported") }, t.prototype.page = function(e) {
                            var t = this.options;
                            window.ttq.instance(t.pixelId).track("Browse"), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_PAGE_VIEW })
                        }, t.prototype.track = function(e) {}, t.prototype.viewedProductCategory = function(e) {}, t.prototype.viewedProductVariant = function(e) {}, t.prototype.viewedProduct = function(e) {
                            var t = e.properties,
                                n = { content_id: this.getProductKey(t), content_type: this.getProductContentType(t), content_name: t.name || "", content_category: t.category || "", currency: this.getCurrency(t.currency), price: this.formatRevenue(t.price) },
                                r = this.options;
                            window.ttq.instance(r.pixelId).track("ViewContent", n), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_VIEWED_PRODUCT, eventProperties: JSON.stringify(n) })
                        }, t.prototype.addedProduct = function(e) {
                            var t = e.properties,
                                n = { content_id: this.getProductKey(t), content_type: this.getProductContentType(t), content_name: t.name || "", content_category: t.category || "", currency: this.getCurrency(t.currency), price: this.formatRevenue(t.price), quantity: this.getProductNumItems(t) },
                                r = this.options;
                            window.ttq.instance(r.pixelId).track("AddToCart", n), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_ADDED_PRODUCT, eventProperties: JSON.stringify(n) })
                        }, t.prototype.addedPayment = function(e) {
                            var t = e.properties,
                                n = { currency: this.getCurrency(t.currency), value: this.formatRevenue(t.total) },
                                r = this.options;
                            window.ttq.instance(r.pixelId).track("AddBilling", n), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_ADDED_PAYMENT, eventProperties: JSON.stringify(n) })
                        }, t.prototype.performedSearch = function(e) {
                            var t = { query: e.properties.query || "" },
                                n = this.options;
                            window.ttq.instance(n.pixelId).track("Search", t), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_PERFORMED_SEARCH, eventProperties: JSON.stringify(t) })
                        }, t.prototype.startedOrder = function(e) {
                            var t = e.properties,
                                n = { contents: this.getOrderContents(t), value: this.formatRevenue(t.revenue), quantity: this.getOrderNumItems(t), currency: this.getCurrency(t.currency) },
                                r = this.options;
                            window.ttq.instance(r.pixelId).track("StartCheckout", n), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_STARTED_ORDER, eventProperties: JSON.stringify(n) })
                        }, t.prototype.completedOrder = function(e) {
                            var t = e.properties,
                                n = { contents: this.getOrderContents(t), value: this.formatRevenue(t.revenue), quantity: this.getOrderNumItems(t), currency: this.getCurrency(t.currency) },
                                r = this.options;
                            window.ttq.instance(r.pixelId).track("Purchase", n), this.addMonorailBatchEvent({ eventName: i.ANALYTICS_COMPLETED_ORDER, eventProperties: JSON.stringify(n) })
                        }, t.prototype.initialize = function(e) {
                            var t = this.options;
                            this.loadTikTokScript(t.pixelId), e()
                        }, t.prototype.loadTikTokScript = function(e) {
                            if (!window.ttq || !window.ttq.loaded) {
                                window.TiktokAnalyticsObject = "ttq";
                                var t = window.ttq = window.ttq || [];
                                t.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group"], t.setAndDefer = function(e, t) { e[t] = function() { e.push([t].concat(Array.prototype.slice.call(arguments, 0))) } };
                                for (var n = 0; n < t.methods.length; n++) t.setAndDefer(t, t.methods[n]);
                                t.instance = function(e) { for (var n = t._i[e] || [], r = 0; r < t.methods.length; r++) t.setAndDefer(n, t.methods[r]); return n }, t.load = function(e) {
                                    var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
                                    t._i = t._i || {}, t._i[e] = [], t._i[e]._u = n, t._t = t._t || {}, t._t[e] = Number(new Date), t._o = t._o || {}, t._partner = t._partner || "Shopify";
                                    var r = a.virtualDocument().createElement("script");
                                    r.type = "text/javascript", r.async = !0, r.src = n + "?sdkid=" + e + "&lib=ttq";
                                    var o = a.virtualDocument().getElementsByTagName("script")[0];
                                    void 0 === o ? document.head.appendChild(r) : o.parentNode.insertBefore(r, o), window.ttq.loaded = !0
                                }, t.load(e), t.page()
                            }
                        }, t.prototype.formatRevenue = function(e) { return Number(e || 0).toFixed(2) }, t.prototype.getCurrency = function(e) { return e || "USD" }, t.prototype.getProductContentType = function(e) { return e.productId ? "product_group" : "product" }, t.prototype.getProductNumItems = function(e) { return e.quantity || 1 }, t.prototype.getProductKey = function(e) { return e.productId || e.variantId || e.sku || "" }, t.prototype.getOrderContents = function(e) {
                            for (var t = [], n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n];
                                t.push({ content_id: this.getProductKey(o), content_type: this.getProductContentType(o), content_name: o.name || "", content_category: o.category || "", currency: this.getCurrency(o.currency), price: this.formatRevenue(o.price), quantity: this.getProductNumItems(o) })
                            }
                            return t
                        }, t.prototype.getOrderNumItems = function(e) {
                            for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
                                var o = r[n];
                                this.getProductKey(o) && (t += o.quantity || 1)
                            }
                            return t
                        }, t.prototype.getEcommerceMetricsTag = function() { return "tiktok" }, t.prototype.getEcommercePixelIds = function() { return [this.options.pixelId] }, t.prototype.getIntegrationId = function() { return "TikTok" }, t.defaultOptions = { pixelId: "" }, t
                    }(i.EcommerceIntegration);
                t.TikTok = c
            },
            8831: function(e, t, n) {
                var r, o = this && this.__extends || (r = function(e, t) {
                        return (r = Object.setPrototypeOf || { __proto__: [] }
                            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t)
                    }, function(e, t) {
                        function n() { this.constructor = e }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = this && this.__assign || function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.Trekkie = void 0;
                var a = n(372),
                    c = n(1930),
                    s = n(7668),
                    u = n(997),
                    p = n(2971),
                    d = n(6997),
                    v = function(e) {
                        function t(t, n) { var r = e.call(this, {}, t) || this; return r.init(t, n), r }
                        return o(t, e), t.prototype.isEssential = function() { return !0 }, t.prototype.init = function(e, t) {
                            var n = "global";
                            e.monorailRegion && (n = e.monorailRegion), e.development && (n = "staging"), u.setMonorailRegion(n), window.addEventListener("beforeunload", (function(e) { u.flushBatchEvents() })), e.defaultAttributes && p.setMetricsOptions(e.defaultAttributes.shopId);
                            var r = !1;
                            e.isServerSideCookieWritingEnabled && (r = e.isServerSideCookieWritingEnabled);
                            var o = new s.UniqueIdManager(r);
                            this.defaultAttributes = { appName: e.appName, uniqToken: o.longTerm(), visitToken: o.shortTerm(), microSessionId: s.buildToken(), microSessionCount: 0, isPersistentCookie: d.isPersistentCookie() }, e.defaultAttributes && (this.defaultAttributes = i(i({}, e.defaultAttributes), this.defaultAttributes)), d.cleanupOverScopedCookies(), t()
                        }, t.prototype.identify = function(e) {}, t.prototype.page = function(e) {
                            var t = c.appNameToPageViewSchemaId[this.defaultAttributes.appName];
                            this.emit("page", e, t)
                        }, t.prototype.track = function(e) {
                            var t = c.extractSchemaIdFromEventName(e.event);
                            this.emit("track", e, t)
                        }, t.prototype.emit = function(e, t, n) {
                            ++this.defaultAttributes.microSessionCount, t = a.Integration.flatten(t);
                            var r = i(i({}, t), this.defaultAttributes);
                            r.eventType = e, n && u.produce([{ schemaId: n, payload: r }])
                        }, t
                    }(a.Integration);
                t.Trekkie = v
            },
            6997: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.privacyAPISubMethods = t.TrackingRegulationLimitations = t.ConsentValuesV2 = t.CONSENT_COOKIE_NAME = t.resetCookieDomain = t.determineCookieDomain = t.cleanupOverScopedCookies = t.clear = t.write = t.isPersistentCookie = t.read = t.allowed = t.enabled = t.isGDPREnforced = t.isCCPAEnforced = t.privacyApiMethods = t.cleanupMyShopifyDotComCookie = t.cookieImpl = t.parseDocumentCookie = void 0;
                var r, o, i, a, c = n(1503),
                    s = n(542),
                    u = n(725),
                    p = n(1102),
                    d = "_shopify_d",
                    v = new Date(0);

                function l(e) { for (var t = {}, n = 0, r = e.split(/ *; */); n < r.length; n++) { var o = r[n].split("="); try { t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "") } catch (e) {} } return t }

                function f() {
                    if (void 0 === r)
                        if (h()) r = u.hostname();
                        else {
                            for (var e = "", n = 0, o = u.hostname().split(".").reverse(); n < o.length; n++) {
                                var i = o[n];
                                e = "" === e ? "." + i : "." + i + e;
                                var a = p.generateShopifyDValue();
                                if (m(d, a, 0, e), c = d, s = a, v = void 0, (v = t.cookieImpl.read(c)) && v === s) return m(d, a, -1, e), void(r = e)
                            }
                            r = ""
                        }
                    var c, s, v
                }

                function m(e, n, r, o, i) {
                    void 0 === i && (i = "Lax");
                    var a = { domain: o, path: "/", maxage: r, samesite: i };
                    t.cookieImpl.write(e, n, a)
                }

                function h() { return -1 !== u.hostname().indexOf("myshopify.com") }
                t.parseDocumentCookie = l, t.cookieImpl = {
                        parse: l,
                        read: function(e) { if (t.cookieImpl.enabled()) return t.cookieImpl.parse(c.virtualDocument().cookie())[e] },
                        write: function(e, n, r) {
                            if (void 0 === r && (r = {}), t.cookieImpl.enabled() && t.cookieImpl.allowed() && (t.cookieImpl.hasConsent() || !t.cookieImpl.hasGdprBlockAllPreference())) {
                                var o = encodeURIComponent(e) + "=" + encodeURIComponent(n);
                                r.maxage && (r.maxage < 0 ? r.expires = v : r.expires = new Date((new Date).getTime() + r.maxage)), r.path && (o += "; path=" + r.path), r.domain && (o += "; domain=" + r.domain), r.expires && t.cookieImpl.hasConsent() && (o += "; expires=" + r.expires.toUTCString()), r.samesite ? o += "; SameSite=" + r.samesite : o += "; SameSite=Lax", r.secure && (o += "; secure"), c.virtualDocument().setCookie(o)
                            }
                        },
                        enabled: function(e) {
                            if (void 0 === e && (e = !1), !e && void 0 !== o) return o;
                            try {
                                if (void 0 === c.virtualDocument().cookie()) return !1;
                                var t = "cookietest";
                                c.virtualDocument().setCookie(t + "=1; SameSite=Lax");
                                var n = -1 !== c.virtualDocument().cookie().indexOf(t + "=");
                                return c.virtualDocument().setCookie(t + "=1; expires=Thu, 01-Jan-1970 00:00:01 GMT; SameSite=Lax"), n && (o = n), n
                            } catch (e) { return !1 }
                        },
                        allowed: function() {
                            var e = t.cookieImpl.read("_cookie_consent");
                            if (e) try { var n = JSON.parse(e); if (n && "non_essential" === n.block) return !1 } catch (e) { return !0 }
                            return !0
                        },
                        hasConsent: function() { return t.privacyApiMethods.userCanBeTracked() },
                        hasGdprBlockAllPreference: function() { return t.privacyApiMethods.getGdprBlockAllStatus() },
                        isPersistentCookie: function() { var e = t.cookieImpl.read("_shopify_m"); return void 0 === e || "persistent" === e },
                        readConsentCookie: function() {
                            try {
                                var e = t.cookieImpl.read("_tracking_consent");
                                if (void 0 === e) return;
                                var n = JSON.parse(e);
                                if (function(e) {
                                        var t = Object.keys(e),
                                            n = ["lim", "v", "con", "reg"].slice().sort();
                                        return !(t.length === n.length && t.slice().sort().every((function(e, t) { return e === n[t] })))
                                    }(n)) return;
                                return n
                            } catch (e) { return }
                        }
                    }, t.cleanupMyShopifyDotComCookie = function(e) {
                        if (h()) {
                            var t = e + "=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax";
                            c.virtualDocument().setCookie(t)
                        }
                    }, t.privacyApiMethods = { userCanBeTracked: function() { return t.privacyAPISubMethods.haveConsentToTrack() }, userCannotBeTracked: function() { return !t.privacyApiMethods.userCanBeTracked() }, hasCustomerPrivacyAPI: function() { return t.privacyAPISubMethods.hasConsentCookie() }, userDataCanBeSold: function() { return t.privacyAPISubMethods.haveConsentToSellData() }, userDataCannotBeSold: function() { return !t.privacyApiMethods.userDataCanBeSold() }, getRegulation: function() { return t.privacyAPISubMethods.currentRegulation() }, getGdprBlockAllStatus: function() { var e = t.cookieImpl.readConsentCookie(); return void 0 !== e && e.lim.includes(a.GDPR_BLOCK_ALL) } }, t.isCCPAEnforced = function() { return t.privacyApiMethods.getRegulation() === s.TrackingRegulations.CCPA && !0 === t.privacyApiMethods.userDataCannotBeSold() }, t.isGDPREnforced = function() { return t.privacyApiMethods.getRegulation() === s.TrackingRegulations.GDPR && !0 === t.privacyApiMethods.userCannotBeTracked() }, t.enabled = function() { return t.cookieImpl.enabled() }, t.allowed = function() { return t.cookieImpl.allowed() }, t.read = function(e) { return t.cookieImpl.read(e) }, t.isPersistentCookie = function() { return t.cookieImpl.isPersistentCookie() }, t.write = function(e, t, n, o) { void 0 === o && (o = "Lax"), f(), m(e, t, n ? 31104e6 : 18e5, r, o) }, t.clear = function(e) { f(), m(e, "", -1, r), m(e, "", -1, "") }, t.cleanupOverScopedCookies = function() {
                        if (h())
                            for (var e = 0, t = ["_s", "_shopify_s", "_shopify_sa_p", "_shopify_sa_t", "_shopify_y", "_y"]; e < t.length; e++) {
                                var n = t[e] + "=; domain=.myshopify.com; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax";
                                c.virtualDocument().setCookie(n)
                            }
                    }, t.determineCookieDomain = f, t.resetCookieDomain = function() { r = void 0 }, t.CONSENT_COOKIE_NAME = "_tracking_consent",
                    function(e) { e.NO_VALUE = "", e.ACCEPTED = "1", e.DECLINED = "0" }(i = t.ConsentValuesV2 || (t.ConsentValuesV2 = {})),
                    function(e) { e.GDPR_BLOCK_ALL = "GDPR_BLOCK_ALL", e.CCPA_BLOCK_ALL = "CCPA_BLOCK_ALL", e.GDPR = "GDPR", e.CCPA = "CCPA" }(a = t.TrackingRegulationLimitations || (t.TrackingRegulationLimitations = {})), t.privacyAPISubMethods = {
                        hasConsentCookie: function() { return void 0 !== t.cookieImpl.readConsentCookie() },
                        haveConsentToTrack: function() {
                            var e = t.cookieImpl.readConsentCookie();
                            if (void 0 === e) return !0;
                            if (!e.lim.includes(a.GDPR) && !e.lim.includes(a.GDPR_BLOCK_ALL)) return !0;
                            var n = e.con.GDPR,
                                r = e.reg;
                            return n !== i.DECLINED && (n !== i.NO_VALUE || r !== s.TrackingRegulations.GDPR)
                        },
                        haveConsentToSellData: function() { var e = t.cookieImpl.readConsentCookie(); if (void 0 === e) return !0; if (e.lim.includes(a.CCPA_BLOCK_ALL)) return e.reg !== s.TrackingRegulations.CCPA; var n = e.con.CCPA; return !e.lim.includes(a.CCPA) || n !== i.DECLINED },
                        currentRegulation: function() { var e = t.cookieImpl.readConsentCookie(); return void 0 === e ? s.TrackingRegulations.NO_VALUE : e.reg }
                    }
            },
            725: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.isShopifyDotCom = t.search = t.protocol = t.port = t.pathname = t.origin = t.setHref = t.href = t.hostname = t.host = t.hash = void 0;
                var r = n(7e3);

                function o() { return r.virtualWindow().location().hostname }
                t.hash = function() { return r.virtualWindow().location().hash }, t.host = function() { return r.virtualWindow().location().host }, t.hostname = o, t.href = function() { return r.virtualWindow().location().href }, t.setHref = function(e) { r.virtualWindow().location().href = e }, t.origin = function() { var e = r.virtualWindow().location(); return e.origin ? e.origin : e.protocol + "//" + e.hostname + (e.port ? ":" + e.port : "") }, t.pathname = function() { return r.virtualWindow().location().pathname }, t.port = function() { return r.virtualWindow().location().port }, t.protocol = function() { return r.virtualWindow().location().protocol }, t.search = function() { return r.virtualWindow().location().search }, t.isShopifyDotCom = function(e) { return null !== (e = e || o()).match(/(^|\.)shopify\.com$/) }
            },
            2971: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.emitError = t.emitMetric = t.setMetricsOptions = t.errorsSchemaId = t.metricsSchemaId = void 0;
                var r, o = n(997),
                    i = n(2308);
                t.metricsSchemaId = "trekkie_metrics/1.0", t.errorsSchemaId = "trekkie_errors/1.0", t.setMetricsOptions = function(e) { r = e }, t.emitMetric = function(e, n) {
                    try {
                        var a = { metric_name: e, metric_value: n };
                        r && (a.shop_id = r), o.produce([{ schemaId: t.metricsSchemaId, payload: a }])
                    } catch (e) { i.internalError(e) }
                }, t.emitError = function(e, n) {
                    try {
                        var a = { error_name: e };
                        r && (a.shop_id = r), n && (a.metadata = n), o.produce([{ schemaId: t.errorsSchemaId, payload: a }])
                    } catch (e) { i.internalError(e) }
                }
            },
            997: function(e, t) {
                var n = this && this.__spreadArrays || function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        o = 0;
                    for (t = 0; t < n; t++)
                        for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                    return r
                };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.isSendBeaconAndBlobSupported = t.produce = t.flushBatchEvents = t.getBatchEvents = t.addBatchEvent = t.setMonorailRegion = t.batchEndpoints = void 0, t.batchEndpoints = { global: { url: "https://monorail-edge.shopifysvc.com/unstable/produce_batch" }, staging: { url: "https://monorail-edge-staging.shopifycloud.com/unstable/produce_batch" }, canada: { url: "https://monorail-edge-ca.shopifycloud.com/unstable/produce_batch" } };
                var r = t.batchEndpoints.global,
                    o = new Array;

                function i(e, t) { if (a()) { var n = new window.Blob([t], { type: "text/plain" }); if (window.navigator.sendBeacon(e, n)) return !0 } var r = new XMLHttpRequest; try { r.open("POST", e), r.setRequestHeader("Content-Type", "text/plain"), r.send(t) } catch (e) { console.log(e) } return !1 }

                function a() { return window && window.navigator && "function" == typeof window.navigator.sendBeacon && "function" == typeof window.Blob && !(-1 !== window.navigator.userAgent.lastIndexOf("iPhone; CPU iPhone OS 12_") || -1 !== window.navigator.userAgent.lastIndexOf("iPad; CPU OS 12_")) }
                t.setMonorailRegion = function(e) { t.batchEndpoints.hasOwnProperty(e) && (r = t.batchEndpoints[e]) }, t.addBatchEvent = function(e) {
                    var t = (new Date).getTime(),
                        n = { schema_id: e.schemaId, payload: e.payload, metadata: { event_created_at_ms: t } };
                    o.push(n)
                }, t.getBatchEvents = function() { return o }, t.flushBatchEvents = function() {
                    var e = n(o);
                    o.length = 0,
                        function(e) {
                            if (0 !== e.length) {
                                var t = { event_sent_at_ms: (new Date).getTime() },
                                    n = {};
                                n.metadata = t, n.events = e, i(r.url, JSON.stringify(n))
                            }
                        }(e)
                }, t.produce = function(e) {
                    if (0 !== e.length) {
                        var t = (new Date).getTime(),
                            n = { event_sent_at_ms: t },
                            o = {};
                        o.metadata = n, o.events = [];
                        for (var a = 0, c = e; a < c.length; a++) {
                            var s = c[a];
                            o.events.push({ schema_id: s.schemaId, payload: s.payload, metadata: { event_created_at_ms: t } })
                        }
                        return i(r.url, JSON.stringify(o))
                    }
                }, t.isSendBeaconAndBlobSupported = a
            },
            8336: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.getNavigationTypeLegacy = t.getNavigationTypeExperimental = void 0;
                var r = n(2971);
                t.getNavigationTypeExperimental = function() { try { var e = (null === performance || void 0 === performance ? void 0 : performance.getEntriesByType) && (null === performance || void 0 === performance ? void 0 : performance.getEntriesByType("navigation")); if (e && e[0]) { var t = performance.getEntriesByType("navigation")[0].type; return t && t.toString() } } catch (e) { r.emitError("PerformanceNavigationTiming_Error", e) } }, t.getNavigationTypeLegacy = function() {
                    var e, t;
                    try {
                        if (PerformanceNavigation && null !== (null === (e = null === performance || void 0 === performance ? void 0 : performance.navigation) || void 0 === e ? void 0 : e.type) && void 0 !== (null === (t = null === performance || void 0 === performance ? void 0 : performance.navigation) || void 0 === t ? void 0 : t.type)) {
                            var n = performance.navigation.type;
                            switch (n) {
                                case PerformanceNavigation.TYPE_NAVIGATE:
                                    return "navigate";
                                case PerformanceNavigation.TYPE_RELOAD:
                                    return "reload";
                                case PerformanceNavigation.TYPE_BACK_FORWARD:
                                    return "back_forward";
                                default:
                                    return "unknown: " + n
                            }
                        }
                    } catch (e) { r.emitError("Performance.Navigation_Error", e) }
                }
            },
            2308: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.internalError = t.setGlobalSerializedAppConfig = t.requestImpl = void 0;
                var r, o = n(725),
                    i = n(2971);
                t.requestImpl = {
                    img: function(e) { var t = new Image(1, 1); return t.src = e, t.style.display = "none", t },
                    queryString: function(e) {
                        var t = [];
                        for (var n in e)("number" == typeof e[n] || e[n]) && ("object" == typeof e[n] && 0 === Object.keys(e[n]).length || t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
                        if (function(e) {
                                for (var t = e.length; t > 0; --t) {
                                    var n = Math.floor(Math.random() * t),
                                        r = e[n];
                                    e[n] = e[t - 1], e[t - 1] = r
                                }
                            }(t), t.length > 1 && 0 === t[0].indexOf("event=")) {
                            var r = t[0];
                            t[0] = t[1], t[1] = r
                        }
                        return t.join("&")
                    }
                }, t.setGlobalSerializedAppConfig = function(e) { r = e }, t.internalError = function(e, n) {
                    var a = { name: e.name, line: e.lineNumber || e.line, script: e.fileName || e.sourceURL || e.script, stack: e.stackTrace || e.stack || e.description, message: e.message, url: o.href(), context: void 0 !== n ? n : null, appConfig: r || null };
                    i.emitError("internalError", t.requestImpl.queryString(a))
                }
            },
            5522: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.iframe = t.script = void 0;
                var r = n(1503);

                function o(e, t) {
                    if (t.onLoad && e.addEventListener("load", t.onLoad, !1), t.className) {
                        if (/^\d/.test(t.className)) throw new Error("Invalid className: " + t.className + " starts with a digit");
                        e.className = t.className
                    }
                }
                t.script = function(e) { var t = r.virtualDocument().createElement("script"); return t.src = e.src, t.async = !0, o(t, e), r.virtualDocument().body().appendChild(t), t }, t.iframe = function(e) { var t = r.virtualDocument().createElement("iframe"); return t.src = e.src, t.style.display = "none", o(t, e), r.virtualDocument().body().appendChild(t), t }
            },
            7668: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.hexTime = t.buildToken = t.UniqueIdManager = t.longTermKey = t.deprecatedLongTermKey = t.shortTermKey = t.deprecatedShortTermKey = void 0;
                var r = n(7e3),
                    o = n(6997),
                    i = n(2971);
                t.deprecatedShortTermKey = "_s", t.shortTermKey = "_shopify_s", t.deprecatedLongTermKey = "_y", t.longTermKey = "_shopify_y";
                var a = "xxxx-4xxx-xxxx-xxxxxxxxxxxx",
                    c = function() {
                        function e(e) { this.isServerSideCookieWritingEnabled = e }
                        return e.prototype.fetchOrSet = function(e, t, n, r) {
                            if (!o.enabled()) return "00000000-0000-0000-4000-000000000000";
                            var a = o.read(n) || o.read(t),
                                c = !r;
                            a || (a = s(), c = !0, r && i.emitMetric("serverSideCookieNotSet_" + n, 1)), c && (o.write(t, a, e), o.write(n, a, e));
                            var u = o.read(n) || o.read(t);
                            return void 0 === u ? "00000000-0000-0000-5000-000000000000" : u
                        }, e.prototype.shortTerm = function() { return this.fetchOrSet(!1, t.deprecatedShortTermKey, t.shortTermKey, !1) }, e.prototype.longTerm = function() { return this.fetchOrSet(!0, t.deprecatedLongTermKey, t.longTermKey, this.isServerSideCookieWritingEnabled) }, e
                    }();

                function s() {
                    var e = "";
                    try {
                        var t = r.virtualWindow().crypto(),
                            n = new Uint16Array(31);
                        t.getRandomValues(n);
                        var o = 0;
                        e = a.replace(/[x]/g, (function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            var i = n[o] % 16,
                                a = "x" === e ? i : 3 & i | 8;
                            return o++, a.toString(16)
                        })).toUpperCase()
                    } catch (t) {
                        e = a.replace(/[x]/g, (function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            var r = 16 * Math.random() | 0,
                                o = "x" === e ? r : 3 & r | 8;
                            return o.toString(16)
                        })).toUpperCase()
                    }
                    return u() + "-" + e
                }

                function u() {
                    var e = 0,
                        t = 0;
                    try { e = (new Date).getTime() >>> 0 } catch (t) { e = (new Date).getTime() >>> 0 }
                    try { t = performance.now() >>> 0 } catch (e) { t = 0 }
                    var n = Math.abs(e + t).toString(16).toLowerCase();
                    return "00000000".substr(0, 8 - n.length) + n
                }
                t.UniqueIdManager = c, t.buildToken = s, t.hexTime = u
            },
            1102: function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.generateShopifyDValue = t.objectAssignFilterUndefined = void 0, t.objectAssignFilterUndefined = function(e, t) { for (var n in t) void 0 !== t[n] && (e[n] = t[n]); return e }, t.generateShopifyDValue = function() { return (new Date).toJSON() } },
            5316: function(e, t, n) {
                var r = n(9426),
                    o = n(2308),
                    i = [],
                    a = n(8878);
                i.push(["Facebook Pixel", a.FacebookPixel]);
                var c = n(7575);
                i.push(["Google Analytics", c.GoogleAnalytics]);
                var s = n(8142);
                i.push(["Pinterest Pixel", s.Pinterest]);
                var u = n(6971);
                i.push(["Snap Pixel", u.Snap]);
                var p = n(342);
                i.push(["TikTok Pixel", p.TikTok]);
                var d = n(2724);
                i.push(["Session Attribution", d.SessionAttribution]);
                var v = n(5087);
                i.push(["Google Gtag Pixel", v.GoogleGtag]);
                var l = n(3653);
                i.push(["S2S", l.S2S]);
                try {
                    var f = window.trekkie.config;
                    if (f) {
                        o.setGlobalSerializedAppConfig(JSON.stringify(f));
                        var m = window.trekkie,
                            h = window.trekkie = new r.Tricorder(i, f, (function() { window.trekkie = h, window._visit = { tag: function() {}, multitrackToken: function() { return h.trekkie.defaultAttributes.uniqToken } }, h.user = function() { return { traits: function() { return { uniqToken: h.trekkie.defaultAttributes.uniqToken } } } }, r.replayAnalyticsQueue(h, m) }))
                    }
                } catch (e) { o.internalError(e) }
            },
            9426: function(e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.replayAnalyticsQueue = t.Tricorder = void 0;
                var r = n(8831),
                    o = n(2308),
                    i = n(1503),
                    a = n(725),
                    c = n(997),
                    s = n(793),
                    u = n(6997),
                    p = n(2971),
                    d = n(7668),
                    v = n(1930),
                    l = n(8336),
                    f = /^https?:\/\//,
                    m = function() {
                        function e(e, t, n) {
                            var r, o, i = this;
                            this.integrations = [], this.eventNameToEventIdMapping = new Map, this.config = t, this.navigationInfo = this.getNavigationType(), p.emitMetric("navigation-" + (null === (r = this.navigationInfo) || void 0 === r ? void 0 : r.navigationApi) + "-" + (null === (o = this.navigationInfo) || void 0 === o ? void 0 : o.navigationType), 1), this.logAssetContext(t), this.hasLoadFeatureScript() && window.Shopify && window.Shopify.loadFeatures ? window.Shopify.loadFeatures([{ name: "consent-tracking-api", version: "0.1" }], (function(r) {
                                if (r) throw new Error(r);
                                i.initialize(e, t, n)
                            })) : this.initialize(e, t, n)
                        }
                        return e.prototype.logAssetContext = function(e) {
                            var t, n, r, o;
                            c.addBatchEvent({ schemaId: v.trekkieAssetContextSchemaId, payload: { build_id: "9672a532d77d261ce44aebf99ae2276d052a55f9", page_url: window.location.href, app_name: null === (t = e.Trekkie) || void 0 === t ? void 0 : t.appName, shop_id: null === (r = null === (n = e.Trekkie) || void 0 === n ? void 0 : n.defaultAttributes) || void 0 === r ? void 0 : r.shopId, monorail_region: (null === (o = e.Trekkie) || void 0 === o ? void 0 : o.monorailRegion) || "not_set" } })
                        }, e.prototype.getNavigationType = function() {
                            try {
                                var e = "PerformanceNavigationTiming",
                                    t = l.getNavigationTypeExperimental();
                                return t || (t = l.getNavigationTypeLegacy(), e = "performance.navigation"), t ? { navigationType: t, navigationApi: e } : { navigationType: "unknown", navigationApi: "unknown" }
                            } catch (e) { p.emitError("navigation_api_error", e) }
                            return { navigationType: "error", navigationApi: "error" }
                        }, e.prototype.hasLoadFeatureScript = function() { var e = document.querySelectorAll('[data-source-attribution="shopify.loadfeatures"]'); return Boolean(e.length) }, e.prototype.initialize = function(e, t, n) {
                            var o = this;
                            this.trekkie = new r.Trekkie(t.Trekkie, (function() { setTimeout((function() { o.loadIntegrations(e, t, o.trekkie, n) }), 0) })), this.integrations[0] !== this.trekkie && this.integrations.unshift(this.trekkie), this.setupEventIdMapping()
                        }, e.prototype.setupEventIdMapping = function() {
                            var e;
                            try {
                                if (this.config.initialDocumentCookie) {
                                    var t = u.parseDocumentCookie(this.config.initialDocumentCookie)._shopify_evids;
                                    if ((null === (e = this.config.Trekkie) || void 0 === e ? void 0 : e.expectS2SEventId) && t)
                                        if (window.ShopifyAnalytics && window.ShopifyAnalytics.meta && window.ShopifyAnalytics.meta.evids)
                                            for (var n = 0, r = t.split(";"); n < r.length; n++) {
                                                var o = r[n];
                                                try {
                                                    var i = o.split("=");
                                                    if (2 !== i.length) { p.emitError("event_id_token_length", o); continue }
                                                    var a = i[0],
                                                        c = i[1];
                                                    window.ShopifyAnalytics.meta.evids[a] ? this.eventNameToEventIdMapping.set(window.ShopifyAnalytics.meta.evids[a], c) : p.emitError("event_id_cookie_key_not_found")
                                                } catch (e) { p.emitError("event_id_token_parsing", e.toString()) }
                                            } else p.emitError("meta_evid_not_found")
                                } else p.emitError("initial_document_cookie_not_found");
                                u.clear("_shopify_evids")
                            } catch (e) { p.emitError("event_id_map_parsing", e.toString()) }
                        }, e.prototype.getS2SEventId = function(e, t) {
                            var n, r, o, i, a;
                            void 0 === e && (e = void 0), void 0 === t && (t = void 0);
                            var c = { expectS2SEventId: (null === (n = this.config.Trekkie) || void 0 === n ? void 0 : n.expectS2SEventId) || !1, expectS2SEventEmit: (null === (r = this.config.Trekkie) || void 0 === r ? void 0 : r.expectS2SEventEmit) || !1, s2sEventId: null, s2sEventIdSource: null, navigationApi: this.navigationInfo.navigationApi, navigationType: this.navigationInfo.navigationType },
                                s = d.buildToken();
                            return c.expectS2SEventId && (e && this.eventNameToEventIdMapping.has(e) ? (c.s2sEventId = this.eventNameToEventIdMapping.get(e), c.s2sEventIdSource = "cookie") : t ? (c.s2sEventId = t, c.s2sEventIdSource = "parameter") : "Added Product" === e && (c.s2sEventId = s, c.s2sEventIdSource = "trekkie")), { s2sMetadata: c, eventId: (null === (o = this.config.Trekkie) || void 0 === o ? void 0 : o.useS2SEventId) && (null === (i = this.config.Trekkie) || void 0 === i ? void 0 : i.expectS2SEventId) && (null === (a = this.config.Trekkie) || void 0 === a ? void 0 : a.expectS2SEventEmit) ? c.s2sEventId : s }
                        }, e.prototype.loadIntegrations = function(e, t, n, r) {
                            for (var i = this.waitFor(e.length, (function() { try { r(), c.flushBatchEvents() } catch (e) { o.internalError(e) } })), a = 0, s = e; a < s.length; a++) {
                                var u = s[a];
                                try {
                                    var p = t[u[0]];
                                    if (p && "object" == typeof p) {
                                        var d = new(0, u[1])(p, n, i);
                                        this.integrations.push(d)
                                    } else i()
                                } catch (e) { i(), o.internalError(e) }
                            }
                        }, e.prototype.identify = function(e, t, n) {
                            void 0 === e && (e = ""), void 0 === t && (t = {});
                            var r = this.getS2SEventId(void 0, n);
                            e instanceof Object && (t = e, e = "");
                            for (var i = 0, a = this.integrations; i < a.length; i++) { var c = a[i]; try { c.identify({ id: e, properties: t, eventId: r.eventId, s2sMetadata: r.s2sMetadata }) } catch (e) { o.internalError(e) } }
                        }, e.prototype.canEmitEvent = function(e) { return !u.privacyApiMethods.hasCustomerPrivacyAPI() || e.isEssential() || !e.isEssential() && u.privacyApiMethods.userCanBeTracked() }, e.prototype.page = function(e, t, n) {
                            void 0 === e && (e = ""), void 0 === t && (t = {});
                            var r = this.getS2SEventId("Page View", n);
                            e instanceof Object && (t = e, e = "");
                            for (var i = this.generatePageObject(e, t, r.eventId, r.s2sMetadata), a = function(e) {
                                    try {
                                        if (c.canEmitEvent(e)) e.page(i);
                                        else {
                                            var t = function() { e.page(i), document.removeEventListener(s.TrackingConsentEvents.TRACKING_ACCEPTED, t) };
                                            document.addEventListener(s.TrackingConsentEvents.TRACKING_ACCEPTED, t)
                                        }
                                    } catch (e) { o.internalError(e) }
                                }, c = this, u = 0, p = this.integrations; u < p.length; u++) a(p[u]);
                            return r.eventId
                        }, e.prototype.track = function(e, t, n) {
                            void 0 === e && (e = ""), void 0 === t && (t = {});
                            var r = this.getS2SEventId(e, n);
                            e instanceof Object && (t = e, e = "");
                            for (var i = { event: e, properties: t, eventId: r.eventId, s2sMetadata: r.s2sMetadata }, a = function(e) {
                                    try {
                                        if (c.canEmitEvent(e)) e.track(i);
                                        else {
                                            var t = function() { e.track(i), document.removeEventListener(s.TrackingConsentEvents.TRACKING_ACCEPTED, t) };
                                            document.addEventListener(s.TrackingConsentEvents.TRACKING_ACCEPTED, t)
                                        }
                                    } catch (e) { o.internalError(e) }
                                }, c = this, u = 0, p = this.integrations; u < p.length; u++) a(p[u]);
                            return r.eventId
                        }, e.prototype.ready = function(e) { try { e() } catch (e) { o.internalError(e) } }, e.prototype.waitFor = function(e, t) { return 0 === e ? (setTimeout(t, 0), function() {}) : function() { 0 == --e && setTimeout(t, 0) } }, e.prototype.generatePageObject = function(e, t, n, r) {
                            var o = a.href(),
                                c = o.indexOf("?");
                            return c = (o = -1 === c ? "" : o.slice(c)).indexOf("#"), o = "?" === (o = -1 === c ? o : o.slice(0, c)) ? "" : o, { name: e, referrer: i.virtualDocument().referrer(), path: a.pathname(), search: o, title: i.virtualDocument().title(), url: this.url(), properties: t, eventId: n, s2sMetadata: r }
                        }, e.prototype.canonical = function() { for (var e = i.virtualDocument().getElementsByTagName("link"), t = 0; t < e.length; t++) { var n = e[t]; if ("canonical" === n.getAttribute("rel")) { var r = n.getAttribute("href"); if (!f.test(r)) continue; if (r.replace(f, "").length <= 5) continue; return r } } return "" }, e.prototype.url = function() {
                            var e = this.canonical();
                            if (e) return e.indexOf("?") > 0 ? e : e + a.search();
                            var t = a.href(),
                                n = t.indexOf("#");
                            return -1 === n ? t : t.slice(0, n)
                        }, e
                    }();
                t.Tricorder = m, t.replayAnalyticsQueue = function(e, t) {
                    for (var n = 0, r = t; n < r.length; n++) e[c = (a = r[n])[0]] === e.ready && e[c].apply(e, a.slice(1));
                    for (var o = 0, i = t; o < i.length; o++) {
                        var a, c;
                        e[c = (a = i[o])[0]] && e[c] !== e.ready && e[c].apply(e, a.slice(1))
                    }
                }
            },
            1503: function(e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.virtualDocument = void 0;
                var n = new(function() {
                    function e() {}
                    return e.prototype.cookie = function() { return document.cookie }, e.prototype.setCookie = function(e) { document.cookie = e }, e.prototype.body = function() { return document.body }, e.prototype.referrer = function() { return document.referrer }, e.prototype.title = function() { return document.title }, e.prototype.createElement = function(e) { return document.createElement(e) }, e.prototype.dispatchEvent = function(e) { return document.dispatchEvent(e) }, e.prototype.querySelector = function(e) { return document.querySelector(e) }, e.prototype.querySelectorAll = function(e) { return document.querySelectorAll(e) }, e.prototype.documentElement = function() { return document.documentElement }, e.prototype.getElementsByTagName = function(e) { return document.getElementsByTagName(e) }, e.prototype.createCustomEvent = function(e, t) { try { return new CustomEvent(e, t) } catch (r) { var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } }, e
                }());
                t.virtualDocument = function() { return n }
            },
            7e3: function(e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.virtualWindow = void 0;
                var n = new(function() {
                    function e(e) { this.nativeWindow = e }
                    return e.prototype.location = function() { return this.nativeWindow.location }, e.prototype.userAgent = function() { return this.nativeWindow.navigator.userAgent }, e.prototype.crypto = function() { return this.nativeWindow.crypto || this.nativeWindow.msCrypto }, e.prototype.top = function() { return this.nativeWindow.top ? new e(this.nativeWindow.top) : void 0 }, e.prototype.parent = function() { return this.nativeWindow.parent ? new e(this.nativeWindow.parent) : void 0 }, e.prototype.postMessage = function(e, t, n) { this.nativeWindow.postMessage(e, t, n) }, e.prototype.addEventListener = function(e, t, n) { this.nativeWindow.addEventListener(e, t, n) }, e.prototype.onload = function() { throw new Error("Do not use window.onload due to compatibility reasons. Use addEventListener instead of window.onload") }, e
                }())(window);
                t.virtualWindow = function() { return n }
            }
        },
        t = {};
    ! function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.exports }(5316)
}();