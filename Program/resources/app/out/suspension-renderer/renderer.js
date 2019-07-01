/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2019/03/17 */
/*! https://www.luochenzhimu.com */
module.exports = function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1009)
}({
    0: function (e, t, n) {
        "use strict";

        function i(e, t, n, i, o, r, a, s) {
            var l, d = "function" == typeof e ? e.options : e;
            if (t && (d.render = t, d.staticRenderFns = n, d._compiled = !0), i && (d.functional = !0), r && (d._scopeId = "data-v-" + r), a ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
            }, d._ssrRegister = l) : o && (l = s ? function () {
                o.call(this, this.$root.$options.shadowRoot)
            } : o), l) if (d.functional) {
                d._injectStyles = l;
                var c = d.render;
                d.render = function (e, t) {
                    return l.call(t), c(e, t)
                }
            } else {
                var u = d.beforeCreate;
                d.beforeCreate = u ? [].concat(u, l) : [l]
            }
            return {exports: e, options: d}
        }

        n.d(t, "a", function () {
            return i
        })
    }, 1: function (e, t, n) {
        e.exports = n(9)(120)
    }, 10: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(17), r = n(2), a = n(6).promisify, s = n(1).default.getLogger("Thunder.base.fs-utilities");
        !function (e) {
            function t(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.access);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.information(e)
                        }
                    }
                    return t
                })
            }

            function l(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.mkdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function d(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.rmdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function c(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = a(o.unlink);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function u(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = a(o.readdir);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function f(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = a(o.lstat);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }

            function p(e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && void 0 !== t) {
                        let i = r.join(e, t), o = yield f(i);
                        n = null !== o && o.isDirectory() ? yield h(i) : yield c(i)
                    }
                    return n
                })
            }

            function h(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e) {
                        if (yield t(e)) {
                            n = !0;
                            let t = yield u(e);
                            for (let i = 0; i < t.length; i++) n = (yield p(e, t[i])) && n;
                            (n || 0 === t.length) && (n = (yield d(e)) && n)
                        }
                    }
                    return n
                })
            }

            function g(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    return s.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : r.dirname(e) === e ? n = !1 : (yield g(r.dirname(e))) && (n = yield l(e))), n
                })
            }

            function m(e, n) {
                return i(this, void 0, void 0, function* () {
                    let i;
                    if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                        let t = o.createReadStream(e), r = o.createWriteStream(n);
                        i = new Promise(e => {
                            t.pipe(r).on("finish", () => {
                                e(!0)
                            })
                        })
                    } else i = new Promise(e => {
                        e(!1)
                    });
                    return i
                })
            }

            e.readFileAW = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = a(o.readFile);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return t
                })
            }, e.writeFileAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && null !== t) {
                        const i = a(o.writeFile);
                        try {
                            yield i(e, t), n = !0
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                    return n
                })
            }, e.existsAW = t, e.mkdirAW = l, e.rmdirAW = d, e.unlinkAW = c, e.readdirAW = u, e.lstatAW = f, e.rmdirsAW = h, e.mkdirsAW = g, e.renameAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    if (void 0 !== e && void 0 !== t) {
                        const n = a(o.rename);
                        try {
                            yield n(e, t)
                        } catch (e) {
                            s.warning(e)
                        }
                    }
                })
            }, e.copyFileAW = m, e.copyDirsAW = function e(n, o) {
                return i(this, void 0, void 0, function* () {
                    let i = !1, a = yield f(n);
                    if (a.isDirectory()) {
                        i = yield g(o);
                        let s = yield u(n);
                        for (let l = 0; l < s.length; l++) {
                            let d = r.join(n, s[l]), c = r.join(o, s[l]);
                            (i = yield t(d)) && (i = (a = yield f(d)).isDirectory() ? yield e(d, c) : yield m(d, c))
                        }
                    }
                    return i
                })
            }, e.mkdtempAW = function () {
                return i(this, void 0, void 0, function* () {
                    let e = !1;
                    const t = a(o.mkdtemp), i = (yield Promise.resolve().then(() => n(16))).tmpdir();
                    try {
                        e = yield t(`${i}${r.sep}`)
                    } catch (e) {
                        s.warning(e)
                    }
                    return e
                })
            }
        }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
    }, 1009: function (e, t, n) {
        n(41), e.exports = n(1010)
    }, 1010: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(27);
        i.CommonIPCRenderer.rendererCommunicator.initialize("suspension_main"), i.CommonIPCRenderer.rendererCommunicator.connect();
        const o = n(42), r = n(30), a = n(1011);
        n(43);
        const s = n(45);
        n(50);
        const l = n(1).default.getLogger("SuspensionRenderer");
        o.PerformanceMonitorStatNS.init("suspension-renderer"), s.ThunderToolsNS.enableDevTools().catch(e => {
            l.warning(e)
        }), s.ThunderToolsNS.enableDragOpenFile(), new r.default({
            components: {AppContainer: a.default},
            render: e => e("app-container")
        }).$mount("#app")
    }, 1011: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(450);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var r = n(0), a = Object(r.a)(i.default, void 0, void 0, !1, null, null, null);
        a.options.__file = "src\\suspension-renderer\\app-container.vue", t.default = a.exports
    }, 1012: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(649), o = n(452);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        n(260), n(1020), n(610);
        var a = n(0), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
        s.options.__file = "src\\suspension-renderer\\app.vue", t.default = s.exports
    }, 1013: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(454);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var r = n(0), a = Object(r.a)(i.default, void 0, void 0, !1, null, null, null);
        a.options.__file = "src\\suspension-renderer\\views\\float-panel-container.vue", t.default = a.exports
    }, 1014: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(680), o = n(456);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        var a = n(0), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
        s.options.__file = "src\\suspension-renderer\\views\\float-panel.vue", t.default = s.exports
    }, 1015: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(458);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        var r = n(0), a = Object(r.a)(i.default, void 0, void 0, !1, null, null, null);
        a.options.__file = "src\\suspension-renderer\\views\\task-item-container.vue", t.default = a.exports
    }, 1016: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(693), o = n(460);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        var a = n(0), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
        s.options.__file = "src\\suspension-renderer\\views\\task-item.vue", t.default = s.exports
    }, 1017: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(8), r = n(264), a = n(1).default.getLogger("Thunder.SuspensionState"), s = {
            INIT_TASKLIST(e, t) {
                t.sort((e, t) => t.createTime - e.createTime);
                let n = {};
                e.taskIdLists = t.map(e => (n[e.taskId] = e, e.taskId)), e.taskBaseInfos = n
            }, INSERT_TASK(e, t) {
                let n = {}, i = [];
                for (let o = 0; o < t.length; ++o) {
                    let r = t[o], a = r.taskId;
                    a && void 0 === e.taskBaseInfos[a] && (n[a] = r, i.push(a))
                }
                e.taskBaseInfos = Object.assign({}, e.taskBaseInfos, n), e.taskIdLists.splice(0, 0, ...i)
            }, REMOVE_TASK(e, t) {
                let n = Object.assign({}, e.taskBaseInfos), i = Object.assign([], e.taskIdLists);
                for (let e = 0; e < t.length; ++e) for (let o = 0; o < i.length; ++o) if (i[o] === t[e]) {
                    i.splice(o, 1), delete n[t[e]];
                    break
                }
                e.taskBaseInfos = n, e.taskIdLists = i
            }, UPDATE_TASKSTATUS(e, t) {
                for (let n in t) {
                    let i = t[n], o = e.taskBaseInfos[n];
                    void 0 !== o && (o.taskStatus = i)
                }
            }, UPDATE_TASKDETAIL(e, t) {
                let n = {};
                for (let i in t) {
                    let o = t[i];
                    void 0 !== e.taskBaseInfos[i] && (n[i] = o)
                }
                e.taskBaseInfos = Object.assign({}, e.taskBaseInfos, n)
            }, UPDATE_TASKBASE(e, t) {
                null !== e.taskBaseInfos[t.taskId] && (e.taskBaseInfos[t.taskId] = t)
            }, UPDATE_SUSPENSION(e, t) {
                e.downloadStatus = t.downloadStatus, e.totalDownloadSpeed = t.totalDownloadSpeed, e.totalVipSpeed = t.totalVipSpeed, e.showStatus = t.showStatus, e.statusText = t.statusText
            }
        }, l = {
            refreshSuspension({commit: e, state: t, rootState: n}) {
                return i(this, void 0, void 0, function* () {
                    a.information("refreshSuspension");
                    let n = !1, i = 0, s = 0, l = !1, d = void 0, c = [], u = void 0;
                    for (let e = 0; e < t.taskIdLists.length; e++) u = t.taskIdLists[e], r.FloatPanelHelper.isDownloadStatus(t.taskBaseInfos[u].taskStatus) && (n = !0, i += t.taskBaseInfos[u].downloadSpeed, s += t.taskBaseInfos[u].vipSpeed, c.push(u));
                    (l = 1 === c.length) && (d = r.FloatPanelHelper.getTaskStartPrompt(t.taskBaseInfos[c[0]]), t.taskBaseInfos[c[0]].taskStatus === o.DownloadKernel.TaskStatus.StartPending && void 0 === d && (d = "连接资源")), e("UPDATE_SUSPENSION", {
                        downloadStatus: n,
                        totalDownloadSpeed: i,
                        totalVipSpeed: s,
                        showStatus: l,
                        statusText: d
                    })
                })
            }
        };
        t.default = {
            state: {
                taskBaseInfos: {},
                taskIdLists: [],
                downloadStatus: !1,
                totalDownloadSpeed: 0,
                totalVipSpeed: 0,
                showStatus: !1,
                statusText: ""
            }, mutations: s, actions: l, getters: {}
        }
    }, 1018: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(5), r = n(53), a = n(15), s = n(264);
        let l = 0, d = !0, c = 0;
        !function (e) {
            function t(e) {
                c = e, o.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", e.toString(), e => {
                    0 === e && o.NativeCallModule.nativeCall.CallNativeFunction("SaveConfig", () => {
                    })
                })
            }

            e.popupMenu = function () {
                let e = [{
                    type: "normal",
                    label: "全局显示",
                    icon: 0 === l ? `${__rootDir}/static/icon/ok.png` : "",
                    click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_speed_setting", "result=fullspeed")
                    }
                }], n = [{
                    type: "normal",
                    label: "新建任务(&N)",
                    icon: `${__rootDir}/static/icon/newtask.png`,
                    click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=create"), s.FloatPanelHelper.getMainWindow().webContents.send(a.ThunderChannelList.channelMRTrayMenuClick, "-task:newtask", "floatmonitor")
                    }
                }, {
                    type: "normal",
                    label: "开始全部任务",
                    enabled: d,
                    icon: `${__rootDir}/static/icon/startalltask.png`,
                    click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=start");
                        let e = new Date;
                        s.FloatPanelHelper.getMainWindow().webContents.send(a.ThunderChannelList.channelMRTrayMenuClick, "-task:startall"), o.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "Consumption", "ShowTipsTime", e.getTime())
                    }
                }, {
                    type: "normal", label: "暂停全部任务", icon: `${__rootDir}/static/icon/stoptask.png`, click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=pause"), s.FloatPanelHelper.getMainWindow().webContents.send(a.ThunderChannelList.channelMRTrayMenuClick, "-task:pauseall")
                    }
                }, {type: "submenu", label: "悬浮窗速度展示", submenu: e}, {
                    type: "submenu",
                    label: "悬浮窗显示设置",
                    submenu: [{
                        type: "normal",
                        label: "显示悬浮窗",
                        icon: 0 === c ? `${__rootDir}/static/icon/ok.png` : "",
                        click: () => {
                            s.FloatPanelHelper.trackEvent("float_monitor_display_setting", "result=show"), t(0)
                        }
                    }, {
                        type: "normal",
                        icon: 1 === c ? `${__rootDir}/static/icon/ok.png` : "",
                        label: "下载时显示悬浮窗",
                        click: () => {
                            s.FloatPanelHelper.trackEvent("float_monitor_display_setting", "result=undl_hide"), t(1)
                        }
                    }, {
                        type: "normal",
                        label: "隐藏悬浮窗",
                        icon: 2 === c ? `${__rootDir}/static/icon/ok.png` : "",
                        click: () => {
                            s.FloatPanelHelper.trackEvent("float_monitor_display_setting", "result=hide"), t(2)
                        }
                    }]
                }, {
                    type: "normal", icon: `${__rootDir}/static/icon/exit.png`, label: "退出(&X)", click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=exit"), s.FloatPanelHelper.getMainWindow().webContents.send(a.ThunderChannelList.channelMRTrayMenuClick, "-task:quitprocess")
                    }
                }];
                s.FloatPanelHelper.getMainWindow().isVisible() ? s.FloatPanelHelper.getMainWindow().isMinimized() ? n.splice(0, 0, {
                    label: "显示主界面",
                    type: "normal",
                    click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=showmain");
                        let e = s.FloatPanelHelper.getMainWindow();
                        e.isMinimized() && e.restore(), e.show()
                    }
                }) : n.splice(0, 0, {
                    label: "隐藏主界面", type: "normal", click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=hidemain"), s.FloatPanelHelper.getMainWindow().minimize(), s.FloatPanelHelper.getMainWindow().hide()
                    }
                }) : n.splice(0, 0, {
                    label: "显示主界面", type: "normal", click: () => {
                        s.FloatPanelHelper.trackEvent("float_monitor_rk_click", "button=showmain");
                        let e = s.FloatPanelHelper.getMainWindow();
                        e.isMinimized() && e.restore(), e.show()
                    }
                });
                let u = i.remote.Menu.buildFromTemplate(n);
                r.MenuSkinNS.setStyle(u, {}), u.popup(s.FloatPanelHelper.getFloatPanelWindow(), {async: !1})
            }, e.getShowFloatPanelType = function () {
                return c
            }, e.setShowFloatPanelType = function (e) {
                c = e
            }, e.setShowSpeedType = function (e) {
                (l = e) > 1 && (l = 0)
            }, e.setCanStartAll = function (e) {
                d = e
            }
        }(t.FloatPanelMenuHelper || (t.FloatPanelMenuHelper = {}))
    }, 1019: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(5), o = n(21), r = n(8), a = n(59),
            s = n(1).default.getLogger("Thunder.SuspensionRender.TaskManager");
        !function (e) {
            e.eventIdGetTaskList = "OnGetTaskList", e.eventIdTaskRemoved = "OnTaskRemoved", e.eventIdTaskInserted = "OnTaskInserted", e.eventIdTaskStatusChanged = "OnTaskStatusChanged", e.eventIdTaskDetailChanged = "OnTaskDetailChanged", e.eventIdBtSubFileLoaded = "OnBtSubFileLoaded";

            class t extends a.EventEmitter {
                constructor() {
                    super()
                }

                init() {
                    s.information("init"), this.listenTasksEvent()
                }

                listenTasksEvent() {
                    i.NativeCallModule.nativeCall.CallNativeFunction("IsLoadStorageTaskFinish", e => {
                        e === o.NativeFunctionErrorCode.Success && this.getTaskListAfterLoadTaskFinish()
                    })
                }

                getTaskListAfterLoadTaskFinish() {
                    i.NativeCallModule.nativeCall.CallNativeFunction("GetCategoryViewTaskListForSuspensionWnd", r.DownloadKernel.CategroyViewID.Downloading, this.onGetTaskListCallback.bind(this))
                }

                onGetTaskListCallback(t, n) {
                    if (t === o.NativeFunctionErrorCode.Success) {
                        let t = null;
                        if (n) try {
                            t = JSON.parse(n)
                        } catch (e) {
                            s.warning(e)
                        }
                        t && this.emit(e.eventIdGetTaskList, t), i.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskInserted", this.onTaskInsertedCallback.bind(this)), i.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskRemoved", this.onTaskRemovedCallback.bind(this)), i.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskStatusChanged", this.onTaskStatusChangedCallback.bind(this)), i.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskDetailChanged", this.onTaskDetailChangedCallback.bind(this)), i.NativeCallModule.nativeCall.AttachNativeEvent("OnBtSubFileLoaded", this.onBtSubFileLoadedCallback.bind(this))
                    }
                }

                onGetTaskBaseInfosCallback(t, n) {
                    if (t === o.NativeFunctionErrorCode.Success) {
                        let t = null;
                        try {
                            t = JSON.parse(n)
                        } catch (e) {
                            s.warning(e)
                        }
                        null !== t && this.emit(e.eventIdTaskInserted, t)
                    }
                }

                onTaskInsertedCallback(e, t, n) {
                    -1 === e && t === r.DownloadKernel.CategroyViewID.Downloading && n && n.length > 0 && i.NativeCallModule.nativeCall.CallNativeFunction("GetTaskBaseInfos", n, this.onGetTaskBaseInfosCallback.bind(this))
                }

                onTaskRemovedCallback(t, n, i) {
                    if (-1 === t && n === r.DownloadKernel.CategroyViewID.Downloading) {
                        let t = null;
                        try {
                            t = JSON.parse(i)
                        } catch (e) {
                            s.warning(e)
                        }
                        t && this.emit(e.eventIdTaskRemoved, t)
                    }
                }

                onTaskStatusChangedCallback(t) {
                    {
                        let n = null;
                        try {
                            n = JSON.parse(t)
                        } catch (e) {
                            s.warning(e)
                        }
                        null !== n && this.emit(e.eventIdTaskStatusChanged, n)
                    }
                }

                onTaskDetailChangedCallback(t) {
                    {
                        let n = null;
                        try {
                            n = JSON.parse(t)
                        } catch (e) {
                            s.warning(e)
                        }
                        null !== n && this.emit(e.eventIdTaskDetailChanged, n)
                    }
                }

                onBtSubFileLoadedCallback(t, n, i) {
                    {
                        let n = null;
                        try {
                            n = JSON.parse(i)
                        } catch (e) {
                            s.warning(e)
                        }
                        n && this.emit(e.eventIdBtSubFileLoaded, t, n)
                    }
                }
            }

            e.TaskManager = t;
            let n = null;
            e.getTaskManager = function () {
                return n = new t
            }
        }(t.TaskManagerNS || (t.TaskManagerNS = {}))
    }, 1020: function (e, t, n) {
        "use strict";
        var i = n(1274);
        n.n(i).a
    }, 12: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(2), a = n(1), s = n(10), l = n(20), d = a.default.getLogger("Thunder.Util"),
            c = "Thunder Network\\Thunder7.9\\";

        function u(e) {
            let t = e;
            return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
        }

        !function (e) {
            function t() {
                let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
                for (let i = 0; i < t.length; i++) {
                    let o = l.ThunderHelper.getDriveInfo(t[i]);
                    3 === o.type && n < o.freeBytes && t[i] !== e && (n = o.freeBytes, e = t[i])
                }
                return e.substring(0, 1) + ":\\迅雷下载"
            }

            e.formatSize = function (e, t) {
                t = t || 2;
                let n = "0B";
                if ("number" == typeof e && e > 0) {
                    let i = ["B", "KB", "MB", "GB", "TB"], o = 0, r = e;
                    for (; r >= 1e3 && !(o >= 4);) r /= 1024, o += 1;
                    n = -1 === String(r).indexOf(".") ? r + i[o] : r.toFixed(t) + i[o]
                }
                return n
            }, e.isDigital = function (e) {
                let t = !1;
                return /^\d+$/.test(e) && (t = !0), t
            }, e.isAlpha = function (e) {
                let t = !1;
                return /[A-Za-z]/.test(e) && (t = !0), t
            }, e.isUpperCase = function (e) {
                let t = !1;
                return /[A-Z]/.test(e) && (t = !0), t
            }, e.isLowerCase = function (e) {
                let t = !1;
                return /[a-z]/.test(e) && (t = !0), t
            }, e.isChinese = function (e) {
                let t = !1;
                return /[\u4E00-\u9FA5]/.test(e) && (t = !0), t
            }, e.replaceNonDigital = function (e) {
                return e.replace(/[^\d]/g, "")
            }, e.replaceNonAlpha = function (e) {
                return e.replace(/[^A-Za-z]/g, "")
            }, e.replaceNonWord = function (e) {
                return e.replace(/[^\W]/g, "")
            }, e.getDefaultDownloadDir = t, e.getMaxFreeDriver = function () {
                return t().substring(0, 1)
            }, e.deepCopy = function (e) {
                let t = JSON.stringify(e), n = null;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    d.warning(e)
                }
                return n
            }, e.swap = function (e, t, n) {
                do {
                    if (t < 0 || t >= e.length) break;
                    if (n < 0 || n >= e.length) break;
                    if (t === n) break;
                    e[t] = e.splice(n, 1, e[t])[0]
                } while (0);
                return e
            }, e.compareNocase = function (e, t) {
                let n = !1;
                do {
                    if (void 0 === e && void 0 === t) {
                        n = !0;
                        break
                    }
                    if (void 0 === e || void 0 === t) break;
                    if ("string" != typeof e || "string" != typeof t) break;
                    n = e.toLowerCase() === t.toLowerCase()
                } while (0);
                return n
            }, e.parseCommandLine = function (e) {
                let t = 0, n = "", i = !1, o = [], r = e.length;
                for (let a = 0; a < r; a++) {
                    let s = e[a];
                    if ('"' !== s && "'" !== s || ("" === n ? (i = !0, n = s) : n === s && (i = !1, n = "")), " " !== s || i || a === r - 1) {
                        if (a === r - 1) {
                            let n = e.substring(t);
                            "" !== n.trim() && o.push(u(n))
                        }
                    } else {
                        let n = e.substring(t, a);
                        "" !== n.trim() && o.push(u(n)), t = a + 1
                    }
                }
                return o
            }, e.getThunderTempPath = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    const i = yield Promise.resolve().then(() => n(16));
                    let o = r.join(i.tmpdir(), c);
                    return t && (o = r.join(o, t)), void 0 !== e && e && (yield s.FileSystemAWNS.mkdirsAW(o)), o
                })
            }, e.setQueryString = function (e, t) {
                return Object.keys(t).forEach((n, i) => {
                    e += 0 === i ? "?" : "&", e += `${n}=${t[n]}`
                }), e
            }, e.getQueryString = function (e, t) {
                return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
            }, e.isClipboardTextFormatAvailable = function () {
                let e = !1, t = o.clipboard.availableFormats();
                for (let n of t) if ("text/plain" === n) {
                    e = !0;
                    break
                }
                return e
            }, e.keywordsHighLight = function (e, t, n) {
                if (!e) return "";
                if (!t) return e;
                if (0 === e.length) return e;
                if (0 === t.length) return e;
                let i = /\\/, o = t.split(" ");
                if (0 === (o = o.filter(e => e.trim().length > 0)).length) return e;
                for (let t = 0; t < o.length; t++) if (o[t].search(i) > 0) return e;
                n = void 0 === n || null === n ? "#FF0000" : n;
                let r = "", a = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], s = "", l = "|";
                for (let e = 0; e < o.length; e++) {
                    for (let t = 0; t < a.length; t++) {
                        let n = new RegExp(a[t], "g");
                        o[e] = o[e].replace(n, a[t])
                    }
                    e === o.length - 1 && (l = ""), s = s.concat(o[e], l)
                }
                let d = new RegExp(s, "gi");
                return r = e.replace(d, e => '<span style= "color:' + n + '">' + e + "</span>")
            }, e.isDef = function (e) {
                return void 0 !== e && null !== e
            }, e.isUndef = function (e) {
                return void 0 === e || null === e
            }, e.setStyle = function (e, t) {
                Object.entries(t).forEach(([t, n]) => {
                    e.style[t] = n
                })
            }, e.setCSSProperties = function (e, t) {
                Object.entries(t).forEach(([t, n]) => {
                    e.style.setProperty(t, n)
                })
            }, e.versionCompare = function (e, t) {
                let n = e.split("."), i = t.split("."), o = 0;
                for (let e = 0; e < n.length; e++) {
                    if (Number(n[e]) - Number(i[e]) > 0) {
                        o = 1;
                        break
                    }
                    if (Number(n[e]) - Number(i[e]) < 0) {
                        o = -1;
                        break
                    }
                }
                return o
            }, e.throttle = function (e, t) {
                let n, i = 0;
                return (...o) => {
                    const r = Date.now();
                    clearTimeout(n), r - i > t ? (e(...o), i = r) : n = setTimeout(() => {
                        e(...o), i = r
                    }, t)
                }
            }
        }(t.ThunderUtil || (t.ThunderUtil = {}))
    }, 1260: function (e, t) {
    }, 1274: function (e, t) {
    }, 1278: function (e, t) {
    }, 13: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(7), r = n(1).default.getLogger("XLStat");
        let a = o.default(i.join(__rootDir, "../bin/ThunderHelper.node"));

        function s(e = "") {
            let t;
            if ("string" == typeof e) t = e; else if (l(e) && "object" == typeof e) {
                let n = [];
                for (let t in e) l(e[t]) && n.push(t + "=" + encodeURIComponent(e[t]));
                t = n.join(",")
            }
            return t
        }

        function l(e) {
            return void 0 !== e && null !== e
        }

        !function (e) {
            function t(e) {
                do {
                    if (void 0 === e) break;
                    a.trackClick(e, 0)
                } while (0)
            }

            e.trackEvent = function (e, t = "", n = "", i = 0, o = 0, l = 0, d = 0, c = "", u = 0) {
                let f = 0;
                do {
                    if (void 0 === e) {
                        f = 1;
                        break
                    }
                    let p = s(c);
                    f = a.trackEvent(e, t, n, i, o, l, d, p, u), r.information(e, t, n, i, o, l, d, p, u)
                } while (0);
                return f
            }, e.trackClick = t, e.trackShow = function (e) {
                t(e)
            }, e.setUserID = function (e = 0, t = 0) {
                a.setUserID(e, t)
            }
        }(t.XLStatNS || (t.XLStatNS = {}))
    }, 14: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(6), o = n(1), r = n(5), a = o.default.getLogger("Thunder.PromiseNativeCall"), s = i.promisify;
        t.default = function (...e) {
            return a.verbose(...e), s(r.NativeCallModule.nativeCall.CallNativeFunction.bind(r.NativeCallModule.nativeCall))(...e)
        }
    }, 15: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelMRSearchWindowVisibleChange = "MR_SEARCH_WINDOW_VISIBLE_CHANGE", e.channelRMShowSearchWindow = "RM_SEARCH_WINDOW_SHOW", e.channelRMHideSearchWindow = "RM_SEARCH_WINDOW_HIDE", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE"
        }(t.ThunderChannelList || (t.ThunderChannelList = {}))
    }, 152: function (e, t, n) {
        e.exports = n(9)(188)
    }, 153: function (e, t, n) {
        e.exports = n(9)(167)
    }, 16: function (e, t) {
        e.exports = require("os")
    }, 17: function (e, t) {
        e.exports = require("fs")
    }, 18: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.information = function (...e) {
        }, t.error = function (...e) {
        }, t.warning = function (...e) {
        }, t.critical = function (...e) {
        }, t.verbose = function (...e) {
        }, "development" === process.env.LOGGER_ENV && (t.information = function (...e) {
            console.log("information", e)
        }, t.error = function (...e) {
            console.log("error", e)
        }, t.warning = function (...e) {
            console.log("warning", e)
        }, t.critical = function (...e) {
            console.log("critical", e)
        }, t.verbose = function (...e) {
            console.log("verbose", e)
        })
    }, 19: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
        }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
    }, 2: function (e, t) {
        e.exports = require("path")
    }, 20: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(44), r = n(8), a = n(7).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            e.getDriveInfo = function (e) {
                return a.getDriveInfo(e)
            }, e.getFreePartitionSpace = function (e) {
                return a.getFreePartitionSpace(e)
            }, e.getLogicalDriveStrings = function () {
                return a.getLogicalDriveStrings()
            }, e.getPartitionSpace = function (e) {
                return a.getPartitionSpace(e)
            }, e.getSystemTempPath = function () {
                return a.getSystemTempPath()
            }, e.getTaskTypeFromUrl = function (e) {
                let t = a.getTaskTypeFromUrl(e);
                if (t === r.DownloadKernel.TaskType.Unkown && function (e) {
                    e = e.toLowerCase();
                    let t = !1;
                    do {
                        if ("http://" === e.substr(0, "http://".length)) {
                            t = !0;
                            break
                        }
                        if ("https://" === e.substr(0, "https://".length)) {
                            t = !0;
                            break
                        }
                        if ("ftp://" === e.substr(0, "ftp://".length)) {
                            t = !0;
                            break
                        }
                    } while (0);
                    return t
                }(e)) {
                    let n = /:\/\/\[(.+?)\].*/.exec(e);
                    n || (n = /^ftp:\/\/.*?\[(.+?)\].*/.exec(e)), n && n[1] && o.isIPv6(n[1]) && (t = r.DownloadKernel.TaskType.P2sp)
                }
                return t
            }, e.extractIcon = function (e, t) {
                return a.extractIcon(e, t)
            }, e.isWindow7 = function () {
                return 1 === a.isWin7()
            }, e.compareStr = function (e, t) {
                return a.compareStr(e, t)
            }, e.getTickCount = function () {
                return a.getTickCount()
            }
        }(t.ThunderHelper || (t.ThunderHelper = {}))
    }, 21: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.NONE = 0] = "NONE", e[e.PAGE = 1] = "PAGE", e[e.FRAME = 2] = "FRAME", e[e.LINK = 4] = "LINK", e[e.MEDIA = 8] = "MEDIA", e[e.SELECTION = 16] = "SELECTION", e[e.EDITABLE = 32] = "EDITABLE"
        }(t.MenuNodeType || (t.MenuNodeType = {})), function (e) {
            e[e.NONE = 0] = "NONE", e[e.UNDO = 1] = "UNDO", e[e.REDO = 2] = "REDO", e[e.CUT = 4] = "CUT", e[e.COPY = 8] = "COPY", e[e.PASTE = 16] = "PASTE", e[e.DELETE = 32] = "DELETE", e[e.SELECT_ALL = 64] = "SELECT_ALL", e[e.TRANSLATE = 128] = "TRANSLATE"
        }(t.MenuEditableState || (t.MenuEditableState = {})), function (e) {
            e[e.NONE = 0] = "NONE", e[e.IMAGE = 1] = "IMAGE", e[e.VIDEO = 2] = "VIDEO", e[e.AUDIO = 3] = "AUDIO", e[e.FILE = 4] = "FILE", e[e.PLUGIN = 5] = "PLUGIN"
        }(t.MenuMediaType || (t.MenuMediaType = {})), function (e) {
            e[e.HWND_NOTOPMOST = -2] = "HWND_NOTOPMOST", e[e.HWND_TOPMOST = -1] = "HWND_TOPMOST", e[e.HWND_TOP = 0] = "HWND_TOP", e[e.HWND_BOTTOM = 1] = "HWND_BOTTOM"
        }(t.OptionOfhwndInAfter || (t.OptionOfhwndInAfter = {})), function (e) {
            e[e.SWP_ASYNCWINDOWPOS = 16384] = "SWP_ASYNCWINDOWPOS", e[e.SWP_DEFERERASE = 8192] = "SWP_DEFERERASE", e[e.SWP_DRAWFRAME = 32] = "SWP_DRAWFRAME", e[e.SWP_FRAMECHANGED = 32] = "SWP_FRAMECHANGED", e[e.SWP_HIDEWINDOW = 128] = "SWP_HIDEWINDOW", e[e.SWP_NOACTIVATE = 16] = "SWP_NOACTIVATE", e[e.SWP_NOCOPYBITS = 256] = "SWP_NOCOPYBITS", e[e.SWP_NOMOVE = 2] = "SWP_NOMOVE", e[e.SWP_NOOWNERZORDER = 512] = "SWP_NOOWNERZORDER", e[e.SWP_NOREDRAW = 8] = "SWP_NOREDRAW", e[e.SWP_NOREPOSITION = 512] = "SWP_NOREPOSITION", e[e.SWP_NOSENDCHANGING = 1024] = "SWP_NOSENDCHANGING", e[e.SWP_NOSIZE = 1] = "SWP_NOSIZE", e[e.SWP_NOZORDER = 4] = "SWP_NOZORDER", e[e.SWP_SHOWWINDOW = 64] = "SWP_SHOWWINDOW"
        }(t.Uflags || (t.Uflags = {})), function (e) {
            e[e.WS_BORDER = 8388608] = "WS_BORDER", e[e.WS_CAPTION = 12582912] = "WS_CAPTION", e[e.WS_CHILD = 1073741824] = "WS_CHILD", e[e.WS_CHILDWINDOW = 1073741824] = "WS_CHILDWINDOW", e[e.WS_CLIPCHILDREN = 33554432] = "WS_CLIPCHILDREN", e[e.WS_CLIPSIBLINGS = 67108864] = "WS_CLIPSIBLINGS", e[e.WS_THICKFRAME = 262144] = "WS_THICKFRAME"
        }(t.WindowStyle || (t.WindowStyle = {})), function (e) {
            e[e.WS_EX_TOOLWINDOW = 128] = "WS_EX_TOOLWINDOW"
        }(t.ExtendedWindowStyles || (t.ExtendedWindowStyles = {})), function (e) {
            e[e.GWL_EXSTYLE = -20] = "GWL_EXSTYLE", e[e.GWL_HINSTANCE = -6] = "GWL_HINSTANCE", e[e.GWL_ID = -12] = "GWL_ID", e[e.GWL_STYLE = -16] = "GWL_STYLE", e[e.GWL_USERDATA = -21] = "GWL_USERDATA", e[e.GWL_WNDPROC = -4] = "GWL_WNDPROC"
        }(t.SetWindowType || (t.SetWindowType = {})), function (e) {
            e[e.WM_CREATE = 1] = "WM_CREATE", e[e.WM_DESTROY = 2] = "WM_DESTROY", e[e.WM_MOVE = 3] = "WM_MOVE", e[e.WM_SIZE = 5] = "WM_SIZE", e[e.WM_ACTIVATE = 6] = "WM_ACTIVATE", e[e.WM_SETFOCUS = 7] = "WM_SETFOCUS", e[e.WM_KILLFOCUS = 8] = "WM_KILLFOCUS", e[e.WM_ENABLE = 10] = "WM_ENABLE", e[e.WM_DPICHANGED = 736] = "WM_DPICHANGED"
        }(t.WindowMessages || (t.WindowMessages = {})), function (e) {
            e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOW = 5] = "SW_SHOW"
        }(t.showCmd || (t.showCmd = {})), function (e) {
            e[e.Success = 0] = "Success", e[e.FunctionUnExist = 1] = "FunctionUnExist", e[e.ParamError = 2] = "ParamError", e[e.CallFailed = 3] = "CallFailed"
        }(t.NativeFunctionErrorCode || (t.NativeFunctionErrorCode = {}))
    }, 26: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(6), r = n(18), a = n(19);
        !function (e) {
            e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

            class t {
                constructor() {
                    this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [a.CommonIPCMessage.msgIPCRendererConnect, a.CommonIPCMessage.msgIPCRendererDisconnect]
                }

                onMessage(e, t) {
                    do {
                        if (!o.isString(e) || 0 === e.length) {
                            r.error("msgName is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            r.error("listener is null");
                            break
                        }
                        this.listeners.has(e) ? this.listeners.get(e).push(t) : this.listeners.set(e, [t])
                    } while (0)
                }

                getCommunicatorInfo() {
                    return this.currInfo
                }

                getAllRenderer() {
                    return this.rendererInfos
                }

                getCommunicatorInfoById(e) {
                    for (let t of this.rendererInfos) if (t.id === e) return t;
                    return null
                }

                getCommunicatorInfoByContext(e) {
                    for (let t of this.rendererInfos) if (t.context === e) return t;
                    return null
                }

                startListenIPCMessage(e) {
                    this.isOnIPCEvent || (this.isOnIPCEvent = !0, e && this.ListenSendToMainMsg(), this.ListenSendToRendererMsg(e))
                }

                ListenSendToMainMsg() {
                    i.ipcMain.on(a.CommonIPCMessage.msgIPCSendToMain, (e, t) => {
                        let n = void 0;
                        do {
                            if (o.isNullOrUndefined(t)) {
                                r.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                r.warning("hasnot been connected yet");
                                break
                            }
                            let i = t.msg.name;
                            if (this.isIPCModuleIntervalMsg(i)) {
                                r.information(`IPC module interval msg : ${i}`);
                                let o = this.handleIPCModuleIntervalMsg(e.sender, t);
                                if (n = o[1], !o[0]) break;
                                r.information("need to dispatch msg:" + i)
                            }
                            o.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                        } while (0);
                        o.isNullOrUndefined(n) || (e.returnValue = n)
                    })
                }

                ListenSendToRendererMsg(e) {
                    (e ? i.ipcMain : i.ipcRenderer).on(a.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                        let i = void 0;
                        do {
                            if (o.isNullOrUndefined(n)) {
                                r.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                r.warning("hasnot been connected yet");
                                break
                            }
                            let a = n.msg.name;
                            if (this.isIPCModuleIntervalMsg(a)) {
                                r.information(`IPC module interval msg : ${a}`);
                                let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                                if (i = e[1], !e[0]) break;
                                r.information("need to dispatch msg:" + a)
                            }
                            e ? (r.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (r.information("is renderer, handle business msg"), o.isNullOrUndefined(i) ? i = this.NotifyListener(n) : this.NotifyListener(n))
                        } while (0);
                        o.isNullOrUndefined(i) || (t.returnValue = i)
                    })
                }

                isIPCModuleIntervalMsg(e) {
                    for (let n of t.intervalIPCModuleMsgs) if (e === n) return !0;
                    return !1
                }

                handleIPCModuleIntervalMsg(e, t) {
                    let n = [!1, void 0];
                    do {
                        let i = t.msg.name;
                        if (i === a.CommonIPCMessage.msgIPCRendererConnect) {
                            n = [!0, this.handleRendererConnectMsg(e, t)];
                            break
                        }
                        if (i === a.CommonIPCMessage.msgIPCRendererDisconnect) {
                            n = [!0, this.handleRendererDisconnectMsg(e, t)];
                            break
                        }
                    } while (0);
                    return n
                }

                handleRendererConnectMsg(e, t) {
                    r.verbose(e), r.verbose(t)
                }

                handleRendererDisconnectMsg(e, t) {
                    r.verbose(e), r.verbose(t)
                }

                handleForwardRendererToRendererMsg(e) {
                    this.sendForwardRendererToRendererMsg(e)
                }

                sendForwardRendererToRendererMsg(e) {
                    r.verbose(e)
                }

                NotifyListener(e) {
                    let t = void 0, n = e.msg.name;
                    if (this.listeners.has(n)) {
                        let i = this.listeners.get(n), o = !0;
                        for (let n of i) o ? (o = !1, t = n(e)) : n(e)
                    }
                    return t
                }
            }

            e.Communicator = t
        }(t.CommonIPCBase || (t.CommonIPCBase = {}))
    }, 260: function (e, t, n) {
        "use strict";
        var i = n(1260);
        n.n(i).a
    }, 264: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(2), r = n(7), a = n(8), s = n(12), l = n(13),
            d = n(1).default.getLogger("Thunder.FloatPanelHelper"),
            c = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
        let u = null, f = null, p = 0, h = 0;
        !function (e) {
            e[e.LeftBottom = 0] = "LeftBottom", e[e.LeftTop = 1] = "LeftTop", e[e.RightTop = 2] = "RightTop", e[e.RightBottom = 3] = "RightBottom"
        }(t.FloatPanelDirection || (t.FloatPanelDirection = {})), function (e) {
            function t() {
                return null === u && (u = i.remote.getGlobal("mainRendererWindow")), u
            }

            function n() {
                return null === f && (f = i.remote.getCurrentWindow()), f
            }

            function o() {
                if (!p) {
                    let e = t().getNativeWindowHandle();
                    p = e.readUIntLE(0, 4)
                }
                return p
            }

            let r, g, m;

            function S(e) {
                let t = null, n = e.receiveSize, i = e.srcUsing;
                do {
                    if (e.taskType === a.DownloadKernel.TaskType.P2sp) {
                        if (n > 0) {
                            t = r.Stared;
                            break
                        }
                        if (e.taskStatus === a.DownloadKernel.TaskStatus.StartPending) {
                            t = r.Starting;
                            break
                        }
                        if (e.taskStatus === a.DownloadKernel.TaskStatus.Started && 0 === n) {
                            t = r.Connect;
                            break
                        }
                    } else if (e.taskType === a.DownloadKernel.TaskType.Bt) {
                        if (n > 0) {
                            t = g.Stared;
                            break
                        }
                        if (e.taskStatus === a.DownloadKernel.TaskStatus.StartPending) {
                            t = g.Analy;
                            break
                        }
                        if (e.taskStatus === a.DownloadKernel.TaskStatus.Started) {
                            t = i > 0 ? g.Connect : g.Search;
                            break
                        }
                    } else if (e.taskType === a.DownloadKernel.TaskType.Emule) {
                        if (n > 0) {
                            t = m.Stared;
                            break
                        }
                        if (e.taskStatus === a.DownloadKernel.TaskStatus.StartPending) {
                            t = m.Starting;
                            break
                        }
                        if (e.taskStatus === a.DownloadKernel.TaskStatus.Started) {
                            t = i > 0 ? m.Connect : m.Search;
                            break
                        }
                    }
                } while (0);
                return t
            }

            e.getMainWindow = t, e.getFloatPanelWindow = n, e.getMainWindowHandle = o, e.getFloatPanelWindowHandle = function () {
                if (!h) {
                    let e = n().getNativeWindowHandle();
                    h = e.readUIntLE(0, 4)
                }
                return h
            }, e.getDpiFactor = function () {
                let e = 1;
                return e = c.getDPIAwareSupport() ? c.getMonitorDPIFactor(o()) : c.getSysDPIFactor()
            }, e.trackEvent = function (e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), d.information(e, n), l.XLStatNS.trackEvent("client_quick", e, "", 0, 0, 0, 0, n)
            }, e.isDownloadStatus = function (e) {
                let t = !1;
                return e !== a.DownloadKernel.TaskStatus.StartPending && e !== a.DownloadKernel.TaskStatus.StartWaiting && e !== a.DownloadKernel.TaskStatus.Started || (t = !0), t
            }, e.formatSpeed = function (e) {
                let t = {speed: "0", unit: "B/s"};
                if ("number" == typeof e && e > 0) {
                    let n = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"], i = 0, o = e;
                    for (; o >= 1e3 && !(i >= 4);) o /= 1024, i += 1;
                    t = -1 === String(o).indexOf(".") ? {speed: String(o), unit: n[i]} : {
                        speed: o.toFixed(1),
                        unit: n[i]
                    }
                }
                return t
            }, e.isThunderMainWndForeground = function () {
                let e = c.getForegroundProcessName();
                d.information("foreProcName:", e);
                let t = !1;
                return (e.toLowerCase().indexOf("thunder.exe") > -1 || e.toLowerCase().indexOf("xlbrowser.exe") > -1) && (t = !0), t
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Starting = 1] = "Starting", e[e.Connect = 2] = "Connect", e[e.Stared = 3] = "Stared"
            }(r || (r = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Analy = 1] = "Analy", e[e.Search = 2] = "Search", e[e.Connect = 3] = "Connect", e[e.Stared = 4] = "Stared"
            }(g || (g = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Starting = 1] = "Starting", e[e.Search = 2] = "Search", e[e.Connect = 3] = "Connect", e[e.Stared = 4] = "Stared"
            }(m || (m = {})), e.getTaskStartPrompt = function (e) {
                let t = void 0;
                do {
                    if (null === e) break;
                    if (e.taskStatus === a.DownloadKernel.TaskStatus.StartPending || e.taskStatus === a.DownloadKernel.TaskStatus.Started) {
                        if (e.taskType === a.DownloadKernel.TaskType.P2sp) {
                            let n = S(e);
                            if (null === n) break;
                            n === r.Connect && (t = "连接资源");
                            break
                        }
                        if (e.taskType === a.DownloadKernel.TaskType.Bt) {
                            let n = S(e);
                            if (null === n) break;
                            n === g.Analy ? t = "解析种子" : n === g.Search ? t = "寻找资源" : n === g.Connect && (t = "连接资源");
                            break
                        }
                        if (e.taskType === a.DownloadKernel.TaskType.Emule) {
                            let n = S(e);
                            if (null === n) break;
                            n === m.Search ? t = "寻找资源" : n === m.Connect && (t = "连接资源")
                        }
                    }
                } while (0);
                return t
            }, e.getTaskStatusPrompt = function (e) {
                let t = "";
                if (e) switch (e.taskStatus) {
                    case a.DownloadKernel.TaskStatus.Unkown:
                        t = "未知错误";
                        break;
                    case a.DownloadKernel.TaskStatus.StandBy:
                        t = "准备开始";
                        break;
                    case a.DownloadKernel.TaskStatus.PreDownloading:
                        t = "等待中";
                        break;
                    case a.DownloadKernel.TaskStatus.StartWaiting:
                        t = "排队等待";
                        break;
                    case a.DownloadKernel.TaskStatus.StartPending:
                        t = "正在开始";
                        break;
                    case a.DownloadKernel.TaskStatus.Started:
                        e.downloadSpeed >= 0 && (t = s.ThunderUtil.formatSize(e.downloadSpeed, 1), t += "/S");
                        break;
                    case a.DownloadKernel.TaskStatus.StopPending:
                        t = "正在停止";
                        break;
                    case a.DownloadKernel.TaskStatus.Stopped:
                        t = "暂停";
                        break;
                    case a.DownloadKernel.TaskStatus.Succeeded:
                        t = "完成";
                        break;
                    case a.DownloadKernel.TaskStatus.Failed:
                        t = "任务出错";
                        break;
                    case a.DownloadKernel.TaskStatus.Seeding:
                        t = "完成"
                }
                return t
            }, e.getProgress = function (e) {
                let t = 0;
                if (e) {
                    let n = e.downloadSize, i = e.taskStatus;
                    if (i === a.DownloadKernel.TaskStatus.Succeeded || i === a.DownloadKernel.TaskStatus.Seeding) t = 100; else {
                        let i = e.fileSize;
                        0 !== i && (t = n / i * 100, (t = parseInt(t.toString(), 10)) > 100 ? t = 100 : t < 0 && (t = 0))
                    }
                }
                return t
            }
        }(t.FloatPanelHelper || (t.FloatPanelHelper = {}))
    }, 27: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(6), r = n(18), a = n(19), s = n(26);
        !function (e) {
            class t extends s.CommonIPCBase.Communicator {
                constructor() {
                    super()
                }

                initialize(e) {
                    this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
                }

                connect() {
                    this.isConnected ? r.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
                }

                disconnect() {
                    this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : r.warning("hasnot been connected yet")
                }

                sendMessageToMain(e) {
                    this.sendIPCMsgToMain(e)
                }

                sendMessageToMainSync(e) {
                    return this.sendIPCMsgToMain(e, !0)
                }

                sendMessageToRenderer(e, t) {
                    this.sendIPCMsgToRenderer(e, t)
                }

                handleRendererConnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            r.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            r.error("connectRendererInfo is null");
                            break
                        }
                        r.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                    } while (0)
                }

                handleRendererDisconnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            r.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            r.error("disconnectRendererInfo is null");
                            break
                        }
                        r.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                        for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                            this.rendererInfos.splice(t, 1);
                            break
                        }
                    } while (0)
                }

                sendConnectMsgToMain() {
                    let e = this.sendMessageToMainSync({name: a.CommonIPCMessage.msgIPCRendererConnect, args: []});
                    this.currInfo.id = e[0], this.rendererInfos = e[1]
                }

                sendDisconnectMsgToMain() {
                    this.sendMessageToMain({name: a.CommonIPCMessage.msgIPCRendererDisconnect, args: []})
                }

                sendIPCMsgToMain(e, t = !1) {
                    let n = void 0;
                    do {
                        if (o.isNullOrUndefined(e)) {
                            r.error("msg is null");
                            break
                        }
                        n = (t ? i.ipcRenderer.sendSync : i.ipcRenderer.send)(a.CommonIPCMessage.msgIPCSendToMain, {
                            msg: e,
                            senderInfo: this.currInfo
                        })
                    } while (0);
                    return n
                }

                sendIPCMsgToRenderer(e, t) {
                    do {
                        if (o.isNullOrUndefined(e)) {
                            r.error("rendererId is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            r.error("msg is null");
                            break
                        }
                        let n = [e].concat(t.args);
                        t.args = n, i.ipcRenderer.send(a.CommonIPCMessage.msgIPCSendToRenderer, {
                            msg: t,
                            senderInfo: this.currInfo
                        })
                    } while (0)
                }
            }

            e.RendererCommunicator = t, e.rendererCommunicator = new t
        }(t.CommonIPCRenderer || (t.CommonIPCRenderer = {}))
    }, 29: function (e, t) {
        e.exports = require("crypto")
    }, 3: function (e, t) {
        e.exports = require("electron")
    }, 30: function (e, t, n) {
        e.exports = n(9)(39)
    }, 35: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t;
            !function (e) {
                e[e.Default = 0] = "Default", e[e.Color = 1] = "Color", e[e.Wallpaper = 2] = "Wallpaper", e[e.Custom = 3] = "Custom"
            }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {type: t.Default, colorID: 0}
        }(t.SkinHelperNS || (t.SkinHelperNS = {}))
    }, 38: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(29), r = n(17), a = n(10), s = n(1).default.getLogger("Thunder.base.tools-utilities"), l = n(2),
            d = n(7).default(l.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            function t(e) {
                return i(this, void 0, void 0, function* () {
                    let t;
                    return t = e && (yield a.FileSystemAWNS.existsAW(e)) ? new Promise(t => {
                        d.asyncCalcuteFileMD5(e, (e, n) => {
                            e ? (n = n.toUpperCase(), t(n)) : t(void 0)
                        })
                    }) : new Promise(e => {
                        e(void 0)
                    })
                })
            }

            e.genarateMd5 = function (e) {
                let t = void 0, n = o.createHash("md5");
                return null !== n && (t = n.update(e).digest("hex")), t
            }, e.matchFileMd5 = function (e, n) {
                return i(this, void 0, void 0, function* () {
                    let i = !1, o = yield t(e);
                    return void 0 !== o && o === n.toUpperCase() && (s.information("check full md5 sucessful"), i = !0), i
                })
            }, e.calculateFileMd5Ex = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t;
                    if (e && (yield a.FileSystemAWNS.existsAW(e))) {
                        let n = r.createReadStream(e), i = o.createHash("md5");
                        n.on("data", e => {
                            i.update(e)
                        }), t = new Promise(e => {
                            n.on("end", () => {
                                let t = i.digest("hex");
                                t = t.toUpperCase(), e(t)
                            })
                        })
                    } else t = new Promise(e => {
                        e(void 0)
                    });
                    return t
                })
            }, e.calculateFileMd5 = t, e.encryptBuffer = function (e, t) {
                let n = null;
                try {
                    let i = o.createCipheriv("aes-128-ecb", t, ""), r = i.update(e), a = i.final();
                    n = Buffer.concat([r, a])
                } catch (e) {
                    s.error("encryptBuffer", e)
                }
                return n
            }, e.decryptBuffer = function (e, t) {
                let n = null;
                try {
                    let i = o.createDecipheriv("aes-128-ecb", t, ""), r = i.update(e), a = i.final();
                    n = Buffer.concat([r, a])
                } catch (e) {
                    s.error("decryptBuffer", e)
                }
                return n
            }, e.encryptSha1Buffer = function (e) {
                let t = null;
                try {
                    t = o.createHash("sha1").update(e).digest("hex")
                } catch (e) {
                    s.error("encryptSha1Buffer", e)
                }
                return t
            }, e.setForegroundWindow = function (e, t) {
                if (null !== e && null !== t) {
                    let n = t.getNativeWindowHandle().readUIntLE(0, 4);
                    e.setForegroundWindow(n) ? s.information("sucessful") : s.information("failed")
                }
            }
        }(t.ToolsUtilitiesAWNS || (t.ToolsUtilitiesAWNS = {}))
    }, 4: function (e, t, n) {
        e.exports = n(9)(186)
    }, 41: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(6), r = n(1), a = n(7).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        process.env.TL_ENABLE = "0", "console" === process.env.TL_OUTPUT ? r.default.outputLogger = r.outputLoggerConsole : r.default.outputLogger = function () {
            function e(e) {
                return function (...t) {
                    a.printEtwLog(e, function (...e) {
                        return e.map(e => o.inspect(e)).join(" ").replace(/%/g, "%%")
                    }(...t))
                }
            }

            return {
                [r.LogLevel.Critical]: e(r.LogLevel.Critical),
                [r.LogLevel.Error]: e(r.LogLevel.Error),
                [r.LogLevel.Warning]: e(r.LogLevel.Warning),
                [r.LogLevel.Information]: e(r.LogLevel.Information),
                [r.LogLevel.Verbose]: e(r.LogLevel.Verbose)
            }
        }()
    }, 42: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(16), r = (n(17), n(2)), a = n(6);
        let s = null;
        const l = n(13), d = n(3), c = n(1), u = n(7), f = n(15), p = "xdas_profile_stat";
        let h = "", g = void 0, m = null, S = void 0, v = null,
            _ = u.default(r.join(__rootDir, "../bin/ThunderHelper.node")), C = new Set;

        function T() {
            return i(this, void 0, void 0, function* () {
                return new Promise(e => i(this, void 0, void 0, function* () {
                    void 0 === S && (null === v && (v = new Promise(e => {
                        e(S = function (e) {
                            let t = "";
                            if (0 === e.length && "renderer" === process.type) {
                                let e = r.normalize(decodeURIComponent(window.location.href)),
                                    n = e.indexOf(process.resourcesPath);
                                n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                                let i = e.length - 1, o = e.indexOf("?"), a = e.indexOf("#");
                                i = o > -1 ? Math.min(o - 1, i) : i, i = a > -1 ? Math.min(a - 1, i) : i, n > -1 && i >= n && (t = e.substr(n, i - n + 1))
                            }
                            return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                        }(""))
                    })), S = yield v), e(S)
                }))
            })
        }

        function w(e) {
            let t = "";
            do {
                if (null === e || void 0 === e) break;
                switch (typeof e) {
                    case"string":
                        t = e;
                        break;
                    case"object":
                        t = a.inspect(e) || "";
                        break;
                    case"number":
                    case"boolean":
                        t = e.toString() || ""
                }
            } while (0);
            return t
        }

        function k(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function y(e) {
            return i(this, void 0, void 0, function* () {
                return new Promise(t => i(this, void 0, void 0, function* () {
                    let i = void 0;
                    null === s && (s = yield Promise.resolve().then(() => n(29)));
                    let o = s.createHash("md5");
                    null !== o && (i = o.update(e).digest("hex")), t(i)
                }))
            })
        }

        function b() {
            return new Promise(e => i(this, void 0, void 0, function* () {
                let t = "";
                t = void 0 === g ? "browser" === process.type ? function () {
                    if (void 0 === g) {
                        let e = process.argv.length, t = process.argv;
                        for (let n = 0; n < e; n++) {
                            let e = t[n];
                            if (e.startsWith("-StartType:")) {
                                g = e.substring("-StartType:".length);
                                break
                            }
                        }
                        void 0 === g && (g = "")
                    }
                    return g
                }() : yield function () {
                    return i(this, void 0, void 0, function* () {
                        return null === m && (m = new Promise(e => {
                            d.ipcRenderer.send(f.ThunderChannelList.channelRMGetBrowserStartType), d.ipcRenderer.once(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                                g = n, e(n), m = null
                            })
                        })), m
                    })
                }() : g, e(t)
            }))
        }

        function P(e, t, n, o) {
            return i(this, void 0, void 0, function* () {
                let r = w(t), a = w(n), s = yield y(a), d = function (e) {
                    let t = new RegExp(k("file:///"), "g"), n = new RegExp(k(process.resourcesPath + "\\"), "g"),
                        i = new RegExp(k(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(i, "")
                }(w(o)), c = yield y(d), u = `${e}:${s}:${c}`;
                C.has(u) || (C.add(u), l.XLStatNS.trackEvent(p, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield T()},code=${r},message_hash=${s},message=${encodeURI(a)},stack_hash=${c},stack=${encodeURI(d)}`)), function (e, t, n, o) {
                    return i(this, void 0, void 0, function* () {
                    })
                }().catch()
            })
        }

        function M(e) {
            console.error(e);
            let t = e || {};
            P("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        !function (e) {
            e.init = function (e) {
                h = e
            }, e.trackColdStartUpEvent = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = _.iSColdStartUp() ? 1 : 0, n = o.release(),
                        i = _.performanceMonitorReporter.getProcessUptime(), r = yield b(),
                        a = `key=${e},start_type=${r},cold_start_up=${t},os_version=${n},cost_time=${i}`;
                    l.XLStatNS.trackEvent(p, "cold_start_up", "", 0, 0, 0, 0, a)
                })
            }
        }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
            if (process.on("uncaughtException", e => {
                console.error(e);
                let t = e || {};
                P("uncaughtException", t.code, t.message, t.stack).catch()
            }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                M(e)
            }), d.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = yield b();
                    e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                })
            }); else if ("browser" !== process.type) {
                window.addEventListener("unhandledrejection", e => {
                    M(e && e.reason || {})
                });
                let e = d.remote.getCurrentWebContents();
                null !== e && void 0 !== e && e.once("did-finish-load", () => {
                    (function () {
                        return i(this, void 0, void 0, function* () {
                            do {
                                if ("browser" === process.type) break;
                                if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                let e = _.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                                    i = n.loadEventEnd - n.navigationStart, r = n.fetchStart - n.navigationStart,
                                    a = n.domainLookupEnd - n.domainLookupStart, s = n.connectEnd - n.connectStart,
                                    d = n.responseStart - n.requestStart, c = n.responseEnd - n.responseStart,
                                    u = n.domComplete - n.domLoading, f = yield b();
                                l.XLStatNS.trackEvent(p, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${t},load_time=${i},before_fetch_time=${r},domin_lookup_time=${a},connect_time=${s},first_response_time=${d},responseTime=${c},domTime=${u},process=${h}`)
                            } while (0)
                        })
                    })().catch()
                })
            }
            c.default.hook("beforeLog", (e, t, ...n) => {
                e === c.LogLevel.Critical && l.XLStatNS.trackEvent(p, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
            })
        }()
    }, 43: function (e, t, n) {
        e.exports = n(9)(189)
    }, 44: function (e, t) {
        e.exports = require("net")
    }, 45: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(10), a = n(5), s = n(2);
        !function (e) {
            function t(e, t) {
                if (null !== e) {
                    e.webContents.isDevToolsOpened() ? e.webContents.closeDevTools() : e.webContents.openDevTools(t)
                }
            }

            e.openDevTool = t, e.enableDevTools = function (e) {
                return i(this, void 0, void 0, function* () {
                    (yield r.FileSystemAWNS.existsAW(s.resolve(__rootDir, "../../enableDevTools"))) && window.addEventListener("keyup", n => {
                        "F12" === n.key && n.ctrlKey && t(o.remote.getCurrentWindow(), e)
                    }, !0)
                })
            }, e.enableDragOpenFile = function (e) {
                void 0 === e && (e = !1), document.addEventListener("dragover", e => {
                    e.preventDefault()
                }, !1), document.addEventListener("drop", e => i(this, void 0, void 0, function* () {
                    e.preventDefault();
                    let t = e.dataTransfer, n = t.files, i = t.items;
                    if (void 0 !== i && null !== i && i.length > 0) for (let e = 0; e < i.length; e++) {
                        let t = i[e];
                        "string" === t.kind && "text/uri-list" === t.type ? t.getAsString(e => {
                            a.NativeCallModule.nativeCall.CallNativeFunction("DropOpenUrl", e)
                        }) : t.kind
                    }
                    if (void 0 !== n && null !== n && n.length > 0) for (let e = 0; e < n.length; e++) {
                        let t = n[e].path;
                        void 0 !== t && null !== t && "" !== t && (yield r.FileSystemAWNS.existsAW(t)) && a.NativeCallModule.nativeCall.CallNativeFunction("DropOpenFile", t)
                    }
                }), !1)
            }
        }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
    }, 450: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(451), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 451: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(1012), o = n(609);
        t.default = o.connector.connect({
            mapStateToProps: {
                downloadStatus: e => e.Suspension.downloadStatus,
                totalDownloadSpeed: e => e.Suspension.totalDownloadSpeed,
                totalVipSpeed: e => e.Suspension.totalVipSpeed,
                showStatus: e => e.Suspension.showStatus,
                statusText: e => e.Suspension.statusText
            },
            mapCommitToProps: {
                INIT_TASKLIST: "INIT_TASKLIST",
                INSERT_TASK: "INSERT_TASK",
                REMOVE_TASK: "REMOVE_TASK",
                UPDATE_TASKSTATUS: "UPDATE_TASKSTATUS",
                UPDATE_TASKDETAIL: "UPDATE_TASKDETAIL",
                UPDATE_TASKBASE: "UPDATE_TASKBASE"
            },
            mapDispatchToProps: {refreshSuspension: "refreshSuspension"},
            mapGettersToProps: {}
        })(i.default)
    }, 452: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(453), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 453: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        }, o = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(6), a = n(3), s = n(4), l = n(1013), d = n(5), c = n(264), u = n(1018), f = n(21), p = n(2),
            h = n(7), g = n(38), m = n(1019), S = n(15), v = n(1).default.getLogger("Thunder.SuspensionRender"),
            _ = h.default(p.join(__rootDir, "../bin/ThunderHelper.node")),
            C = h.default(p.join(__rootDir, "../bin/ThunderSuspensionWindow.node"));
        let T = class extends s.Vue {
            constructor() {
                super(...arguments), this.isVipLogin = !1, this.isVip = !1, this.isInVipAcc = !1, this.isStopAnimation = !1, this.isDowning = !1, this.isClick = !1, this.isStatus = !1, this.totalSpeed = {
                    speed: "0",
                    unit: "B/S"
                }, this.vipSpeed = "", this.hoverWindowWidth = 404, this.hoverWindowHeight = 270, this.isThunderForeground = !1, this.isDowningStatus = !1, this.downloadProgress = 0, this.startShowTime = 0, this.suspensionWindowPos = {
                    x: void 0,
                    y: void 0
                }, this.isFullScreen = !1, this.isStartShowWindow = !0, this.dpiFactor = 1, this.showFloatPanel = !1
            }

            onDownloadingChanged(e) {
                1 === u.FloatPanelMenuHelper.getShowFloatPanelType() && (e ? this.canHideWindow() || C.showSuspensionWindow() : C.hideSuspensionWindow())
            }

            updateSuspensionState() {
                this.isDowning = this.downloadStatus, r.isNullOrUndefined(this.statusText) ? this.isStatus = !1 : (this.statusText = this.statusText, this.isStatus = this.showStatus), this.isStatus && (this.isDowning = !1), this.isStatus ? r.isNullOrUndefined(this.statusText) || this.canHideWindow() || (C.showConnectingTextWindow(this.statusText), c.FloatPanelHelper.getMainWindow().isMaximized() && C.hideSuspensionWindow()) : this.isDowning || C.updateDownloadState(!1), this.isDowningStatus = this.isDowning
            }

            showOrHideFloatPanel(e) {
                v.information("showOrHideFloatPanel this.showFloatPanel:", this.showFloatPanel, ", bShow:", e), this.showFloatPanel !== e && (this.showFloatPanel = e, e ? (c.FloatPanelHelper.trackEvent("float_monitor_hover_show"), c.FloatPanelHelper.getFloatPanelWindow().showInactive()) : c.FloatPanelHelper.getFloatPanelWindow().hide())
            }

            setFloatPanelDirection(e, t) {
                let n = {x: 0, y: 0};
                switch (e) {
                    case c.FloatPanelDirection.LeftBottom:
                        n.x -= t.width, n.y -= 0;
                        break;
                    case c.FloatPanelDirection.LeftTop:
                        n.x -= t.width, n.y -= t.height;
                        break;
                    case c.FloatPanelDirection.RightTop:
                        n.x += 0, n.y -= t.height;
                        break;
                    case c.FloatPanelDirection.RightBottom:
                        n.x -= 0, n.y -= 0
                }
                return n
            }

            leave() {
                this.isClick || this.showOrHideFloatPanel(!1)
            }

            getFloatPanelDirection(e, t, n, i) {
                let o = C.getHandle(), r = _.getMonitorDPIFactor(o),
                    s = a.screen.getDisplayNearestPoint({x: Math.round(e / r), y: Math.round(t / r)}), l = s.workArea,
                    d = l.width * s.scaleFactor - 40, u = l.height * s.scaleFactor - 60,
                    f = c.FloatPanelDirection.RightBottom;
                return f = e + n < l.x + d ? t + i < l.y + u ? c.FloatPanelDirection.RightBottom : c.FloatPanelDirection.RightTop : t + i < l.y + u ? c.FloatPanelDirection.LeftBottom : c.FloatPanelDirection.LeftTop, v.information("getFloatPanelDirection x:", e, ", y:", t, ", width:", n, ", height:", i, ", dpiFactor:", r, ", display.scaleFactor:", s.scaleFactor, ", screenWidth:", d, ", screenHeight:", u, ", rect:", l, ", ret:", f), f
            }

            canHideWindow() {
                let e = !0;
                do {
                    let t = u.FloatPanelMenuHelper.getShowFloatPanelType();
                    if (0 === t) {
                        e = !1;
                        break
                    }
                    if (2 === t) {
                        e = !0;
                        break
                    }
                    if (c.FloatPanelHelper.getMainWindow().isMaximized() && c.FloatPanelHelper.isThunderMainWndForeground() && c.FloatPanelHelper.getMainWindow().isVisible()) {
                        e = !0;
                        break
                    }
                    (this.isDowning || this.isStatus) && (e = !1)
                } while (0);
                return e
            }

            setSuspensionConfig(e) {
                d.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "ConfigSuspension", "SuspensionX", e.x, () => {
                }), d.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "ConfigSuspension", "SuspensionY", e.y, () => {
                })
            }

            handleRightClick() {
                this.showOrHideFloatPanel(!1), u.FloatPanelMenuHelper.popupMenu()
            }

            showOrHideMainWindow(e) {
                let t = "";
                c.FloatPanelHelper.getMainWindow().isMinimized() ? (c.FloatPanelHelper.getMainWindow().restore(), g.ToolsUtilitiesAWNS.setForegroundWindow(_, c.FloatPanelHelper.getMainWindow()), c.FloatPanelHelper.getMainWindow().show(), this.isThunderForeground = !0, t = "showmain") : c.FloatPanelHelper.getMainWindow().isVisible() && !e && this.isThunderForeground ? c.FloatPanelHelper.getMainWindow().isMinimized() ? c.FloatPanelHelper.getMainWindow().restore() : (c.FloatPanelHelper.getMainWindow().minimize(), c.FloatPanelHelper.getMainWindow().hide(), this.isThunderForeground = !1, t = "hidemain") : (c.FloatPanelHelper.getMainWindow().isMinimized() && c.FloatPanelHelper.getMainWindow().restore(), g.ToolsUtilitiesAWNS.setForegroundWindow(_, c.FloatPanelHelper.getMainWindow()), c.FloatPanelHelper.getMainWindow().show(), this.isThunderForeground = !0, t = "showmain"), c.FloatPanelHelper.trackEvent("float_monitor_dbclick_main_status_get", `status=${t}`)
            }

            onGetUserInfo() {
                d.NativeCallModule.nativeCall.CallNativeFunction("GetAllUserInfo", (e, t) => {
                    do {
                        if (v.information("onGetUserInfo allUserinfo", t), !t) break;
                        let e = t.vipList[0], n = 1;
                        v.information("onGetUserInfo vipInfo", e), 0 !== n ? (C.showVipChangeWindow(), this.isVip = !0, this.isVipLogin = !0) : (C.showNormalWindow(), this.isVip = !1, this.isVipLogin = !1)
                    } while (0)
                })
            }

            listenLoginEvent() {
                d.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", () => {
                    this.isVip = !1, this.onGetUserInfo()
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("onLoginFailed", () => {
                    this.isVip = !1, this.isVipLogin = !1
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("onUserInfoChange", (e, t) => {
                    "vipinfo" === e && this.onGetUserInfo()
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                    C.showNormalWindow(), this.isVip = !1, this.isVipLogin = !1
                })
            }

            getBooskeyState() {
                return new Promise(e => {
                    d.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "BossKey", "BossKeyState", !1, (t, n) => {
                        t === f.NativeFunctionErrorCode.Success ? e(n) : e(!1)
                    })
                })
            }

            initSuspensionPosition() {
                let e = a.screen.getPrimaryDisplay().bounds;
                v.information("screenBounds:", e, ", this.suspensionWindowPos:", this.suspensionWindowPos), (this.suspensionWindowPos.x < e.x || this.suspensionWindowPos.x > e.x + e.width || this.suspensionWindowPos.y < e.y || this.suspensionWindowPos.y > e.y + e.height) && (this.suspensionWindowPos.x = e.x + e.width - 210, this.suspensionWindowPos.y = e.y + 90), C.setSuspensionWindowPos(this.suspensionWindowPos.x, this.suspensionWindowPos.y)
            }

            initSuspensionPositionConfig() {
                d.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigSuspension", "SuspensionX", null, (e, t) => {
                    e === f.NativeFunctionErrorCode.Success && null !== t && t >= 0 && (this.suspensionWindowPos.x = t, void 0 !== this.suspensionWindowPos.y && this.initSuspensionPosition())
                }), d.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigSuspension", "SuspensionY", null, (e, t) => {
                    e === f.NativeFunctionErrorCode.Success && null !== t && t >= 0 && (this.suspensionWindowPos.y = t, void 0 !== this.suspensionWindowPos.x && this.initSuspensionPosition())
                })
            }

            getConfigValue() {
                d.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigFloatPanel", "ConfigFloatPanelShowSpeedType", "0", (e, t) => {
                    e === f.NativeFunctionErrorCode.Success && u.FloatPanelMenuHelper.setShowSpeedType(Number(t))
                }), d.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0", (e, t) => {
                    if (e === f.NativeFunctionErrorCode.Success) {
                        this.isStartShowWindow = !1;
                        let e = Number(t);
                        if (u.FloatPanelMenuHelper.setShowFloatPanelType(e), c.FloatPanelHelper.getMainWindow().isMaximized() && c.FloatPanelHelper.getMainWindow().isVisible()) C.hideSuspensionWindow(); else if (2 === e) C.hideSuspensionWindow(); else if (0 === e) {
                            a.remote.getGlobal("silentSupsWnd") || C.showSuspensionWindow()
                        } else if (this.canHideWindow()) C.hideSuspensionWindow(); else {
                            a.remote.getGlobal("silentSupsWnd") || C.showSuspensionWindow()
                        }
                    }
                })
            }

            getAnimationLevel() {
                d.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "GenericSettings", "AnimationLevel", "0", (e, t) => {
                    e === f.NativeFunctionErrorCode.Success && (this.isStopAnimation = "0" === t)
                })
            }

            listenFullScreen() {
                setInterval(() => {
                    _.IsInFullScreen() ? (C.hideSuspensionWindow(), this.isFullScreen = !0) : this.isFullScreen && (this.canHideWindow() || (C.showSuspensionWindow(), this.isFullScreen = !1))
                }, 1e3)
            }

            listenConfigEvent() {
                d.NativeCallModule.nativeCall.CallNativeFunction("IsConfigInitFinish", e => {
                    e === f.NativeFunctionErrorCode.Success && (this.getConfigValue(), this.getAnimationLevel())
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("OnConfigValueChanaged", (e, t, n, i) => {
                    "ConfigFloatPanel" === e && n !== i && this.getConfigValue()
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("OnConfigValueChanaged", (e, t, n, i) => {
                    "GenericSettings" === e && "AnimationLevel" === t && n !== i && this.getAnimationLevel()
                })
            }

            listenMainEvent() {
                c.FloatPanelHelper.getMainWindow().on("maximize", () => {
                    C.hideSuspensionWindow()
                }), c.FloatPanelHelper.getMainWindow().on("blur", () => {
                    this.canHideWindow() ? C.hideSuspensionWindow() : c.FloatPanelHelper.isThunderMainWndForeground() || C.showSuspensionWindow()
                }), c.FloatPanelHelper.getMainWindow().on("focus", () => {
                    c.FloatPanelHelper.getMainWindow().isMaximized() ? C.hideSuspensionWindow() : this.canHideWindow() ? C.hideSuspensionWindow() : this.isStartShowWindow || C.showSuspensionWindow()
                }), c.FloatPanelHelper.getMainWindow().on("minimize", () => o(this, void 0, void 0, function* () {
                    (yield this.getBooskeyState()) ? C.hideSuspensionWindow() : c.FloatPanelHelper.getMainWindow().isVisible() && (this.canHideWindow() ? C.hideSuspensionWindow() : C.showSuspensionWindow())
                })), c.FloatPanelHelper.getMainWindow().on("unmaximize", () => {
                    this.canHideWindow() ? C.hideSuspensionWindow() : C.showSuspensionWindow()
                }), c.FloatPanelHelper.getMainWindow().on("hide", () => o(this, void 0, void 0, function* () {
                    if (yield this.getBooskeyState()) C.hideSuspensionWindow(); else if (this.canHideWindow()) C.hideSuspensionWindow(); else {
                        a.remote.getGlobal("silentSupsWnd") || C.showSuspensionWindow()
                    }
                }))
            }

            listenGlobalSpeedChangeEvent() {
                d.NativeCallModule.nativeCall.AttachNativeEvent("OnTotalVipAcclerateStatusChanged", e => {
                    if (e) {
                        let t = JSON.parse(e);
                        t && (this.isInVipAcc = t.acclerating)
                    }
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("OnGlobalDownloadSpeedChanged", (e, t) => {
                    this.totalSpeed = c.FloatPanelHelper.formatSpeed(e), this.isVip || this.isInVipAcc || (t = 0);
                    let n = c.FloatPanelHelper.formatSpeed(t);
                    this.vipSpeed = "+" + n.speed + n.unit, d.NativeCallModule.nativeCall.CallNativeFunction("GetDownloadProgressNumber", (n, i) => {
                        v.information("GetDownloadProgressNumber ret:", i), this.downloadProgress = i, this.isDowningStatus && C.showDownloadWindow(e, t, this.downloadProgress)
                    })
                })
            }

            updateSuspensionBall() {
                this.refreshSuspension(), this.$nextTick(() => {
                    this.updateSuspensionState()
                })
            }

            onGetTaskList(e) {
                v.information("onGetTaskList, taskList:", e), this.INIT_TASKLIST(e), this.updateSuspensionBall()
            }

            onTaskRemoved(e) {
                v.information("onTaskRemoved, taskIdList:", e), this.REMOVE_TASK(e), this.updateSuspensionBall()
            }

            onTaskInserted(e) {
                v.information("onTaskInserted, taskBases:", e), this.INSERT_TASK(e), this.updateSuspensionBall()
            }

            onTaskStatusChanged(e) {
                v.information("onTaskStatusChanged, statusMap:", e), this.UPDATE_TASKSTATUS(e), this.updateSuspensionBall()
            }

            onTaskDetailChanged(e) {
                v.information("onTaskDetailChanged, taskBasesMap:", e), this.UPDATE_TASKDETAIL(e), this.updateSuspensionBall()
            }

            onBtSubFileLoaded(e, t) {
                v.information("onBtSubFileLoaded, taskBase:", t), this.UPDATE_TASKBASE(t), this.updateSuspensionBall()
            }

            initTaskManager() {
                let e = m.TaskManagerNS.getTaskManager();
                e.addListener(m.TaskManagerNS.eventIdGetTaskList, this.onGetTaskList.bind(this)), e.addListener(m.TaskManagerNS.eventIdTaskRemoved, this.onTaskRemoved.bind(this)), e.addListener(m.TaskManagerNS.eventIdTaskInserted, this.onTaskInserted.bind(this)), e.addListener(m.TaskManagerNS.eventIdTaskStatusChanged, this.onTaskStatusChanged.bind(this)), e.addListener(m.TaskManagerNS.eventIdTaskDetailChanged, this.onTaskDetailChanged.bind(this)), e.addListener(m.TaskManagerNS.eventIdBtSubFileLoaded, this.onBtSubFileLoaded.bind(this)), e.init()
            }

            setFloatPanelWindowPos() {
                let e = C.getHandle();
                if (!e) return;
                let t = _.getWindowRect(e), n = c.FloatPanelHelper.getFloatPanelWindowHandle(), i = _.getWindowRect(n),
                    o = this.getFloatPanelDirection(t.x, t.y, i.width, i.height), r = this.setFloatPanelDirection(o, i);
                r.x += 40 * this.dpiFactor, r.y += 60 * this.dpiFactor, r.x = Math.round(t.x + r.x), r.y = Math.round(t.y + r.y), _.setWindowPos(n, 0, r.x, r.y, 394 * this.dpiFactor, 260 * this.dpiFactor, 4)
            }

            mounted() {
                let e = c.FloatPanelHelper.getFloatPanelWindowHandle();
                C.startSuspensionWindow(e), this.dpiFactor = c.FloatPanelHelper.getDpiFactor(), C.setDpiFactor(this.dpiFactor), a.ipcRenderer.on("can-start-all-task", (e, t) => {
                    u.FloatPanelMenuHelper.setCanStartAll(t)
                }), a.ipcRenderer.on(S.ThunderChannelList.channelMRSuspensionWindowShowOrHide, e => {
                    if (e) this.startShowTime = (new Date).getTime(), c.FloatPanelHelper.trackEvent("float_monitor_show"); else {
                        let e = (((new Date).getTime() - this.startShowTime) / 1e3).toFixed(2);
                        c.FloatPanelHelper.trackEvent("float_monitor_online_time", `time=${e}`), this.startShowTime = 0
                    }
                }), this.listenMainEvent(), this.onGetUserInfo(), this.listenLoginEvent(), this.listenConfigEvent(), this.listenFullScreen(), this.listenGlobalSpeedChangeEvent(), this.initTaskManager(), c.FloatPanelHelper.getFloatPanelWindow().hookWindowMessage(736, (e, t) => {
                    let n = this.dpiFactor;
                    this.dpiFactor = e[0] / 96, v.information("OnDpiChanged this.dpiFactor:", this.dpiFactor, ", old dpiFactor:", n), C.setDpiFactor(this.dpiFactor), this.setFloatPanelWindowPos()
                }), C.setCreateCallback(() => {
                    this.initSuspensionPositionConfig()
                }), C.setRightClickDownCallback(() => {
                }), C.setRightClickUpCallback(() => {
                    this.handleRightClick()
                }), C.setLeftClickDownCallback(() => {
                    this.showOrHideFloatPanel(!1)
                }), C.setLeftDBClickCallback(() => {
                    this.showOrHideMainWindow(!1)
                }), C.setHoverCallback((e, t, n, i) => {
                    this.isThunderForeground = c.FloatPanelHelper.isThunderMainWndForeground(), v.information("hover isThunderForeground", this.isThunderForeground), this.setFloatPanelWindowPos(), _.getKeyState(2) >= 0 && this.showOrHideFloatPanel(!0)
                }), C.setLeaveCallback((e, t) => {
                    let n = c.FloatPanelHelper.getFloatPanelWindowHandle(), i = _.getWindowRect(n);
                    i.x <= e && i.y <= t && i.x + i.width >= e && i.y + i.height >= t || this.showOrHideFloatPanel(!1)
                }), C.setMoveCallback(() => {
                    this.showOrHideFloatPanel(!1)
                }), C.setLeftClickUpCallback((e, t) => {
                    this.setFloatPanelWindowPos();
                    let n = {x: e, y: t, height: 0, width: 0};
                    this.setSuspensionConfig(n)
                })
            }
        };
        i([s.Prop({})], T.prototype, "downloadStatus", void 0), i([s.Prop({})], T.prototype, "totalDownloadSpeed", void 0), i([s.Prop({})], T.prototype, "totalVipSpeed", void 0), i([s.Prop({})], T.prototype, "showStatus", void 0), i([s.Prop({})], T.prototype, "statusText", void 0), i([s.Prop({})], T.prototype, "INIT_TASKLIST", void 0), i([s.Prop({})], T.prototype, "INSERT_TASK", void 0), i([s.Prop({})], T.prototype, "REMOVE_TASK", void 0), i([s.Prop({})], T.prototype, "UPDATE_TASKSTATUS", void 0), i([s.Prop({})], T.prototype, "UPDATE_TASKDETAIL", void 0), i([s.Prop({})], T.prototype, "UPDATE_TASKBASE", void 0), i([s.Prop({})], T.prototype, "refreshSuspension", void 0), i([s.Watch("isDowningStatus")], T.prototype, "onDownloadingChanged", null), T = i([s.Component({components: {FloatPanelContainer: l.default}})], T), t.default = T
    }, 454: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(455), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 455: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(1014), o = n(609);
        t.default = o.connector.connect({
            mapStateToProps: {
                taskBaseInfos: e => e.Suspension.taskBaseInfos,
                taskIdLists: e => e.Suspension.taskIdLists
            }, mapCommitToProps: {}, mapDispatchToProps: {}, mapGettersToProps: {}
        })(i.default)
    }, 456: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(457), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 457: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(4), r = n(5), a = n(1015), s = n(8), l = n(264),
            d = n(1).default.getLogger("Thunder.SuspensionRender.FloatPanelVue");
        let c = class extends o.Vue {
            get haveDownloadTaskStyle() {
                let e = "display: none";
                return this.taskIdLists.length > 0 && (e = ""), e
            }

            get isHaveDownloadTaskStyle() {
                let e = "";
                return this.taskIdLists.length > 0 && (e = "display: none"), e
            }

            onClickShowFinishTask() {
                l.FloatPanelHelper.trackEvent("float_monitor_hover_finished_click"), r.NativeCallModule.nativeCall.CallNativeFunction("SelectCategoryView", -1, s.DownloadKernel.CategroyViewID.Completed, void 0, !0), this.$emit("show-float-panel", !1)
            }

            dbclickItem(e) {
                l.FloatPanelHelper.trackEvent("float_monitor_hover_downloading_click"), r.NativeCallModule.nativeCall.CallNativeFunction("SelectCategoryView", -1, s.DownloadKernel.CategroyViewID.Downloading, e, !0), this.$emit("show-float-panel", !1)
            }

            mounted() {
                d.information("mounted")
            }
        };
        i([o.Prop({})], c.prototype, "taskBaseInfos", void 0), i([o.Prop({})], c.prototype, "taskIdLists", void 0), c = i([o.Component({components: {TaskItemContainer: a.default}})], c), t.default = c
    }, 458: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(459), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 459: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(1016), o = n(609);
        t.default = o.connector.connect({
            mapStateToProps: {
                taskBase: (e, t) => {
                    let n = t.taskId;
                    return e.Suspension.taskBaseInfos[n]
                }
            }
        })(i.default)
    }, 460: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(461), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 461: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(6), r = n(4), a = n(58), s = n(264);
        let l = class extends r.Vue {
            get taskName() {
                return this.taskBase.taskName
            }

            get getTaskProgress() {
                let e = "width: ", t = 0;
                0 !== this.taskBase.fileSize && (t = this.taskBase.downloadSize / this.taskBase.fileSize), t >= 1 && (t = .9999);
                let n = (100 * t).toFixed(2) + "%";
                return "100.00%" === n && (n = "99.99%"), e += n
            }

            get getTaskIcon() {
                if (0 === this.taskBase.taskType) return "xlx-icon-type-group";
                return a.TaskUtilHelper.getTaskIcon(this.taskBase.taskName, this.taskBase.taskType)
            }

            get stateName() {
                let e = "", t = s.FloatPanelHelper.getTaskStatusPrompt(this.taskBase),
                    n = s.FloatPanelHelper.getTaskStartPrompt(this.taskBase);
                return o.isNullOrUndefined(n) ? o.isNullOrUndefined(t) || (e = t) : e = n, e
            }
        };
        i([r.Prop({})], l.prototype, "taskId", void 0), i([r.Prop({})], l.prototype, "taskBase", void 0), l = i([r.Component({})], l), t.default = l
    }, 5: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(6), o = n(18), r = n(19), a = n(26), s = n(27);
        !function (e) {
            let t;
            !function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.Success = 0] = "Success", e[e.FunctionNotExist = 1] = "FunctionNotExist", e[e.ParamaterError = 2] = "ParamaterError", e[e.CallFailed = 3] = "CallFailed"
            }(t = e.NativeCallErrorCode || (e.NativeCallErrorCode = {}));

            class n {
                constructor(e, t, n) {
                    this.maxId = e, this.minId = t, this.invalidId = n
                }

                generateId() {
                    return this.minId === this.maxId ? this.invalidId : this.minId++
                }

                isInvalidId(e) {
                    return e === this.invalidId
                }
            }

            e.IdGenerator = n;
            const l = 0;
            e.idGenerator = new n(1e7, 1, l);

            class d {
                constructor() {
                    this.jsCallbacks = new Map, this.eventJsCallbakcs = new Map, this.jsRegisterFunctions = new Map, this.targetCommunitorInfo = s.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(a.CommonIPCBase.mainRendererContext), this.bindMsgListeners(), this.notifyNativeCallReady()
                }

                CallNativeFunction(t, ...n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("funcName is empty");
                            break
                        }
                        o.information("funcName = ", t), this.printArgs(n);
                        let a = l;
                        for (let t = 0; t < n.length; ++t) if (i.isFunction(n[t])) {
                            let i = e.idGenerator.generateId(), o = n[t];
                            this.jsCallbacks.set(i, o), t === n.length - 1 ? (a = i, n.pop()) : n[t] = i
                        }
                        s.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: r.CommonIPCMessage.msgNCCallNativeFunction,
                            args: [t, a].concat(n)
                        })
                    } while (0)
                }

                AttachNativeEvent(t, n) {
                    let r = void 0;
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("callback is empty");
                            break
                        }
                        let a = e.idGenerator.generateId();
                        if (e.idGenerator.isInvalidId(a)) {
                            o.error("id error");
                            break
                        }
                        if (this.eventJsCallbakcs.has(t)) this.eventJsCallbakcs.get(t).set(a, n); else {
                            let e = new Map;
                            e.set(a, n), this.eventJsCallbakcs.set(t, e)
                        }
                        r = a
                    } while (0);
                    return r
                }

                DetachNativeEvent(e, t) {
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            o.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(t)) {
                            o.error("callback is empty");
                            break
                        }
                        if (!this.eventJsCallbakcs.has(e)) {
                            o.error(`event: ${e} doesnot have listener`);
                            break
                        }
                        if (!this.eventJsCallbakcs.get(e).has(t)) {
                            o.error(`event: ${e} doesnot have the listener of id=${t}`);
                            break
                        }
                        this.eventJsCallbakcs.get(e).delete(t)
                    } while (0)
                }

                CheckNativeFunction(t, n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("callback is empty");
                            break
                        }
                        o.information("funcName = ", t);
                        let a = e.idGenerator.generateId();
                        this.jsCallbacks.set(a, n), s.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: r.CommonIPCMessage.msgNCCheckNativeFunction,
                            args: [t, a]
                        })
                    } while (0)
                }

                RegisterJSFunction(e, n) {
                    let r = t.ParamaterError;
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            o.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("jsFunc is empty");
                            break
                        }
                        this.jsRegisterFunctions.set(e, n), r = t.Success
                    } while (0);
                    return r
                }

                bindMsgListeners() {
                    s.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCCallJsFunctionById, e => {
                        this.handleCallJsFunctionById(e.msg.args)
                    }), s.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCCallJsFunctionByName, e => {
                        this.handleCallJsFunctionByName(e.msg.args)
                    }), s.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCNativeFireEvent, e => {
                        this.handleNativeFireEvent(e.msg.args)
                    })
                }

                handleCallJsFunctionById(t) {
                    do {
                        let n = t[0];
                        if (!i.isNumber(n)) {
                            o.error(`id error id = ${n}`);
                            break
                        }
                        if (e.idGenerator.isInvalidId(n)) {
                            o.error(`id = ${n} invalid`);
                            break
                        }
                        if (!this.jsCallbacks.has(n)) {
                            o.error(`jsCallbacks[${n}] is null`);
                            break
                        }
                        t.splice(0, 1), this.jsCallbacks.get(n).apply(null, t)
                    } while (0)
                }

                handleCallJsFunctionByName(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            o.error(`funcName error funcName = ${t}`);
                            break
                        }
                        if (!this.jsRegisterFunctions.has(t)) {
                            o.error(`jsRegisterFunctions[${t}] is null`);
                            break
                        }
                        e.splice(0, 1), this.jsRegisterFunctions.get(t).apply(null, e)
                    } while (0)
                }

                handleNativeFireEvent(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            o.warning(`eventName error eventName = ${t}`);
                            break
                        }
                        if (!this.eventJsCallbakcs.has(t)) {
                            o.warning(`eventJsCallbakcs[${t}] is null`);
                            break
                        }
                        e.shift(), this.eventJsCallbakcs.get(t).forEach((t, n, r) => {
                            o.information(`value = ${t}, key = ${n}, map = ${r}`), i.isNullOrUndefined(t) || t.apply(null, e)
                        })
                    } while (0)
                }

                notifyNativeCallReady() {
                    s.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: r.CommonIPCMessage.msgNCNativeCallReady,
                        args: [s.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfo()]
                    })
                }

                printArgs(e) {
                    for (let t in e) o.information(`index ${t} = `, e[t])
                }
            }

            e.NativeCallImpl = d, e.nativeCall = new d
        }(t.NativeCallModule || (t.NativeCallModule = {}))
    }, 50: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(14), o = n(5), r = n(35), a = n(1), s = n(12), l = a.default.getLogger("common/skin");

        function d(e) {
            if (e.type === r.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), s.ThunderUtil.setCSSProperties(document.body, {
                "--color-primary-theme": "",
                "--color-primary-control-1": "",
                "--color-primary-control-2": "",
                "--color-primary-control-3": "",
                "--color-primary-control-4": "",
                "--color-primary-gradient-1": "",
                "--color-primary-gradient-2": "",
                "--color-primary-text": "",
                "--color-search": "",
                "--color-secondary": "",
                "--color-gradient-background-1": "",
                "--color-gradient-background-2": "",
                "--color-gradient-foreground-1": "",
                "--color-gradient-foreground-2": "",
                "--color-accordion-1": "",
                "--color-accordion-2": "",
                "--default-opacity-1": "",
                "--default-opacity-2": ""
            }); else if (e.type === r.SkinHelperNS.SkinType.Color || e.type === r.SkinHelperNS.SkinType.Wallpaper) {
                document.body.classList.add("is-theme");
                let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: i, colorPrimaryControl3: o, colorPrimaryControl4: r, colorPrimaryGradient: a, colorPrimaryText: l, colorSearch: d, colorSecondary: c, colorGradientBackground: u, colorGradientForeground: f, colorAccordion: p}, opacity: h} = e;
                s.ThunderUtil.setCSSProperties(document.body, {
                    "--color-primary-theme": `${t}`,
                    "--color-primary-control-1": `${n}`,
                    "--color-primary-control-2": `${i}`,
                    "--color-primary-control-3": `${o}`,
                    "--color-primary-control-4": `${r}`,
                    "--color-primary-gradient-1": `${a[0]}`,
                    "--color-primary-gradient-2": `${a[1]}`,
                    "--color-primary-text": `${l}`,
                    "--color-search": `${d}`,
                    "--color-secondary": `${c}`,
                    "--color-gradient-background-1": `${u[0]}`,
                    "--color-gradient-background-2": `${u[1]}`,
                    "--color-gradient-foreground-1": `${f[0]}`,
                    "--color-gradient-foreground-2": `${f[1]}`,
                    "--color-accordion-1": `${p[0]}`,
                    "--color-accordion-2": `${p[1]}`,
                    "--default-opacity-1": `${h - .1}`,
                    "--default-opacity-2": `${h + .1}`
                })
            }
        }

        i.default("GetSkinInfo").then(d).catch(e => {
            l.warning(e)
        }), o.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", d)
    }, 53: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(70), r = n(1), a = n(12), s = n(71), l = r.default.getLogger("MenuSkinNS");
        !function (e) {
            function t(e, t) {
                if (l.information("setStyle", e, t), null !== e) {
                    let n = {windowPreference: o.WindowPreferenceNS.getWindowPreference()};
                    l.information("skinOpts", n), e.setStyle(s(n, t))
                }
            }

            e.setStyle = t, e.popEditableDefaultContextMenu = function (e, n, o) {
                let r = i.remote.getCurrentWebContents();
                r.once("context-menu", (o, s) => {
                    if (l.verbose(o), s.isEditable) {
                        let o = [{
                            label: "撤销", enabled: s.editFlags.canUndo, click: () => {
                                r.undo()
                            }
                        }, {type: "separator"}, {
                            label: "剪切", enabled: s.editFlags.canCut, click: () => {
                                r.cut()
                            }
                        }, {
                            label: "复制", enabled: s.editFlags.canCopy, click: () => {
                                r.copy()
                            }
                        }, {
                            label: "粘贴",
                            enabled: s.editFlags.canPaste && a.ThunderUtil.isClipboardTextFormatAvailable(),
                            click: () => {
                                r.paste()
                            }
                        }, {
                            label: "删除", enabled: s.editFlags.canDelete, click: () => {
                                r.delete()
                            }
                        }, {type: "separator"}, {
                            label: "全选", enabled: s.editFlags.canSelectAll, click: () => {
                                r.selectAll()
                            }
                        }];
                        if (void 0 !== e && "function" == typeof e) {
                            let t = e(s);
                            void 0 !== t && t.length > 0 && (void 0 === n ? n = o.length : (n < 0 && (n = o.length + 1 + n) < 0 && (n = 0), n > o.length && (n = o.length)), o.splice(n, 0, ...t))
                        }
                        let l = i.remote.Menu.buildFromTemplate(o);
                        t(l, {}), l.popup({window: i.remote.getCurrentWindow()})
                    }
                })
            }
        }(t.MenuSkinNS || (t.MenuSkinNS = {}))
    }, 58: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(8);
        let r = ["apk", "avi", "chm", "doc", "exe", "flv", "ipa", "ipsw", "iso", "mkv", "mov", "mp4"];
        r.push(...["mpg", "pdf", "ppt", "rar", "rm", "rmvb", "txt", "wmv", "xls"]);
        const a = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj; .cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia; .dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp; .flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo; .imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec; .lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v; .m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov;.movie;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex; .mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd; .mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi; .piv;.pjs;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psh;.pssd;.pva;.pvr;.pxv; .qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq; .rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smk;.sml;.smv;.spl;.ssm;.stl;.str;.stx;.sub;.svi;.swf;.swi; .swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr; .vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob; .vp3;.vp6;.vp7;\n  .vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp; .wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
            s = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
            l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
            d = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
            c = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
            u = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
            f = ".torrent;",
            p = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
            h = ".exe;.com;.bat;.msi", g = ".wav;.flac;.mp3;.aac;.wma;.m4a;.mid;.ape;.ogg;.ra;.mod",
            m = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
            S = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
            v = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z";
        !function (e) {
            let t;

            function n(e) {
                let n = t.Unkown, o = i.extname(e);
                return null !== o && void 0 !== o && o.length >= 2 && (o = o.toLowerCase()), void 0 === o || "" === o || o.length < 2 ? n = t.Unkown : p.indexOf(o) > -1 ? n = t.Video : h.indexOf(o) > -1 ? n = t.Software : S.indexOf(o) > -1 ? n = t.Doc : g.indexOf(o) > -1 ? n = t.Music : m.indexOf(o) > -1 ? n = t.Pic : v.indexOf(o) > -1 && (n = t.Zip), o.length > 1 && ".z" === o.slice(0, 2) && /[0-9]+/.test(o.substring(2)) && (n = t.Zip), n
            }

            e.getTaskIcon = function (e, t) {
                let n = "";
                do {
                    if (t === o.DownloadKernel.TaskType.Bt) {
                        n = "xlx-icon-type-bt-file";
                        break
                    }
                    if (t === o.DownloadKernel.TaskType.Group) {
                        n = "xlx-icon-type-group";
                        break
                    }
                    n = "xlx-icon-type-unknown";
                    let p = i.extname(e);
                    if ("" === p || p.length < 2) break;
                    p = p.toLowerCase();
                    let h = (p += ";").substring(1);
                    if (r.indexOf(h) > -1) {
                        n = "doc" === p ? "xlx-icon-type-word" : "xlx-icon-type-" + h;
                        break
                    }
                    if (a.indexOf(p) > -1) {
                        n = "xlx-icon-type-video";
                        break
                    }
                    if (s.indexOf(p) > -1) {
                        n = "xlx-icon-type-install", [".mds", ".bin", ".img"].indexOf(p) > -1 && (n = "xlx-icon-type-iso");
                        break
                    }
                    if (l.indexOf(p) > -1) {
                        if (n = "xlx-icon-type-doc", [".htm", ".html", ".mht"].indexOf(p) > -1) {
                            n = "xlx-icon-type-link";
                            break
                        }
                        if ("docx" === p) {
                            n = "xlx-icon-type-word";
                            break
                        }
                        if ("xlsx" === p) {
                            n = "xlx-icon-type-xls";
                            break
                        }
                        if ("pptx" === p) {
                            n = "xlx-icon-type-ppt";
                            break
                        }
                        break
                    }
                    if (d.indexOf(p) > -1) {
                        n = "xlx-icon-type-music";
                        break
                    }
                    if (c.indexOf(p) > -1) {
                        n = "xlx-icon-type-pic";
                        break
                    }
                    if (u.indexOf(p) > -1) {
                        n = "xlx-icon-type-rar";
                        break
                    }
                    if (f.indexOf(p) > -1) {
                        n = "xlx-icon-type-bt-link";
                        break
                    }
                } while (0);
                return n
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Video = 1] = "Video", e[e.Software = 2] = "Software", e[e.Doc = 3] = "Doc", e[e.Music = 4] = "Music", e[e.Pic = 5] = "Pic", e[e.Zip = 6] = "Zip", e[e.Bt = 7] = "Bt"
            }(t = e.FileExtType || (e.FileExtType = {})), e.getTaskFileType = function (e, n) {
                let o = t.Unkown;
                return void 0 === n && void 0 !== e && (n = i.extname(e)), null !== n && void 0 !== n && n.length >= 2 && (n = n.toLowerCase(), n += ";"), void 0 === n || "" === n || n.length < 3 ? o = t.Unkown : a.indexOf(n) > -1 ? o = t.Video : s.indexOf(n) > -1 ? o = t.Software : l.indexOf(n) > -1 ? o = t.Doc : d.indexOf(n) > -1 ? o = t.Music : c.indexOf(n) > -1 ? o = t.Pic : u.indexOf(n) > -1 ? o = t.Zip : f.indexOf(n) > -1 && (o = t.Bt), n.length > 1 && ".z" === n.slice(0, 2) && /[0-9]+/.test(n.substring(2)) && (o = t.Zip), o
            }, e.getGroupFileType = n, e.getDefaultGroupPrefix = function (e) {
                let i = "任务组";
                do {
                    if (void 0 === e || null === e || 0 === e.length) break;
                    let o = [];
                    for (let e = 0; e < 7; e++) o[e] = 0;
                    for (let t of e) {
                        let e = n(t);
                        o[e] = o[e] + 1
                    }
                    let r = t.Unkown;
                    for (let e = 1; e < o.length; e++) o[e] > o[r] && (r = e);
                    r === t.Video ? i = "视频任务组" : r === t.Software ? i = "程序任务组" : r === t.Music ? i = "音乐任务组" : r === t.Pic ? i = "图片任务组" : r === t.Doc ? i = "文档任务组" : r === t.Zip && (i = "压缩包任务组")
                } while (0);
                return i
            }, e.compareVersion = function (e, t) {
                let n = -2;
                do {
                    if (null === e || void 0 === e || "" === e || null === t || void 0 === t || "" === t) break;
                    let i = 0, o = 0, r = 0, a = 0, s = 0, l = 0, d = 0, c = 0, u = e.split(/\./);
                    if (null === u || void 0 === u || u.length < 3) break;
                    if (i = Number(u[0]), o = Number(u[1]), r = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (a = Number(u[3])), null === (u = t.split(/\./)) || void 0 === u || u.length < 3) break;
                    if (s = Number(u[0]), l = Number(u[1]), d = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (c = Number(u[3])), s > i) {
                        n = 1;
                        break
                    }
                    if (s < i) {
                        n = -1;
                        break
                    }
                    if (l > o) {
                        n = 1;
                        break
                    }
                    if (l < o) {
                        n = -1;
                        break
                    }
                    if (d > r) {
                        n = 1;
                        break
                    }
                    if (d < r) {
                        n = -1;
                        break
                    }
                    if (0 !== a) {
                        if (c > a) {
                            n = 1;
                            break
                        }
                        if (c < a) {
                            n = -1;
                            break
                        }
                    }
                    n = 0
                } while (0);
                return n
            }
        }(t.TaskUtilHelper || (t.TaskUtilHelper = {}))
    }, 59: function (e, t) {
        e.exports = require("events")
    }, 6: function (e, t) {
        e.exports = require("util")
    }, 609: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(30), o = n(152), r = n(153), a = n(1017);
        i.default.use(o.default);
        const s = new o.default.Store({modules: {Suspension: a.default}, strict: !1});
        t.connector = new r.default(s)
    }, 610: function (e, t, n) {
        "use strict";
        var i = n(1278);
        n.n(i).a
    }, 649: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {on: {mouseleave: this.leave}}, [this.showFloatPanel ? t("float-panel-container", {on: {"show-float-panel": this.showOrHideFloatPanel}}) : this._e()], 1)
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 680: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xlx-suspension"}, [n("div", {staticClass: "xlx-suspension-list"}, [n("div", {staticClass: "xlx-suspension-list__header"}, [n("h2", [e._v("\n        正在下载（"), n("span", [e._v(e._s(e.taskIdLists.length))]), e._v("）\n      ")])]), e._v(" "), n("div", {staticClass: "xlx-suspension-list__body"}, [n("ul", {style: e.haveDownloadTaskStyle}, e._l(e.taskIdLists, function (t) {
                return n("task-item-container", {
                    key: t, attrs: {taskId: t}, nativeOn: {
                        dblclick: function (n) {
                            e.dbclickItem(t)
                        }
                    }
                })
            })), e._v(" "), n("div", {
                staticClass: "xlx-suspension-list__empty",
                style: e.isHaveDownloadTaskStyle
            }, [n("p", [e._v("暂无下载任务")])])]), e._v(" "), n("div", {staticClass: "xlx-suspension-list__footer"}, [n("a", {
                staticClass: "td-button td-button--secondary",
                attrs: {href: "javascript:;"},
                on: {click: e.onClickShowFinishTask}
            }, [e._v("查看已完成")])])])])
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 693: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("li", {staticClass: "xlx-suspension-list__item"}, [n("span", {
                staticClass: "xlx-suspension-list__background",
                style: e.getTaskProgress
            }), e._v(" "), n("i", {
                staticClass: "xlx-icon-type",
                class: e.getTaskIcon
            }), e._v(" "), n("p", {staticClass: "xlx-suspension-list__name"}, [e._v(e._s(e.taskName))]), e._v(" "), n("p", {staticClass: "xlx-suspension-list__status"}, [e._v(e._s(e.stateName))])])
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 7: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return require(e)
        }
    }, 70: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(86), o = n(80);
        !function (e) {
            e.getWindowPreference = function (e = !1) {
                let t = o.default(), n = {};
                return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
            }
        }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
    }, 71: function (e, t, n) {
        (function (e) {
            var n = 200, i = "__lodash_hash_undefined__", o = 800, r = 16, a = 9007199254740991,
                s = "[object Arguments]", l = "[object AsyncFunction]", d = "[object Function]",
                c = "[object GeneratorFunction]", u = "[object Null]", f = "[object Object]", p = "[object Proxy]",
                h = "[object Undefined]", g = /^\[object .+?Constructor\]$/, m = /^(?:0|[1-9]\d*)$/, S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[s] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object Boolean]"] = S["[object DataView]"] = S["[object Date]"] = S["[object Error]"] = S[d] = S["[object Map]"] = S["[object Number]"] = S[f] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object WeakMap]"] = !1;
            var v = "object" == typeof global && global && global.Object === Object && global,
                _ = "object" == typeof self && self && self.Object === Object && self,
                C = v || _ || Function("return this")(), T = "object" == typeof t && t && !t.nodeType && t,
                w = T && "object" == typeof e && e && !e.nodeType && e, k = w && w.exports === T, y = k && v.process,
                b = function () {
                    try {
                        return y && y.binding && y.binding("util")
                    } catch (e) {
                    }
                }(), P = b && b.isTypedArray;

            function M(e, t) {
                return "__proto__" == t ? void 0 : e[t]
            }

            var E, R, N, D = Array.prototype, I = Function.prototype, F = Object.prototype, O = C["__core-js_shared__"],
                W = I.toString, x = F.hasOwnProperty,
                A = (E = /[^.]+$/.exec(O && O.keys && O.keys.IE_PROTO || "")) ? "Symbol(src)_1." + E : "",
                L = F.toString, B = W.call(Object),
                U = RegExp("^" + W.call(x).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                H = k ? C.Buffer : void 0, j = C.Symbol, G = C.Uint8Array, K = H ? H.allocUnsafe : void 0,
                V = (R = Object.getPrototypeOf, N = Object, function (e) {
                    return R(N(e))
                }), z = Object.create, $ = F.propertyIsEnumerable, X = D.splice, Y = j ? j.toStringTag : void 0,
                J = function () {
                    try {
                        var e = Te(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {
                    }
                }(), q = H ? H.isBuffer : void 0, Z = Math.max, Q = Date.now, ee = Te(C, "Map"),
                te = Te(Object, "create"), ne = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!Ie(t)) return {};
                        if (z) return z(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();

            function ie(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function oe(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function re(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ae(e) {
                var t = this.__data__ = new oe(e);
                this.size = t.size
            }

            function se(e, t) {
                var n = Me(e), i = !n && Pe(e), o = !n && !i && Re(e), r = !n && !i && !o && Oe(e),
                    a = n || i || o || r, s = a ? function (e, t) {
                        for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                        return i
                    }(e.length, String) : [], l = s.length;
                for (var d in e) !t && !x.call(e, d) || a && ("length" == d || o && ("offset" == d || "parent" == d) || r && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || we(d, l)) || s.push(d);
                return s
            }

            function le(e, t, n) {
                (void 0 === n || be(e[t], n)) && (void 0 !== n || t in e) || ue(e, t, n)
            }

            function de(e, t, n) {
                var i = e[t];
                x.call(e, t) && be(i, n) && (void 0 !== n || t in e) || ue(e, t, n)
            }

            function ce(e, t) {
                for (var n = e.length; n--;) if (be(e[n][0], t)) return n;
                return -1
            }

            function ue(e, t, n) {
                "__proto__" == t && J ? J(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
            }

            ie.prototype.clear = function () {
                this.__data__ = te ? te(null) : {}, this.size = 0
            }, ie.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ie.prototype.get = function (e) {
                var t = this.__data__;
                if (te) {
                    var n = t[e];
                    return n === i ? void 0 : n
                }
                return x.call(t, e) ? t[e] : void 0
            }, ie.prototype.has = function (e) {
                var t = this.__data__;
                return te ? void 0 !== t[e] : x.call(t, e)
            }, ie.prototype.set = function (e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = te && void 0 === t ? i : t, this
            }, oe.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, oe.prototype.delete = function (e) {
                var t = this.__data__, n = ce(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : X.call(t, n, 1), --this.size, 0))
            }, oe.prototype.get = function (e) {
                var t = this.__data__, n = ce(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, oe.prototype.has = function (e) {
                return ce(this.__data__, e) > -1
            }, oe.prototype.set = function (e, t) {
                var n = this.__data__, i = ce(n, e);
                return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
            }, re.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new ie, map: new (ee || oe), string: new ie}
            }, re.prototype.delete = function (e) {
                var t = Ce(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, re.prototype.get = function (e) {
                return Ce(this, e).get(e)
            }, re.prototype.has = function (e) {
                return Ce(this, e).has(e)
            }, re.prototype.set = function (e, t) {
                var n = Ce(this, e), i = n.size;
                return n.set(e, t), this.size += n.size == i ? 0 : 1, this
            }, ae.prototype.clear = function () {
                this.__data__ = new oe, this.size = 0
            }, ae.prototype.delete = function (e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n
            }, ae.prototype.get = function (e) {
                return this.__data__.get(e)
            }, ae.prototype.has = function (e) {
                return this.__data__.has(e)
            }, ae.prototype.set = function (e, t) {
                var i = this.__data__;
                if (i instanceof oe) {
                    var o = i.__data__;
                    if (!ee || o.length < n - 1) return o.push([e, t]), this.size = ++i.size, this;
                    i = this.__data__ = new re(o)
                }
                return i.set(e, t), this.size = i.size, this
            };
            var fe, pe = function (e, t, n) {
                for (var i = -1, o = Object(e), r = n(e), a = r.length; a--;) {
                    var s = r[fe ? a : ++i];
                    if (!1 === t(o[s], s, o)) break
                }
                return e
            };

            function he(e) {
                return null == e ? void 0 === e ? h : u : Y && Y in Object(e) ? function (e) {
                    var t = x.call(e, Y), n = e[Y];
                    try {
                        e[Y] = void 0;
                        var i = !0
                    } catch (e) {
                    }
                    var o = L.call(e);
                    i && (t ? e[Y] = n : delete e[Y]);
                    return o
                }(e) : function (e) {
                    return L.call(e)
                }(e)
            }

            function ge(e) {
                return Fe(e) && he(e) == s
            }

            function me(e) {
                return !(!Ie(e) || A && A in e) && (Ne(e) ? U : g).test(function (e) {
                    if (null != e) {
                        try {
                            return W.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }(e))
            }

            function Se(e) {
                if (!Ie(e)) return function (e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = ke(e), n = [];
                for (var i in e) ("constructor" != i || !t && x.call(e, i)) && n.push(i);
                return n
            }

            function ve(e, t, n, i, o) {
                e !== t && pe(t, function (r, a) {
                    if (Ie(r)) o || (o = new ae), function (e, t, n, i, o, r, a) {
                        var s = M(e, n), l = M(t, n), d = a.get(l);
                        if (d) return void le(e, n, d);
                        var c = r ? r(s, l, n + "", e, t, a) : void 0, u = void 0 === c;
                        if (u) {
                            var p = Me(l), h = !p && Re(l), g = !p && !h && Oe(l);
                            c = l, p || h || g ? Me(s) ? c = s : Fe(C = s) && Ee(C) ? c = function (e, t) {
                                var n = -1, i = e.length;
                                t || (t = Array(i));
                                for (; ++n < i;) t[n] = e[n];
                                return t
                            }(s) : h ? (u = !1, c = function (e, t) {
                                if (t) return e.slice();
                                var n = e.length, i = K ? K(n) : new e.constructor(n);
                                return e.copy(i), i
                            }(l, !0)) : g ? (u = !1, m = l, S = !0 ? (v = m.buffer, _ = new v.constructor(v.byteLength), new G(_).set(new G(v)), _) : m.buffer, c = new m.constructor(S, m.byteOffset, m.length)) : c = [] : function (e) {
                                if (!Fe(e) || he(e) != f) return !1;
                                var t = V(e);
                                if (null === t) return !0;
                                var n = x.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && W.call(n) == B
                            }(l) || Pe(l) ? (c = s, Pe(s) ? c = function (e) {
                                return function (e, t, n, i) {
                                    var o = !n;
                                    n || (n = {});
                                    var r = -1, a = t.length;
                                    for (; ++r < a;) {
                                        var s = t[r], l = i ? i(n[s], e[s], s, n, e) : void 0;
                                        void 0 === l && (l = e[s]), o ? ue(n, s, l) : de(n, s, l)
                                    }
                                    return n
                                }(e, We(e))
                            }(s) : (!Ie(s) || i && Ne(s)) && (c = function (e) {
                                return "function" != typeof e.constructor || ke(e) ? {} : ne(V(e))
                            }(l))) : u = !1
                        }
                        var m, S, v, _;
                        var C;
                        u && (a.set(l, c), o(c, l, i, r, a), a.delete(l));
                        le(e, n, c)
                    }(e, t, a, n, ve, i, o); else {
                        var s = i ? i(M(e, a), r, a + "", e, t, o) : void 0;
                        void 0 === s && (s = r), le(e, a, s)
                    }
                }, We)
            }

            function _e(e, t) {
                return ye(function (e, t, n) {
                    return t = Z(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var i = arguments, o = -1, r = Z(i.length - t, 0), a = Array(r); ++o < r;) a[o] = i[t + o];
                        o = -1;
                        for (var s = Array(t + 1); ++o < t;) s[o] = i[o];
                        return s[t] = n(a), function (e, t, n) {
                            switch (n.length) {
                                case 0:
                                    return e.call(t);
                                case 1:
                                    return e.call(t, n[0]);
                                case 2:
                                    return e.call(t, n[0], n[1]);
                                case 3:
                                    return e.call(t, n[0], n[1], n[2])
                            }
                            return e.apply(t, n)
                        }(e, this, s)
                    }
                }(e, t, Le), e + "")
            }

            function Ce(e, t) {
                var n, i, o = e.__data__;
                return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function Te(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return me(n) ? n : void 0
            }

            function we(e, t) {
                var n = typeof e;
                return !!(t = null == t ? a : t) && ("number" == n || "symbol" != n && m.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function ke(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || F)
            }

            var ye = function (e) {
                var t = 0, n = 0;
                return function () {
                    var i = Q(), a = r - (i - n);
                    if (n = i, a > 0) {
                        if (++t >= o) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }(J ? function (e, t) {
                return J(e, "toString", {
                    configurable: !0, enumerable: !1, value: (n = t, function () {
                        return n
                    }), writable: !0
                });
                var n
            } : Le);

            function be(e, t) {
                return e === t || e != e && t != t
            }

            var Pe = ge(function () {
                return arguments
            }()) ? ge : function (e) {
                return Fe(e) && x.call(e, "callee") && !$.call(e, "callee")
            }, Me = Array.isArray;

            function Ee(e) {
                return null != e && De(e.length) && !Ne(e)
            }

            var Re = q || function () {
                return !1
            };

            function Ne(e) {
                if (!Ie(e)) return !1;
                var t = he(e);
                return t == d || t == c || t == l || t == p
            }

            function De(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a
            }

            function Ie(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Fe(e) {
                return null != e && "object" == typeof e
            }

            var Oe = P ? function (e) {
                return function (t) {
                    return e(t)
                }
            }(P) : function (e) {
                return Fe(e) && De(e.length) && !!S[he(e)]
            };

            function We(e) {
                return Ee(e) ? se(e, !0) : Se(e)
            }

            var xe, Ae = (xe = function (e, t, n) {
                ve(e, t, n)
            }, _e(function (e, t) {
                var n = -1, i = t.length, o = i > 1 ? t[i - 1] : void 0, r = i > 2 ? t[2] : void 0;
                for (o = xe.length > 3 && "function" == typeof o ? (i--, o) : void 0, r && function (e, t, n) {
                    if (!Ie(n)) return !1;
                    var i = typeof t;
                    return !!("number" == i ? Ee(n) && we(t, n.length) : "string" == i && t in n) && be(n[t], e)
                }(t[0], t[1], r) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                    var a = t[n];
                    a && xe(e, a, n, o)
                }
                return e
            }));

            function Le(e) {
                return e
            }

            e.exports = Ae
        }).call(this, n(87)(e))
    }, 8: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n, i, o, r, a, s, l, d, c, u, f, p, h, g, m, S, v, _;
            !function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash"
            }(t = e.TaskError || (e.TaskError = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
            }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
            }(i = e.TaskStatus || (e.TaskStatus = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
            }(o = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
                e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
            }(r = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
            }(a = e.TaskType || (e.TaskType = {})), function (e) {
                e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
            }(s = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
                e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
            }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.CreateTime = 8] = "CreateTime", e[e.CompletionTime = 9] = "CompletionTime", e[e.DownloadingPeriod = 10] = "DownloadingPeriod", e[e.Progress = 11] = "Progress", e[e.RecycleTime = 12] = "RecycleTime", e[e.FileCreated = 13] = "FileCreated", e[e.Forbidden = 14] = "Forbidden", e[e.CategoryId = 15] = "CategoryId", e[e.UserRead = 16] = "UserRead", e[e.OpenOnComplete = 17] = "OpenOnComplete", e[e.GroupTaskId = 18] = "GroupTaskId", e[e.DownloadSubTask = 19] = "DownloadSubTask", e[e.NameType = 20] = "NameType", e[e.OwnerProduct = 21] = "OwnerProduct", e[e.FileIndex = 22] = "FileIndex", e[e.NumberEnd = 23] = "NumberEnd", e[e.BooleanStart = 24] = "BooleanStart", e[e.Destroyed = 25] = "Destroyed", e[e.Background = 26] = "Background", e[e.Moving = 27] = "Moving", e[e.BooleanEnd = 28] = "BooleanEnd", e[e.StringStart = 29] = "StringStart", e[e.TaskName = 30] = "TaskName", e[e.SavePath = 31] = "SavePath", e[e.RelativePath = 32] = "RelativePath", e[e.TaskUrl = 33] = "TaskUrl", e[e.RefUrl = 34] = "RefUrl", e[e.Cid = 35] = "Cid", e[e.Gcid = 36] = "Gcid", e[e.Cookie = 37] = "Cookie", e[e.ProductInfo = 38] = "ProductInfo", e[e.Origin = 39] = "Origin", e[e.Description = 40] = "Description", e[e.UserData = 41] = "UserData", e[e.StringEnd = 42] = "StringEnd", e[e.ObjectStart = 43] = "ObjectStart", e[e.ObjectEnd = 44] = "ObjectEnd", e[e.CategoryViewId = 45] = "CategoryViewId", e[e.TaskType = 46] = "TaskType", e[e.ErrorCode = 47] = "ErrorCode"
            }(d = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo"
            }(c = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(u = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(f = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
            }(p = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
                e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
            }(h = e.KeyType || (e.KeyType = {})), function (e) {
                e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
            }(g = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
                e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
            }(m = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
                e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
            }(S = e.KeyFilter || (e.KeyFilter = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
            }(v = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
            }(_ = e.TaskStopReason || (e.TaskStopReason = {}))
        }(t.DownloadKernel || (t.DownloadKernel = {}))
    }, 80: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(a, s)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(1).default.getLogger("GetSkinInfo");
        let a;
        (function () {
            return i(this, void 0, void 0, function* () {
                if ("renderer" === process.type) {
                    r.information("renderer process");
                    const e = yield Promise.resolve().then(() => n(14)), t = yield Promise.resolve().then(() => n(5));
                    e.default("GetSkinInfo").then(e => {
                        a = e, r.information("send OnChangeSkin", e)
                    }).catch(e => {
                        r.warning(e)
                    }), t.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                        a = e, r.information("send OnChangeSkin", e)
                    })
                } else "browser" === process.type && (r.information("main process"), o.ipcMain.on("OnChangeSkin", (e, t) => {
                    r.information("OnChangeSkin", t), a = t
                }))
            })
        })().catch(e => {
            r.information(e)
        }), t.default = function () {
            return a
        }
    }, 86: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            function t(e) {
                let t = e.toString(16).toUpperCase();
                return t.length < 2 && (t = "0" + t), t
            }

            function n(e, n, i, o) {
                return "0x" + t(o) + t(e) + t(n) + t(i)
            }

            e.rgbaStringToHexWith0xBegin = function (e) {
                if (void 0 !== e) {
                    let t = e.split(",");
                    return n(parseInt(t[0] || "0", 10), parseInt(t[1] || "0", 10), parseInt(t[2] || "0", 10), parseInt(t[3] || "255", 10))
                }
            }, e.colorNumberToHex = t, e.rgbaToHexWith0xBegin = n
        }(t.ColorUtilNS || (t.ColorUtilNS = {}))
    }, 87: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, 9: function (e, t) {
        e.exports = vendor_042b88873303a3c10349
    }
});
//# sourceMappingURL=renderer.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2019/03/17 */
/*! https://www.luochenzhimu.com */