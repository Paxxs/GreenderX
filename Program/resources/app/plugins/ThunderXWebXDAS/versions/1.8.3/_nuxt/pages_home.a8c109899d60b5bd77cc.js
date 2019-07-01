/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2019/03/17 */
/*! https://www.luochenzhimu.com */
/*! For license information please see LICENSES */
webpackJsonp([0, 1, 2, 3, 4], {
    "+3xp": function (t, e, i) {
        "use strict";
        var n = i("ZDOR"), o = i("jrzI"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlMessage.vue", e.a = r.exports
    }, "+9BZ": function (t, e, i) {
        t.exports = i.p + "img/spr-emoji.9ac75cc.png"
    }, "+yHD": function (t, e, i) {
        t.exports = i.p + "img/ani-per.15762a9.png"
    }, "/TYz": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("sT91"), o = i("iA8U"), r = !1;
        var a = function (t) {
            r || (i("5ZEk"), i("aT+b"), i("oxpM"), i("Nvml"), i("OMI9"), i("n8iO"))
        }, s = i("VU/8")(n.a, o.a, !1, a, null, null);
    }, "/t4/": function (t, e, i) {
        t.exports = i.p + "img/spr-vip-icon-2x.5691a4a.png"
    }, "01Sk": function (t, e, i) {
        t.exports = i.p + "img/spr-header.6405a43.png"
    }, "02QL": function (t, e, i) {
        "use strict";
        t.exports = {
            PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
            TYPE_IHDR: 1229472850,
            TYPE_IEND: 1229278788,
            TYPE_IDAT: 1229209940,
            TYPE_PLTE: 1347179589,
            TYPE_tRNS: 1951551059,
            TYPE_gAMA: 1732332865,
            COLORTYPE_GRAYSCALE: 0,
            COLORTYPE_PALETTE: 1,
            COLORTYPE_COLOR: 2,
            COLORTYPE_ALPHA: 4,
            COLORTYPE_PALETTE_COLOR: 3,
            COLORTYPE_COLOR_ALPHA: 6,
            COLORTYPE_TO_BPP_MAP: {0: 1, 2: 3, 3: 1, 4: 2, 6: 4},
            GAMMA_DIVISION: 1e5
        }
    }, "0RyA": function (t, e, i) {
        "use strict";
        var n = i("wGE2"), o = {
            1: {0: 0, 1: 0, 2: 0, 3: 255},
            2: {0: 0, 1: 0, 2: 0, 3: 1},
            3: {0: 0, 1: 1, 2: 2, 3: 255},
            4: {0: 0, 1: 1, 2: 2, 3: 3}
        };

        function r(t, e, i, n, r, a) {
            for (var s = t.width, c = t.height, l = t.index, p = 0; p < c; p++) for (var u = 0; u < s; u++) {
                for (var d = i(u, p, l), h = 0; h < 4; h++) {
                    var f = o[n][h];
                    if (255 === f) e[d + h] = 255; else {
                        var x = f + a;
                        if (x === r.length) throw new Error("Ran out of data");
                        e[d + h] = r[x]
                    }
                }
                a += n
            }
            return a
        }

        function a(t, e, i, n, r, a) {
            for (var s = t.width, c = t.height, l = t.index, p = 0; p < c; p++) {
                for (var u = 0; u < s; u++) for (var d = r.get(n), h = i(u, p, l), f = 0; f < 4; f++) {
                    var x = o[n][f];
                    e[h + f] = 255 !== x ? d[x] : a
                }
                r.resetAfterLine()
            }
        }

        e.dataToBitMap = function (t, e) {
            var i, o = e.width, s = e.height, c = e.depth, l = e.bpp, p = e.interlace;
            if (8 !== c) var u = function (t, e) {
                var i = [], n = 0;

                function o() {
                    if (n === t.length) throw new Error("Ran out of data");
                    var o, r, a, s, c, l, p, u, d = t[n];
                    switch (n++, e) {
                        default:
                            throw new Error("unrecognised depth");
                        case 16:
                            p = t[n], n++, i.push((d << 8) + p);
                            break;
                        case 4:
                            p = 15 & d, u = d >> 4, i.push(u, p);
                            break;
                        case 2:
                            c = 3 & d, l = d >> 2 & 3, p = d >> 4 & 3, u = d >> 6 & 3, i.push(u, p, l, c);
                            break;
                        case 1:
                            o = 1 & d, r = d >> 1 & 1, a = d >> 2 & 1, s = d >> 3 & 1, c = d >> 4 & 1, l = d >> 5 & 1, p = d >> 6 & 1, u = d >> 7 & 1, i.push(u, p, l, c, s, a, r, o)
                    }
                }

                return {
                    get: function (t) {
                        for (; i.length < t;) o();
                        var e = i.slice(0, t);
                        return i = i.slice(t), e
                    }, resetAfterLine: function () {
                        i.length = 0
                    }, end: function () {
                        if (n !== t.length) throw new Error("extra data found")
                    }
                }
            }(t, c);
            i = c <= 8 ? new Buffer(o * s * 4) : new Uint16Array(o * s * 4);
            var d, h, f = Math.pow(2, c) - 1, x = 0;
            if (p) d = n.getImagePasses(o, s), h = n.getInterlaceIterator(o, s); else {
                var m = 0;
                h = function () {
                    var t = m;
                    return m += 4, t
                }, d = [{width: o, height: s}]
            }
            for (var g = 0; g < d.length; g++) 8 === c ? x = r(d[g], i, h, l, t, x) : a(d[g], i, h, l, u, f);
            if (8 === c) {
                if (x !== t.length) throw new Error("extra data found")
            } else u.end();
            return i
        }
    }, "0X07": function (t, e, i) {
        var n = i("oZkF");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("e93a999e", n, !1)
    }, "0uQW": function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, "a[data-v-64c66bef]{transition:transform .2s linear}", ""])
    }, "1Gi+": function (t, e, i) {
        var n = i("mwnW"), o = i("WEzc"), r = i("SFTi"), a = i("L8yT"), s = i("R2iA"), c = i("Wfyt");

        function l(t, e, i) {
            if (void 0 === t) throw new Error("String required as first argument");
            if (void 0 === i && (i = e, e = {}), "function" != typeof i) {
                if (!n()) throw new Error("Callback required as last argument");
                e = i || {}, i = null
            }
            return {opts: e, cb: i}
        }

        function p(t) {
            switch (t) {
                case"svg":
                    return c;
                case"txt":
                case"utf8":
                    return a;
                case"png":
                case"image/png":
                default:
                    return r
            }
        }

        function u(t, e, i) {
            if (!i.cb) return new Promise(function (n, r) {
                try {
                    var a = o.create(e, i.opts);
                    return t(a, i.opts, function (t, e) {
                        return t ? r(t) : n(e)
                    })
                } catch (t) {
                    r(t)
                }
            });
            try {
                var n = o.create(e, i.opts);
                return t(n, i.opts, i.cb)
            } catch (t) {
                i.cb(t)
            }
        }

        e.create = o.create, e.toCanvas = i("71e1").toCanvas, e.toString = function (t, e, i) {
            var n = l(t, e, i);
            return u(function (t) {
                switch (t) {
                    case"svg":
                        return c;
                    case"terminal":
                        return s;
                    case"utf8":
                    default:
                        return a
                }
            }(n.opts.type).render, t, n)
        }, e.toDataURL = function (t, e, i) {
            var n = l(t, e, i);
            return u(p(n.opts.type).renderToDataURL, t, n)
        }, e.toBuffer = function (t, e, i) {
            var n = l(t, e, i);
            return u(p(n.opts.type).renderToBuffer, t, n)
        }, e.toFile = function (t, e, i, o) {
            if ("string" != typeof t || "string" != typeof e && "object" != typeof e) throw new Error("Invalid argument");
            if (arguments.length < 3 && !n()) throw new Error("Too few arguments provided");
            var r = l(e, i, o);
            return u(p(r.opts.type || function (t) {
                return t.slice(2 + (t.lastIndexOf(".") - 1 >>> 0)).toLowerCase()
            }(t)).renderToFile.bind(null, t), e, r)
        }, e.toFileStream = function (t, e, i) {
            if (arguments.length < 2) throw new Error("Too few arguments provided");
            var n = l(e, i, t.emit.bind(t, "error"));
            u(p("png").renderToFileStream.bind(null, t), e, n)
        }
    }, "1Y2G": function (t, e, i) {
        var n = i("oLzS"), o = i("Sd0T"), r = i("utyv"), a = i("uF9H"), s = i("yYhy"), c = i("Dsid"),
            l = n.getBCHDigit(7973);

        function p(t, e) {
            return a.getCharCountIndicator(t, e) + 4
        }

        function u(t, e) {
            var i = 0;
            return t.forEach(function (t) {
                var n = p(t.mode, e);
                i += n + t.getBitsLength()
            }), i
        }

        e.from = function (t, e) {
            return s.isValid(t) ? parseInt(t, 10) : e
        }, e.getCapacity = function (t, e, i) {
            if (!s.isValid(t)) throw new Error("Invalid QR Code version");
            void 0 === i && (i = a.BYTE);
            var r = 8 * (n.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
            if (i === a.MIXED) return r;
            var c = r - p(i, t);
            switch (i) {
                case a.NUMERIC:
                    return Math.floor(c / 10 * 3);
                case a.ALPHANUMERIC:
                    return Math.floor(c / 11 * 2);
                case a.KANJI:
                    return Math.floor(c / 13);
                case a.BYTE:
                default:
                    return Math.floor(c / 8)
            }
        }, e.getBestVersionForData = function (t, i) {
            var n, o = r.from(i, r.M);
            if (c(t)) {
                if (t.length > 1) return function (t, i) {
                    for (var n = 1; n <= 40; n++) if (u(t, n) <= e.getCapacity(n, i, a.MIXED)) return n
                }(t, o);
                if (0 === t.length) return 1;
                n = t[0]
            } else n = t;
            return function (t, i, n) {
                for (var o = 1; o <= 40; o++) if (i <= e.getCapacity(o, n, t)) return o
            }(n.mode, n.getLength(), o)
        }, e.getEncodedBits = function (t) {
            if (!s.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
            for (var e = t << 12; n.getBCHDigit(e) - l >= 0;) e ^= 7973 << n.getBCHDigit(e) - l;
            return t << 12 | e
        }
    }, "1Z8a": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.visible ? i("div", {staticClass: "pop-opt"}, [i("p", {staticClass: "txt-del"}, [i("span", {staticClass: "ico-s-note"}), t._t("default")], 2), i("div", {staticClass: "pop-opt-btn"}, [i("a", {
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        t.handleClick("ok")
                    }
                }
            }, [t._v("确定")]), i("a", {
                attrs: {href: "javascript:;"}, on: {
                    click: function (e) {
                        t.handleClick("cancel")
                    }
                }
            }, [t._v("取消")])])]) : t._e()
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, "1lFo": function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".error-message[data-v-e742352e]{position:relative}.error-message .td-cover[data-v-e742352e]{top:25px}.is-absolute[data-v-e742352e]{position:absolute}", ""])
    }, "1wyJ": function (t, e, i) {
        t.exports = i.p + "img/spr-emoji-x2.758c511.png"
    }, "2iyD": function (t, e, i) {
        t.exports = i.p + "img/icon-new.51d7f0a.png"
    }, "3eQE": function (t, e, i) {
        "use strict";
        var n = !0, o = i("epkN");
        o.deflateSync || (n = !1);
        var r = i("02QL"), a = i("N/qc");
        t.exports = function (t, e) {
            if (!n) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
            var i = new a(e || {}), s = [];
            s.push(new Buffer(r.PNG_SIGNATURE)), s.push(i.packIHDR(t.width, t.height)), t.gamma && s.push(i.packGAMA(t.gamma));
            var c = i.filterData(t.data, t.width, t.height), l = o.deflateSync(c, i.getDeflateOptions());
            if (c = null, !l || !l.length) throw new Error("bad png - invalid compressed data response");
            return s.push(i.packIDAT(l)), s.push(i.packIEND()), Buffer.concat(s)
        }
    }, "4Xj0": function (t, e, i) {
        "use strict";
        var n = i("gKGV"), o = (i.n(n), i("Rhsk")), r = i("NAp3");
        e.a = {
            components: {XLUserHeadCard: r.a},
            props: {
                curUserId: {type: String, default: "0"},
                tid: {type: String, default: ""},
                speedRank: {
                    type: Object, default: function () {
                        return {}
                    }
                },
                getSpeedRank: {
                    type: Function, default: function () {
                    }
                },
                lastCommentTime: {type: Number, default: 0},
                taskId: {type: [Number, String], default: "0"},
                curTask: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            },
            data: function () {
                return {topLength: 3, entryPage: "", entryHead: ""}
            },
            computed: {
                isInRank: function () {
                    var t = this;
                    return this.speedRank.CommentSpeedRanks && -1 !== this.speedRank.CommentSpeedRanks.findIndex(function (e) {
                        return t.curUserId === String(e.userId)
                    })
                }, rankLength: function () {
                    return this.$sget(this.speedRank.CommentSpeedRanks, "length") || 0
                }, avartar: function () {
                    return this.$sget(this.$store.state.users.all, this.curUserId, "portrait_url")
                }
            },
            watch: {
                curUserId: {
                    handler: function () {
                        this.getSpeedRank(this.tid)
                    }
                }, tid: {
                    handler: function (t) {
                        var e = this;
                        t && this.getSpeedRank(t).then(function () {
                            e.$store.dispatch("users/checkFollow", e.speedRank.CommentSpeedRanks.map(function (t) {
                                return t.userId
                            }))
                        })
                    }, immediate: !0
                }, lastCommentTime: {
                    handler: function (t) {
                        t && this.getSpeedRank(this.tid)
                    }, immediate: !0
                }
            },
            methods: {getUserLink: o.e}
        }
    }, "4kQz": function (t, e, i) {
        "use strict";
        var n = i("Rhsk");
        e.a = {
            props: {
                uid: String,
                text: {type: Boolean, default: !0},
                classname: {type: String, default: "btn-att"},
                position: {type: String, default: ""}
            }, data: function () {
                return {disabled: !1, hover: !1}
            }, computed: {
                curUid: function () {
                    return this.$store.state.users.curUser.userId
                }, followed: function () {
                    var t = this.$store.state.users,
                        e = (this.$sget(t.all[this.uid], "fans") || []).includes(t.curUser.userId);
                    return this.$emit("followChange", e), e
                }, followBtnText: function () {
                    return this.followed ? this.hover ? "取消关注" : "已关注" : "关注"
                }
            }, methods: {
                handleToggleFollow: function () {
                    var t = this;
                    if (!this.disabled) {
                        var e = this.followed ? "unfollow" : "follow";
                        if (this.$stat("download_detail", "dltab_detail_user_info_card_click", {
                            userid: this.uid,
                            button: e
                        }), this.curUid !== this.uid) {
                            var i = !this.followed;
                            Object(n.j)(function () {
                                t.disabled = !0, t.$store.dispatch("users/toggleFollow", {
                                    uid: t.uid,
                                    follow: i
                                }).catch(function (e) {
                                    t.$raven.error(e)
                                }).then(function () {
                                    t.disabled = !1
                                })
                            }, "download_detail_" + this.position)
                        }
                    }
                }
            }
        }
    }, "4nU2": function (t, e, i) {
        "use strict";
        var n = i("yxXY"), o = i("7udH"), r = i.n(o);
        e.a = n.a.connect({
            mapStateToProps: {
                curUserNick: function (t, e) {
                    return t.users.curUser.userNick
                }, curUserId: function (t, e) {
                    return t.users.curUser.userId
                }, curTask: function (t, e) {
                    return r()(t.tasks.all, t.tasks.curTaskID)
                }
            },
            mapDispatchToProps: {getComments: "comments/get", publishComments: "comments/publish"},
            mapCommitToProps: {setCurPage: "comments/setCurPage"}
        })
    }, "5HHq": function (t, e, i) {
        "use strict";
        var n = i("qo2w"), o = i("g018"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\review\\XlRecommendReviewItem.vue", e.a = r.exports
    }, "5Ogs": function (t, e, i) {
        "use strict";
        var n = i("mvHQ"), o = i.n(n), r = i("Rhsk"), a = i("Nwvo"), s = i.n(a), c = i("6Raw");
        e.a = {
            components: {XlFollow: c.a},
            props: {uid: String, direction: String, position: {type: String, default: ""}},
            data: function () {
                return {showPop: !1}
            },
            computed: {
                avartar: function () {
                    return this.$sget(this.$store.state.users.all, this.uid, "portrait_url")
                }, vipData: function () {
                    return this.user.vip_extra || []
                }, vipInfo: function () {
                    return this.$vipInfo(this.vipData) || {}
                }, curUid: function () {
                    return this.$store.state.users.curUser.userId
                }, user: function () {
                    return this.getUser(this.uid) || {nick_name: "迅雷用户"}
                }, followFrom: function () {
                    return this.position + "_follow"
                }
            },
            watch: {
                showPop: function (t) {
                    t && this.$stat("download_detail", "dltab_detail_user_info_card_show", {
                        userid: this.uid,
                        position: this.position
                    })
                }
            },
            methods: {
                getUserLink: r.e, getUser: function (t) {
                    var e = this.$sget(this.$store.state.users.all, t);
                    return void 0 === e && this.$store.dispatch("users/get", t), e
                }, openChat: function () {
                    var t = this;
                    this.$stat("download_detail", "dltab_detail_user_info_card_click", {
                        userid: this.uid,
                        button: "msg"
                    }), this.curUid !== this.uid && setTimeout(function () {
                        s.a.api.call("OpenCommunityGroup", o()({type: "chat", extra: {userId: t.uid}}))
                    }, 100)
                }, statClick: function (t) {
                    this.$stat("download_detail", "dltab_detail_user_info_card_click", {userid: this.uid, button: t})
                }
            }
        }
    }, "5X0l": function (t, e, i) {
        t.exports = i.p + "img/defaulticon.1baa329.png"
    }, "5ZEk": function (t, e, i) {
        var n = i("v+hD");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("130021b2", n, !1)
    }, "5rP1": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [t.tid ? t.curPageComments.length ? [i("ul", t._l(t.curPageComments, function (e) {
                return e ? i("xl-comment-item", {
                    key: (e.type || "new") + "|" + e.cid,
                    attrs: {
                        type: e.type,
                        comment: e,
                        "entry-page": t.entryPage,
                        "entry-head": t.entryHead,
                        "entry-name": t.entryName,
                        "resource-user": t.resourceUser,
                        "time-format": t.timeFormat,
                        tid: t.tid,
                        "max-length": t.maxLength,
                        "comment-length": t.comments.length,
                        "show-reply": t.showReply,
                        "remove-comment-callback": function () {
                            return t.$emit("removeComment")
                        }
                    },
                    on: {
                        "update:showReply": function (e) {
                            t.showReply = e
                        }, finish: function (e) {
                            t.$emit("finish")
                        }, click: function (e, i) {
                            t.$emit("click", e, i)
                        }, delete: function (e) {
                            t.$emit("delete", arguments[0])
                        }, clickReply: function (e) {
                            t.$emit("clickReply", arguments[0])
                        }, clickHeadVip: function (e) {
                            t.$emit("clickHeadVip")
                        }, nameClick: function (e) {
                            t.$emit("nameClick", arguments[0])
                        }, headClick: function (e) {
                            t.$emit("headClick", arguments[0])
                        }, likecomment: function (e) {
                            t.$emit("likecomment", arguments[0])
                        }, keyupctrlentry: function (e) {
                            t.$emit("keyupctrlentry", arguments[0])
                        }, sendReply: function (e) {
                            t.$emit("sendReply", arguments[0])
                        }
                    }
                }) : t._e()
            })), i("td-pagination", {
                attrs: {total: t.totalPage, "before-change": t.fetchCommentsByPage},
                on: {
                    "prev-click": function (e) {
                        t.$emit("click", "last")
                    }, "next-click": function (e) {
                        t.$emit("click", "next")
                    }
                },
                model: {
                    value: t.page, callback: function (e) {
                        t.page = e
                    }, expression: "page"
                }
            })] : i("div", [t._t("default")], 2) : [t._t("default")]], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, "6Raw": function (t, e, i) {
        "use strict";
        var n = i("4kQz"), o = i("mUK2"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlFollow.vue", e.a = r.exports
    }, "6htx": function (t, e, i) {
        "use strict";
        var n = i("yr0C"), o = i.n(n), r = i("/5sW"), a = i("ZeZP");
        i.n(a);
        r.default.use(o.a), e.a = {
            props: {visible: {type: Boolean, default: !0}, userid: {type: [String, Number], required: !0, default: ""}},
            data: function () {
                return {vipType: "novip"}
            },
            computed: {
                loginUserid: function () {
                    return this.$store.state.users.curUser.userId
                }, vipData: function () {
                    return this.$sget(this.$store.state.users.all[this.userid], "vip_extra") || []
                }, downloadVipInfo: function () {
                    var t = this.vipData.filter(function (t) {
                        return 2 === (t.vasId || t.vasID)
                    })[0];
                    return t
                }, isVip: function () {
                    return "1" === this.$sget(this.downloadVipInfo, "isVIP")
                }, isYear: function () {
                    return "1" === this.$sget(this.downloadVipInfo, "isYear")
                }, vipClass: function () {
                    return this.downloadVipInfo && this.vasType ? "vip-icon-" + this.vasType + (this.downloadVipInfo.vIPLevel || this.downloadVipInfo.VIPLevel) : ""
                }, vasType: function () {
                    return {2: "vip", 3: "pvip", 5: "svip"}[this.downloadVipInfo && this.downloadVipInfo.vasType]
                }, show: function () {
                    return this.downloadVipInfo && "1" === this.downloadVipInfo.isVIP
                }, vipLink: function () {
                    return "https://vip.xunlei.com/vip_service/rule/?referfrom=v_pc_xlx_ggong_comment_vipicon"
                }
            },
            watch: {
                downloadVipInfo: {
                    handler: function (t) {
                        if (t) {
                            this.vipType = {2: "normal", 3: "baijin", 5: "super"}[t.vasType] || "novip"
                        }
                    }, immediate: !0
                }
            }
        }
    }, "71e1": function (t, e, i) {
        var n = i("cJP9"), o = i("WEzc"), r = i("9ff9"), a = i("729m");

        function s(t, e, i, r, a) {
            var s = [].slice.call(arguments, 1), c = s.length, l = "function" == typeof s[c - 1];
            if (!l && !n()) throw new Error("Callback required as last argument");
            if (!l) {
                if (c < 1) throw new Error("Too few arguments provided");
                return 1 === c ? (i = e, e = r = void 0) : 2 !== c || e.getContext || (r = i, i = e, e = void 0), new Promise(function (n, a) {
                    try {
                        var s = o.create(i, r);
                        n(t(s, e, r))
                    } catch (t) {
                        a(t)
                    }
                })
            }
            if (c < 2) throw new Error("Too few arguments provided");
            2 === c ? (a = i, i = e, e = r = void 0) : 3 === c && (e.getContext && void 0 === a ? (a = r, r = void 0) : (a = r, r = i, i = e, e = void 0));
            try {
                var p = o.create(i, r);
                a(null, t(p, e, r))
            } catch (t) {
                a(t)
            }
        }

        e.create = o.create, e.toCanvas = s.bind(null, r.render), e.toDataURL = s.bind(null, r.renderToDataURL), e.toString = s.bind(null, function (t, e, i) {
            return a.render(t, i)
        })
    }, "729m": function (t, e, i) {
        var n = i("nwDn");

        function o(t, e) {
            var i = t.a / 255, n = e + '="' + t.hex + '"';
            return i < 1 ? n + " " + e + '-opacity="' + i.toFixed(2).slice(1) + '"' : n
        }

        function r(t, e, i) {
            var n = t + e;
            return void 0 !== i && (n += " " + i), n
        }

        e.render = function (t, e, i) {
            var a = n.getOptions(e), s = t.modules.size, c = t.modules.data, l = s + 2 * a.margin,
                p = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
                u = "<path " + o(a.color.dark, "stroke") + ' d="' + function (t, e, i) {
                    for (var n = "", o = 0, a = !1, s = 0, c = 0; c < t.length; c++) {
                        var l = Math.floor(c % e), p = Math.floor(c / e);
                        l || a || (a = !0), t[c] ? (s++, c > 0 && l > 0 && t[c - 1] || (n += a ? r("M", l + i, .5 + p + i) : r("m", o, 0), o = 0, a = !1), l + 1 < e && t[c + 1] || (n += r("h", s), s = 0)) : o++
                    }
                    return n
                }(c, s, a.margin) + '"/>', d = 'viewBox="0 0 ' + l + " " + l + '"',
                h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + p + u + "</svg>\n";
            return "function" == typeof i && i(null, h), h
        }
    }, "7Eyl": function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ":root{--color-danger:#ff4848;--side-width:354px;--background-hover:#f0f3fa}.is-theme{--color-primary:rgb(var(--color-primary-control-1));--color-primary-hover:rgb(var(--color-primary-control-1));--button-default-fill:rgb(var(--color-primary-control-1));--button-default-fill-hover:rgb(var(--color-primary-control-2));--button-secondary-fill:rgb(var(--color-primary-control-4));--button-secondary-fill-hover:rgb(var(--color-primary-control-3));--color-primary-gray-1:rgba(var(--color-primary-control-1),.6);--color-primary-gray-2:rgba(var(--color-primary-control-1),.5);--color-primary-gray-3:rgba(var(--color-primary-control-1),.3);--body-border:rgba(var(--color-secondary),.2);--background-main:linear-gradient(-45deg,rgba(var(--color-gradient-background-1),1),rgba(var(--color-gradient-background-2),1));--background-front:linear-gradient(rgba(var(--color-gradient-foreground-1),var(--default-opacity-1)),rgba(var(--color-gradient-foreground-2),var(--default-opacity-2)));--browser-background-current:rgba(var(--color-gradient-foreground-1),var(--default-opacity-1));--browser-background:rgba(var(--color-search),.4);--tab-text:rgba(var(--color-primary-text),.7);--tab-text-current:rgb(var(--color-primary-text));--tab-text-hover:rgb(var(--color-primary-text));--tab-more:rgba(var(--color-secondary),.2);--tab-more-hover:rgba(var(--color-secondary),.3);--tab-more-checked:rgba(var(--color-search),.4);--color-icon-oparate:rgba(var(--color-primary-text),.8);--background-icon-oparate:rgba(var(--color-primary-theme),.3);--search-background:rgba(var(--color-search),.4);--search-icon:rgba(var(--color-primary-text),.7);--search-color:rgb(var(--color-primary-text));--personal-color-text:rgb(var(--color-primary-text));--side-background-item:linear-gradient(270deg,rgba(var(--color-accordion-1),.25),rgba(var(--color-accordion-2),.1));--side-background-item-hover:linear-gradient(90deg,rgba(var(--color-accordion-1),.25),rgba(var(--color-accordion-2),.1));--side-color-main:rgb(var(--color-primary-theme));--side-text-color:rgb(var(--color-primary-text));--side-text-color-1:rgba(var(--color-primary-text),.5);--icon-color:linear-gradient(45deg,rgb(var(--color-primary-gradient-1)),rgb(var(--color-primary-gradient-2)));--side-color-item:rgb(var(--color-secondary));--side-background-title:linear-gradient(90deg,rgba(var(--color-accordion-1),.16),rgba(var(--color-accordion-2),.16),rgba(var(--color-accordion-2),0));--side-background-title-hover:linear-gradient(90deg,rgba(var(--color-accordion-1),.3),rgba(var(--color-accordion-2),.3),rgba(var(--color-accordion-2),0));--side-thumb:rgba(var(--color-secondary),.3);--side-thumb-hover:rgba(var(--color-secondary),.5);--side-background-drag:rgba(var(--color-gradient-background-2),.3);--side-background-number:rgba(var(--color-gradient-foreground-2),.6);--side-background-search:rgb(var(--color-gradient-foreground-2));--side-background-record:rgba(var(--color-secondary),.16);--side-result-text:rgb(var(--color-primary-theme));--tree-background:rgb(var(--color-primary-control-4));--background-hover:rgb(var(--color-primary-control-4));--suspension-progress:rgb(var(--color-primary-control-3));--index-color-nav:rgba(var(--color-primary-text),.6);--index-color-title:rgba(var(--color-primary-text),1);--index-color-sub:rgba(var(--color-primary-text),.5);--index-color-hover:rgba(var(--color-primary-text),.8);--home-background-tab:rgba(var(--color-gradient-foreground-1),var(--default-opacity-1));--home-color-tab:rgba(var(--color-primary-text),.8);--home-color-tab-active:rgb(var(--color-primary-text));--home-arrow:rgba(var(--color-primary-control-1),.5);--home-arrow-hover:rgba(var(--color-primary-control-1),1);--home-thumb:rgba(var(--color-secondary),.3);--home-thumb-hover:rgba(var(--color-secondary),.5);--file-color-border:rgba(var(--color-secondary),.14);--file-background:transparent;--file-background-row:rgba(var(--color-primary-theme),.05);--color-text:rgb(var(--color-primary-text));--file-color-disable:rgba(var(--color-primary-text),.4);--file-link:rgb(var(--color-primary-theme));--file-link-hover:rgb(var(--color-primary-theme));--file-background-checkbox:transparent;--file-background-footer:rgba(var(--color-gradient-foreground-2),var(--default-opacity-2));--file-button-fill:rgba(var(--color-primary-control-1),.8);--file-button-fill-hover:rgb(var(--color-primary-control-1));--chart-background:linear-gradient(90deg,rgba(var(--color-primary-gradient-1),.2),rgba(var(--color-primary-gradient-2),.2));--color-chart-line:rgba(var(--color-primary-theme),.2);--chart-color:rgb(var(--color-primary-theme));--chart-button-fill:rgba(var(--color-primary-control-1),.8);--chart-button-fill-hover:rgb(var(--color-primary-control-1));--chart-text:rgba(var(--color-secondary),.8);--chart-tips:rgba(var(--color-primary-theme),.2);--chart-tips-hover:rgba(var(--color-primary-theme),.4);--chart-line:rgba(var(--color-secondary),.8);--chart-speed:linear-gradient(45deg,rgb(var(--color-primary-theme)),rgb(var(--color-primary-theme)));--comment-line:rgba(var(--color-secondary),.3);--comment-link:rgba(var(--color-secondary),.8);--comment-color:rgb(var(--color-primary-text));--comment-quote-color:rgba(var(--color-secondary),.7);--comment-quote-background:rgba(var(--color-secondary),.08);--comment-color-main:rgba(var(--color-primary-text),.8);--comment-fast:rgba(var(--color-secondary),.8);--comment-placeholder:rgba(var(--color-secondary),.5);--comment-name:rgb(var(--color-secondary));--speed-background:rgba(var(--color-secondary),.1);--speed-color:rgba(var(--color-primary-text),.5);--speed-text:rgb(var(--color-primary-text));--speed-text-secondary:rgba(var(--color-secondary),.6);--speed-primary:rgb(var(--color-primary-text));--speed-null:rgba(var(--color-secondary),.3);--speed-num:rgba(var(--color-primary-theme),1);--attribute-color:rgba(var(--color-primary-text),.8);--attribute-color-hover:rgba(var(--color-primary-text),.8);--attribute-color-1:rgb(var(--color-primary-text));--attribute-color-2:rgba(var(--color-secondary),.4);--attribute-color-3:rgb(var(--color-secondary));--attribute-color-4:rgba(var(--color-secondary),.6);--attribute-background-bar:rgba(var(--color-secondary),.1);--attribute-background-inner:rgba(var(--color-primary-theme),.4);--attribute-background-vip:rgb(var(--color-primary-theme));--promote-background:rgba(var(--color-primary-control-1),.2);--promote-background-hover:rgba(var(--color-primary-control-1),.5);--promote-text:rgb(var(--color-primary-text));--promote-text-sub:rgba(var(--color-primary-theme),.6);--promote-active:rgb(var(--color-primary-theme));--movie-title:rgba(var(--color-secondary),.8);--movie-text:rgba(var(--color-secondary),.5);--movie-text-hover:rgb(var(--color-primary-text));--movie-background:rgba(var(--color-secondary),.08)}", ""])
    }, "7Jn1": function (t, e, i) {
        "use strict";
        var n = i("kE0x"), o = i("garV"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlBadge.vue", e.a = r.exports
    }, "7Ke/": function (t, e, i) {
        "use strict";
        var n = i("FWJD"), o = i("FWBc"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\review\\XlDownloadRecommendActReviewItem.vue", e.a = r.exports
    }, "7Npb": function (t, e, i) {
        "use strict";
        var n = i("yxXY"), o = i("7udH"), r = i.n(o);
        e.a = n.a.connect({
            mapStateToProps: {
                reviewList: function (t, e) {
                    return r()(t.reviews, e.category, "list") || []
                }
            },
            mapDispatchToProps: {
                getReviewList: "reviews/getList",
                getDownloadRecommend: "reviews/getDownloadRecommend"
            },
            mapCommitToProps: {setSelectArg: "reviews/setSelectArg"}
        })
    }, "88FZ": function (t, e, i) {
        "use strict";
        var n = i("02QL");
        t.exports = function (t, e, i, o) {
            var r, a = -1 !== [n.COLORTYPE_COLOR_ALPHA, n.COLORTYPE_ALPHA].indexOf(o.colorType);
            if (o.colorType === o.inputColorType) {
                var s = (r = new ArrayBuffer(2), new DataView(r).setInt16(0, 256, !0), 256 !== new Int16Array(r)[0]);
                if (8 === o.bitDepth || 16 === o.bitDepth && s) return t
            }
            var c = 16 !== o.bitDepth ? t : new Uint16Array(t.buffer), l = 255,
                p = n.COLORTYPE_TO_BPP_MAP[o.inputColorType];
            4 != p || o.inputHasAlpha || (p = 3);
            var u = n.COLORTYPE_TO_BPP_MAP[o.colorType];
            16 === o.bitDepth && (l = 65535, u *= 2);
            var d = new Buffer(e * i * u), h = 0, f = 0, x = o.bgColor || {};

            function m(t, e) {
                var i, r, s, c = l;
                switch (o.inputColorType) {
                    case n.COLORTYPE_COLOR_ALPHA:
                        c = t[e + 3], i = t[e], r = t[e + 1], s = t[e + 2];
                        break;
                    case n.COLORTYPE_COLOR:
                        i = t[e], r = t[e + 1], s = t[e + 2];
                        break;
                    case n.COLORTYPE_ALPHA:
                        c = t[e + 1], r = i = t[e], s = i;
                        break;
                    case n.COLORTYPE_GRAYSCALE:
                        r = i = t[e], s = i;
                        break;
                    default:
                        throw new Error("input color type:" + o.inputColorType + " is not supported at present")
                }
                return o.inputHasAlpha && (a || (c /= l, i = Math.min(Math.max(Math.round((1 - c) * x.red + c * i), 0), l), r = Math.min(Math.max(Math.round((1 - c) * x.green + c * r), 0), l), s = Math.min(Math.max(Math.round((1 - c) * x.blue + c * s), 0), l))), {
                    red: i,
                    green: r,
                    blue: s,
                    alpha: c
                }
            }

            void 0 === x.red && (x.red = l), void 0 === x.green && (x.green = l), void 0 === x.blue && (x.blue = l);
            for (var g = 0; g < i; g++) for (var v = 0; v < e; v++) {
                var b = m(c, h);
                switch (o.colorType) {
                    case n.COLORTYPE_COLOR_ALPHA:
                    case n.COLORTYPE_COLOR:
                        8 === o.bitDepth ? (d[f] = b.red, d[f + 1] = b.green, d[f + 2] = b.blue, a && (d[f + 3] = b.alpha)) : (d.writeUInt16BE(b.red, f), d.writeUInt16BE(b.green, f + 2), d.writeUInt16BE(b.blue, f + 4), a && d.writeUInt16BE(b.alpha, f + 6));
                        break;
                    case n.COLORTYPE_ALPHA:
                    case n.COLORTYPE_GRAYSCALE:
                        var _ = (b.red + b.green + b.blue) / 3;
                        8 === o.bitDepth ? (d[f] = _, a && (d[f + 1] = b.alpha)) : (d.writeUInt16BE(_, f), a && d.writeUInt16BE(b.alpha, f + 2))
                }
                h += p, f += u
            }
            return d
        }
    }, "8Re5": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, "8SKo": function (t, e, i) {
        var n = i("Llrt");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("1c5f6eba", n, !1)
    }, "8Xly": function (t, e, i) {
        t.exports = i.p + "fonts/xlx-icon.67c2338.woff"
    }, "8zvS": function (t, e, i) {
        "use strict";
        e.a = {
            props: {text: {type: String, default: ""}, visible: {type: Boolean, default: !1}},
            methods: {
                handleClick: function (t) {
                    this.$emit("update:visible", !1), this.$emit(t)
                }
            }
        }
    }, "99Ei": function (t, e, i) {
        var n = i("1lFo");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("56fc86f2", n, !1)
    }, "9ff9": function (t, e, i) {
        var n = i("nwDn");
        e.render = function (t, e, i) {
            var o = i, r = e;
            void 0 !== o || e && e.getContext || (o = e, e = void 0), e || (r = function () {
                try {
                    return document.createElement("canvas")
                } catch (t) {
                    throw new Error("You need to specify a canvas element")
                }
            }()), o = n.getOptions(o);
            var a = n.getImageWidth(t.modules.size, o), s = r.getContext("2d"), c = s.createImageData(a, a);
            return n.qrToImageData(c.data, t, o), function (t, e, i) {
                t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = i, e.width = i, e.style.height = i + "px", e.style.width = i + "px"
            }(s, r, a), s.putImageData(c, 0, 0), r
        }, e.renderToDataURL = function (t, i, n) {
            var o = n;
            void 0 !== o || i && i.getContext || (o = i, i = void 0), o || (o = {});
            var r = e.render(t, i, o), a = o.type || "image/png", s = o.rendererOpts || {};
            return r.toDataURL(a, s.quality)
        }
    }, "9jEu": function (t, e, i) {
        var n = i("oLzS").getSymbolSize;
        e.getRowColCoords = function (t) {
            if (1 === t) return [];
            for (var e = Math.floor(t / 7) + 2, i = n(t), o = 145 === i ? 26 : 2 * Math.ceil((i - 13) / (2 * e - 2)), r = [i - 7], a = 1; a < e - 1; a++) r[a] = r[a - 1] - o;
            return r.push(6), r.reverse()
        }, e.getPositions = function (t) {
            for (var i = [], n = e.getRowColCoords(t), o = n.length, r = 0; r < o; r++) for (var a = 0; a < o; a++) 0 === r && 0 === a || 0 === r && a === o - 1 || r === o - 1 && 0 === a || i.push([n[r], n[a]]);
            return i
        }
    }, "9qr+": function (t, e, i) {
        "use strict";
        var n = i("Dd8w"), o = i.n(n), r = i("woOf"), a = i.n(r), s = i("Gu7T"), c = i.n(s), l = i("aXBh"),
            p = (i.n(l), i("Zew7")), u = (i.n(p), i("0X07")), d = (i.n(u), i("sqP0")), h = (i.n(d), i("gL2E")),
            f = (i.n(h), i("hlD9")), x = i("4nU2"), m = i("Z1db"), g = i("oTk5"), v = i("M+3x"), b = i("vqIZ"),
            _ = i("NbXr"), w = i("s0dP"), k = i("e1OG");
        e.a = {
            components: {
                XlCommentList: Object(v.a)(f.a),
                XlCommentInput: Object(x.a)(m.a),
                XlCommentAvartar: g.a,
                XlCommentRank: Object(_.a)(b.a),
                XlQuickReview: Object(k.a)(w.a)
            }, props: {gcid: {type: String, default: ""}, curTask: {type: Object, default: null}}, data: function () {
                return {
                    maxLength: 100,
                    isInputFocused: !1,
                    autoSendCommentText: "",
                    lastCommentTime: (new Date).getTime()
                }
            }, computed: {
                commentPageIndex: function () {
                    return this.$store.state.comments.curPage
                }, reportCommonData: function () {
                    return {
                        gcid: this.gcid,
                        taskid: this.curTask.taskID,
                        filename: this.curTask.name,
                        pannel: this.pannel
                    }
                }, pannel: function () {
                    return this.$store.state.pannel
                }, comments: function () {
                    if (!0 === this.$sget(this.curTask, "isFromVest") && this.gcid) return [];
                    if (this.gcid) {
                        var t = this.$store.state, e = t.comments.resources[this.gcid],
                            i = [].concat(c()((this.$sget(e, "hot") || []).map(function (e) {
                                return a()({}, t.comments.all[e], {type: "hot"})
                            })), c()((this.$sget(e, "new") || []).map(function (e) {
                                return t.comments.all[e]
                            })));
                        return i
                    }
                }
            }, watch: {
                "curTask.taskID": function () {
                    this.isInputFocused = !1
                }
            }, methods: {
                report: function (t) {
                    var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).cid;
                    this.$stat("download_detail", "dltab_detail_comment_click", o()({}, this.reportCommonData, {
                        button: t,
                        cid: e
                    }))
                }, setCurPage: function (t) {
                    this.$store.commit("comments/setCurPage", t)
                }, startComment: function () {
                    this.isInputFocused = (new Date).getTime()
                }, sendQuickReview: function (t) {
                    this.autoSendCommentText = t, this.$stat("download_detail", "dltab_detail_quickcomment_click", o()({}, this.reportCommonData, {comments: t}))
                }, updateComment: function () {
                    var t = this;
                    this.$raven.debug("updateComment"), setTimeout(function () {
                        t.lastCommentTime = (new Date).getTime()
                    }, 2e3)
                }, handleQuickCommentShow: function (t) {
                    this.$stat("download_detail", "dltab_detail_quickcomment_show", o()({}, this.reportCommonData, {comments: t.join("|")}))
                }, sendXlpasswordShow: function (t, e) {
                    var i = this.$sget(t, "length"), n = /#X.+#/i;
                    if (i > 0) for (var o = i - 1; o >= 0; o--) if ("string" == typeof t[o].comment && n.test(t[o].comment)) {
                        this.$stat("download_detail", "dltab_detail_comment_xlpassword_show", {
                            is_copyright_source: 704 === this.$sget(this.curTask, "errCode") ? 1 : 0,
                            is_login: 0 !== parseInt(e) ? 1 : 0
                        });
                        break
                    }
                }
            }
        }
    }, "9ry8": function (t, e, i) {
        "use strict";

        function n(t) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return t ? "?" + e.join("&") : ""
        }

        function o(t) {
            try {
                return null == document.cookie.match(new RegExp("(^" + t + "| " + t + ")=([^;]*)")) ? "" : RegExp.$2
            } catch (t) {
                throw new Error(t)
            }
        }

        function r(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent("on" + e, function (e) {
                i.call(t, e)
            })
        }

        i.d(e, "a", function () {
            return c
        });
        var a = {
            getModulesConfig: function () {
                return function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.type = (t.type || "GET").toUpperCase(), t.dataType = t.dataType || "json";
                    var e = n(t.data), i = new window.XMLHttpRequest;
                    return new Promise(function (n, o) {
                        i.onreadystatechange = function () {
                            var e = i.status;
                            if (4 === i.readyState) return e >= 200 && e < 300 ? (t.success && t.success(i.responseText), n(JSON.parse(i.responseText))) : (t.fail && t.fail(e), o(e))
                        }, "GET" === t.type ? (i.open("GET", t.url + e, !0), i.send(null)) : "POST" === t.type && (i.open("POST", t.url, !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(e))
                    })
                }({url: "http://static-xl9-ssl.xunlei.com/json/modules.json", type: "get", dataType: "json"})
            }, isAuth: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = {};
                t.userid && (e = {
                    "auth.deviceid": t.deviceid,
                    "auth.sessionid": t.sessionid || o("sessionid"),
                    "auth.userid": t.userid || o("userid"),
                    "auth.usernewno": t.usernewno || o("usernewno"),
                    "auth.usrname": t.username || o("usrname"),
                    "auth.usernick": t.usernick || o("usernick"),
                    "auth.appid": t.appid || "165",
                    authType: "phone",
                    "auth.clientVersion": t.clientVersion || o("XL_CLIENT_VERION")
                });
                var i = {authType: "phone", "auth.deviceid": o("deviceid") || window.localStorage.getItem("deviceid")};
                return function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise(function (e, i) {
                        if (t.callback = t.callback || "callback", !t.url) return i(new Error("url is necessary"));
                        var o = "jsonp" + (new Date).getTime(), r = document.getElementsByTagName("head")[0];
                        t.data[t.callback] = o;
                        var a = n(t.data), s = document.createElement("script");
                        r.appendChild(s), s.onerror = function (t) {
                            return r.removeChild(s), delete window[o], i(new Error("创建script标签失败"))
                        }, window[o] = function (i) {
                            return r.removeChild(s), t.time && clearTimeout(s.timer), delete window[o], t.success && t.success(i), e(i)
                        }, s.src = t.url + a, t.time && (s.timer = setTimeout(function () {
                            delete window[o], i(new Error("timeout"))
                        }, t.time))
                    })
                }({
                    url: "https://xluser-ssl.xunlei.com/certification/v1/isauth",
                    dataType: "jsonp",
                    time: 5e3,
                    data: e = Object.assign({}, i, e)
                })
            }
        }, s = 1;

        function c(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = "https://pc.xunlei.com/auth";
            return t && (i += /\?/.test(i) ? "&entrypage=" + t : "?entrypage=" + t), new Promise(function (t, n) {
                (function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return o("sessionid") || t.sessionid ? a.getModulesConfig().then(function (e) {
                        return !!e.real_name.enable && a.isAuth(t)
                    }).then(function (t) {
                        if ("boolean" == typeof t) return !1;
                        if ("ISAUTH" === t.result || "NOAUTH" === t.result) return "NOAUTH" === t.result;
                        throw new Error(JSON.stringify(t))
                    }) : Promise.reject(new Error("not login"))
                })(e).then(function (o) {
                    if (!o) return t();
                    !function (t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if ("function" == typeof t) try {
                            var n = document.createElement("iframe");
                            n.src = e || "https://pc.xunlei.com/auth", n.setAttribute("id", "authIframe"), n.setAttribute("frameborder", 0), n.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: 0; z-index:999;", document.body.appendChild(n), r(n, "load", function (t) {
                                n.contentWindow.postMessage(JSON.stringify(i), "https://pc.xunlei.com")
                            }), r(window, "message", function (e) {
                                try {
                                    var i = JSON.parse(e.data);
                                    "auth" === i.from && "close" === i.event && (n.style.display = "none", t(null, i.code))
                                } catch (t) {
                                }
                            })
                        } catch (e) {
                            t(e)
                        }
                    }(function (e, i) {
                        if (e) return n(new Error("version too low"));
                        i === s ? t() : n(new Error("auth error"))
                    }, i, e)
                }).catch(n)
            })
        }
    }, AJOv: function (t, e, i) {
        "use strict";
        var n = i("R8rZ"), o = i("yEba"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\MovieReviewList.vue", e.a = r.exports
    }, AV9n: function (t, e, i) {
        var n = i("agAf");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("39d81ab0", n, !1)
    }, AWJJ: function (t, e, i) {
        "use strict";
        t.exports = function (t, e, i) {
            var n = t + e - i, o = Math.abs(n - t), r = Math.abs(n - e), a = Math.abs(n - i);
            return o <= r && o <= a ? t : r <= a ? e : i
        }
    }, AtIQ: function (t, e, i) {
        "use strict";
        var n = i("/5sW"), o = function (t) {
            n.default.config.silent || console.warn(t)
        };
        e.a = {
            name: "intersect", abstract: !0, props: {
                threshold: {
                    type: Array, required: !1, default: function () {
                        return [.2]
                    }
                }, root: {
                    type: HTMLElement, required: !1, default: function () {
                        return null
                    }
                }, rootMargin: {
                    type: String, required: !1, default: function () {
                        return "0px 0px 0px 0px"
                    }
                }
            }, created: function () {
                var t = this;
                this.observer = new IntersectionObserver(function (e) {
                    e[0].isIntersecting ? t.$emit("enter", [e[0]]) : t.$emit("leave", [e[0]]), t.$emit("change", [e[0]])
                }, {threshold: this.threshold, root: this.root, rootMargin: this.rootMargin})
            }, mounted: function () {
                var t = this;
                this.$nextTick(function () {
                    if (t.$slots.default && t.$slots.default.length > 1) o("[VueIntersect] You may only wrap one element in a <intersect> component."); else if (!t.$slots.default || t.$slots.default.length < 1) return void o("[VueIntersect] You must have one child inside a <intersect> component.");
                    t.observer.observe(t.$slots.default[0].elm)
                })
            }, destroyed: function () {
                this.observer.disconnect()
            }, render: function () {
                return this.$slots.default ? this.$slots.default[0] : null
            }
        }
    }, BENk: function (t, e, i) {
        "use strict";
        var n = i("dnlk"), o = i("c0Ma"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\review\\MovieReviewItem.vue", e.a = r.exports
    }, "BIq+": function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), r = i("exGp"), a = i.n(r), s = i("Gu7T"), c = i.n(s), l = i("eLLv"),
            p = i("OnMG");
        e.a = {
            components: {XlIcon: p.a}, data: function () {
                return {show: !1, defaultIcon: i("5X0l")}
            }, computed: {
                icons: function () {
                    var t = [].concat(c()(this.$store.state.home.navConfig));
                    return this.isBlock && t.forEach(function (e, i) {
                        "movie_home" === e.buttonId && "feature" === e.class && t.splice(i, 1)
                    }), t
                }, isBlock: function () {
                    return !("isBlock" in this.$store.state.home) || this.$store.state.home.isBlock
                }
            }, methods: {
                imgError: function (t) {
                    t.target.src = this.defaultIcon
                }, clickNav: function () {
                    var t = a()(o.a.mark(function t(e) {
                        var i, n, r;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (i = this.icons[e], n = i.shouldLogin, this.reportNavClick(e, i.buttonId), t.t0 = n, !t.t0) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 7, this.$account.isLogined();
                                case 7:
                                    t.t0 = !t.sent;
                                case 8:
                                    if (!t.t0) {
                                        t.next = 13;
                                        break
                                    }
                                    return r = "other", "offline_home" === i.buttonId && (r = "offline_space"), t.next = 13, this.$account.login(r);
                                case 13:
                                    Object(l.a)(i.url, i.buttonId);
                                case 14:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), reportNavClick: function (t, e) {
                    this.$stat("download_detail", "dltab_startup_navigation_click", {buttonid: e, rn: t + 1})
                }, linkReport: function () {
                    var t = a()(o.a.mark(function t() {
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.$account.isLogined();
                                case 2:
                                    if (t.sent) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 5, this.$account.login("report");
                                case 5:
                                    Object(l.a)("http://pc.xunlei.com/pages/#/report", "report");
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }()
            }
        }
    }, BQ5y: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("li", {
                staticClass: "xlx-comment-list__item",
                class: {"is-hot": "hot" === t.type}
            }, [i("a", {
                staticClass: "xlx-comment__image",
                attrs: {href: t.getUserLink(t.comment.uid, t.entryPage, t.entryHead), target: "_blank"},
                on: {
                    click: function (e) {
                        t.$emit("headClick", {cid: t.comment.cid})
                    }
                }
            }, [i("XLUserHeadCard", {
                attrs: {
                    uid: t.user.uid,
                    direction: "topStart",
                    position: "comment"
                }
            })], 1), i("div", {staticClass: "xlx-comment-list__content"}, [i("div", {staticClass: "xlx-comment-list__header"}, [i("xl-vip", {
                attrs: {userid: t.comment.uid},
                nativeOn: {
                    click: function (e) {
                        t.$emit("clickHeadVip")
                    }
                },
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [i("a", {
                            staticClass: "xlx-comment-list__user-name",
                            class: {"is-vip": e.isVip},
                            attrs: {href: t.getUserLink(t.comment.uid, t.entryPage, t.entryName), target: "_blank"},
                            on: {
                                click: function (e) {
                                    t.$emit("nameClick", {cid: t.comment.cid})
                                }
                            }
                        }, [t._v("\n            " + t._s(t.$sget(t.user, "nick_name")) + "\n          ")])]
                    }
                }])
            }), t.speed > 1048576 ? i("span", {
                staticClass: "xlx-comment-list__speed",
                class: {"is-fast": t.speed > 4194304},
                attrs: {title: "平均速度"}
            }, [t._v("\n        " + t._s(t.comment.downLoadSpeed) + "\n      ")]) : t._e()], 1), i("div", {staticClass: "xlx-comment-list__body"}, [i("p", {
                staticClass: "xlx-comment-list__text",
                domProps: {innerHTML: t._s(t.replaceEmoji(t.comment.comment))},
                on: {click: t.triggerReply}
            }), t.comment.replys && t.comment.replys.length ? i("div", {staticClass: "xlx-comment-list__quote"}, [t.isReplyDeleted ? [i("span", {staticClass: "xlx-comment-list__quote-text"}, [t._v("评论已删除")])] : [i("i", {staticClass: "xlx-icon-quote"}), i("span", {staticClass: "xlx-comment-list__quote-name"}, [t._v(t._s(t.replyUser.nick_name || t.replyUser.user))]), i("span", [t._v("：")]), i("span", {
                staticClass: "xlx-comment-list__quote-text",
                domProps: {innerHTML: t._s(t.replaceEmoji(t.comment.replys[0].content))}
            })]], 2) : t._e()]), i("div", {staticClass: "xlx-comment-list__footer"}, [i("div", {staticClass: "xlx-comment-list__wrapper"}, [i("div", {staticClass: "xlx-comment-list__information"}, [i("span", {staticClass: "xlx-comment-list__time"}, [t._v(t._s(t.getTime(t.comment.time)))])]), i("div", {staticClass: "xlx-comment-list__operate"}, [String(t.comment.uid) === String(t.curUser.userId) ? i("a", {
                staticClass: "xlx-comment-list__delete",
                attrs: {href: "javascript:;", title: "删除"},
                on: {click: t.handleDeleteClick}
            }, [i("i", {staticClass: "xlx-icon-delete-comment"})]) : t._e(), t._e(), i("a", {
                staticClass: "xlx-comment-list__comment",
                class: t.showReply === t.comment.cid ? "is-active" : "",
                attrs: {href: "javascript:;", title: "评论"},
                on: {
                    click: function (e) {
                        t.clickReply(t.comment.cid)
                    }
                }
            }, [i("i", {staticClass: "xlx-icon-comment"})]), i("xl-praise", {
                staticClass: "xlx-comment-list__praise",
                attrs: {cid: t.comment.cid, id: t.tid, "praised-class": "is-active", "animation-class": "is-animation"},
                on: {
                    praise: function (e) {
                        t.$emit("likecomment", {cid: t.comment.cid})
                    }
                },
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [i("i", {staticClass: "xlx-icon-praise"}), i("span", {staticClass: "xlx-comment-list__num"}, [t._v("\n                " + t._s(e.praiseNum) + "\n              ")])]
                    }
                }])
            })], 1)]), i("XlCommentInput", {
                class: t.showReply === t.comment.cid ? "open" : "",
                attrs: {
                    show: t.showReply === t.comment.cid,
                    comment: t.comment,
                    "user-nick": t.$sget(t.getUser(t.comment.uid), "nick_name"),
                    tid: t.tid,
                    "max-length": t.maxLength,
                    focus: t.focus
                },
                on: {
                    keyupctrlentry: function (e) {
                        t.$emit("keyupctrlentry", arguments[0])
                    }, sendReply: function (e) {
                        t.sendReply(t.comment)
                    }, finish: function (e) {
                        t.$emit("update:showReply", 0), t.$emit("finish")
                    }, "update:focus": function (e) {
                        t.focus = e
                    }
                }
            })], 1)])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, BrXJ: function (t, e, i) {
        "use strict";
        var n = i("vsCm"), o = i("VzI3"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\task\\XlPropertyItem.vue", e.a = r.exports
    }, CBtw: function (t, e, i) {
        "use strict";
        var n = i("yDtN"), o = (i.n(n), i("/8Fg")), r = i("s+fl"), a = i("BrXJ");
        e.a = {
            components: {XlPropertyItem: a.a},
            filters: {
                duration: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = Math.floor(t / 3600), i = Math.floor((t - 3600 * e) / 60), n = t - 3600 * e - 60 * i;
                    return Object(r.a)(e, 2) + ":" + Object(r.a)(i, 2) + ":" + Object(r.a)(n, 2)
                }
            },
            props: {
                curTask: {type: Object, required: !0},
                operate: {type: Function, required: !0},
                setTask: {type: Function, required: !0}
            },
            data: function () {
                return {noteEditing: !1, noteDraft: "", copyTipText: "复制"}
            },
            computed: {
                fileSize: function () {
                    return this.$sget(this.curTask, "size")
                }, savePath: function () {
                    return this.$sget(this.curTask, "savePath")
                }, note: {
                    set: function (t) {
                        this.noteDraft = t
                    }, get: function () {
                        return this.noteEditing ? this.noteDraft : this.$sget(this.curTask, "note")
                    }
                }, shouldShowMd5: function () {
                    return ["8", "10"].includes(this.$sget(this.curTask, "status")) || "20" === this.$sget(this.curTask, "status") && 100 === parseInt(this.$sget(this.curTask, "progress"))
                }
            },
            watch: {
                "curTask.taskID": {
                    handler: function (t) {
                        this.getMd5(t)
                    }, immediate: !0
                }, "curTask.status": {
                    handler: function (t) {
                        this.getMd5(this.$sget(this.curTask, "taskID"))
                    }, immediate: !0
                }
            },
            methods: {
                copyInfoId: function () {
                    var t = this;
                    this.copyToClipboard(this.$sget(this.curTask, "infoId")), this.copyTipText = "复制成功", setTimeout(function () {
                        return t.copyTipText = "复制"
                    }, 1e3)
                }, openSavePath: function () {
                    Object(o.b)("ShellOpen", this.savePath)
                }, getMd5: function (t) {
                    var e = this;
                    this.shouldShowMd5 && !this.curTask.md5 && Object(o.b)("GetFileMd5", this.savePath + "\\" + this.$sget(this.curTask, "name")).then(function (i) {
                        e.setTask({taskID: t, taskInfo: {md5: i}})
                    })
                }, copyToClipboard: function (t) {
                    if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData("Text", t);
                    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                        var e = document.createElement("textarea");
                        e.textContent = t, e.style.position = "fixed", document.body.appendChild(e), e.select();
                        try {
                            return document.execCommand("copy")
                        } catch (t) {
                            return !1
                        } finally {
                            document.body.removeChild(e)
                        }
                    }
                }
            }
        }
    }, CGIU: function (t, e, i) {
        "use strict";
        var n = i("//Fk"), o = i.n(n), r = i("Rhsk");
        e.a = {
            data: function () {
                return {comment: "", focus: !1, isSending: !1, keyBoardTimer: 0}
            }, computed: {
                avartar: function () {
                    return this.$sget(this.$store.state.users.all, this.curUser.userId, "portrait_url")
                }, curUser: function () {
                    return this.$store.state.users.curUser
                }, isLogin: function () {
                    return "0" !== this.curUser.userId
                }
            }, methods: {
                getUserLink: r.e, handleAvatarClick: function () {
                    this.isLogin || this.login(), this.$emit("headClick")
                }, login: function () {
                    return new o.a(function (t, e) {
                        Object(r.j)(function (e, i) {
                            t(!e)
                        })
                    })
                }
            }
        }
    }, CSz0: function (t, e, i) {
        "use strict";
        var n = i("wGE2"), o = i("AWJJ");

        function r(t, e, i) {
            var n = t * e;
            return 8 !== i && (n = Math.ceil(n / (8 / i))), n
        }

        var a = t.exports = function (t, e) {
            var i = t.width, o = t.height, a = t.interlace, s = t.bpp, c = t.depth;
            if (this.read = e.read, this.write = e.write, this.complete = e.complete, this._imageIndex = 0, this._images = [], a) for (var l = n.getImagePasses(i, o), p = 0; p < l.length; p++) this._images.push({
                byteWidth: r(l[p].width, s, c),
                height: l[p].height,
                lineIndex: 0
            }); else this._images.push({byteWidth: r(i, s, c), height: o, lineIndex: 0});
            this._xComparison = 8 === c ? s : 16 === c ? 2 * s : 1
        };
        a.prototype.start = function () {
            this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this))
        }, a.prototype._unFilterType1 = function (t, e, i) {
            for (var n = this._xComparison, o = n - 1, r = 0; r < i; r++) {
                var a = t[1 + r], s = r > o ? e[r - n] : 0;
                e[r] = a + s
            }
        }, a.prototype._unFilterType2 = function (t, e, i) {
            for (var n = this._lastLine, o = 0; o < i; o++) {
                var r = t[1 + o], a = n ? n[o] : 0;
                e[o] = r + a
            }
        }, a.prototype._unFilterType3 = function (t, e, i) {
            for (var n = this._xComparison, o = n - 1, r = this._lastLine, a = 0; a < i; a++) {
                var s = t[1 + a], c = r ? r[a] : 0, l = a > o ? e[a - n] : 0, p = Math.floor((l + c) / 2);
                e[a] = s + p
            }
        }, a.prototype._unFilterType4 = function (t, e, i) {
            for (var n = this._xComparison, r = n - 1, a = this._lastLine, s = 0; s < i; s++) {
                var c = t[1 + s], l = a ? a[s] : 0, p = s > r ? e[s - n] : 0, u = s > r && a ? a[s - n] : 0,
                    d = o(p, l, u);
                e[s] = c + d
            }
        }, a.prototype._reverseFilterLine = function (t) {
            var e, i = t[0], n = this._images[this._imageIndex], o = n.byteWidth;
            if (0 === i) e = t.slice(1, o + 1); else switch (e = new Buffer(o), i) {
                case 1:
                    this._unFilterType1(t, e, o);
                    break;
                case 2:
                    this._unFilterType2(t, e, o);
                    break;
                case 3:
                    this._unFilterType3(t, e, o);
                    break;
                case 4:
                    this._unFilterType4(t, e, o);
                    break;
                default:
                    throw new Error("Unrecognised filter type - " + i)
            }
            this.write(e), n.lineIndex++, n.lineIndex >= n.height ? (this._lastLine = null, this._imageIndex++, n = this._images[this._imageIndex]) : this._lastLine = e, n ? this.read(n.byteWidth + 1, this._reverseFilterLine.bind(this)) : (this._lastLine = null, this.complete())
        }
    }, DEuz: function (t, e) {
        function i() {
            this.buffer = [], this.length = 0
        }

        i.prototype = {
            get: function (t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
            }, put: function (t, e) {
                for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
            }, getLengthInBits: function () {
                return this.length
            }, putBit: function (t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
            }
        }, t.exports = i
    }, DUGm: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("XlTaskChart", {
                attrs: {
                    "dom-ready": !t.domReadyAsync || t.domReady,
                    "cur-task": t.curTask,
                    operate: t.operate,
                    "skin-info": t.skinInfo,
                    "speed-curve-skin-info": t.speedCurveSkinInfo
                }, on: {
                    openHelpTab: function (e) {
                        t.$emit("openHelpTab")
                    }, sendDetailCurveClick: t.reportClick
                }
            })
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, Dsid: function (t, e) {
        var i = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == i.call(t)
        }
    }, EQpe: function (t, e, i) {
        "use strict";
        var n = i("8zvS"), o = i("1Z8a"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlConfirm.vue", e.a = r.exports
    }, EZKe: function (t, e, i) {
        "use strict";
        e.a = {
            data: function () {
                return {deg: 0}
            }, computed: {
                rotateStyle: function () {
                    return {transform: "rotate(" + this.deg + "deg)"}
                }
            }
        }
    }, FKCV: function (t, e, i) {
        "use strict";
        var n = i("BIq+"), o = i("lfQx"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlHeader.vue", e.a = r.exports
    }, FWBc: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("a", {
                directives: [{
                    name: "see", rawName: "v-see", value: function () {
                        return t.$emit("see", t.actData.title)
                    }, expression: "() => $emit('see', actData.title)"
                }], staticClass: "xlx-promote__item", attrs: {href: t.url, target: "_blank"}, on: {
                    click: function (e) {
                        t.$emit("click")
                    }
                }
            }, [i("div", {staticClass: "xlx-promote__content"}, [i("span", {
                staticClass: "xlx-promote__picture",
                attrs: {target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click")
                    }
                }
            }, [i("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.imgObj,
                    expression: "imgObj"
                }]
            })]), i("div", {staticClass: "xlx-promote__detail"}, [i("p", {staticClass: "xlx-promote__text"}, [t._v(t._s(t.actData.title) + "\n      ")]), i("span", {staticClass: "xlx-promote__tag"}, [t._v("活动")])]), i("span", {staticClass: "xlx-promote__link"})])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, FWJD: function (t, e, i) {
        "use strict";
        e.a = {
            props: {
                actData: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {
                url: function () {
                    return this.actData.url
                }, imgUrl: function () {
                    return this.actData.imgUrl
                }, imgObj: function () {
                    var t = i("QXBO");
                    return {src: this.imgUrl, loading: t, error: t}
                }
            }
        }
    }, FjP8: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("9qr+"), o = i("lOZi"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "pages\\comment.vue", e.default = r.exports
    }, FlE6: function (t, e, i) {
        var n = i("GGVN");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("7cd0ef52", n, !1)
    }, FwNw: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".chart-box{overflow:hidden;width:100%}", ""])
    }, GAsr: function (t, e, i) {
        "use strict";
        var n = i("T/qI"), o = i("Npk4"), r = !1;
        var a = function (t) {
            r || (i("PwdC"), i("fr4K"))
        }, s = i("VU/8")(n.a, o.a, !1, a, null, null);
        s.options.__file = "components\\TaskChart.vue", e.a = s.exports
    }, GGVN: function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, ".xlx-face-emoji ul{display:flex;flex-wrap:wrap;height:140px;overflow-y:auto;margin:0 auto}.xlx-face-emoji ul::-webkit-scrollbar{width:4px}.xlx-face-emoji ul::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px}.xlx-face-emoji ul li{cursor:pointer;width:24px;height:24px;padding:2px}.xlx-face-emoji ul li:hover{background-color:#ececec}.face-icon-emoji{vertical-align:-6px}.face-icon-emoji,.ico-face{width:24px;height:24px;background:url(" + n(i("+9BZ")) + ") -999em no-repeat;display:inline-block;background-image:-webkit-image-set(url(" + n(i("+9BZ")) + ") 1x,url(" + n(i("1wyJ")) + ") 2x)}.emoji-1F604{background-position:-72px -72px}.emoji-1F60A{background-position:-120px -72px}.emoji-1F603{background-position:-168px -72px}.emoji-263A{background-position:-216px -72px}.emoji-1F609{background-position:-264px -72px}.emoji-1F60D{background-position:-312px -72px}.emoji-1F618{background-position:-360px -72px}.emoji-1F61A{background-position:-408px -72px}.emoji-1F633{background-position:-456px -72px}.emoji-1F60C{background-position:-504px -72px}.emoji-1F601{background-position:-72px -120px}.emoji-1F61C{background-position:-120px -120px}.emoji-1F61D{background-position:-168px -120px}.emoji-1F612{background-position:-216px -120px}.emoji-1F60F{background-position:-264px -120px}.emoji-1F613{background-position:-312px -120px}.emoji-1F614{background-position:-360px -120px}.emoji-1F61E{background-position:-408px -120px}.emoji-1F616{background-position:-456px -120px}.emoji-1F622{background-position:-504px -120px}.emoji-1F630{background-position:-72px -168px}.emoji-1F628{background-position:-120px -168px}.emoji-1F623{background-position:-168px -168px}.emoji-1F625{background-position:-216px -168px}.emoji-1F62D{background-position:-264px -168px}.emoji-1F602{background-position:-312px -168px}.emoji-1F632{background-position:-360px -168px}.emoji-1F631{background-position:-408px -168px}.emoji-1F620{background-position:-456px -168px}.emoji-1F621{background-position:-504px -168px}.emoji-1F62A{background-position:-72px -216px}.emoji-1F637{background-position:-120px -216px}.emoji-ue11a{background-position:-168px -216px}.emoji-ue541{background-position:-72px -264px}.emoji-ue738{background-position:-120px -264px}.emoji-ue332{background-position:-168px -264px}.emoji-ue333{background-position:-216px -264px}.emoji-ue30f{background-position:-264px -264px}.emoji-jinggao{background-position:-312px -264px}.emoji-ue252{background-position:-360px -264px}.emoji-hongdeng{background-position:-408px -264px}.emoji-landeng{background-position:-456px -264px}.emoji-ue432{background-position:-504px -264px}.emoji-jgz{background-position:-72px -312px}.emoji-ppx{background-position:-120px -312px}.emoji-lsj{background-position:-168px -312px}.emoji-yyz{background-position:-216px -312px}.emoji-666{background-position:-264px -312px}.emoji-ok{background-position:-312px -312px}.emoji-muzhi{background-position:-360px -312px}.emoji-meitui{background-position:-408px -312px}.emoji-huanggua{background-position:-456px -312px}.emoji-gouyin{background-position:-504px -312px}", ""])
    }, GzfO: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "xlx-speed-list"}, [t._m(0), i("div", {staticClass: "xlx-speed-list__content"}, [t.speedRank.CommentSpeedRanks ? i("ul", [t._l(t.speedRank.CommentSpeedRanks, function (e, n) {
                return i("li", {
                    key: e.cid,
                    staticClass: "xlx-speed-list__item",
                    class: {
                        "is-first": n < t.topLength,
                        "is-myself": t.curUserId === String(e.userId),
                        "is-last": 9 === n && !t.isInRank
                    }
                }, [i("a", {
                    staticClass: "xlx-speed-list__image",
                    class: {"is-first": 0 === n, "is-second": 1 === n, "is-third": 2 === n},
                    attrs: {href: t.getUserLink(e.userId, t.entryPage, t.entryHead), target: "_blank"},
                    on: {
                        click: function (i) {
                            t.$emit("headClick", {cid: e.cid})
                        }
                    }
                }, [i("XLUserHeadCard", {
                    attrs: {
                        uid: String(e.userId),
                        direction: "leftStart",
                        position: "speed"
                    }
                }), n < 3 ? i("span", {staticClass: "xlx-speed-list__rank"}, [i("i", {staticClass: "xlx-icon-crown"}), i("i", {staticClass: "xlx-speed-list__rank-num"}, [t._v(t._s(e.rankValue))])]) : t._e()], 1), i("p", {staticClass: "xlx-speed-list__user-name"}, [t._v("\n          " + t._s(t.curUserId === String(e.userId) ? "我" : e.nikeName) + "\n        ")]), i("div", {staticClass: "xlx-speed-list__infomation"}, [i("p", {staticClass: "xlx-speed-list__speed"}, [t._v("\n            " + t._s(e.speed) + "\n          ")])])])
            }), t.rankLength < t.topLength ? t._l(t.topLength - t.rankLength, function (e) {
                return i("li", {
                    key: e,
                    staticClass: "xlx-speed-list__item is-null"
                }, [i("a", {
                    staticClass: "xlx-speed-list__image",
                    class: {"is-first": 0 === e, "is-second": 1 === e, "is-third": 2 === e},
                    attrs: {target: "_blank"}
                }, [i("span", {staticClass: "xlx-speed-list__rank"}, [i("i", {staticClass: "xlx-icon-crown"}), i("i", {staticClass: "xlx-speed-list__rank-num"}, [t._v(t._s(t.rankLength + e))])])]), i("p", {staticClass: "xlx-speed-list__user-name"}, [t._v("\n            虚位以待\n          ")]), t._m(1, !0)])
            }) : t._e(), !t.isInRank && t.tid ? i("li", {
                staticClass: "xlx-speed-list__item",
                class: {"is-myself": t.speedRank.commented}
            }, [t.speedRank.commented && "0" !== t.curUserId && t.curUserId == String(t.$sget(t.speedRank.userSpeedRank, "userId")) ? [i("a", {staticClass: "xlx-speed-list__image"}, [i("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.avartar,
                    expression: "avartar"
                }], key: t.avartar, attrs: {alt: "头像"}
            })]), i("p", {staticClass: "xlx-speed-list__user-name"}, [t._v("\n            我\n          ")]), i("p", {staticClass: "xlx-speed-list__text"}, [t._v("第" + t._s(t.$sget(t.speedRank.userSpeedRank, "rankValue")) + "名")]), i("div", {staticClass: "xlx-speed-list__infomation"}, [i("p", {staticClass: "xlx-speed-list__speed"}, [t._v("\n              " + t._s(t.$sget(t.speedRank.userSpeedRank, "speed")) + "\n            ")])])] : [i("a", {
                staticClass: "xlx-speed-list__image",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("comment")
                    }
                }
            }, [i("img", {
                directives: [{name: "lazy", rawName: "v-lazy", value: t.avartar, expression: "avartar"}],
                key: t.avartar,
                attrs: {alt: "头像"}
            })]), i("a", {
                staticClass: "xlx-speed-list__link", attrs: {href: "javascript:;"}, on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("comment")
                    }
                }
            }, [t._v("\n            评论参与排名\n          ")])]], 2) : t._e()], 2) : t._e()])])
        };
        n._withStripped = !0;
        var o = {
            render: n, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "xlx-speed-list__header"}, [e("h2", {staticClass: "xlx-speed-list__title"}, [this._v("速度榜")])])
            }, function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "xlx-speed-list__infomation"}, [e("p", {staticClass: "xlx-speed-list__speed"})])
            }]
        };
        e.a = o
    }, "H/UN": function (t, e, i) {
        "use strict";
        t.exports = function (t, e) {
            var i = e.depth, n = e.width, o = e.height, r = e.colorType, a = e.transColor, s = e.palette, c = t;
            return 3 === r ? function (t, e, i, n, o) {
                for (var r = 0, a = 0; a < n; a++) for (var s = 0; s < i; s++) {
                    var c = o[t[r]];
                    if (!c) throw new Error("index " + t[r] + " not in palette");
                    for (var l = 0; l < 4; l++) e[r + l] = c[l];
                    r += 4
                }
            }(t, c, n, o, s) : (a && function (t, e, i, n, o) {
                for (var r = 0, a = 0; a < n; a++) for (var s = 0; s < i; s++) {
                    var c = !1;
                    if (1 === o.length ? o[0] === t[r] && (c = !0) : o[0] === t[r] && o[1] === t[r + 1] && o[2] === t[r + 2] && (c = !0), c) for (var l = 0; l < 4; l++) e[r + l] = 0;
                    r += 4
                }
            }(t, c, n, o, a), 8 !== i && (16 === i && (c = new Buffer(n * o * 4)), function (t, e, i, n, o) {
                for (var r = Math.pow(2, o) - 1, a = 0, s = 0; s < n; s++) for (var c = 0; c < i; c++) {
                    for (var l = 0; l < 4; l++) e[a + l] = Math.floor(255 * t[a + l] / r + .5);
                    a += 4
                }
            }(t, c, n, o, i))), c
        }
    }, H2Fs: function (t, e, i) {
        "use strict";
        var n = i("vNhd"), o = i("J80b"), r = !1;
        var a = function (t) {
            r || i("Okj6")
        }, s = i("VU/8")(n.a, o.a, !1, a, null, null);
        s.options.__file = "components\\task\\XlTaskChart.vue", e.a = s.exports
    }, Izq9: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ':root{--speed-background:#f0f3fa;--speed-color:#7698b7;--speed-text:#1a1a1a;--speed-text-secondary:#a5b4c3;--speed-primary:#69f;--speed-null:#d3e3f0;--speed-num:#fff}.xlx-speed-list{width:192px;--color-primary:var(--speed-primary)}.xlx-speed-list__header{display:flex;justify-content:space-between;height:44px;line-height:44px}.xlx-speed-list__header .xlx-speed-list__title{color:var(--speed-color)}.xlx-speed-list__content .xlx-speed-list__item{position:relative;display:flex;align-items:center;padding:0 6px;height:56px}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__image{position:relative;width:30px;height:30px;border:2px solid transparent;border-radius:50%;box-sizing:border-box}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__image img{position:relative;z-index:2;width:100%;border-radius:50%}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__image:after{position:absolute;left:1px;bottom:-1px;font-size:24px;font-family:xlx-icon!important;content:"\\E649"}.xlx-speed-list__rank{position:absolute;z-index:3;top:-15px;left:2px}.xlx-speed-list__rank .xlx-speed-list__rank-num{position:absolute;top:0;left:0;width:100%;text-align:center;color:#fff;font-size:10px;line-height:20px;font-style:normal}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__image.is-first{color:#ffc24c;border-color:currentColor}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__image.is-second{color:#99bade;border-color:currentColor}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__image.is-third{color:#ffaca1;border-color:currentColor}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__user-name{display:inline-block;max-width:6em;margin-left:8px;color:var(--speed-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__infomation{position:absolute;top:0;right:6px;display:flex;align-items:center;height:100%}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__speed{color:var(--speed-text-secondary)}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__message{position:absolute;top:50%;margin-top:-10px;right:20px;width:20px;height:20px;color:var(--color-primary);display:none}.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__link,.xlx-speed-list__content .xlx-speed-list__item .xlx-speed-list__text{margin-left:8px;color:var(--color-primary)}.xlx-speed-list__content .xlx-speed-list__item:hover{background:var(--speed-background)}.xlx-speed-list__content .xlx-speed-list__item.is-front .xlx-speed-list__speed{color:var(--color-danger)}.xlx-speed-list__content .xlx-speed-list__item.is-last{margin-bottom:30px}.xlx-speed-list__content .xlx-speed-list__item.is-last:before{position:absolute;bottom:-15px;left:13px;width:3px;height:3px;border-radius:50%;background:var(--speed-color);box-shadow:6px 0 0 var(--speed-color),12px 0 0 var(--speed-color);content:""}.xlx-speed-list__content .xlx-speed-list__item.is-myself .xlx-speed-list__user-name{color:var(--color-primary)}.xlx-speed-list__content .xlx-speed-list__item.is-null .xlx-speed-list__image{color:var(--speed-null);border-color:var(--speed-nul)}.xlx-speed-list__content .xlx-speed-list__item.is-null .xlx-speed-list__user-name{color:var(--speed-text-secondary)}.xlx-speed-list__content .xlx-speed-list__item.is-null .xlx-speed-list__rank-num{color:var(--speed-num)}', ""])
    }, J80b: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.curTask ? i("div", {
                staticClass: "chart-box",
                style: {height: "/task-detail" === t.$route.path && "100vh"},
                on: {
                    contextmenu: function (t) {
                        t.preventDefault()
                    }
                }
            }, [i("div", {staticClass: "data-chart"}, [i("div", {staticClass: "file-info"}, [i("div", {staticClass: "file-name"}, [i("span", {class: t._f("icon")([t.curTask.suffix && t.curTask.suffix.toLowerCase(), t.curTask.type])}), i("div", {staticClass: "text-name"}, [t._v("\n          " + t._s(t.curTask.name) + "\n        ")]), t.curTask.actions && t.curTask.actions.includes("subtitleDownload") ? i("a", {
                staticClass: "link",
                attrs: {href: "javascript:;", title: "字幕搜索"},
                on: {
                    click: function (e) {
                        t.operate("subtitleDownload")
                    }
                }
            }, [t._v("字幕搜索")]) : t._e()]), t.curTask.actions && t.curTask.actions.length ? i("div", {staticClass: "file-opt"}, [t._l(t.curTaskActions, function (e) {
                return i("a", {
                    key: e,
                    class: t._f("action-klass")([e, "ico-o-"]),
                    attrs: {href: "javascript:;", title: t._f("action-name")(e)},
                    on: {
                        click: function (i) {
                            t.operate(e)
                        }
                    }
                }, [i("i")])
            }), t.curTask.actions && t.curTask.actions.includes("shouleiDownload") ? i("div", {staticClass: "file-opt__wrap"}, [i("a", {
                staticClass: "ico-o-mobile",
                attrs: {href: "javascript:;", title: "用手机下载"},
                on: {
                    mouseenter: function (e) {
                        t.showQrcode(!0)
                    }, mouseleave: function (e) {
                        t.showQrcode(!1)
                    }
                }
            }), i("div", {
                staticClass: "file-opt__drop",
                style: t.bShowQrcode ? "" : "display:none"
            }, [i("p", [t._v("扫码下载到手机")]), i("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: {loading: t.qrLoading, text: "加载中"},
                    expression: "{ loading: qrLoading, text:'加载中' }"
                }], staticClass: "file-opt__code"
            }, [i("canvas", {attrs: {id: "qrcodecanvas"}})])])]) : t._e()], 2) : t._e()]), i("TaskChart", {
                attrs: {
                    options: t.data,
                    step: 1,
                    "dom-ready": t.domReady
                }, scopedSlots: t._u([{
                    key: "label", fn: function (e) {
                        return e.value >= 0 && t.curTask.averageSpeed > 0 && "5" === t.curTask.status && 100 != t.curTask.progress ? i("div", {
                            staticClass: "data-show",
                            style: t.getDotStyle(e, 7)
                        }, [i("label-item", {
                            attrs: {
                                "label-data": e,
                                "label-width": t.labelWidth,
                                "label-padding": t.labelPadding,
                                "task-id": t.curTask.taskID,
                                "speed-curve-skin-info": t.speedCurveSkinInfo,
                                "task-progress": t.curTask.progress
                            }, on: {
                                sendDetailCurveClick: function (e, i) {
                                    t.$emit("sendDetailCurveClick", e, i)
                                }
                            }
                        })], 1) : t._e()
                    }
                }])
            })], 1), i("div", {staticClass: "data-info"}, [i("div", {staticClass: "data-info-main"}, ["8" !== t.curTask.status && "10" !== t.curTask.status || 0 !== t.$sget(t.curTask, "duration") ? [i("p", [t._v("下载进度 "), i("span", [t._v(t._s(t.curTask.progress) + "%")])]), i("i", {staticClass: "line"}), "5" === t.curTask.status && t.curTask.downloadSize ? i("p", {staticClass: "data-time"}, [t._v(t._s(t.remain))]) : i("p", [t._v("平均速度 "), i("span", {staticClass: "data"}, [t._v(t._s(t._f("file-size")(t.curTask.averageSpeed)) + "/s")])]), i("i", {staticClass: "line"}), "8" === t.curTask.status || "10" === t.curTask.status && t.curTask.maxSpeed ? i("p", [t._v("峰值速度 "), i("span", {staticClass: "data"}, [t._v(t._s(t._f("file-size")(t.fixMaxSpeed(t.curTask.maxSpeed, t.curTask.averageSpeed))) + "/s")])]) : i("p", [t._v("资源数 "), i("span", [t._v(t._s(t.curTask.resourceCount || "-") + " / " + t._s(t.curTask.allResourceCount || "-"))])])] : [t._v("\n        恭喜你，解锁“秒下”成就\n      ")]], 2), t._m(0)]), t.curTask.errMessage ? i("div", {staticClass: "data-note"}, [i("a", {
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        t.$emit("openHelpTab"), t.downloadDetailPost({
                            position: "special",
                            action: "help_tips_entry_click"
                        })
                    }, mouseover: function (e) {
                        t.downloadDetailPost({position: "special", action: "help_tips_entry_hover"})
                    }
                }
            }, [i("span", {staticClass: "ico-d-note"}), t._v(t._s(t.curTask.errMessage))])]) : "5" !== t.curTask.status && t.curTaskPrimaryAction ? i("div", {staticClass: "btn-data-wp"}, ["downloadSelected" !== t.curTask.stopReason || "7" !== t.curTask.status ? i("a", {
                staticClass: "btn-opt",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        t.operate(t.curTaskPrimaryAction, "middle")
                    }
                }
            }, [i("span", {class: t._f("action-klass")([t.curTaskPrimaryAction, "ico-d-"])}), t._v(" " + t._s(t._f("action-name")(t.curTaskPrimaryAction)) + "\n    ")]) : t._e(), "delete" === t.curTaskPrimaryAction ? i("p", {staticClass: "txt-tips"}, [t._v("本地文件已删除")]) : t._e()]) : t._e()]) : i("div", {staticClass: "chart-box"})
        };
        n._withStripped = !0;
        var o = {
            render: n, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "data-info-des"}, [e("p", [e("i", {staticClass: "label-color color-all"}), this._v("总速度")]), e("i", {staticClass: "line"}), e("p", [e("i", {staticClass: "label-color color-vip"}), this._v("会员加速")])])
            }]
        };
        e.a = o
    }, JNyz: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".index-wrap{overflow:hidden}", ""])
    }, Jbmy: function (t, e, i) {
        "use strict";
        var n = i("fZGk"), o = i("BQ5y"), r = !1;
        var a = function (t) {
            r || i("99Ei")
        }, s = i("VU/8")(n.a, o.a, !1, a, "data-v-e742352e", null);
        s.options.__file = "components\\comment\\XlCommentItem.vue", e.a = s.exports
    }, JmXp: function (t, e, i) {
        "use strict";
        var n = i("s5fs"), o = (i.n(n), i("5HHq")), r = i("7Ke/"), a = i("fh5k");
        e.a = {
            components: {XlRecommendReviewItem: Object(a.a)(o.a), XlDownloadRecommendActReviewItem: r.a},
            props: {
                reviewList: {
                    type: Array, default: function () {
                        return []
                    }
                },
                getDownloadRecommend: {type: Function, required: !0},
                getReviewList: {type: Function, required: !0},
                setSelectArg: {type: Function, required: !0},
                category: {type: String, default: ""},
                taskId: {type: [String, Number], default: ""},
                taskName: {type: String, default: ""},
                size: {type: Number, default: 12},
                pageSize: {type: Number, default: 3}
            },
            data: function () {
                return {
                    curPageIndex: 0,
                    total: 0,
                    reportTemp: [],
                    seeCount: 0,
                    actData: {},
                    isShowAct: !1,
                    showCount: 0
                }
            },
            computed: {
                totalPage: function () {
                    return Math.ceil(this.total / this.pageSize)
                }, showAct: function () {
                    return this.isShowAct && 0 === this.curPageIndex
                }
            },
            watch: {
                taskId: {
                    immdiate: !0, handler: function () {
                        var t = this;
                        this.taskId && (this.showCount = this.showCount + 1), this.getActData(), this.fetch().then(function (e) {
                            t.total = e.length
                        })
                    }
                }
            },
            created: function () {
                switch (this.category) {
                    case"download":
                        break;
                    default:
                        this.setSelectArg({sum: 0, pos: -1})
                }
            },
            methods: {
                fetch: function () {
                    switch (this.category) {
                        case"download":
                            return this.fetchDownloadRecommend();
                        default:
                            return this.fetchReview()
                    }
                }, fetchDownloadRecommend: function () {
                    return this.getDownloadRecommend({size: this.size, taskName: this.taskName})
                }, fetchReview: function () {
                    return this.getReviewList({cursor: 0, size: this.size, category: this.category, refresh: !0})
                }, handleItemClick: function (t, e, i, n) {
                    "activity" === n && (e = "other"), this.$emit("recommendItemClick", {
                        block: i,
                        id: t,
                        rn: e,
                        num: this.seeCount,
                        type: n
                    })
                }, seeItem: function (t, e, i, n) {
                    var o = this;
                    this.reportTemp.push({itemInfo: t, block: e, id: i, type: n}), setTimeout(function () {
                        if (o.reportTemp.length) {
                            o.seeCount = o.reportTemp.length;
                            var t = o.reportTemp.reduce(function (t, e) {
                                return t.itemInfo = (t.itemInfo ? t.itemInfo + "|" : "") + e.itemInfo, t.block = t.block, t.id = (t.id ? t.id + "|" : "") + e.id, t.num = o.seeCount, t.type = (t.type ? t.type + "|" : "") + e.type, t
                            }, {});
                            o.$emit("reportRecommendShow", t), o.reportTemp = []
                        }
                    }, 500)
                }, getActData: function () {
                    if (this.isShowAct = !1, [1, 5, 10, 15].includes(this.showCount)) {
                        this.actData = this.$store.state.home.configModules.downloadRecommendAct || {};
                        var t = this.actData.startTime, e = this.actData.endTime;
                        if (t && e) {
                            t = new Date(t).getTime(), e = new Date(e).getTime();
                            var i = (new Date).getTime();
                            i >= t && i <= e && (this.isShowAct = !0)
                        }
                    }
                }
            }
        }
    }, Kc4X: function (t, e, i) {
        t.exports = i.p + "img/spr-main.a047a1a.png"
    }, Ki5d: function (t, e, i) {
        "use strict";
        var n = i("6htx"), o = i("xJzN"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlVip.vue", e.a = r.exports
    }, "L/YN": function (t, e, i) {
        "use strict";
        e.a = function (t) {
            var e = t.userInfo, i = t.appId, n = t.clientVersion;
            return o()({}, e, {appid: i, clientVersion: n})
        };
        var n = i("woOf"), o = i.n(n)
    }, L0TC: function (t, e, i) {
        var n = i("es3O");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("02ba5569", n, !1)
    }, L34J: function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, "@font-face{font-family:xlx-icon;-webkit-font-smoothing:antialiased;src:url(" + n(i("8Xly")) + ') format("truetype")}[class*=" xlx-icon-"],[class^=xlx-icon]{font-family:xlx-icon!important;font-size:16px;font-style:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.xlx-icon-download-play:before{content:"\\E627"}.xlx-icon-lock:before{content:"\\E628"}.xlx-icon-play:before{content:"\\E629"}.xlx-icon-clear:before{content:"\\E62A"}.xlx-icon-pause:before{content:"\\E62B"}.xlx-icon-delete:before{content:"\\E62C"}.xlx-icon-time:before{content:"\\E62D"}.xlx-icon-file:before{content:"\\E62E"}.xlx-icon-restore:before{content:"\\E62F"}.xlx-icon-download:before{content:"\\E630"}.xlx-icon-nav-new:before{content:"\\E64A"}.xlx-icon-nav-file:before{content:"\\E64B"}.xlx-icon-nav-clear:before{content:"\\E64C"}.xlx-icon-nav-rubbish:before{content:"\\E64D"}.xlx-icon-nav-vip:before{content:"\\E64E"}.xlx-icon-nav-lock:before{content:"\\E64F"}.xlx-icon-nav-folder:before{content:"\\E650"}.xlx-icon-nav-restore:before{content:"\\E651"}.xlx-icon-nav-home:before{content:"\\E652"}.xlx-icon-nav-more:before{content:"\\E653"}.xlx-icon-nav-delete:before{content:"\\E654"}.xlx-icon-nav-down:before{content:"\\E655"}.xlx-icon-nav-computer:before{content:"\\E656"}.xlx-icon-nav-pause:before{content:"\\E657"}.xlx-icon-menu:before{content:"\\E68B"}.xlx-icon-close:before{content:"\\E68C"}.xlx-icon-minimize:before{content:"\\E68D"}.xlx-icon-maximize:before{content:"\\E68E"}.xlx-icon-maximize.is-active:before{content:"\\E69C"}.xlx-icon-theme:before{content:"\\E6E4"}.xlx-icon-tips-download:before{content:"\\E616"}.xlx-icon-tips-upload:before{content:"\\E615"}.xlx-icon-crown:before{content:"\\E635"}.xlx-icon-file-hover:before{content:"\\E636"}.xlx-icon-delete-hover:before{content:"\\E637"}.xlx-icon-comment-hover:before{content:"\\E638"}.xlx-icon-message:before{content:"\\E63A"}.xlx-icon-quote{font-size:10px;vertical-align:6px}.xlx-icon-quote:before{content:"\\E63B"}.xlx-icon-file-comment:before{content:"\\E63C"}.xlx-icon-comment:before{content:"\\E63D"}.xlx-icon-send:before{content:"\\E63E"}.xlx-icon-praise:before{content:"\\E63F"}.xlx-icon-top:before{content:"\\E640"}.xlx-icon-praise-done:before{content:"\\E641"}.xlx-icon-face:before{content:"\\E642"}.xlx-icon-delete-comment:before{content:"\\E643"}.xlx-icon-success:before{content:"\\E644"}.xlx-icon-fail:before{content:"\\E645"}.xlx-icon-help:before{content:"\\E646"}.xlx-icon-note:before{content:"\\E647"}.xlx-icon-refresh:before{content:"\\E648"}.is-active .xlx-icon-praise{color:var(--color-primary)}.is-active .xlx-icon-praise:before{content:"\\E641"}.is-active .xlx-icon-comment,.is-active .xlx-icon-delete{color:var(--color-primary)}.is-active .xlx-icon-comment:before{content:"\\E638"}.is-hot .xlx-icon-praise{color:var(--color-danger-1)}.xlx-icon-girl{color:#ff7cb6}.xlx-icon-girl:before{content:"\\E626"}.xlx-icon-boy{color:#69f}.xlx-icon-boy:before{content:"\\E631"}.xlx-icon-dialog-play:before{content:"\\E69E"}.xlx-icon-dialog-open:before{content:"\\E69F"}.xlx-icon-dialog-install:before{content:"\\E6C6"}.xlx-icon-view:before{content:"\\E6E8"}.xlx-icon-resize:before{content:"\\E704"}.xlx-icon-message-bookmarks:before{content:"\\E692"}.xlx-icon-search-bookmarks:before{content:"\\E694"}.xlx-icon-more-bookmarks:before{content:"\\E695"}.xlx-icon-net:before{content:"\\E696";color:#b3b3b3}.xlx-icon-file-bookmarks{color:#ffdf8b}.xlx-icon-file-bookmarks:before{content:"\\E697"}.xlx-icon-fav:before{content:"\\E699"}.xlx-icon-fav.is-active{color:#ff9c1a;opacity:1!important}.xlx-icon-fav.is-active:before{content:"\\E698"}.xlx-icon-new:before{content:"\\E69A"}.xlx-icon-new-file{margin-right:5px}.xlx-icon-new-file:before{content:"\\E69B"}.xlx-icon-unfold:before{content:"\\E69D"}.xlx-icon-browser-chrome,.xlx-icon-browser-ie{display:block;width:35px;height:32px;margin:0 auto 10px;background:url(' + n(i("Xo+z")) + ') no-repeat;background-size:70px auto}.xlx-icon-browser-chrome{background-position:-35px 0}.xlx-icon-chat:before{content:"\\E60E"}.xlx-icon-home:before{content:"\\E701"}.xlx-icon-replace:before{color:#ff9c1a;content:"\\E6C3"}.xlx-icon-skip:before{color:#00b36a;content:"\\E6C4"}.xlx-icon-not-operate:before{color:gray;content:"\\E6C5"}.xlx-icon-deep:before{content:"\\E6E5"}.xlx-icon-light:before{content:"\\E6E6"}.xlx-icon-bulb:before{content:"\\E6FD"}.xlx-icon-help-side:before{content:"\\E6FE"}.xlx-icon-type{display:block;width:32px;height:32px;background:url(' + n(i("RevU")) + ") -560px 0 no-repeat;background-size:1085px auto}.xlx-icon-type-apk{background-position:0 0}.xlx-icon-type-avi{background-position:-35px 0}.xlx-icon-type-bt-link{background-position:-70px 0}.xlx-icon-type-bt-file{background-position:-105px 0}.xlx-icon-type-chm{background-position:-140px 0}.xlx-icon-type-doc{background-position:-175px 0}.xlx-icon-type-exe{background-position:-210px 0}.xlx-icon-type-install{background-position:-245px 0}.xlx-icon-type-flv{background-position:-280px 0}.xlx-icon-type-ipa{background-position:-315px 0}.xlx-icon-type-ipsw{background-position:-350px 0}.xlx-icon-type-iso{background-position:-385px 0}.xlx-icon-type-mkv{background-position:-420px 0}.xlx-icon-type-mov{background-position:-455px 0}.xlx-icon-type-mp4{background-position:-490px 0}.xlx-icon-type-mpg{background-position:-525px 0}.xlx-icon-type-unknown{background-position:-560px 0}.xlx-icon-type-pdf{background-position:-595px 0}.xlx-icon-type-pic{background-position:-630px 0}.xlx-icon-type-ppt{background-position:-665px 0}.xlx-icon-type-rar{background-position:-700px 0}.xlx-icon-type-rm{background-position:-735px 0}.xlx-icon-type-rmvb{background-position:-770px 0}.xlx-icon-type-group{background-position:-805px 0}.xlx-icon-type-txt{background-position:-840px 0}.xlx-icon-type-video{background-position:-875px 0}.xlx-icon-type-link{background-position:-910px 0}.xlx-icon-type-wmv{background-position:-945px 0}.xlx-icon-type-word{background-position:-980px 0}.xlx-icon-type-xls{background-position:-1015px 0}.xlx-icon-type-music{background-position:-1050px 0}.td-tree-node__image-icon .xlx-icon-type{display:block;width:16px;height:16px;background:url(" + n(i("aRd0")) + ") -340px 0 no-repeat;background-image:-webkit-image-set(url(" + n(i("aRd0")) + ") 1x,url(" + n(i("bjtf")) + ") 2x);background-position:-340px 0}.td-tree-node__image-icon .xlx-icon-type-apk{background-position:0 0}.td-tree-node__image-icon .xlx-icon-type-avi{background-position:-20px 0}.td-tree-node__image-icon .xlx-icon-type-bt-file{background-position:-60px 0}.td-tree-node__image-icon .xlx-icon-type-bt-link{background-position:-40px 0}.td-tree-node__image-icon .xlx-icon-type-chm{background-position:-80px 0}.td-tree-node__image-icon .xlx-icon-type-doc{background-position:-100px 0}.td-tree-node__image-icon .xlx-icon-type-exe{background-position:-120px 0}.td-tree-node__image-icon .xlx-icon-type-install{background-position:-140px 0}.td-tree-node__image-icon .xlx-icon-type-flv{background-position:-160px 0}.td-tree-node__image-icon .xlx-icon-type-ipa{background-position:-180px 0}.td-tree-node__image-icon .xlx-icon-type-ipsw{background-position:-200px 0}.td-tree-node__image-icon .xlx-icon-type-iso{background-position:-220px 0}.td-tree-node__image-icon .xlx-icon-type-mkv{background-position:-240px 0}.td-tree-node__image-icon .xlx-icon-type-mov{background-position:-260px 0}.td-tree-node__image-icon .xlx-icon-type-mp4{background-position:-280px 0}.td-tree-node__image-icon .xlx-icon-type-mpg{background-position:-300px 0}.td-tree-node__image-icon .xlx-icon-type-music{background-position:-320px 0}.td-tree-node__image-icon .xlx-icon-type-unknown{background-position:-340px 0}.td-tree-node__image-icon .xlx-icon-type-pdf{background-position:-360px 0}.td-tree-node__image-icon .xlx-icon-type-pic{background-position:-380px 0}.td-tree-node__image-icon .xlx-icon-type-ppt{background-position:-400px 0}.td-tree-node__image-icon .xlx-icon-type-rar{background-position:-420px 0}.td-tree-node__image-icon .xlx-icon-type-rm{background-position:-440px 0}.td-tree-node__image-icon .xlx-icon-type-rmvb{background-position:-460px 0}.td-tree-node__image-icon .xlx-icon-type-group{background-position:-480px 0}.td-tree-node__image-icon .xlx-icon-type-txt{background-position:-500px 0}.td-tree-node__image-icon .xlx-icon-type-video{background-position:-520px 0}.td-tree-node__image-icon .xlx-icon-type-link{background-position:-540px 0}.td-tree-node__image-icon .xlx-icon-type-wmv{background-position:-560px 0}.td-tree-node__image-icon .xlx-icon-type-word{background-position:-580px 0}.td-tree-node__image-icon .xlx-icon-type-xls{background-position:-600px 0}.chart-box .xlx-icon-type,.xlx-suspension .xlx-icon-type{display:block;width:24px;height:24px;margin-right:10px;background:url(" + n(i("iARP")) + ") -780px 0 no-repeat;background-image:-webkit-image-set(url(" + n(i("iARP")) + ") 1x,url(" + n(i("N9/H")) + ") 2x);background-position:-780px 0}.chart-box .xlx-icon-type-apk,.xlx-suspension .xlx-icon-type-apk{background-position:0 0}.chart-box .xlx-icon-type-avi,.xlx-suspension .xlx-icon-type-avi{background-position:-30px 0}.chart-box .xlx-icon-type-bt-file,.xlx-suspension .xlx-icon-type-bt-file{background-position:-60px 0}.chart-box .xlx-icon-type-bt-link,.xlx-suspension .xlx-icon-type-bt-link{background-position:-90px 0}.chart-box .xlx-icon-type-chm,.xlx-suspension .xlx-icon-type-chm{background-position:-120px 0}.chart-box .xlx-icon-type-doc,.xlx-suspension .xlx-icon-type-doc{background-position:-150px 0}.chart-box .xlx-icon-type-exe,.xlx-suspension .xlx-icon-type-exe{background-position:-180px 0}.chart-box .xlx-icon-type-flv,.xlx-suspension .xlx-icon-type-flv{background-position:-210px 0}.chart-box .xlx-icon-type-group,.xlx-suspension .xlx-icon-type-group{background-position:-240px 0}.chart-box .xlx-icon-type-install,.xlx-suspension .xlx-icon-type-install{background-position:-270px 0}.chart-box .xlx-icon-type-ipa,.xlx-suspension .xlx-icon-type-ipa{background-position:-300px 0}.chart-box .xlx-icon-type-ipsw,.xlx-suspension .xlx-icon-type-ipsw{background-position:-330px 0}.chart-box .xlx-icon-type-iso,.xlx-suspension .xlx-icon-type-iso{background-position:-360px 0}.chart-box .xlx-icon-type-link,.xlx-suspension .xlx-icon-type-link{background-position:-390px 0}.chart-box .xlx-icon-type-mkv,.xlx-suspension .xlx-icon-type-mkv{background-position:-420px 0}.chart-box .xlx-icon-type-mov,.xlx-suspension .xlx-icon-type-mov{background-position:-450px 0}.chart-box .xlx-icon-type-mp4,.xlx-suspension .xlx-icon-type-mp4{background-position:-480px 0}.chart-box .xlx-icon-type-mpg,.xlx-suspension .xlx-icon-type-mpg{background-position:-510px 0}.chart-box .xlx-icon-type-music,.xlx-suspension .xlx-icon-type-music{background-position:-540px 0}.chart-box .xlx-icon-type-pdf,.xlx-suspension .xlx-icon-type-pdf{background-position:-570px 0}.chart-box .xlx-icon-type-pic,.xlx-suspension .xlx-icon-type-pic{background-position:-600px 0}.chart-box .xlx-icon-type-ppt,.xlx-suspension .xlx-icon-type-ppt{background-position:-630px 0}.chart-box .xlx-icon-type-rar,.xlx-suspension .xlx-icon-type-rar{background-position:-660px 0}.chart-box .xlx-icon-type-rm,.xlx-suspension .xlx-icon-type-rm{background-position:-690px 0}.chart-box .xlx-icon-type-rmvb,.xlx-suspension .xlx-icon-type-rmvb{background-position:-720px 0}.chart-box .xlx-icon-type-txt,.xlx-suspension .xlx-icon-type-txt{background-position:-750px 0}.chart-box .xlx-icon-type-unknown,.xlx-suspension .xlx-icon-type-unknown{background-position:-780px 0}.chart-box .xlx-icon-type-video,.xlx-suspension .xlx-icon-type-video{background-position:-810px 0}.chart-box .xlx-icon-type-wmv,.xlx-suspension .xlx-icon-type-wmv{background-position:-840px 0}.chart-box .xlx-icon-type-word,.xlx-suspension .xlx-icon-type-word{background-position:-870px 0}.chart-box .xlx-icon-type-xls,.xlx-suspension .xlx-icon-type-xls{background-position:-900px 0}.xlx-icon-type.is-small{display:block;width:24px;height:24px;margin-right:10px;background:url(" + n(i("iARP")) + ") -780px 0 no-repeat;background-image:-webkit-image-set(url(" + n(i("iARP")) + ") 1x,url(" + n(i("N9/H")) + ') 2x);background-position:-780px 0}.xlx-icon-type.is-small.xlx-icon-type-apk{background-position:0 0}.xlx-icon-type.is-small.xlx-icon-type-avi{background-position:-30px 0}.xlx-icon-type.is-small.xlx-icon-type-bt-file{background-position:-60px 0}.xlx-icon-type.is-small.xlx-icon-type-bt-link{background-position:-90px 0}.xlx-icon-type.is-small.xlx-icon-type-chm{background-position:-120px 0}.xlx-icon-type.is-small.xlx-icon-type-doc{background-position:-150px 0}.xlx-icon-type.is-small.xlx-icon-type-exe{background-position:-180px 0}.xlx-icon-type.is-small.xlx-icon-type-flv{background-position:-210px 0}.xlx-icon-type.is-small.xlx-icon-type-group{background-position:-240px 0}.xlx-icon-type.is-small.xlx-icon-type-install{background-position:-270px 0}.xlx-icon-type.is-small.xlx-icon-type-ipa{background-position:-300px 0}.xlx-icon-type.is-small.xlx-icon-type-ipsw{background-position:-330px 0}.xlx-icon-type.is-small.xlx-icon-type-iso{background-position:-360px 0}.xlx-icon-type.is-small.xlx-icon-type-link{background-position:-390px 0}.xlx-icon-type.is-small.xlx-icon-type-mkv{background-position:-420px 0}.xlx-icon-type.is-small.xlx-icon-type-mov{background-position:-450px 0}.xlx-icon-type.is-small.xlx-icon-type-mp4{background-position:-480px 0}.xlx-icon-type.is-small.xlx-icon-type-mpg{background-position:-510px 0}.xlx-icon-type.is-small.xlx-icon-type-music{background-position:-540px 0}.xlx-icon-type.is-small.xlx-icon-type-pdf{background-position:-570px 0}.xlx-icon-type.is-small.xlx-icon-type-pic{background-position:-600px 0}.xlx-icon-type.is-small.xlx-icon-type-ppt{background-position:-630px 0}.xlx-icon-type.is-small.xlx-icon-type-rar{background-position:-660px 0}.xlx-icon-type.is-small.xlx-icon-type-rm{background-position:-690px 0}.xlx-icon-type.is-small.xlx-icon-type-rmvb{background-position:-720px 0}.xlx-icon-type.is-small.xlx-icon-type-txt{background-position:-750px 0}.xlx-icon-type.is-small.xlx-icon-type-unknown{background-position:-780px 0}.xlx-icon-type.is-small.xlx-icon-type-video{background-position:-810px 0}.xlx-icon-type.is-small.xlx-icon-type-wmv{background-position:-840px 0}.xlx-icon-type.is-small.xlx-icon-type-word{background-position:-870px 0}.xlx-icon-type.is-small.xlx-icon-type-xls{background-position:-900px 0}.xlx-icon-next:before{content:"\\E606"}.xlx-icon-eye:before{content:"\\E605"}.is-close .xlx-icon-eye:before{content:"\\E604"}.xlx-icon-play-solid:before{content:"\\E603"}.xlx-icon-prev:before{content:"\\E602"}', ""])
    }, L8yT: function (t, e, i) {
        var n = i("nwDn"), o = {WW: " ", WB: "▄", BB: "█", BW: "▀"};
        e.render = function (t, e, i) {
            var r = t.modules.size, a = t.modules.data, s = n.getOptions(e), c = "",
                l = Array(r + 2 * s.margin + 1).join(o.WW);
            l = Array(s.margin / 2 + 1).join(l + "\n");
            var p, u, d = Array(s.margin + 1).join(o.WW);
            c += l;
            for (var h = 0; h < r; h += 2) {
                c += d;
                for (var f = 0; f < r; f++) {
                    var x = a[h * r + f], m = a[(h + 1) * r + f];
                    c += (u = m, (p = x) && u ? o.BB : p && !u ? o.BW : !p && u ? o.WB : o.WW)
                }
                c += d + "\n"
            }
            return c += l.slice(0, -1), "function" == typeof i && i(null, c), c
        }, e.renderToFile = function (t, n, o, r) {
            void 0 === r && (r = o, o = void 0);
            var a = i("vHs2"), s = e.render(n, o);
            a.writeFile(t, s, r)
        }
    }, "LHx/": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "xlx-face", on: {
                    click: function (t) {
                        t.stopPropagation()
                    }
                }
            }, [i("a", {
                directives: [{name: "popup", rawName: "v-popup:emoji", arg: "emoji"}],
                staticClass: "xlx-face__icon",
                attrs: {href: "javascript:;", title: "表情"}
            }, [i("i", {staticClass: "xlx-icon-face"})]), i("popup", {
                ref: "emoji",
                staticClass: "xlx-face-emoji",
                staticStyle: {position: "fixed", outline: "none"},
                attrs: {trigger: "click", display: t.show, padding: 4, direction: "topEnd", "scroll-show": !1},
                on: {"update:display": t.updateDisplay}
            }, [i("ul", {
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.handleClick(e)
                    }, mouseleave: function (e) {
                        t.show = !1
                    }
                }
            }, [i("li", {attrs: {title: "开心"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F604"})]), i("li", {attrs: {title: "可爱"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F60A"})]), i("li", {attrs: {title: "大笑"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F603"})]), i("li", {attrs: {title: "憨笑"}}, [i("span", {staticClass: "face-icon-emoji emoji-263A"})]), i("li", {attrs: {title: "眨眼"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F609"})]), i("li", {attrs: {title: "色"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F60D"})]), i("li", {attrs: {title: "爱你"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F618"})]), i("li", {attrs: {title: "亲亲"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F61A"})]), i("li", {attrs: {title: "脸红"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F633"})]), i("li", {attrs: {title: "满意"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F60C"})]), i("li", {attrs: {title: "傻笑"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F601"})]), i("li", {attrs: {title: "鬼脸"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F61C"})]), i("li", {attrs: {title: "吐舌"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F61D"})]), i("li", {attrs: {title: "无语"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F612"})]), i("li", {attrs: {title: "得意"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F60F"})]), i("li", {attrs: {title: "汗"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F613"})]), i("li", {attrs: {title: "失望"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F614"})]), i("li", {attrs: {title: "低落"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F61E"})]), i("li", {attrs: {title: "痛苦"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F616"})]), i("li", {attrs: {title: "焦虑"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F622"})]), i("li", {attrs: {title: "担心"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F630"})]), i("li", {attrs: {title: "震惊"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F628"})]), i("li", {attrs: {title: "悔恨"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F623"})]), i("li", {attrs: {title: "鼻涕"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F625"})]), i("li", {attrs: {title: "哭"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F62D"})]), i("li", {attrs: {title: "大哭"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F602"})]), i("li", {attrs: {title: "晕"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F632"})]), i("li", {attrs: {title: "惊恐"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F631"})]), i("li", {attrs: {title: "心烦"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F620"})]), i("li", {attrs: {title: "生气"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F621"})]), i("li", {attrs: {title: "睡觉"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F62A"})]), i("li", {attrs: {title: "口罩"}}, [i("span", {staticClass: "face-icon-emoji emoji-1F637"})])])])], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, Llrt: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ':root{--home-background-tab:hsla(0,0%,100%,.9);--home-color-tab:#1a1a1a;--home-color-tab-active:#1a1a1a;--home-arrow:#a5d1f1;--home-arrow-hover:#8ec5ee;--home-thumb:rgba(0,0,0,.2);--home-thumb-hover:rgba(0,0,0,.3)}body,html{width:100vw;overflow-x:hidden}body::-webkit-scrollbar{width:8px}body::-webkit-scrollbar-thumb{width:8px;background:var(--home-thumb);border-radius:4px}body::-webkit-scrollbar-thumb:hover{background:var(--home-thumb-hover)}.is-scroll{overflow-y:scroll;height:100vh}.xlx-home{min-width:596px}.xlx-home .td-tabs__title{justify-content:center;margin:30px 0 20px;border-bottom:0}.xlx-home .td-tabs__title .td-tabs__item{width:auto;margin:0 15px;color:var(--home-color-tab)}.xlx-home .td-tabs__title .td-tabs__item.is-active{color:var(--home-color-tab-active)}.xlx-home .td-tabs__title.is-fixed{position:fixed;top:0;left:0;z-index:99;width:100%;padding:5px 0;margin:0;background:var(--home-background-tab)}.xlx-home .chart-box{height:35vh;min-height:200px}.xlx-home .xlx-file-list .td-tree-node{width:calc(100vw - 310px)}.xlx-home .td-tabs__content{overflow:visible}.index-wrap{transition:.3s}.xlx-home__content{display:none;margin:0 50px}.xlx-promote{margin-top:20px}.xlx-home__operate{display:flex;justify-content:center;align-items:center;height:40px;cursor:pointer}.xlx-home__operate .xlx-home__operate-arrow{display:flex;position:relative;width:100px;height:2px}.xlx-home__operate .xlx-home__operate-arrow:after,.xlx-home__operate .xlx-home__operate-arrow:before{display:block;width:50px;height:2px;background-color:var(--home-arrow);content:"";transition:.2s}.xlx-home__operate .xlx-home__operate-arrow:before{transform-origin:right center}.xlx-home__operate .xlx-home__operate-arrow:after{transform-origin:left center}.xlx-home__operate:hover .xlx-home__operate-arrow:before{transform:rotate(-15deg)}.xlx-home__operate:hover .xlx-home__operate-arrow:after{transform:rotate(15deg)}.xlx-home-tool{position:fixed;right:0;bottom:20px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.xlx-home-tool>a{display:block;position:relative;width:30px;height:30px;line-height:30px;text-align:center;color:#fff;margin-top:10px;background-color:var(--home-arrow);border-radius:4px;transition:.2s}.xlx-home-tool>a:hover{background:var(--home-arrow-hover)}.xlx-home-tool .xlx-home-main{position:absolute;bottom:80px;right:0}.xlx-home-tool .xlx-home-top:hover{opacity:1}.xlx-home-tool .xlx-home-top:after{position:absolute;top:12px;left:9px;width:10px;height:10px;border:2px solid #fff;border-bottom:0;border-right:0;transform:rotate(45deg);content:""}.xlx-home-tool .xlx-home-top:hover{filter:contrast(1.3) saturate(-1.2)}.xlx-home-tool .xlx-home-help{position:absolute;bottom:40px;right:0;display:flex;justify-content:center;align-items:center;color:#fff}.xlx-home-tool .xlx-home-help span{display:none;white-space:nowrap}.xlx-home-tool .xlx-home-help.is-show,.xlx-home-tool .xlx-home-help:hover{width:180px;height:30px}.xlx-home-tool .xlx-home-help.is-show i,.xlx-home-tool .xlx-home-help:hover i{display:none}.xlx-home-tool .xlx-home-help.is-show span,.xlx-home-tool .xlx-home-help:hover span{display:block}.xlx-home-tool .xlx-home-help.is-show{background:var(--home-arrow-hover)}.xlx-home__content-hd{position:relative}.xlx-preview-large{position:absolute;top:0;left:0;right:0;bottom:0;z-index:10;display:none;background-color:#000;border-radius:5px;overflow:hidden}.xlx-preview-large.is-show{display:block}.xlx-preview-large.is-show .xlx-carousel-wp{transform:scale(1)}.xlx-carousel-wp{overflow:hidden}.xlx-carousel,.xlx-carousel-wp{position:relative;width:100%;height:100%}.xlx-carousel{display:flex;flex-wrap:nowrap;transition:.3s ease;transform:translateZ(0)}.xlx-carousel__item{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:100%;height:100%;text-align:center}.xlx-carousel__item>img{max-width:100%;max-height:100%;object-fit:contain}.xlx-carousel-wp .xlx-preview-info{position:absolute;top:12px;left:14px;padding:0 10px;font-size:11px;color:#fff;line-height:20px;background-color:rgba(0,0,0,.6);border:1px solid hsla(0,0%,100%,.3)}.xlx-carousel-wp .xlx-preview-info>span:first-child{margin-right:10px}.xlx-carousel-wp .xlx-preview-close{position:absolute;top:0;right:0;z-index:1;width:27px;text-align:center;background-color:rgba(255,72,72,.7);transition:.2s}.xlx-carousel-wp .xlx-preview-close .xlx-icon-close{font-size:11px;color:#fff;line-height:27px}.xlx-carousel-wp .xlx-preview-close:hover{background-color:#ff4848}.xlx-carousel-wp .xlx-preview-close:active{background-color:rgba(255,72,72,.5)}.xlx-carousel-wp .xlx-carousel__next,.xlx-carousel-wp .xlx-carousel__prev{position:absolute;top:0;bottom:0;width:60px;opacity:.8}.xlx-carousel-wp .xlx-carousel__next:hover,.xlx-carousel-wp .xlx-carousel__prev:hover{opacity:1}.xlx-carousel-wp .xlx-carousel__next.is-disabled,.xlx-carousel-wp .xlx-carousel__prev.is-disabled{opacity:.3;cursor:default}.xlx-carousel-wp .xlx-carousel__next{right:0;background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.xlx-carousel-wp .xlx-carousel__prev{left:0;background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.xlx-carousel-wp .xlx-icon-next,.xlx-carousel-wp .xlx-icon-prev{position:absolute;top:50%;left:50%;font-size:26px;color:#fff;text-align:center;transform:translate(-50%,-50%)}.xlx-carousel-wp .xlx-carousel__play{position:absolute;top:50%;left:50%;width:50px;height:50px;text-align:center;background-color:rgba(0,0,0,.6);border:2px solid rgba(80,80,80,.6);border-radius:100%;transform:translate(-50%,-50%);box-sizing:border-box}.xlx-carousel-wp .xlx-carousel__play:hover{border-color:#fff}.xlx-carousel-wp .xlx-carousel__play .xlx-icon-play-solid{color:#fff;line-height:46px;text-align:center;margin-left:4px}.xlx-preview-small{position:absolute;bottom:0;right:20px;z-index:2;display:flex;align-items:center;height:40px;line-height:40px}.xlx-preview-small .xlx-button-eye{margin-right:10px;color:var(--color-primary)}.xlx-preview-small .xlx-button-eye:hover{color:var(--color-primary-hover)}.xlx-preview-small .xlx-preview__picture{position:relative;width:58px;height:34px;margin-top:-10px;background-color:var(--color-primary)}.xlx-preview-small .xlx-preview__picture>img{width:100%;height:100%;object-fit:cover}.xlx-preview-small .xlx-preview__picture .xlx-preview__picture-num{position:absolute;top:-5px;right:-3px;width:16px;font-size:10px;line-height:16px;color:#fff;text-align:center;background-color:#ff4848;border-radius:100%;overflow:hidden}.xlx-preview-small .xlx-preview__txt{display:none;padding:0 10px;margin-top:-2px;font-size:12px;color:#fff;line-height:20px;border-radius:2px;background:var(--color-primary)}.xlx-preview-small .xlx-preview__txt:hover{background-color:var(--color-primary-hover)}.xlx-preview-small.is-close .xlx-preview__picture{display:none}.xlx-preview-small.is-close .xlx-preview__txt{display:block}.xlx-preview-small.is-hide{display:none}', ""])
    }, LstC: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("VtBu"), o = i("S2BL"), r = !1;
        var a = function (t) {
            r || i("Q9b0")
        }, s = i("VU/8")(n.a, o.a, !1, a, null, null);
        s.options.__file = "pages\\home.vue", e.default = s.exports
    }, "M+3x": function (t, e, i) {
        "use strict";
        var n = i("woOf"), o = i.n(n), r = i("Gu7T"), a = i.n(r), s = i("yxXY"), c = i("7udH"), l = i.n(c);
        e.a = s.a.connect({
            mapStateToProps: {
                comments: function (t, e) {
                    var i = t.comments.resources[e.tid], n = [].concat(a()((l()(i, "hot") || []).map(function (e) {
                        return o()({}, t.comments.all[e], {type: "hot"})
                    })), a()((l()(i, "new") || []).map(function (e) {
                        return t.comments.all[e]
                    })));
                    return n
                }, rcount: function (t, e) {
                    var i = t.comments.resources[e.tid];
                    return l()(e, "curTask", "isFromVest") ? 0 : l()(i, "rcount") || 0
                }, userId: function (t, e) {
                    return t.users.curUser.userId
                }
            }, mapDispatchToProps: {getComments: "comments/get"}
        })
    }, Mo24: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".xlx-promote{position:relative}.xlx-promote-list{display:none}.xlx-promote-list.is-show{display:flex}", ""])
    }, Mx08: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ":root{--attribute-color-1:#333;--attribute-color-2:#999;--attribute-color-3:gray;--attribute-color-4:#ccc;--attribute-color:#69f;--attribute-color-hover:#4b87ff;--color-primary:var(--attribute-color);--color-primary-hover:var(--attribute-color-hover)}.is-theme .xlx-attribute .td-progress-bar__outer{background:var(--attribute-background-bar)!important}.is-theme .xlx-attribute .td-progress-bar__inner{background:var(--attribute-background-inner)!important}.is-theme .xlx-attribute .xlx-attribute-progress__item--vip .td-progress-bar__inner{background:var(--attribute-background-vip)!important}.xlx-attribute{--color-primary:var(--attribute-color)}.xlx-attribute .td-input__inner{color:var(--attribute-color-1);background:transparent;border-color:var(--attribute-color-4)}.xlx-attribute-progress{position:relative;width:100%;margin-bottom:25px}.xlx-attribute-progress__item{display:flex;align-items:center;margin-bottom:10px;white-space:nowrap;user-select:none}.xlx-attribute-progress__item--address .td-progress-bar__outer{background:rgba(140,168,207,.1)}.xlx-attribute-progress__item--address .td-progress-bar__inner{background:#d5dfed}.xlx-attribute-progress__item--mirror .td-progress-bar__outer{background:rgba(87,189,246,.1)}.xlx-attribute-progress__item--mirror .td-progress-bar__inner{background:#a7dfff}.xlx-attribute-progress__item--p2p .td-progress-bar__outer{background:rgba(88,158,246,.1)}.xlx-attribute-progress__item--p2p .td-progress-bar__inner{background:#8fc1ff}.xlx-attribute-progress__item--local .td-progress-bar__outer{background:rgba(143,140,255,.1)}.xlx-attribute-progress__item--local .td-progress-bar__inner{background:#b1afff}.xlx-attribute-progress__item--vip .td-progress-bar__outer{background:hsla(10,97%,70%,.1)}.xlx-attribute-progress__item--vip .td-progress-bar__inner{background:#ffb4a4}.xlx-attribute-progress__title{width:60px;margin-right:12px;font-size:12px;color:var(--attribute-color-1);cursor:default}.xlx-attribute-progress__size{width:57px;margin-left:14px;font-size:12px;color:var(--attribute-color-1);text-align:right;cursor:default}.xlx-attribute-progress__detail{display:flex;justify-content:flex-end;color:var(--color-primary)}.xlx-attribute-progress .td-progress,.xlx-attribute-progress .td-progress-bar{flex:1;height:12px}.xlx-attribute-progress .td-progress__text{width:35px;text-align:right;font-size:12px;color:var(--attribute-color-2);cursor:default}.xlx-attribute-info__item{display:flex;align-items:center;margin-bottom:10px}.xlx-attribute-info__item a{font-size:12px;color:var(--color-primary);white-space:nowrap}.xlx-attribute-info__item a:hover{color:var(--color-primary-hover)}.xlx-attribute-info__title{width:60px;margin-right:12px;font-size:12px;color:var(--attribute-color-3);user-select:none;cursor:default}.xlx-attribute-info__text{max-width:calc(100% - 114px);font-size:12px;color:var(--attribute-color-1);word-break:break-all}.xlx-attribute-info__path,.xlx-attribute-info__text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xlx-attribute-info__path{max-width:calc(100% - 90px)}.xlx-attribute-info__act{width:24px;margin-left:10px}.xlx-attribute-info .td-input{flex:1}.xlx-attribute-info .td-input .td-input__inner{width:100%}", ""])
    }, "N/qc": function (t, e, i) {
        "use strict";
        var n = i("02QL"), o = i("eVFE"), r = i("88FZ"), a = i("q4O7"), s = i("epkN"), c = t.exports = function (t) {
            if (this._options = t, t.deflateChunkSize = t.deflateChunkSize || 32768, t.deflateLevel = null != t.deflateLevel ? t.deflateLevel : 9, t.deflateStrategy = null != t.deflateStrategy ? t.deflateStrategy : 3, t.inputHasAlpha = null == t.inputHasAlpha || t.inputHasAlpha, t.deflateFactory = t.deflateFactory || s.createDeflate, t.bitDepth = t.bitDepth || 8, t.colorType = "number" == typeof t.colorType ? t.colorType : n.COLORTYPE_COLOR_ALPHA, t.inputColorType = "number" == typeof t.inputColorType ? t.inputColorType : n.COLORTYPE_COLOR_ALPHA, -1 === [n.COLORTYPE_GRAYSCALE, n.COLORTYPE_COLOR, n.COLORTYPE_COLOR_ALPHA, n.COLORTYPE_ALPHA].indexOf(t.colorType)) throw new Error("option color type:" + t.colorType + " is not supported at present");
            if (-1 === [n.COLORTYPE_GRAYSCALE, n.COLORTYPE_COLOR, n.COLORTYPE_COLOR_ALPHA, n.COLORTYPE_ALPHA].indexOf(t.inputColorType)) throw new Error("option input color type:" + t.inputColorType + " is not supported at present");
            if (8 !== t.bitDepth && 16 !== t.bitDepth) throw new Error("option bit depth:" + t.bitDepth + " is not supported at present")
        };
        c.prototype.getDeflateOptions = function () {
            return {
                chunkSize: this._options.deflateChunkSize,
                level: this._options.deflateLevel,
                strategy: this._options.deflateStrategy
            }
        }, c.prototype.createDeflate = function () {
            return this._options.deflateFactory(this.getDeflateOptions())
        }, c.prototype.filterData = function (t, e, i) {
            var o = r(t, e, i, this._options), s = n.COLORTYPE_TO_BPP_MAP[this._options.colorType];
            return a(o, e, i, this._options, s)
        }, c.prototype._packChunk = function (t, e) {
            var i = e ? e.length : 0, n = new Buffer(i + 12);
            return n.writeUInt32BE(i, 0), n.writeUInt32BE(t, 4), e && e.copy(n, 8), n.writeInt32BE(o.crc32(n.slice(4, n.length - 4)), n.length - 4), n
        }, c.prototype.packGAMA = function (t) {
            var e = new Buffer(4);
            return e.writeUInt32BE(Math.floor(t * n.GAMMA_DIVISION), 0), this._packChunk(n.TYPE_gAMA, e)
        }, c.prototype.packIHDR = function (t, e) {
            var i = new Buffer(13);
            return i.writeUInt32BE(t, 0), i.writeUInt32BE(e, 4), i[8] = this._options.bitDepth, i[9] = this._options.colorType, i[10] = 0, i[11] = 0, i[12] = 0, this._packChunk(n.TYPE_IHDR, i)
        }, c.prototype.packIDAT = function (t) {
            return this._packChunk(n.TYPE_IDAT, t)
        }, c.prototype.packIEND = function () {
            return this._packChunk(n.TYPE_IEND, null)
        }
    }, "N9/H": function (t, e, i) {
        t.exports = i.p + "img/xlx-icon-24x24-2x.9be1c37.png"
    }, NAp3: function (t, e, i) {
        "use strict";
        var n = i("5Ogs"), o = i("xfDa"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\comment\\XLUserHeadCard.vue", e.a = r.exports
    }, NQag: function (t, e, i) {
        "use strict";

        function n(t, e) {
            for (var i = t.toString().length; i < e;) t = "0" + t, i++;
            return t
        }

        e.a = function (t) {
            var e = new Date(t);
            return "Invalid Date" === e.toString() ? "" : e.getFullYear() + "-" + n(e.getMonth() + 1, 2) + "-" + n(e.getDate(), 2)
        }
    }, NV47: function (t, e, i) {
        var n = i("yZj6");
        if (n.alloc) var o = n.alloc(512), r = n.alloc(256); else o = new n(512), r = new n(256);
        !function () {
            for (var t = 1, e = 0; e < 255; e++) o[e] = t, r[t] = e, 256 & (t <<= 1) && (t ^= 285);
            for (e = 255; e < 512; e++) o[e] = o[e - 255]
        }(), e.log = function (t) {
            if (t < 1) throw new Error("log(" + t + ")");
            return r[t]
        }, e.exp = function (t) {
            return o[t]
        }, e.mul = function (t, e) {
            return 0 === t || 0 === e ? 0 : o[r[t] + r[e]]
        }
    }, "NY/E": function (t, e) {
        var i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (i = i.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        e.KANJI = new RegExp(i, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(n, "g"), e.NUMERIC = new RegExp("[0-9]+", "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
        var o = new RegExp("^" + i + "$"), r = new RegExp("^[0-9]+$"), a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        e.testKanji = function (t) {
            return o.test(t)
        }, e.testNumeric = function (t) {
            return r.test(t)
        }, e.testAlphanumeric = function (t) {
            return a.test(t)
        }
    }, NbXr: function (t, e, i) {
        "use strict";
        var n = i("woOf"), o = i.n(n), r = i("yxXY"), a = i("7udH"), s = i.n(a);
        e.a = r.a.connect({
            mapStateToProps: {
                speedRank: function (t, e) {
                    var i = void 0;
                    return e.tid ? (i = t.comments.speedRank[e.tid], s()(e.curTask, "isFromVest") && (i = o()({}, i, {
                        CommentSpeedRanks: [],
                        commented: !1
                    })), i) : {}
                }, curUserId: function (t, e) {
                    return t.users.curUser.userId
                }
            }, mapDispatchToProps: {getSpeedRank: "comments/getSpeedRank"}
        })
    }, Npk4: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {ref: "canvasBox", staticClass: "canvas-box"}, [i("canvas", {
                ref: "dataChart",
                staticClass: "canvas-data",
                style: "transform: scale(" + 1 / t.scale + ");"
            }), t._l(t.labels, function (e) {
                return e ? t._t("label", null, {
                    value: e.value,
                    x: e.x,
                    y: e.y,
                    canvasWidth: t.width / t.scale,
                    canvasHeight: t.height / t.scale
                }) : t._e()
            })], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, Nvml: function (t, e, i) {
        var n = i("VRjc");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("8ddd09f0", n, !1)
    }, "Nw/w": function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, ":root{--chart-color:#69f;--color-chart-line:hsla(0,0%,100%,.5);--chart-button-fill:rgba(102,153,255,.8);--chart-button-fill-hover:var(--chart-color);--chart-background:linear-gradient(90deg,#dff6fe,#e8e9fe);--chart-text:#718bb1;--chart-tips:hsla(0,0%,100%,.9);--chart-line:#c6d3ee;--chart-speed:linear-gradient(45deg,#46adff,#a687ff)}.is-theme-speed{--chart-bg:url(" + n(i("XRcH")) + ')}.is-theme-speed .xlx-data-ani .xlx-data-type:after,.is-theme-speed .xlx-data-bomb:after{background-image:var(--chart-bg)}.ico-d-delete,.ico-d-down,.ico-d-note,.ico-d-open,.ico-d-play,.ico-d-redo,.ico-o-delete,.ico-o-down,.ico-o-mobile,.ico-o-more,.ico-o-open,.ico-o-pause,.ico-o-play,.ico-o-playnow,.ico-o-redo,.ico-o-share,.ico-o-share i{font-family:xlx-icon!important;color:var(--color-primary);font-size:22px;line-height:1}.chart-box{--color-primary:var(--chart-color);height:100%;background:var(--chart-background);border-radius:5px;position:relative}.chart-box:hover .data-info-main{display:none}.chart-box:hover .data-info-des{display:flex}.chart-box:hover .ico-o-share i{animation:share1 1s both}@keyframes share1{0%{width:0}to{width:22px}}.data-chart{position:relative;z-index:1;height:100%}.file-info{margin:0 15px;position:relative}.file-info .file-name{display:flex;align-items:center;height:46px;flex:1;width:100%}.file-info .text-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all;max-width:calc(100% - 180px);font-size:13px;color:var(--chart-text)}.file-info .ico-file{margin:0 8px 0 0}.file-info .file-opt{position:absolute;right:0;top:0;display:flex;height:46px;align-items:center;justify-content:flex-end;z-index:2}.file-info .btn-delete{border:solid 1px var(--chart-color);border-radius:12px;width:52px;height:22px;line-height:22px;text-align:center;color:var(--chart-color)}.file-info .btn-delete:hover{background:var(--chart-color);color:#fff}.file-info .link{color:var(--chart-color);margin-left:3px}.ico-o-more,.ico-o-open{width:20px;height:20px;display:inline-block;margin:0 0 0 15px}.ico-o-open:before{content:"\\E6CD"}.ico-o-open:hover:before{content:"\\E6CF"}.ico-o-more:before{content:"\\E6D1"}.ico-o-more:hover:before{content:"\\E6D0"}.ico-o-delete,.ico-o-down,.ico-o-mobile,.ico-o-pause,.ico-o-play,.ico-o-playnow,.ico-o-redo{width:22px;height:22px;display:inline-block;margin:0 0 0 12px}.ico-o-playnow:before{content:"\\E6D3"}.ico-o-playnow:hover:before{content:"\\E6D2"}.ico-o-pause:before{content:"\\E6CC"}.ico-o-pause:hover:before{content:"\\E6CB"}.ico-o-play:before{content:"\\E6DE"}.ico-o-play:hover:before{content:"\\E6DF"}.ico-o-down:before{content:"\\E6DC"}.ico-o-down:hover:before{content:"\\E6DD"}.ico-o-delete:before{content:"\\E6D9"}.ico-o-delete:hover:before{content:"\\E6DA"}.ico-o-redo:before{content:"\\E6D5"}.ico-o-redo:hover:before{content:"\\E6D8"}.ico-o-share{position:relative;display:inline-block;margin:0 0 0 12px}.ico-o-share:before{content:"\\E6CA"}.ico-o-share:hover:before{content:"\\E6CE"}.ico-o-share i{position:absolute;width:22px;height:22px;bottom:0;left:0;overflow:hidden;font-style:normal}.ico-o-share i:before{content:"\\E6C9"}.ico-o-share:hover i{opacity:0}.ico-o-mobile:before{content:"\\E71D"}.ico-o-mobile:hover:before{content:"\\E71C"}.file-opt__wrap{position:relative}.file-opt__wrap .file-opt__drop{position:absolute;top:30px;right:-10px;width:120px;height:120px;background:#fff;border-radius:4px;box-shadow:0 0 20px rgba(0,0,0,.2)}.file-opt__wrap .file-opt__drop:before{position:absolute;top:-4px;right:16px;width:8px;height:8px;background:#fff;transform:rotate(45deg);content:""}.file-opt__wrap .file-opt__drop:after{position:absolute;top:-9px;left:0;width:100%;height:9px;content:""}.file-opt__wrap .file-opt__drop p{margin:8px 0 3px;text-align:center}.file-opt__wrap .file-opt__code{width:80px;height:80px;margin:0 auto}.file-opt__wrap .file-opt__code img{width:100%;height:100%}.canvas-box{position:relative;z-index:1;height:calc(100% - 90px)}.canvas-box:after{top:0;left:0;width:100%;height:100%;position:absolute;content:"";background:repeating-linear-gradient(transparent,transparent 24px,var(--color-chart-line) 0,var(--color-chart-line) 25px)}.canvas-box .canvas-data{position:relative;z-index:2}.canvas-box.finish{opacity:.3}.data-show{position:absolute;color:var(--color-primary);z-index:3}.data-show .point{position:relative;z-index:6;width:7px;height:7px;margin:-4px 0 0 -5px;border-radius:50%;border:solid 1px var(--color-primary);background:#fff}.data-show .text-data{position:absolute;left:13px;bottom:-7px;width:72px;height:24px;line-height:24px;text-align:center;color:var(--color-primary);background:var(--chart-tips);border-radius:3px;font-size:12px;box-shadow:0 2px 5px rgba(0,0,0,.1)}.data-show .text-data.is-left{left:auto;right:13px}.data-show .text-data.is-left-ani{left:auto;right:35px}.data-show .text-data.is-right-ani{left:24px}.data-vip{color:#ff4848}.data-vip .point{border-color:#fe4e4f}.data-info{position:absolute;width:100%;bottom:0;line-height:40px;color:var(--chart-text);font-size:13px}.data-info .line{display:block;width:1px;height:11px;background:var(--chart-line);margin:0 12px}.data-info .data-time{font-size:24px}.data-info .data-info-des,.data-info .data-info-main{display:flex;justify-content:center;align-items:center}.data-info .data-info-des{display:none}.data-info .label-color{width:12px;height:12px;display:inline-block;margin:0 5px 0 0;vertical-align:-1px}.data-info .color-all{background:var(--chart-speed)}.data-info .color-vip{background-image:linear-gradient(45deg,#bda3fe,#fc75db)}.data-tips{width:70px;height:24px;line-height:24px;border-radius:3px;color:var(--color-primary);background:var(--chart-tips);box-shadow:0 0 8px 0 rgba(147,151,178,.22);z-index:4}.data-note,.data-tips{position:absolute;text-align:center}.data-note{z-index:3;left:0;top:50%;display:flex;justify-content:center;align-items:center;width:100%;height:40px;margin:-20px 0 0;line-height:40px;font-size:15px}.data-note a{padding:0 20px;color:#ff8a00;background-color:hsla(0,0%,100%,.8);border-radius:20px}.ico-d-note{display:inline-block;vertical-align:middle;margin:0 5px 2px 0;color:currentColor;font-size:16px}.ico-d-note:before{content:"\\E6EB"}.ico-d-delete,.ico-d-down,.ico-d-open,.ico-d-play,.ico-d-redo{color:#fff;font-size:22px;line-height:1;margin:0 5px 0 0}.ico-d-open:before{content:"\\E6CD"}.ico-d-play:before{content:"\\E6D4"}.ico-d-delete:before{content:"\\E6DB"}.ico-d-redo:before{content:"\\E6D6"}.ico-d-down:before{content:"\\E6D7"}.btn-data-wp{position:absolute;width:100%;height:calc(100% - 96px);top:48px}.btn-data-wp,.btn-data-wp .btn-opt{display:flex;justify-content:center;align-items:center}.btn-data-wp .btn-opt{height:34px;border-radius:16px;background-color:var(--chart-button-fill);font-size:15px;color:#fff;z-index:3;padding:0 24px;transition:.2s}.btn-data-wp .btn-opt:hover{background:var(--chart-button-fill-hover)}.btn-data-wp .txt-tips{top:50%;margin-top:25px;width:100%;text-align:center;color:#ff8a00;position:absolute;font-size:13px;z-index:3}.xlx-data-ani{position:absolute;margin:-34px 0 0 -34px;z-index:5;width:60px;height:60px;transform:scale(.7)}.xlx-data-ani .xlx-data-type{display:block;width:100%;height:100%;z-index:3;overflow:hidden;cursor:pointer}.xlx-data-ani .xlx-data-type:after{display:block;width:1500px;height:100%;background-image:url(' + n(i("XRcH")) + ');background-position:-1442px 0;pointer-events:none;content:""}.xlx-data-ani .xlx-data-type.is-speed1:after{background-position:0 -180px;animation:speed 1s .3s steps(25) infinite}.xlx-data-ani .xlx-data-type.is-speed2:after{background-position:0 -120px;animation:speed 1s .3s steps(25) infinite}.xlx-data-ani .xlx-data-type.is-speed4:after{background-position:0 -60px;animation:speed 1s .3s steps(25) infinite}.xlx-data-ani .xlx-data-type.is-speed3:after{background-position:0 -240px;animation:speed 1s .3s steps(25) infinite}.xlx-data-ani .xlx-data-type.is-scale{animation:scale 1s both}.xlx-data-ani .xlx-data-type.is-stopped:after{animation:none!important}@keyframes speed{0%{transform:translateZ(0)}to{transform:translate3d(-1500px,0,0)}}@keyframes scale{0%,to{transform:scale(1)}50%{transform:scale(0)}}.xlx-data-ani .xlx-data-bomb{position:absolute;left:0;top:0;display:none;width:100%;height:100%;overflow:hidden}.xlx-data-ani .xlx-data-bomb:after{display:block;width:1500px;height:100%;background-image:url(' + n(i("XRcH")) + ');background-position:0 0;animation:speed 1s steps(25);content:""}', ""])
    }, OMI9: function (t, e, i) {
        var n = i("lkks");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("559ed03b", n, !1)
    }, Okj6: function (t, e, i) {
        var n = i("FwNw");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("4e9f0374", n, !1)
    }, OnMG: function (t, e, i) {
        "use strict";
        var n = i("wGAy"), o = i("YnST"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlIcon.vue", e.a = r.exports
    }, "P/2W": function (t, e, i) {
        "use strict";
        var n = i("hAPF"), o = i("haX0"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlFileList.vue", e.a = r.exports
    }, "PDP/": function (t, e, i) {
        "use strict";
        var n = i("/8Fg"), o = i("eLLv");
        e.a = {
            props: {
                labelData: {type: Object, default: null},
                labelWidth: {type: Number, default: 0},
                labelPadding: {type: Number, default: 0},
                taskId: {type: [Number, String], default: 0},
                speedCurveSkinInfo: {type: Object, default: null},
                taskProgress: {type: Number, default: 0}
            }, data: function () {
                return {
                    dotWidth: 7,
                    speedPart: [0, 102400, 1048576, 4194304],
                    bombType: "none",
                    dataTypeClass: "",
                    preSpeedPart: 0,
                    hadSpeedKeep: !1,
                    timer: null,
                    pointDisplay: "",
                    iconWidth: 23,
                    showLowSpeedHint: !1,
                    lowSpeedTimer: null,
                    popLeftAtProgress: 70
                }
            }, computed: {
                enableAnimation: function () {
                    return "0" !== this.$sget(this.$store.state, "config", "GenericSettings", "AnimationLevel")
                }, textDataClass: function () {
                    var t = this.showLowSpeedHint ? "text-data data-tips clickable " : "text-data data-tips ",
                        e = this.getDotLeft(this.labelData, this.dotWidth / 2),
                        i = this.dotWidth + this.labelWidth + this.labelPadding;
                    return e < this.$sget(this.labelData, "canvasWidth") - i ? this.currentSpeedPart > 0 ? t + "is-left-ani" : t + "is-left" : t + "is-right-ani"
                }, LabelStyle: function () {
                    var t = this.getDotLeft(this.labelData, this.dotWidth / 2),
                        e = this.dotWidth + this.labelWidth + this.labelPadding;
                    return {left: (t < this.$sget(this.labelData, "canvasWidth") - e ? this.dotWidth : -(this.labelPadding + this.labelWidth)) + "px"}
                }, iconStyle: function () {
                    return this.iconIsCanClick ? "cursor: pointer" : ""
                }, currentSpeedPart: function () {
                    var t = parseInt(this.$sget(this.labelData, "value") || 0), e = this.getSpeedPart(t);
                    return 0 !== e && 0 !== this.preSpeedPart || null !== this.lowSpeedTimer || this.getLowSpeedKeepTime(e), this.PointLeft < this.iconWidth / 2 ? this.setPointState() : e !== this.preSpeedPart && null === this.timer && this.getSpeedKeepTime(e), e
                }, PointLeft: function () {
                    return this.getDotLeft(this.labelData, this.dotWidth / 2)
                }, textVal: function () {
                    return this.$sget(this.labelData, "value") || ""
                }, iconIsCanClick: function () {
                    return !this.$sget(this.speedCurveSkinInfo, "is_vip_try") && 1 !== this.$sget(this.speedCurveSkinInfo, "id")
                }
            }, watch: {
                taskId: {
                    immediate: !0, handler: function (t) {
                        this.showLowSpeedHint = !1, this.updateSpeedPart({immediately: !0})
                    }
                }, hadSpeedKeep: "updateSpeedPart"
            }, methods: {
                getDotLeft: function (t, e) {
                    return this.$sget(t, "x") > e ? this.$sget(t, "x") > this.$sget(t, "canvasWidth") - e ? this.$sget(t, "canvasWidth") - e - e : this.$sget(t, "x") - e : 0
                }, getSpeedPart: function (t) {
                    if (0 === t) return 0;
                    if (t > this.speedPart[this.speedPart.length - 1]) return this.speedPart.length;
                    for (var e = this.speedPart.length - 1; e > 0; e--) if (this.speedPart[e - 1] < t && t <= this.speedPart[e]) return e
                }, getSpeedKeepTime: function (t) {
                    var e = this;
                    this.timer = setTimeout(function (t) {
                        e.preSpeedPart = t, e.timer = null, e.currentSpeedPart === t && (e.hadSpeedKeep = !e.hadSpeedKeep)
                    }, 2100, t)
                }, getLowSpeedKeepTime: function (t) {
                    var e = this;
                    this.lowSpeedTimer = setTimeout(function (t) {
                        e.lowSpeedTimer = null, 0 === e.currentSpeedPart ? (e.showLowSpeedHint = !0, e.$stat("download_detail", "help_tips_entry_show", {position: "dl_speed"})) : e.showLowSpeedHint = !1
                    }, 2e3)
                }, updateSpeedPart: function (t) {
                    var e = t.immediately, i = void 0 !== e && e;
                    if (0 !== this.currentSpeedPart) {
                        if (this.PointLeft > this.iconWidth / 2 && (this.dotWidth = 28), !(this.PointLeft < this.iconWidth / 2)) {
                            switch (this.currentSpeedPart) {
                                case 1:
                                    this.dataTypeClass = "is-speed1", this.pointDisplay = "none";
                                    break;
                                case 2:
                                    this.dataTypeClass = "is-speed2", this.pointDisplay = "none";
                                    break;
                                case 3:
                                    this.dataTypeClass = "is-speed3", this.pointDisplay = "none";
                                    break;
                                case 4:
                                    this.dataTypeClass = "is-speed4", this.pointDisplay = "none"
                            }
                            i || this.animationShow()
                        }
                    } else this.setPointState()
                }, setPointState: function () {
                    this.dataTypeClass = "", this.pointDisplay = "block", this.preSpeedPart = 0, this.dotWidth = 7
                }, animationShow: function () {
                    var t = this;
                    this.bombType = "block", this.dataTypeClass += "is-scale", setTimeout(function () {
                        t.bombType = "none";
                        var e = t.dataTypeClass.indexOf("is-scale");
                        -1 !== e && (t.dataTypeClass = t.dataTypeClass.substring(0, e))
                    }, 300)
                }, iconClick: function () {
                    this.iconIsCanClick && (Object(n.b)("ClickSpeedCurveIcon"), this.$emit("sendDetailCurveClick", "middle", "skin_icon"))
                }, helpIconClick: function () {
                    if (this.showLowSpeedHint) {
                        this.$stat("download_detail", "help_tips_entry_click", {position: "dl_speed"});
                        Object(o.a)("http://pc.xunlei.com/pages/#/help/question?target=slow_speed", "下载帮助")
                    }
                }, showToolTip: function () {
                    this.$stat("download_detail", "help_tips_entry_hover", {position: "dl_speed"})
                }
            }
        }
    }, PeDW: function (t, e, i) {
        "use strict";
        e.a = {video: "1", install: "6", music: "4", pic: "5", doc: "7", rar: "3", "bt-link": "2"}
    }, PwdC: function (t, e, i) {
        var n = i("Nw/w");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("2e12ab27", n, !1)
    }, Q9b0: function (t, e, i) {
        var n = i("zfUU");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("53553d19", n, !1)
    }, QAHm: function (t, e, i) {
        var n = i("0uQW");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("d8b3ed72", n, !1)
    }, QXBO: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAA1JREFUCJljOHvvvy8ACB4C+AENS7kAAAAASUVORK5CYII="
    }, R13e: function (t, e, i) {
        "use strict";
        var n = i("fZjL"), o = i.n(n), r = i("bOdI"), a = i.n(r), s = i("woOf"), c = i.n(s), l = i("Dd8w"), p = i.n(l),
            u = i("Cb+C"), d = i("H2Fs"), h = i("/8Fg"), f = i("p6+B");
        e.a = {
            components: {XlTaskChart: d.a},
            props: {
                domReady: {type: Boolean, default: !1},
                domReadyAsync: {type: Boolean, default: !1},
                cur: {type: Number, default: 0}
            },
            data: function () {
                return {
                    lastTaskID: null,
                    curTaskID: null,
                    eventIdOnCurTaskChange: null,
                    eventIdOnTaskInfoChange: null,
                    hasShowed: !1,
                    tabVisible: !0
                }
            },
            computed: {
                curTask: function () {
                    return this.$sget(this.$store.state.tasks.all, this.curTaskID)
                }, curUser: function () {
                    return this.$store.state.users.curUser
                }, pannel: function () {
                    return this.$store.state.pannel
                }, reportCommonData: function () {
                    return {
                        pannel: this.pannel,
                        gcid: this.curTask.gcid,
                        filename: this.curTask.name,
                        taskid: this.curTask.taskID
                    }
                }, skinInfo: function () {
                    return this.$sget(this.$store.state.skin, "skinInfo")
                }, speedCurveSkinInfo: function () {
                    return this.$sget(this.$store.state.skin, "speedCurveSkinInfo")
                }
            },
            watch: {
                cur: function (t, e) {
                    0 !== t && this.tabVisible && !this.hasShowed && this.ShowHelpIcon()
                }
            },
            created: function () {
                var t = this;
                Object(h.b)("GetCurTask").then(function (e) {
                    var i = JSON.parse(e);
                    t.lastTaskID = i.taskID, t.fetchCurTaskInfo(i.taskID, i.pannel)
                }), this.curTaskChangeHandler = function (e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "{}", n = arguments[2];
                    t.lastTaskID = e, t.$raven.debug("OnCurTaskChange", e, i, n);
                    var o = JSON.parse(i).pannel;
                    t.fetchCurTaskInfo(e, o, n)
                }, u.a.api.attach("OnTabVisibleChange", function (e, i) {
                    t.tabVisible = i, t.tabVisible && !t.hasShowed && 0 !== t.cur && t.ShowHelpIcon()
                }), this.attachEvent(), this.reportReady()
            },
            methods: {
                fetch: function (t) {
                    return this.$store.dispatch("tasks/getTaskInfo", {taskID: t})
                }, reportReady: function () {
                    return Object(h.b)("PageReady", "taskDetail")
                }, reportClick: function (t, e) {
                    this.$stat("download_detail", "dltab_detail_curve_click", p()({}, this.reportCommonData, {
                        position: t,
                        button: e,
                        id: this.$sget(this.speedCurveSkinInfo, "id"),
                        is_speed: this.$sget(this.speedCurveSkinInfo, "is_vip_try") ? 1 : 0,
                        is_login: 0 !== parseInt(this.$sget(this.curUser, "userId")) ? 1 : 0,
                        vip_type: Object(f.b)(this.$sget(this.curUser))
                    }))
                }, operate: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
                    return this.reportClick(e, t), Object(h.b)("OperateTask", this.curTaskID, t)
                }, attachEvent: function () {
                    var t = this;
                    u.a.api.attach("OnSwitchDetail", function (e, i) {
                        t.$emit("onSwitchDetail", {taskID: e, index: i})
                    }), this.eventIdOnCurTaskChange = u.a.api.attach("OnCurTaskChange", this.curTaskChangeHandler), this.eventIdOnCurTaskChange = u.a.api.attach("OnSubFileInfoChange", this.subFileInfoChangeHandler), this.eventIdOnTaskInfoChange = u.a.api.attach("OnTaskInfoChange", function (e, i) {
                        var n = void 0;
                        try {
                            n = JSON.parse(i)
                        } catch (t) {
                        }
                        t.$store.commit("tasks/set", {
                            taskID: e,
                            taskInfo: c()({}, n, t.getHistorySpeedInfo(n, "historySpeed", e, n.speed), t.getHistorySpeedInfo(n, "historyIncreaseSpeed", e, n.increaseSpeed))
                        })
                    })
                }, getHistorySpeedInfo: function (t, e, i, n) {
                    var o = this.$sget(this.$store.state.tasks.all, i, e);
                    if (t && !(100 === parseInt(t.progress) && "100" in o)) {
                        var r = c()({}, this.deleteOldSpeedData(o, t.progress), a()({}, t.progress, n));
                        return a()({}, e, r)
                    }
                }, deleteOldSpeedData: function (t, e) {
                    if (t) return o()(t).filter(function (t) {
                        return parseInt(t) < parseInt(e)
                    }).reduce(function (e, i) {
                        return e[i] = t[i], e
                    }, {})
                }, reportPageView: function () {
                    this.$stat("download_detail", "dltab_detail_page_show", p()({}, this.reportCommonData, {
                        id: this.$sget(this.speedCurveSkinInfo, "id"),
                        is_speed: this.$sget(this.speedCurveSkinInfo, "is_vip_try") ? 1 : 0,
                        is_login: 0 !== parseInt(this.$sget(this.curUser, "userId")) ? 1 : 0,
                        vip_type: Object(f.b)(this.$sget(this.curUser))
                    }))
                }, detachEvent: function () {
                    u.a.dettach("OnCurTaskChange", this.eventIdOnCurTaskChange), u.a.dettach("OnTaskInfoChange", this.eventIdOnTaskInfoChange)
                }, subFileInfoChangeHandler: function (t, e) {
                    if (this.$sget(this.curTask, "subFilesCount")) {
                        var i = [];
                        try {
                            i = JSON.parse(e)
                        } catch (t) {
                            this.$raven.debug(t)
                        }
                        this.$store.commit("tasks/setSubFiles", {taskId: t, subFiles: i})
                    }
                }, fetchCurTaskInfo: function (t, e, i) {
                    var n = this;
                    if (!t) return this.curTaskID = t, void this.$emit("curTaskChange", {taskID: t, index: i});
                    this.fetch(t).then(function () {
                        n.lastTaskID === t && (n.curTaskID = t, n.$emit("curTaskChange", {
                            taskID: t,
                            index: i
                        }), n.reportPageView())
                    }), this.$store.commit("setPannel", e)
                }, ShowHelpIcon: function () {
                    var t = this;
                    this.hasShowed = window.localStorage.getItem("helpIconShowedKey") || 0, this.hasShowed || setTimeout(function () {
                        t.$emit("taskDetailShow"), window.localStorage.setItem("helpIconShowedKey", "1")
                    }, 1e3)
                }
            }
        }
    }, R2iA: function (t, e) {
        e.render = function (t, e, i) {
            var n = t.modules.size, o = t.modules.data, r = "[47m  [0m", a = "", s = Array(n + 3).join(r),
                c = Array(2).join(r);
            a += s + "\n";
            for (var l = 0; l < n; ++l) {
                a += r;
                for (var p = 0; p < n; p++) a += o[l * n + p] ? "[40m  [0m" : r;
                a += c + "\n"
            }
            return a += s + "\n", "function" == typeof i && i(null, a), a
        }
    }, R8rZ: function (t, e, i) {
        "use strict";
        var n = i("AV9n"), o = (i.n(n), i("BENk")), r = i("fh5k");
        e.a = {
            components: {MovieReviewItem: Object(r.a)(o.a)}, props: {
                reviewList: {
                    type: Array, default: function () {
                        return []
                    }
                },
                getReviewList: {type: Function, required: !0},
                setSelectArg: {type: Function, required: !0},
                category: {type: String, default: ""},
                taskId: {type: [String, Number], default: ""},
                taskName: {type: String, default: ""},
                size: {type: Number, default: 8}
            }, data: function () {
                return {loading: !1, isError: !1}
            }, watch: {
                taskId: {
                    immdiate: !0, handler: function () {
                        this.fetch(!0)
                    }
                }
            }, created: function () {
                this.setSelectArg({sum: 0, pos: -1})
            }, methods: {
                fetch: function (t) {
                    return this.getReviewList({cursor: 0, size: this.size, category: this.category, refresh: t})
                }, loadmore: function () {
                    var t = this;
                    this.loading || (this.loading = !0, this.fetch().catch(function () {
                        t.isError = !0
                    }).finally(function () {
                        t.loading = !1
                    }))
                }
            }
        }
    }, RO0P: function (t, e, i) {
        var n = i("uF9H"),
            o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

        function r(t) {
            this.mode = n.ALPHANUMERIC, this.data = t
        }

        r.getBitsLength = function (t) {
            return 11 * Math.floor(t / 2) + t % 2 * 6
        }, r.prototype.getLength = function () {
            return this.data.length
        }, r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function (t) {
            var e;
            for (e = 0; e + 2 <= this.data.length; e += 2) {
                var i = 45 * o.indexOf(this.data[e]);
                i += o.indexOf(this.data[e + 1]), t.put(i, 11)
            }
            this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
        }, t.exports = r
    }, RY9c: function (t, e, i) {
        var n = i("yZj6");

        function o(t) {
            if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = t, this.data = new n(t * t), this.data.fill(0), this.reservedBit = new n(t * t), this.reservedBit.fill(0)
        }

        o.prototype.set = function (t, e, i, n) {
            var o = t * this.size + e;
            this.data[o] = i, n && (this.reservedBit[o] = !0)
        }, o.prototype.get = function (t, e) {
            return this.data[t * this.size + e]
        }, o.prototype.xor = function (t, e, i) {
            this.data[t * this.size + e] ^= i
        }, o.prototype.isReserved = function (t, e) {
            return this.reservedBit[t * this.size + e]
        }, t.exports = o
    }, RevU: function (t, e, i) {
        t.exports = i.p + "img/xlx-icon-32x32.e90e93c.png"
    }, RmTR: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".xmp{background:#202020;display:flex;align-items:center;justify-content:center;height:100vh}.xmp .header{display:none}.xmp .index-article h1 a{color:#fff}.xmp .index-article h1 a:hover{color:var(--colorLight)}.xmp .index-article p{display:none}.xmp .from-info .user-name{color:#afafaf}.xmp .from-info .user-name:hover{color:var(--colorLight)}@media only screen and (max-height:650px),only screen and (max-width:860px){.xmp .index-article{margin-top:3px}.xmp .index-article h1{line-height:46px}.xmp .from-info{margin:0}}", ""])
    }, S2BL: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {ref: "xlx-home", staticClass: "xlx-home"}, [i("HomePageView", {
                ref: "homepage",
                style: {
                    marginTop: 0 === t.cur ? 0 : -t.pageHeight + "px",
                    transitionProperty: t.transition ? "margin" : "none"
                },
                attrs: {"show-custom": 0 === t.cur}
            }), i("div", {
                directives: [{name: "show", rawName: "v-show", value: 1 === t.cur, expression: "cur === 1"}],
                staticClass: "xlx-home__content"
            }, [i("intersect", {
                on: {
                    enter: function (e) {
                        t.showBackToTop = !1, t.reportReturnHomePage("top", "show")
                    }, leave: function (e) {
                        t.showBackToTop = !0
                    }
                }
            }, [i("div", {
                staticStyle: {
                    position: "absolute",
                    top: "0",
                    right: "0"
                }
            })]), i("div", {
                staticClass: "xlx-home__operate", on: {
                    mouseenter: function (e) {
                        t.reportReturnHomePage("top", "hover")
                    }, click: function (e) {
                        t.showHomePage(), t.operate("showHomePage"), t.reportReturnHomePage("top", "click")
                    }
                }
            }, [i("i", {staticClass: "xlx-home__operate-arrow"})]), i("SpeedChartView", {
                attrs: {
                    "dom-ready-async": !0,
                    "dom-ready": 1 === t.cur,
                    cur: t.cur
                }, on: {
                    openHelpTab: function (e) {
                        t.openHelpTab("fail_download"), t.helpTipsPost({
                            action: "help_tips_entry_click",
                            position: "special",
                            type: t.helpIconIsExpand ? "bar" : "icon"
                        })
                    }, taskDetailShow: t.handleHelpIconShow, onSwitchDetail: function (e) {
                        var i = e.index;
                        t.activeKey = i
                    }, curTaskChange: function (e) {
                        var i = e.taskID, n = e.index;
                        t.$store.commit("tasks/setCurTaskID", i), t.activeKey = n || "comments"
                    }
                }
            }), i("XlRecommend", {
                attrs: {
                    category: "download",
                    "task-id": t.curTaskID,
                    "task-name": t.$sget(t.curTask, "name")
                }, on: {recommendItemClick: t.reportRecommendClick, reportRecommendShow: t.reportRecommendShow}
            }), i("div", {staticClass: "xlx-file-detail"}, [i("intersect", {
                attrs: {
                    threshold: [0, 1],
                    "root-margin": "0px 0px -1px 0px"
                }, on: {
                    enter: function (e) {
                        t.tabFixed = !1
                    }, leave: t.leaveTabSentry
                }
            }, [i("div", {
                style: {
                    height: "1px",
                    position: "absolute",
                    width: "100%",
                    pointerEvents: "none"
                }
            })]), i("td-tabs", {
                style: {paddingTop: t.tabFixed ? "78px" : "0"},
                attrs: {tabs: t.tabs, "active-key": t.activeKey, "custom-title-class": t.tabFixed ? "is-fixed" : ""},
                on: {
                    "update:activeKey": [function (e) {
                        t.activeKey = e
                    }, t.handleUpdateActiveKey]
                },
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        var n = e.tab;
                        return ["comments" === n.key ? i("CommentView", {
                            attrs: {
                                gcid: t.$sget(t.curTask, "realGcid") || t.$sget(t.curTask, "gcid") || t.$sget(t.curTask, "infoId") || "",
                                "cur-task": t.curTask
                            }, on: {rcountchange: t.rcountChange}
                        }, [i("MovieReviewList", {
                            directives: [{
                                name: "see",
                                rawName: "v-see",
                                value: t.reportMovieListShow,
                                expression: "reportMovieListShow"
                            }],
                            attrs: {
                                category: "select",
                                "task-id": t.curTaskID,
                                "task-name": t.$sget(t.curTask, "name")
                            },
                            on: {click: t.reportMovieListClick}
                        })], 1) : "files" === n.key ? i("XlFileList", {
                            attrs: {
                                operate: t.operate,
                                "cur-task": t.curTask,
                                "sub-files": t.$sget(t.$store.state.tasks.subFiles, t.curTaskID),
                                "set-task": t.setTask
                            }
                        }) : "detail" === n.key ? i("PropertyView", {
                            attrs: {
                                operate: t.operate,
                                "cur-task": t.curTask,
                                "set-task": t.setTask
                            }
                        }) : t._e()]
                    }
                }])
            }), i("div", {staticClass: "xlx-home-tool"}, [i("a", {
                staticClass: "xlx-home-main",
                attrs: {href: "javascript:;", title: "返回主页"},
                on: {
                    mouseenter: function (e) {
                        t.reportReturnHomePage("bottom", "hover")
                    }, click: function (e) {
                        t.showHomePage(), t.operate("showHomePage"), t.reportReturnHomePage("bottom", "click")
                    }
                }
            }, [i("i", {staticClass: "xlx-icon-home"})]), i("a", {
                staticClass: "xlx-home-help",
                class: {"is-show": t.helpIconIsExpand},
                attrs: {href: "javascript:;", title: "帮助"},
                on: {
                    click: function (e) {
                        t.openHelpTab(), t.helpTipsPost({
                            action: "help_tips_entry_click",
                            position: "dl_page",
                            type: "bar"
                        })
                    }, mouseover: function (e) {
                        t.handleHelpIconHover(!0)
                    }, mouseout: function (e) {
                        t.handleHelpIconHover(!1)
                    }
                }
            }, [i("i", {staticClass: "xlx-icon-help-side"}), i("span", [t._v("老司机秘籍：解读下载")])]), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showBackToTop,
                    expression: "showBackToTop"
                }], staticClass: "xlx-home-top", attrs: {href: "javascript:;", title: "回到顶部"}, on: {click: t.backToTop}
            }, [i("i", {staticClass: "xlx-icon-arrow-top"})])])], 1)], 1)], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, SAXu: function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), r = i("exGp"), a = i.n(r), s = i("//Fk"), c = i.n(s), l = i("fZjL"), p = i.n(l),
            u = i("woOf"), d = i.n(u), h = i("Rhsk"), f = i("L/YN"), x = i("oxQo"), m = i("/8Fg"), g = i("9ry8"),
            v = i("ZKSA"), b = i("+3xp"), _ = {};
        e.a = {
            components: {XlEmoji: v.a, XlMessage: b.a},
            props: {
                curTask: {type: Object, default: null},
                show: {type: Boolean, default: !0},
                tid: {type: String, default: ""},
                curUserId: {type: String, default: "0"},
                curUserNick: {type: String, default: ""},
                publishComments: {
                    type: Function, default: function () {
                    }
                },
                getComments: {
                    type: Function, default: function () {
                    }
                },
                setCurPage: {
                    type: Function, default: function () {
                    }
                },
                comment: {type: Object, default: null},
                maxLength: {type: Number, default: 100},
                minLength: {type: Number, default: 6},
                userNick: {type: String, default: ""},
                defaultPlaceholder: {type: String, default: ""},
                focus: {type: [Boolean, Number], default: !1},
                autoSendCommentText: {type: String, default: ""}
            },
            data: function () {
                return {
                    text: "", isSending: !1, messageConfig: null, onHideMessage: function () {
                    }, isInputFocus: !1, canShowCommentNote: !1
                }
            },
            computed: {
                trimedText: function () {
                    return this.text.trim()
                }, textLen: function () {
                    return this.trimedText.length
                }, isLogin: function () {
                    return "0" !== this.curUserId
                }, disabled: function () {
                    return !(this.textLen && !this.isSending && this.tid)
                }, placeholder: function () {
                    return this.userNick ? "回复 " + this.userNick + "：" : this.isInputFocus ? "请大于" + this.minLength + "个字" : this.defaultPlaceholder
                }, extra: function () {
                    var t = {
                        kuaiNiaoSpeedup: null,
                        bandWidth: null,
                        taskSize: this.$sget(this.curTask, "size"),
                        taskSuffix: this.$sget(this.curTask, "suffix"),
                        taskType: this.$sget(this.curTask, "type"),
                        taskSpeed: this.$sget(this.curTask, "averageSpeed"),
                        taskUrl: this.$sget(this.curTask, "url"),
                        taskName: this.$sget(this.curTask, "name")
                    };
                    return d()({}, t, {
                        extParams: p()(t).join(","),
                        downloadspeed: Object(x.d)(this.$sget(this.curTask, "averageSpeed"))
                    })
                }, pannel: function () {
                    return this.$store.state.pannel
                }
            },
            watch: {
                focus: function (t) {
                    var e = this;
                    t && this.$nextTick(function () {
                        e.$refs.replyInput.focus()
                    })
                }, isInputFocus: function (t) {
                    t && "" === this.text && this.$stat("download_detail", "dltab_detail_comment_tip1_show")
                }, autoSendCommentText: function (t) {
                    this.$raven.debug("autoSendCommentText", t), this.$emit("update:autoSendCommentText", ""), t && (this.text = t, this.sendComment())
                }, text: function (t) {
                    "" === t && this.$stat("download_detail", "dltab_detail_comment_tip1_show"), this.canShowCommentNote = !1, t.length > this.maxLength && (this.text = t.substr(0, this.maxLength)), _[this.tid + this.$sget(this.comment, "cid")] = t
                }, tid: function () {
                    this.useDraftComment(), this.$refs.replyInput.blur(), document.body.focus()
                }
            },
            mounted: function () {
                this.useDraftComment(), document.body.addEventListener("click", this.blurHandler)
            },
            beforeDestroy: function () {
                document.body.removeEventListener("click", this.blurHandler)
            },
            methods: {
                blurHandler: function () {
                    this.$emit("update:focus", !1), this.canShowCommentNote = !1
                }, login: function () {
                    var t = this;
                    return this.$raven.debug("login"), new c.a(function (e, i) {
                        Object(h.j)(function (t, n) {
                            t ? i(new Error("login error")) : e()
                        }), setTimeout(function () {
                            t.isSending = !1
                        }, 500)
                    })
                }, getAuthPlatformParamObj: function () {
                    var t = a()(o.a.mark(function t() {
                        var e, i, n;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(m.b)("GetUserInfo", 1);
                                case 2:
                                    return e = t.sent, i = 165, t.next = 6, Object(m.b)("GetThunderVersion");
                                case 6:
                                    return n = t.sent, t.abrupt("return", Object(f.a)({
                                        userInfo: JSON.parse(e),
                                        appId: i,
                                        clientVersion: n
                                    }));
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }(), auth: function () {
                    var t = a()(o.a.mark(function t() {
                        var e, i = this;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.getAuthPlatformParamObj();
                                case 2:
                                    return (e = t.sent).deviceid = "123456", t.abrupt("return", Object(g.a)("thunderx", e).catch(function (t) {
                                        return i.$raven.debug(t), "auth error" !== t.message && "not login" !== t.message && i.$raven.warn(t), c.a.reject(new Error("auth error"))
                                    }));
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }(), useDraftComment: function () {
                    this.text = _[this.tid + this.$sget(this.comment, "cid")] || ""
                }, beforeComment: function () {
                    var t = a()(o.a.mark(function t() {
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.login();
                                case 2:
                                    return t.next = 4, this.auth();
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }(), keyDownCtrlEnterHandler: function (t) {
                    this.sendComment(t)
                }, sendCommentHandler: function (t) {
                    this.sendComment(t)
                }, sendComment: function () {
                    var t = a()(o.a.mark(function t(e) {
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.disabled) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!(this.textLen < this.minLength)) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.$refs.replyInput.focus(), this.canShowCommentNote = !0, this.$stat("download_detail", "dltab_detail_comment_tip2_show"), t.abrupt("return");
                                case 7:
                                    return this.isSending = !0, t.prev = 8, t.next = 11, this.beforeComment();
                                case 11:
                                    return t.next = 13, this.sendCommentRequest(e);
                                case 13:
                                    this.$sget(this, "comment", "cid") ? this.$emit("sendReply", {cid: this.comment.cid}) : this.$emit("sendComment"), t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(8), "login error" !== t.t0.message && "auth error" !== t.t0.message && (this.$raven.warn(t.t0), this.showFailure("评论失败"));
                                case 19:
                                    return t.prev = 19, this.isSending = !1, t.finish(19);
                                case 22:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[8, 16, 19, 22]])
                    }));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), sendCommentRequest: function () {
                    var t = a()(o.a.mark(function t(e) {
                        var i, n, r, a = this;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!0 !== this.$sget(this.curTask, "isFromVest")) {
                                        t.next = 6;
                                        break
                                    }
                                    return this.showSuccess("评论成功"), this.text = "", this.$emit("finish"), this.$emit("update:focus", !1), t.abrupt("return");
                                case 6:
                                    return i = "", t.next = 9, this.publishComments({
                                        tid: this.tid,
                                        sourceId: this.tid,
                                        comment: this.trimedText,
                                        cid: this.$sget(this, "comment", "cid"),
                                        username: this.curUserNick,
                                        extra: this.extra
                                    });
                                case 9:
                                    0 === (n = t.sent).code || 0 === n.result ? (this.text = "", this.showSuccess("评论成功"), this.$raven.debug("finish comment"), this.$emit("finish"), this.$emit("update:focus", !1), setTimeout(function () {
                                        a.$store.dispatch("comments/getSingleComment", {
                                            tid: a.tid,
                                            sourceId: a.tid,
                                            cid: n.cid_str,
                                            userId: a.$store.state.users.curUser.userId
                                        }).then(function () {
                                            a.setCurPage(1)
                                        }).catch(function (t) {
                                            a.$raven.warn(t)
                                        })
                                    }, 1e3)) : (7 === (r = n.result || n.code) ? i = "您可能已掉线，请重新登录后发表评论" : 4018 === r || 4012 === r || 4011 === r ? i = "您发表内容太频繁了，已被禁言" : 70012 === r && (i = "您因涉嫌发布广告，已经被禁言"), this.showFailure(i));
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), showSuccess: function (t) {
                    var e = this;
                    return new c.a(function (i, n) {
                        e.messageConfig = {type: "success", content: t || "评论成功", delay: 1e3}
                    })
                }, showFailure: function (t) {
                    var e = this;
                    return new c.a(function (i, n) {
                        e.messageConfig = {type: "warning", content: t || "评论失败", delay: 1e3}
                    })
                }, handlePickEmoji: function (t, e) {
                    if (!(this.text.length + t.length > this.maxLength)) {
                        var i = this.$refs.replyInput, n = this.text, o = t, r = i.selectionStart, a = i.selectionEnd,
                            s = n.substring(0, r) + o + n.substring(a, n.length);
                        this.text = s, this.$nextTick(function () {
                            i.focus(), r += o.length, a += o.length, i.setSelectionRange(r, r)
                        }), this.$stat("right_area", "filmlib_detailpage_emoji_click", {
                            gcid: this.tid || "",
                            emoji: e
                        }), this.$stat("download_detail", "dltab_detail_comment_emoj_click", {
                            pannel: this.pannel,
                            filename: this.curTask.name,
                            taskid: this.curTask.taskID,
                            gcid: this.tid,
                            emoji: e
                        })
                    }
                }, handleEmojiOpen: function () {
                    this.isInputFocus = !1, this.$stat("right_area", "filmlib_detailpage_emoji_show", {gcid: this.tid || ""})
                }, handInputFocus: function () {
                    this.$emit("update:focus", !0), this.isInputFocus = !0
                }, handInputBlur: function () {
                    this.isInputFocus = !1, this.canShowCommentNote = !1
                }
            }
        }
    }, SFTi: function (t, e, i) {
        var n = i("vHs2"), o = i("vtmt").PNG, r = i("nwDn");
        e.render = function (t, e) {
            var i = r.getOptions(e), n = i.rendererOpts, a = r.getImageWidth(t.modules.size, i);
            n.width = a, n.height = a;
            var s = new o(n);
            return r.qrToImageData(s.data, t, i), s
        }, e.renderToDataURL = function (t, i, n) {
            void 0 === n && (n = i, i = void 0), e.renderToBuffer(t, i, function (t, e) {
                t && n(t);
                var i = "data:image/png;base64,";
                i += e.toString("base64"), n(null, i)
            })
        }, e.renderToBuffer = function (t, i, n) {
            void 0 === n && (n = i, i = void 0);
            var o = e.render(t, i), r = [];
            o.on("error", n), o.on("data", function (t) {
                r.push(t)
            }), o.on("end", function () {
                n(null, Buffer.concat(r))
            }), o.pack()
        }, e.renderToFile = function (t, i, o, r) {
            void 0 === r && (r = o, o = void 0);
            var a = n.createWriteStream(t);
            a.on("error", r), a.on("close", r), e.renderToFileStream(a, i, o)
        }, e.renderToFileStream = function (t, i, n) {
            e.render(i, n).pack().pipe(t)
        }
    }, Sd0T: function (t, e, i) {
        var n = i("utyv"),
            o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            r = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        e.getBlocksCount = function (t, e) {
            switch (e) {
                case n.L:
                    return o[4 * (t - 1) + 0];
                case n.M:
                    return o[4 * (t - 1) + 1];
                case n.Q:
                    return o[4 * (t - 1) + 2];
                case n.H:
                    return o[4 * (t - 1) + 3];
                default:
                    return
            }
        }, e.getTotalCodewordsCount = function (t, e) {
            switch (e) {
                case n.L:
                    return r[4 * (t - 1) + 0];
                case n.M:
                    return r[4 * (t - 1) + 1];
                case n.Q:
                    return r[4 * (t - 1) + 2];
                case n.H:
                    return r[4 * (t - 1) + 3];
                default:
                    return
            }
        }
    }, "T/qI": function (t, e, i) {
        "use strict";
        var n = i("d7EF"), o = i.n(n), r = i("fZjL"), a = i.n(r), s = i("gRE1"), c = i.n(s), l = i("u2KI"), p = i.n(l),
            u = i("fs20");
        e.a = {
            props: {
                options: {
                    type: Array, default: function () {
                        return []
                    }
                },
                step: {default: 1, type: Number},
                paddingTopPercent: {default: 0, type: Number},
                paddingBottomPercent: {default: 0, type: Number},
                type: {default: "bSpline", type: String},
                scale: {default: Math.max(window.devicePixelRatio, 2), type: Number},
                domReady: {default: !1, type: Boolean}
            }, data: function () {
                return {
                    width: 0, height: 0, drawFn: function () {
                    }
                }
            }, computed: {
                filteredData: function () {
                    return p()(this.filterData(this.options))
                }, maxValue: function () {
                    var t = Array.prototype.concat.apply([], this.filteredData.map(function (t) {
                        return c()(t)
                    }));
                    return this.getMaxValue(t)
                }, transformedData: function () {
                    var t = this;
                    return p()(this.filteredData.map(function (e) {
                        return t.transformData(e)
                    }))
                }, labels: function () {
                    var t = this;
                    return p()(this.transformedData.map(function (e, i) {
                        if (t.options[i].label && e.length) {
                            var n = e[e.length - 1];
                            return {x: n.x / t.scale, y: n.y / t.scale, value: n.yValue}
                        }
                        return null
                    }))
                }
            }, watch: {
                options: {
                    immediate: !0, handler: function () {
                        var t = this;
                        if (this.clearCanvas(), this.$raven.debug("domReady", this.domReady), this.domReady) this.$nextTick(function () {
                            return t.draw()
                        }); else var e = this.$watch("domReady", function (i) {
                            i && (t.$nextTick(function () {
                                return t.draw()
                            }), e())
                        })
                    }
                }
            }, mounted: function () {
                var t = this;
                this.draw(), this.drawFn = function () {
                    t.draw(), t.draw()
                }, window.addEventListener("resize", this.drawFn)
            }, beforeDestroy: function () {
                window.removeEventListener("resize", this.drawFn)
            }, methods: {
                draw: function () {
                    var t = this, e = this.$refs.dataChart;
                    if (this.width = parseInt(this.$refs.canvasBox.clientWidth) * this.scale, this.height = parseInt(this.$refs.canvasBox.clientHeight - 20) * this.scale, e.setAttribute("width", this.width), e.setAttribute("height", this.height), e.getContext) {
                        var i = e.getContext("2d");
                        this.options.forEach(function (e, n) {
                            var o = void 0, r = t.transformedData[n];
                            switch (t.type) {
                                case"line":
                                    o = t.lineRender(r);
                                    break;
                                case"bSpline":
                                    o = t.bSplineRender(r);
                                    break;
                                default:
                                    o = t.bSplineRender(r)
                            }
                            e.lineColorStart && e.lineColorEnd && t.drawLine(i, r, e.lineColorStart, e.lineColorEnd, e.lineWidth || 1, o), e.gradientColorStart && e.gradientColorEnd && t.drawGradient(i, r, e.gradientColorStart, e.gradientColorEnd, o)
                        })
                    }
                }, filterData: function (t) {
                    var e = this;
                    return t.map(function (t) {
                        var i = {};
                        return a()(t.data).forEach(function (n, o, r) {
                            n % e.step != 0 && n !== r.length || (i[n] = t.data[n])
                        }), i
                    })
                }, transformData: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a()(e).map(function (t) {
                        return parseInt(t)
                    }).sort(function (t, e) {
                        return t - e
                    }).map(function (i) {
                        return {
                            xValue: i,
                            yValue: parseInt(e[i]),
                            x: t.width * i / 100,
                            y: t.height * t.paddingTopPercent / 100 + t.height * (100 - t.paddingTopPercent - t.paddingBottomPercent) / 100 * (1 - parseInt(e[i]) / (t.maxValue || 1))
                        }
                    })
                }, getMaxValue: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return (t = t.map(function (t) {
                        return parseInt(t)
                    }).sort(function (t, e) {
                        return t - e
                    }))[t.length - 1]
                }, drawLine: function (t, e, i, n, o, r) {
                    if (e.length) {
                        t.lineWidth = o * this.scale, t.beginPath(), t.moveTo(e[0].x, e[0].y), this.renderPath(t, r);
                        var a = t.createLinearGradient(0, 0, e[e.length - 1].x, 0);
                        a.addColorStop(0, i), a.addColorStop(1, n), t.strokeStyle = a, t.stroke()
                    }
                }, drawGradient: function (t, e, i, n, o) {
                    if (e.length) {
                        t.beginPath(), t.moveTo(e[0].x, e[0].y), this.renderPath(t, o);
                        var r = e.length - 1;
                        t.lineTo(e[r].x, this.height), t.lineTo(e[0].x, this.height), t.lineTo(e[0].x, e[0].y);
                        var a = t.createLinearGradient(0, 0, 0, this.height);
                        a.addColorStop(0, i), a.addColorStop(1, n), t.fillStyle = a, t.closePath(), t.fill()
                    }
                }, lineRender: function (t) {
                    return t
                }, bSplineRender: function (t) {
                    return new u.a({degree: 3, points: t, tessellation: this.width}).curvePoints.map(function (t) {
                        var e = o()(t, 2);
                        return {x: e[0], y: e[1]}
                    })
                }, renderPath: function (t, e) {
                    for (var i = 0; i < e.length; i++) 0 === i ? t.moveTo(e[i].x, e[i].y) : t.lineTo(e[i].x, e[i].y)
                }, clearCanvas: function () {
                    var t = this.$refs.dataChart;
                    t && t.getContext && t.getContext("2d").clearRect(0, 0, this.width, this.height)
                }
            }
        }
    }, TM1i: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ':root{--promote-background:rgba(178,203,255,.2);--promote-background-hover:rgba(178,203,255,.5);--promote-text:#1a1a1a;--promote-text-sub:#999;--promote-active:#69f}.xlx-promote{height:100px}.xlx-promote,.xlx-promote__item{position:relative;overflow:hidden}.xlx-promote__item{width:33.33%;height:100%;background:var(--promote-background);box-sizing:border-box;transition:background .1s}.xlx-promote__item:hover{background:var(--promote-background-hover)}.xlx-promote__item.is-activity{background:hsla(39,71%,67%,.3)}.xlx-promote__item.is-activity .xlx-promote__tag{background:#e7bd6f}.xlx-promote__content{position:absolute;left:0;top:0;display:flex;width:100%;height:100%;border-radius:4px;overflow:hidden}.xlx-promote__picture{position:relative;width:150px;height:100%;overflow:hidden}.xlx-promote__picture img{width:100%;height:100%;object-fit:cover;transition:transform .2s;border-radius:4px}.xlx-promote__picture:after{position:absolute;left:0;bottom:0;width:100%;height:40px;background:linear-gradient(transparent,rgba(0,0,0,.6));border-radius:4px;content:""}.xlx-promote__view{position:absolute;left:6px;bottom:6px;z-index:2;display:flex;align-items:center;color:#fff;pointer-events:none}.xlx-promote__view .xlx-icon-view{margin-right:3px}.xlx-promote__detail{width:calc(100% - 150px);display:flex;flex-direction:column;justify-content:space-between;padding:15px 18px;overflow:hidden;box-sizing:border-box}.xlx-promote__text{font-size:16px;color:var(--promote-text);-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical}.xlx-promote__name,.xlx-promote__text{word-break:break-all;overflow:hidden;text-overflow:ellipsis}.xlx-promote__name{position:relative;z-index:5;max-width:calc(100% - 65px);color:var(--promote-text-sub);white-space:nowrap;transition:color .3s}.xlx-promote__name:hover{color:var(--promote-text)}.xlx-promote__avatar{position:relative;z-index:5;width:24px;height:24px;margin-right:6px}.xlx-promote__avatar img{object-fit:cover}.xlx-promote__detail-user{display:flex;align-items:center;height:20px;font-size:12px;line-height:20px;color:var(--promote-text-sub)}.xlx-promote__avatar{width:20px;height:20px;margin-right:5px}.xlx-promote__avatar img{width:100%;height:100%;border-radius:50%;border:1px solid #fff;box-sizing:border-box}.xlx-promote__link{position:absolute;left:0;top:0;right:0;bottom:0}.xlx-promote__indicator{position:absolute;top:0;right:0;z-index:9;display:flex;flex-direction:column;justify-content:center;align-items:center;width:20px;height:100%}.xlx-promote__indicator span{display:block;width:6px;height:6px;margin:3px 0;border-radius:50%;background:rgba(0,0,0,.1);cursor:pointer;transition:background .2s}.xlx-promote__indicator span.is-active,.xlx-promote__indicator span:hover{background:var(--promote-active)}.xlx-promote__tag{right:50px;right:28px;padding:0 10px;color:#fff;border-radius:3px;background:rgba(255,102,179,.4)}.xlx-promote__button,.xlx-promote__tag{position:absolute;bottom:15px;line-height:20px}.xlx-promote__button{right:28px;width:54px;height:20px;z-index:3;text-align:center;color:#ff9a66;border-radius:3px;border:1px solid #ff9a66;transition:background .2s,color .2s}.xlx-promote__button:hover{color:#fff;background:#ff9a66}.xlx-promote-list{position:absolute;left:0;top:0;display:flex;justify-content:space-between;width:100%;height:100%;opacity:0;transition:.5s}.xlx-promote-list.is-live .xlx-promote__item{background:rgba(255,179,217,.2)}.xlx-promote-list.is-live .xlx-promote__item:hover{background:rgba(255,179,217,.5)}.xlx-promote-list.is-game .xlx-promote__item{background:rgba(255,154,102,.2)}.xlx-promote-list.is-game .xlx-promote__item:hover{background:rgba(255,154,102,.4)}.xlx-promote-list.is-show{opacity:1;z-index:2}@media only screen and (min-width:1101px) and (max-width:1400px){.xlx-promote{height:90px}.xlx-promote__picture{width:34%}.xlx-promote__detail{width:64%;padding:10px 18px}.xlx-promote__text{font-size:15px}.xlx-promote__button,.xlx-promote__tag{right:30px;bottom:10px}}@media only screen and (min-width:800px) and (max-width:1100px){.xlx-promote{height:85px}.xlx-promote__item{width:50%}.xlx-promote__item:nth-child(3){display:none}.xlx-promote__picture{width:34%}.xlx-promote__detail{width:64%;padding:10px}.xlx-promote__text{font-size:14px}.xlx-promote__button,.xlx-promote__tag{right:20px;bottom:10px}}@media only screen and (max-width:860px){.xlx-promote{height:80px}.xlx-promote__item{width:50%}.xlx-promote__item:nth-child(3){display:none}.xlx-promote__picture{width:34%;min-width:110px}.xlx-promote__detail{width:64%;padding:10px}.xlx-promote__text{font-size:12px}.xlx-promote__detail-user{font-size:11px}.xlx-promote__button,.xlx-promote__tag{right:20px;bottom:10px}}', ""])
    }, Td9n: function (t, e, i) {
        "use strict";
        var n = i("yhIe"), o = i("CSz0");
        e.process = function (t, e) {
            var i = [], r = new n(t);
            return new o(e, {
                read: r.read.bind(r), write: function (t) {
                    i.push(t)
                }, complete: function () {
                }
            }).start(), r.process(), Buffer.concat(i)
        }
    }, TmV0: function (t, e, i) {
        i("fZOM"), t.exports = i("FeBl").Object.values
    }, U3RP: function (t, e, i) {
        "use strict";
        var n = i("X/C1"), o = i("jFpK"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlPraise.vue", e.a = r.exports
    }, VRjc: function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, "@font-face{font-family:icon-custom;src:url(" + n(i("XZBC")) + ') format("truetype")}[class*=" icon-custom-"],[class^=icon-custom]{font-family:icon-custom!important;font-size:16px;font-style:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-custom-user:before{content:"\\E626"}.icon-custom-control:before{content:"\\E627"}.icon-custom-add:before{content:"\\E628"}.icon-custom-home-solid:before{content:"\\E629"}.icon-custom-show:before{content:"\\E62A"}.icon-custom-home:before{content:"\\E62B"}.icon-custom-active:before{content:"\\E62C"}.icon-custom-magic:before{content:"\\E62D"}.icon-custom-total:before{content:"\\E62E"}.icon-custom-click:before{content:"\\E62F"}:root{--button-switch:rgba(75,135,255,.1);--button-switch-hover:rgba(75,135,255,.2);--color-switch-icon:#4b87ff}.is-theme{--button-switch:rgba(var(--color-primary-theme),.1);--button-switch-hover:rgba(var(--color-primary-theme),.2);--color-switch-icon:rgb(var(--color-primary-theme))}.index-wrap--custom .banner-x .bg-pic{width:100%;height:100%;margin-left:0;background-position:top}.index-wrap--custom .banner-opt{display:flex;flex-direction:column;justify-content:center;bottom:0;height:100%}.index-wrap--custom .banner-x:before{display:none}.index-wrap--custom .banner-x .user-info-wrap{display:flex;position:absolute;left:0;top:0;z-index:9;flex-direction:column;width:280px;font-size:14px;color:#fff;background-color:rgba(0,0,0,.2);border-radius:10px 0 10px 0}.index-wrap--custom .banner-x .user-info-wrap.is-group:hover{height:100%}.index-wrap--custom .banner-x .user-info-wrap.is-group:hover .user-info__group{display:flex}.index-wrap--custom .banner-x .user-info-wrap.is-extend{height:100%}.index-wrap--custom .banner-x .user-info-wrap.is-extend .user-info__group{display:flex}.index-wrap--custom .banner-x .user-info-wrap:hover{background-color:rgba(0,0,0,.4)}.index-wrap--custom .banner-x .user-info{display:flex;align-items:center;height:60px;padding:0 10px;color:#fff;overflow:hidden}.index-wrap--custom .banner-x .user-info:active{background-color:rgba(0,0,0,.2)}.index-wrap--custom .banner-x .user-avatar{display:block;width:36px;height:36px;box-sizing:border-box;border:1px solid #fff;border-radius:100%;overflow:hidden}.index-wrap--custom .banner-x .user-avatar>img{width:100%;height:100%;object-fit:cover}.index-wrap--custom .banner-x .user-name{margin-left:6px;font-size:16px;max-width:14em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-wrap--custom .banner-x .user-info__group{display:none;flex-direction:column;justify-content:space-between;align-items:center;flex:1;margin:0 10px;padding-bottom:10px;border-top:1px solid hsla(0,0%,100%,.3)}.index-wrap--custom .banner-x .user-info__group .user-avatar{width:50px;height:50px;margin:0 auto}.index-wrap--custom .banner-x .user-info__title{margin:6px 0 8px}.index-wrap--custom .banner-x .group-main{text-align:center}.index-wrap--custom .banner-x .group-footer{width:100%}.index-wrap--custom .banner-x .group-name{display:inline-block;max-width:10em;margin:6px 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-wrap--custom .banner-x .group-detail{text-align:left;color:hsla(0,0%,100%,.6);-webkit-line-clamp:3;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.index-wrap--custom .banner-x .group-number{display:flex;justify-content:center;align-items:center;margin:8px 0 5px;color:hsla(0,0%,100%,.6)}.index-wrap--custom .banner-x .icon-group-user{position:relative;width:10px;height:10px;margin-right:3px}.index-wrap--custom .banner-x .icon-group-user:before{display:block;width:6px;height:6px;margin:0 auto;background:hsla(0,0%,100%,.6);border-radius:50%;content:""}.index-wrap--custom .banner-x .icon-group-user:after{display:block;width:10px;height:5px;margin:0 auto;background:hsla(0,0%,100%,.6);border-radius:3px 3px 0 0;content:""}.index-wrap--custom .banner-x .td-button{width:100%;height:36px;line-height:36px;font-size:16px}.index-wrap--custom .banner-info{text-align:center}.index-wrap--custom .banner-info .banner-title{margin:24px 0;font-size:40px;line-height:52px;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.index-wrap--custom .banner-info .banner-title a{color:var(--index-color-title);transition:color .2s}.index-wrap--custom .banner-info .banner-title a:hover{color:var(--color-primary)}.index-wrap--custom .banner-info .banner-abstract{font-size:20px;line-height:37px;color:var(--index-color-title);-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.index-wrap--custom .banner-info .banner-copyright{margin-top:40px;font-size:20px;line-height:37px;color:var(--index-color-sub)}.index-wrap--custom .banner-info .banner-copyright>span{margin-right:4px}.index-wrap--custom .banner-info .banner-copyright>a{margin:0 4px;color:var(--color-primary)}.index-wrap--custom .banner-info .banner-copyright>a:hover{color:var(--color-primary-hover)}.switch-btn{position:fixed;right:0;bottom:0;width:40px;height:40px;overflow:hidden;background-color:var(--button-switch);border-radius:100% 0 0 0}.switch-btn .icon-custom,.switch-btn .icon-custom-magic{position:absolute;right:8px;bottom:8px;z-index:2;color:var(--color-switch-icon);opacity:.6}.switch-btn .icon-custom-magic:before,.switch-btn .icon-custom:before{content:"\\E62D"}.switch-btn:hover{background-color:var(--button-switch-hover)}.switch-btn:hover .icon-custom{opacity:1}.switch-btn:hover .icon-custom:before{content:"\\E62D"}.switch-btn:hover .icon-custom-magic{opacity:1}.switch-btn.custom .icon-custom:before{content:"\\E62B"}.switch-btn.custom:hover .icon-custom{right:6px;bottom:6px;font-size:20px}.switch-btn.custom:hover .icon-custom:before{content:"\\E629"}@media only screen and (max-height:860px),only screen and (min-width:1101px) and (max-width:1400px){.index-wrap--custom .banner-x .user-info-wrap{width:260px;font-size:14px}.index-wrap--custom .banner-x .user-info-wrap .user-info{height:56px}.index-wrap--custom .banner-x .user-info-wrap .user-info__group .user-avatar{width:46px;height:46px}.index-wrap--custom .banner-x .user-info-wrap .user-info__group .td-button{height:36px;line-height:36px;font-size:14px}.index-wrap--custom .banner-x .user-avatar{width:32px;height:32px}.index-wrap--custom .banner-x .user-name{font-size:14px;max-width:14em}.index-wrap--custom .banner-info .banner-title{font-size:35px;line-height:46px}.index-wrap--custom .banner-info .banner-abstract,.index-wrap--custom .banner-info .banner-copyright{font-size:18px;line-height:34px}}@media only screen and (max-height:770px),only screen and (min-width:800px) and (max-width:1100px){.index-wrap--custom .banner-x .user-info-wrap{width:190px}.index-wrap--custom .banner-x .user-info-wrap .user-info{height:56px}.index-wrap--custom .banner-x .user-info-wrap .user-info__group .user-avatar{width:36px;height:36px}.index-wrap--custom .banner-x .user-info-wrap .user-info__group .td-button{height:32px;line-height:32px;font-size:14px}.index-wrap--custom .banner-x .user-avatar{width:26px;height:26px}.index-wrap--custom .banner-x .user-name{font-size:12px;max-width:12em}.index-wrap--custom .banner-info .banner-title{font-size:28px;line-height:37px}.index-wrap--custom .banner-info .banner-abstract,.index-wrap--custom .banner-info .banner-copyright{font-size:16px;line-height:30px}}@media only screen and (max-height:650px),only screen and (max-width:860px){.index-wrap--custom .banner-x .user-info-wrap{width:150px;font-size:12px}.index-wrap--custom .banner-x .user-info-wrap .user-info{height:42px}.index-wrap--custom .banner-x .user-info-wrap .user-info__group .user-avatar{width:28px;height:28px}.index-wrap--custom .banner-x .user-info-wrap .user-info__group .td-button{height:26px;line-height:26px;font-size:12px}.index-wrap--custom .banner-x .user-avatar{width:20px;height:20px}.index-wrap--custom .banner-x .user-name{font-size:12px;max-width:10em}.index-wrap--custom .banner-info .banner-title{font-size:23px;line-height:30px}.index-wrap--custom .banner-info .banner-abstract,.index-wrap--custom .banner-info .banner-copyright{font-size:14px;line-height:26px}}', ""])
    }, VtBu: function (t, e, i) {
        "use strict";
        var n = i("Gu7T"), o = i.n(n), r = i("Dd8w"), a = i.n(r), s = i("8SKo"), c = (i.n(s), i("AtIQ")), l = i("FjP8"),
            p = i("/TYz"), u = i("e/Sy"), d = i("wfXX"), h = i("AJOv"), f = i("7Npb"), x = i("X4AI"), m = i("P/2W"),
            g = i("/8Fg"), v = i("Cb+C"), b = i("p6+B"), _ = i("eLLv"), w = i("wuJz");
        i.n(w);
        e.a = {
            components: {
                Intersect: c.a,
                CommentView: l.default,
                PropertyView: u.default,
                XlRecommend: Object(f.a)(d.a),
                MovieReviewList: Object(f.a)(h.a),
                HomePageView: p.default,
                XlFileList: m.a,
                SpeedChartView: x.default
            }, data: function () {
                return {
                    curTaskGcid: "",
                    eventIdOnCurTaskChange: null,
                    eventIdOnTaskInfoChange: null,
                    pageHeight: 0,
                    eleHtml: null,
                    cur: 0,
                    activeKey: "",
                    rcount: 0,
                    filesLengthData: 0,
                    showBackToTop: !1,
                    tabFixed: !1,
                    detailReady: !1,
                    transition: !0,
                    detailStartShowTime: null,
                    detailVisible: !1,
                    clientVisible: !0,
                    tabVisible: !0,
                    leaveTabSentry: function () {
                    },
                    curTaskChange: function () {
                    },
                    helpIconIsExpand: !1,
                    helpIconShowTimer: null,
                    isHoveringHelpIcon: !1,
                    helpIconExpandTime: 5e3
                }
            }, computed: {
                pannel: function () {
                    return this.$store.state.pannel
                }, curTaskID: function () {
                    return this.$store.state.tasks.curTaskID
                }, curTask: function () {
                    return this.$sget(this.$store.state.tasks.all, this.curTaskID) || {}
                }, curUser: function () {
                    return this.$sget(this.$store.state, "users", "curUser") || {}
                }, speedCurveSkinInfo: function () {
                    return this.$sget(this.$store.state, "skin", "speedCurveSkinInfo")
                }, tabs: function () {
                    var t = [{
                        title: "评论(" + this.filterRcount(this.rcount) + ")",
                        key: "comments",
                        reportName: "comment_tab"
                    }, {
                        title: "文件列表(" + this.filterFilelistLength(this.filesLengthData) + ")",
                        key: "files",
                        reportName: "filelist_tab"
                    }, {title: "属性详情", key: "detail", reportName: "attribute_tab"}];
                    return this.filesLength || t.splice(1, 1), t
                }, filesLength: function () {
                    return this.$sget(this.curTask, "subFilesCount")
                }, reportCommonData: function () {
                    return {
                        pannel: this.pannel,
                        gcid: this.curTask.gcid,
                        filename: this.curTask.name,
                        taskid: this.curTaskID
                    }
                }
            }, watch: {
                filesLength: function (t) {
                    this.filesLengthData = t
                }, "curTask.gcid": {
                    handler: function (t) {
                        this.curTaskGcid = t
                    }, immediate: !0
                }, curTaskID: function (t) {
                    t ? (this.initDetail(), this.showDetail()) : this.showHomePage()
                }, activeKey: function (t) {
                    var e = this.tabs.find(function (e) {
                        return e.key === t
                    });
                    e && this.reportTab(e.reportName, "show")
                }, tabs: function (t) {
                    var e = this;
                    t.filter(function (t) {
                        return t.key === e.activeKey
                    }).length || (this.activeKey = t[0].key)
                }, cur: function (t) {
                    1 === t && this.reportReturnHomePage("bottom", "show")
                }
            }, created: function () {
                var t = this;
                this.leaveTabSentry = function () {
                    1 === t.cur && (t.tabFixed = !0)
                }
            }, mounted: function () {
                var t = this;
                this.eleHtml = document.querySelector("html"), this.pageHeight = window.innerHeight, this.attachResizeEvent(), this.helpTipsPost({
                    action: "help_tips_entry_show",
                    position: "dl_page"
                }), this.$watch(function () {
                    return t.detailVisible && t.clientVisible && t.tabVisible
                }, function (e) {
                    e ? t.detailStartShowTime = Date.now() : t.detailStartShowTime && t.$stat("download_detail", "dltab_detail_page_duration", {duration: Date.now() - t.detailStartShowTime})
                }), v.a.api.attach("OnTabVisibleChange", function (e, i) {
                    t.clientVisible = e, t.tabVisible = i
                }), setInterval(function () {
                    var t = new Date;
                    if (5 === t.getHours()) {
                        var e = Object(w.format)(t, "YYYY-MM-DD"),
                            i = window.localStorage.getItem("autoRefreshHomePage");
                        i && i === e || (window.localStorage.setItem("autoRefreshHomePage", e), window.location.reload(!0))
                    }
                }, 3e5)
            }, methods: {
                handleUpdateActiveKey: function (t) {
                    var e = this.tabs.find(function (e) {
                        return e.key === t
                    });
                    e && this.reportTab(e.reportName, "click")
                }, reportTab: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
                    this.$stat("download_detail", "dltab_detail_tab_" + e, a()({}, this.reportCommonData, {tab: t}))
                }, rcountChange: function (t) {
                    this.rcount !== t && (this.rcount = t)
                }, filterRcount: function (t) {
                    return t > 999 ? "999+" : t || "0"
                }, filterFilelistLength: function (t) {
                    return t > 99 ? "99+" : t || "0"
                }, reportReady: function () {
                    return Object(g.b)("PageReady", "taskDetail")
                }, setTask: function () {
                    for (var t, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return (t = this.$store).commit.apply(t, ["tasks/set"].concat(o()(i)))
                }, reportClick: function (t, e) {
                    this.$stat("download_detail", "dltab_detail_curve_click", a()({}, this.reportCommonData, {
                        position: t,
                        button: e,
                        id: this.$sget(this.speedCurveSkinInfo, "id"),
                        is_speed: this.$sget(this.speedCurveSkinInfo, "is_vip_try") ? 1 : 0,
                        is_login: 0 !== parseInt(this.$sget(this.curUser, "userId")) ? 1 : 0,
                        vip_type: Object(b.b)(this.$sget(this.curUser))
                    }))
                }, reportRecommendShow: function (t) {
                    var e = t.itemInfo, i = t.block, n = t.id, o = t.num, r = t.type;
                    this.$stat("download_detail", "dltab_detail_recommend_show", a()({}, this.reportCommonData, {
                        iteminfo: e,
                        block: i,
                        gcid: n,
                        num: o,
                        type: r
                    }))
                }, reportRecommendClick: function (t) {
                    var e = t.block, i = t.id, n = t.rn, o = t.num, r = t.type, s = this.$store.state.reviews.all[i];
                    this.$stat("download_detail", "dltab_detail_recommend_click", a()({}, this.reportCommonData, {
                        rn: n,
                        iteminfo: s && s.title,
                        block: e,
                        gcid: i,
                        num: o,
                        type: r
                    }))
                }, reportMovieListClick: function (t) {
                    var e = t.button, i = t.id;
                    this.$stat("download_detail", "dltab_detail_recommend_feeds_click", a()({}, this.reportCommonData, {
                        button: e,
                        gcid: i
                    }))
                }, reportMovieListShow: function () {
                    this.$stat("download_detail", "dltab_detail_recommend_feeds_show", a()({}, this.reportCommonData))
                }, operate: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
                    this.reportClick(e, t);
                    for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
                    return g.b.apply(void 0, ["OperateTask", this.curTaskID, t].concat(o()(n)))
                }, attachResizeEvent: function () {
                    var t = this;
                    window.addEventListener("resize", function () {
                        t.transition = !1, t.pageHeight = window.innerHeight
                    })
                }, showHomePage: function () {
                    this.eleHtml.classList.remove("is-scroll"), this.transition = !0, this.cur = 0, this.detailVisible = !1, this.$stat("download_detail", "dltab_detail_backstart_click", this.reportCommonData)
                }, showDetail: function () {
                    var t = this;
                    this.detailReady = !1, this.detailVisible = !0, setTimeout(function () {
                        t.transition = !0, t.cur = 1, t.eleHtml.classList.add("is-scroll"), setTimeout(function () {
                            t.detailReady = !0
                        }, 500)
                    }, 200)
                }, initDetail: function () {
                    (document.scrollingElement || document.body).scrollTop = 0
                }, backToTop: function () {
                    (document.scrollingElement || document.body).scrollTop = 0, this.$stat("download_detail", "dltab_detail_backtop_click", this.reportCommonData)
                }, openHelpTab: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = "" === t ? "http://pc.xunlei.com/pages/#/help" : "http://pc.xunlei.com/pages/#/help/question?target=" + t;
                    Object(_.a)(e, "下载帮助")
                }, handleHelpIconHover: function (t) {
                    this.helpTipsPost({
                        action: "help_tips_entry_hover",
                        position: "dl_page",
                        type: "bar"
                    }), this.helpIconIsExpand = t, this.isHoveringHelpIcon = !!t
                }, handleHelpIconShow: function () {
                    var t = this;
                    this.helpIconIsExpand = !0, this.helpIconShowTimer = setTimeout(function () {
                        t.isHoveringHelpIcon || clearTimeout(t.helpIconShowTimer), t.helpIconIsExpand = !1
                    }, this.helpIconExpandTime)
                }, helpTipsPost: function (t) {
                    var e = t.action, i = t.position, n = t.type, o = void 0 === n ? "" : n;
                    this.$stat("download_detail", e, {position: i, type: o})
                }, reportReturnHomePage: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
                    t = "top" === t ? 1 : 2, this.$stat("download_detail", "quick_return_homepage_" + e, a()({}, this.reportCommonData, {button: t}))
                }
            }
        }
    }, VzI3: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("li", {
                staticClass: "xlx-attribute-progress__item",
                attrs: {title: t.description}
            }, [i("span", {staticClass: "xlx-attribute-progress__title"}, [t._v(t._s(t.label))]), i("td-progress", {
                attrs: {
                    value: t.fileSize ? ((t.downloadSize || 0) / t.fileSize * 100).toFixed(2) : "0.0",
                    "text-visible": ""
                }
            }, [t._v("\n    " + t._s(t.fileSize ? t.downloadSize > t.fileSize ? ">100%" : ((t.downloadSize || 0) / t.fileSize * 100).toFixed(2) + "%" : "0.00%") + "\n  ")]), i("span", {staticClass: "xlx-attribute-progress__size"}, [t._v("\n    " + t._s(t._f("file-size")(t.downloadSize)) + "\n  ")])], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, WEzc: function (t, e, i) {
        var n = i("yZj6"), o = i("oLzS"), r = i("utyv"), a = i("DEuz"), s = i("RY9c"), c = i("9jEu"), l = i("YamF"),
            p = i("ljsv"), u = i("Sd0T"), d = i("wBZN"), h = i("1Y2G"), f = i("xR/K"), x = i("uF9H"), m = i("nyx9"),
            g = i("Dsid");

        function v(t, e, i) {
            var n, o, r = t.size, a = f.getEncodedBits(e, i);
            for (n = 0; n < 15; n++) o = 1 == (a >> n & 1), n < 6 ? t.set(n, 8, o, !0) : n < 8 ? t.set(n + 1, 8, o, !0) : t.set(r - 15 + n, 8, o, !0), n < 8 ? t.set(8, r - n - 1, o, !0) : n < 9 ? t.set(8, 15 - n - 1 + 1, o, !0) : t.set(8, 15 - n - 1, o, !0);
            t.set(r - 8, 8, 1, !0)
        }

        function b(t, e, i) {
            var r = new a;
            i.forEach(function (e) {
                r.put(e.mode.bit, 4), r.put(e.getLength(), x.getCharCountIndicator(e.mode, t)), e.write(r)
            });
            var s = 8 * (o.getSymbolTotalCodewords(t) - u.getTotalCodewordsCount(t, e));
            for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
            for (var c = (s - r.getLengthInBits()) / 8, l = 0; l < c; l++) r.put(l % 2 ? 17 : 236, 8);
            return function (t, e, i) {
                for (var r = o.getSymbolTotalCodewords(e), a = u.getTotalCodewordsCount(e, i), s = r - a, c = u.getBlocksCount(e, i), l = c - r % c, p = Math.floor(r / c), h = Math.floor(s / c), f = h + 1, x = p - h, m = new d(x), g = 0, v = new Array(c), b = new Array(c), _ = 0, w = new n(t.buffer), k = 0; k < c; k++) {
                    var y = k < l ? h : f;
                    v[k] = w.slice(g, g + y), b[k] = m.encode(v[k]), g += y, _ = Math.max(_, y)
                }
                var C, T, E = new n(r), I = 0;
                for (C = 0; C < _; C++) for (T = 0; T < c; T++) C < v[T].length && (E[I++] = v[T][C]);
                for (C = 0; C < x; C++) for (T = 0; T < c; T++) E[I++] = b[T][C];
                return E
            }(r, t, e)
        }

        function _(t, e, i, n) {
            var r;
            if (g(t)) r = m.fromArray(t); else {
                if ("string" != typeof t) throw new Error("Invalid data");
                var a = e;
                if (!a) {
                    var u = m.rawSplit(t);
                    a = h.getBestVersionForData(u, i)
                }
                r = m.fromString(t, a || 40)
            }
            var d = h.getBestVersionForData(r, i);
            if (!d) throw new Error("The amount of data is too big to be stored in a QR Code");
            if (e) {
                if (e < d) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + d + ".\n")
            } else e = d;
            var f = b(e, i, r), x = o.getSymbolSize(e), _ = new s(x);
            return function (t, e) {
                for (var i = t.size, n = l.getPositions(e), o = 0; o < n.length; o++) for (var r = n[o][0], a = n[o][1], s = -1; s <= 7; s++) if (!(r + s <= -1 || i <= r + s)) for (var c = -1; c <= 7; c++) a + c <= -1 || i <= a + c || (s >= 0 && s <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && c >= 2 && c <= 4 ? t.set(r + s, a + c, !0, !0) : t.set(r + s, a + c, !1, !0))
            }(_, e), function (t) {
                for (var e = t.size, i = 8; i < e - 8; i++) {
                    var n = i % 2 == 0;
                    t.set(i, 6, n, !0), t.set(6, i, n, !0)
                }
            }(_), function (t, e) {
                for (var i = c.getPositions(e), n = 0; n < i.length; n++) for (var o = i[n][0], r = i[n][1], a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) -2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? t.set(o + a, r + s, !0, !0) : t.set(o + a, r + s, !1, !0)
            }(_, e), v(_, i, 0), e >= 7 && function (t, e) {
                for (var i, n, o, r = t.size, a = h.getEncodedBits(e), s = 0; s < 18; s++) i = Math.floor(s / 3), n = s % 3 + r - 8 - 3, o = 1 == (a >> s & 1), t.set(i, n, o, !0), t.set(n, i, o, !0)
            }(_, e), function (t, e) {
                for (var i = t.size, n = -1, o = i - 1, r = 7, a = 0, s = i - 1; s > 0; s -= 2) for (6 === s && s--; ;) {
                    for (var c = 0; c < 2; c++) if (!t.isReserved(o, s - c)) {
                        var l = !1;
                        a < e.length && (l = 1 == (e[a] >>> r & 1)), t.set(o, s - c, l), -1 == --r && (a++, r = 7)
                    }
                    if ((o += n) < 0 || i <= o) {
                        o -= n, n = -n;
                        break
                    }
                }
            }(_, f), isNaN(n) && (n = p.getBestMask(_, v.bind(null, _, i))), p.applyMask(n, _), v(_, i, n), {
                modules: _,
                version: e,
                errorCorrectionLevel: i,
                maskPattern: n,
                segments: r
            }
        }

        e.create = function (t, e) {
            if (void 0 === t || "" === t) throw new Error("No input text");
            var i, n, a = r.M;
            return void 0 !== e && (a = r.from(e.errorCorrectionLevel, r.M), i = h.from(e.version), n = p.from(e.maskPattern), e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)), _(t, i, a, n)
        }
    }, Wfyt: function (t, e, i) {
        var n = i("729m");
        e.render = n.render, e.renderToFile = function (t, n, o, r) {
            void 0 === r && (r = o, o = void 0);
            var a = i("vHs2"),
                s = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + e.render(n, o);
            a.writeFile(t, s, r)
        }
    }, "X/C1": function (t, e, i) {
        "use strict";
        e.a = {
            props: {
                id: {type: [String, Number], required: !0},
                cid: {type: [String, Number], required: !0},
                praisedClass: {type: String, required: !0},
                animationClass: {type: String, default: ""}
            }, data: function () {
                return {disabled: !1, isPraising: !1}
            }, computed: {
                praiseInfo: function () {
                    return this.$store.state.praise.praise[this.cid ? this.cid : this.id] || {}
                }, praiseNum: function () {
                    return this.praiseInfo.praiseNum
                }, isPraise: function () {
                    return this.praiseInfo.praised
                }
            }, methods: {
                praise: function () {
                    var t = this;
                    this.isPraise || this.disabled || (this.disabled = !0, this.isPraising = !0, setTimeout(function () {
                        t.isPraising = !1
                    }, 800), this.$store.commit("praise/set", {
                        praiseNum: 1 * this.praiseNum + 1,
                        isPraise: !0,
                        id: this.id,
                        cid: this.cid
                    }), this.cid ? this.$store.dispatch("praise/praiseComment", {
                        tid: this.id,
                        cid: this.cid
                    }).then(function () {
                        t.$emit("praise")
                    }).catch(function (e) {
                        var i = e instanceof Error ? e : new Error(e);
                        t.$raven.warn(i)
                    }).then(function () {
                        t.disabled = !1
                    }) : this.$store.dispatch("praise/praise", {id: this.id}).then(function () {
                        t.$emit("praise")
                    }).catch(function (e) {
                        var i = e instanceof Error ? e : new Error(e);
                        t.$raven.warn(i)
                    }).then(function () {
                        t.disabled = !1
                    }))
                }
            }
        }
    }, X0RI: function (t, e, i) {
        var n = i("yZj6"), o = i("NV47");
        e.mul = function (t, e) {
            var i = new n(t.length + e.length - 1);
            i.fill(0);
            for (var r = 0; r < t.length; r++) for (var a = 0; a < e.length; a++) i[r + a] ^= o.mul(t[r], e[a]);
            return i
        }, e.mod = function (t, e) {
            for (var i = new n(t); i.length - e.length >= 0;) {
                for (var r = i[0], a = 0; a < e.length; a++) i[a] ^= o.mul(e[a], r);
                for (var s = 0; s < i.length && 0 === i[s];) s++;
                i = i.slice(s)
            }
            return i
        }, e.generateECPolynomial = function (t) {
            for (var i = new n([1]), r = 0; r < t; r++) i = e.mul(i, [1, o.exp(r)]);
            return i
        }
    }, X4AI: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("R13e"), o = i("DUGm"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "pages\\task-detail.vue", e.default = r.exports
    }, XRcH: function (t, e, i) {
        t.exports = i.p + "img/spr-data-ani.d906a53.png"
    }, XZBC: function (t, e, i) {
        t.exports = i.p + "fonts/icon-custom.b1c4f67.woff"
    }, XbMm: function (t, e, i) {
        t.exports = i.p + "img/ani-activity.7e890c0.png"
    }, "Xo+z": function (t, e, i) {
        t.exports = i.p + "img/xlx-bookmarks.4204739.png"
    }, YamF: function (t, e, i) {
        var n = i("oLzS").getSymbolSize;
        e.getPositions = function (t) {
            var e = n(t);
            return [[0, 0], [e - 7, 0], [0, e - 7]]
        }
    }, YnST: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.icon.iconDisplay ? i("a", {
                attrs: {
                    href: t.icon.url,
                    target: "_blank"
                }
            }, [i("span", {
                staticClass: "ico-nav", on: {
                    mouseover: function (e) {
                        t.show = !0
                    }, mouseleave: function (e) {
                        t.show = !1
                    }
                }
            }, [t.show ? i("img", {
                attrs: {src: t.$sget(t.icon, "coverHover") || t.defaultIcon, alt: t.icon.text},
                on: {errpr: t.imgError}
            }) : i("img", {
                attrs: {src: t.$sget(t.icon, "cover") || t.defaultIcon, alt: t.icon.text},
                on: {error: t.imgError}
            }), i("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.$sget(t.icon, "isShowNew"),
                    expression: "$sget(icon, 'isShowNew')"
                }], staticClass: "tag-new"
            })]), i("span", {staticClass: "text"}, [t._v(t._s(t.icon.text))])]) : t._e()
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, Ywt1: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".canvas-data{transform-origin:top left;position:absolute!important}", ""])
    }, Z1db: function (t, e, i) {
        "use strict";
        var n = i("SAXu"), o = i("slrS"), r = !1;
        var a = function (t) {
            r || i("l1so")
        }, s = i("VU/8")(n.a, o.a, !1, a, null, null);
        s.options.__file = "components\\comment\\XlCommentInput.vue", e.a = s.exports
    }, Z33O: function (t, e, i) {
        t.exports = i.p + "fonts/xlx-icon-vip.dc70f17.ttf"
    }, ZDOR: function (t, e, i) {
        "use strict";
        e.a = {
            props: {
                config: {
                    type: Object, validator: function (t) {
                        return !t || ["success", "error", "warning"].includes(t.type) && t.content && t.delay
                    }, default: null
                }
            }, data: function () {
                return {show: !1, timer: 0}
            }, watch: {
                config: {
                    immediate: !0, handler: function (t) {
                        t && this.showMessage()
                    }
                }
            }, methods: {
                showMessage: function () {
                    var t = this;
                    clearTimeout(this.timer), this.show = !0, this.$emit("show"), this.timer = setTimeout(function () {
                        t.show = !1, t.$emit("hide")
                    }, this.config.delay)
                }
            }
        }
    }, ZKSA: function (t, e, i) {
        "use strict";
        var n = i("lbsf"), o = i("LHx/"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\comment\\XlEmoji.vue", e.a = r.exports
    }, ZeZP: function (t, e, i) {
        var n = i("ypCh");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("5c6a383c", n, !1)
    }, Zew7: function (t, e, i) {
        var n = i("7Eyl");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("7406dbd1", n, !1)
    }, "a+up": function (t, e, i) {
        "use strict";
        var n = i("Bcfi"), o = i("epkN"), r = i("aZ/4"), a = i("wSNb"), s = i("dI7G"), c = i("0RyA"), l = i("H/UN"),
            p = t.exports = function (t) {
                r.call(this), this._parser = new s(t, {
                    read: this.read.bind(this),
                    error: this._handleError.bind(this),
                    metadata: this._handleMetaData.bind(this),
                    gamma: this.emit.bind(this, "gamma"),
                    palette: this._handlePalette.bind(this),
                    transColor: this._handleTransColor.bind(this),
                    finished: this._finished.bind(this),
                    inflateData: this._inflateData.bind(this)
                }), this._options = t, this.writable = !0, this._parser.start()
            };
        n.inherits(p, r), p.prototype._handleError = function (t) {
            this.emit("error", t), this.writable = !1, this.destroy(), this._inflate && this._inflate.destroy && this._inflate.destroy(), this._filter && (this._filter.destroy(), this._filter.on("error", function () {
            })), this.errord = !0
        }, p.prototype._inflateData = function (t) {
            if (!this._inflate) if (this._bitmapInfo.interlace) this._inflate = o.createInflate(), this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), this._inflate.pipe(this._filter); else {
                var e = (1 + (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3)) * this._bitmapInfo.height,
                    i = Math.max(e, o.Z_MIN_CHUNK);
                this._inflate = o.createInflate({chunkSize: i});
                var n = e, r = this.emit.bind(this, "error");
                this._inflate.on("error", function (t) {
                    n && r(t)
                }), this._filter.on("complete", this._complete.bind(this));
                var a = this._filter.write.bind(this._filter);
                this._inflate.on("data", function (t) {
                    n && (t.length > n && (t = t.slice(0, n)), n -= t.length, a(t))
                }), this._inflate.on("end", this._filter.end.bind(this._filter))
            }
            this._inflate.write(t)
        }, p.prototype._handleMetaData = function (t) {
            this.emit("metadata", t), this._bitmapInfo = Object.create(t), this._filter = new a(this._bitmapInfo)
        }, p.prototype._handleTransColor = function (t) {
            this._bitmapInfo.transColor = t
        }, p.prototype._handlePalette = function (t) {
            this._bitmapInfo.palette = t
        }, p.prototype._finished = function () {
            this.errord || (this._inflate ? this._inflate.end() : this.emit("error", "No Inflate block"), this.destroySoon())
        }, p.prototype._complete = function (t) {
            if (!this.errord) {
                try {
                    var e = c.dataToBitMap(t, this._bitmapInfo), i = l(e, this._bitmapInfo);
                    e = null
                } catch (t) {
                    return void this._handleError(t)
                }
                this.emit("parsed", i)
            }
        }
    }, aRd0: function (t, e, i) {
        t.exports = i.p + "img/xlx-icon-16x16.f6c0850.png"
    }, "aT+b": function (t, e, i) {
        var n = i("vYXY");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("7d578689", n, !1)
    }, "aZ/4": function (t, e, i) {
        "use strict";
        var n = i("Bcfi"), o = i("97RM"), r = t.exports = function () {
            o.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = !1, this._encoding = "utf8", this.writable = !0
        };
        n.inherits(r, o), r.prototype.read = function (t, e) {
            this._reads.push({length: Math.abs(t), allowLess: t < 0, func: e}), process.nextTick(function () {
                this._process(), this._paused && this._reads.length > 0 && (this._paused = !1, this.emit("drain"))
            }.bind(this))
        }, r.prototype.write = function (t, e) {
            return this.writable ? (i = Buffer.isBuffer(t) ? t : new Buffer(t, e || this._encoding), this._buffers.push(i), this._buffered += i.length, this._process(), this._reads && 0 === this._reads.length && (this._paused = !0), this.writable && !this._paused) : (this.emit("error", new Error("Stream not writable")), !1);
            var i
        }, r.prototype.end = function (t, e) {
            t && this.write(t, e), this.writable = !1, this._buffers && (0 === this._buffers.length ? this._end() : (this._buffers.push(null), this._process()))
        }, r.prototype.destroySoon = r.prototype.end, r.prototype._end = function () {
            this._reads.length > 0 && this.emit("error", new Error("There are some read requests waiting on finished stream")), this.destroy()
        }, r.prototype.destroy = function () {
            this._buffers && (this.writable = !1, this._reads = null, this._buffers = null, this.emit("close"))
        }, r.prototype._processReadAllowingLess = function (t) {
            this._reads.shift();
            var e = this._buffers[0];
            e.length > t.length ? (this._buffered -= t.length, this._buffers[0] = e.slice(t.length), t.func.call(this, e.slice(0, t.length))) : (this._buffered -= e.length, this._buffers.shift(), t.func.call(this, e))
        }, r.prototype._processRead = function (t) {
            this._reads.shift();
            for (var e = 0, i = 0, n = new Buffer(t.length); e < t.length;) {
                var o = this._buffers[i++], r = Math.min(o.length, t.length - e);
                o.copy(n, e, 0, r), e += r, r !== o.length && (this._buffers[--i] = o.slice(r))
            }
            i > 0 && this._buffers.splice(0, i), this._buffered -= t.length, t.func.call(this, n)
        }, r.prototype._process = function () {
            try {
                for (; this._buffered > 0 && this._reads && this._reads.length > 0;) {
                    var t = this._reads[0];
                    if (t.allowLess) this._processReadAllowingLess(t); else {
                        if (!(this._buffered >= t.length)) break;
                        this._processRead(t)
                    }
                }
                this._buffers && this._buffers.length > 0 && null === this._buffers[0] && this._end()
            } catch (t) {
                this.emit("error", t)
            }
        }
    }, agAf: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ':root{--movie-title:#1a1a1a;--movie-text:#999;--movie-text-hover:#69f;--movie-background:#f7f7f7}.xlx-movie h2{font-size:16px;margin:30px 0 5px;color:var(--movie-title)}.xlx-movie__item{position:relative;display:flex;align-items:center;height:90px;padding:20px 0;border-bottom:solid 1px var(--comment-line)}.xlx-movie__item:hover{background:var(--movie-background)}.xlx-movie__image{position:relative;z-index:2;width:130px;height:100%;overflow:hidden}.xlx-movie__image img{width:100%;height:100%;object-fit:cover;border-radius:4px;transition:transform .3s}.xlx-movie__info{display:flex;flex-direction:column;justify-content:space-between;height:100%;margin-left:20px;width:calc(100% - 150px)}.xlx-movie__info h3{font-size:16px}.xlx-movie__info h3 a{color:var(--movie-title);transition:color .3s;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.xlx-movie__info h3 a:hover{color:var(--movie-text-hover)}.xlx-movie__from{display:flex;justify-content:space-between}.xlx-movie__from,.xlx-movie__from a{color:var(--movie-text)}.xlx-movie__from a:hover{color:var(--movie-text-hover)}.xlx-movie__user{width:calc(100% - 58px);display:flex;align-items:center}.xlx-movie__user-avatar{position:relative;z-index:2;width:20px;height:20px;margin-right:5px}.xlx-movie__user-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.xlx-movie__title{position:relative;z-index:2;display:inline-block;max-width:calc(100% - 65px);vertical-align:top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xlx-movie__view{display:flex;align-items:center;margin-right:10px}.xlx-movie__more{margin-top:20px;text-align:center}.xlx-movie__more a{position:relative;color:var(--movie-text-hover)}.xlx-movie__more a:after{display:inline-block;width:8px;height:8px;margin-left:5px;border-left:solid 1px var(--movie-text-hover);border-bottom:solid 1px var(--movie-text-hover);transform:rotate(-45deg);vertical-align:3px;content:""}.xlx-movie__link{position:absolute;top:0;right:0;bottom:0;left:0}', ""])
    }, "b2+w": function (t, e, i) {
        "use strict";
        var n = {
            single_source_shortest_paths: function (t, e, i) {
                var o = {}, r = {};
                r[e] = 0;
                var a, s, c, l, p, u, d, h = n.PriorityQueue.make();
                for (h.push(e, 0); !h.empty();) for (c in s = (a = h.pop()).value, l = a.cost, p = t[s] || {}) p.hasOwnProperty(c) && (u = l + p[c], d = r[c], (void 0 === r[c] || d > u) && (r[c] = u, h.push(c, u), o[c] = s));
                if (void 0 !== i && void 0 === r[i]) {
                    var f = ["Could not find a path from ", e, " to ", i, "."].join("");
                    throw new Error(f)
                }
                return o
            }, extract_shortest_path_from_predecessor_list: function (t, e) {
                for (var i = [], n = e; n;) i.push(n), t[n], n = t[n];
                return i.reverse(), i
            }, find_path: function (t, e, i) {
                var o = n.single_source_shortest_paths(t, e, i);
                return n.extract_shortest_path_from_predecessor_list(o, i)
            }, PriorityQueue: {
                make: function (t) {
                    var e, i = n.PriorityQueue, o = {};
                    for (e in t = t || {}, i) i.hasOwnProperty(e) && (o[e] = i[e]);
                    return o.queue = [], o.sorter = t.sorter || i.default_sorter, o
                }, default_sorter: function (t, e) {
                    return t.cost - e.cost
                }, push: function (t, e) {
                    var i = {value: t, cost: e};
                    this.queue.push(i), this.queue.sort(this.sorter)
                }, pop: function () {
                    return this.queue.shift()
                }, empty: function () {
                    return 0 === this.queue.length
                }
            }
        };
        t.exports = n
    }, bjtf: function (t, e, i) {
        t.exports = i.p + "img/xlx-icon-16x16-2x.799b569.png"
    }, c0Ma: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("a", {
                staticClass: "xlx-movie__item",
                attrs: {href: t.url, target: "_blank"},
                on: {
                    click: function (e) {
                        t.$emit("click", "other")
                    }
                }
            }, [i("div", {staticClass: "xlx-movie__image"}, [i("a", {
                staticClass: "article-picture",
                attrs: {href: t.url, target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "pic")
                    }
                }
            }, [i("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.imgObj,
                    expression: "imgObj"
                }]
            })])]), i("div", {staticClass: "xlx-movie__info"}, [i("h3", [i("a", {
                attrs: {
                    href: t.url,
                    target: "_blank",
                    title: t.review.title
                }, on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "title")
                    }
                }
            }, [t._v(t._s(t.review.title))])]), i("div", {staticClass: "xlx-movie__from"}, [i("div", {staticClass: "xlx-movie__user"}, [i("a", {
                staticClass: "xlx-movie__user-avatar",
                attrs: {href: t.getUserLink(t.review.uid), target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "head_pic")
                    }
                }
            }, [i("img", {
                directives: [{name: "lazy", rawName: "v-lazy", value: t.avartar, expression: "avartar"}],
                key: t.avartar
            })]), t.$sget(t.review, "media_info", "name") || t.$sget(t.review, "tag") ? [t._v("\n          评《"), i("a", {
                staticClass: "xlx-promote__name",
                attrs: {href: t.movieUrl, target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "film_name")
                    }
                }
            }, [t._v(t._s(t.$sget(t.review, "media_info", "name") || t.$sget(t.review, "tag")))]), t._v("》\n        ")] : [t._v("\n          评电影\n        ")]], 2), i("div", {staticClass: "xlx-movie__view"}, [i("i", {staticClass: "xlx-icon-view"}), t._v(t._s(t.review.show_count) + "\n      ")])])])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, c0Vv: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("a", {
                style: t.rotateStyle,
                attrs: {href: "javascript:;", title: "换一换"},
                on: {
                    click: function (e) {
                        t.deg += 180
                    }
                }
            }, [t._t("default")], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, cJP9: function (t, e) {
        t.exports = function () {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
        }
    }, cnMc: function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, ':root{--comment-link:#7698b7;--comment-color:#1a1a1a;--comment-quote-color:#a5b4c3;--comment-quote-background:#f5f5f5;--comment-color-main:#69f;--comment-disable:#ccc;--comment-line:#d7e7f1;--comment-fast:gray;--comment-placeholder:#ccc;--comment-name:#667f97}.xlx-comment{--color-primary:var(--comment-color-main);color:var(--comment-color)}.xlx-comment .xlx-comment-main{display:flex;margin-bottom:35px}.xlx-comment .xlx-comment__image{width:42px;height:42px;margin-right:22px}.xlx-comment .xlx-comment__image img{width:100%;border-radius:50%}.xlx-comment .td-textarea__inner{color:var(--comment-color)}.xlx-comment .td-textarea__inner::placeholder{color:var(--comment-placeholder)}.xlx-comment .xlx-comment__write{position:relative;display:flex;align-items:center;flex:1;background:transparent;border-radius:4px;border:solid 1px var(--comment-line);box-sizing:border-box}.xlx-comment .xlx-comment__write .td-textarea{width:calc(100% - 60px)}.xlx-comment .xlx-comment__write .td-textarea .td-textarea__inner{width:100%;height:30px;overflow:hidden;background:transparent;transition:.2s}.xlx-comment .xlx-comment__write.is-disabled{filter:grayscale(1) brightness(.95);user-select:none;pointer-events:none}.xlx-comment__oprate{height:30px;display:inline-flex;align-items:center;padding:0 10px}.xlx-comment__oprate .xlx-comment__line{width:1px;height:11px;margin:0 12px;background:var(--comment-line)}.xlx-comment__oprate .xlx-button-sumbit{color:var(--comment-link)}.xlx-comment__oprate .xlx-button-sumbit:hover{color:var(--color-primary)}.xlx-comment__oprate .xlx-button-sumbit.is-disabled{color:var(--color-primary-gray-2);cursor:default}.xlx-comment .xlx-comment__write.is-focus{display:block;text-align:right}.xlx-comment .xlx-comment__write.is-focus .td-textarea{width:100%;display:block}.xlx-comment .xlx-comment__write.is-focus .td-textarea__inner{width:100%;height:40px;overflow:auto;color:var(--comment-color)}.xlx-comment .xlx-comment__write .td-textarea__inner{border:0}.xlx-comment .xlx-comment__note{position:absolute;bottom:6px;left:8px;color:var(--color-danger-1)}.xlx-comment-list__item{display:flex;margin-bottom:20px}.xlx-comment-list__item .xlx-comment-list__speed{margin-left:8px;color:var(--comment-quote-color)}.xlx-comment-list__item .xlx-comment-list__speed.is-fast{color:var(--color-warn-1)}.xlx-comment-list__item.is-hot .xlx-comment-list__content{border-color:rgba(255,72,72,.3)}.xlx-comment-list__item.is-hot .xlx-comment-list__praise{color:var(--color-danger-1)}.xlx-comment-list__content{padding-bottom:20px;flex:1;width:calc(100% - 64px);border-bottom:solid 1px var(--comment-line)}.xlx-comment-list__content .xlx-comment-list__delete{display:none}.xlx-comment-list__content:hover .xlx-comment-list__delete{display:inline-block}.xlx-comment-list__header{display:flex;align-items:center;margin-bottom:14px}.xlx-comment-list__header .xlx-comment-list__user-name{margin-right:5px;color:var(--comment-name)}.xlx-comment-list__header .xlx-comment-list__user-name.is-vip{color:var(--color-danger-1)}.xlx-comment-list__body{margin-bottom:14px;line-height:16px}.xlx-comment-list__body .xlx-comment-list__text{word-wrap:break-word;white-space:pre-wrap}.xlx-comment-list__body .xlx-comment-list__quote{position:relative;padding:10px;margin-top:14px;background:var(--comment-quote-background);border-radius:5px;color:var(--comment-quote-color)}.xlx-comment-list__body .xlx-comment-list__quote-text{word-wrap:break-word;white-space:pre-wrap}.xlx-comment-list__wrapper{display:flex;justify-content:space-between;margin-top:14px}.xlx-comment-list__information{color:var(--comment-quote-color)}.xlx-comment-list__operate a{margin-left:20px;transition:.2s}.xlx-comment-list__operate a:hover{color:var(--color-primary)}.xlx-comment-list__operate>a{color:var(--comment-link)}.xlx-comment-list__operate .xlx-comment-list__praise.is-animation{position:relative}.xlx-comment-list__operate .xlx-comment-list__praise.is-animation:before{position:absolute;top:-13px;right:0;content:"+1";animation:praise-add .8s both}@keyframes praise-add{0%{transform:translateZ(0);opacity:0}40%,60%{transform:translate3d(0,-5px,0);opacity:1}to{transform:translate3d(0,-10px,0);opacity:0}}.is-active.xlx-comment-list__comment,.is-active.xlx-comment-list__praise{color:var(--color-primary)}.is-hot .is-active.xlx-comment-list__praise{color:var(--color-danger-1)}.xlx-comment-list__footer .xlx-comment__write{margin-top:14px}.xlx-comment-fast{padding-left:64px}.xlx-comment-fast .xlx-comment-fast__title-text{display:flex;align-items:center;color:var(--comment-quote-color)}.xlx-comment-fast .xlx-comment-fast__refresh{color:var(--color-primary)}.xlx-comment-fast .xlx-comment-fast__content{display:flex;flex-wrap:wrap;margin:10px 0 0 -10px}.xlx-comment-fast .xlx-comment-fast__item{display:inline-block;margin:0 0 10px 10px;padding:0 10px;line-height:30px;color:var(--comment-fast);border:solid 1px var(--comment-line);border-radius:4px;transition:.2s}.xlx-comment-fast .xlx-comment-fast__item:hover{color:var(--color-primary);border-color:var(--color-primary)}.td-pagination{margin-left:64px}.xlx-face{position:relative}.xlx-face .xlx-face__icon{color:var(--comment-link)}.xlx-face .xlx-face__icon:hover{color:var(--color-primary)}.xlx-face-emoji{position:absolute;z-index:99;width:200px;padding:10px 6px;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.1)}.xlx-comment-tips{padding:27px 0 50px;text-align:center}.xlx-comment-tips h2{margin-bottom:8px;font-size:16px;color:#7b7b7b}.xlx-comment-tips p{margin-bottom:10px;color:#bfbfbf}.xlx-comment-tips .xlx-icon-blank-comment{display:block;margin:0 auto;width:280px;height:55px;background:url(' + n(i("Kc4X")) + ") no-repeat;background-size:280px auto}", ""])
    }, dI7G: function (t, e, i) {
        "use strict";
        var n = i("02QL"), o = i("eVFE"), r = t.exports = function (t, e) {
            this._options = t, t.checkCRC = !1 !== t.checkCRC, this._hasIHDR = !1, this._hasIEND = !1, this._palette = [], this._colorType = 0, this._chunks = {}, this._chunks[n.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[n.TYPE_IEND] = this._handleIEND.bind(this), this._chunks[n.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[n.TYPE_PLTE] = this._handlePLTE.bind(this), this._chunks[n.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[n.TYPE_gAMA] = this._handleGAMA.bind(this), this.read = e.read, this.error = e.error, this.metadata = e.metadata, this.gamma = e.gamma, this.transColor = e.transColor, this.palette = e.palette, this.parsed = e.parsed, this.inflateData = e.inflateData, this.finished = e.finished
        };
        r.prototype.start = function () {
            this.read(n.PNG_SIGNATURE.length, this._parseSignature.bind(this))
        }, r.prototype._parseSignature = function (t) {
            for (var e = n.PNG_SIGNATURE, i = 0; i < e.length; i++) if (t[i] !== e[i]) return void this.error(new Error("Invalid file signature"));
            this.read(8, this._parseChunkBegin.bind(this))
        }, r.prototype._parseChunkBegin = function (t) {
            for (var e = t.readUInt32BE(0), i = t.readUInt32BE(4), r = "", a = 4; a < 8; a++) r += String.fromCharCode(t[a]);
            var s = Boolean(32 & t[4]);
            if (this._hasIHDR || i === n.TYPE_IHDR) {
                if (this._crc = new o, this._crc.write(new Buffer(r)), this._chunks[i]) return this._chunks[i](e);
                s ? this.read(e + 4, this._skipChunk.bind(this)) : this.error(new Error("Unsupported critical chunk type " + r))
            } else this.error(new Error("Expected IHDR on beggining"))
        }, r.prototype._skipChunk = function () {
            this.read(8, this._parseChunkBegin.bind(this))
        }, r.prototype._handleChunkEnd = function () {
            this.read(4, this._parseChunkEnd.bind(this))
        }, r.prototype._parseChunkEnd = function (t) {
            var e = t.readInt32BE(0), i = this._crc.crc32();
            this._options.checkCRC && i !== e ? this.error(new Error("Crc error - " + e + " - " + i)) : this._hasIEND || this.read(8, this._parseChunkBegin.bind(this))
        }, r.prototype._handleIHDR = function (t) {
            this.read(t, this._parseIHDR.bind(this))
        }, r.prototype._parseIHDR = function (t) {
            this._crc.write(t);
            var e = t.readUInt32BE(0), i = t.readUInt32BE(4), o = t[8], r = t[9], a = t[10], s = t[11], c = t[12];
            if (8 === o || 4 === o || 2 === o || 1 === o || 16 === o) if (r in n.COLORTYPE_TO_BPP_MAP) if (0 === a) if (0 === s) if (0 === c || 1 === c) {
                this._colorType = r;
                var l = n.COLORTYPE_TO_BPP_MAP[this._colorType];
                this._hasIHDR = !0, this.metadata({
                    width: e,
                    height: i,
                    depth: o,
                    interlace: Boolean(c),
                    palette: Boolean(r & n.COLORTYPE_PALETTE),
                    color: Boolean(r & n.COLORTYPE_COLOR),
                    alpha: Boolean(r & n.COLORTYPE_ALPHA),
                    bpp: l,
                    colorType: r
                }), this._handleChunkEnd()
            } else this.error(new Error("Unsupported interlace method")); else this.error(new Error("Unsupported filter method")); else this.error(new Error("Unsupported compression method")); else this.error(new Error("Unsupported color type")); else this.error(new Error("Unsupported bit depth " + o))
        }, r.prototype._handlePLTE = function (t) {
            this.read(t, this._parsePLTE.bind(this))
        }, r.prototype._parsePLTE = function (t) {
            this._crc.write(t);
            for (var e = Math.floor(t.length / 3), i = 0; i < e; i++) this._palette.push([t[3 * i], t[3 * i + 1], t[3 * i + 2], 255]);
            this.palette(this._palette), this._handleChunkEnd()
        }, r.prototype._handleTRNS = function (t) {
            this.read(t, this._parseTRNS.bind(this))
        }, r.prototype._parseTRNS = function (t) {
            if (this._crc.write(t), this._colorType === n.COLORTYPE_PALETTE_COLOR) {
                if (0 === this._palette.length) return void this.error(new Error("Transparency chunk must be after palette"));
                if (t.length > this._palette.length) return void this.error(new Error("More transparent colors than palette size"));
                for (var e = 0; e < t.length; e++) this._palette[e][3] = t[e];
                this.palette(this._palette)
            }
            this._colorType === n.COLORTYPE_GRAYSCALE && this.transColor([t.readUInt16BE(0)]), this._colorType === n.COLORTYPE_COLOR && this.transColor([t.readUInt16BE(0), t.readUInt16BE(2), t.readUInt16BE(4)]), this._handleChunkEnd()
        }, r.prototype._handleGAMA = function (t) {
            this.read(t, this._parseGAMA.bind(this))
        }, r.prototype._parseGAMA = function (t) {
            this._crc.write(t), this.gamma(t.readUInt32BE(0) / n.GAMMA_DIVISION), this._handleChunkEnd()
        }, r.prototype._handleIDAT = function (t) {
            this.read(-t, this._parseIDAT.bind(this, t))
        }, r.prototype._parseIDAT = function (t, e) {
            if (this._crc.write(e), this._colorType === n.COLORTYPE_PALETTE_COLOR && 0 === this._palette.length) throw new Error("Expected palette not found");
            this.inflateData(e);
            var i = t - e.length;
            i > 0 ? this._handleIDAT(i) : this._handleChunkEnd()
        }, r.prototype._handleIEND = function (t) {
            this.read(t, this._parseIEND.bind(this))
        }, r.prototype._parseIEND = function (t) {
            this._crc.write(t), this._hasIEND = !0, this._handleChunkEnd(), this.finished && this.finished()
        }
    }, dnlk: function (t, e, i) {
        "use strict";
        var n = i("Rhsk");
        e.a = {
            props: {
                reviewId: {type: Number, default: 0}, review: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {
                cover: function () {
                    return Object(n.g)(this.review.cover_url, 1, 260, 180) + "/format/jpg"
                }, url: function () {
                    return "http://movie.xunlei.com/reviews/" + this.reviewId
                }, movieUrl: function () {
                    var t = this.review.media_id;
                    return t ? "http://movie.xunlei.com/movies/" + t : ""
                }, imgObj: function () {
                    var t = i("QXBO");
                    return {src: this.cover, loading: t, error: t}
                }, avartar: function () {
                    return this.$sget(this.$store.state.users.all, this.$sget(this.review, "uid"), "portrait_url") || this.getAvatar(this.$sget(this.review, "uid"))
                }
            }, methods: {getAvatar: n.c, getUserLink: n.e}
        }
    }, "e/Sy": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i("CBtw"), o = i("eFwr"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "pages\\property.vue", e.default = r.exports
    }, e1OG: function (t, e, i) {
        "use strict";
        var n = i("yxXY"), o = i("7udH"), r = i.n(o), a = i("KkRX"), s = i("PeDW");
        e.a = n.a.connect({
            mapStateToProps: {
                quickReviewConfigs: function (t, e) {
                    var i = a.a[e.suffix], n = s.a[i] || "5";
                    return r()(t.comments.quickReview[n], "reviews") || []
                }
            }, mapDispatchToProps: {getSpeedRank: "comments/getSpeedRank"}
        })
    }, eFwr: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "xlx-attribute"}, [i("div", {staticClass: "xlx-attribute-progress"}, [i("ul", {staticClass: "xlx-attribute-progress__list"}, [i("XlPropertyItem", {
                staticClass: "xlx-attribute-progress__item--address",
                attrs: {
                    label: "原始地址",
                    description: "通过原始下载地址指向的服务器进行下载",
                    "file-size": t.fileSize,
                    "download-size": t.$sget(t.curTask, "channelInfo", "originSize")
                }
            }), i("XlPropertyItem", {
                staticClass: "xlx-attribute-progress__item--mirror",
                attrs: {
                    label: "镜像加速",
                    description: "通过其它拥有相同资源的服务器进行下载",
                    "file-size": t.fileSize,
                    "download-size": t.$sget(t.curTask, "channelInfo", "p2sSize")
                }
            }), i("XlPropertyItem", {
                staticClass: "xlx-attribute-progress__item--p2p",
                attrs: {
                    label: "P2P加速",
                    description: "通过其它拥有相同资源的用户进行下载",
                    "file-size": t.fileSize,
                    "download-size": t.$sget(t.curTask, "channelInfo", "p2pSize")
                }
            }), i("XlPropertyItem", {
                staticClass: "xlx-attribute-progress__item--vip",
                attrs: {
                    label: "会员加速",
                    description: "通过迅雷会员专属加速通道进行下载",
                    "file-size": t.fileSize,
                    "download-size": t.$sget(t.curTask, "channelInfo", "dcdnSize") + t.$sget(t.curTask, "channelInfo", "offlineSize")
                }
            })], 1), t._m(0)]), i("div", {staticClass: "xlx-attribute-info"}, [i("ul", {staticClass: "xlx-attribute-info__list"}, [i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("存储目录：")]), i("a", {
                staticClass: "xlx-attribute-info__path",
                attrs: {href: "javascript:;"},
                on: {click: t.openSavePath}
            }, [t._v("\n            " + t._s(t.savePath) + "\n          ")])]), i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("特征码：")]), i("p", {staticClass: "xlx-attribute-info__text"}, [t.$sget(t.curTask, "infoId") ? [t._v("\n              " + t._s(t.$sget(t.curTask, "infoId")) + "\n            ")] : [t._v("\n              该任务暂无特征码\n            ")]], 2), t.$sget(t.curTask, "infoId") ? i("a", {
                staticClass: "xlx-attribute-info__act",
                attrs: {href: "javascript:;"},
                on: {click: t.copyInfoId}
            }, [t._v("\n            " + t._s(t.copyTipText) + "\n          ")]) : t._e()]), i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("下载历时：")]), i("p", {staticClass: "xlx-attribute-info__text"}, [t._v("\n            " + t._s(t._f("duration")(t.$sget(t.curTask, "duration") || 1)) + "\n          ")])]), i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("创建时间：")]), i("p", {staticClass: "xlx-attribute-info__text"}, [t._v("\n            " + t._s(t._f("date-time")(t.$sget(t.curTask, "createTime"))) + "\n          ")])]), i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("\n            完成时间：\n          ")]), i("p", {staticClass: "xlx-attribute-info__text"}, [t.$sget(t.curTask, "completeTime") ? [t._v("\n              " + t._s(t._f("date-time")(t.$sget(t.curTask, "completeTime"))) + "\n            ")] : [t._v("\n              该数据需等待任务下载完成\n            ")]], 2)]), i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("md5：")]), i("p", {staticClass: "xlx-attribute-info__text"}, [t.$sget(t.curTask, "subFilesCount") ? [t._v("\n              文件夹不支持MD5值计算\n            ")] : t.shouldShowMd5 ? [t._v("\n              " + t._s(t.$sget(t.curTask, "md5") || "md5值获取中") + "\n            ")] : [t._v("\n              该数据需等待任务下载完成\n            ")]], 2)]), i("li", {staticClass: "xlx-attribute-info__item"}, [i("span", {staticClass: "xlx-attribute-info__title"}, [t._v("注释：")]), i("label", {staticClass: "td-input"}, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.note,
                    expression: "note"
                }],
                staticClass: "td-input__inner",
                attrs: {type: "text", maxlength: "450", placeholder: "未填写"},
                domProps: {value: t.note},
                on: {
                    focus: function (e) {
                        t.noteDraft = t.note, t.noteEditing = !0
                    }, blur: function (e) {
                        t.operate("note", "", t.note), t.noteEditing = !1
                    }, input: function (e) {
                        e.target.composing || (t.note = e.target.value)
                    }
                }
            })])])])])])
        };
        n._withStripped = !0;
        var o = {
            render: n, staticRenderFns: [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "xlx-attribute-progress__detail"}, [e("i", {
                    staticClass: "td-icon-info",
                    attrs: {title: "以上数据表明，您在下载此任务过程中，分别利用哪些加速\n方式，总共下载过多少数据。由于迅雷下载过程中会对数据\n进行校验，因此可能会废弃部分错误的数据，然后重新下载\n正确数据。此时统计到的下载数据量会超出文件自身大小，加\n速百分比之和也可能超出100%，这是正常现象。"}
                })])
            }]
        };
        e.a = o
    }, eLLv: function (t, e, i) {
        "use strict";
        e.a = function (t, e) {
            s.a.promiseApi("getTabIdByContext", e).then(null, function () {
                return ""
            }).then(function (i) {
                i.length > 0 ? s.a.promiseApi("selectTab", i) : s.a.promiseApi("openNewTab", a()({}, {
                    url: t,
                    selected: !0,
                    mainTab: !1
                }, e ? {context: e} : {})).then(function (t) {
                    if (!t) return o.a.reject(new Error("no tab Id"))
                }).then(null, function () {
                    window.open(t, e)
                })
            })
        };
        var n = i("//Fk"), o = i.n(n), r = i("woOf"), a = i.n(r), s = i("Cb+C")
    }, eVFE: function (t, e, i) {
        "use strict";
        var n = [];
        !function () {
            for (var t = 0; t < 256; t++) {
                for (var e = t, i = 0; i < 8; i++) 1 & e ? e = 3988292384 ^ e >>> 1 : e >>>= 1;
                n[t] = e
            }
        }();
        var o = t.exports = function () {
            this._crc = -1
        };
        o.prototype.write = function (t) {
            for (var e = 0; e < t.length; e++) this._crc = n[255 & (this._crc ^ t[e])] ^ this._crc >>> 8;
            return !0
        }, o.prototype.crc32 = function () {
            return -1 ^ this._crc
        }, o.crc32 = function (t) {
            for (var e = -1, i = 0; i < t.length; i++) e = n[255 & (e ^ t[i])] ^ e >>> 8;
            return -1 ^ e
        }
    }, es3O: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ":root{--file-color-border:#e2ebf1;--file-background:#f9faff;--file-background-row:#f2f3fb;--color-text:#1a1a1a;--file-color-disable:#ccc;--file-link:#69f;--file-link-hover:#4b87ff;--file-gray-1:#b3b3b3;--file-gray-2:#ccc;--file-gray-3:#f5f5f5;--file-checkbox:#fff;--file-background-checkbox:#fff;--file-background-footer:#f9faff;--file-button-fill:#69f;--file-button-fill-hover:#4b87ff}.xlx-file-list{--button-default-fill:var(--file-link);--button-default-fill-hover:var(--file-link-hover);--tree-background:var(--file-background-row)}.xlx-file-list .td-tree-node__image-icon{margin:0 auto}.xlx-file-list .td-table{background:var(--file-background);color:var(--color-text)}.xlx-file-list .td-table,.xlx-file-list .td-table th{border-color:var(--file-color-border)}.xlx-file-list .td-table th a{color:var(--color-text)}.xlx-file-list .td-table td{border-color:var(--file-color-border)}.xlx-file-list .td-table--stripe tr:nth-child(2n){background-color:var(--file-background-row)}.xlx-file-list .td-table__footer-wrapper{background:var(--file-background-footer);border-color:var(--file-color-border)}.xlx-file-list .td-icon-sequence.is-ascending{background-image:linear-gradient(180deg,var(--color-default) 50%,var(--color-primary-gray-1) 51%)}.xlx-file-list .td-icon-sequence.is-descending{background-image:linear-gradient(180deg,var(--color-primary-gray-1) 50%,var(--color-default) 51%)}.xlx-file-list .td-checkbox.is-disabled{cursor:default}.xlx-file-list .td-checkbox.is-disabled .td-checkbox__inner:checked{border-color:transparent}.xlx-file-list .td-checkbox.is-checked .td-checkbox__inner:checked{background:var(--color-primary)}.xlx-file-list .td-checkbox__inner{background:var(--file-background-checkbox)}.xlx-file-list .td-checkbox__inner:before{border-color:var(--file-checkbox)}.xlx-file-list .td-table__header{padding-right:6px}.xlx-file-list .td-tree-node{max-width:calc(100% - 10px);margin-right:5px;box-sizing:border-box}.xlx-file-list .td-checkbox.is-disabled .td-checkbox__label{color:var(--color-text)}.xlx-file-list .td-tree-node__image-icon{background:transparent}.xlx-file-list .td-button{margin-right:5px;background:var(--file-button-fill)}.xlx-file-list .td-button:hover{background:var(--file-button-fill-hover)}.xlx-file-list .td-table-tree__row.is-deleted .td-tree-node__image-icon{opacity:.5}.xlx-file-list .td-table-tree__row.is-deleted .td-tree-node__label,.xlx-file-list .td-table-tree__row.is-deleted .xlx-file-list__size,.xlx-file-list .td-table-tree__row.is-deleted .xlx-file-list__status{color:var(--file-color-disable)}.xlx-file-list .td-icon-info{color:var(--file-link);vertical-align:-1px}.xlx-file-list__column-2{width:90px}.xlx-file-list__size,.xlx-file-list__status{margin:0 10px}.xlx-file-list .xlx-file-list__status .is-error{color:var(--color-danger-1)}.xlx-file-list a.xlx-file-list__status{color:var(--file-link)}.xlx-file-list a.xlx-file-list__status:hover{color:var(--file-link-hover)}.xlx-file-list.is-fixed{padding-bottom:37px}.xlx-file-list.is-fixed .td-table__footer-wrapper{position:fixed;bottom:0;left:50px;right:42px;border:solid 1px var(--file-color-border)}", ""])
    }, fZGk: function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), r = i("exGp"), a = i.n(r), s = i("Dd8w"), c = i.n(s), l = i("NYxO"),
            p = i("Rhsk"), u = i("oxQo"), d = i("Ki5d"), h = i("U3RP"), f = i("Z1db"), x = i("4nU2"), m = i("EQpe"),
            g = i("NAp3");
        e.a = {
            components: {
                XlVip: d.a,
                XlPraise: h.a,
                XlCommentInput: Object(x.a)(f.a),
                XlConfirm: m.a,
                XLUserHeadCard: g.a
            },
            props: {
                type: {type: String, default: ""},
                comment: {type: Object, default: null},
                entryPage: {type: String, default: ""},
                entryHead: {type: String, default: ""},
                entryName: {type: String, default: ""},
                resourceUser: {type: [String, Number], default: ""},
                timeFormat: {type: String, default: ""},
                tid: {type: String, default: ""},
                maxLength: {type: Number, default: 0},
                index: {type: Number, default: 0},
                commentLength: {type: Number, default: 0},
                showReply: {type: [String, Number], default: 0},
                removeCommentCallback: {
                    type: Function, default: function () {
                    }
                }
            },
            data: function () {
                return {showPop: !1, showReplyReply: !1, popImg: "", focus: !1, confirmVisible: !1}
            },
            computed: c()({}, Object(l.mapState)({
                supportChat: "supportChat", curUser: function (t) {
                    return t.users.curUser
                }
            }), {
                user: function () {
                    return this.getUser(this.comment.uid) || {nick_name: "迅雷用户"}
                }, vipData: function () {
                    return this.user.vip_extra || []
                }, vipInfo: function () {
                    return this.$vipInfo(this.vipData) || {}
                }, replyUser: function () {
                    return this.getUser(this.comment.replys[0].uid) || this.comment.replys[0]
                }, isMobile: function () {
                    return this.$store.state.isMobile
                }, isReplyDeleted: function () {
                    return "-1" === this.comment.replys[0].cid
                }, speed: function () {
                    return Object(p.d)(this.comment.downLoadSpeed)
                }
            }),
            beforeDestroy: function () {
                this.$el && this.$el.parentElement && this.$el.parentElement.removeChild(this.$el)
            },
            methods: {
                getUserLink: p.e, replaceEmoji: p.h, getUser: function (t) {
                    return this.$sget(this.$store.state.users.all, t)
                }, getTime: function (t) {
                    switch (this.timeFormat) {
                        case"getPubTime":
                            return Object(u.e)(t);
                        case"createTimeFormat":
                            return Object(u.a)(t)
                    }
                }, clickReply: function (t) {
                    this.showReply === t ? this.$emit("update:showReply", 0) : (this.$emit("update:showReply", t), this.triggerReply()), this.$emit("clickReply", {cid: t})
                }, sendReply: function (t) {
                    this.$emit("sendReply", {cid: t.cid})
                }, userCardShow: function () {
                    this.$stat("right_area", "filmlib_usercard_show")
                }, userCardClick: function (t) {
                    this.$stat("right_area", "filmlib_usercard_click", {button: t})
                }, triggerReply: function () {
                    this.isMobile && this.$store.commit("setCurComment", this.comment)
                }, handleDeleteClick: function () {
                    this.$emit("click", "delete", {cid: this.comment.cid}), this.remove()
                }, remove: function () {
                    var t = a()(o.a.mark(function t() {
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, this.$store.dispatch("comments/delete", {
                                        tid: this.tid,
                                        sourceId: this.tid,
                                        cid: this.comment.cid
                                    });
                                case 3:
                                    this.removeCommentCallback(), t.next = 8;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(0);
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[0, 6]])
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }()
            }
        }
    }, fZOM: function (t, e, i) {
        var n = i("kM2E"), o = i("mbce")(!1);
        n(n.S, "Object", {
            values: function (t) {
                return o(t)
            }
        })
    }, fh5k: function (t, e, i) {
        "use strict";
        var n = i("yxXY");
        e.a = n.a.connect({
            mapStateToProps: {
                review: function (t, e) {
                    return t.reviews.all[e.reviewId]
                }
            }
        })
    }, fr4K: function (t, e, i) {
        var n = i("Ywt1");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("3b3cb5c2", n, !1)
    }, fs20: function (t, e, i) {
        "use strict";
        var n = i("Gu7T"), o = i.n(n), r = i("Zrlr"), a = i.n(r), s = i("wxAW"), c = i.n(s), l = function () {
            function t(e) {
                var i = e.points, n = void 0 === i ? [] : i, r = e.degree, s = void 0 === r ? 4 : r, c = e.tessellation,
                    l = void 0 === c ? 10 : c;
                a()(this, t), n.length >= 2 ? this.points = [this.getExtendPoint(n[0], n[1])].concat(o()(n), [this.getExtendPoint(n[n.length - 1], n[n.length - 2])]) : this.points = n, this.degree = s, this.tessellation = l, this.curvePoints = [], this.knotVector = [], this.uniformRender()
            }

            return c()(t, [{
                key: "getExtendPoint", value: function (t, e) {
                    return {x: e.x - 2 * (e.x - t.x), y: e.y - 2 * (e.y - t.y)}
                }
            }, {
                key: "uniformRender", value: function () {
                    if (this.createKnots(), !(this.points.length < 2)) {
                        for (var t = 1 / this.tessellation, e = this.knotVector[this.degree]; e < this.knotVector[this.knotVector.length - this.degree - 1]; e += t) {
                            var i = this.deBoor(e);
                            this.curvePoints.push(i)
                        }
                        var n = this.deBoor(this.knotVector[this.knotVector.length - this.degree - 1]);
                        this.curvePoints.push(n)
                    }
                }
            }, {
                key: "createKnots", value: function () {
                    if (this.knotVector = [], this.points.length >= 2) for (var t = this.degree + this.points.length + 1, e = 1 / (t - 1), i = 0; i < t; i++) this.knotVector.push(i * e)
                }
            }, {
                key: "deBoor", value: function (t) {
                    for (var e = 0, i = 0, n = 0; n < this.points.length; n++) {
                        var o = this.basisFunction(n, this.degree, t);
                        o > 0 && (e += this.points[n].x * o, i += this.points[n].y * o)
                    }
                    return [e, i]
                }
            }, {
                key: "basisFunction", value: function (t, e, i) {
                    if (0 === e) return this.knotVector[t] <= i && i < this.knotVector[t + 1] ? 1 : 0;
                    var n = (i - this.knotVector[t]) / (this.knotVector[t + e] - this.knotVector[t]),
                        o = (this.knotVector[t + e + 1] - i) / (this.knotVector[t + e + 1] - this.knotVector[t + 1]);
                    return n * this.basisFunction(t, e - 1, i) + o * this.basisFunction(t + 1, e - 1, i)
                }
            }]), t
        }();
        e.a = l
    }, g018: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("a", {
                directives: [{
                    name: "see", rawName: "v-see", value: function () {
                        return t.$emit("see", t.review.title)
                    }, expression: "() => $emit('see', review.title)"
                }], staticClass: "xlx-promote__item", attrs: {href: t.url, target: "_blank"}, on: {
                    click: function (e) {
                        t.$emit("click", "other")
                    }
                }
            }, [i("div", {staticClass: "xlx-promote__content"}, [i("a", {
                staticClass: "xlx-promote__picture",
                attrs: {href: t.url, target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "pic")
                    }
                }
            }, [i("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.imgObj,
                    expression: "imgObj"
                }]
            }), i("span", {staticClass: "xlx-promote__view"}, [i("i", {staticClass: "xlx-icon-view"}), t._v(t._s(t.review.show_count))])]), i("div", {staticClass: "xlx-promote__detail"}, [i("a", {
                staticClass: "xlx-promote__text",
                attrs: {href: t.url, target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "title")
                    }
                }
            }, [t._v(t._s(t.review.title))]), i("div", {staticClass: "xlx-promote__detail-user"}, [i("a", {
                staticClass: "xlx-promote__avatar",
                attrs: {target: "_blank", href: t.getUserLink(t.review.uid)}
            }, [i("img", {
                directives: [{name: "lazy", rawName: "v-lazy", value: t.avartar, expression: "avartar"}],
                key: t.avartar,
                attrs: {alt: "用户头像"}
            })]), t.$sget(t.review, "media_info", "name") || t.$sget(t.review, "tag") ? [t._v("\n          评《"), i("a", {
                staticClass: "xlx-promote__name",
                attrs: {href: t.movieUrl, target: "_blank"},
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.$emit("click", "film_name")
                    }
                }
            }, [t._v(t._s(t.$sget(t.review, "media_info", "name") || t.$sget(t.review, "tag")))]), t._v("》\n        ")] : [t._v("\n          评电影\n        ")]], 2)])])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, gKGV: function (t, e, i) {
        var n = i("Izq9");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("75cf47f1", n, !1)
    }, gL2E: function (t, e, i) {
        var n = i("cnMc");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("2e2d0a19", n, !1)
    }, gRE1: function (t, e, i) {
        t.exports = {default: i("TmV0"), __esModule: !0}
    }, garV: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.kinds.includes("review_num") ? i("a", {
                class: "sm" === t.size ? "ico-label label-media" : "label-media",
                attrs: {
                    href: "http://movie.xunlei.com/auth/signMedia?type=0&entrypage=" + t.entryPage + "&entry=" + t.entry,
                    target: "_blank",
                    title: "sm" === t.size ? "影评号" : ""
                },
                on: {
                    click: function (e) {
                        t.badgeClick("critic")
                    }
                }
            }, ["lg" === t.size ? i("i", {staticClass: "ico-media"}) : t._e(), t._v(t._s(t.reviewNum) + "\n")]) : t.kinds.includes("signer") ? i("a", {
                class: "sm" === t.size ? "ico-label label-sign" : "label-sign",
                attrs: {
                    href: "http://movie.xunlei.com/auth/signWriter?type=2&entrypage=" + t.entryPage + "&entry=" + t.entry,
                    target: "_blank",
                    title: "sm" === t.size ? "签约写手" : ""
                },
                on: {
                    click: function (e) {
                        t.badgeClick("writer")
                    }
                }
            }, ["lg" === t.size ? i("i", {staticClass: "ico-sign"}) : t._e(), t._v(t._s(t.signer) + "\n")]) : t.kinds.includes("review_expert") ? i("a", {
                class: "sm" === t.size ? "ico-label label-talent" : "label-talent",
                attrs: {
                    href: "http://movie.xunlei.com/auth/signExpert?type=1&entrypage=" + t.entryPage + "&entry=" + t.entry,
                    target: "_blank",
                    title: "sm" === t.size ? "影评达人" : ""
                },
                on: {
                    click: function (e) {
                        t.badgeClick("expert")
                    }
                }
            }, ["lg" === t.size ? i("i", {staticClass: "ico-talent"}) : t._e(), t._v(t._s(t.reviewExpert) + "\n")]) : "lg" === t.size && t.kinds.includes("film_review") ? i("span", {staticClass: "label-identity label-official"}, [i("i", {staticClass: "ico-official"}), t._v("官方号")]) : "sm" === t.size && t.kinds.includes("film_review") ? i("span", {
                staticClass: "ico-official",
                attrs: {title: "官方号"}
            }) : t._e()
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, gmCW: function (t, e, i) {
        var n = i("Mo24");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("0eaa5924", n, !1)
    }, h3mt: function (t, e, i) {
        "use strict";
        var n = i("lsZr"), o = i("sQgx"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\XlLoading.vue", e.a = r.exports
    }, hAPF: function (t, e, i) {
        "use strict";
        var n = i("fZjL"), o = i.n(n), r = i("mvHQ"), a = i.n(r), s = i("gRE1"), c = i.n(s), l = i("L0TC"),
            p = (i.n(l), function (t, e) {
                return t < e ? -1 : t === e ? 0 : 1
            });
        e.a = {
            props: {
                curTask: {type: Object, default: null}, subFiles: {
                    type: Object, default: function () {
                    }
                }, operate: {
                    type: Function, default: function () {
                    }
                }
            }, data: function () {
                var t = this;
                return {
                    defaultCheckedKeys: [],
                    defaultExpandedKeys: [],
                    originCheckedKeys: [],
                    checkedKeys: [],
                    expandedKeys: [],
                    disabledKeys: [],
                    editingSelected: !1,
                    tree: [],
                    branchMap: {},
                    leafMap: {},
                    loading: !1,
                    selectedFileIndex: "",
                    footNeedFixed: !1,
                    guardDomObserver: null,
                    footDomObserver: null,
                    columns: [{
                        label: "文件名称", prop: "name", sortable: !0, sorter: function (t, e) {
                            return p(t.data.fileName, e.data.fileName)
                        }
                    }, {
                        label: "大小", prop: "fileSize", width: 100, sortable: !0, sorter: function (t, e) {
                            return p(t.data.fileSize, e.data.fileSize)
                        }
                    }, {
                        label: "状态", prop: "progress", width: 100, sortable: !0, sorter: function (e, i) {
                            return p(t.getProgress(e), t.getProgress(i))
                        }
                    }]
                }
            }, computed: {
                checkedKeysCache: function () {
                    return this.checkedKeys.reduce(function (t, e) {
                        return t[e] = !0, t
                    }, {})
                }, pannel: function () {
                    return this.$store.state.pannel
                }
            }, watch: {
                subFiles: [{
                    immediate: !0, handler: function (t) {
                        this.parseFileList(t || {})
                    }
                }, {
                    deep: !0, handler: function () {
                        this.updateTree(this.checkedKeys)
                    }
                }], "curTask.taskID": {
                    immediate: !0, handler: function (t) {
                        t && (this.editingExpanded = !1)
                    }
                }
            }, created: function () {
                this.$store.dispatch("tasks/getTaskInfo", {taskID: this.curTask.taskID})
            }, mounted: function () {
                this.footDomObserver = new IntersectionObserver(this.handleFootVisibilityChange, {threshold: [0]}), this.guardDomObserver = new IntersectionObserver(this.handleGuardVisibilityChange, {threshold: [1]}), this.footDomObserver.observe(this.$refs.foot.$el), this.guardDomObserver.observe(this.$refs.guard)
            }, beforeDestroy: function () {
                null !== this.footDomObserver && (this.footDomObserver.disconnect(), this.footDomObserver = null), null !== this.guardDomObserver && (this.guardDomObserver.disconnect(), this.guardDomObserver = null)
            }, methods: {
                parseFileList: function (t) {
                    var e = this, i = {};
                    this.branchMap = {}, this.leafMap = {}, this.setBranch("", ""), c()(t).forEach(function (t) {
                        var n = t.filePath;
                        if (!i[n]) {
                            i[n] = !0;
                            var o = "";
                            n.split("\\").forEach(function (t) {
                                "" !== t && (e.setBranch(o, t), o = o ? o + "\\" + t : t)
                            })
                        }
                        e.setLeaf(n.slice(0, -1), t)
                    }), this.updateTree(), this.tree = this.branchMap[""].children
                }, setBranch: function (t, e) {
                    var i = this.branchMap[t], n = t ? t + "\\" + e : e, o = this.branchMap[n];
                    return o || (o = this.branchMap[n] = {
                        type: "branch",
                        name: e,
                        children: [],
                        key: n,
                        parent: i,
                        data: {fileName: e}
                    }, i && i.children.push(o)), o
                }, getProgress: function (t) {
                    return "branch" === t.type ? t.data.downloadSize / t.data.fileSize : this.subFiles[t.data.index].downloadSize / this.subFiles[t.data.index].fileSize
                }, getFileInfo: function (t, e) {
                    return "branch" === t.type ? this.branchMap[t.key][e] : this.$sget(this.subFiles, e)
                }, setLeaf: function (t, e) {
                    var i = t ? t + "\\" + e.fileName : e.fileName, n = this.branchMap[t], o = this.leafMap[i];
                    return o || (o = this.leafMap[i] = {
                        type: "leaf",
                        fullPath: i,
                        name: e.fileName,
                        key: i,
                        parent: n,
                        data: e
                    }, n.children.push(o)), o
                }, onCheckedChange: function (t) {
                    var e = this;
                    this.$raven.debug("onCheckedChange", t);
                    var i = t.filter(function (t) {
                        return t in e.leafMap
                    }).map(function (t) {
                        return e.leafMap[t].data.index
                    });
                    this.$raven.debug("selectedLeaves", i), this.$raven.debug("this.originCheckedKeys", this.originCheckedKeys), i.length === this.originCheckedKeys.length && this.originCheckedKeys.every(function (t) {
                        return i.includes(e.$sget(e.leafMap[t], "data", "index"))
                    }) ? this.editingSelected = !1 : this.editingSelected = !0, this.$raven.debug("editingSelected", this.editingSelected), this.checkedKeys = t, this.caculateBranch()
                }, onExpandedChange: function (t) {
                    this.$raven.debug("onExpandedChange", t), this.editingExpanded = !0, this.expandedKeys = t
                }, caculateBranch: function () {
                    this.caculateBranchProp(this.branchMap[""], "fileSize"), this.caculateBranchProp(this.branchMap[""], "downloadSize")
                }, caculateBranchProp: function (t, e, i) {
                    var n = this;
                    return t.data[e] = t.children.reduce(function (t, o) {
                        return "branch" === o.type && n.caculateBranchProp(o, e, i), "function" == typeof i ? i(t, o) : t + ("branch" === o.type || n.checkedKeysCache[o.key] ? o.data[e] : 0)
                    }, 0), t[e]
                }, forEachBranch: function (t, e) {
                    var i = this;
                    "function" == typeof e && e(t), t.children.forEach(function (t) {
                        "branch" === t.type && i.forEachBranch(t, e)
                    })
                }, downloadSelected: function () {
                    var t = this;
                    if (this.editingSelected) {
                        this.loading = !0;
                        var e = this.checkedKeys.filter(function (e) {
                            return e in t.leafMap
                        }).map(function (e) {
                            return t.leafMap[e].data.index
                        }), i = e.join("");
                        this.selectedFileIndex !== i && (this.selectedFileIndex = i, this.operate("downloadSelectFiles", null, a()(e)).then(function () {
                            t.loading = !1, t.editingSelected = !1, t.updateTree(t.checkedKeys)
                        }), this.report("download"))
                    }
                }, getSuffix: function (t) {
                    var e = t.match(/\.([^.]+)$/i);
                    return e ? e[1].toLowerCase() : ""
                }, openFile: function (t) {
                    this.operate("open", null, t.data.index)
                }, report: function (t) {
                    this.$stat("download_detail", "dltab_detail_filelist_click", {
                        pannel: this.pannel,
                        taskid: this.curTask.taskID,
                        gcid: this.curTask.gcid,
                        filename: this.curTask.name,
                        button: t
                    })
                }, updateTree: function (t) {
                    var e = this;
                    this.disabledKeys = c()(this.leafMap).filter(function (t) {
                        return t.data.downloadSize && t.data.downloadSize === t.data.fileSize && t.data.isNeedDownload
                    }).map(function (t) {
                        return t.key
                    }), this.editingSelected ? this.defaultCheckedKeys = this.checkedKeys : this.checkedKeys = this.defaultCheckedKeys = this.originCheckedKeys = t || o()(this.leafMap).filter(function (t) {
                        return e.leafMap[t].data.isNeedDownload
                    }), this.editingExpanded ? this.defaultExpandedKeys = this.expandedKeys : this.expandedKeys = this.defaultExpandedKeys = [], this.caculateBranch()
                }, handleFootVisibilityChange: function (t) {
                    0 === t[0].intersectionRatio && (this.footNeedFixed = !0)
                }, handleGuardVisibilityChange: function (t) {
                    t[0].intersectionRatio >= 1 && (this.footNeedFixed = !1)
                }
            }
        }
    }, hMyI: function (t, e, i) {
        "use strict";
        var n = i("PDP/"), o = i("k4zF"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\task\\XlLabelItem.vue", e.a = r.exports
    }, haX0: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "xlx-file-list", class: {"is-fixed": t.footNeedFixed}}, [i("td-table", {
                attrs: {
                    columns: t.columns,
                    data: t.tree,
                    "default-checked-keys": t.defaultCheckedKeys,
                    "default-expanded-keys": t.defaultExpandedKeys,
                    "disabled-keys": t.disabledKeys,
                    checkable: "",
                    striped: "",
                    "tree-enabled": "",
                    "footer-enabled": ""
                },
                on: {
                    "checked-change": t.onCheckedChange,
                    "expanded-change": t.onExpandedChange,
                    checkAll: function (e) {
                        t.report(e ? "chooseall" : "cancelall")
                    }
                },
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        var n = e.prop, o = e.value, r = e.row;
                        return ["name" === n ? i("span", {attrs: {title: r.data.fileName}}, [t._v(t._s(r.data.fileName))]) : "fileSize" === n ? [t._v(t._s(t._f("file-size")(r.data.fileSize)))] : "progress" === n ? [r.data.errMessage ? [i("span", {
                            staticClass: "is-error",
                            attrs: {title: r.data.errMessage}
                        }, [t._v("无法下载"), i("i", {staticClass: "td-icon-info"})])] : "branch" === r.type ? void 0 : (4 !== t.curTask.type ? r.data.downloadSize === r.data.fileSize && r.data.isNeedDownload && r.data.downloadSize : [8, 10].includes(r.data.status)) ? [i("a", {
                            staticClass: "xlx-file-list__status",
                            attrs: {href: "javascript:;"},
                            on: {
                                click: function (e) {
                                    t.openFile(r)
                                }
                            }
                        }, [t._v("打开")])] : t.checkedKeys.includes(r.key) ? [t._v("\n          " + t._s((100 * t.getProgress(r) || 0).toFixed(2)) + "%\n        ")] : [t._v("\n          不下载\n        ")]] : [t._v(t._s(o))]]
                    }
                }, {
                    key: "icon", fn: function (e) {
                        e.prop, e.value;
                        var n = e.row;
                        return [i("i", {class: t._f("icon")([t.getSuffix(n.name), "branch" === n.type ? 4 : 1])})]
                    }
                }])
            }, [i("td-button", {
                ref: "foot",
                attrs: {slot: "footer", size: "small", disabled: !t.checkedKeys.length || !t.editingSelected},
                on: {click: t.downloadSelected},
                slot: "footer"
            }, [t._v("\n      " + t._s(t.loading ? "添加下载..." : "下载选中文件") + "\n    ")])], 1), i("div", {
                ref: "guard",
                style: {height: "36px", display: t.footNeedFixed ? "block" : "none"}
            })], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, hlD9: function (t, e, i) {
        "use strict";
        var n = i("jLUo"), o = i("5rP1"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\comment\\XlCommentList.vue", e.a = r.exports
    }, "i+uq": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "xlx-promote"}, [t._l(t.totalPage, function (e) {
                return i("ul", {
                    key: e,
                    staticClass: "xlx-promote-list",
                    class: {"is-show": e - 1 === t.curPageIndex}
                }, [t.showAct ? i("XlDownloadRecommendActReviewItem", {
                    attrs: {"act-data": t.actData},
                    on: {
                        see: function (i) {
                            return t.seeItem(i, e, e, "activity")
                        }, click: function (i) {
                            t.handleItemClick(null, e, e, "activity")
                        }
                    }
                }) : t._e(), t._l(t.reviewList.slice((e - 1) * t.pageSize, e * t.pageSize - Number(t.showAct)), function (n, o) {
                    return i("XlRecommendReviewItem", {
                        key: n, attrs: {"review-id": n}, on: {
                            see: function (i) {
                                return t.seeItem(i, e, n, "filmlib")
                            }, click: function (e) {
                                return t.handleItemClick(n, e, o, "filmlib")
                            }
                        }
                    })
                })], 2)
            }), i("div", {staticClass: "xlx-promote__indicator"}, t._l(t.totalPage, function (e) {
                return i("span", {
                    key: e, class: {"is-active": e - 1 === t.curPageIndex}, on: {
                        click: function (i) {
                            t.handleItemClick(null, "change_block", e, "filmlib")
                        }, mouseover: function (i) {
                            t.curPageIndex = e - 1
                        }
                    }
                })
            }))], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, iA8U: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {class: ["index-wrap", t.custom && t.materialList.length && "index-wrap--custom", "xmp" === t.$route.query.from && "xmp"]}, [i("div", {staticClass: "index-x"}, [i("xl-header"), t.custom && t.materialList.length ? i("div", {
                key: "custom",
                staticClass: "wrap-x"
            }, [i("div", {staticClass: "banner-x"}, [i("a", {
                staticClass: "bg-pic",
                style: "background-image:url(" + t.$sget(t.materialList[t.customIndex], "image") + ")",
                attrs: {
                    href: t.resolveUrl(t.$sget(t.materialList[t.customIndex], "url")) || "javascript:;",
                    target: "_blank"
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.reportInfo(t.uid, "click_times")
                    }
                }
            }), i("div", {staticClass: "banner-opt"}, [i("div", {staticClass: "banner-opt__list"}, t._l(t.materialList, function (e, n) {
                return i("a", {
                    key: n,
                    class: {cur: t.customIndex === n},
                    attrs: {
                        href: t.resolveUrl(t.$sget(t.materialList[t.customIndex], "url")) || "javascript:;",
                        target: "_blank"
                    },
                    on: {
                        mouseenter: function (e) {
                            t.customIndex = n
                        }, click: function (e) {
                            e.stopPropagation(), t.reportInfo(t.uid, "click_times")
                        }
                    }
                }, [i("img", {attrs: {src: e.image}})])
            }))]), i("div", {
                staticClass: "user-info-wrap",
                class: {"is-group": t.groupInfo.has_group, "is-extend": t.groupInfo.has_group && t.firstExtend},
                on: {mouseenter: t.handleGroupInfoExtend}
            }, [i("a", {
                staticClass: "user-info",
                attrs: {
                    href: t.uid || t.publisherInfo.uid ? "http://pc.xunlei.com/#/users/" + (t.uid || t.publisherInfo.uid) : "javascript:;",
                    target: "_blank"
                }
            }, [i("span", {staticClass: "user-avatar"}, [i("img", {attrs: {src: t.publisherInfo.portrait_url}})]), i("span", {staticClass: "user-name"}, [t._v(t._s(t.publisherInfo.nick_name || "迅雷用户"))])]), i("div", {staticClass: "user-info__group"}, [i("div", {staticClass: "group-main"}, [i("p", {staticClass: "user-info__title"}, [t._v("邀请你加入：")]), i("span", {staticClass: "user-avatar"}, [i("img", {
                attrs: {
                    src: t.groupInfo.group_icon,
                    alt: "群组头像"
                }
            })]), i("p", {staticClass: "group-name"}, [t._v(t._s(t.groupInfo.group_name))]), i("p", {staticClass: "group-detail"}, [t._v(t._s(t.groupInfo.group_desc))])]), i("div", {staticClass: "group-footer"}, [i("p", {staticClass: "group-number"}, [i("i", {staticClass: "icon-group-user"}), t._v("共"), i("span", [t._v(t._s(t.groupInfo.group_member_count))]), t._v(" 人\n              ")]), i("a", {
                staticClass: "td-button",
                attrs: {href: "javascript:;"},
                on: {click: t.openCommunity}
            }, [t._v(t._s(1 === t.groupInfo.has_joined ? "打开群组" : "加入群组"))])])])])]), i("div", {staticClass: "banner-info"}, [i("h1", {staticClass: "banner-title"}, [i("a", {
                attrs: {
                    target: "_blank",
                    href: t.resolveUrl(t.$sget(t.materialList[t.customIndex], "url")) || "javascript:;"
                }, on: {
                    click: function (e) {
                        e.stopPropagation(), t.reportInfo(t.uid, "click_times")
                    }
                }
            }, [t._v(t._s(t.$sget(t.materialList[t.customIndex], "title")))])]), i("p", {staticClass: "banner-abstract"}, [t._v("\n          " + t._s(t.$sget(t.materialList[t.customIndex], "desc")) + "\n        ")]), i("p", {staticClass: "banner-copyright"}, [i("span", [t._v("©版权说明")]), t._v("当前内容由"), i("a", {
                attrs: {
                    href: "http://pc.xunlei.com/#/users/" + t.publisherInfo.uid,
                    target: "_blank"
                }
            }, [t._v(t._s(t.publisherInfo.nick_name || "迅雷用户"))]), t._v("提供")])])]) : i("div", {
                key: "default",
                staticClass: "wrap-x"
            }, [i("div", {staticClass: "banner-x"}, [i("a", {
                staticClass: "bg-pic",
                style: {"background-image": "url(" + (t.banner.review_cover_xlx || t.banner.review_cover) + ")"},
                attrs: {
                    href: "activity" === t.banner.review_id ? t.banner.url : t.$url.getReviewUrl(t.banner.review_id, t.floatLayerEnable),
                    target: "_blank"
                },
                on: {
                    click: function (e) {
                        t.reportBannerClick(t.current, t.banner.review_id, "picture")
                    }
                }
            }), i("div", {staticClass: "banner-info"}, [i("div", {staticClass: "time"}, [i("p", [t._v(t._s(t.day))]), i("span", {staticClass: "line"}), i("p", [t._v(t._s(t.month))])]), i("p", [t._v("每日影评")])]), i("h1", [t._v(t._s(t.banner.review_title))]), i("div", {staticClass: "banner-opt"}, [i("div", {staticClass: "banner-opt__list"}, t._l(t.list, function (e, n) {
                return i("a", {
                    key: n,
                    class: {cur: n === t.current},
                    attrs: {
                        href: "activity" === e.review_id ? e.url : t.$url.getReviewUrl(e.review_id, t.floatLayerEnable),
                        target: "_blank"
                    },
                    on: {
                        click: function (i) {
                            t.filmClick(n, e.review_id, "pic")
                        }, mouseenter: function (i) {
                            t.current = n, t.bannerHover(n, e.review_id)
                        }
                    }
                }, [i("img", {attrs: {src: e.review_cover_xlx || e.review_cover}})])
            })), i("a", {
                staticClass: "banner-opt__link",
                attrs: {href: "http://movie.xunlei.com/reviews/excellentreviews", target: "_blank"},
                on: {
                    click: function (e) {
                        t.filmClick(0, 0, "dailybest")
                    }
                }
            }, [t._v("天天精评>")])])]), i("div", {staticClass: "index-list"}, [i("ul", t._l(t.recommends, function (e, n) {
                return i("li", {
                    key: n, staticClass: "index-list__item", on: {
                        click: function (i) {
                            t.recommendClick("flimlib", n, e.review_id)
                        }, mouseenter: function (i) {
                            t.recommendHover(n, e.review_id)
                        }
                    }
                }, [i("a", {
                    staticClass: "title",
                    attrs: {href: t.$url.getReviewUrl(e.review_id, t.floatLayerEnable), target: "_blank"}
                }, [t._v(t._s(e.review_title))]), i("div", {staticClass: "index-list__info"}, [i("a", {
                    staticClass: "user-info",
                    attrs: {href: t.$url.getUserUrl(e.review_author_id), target: "_blank"}
                }, [i("span", {staticClass: "user-avatar"}, [i("img", {
                    attrs: {
                        src: e.review_author_avatar,
                        alt: "用户名"
                    }
                })]), i("span", {staticClass: "user-name"}, [t._v(t._s(e.review_author))])]), i("span", {staticClass: "info-from"}, [t._v("\n                评《\n                "), i("a", {
                    staticClass: "movie-name",
                    class: {"article-link-text": !e.review_media_id},
                    attrs: {href: t.$url.getMovieUrl(e.review_media_id), target: "_blank"}
                }, [t._v("\n                  " + t._s(e.review_name) + "\n                ")]), t._v("》\n              ")])])])
            })), i("div", {staticClass: "index-list__more"}, [i("a", {
                attrs: {
                    href: "http://movie.xunlei.com",
                    target: "_blank"
                }, on: {
                    click: function (e) {
                        t.recommendClick("flimlib", 0, 0)
                    }
                }
            }, [t._v("更多影评>")])])])]), t.customHomeEnable && t.showCustom ? i("a", {
                staticClass: "switch-btn custom",
                attrs: {href: "javascript:;"},
                on: {
                    mouseenter: function (e) {
                        t.showTip = !0
                    }, mouseleave: function (e) {
                        t.showTip = !1
                    }, click: t.changeCustom
                }
            }, [i("i", {class: t.materialList.length && t.custom ? "icon-custom" : "icon-custom-magic"})]) : t._e(), t.customHomeEnable && t.showCustom ? i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showTip,
                    expression: "showTip"
                }],
                staticClass: "td-tooltip is-left",
                staticStyle: {position: "fixed", top: "auto", right: "47px", bottom: "11px"}
            }, [i("p", {staticClass: "td-tooltip__inner"}, [t._v("\n        " + t._s(t.materialList.length ? t.custom ? "切换至默认首页" : "切换至个性化首页" : "获取您的个性化迅雷X") + "\n      ")]), i("span", {staticClass: "td-poper__arrow"})]) : t._e()], 1)])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, iARP: function (t, e, i) {
        t.exports = i.p + "img/xlx-icon-24x24.8c8781a.png"
    }, jFpK: function (t, e, i) {
        "use strict";
        var n = function () {
            var t, e = this, i = e.$createElement;
            return (e._self._c || i)("a", {
                class: (t = {}, t[e.praisedClass] = e.isPraise, t[e.animationClass] = e.isPraising, t),
                attrs: {href: "javascript:;", title: e.isPraise ? "您已点过赞" : "赞"},
                on: {click: e.praise}
            }, [e._t("default", null, {praiseNum: e.praiseNum})], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, jLUo: function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), r = i("exGp"), a = i.n(r), s = i("Jbmy"), c = i("h3mt"), l = i("y1vT");
        e.a = {
            components: {XlCommentItem: s.a, XlLoading: c.a},
            props: {
                tid: {type: String, required: !0},
                curTask: {type: Object, default: null},
                comments: {
                    type: Array, default: function () {
                        return []
                    }
                },
                rcount: {type: Number, default: 0},
                userId: {type: [Number, String], default: "0"},
                timeFormat: {type: String, default: "getPubTime"},
                maxLength: {type: Number, default: 100},
                showReport: {type: Boolean, default: !0},
                entryPage: {type: String, default: ""},
                entryHead: {type: String, default: ""},
                entryName: {type: String, default: ""},
                resourceUser: {type: [String, Number], default: "0"},
                getComments: {
                    type: Function, default: function () {
                    }
                },
                pageSize: {type: Number, default: 10},
                taskId: {type: [Number, String], default: "0"},
                pageIndex: {type: Number, default: 0}
            },
            data: function () {
                return {page: 1, showReply: 0, hotCount: 0, loading: !1, debouncedFetch: null}
            },
            computed: {
                curPageComments: function () {
                    return this.getCommentsByPage(this.page)
                }, totalPage: function () {
                    return Math.ceil((this.rcount + this.hotCount) / this.pageSize)
                }
            },
            watch: {
                pageIndex: function () {
                    var t = a()(o.a.mark(function t(e) {
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.fetchCommentsByPage(e);
                                case 2:
                                    this.page = e, 1 === e && this.showFirstCommentItem();
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(), page: function (t) {
                    this.$emit("updatePage", t)
                }, rcount: {
                    immediate: !0, handler: function (t) {
                        this.$emit("rcountchange", t)
                    }
                }, tid: {
                    handler: function (t, e) {
                        var i = this;
                        this.$raven.debug("tid change", arguments), t && t !== e && this.$nextTick(function () {
                            i.debouncedFetch()
                        })
                    }, immediate: !0
                }, userId: {
                    handler: function (t, e) {
                        this.$raven.debug("userId watcher", arguments), t !== e && (this.$raven.debug("userId watcher diff", arguments), this.debouncedFetch())
                    }
                }
            },
            created: function () {
                var t = this, e = arguments;
                this.debouncedFetch = l(function () {
                    t.$raven.debug("debouncedFetch", e), t.page = 1, t.fetchCommentsByPage(t.page, !0)
                }, 100)
            },
            mounted: function () {
                this.page = this.pageIndex
            },
            methods: {
                fetchHotComments: function (t) {
                    var e = this;
                    return this.$raven.debug("fetchHotComments"), this.getComments({
                        tid: this.tid,
                        sourceId: this.tid,
                        lastId: 0,
                        category: "hot",
                        pageSize: 2,
                        userId: this.userId,
                        refresh: t
                    }).then(function (t) {
                        e.hotCount = t.length
                    })
                }, fetchNewComments: function (t, e, i) {
                    return this.$raven.debug("fetchNewComments"), this.getComments({
                        tid: this.tid,
                        sourceId: this.tid,
                        lastId: e,
                        pageSize: t,
                        category: "new",
                        userId: this.userId,
                        refresh: i
                    })
                }, fetchCommentsByPage: function () {
                    var t = a()(o.a.mark(function t(e, i) {
                        var n, r, a, s;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    n = void 0, t.prev = 1;
                                case 2:
                                    if ((r = i ? [] : this.getCommentsByPage(e)).length !== this.pageSize) {
                                        t.next = 6;
                                        break
                                    }
                                    return n = r, t.abrupt("break", 18);
                                case 6:
                                    if (e !== this.totalPage || !r.length) {
                                        t.next = 9;
                                        break
                                    }
                                    return n = r, t.abrupt("break", 18);
                                case 9:
                                    if (1 !== e) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 12, this.fetchHotComments(i);
                                case 12:
                                    return a = i ? this.pageSize - this.hotCount : this.pageSize - this.comments.length % this.pageSize, s = this.comments[this.comments.length - 1], t.next = 16, this.fetchNewComments(a, 1 === e ? 0 : this.$sget(s, "cid") || 0, i);
                                case 16:
                                    n = this.getCommentsByPage(e);
                                case 17:
                                    0;
                                case 18:
                                    t.next = 23;
                                    break;
                                case 20:
                                    t.prev = 20, t.t0 = t.catch(1), this.$raven.warn(t.t0);
                                case 23:
                                    return this.$store.dispatch("users/checkFollow", n.map(function (t) {
                                        return t.uid
                                    })), this.$emit("sendXlpasswordShow", n, this.userId), t.abrupt("return", n);
                                case 26:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[1, 20]])
                    }));
                    return function (e, i) {
                        return t.apply(this, arguments)
                    }
                }(), getCommentsByPage: function (t) {
                    return !0 === this.$sget(this.curTask, "isFromVest") ? [] : this.comments.slice(this.pageSize * (t - 1), this.pageSize * t)
                }, showFirstCommentItem: function () {
                    this.$nextTick(function () {
                        var t = document.querySelector(".xlx-comment-list__item:not(.is-hot)");
                        t && t.scrollIntoView(!1)
                    })
                }
            }
        }
    }, jmuf: function (t, e, i) {
        "use strict";
        var n = i("EZKe"), o = i("c0Vv"), r = !1;
        var a = function (t) {
            r || i("QAHm")
        }, s = i("VU/8")(n.a, o.a, !1, a, "data-v-64c66bef", null);
        s.options.__file = "components\\XlRefresh.vue", e.a = s.exports
    }, jrzI: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                directives: [{name: "show", rawName: "v-show", value: t.show, expression: "show"}],
                staticClass: "td-cover"
            }, [t.config ? i("div", {class: "td-message td-message--" + t.config.type}, [i("i", {class: "td-icon-" + t.config.type}), i("span", {staticClass: "td-message__text"}, [t._v(t._s(t.config.content))])]) : t._e()])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, jsmL: function (t, e, i) {
        "use strict";
        var n = i("mMb9"), o = i("3eQE");
        e.read = function (t, e) {
            return n(t, e || {})
        }, e.write = function (t, e) {
            return o(t, e)
        }
    }, k4zF: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [i("div", {
                staticClass: "point",
                style: {display: t.pointDisplay, margin: 0}
            }), i("td-tooltip", {
                class: t.textDataClass,
                style: t.LabelStyle,
                attrs: {
                    content: "为什么速度好慢？点我查看原因",
                    trigger: t.showLowSpeedHint ? "hover" : "",
                    placement: t.taskProgress > t.popLeftAtProgress ? "left" : "top"
                },
                on: {show: t.showToolTip},
                nativeOn: {
                    click: function (e) {
                        t.helpIconClick(e)
                    }
                }
            }, [i("span", {
                staticClass: "ico-d-help",
                style: t.showLowSpeedHint ? "" : "display:none"
            }), t._v("\n    " + t._s(t._f("file-size")(t.textVal)) + "/s\n  ")]), i("div", {staticClass: "xlx-data-ani"}, [i("span", {
                ref: "aniSpeed",
                staticClass: "xlx-data-type",
                class: [t.dataTypeClass, t.enableAnimation ? "" : "is-stopped"],
                style: t.iconStyle,
                on: {click: t.iconClick}
            }), i("span", {staticClass: "xlx-data-bomb", style: {display: t.bombType}})])], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, kE0x: function (t, e, i) {
        "use strict";
        e.a = {
            props: {
                entryPage: {type: String, default: ""},
                entry: {type: String, default: ""},
                uid: {type: [String, Number], default: ""},
                size: {type: String, default: "sm"}
            }, computed: {
                user: function () {
                    return this.$store.state.users.all[this.uid] || {}
                }, kinds: function () {
                    return this.$sget(this.user, "kinds") || []
                }, reviewNum: function () {
                    return this.kinds.includes("review_num") && "lg" === this.size ? "影评号" : ""
                }, signer: function () {
                    return this.kinds.includes("signer") && "lg" === this.size ? "签约写手" : ""
                }, reviewExpert: function () {
                    return this.kinds.includes("review_expert") && "lg" === this.size ? "影评达人" : ""
                }
            }, methods: {
                badgeClick: function (t) {
                    this.$stat("authentic", "authentic_page_entry_click", {
                        identity: t,
                        entrypage: this.entryPage,
                        entry: this.entry
                    })
                }
            }
        }
    }, kRHK: function (t, e, i) {
        "use strict";
        var n = i("Bcfi"), o = i("97RM"), r = i("02QL"), a = i("N/qc"), s = t.exports = function (t) {
            o.call(this);
            var e = t || {};
            this._packer = new a(e), this._deflate = this._packer.createDeflate(), this.readable = !0
        };
        n.inherits(s, o), s.prototype.pack = function (t, e, i, n) {
            this.emit("data", new Buffer(r.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(e, i)), n && this.emit("data", this._packer.packGAMA(n));
            var o = this._packer.filterData(t, e, i);
            this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on("data", function (t) {
                this.emit("data", this._packer.packIDAT(t))
            }.bind(this)), this._deflate.on("end", function () {
                this.emit("data", this._packer.packIEND()), this.emit("end")
            }.bind(this)), this._deflate.end(o)
        }
    }, l1so: function (t, e, i) {
        var n = i("lVv4");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("e6b81b92", n, !1)
    }, lOZi: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "xlx-detail"}, [i("div", {staticClass: "xlx-comment"}, [i("div", {staticClass: "xlx-comment-main"}, [i("XlCommentAvartar"), i("XlCommentInput", {
                staticStyle: {width: "calc(100% - 64px)"},
                attrs: {
                    show: !0,
                    tid: t.gcid,
                    "cur-task": t.curTask,
                    "max-length": t.maxLength,
                    "default-placeholder": "评论参与竞榜",
                    focus: t.isInputFocused
                },
                on: {
                    finish: t.updateComment, keyupctrlentry: function (e) {
                        t.$emit("keyupctrlentry", arguments[0])
                    }, "update:focus": function (e) {
                        t.isInputFocused = e
                    }, sendComment: function (e) {
                        t.report("sendcomment")
                    }, clickEmojiIco: function (e) {
                        t.report("emoji")
                    }
                }
            })], 1), i("XlCommentInput", {
                attrs: {
                    show: !1,
                    tid: t.gcid,
                    "cur-task": t.curTask,
                    "max-length": t.maxLength,
                    "default-placeholder": "评论参与竞榜",
                    "auto-send-comment-text": t.autoSendCommentText,
                    focus: t.isInputFocused
                }, on: {
                    finish: t.updateComment, keyupctrlentry: function (e) {
                        t.$emit("keyupctrlentry", arguments[0])
                    }, "update:autoSendCommentText": function (e) {
                        t.autoSendCommentText = e
                    }, "update:focus": function (e) {
                        t.isInputFocused = e
                    }
                }
            }), i("XlCommentList", {
                attrs: {
                    tid: t.gcid,
                    "task-id": t.$sget(t.curTask, "taskID"),
                    "cur-task": t.curTask,
                    "max-length": t.maxLength,
                    "page-index": t.commentPageIndex,
                    "entry-page": "filmlib_detailpage",
                    "entry-head": "filmlib_detailpage_head",
                    "entry-name": "filmlib_detailpage_name"
                }, on: {
                    click: t.report,
                    loadedPage: function (e) {
                        t.$emit("loadedNewComments")
                    },
                    clickReply: function (e) {
                        t.report("clickreply", arguments[0])
                    },
                    sendReply: function (e) {
                        t.report("sendreply", arguments[0])
                    },
                    headClick: function (e) {
                        t.report("head", arguments[0])
                    },
                    nameClick: function (e) {
                        t.report("name", arguments[0])
                    },
                    likecomment: function (e) {
                        t.report("like", arguments[0])
                    },
                    delte: function (e) {
                        t.report("delete", arguments[0])
                    },
                    rcountchange: function (e) {
                        t.$emit("rcountchange", e)
                    },
                    removeComment: t.updateComment,
                    updatePage: t.setCurPage,
                    finish: t.updateComment,
                    sendXlpasswordShow: t.sendXlpasswordShow
                }
            }, [t.comments && t.comments.length || !t.gcid ? i("div", {staticClass: "xlx-comment-tips"}, [i("h2", [t._v("资源暂时无法评论")]), i("p", [t._v("\n          " + t._s("5" === t.$sget(t.curTask, "status") ? "连接中..." : "  ") + "\n        ")]), i("span", {staticClass: "xlx-icon-blank-comment"})]) : i("XlQuickReview", {
                attrs: {
                    suffix: t.$sget(t.curTask, "suffix"),
                    "cur-task": t.curTask,
                    tid: t.gcid
                }, on: {
                    sendQuickReview: t.sendQuickReview, quickrefresh: function (e) {
                        t.report("quickrefresh")
                    }, quickCommentShow: t.handleQuickCommentShow
                }
            })], 1), t._t("default")], 2), i("XlCommentRank", {
                attrs: {
                    "last-comment-time": t.lastCommentTime,
                    tid: t.gcid,
                    "task-id": t.$sget(t.curTask, "taskID"),
                    "cur-task": t.curTask
                }, on: {
                    comment: t.startComment, headClick: function (e) {
                        t.report("head", arguments[0])
                    }
                }
            })], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, lVv4: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".error-message{position:relative}.is-absolute{position:absolute}.is-absolute.td-cover{top:25px}", ""])
    }, lbsf: function (t, e, i) {
        "use strict";
        var n = i("FlE6");
        i.n(n);
        e.a = {
            props: {isInputFocus: {type: Boolean, default: !1}, tid: {type: [String, Number], default: 0}},
            data: function () {
                return {show: !1}
            },
            watch: {
                show: function (t) {
                    t && this.$emit("open")
                }, tid: function (t, e) {
                    t !== e && (this.show = !1)
                }, isInputFocus: function (t) {
                    t && (this.show = !1)
                }
            },
            methods: {
                updateDisplay: function (t) {
                    this.show = t
                }, handleClick: function (t) {
                    if ("SPAN" === t.target.tagName) {
                        var e = t.target, i = "[" + t.target.parentElement.getAttribute("title") + "]",
                            n = e.className.split("-")[3];
                        this.$emit("pick", i, n, e), this.show = !1
                    }
                }
            }
        }
    }, lfQx: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("header", {staticClass: "header"}, [i("nav", {staticClass: "nav"}, t._l(t.icons, function (e, n) {
                return i("xl-icon", {
                    key: e.text, attrs: {icon: e}, nativeOn: {
                        click: function (e) {
                            e.preventDefault(), t.clickNav(n)
                        }
                    }
                })
            })), i("a", {
                staticClass: "link-report-top",
                attrs: {href: "javascript:;"},
                on: {click: t.linkReport}
            }, [i("span", {staticClass: "link-report-text1"}, [t._v("举报")]), i("span", {staticClass: "link-report-text2"}, [t._v("有害信息")])])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, ljsv: function (t, e) {
        e.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        var i = 3, n = 3, o = 40, r = 10;

        function a(t, i, n) {
            switch (t) {
                case e.Patterns.PATTERN000:
                    return (i + n) % 2 == 0;
                case e.Patterns.PATTERN001:
                    return i % 2 == 0;
                case e.Patterns.PATTERN010:
                    return n % 3 == 0;
                case e.Patterns.PATTERN011:
                    return (i + n) % 3 == 0;
                case e.Patterns.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(n / 3)) % 2 == 0;
                case e.Patterns.PATTERN101:
                    return i * n % 2 + i * n % 3 == 0;
                case e.Patterns.PATTERN110:
                    return (i * n % 2 + i * n % 3) % 2 == 0;
                case e.Patterns.PATTERN111:
                    return (i * n % 3 + (i + n) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
            }
        }

        e.isValid = function (t) {
            return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
        }, e.from = function (t) {
            return e.isValid(t) ? parseInt(t, 10) : void 0
        }, e.getPenaltyN1 = function (t) {
            for (var e = t.size, n = 0, o = 0, r = 0, a = null, s = null, c = 0; c < e; c++) {
                o = r = 0, a = s = null;
                for (var l = 0; l < e; l++) {
                    var p = t.get(c, l);
                    p === a ? o++ : (o >= 5 && (n += i + (o - 5)), a = p, o = 1), (p = t.get(l, c)) === s ? r++ : (r >= 5 && (n += i + (r - 5)), s = p, r = 1)
                }
                o >= 5 && (n += i + (o - 5)), r >= 5 && (n += i + (r - 5))
            }
            return n
        }, e.getPenaltyN2 = function (t) {
            for (var e = t.size, i = 0, o = 0; o < e - 1; o++) for (var r = 0; r < e - 1; r++) {
                var a = t.get(o, r) + t.get(o, r + 1) + t.get(o + 1, r) + t.get(o + 1, r + 1);
                4 !== a && 0 !== a || i++
            }
            return i * n
        }, e.getPenaltyN3 = function (t) {
            for (var e = t.size, i = 0, n = 0, r = 0, a = 0; a < e; a++) {
                n = r = 0;
                for (var s = 0; s < e; s++) n = n << 1 & 2047 | t.get(a, s), s >= 10 && (1488 === n || 93 === n) && i++, r = r << 1 & 2047 | t.get(s, a), s >= 10 && (1488 === r || 93 === r) && i++
            }
            return i * o
        }, e.getPenaltyN4 = function (t) {
            for (var e = 0, i = t.data.length, n = 0; n < i; n++) e += t.data[n];
            return Math.abs(Math.ceil(100 * e / i / 5) - 10) * r
        }, e.applyMask = function (t, e) {
            for (var i = e.size, n = 0; n < i; n++) for (var o = 0; o < i; o++) e.isReserved(o, n) || e.xor(o, n, a(t, o, n))
        }, e.getBestMask = function (t, i) {
            for (var n = Object.keys(e.Patterns).length, o = 0, r = 1 / 0, a = 0; a < n; a++) {
                i(a), e.applyMask(a, t);
                var s = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                e.applyMask(a, t), s < r && (r = s, o = a)
            }
            return o
        }
    }, lkks: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ":root{--background-card:linear-gradient(45deg,#b8e9ff,#d3b7ff)}.xlx-card{position:fixed;z-index:101;width:280px;background:#fff;border-radius:4px;box-shadow:0 0 10px rgba(0,0,0,.3);overflow:hidden}.xlx-card__content{display:flex;align-items:center;height:100px;padding:0 20px;background-image:var(--background-card)}.xlx-card__avatar{width:60px;height:60px}.xlx-card__avatar img{width:100%;height:100%;border-radius:50%}.xlx-card__information{flex:1;margin-left:20px}.xlx-card__title{display:flex;align-items:center;margin:0 0 5px}.xlx-card__name{display:inline-block;max-width:9em;font-size:15px;color:var(--color-default);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xlx-card__name.is-vip{color:#ff4848}.xlx-card__sign{max-width:13em;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xlx-card__bottom{display:flex;justify-content:space-between;align-items:center;height:44px;padding:0 20px}.xlx-card__bottom .td-button{width:75px;height:24px;margin-left:10px;font-size:12px;line-height:24px}.xlx-card__bottom .td-button.td-button--secondary{border:solid 1px var(--color-primary);box-sizing:border-box;line-height:22px;color:var(--color-primary);background:transparent}.xlx-card__bottom .td-button.td-button--secondary:hover{color:#fff;background-color:var(--color-primary)}.xlx-card__button{position:absolute;right:20px;display:flex;align-items:center}", ""])
    }, lsZr: function (t, e, i) {
        "use strict";
        e.a = {props: {text: {type: String, default: "加载中..."}}}
    }, mMb9: function (t, e, i) {
        "use strict";
        var n = !0, o = i("epkN"), r = i("t5ck");
        o.deflateSync || (n = !1);
        var a = i("yhIe"), s = i("Td9n"), c = i("dI7G"), l = i("0RyA"), p = i("H/UN");
        t.exports = function (t, e) {
            if (!n) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
            var i, u, d;
            var h = [];
            var f = new a(t);
            if (new c(e, {
                read: f.read.bind(f), error: function (t) {
                    i = t
                }, metadata: function (t) {
                    u = t
                }, gamma: function (t) {
                    d = t
                }, palette: function (t) {
                    u.palette = t
                }, transColor: function (t) {
                    u.transColor = t
                }, inflateData: function (t) {
                    h.push(t)
                }
            }).start(), f.process(), i) throw i;
            var x, m = Buffer.concat(h);
            if (h.length = 0, u.interlace) x = o.inflateSync(m); else {
                var g = (1 + (u.width * u.bpp * u.depth + 7 >> 3)) * u.height;
                x = r(m, {chunkSize: g, maxLength: g})
            }
            if (m = null, !x || !x.length) throw new Error("bad png - invalid inflate data response");
            var v = s.process(x, u);
            m = null;
            var b = l.dataToBitMap(v, u);
            v = null;
            var _ = p(b, u);
            return u.data = _, u.gamma = d || 0, u
        }
    }, mUK2: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("a", {
                class: [{done: t.followed}, t.classname],
                attrs: {href: "javascript:;"},
                on: {
                    click: t.handleToggleFollow, mouseenter: function (e) {
                        t.hover = !0
                    }, mouseleave: function (e) {
                        t.hover = !1
                    }
                }
            }, [t._t("default", null, {followed: t.followed}), t.text ? [t._v("\n    " + t._s(t.followBtnText) + "\n  ")] : t._e()], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, mulC: function (t, e, i) {
        "use strict";
        t.exports = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this
    }, mwnW: function (t, e, i) {
        "use strict";
        var n = i("mulC");
        t.exports = function () {
            return "function" == typeof n.Promise && "function" == typeof n.Promise.prototype.then
        }
    }, n8iO: function (t, e, i) {
        var n = i("JNyz");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("7f265565", n, !1)
    }, nwDn: function (t, e) {
        function i(t) {
            if ("string" != typeof t) throw new Error("Color should be defined as hex string");
            var e = t.slice().replace("#", "").split("");
            if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
            3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map(function (t) {
                return [t, t]
            }))), 6 === e.length && e.push("F", "F");
            var i = parseInt(e.join(""), 16);
            return {r: i >> 24 & 255, g: i >> 16 & 255, b: i >> 8 & 255, a: 255 & i, hex: "#" + e.slice(0, 6).join("")}
        }

        e.getOptions = function (t) {
            t || (t = {}), t.color || (t.color = {});
            var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                n = t.width && t.width >= 21 ? t.width : void 0, o = t.scale || 4;
            return {
                width: n,
                scale: n ? 4 : o,
                margin: e,
                color: {dark: i(t.color.dark || "#000000ff"), light: i(t.color.light || "#ffffffff")},
                type: t.type,
                rendererOpts: t.rendererOpts || {}
            }
        }, e.getScale = function (t, e) {
            return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
        }, e.getImageWidth = function (t, i) {
            var n = e.getScale(t, i);
            return Math.floor((t + 2 * i.margin) * n)
        }, e.qrToImageData = function (t, i, n) {
            for (var o = i.modules.size, r = i.modules.data, a = e.getScale(o, n), s = Math.floor((o + 2 * n.margin) * a), c = n.margin * a, l = [n.color.light, n.color.dark], p = 0; p < s; p++) for (var u = 0; u < s; u++) {
                var d = 4 * (p * s + u), h = n.color.light;
                if (p >= c && u >= c && p < s - c && u < s - c) h = l[r[Math.floor((p - c) / a) * o + Math.floor((u - c) / a)] ? 1 : 0];
                t[d++] = h.r, t[d++] = h.g, t[d++] = h.b, t[d] = h.a
            }
        }
    }, nyx9: function (t, e, i) {
        var n = i("uF9H"), o = i("sYKs"), r = i("RO0P"), a = i("vPzN"), s = i("zYqW"), c = i("NY/E"), l = i("oLzS"),
            p = i("b2+w");

        function u(t) {
            return unescape(encodeURIComponent(t)).length
        }

        function d(t, e, i) {
            for (var n, o = []; null !== (n = t.exec(i));) o.push({
                data: n[0],
                index: n.index,
                mode: e,
                length: n[0].length
            });
            return o
        }

        function h(t) {
            var e, i, o = d(c.NUMERIC, n.NUMERIC, t), r = d(c.ALPHANUMERIC, n.ALPHANUMERIC, t);
            return l.isKanjiModeEnabled() ? (e = d(c.BYTE, n.BYTE, t), i = d(c.KANJI, n.KANJI, t)) : (e = d(c.BYTE_KANJI, n.BYTE, t), i = []), o.concat(r, e, i).sort(function (t, e) {
                return t.index - e.index
            }).map(function (t) {
                return {data: t.data, mode: t.mode, length: t.length}
            })
        }

        function f(t, e) {
            switch (e) {
                case n.NUMERIC:
                    return o.getBitsLength(t);
                case n.ALPHANUMERIC:
                    return r.getBitsLength(t);
                case n.KANJI:
                    return s.getBitsLength(t);
                case n.BYTE:
                    return a.getBitsLength(t)
            }
        }

        function x(t, e) {
            var i, c = n.getBestModeForData(t);
            if ((i = n.from(e, c)) !== n.BYTE && i.bit < c.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + n.toString(i) + ".\n Suggested mode is: " + n.toString(c));
            switch (i !== n.KANJI || l.isKanjiModeEnabled() || (i = n.BYTE), i) {
                case n.NUMERIC:
                    return new o(t);
                case n.ALPHANUMERIC:
                    return new r(t);
                case n.KANJI:
                    return new s(t);
                case n.BYTE:
                    return new a(t)
            }
        }

        e.fromArray = function (t) {
            return t.reduce(function (t, e) {
                return "string" == typeof e ? t.push(x(e, null)) : e.data && t.push(x(e.data, e.mode)), t
            }, [])
        }, e.fromString = function (t, i) {
            for (var o = function (t, e) {
                for (var i = {}, o = {start: {}}, r = ["start"], a = 0; a < t.length; a++) {
                    for (var s = t[a], c = [], l = 0; l < s.length; l++) {
                        var p = s[l], u = "" + a + l;
                        c.push(u), i[u] = {node: p, lastCount: 0}, o[u] = {};
                        for (var d = 0; d < r.length; d++) {
                            var h = r[d];
                            i[h] && i[h].node.mode === p.mode ? (o[h][u] = f(i[h].lastCount + p.length, p.mode) - f(i[h].lastCount, p.mode), i[h].lastCount += p.length) : (i[h] && (i[h].lastCount = p.length), o[h][u] = f(p.length, p.mode) + 4 + n.getCharCountIndicator(p.mode, e))
                        }
                    }
                    r = c
                }
                for (d = 0; d < r.length; d++) o[r[d]].end = 0;
                return {map: o, table: i}
            }(function (t) {
                for (var e = [], i = 0; i < t.length; i++) {
                    var o = t[i];
                    switch (o.mode) {
                        case n.NUMERIC:
                            e.push([o, {data: o.data, mode: n.ALPHANUMERIC, length: o.length}, {
                                data: o.data,
                                mode: n.BYTE,
                                length: o.length
                            }]);
                            break;
                        case n.ALPHANUMERIC:
                            e.push([o, {data: o.data, mode: n.BYTE, length: o.length}]);
                            break;
                        case n.KANJI:
                            e.push([o, {data: o.data, mode: n.BYTE, length: u(o.data)}]);
                            break;
                        case n.BYTE:
                            e.push([{data: o.data, mode: n.BYTE, length: u(o.data)}])
                    }
                }
                return e
            }(h(t, l.isKanjiModeEnabled())), i), r = p.find_path(o.map, "start", "end"), a = [], s = 1; s < r.length - 1; s++) a.push(o.table[r[s]].node);
            return e.fromArray(function (t) {
                return t.reduce(function (t, e) {
                    var i = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return i && i.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                }, [])
            }(a))
        }, e.rawSplit = function (t) {
            return e.fromArray(h(t, l.isKanjiModeEnabled()))
        }
    }, oLzS: function (t, e) {
        var i,
            n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        e.getSymbolSize = function (t) {
            if (!t) throw new Error('"version" cannot be null or undefined');
            if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
            return 4 * t + 17
        }, e.getSymbolTotalCodewords = function (t) {
            return n[t]
        }, e.getBCHDigit = function (t) {
            for (var e = 0; 0 !== t;) e++, t >>>= 1;
            return e
        }, e.setToSJISFunction = function (t) {
            if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
            i = t
        }, e.isKanjiModeEnabled = function () {
            return void 0 !== i
        }, e.toSJIS = function (t) {
            return i(t)
        }
    }, oTk5: function (t, e, i) {
        "use strict";
        var n = i("CGIU"), o = i("qHIs"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\comment\\XlCommentAvartar.vue", e.a = r.exports
    }, oZkF: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".xlx-detail{display:flex;padding-bottom:20px}.xlx-detail .xlx-comment{flex:1;width:calc(100% - 212px)}.xlx-detail .xlx-speed-list{margin-left:20px}", ""])
    }, oxpM: function (t, e, i) {
        var n = i("RmTR");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("1137447b", n, !1)
    }, q4O7: function (t, e, i) {
        "use strict";
        var n = i("AWJJ");
        var o = {
            0: function (t, e, i, n, o) {
                for (var r = 0; r < i; r++) n[o + r] = t[e + r]
            }, 1: function (t, e, i, n, o, r) {
                for (var a = 0; a < i; a++) {
                    var s = a >= r ? t[e + a - r] : 0, c = t[e + a] - s;
                    n[o + a] = c
                }
            }, 2: function (t, e, i, n, o) {
                for (var r = 0; r < i; r++) {
                    var a = e > 0 ? t[e + r - i] : 0, s = t[e + r] - a;
                    n[o + r] = s
                }
            }, 3: function (t, e, i, n, o, r) {
                for (var a = 0; a < i; a++) {
                    var s = a >= r ? t[e + a - r] : 0, c = e > 0 ? t[e + a - i] : 0, l = t[e + a] - (s + c >> 1);
                    n[o + a] = l
                }
            }, 4: function (t, e, i, o, r, a) {
                for (var s = 0; s < i; s++) {
                    var c = s >= a ? t[e + s - a] : 0, l = e > 0 ? t[e + s - i] : 0,
                        p = e > 0 && s >= a ? t[e + s - (i + a)] : 0, u = t[e + s] - n(c, l, p);
                    o[r + s] = u
                }
            }
        }, r = {
            0: function (t, e, i) {
                for (var n = 0, o = e + i, r = e; r < o; r++) n += Math.abs(t[r]);
                return n
            }, 1: function (t, e, i, n) {
                for (var o = 0, r = 0; r < i; r++) {
                    var a = r >= n ? t[e + r - n] : 0, s = t[e + r] - a;
                    o += Math.abs(s)
                }
                return o
            }, 2: function (t, e, i) {
                for (var n = 0, o = e + i, r = e; r < o; r++) {
                    var a = e > 0 ? t[r - i] : 0, s = t[r] - a;
                    n += Math.abs(s)
                }
                return n
            }, 3: function (t, e, i, n) {
                for (var o = 0, r = 0; r < i; r++) {
                    var a = r >= n ? t[e + r - n] : 0, s = e > 0 ? t[e + r - i] : 0, c = t[e + r] - (a + s >> 1);
                    o += Math.abs(c)
                }
                return o
            }, 4: function (t, e, i, o) {
                for (var r = 0, a = 0; a < i; a++) {
                    var s = a >= o ? t[e + a - o] : 0, c = e > 0 ? t[e + a - i] : 0,
                        l = e > 0 && a >= o ? t[e + a - (i + o)] : 0, p = t[e + a] - n(s, c, l);
                    r += Math.abs(p)
                }
                return r
            }
        };
        t.exports = function (t, e, i, n, a) {
            var s;
            if ("filterType" in n && -1 !== n.filterType) {
                if ("number" != typeof n.filterType) throw new Error("unrecognised filter types");
                s = [n.filterType]
            } else s = [0, 1, 2, 3, 4];
            16 === n.bitDepth && (a *= 2);
            for (var c = e * a, l = 0, p = 0, u = new Buffer((c + 1) * i), d = s[0], h = 0; h < i; h++) {
                if (s.length > 1) for (var f = 1 / 0, x = 0; x < s.length; x++) {
                    var m = r[s[x]](t, p, c, a);
                    m < f && (d = s[x], f = m)
                }
                u[l] = d, l++, o[d](t, p, c, u, l, a), l += c, p += c
            }
            return u
        }
    }, q4gs: function (t, e, i) {
        "use strict";
        var n = i("jmuf");
        e.a = {
            components: {XlRefresh: n.a}, props: {
                quickReviewConfigs: {
                    type: Array, default: function () {
                        return []
                    }
                }, publishComments: {
                    type: Function, default: function () {
                    }
                }, tid: {type: String, default: ""}
            }, data: function () {
                return {index: 0}
            }, computed: {
                quickReviews: function () {
                    return this.quickReviewConfigs[this.index] || []
                }
            }, watch: {
                "quickReviewConfigs.length": {
                    immediate: !0, handler: function (t) {
                        t && this.refresh()
                    }
                }, tid: {
                    immediate: !0, handler: function (t) {
                        t && this.refresh()
                    }
                }
            }, mounted: function () {
                this.$emit("quickCommentShow", this.quickReviews)
            }, methods: {
                refresh: function () {
                    for (var t = this.index; this.index === t;) this.index = Math.floor(Math.random() * this.quickReviewConfigs.length)
                }, clickQuickReview: function (t) {
                    this.$raven.debug("clickQuickReview", t), this.$emit("sendQuickReview", t)
                }
            }
        }
    }, qHIs: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("a", {
                staticClass: "xlx-comment__image",
                attrs: {target: "_blank", href: this.isLogin ? this.getUserLink(this.curUser.userId) : "javascript:;"},
                on: {click: this.handleAvatarClick}
            }, [e("img", {
                directives: [{name: "lazy", rawName: "v-lazy", value: this.avartar, expression: "avartar"}],
                key: this.avartar,
                attrs: {alt: "头像"}
            })])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, qo2w: function (t, e, i) {
        "use strict";
        var n = i("Rhsk");
        e.a = {
            props: {
                reviewId: {type: Number, default: 0}, review: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {
                cover: function () {
                    return Object(n.g)(this.review.cover_url, 1, 150, 100) + "/format/jpg"
                }, url: function () {
                    return "http://movie.xunlei.com/reviews/" + this.reviewId
                }, movieUrl: function () {
                    var t = this.review.media_id;
                    return t ? "http://movie.xunlei.com/movies/" + t : ""
                }, imgObj: function () {
                    var t = i("QXBO");
                    return {src: this.cover, loading: t, error: t}
                }, avartar: function () {
                    return this.$sget(this.$store.state.users.all, this.$sget(this.review, "uid"), "portrait_url") || this.getAvatar(this.$sget(this.review, "uid"))
                }
            }, methods: {getAvatar: n.c, getUserLink: n.e}
        }
    }, "s+fl": function (t, e, i) {
        "use strict";
        e.a = function (t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0",
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                o = i.repeat(e - String(t).length);
            return 0 === n ? o + t : t + o
        }
    }, s0dP: function (t, e, i) {
        "use strict";
        var n = i("q4gs"), o = i("8Re5"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\comment\\XlQuickReview.vue", e.a = r.exports
    }, s5fs: function (t, e, i) {
        var n = i("TM1i");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("6c0bdd58", n, !1)
    }, sQgx: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("p", {staticClass: "text-load"}, [e("span", {staticClass: "ico-article-load"}), this._v(this._s(this.text))])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, sT91: function (t, e, i) {
        "use strict";
        var n = i("mvHQ"), o = i.n(n), r = i("d7EF"), a = i.n(r), s = i("//Fk"), c = i.n(s), l = i("7Jn1"),
            p = i("FKCV"), u = i("NQag"), d = i("Nwvo"), h = i.n(d), f = i("Zew7"), x = (i.n(f), i("vGiC")),
            m = i("LF7Y"), g = i("Rhsk");
        e.a = {
            components: {XlBadge: l.a, XlHeader: p.a},
            mixins: [x.a],
            props: {showCustom: {type: Boolean, default: !0}},
            data: function () {
                return {current: 0, praising: !1, customIndex: 0, showTip: !1}
            },
            computed: {
                banners: function () {
                    return this.$store.state.reviews.banners
                }, act: function () {
                    return this.$store.state.home.configModules.reviewAct || {}
                }, list: function () {
                    var t = this, e = Object(u.a)(new Date), i = this.banners.slice(0, 4);
                    if (this.act.startDate <= e && this.act.endDate >= e) {
                        var n = i.findIndex(function (e) {
                            return e.online_time === t.act.startDate
                        });
                        i[n = n >= 0 ? n : i.length > 0 ? i.length - 1 : 0] = this.act
                    }
                    return i
                }, banner: function () {
                    return this.list[this.current] || {}
                }, review: function () {
                    return this.$store.state.reviews.all[this.banner.review_id] || {}
                }, time: function () {
                    return this.$sget(this.banner, "online_time") ? this.$sget(this.banner, "online_time") : this.$sget(this.banner, "startDate") || ""
                }, year: function () {
                    return this.time.split("-")[0]
                }, month: function () {
                    var t = +this.time.split("-")[1] - 1;
                    return ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][t]
                }, day: function () {
                    return this.time.split("-")[2]
                }, recommends: function () {
                    return this.$store.state.reviews.recommends || []
                }, materialList: function () {
                    return this.$store.state["custom-home"].materialList
                }, publisherInfo: function () {
                    return this.$store.state["custom-home"].publisherInfo
                }, custom: {
                    get: function () {
                        var t = this.$store.state.home.custom;
                        return void 0 !== t && null !== t || (t = !0), t && this.customHomeEnable
                    }, set: function (t) {
                        this.$store.commit("home/setCustom", !(!t || !this.customHomeEnable)), Object(m.g)(t)
                    }
                }, customHomeEnable: function () {
                    return this.$store.state.home.configModules.customHomeEnable
                }, uid: function () {
                    return this.$store.state["custom-home"].uid
                }, groupInfo: function () {
                    return this.$store.state["custom-home"].groupInfo
                }, firstExtend: function () {
                    return this.$store.state["custom-home"].firstExtend
                }, curUser: function () {
                    return this.$store.state.users.curUser
                }, floatLayerEnable: function () {
                    return this.$store.state.home.configModules.floatLayerEnable
                }
            },
            watch: {"curUser.userId": "checkGroupJoined"},
            created: function () {
                var t = this;
                this.$store.dispatch("home/getNavConfig"), this.$store.dispatch("reviews/getBanners"), this.$store.dispatch("reviews/getReviewSelection"), this.$store.dispatch("home/getIPBlockInfo"), this.$stat("download_detail", "dltab_startup_filmlib_recommend_show"), c.a.all([Object(m.d)().then(function (e) {
                    e ? (t.$store.dispatch("custom-home/fetchCustomList", e).then(function (i) {
                        t.$stat("download_detail", "dltab_startup_page_show", {
                            type: t.custom && i.length ? "Individualization_home_page" : "official_home_page",
                            uid: e
                        }), Object(m.f)(t.custom && i.length), t.custom && i.length && Object(m.e)(t.uid, "show_times")
                    }), t.$store.dispatch("custom-home/fetchPublisherInfo", e), t.$store.dispatch("custom-home/fetchGroupInfo", e)) : (t.$stat("download_detail", "dltab_startup_page_show", {type: "official_home_page"}), Object(m.f)(!1));
                    var i = e !== t.uid;
                    return i && t.$store.commit("custom-home/set", {key: "uid", value: e}), i
                }), Object(m.a)().then(function (t) {
                    return t
                })]).then(function (e) {
                    var i = a()(e, 2), n = i[0], o = i[1];
                    t.$store.commit("home/setCustom", n || o), Object(m.g)(n || o)
                })
            },
            mounted: function () {
                var t = this;
                h.a.api.attach("OnTabVisibleChange", function (e, i) {
                    e && i && (t.current >= 3 ? t.current = 0 : t.current += 1, t.$stat("download_detail", "dltab_startup_filmlib_show", {gcid: t.list[t.current].review_id}))
                })
            },
            methods: {
                checkGroupJoined: function () {
                    null !== this.uid && void 0 !== this.uid && this.$store.dispatch("custom-home/fetchGroupInfo", this.uid)
                }, openCommunity: function () {
                    h.a.api.call("OpenCommunityGroup", o()({
                        type: "group",
                        extra: {groupId: this.groupInfo.group_id}
                    })), this.needCheckGroupJoined = !0, this.$stat("download_detail", "dltab_joingroup_hover_click", {
                        group_id: this.groupInfo.group_id,
                        button: 1 === this.groupInfo.has_joined ? "open" : "join"
                    })
                }, handleGroupInfoExtend: function () {
                    this.firstExtend && this.groupInfo.has_group && this.$store.commit("custom-home/set", {
                        key: "firstExtend",
                        value: !1
                    }), this.needCheckGroupJoined && (this.checkGroupJoined(), this.needCheckGroupJoined = !1), this.groupInfo.has_group && this.$stat("download_detail", "dltab_joingroup_hover_show", {
                        group_id: this.groupInfo.group_id,
                        type: 1 === this.groupInfo.has_joined ? "joined" : "not_joined"
                    })
                }, reportInfo: m.e, resolveUrl: function (t) {
                    return t && !/^http/.test(t) && (t = /^\/\//.test(t) ? "http:" + t : "http://" + t), t
                }, changeCustom: function () {
                    this.materialList.length ? this.custom = !this.custom : Object(g.j)(function (t) {
                        "close" !== t && window.open("https://vip.xunlei.com/thunder-x-custom-editon/")
                    }, "Individualization_home_page"), this.$stat("download_detail", "dltab_startup_Individualization_click", {
                        uid: this.uid,
                        button: this.materialList.length ? this.custom ? "to_Individualization_home_page" : "to_official_home_page" : "Initialization"
                    }), this.custom && Object(m.e)(this.uid, "show_times")
                }, praise: function () {
                    var t = this;
                    this.review.have_fav || this.praising || (this.praising = !0, this.$store.dispatch("reviews/praise", this.review.id).then(function () {
                        t.praising = !1
                    }), this.reportBannerClick(this.current, this.banner.review_id, "like"))
                }, reportBannerClick: function (t, e, i) {
                    this.$stat("download_detail", "dltab_startup_filmlib_click", {rn: t + 1, gcid: e, button: i})
                }, bannerHover: function (t, e) {
                    this.$stat("download_detail", "dltab_startup_filmlib_hover", {rn: t + 1, gcid: e})
                }, filmClick: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments[2];
                    this.$stat("download_detail", "dltab_startup_filmlib_pic_click", {rn: t + 1, gcid: e, button: i})
                }, recommendHover: function (t, e) {
                    this.$stat("download_detail", "dltab_startup_filmlib_recommend_hover", {rn: t + 1, gcid: e})
                }, recommendClick: function (t, e, i) {
                    this.$stat("download_detail", "dltab_startup_filmlib_pic_recommend_click", {
                        rn: e + 1,
                        gcid: i,
                        button: t
                    })
                }
            }
        }
    }, sYKs: function (t, e, i) {
        var n = i("uF9H");

        function o(t) {
            this.mode = n.NUMERIC, this.data = t.toString()
        }

        o.getBitsLength = function (t) {
            return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
        }, o.prototype.getLength = function () {
            return this.data.length
        }, o.prototype.getBitsLength = function () {
            return o.getBitsLength(this.data.length)
        }, o.prototype.write = function (t) {
            var e, i, n;
            for (e = 0; e + 3 <= this.data.length; e += 3) i = this.data.substr(e, 3), n = parseInt(i, 10), t.put(n, 10);
            var o = this.data.length - e;
            o > 0 && (i = this.data.substr(e), n = parseInt(i, 10), t.put(n, 3 * o + 1))
        }, t.exports = o
    }, slrS: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticStyle: {width: "100%", display: "flex", "flex-direction": "column"},
                on: {
                    click: function (t) {
                        t.stopPropagation()
                    }
                }
            }, [i("div", {
                directives: [{name: "show", rawName: "v-show", value: t.show, expression: "show"}],
                staticClass: "xlx-comment__write",
                class: {"is-focus": t.focus, "is-disabled": !t.tid}
            }, [i("label", {staticClass: "td-textarea"}, [i("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.text,
                    expression: "text"
                }],
                ref: "replyInput",
                staticClass: "td-textarea__inner",
                attrs: {placeholder: t.placeholder, maxlength: t.maxLength},
                domProps: {value: t.text},
                on: {
                    focus: t.handInputFocus, blur: t.handInputBlur, keydown: function (e) {
                        return ("button" in e || !t._k(e.keyCode, "enter", 13, e.key)) && e.ctrlKey ? void t.sendCommentHandler(e) : null
                    }, input: function (e) {
                        e.target.composing || (t.text = e.target.value)
                    }
                }
            })]), i("div", {staticClass: "xlx-comment__oprate"}, [i("xl-emoji", {
                attrs: {
                    "is-input-focus": t.isInputFocus,
                    tid: t.$sget(t.curTask, "taskID")
                }, on: {pick: t.handlePickEmoji, open: t.handleEmojiOpen}, nativeOn: {
                    click: function (e) {
                        t.$emit("clickEmojiIcon")
                    }
                }
            }), i("span", {staticClass: "xlx-comment__line"}), i("a", {
                staticClass: "xlx-button-sumbit",
                class: {"is-focus": !t.disabled && t.focus, "is-disabled": t.disabled},
                attrs: {title: "发送", href: "javascript:;"},
                on: {click: t.sendCommentHandler}
            }, [i("i", {staticClass: "xlx-icon-send"})])], 1), i("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.canShowCommentNote,
                    expression: "canShowCommentNote"
                }], staticClass: "xlx-comment__note"
            }, [t._v("评论请大于" + t._s(t.minLength) + "个字哦~")])]), i("div", {staticClass: "error-message"}, [i("XlMessage", {
                staticClass: "is-absolute",
                attrs: {config: t.messageConfig},
                on: {hide: t.onHideMessage}
            })], 1)])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, sqP0: function (t, e, i) {
        var n = i("L34J");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("20aeb149", n, !1)
    }, t5ck: function (t, e, i) {
        "use strict";
        var n = i("5E5G").ok, o = i("epkN"), r = i("Bcfi"), a = i("fy20").kMaxLength;

        function s(t) {
            if (!(this instanceof s)) return new s(t);
            t && t.chunkSize < o.Z_MIN_CHUNK && (t.chunkSize = o.Z_MIN_CHUNK), o.Inflate.call(this, t), this._offset = void 0 === this._offset ? this._outOffset : this._offset, this._buffer = this._buffer || this._outBuffer, t && null != t.maxLength && (this._maxLength = t.maxLength)
        }

        function c(t, e) {
            e && process.nextTick(e), t._handle && (t._handle.close(), t._handle = null)
        }

        function l(t, e) {
            return function (t, e) {
                if ("string" == typeof e && (e = Buffer.from(e)), !(e instanceof Buffer)) throw new TypeError("Not a string or buffer");
                var i = t._finishFlushFlag;
                return null == i && (i = o.Z_FINISH), t._processChunk(e, i)
            }(new s(e), t)
        }

        s.prototype._processChunk = function (t, e, i) {
            if ("function" == typeof i) return o.Inflate._processChunk.call(this, t, e, i);
            var r, s = this, l = t && t.length, p = this._chunkSize - this._offset, u = this._maxLength, d = 0, h = [],
                f = 0;

            function x(t, e) {
                if (!s._hadError) {
                    var i = p - e;
                    if (n(i >= 0, "have should not go down"), i > 0) {
                        var o = s._buffer.slice(s._offset, s._offset + i);
                        if (s._offset += i, o.length > u && (o = o.slice(0, u)), h.push(o), f += o.length, 0 === (u -= o.length)) return !1
                    }
                    return (0 === e || s._offset >= s._chunkSize) && (p = s._chunkSize, s._offset = 0, s._buffer = Buffer.allocUnsafe(s._chunkSize)), 0 === e && (d += l - t, l = t, !0)
                }
            }

            this.on("error", function (t) {
                r = t
            }), n(this._handle, "zlib binding closed");
            do {
                var m = this._handle.writeSync(e, t, d, l, this._buffer, this._offset, p);
                m = m || this._writeState
            } while (!this._hadError && x(m[0], m[1]));
            if (this._hadError) throw r;
            if (f >= a) throw c(this), new RangeError("Cannot create final Buffer. It would be larger than 0x" + a.toString(16) + " bytes");
            var g = Buffer.concat(h, f);
            return c(this), g
        }, r.inherits(s, o.Inflate), t.exports = e = l, e.Inflate = s, e.createInflate = function (t) {
            return new s(t)
        }, e.inflateSync = l
    }, uF9H: function (t, e, i) {
        var n = i("yYhy"), o = i("NY/E");
        e.NUMERIC = {id: "Numeric", bit: 1, ccBits: [10, 12, 14]}, e.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, e.BYTE = {id: "Byte", bit: 4, ccBits: [8, 16, 16]}, e.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, e.MIXED = {bit: -1}, e.getCharCountIndicator = function (t, e) {
            if (!t.ccBits) throw new Error("Invalid mode: " + t);
            if (!n.isValid(e)) throw new Error("Invalid version: " + e);
            return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
        }, e.getBestModeForData = function (t) {
            return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
        }, e.toString = function (t) {
            if (t && t.id) return t.id;
            throw new Error("Invalid mode")
        }, e.isValid = function (t) {
            return t && t.bit && t.ccBits
        }, e.from = function (t, i) {
            if (e.isValid(t)) return t;
            try {
                return function (t) {
                    if ("string" != typeof t) throw new Error("Param is not a string");
                    switch (t.toLowerCase()) {
                        case"numeric":
                            return e.NUMERIC;
                        case"alphanumeric":
                            return e.ALPHANUMERIC;
                        case"kanji":
                            return e.KANJI;
                        case"byte":
                            return e.BYTE;
                        default:
                            throw new Error("Unknown mode: " + t)
                    }
                }(t)
            } catch (t) {
                return i
            }
        }
    }, utyv: function (t, e) {
        e.L = {bit: 1}, e.M = {bit: 0}, e.Q = {bit: 3}, e.H = {bit: 2}, e.isValid = function (t) {
            return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
        }, e.from = function (t, i) {
            if (e.isValid(t)) return t;
            try {
                return function (t) {
                    if ("string" != typeof t) throw new Error("Param is not a string");
                    switch (t.toLowerCase()) {
                        case"l":
                        case"low":
                            return e.L;
                        case"m":
                        case"medium":
                            return e.M;
                        case"q":
                        case"quartile":
                            return e.Q;
                        case"h":
                        case"high":
                            return e.H;
                        default:
                            throw new Error("Unknown EC Level: " + t)
                    }
                }(t)
            } catch (t) {
                return i
            }
        }
    }, "v+hD": function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, ".nav{justify-content:center;display:flex;height:115px;align-items:center}.nav a{display:block;width:80px;text-align:center;color:#7f7f7f;font-size:14px;position:relative}.ico-nav{width:32px;height:32px;display:block;background:url(" + n(i("01Sk")) + ") 0 -999em no-repeat;margin:0 auto;background-size:100% auto}.ico-nav img{width:100%}.ico-movie{background-position:0 0}.ico-tv{background-position:-40px 0}.ico-game{background-position:-79px 0}.ico-show{background-position:-120px 0}.ico-vip{background-position:-160px 0}.ico-lx{background-position:-200px 0}.ico-sjxl{background-position:-240px 0}.ico-personal{width:30px;background:url(" + n(i("+yHD")) + ") no-repeat;animation:ani-home 3.1s steps(31) infinite}.ico-act{width:40px;overflow:hidden}.ico-act:after{display:block;width:1280px;height:100%;background:url(" + n(i("XbMm")) + ') no-repeat;background-size:1320px auto;content:"";pointer-events:none;animation:nav-act 3.5s both steps(31) infinite}a:hover .ico-act:after{animation:none;background-position:-1280px 0}@keyframes nav-act{0%{transform:translateZ(0)}70%,to{transform:translate3d(-1240px,0,0)}}.ico-feature{background-position:-400px 0}@keyframes ani-home{0%{background-position:0 0}to{background-position:-992px 0}}.ico-article{background-position:-360px 0}a:hover .ico-vip{background-position:-160px -30px}a:hover .ico-movie{background-position:0 -30px}a:hover .ico-tv{background-position:-40px -30px}a:hover .ico-game{background-position:-79px -30px}a:hover .ico-show{background-position:-120px -30px}a:hover .ico-lx{background-position:-200px -30px}a:hover .ico-sjxl{background-position:-240px -30px}.ico-home{background-position:-280px 0}a:hover .ico-home{background-position:-280px -30px}a:hover .ico-feature{background-position:-400px -30px}a:hover .ico-article{background-position:-360px -30px}.index-x .link-report-top{position:absolute;top:2px;right:-10px;width:60px;text-align:center;transform:rotate(45deg)}.link-report-top:hover .link-report-text1{background:#ff8080}.link-report-top:hover .link-report-text2{color:#ff8080}.link-report-text1{display:block;height:17px;line-height:17px;color:#fff;background:#ff4848;transition:.2s}.link-report-text2{color:#ff4848;transition:.2s}.tag-new{position:absolute;right:12px;top:-2px;z-index:8;width:21px;height:13px;background:url(' + n(i("2iyD")) + ") no-repeat;background-size:21px auto}", ""])
    }, vGiC: function (t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), r = i("exGp"), a = i.n(r), s = i("p6+B"), c = i("Rhsk"), l = !1;
        e.a = {
            mounted: function () {
                var t = a()(o.a.mark(function t() {
                    return o.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (!l) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, Object(c.a)();
                            case 4:
                                Object(s.a)("download_detail", "dltab_startup_page_load_time", {time: performance.timing.loadEventEnd - performance.timing.navigationStart}), l = !0;
                            case 6:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function () {
                    return t.apply(this, arguments)
                }
            }()
        }
    }, vNhd: function (t, e, i) {
        "use strict";
        var n = i("mvHQ"), o = i.n(n), r = i("fZjL"), a = i.n(r), s = i("Dd8w"), c = i.n(s), l = i("woOf"), p = i.n(l),
            u = i("u2KI"), d = i.n(u), h = i("gKGV"), f = (i.n(h), i("sqP0")), x = (i.n(f), i("GAsr")), m = i("hMyI"),
            g = i("Rhsk"), v = i("Cb+C"), b = i("wuJz"), _ = (i.n(b), i("zHi1"));
        e.a = {
            components: {TaskChart: x.a, LabelItem: m.a},
            props: {
                curTask: {type: Object, default: null},
                operate: {type: Function, required: !0},
                domReady: {type: Boolean, default: !1},
                skinInfo: {type: Object, default: null},
                speedCurveSkinInfo: {type: Object, default: null}
            },
            data: function () {
                return {
                    labelWidth: 72,
                    labelPadding: 21,
                    chartMainColoeOpacity: 1,
                    chartMainGradientOpcityStart: .2,
                    chartMainGradientOpcityEnd: 0,
                    bShowQrcode: !1,
                    autoShowDayCounts: 2,
                    autoShowTotalCounts: 6,
                    autoShowTimer: 0,
                    qrLoading: !0
                }
            },
            computed: {
                curTaskActions: function () {
                    return this.curTask.actions.filter(function (t) {
                        return !["subtitleDownload"].includes(t)
                    })
                }, curTaskPrimaryAction: function () {
                    var t = this.$sget(this.curTask, "status"), e = this.$sget(this.curTask, "actions") || [];
                    if ("8" === t || "10" === t) {
                        if (e.includes("play") || e.includes("playAndDown")) return "play";
                        if (e.includes("openFolder")) return "openFolder"
                    } else {
                        if ("7" === t) return "continue";
                        if ("20" === t) return "restore";
                        if ("22" === t) return "delete"
                    }
                }, isDefaultSkin: function () {
                    return 0 === this.$sget(this.skinInfo, "type")
                }, skinMainThemeColor: function () {
                    return this.$sget(this.skinInfo, "colors", "colorPrimary")
                }, lineSkinMainColor: function () {
                    return void 0 !== this.skinMainThemeColor ? "rgba(" + this.skinMainThemeColor + ", " + this.chartMainColoeOpacity + ")" : ""
                }, lineGradientColor: function () {
                    var t = [];
                    return "" !== this.lineSkinMainColor && (t[0] = "rgba(" + this.skinMainThemeColor + ", " + this.chartMainGradientOpcityStart + ")", t[1] = "rgba(" + this.skinMainThemeColor + ", " + this.chartMainGradientOpcityEnd + ")"), t
                }, data: function () {
                    return this.curTask ? [{
                        data: d()(p()({0: 0}, this.$sget(this.curTask, "historySpeed") || {})),
                        lineColorStart: this.isDefaultSkin ? "#0f9cff" : this.lineSkinMainColor || "#0f9cff",
                        lineColorEnd: this.isDefaultSkin ? "#9f85ff" : this.lineSkinMainColor || "#0f9cff",
                        gradientColorStart: this.isDefaultSkin ? "rgba(166,134,255,.4)" : this.lineGradientColor.length > 0 ? this.lineGradientColor[0] : "rgba(166,134,255,.4)",
                        gradientColorEnd: this.isDefaultSkin ? "rgba(166,134,255,0)" : this.lineGradientColor.length > 0 ? this.lineGradientColor[1] : "rgba(166,134,255,0)",
                        label: !0
                    }, {
                        data: d()(p()({0: 0}, this.fixHistoryIncreaseSpeed(this.$sget(this.curTask, "historyIncreaseSpeed") || {}, this.$sget(this.curTask, "historySpeed") || {}))),
                        lineColorStart: "rgba(180,76,219,.5)",
                        lineColorEnd: "rgba(255,116,217,.5)",
                        gradientColorStart: "rgba(255,147,171,.4)",
                        gradientColorEnd: "rgba(255,147,171,0)"
                    }] : []
                }, remain: function () {
                    var t = "--:--:--";
                    if (this.curTask.speed > 0 && this.curTask.size > 0) {
                        var e = this.curTask.size - this.curTask.downloadSize;
                        if (e > 0) {
                            var i = e / this.curTask.speed;
                            t = Object(g.b)(i)
                        }
                    }
                    return t
                }, pannel: function () {
                    return this.$store.state.pannel
                }, reportCommonData: function () {
                    return {
                        pannel: this.pannel,
                        gcid: this.curTask.gcid,
                        filename: this.curTask.name,
                        taskid: this.curTask.taskID
                    }
                }
            },
            watch: {
                "curTask.errMessage": function (t, e) {
                    t && this.downloadDetailPost({action: "help_tips_entry_show", position: "special"})
                }, "curTask.taskID": function (t) {
                    this.bShowQrcode = !1, clearTimeout(this.autoShowTimer), t && this.curTask.actions.indexOf("shouleiDownload") > -1 && (this.$stat("download_detail", "dltab_detail_send2phone_icon_show", c()({}, this.reportCommonData)), this.doAutoShowQrcode())
                }
            },
            methods: {
                fixMaxSpeed: function (t, e) {
                    var i = t;
                    return t < e && (i = 1.62 * e), i
                }, fixHistoryIncreaseSpeed: function (t, e) {
                    var i = {};
                    return a()(e).forEach(function (n) {
                        var o = e[n], r = t[n];
                        i[n] = Number(r) > Number(o) ? o : r
                    }), i
                }, deleteOldSpeedData: function (t, e) {
                    if (t) return a()(t).filter(function (t) {
                        return parseInt(t) < parseInt(e)
                    }).reduce(function (e, i) {
                        return e[i] = t[i], e
                    }, {})
                }, getDotLeft: function (t, e) {
                    return t.x > e ? t.x > t.canvasWidth - e ? t.canvasWidth - e - e : t.x - e : 0
                }, getDotStyle: function (t, e) {
                    var i = e / 2;
                    return {left: this.getDotLeft(t, i) + "px", top: t.y - i + "px"}
                }, getLabelStyle: function (t, e, i, n) {
                    var o = i + e + n;
                    return {left: (this.getDotLeft(t, i / 2) < t.canvasWidth - o ? i : -(n + e)) + "px"}
                }, downloadDetailPost: function (t) {
                    var e = t.action, i = t.position;
                    this.$stat("download_detail", e, {position: i})
                }, showQrcode: function (t) {
                    var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.bShowQrcode !== t && (t && (this.qrLoading = !0, this.$nextTick(function () {
                        var t = document.getElementById("qrcodecanvas"), n = t.getContext("2d");
                        n.fillStyle = "white", n.fillRect(0, 0, 80, 80);
                        var o = "";
                        1 === e.curTask.type || 3 === e.curTask.type ? o = e.curTask.url : 2 === e.curTask.type && (o = "magnet:?xt=urn:btih:" + e.curTask.infoId), o = "https://mobile.xunlei.com/m/channel.html?from=xunlei10daoliang&taskDownload=" + o + "&scheme=xunleiapp://xunlei.com/sharePage?shareH5=share_H5", v.a.promiseApi("GetBaiduDWZ", o).then(function (n) {
                            n = "" !== n ? n : "https://mobile.xunlei.com/m/channel.html?from=xunlei10daoliang", e.qrLoading = !1, _.toCanvas(t, n, {
                                margin: 0,
                                width: 80
                            }), i && (e.autoShowTimer = setTimeout(function () {
                                e.bShowQrcode = !1
                            }, 3e3))
                        }).catch()
                    }), i ? this.$stat("download_detail", "dltab_detail_send2phone_qr_auto_show", c()({}, this.reportCommonData)) : this.$emit("sendDetailCurveClick", "right", "send2phone_qr-hover")), this.bShowQrcode = t)
                }, doAutoShowQrcode: function () {
                    var t = Object(b.format)(new Date, "YYYY-MM-DD"),
                        e = JSON.parse(window.localStorage.getItem("autoShowQrcode"));
                    if (e && e.date && e.count && e.totalCount) {
                        if (e.date === t && e.count >= this.autoShowDayCounts || e.totalCount >= this.autoShowTotalCounts) return;
                        e.date === t ? window.localStorage.setItem("autoShowQrcode", o()({
                            date: t,
                            count: e.count + 1,
                            totalCount: e.totalCount + 1
                        })) : window.localStorage.setItem("autoShowQrcode", o()({
                            date: t,
                            count: 1,
                            totalCount: e.totalCount + 1
                        })), this.showQrcode(!0, !0)
                    } else window.localStorage.setItem("autoShowQrcode", o()({
                        date: t,
                        count: 1,
                        totalCount: 1
                    })), this.showQrcode(!0, !0)
                }
            }
        }
    }, vPzN: function (t, e, i) {
        var n = i("yZj6"), o = i("uF9H");

        function r(t) {
            this.mode = o.BYTE, this.data = new n(t)
        }

        r.getBitsLength = function (t) {
            return 8 * t
        }, r.prototype.getLength = function () {
            return this.data.length
        }, r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function (t) {
            for (var e = 0, i = this.data.length; e < i; e++) t.put(this.data[e], 8)
        }, t.exports = r
    }, vYXY: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ':root{--index-color-title:#1a1a1a;--index-color-hover:#69f;--index-color-sub:#a8a8a8;--index-color-nav:#7f7f7f}body{color:#1a1a1a;--innerWidth:1250px}.index-wrap{height:100vh;--color-primary:var(--index-color-hover);--color-primary-hover:var(--index-color-hover)}.index-wrap .nav a{color:var(--index-color-nav)}.index-x{position:relative}.wrap-x{width:var(--innerWidth);margin:0 auto}.banner-x{height:450px;position:relative;transition:.3s;overflow:hidden;border-radius:10px}.banner-x h1{left:28px;bottom:20px;z-index:5;width:calc(100% - 150px);line-height:1.2;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;font-size:40px;color:#fff}.banner-x:before,.banner-x h1{position:absolute;pointer-events:none}.banner-x:before{height:80px;background:linear-gradient(0deg,transparent,rgba(0,0,0,.7))}.banner-x:after,.banner-x:before{width:100%;content:"";z-index:2;top:0;left:0}.banner-x:after{height:100%;position:absolute;background:linear-gradient(transparent 50%,rgba(0,0,0,.7));pointer-events:none}.banner-x .bg-pic{width:125%;height:125%;background-size:cover;background-position:50%;display:block;overflow:hidden;border-radius:10px;margin-left:-12.5%}.banner-x .banner-info{display:flex;flex-direction:column;justify-content:center;width:92px;height:55px;position:absolute;top:16px;left:28px;font-size:18px;line-height:1.2;text-align:center;color:#fff;border:1px solid hsla(0,0%,100%,.4);pointer-events:none;z-index:4}.banner-x .time{display:flex;justify-content:center;align-items:center;font-size:20px}.banner-x .day{font-size:78px;margin:0 25px 0 0}.banner-x .line{width:1px;height:16px;margin:0 5px;background:#ebf0f4;transform:rotate(20deg)}.banner-opt{position:absolute;width:90px;right:12px;bottom:25px;z-index:4}.banner-opt .banner-opt__list a{position:relative;display:block;height:54px;margin-bottom:4px;border:1px solid #a7a7a7;cursor:pointer}.banner-opt .banner-opt__list a img{width:100%;height:100%;object-fit:cover}.banner-opt .banner-opt__list a:after{position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.6);transition:opacity .2s;content:""}.banner-opt .banner-opt__list a.cur{border-color:#fff}.banner-opt .banner-opt__list a.cur:after,.banner-opt .banner-opt__list a:hover:after{opacity:0}.banner-opt .banner-opt__link{display:block;height:28px;text-align:center;line-height:28px;background:rgba(0,0,0,.6);border:1px solid #a7a7a7;transition:.2s}.banner-opt .banner-opt__link:hover{color:#fff;border-color:#fff}.index-list{margin-top:40px}.index-list ul{display:flex;flex-wrap:wrap}.index-list__item{width:50%;margin-bottom:40px;font-size:16px;color:var(--index-color-sub)}.index-list__item .title{display:block;margin-right:25px;font-size:26px;line-height:2;color:var(--index-color-title);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-list__item .index-list__info,.index-list__item .user-info{display:flex;align-items:center}.index-list__item .user-avatar{display:block;width:28px;height:28px}.index-list__item .user-avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}.index-list__item .user-name{max-width:10em;margin:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-list__item .info-from{display:flex}.index-list__item .movie-name{max-width:13em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.index-list__item .movie-name.article-link-text{cursor:text;color:var(--index-color-sub)}.index-list__item .movie-name.article-link-text:hover{color:currentColor}.index-list__item a{color:var(--index-color-sub);transition:color .2s}.index-list__item a:hover{color:var(--color-primary)}.index-list__more{display:flex;justify-content:flex-end}.index-list__more a{font-size:16px;color:var(--color-primary)}.index-list__more a:hover{color:var(--color-primary-hover)}@media only screen and (max-height:860px),only screen and (min-width:1101px) and (max-width:1400px){body{--innerWidth:1000px}.nav{height:95px}.banner-x{height:380px}.banner-x h1{font-size:35px}.banner-x .banner-info{font-size:16px}.banner-x .time{font-size:18px;line-height:1}.banner-opt{width:80px}.banner-opt .banner-opt__list a{height:45px}.index-article{margin:30px 0 0}.index-article h1{font-size:32px;line-height:3}.index-article P{font-size:16px;line-height:2;height:64px}.from-info{font-size:14px}.index-list{margin-top:30px}.index-list__item{margin-bottom:25px;font-size:15px}.index-list__item .title{margin-right:20px;font-size:22px}.index-list__item .user-name{max-width:8em}.index-list__item .movie-name{max-width:12em}}@media only screen and (max-height:770px),only screen and (min-width:800px) and (max-width:1100px){body{--innerWidth:740px}.nav{height:85px}.banner-x{height:310px}.banner-x h1{font-size:28px}.banner-x .banner-info{width:80px;height:48px;font-size:16px}.banner-x .time{font-size:16px}.banner-opt{width:75px}.banner-opt .banner-opt__list a{height:45px}.index-list{margin-top:30px}.index-list__item{margin-bottom:25px;font-size:14px}.index-list__item .title{margin-right:20px;font-size:20px}.index-list__item .user-name{max-width:7em}.index-list__item .movie-name{max-width:8em}.index-list__item .user-avatar{width:22px;height:22px}.index-list__more a{font-size:13px}}@media only screen and (max-height:650px),only screen and (max-width:860px){body{--innerWidth:596px}.nav{height:90px}.banner-x{height:260px}.banner-x h1{left:20px;bottom:16px;width:calc(100% - 120px);font-size:23px}.banner-x .banner-info{left:20px;width:60px;height:38px;font-size:12px}.banner-x .time{font-size:13px}.banner-x .line{margin:0 2px}.banner-x:before{height:60px}.banner-opt{width:70px;bottom:18px}.banner-opt .banner-opt__list a{height:40px}.banner-opt .banner-opt__link{height:22px;line-height:22px}.index-list{margin-top:30px}.index-list__item{margin-bottom:26px;font-size:12px}.index-list__item .title{margin-right:10px;font-size:15px}.index-list__item .user-name{max-width:6em}.index-list__item .movie-name{max-width:11em}.index-list__item .user-avatar{width:18px;height:18px}.index-list__more a{font-size:12px}}', ""])
    }, vqIZ: function (t, e, i) {
        "use strict";
        var n = i("4Xj0"), o = i("GzfO"), r = i("VU/8")(n.a, o.a, !1, null, null, null);
        r.options.__file = "components\\comment\\XlCommentRank.vue", e.a = r.exports
    }, vsCm: function (t, e, i) {
        "use strict";
        e.a = {
            props: {
                downloadSize: {type: Number, default: 0},
                fileSize: {type: [Number, String], default: 0},
                label: {type: String, default: ""},
                description: {type: String, default: ""}
            }
        }
    }, vtmt: function (t, e, i) {
        "use strict";
        var n = i("Bcfi"), o = i("97RM"), r = i("a+up"), a = i("kRHK"), s = i("jsmL"), c = e.PNG = function (t) {
            o.call(this), t = t || {}, this.width = 0 | t.width, this.height = 0 | t.height, this.data = this.width > 0 && this.height > 0 ? new Buffer(4 * this.width * this.height) : null, t.fill && this.data && this.data.fill(0), this.gamma = 0, this.readable = this.writable = !0, this._parser = new r(t), this._parser.on("error", this.emit.bind(this, "error")), this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), this._parser.on("gamma", this._gamma.bind(this)), this._parser.on("parsed", function (t) {
                this.data = t, this.emit("parsed", t)
            }.bind(this)), this._packer = new a(t), this._packer.on("data", this.emit.bind(this, "data")), this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), this._packer.on("error", this.emit.bind(this, "error"))
        };
        n.inherits(c, o), c.sync = s, c.prototype.pack = function () {
            return this.data && this.data.length ? (process.nextTick(function () {
                this._packer.pack(this.data, this.width, this.height, this.gamma)
            }.bind(this)), this) : (this.emit("error", "No data provided"), this)
        }, c.prototype.parse = function (t, e) {
            var i, n;
            e && (i = function (t) {
                this.removeListener("error", n), this.data = t, e(null, this)
            }.bind(this), n = function (t) {
                this.removeListener("parsed", i), e(t, null)
            }.bind(this), this.once("parsed", i), this.once("error", n));
            return this.end(t), this
        }, c.prototype.write = function (t) {
            return this._parser.write(t), !0
        }, c.prototype.end = function (t) {
            this._parser.end(t)
        }, c.prototype._metadata = function (t) {
            this.width = t.width, this.height = t.height, this.emit("metadata", t)
        }, c.prototype._gamma = function (t) {
            this.gamma = t
        }, c.prototype._handleClose = function () {
            this._parser.writable || this._packer.readable || this.emit("close")
        }, c.bitblt = function (t, e, i, n, o, r, a, s) {
            if (n |= 0, o |= 0, r |= 0, a |= 0, s |= 0, (i |= 0) > t.width || n > t.height || i + o > t.width || n + r > t.height) throw new Error("bitblt reading outside image");
            if (a > e.width || s > e.height || a + o > e.width || s + r > e.height) throw new Error("bitblt writing outside image");
            for (var c = 0; c < r; c++) t.data.copy(e.data, (s + c) * e.width + a << 2, (n + c) * t.width + i << 2, (n + c) * t.width + i + o << 2)
        }, c.prototype.bitblt = function (t, e, i, n, o, r, a) {
            return c.bitblt(this, t, e, i, n, o, r, a), this
        }, c.adjustGamma = function (t) {
            if (t.gamma) {
                for (var e = 0; e < t.height; e++) for (var i = 0; i < t.width; i++) for (var n = t.width * e + i << 2, o = 0; o < 3; o++) {
                    var r = t.data[n + o] / 255;
                    r = Math.pow(r, 1 / 2.2 / t.gamma), t.data[n + o] = Math.round(255 * r)
                }
                t.gamma = 0
            }
        }, c.prototype.adjustGamma = function () {
            c.adjustGamma(this)
        }
    }, wBZN: function (t, e, i) {
        var n = i("yZj6"), o = i("X0RI");

        function r(t) {
            this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
        }

        r.prototype.initialize = function (t) {
            this.degree = t, this.genPoly = o.generateECPolynomial(this.degree)
        }, r.prototype.encode = function (t) {
            if (!this.genPoly) throw new Error("Encoder not initialized");
            var e = new n(this.degree);
            e.fill(0);
            var i = n.concat([t, e], t.length + this.degree), r = o.mod(i, this.genPoly), a = this.degree - r.length;
            if (a > 0) {
                var s = new n(this.degree);
                return s.fill(0), r.copy(s, a), s
            }
            return r
        }, t.exports = r
    }, wGAy: function (t, e, i) {
        "use strict";
        e.a = {
            props: {icon: {type: Object, required: !0}}, data: function () {
                return {show: !1, defaultIcon: i("5X0l")}
            }, methods: {
                imgError: function (t) {
                    t.target.src = this.defaultIcon
                }
            }
        }
    }, wGE2: function (t, e, i) {
        "use strict";
        var n = [{x: [0], y: [0]}, {x: [4], y: [0]}, {x: [0, 4], y: [4]}, {x: [2, 6], y: [0, 4]}, {
            x: [0, 2, 4, 6],
            y: [2, 6]
        }, {x: [1, 3, 5, 7], y: [0, 2, 4, 6]}, {x: [0, 1, 2, 3, 4, 5, 6, 7], y: [1, 3, 5, 7]}];
        e.getImagePasses = function (t, e) {
            for (var i = [], o = t % 8, r = e % 8, a = (t - o) / 8, s = (e - r) / 8, c = 0; c < n.length; c++) {
                for (var l = n[c], p = a * l.x.length, u = s * l.y.length, d = 0; d < l.x.length && l.x[d] < o; d++) p++;
                for (d = 0; d < l.y.length && l.y[d] < r; d++) u++;
                p > 0 && u > 0 && i.push({width: p, height: u, index: c})
            }
            return i
        }, e.getInterlaceIterator = function (t) {
            return function (e, i, o) {
                var r = e % n[o].x.length, a = (e - r) / n[o].x.length * 8 + n[o].x[r], s = i % n[o].y.length;
                return 4 * a + ((i - s) / n[o].y.length * 8 + n[o].y[s]) * t * 4
            }
        }
    }, wSNb: function (t, e, i) {
        "use strict";
        var n = i("Bcfi"), o = i("aZ/4"), r = i("CSz0"), a = t.exports = function (t) {
            o.call(this);
            var e = [], i = this;
            this._filter = new r(t, {
                read: this.read.bind(this), write: function (t) {
                    e.push(t)
                }, complete: function () {
                    i.emit("complete", Buffer.concat(e))
                }
            }), this._filter.start()
        };
        n.inherits(a, o)
    }, wfXX: function (t, e, i) {
        "use strict";
        var n = i("JmXp"), o = i("i+uq"), r = !1;
        var a = function (t) {
            r || i("gmCW")
        }, s = i("VU/8")(n.a, o.a, !1, a, null, null);
    }, xJzN: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("span", [t._t("default", null, {
                isVip: t.isVip,
                isYear: t.isYear,
                vipType: t.vipType
            }), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.visible && t.show,
                    expression: "visible && show"
                }], attrs: {target: "_blank", href: t.vipLink}, nativeOn: {
                    click: function (e) {
                        t.$emit("clickVip")
                    }
                }
            }, [i("vip-icon", {attrs: {size: "small", "vip-data": t.vipData}})], 1)], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, "xR/K": function (t, e, i) {
        var n = i("oLzS"), o = n.getBCHDigit(1335);
        e.getEncodedBits = function (t, e) {
            for (var i = t.bit << 3 | e, r = i << 10; n.getBCHDigit(r) - o >= 0;) r ^= 1335 << n.getBCHDigit(r) - o;
            return 21522 ^ (i << 10 | r)
        }
    }, xfDa: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [i("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.avartar,
                    expression: "avartar"
                }, {name: "popup", rawName: "v-popup:popup-user", arg: "popup-user"}],
                key: t.avartar,
                attrs: {alt: "头像"}
            }), i("popup", {
                ref: "popup-user",
                staticClass: "xlx-card",
                attrs: {display: t.showPop, direction: t.direction},
                on: {
                    "update:display": function (e) {
                        t.showPop = e
                    }
                },
                nativeOn: {
                    contextmenu: function (t) {
                        t.preventDefault()
                    }
                }
            }, [i("div", {staticClass: "xlx-card__content"}, [i("a", {
                staticClass: "xlx-card__avatar",
                attrs: {href: t.getUserLink(t.user.uid), target: "_blank"},
                on: {
                    click: function (e) {
                        t.statClick("head")
                    }
                }
            }, [i("img", {
                attrs: {
                    src: t.user.portrait_url,
                    alt: "头像"
                }
            })]), i("div", {staticClass: "xlx-card__information"}, [i("div", {staticClass: "xlx-card__title"}, [i("a", {
                staticClass: "xlx-card__name",
                class: {"is-vip": t.vipInfo.isVip},
                attrs: {href: t.getUserLink(t.user.uid), target: "_blank"},
                on: {
                    click: function (e) {
                        t.statClick("name")
                    }
                }
            }, [t._v(t._s(t.user.nick_name || "迅雷用户"))]), "female" === t.user.sex ? i("i", {staticClass: "xlx-icon-girl"}) : t._e(), "male" === t.user.sex ? i("i", {staticClass: "xlx-icon-boy"}) : t._e()]), i("div", {staticClass: "xlx-card__icon"}, [i("vip-icon", {attrs: {"vip-data": t.vipData}})], 1), i("p", {staticClass: "xlx-card__sign"}, [t._v(t._s(t.user.description || t.user.biography || "这家伙很懒，啥也没写"))])])]), t.user.uid !== t.curUid ? i("div", {staticClass: "xlx-card__bottom"}, [i("div", {staticClass: "xlx-card__button"}, [i("xl-follow", {
                staticClass: "td-button td-button--secondary",
                attrs: {uid: t.user.uid, position: t.followFrom}
            }), i("a", {
                staticClass: "td-button",
                attrs: {href: "javascript:;"},
                on: {click: t.openChat}
            }, [t._v("私信")])], 1)]) : t._e()])], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        e.a = o
    }, yDtN: function (t, e, i) {
        var n = i("Mx08");
        "string" == typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        i("rjj0")("1696bd3c", n, !1)
    }, yEba: function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
        };
        n._withStripped = !0;
        var o = {
        };
        e.a = o
    }, yYhy: function (t, e) {
        e.isValid = function (t) {
            return !isNaN(t) && t >= 1 && t <= 40
        }
    }, yZj6: function (t, e, i) {
        t.exports = i("fy20").Buffer
    }, yhIe: function (t, e, i) {
        "use strict";
        var n = t.exports = function (t) {
            this._buffer = t, this._reads = []
        };
        n.prototype.read = function (t, e) {
            this._reads.push({length: Math.abs(t), allowLess: t < 0, func: e})
        }, n.prototype.process = function () {
            for (; this._reads.length > 0 && this._buffer.length;) {
                var t = this._reads[0];
                if (!this._buffer.length || !(this._buffer.length >= t.length || t.allowLess)) break;
                this._reads.shift();
                var e = this._buffer;
                this._buffer = e.slice(t.length), t.func.call(this, e.slice(0, t.length))
            }
            return this._reads.length > 0 ? new Error("There are some read requests waitng on finished stream") : this._buffer.length > 0 ? new Error("unrecognised content at end of stream") : void 0
        }
    }, ypCh: function (t, e, i) {
        var n = i("kxFB");
        (t.exports = i("FZ+f")(!1)).push([t.i, "@font-face{font-family:xlx-icon-vip;src:url(" + n(i("Z33O")) + ') format("truetype")}[class^=vip-icon-]{display:inline-block;width:42px;height:12px;overflow:hidden;line-height:12px;text-align:center;background-image:url(' + n(i("/t4/")) + ');background-size:470px auto;border-radius:2px}[class^=vip-icon-].is-disabled:after{display:none}[class^=vip-icon-].is-small{width:19px;font-size:16px;font-family:xlx-icon-vip!important;font-style:normal;background-image:none}[class^=vip-icon-].is-small:before{display:block}[class^=vip-icon-].is-small:after{display:none}[class^=vip-icon-].is-small.is-disabled{color:#e9e9e9!important;background-color:#aaa}[class^=vip-icon-vip].is-small{color:#ffe3a1!important;background-color:#f15063}[class^=vip-icon-pvip].is-small{color:#c17010!important;background-color:#fdca41}[class^=vip-icon-svip].is-small{color:#ffe14e!important;background-color:#424242}.vip-icon-pvip0,.vip-icon-svip0,.vip-icon-vip0{width:15px}.vip-icon-vip0.is-small:before{content:"\\E66C"}.vip-icon-vip1.is-small:before{content:"\\E66D"}.vip-icon-vip2.is-small:before{content:"\\E66E"}.vip-icon-vip3.is-small:before{content:"\\E66F"}.vip-icon-vip4.is-small:before{content:"\\E670"}.vip-icon-vip5.is-small:before{content:"\\E671"}.vip-icon-vip6.is-small:before{content:"\\E672"}.vip-icon-vip7.is-small:before{content:"\\E673"}.vip-icon-pvip0.is-small:before{content:"\\E67C"}.vip-icon-pvip1.is-small:before{content:"\\E67D"}.vip-icon-pvip2.is-small:before{content:"\\E67E"}.vip-icon-pvip3.is-small:before{content:"\\E682"}.vip-icon-pvip4.is-small:before{content:"\\E683"}.vip-icon-pvip5.is-small:before{content:"\\E684"}.vip-icon-pvip6.is-small:before{content:"\\E685"}.vip-icon-pvip7.is-small:before{content:"\\E686"}.vip-icon-pvip8.is-small:before{content:"\\E69E"}.vip-icon-pvip9.is-small:before{content:"\\E69C"}.vip-icon-pvip10.is-small:before{content:"\\E69D"}.vip-icon-svip0.is-small:before{content:"\\E675"}.vip-icon-svip1.is-small:before{content:"\\E674"}.vip-icon-svip2.is-small:before{content:"\\E67B"}.vip-icon-svip3.is-small:before{content:"\\E67A"}.vip-icon-svip4.is-small:before{content:"\\E678"}.vip-icon-svip5.is-small:before{content:"\\E676"}.vip-icon-svip6.is-small:before{content:"\\E677"}.vip-icon-svip7.is-small:before{content:"\\E679"}.vip-icon-svip8.is-small:before{content:"\\E6A0"}.vip-icon-svip9.is-small:before{content:"\\E69F"}.vip-icon-svip10.is-small:before{content:"\\E6A1"}.vip-icon-pvip0,.vip-icon-svip0,.vip-icon-vip0{width:35px}.vip-icon-pvip10,.vip-icon-svip10{width:46px}.vip-icon-nian{width:12px;background-position:0 -78px}.vip-icon-nian.is-disabled{background-position:-13px -78px}.vip-icon-vip0{background-position:0 0}.vip-icon-vip1{background-position:-36px 0}.vip-icon-vip2{background-position:-79px 0}.vip-icon-vip3{background-position:-122px 0}.vip-icon-vip4{background-position:-165px 0}.vip-icon-vip5{background-position:-208px 0}.vip-icon-vip6{background-position:-251px 0}.vip-icon-vip7{background-position:-294px 0}.vip-icon-vip0.is-disabled{background-position:0 -13px}.vip-icon-vip1.is-disabled{background-position:-36px -13px}.vip-icon-vip2.is-disabled{background-position:-79px -13px}.vip-icon-vip3.is-disabled{background-position:-122px -13px}.vip-icon-vip4.is-disabled{background-position:-165px -13px}.vip-icon-vip5.is-disabled{background-position:-208px -13px}.vip-icon-vip6.is-disabled{background-position:-251px -13px}.vip-icon-vip7.is-disabled{background-position:-294px -13px}.vip-icon-pvip0{background-position:0 -26px}.vip-icon-pvip1{background-position:-36px -26px}.vip-icon-pvip2{background-position:-79px -26px}.vip-icon-pvip3{background-position:-122px -26px}.vip-icon-pvip4{background-position:-165px -26px}.vip-icon-pvip5{background-position:-208px -26px}.vip-icon-pvip6{background-position:-251px -26px}.vip-icon-pvip7{background-position:-294px -26px}.vip-icon-pvip8{background-position:-337px -26px}.vip-icon-pvip9{background-position:-380px -26px}.vip-icon-pvip10{background-position:-423px -26px}.vip-icon-pvip0.is-disabled{background-position:0 -39px}.vip-icon-pvip1.is-disabled{background-position:-36px -39px}.vip-icon-pvip2.is-disabled{background-position:-79px -39px}.vip-icon-pvip3.is-disabled{background-position:-122px -39px}.vip-icon-pvip4.is-disabled{background-position:-165px -39px}.vip-icon-pvip5.is-disabled{background-position:-208px -39px}.vip-icon-pvip6.is-disabled{background-position:-251px -39px}.vip-icon-pvip7.is-disabled{background-position:-294px -39px}.vip-icon-pvip8.is-disabled{background-position:-337px -39px}.vip-icon-pvip9.is-disabled{background-position:-380px -39px}.vip-icon-pvip10.is-disabled{background-position:-423px -39px}.vip-icon-svip0{background-position:0 -52px}.vip-icon-svip1{background-position:-36px -52px}.vip-icon-svip2{background-position:-79px -52px}.vip-icon-svip3{background-position:-122px -52px}.vip-icon-svip4{background-position:-165px -52px}.vip-icon-svip5{background-position:-208px -52px}.vip-icon-svip6{background-position:-251px -52px}.vip-icon-svip7{background-position:-294px -52px}.vip-icon-svip8{background-position:-337px -52px}.vip-icon-svip9{background-position:-380px -52px}.vip-icon-svip10{background-position:-423px -52px}.vip-icon-svip0.is-disabled{background-position:0 -65px}.vip-icon-svip1.is-disabled{background-position:-36px -65px}.vip-icon-svip2.is-disabled{background-position:-79px -65px}.vip-icon-svip3.is-disabled{background-position:-122px -65px}.vip-icon-svip4.is-disabled{background-position:-165px -65px}.vip-icon-svip5.is-disabled{background-position:-208px -65px}.vip-icon-svip6.is-disabled{background-position:-251px -65px}.vip-icon-svip7.is-disabled{background-position:-294px -65px}.vip-icon-svip8.is-disabled{background-position:-337px -65px}.vip-icon-svip9.is-disabled{background-position:-380px -65px}.vip-icon-svip10.is-disabled{background-position:-423px -65px}.vip-icon-pvip8:after,.vip-icon-pvip9:after,.vip-icon-pvip10:after,.vip-icon-svip8:after,.vip-icon-svip9:after,.vip-icon-svip10:after{display:block;margin-left:8px;width:22px;height:12px;background-image:url(' + n(i("/t4/")) + ');background-size:470px auto;background-position:-36px -78px;background-repeat:no-repeat;content:"";animation:iconVip 2s both infinite}@keyframes iconVip{0%{transform:translateX(0)}50%,to{transform:translateX(30px)}}', ""])
    }, yr0C: function (t, e, i) {
        var n;
        n = function () {
            return function (t) {
                var e = {};

                function i(n) {
                    if (e[n]) return e[n].exports;
                    var o = e[n] = {i: n, l: !1, exports: {}};
                    return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
                }

                return i.m = t, i.c = e, i.i = function (t) {
                    return t
                }, i.d = function (t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: n})
                }, i.n = function (t) {
                    var e = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return i.d(e, "a", e), e
                }, i.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, i.p = "", i(i.s = 3)
            }([function (t, e, i) {
                "use strict";
                e.a = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = "", i = "";
                    if (!t || 0 === t.length) return {isVip: !1};
                    var n = t.filter(function (t) {
                        return t && 2 === (t.vasId || t.vasID)
                    })[0];
                    if (i = n.vIPLevel || n.VIPLevel || 0, n) {
                        var o = {2: "", 3: "p", 5: "s"}[n.vasType] || "";
                        return e = "vip-icon-" + o + "vip" + i, {
                            isVip: "1" === n.isVIP,
                            isStop: "2" === n.isVIP,
                            isYear: "1" === n.isYear,
                            type: n.vasType,
                            level: i,
                            vipClass: e
                        }
                    }
                    return {isVip: !1}
                }
            }, function (t, e, i) {
                "use strict";
                var n = i(4), o = i.n(n);
                o.a.install = function (t) {
                    t.component(o.a.name, o.a)
                }, e.a = o.a
            }, function (t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {value: !0});
                var n = i(0);
                e.default = {
                    name: "vip-icon",
                    props: {
                        vipData: {type: Array, required: !0},
                        size: {type: String, default: "normal"},
                        disabled: {type: Boolean, default: !1}
                    },
                    computed: {
                        vipInfo: function () {
                            return i.i(n.a)(this.vipData)
                        }, vipClass: function () {
                            var t = this.vipInfo.vipClass;
                            return "small" === this.size && (t += " is-small"), (this.vipInfo.isStop || "0" === this.vipInfo.level || this.disabled) && (t += " is-disabled"), t
                        }
                    }
                }
            }, function (t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {value: !0});
                var n = i(1), o = i(0);
                i.d(e, "vipInfo", function () {
                    return o.a
                });
                var r = {
                    install: function (t, e) {
                        t.use(n.a), t.prototype.$vipInfo = function (t) {
                            return i.i(o.a)(t)
                        }
                    }
                };
                e.default = r
            }, function (t, e, i) {
                var n = i(5)(i(2), i(6), null, null, null);
                n.options.__file = "/Users/nancy/Desktop/work/@xunlei/vip/src/vip-icon/VipIcon.vue", n.esModule && Object.keys(n.esModule).some(function (t) {
                    return "default" !== t && "__" !== t.substr(0, 2)
                }) && console.error("named exports are not supported in *.vue files."), n.options.functional && console.error("[vue-loader] VipIcon.vue: functional components are not supported with templates, they should use render functions."), t.exports = n.exports
            }, function (t, e) {
                t.exports = function (t, e, i, n, o) {
                    var r, a = t = t || {}, s = typeof t.default;
                    "object" !== s && "function" !== s || (r = t, a = t.default);
                    var c, l = "function" == typeof a ? a.options : a;
                    if (e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), n && (l._scopeId = n), o ? (c = function (t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
                    }, l._ssrRegister = c) : i && (c = i), c) {
                        var p = l.functional, u = p ? l.render : l.beforeCreate;
                        p ? l.render = function (t, e) {
                            return c.call(e), u(t, e)
                        } : l.beforeCreate = u ? [].concat(u, c) : [c]
                    }
                    return {esModule: r, exports: a, options: l}
                }
            }, function (t, e, i) {
                t.exports = {
                    render: function () {
                        var t = this.$createElement;
                        return (this._self._c || t)("i", {class: this.vipClass})
                    }, staticRenderFns: []
                }, t.exports.render._withStripped = !0
            }])
        }, t.exports = n()
    }, zHi1: function (t, e, i) {
        t.exports = i("1Gi+")
    }, zYqW: function (t, e, i) {
        var n = i("uF9H"), o = i("oLzS");

        function r(t) {
            this.mode = n.KANJI, this.data = t
        }

        r.getBitsLength = function (t) {
            return 13 * t
        }, r.prototype.getLength = function () {
            return this.data.length
        }, r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function (t) {
            var e;
            for (e = 0; e < this.data.length; e++) {
                var i = o.toSJIS(this.data[e]);
                if (i >= 33088 && i <= 40956) i -= 33088; else {
                    if (!(i >= 57408 && i <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    i -= 49472
                }
                i = 192 * (i >>> 8 & 255) + (255 & i), t.put(i, 13)
            }
        }, t.exports = r
    }, zfUU: function (t, e, i) {
        (t.exports = i("FZ+f")(!1)).push([t.i, ".xlx-home__content{display:block}", ""])
    }
});
//# sourceMappingURL=../../sourcemaps/pages_home.a8c109899d60b5bd77cc.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2019/03/17 */
/*! https://www.luochenzhimu.com */