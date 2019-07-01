/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2019/03/17 */
/*! https://www.luochenzhimu.com */
module.exports = function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    return i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 1030)
}([function (e, t, i) {
    "use strict";

    function n(e, t, i, n, r, o, s, a) {
        var l, c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t, c.staticRenderFns = i, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = "data-v-" + o), s ? (l = function (e) {
            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
        }, c._ssrRegister = l) : r && (l = a ? function () {
            r.call(this, this.$root.$options.shadowRoot)
        } : r), l) if (c.functional) {
            c._injectStyles = l;
            var u = c.render;
            c.render = function (e, t) {
                return l.call(t), u(e, t)
            }
        } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, l) : [l]
        }
        return {exports: e, options: c}
    }

    i.d(t, "a", function () {
        return n
    })
}, function (e, t, i) {
    e.exports = i(9)(120)
}, function (e, t) {
    e.exports = require("path")
}, function (e, t) {
    e.exports = require("electron")
}, function (e, t, i) {
    e.exports = i(9)(186)
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(6), r = i(18), o = i(19), s = i(26), a = i(27);
    !function (e) {
        let t;
        !function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.Success = 0] = "Success", e[e.FunctionNotExist = 1] = "FunctionNotExist", e[e.ParamaterError = 2] = "ParamaterError", e[e.CallFailed = 3] = "CallFailed"
        }(t = e.NativeCallErrorCode || (e.NativeCallErrorCode = {}));

        class i {
            constructor(e, t, i) {
                this.maxId = e, this.minId = t, this.invalidId = i
            }

            generateId() {
                return this.minId === this.maxId ? this.invalidId : this.minId++
            }

            isInvalidId(e) {
                return e === this.invalidId
            }
        }

        e.IdGenerator = i;
        const l = 0;
        e.idGenerator = new i(1e7, 1, l);

        class c {
            constructor() {
                this.jsCallbacks = new Map, this.eventJsCallbakcs = new Map, this.jsRegisterFunctions = new Map, this.targetCommunitorInfo = a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(s.CommonIPCBase.mainRendererContext), this.bindMsgListeners(), this.notifyNativeCallReady()
            }

            CallNativeFunction(t, ...i) {
                do {
                    if (n.isNullOrUndefined(t) || 0 === t.length) {
                        r.error("funcName is empty");
                        break
                    }
                    r.information("funcName = ", t), this.printArgs(i);
                    let s = l;
                    for (let t = 0; t < i.length; ++t) if (n.isFunction(i[t])) {
                        let n = e.idGenerator.generateId(), r = i[t];
                        this.jsCallbacks.set(n, r), t === i.length - 1 ? (s = n, i.pop()) : i[t] = n
                    }
                    a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: o.CommonIPCMessage.msgNCCallNativeFunction,
                        args: [t, s].concat(i)
                    })
                } while (0)
            }

            AttachNativeEvent(t, i) {
                let o = void 0;
                do {
                    if (n.isNullOrUndefined(t) || 0 === t.length) {
                        r.error("eventName is empty");
                        break
                    }
                    if (n.isNullOrUndefined(i)) {
                        r.error("callback is empty");
                        break
                    }
                    let s = e.idGenerator.generateId();
                    if (e.idGenerator.isInvalidId(s)) {
                        r.error("id error");
                        break
                    }
                    if (this.eventJsCallbakcs.has(t)) this.eventJsCallbakcs.get(t).set(s, i); else {
                        let e = new Map;
                        e.set(s, i), this.eventJsCallbakcs.set(t, e)
                    }
                    o = s
                } while (0);
                return o
            }

            DetachNativeEvent(e, t) {
                do {
                    if (n.isNullOrUndefined(e) || 0 === e.length) {
                        r.error("eventName is empty");
                        break
                    }
                    if (n.isNullOrUndefined(t)) {
                        r.error("callback is empty");
                        break
                    }
                    if (!this.eventJsCallbakcs.has(e)) {
                        r.error(`event: ${e} doesnot have listener`);
                        break
                    }
                    if (!this.eventJsCallbakcs.get(e).has(t)) {
                        r.error(`event: ${e} doesnot have the listener of id=${t}`);
                        break
                    }
                    this.eventJsCallbakcs.get(e).delete(t)
                } while (0)
            }

            CheckNativeFunction(t, i) {
                do {
                    if (n.isNullOrUndefined(t) || 0 === t.length) {
                        r.error("funcName is empty");
                        break
                    }
                    if (n.isNullOrUndefined(i)) {
                        r.error("callback is empty");
                        break
                    }
                    r.information("funcName = ", t);
                    let s = e.idGenerator.generateId();
                    this.jsCallbacks.set(s, i), a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: o.CommonIPCMessage.msgNCCheckNativeFunction,
                        args: [t, s]
                    })
                } while (0)
            }

            RegisterJSFunction(e, i) {
                let o = t.ParamaterError;
                do {
                    if (n.isNullOrUndefined(e) || 0 === e.length) {
                        r.error("funcName is empty");
                        break
                    }
                    if (n.isNullOrUndefined(i)) {
                        r.error("jsFunc is empty");
                        break
                    }
                    this.jsRegisterFunctions.set(e, i), o = t.Success
                } while (0);
                return o
            }

            bindMsgListeners() {
                a.CommonIPCRenderer.rendererCommunicator.onMessage(o.CommonIPCMessage.msgNCCallJsFunctionById, e => {
                    this.handleCallJsFunctionById(e.msg.args)
                }), a.CommonIPCRenderer.rendererCommunicator.onMessage(o.CommonIPCMessage.msgNCCallJsFunctionByName, e => {
                    this.handleCallJsFunctionByName(e.msg.args)
                }), a.CommonIPCRenderer.rendererCommunicator.onMessage(o.CommonIPCMessage.msgNCNativeFireEvent, e => {
                    this.handleNativeFireEvent(e.msg.args)
                })
            }

            handleCallJsFunctionById(t) {
                do {
                    let i = t[0];
                    if (!n.isNumber(i)) {
                        r.error(`id error id = ${i}`);
                        break
                    }
                    if (e.idGenerator.isInvalidId(i)) {
                        r.error(`id = ${i} invalid`);
                        break
                    }
                    if (!this.jsCallbacks.has(i)) {
                        r.error(`jsCallbacks[${i}] is null`);
                        break
                    }
                    t.splice(0, 1), this.jsCallbacks.get(i).apply(null, t)
                } while (0)
            }

            handleCallJsFunctionByName(e) {
                do {
                    let t = e[0];
                    if (!n.isString(t)) {
                        r.error(`funcName error funcName = ${t}`);
                        break
                    }
                    if (!this.jsRegisterFunctions.has(t)) {
                        r.error(`jsRegisterFunctions[${t}] is null`);
                        break
                    }
                    e.splice(0, 1), this.jsRegisterFunctions.get(t).apply(null, e)
                } while (0)
            }

            handleNativeFireEvent(e) {
                do {
                    let t = e[0];
                    if (!n.isString(t)) {
                        r.warning(`eventName error eventName = ${t}`);
                        break
                    }
                    if (!this.eventJsCallbakcs.has(t)) {
                        r.warning(`eventJsCallbakcs[${t}] is null`);
                        break
                    }
                    e.shift(), this.eventJsCallbakcs.get(t).forEach((t, i, o) => {
                        r.information(`value = ${t}, key = ${i}, map = ${o}`), n.isNullOrUndefined(t) || t.apply(null, e)
                    })
                } while (0)
            }

            notifyNativeCallReady() {
                a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                    name: o.CommonIPCMessage.msgNCNativeCallReady,
                    args: [a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfo()]
                })
            }

            printArgs(e) {
                for (let t in e) r.information(`index ${t} = `, e[t])
            }
        }

        e.NativeCallImpl = c, e.nativeCall = new c
    }(t.NativeCallModule || (t.NativeCallModule = {}))
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return require(e)
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t, i, n, r, o, s, a, l, c, u, d, h, f, p, v, m, g, _, y;
        !function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash"
        }(t = e.TaskError || (e.TaskError = {})), function (e) {
            e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
        }(i = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
        }(n = e.TaskStatus || (e.TaskStatus = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
        }(r = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
            e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
        }(o = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
        }(s = e.TaskType || (e.TaskType = {})), function (e) {
            e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
        }(a = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
            e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
        }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.CreateTime = 8] = "CreateTime", e[e.CompletionTime = 9] = "CompletionTime", e[e.DownloadingPeriod = 10] = "DownloadingPeriod", e[e.Progress = 11] = "Progress", e[e.RecycleTime = 12] = "RecycleTime", e[e.FileCreated = 13] = "FileCreated", e[e.Forbidden = 14] = "Forbidden", e[e.CategoryId = 15] = "CategoryId", e[e.UserRead = 16] = "UserRead", e[e.OpenOnComplete = 17] = "OpenOnComplete", e[e.GroupTaskId = 18] = "GroupTaskId", e[e.DownloadSubTask = 19] = "DownloadSubTask", e[e.NameType = 20] = "NameType", e[e.OwnerProduct = 21] = "OwnerProduct", e[e.FileIndex = 22] = "FileIndex", e[e.NumberEnd = 23] = "NumberEnd", e[e.BooleanStart = 24] = "BooleanStart", e[e.Destroyed = 25] = "Destroyed", e[e.Background = 26] = "Background", e[e.Moving = 27] = "Moving", e[e.BooleanEnd = 28] = "BooleanEnd", e[e.StringStart = 29] = "StringStart", e[e.TaskName = 30] = "TaskName", e[e.SavePath = 31] = "SavePath", e[e.RelativePath = 32] = "RelativePath", e[e.TaskUrl = 33] = "TaskUrl", e[e.RefUrl = 34] = "RefUrl", e[e.Cid = 35] = "Cid", e[e.Gcid = 36] = "Gcid", e[e.Cookie = 37] = "Cookie", e[e.ProductInfo = 38] = "ProductInfo", e[e.Origin = 39] = "Origin", e[e.Description = 40] = "Description", e[e.UserData = 41] = "UserData", e[e.StringEnd = 42] = "StringEnd", e[e.ObjectStart = 43] = "ObjectStart", e[e.ObjectEnd = 44] = "ObjectEnd", e[e.CategoryViewId = 45] = "CategoryViewId", e[e.TaskType = 46] = "TaskType", e[e.ErrorCode = 47] = "ErrorCode"
        }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo"
        }(u = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(d = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(h = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
        }(f = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(p = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(v = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
        }(m = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(g = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
        }(_ = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
        }(y = e.TaskStopReason || (e.TaskStopReason = {}))
    }(t.DownloadKernel || (t.DownloadKernel = {}))
}, function (e, t) {
    e.exports = vendor_042b88873303a3c10349
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(17), o = i(2), s = i(6).promisify, a = i(1).default.getLogger("Thunder.base.fs-utilities");
    !function (e) {
        function t(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.access);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.information(e)
                    }
                }
                return t
            })
        }

        function l(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.mkdir);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function c(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.rmdir);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function u(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.unlink);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function d(e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.readdir);
                    try {
                        t = yield i(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function h(e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.lstat);
                    try {
                        t = yield i(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function f(e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e && void 0 !== t) {
                    let n = o.join(e, t), r = yield h(n);
                    i = null !== r && r.isDirectory() ? yield p(n) : yield u(n)
                }
                return i
            })
        }

        function p(e) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e) {
                    if (yield t(e)) {
                        i = !0;
                        let t = yield d(e);
                        for (let n = 0; n < t.length; n++) i = (yield f(e, t[n])) && i;
                        (i || 0 === t.length) && (i = (yield c(e)) && i)
                    }
                }
                return i
            })
        }

        function v(e) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                return a.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? i = !0 : o.dirname(e) === e ? i = !1 : (yield v(o.dirname(e))) && (i = yield l(e))), i
            })
        }

        function m(e, i) {
            return n(this, void 0, void 0, function* () {
                let n;
                if (e.toLowerCase() !== i.toLowerCase() && (yield t(e))) {
                    let t = r.createReadStream(e), o = r.createWriteStream(i);
                    n = new Promise(e => {
                        t.pipe(o).on("finish", () => {
                            e(!0)
                        })
                    })
                } else n = new Promise(e => {
                    e(!1)
                });
                return n
            })
        }

        e.readFileAW = function (e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.readFile);
                    try {
                        t = yield i(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }, e.writeFileAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e && null !== t) {
                    const n = s(r.writeFile);
                    try {
                        yield n(e, t), i = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return i
            })
        }, e.existsAW = t, e.mkdirAW = l, e.rmdirAW = c, e.unlinkAW = u, e.readdirAW = d, e.lstatAW = h, e.rmdirsAW = p, e.mkdirsAW = v, e.renameAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                if (void 0 !== e && void 0 !== t) {
                    const i = s(r.rename);
                    try {
                        yield i(e, t)
                    } catch (e) {
                        a.warning(e)
                    }
                }
            })
        }, e.copyFileAW = m, e.copyDirsAW = function e(i, r) {
            return n(this, void 0, void 0, function* () {
                let n = !1, s = yield h(i);
                if (s.isDirectory()) {
                    n = yield v(r);
                    let a = yield d(i);
                    for (let l = 0; l < a.length; l++) {
                        let c = o.join(i, a[l]), u = o.join(r, a[l]);
                        (n = yield t(c)) && (n = (s = yield h(c)).isDirectory() ? yield e(c, u) : yield m(c, u))
                    }
                }
                return n
            })
        }, e.mkdtempAW = function () {
            return n(this, void 0, void 0, function* () {
                let e = !1;
                const t = s(r.mkdtemp), n = (yield Promise.resolve().then(() => i(16))).tmpdir();
                try {
                    e = yield t(`${n}${o.sep}`)
                } catch (e) {
                    a.warning(e)
                }
                return e
            })
        }
    }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = i(60), r = i(107), o = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === o.call(e)
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === o.call(e)
    }

    function c(e, t) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), s(e)) for (var i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e); else for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
    }

    e.exports = {
        isArray: s, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        }, isBuffer: r, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: a, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === o.call(e)
        }, isFile: function (e) {
            return "[object File]" === o.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        }, isFunction: l, isStream: function (e) {
            return a(e) && l(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: c, merge: function e() {
            var t = {};

            function i(i, n) {
                "object" == typeof t[n] && "object" == typeof i ? t[n] = e(t[n], i) : t[n] = i
            }

            for (var n = 0, r = arguments.length; n < r; n++) c(arguments[n], i);
            return t
        }, extend: function (e, t, i) {
            return c(t, function (t, r) {
                e[r] = i && "function" == typeof t ? n(t, i) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(2), s = i(1), a = i(10), l = i(20), c = s.default.getLogger("Thunder.Util"),
        u = "Thunder Network\\Thunder7.9\\";

    function d(e) {
        let t = e;
        return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
    }

    !function (e) {
        function t() {
            let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), i = 0;
            for (let n = 0; n < t.length; n++) {
                let r = l.ThunderHelper.getDriveInfo(t[n]);
                3 === r.type && i < r.freeBytes && t[n] !== e && (i = r.freeBytes, e = t[n])
            }
            return e.substring(0, 1) + ":\\迅雷下载"
        }

        e.formatSize = function (e, t) {
            t = t || 2;
            let i = "0B";
            if ("number" == typeof e && e > 0) {
                let n = ["B", "KB", "MB", "GB", "TB"], r = 0, o = e;
                for (; o >= 1e3 && !(r >= 4);) o /= 1024, r += 1;
                i = -1 === String(o).indexOf(".") ? o + n[r] : o.toFixed(t) + n[r]
            }
            return i
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
            let t = JSON.stringify(e), i = null;
            try {
                i = JSON.parse(t)
            } catch (e) {
                c.warning(e)
            }
            return i
        }, e.swap = function (e, t, i) {
            do {
                if (t < 0 || t >= e.length) break;
                if (i < 0 || i >= e.length) break;
                if (t === i) break;
                e[t] = e.splice(i, 1, e[t])[0]
            } while (0);
            return e
        }, e.compareNocase = function (e, t) {
            let i = !1;
            do {
                if (void 0 === e && void 0 === t) {
                    i = !0;
                    break
                }
                if (void 0 === e || void 0 === t) break;
                if ("string" != typeof e || "string" != typeof t) break;
                i = e.toLowerCase() === t.toLowerCase()
            } while (0);
            return i
        }, e.parseCommandLine = function (e) {
            let t = 0, i = "", n = !1, r = [], o = e.length;
            for (let s = 0; s < o; s++) {
                let a = e[s];
                if ('"' !== a && "'" !== a || ("" === i ? (n = !0, i = a) : i === a && (n = !1, i = "")), " " !== a || n || s === o - 1) {
                    if (s === o - 1) {
                        let i = e.substring(t);
                        "" !== i.trim() && r.push(d(i))
                    }
                } else {
                    let i = e.substring(t, s);
                    "" !== i.trim() && r.push(d(i)), t = s + 1
                }
            }
            return r
        }, e.getThunderTempPath = function (e, t) {
            return n(this, void 0, void 0, function* () {
                const n = yield Promise.resolve().then(() => i(16));
                let r = o.join(n.tmpdir(), u);
                return t && (r = o.join(r, t)), void 0 !== e && e && (yield a.FileSystemAWNS.mkdirsAW(r)), r
            })
        }, e.setQueryString = function (e, t) {
            return Object.keys(t).forEach((i, n) => {
                e += 0 === n ? "?" : "&", e += `${i}=${t[i]}`
            }), e
        }, e.getQueryString = function (e, t) {
            return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
        }, e.isClipboardTextFormatAvailable = function () {
            let e = !1, t = r.clipboard.availableFormats();
            for (let i of t) if ("text/plain" === i) {
                e = !0;
                break
            }
            return e
        }, e.keywordsHighLight = function (e, t, i) {
            if (!e) return "";
            if (!t) return e;
            if (0 === e.length) return e;
            if (0 === t.length) return e;
            let n = /\\/, r = t.split(" ");
            if (0 === (r = r.filter(e => e.trim().length > 0)).length) return e;
            for (let t = 0; t < r.length; t++) if (r[t].search(n) > 0) return e;
            i = void 0 === i || null === i ? "#FF0000" : i;
            let o = "", s = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], a = "", l = "|";
            for (let e = 0; e < r.length; e++) {
                for (let t = 0; t < s.length; t++) {
                    let i = new RegExp(s[t], "g");
                    r[e] = r[e].replace(i, s[t])
                }
                e === r.length - 1 && (l = ""), a = a.concat(r[e], l)
            }
            let c = new RegExp(a, "gi");
            return o = e.replace(c, e => '<span style= "color:' + i + '">' + e + "</span>")
        }, e.isDef = function (e) {
            return void 0 !== e && null !== e
        }, e.isUndef = function (e) {
            return void 0 === e || null === e
        }, e.setStyle = function (e, t) {
            Object.entries(t).forEach(([t, i]) => {
                e.style[t] = i
            })
        }, e.setCSSProperties = function (e, t) {
            Object.entries(t).forEach(([t, i]) => {
                e.style.setProperty(t, i)
            })
        }, e.versionCompare = function (e, t) {
            let i = e.split("."), n = t.split("."), r = 0;
            for (let e = 0; e < i.length; e++) {
                if (Number(i[e]) - Number(n[e]) > 0) {
                    r = 1;
                    break
                }
                if (Number(i[e]) - Number(n[e]) < 0) {
                    r = -1;
                    break
                }
            }
            return r
        }, e.throttle = function (e, t) {
            let i, n = 0;
            return (...r) => {
                const o = Date.now();
                clearTimeout(i), o - n > t ? (e(...r), n = o) : i = setTimeout(() => {
                    e(...r), n = o
                }, t)
            }
        }
    }(t.ThunderUtil || (t.ThunderUtil = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(2), r = i(7), o = i(1).default.getLogger("XLStat");
    let s = r.default(n.join(__rootDir, "../bin/ThunderHelper.node"));

    function a(e = "") {
        let t;
        if ("string" == typeof e) t = e; else if (l(e) && "object" == typeof e) {
            let i = [];
            for (let t in e) l(e[t]) && i.push(t + "=" + encodeURIComponent(e[t]));
            t = i.join(",")
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
                s.trackClick(e, 0)
            } while (0)
        }

        e.trackEvent = function (e, t = "", i = "", n = 0, r = 0, l = 0, c = 0, u = "", d = 0) {
            let h = 0;
            do {
                if (void 0 === e) {
                    h = 1;
                    break
                }
                let f = a(u);
                h = s.trackEvent(e, t, i, n, r, l, c, f, d), o.information(e, t, i, n, r, l, c, f, d)
            } while (0);
            return h
        }, e.trackClick = t, e.trackShow = function (e) {
            t(e)
        }, e.setUserID = function (e = 0, t = 0) {
            s.setUserID(e, t)
        }
    }(t.XLStatNS || (t.XLStatNS = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(6), r = i(1), o = i(5), s = r.default.getLogger("Thunder.PromiseNativeCall"), a = n.promisify;
    t.default = function (...e) {
        return s.verbose(...e), a(o.NativeCallModule.nativeCall.CallNativeFunction.bind(o.NativeCallModule.nativeCall))(...e)
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelMRSearchWindowVisibleChange = "MR_SEARCH_WINDOW_VISIBLE_CHANGE", e.channelRMShowSearchWindow = "RM_SEARCH_WINDOW_SHOW", e.channelRMHideSearchWindow = "RM_SEARCH_WINDOW_HIDE", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE"
    }(t.ThunderChannelList || (t.ThunderChannelList = {}))
}, function (e, t) {
    e.exports = require("os")
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, i) {
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
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
    }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(2), r = i(44), o = i(8), s = i(7).default(n.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        e.getDriveInfo = function (e) {
            return s.getDriveInfo(e)
        }, e.getFreePartitionSpace = function (e) {
            return s.getFreePartitionSpace(e)
        }, e.getLogicalDriveStrings = function () {
            return s.getLogicalDriveStrings()
        }, e.getPartitionSpace = function (e) {
            return s.getPartitionSpace(e)
        }, e.getSystemTempPath = function () {
            return s.getSystemTempPath()
        }, e.getTaskTypeFromUrl = function (e) {
            let t = s.getTaskTypeFromUrl(e);
            if (t === o.DownloadKernel.TaskType.Unkown && function (e) {
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
                let i = /:\/\/\[(.+?)\].*/.exec(e);
                i || (i = /^ftp:\/\/.*?\[(.+?)\].*/.exec(e)), i && i[1] && r.isIPv6(i[1]) && (t = o.DownloadKernel.TaskType.P2sp)
            }
            return t
        }, e.extractIcon = function (e, t) {
            return s.extractIcon(e, t)
        }, e.isWindow7 = function () {
            return 1 === s.isWin7()
        }, e.compareStr = function (e, t) {
            return s.compareStr(e, t)
        }, e.getTickCount = function () {
            return s.getTickCount()
        }
    }(t.ThunderHelper || (t.ThunderHelper = {}))
}, function (e, t, i) {
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
}, function (e, t, i) {
    "use strict";
    var n = i(11), r = i(61), o = i(63), s = i(47), a = i(64), l = i(65).http, c = i(65).https, u = i(31), d = i(55),
        h = i(118), f = i(37), p = i(62);
    e.exports = function (e) {
        return new Promise(function (t, i) {
            var v, m = e.data, g = e.headers;
            if (g["User-Agent"] || g["user-agent"] || (g["User-Agent"] = "axios/" + h.version), m && !n.isStream(m)) {
                if (Buffer.isBuffer(m)) ; else if (n.isArrayBuffer(m)) m = new Buffer(new Uint8Array(m)); else {
                    if (!n.isString(m)) return i(f("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    m = new Buffer(m, "utf-8")
                }
                g["Content-Length"] = m.length
            }
            var _ = void 0;
            e.auth && (_ = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var y = u.parse(e.url), b = y.protocol || "http:";
            if (!_ && y.auth) {
                var C = y.auth.split(":");
                _ = (C[0] || "") + ":" + (C[1] || "")
            }
            _ && delete g.Authorization;
            var w = "https:" === b, x = w ? e.httpsAgent : e.httpAgent, S = {
                path: o(y.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                method: e.method,
                headers: g,
                agent: x,
                auth: _
            };
            e.socketPath ? S.socketPath = e.socketPath : (S.hostname = y.hostname, S.port = y.port);
            var k, P = e.proxy;
            if (!P && !1 !== P) {
                var T = b.slice(0, -1) + "_proxy", E = process.env[T] || process.env[T.toUpperCase()];
                if (E) {
                    var N = u.parse(E);
                    if (P = {host: N.hostname, port: N.port}, N.auth) {
                        var I = N.auth.split(":");
                        P.auth = {username: I[0], password: I[1]}
                    }
                }
            }
            if (P && (S.hostname = P.host, S.host = P.host, S.headers.host = y.hostname + (y.port ? ":" + y.port : ""), S.port = P.port, S.path = b + "//" + y.hostname + (y.port ? ":" + y.port : "") + S.path, P.auth)) {
                var R = new Buffer(P.auth.username + ":" + P.auth.password, "utf8").toString("base64");
                S.headers["Proxy-Authorization"] = "Basic " + R
            }
            e.transport ? k = e.transport : 0 === e.maxRedirects ? k = w ? a : s : (e.maxRedirects && (S.maxRedirects = e.maxRedirects), k = w ? c : l), e.maxContentLength && e.maxContentLength > -1 && (S.maxBodyLength = e.maxContentLength);
            var D = k.request(S, function (n) {
                if (!D.aborted) {
                    clearTimeout(v), v = null;
                    var o = n;
                    switch (n.headers["content-encoding"]) {
                        case"gzip":
                        case"compress":
                        case"deflate":
                            o = o.pipe(d.createUnzip()), delete n.headers["content-encoding"]
                    }
                    var s = n.req || D, a = {
                        status: n.statusCode,
                        statusText: n.statusMessage,
                        headers: n.headers,
                        config: e,
                        request: s
                    };
                    if ("stream" === e.responseType) a.data = o, r(t, i, a); else {
                        var l = [];
                        o.on("data", function (t) {
                            l.push(t), e.maxContentLength > -1 && Buffer.concat(l).length > e.maxContentLength && i(f("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, s))
                        }), o.on("error", function (t) {
                            D.aborted || i(p(t, e, null, s))
                        }), o.on("end", function () {
                            var n = Buffer.concat(l);
                            "arraybuffer" !== e.responseType && (n = n.toString("utf8")), a.data = n, r(t, i, a)
                        })
                    }
                }
            });
            D.on("error", function (t) {
                D.aborted || i(p(t, e, null, D))
            }), e.timeout && !v && (v = setTimeout(function () {
                D.abort(), i(f("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", D))
            }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function (e) {
                D.aborted || (D.abort(), i(e))
            }), n.isStream(m) ? m.pipe(D) : D.end(m)
        })
    }
}, , function (e, t, i) {
    e.exports = i(106)
}, , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(3), r = i(6), o = i(18), s = i(19);
    !function (e) {
        e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

        class t {
            constructor() {
                this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [s.CommonIPCMessage.msgIPCRendererConnect, s.CommonIPCMessage.msgIPCRendererDisconnect]
            }

            onMessage(e, t) {
                do {
                    if (!r.isString(e) || 0 === e.length) {
                        o.error("msgName is null");
                        break
                    }
                    if (r.isNullOrUndefined(t)) {
                        o.error("listener is null");
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
                n.ipcMain.on(s.CommonIPCMessage.msgIPCSendToMain, (e, t) => {
                    let i = void 0;
                    do {
                        if (r.isNullOrUndefined(t)) {
                            o.error("msgInfo is empty");
                            break
                        }
                        if (!this.isConnected) {
                            o.warning("hasnot been connected yet");
                            break
                        }
                        let n = t.msg.name;
                        if (this.isIPCModuleIntervalMsg(n)) {
                            o.information(`IPC module interval msg : ${n}`);
                            let r = this.handleIPCModuleIntervalMsg(e.sender, t);
                            if (i = r[1], !r[0]) break;
                            o.information("need to dispatch msg:" + n)
                        }
                        r.isNullOrUndefined(i) ? i = this.NotifyListener(t) : this.NotifyListener(t)
                    } while (0);
                    r.isNullOrUndefined(i) || (e.returnValue = i)
                })
            }

            ListenSendToRendererMsg(e) {
                (e ? n.ipcMain : n.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer, (t, i) => {
                    let n = void 0;
                    do {
                        if (r.isNullOrUndefined(i)) {
                            o.error("msgInfo is empty");
                            break
                        }
                        if (!this.isConnected) {
                            o.warning("hasnot been connected yet");
                            break
                        }
                        let s = i.msg.name;
                        if (this.isIPCModuleIntervalMsg(s)) {
                            o.information(`IPC module interval msg : ${s}`);
                            let e = this.handleIPCModuleIntervalMsg(t.sender, i);
                            if (n = e[1], !e[0]) break;
                            o.information("need to dispatch msg:" + s)
                        }
                        e ? (o.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(i)) : (o.information("is renderer, handle business msg"), r.isNullOrUndefined(n) ? n = this.NotifyListener(i) : this.NotifyListener(i))
                    } while (0);
                    r.isNullOrUndefined(n) || (t.returnValue = n)
                })
            }

            isIPCModuleIntervalMsg(e) {
                for (let i of t.intervalIPCModuleMsgs) if (e === i) return !0;
                return !1
            }

            handleIPCModuleIntervalMsg(e, t) {
                let i = [!1, void 0];
                do {
                    let n = t.msg.name;
                    if (n === s.CommonIPCMessage.msgIPCRendererConnect) {
                        i = [!0, this.handleRendererConnectMsg(e, t)];
                        break
                    }
                    if (n === s.CommonIPCMessage.msgIPCRendererDisconnect) {
                        i = [!0, this.handleRendererDisconnectMsg(e, t)];
                        break
                    }
                } while (0);
                return i
            }

            handleRendererConnectMsg(e, t) {
                o.verbose(e), o.verbose(t)
            }

            handleRendererDisconnectMsg(e, t) {
                o.verbose(e), o.verbose(t)
            }

            handleForwardRendererToRendererMsg(e) {
                this.sendForwardRendererToRendererMsg(e)
            }

            sendForwardRendererToRendererMsg(e) {
                o.verbose(e)
            }

            NotifyListener(e) {
                let t = void 0, i = e.msg.name;
                if (this.listeners.has(i)) {
                    let n = this.listeners.get(i), r = !0;
                    for (let i of n) r ? (r = !1, t = i(e)) : i(e)
                }
                return t
            }
        }

        e.Communicator = t
    }(t.CommonIPCBase || (t.CommonIPCBase = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(3), r = i(6), o = i(18), s = i(19), a = i(26);
    !function (e) {
        class t extends a.CommonIPCBase.Communicator {
            constructor() {
                super()
            }

            initialize(e) {
                this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
            }

            connect() {
                this.isConnected ? o.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
            }

            disconnect() {
                this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : o.warning("hasnot been connected yet")
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
                    if (r.isNullOrUndefined(t)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let e = t.msg.args[0];
                    if (r.isNullOrUndefined(e)) {
                        o.error("connectRendererInfo is null");
                        break
                    }
                    o.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                } while (0)
            }

            handleRendererDisconnectMsg(e, t) {
                do {
                    if (r.isNullOrUndefined(t)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let e = t.msg.args[0];
                    if (r.isNullOrUndefined(e)) {
                        o.error("disconnectRendererInfo is null");
                        break
                    }
                    o.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                    for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                        this.rendererInfos.splice(t, 1);
                        break
                    }
                } while (0)
            }

            sendConnectMsgToMain() {
                let e = this.sendMessageToMainSync({name: s.CommonIPCMessage.msgIPCRendererConnect, args: []});
                this.currInfo.id = e[0], this.rendererInfos = e[1]
            }

            sendDisconnectMsgToMain() {
                this.sendMessageToMain({name: s.CommonIPCMessage.msgIPCRendererDisconnect, args: []})
            }

            sendIPCMsgToMain(e, t = !1) {
                let i = void 0;
                do {
                    if (r.isNullOrUndefined(e)) {
                        o.error("msg is null");
                        break
                    }
                    i = (t ? n.ipcRenderer.sendSync : n.ipcRenderer.send)(s.CommonIPCMessage.msgIPCSendToMain, {
                        msg: e,
                        senderInfo: this.currInfo
                    })
                } while (0);
                return i
            }

            sendIPCMsgToRenderer(e, t) {
                do {
                    if (r.isNullOrUndefined(e)) {
                        o.error("rendererId is null");
                        break
                    }
                    if (r.isNullOrUndefined(t)) {
                        o.error("msg is null");
                        break
                    }
                    let i = [e].concat(t.args);
                    t.args = i, n.ipcRenderer.send(s.CommonIPCMessage.msgIPCSendToRenderer, {
                        msg: t,
                        senderInfo: this.currInfo
                    })
                } while (0)
            }
        }

        e.RendererCommunicator = t, e.rendererCommunicator = new t
    }(t.CommonIPCRenderer || (t.CommonIPCRenderer = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.OK = 0] = "OK", e[e.Cancel = 1] = "Cancel", e[e.Close = 2] = "Close"
        }(t = e.Action || (e.Action = {}))
    }(t.MessageBoxNS || (t.MessageBoxNS = {}))
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, i) {
    e.exports = i(9)(39)
}, function (e, t) {
    e.exports = require("url")
}, , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(3);
    !function (e) {
        let t;
        !function (e) {
            e.Info = "info", e.Warning = "warning", e.Error = "error"
        }(t = e.ConfirmType || (e.ConfirmType = {})), e.confirm = function (e, t = {}) {
            let i = String(Math.random()).replace(/\D/, "");
            return n.ipcRenderer.send("message-box-confirm-create", {
                dialogConf: t,
                boxId: i
            }), n.remote.ipcMain.once(`message-box-init-${i}`, t => {
                t.sender.send("message-box-init-reply", {popType: "confirm", options: e})
            }), new Promise(e => {
                n.remote.ipcMain.once(`message-box-resolve-${i}`, (t, i, n) => {
                    e({action: i, checkboxChecked: n})
                })
            })
        }, e.pop = function (e, t = {}) {
            let i = String(Math.random()).replace(/\D/, "");
            return n.ipcRenderer.send("message-box-pop-create", {
                dialogConf: t,
                boxId: i
            }), n.remote.ipcMain.once(`message-box-init-${i}`, t => {
                t.sender.send("message-box-init-reply", {popType: "message-box", options: e})
            }), new Promise(e => {
                n.remote.ipcMain.once(`message-box-resolve-${i}`, (t, i, n) => {
                    e({action: i, formData: n})
                })
            })
        }, e.custom = function (e, t = {}, i = {}) {
            let r = String(Math.random()).replace(/\D/, "");
            return n.ipcRenderer.send("message-box-custom-create", {
                popType: e,
                dialogConf: i,
                boxId: r,
                options: t
            }), n.remote.ipcMain.once(`message-box-init-${r}`, n => {
                n.sender.send("message-box-init-reply", {popType: e, options: t, dialogConf: i})
            }), new Promise(e => {
                n.remote.ipcMain.once(`message-box-resolve-${r}`, (t, i, n) => {
                    e({action: i, args: n})
                })
            })
        }
    }(t.MessageBox || (t.MessageBox = {}))
}, , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.Default = 0] = "Default", e[e.Color = 1] = "Color", e[e.Wallpaper = 2] = "Wallpaper", e[e.Custom = 3] = "Custom"
        }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {type: t.Default, colorID: 0}
    }(t.SkinHelperNS || (t.SkinHelperNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = i(11), r = i(109), o = {"Content-Type": "application/x-www-form-urlencoded"};

    function s(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    var a, l = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = i(110) : "undefined" != typeof process && (a = i(22)), a),
        transformRequest: [function (e, t) {
            return r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function (e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
            return e >= 200 && e < 300
        }
    };
    l.headers = {common: {Accept: "application/json, text/plain, */*"}}, n.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {}
    }), n.forEach(["post", "put", "patch"], function (e) {
        l.headers[e] = n.merge(o)
    }), e.exports = l
}, function (e, t, i) {
    "use strict";
    var n = i(62);
    e.exports = function (e, t, i, r, o) {
        var s = new Error(e);
        return n(s, t, i, r, o)
    }
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(29), o = i(17), s = i(10), a = i(1).default.getLogger("Thunder.base.tools-utilities"), l = i(2),
        c = i(7).default(l.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function t(e) {
            return n(this, void 0, void 0, function* () {
                let t;
                return t = e && (yield s.FileSystemAWNS.existsAW(e)) ? new Promise(t => {
                    c.asyncCalcuteFileMD5(e, (e, i) => {
                        e ? (i = i.toUpperCase(), t(i)) : t(void 0)
                    })
                }) : new Promise(e => {
                    e(void 0)
                })
            })
        }

        e.genarateMd5 = function (e) {
            let t = void 0, i = r.createHash("md5");
            return null !== i && (t = i.update(e).digest("hex")), t
        }, e.matchFileMd5 = function (e, i) {
            return n(this, void 0, void 0, function* () {
                let n = !1, r = yield t(e);
                return void 0 !== r && r === i.toUpperCase() && (a.information("check full md5 sucessful"), n = !0), n
            })
        }, e.calculateFileMd5Ex = function (e) {
            return n(this, void 0, void 0, function* () {
                let t;
                if (e && (yield s.FileSystemAWNS.existsAW(e))) {
                    let i = o.createReadStream(e), n = r.createHash("md5");
                    i.on("data", e => {
                        n.update(e)
                    }), t = new Promise(e => {
                        i.on("end", () => {
                            let t = n.digest("hex");
                            t = t.toUpperCase(), e(t)
                        })
                    })
                } else t = new Promise(e => {
                    e(void 0)
                });
                return t
            })
        }, e.calculateFileMd5 = t, e.encryptBuffer = function (e, t) {
            let i = null;
            try {
                let n = r.createCipheriv("aes-128-ecb", t, ""), o = n.update(e), s = n.final();
                i = Buffer.concat([o, s])
            } catch (e) {
                a.error("encryptBuffer", e)
            }
            return i
        }, e.decryptBuffer = function (e, t) {
            let i = null;
            try {
                let n = r.createDecipheriv("aes-128-ecb", t, ""), o = n.update(e), s = n.final();
                i = Buffer.concat([o, s])
            } catch (e) {
                a.error("decryptBuffer", e)
            }
            return i
        }, e.encryptSha1Buffer = function (e) {
            let t = null;
            try {
                t = r.createHash("sha1").update(e).digest("hex")
            } catch (e) {
                a.error("encryptSha1Buffer", e)
            }
            return t
        }, e.setForegroundWindow = function (e, t) {
            if (null !== e && null !== t) {
                let i = t.getNativeWindowHandle().readUIntLE(0, 4);
                e.setForegroundWindow(i) ? a.information("sucessful") : a.information("failed")
            }
        }
    }(t.ToolsUtilitiesAWNS || (t.ToolsUtilitiesAWNS = {}))
}, function (e, t, i) {
    e.exports = i(9)(17)
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(12), s = i(78);
    let a = class extends r.Vue {
        constructor() {
            super(...arguments), this.removeDraggable = null
        }

        destroyed() {
            this.removeDraggable()
        }
    };
    a = n([r.Component], a), t.DraggableMixin = a;
    let l = class extends r.Vue {
        constructor() {
            super(...arguments), this.windowWidth = 0, this.windowHeight = 0, this.resizeToFitContent = s.ThunderWindowNS.resizeToFitContent, this.fitWindowPosInParent = s.ThunderWindowNS.fitWindowPosInParent
        }

        get relativeToParent() {
            return !o.ThunderUtil.isDef(this.options.relativeToParent) || this.options.relativeToParent
        }

        mounted() {
            this.relativeToParent ? this.resizeToFitContent(this.windowWidth, this.windowHeight, this.fitWindowPosInParent) : this.resizeToFitContent(this.windowWidth, this.windowHeight)
        }
    };
    n([r.Prop()], l.prototype, "options", void 0), l = n([r.Component], l), t.PositionMixin = l
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(2), r = i(6), o = i(1), s = i(7).default(n.join(__rootDir, "../bin/ThunderHelper.node"));
    process.env.TL_ENABLE = "0", "console" === process.env.TL_OUTPUT ? o.default.outputLogger = o.outputLoggerConsole : o.default.outputLogger = function () {
        function e(e) {
            return function (...t) {
                s.printEtwLog(e, function (...e) {
                    return e.map(e => r.inspect(e)).join(" ").replace(/%/g, "%%")
                }(...t))
            }
        }

        return {
            [o.LogLevel.Critical]: e(o.LogLevel.Critical),
            [o.LogLevel.Error]: e(o.LogLevel.Error),
            [o.LogLevel.Warning]: e(o.LogLevel.Warning),
            [o.LogLevel.Information]: e(o.LogLevel.Information),
            [o.LogLevel.Verbose]: e(o.LogLevel.Verbose)
        }
    }()
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(16), o = (i(17), i(2)), s = i(6);
    let a = null;
    const l = i(13), c = i(3), u = i(1), d = i(7), h = i(15), f = "xdas_profile_stat";
    let p = "", v = void 0, m = null, g = void 0, _ = null,
        y = d.default(o.join(__rootDir, "../bin/ThunderHelper.node")), b = new Set;

    function C() {
        return n(this, void 0, void 0, function* () {
            return new Promise(e => n(this, void 0, void 0, function* () {
                void 0 === g && (null === _ && (_ = new Promise(e => {
                    e(g = function (e) {
                        let t = "";
                        if (0 === e.length && "renderer" === process.type) {
                            let e = o.normalize(decodeURIComponent(window.location.href)),
                                i = e.indexOf(process.resourcesPath);
                            i = i > -1 ? i + process.resourcesPath.length + 1 : i;
                            let n = e.length - 1, r = e.indexOf("?"), s = e.indexOf("#");
                            n = r > -1 ? Math.min(r - 1, n) : n, n = s > -1 ? Math.min(s - 1, n) : n, i > -1 && n >= i && (t = e.substr(i, n - i + 1))
                        }
                        return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                    }(""))
                })), g = yield _), e(g)
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
                    t = s.inspect(e) || "";
                    break;
                case"number":
                case"boolean":
                    t = e.toString() || ""
            }
        } while (0);
        return t
    }

    function x(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function S(e) {
        return n(this, void 0, void 0, function* () {
            return new Promise(t => n(this, void 0, void 0, function* () {
                let n = void 0;
                null === a && (a = yield Promise.resolve().then(() => i(29)));
                let r = a.createHash("md5");
                null !== r && (n = r.update(e).digest("hex")), t(n)
            }))
        })
    }

    function k() {
        return new Promise(e => n(this, void 0, void 0, function* () {
            let t = "";
            t = void 0 === v ? "browser" === process.type ? function () {
                if (void 0 === v) {
                    let e = process.argv.length, t = process.argv;
                    for (let i = 0; i < e; i++) {
                        let e = t[i];
                        if (e.startsWith("-StartType:")) {
                            v = e.substring("-StartType:".length);
                            break
                        }
                    }
                    void 0 === v && (v = "")
                }
                return v
            }() : yield function () {
                return n(this, void 0, void 0, function* () {
                    return null === m && (m = new Promise(e => {
                        c.ipcRenderer.send(h.ThunderChannelList.channelRMGetBrowserStartType), c.ipcRenderer.once(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, i) => {
                            v = i, e(i), m = null
                        })
                    })), m
                })
            }() : v, e(t)
        }))
    }

    function P(e, t, i, r) {
        return n(this, void 0, void 0, function* () {
            let o = w(t), s = w(i), a = yield S(s), c = function (e) {
                let t = new RegExp(x("file:///"), "g"), i = new RegExp(x(process.resourcesPath + "\\"), "g"),
                    n = new RegExp(x(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                return e.replace(t, "").replace(i, "").replace(n, "")
            }(w(r)), u = yield S(c), d = `${e}:${a}:${u}`;
            b.has(d) || (b.add(d), l.XLStatNS.trackEvent(f, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield C()},code=${o},message_hash=${a},message=${encodeURI(s)},stack_hash=${u},stack=${encodeURI(c)}`)), function (e, t, i, r) {
                return n(this, void 0, void 0, function* () {
                })
            }().catch()
        })
    }

    function T(e) {
        console.error(e);
        let t = e || {};
        P("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
    }

    !function (e) {
        e.init = function (e) {
            p = e
        }, e.trackColdStartUpEvent = function (e) {
            return n(this, void 0, void 0, function* () {
                let t = y.iSColdStartUp() ? 1 : 0, i = r.release(), n = y.performanceMonitorReporter.getProcessUptime(),
                    o = yield k(), s = `key=${e},start_type=${o},cold_start_up=${t},os_version=${i},cost_time=${n}`;
                l.XLStatNS.trackEvent(f, "cold_start_up", "", 0, 0, 0, 0, s)
            })
        }
    }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
        if (process.on("uncaughtException", e => {
            console.error(e);
            let t = e || {};
            P("uncaughtException", t.code, t.message, t.stack).catch()
        }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
            T(e)
        }), c.ipcMain.on(h.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
            return n(this, void 0, void 0, function* () {
                let t = yield k();
                e.sender.send(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
            })
        }); else if ("browser" !== process.type) {
            window.addEventListener("unhandledrejection", e => {
                T(e && e.reason || {})
            });
            let e = c.remote.getCurrentWebContents();
            null !== e && void 0 !== e && e.once("did-finish-load", () => {
                (function () {
                    return n(this, void 0, void 0, function* () {
                        do {
                            if ("browser" === process.type) break;
                            if (null === window.performance.timing || void 0 === window.performance.timing) break;
                            let e = y.iSColdStartUp() ? 1 : 0, t = r.release(), i = window.performance.timing,
                                n = i.loadEventEnd - i.navigationStart, o = i.fetchStart - i.navigationStart,
                                s = i.domainLookupEnd - i.domainLookupStart, a = i.connectEnd - i.connectStart,
                                c = i.responseStart - i.requestStart, u = i.responseEnd - i.responseStart,
                                d = i.domComplete - i.domLoading, h = yield k();
                            l.XLStatNS.trackEvent(f, "page_load_time", "", 0, 0, 0, 0, `start_type=${h},cold_start_up=${e},os_version=${t},load_time=${n},before_fetch_time=${o},domin_lookup_time=${s},connect_time=${a},first_response_time=${c},responseTime=${u},domTime=${d},process=${p}`)
                        } while (0)
                    })
                })().catch()
            })
        }
        u.default.hook("beforeLog", (e, t, ...i) => {
            e === u.LogLevel.Critical && l.XLStatNS.trackEvent(f, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${i}`)
        })
    }()
}, function (e, t, i) {
    e.exports = i(9)(189)
}, function (e, t) {
    e.exports = require("net")
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(10), s = i(5), a = i(2);
    !function (e) {
        function t(e, t) {
            if (null !== e) {
                e.webContents.isDevToolsOpened() ? e.webContents.closeDevTools() : e.webContents.openDevTools(t)
            }
        }

        e.openDevTool = t, e.enableDevTools = function (e) {
            return n(this, void 0, void 0, function* () {
                (yield o.FileSystemAWNS.existsAW(a.resolve(__rootDir, "../../enableDevTools"))) && window.addEventListener("keyup", i => {
                    "F12" === i.key && i.ctrlKey && t(r.remote.getCurrentWindow(), e)
                }, !0)
            })
        }, e.enableDragOpenFile = function (e) {
            void 0 === e && (e = !1), document.addEventListener("dragover", e => {
                e.preventDefault()
            }, !1), document.addEventListener("drop", e => n(this, void 0, void 0, function* () {
                e.preventDefault();
                let t = e.dataTransfer, i = t.files, n = t.items;
                if (void 0 !== n && null !== n && n.length > 0) for (let e = 0; e < n.length; e++) {
                    let t = n[e];
                    "string" === t.kind && "text/uri-list" === t.type ? t.getAsString(e => {
                        s.NativeCallModule.nativeCall.CallNativeFunction("DropOpenUrl", e)
                    }) : t.kind
                }
                if (void 0 !== i && null !== i && i.length > 0) for (let e = 0; e < i.length; e++) {
                    let t = i[e].path;
                    void 0 !== t && null !== t && "" !== t && (yield o.FileSystemAWNS.existsAW(t)) && s.NativeCallModule.nativeCall.CallNativeFunction("DropOpenFile", t)
                }
            }), !1)
        }
    }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
}, function (e, t, i) {
    e.exports = i(9)(60)
}, function (e, t) {
    e.exports = require("http")
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(49), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(3), s = i(4);
    let a = class extends s.Vue {
        onOptionsChanged() {
            this.appendContent()
        }

        appendContent() {
            this.dropdown || (this.dropdown = new o.remote.DropdownWindow), this.dropdown.clear(), this.options.forEach(e => {
                "separator" === e ? this.dropdown.append(new o.remote.DropdownWindowContent({type: "separator"})) : this.dropdown.append(new o.remote.DropdownWindowContent({
                    label: e.toString(),
                    click: () => {
                        this.$refs.select.menuVisible = !1, this.$emit("input", e, !0)
                    }
                }))
            })
        }

        handleMenuShow() {
            return r(this, void 0, void 0, function* () {
                if (void 0 === this.options || !Array.isArray(this.options) || 0 === this.options.length) return;
                this.dropdown || this.appendContent();
                let e = this.$el.getBoundingClientRect();
                const {DropDownWindowSkinNS: t} = yield Promise.resolve().then(() => i(131));
                t.setStyle(this.dropdown, {
                    windowPreference: {
                        marginLeft: 0,
                        marginRight: 0,
                        stringWidth: Math.round(e.width) - 39
                    }
                }), this.dropdown.popup({
                    window: o.remote.getCurrentWindow(),
                    x: Math.round(e.left),
                    y: Math.round(e.top + e.height + 4)
                })
            })
        }
    };
    n([s.Prop()], a.prototype, "value", void 0), n([s.Prop({default: () => []})], a.prototype, "options", void 0), n([s.Watch("options")], a.prototype, "onOptionsChanged", null), a = n([s.Component], a), t.default = a
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(14), r = i(5), o = i(35), s = i(1), a = i(12), l = s.default.getLogger("common/skin");

    function c(e) {
        if (e.type === o.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), a.ThunderUtil.setCSSProperties(document.body, {
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
        }); else if (e.type === o.SkinHelperNS.SkinType.Color || e.type === o.SkinHelperNS.SkinType.Wallpaper) {
            document.body.classList.add("is-theme");
            let {colors: {colorPrimary: t, colorPrimaryControl1: i, colorPrimaryControl2: n, colorPrimaryControl3: r, colorPrimaryControl4: o, colorPrimaryGradient: s, colorPrimaryText: l, colorSearch: c, colorSecondary: u, colorGradientBackground: d, colorGradientForeground: h, colorAccordion: f}, opacity: p} = e;
            a.ThunderUtil.setCSSProperties(document.body, {
                "--color-primary-theme": `${t}`,
                "--color-primary-control-1": `${i}`,
                "--color-primary-control-2": `${n}`,
                "--color-primary-control-3": `${r}`,
                "--color-primary-control-4": `${o}`,
                "--color-primary-gradient-1": `${s[0]}`,
                "--color-primary-gradient-2": `${s[1]}`,
                "--color-primary-text": `${l}`,
                "--color-search": `${c}`,
                "--color-secondary": `${u}`,
                "--color-gradient-background-1": `${d[0]}`,
                "--color-gradient-background-2": `${d[1]}`,
                "--color-gradient-foreground-1": `${h[0]}`,
                "--color-gradient-foreground-2": `${h[1]}`,
                "--color-accordion-1": `${f[0]}`,
                "--color-accordion-2": `${f[1]}`,
                "--default-opacity-1": `${p - .1}`,
                "--default-opacity-2": `${p + .1}`
            })
        }
    }

    n.default("GetSkinInfo").then(c).catch(e => {
        l.warning(e)
    }), r.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", c)
}, , , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(3), r = i(70), o = i(1), s = i(12), a = i(71), l = o.default.getLogger("MenuSkinNS");
    !function (e) {
        function t(e, t) {
            if (l.information("setStyle", e, t), null !== e) {
                let i = {windowPreference: r.WindowPreferenceNS.getWindowPreference()};
                l.information("skinOpts", i), e.setStyle(a(i, t))
            }
        }

        e.setStyle = t, e.popEditableDefaultContextMenu = function (e, i, r) {
            let o = n.remote.getCurrentWebContents();
            o.once("context-menu", (r, a) => {
                if (l.verbose(r), a.isEditable) {
                    let r = [{
                        label: "撤销", enabled: a.editFlags.canUndo, click: () => {
                            o.undo()
                        }
                    }, {type: "separator"}, {
                        label: "剪切", enabled: a.editFlags.canCut, click: () => {
                            o.cut()
                        }
                    }, {
                        label: "复制", enabled: a.editFlags.canCopy, click: () => {
                            o.copy()
                        }
                    }, {
                        label: "粘贴",
                        enabled: a.editFlags.canPaste && s.ThunderUtil.isClipboardTextFormatAvailable(),
                        click: () => {
                            o.paste()
                        }
                    }, {
                        label: "删除", enabled: a.editFlags.canDelete, click: () => {
                            o.delete()
                        }
                    }, {type: "separator"}, {
                        label: "全选", enabled: a.editFlags.canSelectAll, click: () => {
                            o.selectAll()
                        }
                    }];
                    if (void 0 !== e && "function" == typeof e) {
                        let t = e(a);
                        void 0 !== t && t.length > 0 && (void 0 === i ? i = r.length : (i < 0 && (i = r.length + 1 + i) < 0 && (i = 0), i > r.length && (i = r.length)), r.splice(i, 0, ...t))
                    }
                    let l = n.remote.Menu.buildFromTemplate(r);
                    t(l, {}), l.popup({window: n.remote.getCurrentWindow()})
                }
            })
        }
    }(t.MenuSkinNS || (t.MenuSkinNS = {}))
}, , function (e, t) {
    e.exports = require("zlib")
}, , , , , function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
            return e.apply(t, i)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(37);
    e.exports = function (e, t, i) {
        var r = i.config.validateStatus;
        i.status && r && !r(i.status) ? t(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t, i, n, r) {
        return e.config = t, i && (e.code = i), e.request = n, e.response = r, e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11);

    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, i) {
        if (!t) return e;
        var o;
        if (i) o = i(t); else if (n.isURLSearchParams(t)) o = t.toString(); else {
            var s = [];
            n.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
                    n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e))
                }))
            }), o = s.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function (e, t) {
    e.exports = require("https")
}, function (e, t, i) {
    var n = i(31), r = i(47), o = i(64), s = i(91), a = i(81).Writable, l = i(115)("follow-redirects"),
        c = {GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0}, u = Object.create(null);

    function d(e, t) {
        a.call(this), e.headers = e.headers || {}, this._options = e, this._redirectCount = 0, this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
        var i = this;
        if (this._onNativeResponse = function (e) {
            i._processResponse(e)
        }, !e.pathname && e.path) {
            var n = e.path.indexOf("?");
            n < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, n), e.search = e.path.substring(n))
        }
        this._performRequest()
    }

    function h(e) {
        var t = {maxRedirects: 21, maxBodyLength: 10485760}, i = {};
        return Object.keys(e).forEach(function (r) {
            var o = r + ":", a = i[o] = e[r], c = t[r] = Object.create(a);
            c.request = function (e, r) {
                return "string" == typeof e ? (e = n.parse(e)).maxRedirects = t.maxRedirects : e = Object.assign({
                    protocol: o,
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength
                }, e), e.nativeProtocols = i, s.equal(e.protocol, o, "protocol mismatch"), l("options", e), new d(e, r)
            }, c.get = function (e, t) {
                var i = c.request(e, t);
                return i.end(), i
            }
        }), t
    }

    ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        u[e] = function (t) {
            this._redirectable.emit(e, t)
        }
    }), d.prototype = Object.create(a.prototype), d.prototype.write = function (e, t, i) {
        this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, i)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), this.abort())
    }, d.prototype.end = function (e, t, i) {
        var n = this._currentRequest;
        e ? this.write(e, t, function () {
            n.end(null, null, i)
        }) : n.end(null, null, i)
    }, d.prototype.setHeader = function (e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t)
    }, d.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (e) {
        d.prototype[e] = function (t, i) {
            return this._currentRequest[e](t, i)
        }
    }), ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(d.prototype, e, {
            get: function () {
                return this._currentRequest[e]
            }
        })
    }), d.prototype._performRequest = function () {
        var e = this._options.protocol, t = this._options.nativeProtocols[e];
        if (this._options.agents) {
            var i = e.substr(0, e.length - 1);
            this._options.agent = this._options.agents[i]
        }
        var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
        for (var o in this._currentUrl = n.format(this._options), r._redirectable = this, u) o && r.on(o, u[o]);
        if (this._isRedirect) {
            var s = this._requestBodyBuffers;
            !function e() {
                if (0 !== s.length) {
                    var t = s.pop();
                    r.write(t.data, t.encoding, e)
                } else r.end()
            }()
        }
    }, d.prototype._processResponse = function (e) {
        var t = e.headers.location;
        if (t && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400) {
            if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
            var i, r = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in c)) for (i in this._options.method = "GET", this._requestBodyBuffers = [], r) /^content-/i.test(i) && delete r[i];
            if (!this._isRedirect) for (i in r) /^host$/i.test(i) && delete r[i];
            var o = n.resolve(this._currentUrl, t);
            l("redirecting to", o), Object.assign(this._options, n.parse(o)), this._isRedirect = !0, this._performRequest()
        } else e.responseUrl = this._currentUrl, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = h({http: r, https: o}), e.exports.wrap = h
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, i) {
    "use strict";

    function n(e) {
        this.message = e
    }

    n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, e.exports = n
}, , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(12), o = i(21), s = i(5);
    !function (e) {
        e.getDownloadDir = function () {
            return n(this, void 0, void 0, function* () {
                return new Promise(e => {
                    s.NativeCallModule.nativeCall.CallNativeFunction("GetDownloadDir", (t, i) => {
                        t === o.NativeFunctionErrorCode.Success ? e(i) : e(r.ThunderUtil.getDefaultDownloadDir())
                    })
                })
            })
        }, e.getConfigValueAW = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                return new Promise(n => {
                    s.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", e, t, i, (e, t) => {
                        e === o.NativeFunctionErrorCode.Success ? n(t) : n(i)
                    })
                })
            })
        }, e.isSingleBtTask = function (e) {
            return n(this, void 0, void 0, function* () {
                return new Promise(t => {
                    s.NativeCallModule.nativeCall.CallNativeFunction("IsSingleBtTask", e, (e, i) => {
                        e === o.NativeFunctionErrorCode.Success ? t(i) : t(!1)
                    })
                })
            })
        }
    }(t.NativeCallAWNS || (t.NativeCallAWNS = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(86), r = i(80);
    !function (e) {
        e.getWindowPreference = function (e = !1) {
            let t = r.default(), i = {};
            return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (i.hoverBackgroundColor = e ? parseInt(n.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : n.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), i
        }
    }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
}, function (e, t, i) {
    (function (e) {
        var i = 200, n = "__lodash_hash_undefined__", r = 800, o = 16, s = 9007199254740991, a = "[object Arguments]",
            l = "[object AsyncFunction]", c = "[object Function]", u = "[object GeneratorFunction]",
            d = "[object Null]", h = "[object Object]", f = "[object Proxy]", p = "[object Undefined]",
            v = /^\[object .+?Constructor\]$/, m = /^(?:0|[1-9]\d*)$/, g = {};
        g["[object Float32Array]"] = g["[object Float64Array]"] = g["[object Int8Array]"] = g["[object Int16Array]"] = g["[object Int32Array]"] = g["[object Uint8Array]"] = g["[object Uint8ClampedArray]"] = g["[object Uint16Array]"] = g["[object Uint32Array]"] = !0, g[a] = g["[object Array]"] = g["[object ArrayBuffer]"] = g["[object Boolean]"] = g["[object DataView]"] = g["[object Date]"] = g["[object Error]"] = g[c] = g["[object Map]"] = g["[object Number]"] = g[h] = g["[object RegExp]"] = g["[object Set]"] = g["[object String]"] = g["[object WeakMap]"] = !1;
        var _ = "object" == typeof global && global && global.Object === Object && global,
            y = "object" == typeof self && self && self.Object === Object && self,
            b = _ || y || Function("return this")(), C = "object" == typeof t && t && !t.nodeType && t,
            w = C && "object" == typeof e && e && !e.nodeType && e, x = w && w.exports === C, S = x && _.process,
            k = function () {
                try {
                    return S && S.binding && S.binding("util")
                } catch (e) {
                }
            }(), P = k && k.isTypedArray;

        function T(e, t) {
            return "__proto__" == t ? void 0 : e[t]
        }

        var E, N, I, R = Array.prototype, D = Function.prototype, O = Object.prototype, M = b["__core-js_shared__"],
            A = D.toString, L = O.hasOwnProperty,
            F = (E = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "")) ? "Symbol(src)_1." + E : "", B = O.toString,
            j = A.call(Object),
            W = RegExp("^" + A.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            U = x ? b.Buffer : void 0, $ = b.Symbol, V = b.Uint8Array, K = U ? U.allocUnsafe : void 0,
            H = (N = Object.getPrototypeOf, I = Object, function (e) {
                return N(I(e))
            }), G = Object.create, z = O.propertyIsEnumerable, q = R.splice, Y = $ ? $.toStringTag : void 0,
            X = function () {
                try {
                    var e = Ce(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {
                }
            }(), Q = U ? U.isBuffer : void 0, J = Math.max, Z = Date.now, ee = Ce(b, "Map"), te = Ce(Object, "create"),
            ie = function () {
                function e() {
                }

                return function (t) {
                    if (!De(t)) return {};
                    if (G) return G(t);
                    e.prototype = t;
                    var i = new e;
                    return e.prototype = void 0, i
                }
            }();

        function ne(e) {
            var t = -1, i = null == e ? 0 : e.length;
            for (this.clear(); ++t < i;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function re(e) {
            var t = -1, i = null == e ? 0 : e.length;
            for (this.clear(); ++t < i;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function oe(e) {
            var t = -1, i = null == e ? 0 : e.length;
            for (this.clear(); ++t < i;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function se(e) {
            var t = this.__data__ = new re(e);
            this.size = t.size
        }

        function ae(e, t) {
            var i = Te(e), n = !i && Pe(e), r = !i && !n && Ne(e), o = !i && !n && !r && Me(e), s = i || n || r || o,
                a = s ? function (e, t) {
                    for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
                    return n
                }(e.length, String) : [], l = a.length;
            for (var c in e) !t && !L.call(e, c) || s && ("length" == c || r && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || we(c, l)) || a.push(c);
            return a
        }

        function le(e, t, i) {
            (void 0 === i || ke(e[t], i)) && (void 0 !== i || t in e) || de(e, t, i)
        }

        function ce(e, t, i) {
            var n = e[t];
            L.call(e, t) && ke(n, i) && (void 0 !== i || t in e) || de(e, t, i)
        }

        function ue(e, t) {
            for (var i = e.length; i--;) if (ke(e[i][0], t)) return i;
            return -1
        }

        function de(e, t, i) {
            "__proto__" == t && X ? X(e, t, {configurable: !0, enumerable: !0, value: i, writable: !0}) : e[t] = i
        }

        ne.prototype.clear = function () {
            this.__data__ = te ? te(null) : {}, this.size = 0
        }, ne.prototype.delete = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }, ne.prototype.get = function (e) {
            var t = this.__data__;
            if (te) {
                var i = t[e];
                return i === n ? void 0 : i
            }
            return L.call(t, e) ? t[e] : void 0
        }, ne.prototype.has = function (e) {
            var t = this.__data__;
            return te ? void 0 !== t[e] : L.call(t, e)
        }, ne.prototype.set = function (e, t) {
            var i = this.__data__;
            return this.size += this.has(e) ? 0 : 1, i[e] = te && void 0 === t ? n : t, this
        }, re.prototype.clear = function () {
            this.__data__ = [], this.size = 0
        }, re.prototype.delete = function (e) {
            var t = this.__data__, i = ue(t, e);
            return !(i < 0 || (i == t.length - 1 ? t.pop() : q.call(t, i, 1), --this.size, 0))
        }, re.prototype.get = function (e) {
            var t = this.__data__, i = ue(t, e);
            return i < 0 ? void 0 : t[i][1]
        }, re.prototype.has = function (e) {
            return ue(this.__data__, e) > -1
        }, re.prototype.set = function (e, t) {
            var i = this.__data__, n = ue(i, e);
            return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this
        }, oe.prototype.clear = function () {
            this.size = 0, this.__data__ = {hash: new ne, map: new (ee || re), string: new ne}
        }, oe.prototype.delete = function (e) {
            var t = be(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }, oe.prototype.get = function (e) {
            return be(this, e).get(e)
        }, oe.prototype.has = function (e) {
            return be(this, e).has(e)
        }, oe.prototype.set = function (e, t) {
            var i = be(this, e), n = i.size;
            return i.set(e, t), this.size += i.size == n ? 0 : 1, this
        }, se.prototype.clear = function () {
            this.__data__ = new re, this.size = 0
        }, se.prototype.delete = function (e) {
            var t = this.__data__, i = t.delete(e);
            return this.size = t.size, i
        }, se.prototype.get = function (e) {
            return this.__data__.get(e)
        }, se.prototype.has = function (e) {
            return this.__data__.has(e)
        }, se.prototype.set = function (e, t) {
            var n = this.__data__;
            if (n instanceof re) {
                var r = n.__data__;
                if (!ee || r.length < i - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new oe(r)
            }
            return n.set(e, t), this.size = n.size, this
        };
        var he, fe = function (e, t, i) {
            for (var n = -1, r = Object(e), o = i(e), s = o.length; s--;) {
                var a = o[he ? s : ++n];
                if (!1 === t(r[a], a, r)) break
            }
            return e
        };

        function pe(e) {
            return null == e ? void 0 === e ? p : d : Y && Y in Object(e) ? function (e) {
                var t = L.call(e, Y), i = e[Y];
                try {
                    e[Y] = void 0;
                    var n = !0
                } catch (e) {
                }
                var r = B.call(e);
                n && (t ? e[Y] = i : delete e[Y]);
                return r
            }(e) : function (e) {
                return B.call(e)
            }(e)
        }

        function ve(e) {
            return Oe(e) && pe(e) == a
        }

        function me(e) {
            return !(!De(e) || F && F in e) && (Ie(e) ? W : v).test(function (e) {
                if (null != e) {
                    try {
                        return A.call(e)
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

        function ge(e) {
            if (!De(e)) return function (e) {
                var t = [];
                if (null != e) for (var i in Object(e)) t.push(i);
                return t
            }(e);
            var t = xe(e), i = [];
            for (var n in e) ("constructor" != n || !t && L.call(e, n)) && i.push(n);
            return i
        }

        function _e(e, t, i, n, r) {
            e !== t && fe(t, function (o, s) {
                if (De(o)) r || (r = new se), function (e, t, i, n, r, o, s) {
                    var a = T(e, i), l = T(t, i), c = s.get(l);
                    if (c) return void le(e, i, c);
                    var u = o ? o(a, l, i + "", e, t, s) : void 0, d = void 0 === u;
                    if (d) {
                        var f = Te(l), p = !f && Ne(l), v = !f && !p && Me(l);
                        u = l, f || p || v ? Te(a) ? u = a : Oe(b = a) && Ee(b) ? u = function (e, t) {
                            var i = -1, n = e.length;
                            t || (t = Array(n));
                            for (; ++i < n;) t[i] = e[i];
                            return t
                        }(a) : p ? (d = !1, u = function (e, t) {
                            if (t) return e.slice();
                            var i = e.length, n = K ? K(i) : new e.constructor(i);
                            return e.copy(n), n
                        }(l, !0)) : v ? (d = !1, m = l, g = !0 ? (_ = m.buffer, y = new _.constructor(_.byteLength), new V(y).set(new V(_)), y) : m.buffer, u = new m.constructor(g, m.byteOffset, m.length)) : u = [] : function (e) {
                            if (!Oe(e) || pe(e) != h) return !1;
                            var t = H(e);
                            if (null === t) return !0;
                            var i = L.call(t, "constructor") && t.constructor;
                            return "function" == typeof i && i instanceof i && A.call(i) == j
                        }(l) || Pe(l) ? (u = a, Pe(a) ? u = function (e) {
                            return function (e, t, i, n) {
                                var r = !i;
                                i || (i = {});
                                var o = -1, s = t.length;
                                for (; ++o < s;) {
                                    var a = t[o], l = n ? n(i[a], e[a], a, i, e) : void 0;
                                    void 0 === l && (l = e[a]), r ? de(i, a, l) : ce(i, a, l)
                                }
                                return i
                            }(e, Ae(e))
                        }(a) : (!De(a) || n && Ie(a)) && (u = function (e) {
                            return "function" != typeof e.constructor || xe(e) ? {} : ie(H(e))
                        }(l))) : d = !1
                    }
                    var m, g, _, y;
                    var b;
                    d && (s.set(l, u), r(u, l, n, o, s), s.delete(l));
                    le(e, i, u)
                }(e, t, s, i, _e, n, r); else {
                    var a = n ? n(T(e, s), o, s + "", e, t, r) : void 0;
                    void 0 === a && (a = o), le(e, s, a)
                }
            }, Ae)
        }

        function ye(e, t) {
            return Se(function (e, t, i) {
                return t = J(void 0 === t ? e.length - 1 : t, 0), function () {
                    for (var n = arguments, r = -1, o = J(n.length - t, 0), s = Array(o); ++r < o;) s[r] = n[t + r];
                    r = -1;
                    for (var a = Array(t + 1); ++r < t;) a[r] = n[r];
                    return a[t] = i(s), function (e, t, i) {
                        switch (i.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, i[0]);
                            case 2:
                                return e.call(t, i[0], i[1]);
                            case 3:
                                return e.call(t, i[0], i[1], i[2])
                        }
                        return e.apply(t, i)
                    }(e, this, a)
                }
            }(e, t, Be), e + "")
        }

        function be(e, t) {
            var i, n, r = e.__data__;
            return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map
        }

        function Ce(e, t) {
            var i = function (e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return me(i) ? i : void 0
        }

        function we(e, t) {
            var i = typeof e;
            return !!(t = null == t ? s : t) && ("number" == i || "symbol" != i && m.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function xe(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || O)
        }

        var Se = function (e) {
            var t = 0, i = 0;
            return function () {
                var n = Z(), s = o - (n - i);
                if (i = n, s > 0) {
                    if (++t >= r) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(X ? function (e, t) {
            return X(e, "toString", {
                configurable: !0, enumerable: !1, value: (i = t, function () {
                    return i
                }), writable: !0
            });
            var i
        } : Be);

        function ke(e, t) {
            return e === t || e != e && t != t
        }

        var Pe = ve(function () {
            return arguments
        }()) ? ve : function (e) {
            return Oe(e) && L.call(e, "callee") && !z.call(e, "callee")
        }, Te = Array.isArray;

        function Ee(e) {
            return null != e && Re(e.length) && !Ie(e)
        }

        var Ne = Q || function () {
            return !1
        };

        function Ie(e) {
            if (!De(e)) return !1;
            var t = pe(e);
            return t == c || t == u || t == l || t == f
        }

        function Re(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s
        }

        function De(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }

        function Oe(e) {
            return null != e && "object" == typeof e
        }

        var Me = P ? function (e) {
            return function (t) {
                return e(t)
            }
        }(P) : function (e) {
            return Oe(e) && Re(e.length) && !!g[pe(e)]
        };

        function Ae(e) {
            return Ee(e) ? ae(e, !0) : ge(e)
        }

        var Le, Fe = (Le = function (e, t, i) {
            _e(e, t, i)
        }, ye(function (e, t) {
            var i = -1, n = t.length, r = n > 1 ? t[n - 1] : void 0, o = n > 2 ? t[2] : void 0;
            for (r = Le.length > 3 && "function" == typeof r ? (n--, r) : void 0, o && function (e, t, i) {
                if (!De(i)) return !1;
                var n = typeof t;
                return !!("number" == n ? Ee(i) && we(t, i.length) : "string" == n && t in i) && ke(i[t], e)
            }(t[0], t[1], o) && (r = n < 3 ? void 0 : r, n = 1), e = Object(e); ++i < n;) {
                var s = t[i];
                s && Le(e, s, i, r)
            }
            return e
        }));

        function Be(e) {
            return e
        }

        e.exports = Fe
    }).call(this, i(87)(e))
}, , , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("td-select", e._g(e._b({
            ref: "select",
            attrs: {value: e.value, "custom-menu-enabled": ""},
            on: {"menu-show": e.handleMenuShow}
        }, "td-select", e.$attrs, !1), e.$listeners), [e._t("suffix", null, {slot: "suffix"}), e._v(" "), e._t("append", null, {slot: "append"})], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(1), o = i(14), s = i(5), a = r.default.getLogger("Thunder.ShouldLogin");
    t.default = function (e = !1, t = !1, i) {
        return n(this, void 0, void 0, function* () {
            let n, r = null;
            try {
                let l = yield o.default("IsLogined"), c = yield o.default("GetUserID");
                l ? (a.information("is logined"), n = Promise.resolve(c)) : (n = new Promise((i, n) => {
                    let o = -1;
                    if (o = s.NativeCallModule.nativeCall.AttachNativeEvent("OnUserLogin", e => {
                        let t = Date.now();
                        a.information("On UserLogin", e, t, r), r && Math.floor(t - r) > 3e5 ? i("") : i(e), -1 !== o && (s.NativeCallModule.nativeCall.DetachNativeEvent("OnUserLogin", o), o = -1)
                    }), !e) {
                        let e = s.NativeCallModule.nativeCall.AttachNativeEvent("OnLoginWndClose", n => {
                            do {
                                if ("close" === n) {
                                    if (i(""), !t && -1 !== o) {
                                        s.NativeCallModule.nativeCall.DetachNativeEvent("OnUserLogin", o), o = -1;
                                        break
                                    }
                                } else if ("suc" === n && -1 !== o) break;
                                t && -1 !== o && (s.NativeCallModule.nativeCall.DetachNativeEvent("OnUserLogin", o), o = -1)
                            } while (0);
                            s.NativeCallModule.nativeCall.DetachNativeEvent("OnLoginWndClose", e)
                        })
                    }
                }), e || (r = Date.now(), o.default("ShowLoginDlg", i).catch(e => {
                    a.warning(e)
                })))
            } catch (e) {
                a.warning(e), n = Promise.resolve("")
            }
            return n
        })
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(3), r = i(15);
    !function (e) {
        e.resizeToFitContent = function (e = 0, t = 0, i) {
            let r = n.remote.getCurrentWindow();
            if (e > 0 && t > 0) r.setSize(e, t); else {
                let e = document.querySelector(".td-dialog");
                r.setSize(e.offsetWidth, e.offsetHeight)
            }
            i && "function" == typeof i && i(), window.requestIdleCallback(() => {
                r.show()
            })
        }, e.autoAdaptScrollIntoView = function (e, t, i) {
            let n = t.scrollTop, r = t.getBoundingClientRect(), o = e.getBoundingClientRect(), s = r.bottom;
            void 0 !== i && "number" == typeof i && i > 0 && (s = r.top + i), o.top < r.top ? t.scrollTop = n - (r.top - o.top) : o.bottom > s && (t.scrollTop = n + (o.bottom - s))
        }, e.fitWindowPosInParent = function (e, t) {
            e || (e = n.remote.getCurrentWindow()), t || (t = e.getParentWindow()), n.ipcRenderer.sendSync(r.ThunderChannelList.channelRMSetPosition, e.getNativeWindowHandle(), t.getNativeWindowHandle())
        }, e.getWindowsInParentCenterPos = function (e, t, i) {
            i || (i = n.remote.getCurrentWindow());
            let r = i.getPosition(), o = i.getSize(), s = n.screen.getCursorScreenPoint(),
                a = n.screen.getDisplayNearestPoint(s), l = a.size.width, c = a.size.height, u = o[0], d = o[1];
            r[0] + u > l && (u = l - r[0]), r[1] + d > c && (d = c - r[1]);
            let h = r[0] + (u - e) / 2, f = r[1] + (d - t) / 2;
            return h < 0 ? h = 0 : h > l - e && (h = l - e), f < 0 ? f = 0 : f > c - t && (f = c - t), [Math.round(h), Math.round(f)]
        }, e.centerWnd = function (e, t, i) {
            do {
                if (!e || !t) break;
                let r = e.getNativeWindowHandle().readUIntLE(0, 4);
                if (!r) break;
                let o = t.getPosition(), s = t.getSize(), a = e.getSize(), l = n.screen.getCursorScreenPoint(),
                    c = n.screen.getDisplayNearestPoint(l), u = c.scaleFactor, d = c.size.width, h = c.size.height,
                    f = s[0], p = s[1];
                o[0] + f > d && (f = d - o[0]), o[1] + p > h && (p = h - o[1]);
                let v = o[0] + (f - a[0]) / 2, m = o[1] + (p - a[1]) / 2;
                v < 0 ? v = 0 : v > d - a[0] && (v = d - a[0]), m < 0 ? m = 0 : m > h - a[1] && (m = h - a[1]), i.setWindowPos(r, 0, v * u, m * u, 0, 0, 5)
            } while (0)
        }, e.bringWindowToTop = function (e) {
            e || (e = n.remote.getCurrentWindow().getNativeWindowHandle().readUIntLE(0, 4));
            n.ipcRenderer.send(r.ThunderChannelList.channelMRBringWindowToTop, e)
        }
    }(t.ThunderWindowNS || (t.ThunderWindowNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(2), o = i(8), s = i(20);
    let a = null;
    const l = i(1).default.getLogger("url.helper");
    !function (e) {
        function t(e) {
            let t = !0;
            if ("string" == typeof e) if (40 === e.length || 32 === e.length) {
                for (let i = 0; i < e.length; i++) if (e.charCodeAt(i) > 127) {
                    t = !1;
                    break
                }
            } else t = !1; else t = !1;
            return t
        }

        function c(e, i = !0) {
            i = void 0 === i || i;
            let n = !1;
            do {
                if ("string" != typeof e || "" === e) break;
                let r = e.trim();
                if ("" === r) break;
                if (s.ThunderHelper.getTaskTypeFromUrl(r) === o.DownloadKernel.TaskType.Unkown) {
                    if (!i) break;
                    t(r) && (n = !0)
                } else n = !0;
                n || r.match(/^file:\/\/\//) && (n = !0)
            } while (0);
            return n
        }

        e.isMagnetCode = t, e.fixMagnetUrl = function (e) {
            let i = "";
            do {
                if ("string" != typeof e || "" === e) break;
                if ("" === (i = e.trim())) break;
                s.ThunderHelper.getTaskTypeFromUrl(i) === o.DownloadKernel.TaskType.Unkown && t(i) && (i = "magnet:?xt=urn:btih:" + i)
            } while (0);
            return i
        }, e.isUrlValid = c, e.isBirdKey = function (e) {
            return e ? e.match(/#[Xx]([0-9a-zA-Z])+#/g) : null
        }, e.isCustomProtocol = function (e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                null === a && (a = yield Promise.resolve().then(() => i(31)));
                let n = a.parse(e);
                do {
                    if (null === n || void 0 === n) break;
                    let e = n.protocol;
                    if ("magnet:" === e) {
                        t = !0;
                        break
                    }
                    if ("thunder:" === e) {
                        t = !0;
                        break
                    }
                    if ("ed2k:" === e) {
                        t = !0;
                        break
                    }
                } while (0);
                return t
            })
        }, e.isP2spOrEmuleUrl = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let i = e.trim();
                if ("" === i) break;
                let n = s.ThunderHelper.getTaskTypeFromUrl(i);
                if (n === o.DownloadKernel.TaskType.P2sp || n === o.DownloadKernel.TaskType.Emule) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }, e.isSupportUrl = function (e) {
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
                if ("ed2k://" === e.substr(0, "ed2k://".length)) {
                    t = !0;
                    break
                }
                if ("thunder://" === e.substr(0, "thunder://".length)) {
                    t = !0;
                    break
                }
                if ("magnet:?" === e.substr(0, "magnet:?".length)) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        };
        let u = ".edu;.gov;.mil;.hk;.tw;.com.tw;.com.tw;.aero;.biz;.coop;.info;.museum;.name;.pro;";
        u += ".com;.cn;.xin;.net;.top;.xyz;.wang;.shop;.site;.club;.cc;.fun;.online;.biz;.red;.link;.ltd;.mobi;.info;.org;", u += ".com.cn;.net.cn;.org.cn;.gov.cn;.name;.vip;.work;.tv;.co;.kim;.group;.tech;.store;.ren;.ink;.pub;.live;.wiki;.design;";
        const d = (u += ".me").split(";");

        function h(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e || "" === e) break;
                if (-1 !== d.indexOf(e)) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }

        function f(e) {
            let t = null;
            do {
                if (void 0 === e || null === e) break;
                if ("" === (e = e.trim())) break;
                let i = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e);
                if (null === i) break;
                l.information("url parse result ", i), t = {};
                let n = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
                for (let e = 0; e < n.length; e++) t[n[e]] = i[e];
                l.information("url parse", t)
            } while (0);
            return t
        }

        e.isUsualDomainSuffix = h, e.urlParse = f, e.isUrl = function (e) {
            let t = !1, i = e;
            do {
                if (void 0 === e || null === e) break;
                if (c(e, !1)) {
                    t = !0;
                    break
                }
                if (e.trim().match(/^file:\/\/\//)) {
                    t = !0;
                    break
                }
                let n = f(e);
                if (null === n) {
                    l.information("url parse failed");
                    break
                }
                if (void 0 === n.host || null === n.host) break;
                if (void 0 !== n.scheme) {
                    t = !0;
                    break
                }
                let o = n.host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
                if (o) {
                    if (l.information("url parse is ip", o), Number(o[1]) <= 0 || Number(o[1]) > 255) {
                        t = !1;
                        break
                    }
                    if (Number(o[2]) < 0 || Number(o[2]) > 255) {
                        t = !1;
                        break
                    }
                    if (Number(o[4]) < 0 || Number(o[4]) > 255) {
                        t = !1;
                        break
                    }
                    if (Number(o[4]) < 0 || Number(o[4]) > 255) {
                        t = !1;
                        break
                    }
                    t = !0, void 0 === n.scheme && void 0 !== n.port && (i = `http://${e}`);
                    break
                }
                if (n.host.match(/\.{2,}/)) {
                    l.information("url parse has multi dot"), t = !1;
                    break
                }
                let s = r.extname(n.host);
                if ("" === s) break;
                if (h(s)) {
                    t = !0;
                    break
                }
            } while (0);
            return l.information("url parse isUrl", t), {ret: t, suggest: i}
        }, e.isFileNameValid = function (e) {
            let t = !1;
            do {
                if (void 0 === e) break;
                if (null === e) break;
                if ("" === (e = e.trim())) break;
                if ("." === e[0]) break;
                if (e.match(/[\/\\"<>\?\*|]/)) break;
                t = !0
            } while (0);
            return t
        }, e.isSuffixNeedDownload = function (e) {
            let t = !0;
            do {
                if (void 0 === e) break;
                if ("" === e || "." === e) break;
                if (e = e.toLowerCase(), -1 !== ["txt", "url", "html", "htm", "mht", "nfo"].indexOf(e)) {
                    t = !1;
                    break
                }
            } while (0);
            return t
        }
    }(t.URLHelperNS || (t.URLHelperNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(1).default.getLogger("GetSkinInfo");
    let s;
    (function () {
        return n(this, void 0, void 0, function* () {
            if ("renderer" === process.type) {
                o.information("renderer process");
                const e = yield Promise.resolve().then(() => i(14)), t = yield Promise.resolve().then(() => i(5));
                e.default("GetSkinInfo").then(e => {
                    s = e, o.information("send OnChangeSkin", e)
                }).catch(e => {
                    o.warning(e)
                }), t.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                    s = e, o.information("send OnChangeSkin", e)
                })
            } else "browser" === process.type && (o.information("main process"), r.ipcMain.on("OnChangeSkin", (e, t) => {
                o.information("OnChangeSkin", t), s = t
            }))
        })
    })().catch(e => {
        o.information(e)
    }), t.default = function () {
        return s
    }
}, function (e, t) {
    e.exports = require("stream")
}, , , , , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        function t(e) {
            let t = e.toString(16).toUpperCase();
            return t.length < 2 && (t = "0" + t), t
        }

        function i(e, i, n, r) {
            return "0x" + t(r) + t(e) + t(i) + t(n)
        }

        e.rgbaStringToHexWith0xBegin = function (e) {
            if (void 0 !== e) {
                let t = e.split(",");
                return i(parseInt(t[0] || "0", 10), parseInt(t[1] || "0", 10), parseInt(t[2] || "0", 10), parseInt(t[3] || "255", 10))
            }
        }, e.colorNumberToHex = t, e.rgbaToHexWith0xBegin = i
    }(t.ColorUtilNS || (t.ColorUtilNS = {}))
}, function (e, t) {
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
}, function (e, t) {
    !function (e) {
        var t,
            i = '<svg><symbol id="td-icon-svg-file" viewBox="0 0 1204 1024"><path d="M180.705882 1024c-102.4 0-180.705882-78.305882-180.705882-180.705882V180.705882c0-102.4 78.305882-180.705882 180.705882-180.705882h240.941177c102.4 0 180.705882 78.305882 180.705882 180.705882h421.647059c102.4 0 180.705882 78.305882 180.705882 180.705883v481.882353c0 102.4-78.305882 180.705882-180.705882 180.705882H180.705882z" fill="#FFC25A" ></path><path d="M301.176471 361.411765h602.352941c66.258824 0 120.470588 54.211765 120.470588 120.470588v361.411765c0 66.258824-54.211765 120.470588-120.470588 120.470588H301.176471c-66.258824 0-120.470588-54.211765-120.470589-120.470588V481.882353c0-66.258824 54.211765-120.470588 120.470589-120.470588z" fill="#FFFFFF" ></path><path d="M180.705882 542.117647h843.294118c102.4 0 180.705882 78.305882 180.705882 180.705882v120.470589c0 102.4-78.305882 180.705882-180.705882 180.705882H180.705882c-102.4 0-180.705882-78.305882-180.705882-180.705882v-120.470589c0-102.4 78.305882-180.705882 180.705882-180.705882z" fill="#FFD68F" ></path></symbol></svg>',
            n = function (e, t) {
                t.firstChild ? function (e, t) {
                    t.parentNode.insertBefore(e, t)
                }(e, t.firstChild) : t.appendChild(e)
            };
        if ((t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss") && !e.__iconfont__svg__cssinject__) {
            e.__iconfont__svg__cssinject__ = !0;
            try {
                document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
            } catch (e) {
                console && console.log(e)
            }
        }
        !function (t) {
            if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0); else {
                var i = function () {
                    document.removeEventListener("DOMContentLoaded", i, !1), t()
                };
                document.addEventListener("DOMContentLoaded", i, !1)
            } else document.attachEvent && function (e, t) {
                var i = e.document, n = !1, r = function () {
                    n || (n = !0, t())
                }, o = function () {
                    try {
                        i.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(o, 50)
                    }
                    r()
                };
                o(), i.onreadystatechange = function () {
                    "complete" == i.readyState && (i.onreadystatechange = null, r())
                }
            }(e, t)
        }(function () {
            var e, t;
            (e = document.createElement("div")).innerHTML = i, i = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", n(t, document.body))
        })
    }(window)
}, function (e, t, i) {
    e.exports = i(9)(61)
}, , function (e, t) {
    e.exports = require("assert")
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(1), o = i(14), s = r.default.getLogger("FetchRes"), a = {
        mock: "http://easy-mock.com/mock/59f0652c1bd72e7a888988ab/sl",
        test: "http://api-xl9-ssl.xunlei.com/sl_dev",
        pre: "http://api-xl9-ssl.xunlei.com/sl_pre",
        prod: "http://api-xl9-ssl.xunlei.com/sl"
    };

    function l({url: e, data: t, method: r = "get"}) {
        return n(this, arguments, void 0, function* () {
            s.information("fetchFromApiProxy", arguments);
            try {
                const n = yield Promise.all([o.default("GetUserID"), o.default("GetSessionID"), o.default("GetPeerID")]), [a, l, c] = n;
                s.information(n);
                let u = {
                    _sessid: l,
                    _uid: a,
                    _m: r,
                    _h: [`Peer-Id:${c}`, `User-Id:${a}`, `Session-Id:${l}`, "App-Type:pc_xunlei", ...t && t._h || []]
                };
                t && t._h && delete t._h;
                let d = Object.assign({}, u, "get" === r && t);
                s.information("fetchFromApiProxy data", d);
                const h = yield i(24);
                return h.defaults.adapter = i(22), "post" === r && (h.defaults.headers["Content-Type"] = "application/json"), h.request({
                    method: r,
                    url: e,
                    params: d,
                    data: t
                }).then(e => (s.information("fetchFromApiProxy success", e), e)).catch(e => {
                    s.information("fetchFromApiProxy failed", e)
                })
            } catch (e) {
                return {error: e}
            }
        })
    }

    t.fetchFromApiProxy = l, t.fetchSlRes = function ({url: e, data: t, method: i = "get"}, r = "prod") {
        return n(this, void 0, void 0, function* () {
            let n = a[r], c = yield o.default("GetValue", "ConfigFetchInterface", "TestServer", 0);
            return 1 === c ? n = a.test : 2 === c && (n = a.pre), s.information("当前fetchSlRes 是否测试服:", c, " 远程地址:", n), l({
                url: `${n}${e}`,
                data: t,
                method: i
            })
        })
    }, t.fetchPCRes = function ({url: e, data: t, method: i = "get"}, r = "prod", o = !1) {
        return n(this, void 0, void 0, function* () {
            let n = "http://api-xl9-ssl.xunlei.com";
            return o && (n = "http://api-shoulei-ssl.xunlei.com"), l({url: `${n}${e}`, data: t, method: i})
        })
    }, t.fetchRequest = function ({url: e, data: t, method: r = "get"}) {
        return n(this, arguments, void 0, function* () {
            s.information("fetchRequest", arguments);
            try {
                const n = yield i(24);
                return n.defaults.adapter = i(22), "post" === r && (n.defaults.headers["Content-Type"] = "application/json"), n.request({
                    method: r,
                    url: e,
                    params: "get" === r && t ? t : {},
                    data: "post" === r && t ? t : {}
                }).then(e => (s.information("fetchRequest success", e), e))
            } catch (e) {
                return {error: e}
            }
        })
    }
}, function (e, t, i) {
    e.exports = i(9)(24)
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(75), r = i(48);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\components\\select-native.vue", t.default = a.exports
}, , , , , , , , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(104), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(12);
    let s = class extends r.Vue {
        constructor() {
            super(...arguments), this.tipsText = "", this.isShowTips = !1
        }

        handleDocClick() {
            this.tipsText = "", this.isShowTips = !1
        }

        mounted() {
            document.addEventListener("mousedown", this.handleDocClick)
        }

        destroyed() {
            document.removeEventListener("mousedown", this.handleDocClick)
        }

        handleInputChange(e) {
            let t = !0;
            do {
                if (this.isAlpha) {
                    if (e.length > 1) {
                        this.tipsText = "最大输入字符个数为1", this.isShowTips = !0, t = !1;
                        break
                    }
                    if (!o.ThunderUtil.isAlpha(e)) {
                        this.tipsText = "只能为字母", this.isShowTips = !0, t = !1;
                        break
                    }
                } else if (this.isNumber) {
                    if (!o.ThunderUtil.isDigital(e)) {
                        this.tipsText = "输入值必须为数字", this.isShowTips = !0, t = !1;
                        break
                    }
                    let i = Number(e);
                    if (void 0 !== this.min && null !== this.min && i < this.min) {
                        this.tipsText = "输入值必须大于等于" + this.min, this.isShowTips = !0, t = !1;
                        break
                    }
                    if (void 0 !== this.max && null !== this.max && i > this.max) {
                        this.tipsText = "输入值必须小于等于" + this.max, this.isShowTips = !0, t = !1;
                        break
                    }
                }
            } while (0);
            t ? this.$emit("input", e) : this.$emit("input", this.value, e)
        }
    };
    n([r.Prop({default: "top"})], s.prototype, "placement", void 0), n([r.Prop({})], s.prototype, "value", void 0), n([r.Prop({default: !1})], s.prototype, "isNumber", void 0), n([r.Prop({})], s.prototype, "max", void 0), n([r.Prop({})], s.prototype, "min", void 0), n([r.Prop({default: !1})], s.prototype, "isAlpha", void 0), s = n([r.Component], s), t.default = s
}, , function (e, t, i) {
    "use strict";
    var n = i(11), r = i(60), o = i(108), s = i(36);

    function a(e) {
        var t = new o(e), i = r(o.prototype.request, t);
        return n.extend(i, o.prototype, t), n.extend(i, t), i
    }

    var l = a(s);
    l.Axios = o, l.create = function (e) {
        return a(n.merge(s, e))
    }, l.Cancel = i(67), l.CancelToken = i(124), l.isCancel = i(66), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = i(125), e.exports = l, e.exports.default = l
}, function (e, t) {
    function i(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (i(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(36), r = i(11), o = i(119), s = i(120);

    function a(e) {
        this.defaults = e, this.interceptors = {request: new o, response: new o}
    }

    a.prototype.request = function (e) {
        "string" == typeof e && (e = r.merge({url: arguments[0]}, arguments[1])), (e = r.merge(n, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0], i = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) i = i.then(t.shift(), t.shift());
        return i
    }, r.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (t, i) {
            return this.request(r.merge(i || {}, {method: e, url: t}))
        }
    }), r.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (t, i, n) {
            return this.request(r.merge(n || {}, {method: e, url: t, data: i}))
        }
    }), e.exports = a
}, function (e, t, i) {
    "use strict";
    var n = i(11);
    e.exports = function (e, t) {
        n.forEach(e, function (i, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = i, delete e[n])
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11), r = i(61), o = i(63), s = i(111), a = i(112), l = i(37),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(113);
    e.exports = function (e) {
        return new Promise(function (t, u) {
            var d = e.data, h = e.headers;
            n.isFormData(d) && delete h["Content-Type"];
            var f = new XMLHttpRequest, p = "onreadystatechange", v = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || a(e.url) || (f = new window.XDomainRequest, p = "onload", v = !0, f.onprogress = function () {
            }, f.ontimeout = function () {
            }), e.auth) {
                var m = e.auth.username || "", g = e.auth.password || "";
                h.Authorization = "Basic " + c(m + ":" + g)
            }
            if (f.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f[p] = function () {
                if (f && (4 === f.readyState || v) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                    var i = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null, n = {
                        data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                        status: 1223 === f.status ? 204 : f.status,
                        statusText: 1223 === f.status ? "No Content" : f.statusText,
                        headers: i,
                        config: e,
                        request: f
                    };
                    r(t, u, n), f = null
                }
            }, f.onerror = function () {
                u(l("Network Error", e, null, f)), f = null
            }, f.ontimeout = function () {
                u(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null
            }, n.isStandardBrowserEnv()) {
                var _ = i(114),
                    y = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                y && (h[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in f && n.forEach(h, function (e, t) {
                void 0 === d && "content-type" === t.toLowerCase() ? delete h[t] : f.setRequestHeader(t, e)
            }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
                f.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                f && (f.abort(), u(e), f = null)
            }), void 0 === d && (d = null), f.send(d)
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, i, o, s = {};
        return e ? (n.forEach(e.split("\n"), function (e) {
            if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), i = n.trim(e.substr(o + 1)), t) {
                if (s[t] && r.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([i]) : s[t] ? s[t] + ", " + i : i
            }
        }), s) : s
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11);
    e.exports = n.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");

        function r(e) {
            var n = e;
            return t && (i.setAttribute("href", n), n = i.href), i.setAttribute("href", n), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }

        return e = r(window.location.href), function (t) {
            var i = n.isString(t) ? r(t) : t;
            return i.protocol === e.protocol && i.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, i) {
    "use strict";
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function r() {
        this.message = "String contains an invalid character"
    }

    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, i, o = String(e), s = "", a = 0, l = n; o.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((i = o.charCodeAt(a += .75)) > 255) throw new r;
            t = t << 8 | i
        }
        return s
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11);
    e.exports = n.isStandardBrowserEnv() ? {
        write: function (e, t, i, r, o, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), n.isString(r) && a.push("path=" + r), n.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, t, i) {
    function n() {
        var e;
        try {
            e = t.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    (t = e.exports = i(116)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, t.formatArgs = function (e) {
        var i = this.useColors;
        if (e[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + e[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff), !i) return;
        var n = "color: " + this.color;
        e.splice(1, 0, n, "color: inherit");
        var r = 0, o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && "%c" === e && (o = ++r)
        }), e.splice(o, 0, n)
    }, t.save = function (e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {
        }
    }, t.load = n, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage
        } catch (e) {
        }
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }, t.enable(n())
}, function (e, t, i) {
    function n(e) {
        var i;

        function n() {
            if (n.enabled) {
                var e = n, r = +new Date, o = r - (i || r);
                e.diff = o, e.prev = i, e.curr = r, i = r;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var l = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function (i, n) {
                    if ("%%" === i) return i;
                    l++;
                    var r = t.formatters[n];
                    if ("function" == typeof r) {
                        var o = s[l];
                        i = r.call(e, o), s.splice(l, 1), l--
                    }
                    return i
                }), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }

        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function (e) {
            var i, n = 0;
            for (i in e) n = (n << 5) - n + e.charCodeAt(i), n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }(e), n.destroy = r, "function" == typeof t.init && t.init(n), t.instances.push(n), n
    }

    function r() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }

    (t = e.exports = n.debug = n.default = n).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
        t.enable("")
    }, t.enable = function (e) {
        var i;
        t.save(e), t.names = [], t.skips = [];
        var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length;
        for (i = 0; i < r; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (i = 0; i < t.instances.length; i++) {
            var o = t.instances[i];
            o.enabled = t.enabled(o.namespace)
        }
    }, t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var i, n;
        for (i = 0, n = t.skips.length; i < n; i++) if (t.skips[i].test(e)) return !1;
        for (i = 0, n = t.names.length; i < n; i++) if (t.names[i].test(e)) return !0;
        return !1
    }, t.humanize = i(117), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function (e, t) {
    var i = 1e3, n = 60 * i, r = 60 * n, o = 24 * r, s = 365.25 * o;

    function a(e, t, i) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
    }

    e.exports = function (e, t) {
        t = t || {};
        var l, c = typeof e;
        if ("string" === c && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return a * s;
                case"days":
                case"day":
                case"d":
                    return a * o;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return a * r;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return a * n;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return a * i;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return a;
                default:
                    return
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? a(l = e, o, "day") || a(l, r, "hour") || a(l, n, "minute") || a(l, i, "second") || l + " ms" : function (e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= r) return Math.round(e / r) + "h";
            if (e >= n) return Math.round(e / n) + "m";
            if (e >= i) return Math.round(e / i) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function (e) {
    e.exports = {
        _args: [["axios@0.18.0", "D:\\thunderx_bin\\trunk\\build\\app"]],
        _from: "axios@0.18.0",
        _id: "axios@0.18.0",
        _inBundle: !1,
        _integrity: "sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "axios@0.18.0",
            name: "axios",
            escapedName: "axios",
            rawSpec: "0.18.0",
            saveSpec: null,
            fetchSpec: "0.18.0"
        },
        _requiredBy: ["/", "/@types/axios", "/@xunlei/thunderx-login-main"],
        _resolved: "http://xnpm.repo.xunlei.cn/axios/-/axios-0.18.0.tgz",
        _spec: "0.18.0",
        _where: "D:\\thunderx_bin\\trunk\\build\\app",
        author: {name: "Matt Zabriskie"},
        browser: {"./lib/adapters/http.js": "./lib/adapters/xhr.js"},
        bugs: {url: "https://github.com/axios/axios/issues"},
        bundlesize: [{path: "./dist/axios.min.js", threshold: "5kB"}],
        dependencies: {"follow-redirects": "^1.3.0", "is-buffer": "^1.1.5"},
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
            bundlesize: "^0.5.7",
            coveralls: "^2.11.9",
            "es6-promise": "^4.0.5",
            grunt: "^1.0.1",
            "grunt-banner": "^0.6.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-clean": "^1.0.0",
            "grunt-contrib-nodeunit": "^1.0.0",
            "grunt-contrib-watch": "^1.0.0",
            "grunt-eslint": "^19.0.0",
            "grunt-karma": "^2.0.0",
            "grunt-ts": "^6.0.0-beta.3",
            "grunt-webpack": "^1.0.18",
            "istanbul-instrumenter-loader": "^1.0.0",
            "jasmine-core": "^2.4.1",
            karma: "^1.3.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-coverage": "^1.0.0",
            "karma-firefox-launcher": "^1.0.0",
            "karma-jasmine": "^1.0.2",
            "karma-jasmine-ajax": "^0.1.13",
            "karma-opera-launcher": "^1.0.0",
            "karma-safari-launcher": "^1.0.0",
            "karma-sauce-launcher": "^1.1.0",
            "karma-sinon": "^1.0.5",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-webpack": "^1.7.0",
            "load-grunt-tasks": "^3.5.2",
            minimist: "^1.2.0",
            sinon: "^1.17.4",
            typescript: "^2.0.3",
            "url-search-params": "^0.6.1",
            webpack: "^1.13.1",
            "webpack-dev-server": "^1.14.1"
        },
        homepage: "https://github.com/axios/axios",
        keywords: ["xhr", "http", "ajax", "promise", "node"],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {type: "git", url: "git+https://github.com/axios/axios.git"},
        scripts: {
            build: "NODE_ENV=production grunt build",
            coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
            examples: "node ./examples/server.js",
            postversion: "git push && git push --tags",
            preversion: "npm test",
            start: "node ./sandbox/server.js",
            test: "grunt test && bundlesize",
            version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        version: "0.18.0"
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11);

    function r() {
        this.handlers = []
    }

    r.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = r
}, function (e, t, i) {
    "use strict";
    var n = i(11), r = i(121), o = i(66), s = i(36), a = i(122), l = i(123);

    function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return c(e), e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function (t) {
            return c(e), t.data = r(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return o(t) || (c(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(11);
    e.exports = function (e, t, i) {
        return n.forEach(i, function (i) {
            e = i(e, t)
        }), e
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(67);

    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var i = this;
        e(function (e) {
            i.reason || (i.reason = new n(e), t(i.reason))
        })
    }

    r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, r.source = function () {
        var e;
        return {
            token: new r(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = r
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, , , , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(212), r = i(166);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(591);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-select.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(71), r = i(70);
    !function (e) {
        e.setStyle = function (e, t) {
            if (null !== e) {
                let i = {windowPreference: r.WindowPreferenceNS.getWindowPreference()};
                e.setStyle(n(i, t))
            }
        }
    }(t.DropDownWindowSkinNS || (t.DropDownWindowSkinNS = {}))
}, , , , , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(225), r = i(162);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-tip.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-tooltip", {
            attrs: {
                content: e.tipsText,
                visible: e.isShowTips,
                placement: e.placement
            }
        }, [i("td-input", e._b({
            attrs: {
                value: e.value,
                isNumber: e.isNumber,
                max: e.max,
                min: e.min,
                isAlpha: e.isAlpha
            }, on: {input: e.handleInputChange}
        }, "td-input", e.$attrs, !1))], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , , , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(92), o = i(33), s = i(5), a = i(14), l = i(77), c = i(1).default.getLogger("ThunderBirdKey");
    var u;
    !function (e) {
        e[e.ShowUI_Decoding = 0] = "ShowUI_Decoding", e[e.ShowUI_Creating = 1] = "ShowUI_Creating", e[e.ShowUI_DecodeFailed = 2] = "ShowUI_DecodeFailed", e[e.ShowUI_CreateFailed = 3] = "ShowUI_CreateFailed", e[e.ShowUI_CreateSucc = 4] = "ShowUI_CreateSucc", e[e.ShowUI_CreateSuccDis = 5] = "ShowUI_CreateSuccDis"
    }(u = t.ShowType || (t.ShowType = {}));

    class d {
        constructor() {
            this.lastBirdKey = []
        }

        static GetInstance() {
            return d.instance || (d.instance = new d), d.instance
        }

        setLastBirdKey(e) {
            if (e && 0 !== e.length) {
                this.lastBirdKey = [];
                for (let t = 0; t < e.length; t++) this.lastBirdKey.push(e[t])
            }
        }

        getLastBirdKey() {
            return this.lastBirdKey
        }

        isSameBirdKey(e) {
            if (!this.lastBirdKey) return !1;
            if (e.length !== this.lastBirdKey.length) return !1;
            let t = 0;
            for (let i = 0; i < e.length; i++) e[i] === this.lastBirdKey[i] && t++;
            return t === e.length
        }
    }

    function h(e) {
        return r.fetchSlRes({url: "/xlppc.dljgo.api/url", data: {url: e, "Chat-Version": 2}, method: "post"})
    }

    d.instance = null, t.encodeBirdKey = function (e, t, i, n) {
        let o = {url: "/dlj_create", data: {url: t, uid: e, "Chat-Version": 2, type: i}, method: "post"};
        return "string" == typeof i && (o.data.type = i), "string" == typeof n && (o.data.passwd = n), r.fetchSlRes(o)
    }, t.setBirdKeyPriority = function (e, t, i = !1) {
        return r.fetchSlRes({url: "/dlj/option", data: {url: e, priority: i, "Chat-Version": 2}, method: "put"})
    }, t.queryBirdKeyInfo = h, t.getUserNameByID = function (e) {
        return r.fetchSlRes({url: "/user_info/pc_info", data: {uid: e}})
    }, t.decodeBirdKey = function (e) {
        return n(this, void 0, void 0, function* () {
            let t = yield new Promise(e => {
                s.NativeCallModule.nativeCall.CallNativeFunction("GetThunderVersion", (t, i) => {
                    e(0 === t ? i : "")
                })
            });
            return r.fetchSlRes({
                url: "/dlj/bird_key?key=" + e.toLowerCase(),
                data: {_h: ["Chat-Version:2", "Version-Name:" + t]},
                method: "get"
            })
        })
    }, t.openBirdKeyEncodeDialog = function (e, t) {
        return n(this, void 0, void 0, function* () {
            let i = function (e, t) {
                c.information("弹出生成迅雷口令面板,begin,url=", e), o.MessageBox.custom("BirdKeyShow", {
                    showType: u.ShowUI_Creating,
                    url: e,
                    statData: t
                }, {modal: !1}).catch(e => {
                    c.information("弹出生成迅雷口令面板,error=", e)
                }), c.information("弹出生成迅雷口令面板,end")
            };
            c.information("调用promise IsLogined 函数 Begin");
            let r = yield a.default("IsLogined");
            c.information("调用promise IsLogined 函数 End, isLogined=", r), r ? i(e, t) : h(e).then(r => n(this, void 0, void 0, function* () {
                if ("object" != typeof r) return Promise.resolve();
                if (!r.data) return Promise.resolve();
                if ("encrypted" === r.data.type) {
                    let n = yield l.default(!1, !0, "birdkey");
                    if (!n || "" === n) return;
                    i(e, t)
                } else i(e, t);
                return Promise.resolve()
            })).catch(e => {
                c.information("调用queryBirdKeyInfo 接口异常 error=", e)
            })
        })
    }, t.openBirdKeyDecodeDialog = function (e, t, i) {
        o.MessageBox.custom("BirdKeyShow", {
            showType: u.ShowUI_Decoding,
            birdkeyChars: e,
            statData: t,
            helperobj: i
        }, {modal: !1}).catch()
    }, t.saveVestUrlToConfig = function (e, t) {
        let i = t ? "vestURL" : "commonUrl";
        s.NativeCallModule.nativeCall.CallNativeFunction("GetValue", "BirdKeyVest", i, [], (t, n) => {
            let r = [];
            0 === t && (r = n), "" !== e && -1 === r.join().indexOf(e) && (r.push(e), s.NativeCallModule.nativeCall.CallNativeFunction("SetValue", "BirdKeyVest", i, r, e => e))
        })
    }, t.isVestUrl = function (e, t) {
        return n(this, void 0, void 0, function* () {
            return new Promise(i => {
                s.NativeCallModule.nativeCall.CallNativeFunction("GetValue", "BirdKeyVest", t, [], (t, n) => {
                    let r = [];
                    0 === t && (r = n), "" !== e && -1 !== r.join().indexOf(e) ? i(!0) : i(!1)
                })
            })
        })
    }, t.getBirdKeyMgr = function () {
        return d.GetInstance()
    }
}, , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.formatDate = function (e, t) {
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
            let i = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds()
            };
            for (let e in i) {
                let n = i[e] + "";
                new RegExp(`(${e})`).test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n : ("00" + (n = n)).substr(n.length)))
            }
            var n;
            if (/(f+)/.test(t)) {
                let i = e.getMilliseconds() + "";
                t = t.replace(RegExp.$1, ("000" + i).substr(i.length))
            }
            return t
        }, e.formatSeconds = function (e) {
            let t = "";
            do {
                if (e <= 0) {
                    t = "00:00:00";
                    break
                }
                let i = Math.floor(e / 3600), n = Math.floor(e / 60) % 60, r = Math.floor(e % 60);
                t = i < 10 ? "0" + i + ":" : i + ":", t += n < 10 ? "0" + n + ":" : n + ":", t += r < 10 ? "0" + r : "" + r
            } while (0);
            return t
        }, e.convertTimeToMinutes = function (e, t, i) {
            return 3600 * e + 60 * t + i
        }, e.convertMinuteToTime = function (e) {
            return [Math.floor(e / 3600), Math.floor(e / 60 % 60), Math.floor(e % 60)]
        }
    }(t.TimeHelperNS || (t.TimeHelperNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(5), o = i(21), s = i(1).default.getLogger("path-selector"), a = "PathAndCategory",
        l = "historyDownloadPaths", c = 8;

    function u(e) {
        s.information("SetConfigValue", e), r.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", a, l, e, e => {
            0 !== e ? s.information("写配置出错") : (s.information("setvalue success"), r.NativeCallModule.nativeCall.CallNativeFunction("SaveConfig", e => {
                0 !== e ? s.information("配置文件保存失败") : s.information("配置文件保存 success")
            }))
        })
    }

    !function (e) {
        function t() {
            return new Promise(e => {
                r.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", a, l, [], (t, i) => {
                    t === o.NativeFunctionErrorCode.Success ? (s.information("getHistoryPaths", i), e(i)) : e([])
                })
            })
        }

        e.getMaxHistoryPathsLen = function () {
            return c
        }, e.getHistoryPaths = t, e.addHistoryPaths = function (e) {
            return n(this, void 0, void 0, function* () {
                let i = yield t();
                do {
                    if (void 0 === e || null === e || "" === e) break;
                    if ("\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), i.includes(e)) break;
                    i.length >= c && i.splice(0, 1), i.push(e), u(i)
                } while (0)
            })
        }, e.deleteHistoryPath = function (e) {
            return n(this, void 0, void 0, function* () {
                let i = yield t();
                do {
                    if (void 0 === e || null === e || "" === e) break;
                    "\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1));
                    let t = i.indexOf(e);
                    if (-1 === t) break;
                    i.splice(t, 1), u(i)
                } while (0)
            })
        }, e.clearHistoryPaths = function () {
            return n(this, void 0, void 0, function* () {
                u([])
            })
        }
    }(t.HistoryPathsNS || (t.HistoryPathsNS = {}))
}, , function (e, t) {
    e.exports = require("buffer")
}, , , , , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(5), o = i(21);
    !function (e) {
        e.getValue = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                return new Promise(n => {
                    r.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", e, t, i, (e, t) => {
                        e === o.NativeFunctionErrorCode.Success ? n(t) : n(i)
                    })
                })
            })
        }, e.setValue = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                return new Promise((n, s) => {
                    r.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", e, t, i, e => {
                        e === o.NativeFunctionErrorCode.Success ? n() : s(new Error("SetConfigValue error"))
                    })
                })
            })
        }
    }(t.ConfigHelperNS || (t.ConfigHelperNS = {}))
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(218), r = i(164);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-button.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(213), r = i(168);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-input.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(216), r = i(174);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-text.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(159), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(590), o = i(594), s = i(130), a = i(157), l = i(596), c = i(597), u = i(156), d = i(598), h = i(599),
        f = i(155), p = i(600), v = i(4);
    let m = class extends v.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    n([v.Prop({})], m.prototype, "item", void 0), n([v.Prop({})], m.prototype, "formData", void 0), n([v.Prop()], m.prototype, "value", void 0), m = n([v.Component({
        components: {
            confCheckbox: r.default,
            confRadio: o.default,
            confSelect: s.default,
            confText: a.default,
            confCheckboxInput: l.default,
            confCheckboxSelect: c.default,
            confInput: u.default,
            confSpeedText: h.default,
            confTextarea: d.default,
            confBtn: f.default,
            confProxyList: p.default
        }
    })], m), t.default = m
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(161), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(4), s = i(154), a = i(137), l = i(155), c = i(130), u = i(156), d = i(592), h = i(593), f = i(157);
    let p = class extends o.Vue {
        handleInput(e, t = "") {
            return r(this, void 0, void 0, function* () {
                if ("" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t), void 0 !== this.item.linkItem && e) {
                    let t = yield s.ConfigHelperNS.getValue(this.formData[this.item.linkItem.name].section, this.formData[this.item.linkItem.name].key, "");
                    "" !== e && this.$emit("input", t, this.item.linkItem.name)
                }
            })
        }
    };
    n([o.Prop({})], p.prototype, "item", void 0), n([o.Prop({})], p.prototype, "formData", void 0), n([o.Prop()], p.prototype, "value", void 0), n([o.Prop()], p.prototype, "label", void 0), p = n([o.Component({
        components: {
            confTip: a.default,
            confBtn: l.default,
            confSelect: c.default,
            confInput: u.default,
            confSpeed: d.default,
            confSpeedTime: h.default,
            confText: f.default
        }
    })], p), t.default = p
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(163), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4);
    let o = class extends r.Vue {
    };
    n([r.Prop()], o.prototype, "classes", void 0), n([r.Prop()], o.prototype, "text", void 0), o = n([r.Component({})], o), t.default = o
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(165), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(4), s = i(154), a = i(33), l = i(28), c = i(12), u = i(5), d = i(137);
    let h = class extends o.Vue {
        popDialog() {
            switch (this.item.boxType) {
                case"speedConfBox":
                    u.NativeCallModule.nativeCall.CallNativeFunction("ShowCustomDownloadModeDlg", () => {
                    });
                    break;
                case"browserGuideConfBox":
                    u.NativeCallModule.nativeCall.CallNativeFunction("ShowBrowserGuideDlg", () => {
                    });
                    break;
                case"function":
                    this.item.handle();
                    break;
                case"pop":
                    this.messagePop()
            }
        }

        messagePop() {
            return r(this, void 0, void 0, function* () {
                let e = c.ThunderUtil.deepCopy(this.item.pop.formData);
                for (let t in e) e[t].value = yield s.ConfigHelperNS.getValue(this.item.pop.formData[t].section, this.item.pop.formData[t].key, this.item.pop.formData[t].value);
                a.MessageBox.pop({
                    title: this.item.pop.title,
                    size: this.item.pop.size,
                    schemas: this.item.pop.schema,
                    formData: e
                }, this.item.pop.dialogOption).then(e => {
                    if (e.action === l.MessageBoxNS.Action.OK) for (let t in e.formData) s.ConfigHelperNS.setValue(e.formData[t].section, e.formData[t].key, e.formData[t].value)
                }).catch()
            })
        }
    };
    n([o.Prop({})], h.prototype, "item", void 0), n([o.Prop()], h.prototype, "classes", void 0), n([o.Prop()], h.prototype, "text", void 0), n([o.Prop()], h.prototype, "disabled", void 0), n([o.Prop({})], h.prototype, "formData", void 0), h = n([o.Component({components: {confTip: d.default}})], h), t.default = h
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(167), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(3), s = i(199), a = i(94), l = i(1).default.getLogger("conf-select");
    let c = class extends r.Vue {
        constructor() {
            super(...arguments), this.schema = null, this.tooltipVisible = !1, this.tipContent = "", this.dyNamicOptions = [], this.valueData = ""
        }

        onFormDataChange(e) {
            this.item.updateByDataChange && e && e[this.name] && (this.valueData = e[this.name].value)
        }

        handleInput(e) {
            void 0 === this.item.hasDeleteOption || e !== this.item.deleteOptionText ? (this.tooltipVisible || this.item.blurUpdate || this.$emit("input", e, this.item.name), this.valueData = e) : this.$emit("input", [], this.item.optionByName)
        }

        handleOutFocus() {
            this.item.blurUpdate && !this.tooltipVisible && this.$emit("input", this.valueData, this.item.name)
        }

        selectPath() {
            let e = o.remote.dialog.showOpenDialog({defaultPath: this.valueData, properties: [this.fileType]});
            void 0 !== e && (void 0 !== this.name ? this.$emit("input", e[0], this.name) : this.$emit("input", e[0], this.item.name), this.valueData = e[0])
        }

        get optionList() {
            if (this.item.optionByName && this.formData[this.item.optionByName] && this.formData[this.item.optionByName].value) {
                let e = this.formData[this.item.optionByName].value,
                    t = [...e].reverse().slice(0, this.item.maxOptionLen || e.length);
                return this.item.deleteOptionText && t.push(this.item.deleteOptionText), t
            }
            return this.options
        }

        get fileType() {
            return this.item.slotOption
        }

        get rules() {
            let e;
            do {
                if (!this.item.rules) break;
                e = this.item.rules.map(e => Array.isArray(e) ? new Function(e[0], e[1]) : e)
            } while (0);
            return e
        }

        validate(e) {
            l.information("value....", e), this.handleInput(e), void 0 !== this.item.hasDeleteOption && e === this.item.deleteOptionText || this.item.rules && this.schema.validate({[this.item.name]: e}, (e, t) => {
                l.information("errors", e), null === e ? this.tooltipVisible = !1 : (l.information("路径有误", e), this.tipContent = e[0].message, this.tooltipVisible = !0)
            })
        }

        created() {
            this.item.rules && (this.schema = new s.default({[this.item.name]: this.rules})), void 0 !== this.value ? this.valueData = this.value.value.toString() : this.valueData = this.formData[this.item.name].value.toString()
        }
    };
    n([r.Prop({})], c.prototype, "item", void 0), n([r.Prop()], c.prototype, "label", void 0), n([r.Prop({})], c.prototype, "formData", void 0), n([r.Prop()], c.prototype, "options", void 0), n([r.Prop()], c.prototype, "value", void 0), n([r.Prop()], c.prototype, "disabled", void 0), n([r.Prop()], c.prototype, "classes", void 0), n([r.Prop()], c.prototype, "name", void 0), n([r.Prop()], c.prototype, "placeHolder", void 0), n([r.Watch("formData", {deep: !0})], c.prototype, "onFormDataChange", null), c = n([r.Component({components: {SelectNative: a.default}})], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(169), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(199), o = i(4), s = i(155);
    let a = class extends o.Vue {
        constructor() {
            super(...arguments), this.shortcutKey = "", this.funKey = !0, this.valueData = " ", this.canRegister = !1, this.schema = null, this.tooltip = "", this.tooltipVisible = !1
        }

        get rules() {
            let e;
            do {
                if (!this.item.rules) break;
                e = this.item.rules.map(e => Array.isArray(e) ? new Function(e[0], e[1]) : e)
            } while (0);
            return e
        }

        handleInput(e) {
            this.valueData = e, this.$emit("input", e, this.name)
        }

        handleChange(e) {
            let t = e.target;
            this.valueData = t.value, void 0 !== this.item.ShortcutKey && this.canRegister ? this.$emit("input", t.value, this.name) : void 0 === this.item.ShortcutKey && this.$emit("input", t.value, this.name)
        }

        handleKeyDown(e) {
            if (void 0 !== this.item.ShortcutKey) {
                let t = /Digit\d/.test(e.code) || e.keyCode >= 65 && e.keyCode <= 90;
                if (this.shortcutKey = "", this.funKey = !1, this.canRegister = !1, this.valueData = "", "Backspace" === e.key) return this.valueData = "无", void this.$emit("input", "", this.name);
                e.altKey && (this.shortcutKey = "Alt+"), e.ctrlKey && (this.shortcutKey = "" === this.shortcutKey ? "Crtl+" : `${this.shortcutKey}Crtl+`), e.shiftKey && (this.shortcutKey = "" === this.shortcutKey ? "Shift+" : `${this.shortcutKey}Shift+`);
                let i = "Alt" === e.key || "Shift" === e.key || "Control" === e.key ? "" : t ? e.code[e.code.length - 1] : e.key;
                this.valueData = this.shortcutKey + i, "" !== i && (this.funKey = !0), this.shortcutKey + i !== i && "" !== i && (this.canRegister = !0, this.valueData = this.shortcutKey + i, this.$emit("input", this.valueData, this.name))
            }
        }

        handleKeyup() {
            this.funKey || void 0 === this.item.ShortcutKey || (this.valueData = "无", this.$emit("input", "", this.name))
        }

        mounted() {
            this.valueData = this.value.value
        }

        validate(e) {
            this.item.rules && this.schema.validate({[this.item.name]: e}, (e, t) => {
                this.tooltipVisible = null !== e
            })
        }

        outFocus() {
            this.tooltipVisible = !1
        }

        created() {
            this.item.rules && (this.schema = new r.default({[this.item.name]: this.rules}))
        }
    };
    n([o.Prop()], a.prototype, "item", void 0), n([o.Prop({})], a.prototype, "formData", void 0), n([o.Prop()], a.prototype, "disabled", void 0), n([o.Prop()], a.prototype, "value", void 0), n([o.Prop()], a.prototype, "name", void 0), n([o.Prop()], a.prototype, "label", void 0), a = n([o.Component({components: {confBtn: s.default}})], a), t.default = a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(171), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(199), o = i(4);
    let s = class extends o.Vue {
        constructor() {
            super(...arguments), this.schema = null, this.tooltip = "", this.tooltipVisible = !1, this.timeout = null
        }

        get rules() {
            return (this.item.rules || []).map(e => Array.isArray(e) ? new Function(e[0], e[1]) : e)
        }

        get doEmit() {
            return this.item.doEmit ? new Function(this.item.doEmit[0], this.item.doEmit[1]) : null
        }

        get doBlur() {
            return this.item.doBlur ? new Function(this.item.doBlur[0], this.item.doBlur[1]) : null
        }

        get sliderValue() {
            let e;
            return e = "number" == typeof this.value ? this.value : "object" == typeof this.value ? Number(this.value.value) : Number(this.value), this.item.scales && this.item.scales.length ? Math.min(Math.max(this.item.scales[0], e), this.item.scales[this.item.scales.length - 1]) : e
        }

        handleSliderUpdate(e) {
            this.handleInput(e.toString())
        }

        handleInput(e) {
            this.doEmit ? this.doEmit(this.item.name, e, this.value.value) : this.$emit("input", e, this.item.name), this.doValidate(e)
        }

        doValidate(e) {
            this.schema && this.schema.validate({[this.item.name]: e}, (e, t) => {
                null === e ? this.hideTooltip() : this.showTooltip(e[0].message)
            })
        }

        handleBlur() {
            let e;
            e = "object" == typeof this.value ? this.value.value : this.value, this.doBlur && this.doBlur(this.item.name, e), this.$nextTick(() => {
                let e;
                e = "object" == typeof this.value ? this.value.value : this.value, this.doValidate(e)
            })
        }

        showTooltip(e) {
            this.tooltip = e, this.$refs.tooltip.show(this.$refs.input.$el)
        }

        hideTooltip() {
            this.$refs.tooltip.hide()
        }

        created() {
            this.item.rules && (this.schema = new r.default({[this.item.name]: this.rules}))
        }
    };
    n([o.Prop({})], s.prototype, "item", void 0), n([o.Prop()], s.prototype, "value", void 0), n([o.Prop()], s.prototype, "disabled", void 0), s = n([o.Component], s), t.default = s
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(173), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(94);
    let s = class extends r.Vue {
        constructor() {
            super(...arguments), this.data = [{
                label: "开始限速时间",
                options: [{index: 0, type: "hour"}, {index: 1, type: "minute"}]
            }, {
                label: "结束限速时间",
                options: [{index: 2, type: "hour"}, {index: 3, type: "minute"}]
            }], this.hours = Array.from({length: 24}, (e, t) => t), this.minutes = Array.from({length: 60}, (e, t) => t)
        }

        handleInput(e, t) {
            let i = this.value.slice(0), n = Object.assign({}, i[t]);
            n.value = e, i[t] = n, this.$emit("input", i, this.item.name)
        }
    };
    n([r.Prop({})], s.prototype, "item", void 0), n([r.Prop()], s.prototype, "value", void 0), n([r.Prop()], s.prototype, "disabled", void 0), s = n([r.Component({components: {SelectNative: o.default}})], s), t.default = s
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(175), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(5);
    let s = class extends r.Vue {
        constructor() {
            super(...arguments), this.userId = ""
        }

        get clas() {
            return void 0 !== this.classes ? this.classes : this.item.classes
        }

        get textContent() {
            return void 0 !== this.item.text ? this.item.text : this.text
        }

        mounted() {
            void 0 !== this.item.isReleventUser && this.item.isReleventUser && (o.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", e => {
                this.userId = e
            }), o.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                this.userId = ""
            }))
        }
    };
    n([r.Prop({})], s.prototype, "item", void 0), n([r.Prop()], s.prototype, "classes", void 0), n([r.Prop()], s.prototype, "extIndex", void 0), n([r.Prop()], s.prototype, "text", void 0), s = n([r.Component({})], s), t.default = s
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(177), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(4), s = i(137), a = i(155), l = i(156), c = i(130), u = i(595), d = i(5), h = i(14);
    let f = class extends o.Vue {
        constructor() {
            super(...arguments), this.userId = ""
        }

        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }

        setUserId() {
            return r(this, void 0, void 0, function* () {
                let e = yield h.default("GetUserID");
                this.userId = e
            })
        }

        mounted() {
            return r(this, void 0, void 0, function* () {
                void 0 !== this.item.isReleventUser && this.item.isReleventUser && (this.setUserId(), d.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", e => {
                    this.userId = e
                }), d.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                    this.userId = ""
                }))
            })
        }
    };
    n([o.Prop({})], f.prototype, "item", void 0), n([o.Prop({})], f.prototype, "formData", void 0), n([o.Prop()], f.prototype, "value", void 0), f = n([o.Component({
        components: {
            confTip: s.default,
            confBtn: a.default,
            confInput: l.default,
            confSelect: c.default,
            confContainer: u.default
        }
    })], f), t.default = f
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(179), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(130);
    let s = class extends r.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    n([r.Prop({})], s.prototype, "item", void 0), n([r.Prop({})], s.prototype, "formData", void 0), n([r.Prop()], s.prototype, "value", void 0), n([r.Prop()], s.prototype, "disabled", void 0), s = n([r.Component({components: {confSelect: o.default}})], s), t.default = s
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(181), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(137), s = i(156), a = i(157), l = i(130);
    let c = class extends r.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    n([r.Prop({})], c.prototype, "item", void 0), n([r.Prop({})], c.prototype, "formData", void 0), c = n([r.Component({
        components: {
            confTip: o.default,
            confInput: s.default,
            confText: a.default,
            confSelect: l.default
        }
    })], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(183), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(137), s = i(157), a = i(130);
    let l = class extends r.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    n([r.Prop({})], l.prototype, "item", void 0), n([r.Prop({})], l.prototype, "formData", void 0), l = n([r.Component({
        components: {
            confTip: o.default,
            confText: s.default,
            confSelect: a.default
        }
    })], l), t.default = l
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(185), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4);
    let o = class extends r.Vue {
        handleChange(e) {
            let t = e.target;
            this.$emit("input", t.value, this.item.name)
        }
    };
    n([r.Prop({})], o.prototype, "item", void 0), n([r.Prop({})], o.prototype, "formData", void 0), n([r.Prop()], o.prototype, "value", void 0), n([r.Prop()], o.prototype, "label", void 0), o = n([r.Component({components: {}})], o), t.default = o
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(187), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(4), s = i(154);
    let a = class extends o.Vue {
        constructor() {
            super(...arguments), this.maxDownloadSpeed = "", this.maxUploadSpeed = ""
        }

        onFormDataChange(e) {
            this.updateMaxDownloadSpeed(), this.updateMaxUploadSpeed()
        }

        standardNumber(e) {
            let t = parseInt(e + "", 10);
            return t > 9 ? t + "" : "0" + t
        }

        updateMaxDownloadSpeed() {
            return r(this, void 0, void 0, function* () {
                let e = "不限速";
                this.formData["ConfigNet-ConfigNet_Custom_DownloadSpeedChk"].value && (e = (yield s.ConfigHelperNS.getValue("ConfigNet", "ConfigNet_Custom_MaxDownloadSpeedTmp", 1024)) + "KB/S"), this.maxDownloadSpeed = e
            })
        }

        updateMaxUploadSpeed() {
            return r(this, void 0, void 0, function* () {
                let e = "不限速";
                this.formData["ConfigNet-ConfigNet_Custom_UploadSpeedChk"].value && (e = (yield s.ConfigHelperNS.getValue("ConfigNet", "ConfigNet_Custom_MaxUploadSpeedTmp", 1024)) + "KB/S"), this.maxUploadSpeed = e
            })
        }
    };
    n([o.Prop({})], a.prototype, "item", void 0), n([o.Prop({})], a.prototype, "formData", void 0), n([o.Watch("formData", {
        immediate: !0,
        deep: !0
    })], a.prototype, "onFormDataChange", null), a = n([o.Component], a), t.default = a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(189), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(4), s = i(154), a = i(33), l = i(28), c = i(235);
    let u = class extends o.Vue {
        constructor() {
            super(...arguments), this.selectedItem = null, this.proxyList = []
        }

        handleInput(e, t) {
            let i = this.value.slice(0), n = Object.assign({}, i[t]);
            n.value = e, i[t] = n, this.$emit("input", i, this.item.name)
        }

        handleAddProxyResult(e, t, i, n, r, o) {
            let s = !1, a = {name: e, host: t, port: i, type: n, userName: r, passWord: o};
            if (this.proxyList.length > 0) for (let t = 0; t < this.proxyList.length; ++t) if (this.proxyList[t].name === e) {
                s = !0;
                break
            }
            s || (this.proxyList.push(a), this.saveProxys())
        }

        handleAddProxy() {
            a.MessageBox.custom("AddProxy").then(e => {
                if (e.action === l.MessageBoxNS.Action.OK) {
                    let t = e.args.name, i = e.args.host, n = e.args.port, r = e.args.type, o = e.args.userName,
                        s = e.args.passWord;
                    this.handleAddProxyResult(t, i, n, r, o, s)
                }
            }).catch()
        }

        handleModifyProxy() {
            a.MessageBox.custom("AddProxy", this.selectedItem).then(e => r(this, void 0, void 0, function* () {
                if (e.action === l.MessageBoxNS.Action.OK) for (let t = 0; t < this.proxyList.length; ++t) if (this.proxyList[t].name === this.selectedItem.name) {
                    let i = this.selectedItem.name;
                    if (this.proxyList[t].name = e.args.name, this.proxyList[t].host = e.args.host, this.proxyList[t].port = e.args.port, this.proxyList[t].type = e.args.type, this.proxyList[t].userName = e.args.userName, this.proxyList[t].passWord = e.args.passWord, this.selectedItem = this.proxyList[t], this.saveProxys(), "2" === (yield s.ConfigHelperNS.getValue("ProxySetting", "ConfigProxy_Type", "0")) && (this.handleApplyProxy(), i === this.selectedItem.name)) {
                        let e = c.ProxyNS.ProxyType.Http;
                        "SOCKS5" === this.selectedItem.type && (e = c.ProxyNS.ProxyType.Sock5), c.ProxyNS.setProxy(e, this.selectedItem.host, this.selectedItem.port, this.selectedItem.userName, this.selectedItem.passWord)
                    }
                    break
                }
            })).catch()
        }

        handleDeleteProxy() {
            a.MessageBox.confirm({title: "您确定删除此代理吗？", type: a.MessageBox.ConfirmType.Warning}, {
                width: 400,
                height: 174,
                center: !0
            }).then(e => r(this, void 0, void 0, function* () {
                if (e.action === l.MessageBoxNS.Action.OK) for (let e = 0; e < this.proxyList.length; ++e) if (this.proxyList[e].name === this.selectedItem.name) {
                    let t = this.selectedItem.name;
                    this.proxyList.splice(e, 1), this.selectedItem = null, this.saveProxys();
                    let i = yield s.ConfigHelperNS.getValue("ProxySetting", "ConnectType_Http", "直接连接");
                    t === i && this.$emit("input", "直接连接", "ProxySetting-ConnectType_Http"), t === (i = yield s.ConfigHelperNS.getValue("ProxySetting", "ConnectType_Hub", "直接连接")) && this.$emit("input", "直接连接", "ProxySetting-ConnectType_Hub"), t === (i = yield s.ConfigHelperNS.getValue("ProxySetting", "ConnectType_Ftp", "直接连接")) && this.$emit("input", "直接连接", "ProxySetting-ConnectType_Ftp");
                    break
                }
            })).catch()
        }

        handleApplyProxy() {
            this.$emit("input", "2", "ProxySetting-ConfigProxy_Type"), this.$emit("input", this.selectedItem.name, "ProxySetting-ConnectType_Hub"), this.$emit("input", this.selectedItem.name, "ProxySetting-ConnectType_Http"), this.$emit("input", this.selectedItem.name, "ProxySetting-ConnectType_Ftp")
        }

        formatProxys() {
            let e = [];
            if (this.proxyList.length > 0) for (let t = 0; t < this.proxyList.length; ++t) {
                let i = this.proxyList[t].name;
                i = (i = (i = (i = (i = i + ";" + this.proxyList[t].host) + ";" + this.proxyList[t].port) + ";" + this.proxyList[t].type) + ";" + this.proxyList[t].userName) + ";" + this.proxyList[t].passWord, e.push(i)
            }
            return e
        }

        getProxyNames() {
            let e = ["直接连接"];
            if (this.proxyList.length > 0) for (let t = 0; t < this.proxyList.length; ++t) this.proxyList[t].name && this.proxyList[t].name.length > 0 && e.push(this.proxyList[t].name);
            return e
        }

        saveProxys() {
            s.ConfigHelperNS.setValue("ProxyList", "proxys", this.formatProxys()).catch(), s.ConfigHelperNS.setValue("ConnectType", "ProxyName", this.getProxyNames()).catch()
        }

        initProxys() {
            return r(this, void 0, void 0, function* () {
                let e = yield s.ConfigHelperNS.getValue("ProxyList", "proxys", []);
                if (e.length > 0) for (let t = 0; t < e.length; ++t) {
                    let i = e[t].split(";"), n = {};
                    n.name = i[0], n.host = i[1], n.type = i[3], n.userName = void 0 !== i[4] ? i[4] : "", n.passWord = void 0 !== i[5] ? i[5] : "", i[2] ? n.port = Number(i[2]) ? Number(i[2]) : 80 : n.port = 80, this.proxyList.push(n)
                }
            })
        }

        mounted() {
            this.initProxys().catch()
        }
    };
    n([o.Prop({})], u.prototype, "item", void 0), n([o.Prop()], u.prototype, "value", void 0), n([o.Prop()], u.prototype, "disabled", void 0), u = n([o.Component({components: {}})], u), t.default = u
}, , , , , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(31), o = i(24), s = i(2), a = i(10), l = i(1).default.getLogger("Axios.Helper");
    !function (e) {
        e.getFileSizeWithUrlAW = function (e) {
            return n(this, void 0, void 0, function* () {
                let t = 0;
                do {
                    let i = r.parse(e);
                    if ("https:" !== i.protocol && "http:" !== i.protocol) break;
                    let n = null;
                    try {
                        n = yield o.default.get(e, {responseType: "arraybuffer"})
                    } catch (e) {
                        l.warning(e)
                    }
                    if (null !== n && void 0 !== n.status && 200 === n.status) {
                        let e = n.headers["content-length"];
                        void 0 !== e && (t = parseInt(e, 10))
                    }
                } while (0);
                return t
            })
        }, e.downloadFileAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                do {
                    let n = null;
                    try {
                        n = yield o.default.get(e, {responseType: "arraybuffer"})
                    } catch (e) {
                        l.information(e);
                        break
                    }
                    if (null !== n && void 0 !== n.status && 200 === n.status && void 0 !== n.data && null !== n.data && "" !== n.data) {
                        let e = s.dirname(t), r = yield a.FileSystemAWNS.mkdirsAW(e);
                        r && (r = yield a.FileSystemAWNS.writeFileAW(t, n.data)) && (i = !0)
                    }
                } while (0);
                return i
            })
        }
    }(t.AxiosNS || (t.AxiosNS = {}))
}, , , , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(89), r = i.n(n), o = i(46), s = i.n(o), a = /%[sdj%]/g, l = function () {
    };

    function c() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var n = 1, r = t[0], o = t.length;
        if ("function" == typeof r) return r.apply(null, t.slice(1));
        if ("string" == typeof r) {
            for (var s = String(r).replace(a, function (e) {
                if ("%%" === e) return "%";
                if (n >= o) return e;
                switch (e) {
                    case"%s":
                        return String(t[n++]);
                    case"%d":
                        return Number(t[n++]);
                    case"%j":
                        try {
                            return JSON.stringify(t[n++])
                        } catch (e) {
                            return "[Circular]"
                        }
                        break;
                    default:
                        return e
                }
            }), l = t[n]; n < o; l = t[++n]) s += " " + l;
            return s
        }
        return r
    }

    function u(e, t) {
        return void 0 === e || null === e || (!("array" !== t || !Array.isArray(e) || e.length) || !(!function (e) {
            return "string" === e || "url" === e || "hex" === e || "email" === e || "pattern" === e
        }(t) || "string" != typeof e || e))
    }

    function d(e, t, i) {
        var n = 0, r = e.length;
        !function o(s) {
            if (s && s.length) i(s); else {
                var a = n;
                n += 1, a < r ? t(e[a], o) : i([])
            }
        }([])
    }

    function h(e, t, i, n) {
        if (t.first) return d(function (e) {
            var t = [];
            return Object.keys(e).forEach(function (i) {
                t.push.apply(t, e[i])
            }), t
        }(e), i, n);
        var r = t.firstFields || [];
        !0 === r && (r = Object.keys(e));
        var o = Object.keys(e), s = o.length, a = 0, l = [], c = function (e) {
            l.push.apply(l, e), ++a === s && n(l)
        };
        o.forEach(function (t) {
            var n = e[t];
            -1 !== r.indexOf(t) ? d(n, i, c) : function (e, t, i) {
                var n = [], r = 0, o = e.length;

                function s(e) {
                    n.push.apply(n, e), ++r === o && i(n)
                }

                e.forEach(function (e) {
                    t(e, s)
                })
            }(n, i, c)
        })
    }

    function f(e) {
        return function (t) {
            return t && t.message ? (t.field = t.field || e.fullField, t) : {message: t, field: t.field || e.fullField}
        }
    }

    function p(e, t) {
        if (t) for (var i in t) if (t.hasOwnProperty(i)) {
            var n = t[i];
            "object" === (void 0 === n ? "undefined" : s()(n)) && "object" === s()(e[i]) ? e[i] = r()({}, e[i], n) : e[i] = n
        }
        return e
    }

    var v = function (e, t, i, n, r, o) {
        !e.required || i.hasOwnProperty(e.field) && !u(t, o || e.type) || n.push(c(r.messages.required, e.fullField))
    };
    var m = function (e, t, i, n, r) {
        (/^\s+$/.test(t) || "" === t) && n.push(c(r.messages.whitespace, e.fullField))
    }, g = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    }, _ = {
        integer: function (e) {
            return _.number(e) && parseInt(e, 10) === e
        }, float: function (e) {
            return _.number(e) && !_.integer(e)
        }, array: function (e) {
            return Array.isArray(e)
        }, regexp: function (e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e)
            } catch (e) {
                return !1
            }
        }, date: function (e) {
            return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear
        }, number: function (e) {
            return !isNaN(e) && "number" == typeof e
        }, object: function (e) {
            return "object" === (void 0 === e ? "undefined" : s()(e)) && !_.array(e)
        }, method: function (e) {
            return "function" == typeof e
        }, email: function (e) {
            return "string" == typeof e && !!e.match(g.email) && e.length < 255
        }, url: function (e) {
            return "string" == typeof e && !!e.match(g.url)
        }, hex: function (e) {
            return "string" == typeof e && !!e.match(g.hex)
        }
    };
    var y = "enum";
    var b = {
        required: v, whitespace: m, type: function (e, t, i, n, r) {
            if (e.required && void 0 === t) v(e, t, i, n, r); else {
                var o = e.type;
                ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(o) > -1 ? _[o](t) || n.push(c(r.messages.types[o], e.fullField, e.type)) : o && (void 0 === t ? "undefined" : s()(t)) !== e.type && n.push(c(r.messages.types[o], e.fullField, e.type))
            }
        }, range: function (e, t, i, n, r) {
            var o = "number" == typeof e.len, s = "number" == typeof e.min, a = "number" == typeof e.max, l = t,
                u = null, d = "number" == typeof t, h = "string" == typeof t, f = Array.isArray(t);
            if (d ? u = "number" : h ? u = "string" : f && (u = "array"), !u) return !1;
            f && (l = t.length), h && (l = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), o ? l !== e.len && n.push(c(r.messages[u].len, e.fullField, e.len)) : s && !a && l < e.min ? n.push(c(r.messages[u].min, e.fullField, e.min)) : a && !s && l > e.max ? n.push(c(r.messages[u].max, e.fullField, e.max)) : s && a && (l < e.min || l > e.max) && n.push(c(r.messages[u].range, e.fullField, e.min, e.max))
        }, enum: function (e, t, i, n, r) {
            e[y] = Array.isArray(e[y]) ? e[y] : [], -1 === e[y].indexOf(t) && n.push(c(r.messages[y], e.fullField, e[y].join(", ")))
        }, pattern: function (e, t, i, n, r) {
            e.pattern && (e.pattern instanceof RegExp ? (e.pattern.lastIndex = 0, e.pattern.test(t) || n.push(c(r.messages.pattern.mismatch, e.fullField, t, e.pattern))) : "string" == typeof e.pattern && (new RegExp(e.pattern).test(t) || n.push(c(r.messages.pattern.mismatch, e.fullField, t, e.pattern))))
        }
    };
    var C = "enum";
    var w = function (e, t, i, n, r) {
        var o = e.type, s = [];
        if (e.required || !e.required && n.hasOwnProperty(e.field)) {
            if (u(t, o) && !e.required) return i();
            b.required(e, t, n, s, r, o), u(t, o) || b.type(e, t, n, s, r)
        }
        i(s)
    }, x = {
        string: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t, "string") && !e.required) return i();
                b.required(e, t, n, o, r, "string"), u(t, "string") || (b.type(e, t, n, o, r), b.range(e, t, n, o, r), b.pattern(e, t, n, o, r), !0 === e.whitespace && b.whitespace(e, t, n, o, r))
            }
            i(o)
        }, method: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), void 0 !== t && b.type(e, t, n, o, r)
            }
            i(o)
        }, number: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), void 0 !== t && (b.type(e, t, n, o, r), b.range(e, t, n, o, r))
            }
            i(o)
        }, boolean: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), void 0 !== t && b.type(e, t, n, o, r)
            }
            i(o)
        }, regexp: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), u(t) || b.type(e, t, n, o, r)
            }
            i(o)
        }, integer: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), void 0 !== t && (b.type(e, t, n, o, r), b.range(e, t, n, o, r))
            }
            i(o)
        }, float: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), void 0 !== t && (b.type(e, t, n, o, r), b.range(e, t, n, o, r))
            }
            i(o)
        }, array: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t, "array") && !e.required) return i();
                b.required(e, t, n, o, r, "array"), u(t, "array") || (b.type(e, t, n, o, r), b.range(e, t, n, o, r))
            }
            i(o)
        }, object: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), void 0 !== t && b.type(e, t, n, o, r)
            }
            i(o)
        }, enum: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                b.required(e, t, n, o, r), t && b[C](e, t, n, o, r)
            }
            i(o)
        }, pattern: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t, "string") && !e.required) return i();
                b.required(e, t, n, o, r), u(t, "string") || b.pattern(e, t, n, o, r)
            }
            i(o)
        }, date: function (e, t, i, n, r) {
            var o = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return i();
                if (b.required(e, t, n, o, r), !u(t)) {
                    var s = void 0;
                    s = "number" == typeof t ? new Date(t) : t, b.type(e, s, n, o, r), s && b.range(e, s.getTime(), n, o, r)
                }
            }
            i(o)
        }, url: w, hex: w, email: w, required: function (e, t, i, n, r) {
            var o = [], a = Array.isArray(t) ? "array" : void 0 === t ? "undefined" : s()(t);
            b.required(e, t, n, o, r, a), i(o)
        }
    };

    function S() {
        return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
                format: "%s date %s is invalid for format %s",
                parse: "%s date could not be parsed, %s is invalid ",
                invalid: "%s date %s is invalid"
            },
            types: {
                string: "%s is not a %s",
                method: "%s is not a %s (function)",
                array: "%s is not an %s",
                object: "%s is not an %s",
                number: "%s is not a %s",
                date: "%s is not a %s",
                boolean: "%s is not a %s",
                integer: "%s is not an %s",
                float: "%s is not a %s",
                regexp: "%s is not a valid %s",
                email: "%s is not a valid %s",
                url: "%s is not a valid %s",
                hex: "%s is not a valid %s"
            },
            string: {
                len: "%s must be exactly %s characters",
                min: "%s must be at least %s characters",
                max: "%s cannot be longer than %s characters",
                range: "%s must be between %s and %s characters"
            },
            number: {
                len: "%s must equal %s",
                min: "%s cannot be less than %s",
                max: "%s cannot be greater than %s",
                range: "%s must be between %s and %s"
            },
            array: {
                len: "%s must be exactly %s in length",
                min: "%s cannot be less than %s in length",
                max: "%s cannot be greater than %s in length",
                range: "%s must be between %s and %s in length"
            },
            pattern: {mismatch: "%s value %s does not match pattern %s"},
            clone: function () {
                var e = JSON.parse(JSON.stringify(this));
                return e.clone = this.clone, e
            }
        }
    }

    var k = S();

    function P(e) {
        this.rules = null, this._messages = k, this.define(e)
    }

    P.prototype = {
        messages: function (e) {
            return e && (this._messages = p(S(), e)), this._messages
        }, define: function (e) {
            if (!e) throw new Error("Cannot configure a schema with no rules");
            if ("object" !== (void 0 === e ? "undefined" : s()(e)) || Array.isArray(e)) throw new Error("Rules must be an object");
            this.rules = {};
            var t = void 0, i = void 0;
            for (t in e) e.hasOwnProperty(t) && (i = e[t], this.rules[t] = Array.isArray(i) ? i : [i])
        }, validate: function (e) {
            var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments[2],
                o = e, a = i, u = n;
            if ("function" == typeof a && (u = a, a = {}), this.rules && 0 !== Object.keys(this.rules).length) {
                if (a.messages) {
                    var d = this.messages();
                    d === k && (d = S()), p(d, a.messages), a.messages = d
                } else a.messages = this.messages();
                var v = void 0, m = void 0, g = {};
                (a.keys || Object.keys(this.rules)).forEach(function (i) {
                    v = t.rules[i], m = o[i], v.forEach(function (n) {
                        var s = n;
                        "function" == typeof s.transform && (o === e && (o = r()({}, o)), m = o[i] = s.transform(m)), (s = "function" == typeof s ? {validator: s} : r()({}, s)).validator = t.getValidationMethod(s), s.field = i, s.fullField = s.fullField || i, s.type = t.getType(s), s.validator && (g[i] = g[i] || [], g[i].push({
                            rule: s,
                            value: m,
                            source: o,
                            field: i
                        }))
                    })
                });
                var _ = {};
                h(g, a, function (e, t) {
                    var i = e.rule,
                        n = !("object" !== i.type && "array" !== i.type || "object" !== s()(i.fields) && "object" !== s()(i.defaultField));

                    function o(e, t) {
                        return r()({}, t, {fullField: i.fullField + "." + e})
                    }

                    function u() {
                        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        if (Array.isArray(s) || (s = [s]), s.length && l("async-validator:", s), s.length && i.message && (s = [].concat(i.message)), s = s.map(f(i)), a.first && s.length) return _[i.field] = 1, t(s);
                        if (n) {
                            if (i.required && !e.value) return s = i.message ? [].concat(i.message).map(f(i)) : a.error ? [a.error(i, c(a.messages.required, i.field))] : [], t(s);
                            var u = {};
                            if (i.defaultField) for (var d in e.value) e.value.hasOwnProperty(d) && (u[d] = i.defaultField);
                            for (var h in u = r()({}, u, e.rule.fields)) if (u.hasOwnProperty(h)) {
                                var p = Array.isArray(u[h]) ? u[h] : [u[h]];
                                u[h] = p.map(o.bind(null, h))
                            }
                            var v = new P(u);
                            v.messages(a.messages), e.rule.options && (e.rule.options.messages = a.messages, e.rule.options.error = a.error), v.validate(e.value, e.rule.options || a, function (e) {
                                t(e && e.length ? s.concat(e) : e)
                            })
                        } else t(s)
                    }

                    n = n && (i.required || !i.required && e.value), i.field = e.field;
                    var d = i.validator(i, e.value, u, e.source, a);
                    d && d.then && d.then(function () {
                        return u()
                    }, function (e) {
                        return u(e)
                    })
                }, function (e) {
                    !function (e) {
                        var t, i = void 0, n = void 0, r = [], o = {};
                        for (i = 0; i < e.length; i++) t = e[i], Array.isArray(t) ? r = r.concat.apply(r, t) : r.push(t);
                        if (r.length) for (i = 0; i < r.length; i++) o[n = r[i].field] = o[n] || [], o[n].push(r[i]); else r = null, o = null;
                        u(r, o)
                    }(e)
                })
            } else u && u()
        }, getType: function (e) {
            if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !x.hasOwnProperty(e.type)) throw new Error(c("Unknown rule type %s", e.type));
            return e.type || "string"
        }, getValidationMethod: function (e) {
            if ("function" == typeof e.validator) return e.validator;
            var t = Object.keys(e), i = t.indexOf("message");
            return -1 !== i && t.splice(i, 1), 1 === t.length && "required" === t[0] ? x.required : x[this.getType(e)] || !1
        }
    }, P.register = function (e, t) {
        if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
        x[e] = t
    }, P.messages = k;
    t.default = P
}, , , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(2), o = i(7).default(r.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        e.uncompressZipFile = function (e, t) {
            return n(this, void 0, void 0, function* () {
                return new Promise(i => {
                    o.asyncUnZipFile(t, e, e => {
                        i(e)
                    })
                })
            })
        }
    }(t.UnzipUtilitiesAWNS || (t.UnzipUtilitiesAWNS = {}))
}, , , , , , , function (e, t) {
    var i,
        n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    t.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17
    }, t.getSymbolTotalCodewords = function (e) {
        return n[e]
    }, t.getBCHDigit = function (e) {
        for (var t = 0; 0 !== e;) t++, e >>>= 1;
        return t
    }, t.setToSJISFunction = function (e) {
        if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
        i = e
    }, t.isKanjiModeEnabled = function () {
        return void 0 !== i
    }, t.toSJIS = function (e) {
        return i(e)
    }
}, function (e, t, i) {
    var n = i(757), r = i(758);
    t.NUMERIC = {id: "Numeric", bit: 1, ccBits: [10, 12, 14]}, t.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, t.BYTE = {id: "Byte", bit: 4, ccBits: [8, 16, 16]}, t.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, t.MIXED = {bit: -1}, t.getCharCountIndicator = function (e, t) {
        if (!e.ccBits) throw new Error("Invalid mode: " + e);
        if (!n.isValid(t)) throw new Error("Invalid version: " + t);
        return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
    }, t.getBestModeForData = function (e) {
        return r.testNumeric(e) ? t.NUMERIC : r.testAlphanumeric(e) ? t.ALPHANUMERIC : r.testKanji(e) ? t.KANJI : t.BYTE
    }, t.toString = function (e) {
        if (e && e.id) return e.id;
        throw new Error("Invalid mode")
    }, t.isValid = function (e) {
        return e && e.bit && e.ccBits
    }, t.from = function (e, i) {
        if (t.isValid(e)) return e;
        try {
            return function (e) {
                if ("string" != typeof e) throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case"numeric":
                        return t.NUMERIC;
                    case"alphanumeric":
                        return t.ALPHANUMERIC;
                    case"kanji":
                        return t.KANJI;
                    case"byte":
                        return t.BYTE;
                    default:
                        throw new Error("Unknown mode: " + e)
                }
            }(e)
        } catch (e) {
            return i
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this.$createElement;
        return (this._self._c || e)(this.item.type, {
            tag: "component",
            attrs: {item: this.item, label: this.item.label, formData: this.formData, value: this.value},
            on: {input: this.handleInput}
        })
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {
            class: e.item.outerClass,
            style: e.item.style
        }, ["" !== e.label ? i("span", [e._v(e._s(e.label))]) : e._e(), e._v(" "), i("td-tooltip", {
            attrs: {
                content: e.tipContent,
                visible: e.tooltipVisible,
                placement: "top"
            }
        }, [i("select-native", {
            class: e.classes || e.item.classes,
            attrs: {
                value: e.valueData,
                options: e.optionList || e.item.option,
                placeholder: e.placeHolder || e.formData[e.item.name].value + "",
                editable: e.item.editable,
                type: e.item.selectType,
                disabled: e.disabled
            },
            on: {input: e.validate, blur: e.handleOutFocus, "choose-file": e.selectPath}
        })], 1)], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {
            class: e.item.outClasses,
            style: e.item.style
        }, [i("td-tooltip", {
            attrs: {
                content: e.item.toolTipsContent || "",
                visible: e.tooltipVisible,
                placement: "top"
            }
        }, [i("td-input", {
            ref: "input",
            class: e.item.classes,
            attrs: {
                label: e.label || e.item.label,
                value: e.valueData,
                placeholder: e.item.placeholder,
                disabled: e.disabled
            },
            on: {
                input: e.validate,
                change: e.handleChange,
                keydown: e.handleKeyDown,
                keyup: e.handleKeyup,
                blur: e.outFocus
            }
        })], 1), e._v(" "), e._l(e.item.extEles, function (t) {
            return [i(t.type, {
                key: t.name,
                tag: "component",
                attrs: {
                    item: t,
                    classes: t.classes,
                    text: t.text,
                    formData: e.formData,
                    disabled: e.disabled || !e.formData[e.item.name].value,
                    value: e.formData[t.name]
                },
                on: {input: e.handleInput}
            })]
        })], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {class: this.item.outerClass}, [t("label", {staticClass: "td-textarea"}, [t("textarea", {
            staticClass: "td-textarea__inner",
            class: this.item.classes,
            attrs: {placeholder: this.item.placeholder},
            domProps: {value: this.formData[this.item.name].value},
            on: {change: this.handleChange}
        })])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.outerClass}, [i("td-checkbox", {
            attrs: {value: !(0 == e.formData[e.item.name].value)},
            on: {input: e.handleInput}
        }, [e._v("\n    " + e._s(e.item.label) + "\n  ")]), e._v(" "), e._l(e.item.extEles, function (t) {
            return [i(t.type, {
                key: t.name,
                tag: "component",
                attrs: {
                    item: t,
                    classes: t.classes,
                    text: t.text,
                    formData: e.formData,
                    name: t.name,
                    disabled: !e.formData[e.item.name].value,
                    value: e.formData[t.name]
                },
                on: {input: e.handleInput}
            })]
        }), e._v(" "), e.item.tip ? i("p", {class: e.item.tipClass}, [e._v("\n    " + e._s(e.item.tip) + "\n  ")]) : e._e()], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("p", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.item.isReleventUser || e.item.isReleventUser && "" !== e.userId,
                expression: "!item.isReleventUser || (item.isReleventUser && userId !== '')"
            }], class: e.clas, style: e.item.style || ""
        }, [e._v("\n   " + e._s(e.textContent) + "\n ")])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.outerClass}, [i("ul", {class: e.item.ulClasses}, e._l(e.item.option, function (t, n) {
            return i("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.item.isReleventUser || e.item.isReleventUser && "" !== e.userId,
                    expression: "!item.isReleventUser || (item.isReleventUser && userId !== '')"
                }], key: n, class: e.item.classes
            }, [i("td-radio", {
                attrs: {
                    name: e.item.key,
                    value: "" + e.formData[e.item.name].value,
                    label: t,
                    disabled: e.item.disableds && e.item.disableds[n]
                }, on: {input: e.handleInput}
            }, [e._v(e._s(e.item.labels[n] || e.lable))]), e._v(" "), e.item.extEles ? i(e.item.extEles[n].type, {
                tag: "component",
                attrs: {
                    text: e.item.extEles[n].text,
                    item: e.item.extEles[n],
                    label: e.item.extEles[n] && e.item.extEles[n].label,
                    classes: e.item.extEles[n].classes,
                    disabled: e.formData[e.item.name].value !== e.item.extActiveValue,
                    name: e.item.extEles[n].name,
                    value: e.formData[e.item.extEles[n].name],
                    formData: e.formData
                },
                on: {input: e.handleInput}
            }) : e._e()], 1)
        })), e._v(" "), e.item.tip ? i("p", {class: e.item.tipClass}, [e._v(e._s(e.item.tip))]) : e._e()])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.outerClass}, [i("td-button", {
            class: e.classes || e.item.classes,
            style: e.item.style || "",
            attrs: {disabled: e.disabled || e.item.bindName && !e.formData[e.item.bindName].value},
            on: {click: e.popDialog}
        }, [e._v(e._s(e.text || e.item.text))]), e._v(" "), e._l(e.item.extEles, function (e) {
            return [i(e.type, {
                key: e.name,
                tag: "component",
                style: e.style || "",
                attrs: {item: e, classes: e.classes, text: e.text}
            })]
        })], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", [i("td-checkbox", {
            attrs: {value: !(0 == e.formData[e.item.name].value)},
            on: {input: e.handleInput}
        }, [e._v("\n    " + e._s(e.item.label) + "\n  ")]), e._v(" "), e._l(e.item.extEles, function (t, n) {
            return e.item.extEles ? i(t.type, {
                key: n,
                tag: "component",
                attrs: {
                    formData: e.formData,
                    placeHolder: e.formData[t.name] && e.formData[t.name].value,
                    item: t,
                    value: e.formData[t.name],
                    disabled: !(e.formData[e.item.name] && e.formData[e.item.name].value),
                    name: t.name,
                    label: t.label,
                    classes: t.classes,
                    text: t.text
                },
                on: {input: e.handleInput}
            }) : e._e()
        })], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.classes}, [i("td-checkbox", {
            attrs: {value: !(0 == e.formData[e.item.name].value)},
            on: {input: e.handleInput}
        }, [e._v("\n    " + e._s(e.item.label) + "\n  ")]), e._v(" "), e._l(e.item.extEles, function (t, n) {
            return e.item.extEles ? i(t.type, {
                key: n,
                tag: "component",
                attrs: {
                    formData: e.formData,
                    item: t,
                    placeHolder: e.formData[t.name] && e.formData[t.name].value,
                    disabled: !e.formData[e.item.name].value
                },
                on: {input: e.handleInput}
            }) : e._e()
        })], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.classes}, [i("p", [e._v("\n    限速时间段：\n    " + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_Begin_Hour"].value)) + ":\n    " + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_Begin_Minute"].value)) + "-" + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_End_Hour"].value)) + ":\n    " + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_End_Minute"].value)) + "\n  ")]), e._v(" "), i("p", [e._v("\n    最大下载速度: " + e._s(e.maxDownloadSpeed) + "   \n    最大上传速度: " + e._s(e.maxUploadSpeed))])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "xlx-setting-content__part"}, [i("p", {staticClass: "xlx-setting-content__text"}, [e._v("代理管理")]), e._v(" "), i("div", {staticClass: "td-table td-table--border"}, [e._m(0), e._v(" "), i("div", {staticClass: "td-table__body-wrapper"}, [i("table", {staticClass: "td-table__body"}, [e._m(1), e._v(" "), i("tbody", e._l(e.proxyList, function (t, n) {
            return t.name && t.name.length > 0 ? i("tr", {
                key: n,
                class: {"is-chosen": t === e.selectedItem},
                on: {
                    click: function (i) {
                        e.selectedItem = t
                    }
                }
            }, [i("td", [i("p", {staticClass: "td-table__text"}, [e._v(e._s(t.name))])]), e._v(" "), i("td", [i("p", {staticClass: "td-table__text"}, [e._v(e._s(t.host))])]), e._v(" "), i("td", [i("p", {staticClass: "td-table__text"}, [e._v(e._s(t.port))])]), e._v(" "), i("td", [i("p", {staticClass: "td-table__text"}, [e._v(e._s(t.type))])])]) : e._e()
        }))])])]), e._v(" "), i("div", {staticClass: "xlx-setting-content__button"}, [i("a", {
            staticClass: "td-button td-button--small",
            attrs: {href: "javascript:;"},
            on: {click: e.handleAddProxy}
        }, [e._v("添加")]), e._v(" "), i("a", {
            staticClass: "td-button td-button--small",
            class: {"is-disabled": null === e.selectedItem},
            attrs: {href: "javascript:;"},
            on: {click: e.handleModifyProxy}
        }, [e._v("修改")]), e._v(" "), i("a", {
            staticClass: "td-button td-button--small",
            class: {"is-disabled": null === e.selectedItem},
            attrs: {href: "javascript:;"},
            on: {click: e.handleDeleteProxy}
        }, [e._v("删除")]), e._v(" "), i("a", {
            staticClass: "td-button td-button--small",
            class: {"is-disabled": null === e.selectedItem},
            attrs: {href: "javascript:;"},
            on: {click: e.handleApplyProxy}
        }, [e._v("应用代理")])])])
    }, r = [function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "td-table__header-wrapper"}, [i("table", {staticClass: "td-table__header"}, [i("colgroup", [i("col", {staticClass: "xlx-setting__column-1"}), e._v(" "), i("col", {staticClass: "xlx-setting__column-2"}), e._v(" "), i("col", {staticClass: "xlx-setting__column-3"}), e._v(" "), i("col")]), e._v(" "), i("thead", [i("tr", [i("th", [i("p", {staticClass: "td-table__text"}, [e._v("名称")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("服务器")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("端口")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("类型")])])])])])])
    }, function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("colgroup", [t("col", {staticClass: "xlx-setting__column-1"}), this._v(" "), t("col", {staticClass: "xlx-setting__column-2"}), this._v(" "), t("col", {staticClass: "xlx-setting__column-3"}), this._v(" "), t("col")])
    }];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "xlx-dialog-setting__speed-time"}, [i("ul", e._l(e.data, function (t) {
            return i("li", {
                key: t.label,
                staticClass: "xlx-dialog-setting__item"
            }, [i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v(e._s(t.label))]), e._v(" "), e._l(t.options, function (t) {
                return i("div", {
                    key: t.index,
                    staticClass: "xlx-dialog-setting__option"
                }, [i("select-native", {
                    staticClass: "xlx-select-size-1",
                    attrs: {
                        value: e.value[t.index].value.toString(),
                        options: "hour" === t.type ? e.hours : e.minutes,
                        disabled: e.disabled
                    },
                    on: {
                        input: function (i) {
                            return e.handleInput(i, t.index)
                        }
                    }
                }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v(e._s("hour" === t.type ? "时" : "分"))])], 1)
            })], 2)
        }))])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.outerClass}, [i("ul", {class: e.item.ulClasses}, e._l(e.item.extEles, function (t, n) {
            return i("li", {key: n, class: e.item.classes}, [t ? i(t.type, {
                tag: "component",
                attrs: {
                    text: t.text,
                    item: t,
                    label: t && t.label,
                    classes: t.classes,
                    disabled: e.disabled,
                    name: t.name,
                    value: e.formData[t.name],
                    formData: e.formData
                },
                on: {input: e.handleInput}
            }) : e._e()], 1)
        })), e._v(" "), e.item.tip ? i("p", {class: e.item.tipClass}, [e._v(e._s(e.item.tip))]) : e._e()])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this.$createElement;
        return (this._self._c || e)("i", {class: this.classes, attrs: {title: this.text}})
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {class: e.item.outerClass}, [i("td-slider", {
            attrs: {
                value: e.sliderValue,
                marks: e.item.marks,
                scales: e.item.scales,
                disabled: e.disabled
            }, on: {input: e.handleSliderUpdate}
        }), e._v(" "), i("div", {staticClass: "xlx-dialog-setting__speed-input"}, [i("td-input", {
            ref: "input",
            staticClass: "xlx-setting__input-3",
            attrs: {value: e.value.value, disabled: e.disabled},
            on: {input: e.handleInput, blur: e.handleBlur}
        }), e._v(" "), i("popup", {
            ref: "tooltip",
            staticClass: "td-tooltip",
            attrs: {direction: "top", display: e.tooltipVisible, padding: 10},
            on: {
                "update:display": function (t) {
                    e.tooltipVisible = t
                }
            }
        }, [i("p", {staticClass: "td-tooltip__inner"}, [e._v(e._s(e.tooltip))])]), e._v(" "), i("span", {staticClass: "xlx-setting__text"}, [e._v("KB/s")])], 1)], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , , , , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.Default = 0] = "Default", e[e.Normal = 1] = "Normal", e[e.Vip = 2] = "Vip", e[e.SuperVip = 3] = "SuperVip"
        }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {
            type: t.Default,
            id: 1
        }, e.cacheDir = `${__profilesDir}/speedcurve-skin`
    }(t.SpeedCurveSkinHelperNS || (t.SpeedCurveSkinHelperNS = {}))
}, , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(21), o = i(5);
    !function (e) {
        let t, i;
        !function (e) {
            e[e.None = 0] = "None", e[e.Sock5 = 1] = "Sock5", e[e.Http = 2] = "Http"
        }(t = e.ProxyType || (e.ProxyType = {})), function (e) {
            e[e.Sucess = 0] = "Sucess", e[e.Fall = 1] = "Fall", e[e.AuthFall = 2] = "AuthFall", e[e.ConnectFall = 3] = "ConnectFall", e[e.Timeout = 4] = "Timeout", e[e.ParamError = 5] = "ParamError"
        }(i = e.ProxyVerifyResult || (e.ProxyVerifyResult = {})), e.verifyProxy = function (e, t, s, a, l) {
            return n(this, void 0, void 0, function* () {
                return new Promise(n => {
                    o.NativeCallModule.nativeCall.CallNativeFunction("VerifyProxy", e, t, s, a, l, (e, t) => {
                        e === r.NativeFunctionErrorCode.Success ? n(t) : n(i.Fall)
                    })
                })
            })
        }, e.setProxy = function (e, t, i, s, a) {
            return n(this, void 0, void 0, function* () {
                return new Promise(n => {
                    o.NativeCallModule.nativeCall.CallNativeFunction("SetProxy", e, t, i, s, a, (e, t) => {
                        e === r.NativeFunctionErrorCode.Success ? n(t) : n(1)
                    })
                })
            })
        }
    }(t.ProxyNS || (t.ProxyNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(24), o = i(1), s = i(12), a = i(10), l = i(14);
    let {isDef: c} = s.ThunderUtil;
    const u = o.default.getLogger("WallpaperManager");
    t.default = new class {
        constructor() {
            this.wallpapersURL = "https://api-xl9-ssl.xunlei.com/sl/xlppc.personalizedcenter.api/api/xskin/list", this.testPapersURL = "http://test.api-shoulei-ssl.xunlei.com/xlppc.personalizedcenter.api/api/xskin/list"
        }

        getWallpapers() {
            return n(this, void 0, void 0, function* () {
                do {
                    r.default.defaults.adapter = i(22);
                    let e = 1 === (yield l.default("GetValue", "ConfigFetchInterface", "TestServer", 0)) ? this.testPapersURL : this.wallpapersURL;
                    try {
                        let t = yield r.default.get(e, {params: {page: 0, per_page: 30}});
                        if (200 === t.status && "ok" === t.data.result) {
                            this.wallpapers = t.data.list;
                            try {
                                localStorage.setItem("wallpapers", JSON.stringify(this.wallpapers))
                            } catch (e) {
                                u.warning(e)
                            }
                            break
                        }
                    } catch (e) {
                        u.warning(e)
                    }
                    if (c(this.wallpapers)) break;
                    this.wallpapers = JSON.parse(localStorage.getItem("wallpapers"))
                } while (0);
                let e = this.wallpapers || [], t = yield this.getSpringFestivalWallpaper();
                return t && (e = [...e, t]), e
            })
        }

        getImage(e) {
            return n(this, void 0, void 0, function* () {
                let t = `${__profilesDir}/skins/${e.id}/wallpaper.jpg`;
                return (yield a.FileSystemAWNS.existsAW(t)) ? (this.updateImage(e).catch(e => {
                    u.information("update skin preview error", e)
                }), t) : (yield this.updateImage(e), t)
            })
        }

        updateImage(e) {
            return n(this, void 0, void 0, function* () {
                r.default.defaults.adapter = i(22);
                let t = yield r.default.get(e.skin_link, {responseType: "arraybuffer"});
                if (c(t) && 200 === t.status && c(t.data) && (yield a.FileSystemAWNS.mkdirAW(`${__profilesDir}/skins`), yield a.FileSystemAWNS.writeFileAW(`${__profilesDir}/skins/${e.id}.zip`, t.data))) {
                    const {UnzipUtilitiesAWNS: t} = yield Promise.resolve().then(() => i(202));
                    yield t.uncompressZipFile(`${__profilesDir}/skins/${e.id}/`, `${__profilesDir}/skins/${e.id}.zip`)
                }
            })
        }

        getSpringFestivalWallpaper() {
            return n(this, void 0, void 0, function* () {
                let e = null;
                try {
                    let t = JSON.parse(localStorage.getItem("springFestivalSkinData"));
                    t && "on" === t.skinsiwtch && (e = {
                        id: 9999,
                        operator: "",
                        manual_order: 0,
                        name: "春节皮肤",
                        is_vip: !1,
                        is_dynamic: !1,
                        preview: t.skin_thumb,
                        skin_link: t.skin_link,
                        artist: "",
                        color: 11,
                        is_4k: !1,
                        transparency: 80,
                        created_at: 1546599635159,
                        updated_at: 1546654241407,
                        showNew: !1
                    })
                } catch (e) {
                }
                return e
            })
        }
    }
}, , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(138), r = i(103);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\views\\limit-input.vue", t.default = a.exports
}, function (e, t, i) {
    e.exports = i(149).Buffer
}, function (e, t, i) {
    e.exports = i(9)(121)
}, function (e, t, i) {
    e.exports = function (e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {i: n, l: !1, exports: {}};
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var i = {};
        return t.m = e, t.c = i, t.i = function (e) {
            return e
        }, t.d = function (e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
        }, t.n = function (e) {
            var i = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/dist/", t(t.s = 4)
    }([function (e, t) {
        e.exports = {
            inserted: function (e, t, i) {
                var n = i.context.$refs[t.arg];
                n && n.addItem({el: e, value: t.value})
            }, unbind: function (e, t, i) {
                var n = i.context.$refs[t.arg];
                n && n.removeItem({el: e, value: t.value})
            }
        }
    }, function (e, t, i) {
        var n = i(5)(i(2), i(6), null, null, null);
        e.exports = n.exports
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(3);
        t.default = {
            name: "Popup",
            props: {
                appendToBody: {type: Boolean, default: !0},
                arrowClass: String,
                direction: {type: String, default: "bottom"},
                display: {type: Boolean, default: !1},
                padding: {type: Number, default: 0},
                trigger: {type: String, default: "hover"},
                scrollShow: {type: Boolean, default: !0}
            },
            data: function () {
                return {
                    arrowStyle: {},
                    delay: 100,
                    directionMap: {top: "height", left: "width"},
                    secondDirection: "",
                    left: 0,
                    top: 0,
                    currentElement: null,
                    willHide: !1
                }
            },
            computed: {
                directionClass: function () {
                    var e = /(top)|(bottom)|(left)|(right)/i, t = e.exec(this.direction) || [],
                        i = this.secondDirection ? e.exec(this.secondDirection)[0] : "", n = t[0] || "";
                    return "" === i ? "popup-" + n : "popup-" + i
                }, triggerEvent: function () {
                    switch (this.trigger) {
                        case"hover":
                            return "mouseenter";
                        case"focus":
                            return "focus";
                        case"click":
                            return "click"
                    }
                }, unTriggerEl: function () {
                    return "click" === this.trigger ? document : this.$el
                }, unTriggerEvent: function () {
                    switch (this.trigger) {
                        case"hover":
                            return "mouseleave";
                        case"focus":
                            return "blur";
                        case"click":
                            return "click"
                    }
                }
            },
            mounted: function () {
                this.appendToBody && document.body.appendChild(this.$el), this.$el.addEventListener(this.triggerEvent, this.handlePopupVisible), this.unTriggerEl.addEventListener(this.unTriggerEvent, this.handlePopupInvisible), this.handleResizeThrottle = i.i(n.a)(this.handleResize, 16), window.addEventListener("resize", this.handleResizeThrottle)
            },
            beforeDestroy: function () {
                this.$el.removeEventListener(this.triggerEvent, this.handlePopupVisible), this.unTriggerEl.removeEventListener(this.unTriggerEvent, this.handlePopupInvisible), window.removeEventListener("resize", this.handleResizeThrottle)
            },
            destroyed: function () {
                this.appendToBody && this.$el && document.body.hasChildNodes(this.$el) && document.body.removeChild(this.$el)
            },
            methods: {
                addItem: function (e) {
                    e.el.handleVisible = this.handleVisible.bind(this, e.value, e.el), e.el.addEventListener(this.triggerEvent, e.el.handleVisible), "click" !== this.trigger && (e.el.handleInvisible = this.handleInvisible.bind(this, e.value), e.el.addEventListener(this.unTriggerEvent, e.el.handleInvisible)), this.bindScroll(e.el)
                }, removeItem: function (e) {
                    e.el.removeEventListener(this.triggerEvent, e.el.handleVisible), "click" !== this.trigger && e.el.removeEventListener(this.unTriggerEvent, e.el.handleInvisible), this.unbindScroll(e.el)
                }, bindScroll: function (e) {
                    for (e = e.parentNode; e;) e.addEventListener("scroll", this.handleScroll), e = e.parentNode
                }, unbindScroll: function (e) {
                    for (e = e.parentNode; e;) e.removeEventListener("scroll", this.handleScroll), e = e.parentNode
                }, computePosition: function (e, t) {
                    e = e.getBoundingClientRect();
                    var i = 0, n = 0, r = (t = t.getBoundingClientRect()).top - e.height - this.padding,
                        o = t.left + t.width + this.padding, s = t.top + t.height + this.padding,
                        a = t.left - e.width - this.padding;
                    /(top)|(bottom)/i.test(this.direction) ? (i = t.left + (t.width - e.width) / 2, "bottomStart" !== this.direction && "topStart" !== this.direction || (i = t.left), "bottomEnd" !== this.direction && "topEnd" !== this.direction || (i = t.left - e.width + t.width), i < 0 ? (i = 0, this.arrowStyle = {left: (t.left + t.right) / 2 + "px"}) : i + e.width > window.innerWidth ? (i = window.innerWidth - e.width, this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"}) : this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"}, "top" === this.direction || "topStart" === this.direction || "topEnd" === this.direction ? r < 0 && s + e.height <= window.innerHeight ? (n = s, this.secondDirection = "bottom", "topStart" === this.direction && (this.secondDirection = "bottomStart", this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"}), "topEnd" === this.direction && (this.secondDirection = "bottomEnd", this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"})) : (n = r, this.secondDirection = "", this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"}) : s + e.height > window.innerHeight && r >= 0 ? (n = r, this.secondDirection = "top", "bottomStart" === this.direction && (this.secondDirection = "topStart", this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"}), "bottomEnd" === this.direction && (this.secondDirection = "topEnd", this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"})) : (n = s, this.secondDirection = "", this.arrowStyle = {left: (t.left + t.right) / 2 - i + "px"})) : /(left)|(right)/i.test(this.direction) && (n = t.top + (t.height - e.height) / 2, "leftStart" !== this.direction && "rightStart" !== this.direction || (n = t.top), "leftEnd" !== this.direction && "rightEnd" !== this.direction || (n = t.top - e.height + t.height), n < 0 ? (n = 0, this.arrowStyle = {top: (t.top + t.bottom) / 2 + "px"}) : n + e.height > window.innerHeight ? (n = window.innerHeight - e.height, this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"}) : this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"}, "left" === this.direction || "leftStart" === this.direction || "leftEnd" === this.direction ? a < 0 && o + e.width <= window.innerWidth ? (i = o, this.secondDirection = "right", "leftStart" === this.direction && (this.secondDirection = "rightStart", this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"}), "leftEnd" === this.direction && (this.secondDirection = "rightEnd", this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"})) : (i = a, this.secondDirection = "", this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"}) : o + e.width > window.innerWidth && a >= 0 ? (i = a, this.secondDirection = "left", "rightStart" === this.direction && (this.secondDirection = "leftStart", this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"}), "rightEnd" === this.direction && (this.secondDirection = "leftEnd", this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"})) : (i = o, this.secondDirection = "", this.arrowStyle = {top: (t.top + t.bottom) / 2 - n + "px"})), this.top = n, this.left = i
                }, handleVisible: function (e, t, i) {
                    var n = this;
                    if ("click" === this.trigger && this.display && !0 !== i) return this.handleInvisible(e);
                    this.willHide = !1, this.currentElement = t, this.currentValue = e, this.$emit("update:display", !0), this.$emit("show", e), this.$nextTick(function () {
                        setTimeout(function () {
                            n.computePosition(n.$el, n.currentElement)
                        })
                    })
                }, handleInvisible: function (e) {
                    var t = this;
                    "click" === this.trigger ? (this.$emit("update:display", !1), this.$emit("hide", e)) : (this.willHide = !0, setTimeout(function () {
                        t.willHide && (t.$emit("update:display", !1), t.$emit("hide", e))
                    }, this.delay))
                }, handleScroll: function () {
                    this.scrollShow ? this.display && this.computePosition(this.$el, this.currentElement) : (this.$emit("update:display", !1), this.$emit("hide"))
                }, handlePopupVisible: function (e) {
                    e.stopPropagation(), this.willHide = !1, this.$emit("update:display", !0), this.$emit("show", this.value)
                }, handlePopupInvisible: function (e) {
                    var t = this;
                    "click" === this.trigger && this.isClosest(e.target, this.currentElement) || ("click" === this.trigger ? (this.$emit("update:display", !1), this.$emit("hide", this.value)) : (this.willHide = !0, setTimeout(function () {
                        t.willHide && (t.$emit("update:display", !1), t.$emit("hide", t.value))
                    }, this.delay)))
                }, handleResize: function () {
                    this.display && this.handleVisible(this.value, this.currentElement, !0)
                }, show: function (e, t) {
                    this.handleVisible(t, e)
                }, hide: function () {
                    this.handleInvisible()
                }, isDirectionLine: function (e) {
                    return "top" === e || "bottom" === e ? "top" === this.direction || "bottom" === this.direction : "left" === this.direction || "right" === this.direction
                }, isClosest: function (e, t) {
                    return e !== document && (e === t || this.isClosest(e.parentNode, t))
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        t.a = function (e, t) {
            var i = this, n = 0;
            return function () {
                for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                var a = +new Date;
                a - n > t && (e.apply(i, o), n = a)
            }
        }
    }, function (e, t, i) {
        var n = i(0), r = i(1);
        r.install = function (e) {
            e.directive("popup", n), e.component(r.name, r)
        }, e.exports = r
    }, function (e, t) {
        e.exports = function (e, t, i, n, r) {
            var o, s = e = e || {}, a = typeof e.default;
            "object" !== a && "function" !== a || (o = e, s = e.default);
            var l, c = "function" == typeof s ? s.options : s;
            if (t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns), n && (c._scopeId = n), r ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
            }, c._ssrRegister = l) : i && (l = i), l) {
                var u = c.functional, d = u ? c.render : c.beforeCreate;
                u ? c.render = function (e, t) {
                    return l.call(t), d(e, t)
                } : c.beforeCreate = d ? [].concat(d, l) : [l]
            }
            return {esModule: o, exports: s, options: c}
        }
    }, function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {
                    class: e.directionClass,
                    style: {display: e.display ? "block" : "none", left: e.left + "px", top: e.top + "px"},
                    attrs: {tabindex: "999"}
                }, [e._t("default"), e._v(" "), i("span", {
                    staticClass: "popup-arrow",
                    class: e.arrowClass,
                    style: e.arrowStyle
                })], 2)
            }, staticRenderFns: []
        }
    }])
}, , , , , function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(24), o = i(1), s = i(12);
    let {isDef: a} = s.ThunderUtil;
    const l = o.default.getLogger("Thunder.speedcurve-skin.skin-storage");
    t.default = new class {
        constructor() {
            this.skinURL = "http://static-xl9-ssl.xunlei.com/json/thunderx_speedcurve_skin.json"
        }

        getSkins() {
            return n(this, void 0, void 0, function* () {
                do {
                    r.default.defaults.adapter = i(22);
                    try {
                        let e = yield r.default.get(this.skinURL);
                        if (200 === e.status && e.data) {
                            this.skins = e.data, l.information("skins", this.skins), localStorage.setItem("speedcurveSkins", JSON.stringify(this.skins));
                            break
                        }
                    } catch (e) {
                        l.warning(e)
                    }
                    if (a(this.skins)) break;
                    this.skins = JSON.parse(localStorage.getItem("speedcurveSkins"))
                } while (0);
                return this.skins
            })
        }
    }
}, , , , , , , , , , , , , , , , , , function (e, t, i) {
    "use strict";
    e.exports = {
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
}, , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
    function i(e) {
        if ("string" != typeof e) throw new Error("Color should be defined as hex string");
        var t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
        3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function (e) {
            return [e, e]
        }))), 6 === t.length && t.push("F", "F");
        var i = parseInt(t.join(""), 16);
        return {r: i >> 24 & 255, g: i >> 16 & 255, b: i >> 8 & 255, a: 255 & i, hex: "#" + t.slice(0, 6).join("")}
    }

    t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
            n = e.width && e.width >= 21 ? e.width : void 0, r = e.scale || 4;
        return {
            width: n,
            scale: n ? 4 : r,
            margin: t,
            color: {dark: i(e.color.dark || "#000000ff"), light: i(e.color.light || "#ffffffff")},
            type: e.type,
            rendererOpts: e.rendererOpts || {}
        }
    }, t.getScale = function (e, t) {
        return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
    }, t.getImageWidth = function (e, i) {
        var n = t.getScale(e, i);
        return Math.floor((e + 2 * i.margin) * n)
    }, t.qrToImageData = function (e, i, n) {
        for (var r = i.modules.size, o = i.modules.data, s = t.getScale(r, n), a = Math.floor((r + 2 * n.margin) * s), l = n.margin * s, c = [n.color.light, n.color.dark], u = 0; u < a; u++) for (var d = 0; d < a; d++) {
            var h = 4 * (u * a + d), f = n.color.light;
            if (u >= l && d >= l && u < a - l && d < a - l) f = c[o[Math.floor((u - l) / s) * r + Math.floor((d - l) / s)] ? 1 : 0];
            e[h++] = f.r, e[h++] = f.g, e[h++] = f.b, e[h] = f.a
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(469), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(4), s = i(33), a = i(31);
    let l = class extends o.Vue {
        constructor() {
            super(...arguments), this.popType = "", this.options = {
                title: "",
                type: s.MessageBox.ConfirmType.Info
            }, this.boxId = a.parse(location.href, !0).query.boxId, this.removeDraggable = null
        }

        created() {
            r.ipcRenderer.once("message-box-init-reply", (e, t) => {
                this.popType = t.popType, this.options = t.options
            }), r.ipcRenderer.send(`message-box-init-${this.boxId}`)
        }
    };
    l = n([o.Component({
        components: {
            About: () => Promise.resolve().then(() => i(1033)),
            Confirm: () => Promise.resolve().then(() => i(1034)),
            MessageBox: () => Promise.resolve().then(() => i(1035)),
            PlanTask: () => Promise.resolve().then(() => i(1036)),
            TaskRename: () => Promise.resolve().then(() => i(1037)),
            BtRepeatTask: () => Promise.resolve().then(() => i(1038)),
            BtRepeatFile: () => Promise.resolve().then(() => i(1039)),
            PrivateSpaceSetPassword: () => Promise.resolve().then(() => i(1040)),
            PrivateSpaceVerifyPassword: () => Promise.resolve().then(() => i(1041)),
            PrivateSpacePhoneVerify: () => Promise.resolve().then(() => i(1042)),
            PrivateSpaceDownloadSetting: () => Promise.resolve().then(() => i(1044)),
            PrivateSpaceTaskManager: () => Promise.resolve().then(() => i(1046)),
            MultiRepeatTask: () => Promise.resolve().then(() => i(1047)),
            BatchNewTaskCtrl: () => Promise.resolve().then(() => i(1048)),
            BookMarks: () => Promise.resolve().then(() => i(1049)),
            BookList: () => Promise.resolve().then(() => i(1050)),
            SubtitleTaskFilelist: () => Promise.resolve().then(() => i(1051)),
            SubtitleSearch: () => Promise.resolve().then(() => i(1052)),
            BrowserConfigGuide: () => Promise.resolve().then(() => i(1053)),
            XmpFixBox: () => Promise.resolve().then(() => i(1054)),
            XmpFixBoxEx: () => Promise.resolve().then(() => i(1055)),
            BirdKeyShow: () => Promise.resolve().then(() => i(1056)),
            TotalTabs: () => Promise.resolve().then(() => i(1058)),
            Individuation: () => Promise.resolve().then(() => i(1059)),
            AddProxy: () => Promise.resolve().then(() => i(1063)),
            BridKeyPwdcheck: () => Promise.resolve().then(() => i(1064)),
            ShouleiQRCode: () => Promise.resolve().then(() => i(1066))
        }
    })], l), t.default = l
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(471), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(40);
    let a = class extends (r.mixins(s.DraggableMixin, s.PositionMixin)) {
        handleCancel(e) {
            window.close()
        }
    };
    n([o.Prop()], a.prototype, "options", void 0), a = n([o.Component], a), t.default = a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(473), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(39), s = i(4), a = i(40), l = i(28);
    let c = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.action = l.MessageBoxNS.Action, this.icon = {
                info: "question",
                warning: "warning",
                error: "error"
            }
        }

        handleInput(e) {
            this.$emit("update:options", Object.assign({}, this.options, {checkboxChecked: e}))
        }

        handleOK() {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, this.options.checkboxChecked), window.close()
        }

        handleCancel(e) {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, e), window.close()
        }

        handleKeyDown(e) {
            13 === e.keyCode && this.handleOK()
        }

        mounted() {
            document.addEventListener("keydown", this.handleKeyDown)
        }

        destroyed() {
            document.removeEventListener("keydown", this.handleKeyDown)
        }
    };
    n([s.Prop()], c.prototype, "options", void 0), n([s.Prop()], c.prototype, "boxId", void 0), c = n([s.Component({props: {options: Object}})], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(475), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(39), s = i(4), a = i(589), l = i(28), c = i(40);
    let u = class extends (o.mixins(c.DraggableMixin, c.PositionMixin)) {
        constructor() {
            super(...arguments), this.action = l.MessageBoxNS.Action
        }

        handleInput(e, t) {
            let i = null, n = JSON.stringify(this.formData);
            try {
                i = JSON.parse(n)
            } catch (e) {
            }
            null !== i && (Array.isArray(e) ? i[t] = e : i[t].value = e, this.$emit("update:formData", i))
        }

        handleOK() {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, this.action.OK, this.formData), window.close()
        }

        handleCancel(e) {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, e), window.close()
        }

        get comfirmButtonActive() {
            if (void 0 === this.formData) return !0;
            if (void 0 === this.formData.maxDownloadSpeedEnabled) return !0;
            let e = this.formData.maxDownloadSpeedEnabled.value, t = this.formData.maxUploadSpeedEnabled.value;
            return e || t
        }
    };
    n([s.Prop()], u.prototype, "options", void 0), n([s.Prop()], u.prototype, "formData", void 0), n([s.Prop()], u.prototype, "boxId", void 0), u = n([s.Component({components: {GeneratorView: a.default}})], u), t.default = u
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(477), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(199), o = i(39), s = i(4), a = i(78), l = i(15), c = i(3), u = i(94), d = i(40), h = i(93);
    let f = class extends (o.mixins(d.DraggableMixin, d.PositionMixin)) {
        constructor() {
            super(...arguments), this.hours = "0", this.minutes = "0", this.seconds = "0", this.operation = "开始全部任务", this.operations = ["关机", "睡眠", "退出迅雷", "开始全部任务", "暂停全部任务"], this.plans = [], this.timeIntervalId = -1, this.isMax = !1, this.schema = null, this.errorFields = null
        }

        sget() {
            return h.apply(null, arguments)
        }

        addPlan() {
            this.schema.validate({hours: this.hours, minutes: this.minutes}, (e, t) => {
                e ? this.errorFields = t : (this.errorFields = null, this.plans.length >= 3 ? this.isMax = !0 : this.plans.push({
                    hours: this.hours,
                    minutes: this.minutes,
                    seconds: this.seconds,
                    operation: this.operation
                }), this.$nextTick(() => {
                    a.ThunderWindowNS.resizeToFitContent()
                }))
            })
        }

        removePlan(e) {
            this.isMax = !1, this.plans.splice(e, 1), this.$nextTick(() => {
                a.ThunderWindowNS.resizeToFitContent()
            })
        }

        handleClose() {
            this.plans.length >= 0 && c.ipcRenderer.send(l.ThunderChannelList.channelRMCommitPlanTask, this.plans), -1 !== this.timeIntervalId && (clearInterval(this.timeIntervalId), this.timeIntervalId = -1), window.close()
        }

        created() {
            this.plans = this.options, this.timeIntervalId = setInterval(() => {
                for (let e = this.plans.length - 1; e >= 0; --e) {
                    let t = this.plans[e], i = 3600 * Number(t.hours) + 60 * Number(t.minutes) + Number(t.seconds);
                    if ((i -= 1) <= 0) {
                        this.removePlan(e), c.ipcRenderer.send(l.ThunderChannelList.channelRMPerformePlanTask, t.operation);
                        continue
                    }
                    let n = [Math.floor(i / 3600), Math.floor(i / 60 % 60), Math.floor(i % 60)];
                    t.hours = n[0] + "", t.minutes = n[1] + "", t.seconds = n[2] + ""
                }
            }, 1e3), this.schema = new r.default({
                hours: {
                    type: "number",
                    min: 0,
                    max: 999,
                    message: "请输入正确的时间",
                    transform: Number
                }, minutes: [{
                    type: "number", message: "执行时间不能为0", transform: Number, validator: (e, t, i) => {
                        0 === t && 0 === Number(this.hours) ? i(new Error("执行时间不能为0")) : i()
                    }
                }, {type: "number", min: 0, max: 59, message: "请输入正确的时间", transform: Number}]
            })
        }
    };
    n([s.Prop()], f.prototype, "options", void 0), f = n([s.Component({components: {SelectNative: u.default}})], f), t.default = f
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(479), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(2), s = i(3), a = i(39), l = i(4), c = i(10), u = i(8), d = i(40), h = i(28), f = i(69);
    let p = class extends (a.mixins(d.DraggableMixin, d.PositionMixin)) {
        constructor() {
            super(...arguments), this.newName = "", this.tipsText = "", this.isShowTips = !1
        }

        get originName() {
            let e = "";
            do {
                if (null === this.options || void 0 === this.options) break;
                let t = this.options.taskBase;
                if (null === t || void 0 === t) break;
                let i = t.taskName;
                if (null === i || void 0 === i) break;
                if ("string" != typeof i) break;
                e = i
            } while (0);
            return e
        }

        handleInput(e) {
            this.newName = e
        }

        handleClose(e) {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, h.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            return r(this, void 0, void 0, function* () {
                do {
                    let e = this.newName.trim();
                    e = e.replace(/[\n\r\n]/g, "");
                    let t = this.options.taskBase, i = t.taskName, n = t.savePath, r = t.taskType, a = n;
                    if (r !== u.DownloadKernel.TaskType.Group && (a = o.join(n, i)), "" === e) {
                        this.isShowTips = !0, this.tipsText = "文件名不能为空";
                        break
                    }
                    if ("." === e[0]) {
                        this.isShowTips = !0, this.tipsText = "必须键入文件名";
                        break
                    }
                    if (e.match(/[\/\\"<>\?\*:|]/)) {
                        this.isShowTips = !0, this.tipsText = '文件名不能包含下列任何字符： \\ / : * ? " < > |';
                        break
                    }
                    if (!(yield f.NativeCallAWNS.isSingleBtTask(t.taskId)) && r !== u.DownloadKernel.TaskType.Group) {
                        if (!(yield c.FileSystemAWNS.existsAW(a))) {
                            this.isShowTips = !0, this.tipsText = "文件不存在";
                            break
                        }
                        let t = o.join(n, e);
                        if (yield c.FileSystemAWNS.existsAW(t)) {
                            this.isShowTips = !0, this.tipsText = "文件已存在";
                            break
                        }
                    }
                    s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, h.MessageBoxNS.Action.OK, {fileName: e}), window.close()
                } while (0)
            })
        }

        handleKeyDown(e) {
            e.ctrlKey && 13 === e.keyCode && this.handleOK()
        }

        mounted() {
            this.newName = this.originName, document.addEventListener("click", () => {
                this.isShowTips = !1
            }), document.addEventListener("keydown", this.handleKeyDown), this.$nextTick(() => {
                let e = this.$refs.input.$el.querySelector("textarea");
                null !== e && void 0 !== e && e.select()
            }), s.remote.getCurrentWindow().hookWindowMessage(528, (e, t) => {
                this.isShowTips = !1
            })
        }

        destroyed() {
            document.removeEventListener("keydown", this.handleKeyDown)
        }
    };
    n([l.Prop()], p.prototype, "options", void 0), n([l.Prop()], p.prototype, "boxId", void 0), p = n([l.Component], p), t.default = p
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(481), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(39), s = i(4), a = i(40), l = i(28);
    let c = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        handleClose(e) {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK(e) {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {picked: e}), window.close()
        }
    };
    n([s.Prop()], c.prototype, "boxId", void 0), c = n([s.Component], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(483), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(39), s = i(4), a = i(40), l = i(28), c = i(78);
    let u = class extends (o.mixins(a.DraggableMixin)) {
        constructor() {
            super(...arguments), this.files = ""
        }

        handleClose(e) {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK(e) {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {picked: e}), window.close()
        }

        mounted() {
            do {
                if (void 0 === this.options || null === this.options) break;
                let e = this.options.file;
                if (void 0 === e || null === e) break;
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                }
                if (null === t) break;
                let i = "在目录“" + this.options.saveDir + "”下已存在文件：";
                t.splice(0, 0, i), this.files = t.join("<br>")
            } while (0);
            this.$nextTick(() => {
                c.ThunderWindowNS.resizeToFitContent(0, 0, c.ThunderWindowNS.fitWindowPosInParent)
            })
        }
    };
    n([s.Prop({})], u.prototype, "options", void 0), n([s.Prop()], u.prototype, "boxId", void 0), u = n([s.Component], u), t.default = u
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(485), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(3), a = i(40), l = i(28), c = i(13);
    let u = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.password = "", this.secondPassword = "", this.tipsText = "", this.isShowTips = !1, this.isSetHide = this.options.isSetHide
        }

        handleClose(e) {
            let t = `button=${e}`;
            this.stat("private_page_pop_click", t), s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if (this.stat("private_page_pop_click", "button=confirm"), "" === this.password || "" === this.secondPassword) {
                    this.tipsText = "密码不能为空！", this.isShowTips = !0;
                    break
                }
                if (this.password !== this.secondPassword) {
                    this.tipsText = "两次输入的密码不一致！", this.isShowTips = !0;
                    break
                }
                s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {
                    password: this.password,
                    isSetHide: this.isSetHide
                }), "open" === this.options.showType && c.XLStatNS.trackEvent("download_leftpanel", "private_open_success", "", 0, 0, 0, 0, ""), window.close()
            } while (0)
        }

        stat(e, t) {
            let i = "type=3";
            "change" === this.options.showType && (i = "type=4"), void 0 !== t && null !== t && "" !== t && (i = `${i},${t}`), c.XLStatNS.trackEvent("download_leftpanel", e, "", 0, 0, 0, 0, i)
        }

        mounted() {
            this.stat("private_page_pop_show", ""), window.addEventListener("keyup", e => {
                "Enter" === e.key ? this.handleOK() : "Escape" === e.key && this.handleClose("close")
            }, !0), document.addEventListener("click", () => {
                this.isShowTips = !1
            }), s.remote.getCurrentWindow().hookWindowMessage(528, (e, t) => {
                this.isShowTips = !1
            })
        }
    };
    n([o.Prop()], u.prototype, "options", void 0), n([o.Prop()], u.prototype, "boxId", void 0), u = n([o.Component], u), t.default = u
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(487), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(3), a = i(40), l = i(28), c = i(13);
    let u = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.errorCount = this.options.errorCount, this.newPassword = "", this.tipsText = "", this.isShowTips = !1
        }

        handleClose(e) {
            let t = `button=${e},type=5`;
            c.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, t), s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close, {errorCount: this.errorCount}), window.close()
        }

        handleClearPwd() {
            this.newPassword = "", this.$refs.pwdInput.focus()
        }

        handleForget() {
            c.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, "button=forgot,type=5"), s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close, {
                from: "forget",
                errorCount: this.errorCount
            }), window.close()
        }

        handleOK() {
            do {
                let e = "button=confirm,type=5";
                if (c.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, e), "" === this.newPassword) {
                    this.tipsText = "密码不能为空！", this.isShowTips = !0;
                    break
                }
                if (this.options.password !== this.newPassword) {
                    this.tipsText = "密码错误，请重新输入！", this.isShowTips = !0, this.errorCount = this.errorCount + 1, this.errorCount >= 5 && (this.errorCount = 5, s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close, {
                        from: "more",
                        errorCount: this.errorCount
                    }), window.close());
                    break
                }
                s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {success: !0}), window.close()
            } while (0)
        }

        mounted() {
            c.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_show", "", 0, 0, 0, 0, "type=5"), window.addEventListener("keyup", e => {
                "Enter" === e.key ? this.handleOK() : "Escape" === e.key && this.handleClose("close")
            }, !0), this.$refs.pwdInput.focus(), document.addEventListener("click", () => {
                this.isShowTips = !1
            }), s.remote.getCurrentWindow().hookWindowMessage(528, (e, t) => {
                this.isShowTips = !1
            })
        }
    };
    n([o.Prop()], u.prototype, "options", void 0), n([o.Prop()], u.prototype, "boxId", void 0), u = n([o.Component], u), t.default = u
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(489), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(39), s = i(4), a = i(3), l = i(40), c = i(28), u = i(14), d = i(13);
    let h = class extends (o.mixins(l.DraggableMixin, l.PositionMixin)) {
        constructor() {
            super(...arguments), this.promptContent = "为了确保信息安全，请验证您已绑定的安全手机，填写收到的验证码。", this.okDisabled = !1, this.timerCookie = null, this.mobile = "", this.verifyCodeBtnDisabled = !1, this.verifyCodeBtntext = "获取验证码", this.token = "", this.verifyCodeTipsText = "", this.isShowVerifyCodeTips = !1, this.verifyCode = "", this.verifyCodeGetTipsText = "", this.isShowVerifyCodeGetTips = !1, this.creditkey = "", this.reviewurl = "", this.isShowFigureCode = !1
        }

        getMobile() {
            this.mobile = this.options.mobile, this.mobile = this.mobile.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
        }

        getPromptContent() {
            let e = this.options.methodType;
            this.promptContent = "forget" === e ? "重设密码进行身份验证，请验证您已绑定的安全手机信息，填写收到的验证码。" : "more" === e ? "输入密码错误次数过多，请验证您已绑定的安全手机信息，填写收到的验证码。" : "为了确保信息安全，请验证您已绑定的安全手机，填写收到的验证码。"
        }

        closeWnd(e) {
            null !== this.timerCookie && void 0 !== this.timerCookie && (clearInterval(this.timerCookie), this.timerCookie = null), window.close()
        }

        handleClose(e) {
            let t = `button=${e},type=1`;
            d.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, t), "close" === e ? a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, c.MessageBoxNS.Action.Close) : "cancel" === e && a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, c.MessageBoxNS.Action.Cancel), this.closeWnd("close")
        }

        handleGetVerifyCode(e) {
            return r(this, void 0, void 0, function* () {
                if ("auto" !== e) {
                    let e = "button=yanzhengma,type=1";
                    d.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, e)
                }
                if (this.token = null, null === this.timerCookie || void 0 === this.timerCookie) {
                    this.verifyCodeBtntext = "59s后重新获取", this.verifyCodeBtnDisabled = !0;
                    let e = 59;
                    this.timerCookie = setInterval(() => {
                        e <= 1 ? (this.verifyCodeBtnDisabled = !1, this.verifyCodeBtntext = "获取验证码", clearInterval(this.timerCookie), this.timerCookie = null) : (e -= 1, this.verifyCodeBtntext = `${e}s后重新获取`)
                    }, 1050)
                }
                "auto" !== e && (this.creditkey = "", this.reviewurl = ""), this.isShowFigureCode = !1;
                let t = yield u.default("SendSms", this.creditkey);
                if (null !== t && void 0 !== t) try {
                    let e = JSON.parse(t);
                    if (null !== e && void 0 !== e && 200 === e.code) this.token = e.data.token; else if (null !== e.msg && void 0 !== e.msg) if (201 === e.code) {
                        this.creditkey = e.data.creditkey;
                        let t = yield u.default("GetLoginInfo", "deviceid");
                        this.reviewurl = `${e.data.reviewurl}&creditkey=${e.data.creditkey}&deviceid=${t}`, this.isShowFigureCode = !0
                    } else this.verifyCodeGetTipsText = e.msg, this.verifyCodeGetTipsText = this.verifyCodeGetTipsText.replace(/(\[.*\])/g, ""), this.isShowVerifyCodeGetTips = !0; else this.verifyCodeGetTipsText = "获取验证码失败", this.isShowVerifyCodeGetTips = !0
                } catch (e) {
                }
            })
        }

        handleModifierPhone() {
            d.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, "button=modifyphone,type=1"), u.default("OpenNewTab", "https://i.xunlei.com/xluser/validate/modifyphone_p.html"), this.closeWnd("modifierPhone")
        }

        handleOK() {
            return r(this, void 0, void 0, function* () {
                do {
                    let e = "button=confirm,type=1";
                    if (d.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_click", "", 0, 0, 0, 0, e), this.okDisabled = !0, this.isShowVerifyCodeTips = !1, null === this.verifyCode || void 0 === this.verifyCode || "" === this.verifyCode) {
                        this.verifyCodeTipsText = "验证码不能为空", this.isShowVerifyCodeTips = !0, this.okDisabled = !1;
                        break
                    }
                    if (this.verifyCode = this.verifyCode.trim(), 6 !== this.verifyCode.length) {
                        this.verifyCodeTipsText = "验证码位数不对", this.isShowVerifyCodeTips = !0, this.okDisabled = !1;
                        break
                    }
                    let t = yield u.default("CheckSms", this.token, this.verifyCode);
                    if (null !== t && void 0 !== t) {
                        try {
                            let e = JSON.parse(t);
                            null !== e && void 0 !== e && 200 === e.code ? (a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, c.MessageBoxNS.Action.OK, {success: !0}), window.close()) : (null !== e.msg && void 0 !== e.msg ? (this.verifyCodeTipsText = e.msg, this.verifyCodeTipsText = this.verifyCodeTipsText.replace(/(\[.*\])/g, "")) : this.verifyCodeTipsText = "验证失败", this.isShowVerifyCodeTips = !0)
                        } catch (e) {
                            this.okDisabled = !1
                        }
                        this.okDisabled = !1
                    }
                } while (0)
            })
        }

        initIframe() {
            window.XlCaptcha.init({
                IFRAME_BOX_ID: "boxid", PANEL_THEME: "default", CLOSE_PANEL_FUNC: () => {
                    this.isShowFigureCode = !1, window.resizeTo(400, 300)
                }, VERTIFY_SUCC_FUNC: e => {
                    200 === e.code && (this.isShowFigureCode = !1, window.resizeTo(400, 300), this.creditkey = e.creditkey, this.handleGetVerifyCode("auto"))
                }
            })
        }

        showFigureCode() {
            window.resizeTo(400, 350), this.isShowFigureCode && this.initIframe()
        }

        mounted() {
            d.XLStatNS.trackEvent("download_leftpanel", "private_page_pop_show", "", 0, 0, 0, 0, "type=1"), this.getMobile(), this.getPromptContent(), window.addEventListener("keyup", e => {
                "Enter" === e.key ? this.handleOK() : "Escape" === e.key && this.handleClose("close")
            }, !0), this.$refs.phoneInput.focus(), document.addEventListener("click", () => {
                this.isShowVerifyCodeGetTips = !1, this.isShowVerifyCodeTips = !1
            }), a.remote.getCurrentWindow().hookWindowMessage(528, (e, t) => {
                this.isShowVerifyCodeGetTips = !1, this.isShowVerifyCodeTips = !1
            })
        }
    };
    n([s.Prop()], h.prototype, "options", void 0), n([s.Prop()], h.prototype, "boxId", void 0), h = n([s.Component], h), t.default = h
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(491), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(39), s = i(4), a = i(3), l = i(1045), c = i(10), u = i(40), d = i(28);
    let h = class extends (o.mixins(u.DraggableMixin, u.PositionMixin)) {
        constructor() {
            super(...arguments), this.pathTips = "", this.isShowPathTips = !1, this.savePath = "", this.appendDirs = [], this.hideLocalDir = !0
        }

        handleClose(e) {
            a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.Close), window.close()
        }

        handleChangePath(e) {
            this.savePath = e
        }

        handleOK() {
            return r(this, void 0, void 0, function* () {
                do {
                    if ("" === this.savePath) {
                        this.isShowPathTips = !0, this.pathTips = "不合法的存储路径";
                        break
                    }
                    if (!(yield c.FileSystemAWNS.existsAW(this.savePath))) {
                        if (!(yield c.FileSystemAWNS.mkdirAW(this.savePath))) {
                            this.isShowPathTips = !0, this.pathTips = "不合法的存储路径";
                            break
                        }
                    }
                    a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.OK, {
                        savePath: this.savePath,
                        hideLocalDir: this.hideLocalDir ? 1 : 0
                    }), window.close()
                } while (0)
            })
        }

        mounted() {
            this.options.savePath && "" !== this.options.savePath && this.appendDirs.push(this.options.savePath), this.savePath = this.options.savePath, this.hideLocalDir = this.options.hideLocalDir, document.addEventListener("click", () => {
                this.isShowPathTips = !1
            }), a.remote.getCurrentWindow().hookWindowMessage(528, (e, t) => {
                this.isShowPathTips = !1
            })
        }
    };
    n([s.Prop({})], h.prototype, "options", void 0), n([s.Prop()], h.prototype, "boxId", void 0), h = n([s.Component({components: {PathSelector: l.default}})], h), t.default = h
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(493), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(3), s = i(4), a = i(94), l = i(20), c = i(12), u = i(69), d = i(10), h = i(15), f = i(147), p = i(1),
        v = i(14), m = p.default.getLogger("ThunderNewTask.path-selector");
    let g = class extends s.Vue {
        constructor() {
            super(...arguments), this.timerId = -1, this.freeSpace = 0, this.totalSpace = 0, this.valid = !0, this.optionsAlias = {}, this.isDanger = !1, this.isWarn = !1
        }

        get options() {
            return [...Object.values(this.optionsAlias)]
        }

        onPathChange(e) {
            return r(this, void 0, void 0, function* () {
                do {
                    let t = e;
                    if ("私人空间" === e) {
                        let e = yield v.default("GetUserID");
                        if (null === e || void 0 === e || "" === e) break;
                        t = yield u.NativeCallAWNS.getConfigValueAW("PrivateSpaceDefaultPath", e, "")
                    }
                    this.totalSpace = l.ThunderHelper.getPartitionSpace(t), this.freeSpace = l.ThunderHelper.getFreePartitionSpace(t)
                } while (0)
            })
        }

        onDanger(e) {
            this.$emit("danger", e)
        }

        onAppendDirsChange(e, t) {
            if (void 0 !== t && null !== t && t.length > 0) for (let e of t) this.optionsAlias.hasOwnProperty(e) && this.$delete(this.optionsAlias, e);
            if (void 0 !== e && null !== e && e.length > 0) for (let t of e) "\\" === t[t.length - 1] || (t += "\\"), this.optionsAlias.hasOwnProperty(t) || this.$set(this.optionsAlias, t, t)
        }

        created() {
            setTimeout(() => {
                let e = this.value;
                void 0 !== this.defaultDir && null !== this.defaultDir && (this.$emit("input", this.defaultDir), e = this.defaultDir);
                let t = o.remote.app.getPath("desktop"), i = o.remote.app.getPath("documents");
                this.$set(this.optionsAlias, t, "桌面"), this.$set(this.optionsAlias, i, "我的文档"), f.HistoryPathsNS.getHistoryPaths().then(e => {
                    if (void 0 !== e) {
                        let n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1);
                        let r = e.indexOf(i);
                        if (-1 !== r && e.splice(r, 1), e.length > 0) for (let t of e) "\\" === t[t.length - 1] || (t += "\\"), this.optionsAlias.hasOwnProperty(t) || this.$set(this.optionsAlias, t, t)
                    }
                }), this.onPathChange(e), this.enablePrivateSpace && (o.ipcRenderer.once(h.ThunderChannelList.channelMRGetPrivateSpaceInfoResult, (e, t, i) => r(this, void 0, void 0, function* () {
                    m.information("GetPrivateSpaceInfoResult isPrivateSpaceOpen:", t, ", currentCategoryId:", i);
                    if (this.options.includes("私人空间") || this.$set(this.optionsAlias, "私人空间", "私人空间"), -1 !== i) this.$emit("input", "私人空间"); else {
                        let e = yield u.NativeCallAWNS.getDownloadDir();
                        this.$emit("input", e)
                    }
                    this.$emit("private", t)
                })), o.ipcRenderer.send(h.ThunderChannelList.channelRMGetPrivateSpaceInfo))
            }, 500), this.timerId = setInterval(() => r(this, void 0, void 0, function* () {
                if (void 0 !== this.value && null !== this.value) {
                    if ("私人空间" === this.value) this.valid = !0; else if (this.value.length >= 3) {
                        let e = this.value.slice(0, 3);
                        this.valid = yield d.FileSystemAWNS.existsAW(e)
                    } else this.valid = !1;
                    this.valid && this.onPathChange(this.value)
                }
            }), 1e3)
        }

        get spaceColor() {
            let e = "";
            return this.isDanger ? e = "is-danger" : this.isWarn && (e = "is-warn"), e
        }

        get freeSpaceFormat() {
            let e = "";
            do {
                if ("string" != typeof this.value) break;
                if (-1 === this.freeSpace) break;
                if ("" === this.value) {
                    this.isDanger = !1;
                    break
                }
                if (this.value.length < 3) {
                    this.isDanger = !1;
                    break
                }
                if (!this.valid) {
                    this.isDanger = !1;
                    break
                }
                if (this.isDanger = !1, this.isWarn = !1, this.needSpace >= this.freeSpace) {
                    this.isDanger = !0, e = "磁盘空间不足";
                    break
                }
                this.freeSpace / this.totalSpace <= .3 && (this.isWarn = !0), e = "剩余:" + c.ThunderUtil.formatSize(this.freeSpace)
            } while (0);
            return e
        }

        handleInput(e) {
            do {
                let t = !1;
                for (let i in this.optionsAlias) if (e === this.optionsAlias[i]) {
                    t = !0, this.$emit("input", i, !0);
                    break
                }
                if (t) break;
                this.$emit("input", e, !0)
            } while (0)
        }

        handleContextMenu() {
            return r(this, void 0, void 0, function* () {
                const {MenuSkinNS: e} = yield Promise.resolve().then(() => i(53));
                e.popEditableDefaultContextMenu()
            })
        }

        handleChangePath() {
            const e = o.remote.dialog;
            let t = o.remote.getCurrentWindow(),
                i = e.showOpenDialog(t, {defaultPath: this.value, properties: ["openDirectory"]});
            void 0 !== i && this.$emit("input", i[0], !0)
        }

        mounted() {
        }

        destroyed() {
            -1 !== this.timerId && (clearTimeout(this.timerId), this.timerId = -1)
        }
    };
    n([s.Prop({})], g.prototype, "appendDirs", void 0), n([s.Prop({})], g.prototype, "defaultDir", void 0), n([s.Prop({default: !0})], g.prototype, "enablePrivateSpace", void 0), n([s.Prop({default: ""})], g.prototype, "value", void 0), n([s.Prop({default: 0})], g.prototype, "needSpace", void 0), n([s.Watch("value", {immediate: !0})], g.prototype, "onPathChange", null), n([s.Watch("isDanger", {immediate: !0})], g.prototype, "onDanger", null), n([s.Watch("appendDirs", {immediate: !0})], g.prototype, "onAppendDirsChange", null), g = n([s.Component({components: {SelectNative: a.default}})], g), t.default = g
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(495), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(3), a = i(40), l = i(28);
    let c = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.maxTaskCount = 5, this.autoMoveLowSpeedTaskToTail = !0, this.tipsText = "请输入大于等于1小于等于50的数字", this.isShowTips = !1
        }

        handleClose(e) {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if (!this.maxTaskCount || this.maxTaskCount < 1 || this.maxTaskCount > 50) {
                    this.isShowTips = !0;
                    break
                }
                s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {
                    maxTaskCount: this.maxTaskCount,
                    autoMoveLowSpeedTaskToTail: this.autoMoveLowSpeedTaskToTail
                }), window.close()
            } while (0)
        }

        mounted() {
            document.addEventListener("click", () => {
                this.isShowTips = !1
            })
        }
    };
    n([o.Prop()], c.prototype, "boxId", void 0), c = n([o.Component], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(497), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(78), o = i(39), s = i(4), a = i(40);
    let l = class extends (o.mixins(a.DraggableMixin)) {
        constructor() {
            super(...arguments), this.title = "以下0个相同任务，将不再下载这些文件", this.urls = ""
        }

        mounted() {
            do {
                if (void 0 === this.options || null === this.options) break;
                let e = this.options.file;
                if (void 0 === e || null === e) break;
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                }
                if (null === t) break;
                this.urls = t.join("<br>"), this.title = "以下" + t.length + "个相同任务，将不再下载这些文件"
            } while (0);
            this.$nextTick(() => {
                r.ThunderWindowNS.resizeToFitContent(0, 0, r.ThunderWindowNS.fitWindowPosInParent)
            })
        }

        handleOK() {
            window.close()
        }
    };
    n([s.Prop()], l.prototype, "options", void 0), l = n([s.Component], l), t.default = l
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(499), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(3), o = i(39), s = i(4), a = i(79), l = i(239), c = i(94), u = i(40), d = i(28);
    let h = class extends (o.mixins(u.DraggableMixin, u.PositionMixin)) {
        constructor() {
            super(...arguments), this.selectOptions = ["1", "2", "3"], this.picked = "number", this.urlExample = "", this.numFrom = "0", this.numTo = "0", this.numMax = 999, this.wildcardLength = "2", this.alphaFrom = "a", this.alphaTo = "z", this.context = "", this.tipsText = "", this.isShowTips = !1
        }

        handleClose() {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if (!a.URLHelperNS.isP2spOrEmuleUrl(this.urlExample)) {
                    this.tipsText = "不支持的协议，请重新输入", this.isShowTips = !0;
                    break
                }
                if (!/\(\*\)/.test(this.urlExample)) {
                    this.tipsText = "必须在url中包含‘(*)’，请重新输入", this.isShowTips = !0;
                    break
                }
                if ("number" === this.picked) {
                    r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.OK, {
                        picked: this.picked,
                        urlExample: this.urlExample,
                        from: Number(this.numFrom),
                        to: Number(this.numTo),
                        wildcardLen: Number(this.wildcardLength)
                    }), window.close();
                    break
                }
                if ("alpha" === this.picked) {
                    r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.OK, {
                        picked: this.picked,
                        urlExample: this.urlExample,
                        from: this.alphaFrom,
                        to: this.alphaTo
                    }), window.close();
                    break
                }
            } while (0)
        }

        padLeftZero(e, t) {
            if (t.length > e) return t;
            return ("000000".substring(0, e) + t).substr(t.length)
        }

        showUrls() {
            do {
                if (!a.URLHelperNS.isP2spOrEmuleUrl(this.urlExample)) {
                    this.context = "";
                    break
                }
                if (!/\(\*\)/.test(this.urlExample)) {
                    this.context = "";
                    break
                }
                if ("number" === this.picked) {
                    if (this.numFrom === this.numTo) this.context = this.urlExample.replace(/\(\*\)/, this.padLeftZero(Number(this.wildcardLength), this.numFrom)); else {
                        let e = this.urlExample.replace(/\(\*\)/, this.padLeftZero(Number(this.wildcardLength), this.numFrom)),
                            t = this.urlExample.replace(/\(\*\)/, this.padLeftZero(Number(this.wildcardLength), this.numTo));
                        this.context = e + "\r\n...\r\n...\r\n" + t
                    }
                    break
                }
                if ("alpha" === this.picked) {
                    if (this.alphaFrom === this.alphaTo) this.context = this.urlExample.replace(/\(\*\)/, this.alphaFrom); else {
                        let e = this.urlExample.replace(/\(\*\)/, this.alphaFrom),
                            t = this.urlExample.replace(/\(\*\)/, this.alphaTo);
                        this.context = e + "\r\n...\r\n...\r\n" + t
                    }
                    break
                }
            } while (0)
        }

        handleNumFromChange(e, t) {
            let i = this.numFrom;
            void 0 !== t && null !== t && (this.numFrom = t), this.numFrom = e, i !== e && this.showUrls()
        }

        handleNumToChange(e, t) {
            let i = this.numTo;
            void 0 !== t && null !== t && (this.numTo = t), this.numTo = e, i !== e && this.showUrls()
        }

        handleWildcardChange(e) {
            let t = this.wildcardLength;
            this.wildcardLength = e, t !== e && "number" === this.picked && this.showUrls()
        }

        handleAlphaFromChange(e, t) {
            let i = this.alphaFrom;
            void 0 !== t && null !== t && (this.alphaFrom = t), this.alphaFrom = e, i !== e && this.showUrls()
        }

        handleAlphaToChange(e, t) {
            let i = this.alphaTo;
            void 0 !== t && null !== t && (this.alphaTo = t), this.alphaTo = e, i !== e && this.showUrls()
        }

        handleDocClick() {
            this.tipsText = "", this.isShowTips = !1
        }

        mounted() {
            document.addEventListener("click", this.handleDocClick), r.remote.getCurrentWindow().hookWindowMessage(528, (e, t) => {
                this.isShowTips = !1
            })
        }

        destroyed() {
            document.removeEventListener("click", this.handleDocClick)
        }

        onUrlExampleChanged() {
            this.showUrls()
        }

        onPickedChange() {
            this.showUrls()
        }
    };
    n([s.Prop()], h.prototype, "boxId", void 0), n([s.Watch("urlExample")], h.prototype, "onUrlExampleChanged", null), n([s.Watch("picked")], h.prototype, "onPickedChange", null), h = n([s.Component({
        components: {
            LimitInput: l.default,
            SelectNative: c.default
        }
    })], h), t.default = h
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(501), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(3), a = i(40), l = i(28);
    let c = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.value = ""
        }

        mounted() {
            this.value = this.options.title, this.$nextTick(() => {
                let e = this.$refs.titleInput;
                e.focus(), e.select()
            }), s.remote.ipcMain.on("book-mark-list-close", e => {
                window.close()
            }), s.remote.getCurrentWindow().on("blur", e => {
                window.close()
            })
        }

        handleOk() {
            let e = this.$refs.titleInput;
            "" !== e.value.trim() && (s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {
                title: e.value,
                state: "ok"
            }), window.close())
        }

        handleDelete() {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Cancel, {
                title: this.value,
                state: "delete"
            }), window.close()
        }

        handleClose() {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close, {
                title: this.value,
                state: "close"
            }), window.close()
        }
    };
    n([o.Prop({})], c.prototype, "options", void 0), n([o.Prop()], c.prototype, "boxId", void 0), c = n([o.Component({})], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(503), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(3), a = i(40), l = i(1), c = i(13), u = i(28), d = i(53),
        h = l.default.getLogger("book-list");
    let f = class extends (r.mixins(a.DraggableMixin)) {
        constructor() {
            super(...arguments), this.value = "", this.bookMarkMenuUrl = "", this.bookMarkMenuTitle = "", this.currentIndex = 0, this.itemHeight = 28, this.moreBookMarkMaxHeight = 440, this.itemsPadding = 8, this.itemsWarpperPadding = 12
        }

        mounted() {
            s.remote.getCurrentWindow().show(), s.remote.getCurrentWindow().focus(), s.remote.ipcMain.on("book-mark-list-close", e => {
                h.information("book-mark-list-close"), window.close()
            }), s.remote.getCurrentWindow().on("blur", e => {
                window.close()
            })
        }

        handleOk() {
            let e = this.$refs.titleInput;
            "" !== e.value.trim() && (s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, u.MessageBoxNS.Action.OK, {
                title: e.value,
                state: "ok"
            }), window.close())
        }

        isShowDefaultIcon(e, t) {
            let i = !1;
            do {
                if (-1 !== e.indexOf("ftp://") || "" === t || void 0 === t) {
                    i = !0;
                    break
                }
            } while (0);
            return i
        }

        openNewTab(e, t, i = "") {
            s.ipcRenderer.send("openNewTab-book-list", {url: e, title: t})
        }

        get bookMarkTemplate() {
            return [{
                label: "在新标签页中打开", click: () => {
                    this.bookMarkRightClick("open_new"), this.openNewTab(this.bookMarkMenuUrl, this.bookMarkMenuTitle, "new")
                }
            }, {
                label: "删除", click: () => {
                    let e = s.remote.getCurrentWindow();
                    this.options.splice(this.currentIndex, 1);
                    let t = e.getSize();
                    this.options.length * this.itemHeight + this.itemsPadding + this.itemsWarpperPadding < this.moreBookMarkMaxHeight && e.setSize(t[0], t[1] - this.itemHeight), s.ipcRenderer.send("delete-book-list", {url: this.bookMarkMenuUrl}), c.XLStatNS.trackEvent("clienttop", "bookmarks_delete"), 0 === this.options.length && window.close()
                }
            }]
        }

        showBookMarkMenu(e, t, i, n = {}) {
            this.bookMarkMenuUrl = e, this.bookMarkMenuTitle = t, this.currentIndex = i;
            let r = s.remote.getCurrentWindow(), o = s.remote.Menu.buildFromTemplate(this.bookMarkTemplate);
            d.MenuSkinNS.setStyle(o, {}), o.popup(Object.assign({}, {window: r}, n)), c.XLStatNS.trackEvent("clienttop", "bookmarks_top_right_click")
        }

        bookMarkRightClick(e) {
            let t = `button=${e}`;
            c.XLStatNS.trackEvent("clienttop", "bookmarks_top_right_click_menu", "", 0, 0, 0, 0, t)
        }
    };
    n([o.Prop({})], f.prototype, "options", void 0), n([o.Prop()], f.prototype, "boxId", void 0), f = n([o.Component({})], f), t.default = f
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(505), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(3), a = i(1), l = i(40), c = i(33), u = i(5), d = i(13), h = i(8),
        f = a.default.getLogger("Subtitle-Task-FileList");
    let p = class extends (r.mixins(l.DraggableMixin, l.PositionMixin)) {
        constructor() {
            super(...arguments), this.taskId = void 0, this.taskName = "", this.videoNum = 1, this.fileList = [], this.saveDir = "", this.taskType = 2, this.categoryViewId = h.DownloadKernel.CategroyViewID.Unkown
        }

        get taskIcon() {
            return this.taskType === h.DownloadKernel.TaskType.Bt ? "xlx-icon-type-bt-file" : "xlx-icon-type-group"
        }

        onVideoNumberTextClick() {
            if ("" !== this.saveDir) {
                let e = this.saveDir + "\\.";
                s.remote.shell.showItemInFolder(e)
            }
        }

        searchShooter() {
            let e = this.taskName.replace(/[\`\-\=\~\!\@\#\$\%\^\&\(\)\_\+\[\]\;\'\,\.\{\}]/g, " "),
                t = "http://subhd.com/search/" + encodeURIComponent(e);
            u.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", t), window.close()
        }

        popSutitleMessageBox(e) {
            s.remote.ipcMain.on("onSearchSubtitleWndClose", (e, t) => {
                0 === t ? n.show() : n.close()
            });
            let t = "",
                i = `pannel=${t = this.categoryViewId === h.DownloadKernel.CategroyViewID.Downloading ? "downloading" : this.categoryViewId === h.DownloadKernel.CategroyViewID.Completed ? "complete" : "trash"},cid=${e.cid},taskid=${this.taskId},filename=${encodeURIComponent(e.fileName)}`;
            d.XLStatNS.trackEvent("download_detail", "dltab_detail_viewsubtitles_click", "", 0, 0, 0, 0, i), f.information("PopSutitleMessageBox: ", i);
            let n = s.remote.getCurrentWindow();
            n.hide(), c.MessageBox.custom("SubtitleSearch", {
                size: "large",
                taskId: this.taskId,
                taskName: e.fileName,
                cid: e.cid,
                saveDir: this.saveDir,
                from: "fileListDlg",
                categoryViewId: this.categoryViewId
            })
        }

        handleCancel(e) {
            window.close()
        }

        mounted() {
            this.taskId = this.options.taskId, f.information("taskName: ", this.taskId), this.taskName = this.options.taskName, f.information("taskName: ", this.taskName), this.taskType = this.options.taskType, f.information("taskType: ", this.taskType), this.saveDir = this.options.saveDir, f.information("saveDir: ", this.saveDir), this.fileList = this.options.fileList, this.videoNum = this.options.fileList.length, f.information("result: ", this.fileList), f.information("videoNum: ", this.videoNum), this.categoryViewId = this.options.categoryViewId, f.information("categoryViewId: ", this.categoryViewId)
        }
    };
    n([o.Prop()], p.prototype, "options", void 0), p = n([o.Component], p), t.default = p
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(507), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(2), s = i(39), a = i(4), l = i(3), c = i(1), u = i(15), d = i(40), h = i(5), f = i(7), p = i(8),
        v = i(13), m = f.default(o.join(__rootDir, "../bin/ThunderHelper.node")),
        g = c.default.getLogger("Subtitle-Search");
    let _ = class extends (s.mixins(d.DraggableMixin, d.PositionMixin)) {
        constructor() {
            super(...arguments), this.taskId = void 0, this.taskName = "", this.taskCid = "", this.saveDir = "", this.subtitleList = [], this.searchText = "", this.searchStatus = 0, this.categoryViewId = p.DownloadKernel.CategroyViewID.Unkown, this.from = "taskList"
        }

        getName(e) {
            let t = ".srt";
            if (g.information("getName ", e.surl), void 0 !== e.surl && e.surl.length > 1) {
                let i = e.surl.substring(e.surl.lastIndexOf("."));
                t = e.sname + i
            }
            return "" === e.sname ? ".srt" : t
        }

        getRate(e) {
            if (void 0 !== e) {
                if ("number" == typeof e.rate) return e.rate;
                if ("string" == typeof e.rate) return Number(e.rate)
            }
            return 0
        }

        onOperationTextClick(e, t) {
            if (g.information("OnOperationTextClick index ", t), 0 === e.status || 3 === e.status) e.status = 2, l.remote.ipcMain.on(u.ThunderChannelList.channelMRDownloadSutitleSuc, t => r(this, void 0, void 0, function* () {
                g.information("OnOperationTextClick channelMRDownloadSutitleSuc"), e.status = 1, this.stat("dltab_detail_subtitlesdown_click", "result=success")
            })), l.remote.ipcMain.on(u.ThunderChannelList.channelMRDownloadSutitleFail, t => r(this, void 0, void 0, function* () {
                g.information("OnOperationTextClick channelMRDownloadSutitleFail"), e.status = 3, this.stat("dltab_detail_subtitlesdown_click", "result=fail")
            })), g.information("send channelRMDownloadSutitle"), l.ipcRenderer.send(u.ThunderChannelList.channelRMDownloadSutitle, e, this.taskId, this.taskName); else if (1 === e.status) {
                if (m.shellExecute(0, "open", o.join(this.saveDir, this.taskName), null, null, "SW_SHOW") <= 32) {
                    let e = this.saveDir + "\\.";
                    l.remote.shell.showItemInFolder(e)
                }
            }
        }

        stat(e, t) {
            let i = "",
                n = `pannel=${i = this.categoryViewId === p.DownloadKernel.CategroyViewID.Downloading ? "downloading" : this.categoryViewId === p.DownloadKernel.CategroyViewID.Completed ? "complete" : "trash"},cid=${this.taskCid},taskid=${this.taskId},filename=${encodeURIComponent(this.taskName)}`;
            null !== t && void 0 !== t && "" !== t && (n = `${n},${t}`), g.information(e, n), v.XLStatNS.trackEvent("download_detail", e, "", 0, 0, 0, 0, n)
        }

        searchSubtitleByName(e) {
            this.searchStatus = 0, l.ipcRenderer.on(u.ThunderChannelList.channelMRGetSutitleByNameResult, (e, t) => r(this, void 0, void 0, function* () {
                if (g.information("SearchSubtitleByName"), t) if (this.subtitleList = t, g.information("result: ", t), t.length > 1) {
                    this.searchStatus = 1;
                    for (let e of t) g.information("item: ", e)
                } else this.searchStatus = 2; else this.searchStatus = 2, g.information("result is null")
            })), g.information("SearchSubtitleByName searchText: ", this.searchText), l.ipcRenderer.send(u.ThunderChannelList.channelRMGetSutitleByName, this.searchText, this.taskId), "btn" === e && this.stat("dltab_detail_subtitlessearch_click")
        }

        searchShooter() {
            let e = "http://subhd.com/search/" + encodeURIComponent(this.searchText);
            h.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", e), "fileListDlg" === this.from && l.ipcRenderer.send("onSearchSubtitleWndClose", 1), window.close()
        }

        handleCancel(e) {
            try {
                "fileListDlg" === this.from && l.ipcRenderer.send("onSearchSubtitleWndClose", 0), window.close()
            } catch (e) {
                g.warning(e)
            }
        }

        mounted() {
            this.taskId = this.options.taskId, g.information("taskId: ", this.taskId), this.taskName = this.options.taskName, g.information("taskName: ", this.taskName), this.taskCid = this.options.cid, g.information("cid: ", this.taskCid), this.saveDir = this.options.saveDir, g.information("saveDir: ", this.saveDir), this.categoryViewId = this.options.categoryViewId, g.information("categoryViewId: ", this.categoryViewId);
            let e = this.taskName.lastIndexOf(".");
            g.information("index: ", e);
            let t = "";
            t = void 0 !== e && -1 !== e ? this.taskName.substring(0, e) : this.taskName, g.information("text: ", t), this.searchText = t.replace(/[\`\-\=\~\!\@\#\$\%\^\&\(\)\_\+\[\]\;\'\,\.\{\}]/g, " "), g.information("searchText: ", this.searchText), this.from = this.options.from, g.information("from: ", this.from), l.ipcRenderer.on(u.ThunderChannelList.channelMRGetSutitleByCidResult, (e, t) => r(this, void 0, void 0, function* () {
                if (g.information("on channelMRGetSutitleByCidResult"), t) if (this.subtitleList = t, g.information(t), t.length > 1) {
                    this.searchStatus = 1;
                    for (let e of t) g.information("item: ", e)
                } else this.searchStatus = 2, this.searchSubtitleByName(); else this.searchStatus = 2, g.information("result is null"), this.searchSubtitleByName()
            })), l.ipcRenderer.send(u.ThunderChannelList.channelRMGetSutitleByCid, this.taskCid, this.taskId)
        }
    };
    n([a.Prop()], _.prototype, "options", void 0), _ = n([a.Component], _), t.default = _
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(509), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(39), s = i(4), a = i(40), l = i(1), c = i(7), u = i(2), d = i(3), h = i(5), f = i(28),
        p = c.default(u.resolve(__rootDir, "../bin/ThunderHelper.node")), v = l.default.getLogger("DownloadCategory"),
        m = i(13);
    let g = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.szCurSelect = "", this.selectClassQQ = "td-tabs__item", this.selectClass360 = "td-tabs__item", this.selectClassSG = "td-tabs__item", this.obj360Data = null, this.objSouGouData = null, this.objQQData = null, this.path360 = `${__rootDir}/static/browser/360.gif`, this.pathSougou = `${__rootDir}/static/browser/sg.gif`, this.pathQQ = `${__rootDir}/static/browser/qq.gif`, this.settingFlag = 0, this.windowWidth = 560, this.windowHeight = 420
        }

        get is360Exist() {
            return null !== this.obj360Data
        }

        get isSouGouExist() {
            return null !== this.objSouGouData
        }

        get isQQExist() {
            return null !== this.objQQData
        }

        handleItemClick(e) {
            this.szCurSelect = e
        }

        handleCloseButton() {
            d.ipcRenderer.send(`message-box-resolve-${this.boxId}`, f.MessageBoxNS.Action.Close), window.close()
        }

        onFinalSet() {
            this.settingFlag++, 3 === this.settingFlag && (this.obj360Data && "" === this.szCurSelect ? this.szCurSelect = "360" : this.objSouGouData && "" === this.szCurSelect ? this.szCurSelect = "SouGou" : this.objQQData && "" === this.szCurSelect && (this.szCurSelect = "QQ"))
        }

        handleConfigBrowser() {
            v.information("选择迅雷下载");
            let e = null, t = "";
            switch (this.szCurSelect) {
                case"360":
                    e = this.obj360Data, t = "se://settings/browser#downloadsSection";
                    break;
                case"SouGou":
                    e = this.objSouGouData, t = "se://settings/?category=download";
                    break;
                case"QQ":
                    e = this.objQQData, t = "qqbrowser://settings/#search-section-content"
            }
            if (e) {
                let i = p.queryRegValue(e.reg.regRoot, e.reg.regKey, e.reg.regName);
                i = p.getLongPathName(i), p.queryFileExists(i) ? p.shellExecute(0, "open", i, t, "", "SW_SHOW") : v.information("浏览器执行文件:", i, " 不存在")
            }
            let i = "browser=" + this.szCurSelect + ",button=change_browser_donwload_mode";
            m.XLStatNS.trackEvent("setting_center", "use_xl_download_click", "", 0, 0, 0, 0, i)
        }

        onChange(e, t) {
            switch (v.information("当前选择改变了:", this.szCurSelect), e) {
                case"360":
                    -1 === this.selectClass360.indexOf("is-active") && (this.selectClass360 = this.selectClass360.concat(" is-active")), this.selectClassQQ = this.selectClassQQ.replace("is-active", ""), this.selectClassSG = this.selectClassSG.replace("is-active", "");
                    break;
                case"SouGou":
                    -1 === this.selectClassSG.indexOf("is-active") && (this.selectClassSG = this.selectClassSG.concat(" is-active")), this.selectClassQQ = this.selectClassQQ.replace("is-active", ""), this.selectClass360 = this.selectClass360.replace("is-active", "");
                    break;
                case"QQ":
                    -1 === this.selectClassQQ.indexOf("is-active") && (this.selectClassQQ = this.selectClassQQ.concat(" is-active")), this.selectClass360 = this.selectClass360.replace("is-active", ""), this.selectClassSG = this.selectClassSG.replace("is-active", "")
            }
        }

        initConfigGuide() {
            return r(this, void 0, void 0, function* () {
                if (!(yield this.isBrowserConfigInit())) return null;
                let e = p.getDefaultBrowserPath(), t = e.split("\\"), i = "";
                t && t.length > 0 && (i = t[t.length - 1]), v.information("默认浏览器运行地址为:", e, " exeName:", i), this.getInstallBrowserInfo("360安全浏览器").then(e => {
                    this.obj360Data = e, this.obj360Data && this.obj360Data.proName.toLowerCase() === i.toLowerCase() && (this.szCurSelect = "360"), this.onFinalSet(), v.error("360浏览器安装信息:", e)
                }).catch(e => {
                    v.error("调用异步接口getInstallBrowserInfo失败 1")
                }), this.getInstallBrowserInfo("QQ浏览器").then(e => {
                    this.objQQData = e, this.objQQData && this.objQQData.proName.toLowerCase() === i.toLowerCase() && (this.szCurSelect = "QQ"), this.onFinalSet(), v.error("QQ浏览器安装信息:", e)
                }).catch(e => {
                    v.error("调用异步接口getInstallBro  wserInfo失败 2")
                }), this.getInstallBrowserInfo("搜狗浏览器").then(e => {
                    this.objSouGouData = e, this.objSouGouData && this.objSouGouData.proName.toLowerCase() === i.toLowerCase() && (this.szCurSelect = "SouGou"), this.onFinalSet(), v.error("搜狗浏览器安装信息:", e)
                }).catch(e => {
                    v.error("调用异步接口getInstallBrowserInfo失败 3")
                })
            })
        }

        isBrowserConfigInit() {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => {
                    h.NativeCallModule.nativeCall.CallNativeFunction("IsConfigBrowserInitFinish", (t, i) => {
                        v.information("Error: Info: ", t, i), e(i)
                    })
                })
            })
        }

        getInstallBrowserInfo(e) {
            return r(this, void 0, void 0, function* () {
                return new Promise(t => {
                    h.NativeCallModule.nativeCall.CallNativeFunction("GetInstallBrowserInfo", e, (e, i) => {
                        v.information("Error: Info: ", e, i), t(i)
                    })
                })
            })
        }

        created() {
            this.initConfigGuide().catch()
        }
    };
    n([s.Prop()], g.prototype, "boxId", void 0), n([s.Watch("szCurSelect", {immediate: !0})], g.prototype, "onChange", null), g = n([s.Component], g), t.default = g
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(511), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(40), a = i(3), l = i(15);
    let c = class extends (r.mixins(s.DraggableMixin, s.PositionMixin)) {
        constructor() {
            super(...arguments), this.progress = 1, this.timerId = -1, this.status = 0
        }

        handleCancel(e) {
            1 !== this.status && 2 !== this.status || window.close()
        }

        onClickDownloadXmp() {
            a.ipcRenderer.send(l.ThunderChannelList.channelRMDownloadXmp), window.close()
        }

        handleFixXmpSuc() {
            this.status = 1, clearTimeout(this.timerId), this.progress = 100, window.close()
        }

        handleFixXmpFail() {
            this.status = 2
        }

        mounted() {
            this.timerId = setInterval(() => {
                this.progress < 100 && (this.progress = this.progress + 1)
            }, 100), a.remote.ipcMain.on(l.ThunderChannelList.channelMRFixXmpSuc, this.handleFixXmpSuc), a.remote.ipcMain.on(l.ThunderChannelList.channelMRFixXMPFail, this.handleFixXmpFail), a.ipcRenderer.send(l.ThunderChannelList.channelRMXmpFixBoxCreated)
        }

        destroyed() {
            a.remote.ipcMain.removeListener(l.ThunderChannelList.channelMRFixXmpSuc, this.handleFixXmpSuc), a.remote.ipcMain.removeListener(l.ThunderChannelList.channelMRFixXMPFail, this.handleFixXmpFail), this.removeDraggable()
        }
    };
    n([o.Prop()], c.prototype, "options", void 0), c = n([o.Component], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(513), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(40), a = i(3), l = i(15);
    let c = class extends (r.mixins(s.DraggableMixin, s.PositionMixin)) {
        constructor() {
            super(...arguments), this.progress = 1, this.timerId = -1, this.status = 0
        }

        handleCancel(e) {
            window.close()
        }

        onClickDownloadXmpEx() {
            a.ipcRenderer.send(l.ThunderChannelList.channelRMDownloadXmpEx), window.close()
        }

        destroyed() {
            this.removeDraggable()
        }
    };
    n([o.Prop()], c.prototype, "options", void 0), c = n([o.Component], c), t.default = c
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(515), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(39), s = i(40), a = i(4), l = i(5), c = i(77), u = i(78), d = i(146), h = i(38), f = i(3), p = i(144),
        v = i(3), m = i(1), g = i(13), _ = i(79), y = i(33), b = i(28), C = m.default.getLogger("ThunderBirdKey"),
        w = i(2), x = i(7).default(w.join(__rootDir, "../bin/ThunderHelper.node"));
    let S = class extends (o.mixins(s.DraggableMixin, s.PositionMixin)) {
        constructor() {
            super(...arguments), this.isChecked = !1, this.curBirdKey = "", this.commonBirdKey = "", this.encryptBirdKey = "", this.expiresDate = "", this.timeToClose = 5, this.userpwd = "", this.disableCopy = !1, this.showEncryptRet = !1, this.encryptResult = !1, this.usePwdChecked = !1, this.cookieforlogin = -1, this.bServerEncryptCallBack = !1
        }

        get tips() {
            return `【迅雷口令#X${this.curBirdKey}#】复制口令，打开最新版迅雷，\n        接下来就是见证奇迹的时刻！（${this.expiresDate}失效）`
        }

        get timeClose() {
            return this.timeToClose
        }

        handleInput(e) {
            if ("string" != typeof e) return;
            let t = new RegExp("^[0-9a-zA-Z]+$"), i = e.match(t), n = this.userpwd;
            this.userpwd = e, i && i.length > 0 ? this.userpwd = e : this.userpwd = n, "" === e && (this.userpwd = e)
        }

        handleCheck(e) {
            let t, i;
            if (this.isChecked = e, this.isChecked) {
                t = "common", i = !0;
                let e = this.$refs.inputObj.$el.querySelector("input");
                e && this.$nextTick(() => {
                    e.focus()
                })
            } else t = "encrypted", i = !1;
            p.setBirdKeyPriority(this.options.url, t, i).then(e => {
                C.information("设置口令接口返回:", e.data), this.isWindowTrytoClose || "object" == typeof e && e.data && (C.information("设置口令优先级结果码:", e.data.code), this.isChecked ? "" !== this.encryptBirdKey ? (this.curBirdKey = this.encryptBirdKey, this.disableCopy = !1) : this.disableCopy = !0 : "" === this.commonBirdKey ? this.birdkeyPreHandle("", this.options.url, !1, "unchecked") : this.curBirdKey = this.commonBirdKey)
            }).catch(e => {
                C.information("设置口令优先级失败:", e)
            }), this.isChecked ? this.disableCopy = !0 : this.disableCopy = !1
        }

        handleKeyLogic() {
            this.bringMainWndToTop(), C.information("迅雷口令界面"), this.options.showType === p.ShowType.ShowUI_Creating ? this.createBirdKey() : this.options.showType === p.ShowType.ShowUI_Decoding && this.analysisBirdKey(), this.selfCopyFlag = !1, this.isWindowTrytoClose = !1
        }

        mounted() {
            let e = f.remote.getCurrentWindow(), t = !0;
            e && (t = e.isVisible()), t ? this.handleKeyLogic() : e.once("show", () => {
                this.handleKeyLogic()
            })
        }

        bringMainWndToTop() {
            if (!this.options) return;
            let e = f.remote.getGlobal("mainRendererWindow");
            e && (e.show(), h.ToolsUtilitiesAWNS.setForegroundWindow(x, e))
        }

        onClickClose() {
            this.isWindowTrytoClose = !0, window.close()
        }

        onEncryptKey() {
            l.NativeCallModule.nativeCall.CallNativeFunction("GetUserInfo", (e, t) => {
                let i = void 0;
                i = this.isChecked && "" !== this.userpwd ? "encrypted" : "common";
                let n = this.getUserIDFromString(t);
                "string" == typeof n && n.length > 0 ? this.handleEncryptBirdKey(n, this.options.url, i, this.userpwd, !1) : this.handleShowLoginContinue(this.options.url, i, this.userpwd)
            })
        }

        handleShowLoginContinue(e, t, i) {
            return r(this, void 0, void 0, function* () {
                let n = yield c.default(!1, !0, "birdkeyencrypt");
                n && "" !== n && this.handleEncryptBirdKey(n, e, t, i)
            })
        }

        handleEncryptBirdKey(e, t, i, n, r, o) {
            C.information("加密迅雷口令 userid = ", e, " checked=", this.isChecked, " password = ", this.userpwd), this.birdkeyEncode(e, t, i, this.userpwd, !1, e => {
                this.showEncryptRet = !0, this.encryptResult = e, e && (this.disableCopy = !1, this.bServerEncryptCallBack = !0, this.statCreateBirdKey("dltab_detail_encryption_xl_password", !0)), setTimeout(() => {
                    this.showEncryptRet = !1
                }, 700)
            })
        }

        queryBirdkeyInfo(e, t) {
            p.queryBirdKeyInfo(this.options.url).then(i => {
                if (this.isWindowTrytoClose) t("pass"); else if ("object" == typeof i) if (i.data) if (C.information("查询口令接口返回:", i.data), 200 === i.data.code) {
                    let n = "";
                    "number" == typeof i.data.link.uid && (n = i.data.link.uid.toString()), n === e && "encrypted" === i.data.link.type ? (this.isChecked = !0, this.userpwd = i.data.link.passwd, this.bServerEncryptCallBack = !0, this.encryptBirdKey = i.data.bird_key) : (this.isChecked = !1, this.commonBirdKey = i.data.bird_key), t("ok", i.data.bird_key)
                } else this.isChecked = !1, this.userpwd = "", t("nokey"); else t("fail"); else t("fail")
            }).catch(e => {
                t("exception")
            })
        }

        retryEncode() {
            this.createBirdKey(!0), this.showUI(p.ShowType.ShowUI_Creating)
        }

        retryDecode() {
            this.analysisBirdKey(!0), this.showUI(p.ShowType.ShowUI_Decoding)
        }

        handleCreateTask(e, t) {
            return r(this, void 0, void 0, function* () {
                if (!e) return;
                let i = e.filter(e => "encrypted" === e.type && "string" == typeof e.password),
                    n = e.filter(e => "encrypted" !== e.type || "string" != typeof e.password);
                if (n.length > 0) l.NativeCallModule.nativeCall.CallNativeFunction("CreateNewTaskEx", n); else if (!(i.length > 0)) return void this.delayShow(p.ShowType.ShowUI_DecodeFailed, t);
                let r = [], o = f.remote.getCurrentWindow();
                o.setClosable(!1);
                let s = this.$refs.dialogDecode.$el;
                s && (s.style.pointerEvents = "none");
                for (let e = 0; e < i.length; e++) {
                    const t = i[e];
                    let n;
                    n = yield y.MessageBox.custom("BridKeyPwdcheck", {taskUrlItem: t}, {modal: !1}), C.information("验证框返回"), n.action === b.MessageBoxNS.Action.OK && n.args && n.args.success && r.push(t)
                }
                C.information("验证框返回 urls=", r), l.NativeCallModule.nativeCall.CallNativeFunction("CreateNewTaskEx", r), o.setClosable(!0), s && (s.style.pointerEvents = "auto"), setTimeout(() => {
                    document && window && window.close()
                }, 300)
            })
        }

        getStatPublicData() {
            let e = "";
            return this.options.statData ? (this.options.statData.pannel && (e = e + "pannel=" + this.options.statData.pannel), this.options.statData.gcid && (e = e + ",gcid=" + this.options.statData.gcid), this.options.statData.taskid && (e = e + ",taskid=" + this.options.statData.taskid), this.options.statData.filename && (e = e + ",filename=" + encodeURIComponent(this.options.statData.filename)), this.options.statData.pannelType && (e = e + ",pannel_type=" + this.options.statData.pannelType), this.options.statData.taskType && (e = e + ",task_type=" + this.options.statData.taskType), e) : e
        }

        statCreateBirdKey(e, t) {
            let i = this.getStatPublicData();
            if (0 === i.length) return;
            let n = 0;
            this.isChecked && this.bServerEncryptCallBack && (n = 1), i = i + ",bird=" + encodeURI(this.tips), !0 !== t && (i = i + ",is_encryption=" + n), C.information("[bird]stat attr:", e, " extData:", i), g.XLStatNS.trackEvent("download_detail", e, "", 0, 0, 0, 0, i)
        }

        statDecodeBirdKey(e, t, i) {
            let n = "bird=" + encodeURIComponent(t || this.tips);
            this.options.statData.from && (n = n + ",type=" + this.options.statData.from);
            let r = 0;
            n = n + ",is_encryption=" + (r = "encrypted" === i ? 1 : "common" === i ? 0 : null), C.information("[bird]stat attr:", e, " extData:", n), g.XLStatNS.trackEvent("download_detail", e, "", 0, 0, 0, 0, n)
        }

        onCreateBirdKeySucc(e) {
            C.information("生成迅雷口令成功,口令码:", e.data.bird_key), this.curBirdKey = e.data.bird_key, "encrypted" === e.data.type ? this.encryptBirdKey = e.data.bird_key : this.commonBirdKey = e.data.bird_key;
            let t = (new Date).getTime(), i = new Date(t + 5184e6);
            this.expiresDate = d.TimeHelperNS.formatDate(i, "yyyy年MM月d日"), this.showUI(p.ShowType.ShowUI_CreateSucc)
        }

        onQueryBirdKeySucc(e, t) {
            if (C.information("(经过查询)生成迅雷口令成功,口令码:", e), this.curBirdKey = e, "unchecked" !== t) {
                let e = (new Date).getTime(), t = new Date(e + 5184e6);
                this.expiresDate = d.TimeHelperNS.formatDate(t, "yyyy年MM月d日"), this.showUI(p.ShowType.ShowUI_CreateSucc), this.statCreateBirdKey("dltab_detail_bird_share_click")
            }
        }

        onQueryBirdKeyFail(e, t, i) {
            C.information("(经过查询)生成迅雷口令失败,ret=", e), "unchecked" !== i && (this.delayShow(p.ShowType.ShowUI_CreateFailed, t), this.statCreateBirdKey("dltab_detail_bird_share_failed"))
        }

        onCreateBirdKeyFail(e, t, i) {
            e ? C.error("生成迅雷口令失败,data:", e.data) : C.error("生成迅雷口令异常, reason=", i), this.delayShow(p.ShowType.ShowUI_CreateFailed, t), this.statCreateBirdKey("dltab_detail_bird_share_failed")
        }

        birdkeyEncode(e, t, i, n, r, o) {
            p.encodeBirdKey(e, t, i, n).then(e => {
                this.isWindowTrytoClose || "object" == typeof e && e.data && ("ok" === e.data.result ? (this.onCreateBirdKeySucc(e), "function" == typeof o && o(!0)) : (this.onCreateBirdKeyFail(e, r), "function" == typeof o && o(!1)))
            }).catch(e => {
                this.onCreateBirdKeyFail(null, r, e), "function" == typeof o && o(!1)
            })
        }

        birdkeyPreHandle(e, t, i, n) {
            this.queryBirdkeyInfo(e, (e, t) => {
                let r = !1;
                "ok" === e || (r = !0), "string" != typeof t && (r = !0), r ? this.onQueryBirdKeyFail(e, i, n) : this.onQueryBirdKeySucc(t, n)
            })
        }

        createBirdKey(e) {
            l.NativeCallModule.nativeCall.CallNativeFunction("GetUserInfo", (e, t) => {
                let i = this.getUserIDFromString(t);
                this.birdkeyPreHandle(i, this.options.url)
            })
        }

        getUserIDFromString(e) {
            let t = null;
            try {
                t = JSON.parse(e)
            } catch (e) {
                t = null
            }
            let i = "";
            return t && (i = t[1].userid), i
        }

        analysisBirdKey(e) {
            if (C.information("剪贴板的迅雷口令相应:", this.options.birdkeyChars), !this.options.birdkeyChars) return;
            if (0 === this.options.birdkeyChars.length) return;
            let t = _.URLHelperNS.isBirdKey(this.options.birdkeyChars);
            if (!t || 0 === t.length) return;
            if (p.getBirdKeyMgr().isSameBirdKey(t) && !e) return;
            let i = [], n = 0;
            for (let e = 0; e < t.length; e++) {
                n = t[e].length;
                const r = t[e].substring(2, n - 1);
                i.push(p.decodeBirdKey(r.toLowerCase()))
            }
            Promise.all(i).then(t => {
                if (this.isWindowTrytoClose) return;
                "object" != typeof t && C.error("请求口令回传参数错误", t);
                let i = [];
                for (let e = 0; e < t.length; e++) {
                    if (C.information("解析迅雷口令，服务器回应:", t[e].data), !t[e].data) continue;
                    if ("ok" !== t[e].data.result) {
                        this.statDecodeBirdKey("bird_parse_fail", this.options.birdkeyChars, "unknown");
                        continue
                    }
                    if ("string" != typeof t[e].data.url) continue;
                    this.statDecodeBirdKey("bird_parse_success", this.options.birdkeyChars, t[e].data.type);
                    let n = t[e].data.url;
                    if (n.indexOf("%") > -1 && (n = decodeURIComponent(n)), n.match("%20") && (n = decodeURI(n)), p.saveVestUrlToConfig(n, "vest" === t[e].data.type), C.information(" decodeURL before:", t[e].data.url, " after:", n), !this.isURLExist(n, i)) {
                        let r = "0";
                        "number" == typeof t[e].data.uid ? r = t[e].data.uid.toString() : "string" == typeof t[e].data.uid && (r = t[e].data.uid);
                        let o = {url: n, stat: "birdkey", type: t[e].data.type, password: t[e].data.passwd, userid: r};
                        i.push(o)
                    }
                }
                this.handleCreateTask(i, e)
            }).catch(t => {
                this.delayShow(p.ShowType.ShowUI_DecodeFailed, e)
            }), p.getBirdKeyMgr().setLastBirdKey(t), this.statDecodeBirdKey("bird_parse_start")
        }

        isURLExist(e, t) {
            let i = !1;
            if (!t) return i;
            if (0 === t.length) return i;
            for (let n = 0; n < t.length; n++) if (t[n].url === e) {
                i = !0;
                break
            }
            return i
        }

        onCopyBtnClick() {
            this.selfCopyFlag = !0, this.statCreateBirdKey("dltab_detail_bird_copy_click");
            let e = this.tips;
            e = (e = (e = e.replace(/\r\n/g, "")).replace(/\n/g, "")).replace(/\s+/g, ""), v.clipboard.writeText(e), this.showUI(p.ShowType.ShowUI_CreateSuccDis), this.timeCloseCookie = setInterval(e => {
                this.timeToClose -= 1, this.timeToClose <= 0 && (clearInterval(this.timeCloseCookie), this.timeCloseCookie = null, window.close())
            }, 1e3)
        }

        delayShow(e, t) {
            t ? setTimeout(() => {
                this.showUI(e)
            }, 300) : this.showUI(e)
        }

        showUI(e) {
            let t = this.options.showType;
            this.options.showType = e;
            let i = 0, n = 0;
            e === p.ShowType.ShowUI_CreateSuccDis ? (i = 400, n = 214) : e === p.ShowType.ShowUI_CreateSucc && (i = 400, n = 264), t !== e && this.$nextTick(() => {
                u.ThunderWindowNS.resizeToFitContent(i, n), e !== p.ShowType.ShowUI_CreateSuccDis && u.ThunderWindowNS.fitWindowPosInParent()
            })
        }
    };
    n([a.Prop()], S.prototype, "options", void 0), S = n([a.Component({})], S), t.default = S
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(517), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(3), s = i(5);
    let a = class extends r.Vue {
        constructor() {
            super(...arguments), this.tabsCopy = [], this.currentCopy = 0
        }

        get tabs() {
            return this.options.tabs
        }

        get current() {
            return this.options.current
        }

        get unpinnedLength() {
            return this.tabsCopy.filter(e => !e.pinned).length
        }

        isShowDefaultIcon(e) {
            let t = !1, i = this.tabsCopy[e].title;
            do {
                if ("新标签页" === i) {
                    t = !0;
                    break
                }
                if (-1 !== i.indexOf("ftp://")) {
                    t = !0;
                    break
                }
                if ("" === this.tabsCopy[e].tab.iconUrl || void 0 === this.tabsCopy[e].tab.iconUrl) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }

        handleIconUrl(e) {
            return this.tabsCopy[e].tab.iconUrl
        }

        handleRemove(e) {
            s.NativeCallModule.nativeCall.CallNativeFunction("CloseTabByIndex", e)
        }

        handleUpdateCurrent(e) {
            this.currentCopy !== e && s.NativeCallModule.nativeCall.CallNativeFunction("SelectTab", e), o.ipcRenderer.send("total-tabs-hide"), this.win.hide()
        }

        created() {
            this.currentCopy = this.current, this.tabsCopy = this.tabs, this.win = o.remote.getCurrentWindow(), this.win.on("blur", () => {
                o.ipcRenderer.send("total-tabs-hide"), this.win.hide()
            }), o.remote.ipcMain.on("total-tabs-update", (e, t) => {
                this.tabsCopy = t.tabs, this.currentCopy = t.current
            })
        }

        mounted() {
            this.win.show(), this.$refs["item" + this.current][0].scrollIntoView()
        }
    };
    n([r.Prop()], a.prototype, "options", void 0), a = n([r.Component({})], a), t.default = a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(519), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(3), s = i(39), a = i(4), l = i(40), c = i(1060), u = i(1061), d = i(1062), h = i(35), f = i(233),
        p = i(14), v = i(1), m = i(5), g = i(236), _ = i(13), y = i(12), b = i(21), C = i(28),
        w = v.default.getLogger("Individuation"), {isDef: x} = y.ThunderUtil;
    let S = class extends (s.mixins(l.DraggableMixin, l.PositionMixin)) {
        constructor() {
            super(...arguments), this.tabs = [{title: "皮肤", key: "skin"}, {
                title: "头像",
                key: "avatar"
            }], this.activeKey = "skin", this.skinTabs = [{title: "精选", key: "featured"}, {
                title: "自定义",
                key: "custom"
            }, {
                title: "速度条",
                key: "speedcurve"
            }], this.skinActiveKey = "featured", this.skinInfo = h.SkinHelperNS.defaultSkinInfo, this.lastSkinInfo = null, this.wallpaper = null, this.wallpapers = [], this.speedCurveSkinInfo = f.SpeedCurveSkinHelperNS.defaultSkinInfo, this.lastSpeedCurveSkinInfo = null, this.isLogined = !1, this.isVip = !1, this.vasType = 0, this.windowWidth = 600, this.windowHeight = 440
        }

        get isPlatinumVip() {
            return this.isVip && x(this.vasType) && this.vasType > 2
        }

        get isSuperVip() {
			this.vasType = 5;
            return this.isVip && 5 === this.vasType
        }

        canUseSpeedCurveSkin(e) {
            let t = 1;
            return t
        }

        openVip() {
            return r(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip", {type: "skin" === this.activeKey ? "skin" : "head_image"});
                try {
                    yield p.default("OpenNewTab", "https://pay.xunlei.com/pay.html?bizNo=baijin"), this.closeWindow()
                } catch (e) {
                    w.warning(e)
                }
            })
        }

        updateIsVip() {
            return r(this, void 0, void 0, function* () {
                try {
                    let e = JSON.parse(yield p.default("GetUserInfo", 2));
                    x(e) && (this.vasType = 5, this.isVip = 1)
                } catch (e) {
                    w.warning(e)
                }
            })
        }

        changeTab() {
            let e = {skin: "skin", avatar: "head_image"}[this.activeKey],
                t = {featured: "recommend", custom: "custom", speedcurve: " progress_bar"}[this.skinActiveKey];
            this.trackEvent("user_info", "change_tab", {type: e, tab: t})
        }

        trackEvent(e, t, i) {
            _.XLStatNS.trackEvent(e, t, "", 0, 0, 0, 0, Object.assign({
                is_login: Number(this.isLogined),
                is_vip: Number(this.isVip),
                vip_type: this.vasType
            }, i))
        }

        restoreSkin() {
            return r(this, void 0, void 0, function* () {
                x(this.lastSkinInfo) && (yield this.setSkinInfo(this.lastSkinInfo), this.lastSkinInfo = null)
            })
        }

        restoreSpeedCurveSkin() {
            return r(this, void 0, void 0, function* () {
                this.canUseSpeedCurveSkin(this.speedCurveSkinInfo) || (yield this.setSpeedCurveSkinInfo(this.lastSpeedCurveSkinInfo))
            })
        }

        closeWindow() {
            return r(this, void 0, void 0, function* () {
                yield this.restoreSkin(), yield this.restoreSpeedCurveSkin(), o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, C.MessageBoxNS.Action.Close), _.XLStatNS.trackEvent("user_info", "personalized_center_close"), window.close()
            })
        }

        setSkinInfo(e, t, i = null, n = !1) {
            return r(this, void 0, void 0, function* () {
                this.wallpaper = i;
                try {
                    yield p.default("SetSkinInfo", e, !0, n)
                } catch (e) {
                    w.warning(e)
                }
            })
        }

        setSpeedCurveSkinInfo(e, t = !1) {
            return r(this, void 0, void 0, function* () {
                this.speedCurveSkinInfo = e, this.canUseSpeedCurveSkin(e) && (this.lastSpeedCurveSkinInfo = e);
                try {
                    yield p.default("SetSpeedCurveSkinInfo", e, !0, t)
                } catch (e) {
                    w.warning(e)
                }
            })
        }

        handleClose() {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, C.MessageBoxNS.Action.Close), _.XLStatNS.trackEvent("user_info", "personalized_center_close"), window.close()
        }

        updateLastSkinInfo() {
            this.lastSkinInfo = this.skinInfo
        }

        created() {
            return r(this, void 0, void 0, function* () {
                let e = [];
                m.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "Skin", "selectSkinId", [], (t, i) => {
                    t === b.NativeFunctionErrorCode.Success && ("number" == typeof i ? e.push(i) : e = i)
                }), p.default("GetSkinInfo").then(e => {
                    this.skinInfo = e
                }, e => {
                    w.warning(e)
                }), p.default("GetSpeedCurveSkinInfo").then(e => {
                    e.is_vip_try || (this.speedCurveSkinInfo = e), this.lastSpeedCurveSkinInfo = this.speedCurveSkinInfo
                }, e => {
                    w.warning(e)
                }), p.default("IsLogined").then(e => {
                    this.isLogined = e
                }, e => {
                    w.warning(e)
                }), this.updateIsVip(), m.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                    this.skinInfo = e
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSpeedCurveSkin", (e, t, i) => {
                    t || i || (this.speedCurveSkinInfo = e)
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnUserLogin", () => {
                    this.isLogined = !0, this.updateIsVip()
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnUserLogout", () => {
                    this.isLogined = !1, this.isVip = !1, this.vasType = 0
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnLoginWndClose", e => {
                    "close" === e && (o.ipcRenderer.send("update-skin-reserved", !1), this.restoreSkin(), this.restoreSpeedCurveSkin())
                });
                try {
                    let t = JSON.parse(localStorage.getItem("wallpapers"));
                    null !== t && (this.wallpapers = t.sort((e, t) => e.manual_order - t.manual_order));
                    let i = ((yield g.default.getWallpapers()) || []).sort((e, t) => e.manual_order - t.manual_order);
                    i.length > 0 && (this.wallpapers = i);
                    let n = new Date;
                    for (let t of this.wallpapers) n.getTime() - t.updated_at < 6048e5 ? -1 === e.indexOf(t.id) && (t.showNew = !0) : t.showNew = !1;
                    w.information("获取壁纸", this.wallpapers)
                } catch (e) {
                    w.warning(e)
                }
            })
        }

        mounted() {
            this.trackEvent("user_info", "personalized_center_show"), x(this.options) && (x(this.options.activeKey) && (this.activeKey = this.options.activeKey), x(this.options.skinActiveKey) && (this.skinActiveKey = this.options.skinActiveKey))
        }
    };
    n([a.Prop()], S.prototype, "options", void 0), n([a.Prop()], S.prototype, "boxId", void 0), S = n([a.Component({
        components: {
            PaneSkinCustom: c.default,
            PaneSkinFeatured: u.default,
            PaneSkinSpeedcurve: d.default
        }
    })], S), t.default = S
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(521), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4);
    let o = class extends r.Vue {
    };
    o = n([r.Component], o), t.default = o
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(523), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(3), s = i(4), a = i(584), l = i(35), c = i(14), u = i(1), d = i(236), h = i(12), f = i(7), p = i(2),
        v = i(13), m = i(5), g = i(21), _ = i(93), y = f.default(p.join(__rootDir, "../bin/ThunderHelper.node")),
        b = u.default.getLogger("Individuation"), {isDef: C} = h.ThunderUtil;
    let w = class extends s.Vue {
        constructor() {
            super(...arguments), this.colorList = a.SkinConfigNS.colorList, this.skinType = l.SkinHelperNS.SkinType, this.defaultPreview = JSON.stringify(`${__rootDir}/static/default-preview.jpg`), this.updateDialogVisible = !1, this.vipDialogVisible = !1, this.loginLayerVisible = !1, this.index = null, this.showSkinNew = !0, this.skinNew = [1]
        }

        get colorItem() {
            return this.colorList.find(e => e.id === this.skinInfo.colorID)
        }

        sget() {
            return _(...arguments)
        }

        trackEvent(e, t, i) {
            v.XLStatNS.trackEvent(e, t, "", 0, 0, 0, 0, Object.assign({
                is_login: Number(this.isLogined),
                is_vip: Number(this.isVip)
            }, i))
        }

        changeWallpaper(e, t) {
            return r(this, void 0, void 0, function* () {
                if (e.is_vip && this.isLogined && !this.isVip && (this.vipDialogVisible = !0, this.$emit("update-last-skin-info"), this.trackEvent("user_info", "open_vip_tip_show", {type: "skin"})), !e.is_dynamic || C(this.options.dynamicSkinVersion) && h.ThunderUtil.versionCompare(this.options.version, this.options.dynamicSkinVersion) >= 0) {
                    let i = yield d.default.getImage(e), n = !!e.is_vip;
                    this.$emit("set-skin-info", {
                        type: l.SkinHelperNS.SkinType.Wallpaper,
                        colorID: e.color,
                        image: i,
                        opacity: e.transparency / 100,
                        skinID: e.id,
                        is_spring_festival: "春节皮肤" === e.name
                    }, t, e, n)
                } else this.vipDialogVisible || (this.updateDialogVisible = !0, this.trackEvent("user_info", "update_now"))
            })
        }

        updateApp() {
            y.startManualUpdateWithUI(), this.updateDialogVisible = !1, this.trackEvent("user_info", "click_update_now")
        }

        openVip() {
            return r(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {type: "skin", button: "open_vip"});
                try {
                    yield c.default("OpenNewTab", "https://pay.xunlei.com/pay.html?bizNo=baijin"), this.$emit("close-window")
                } catch (e) {
                    b.warning(e)
                }
            })
        }

        showloginDlg(e) {
            return r(this, void 0, void 0, function* () {
                try {
                    yield c.default("ShowLoginDlg", "personalized_center"), this.loginLayerVisible = !1, this.vipDialogVisible = !1, o.ipcRenderer.send("update-skin-reserved", !0)
                } catch (e) {
                    b.warning(e)
                }
                "loginLayer" === e ? v.XLStatNS.trackEvent("user_info", "change_comfirm_box_click", "", 0, 0, 0, 0, {
                    id: this.index,
                    button: "confirm"
                }) : "vipDialog" === e && this.trackEvent("user_info", "open_vip_tip_click", {
                    type: "skin",
                    button: "login"
                })
            })
        }

        isChosen(e, t) {
            return e === this.skinInfo.type && (e === l.SkinHelperNS.SkinType.Default ? this.skinInfo.type === l.SkinHelperNS.SkinType.Default : e === l.SkinHelperNS.SkinType.Color ? this.skinInfo.colorID === t.id : e === l.SkinHelperNS.SkinType.Wallpaper && this.skinInfo.skinID === t.id)
        }

        setSkinInfo(e, t, i) {
            let n = e === l.SkinHelperNS.SkinType.Default ? 1 : 0;
            do {
                if (this.isChosen(e, t)) {
                    n = 1;
                    break
                }
                if (e === l.SkinHelperNS.SkinType.Default || this.isLogined || (e === l.SkinHelperNS.SkinType.Wallpaper && t.is_vip ? (this.vipDialogVisible = !0, this.trackEvent("user_info", "open_vip_tip_show", {type: "skin"})) : (this.loginLayerVisible = !0, v.XLStatNS.trackEvent("user_info", "change_comfirm_box_show")), this.$emit("update-last-skin-info")), this.index = i, e === l.SkinHelperNS.SkinType.Default ? this.$emit("set-skin-info", {
                    type: l.SkinHelperNS.SkinType.Default,
                    colorID: 0
                }, 10) : e === l.SkinHelperNS.SkinType.Color ? this.$emit("set-skin-info", {
                    type: l.SkinHelperNS.SkinType.Color,
                    colorID: t.id,
                    opacity: t.defaultOpacity
                }, i) : e === l.SkinHelperNS.SkinType.Wallpaper && this.changeWallpaper(t, i + 11), 1 != n && (i = t.id, t.showNew)) {
                    t.showNew = !1;
                    let e = [];
                    m.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "Skin", "selectSkinId", [], (i, n) => {
                        i === g.NativeFunctionErrorCode.Success && ("number" == typeof n ? e.push(n) : e = n, -1 === e.indexOf(t.id) && e.push(t.id), m.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "Skin", "selectSkinId", e, e => {
                            0 === e && m.NativeCallModule.nativeCall.CallNativeFunction("SaveConfig", () => {
                            })
                        }))
                    })
                }
            } while (0);
            this.trackEvent("user_info", "click_member_exclusive", {
                type: "skin",
                is_member_exclusive: e === l.SkinHelperNS.SkinType.Wallpaper ? Number(t.is_vip) : 0,
                id: i,
                tag: n
            })
        }

        closeLoginLayer() {
            this.loginLayerVisible = !1, this.$emit("restore-skin"), v.XLStatNS.trackEvent("user_info", "change_comfirm_box_click", "", 0, 0, 0, 0, {
                id: this.index,
                button: "close"
            })
        }
    };
    n([s.Prop()], w.prototype, "options", void 0), n([s.Prop()], w.prototype, "skinInfo", void 0), n([s.Prop()], w.prototype, "wallpaper", void 0), n([s.Prop()], w.prototype, "wallpapers", void 0), n([s.Prop()], w.prototype, "isLogined", void 0), n([s.Prop()], w.prototype, "isVip", void 0), w = n([s.Component], w), t.default = w
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(525), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(4), s = i(233), a = i(247), l = i(14), c = i(12), u = i(1), d = i(13), h = i(194), f = i(10),
        p = u.default.getLogger("Individuation"), {isDef: v} = c.ThunderUtil,
        m = `${s.SpeedCurveSkinHelperNS.cacheDir}/Preview`;
    let g = class extends o.Vue {
        constructor() {
            super(...arguments), this.skinType = s.SpeedCurveSkinHelperNS.SkinType, this.defaultPreview = JSON.stringify(`${__rootDir}/static/default-speedcurve-preview.png`), this.defaultSkinInfo = s.SpeedCurveSkinHelperNS.defaultSkinInfo, this.skins = [], this.vipDialogVisible = !1, this.ktType = ""
        }

        get vipDialogTitle() {
            let e = "开通迅雷会员尊享品质皮肤";
            return this.skinInfo.type === s.SpeedCurveSkinHelperNS.SkinType.SuperVip && (e = "开通超级会员尊享超级皮肤"), e
        }

        get vipDialogBtnText() {
            let e = "开通会员";
            return this.skinInfo.type === s.SpeedCurveSkinHelperNS.SkinType.SuperVip && (e = this.isVip ? "升级超会" : "开通超会"), e
        }

        canUse(e) {
            let t = 1;
            return t
        }

        trackEvent(e, t, i) {
            d.XLStatNS.trackEvent(e, t, "", 0, 0, 0, 0, Object.assign({
                is_login: Number(this.isLogined),
                vip_type: this.vasType
            }, i))
        }

        trackOpenVipShow(e) {
            this.trackEvent("user_info", "open_vip_tip_show", {type: "skin", kt_type: this.ktType})
        }

        trackChangeSkin(e) {
            let t = "free";
            e.type === this.skinType.SuperVip ? t = "ch" : e.type === this.skinType.Vip && (t = "bj"), this.trackEvent("user_info", "change_progress_bar", {
                type: "skin",
                button: "login",
                skin_type: t,
                id: e.id
            })
        }

        changeSkin(e) {
            return r(this, void 0, void 0, function* () {
                this.trackChangeSkin(e), this.ktType = e.type === this.skinType.SuperVip ? "ch" : "bj";
                let t = !!(v(e.type) && e.type >= this.skinType.Vip);
                this.$emit("set-skin-info", e, t), this.canUse(e) || (this.vipDialogVisible = !0, this.trackOpenVipShow(e))
            })
        }

        openVip() {
            return r(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {
                    type: "skin",
                    button: "open_vip",
                    kt_type: this.ktType
                });
                try {
                    let e = void 0;
                    e = "ch" === this.ktType ? "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=supervip&timeType=1006&referfrom=v_pc_xlx_ggong_skin_kt&aidfrom=ch" : "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=baijin&timeType=1001&referfrom=v_pc_xlx_ggong_skin_kt&aidfrom=bj", yield l.default("OpenNewTab", e), this.$emit("close-window")
                } catch (e) {
                    p.warning(e)
                }
            })
        }

        showloginDlg() {
            return r(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {
                    type: "skin",
                    button: "login",
                    kt_type: this.ktType
                });
                try {
                    yield l.default("ShowLoginDlg", "vip"), this.vipDialogVisible = !1
                } catch (e) {
                    p.warning(e)
                }
            })
        }

        created() {
            return r(this, void 0, void 0, function* () {
                try {
                    let e = (yield a.default.getSkins()) || [];
                    for (let t of e) {
                        let e = `${m}/${t.id}.png`, i = yield f.FileSystemAWNS.existsAW(e);
                        i || (i = yield h.AxiosNS.downloadFileAW(t.preview, e)), i && (t.previewSavePath = e, this.skins.push(t))
                    }
                    p.information("获取速度曲线皮肤", this.skins)
                } catch (e) {
                    p.warning(e)
                }
            })
        }
    };
    n([o.Prop()], g.prototype, "skinInfo", void 0), n([o.Prop()], g.prototype, "lastSkinInfo", void 0), n([o.Prop()], g.prototype, "isLogined", void 0), n([o.Prop()], g.prototype, "isVip", void 0), n([o.Prop()], g.prototype, "isPlatinumVip", void 0), n([o.Prop()], g.prototype, "isSuperVip", void 0), n([o.Prop()], g.prototype, "vasType", void 0), g = n([o.Component], g), t.default = g
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(527), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(3), s = i(39), a = i(4), l = i(40), c = i(28), u = i(235);
    let d = class extends (s.mixins(l.DraggableMixin, l.PositionMixin)) {
        constructor() {
            super(...arguments), this.type = "HTTP", this.proxyName = "", this.host = "", this.port = 80, this.userName = "", this.passWord = "", this.butText = "测试", this.timeId = void 0
        }

        handleClickHttp() {
            this.port = 80
        }

        handleClickSock() {
            this.port = 1080
        }

        handleClose(e) {
            window.close()
        }

        handleOK(e) {
            !this.proxyName || this.proxyName.length < 1 || !this.host || this.host.length < 1 || (o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, c.MessageBoxNS.Action.OK, {
                name: this.proxyName,
                host: this.host,
                port: this.port,
                type: this.type,
                userName: this.userName,
                passWord: this.passWord
            }), window.close())
        }

        handleTest() {
            return r(this, void 0, void 0, function* () {
                this.butText = "测试中…", this.timeId = setTimeout(() => {
                    this.timeId = void 0, this.butText = "测试超时"
                }, 1e4);
                let e = u.ProxyNS.ProxyType.Http;
                "SOCKS5" === this.type && (e = u.ProxyNS.ProxyType.Sock5);
                let t = yield u.ProxyNS.verifyProxy(this.host, this.port, this.userName, this.passWord, e);
                this.timeId && (clearTimeout(this.timeId), t === u.ProxyNS.ProxyVerifyResult.Sucess ? this.butText = "测试成功" : t === u.ProxyNS.ProxyVerifyResult.Timeout ? this.butText = "测试超时" : this.butText = "测试失败")
            })
        }

        handleInput(e) {
            this.port = e.target.value.replace(/[^\d]/g, "")
        }

        mounted() {
            this.proxy = this.options, this.proxy && this.proxy.name && this.proxy.name.length > 0 && (this.proxyName = this.proxy.name, this.host = this.proxy.host, this.port = this.proxy.port, this.type = this.proxy.type, this.userName = this.proxy.userName, this.passWord = this.proxy.passWord)
        }
    };
    n([a.Prop()], d.prototype, "options", void 0), n([a.Prop()], d.prototype, "boxId", void 0), d = n([a.Component], d), t.default = d
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(529), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(39), o = i(4), s = i(40), a = i(144), l = i(3), c = i(28), u = i(78), d = i(1), h = i(5),
        f = d.default.getLogger("ThunderBirdKey");
    let p = class extends (r.mixins(s.DraggableMixin, s.PositionMixin)) {
        constructor() {
            super(...arguments), this.userheadURL = "", this.userName = "", this.inputPassword = "", this.isPasswordError = !1, this.userCenterWeb = "", this.avatarLinkProtocol = "http"
        }

        onCheckPwdAndParse() {
            f.information("校验密码,inputPassword=", this.inputPassword, " 设定密码password=", this.options.taskUrlItem.password), this.inputPassword === this.options.taskUrlItem.password ? (this.isPasswordError = !1, l.ipcRenderer.send(`message-box-resolve-${this.boxId}`, c.MessageBoxNS.Action.OK, {success: !0}), window.close()) : this.isPasswordError = !0
        }

        getUserAvatar(e) {
            let t = e || 0;
            return `${this.avatarLinkProtocol}://img.user.kanimg.com/usrimg/${t}/300x300`
        }

        handleKeyDown() {
            this.onCheckPwdAndParse()
        }

        hanldeInput(e) {
            if ("string" != typeof e) return;
            this.isPasswordError = !1;
            let t = new RegExp("^[0-9a-zA-Z]+$"), i = e.match(t), n = this.inputPassword;
            this.inputPassword = e, i && i.length > 0 ? this.inputPassword = e : this.inputPassword = n, "" === e && (this.inputPassword = e)
        }

        onClickClose() {
            l.ipcRenderer.send(`message-box-resolve-${this.boxId}`, c.MessageBoxNS.Action.Cancel, {success: !1}), window.close()
        }

        onClickUserInfo() {
            "" !== this.userCenterWeb && h.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", this.userCenterWeb)
        }

        mounted() {
            let e = this.options.taskUrlItem.userid || 0;
            f.information("查询的用户ID=", this.options.taskUrlItem.userid), a.getUserNameByID(e.toString()).then(t => {
                f.information("获取用户：", e, " 的昵称回应:", t), t.data && t.data.user_info && (this.userName = t.data.user_info.nick_name)
            }), this.userheadURL = this.getUserAvatar(e), this.userCenterWeb = "http://pc.xunlei.com/d#/users/" + e + "?entrypage=birdkey_passwordcheck&entry=birdkey_passwordcheck_headimg", this.$nextTick(() => {
                u.ThunderWindowNS.resizeToFitContent(400, 233), u.ThunderWindowNS.fitWindowPosInParent()
            })
        }
    };
    n([o.Prop()], p.prototype, "options", void 0), n([o.Prop()], p.prototype, "boxId", void 0), p = n([o.Component({})], p), t.default = p
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(531), r = i.n(n);
    for (var o in n) "default" !== o && function (e) {
        i.d(t, e, function () {
            return n[e]
        })
    }(o);
    t.default = r.a
}, function (e, t, i) {
    "use strict";
    var n = this && this.__decorate || function (e, t, i, n) {
        var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
    }, r = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = i(39), s = i(4), a = i(40), l = i(1), c = i(5), u = l.default.getLogger("shoulei-qrcode"), d = i(1067),
        h = {margin: 0, width: 100};
    let f = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        handleCancel(e) {
            c.NativeCallModule.nativeCall.CallNativeFunction("TrackEvent", "download_leftpanel", "send2phone_qr_close", "", 0, 0, 0, 0, ""), window.close()
        }

        created() {
            return r(this, void 0, void 0, function* () {
                u.information("dwz data = ", this.options.data), this.$nextTick(() => {
                    let e = document.getElementById("qrcodecanvas");
                    d.toCanvas(e, this.options.data, h, e => {
                        u.information("dwz error = ", e)
                    })
                }), c.NativeCallModule.nativeCall.CallNativeFunction("TrackEvent", "download_leftpanel", "send2phone_qr_show", "", 0, 0, 0, 0, "")
            })
        }
    };
    n([s.Prop()], f.prototype, "options", void 0), f = n([s.Component], f), t.default = f
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.colorList = [{id: 0}, {
            id: 1,
            defaultOpacity: .9,
            colors: {
                colorPreview: "196,208,232",
                colorAccordion: ["116,137,180", "116,137,180"],
                colorGradientBackground: ["191,207,230", "227,236,246"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "116,137,180",
                colorPrimaryControl1: "120,149,209",
                colorPrimaryControl2: "116,137,180",
                colorPrimaryControl3: "212,225,225",
                colorPrimaryControl4: "240,243,250",
                colorPrimaryGradient: ["168,187,226", "105,132,177"],
                colorPrimaryText: "56,66,77",
                colorSearch: "252,252,252",
                colorSecondary: "83,95,117"
            }
        }, {
            id: 2,
            defaultOpacity: .9,
            colors: {
                colorPreview: "159,204,255",
                colorAccordion: ["51,160,255", "91,179,255"],
                colorGradientBackground: ["217,236,255", "138,204,255"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "51,160,255",
                colorPrimaryControl1: "119,182,255",
                colorPrimaryControl2: "51,160,255",
                colorPrimaryControl3: "212,231,255",
                colorPrimaryControl4: "232,240,255",
                colorPrimaryGradient: ["0,137,226", "103,189,255"],
                colorPrimaryText: "73,91,104",
                colorSearch: "252,252,252",
                colorSecondary: "103,132,154"
            }
        }, {
            id: 3,
            defaultOpacity: .9,
            colors: {
                colorPreview: "255,187,128",
                colorAccordion: ["255,149,87", "255,149,87"],
                colorGradientBackground: ["255,210,142", "255,151,119"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "255,149,87",
                colorPrimaryControl1: "255,178,110",
                colorPrimaryControl2: "255,149,87",
                colorPrimaryControl3: "229,210,194",
                colorPrimaryControl4: "242,233,226",
                colorPrimaryGradient: ["255,176,39", "255,137,33"],
                colorPrimaryText: "97,64,47",
                colorSearch: "252,252,252",
                colorSecondary: "130,99,75"
            }
        }, {
            id: 4,
            defaultOpacity: .9,
            colors: {
                colorPreview: "150,200,158",
                colorAccordion: ["93,154,103", "93,154,103"],
                colorGradientBackground: ["171,207,158", "124,188,162"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "85,123,91",
                colorPrimaryControl1: "114,152,120",
                colorPrimaryControl2: "85,123,91",
                colorPrimaryControl3: "191,210,194",
                colorPrimaryControl4: "220,232,222",
                colorPrimaryGradient: ["84,123,81", "115,165,150"],
                colorPrimaryText: "67,74,61",
                colorSearch: "252,252,252",
                colorSecondary: "97,109,86"
            }
        }, {
            id: 5,
            defaultOpacity: .5,
            colors: {
                colorPreview: "47,73,141",
                colorAccordion: ["99,177,255", "121,175,244"],
                colorGradientBackground: ["56,76,140", "41,72,143"],
                colorGradientForeground: ["97,144,251", "19,34,75"],
                colorPrimary: "230,199,138",
                colorPrimaryControl1: "204,170,122",
                colorPrimaryControl2: "220,191,132",
                colorPrimaryControl3: "185,185,185",
                colorPrimaryControl4: "233,233,233",
                colorPrimaryGradient: ["111,150,255", "156,192,255"],
                colorPrimaryText: "230,207,161",
                colorSearch: "68,124,209",
                colorSecondary: "204,184,143"
            }
        }, {
            id: 6,
            defaultOpacity: .7,
            colors: {
                colorPreview: "65,17,17",
                colorAccordion: ["214,99,99", "214,99,99"],
                colorGradientBackground: ["72,29,29", "16,7,7"],
                colorGradientForeground: ["117,57,57", "30,22,22"],
                colorPrimary: "223,77,77",
                colorPrimaryControl1: "220,96,96",
                colorPrimaryControl2: "159,51,51",
                colorPrimaryControl3: "219,193,193",
                colorPrimaryControl4: "239,224,224",
                colorPrimaryGradient: ["255,86,86", "161,70,70"],
                colorPrimaryText: "235,197,197",
                colorSearch: "88,74,74",
                colorSecondary: "184,151,151"
            }
        }, {
            id: 7,
            defaultOpacity: .3,
            colors: {
                colorPreview: "75,65,129",
                colorAccordion: ["160,185,252", "103,155,207"],
                colorGradientBackground: ["29,90,151", "105,61,191"],
                colorGradientForeground: ["163,177,204", "0,0,0"],
                colorPrimary: "128,213,255",
                colorPrimaryControl1: "118,193,230",
                colorPrimaryControl2: "161,207,230",
                colorPrimaryControl3: "205,215,235",
                colorPrimaryControl4: "228,232,240",
                colorPrimaryGradient: ["142,163,245", "120,144,222"],
                colorPrimaryText: "184,197,204",
                colorSearch: "153,153,153",
                colorSecondary: "138,184,230"
            }
        }, {
            id: 8,
            defaultOpacity: .6,
            colors: {
                colorPreview: "82,39,90",
                colorAccordion: ["170,163,204", "136,122,204"],
                colorGradientBackground: ["83,42,118", "61,46,77"],
                colorGradientForeground: ["93,82,193", "0,0,0"],
                colorPrimary: "170,153,255",
                colorPrimaryControl1: "136,122,204",
                colorPrimaryControl2: "147,132,220",
                colorPrimaryControl3: "204,194,255",
                colorPrimaryControl4: "234,230,255",
                colorPrimaryGradient: ["156,149,255", "128,128,255"],
                colorPrimaryText: "191,184,230",
                colorSearch: "166,148,255",
                colorSecondary: "153,143,204"
            }
        }, {
            id: 9,
            defaultOpacity: .3,
            colors: {
                colorPreview: "74,77,83",
                colorAccordion: ["103,155,207", "160,185,252"],
                colorGradientBackground: ["69,71,77", "15,19,26"],
                colorGradientForeground: ["179,179,179", "0,34,51"],
                colorPrimary: "204,238,255",
                colorPrimaryControl1: "143,184,204",
                colorPrimaryControl2: "161,207,230",
                colorPrimaryControl3: "205,215,235",
                colorPrimaryControl4: "228,232,240",
                colorPrimaryGradient: ["140,173,205", "103,132,162"],
                colorPrimaryText: "184,197,204",
                colorSearch: "153,153,153",
                colorSecondary: "138,184,230"
            }
        }, {
            id: 10,
            defaultOpacity: .5,
            colors: {
                colorPreview: "77,62,45",
                colorAccordion: ["204,177,122", "204,191,163"],
                colorGradientBackground: ["51,44,30", "26,22,15"],
                colorGradientForeground: ["153,122,92", "0,0,0"],
                colorPrimary: "230,199,138",
                colorPrimaryControl1: "204,170,122",
                colorPrimaryControl2: "220,191,132",
                colorPrimaryControl3: "219,212,203",
                colorPrimaryControl4: "236,230,223",
                colorPrimaryGradient: ["186,152,105", "226,197,139"],
                colorPrimaryText: "230,207,161",
                colorSearch: "105,105,105",
                colorSecondary: "204,184,143"
            }
        }]
    }(t.SkinConfigNS || (t.SkinConfigNS = {}))
}, , , , , function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(211), r = i(158);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(601);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, "69ad46c4", null);
    a.options.__file = "src\\common\\generator-view\\generator-view.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(215), r = i(160);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-checkbox.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    var n = i(1211);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(226), r = i(170);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-speed.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(223), r = i(172);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-speed-time.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(217), r = i(176);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-radio.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(224), r = i(178);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-container.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(219), r = i(180);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-checkinput.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(220), r = i(182);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-checkselect.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(214), r = i(184);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-textarea.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(221), r = i(186);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-speed-text.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(222), r = i(188);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-proxy-list.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    var n = i(1213);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1217);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1220);
    i.n(n).a
}, , , , , , , , function (e, t) {
    t.L = {bit: 1}, t.M = {bit: 0}, t.Q = {bit: 3}, t.H = {bit: 2}, t.isValid = function (e) {
        return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
    }, t.from = function (e, i) {
        if (t.isValid(e)) return e;
        try {
            return function (e) {
                if ("string" != typeof e) throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case"l":
                    case"low":
                        return t.L;
                    case"m":
                    case"medium":
                        return t.M;
                    case"q":
                    case"quartile":
                        return t.Q;
                    case"h":
                    case"high":
                        return t.H;
                    default:
                        throw new Error("Unknown EC Level: " + e)
                }
            }(e)
        } catch (e) {
            return i
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(1293);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1295);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", [i("div", {staticClass: "xlx-skin-color"}, [i("ul", e._l(e.colorList.slice(1), function (t, n) {
            return i("li", {
                key: t.id,
                staticClass: "xlx-skin-color__item",
                class: {"is-chosen": e.isChosen(e.skinType.Color, t)},
                style: {background: "rgb(" + t.colors.colorPreview + ")"},
                on: {
                    click: function (i) {
                        e.setSkinInfo(e.skinType.Color, t, n)
                    }
                }
            })
        }))]), e._v(" "), i("div", {staticClass: "xlx-skin-picture"}, [i("ul", [i("li", {
            staticClass: "xlx-skin-picture__item",
            class: {"is-chosen": e.isChosen(e.skinType.Default)},
            style: {backgroundImage: "url(" + e.defaultPreview + ")"},
            on: {
                click: function (t) {
                    e.setSkinInfo(e.skinType.Default, null, 0)
                }
            }
        }, [i("p", {staticClass: "xlx-skin-picture__name"}, [e._v("默认皮肤")])]), e._v(" "), e._l(e.wallpapers, function (t, n) {
            return i("li", {
                key: t.id,
                staticClass: "xlx-skin-picture__item",
                class: {"is-chosen": e.isChosen(e.skinType.Wallpaper, t)},
                style: {backgroundImage: "url('" + t.preview + "')"},
                on: {
                    click: function (i) {
                        e.setSkinInfo(e.skinType.Wallpaper, t, n + 11)
                    }
                }
            }, [i("p", {staticClass: "xlx-skin-picture__name"}, [e._v(e._s(t.name))]), e._v(" "), i("div", {staticClass: "xlx-skin__tag-wrapper"}, [t.is_vip ? i("span", {staticClass: "xlx-skin__tag xlx-skin__tag--vip"}, [e._v("会员")]) : e._e(), e._v(" "), t.is_dynamic ? i("span", {staticClass: "xlx-skin__tag"}, [e._v("动态")]) : e._e(), e._v(" "), t.is_4k ? i("span", {staticClass: "xlx-skin__tag"}, [e._v("4K")]) : e._e()]), e._v(" "), t.showNew ? i("i", {staticClass: "xlx-skin__new"}) : e._e()])
        })], 2)]), e._v(" "), i("td-dialog", {
            staticStyle: {"z-index": "1000"},
            attrs: {"custom-class": "xlx-dialog-skin-popup", visible: e.updateDialogVisible},
            on: {
                "update:visible": function (t) {
                    e.updateDialogVisible = t
                }
            }
        }, [i("span", {staticClass: "xlx-image-update"}), e._v(" "), i("p", {staticClass: "xlx-dialog-skin-popup__text-1"}, [e._v("升级新版客户端，体验动态皮肤")]), e._v(" "), i("p", {staticClass: "xlx-dialog-skin-popup__text-2"}, [e._v("还有私人空间、迅雷社区20多项新功能")]), e._v(" "), i("td-button", {
            attrs: {slot: "footer"},
            on: {click: e.updateApp},
            slot: "footer"
        }, [e._v("马上升级")])], 1), e._v(" "), i("td-dialog", {
            staticStyle: {"z-index": "1000"},
            attrs: {"custom-class": "xlx-dialog-skin-popup", visible: e.vipDialogVisible},
            on: {
                "update:visible": function (t) {
                    e.vipDialogVisible = t
                }, close: function (t) {
                    e.$emit("restore-skin")
                }
            }
        }, [i("span", {staticClass: "xlx-image-vip"}), e._v(" "), i("p", {staticClass: "xlx-dialog-skin-popup__text-1"}, [e._v("开通迅雷会员尊享品质皮肤")]), e._v(" "), i("p", {staticClass: "xlx-dialog-skin-popup__text-2"}, [e._v("更有会员加速、离线空间等30多项特权")]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            staticClass: "xlx-button--vip",
            on: {click: e.openVip}
        }, [e._v("开通会员")]), e._v(" "), e.isLogined ? e._e() : i("a", {
            staticClass: "xlx-dialog-skin__link",
            attrs: {href: "javascript:;"},
            on: {
                click: function (t) {
                    e.showloginDlg("vipDialog")
                }
            }
        }, [e._v("会员登录")])], 1)], 2), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.loginLayerVisible,
                expression: "loginLayerVisible"
            }], staticClass: "xlx-skin-cover", staticStyle: {position: "fixed"}
        }, [i("div", {
            staticClass: "xlx-skin__chosen",
            style: {background: "rgb(" + e.sget(e.colorItem, "colors", "colorPreview") + ")"}
        }, [e.skinInfo.type === e.skinType.Color ? i("span", {staticClass: "xlx-image-color"}) : e.skinInfo.type === e.skinType.Wallpaper ? i("img", {
            attrs: {
                src: e.sget(e.wallpaper, "preview"),
                alt: e.sget(e.wallpaper, "name")
            }
        }) : e._e()]), e._v(" "), i("h3", [e._v("登录后即可使用该皮肤哦！")]), e._v(" "), i("td-button", {
            on: {
                click: function (t) {
                    e.showloginDlg("loginLayer")
                }
            }
        }, [e._v("立即登录")]), e._v(" "), i("a", {
            staticClass: "xlx-skin-cover__close",
            attrs: {href: "javascript:;", title: "关闭"},
            on: {click: e.closeLoginLayer}
        }, [i("td-icon", {attrs: {type: "close"}})], 1)], 1)], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return "confirm" === e.popType ? i("confirm", {
            attrs: {options: e.options, "box-id": e.boxId},
            on: {
                "update:options": function (t) {
                    e.options = t
                }
            },
            nativeOn: {
                dragstart: function (e) {
                    e.preventDefault()
                }
            }
        }) : "message-box" === e.popType ? i("message-box", {
            attrs: {
                options: e.options,
                formData: e.options.formData,
                "box-id": e.boxId
            }, on: {
                "update:formData": function (t) {
                    e.$set(e.options, "formData", t)
                }
            }, nativeOn: {
                dragstart: function (e) {
                    e.preventDefault()
                }
            }
        }) : i(e.popType, {
            tag: "component",
            attrs: {options: e.options, "box-id": e.boxId},
            nativeOn: {
                dragstart: function (e) {
                    e.preventDefault()
                }
            }
        })
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {"custom-class": ["xlx-dialog--fix"], "footer-enabled": !1, visible: ""},
            on: {close: e.handleCancel}
        }, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "icon-fix"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [0 === e.status ? i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("修复迅雷影音播放组件\n        "), i("br"), e._v(" "), i("span", [e._v(e._s(e.progress) + "%")])]) : 1 === e.status ? i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("修复成功")]) : i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("修复失败\n        "), i("br"), e._v(" "), i("a", {
            staticClass: "link-down",
            attrs: {href: "#"},
            on: {click: e.onClickDownloadXmp}
        }, [e._v("下载官方版迅雷影音")])])])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {visible: ""}, on: {
                close: function (t) {
                    e.handleClose("close")
                }
            }
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("私人空间密码验证")]), e._v(" "), i("div", {staticClass: "xlx-dialog-secret__setting"}, [i("ul", [i("li", [i("label", {staticClass: "td-input"}, [i("td-tooltip", {
            staticStyle: {
                display: "flex",
                flex: "1"
            }, attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.newPassword,
                expression: "newPassword"
            }],
            ref: "pwdInput",
            staticClass: "td-input__inner",
            attrs: {type: "password", maxlength: "50", placeholder: "请输入密码"},
            domProps: {value: e.newPassword},
            on: {
                input: function (t) {
                    t.target.composing || (e.newPassword = t.target.value)
                }
            }
        }), e._v(" "), i("a", {
            staticClass: "xlx-dialog-secret__clear",
            class: {"is-disabled": "" === e.newPassword},
            attrs: {href: "javascript:;", title: "清除密码"},
            on: {click: e.handleClearPwd}
        }, [i("i", {staticClass: "td-icon-close"})])])], 1)])]), e._v(" "), i("div", {staticClass: "xlx-dialog-secret__link"}, [i("a", {
            attrs: {href: "javascript:;"},
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleForget(t)
                }
            }
        }, [e._v("忘记密码")])])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v("确定")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""}, on: {
                click: function (t) {
                    e.handleClose("cancel")
                }
            }
        }, [e._v("取消")])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", e._g(e._b({
            attrs: {visible: ""}, on: {
                close: function (t) {
                    e.handleCancel(e.action.Close)
                }
            }
        }, "td-dialog", e.$attrs, !1), e.$listeners), [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("td-icon", {attrs: {type: e.icon[e.options.type]}})], 1), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v(e._s(e.options.title))]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__text"}, [e.options.checkboxEnabled ? i("td-checkbox", {
            attrs: {value: e.options.checkboxChecked},
            on: {input: e.handleInput}
        }, [e._v(e._s(e.options.checkboxLabel))]) : e.options.content ? i("span", {domProps: {innerHTML: e._s(e.options.content)}}) : e.options.fileName ? i("div", {
            staticClass: "xlx-dialog-comfirm__film-name",
            attrs: {title: e.options.fileName}
        }, [e._v(e._s(e.options.fileName))]) : e._e()], 1)])]), e._v(" "), i("template", {slot: "footer"}, ["okVisible" in e.options && !e.options.okVisible ? e._e() : i("td-button", {on: {click: e.handleOK}}, [e._v(e._s(e.options.okText || "确定"))]), e._v(" "), "cancelVisible" in e.options && !e.options.cancelVisible ? e._e() : i("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleCancel(e.action.Cancel)
                }
            }
        }, [e._v(e._s(e.options.cancelText || "取消"))])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-subtitle"],
                "footer-enabled": !1,
                visible: ""
            }, on: {close: e.handleCancel}
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("字幕搜索")]), e._v(" "), i("div", {staticClass: "xlx-dialog-subtitle"}, [i("div", {staticClass: "xlx-dialog-subtitle__form"}, [i("label", {staticClass: "td-input"}, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.searchText,
                expression: "searchText"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "text"},
            domProps: {value: e.searchText},
            on: {
                input: function (t) {
                    t.target.composing || (e.searchText = t.target.value)
                }
            }
        })]), e._v(" "), i("a", {
            staticClass: "td-button", attrs: {href: "javascript:;"}, on: {
                click: function (t) {
                    e.searchSubtitleByName("btn")
                }
            }
        }, [e._v("搜索")])]), e._v(" "), i("div", {staticClass: "xlx-dialog-subtitle__list"}, [i("div", {staticClass: "td-table td-table--hover"}, [i("div", {staticClass: "td-table__header-wrapper"}, [i("table", {staticClass: "td-table__header"}, [i("colgroup", [i("col"), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-1"}), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-2"}), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), i("tr", [i("th", [i("p", {staticClass: "td-table__text"}, [e._v("字幕名")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("语言")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("评价")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("操作")])])])])]), e._v(" "), i("div", {staticClass: "td-table__body-wrapper"}, [0 === e.searchStatus ? i("div", {staticClass: "xlx-dialog-subtitle__empty"}, [i("div", {staticClass: "xlx-dialog-subtitle__tips"}, [i("i", {staticClass: "td-icon-load"}), i("p", [e._v("搜索中")])])]) : 2 === e.searchStatus ? i("div", {staticClass: "xlx-dialog-subtitle__empty"}, [i("div", {staticClass: "xlx-dialog-subtitle__tips"}, [i("i", {staticClass: "td-icon-warning"}), i("p", [e._v("无相关字幕，建议换名搜索"), i("br"), e._v("或前往"), i("a", {
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    e.searchShooter()
                }
            }
        }, [e._v("SubHD")]), e._v("查找")])])]) : 1 === e.searchStatus ? i("table", {staticClass: "td-table__body"}, [i("colgroup", [i("col"), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-1"}), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-2"}), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), i("tbody", e._l(e.subtitleList, function (t, n) {
            return t.scid && t.scid.length > 1 ? i("tr", {key: n}, [i("td", [i("p", {staticClass: "td-table__text"}, [i("span", {
                staticClass: "xlx-dialog-subtitle__name",
                attrs: {title: e.getName(t)}
            }, [e._v(e._s(e.getName(t)))])])]), e._v(" "), i("td", [i("p", {staticClass: "td-table__text"}, [e._v(e._s(t.language))])]), e._v(" "), i("td", [i("td-rate", {
                attrs: {
                    value: e.getRate(t),
                    total: 5,
                    readonly: ""
                }
            })], 1), 0 === t.status ? i("td", [i("p", {staticClass: "td-table__text"}, [i("a", {
                staticClass: "xlx-dialog-subtitle__link",
                attrs: {href: "#"},
                on: {
                    click: function (i) {
                        e.onOperationTextClick(t, n)
                    }
                }
            }, [e._v("下载字幕")])])]) : 1 === t.status ? i("td", [i("p", {staticClass: "td-table__text"}, [i("a", {
                staticClass: "xlx-dialog-subtitle__link",
                attrs: {href: "#"},
                on: {
                    click: function (i) {
                        e.onOperationTextClick(t, n)
                    }
                }
            }, [e._v("播放视频")])])]) : 2 === t.status ? i("td", [i("p", {staticClass: "td-table__text"}, [i("i", {staticClass: "td-icon-load"})])]) : 3 === t.status ? i("td", [i("p", {staticClass: "td-table__text"}, [i("a", {
                staticClass: "xlx-dialog-subtitle__link.is-failed",
                attrs: {href: "#"},
                on: {
                    click: function (i) {
                        e.onOperationTextClick(t, n)
                    }
                }
            }, [e._v("下载失败")])])]) : e._e()]) : e._e()
        }))]) : e._e()])])]), e._v(" "), i("a", {
            staticClass: "xlx-dialog-subtitle__access",
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    e.searchShooter()
                }
            }
        }, [e._v("访问SubHD搜索字幕")])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("td-dialog", {
            attrs: {"custom-class": "xlx-dialog-mobile", "footer-enabled": !1, visible: ""},
            on: {close: this.handleCancel}
        }, [t("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [this._v("将资源下载到手机")]), this._v(" "), t("div", {staticClass: "xlx-dialog-mobile__code"}, [t("div", {staticClass: "xlx-dialog-mobile__image"}, [t("canvas", {attrs: {id: "qrcodecanvas"}})]), this._v(" "), t("p", [this._v("使用浏览器或者"), t("span", {staticClass: "xlx-dialog-mobile__text"}, [this._v("手机迅雷")]), this._v(" 扫描")])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", [i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog-decrypt",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "xlx-dialog-decrypt__user"}, [i("a", {
            staticClass: "xlx-dialog-decrypt__user-avatar",
            attrs: {href: "#"},
            on: {click: e.onClickUserInfo}
        }, [i("img", {
            attrs: {
                src: e.userheadURL,
                alt: "头像"
            }
        })]), e._v(" "), i("a", {
            staticClass: "xlx-dialog-decrypt__user-name",
            attrs: {href: "#"},
            on: {click: e.onClickUserInfo}
        }, [e._v(e._s(e.userName))]), e._v("已加密了这个迅雷口令\n    ")]), e._v(" "), i("div", {staticClass: "xlx-dialog-decrypt__analysis"}, [i("label", {staticClass: "td-input is-warn"}, [i("td-input", {
            attrs: {
                value: e.inputPassword,
                autofocus: "",
                placeholder: "请输入密码"
            }, on: {
                input: e.hanldeInput, keydown: function (t) {
                    return "button" in t || !e._k(t.keyCode, "enter", 13, t.key, "Enter") ? e.handleKeyDown(t) : null
                }
            }
        })], 1), e._v(" "), e.isPasswordError ? i("p", {staticClass: "xlx-dialog-decrypt__note"}, [e._v("密码不正确")]) : e._e()])]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("td-button", {
            attrs: {disabled: 0 === e.inputPassword.length},
            on: {click: e.onCheckPwdAndParse}
        }, [e._v("解析口令")])], 1)])])], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {"custom-class": "xlx-dialog-setting", visible: ""},
            on: {close: e.handleClose}
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("代理添加/编辑")]), e._v(" "), i("div", {staticClass: "xlx-dialog-setting__content"}, [i("ul", {staticClass: "xlx-dialog-setting__form"}, [i("li", {staticClass: "xlx-dialog-setting__item"}, [i("span", {staticClass: "xlx-dialog-setting__label"}, [e._v("代理名称")]), e._v(" "), i("td-input", {
            staticClass: "xlx-setting__input-1",
            attrs: {maxlength: "20"},
            model: {
                value: e.proxyName, callback: function (t) {
                    e.proxyName = t
                }, expression: "proxyName"
            }
        })], 1), e._v(" "), i("li", {staticClass: "xlx-dialog-setting__item"}, [i("span", {staticClass: "xlx-dialog-setting__label"}, [e._v("类型")]), e._v(" "), i("ul", {staticClass: "xlx-setting-content__horizontal"}, [i("li", [i("td-radio", {
            attrs: {label: "HTTP"},
            nativeOn: {
                click: function (t) {
                    return e.handleClickHttp(t)
                }
            },
            model: {
                value: e.type, callback: function (t) {
                    e.type = t
                }, expression: "type"
            }
        }, [e._v("HTTP")])], 1), e._v(" "), i("li", [i("td-radio", {
            attrs: {label: "SOCKS5"},
            nativeOn: {
                click: function (t) {
                    return e.handleClickSock(t)
                }
            },
            model: {
                value: e.type, callback: function (t) {
                    e.type = t
                }, expression: "type"
            }
        }, [e._v("SOCKS5")])], 1)])]), e._v(" "), i("li", {staticClass: "xlx-dialog-setting__item"}, [i("span", {staticClass: "xlx-dialog-setting__label"}, [e._v("服 务 器")]), e._v(" "), i("td-input", {
            attrs: {maxlength: "50"},
            model: {
                value: e.host, callback: function (t) {
                    e.host = t
                }, expression: "host"
            }
        })], 1), e._v(" "), i("li", {staticClass: "xlx-dialog-setting__item"}, [i("span", {staticClass: "xlx-dialog-setting__label"}, [e._v("端口")]), e._v(" "), i("label", {staticClass: "td-input xlx-setting__input-2"}, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.port,
                expression: "port"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "text", maxlength: "5"},
            domProps: {value: e.port},
            on: {
                input: [function (t) {
                    t.target.composing || (e.port = t.target.value)
                }, e.handleInput]
            }
        })])]), e._v(" "), i("li", {staticClass: "xlx-dialog-setting__item"}, [i("span", {staticClass: "xlx-dialog-setting__label"}, [e._v("验证")]), e._v(" "), i("td-input", {
            staticClass: "xlx-setting__input-2",
            attrs: {placeholder: "用户名"},
            model: {
                value: e.userName, callback: function (t) {
                    e.userName = t
                }, expression: "userName"
            }
        }), e._v(" "), i("label", {staticClass: "td-input xlx-setting__input-2"}, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.passWord,
                expression: "passWord"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "password", placeholder: "密码"},
            domProps: {value: e.passWord},
            on: {
                input: function (t) {
                    t.target.composing || (e.passWord = t.target.value)
                }
            }
        })]), e._v(" "), i("a", {
            staticClass: "td-button td-button--secondary td-button--small",
            class: {"is-disabled": "测试中…" === e.butText},
            attrs: {href: "javascript:;"},
            on: {click: e.handleTest}
        }, [e._v(e._s(e.butText))])], 1)])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("确定"))]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v(e._s("取消"))])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-about"],
                "footer-enabled": !1,
                visible: ""
            }, on: {close: e.handleCancel}
        }, [i("div", {staticClass: "xlx-dialog-about__content"}, [i("div", {staticClass: "xlx-dialog-about__picture"}), e._v(" "), i("div", {staticClass: "xlx-dialog-about__title"}, [i("h1", [e._v("迅雷"), i("span", [e._v("X")])]), e._v(" "), i("p", [e._v("版本号 "), i("span", [e._v(e._s(e.options.version))])])]), e._v(" "), i("div", {staticClass: "xlx-dialog-about__copyright"}, [i("p", [e._v("深圳市迅雷网络技术有限公司 © 2003-2019")]), e._v(" "), i("p", [i("span", [e._v("Xunlei Networking Technologies.LTD © 2013-2019")]), i("span", [e._v("www.xunlei.com")])])])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-setting"],
                visible: ""
            }, on: {
                close: function (t) {
                    e.handleCancel(e.action.Close)
                }
            }
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v(e._s(e.options.title))]), e._v(" "), e.options.schemas ? i("div", {staticClass: "xlx-dialog-setting__content"}, [i("div", {staticClass: "xlx-dialog-setting__speed"}, e._l(e.options.schemas, function (t) {
            return i("generator-view", {
                key: t.name,
                attrs: {item: t, value: e.formData[t.name], formData: e.formData},
                on: {input: e.handleInput}
            })
        }))]) : e.options.message ? [e._v(e._s(e.options.message))] : e._e(), e._v(" "), i("template", {slot: "footer"}, ["okVisible" in e.options && !e.options.okVisible ? e._e() : i("td-button", {
            attrs: {disabled: !e.comfirmButtonActive},
            on: {click: e.handleOK}
        }, [e._v("\n      " + e._s(e.options.okText || "确定") + "\n    ")]), e._v(" "), "cancelVisible" in e.options && !e.options.cancelVisible ? e._e() : i("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleCancel(e.action.Cancel)
                }
            }
        }, [e._v("\n      " + e._s(e.options.cancelText || "取消") + "\n    ")])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-subtitle"],
                "footer-enabled": !1,
                visible: ""
            }, on: {close: e.handleCancel}
        }, [i("div", {staticClass: "xlx-dialog-subtitle"}, [i("div", {staticClass: "xlx-resource"}, [i("i", {
            staticClass: "xlx-icon-type",
            class: e.taskIcon
        }), e._v(" "), i("div", {staticClass: "xlx-resource__subtitle"}, [i("p", {
            staticClass: "xlx-resource__text",
            attrs: {title: e.taskName}
        }, [e._v(e._s(e.taskName))]), e._v(" "), i("a", {
            staticClass: "xlx-resource__text-tips",
            attrs: {href: "#"},
            on: {click: e.onVideoNumberTextClick}
        }, [e._v(e._s(e.videoNum) + "个视频文件")])])]), e._v(" "), i("div", {staticClass: "xlx-dialog-subtitle__list"}, [i("div", {staticClass: "td-table td-table--hover"}, [i("div", {staticClass: "td-table__header-wrapper"}, [i("table", {staticClass: "td-table__header"}, [i("colgroup", [i("col"), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), i("tr", [i("th", [i("p", {staticClass: "td-table__text"}, [e._v("文件名")])]), e._v(" "), i("th", [i("p", {staticClass: "td-table__text"}, [e._v("操作")])])])])]), e._v(" "), i("div", {staticClass: "td-table__body-wrapper"}, [i("table", {staticClass: "td-table__body"}, [i("colgroup", [i("col"), e._v(" "), i("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), i("tbody", e._l(e.fileList, function (t, n) {
            return i("tr", {key: n}, [i("td", [i("p", {staticClass: "td-table__text"}, [i("span", {
                staticClass: "xlx-dialog-subtitle__name",
                attrs: {title: t.fileName}
            }, [e._v(e._s(t.fileName))])])]), e._v(" "), i("td", [i("p", {staticClass: "td-table__text"}, [i("a", {
                staticClass: "xlx-dialog-subtitle__link",
                attrs: {href: "#"},
                on: {
                    click: function (i) {
                        e.popSutitleMessageBox(t)
                    }
                }
            }, [e._v("搜索字幕")])])])])
        }))])])])]), e._v(" "), i("a", {
            staticClass: "xlx-dialog-subtitle__access",
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    e.searchShooter()
                }
            }
        }, [e._v("访问SubHD搜索字幕")])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {"custom-class": "xlx-dialog--browser", visible: "", "footer-enabled": !1},
            on: {close: e.handleCloseButton}
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("如何在浏览器中使用迅雷下载？")]), e._v(" "), i("div", {staticClass: "td-tabs"}, [i("div", {staticClass: "td-tabs__title"}, [this.is360Exist ? i("div", {
            class: e.selectClass360,
            on: {
                click: function (t) {
                    e.handleItemClick("360")
                }
            }
        }, [i("i", {staticClass: "icon-browser icon-browser--360"}), e._v(" "), i("span", [e._v("360浏览器")])]) : e._e(), e._v(" "), this.isSouGouExist ? i("div", {
            class: e.selectClassSG,
            on: {
                click: function (t) {
                    e.handleItemClick("SouGou")
                }
            }
        }, [i("i", {staticClass: "icon-browser icon-browser--sg"}), e._v(" "), i("span", [e._v("搜狗浏览器")])]) : e._e(), e._v(" "), e.isQQExist ? i("div", {
            class: e.selectClassQQ,
            on: {
                click: function (t) {
                    e.handleItemClick("QQ")
                }
            }
        }, [i("i", {staticClass: "icon-browser icon-browser--qq"}), e._v(" "), i("span", [e._v("QQ浏览器")])]) : e._e()]), e._v(" "), i("div", {staticClass: "td-tabs__content"}, ["360" === this.szCurSelect ? i("div", {staticClass: "td-tabs__pane"}, [i("img", {
            attrs: {
                src: e.path360,
                alt: "设置360浏览器"
            }
        })]) : "SouGou" === this.szCurSelect ? i("div", {staticClass: "td-tabs__pane"}, [i("img", {
            attrs: {
                src: e.pathSougou,
                alt: "设置搜狗浏览器"
            }
        })]) : "QQ" === this.szCurSelect ? i("div", {staticClass: "td-tabs__pane"}, [i("img", {
            attrs: {
                src: e.pathQQ,
                alt: "设置QQ浏览器"
            }
        })]) : e._e()])]), e._v(" "), i("div", {staticClass: "browser-operation-wp"}, [i("a", {
            staticClass: "td-button td-button--large",
            attrs: {href: "#"},
            on: {click: e.handleConfigBrowser}
        }, [e._v("去选择迅雷下载")]), e._v(" "), i("p", {staticClass: "user-count"}, [i("em", [e._v("80%")]), e._v("人选择了迅雷下载")])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {
            ref: "list",
            staticClass: "td-context-menu xlx-context-menu--bookmarks is-left"
        }, [i("ul", {staticClass: "td-context-menu__main"}, e._l(e.options, function (t, n) {
            return i("li", {
                key: t.url,
                staticClass: "td-context-menu__item",
                attrs: {title: t.name + "\n" + t.url},
                on: {
                    click: function (i) {
                        return "button" in i || !e._k(i.keyCode, "left", 37, i.key, ["Left", "ArrowLeft"]) ? "button" in i && 0 !== i.button ? null : (i.stopPropagation(), void e.openNewTab(t.url, t.name)) : null
                    }, contextmenu: function (i) {
                        i.stopPropagation(), e.showBookMarkMenu(t.url, t.name, n)
                    }
                }
            }, [i("div", {staticClass: "td-context-menu__content"}, [i("i", {staticClass: "td-icon"}, [e.isShowDefaultIcon(t.url, t.iconUrl) ? i("i", {staticClass: "xlx-icon-net"}) : i("img", {attrs: {src: t.iconUrl}})]), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.name))])])])
        }))])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "td-dialog"}, [i("div", {staticClass: "td-dialog__header"}, [i("h2", [e._v(e._s("add" === e.options.state ? "已添加书签" : "修改书签"))]), e._v(" "), i("a", {
            staticClass: "td-dialog__close",
            attrs: {href: "javascript:;", title: "关闭"},
            on: {click: e.handleClose}
        }, [i("i", {staticClass: "td-icon-close"})])]), e._v(" "), i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "xlx-dialog__bookmarks-add"}, [i("ul", [i("li", {staticClass: "xlx-dialog__bookmarks-add-item"}, [i("label", {staticClass: "td-input"}, [i("span", {staticClass: "td-input__label"}, [e._v("名称")]), e._v(" "), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.value,
                expression: "value"
            }],
            ref: "titleInput",
            staticClass: "td-input__inner",
            attrs: {type: "text"},
            domProps: {value: e.value},
            on: {
                input: function (t) {
                    t.target.composing || (e.value = t.target.value)
                }
            }
        })])]), e._v(" "), i("li", {staticClass: "xlx-dialog__bookmarks-add-item"}, [i("div", {staticClass: "td-select"}, [i("span", {staticClass: "td-input__label"}, [e._v("添加到")]), e._v(" "), i("div", {staticClass: "td-select-group is-choose"}, [i("span", {staticClass: "td-select-group__label"}, ["edit" === e.options.state ? i("i", {
            staticClass: "xlx-icon-fav",
            class: {"is-active": "edit" === e.options.state}
        }) : e._e(), e._v("书签栏")]), e._v(" "), e._m(0)])])])])])]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("a", {
            staticClass: "td-button",
            class: {"is-disabled": "" === e.value.trim()},
            attrs: {href: "javascript:;"},
            on: {click: e.handleOk}
        }, [e._v("确定")]), e._v(" "), i("a", {
            staticClass: "td-button td-button--secondary",
            attrs: {href: "javascript:;"},
            on: {click: e.handleDelete}
        }, [e._v("删除")])])])])
    }, r = [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("a", {
            staticClass: "td-select__drop",
            attrs: {href: "javascript:;"}
        }, [t("i", {staticClass: "td-icon-arrow-drop"})])
    }];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {"footer-enabled": !1, visible: ""},
            on: {close: e.handleClose}
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("计划任务，按时下载")]), e._v(" "), i("div", {staticClass: "xlx-dialog-plan"}, [i("div", {staticClass: "xlx-dialog-plan__time"}, [i("td-tooltip", {
            attrs: {
                content: e.sget(e.errorFields, "hours", 0, "message"),
                visible: Boolean(e.sget(e.errorFields, "hours"))
            }
        }, [i("td-input", {
            attrs: {placeholder: "0"}, model: {
                value: e.hours, callback: function (t) {
                    e.hours = t
                }, expression: "hours"
            }
        })], 1), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("时")]), e._v(" "), i("td-tooltip", {
            attrs: {
                content: e.sget(e.errorFields, "minutes", 0, "message"),
                visible: Boolean(e.sget(e.errorFields, "minutes"))
            }
        }, [i("td-input", {
            attrs: {placeholder: "0"}, model: {
                value: e.minutes, callback: function (t) {
                    e.minutes = t
                }, expression: "minutes"
            }
        })], 1), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("分")]), e._v("\n      后\n      "), i("select-native", {
            attrs: {options: e.operations},
            model: {
                value: e.operation, callback: function (t) {
                    e.operation = t
                }, expression: "operation"
            }
        }), e._v(" "), i("td-button", {
            attrs: {disabled: e.plans && e.plans.length >= 3},
            on: {click: e.addPlan}
        }, [i("i", {staticClass: "xlx-icon-new"})])], 1), e._v(" "), i("div", {staticClass: "xlx-dialog-plan__result"}, [i("ul", e._l(e.plans, function (t, n) {
            return i("li", {
                key: n,
                staticClass: "xlx-dialog-plan__result-item"
            }, [i("p", {staticClass: "xlx-dialog-plan__text"}, [i("span", {staticClass: "xlx-dialog-plan__text-time"}, [e._v(e._s(t.hours) + " 小时 " + e._s(t.minutes) + " 分 " + e._s(t.seconds) + " 秒")]), e._v(" "), i("span", [e._v("后")]), e._v(" "), i("span", [e._v(e._s(t.operation))])]), e._v(" "), i("td-button", {
                attrs: {secondary: ""},
                on: {
                    click: function (t) {
                        e.removePlan(n)
                    }
                }
            }, [i("td-icon", {attrs: {type: "close"}})], 1)], 1)
        }))])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("重命名")]), e._v(" "), i("div", {staticClass: "xlx-dialog-rename"}, [i("td-tooltip", {
            staticStyle: {display: "block"},
            attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [i("td-input", {
            ref: "input",
            attrs: {label: "", type: "textarea", placeholder: "请输入文件名"},
            model: {
                value: e.newName, callback: function (t) {
                    e.newName = t
                }, expression: "newName"
            }
        })], 1)], 1), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("确定"))]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v(e._s("取消"))])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {"custom-class": ["xlx-dialog-setting"], "footer-enabled": !1, visible: ""},
            on: {close: e.handleCancel}
        }, [i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "td-icon-warning"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("您还没有安装迅雷影音，需要现在\n          "), i("br"), e._v("下载吗？\n        ")])])])]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("a", {
            staticClass: "td-button",
            attrs: {href: "javascript:;"},
            on: {click: e.onClickDownloadXmpEx}
        }, [e._v("立即下载")]), e._v(" "), i("a", {
            staticClass: "td-button td-button--secondary",
            attrs: {href: "javascript:;"},
            on: {click: e.handleCancel}
        }, [e._v("取消")])])])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {visible: ""},
            on: {close: e.handleClose}
        }, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "td-icon-warning"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("下载列表已存在相同任务")])])]), e._v(" "), i("template", {slot: "footer"}, [i("div", {staticClass: "xlx-dialog-repeat__footer"}, [i("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("ignore")
                }
            }
        }, [i("i", {staticClass: "xlx-icon-skip"}), e._v("跳过重复文件，继续下载")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("delete")
                }
            }
        }, [i("i", {staticClass: "xlx-icon-replace"}), e._v("替换重复文件，覆盖下载")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [i("i", {staticClass: "xlx-icon-not-operate"}), e._v("不做任何操作")])], 1)])], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", [1 === e.options.showType ? i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "xlx-icon-bird"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("正在生成口令...")])])])])]) : 0 === e.options.showType ? i("td-dialog", {
            ref: "dialogDecode",
            attrs: {"custom-class": "xlx-dialog--cipher xlx-dialog--small", visible: "", "footer-enabled": !1},
            on: {close: e.onClickClose}
        }, [i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "xlx-icon-bird"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("正在翻译口令...")])])])])]) : 3 === e.options.showType ? i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "td-icon-error"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("生成口令失败")])])])]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("button", {
            staticClass: "td-button td-button--secondary",
            on: {click: e.retryEncode}
        }, [e._v("重试")])])])]) : 2 === e.options.showType ? i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "td-icon-error"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("翻译口令失败")])])])]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("button", {
            staticClass: "td-button td-button--secondary",
            on: {click: e.retryDecode}
        }, [e._v("重试")])])])]) : 4 === e.options.showType ? i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("您的迅雷口令已生成")]), e._v(" "), i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "xlx-dialog-chipher"}, [e._v(e._s(e.tips))]), e._v(" "), i("div", {staticClass: "xlx-dialog-chipher__encryption"}, [i("td-checkbox", {
            attrs: {value: e.isChecked},
            on: {input: e.handleCheck}
        }, [e._v("加密迅雷口令")]), e._v(" "), i("td-input", {
            ref: "inputObj",
            attrs: {value: e.userpwd, disabled: !e.isChecked, placeholder: "请输入密码"},
            on: {input: e.handleInput}
        }), e._v(" "), i("td-button", {
            attrs: {disabled: 0 === e.userpwd.length || !e.isChecked},
            on: {click: e.onEncryptKey}
        }, [e._v("加密")])], 1)]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("td-button", {
            attrs: {disabled: e.disableCopy},
            on: {click: e.onCopyBtnClick}
        }, [e._v("复制口令")])], 1)]), e._v(" "), e.showEncryptRet ? i("div", {staticClass: "td-cover td-cover--message"}, [!0 === e.encryptResult ? i("div", {staticClass: "td-message td-message--success"}, [i("i", {staticClass: "td-icon-success"}), i("span", {staticClass: "td-message__text"}, [e._v("口令加密成功")])]) : i("div", {staticClass: "td-message td-message--error"}, [i("i", {staticClass: "td-icon-error"}), i("span", {staticClass: "td-message__text"}, [e._v("口令加密失败")])])]) : e._e()]) : 5 === e.options.showType ? i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("您的迅雷口令已生成")]), e._v(" "), i("div", {staticClass: "td-dialog__body"}, [i("div", {staticClass: "xlx-dialog-chipher"}, [e._v(e._s(e.tips))])]), e._v(" "), i("div", {staticClass: "td-dialog__footer"}, [i("div", {staticClass: "td-dialog-footer"}, [i("button", {staticClass: "td-button is-disabled"}, [i("i", {staticClass: "td-icon-success"}), e._v("已复制，快去粘贴\n          "), i("span", [e._v("（" + e._s(e.timeToClose) + "秒后关闭）")])])])])]) : e._e()], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "td-context-menu xlx-context-menu--browser"}, [i("h3", [e._v("已打开标签页"), i("span", [e._v(e._s(e.unpinnedLength))]), e._v("个")]), e._v(" "), i("ul", {
            staticClass: "td-context-menu__main",
            staticStyle: {width: "145px", height: "336px"}
        }, e._l(e.tabsCopy, function (t, n) {
            return t.pinned ? e._e() : i("li", {
                key: t.key,
                ref: "item" + n,
                refInFor: !0,
                staticClass: "td-context-menu__item",
                attrs: {"data-index": n},
                on: {
                    click: function (t) {
                        e.handleUpdateCurrent(n)
                    }
                }
            }, [i("div", {
                staticClass: "td-context-menu__content",
                class: {"is-active": n === e.currentCopy}
            }, [i("i", {staticClass: "td-icon"}, [e.isShowDefaultIcon(n) ? i("i", {staticClass: "xlx-icon-net"}) : i("img", {attrs: {src: e.handleIconUrl(n)}})]), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.title))]), e._v(" "), i("a", {
                staticClass: "td-icon-close",
                attrs: {href: "javascript: void 0;"},
                on: {
                    click: function (t) {
                        t.stopPropagation(), e.handleRemove(n)
                    }
                }
            })])])
        }))])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {"custom-class": "xlx-skin", "footer-enabled": !1, visible: ""},
            on: {close: e.handleClose}
        }, [i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "skin" === e.activeKey && !e.isVip,
                expression: "activeKey === 'skin' && !isVip"
            }], staticClass: "xlx-skin-vip"
        }), e._v(" "), i("td-tabs", {
            staticClass: "xlx-skin__title",
            attrs: {tabs: e.tabs, "active-key": e.activeKey},
            on: {
                "update:activeKey": function (t) {
                    e.activeKey = t
                }
            },
            scopedSlots: e._u([{
                key: "default", fn: function (t) {
                    var n = t.tab;
                    return ["skin" === n.key ? i("td-tabs", {
                        attrs: {tabs: e.skinTabs, "active-key": e.skinActiveKey},
                        on: {
                            "update:activeKey": [function (t) {
                                e.skinActiveKey = t
                            }, e.changeTab]
                        },
                        scopedSlots: e._u([{
                            key: "default", fn: function (t) {
                                var n = t.tab;
                                return ["featured" === n.key ? i("pane-skin-featured", {
                                    ref: "paneSkinFeatured",
                                    attrs: {
                                        options: e.options,
                                        "skin-info": e.skinInfo,
                                        wallpaper: e.wallpaper,
                                        wallpapers: e.wallpapers,
                                        "is-logined": e.isLogined,
                                        "is-vip": e.isVip
                                    },
                                    on: {
                                        "set-skin-info": e.setSkinInfo,
                                        "close-window": e.closeWindow,
                                        "update-last-skin-info": function (t) {
                                            e.lastSkinInfo = e.skinInfo
                                        },
                                        "restore-skin": e.restoreSkin
                                    }
                                }) : e._e(), e._v(" "), "custom" === n.key ? i("pane-skin-custom") : e._e(), e._v(" "), "speedcurve" === n.key ? i("pane-skin-speedcurve", {
                                    attrs: {
                                        "skin-info": e.speedCurveSkinInfo,
                                        "last-skin-info": e.lastSpeedCurveSkinInfo,
                                        "is-logined": e.isLogined,
                                        "is-vip": e.isVip,
                                        "is-platinum-vip": e.isPlatinumVip,
                                        "is-super-vip": e.isSuperVip,
                                        "vas-type": e.vasType
                                    }, on: {"set-skin-info": e.setSpeedCurveSkinInfo, "close-window": e.closeWindow}
                                }) : e._e()]
                            }
                        }])
                    }) : e._e(), e._v(" "), "avatar" === n.key ? i("div", {staticClass: "xlx-skin__expect"}, [i("span", {staticClass: "xlx-image-avatar"}), e._v(" "), i("p", [e._v("头像功能，敬请期待！")])]) : e._e()]
                }
            }])
        })], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {visible: ""},
            on: {close: e.handleClose}
        }, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "td-icon-warning"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("发现重复文件")])])]), e._v(" "), i("div", {staticClass: "xlx-dialog-repeat"}, [i("div", {staticClass: "xlx-dialog-repeat__list"}, [i("p", {domProps: {innerHTML: e._s(e.files)}})])]), e._v(" "), i("template", {slot: "footer"}, [i("div", {staticClass: "xlx-dialog-repeat__footer"}, [i("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("ignore")
                }
            }
        }, [i("i", {staticClass: "xlx-icon-skip"}), e._v("跳过重复文件，继续下载")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("delete")
                }
            }
        }, [i("i", {staticClass: "xlx-icon-replace"}), e._v("替换重复文件，覆盖下载")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [i("i", {staticClass: "xlx-icon-not-operate"}), e._v("不做任何操作")])], 1)])], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {attrs: {visible: "", "before-close": e.handleClose}}, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("新建下载任务")]), e._v(" "), i("div", {staticClass: "xlx-dialog__filter"}, [i("p", [e._v("批量下载功能可以方便的创建多个包含共同特征的下载任务。例如网站A提供了10个这样的下载链接：")]), e._v(" "), i("p", [e._v("http://www.a.com/01.zip")]), e._v(" "), i("p", [e._v("http://www.a.com/02.zip")]), e._v("...\n    "), i("p", [e._v("http://www.a.com/10.zip")]), e._v(" "), i("br"), e._v(" "), i("p", [e._v("这10个地址只有数字部分不同，如果用(*)表示不同的部分，这些地址可以写成：")]), e._v(" "), i("p", [e._v("http://www.a.com/(*).zip")]), e._v(" "), i("br"), e._v(" "), i("p", [e._v("同时，通配符长度指的是这些地址不同部分数字的长度，例如：")]), e._v(" "), i("p", [e._v("从01.zip－10.zip，通配符长度是2；")]), e._v(" "), i("p", [e._v("从001.zip－010.zip，通配符长度是3。")]), e._v(" "), i("br"), e._v(" "), i("p", [e._v("注意，在填写从xxx到xxx的时候，虽然是从01到10或者是001到010，但是，当您设定了通配符长度以后，就只需要填写成从1到10。 填写完成后，在示意窗口会显示第一个和最后一个任务的具体链接地址，您可以检查是否正确，然后点确定完成操作。")])]), e._v(" "), i("div", {staticClass: "xlx-dialog__down-input"}, [i("td-tooltip", {
            staticStyle: {display: "block"},
            attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [i("td-input", {
            attrs: {label: "通过URL过滤：", placeholder: ""},
            model: {
                value: e.urlExample, callback: function (t) {
                    e.urlExample = t
                }, expression: "urlExample"
            }
        })], 1)], 1), e._v(" "), i("div", {staticClass: "xlx-dialog__down-filter"}, [i("ul", [i("li", [i("td-radio", {
            attrs: {label: "number"},
            model: {
                value: e.picked, callback: function (t) {
                    e.picked = t
                }, expression: "picked"
            }
        }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("从")]), e._v(" "), i("limit-input", {
            attrs: {
                isNumber: !0,
                readonly: "number" !== e.picked,
                value: e.numFrom,
                min: 0,
                max: e.numMax
            }, on: {input: e.handleNumFromChange}
        }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("到")]), e._v(" "), i("limit-input", {
            attrs: {
                isNumber: !0,
                readonly: "number" !== e.picked,
                value: e.numTo,
                min: 0,
                max: e.numMax
            }, on: {input: e.handleNumToChange}
        }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("通配符长度：")]), e._v(" "), i("select-native", {
            attrs: {
                readonly: "number" !== e.picked,
                value: e.wildcardLength,
                options: e.selectOptions
            }, on: {input: e.handleWildcardChange}
        })], 1), e._v(" "), i("li", [i("td-radio", {
            attrs: {label: "alpha"},
            model: {
                value: e.picked, callback: function (t) {
                    e.picked = t
                }, expression: "picked"
            }
        }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("从")]), e._v(" "), i("limit-input", {
            attrs: {
                isAlpha: !0,
                readonly: "alpha" !== e.picked,
                value: e.alphaFrom
            }, on: {input: e.handleAlphaFromChange}
        }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("到")]), e._v(" "), i("limit-input", {
            attrs: {
                isAlpha: !0,
                readonly: "alpha" !== e.picked,
                value: e.alphaTo
            }, on: {input: e.handleAlphaToChange}
        }), e._v(" "), i("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("区分大小写")])], 1)]), e._v(" "), i("label", {staticClass: "td-textarea"}, [i("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.context,
                expression: "context"
            }],
            staticClass: "td-textarea__inner",
            attrs: {readonly: "", placeholder: ""},
            domProps: {value: e.context},
            on: {
                input: function (t) {
                    t.target.composing || (e.context = t.target.value)
                }
            }
        })])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("确定"))])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {visible: ""},
            on: {close: e.handleOK}
        }, [i("div", {staticClass: "td-dialog-comfirm"}, [i("span", {staticClass: "td-dialog-comfirm__icon"}, [i("i", {staticClass: "td-icon-warning"})]), e._v(" "), i("div", {staticClass: "td-dialog-comfirm__content"}, [i("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("下载列表已存在相同任务")])])]), e._v(" "), i("div", {staticClass: "xlx-dialog-repeat"}, [i("p", [e._v(e._s(e.title))]), e._v(" "), i("div", {staticClass: "xlx-dialog-repeat__list is-nowrap"}, [i("p", {domProps: {innerHTML: e._s(e.urls)}})])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("我知道了"))])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("私人下载任务管理")]), e._v(" "), i("div", {staticClass: "xlx-dialog-secret__setting"}, [i("ul", [i("li", [i("span", [e._v("同时下载的最大任务数")]), e._v(" "), i("div", {staticClass: "td-select xlx-select-size-1"}, [i("div", {staticClass: "td-select-group"}, [i("label", {staticClass: "td-input"}, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model.number",
                value: e.maxTaskCount,
                expression: "maxTaskCount",
                modifiers: {number: !0}
            }],
            staticClass: "td-input__inner",
            attrs: {type: "number", placeholder: "5"},
            domProps: {value: e.maxTaskCount},
            on: {
                input: function (t) {
                    t.target.composing || (e.maxTaskCount = e._n(t.target.value))
                }, blur: function (t) {
                    e.$forceUpdate()
                }
            }
        })]), e._v(" "), i("a", {
            staticClass: "td-select__drop",
            attrs: {href: "#"}
        }, [i("i", {staticClass: "td-icon-arrow-drop"})])])]), e._v(" "), i("span", {staticClass: "xlx-setting-content__tips"}, [e._v("（1-50）")])])]), e._v(" "), i("p", {staticClass: "td-dialog-comfirm__text"}, [i("label", {staticClass: "td-checkbox is-checked"}, [i("input", {
            staticClass: "td-checkbox__inner",
            attrs: {type: "checkbox", checked: ""}
        }), e._v(" "), i("span", {staticClass: "td-checkbox__label"}, [e._v("自动将低速任务移动至列尾")])])])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v("取消")])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {visible: ""}, on: {
                close: function (t) {
                    e.handleClose("close")
                }
            }
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("设置私人空间密码")]), e._v(" "), i("div", {staticClass: "xlx-dialog-secret__setting"}, [i("ul", [i("li", [i("label", {staticClass: "td-input"}, [i("span", {staticClass: "td-input__label"}, [e._v("输入密码：")]), e._v(" "), i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.password,
                expression: "password"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "password", maxlength: "50", placeholder: "请输入密码"},
            domProps: {value: e.password},
            on: {
                input: function (t) {
                    t.target.composing || (e.password = t.target.value)
                }
            }
        })])]), e._v(" "), i("li", [i("label", {staticClass: "td-input"}, [i("span", {staticClass: "td-input__label"}, [e._v("确认密码：")]), e._v(" "), i("td-tooltip", {
            staticStyle: {
                display: "flex",
                flex: "1"
            }, attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.secondPassword,
                expression: "secondPassword"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "password", maxlength: "50", placeholder: "再次输入密码"},
            domProps: {value: e.secondPassword},
            on: {
                input: function (t) {
                    t.target.composing || (e.secondPassword = t.target.value)
                }
            }
        })])], 1)])]), e._v(" "), i("p", {staticClass: "xlx-dialog-comfirm__text"}, [i("label", {
            staticClass: "td-checkbox",
            class: {"is-checked": e.isSetHide}
        }, [i("input", {
            directives: [{name: "model", rawName: "v-model", value: e.isSetHide, expression: "isSetHide"}],
            staticClass: "td-checkbox__inner",
            attrs: {type: "checkbox"},
            domProps: {checked: Array.isArray(e.isSetHide) ? e._i(e.isSetHide, null) > -1 : e.isSetHide},
            on: {
                change: function (t) {
                    var i = e.isSetHide, n = t.target, r = !!n.checked;
                    if (Array.isArray(i)) {
                        var o = e._i(i, null);
                        n.checked ? o < 0 && (e.isSetHide = i.concat([null])) : o > -1 && (e.isSetHide = i.slice(0, o).concat(i.slice(o + 1)))
                    } else e.isSetHide = r
                }
            }
        }), e._v(" "), i("span", {staticClass: "td-checkbox__label"}, [e._v("在本地隐藏私人空间对应文件夹")])])])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""}, on: {
                click: function (t) {
                    e.handleClose("cancel")
                }
            }
        }, [e._v("取消")])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("私人下载存储目录设置")]), e._v(" "), i("div", {staticClass: "td-dialog__body"}, [i("td-tooltip", {
            staticStyle: {display: "block"},
            attrs: {content: e.pathTips, visible: e.isShowPathTips, placement: "top"}
        }, [i("path-selector", {
            attrs: {enablePrivateSpace: !1, value: e.savePath, appendDirs: e.appendDirs},
            on: {input: e.handleChangePath}
        })], 1), e._v(" "), i("p", {staticClass: "td-dialog-comfirm__text"}, [i("label", {
            staticClass: "td-checkbox",
            class: {"is-checked": e.hideLocalDir}
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.hideLocalDir,
                expression: "hideLocalDir"
            }],
            staticClass: "td-checkbox__inner",
            attrs: {type: "checkbox"},
            domProps: {checked: Array.isArray(e.hideLocalDir) ? e._i(e.hideLocalDir, null) > -1 : e.hideLocalDir},
            on: {
                change: function (t) {
                    var i = e.hideLocalDir, n = t.target, r = !!n.checked;
                    if (Array.isArray(i)) {
                        var o = e._i(i, null);
                        n.checked ? o < 0 && (e.hideLocalDir = i.concat([null])) : o > -1 && (e.hideLocalDir = i.slice(0, o).concat(i.slice(o + 1)))
                    } else e.hideLocalDir = r
                }
            }
        }), e._v(" "), i("span", {staticClass: "td-checkbox__label"}, [e._v("在本地隐藏私人空间对应文件夹")])])])], 1), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v("取消")])], 1)], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("td-dialog", {
            attrs: {visible: ""}, on: {
                close: function (t) {
                    e.handleClose("close")
                }
            }
        }, [i("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("登录帐号身份验证")]), e._v(" "), i("div", {staticClass: "xlx-dialog-secret__setting"}, [i("p", {staticClass: "xlx-dialog-secret__tips"}, [e._v(e._s(e.promptContent))]), e._v(" "), i("ul", [i("li", [i("label", {staticClass: "td-input"}, [i("td-tooltip", {
            staticStyle: {
                display: "flex",
                flex: "1"
            }, attrs: {content: e.verifyCodeGetTipsText, visible: e.isShowVerifyCodeGetTips, placement: "top"}
        }, [i("input", {
            directives: [{name: "model", rawName: "v-model", value: e.mobile, expression: "mobile"}],
            ref: "phoneInput",
            staticClass: "td-input__inner",
            attrs: {type: "text", readonly: "readonly", placeholder: "请输入绑定手机号"},
            domProps: {value: e.mobile},
            on: {
                input: function (t) {
                    t.target.composing || (e.mobile = t.target.value)
                }
            }
        })])], 1), e._v(" "), i("a", {
            staticClass: "xlx-dialog-secret__code",
            class: {"is-disabled": e.verifyCodeBtnDisabled},
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    t.stopPropagation(), e.handleGetVerifyCode()
                }
            }
        }, [e._v(e._s(e.verifyCodeBtntext))])]), e._v(" "), i("li", [i("label", {staticClass: "td-input"}, [i("td-tooltip", {
            staticStyle: {
                display: "flex",
                flex: "1"
            }, attrs: {content: e.verifyCodeTipsText, visible: e.isShowVerifyCodeTips, placement: "top"}
        }, [i("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.verifyCode,
                expression: "verifyCode"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "text", placeholder: "验证码"},
            domProps: {value: e.verifyCode},
            on: {
                input: function (t) {
                    t.target.composing || (e.verifyCode = t.target.value)
                }
            }
        })])], 1)])]), e._v(" "), i("div", {staticClass: "xlx-dialog-secret__link"}, [i("a", {
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleModifierPhone(t)
                }
            }
        }, [e._v("修改安全手机")])])]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            attrs: {disabled: e.okDisabled},
            nativeOn: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), i("td-button", {
            attrs: {secondary: ""}, on: {
                click: function (t) {
                    e.handleClose("cancel")
                }
            }
        }, [e._v("取消")])], 1), e._v(" "), e.isShowFigureCode ? i("div", {attrs: {id: "boxid"}}, [i("iframe", {
            staticStyle: {
                width: "100%",
                height: "100%"
            }, attrs: {src: e.reviewurl}, on: {load: e.showFigureCode}
        })]) : e._e()], 2)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("select-native", {
            attrs: {
                editable: "",
                value: e.value,
                placeholder: "请选择下载目录",
                options: e.options,
                appendDirs: e.appendDirs,
                defaultDir: e.defaultDir,
                type: "file"
            }, on: {input: e.handleInput, "choose-file": e.handleChangePath}, nativeOn: {
                contextmenu: function (t) {
                    return e.handleContextMenu(t)
                }
            }
        }, [i("span", {
            staticClass: "xlx-file-size",
            class: e.spaceColor,
            attrs: {slot: "suffix"},
            slot: "suffix"
        }, [e._v(e._s(e.freeSpaceFormat))])])
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this.$createElement;
        this._self._c;
        return this._m(0)
    }, r = [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "xlx-skin-customize xlx-skin-customize--picture"}, [t("div", {staticClass: "xlx-skin__expect"}, [t("span", {staticClass: "xlx-image-skin"}), this._v(" "), t("p", [this._v("自定义皮肤功能，敬请期待！")])])])
    }];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , function (e, t, i) {
    "use strict";
    var n = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "xlx-skin-picture xlx-skin-picture--speed"}, [i("ul", [i("li", {
            staticClass: "xlx-skin-picture__item",
            class: {"is-chosen": e.skinInfo.type === e.skinType.Default},
            style: {backgroundImage: "url(" + e.defaultPreview + ")"},
            on: {
                click: function (t) {
                    e.changeSkin(e.defaultSkinInfo)
                }
            }
        }, [i("p", {staticClass: "xlx-skin-picture__name"}, [e._v("默认皮肤")])]), e._v(" "), e._l(e.skins, function (t) {
            return i("li", {
                key: t.id,
                staticClass: "xlx-skin-picture__item",
                class: {"is-chosen": e.skinInfo.id === t.id},
                style: {backgroundImage: "url('" + t.previewSavePath + "')"},
                on: {
                    click: function (i) {
                        e.changeSkin(t)
                    }
                }
            }, [i("div", {staticClass: "xlx-skin__tag-wrapper"}, [t.type === e.skinType.Vip ? i("span", {staticClass: "xlx-skin__tag xlx-skin__tag--vip"}, [e._v("VIP")]) : t.type === e.skinType.SuperVip ? i("span", {staticClass: "xlx-skin__tag xlx-skin__tag--svip"}, [e._v("SVIP")]) : e._e()]), e._v(" "), i("p", {staticClass: "xlx-skin-picture__name"}, [e._v(e._s(t.name))])])
        })], 2), e._v(" "), i("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog-skin-popup",
                visible: e.vipDialogVisible
            }, on: {
                "update:visible": function (t) {
                    e.vipDialogVisible = t
                }, close: function (t) {
                    e.$emit("set-skin-info", e.lastSkinInfo)
                }
            }
        }, [i("span", {staticClass: "xlx-image-vip"}), e._v(" "), i("p", {staticClass: "xlx-dialog-skin-popup__text-1"}, [e._v(e._s(e.vipDialogTitle))]), e._v(" "), i("p", {staticClass: "xlx-dialog-skin-popup__text-2"}, [e._v("更有会员加速、离线空间等30多项特权")]), e._v(" "), i("template", {slot: "footer"}, [i("td-button", {
            staticClass: "xlx-button--vip",
            on: {click: e.openVip}
        }, [e._v(e._s(e.vipDialogBtnText))]), e._v(" "), e.isLogined ? e._e() : i("a", {
            staticClass: "xlx-dialog-skin__link",
            attrs: {href: "javascript:;"},
            on: {click: e.showloginDlg}
        }, [e._v("会员登录")])], 1)], 2)], 1)
    }, r = [];
    n._withStripped = !0, i.d(t, "a", function () {
        return n
    }), i.d(t, "b", function () {
        return r
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, i) {
    var n = i(240), r = i(209), o = i(611), s = i(1071), a = i(1072), l = i(1073), c = i(1074), u = i(1075), d = i(756),
        h = i(1076), f = i(1079), p = i(1080), v = i(210), m = i(1081), g = i(759);

    function _(e, t, i) {
        var n, r, o = e.size, s = p.getEncodedBits(t, i);
        for (n = 0; n < 15; n++) r = 1 == (s >> n & 1), n < 6 ? e.set(n, 8, r, !0) : n < 8 ? e.set(n + 1, 8, r, !0) : e.set(o - 15 + n, 8, r, !0), n < 8 ? e.set(8, o - n - 1, r, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, r, !0) : e.set(8, 15 - n - 1, r, !0);
        e.set(o - 8, 8, 1, !0)
    }

    function y(e, t, i) {
        var o = new s;
        i.forEach(function (t) {
            o.put(t.mode.bit, 4), o.put(t.getLength(), v.getCharCountIndicator(t.mode, e)), t.write(o)
        });
        var a = 8 * (r.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, t));
        for (o.getLengthInBits() + 4 <= a && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
        for (var l = (a - o.getLengthInBits()) / 8, c = 0; c < l; c++) o.put(c % 2 ? 17 : 236, 8);
        return function (e, t, i) {
            for (var o = r.getSymbolTotalCodewords(t), s = d.getTotalCodewordsCount(t, i), a = o - s, l = d.getBlocksCount(t, i), c = l - o % l, u = Math.floor(o / l), f = Math.floor(a / l), p = f + 1, v = u - f, m = new h(v), g = 0, _ = new Array(l), y = new Array(l), b = 0, C = new n(e.buffer), w = 0; w < l; w++) {
                var x = w < c ? f : p;
                _[w] = C.slice(g, g + x), y[w] = m.encode(_[w]), g += x, b = Math.max(b, x)
            }
            var S, k, P = new n(o), T = 0;
            for (S = 0; S < b; S++) for (k = 0; k < l; k++) S < _[k].length && (P[T++] = _[k][S]);
            for (S = 0; S < v; S++) for (k = 0; k < l; k++) P[T++] = y[k][S];
            return P
        }(o, e, t)
    }

    function b(e, t, i, n) {
        var o;
        if (g(e)) o = m.fromArray(e); else {
            if ("string" != typeof e) throw new Error("Invalid data");
            var s = t;
            if (!s) {
                var d = m.rawSplit(e);
                s = f.getBestVersionForData(d, i)
            }
            o = m.fromString(e, s || 40)
        }
        var h = f.getBestVersionForData(o, i);
        if (!h) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (t) {
            if (t < h) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + h + ".\n")
        } else t = h;
        var p = y(t, i, o), v = r.getSymbolSize(t), b = new a(v);
        return function (e, t) {
            for (var i = e.size, n = c.getPositions(t), r = 0; r < n.length; r++) for (var o = n[r][0], s = n[r][1], a = -1; a <= 7; a++) if (!(o + a <= -1 || i <= o + a)) for (var l = -1; l <= 7; l++) s + l <= -1 || i <= s + l || (a >= 0 && a <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && l >= 2 && l <= 4 ? e.set(o + a, s + l, !0, !0) : e.set(o + a, s + l, !1, !0))
        }(b, t), function (e) {
            for (var t = e.size, i = 8; i < t - 8; i++) {
                var n = i % 2 == 0;
                e.set(i, 6, n, !0), e.set(6, i, n, !0)
            }
        }(b), function (e, t) {
            for (var i = l.getPositions(t), n = 0; n < i.length; n++) for (var r = i[n][0], o = i[n][1], s = -2; s <= 2; s++) for (var a = -2; a <= 2; a++) -2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? e.set(r + s, o + a, !0, !0) : e.set(r + s, o + a, !1, !0)
        }(b, t), _(b, i, 0), t >= 7 && function (e, t) {
            for (var i, n, r, o = e.size, s = f.getEncodedBits(t), a = 0; a < 18; a++) i = Math.floor(a / 3), n = a % 3 + o - 8 - 3, r = 1 == (s >> a & 1), e.set(i, n, r, !0), e.set(n, i, r, !0)
        }(b, t), function (e, t) {
            for (var i = e.size, n = -1, r = i - 1, o = 7, s = 0, a = i - 1; a > 0; a -= 2) for (6 === a && a--; ;) {
                for (var l = 0; l < 2; l++) if (!e.isReserved(r, a - l)) {
                    var c = !1;
                    s < t.length && (c = 1 == (t[s] >>> o & 1)), e.set(r, a - l, c), -1 == --o && (s++, o = 7)
                }
                if ((r += n) < 0 || i <= r) {
                    r -= n, n = -n;
                    break
                }
            }
        }(b, p), isNaN(n) && (n = u.getBestMask(b, _.bind(null, b, i))), u.applyMask(n, b), _(b, i, n), {
            modules: b,
            version: t,
            errorCorrectionLevel: i,
            maskPattern: n,
            segments: o
        }
    }

    t.create = function (e, t) {
        if (void 0 === e || "" === e) throw new Error("No input text");
        var i, n, s = o.M;
        return void 0 !== t && (s = o.from(t.errorCorrectionLevel, o.M), i = f.from(t.version), n = u.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)), b(e, i, s, n)
    }
}, function (e, t, i) {
    var n = i(611),
        r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
        o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    t.getBlocksCount = function (e, t) {
        switch (t) {
            case n.L:
                return r[4 * (e - 1) + 0];
            case n.M:
                return r[4 * (e - 1) + 1];
            case n.Q:
                return r[4 * (e - 1) + 2];
            case n.H:
                return r[4 * (e - 1) + 3];
            default:
                return
        }
    }, t.getTotalCodewordsCount = function (e, t) {
        switch (t) {
            case n.L:
                return o[4 * (e - 1) + 0];
            case n.M:
                return o[4 * (e - 1) + 1];
            case n.Q:
                return o[4 * (e - 1) + 2];
            case n.H:
                return o[4 * (e - 1) + 3];
            default:
                return
        }
    }
}, function (e, t) {
    t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40
    }
}, function (e, t) {
    var i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (i = i.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
    t.KANJI = new RegExp(i, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
    var r = new RegExp("^" + i + "$"), o = new RegExp("^[0-9]+$"), s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    t.testKanji = function (e) {
        return r.test(e)
    }, t.testNumeric = function (e) {
        return o.test(e)
    }, t.testAlphanumeric = function (e) {
        return s.test(e)
    }
}, function (e, t) {
    var i = {}.toString;
    e.exports = Array.isArray || function (e) {
        return "[object Array]" == i.call(e)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(6), r = i(81), o = e.exports = function () {
        r.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = !1, this._encoding = "utf8", this.writable = !0
    };
    n.inherits(o, r), o.prototype.read = function (e, t) {
        this._reads.push({length: Math.abs(e), allowLess: e < 0, func: t}), process.nextTick(function () {
            this._process(), this._paused && this._reads.length > 0 && (this._paused = !1, this.emit("drain"))
        }.bind(this))
    }, o.prototype.write = function (e, t) {
        return this.writable ? (i = Buffer.isBuffer(e) ? e : new Buffer(e, t || this._encoding), this._buffers.push(i), this._buffered += i.length, this._process(), this._reads && 0 === this._reads.length && (this._paused = !0), this.writable && !this._paused) : (this.emit("error", new Error("Stream not writable")), !1);
        var i
    }, o.prototype.end = function (e, t) {
        e && this.write(e, t), this.writable = !1, this._buffers && (0 === this._buffers.length ? this._end() : (this._buffers.push(null), this._process()))
    }, o.prototype.destroySoon = o.prototype.end, o.prototype._end = function () {
        this._reads.length > 0 && this.emit("error", new Error("There are some read requests waiting on finished stream")), this.destroy()
    }, o.prototype.destroy = function () {
        this._buffers && (this.writable = !1, this._reads = null, this._buffers = null, this.emit("close"))
    }, o.prototype._processReadAllowingLess = function (e) {
        this._reads.shift();
        var t = this._buffers[0];
        t.length > e.length ? (this._buffered -= e.length, this._buffers[0] = t.slice(e.length), e.func.call(this, t.slice(0, e.length))) : (this._buffered -= t.length, this._buffers.shift(), e.func.call(this, t))
    }, o.prototype._processRead = function (e) {
        this._reads.shift();
        for (var t = 0, i = 0, n = new Buffer(e.length); t < e.length;) {
            var r = this._buffers[i++], o = Math.min(r.length, e.length - t);
            r.copy(n, t, 0, o), t += o, o !== r.length && (this._buffers[--i] = r.slice(o))
        }
        i > 0 && this._buffers.splice(0, i), this._buffered -= e.length, e.func.call(this, n)
    }, o.prototype._process = function () {
        try {
            for (; this._buffered > 0 && this._reads && this._reads.length > 0;) {
                var e = this._reads[0];
                if (e.allowLess) this._processReadAllowingLess(e); else {
                    if (!(this._buffered >= e.length)) break;
                    this._processRead(e)
                }
            }
            this._buffers && this._buffers.length > 0 && null === this._buffers[0] && this._end()
        } catch (e) {
            this.emit("error", e)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(762), r = i(763);

    function o(e, t, i) {
        var n = e * t;
        return 8 !== i && (n = Math.ceil(n / (8 / i))), n
    }

    var s = e.exports = function (e, t) {
        var i = e.width, r = e.height, s = e.interlace, a = e.bpp, l = e.depth;
        if (this.read = t.read, this.write = t.write, this.complete = t.complete, this._imageIndex = 0, this._images = [], s) for (var c = n.getImagePasses(i, r), u = 0; u < c.length; u++) this._images.push({
            byteWidth: o(c[u].width, a, l),
            height: c[u].height,
            lineIndex: 0
        }); else this._images.push({byteWidth: o(i, a, l), height: r, lineIndex: 0});
        this._xComparison = 8 === l ? a : 16 === l ? 2 * a : 1
    };
    s.prototype.start = function () {
        this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this))
    }, s.prototype._unFilterType1 = function (e, t, i) {
        for (var n = this._xComparison, r = n - 1, o = 0; o < i; o++) {
            var s = e[1 + o], a = o > r ? t[o - n] : 0;
            t[o] = s + a
        }
    }, s.prototype._unFilterType2 = function (e, t, i) {
        for (var n = this._lastLine, r = 0; r < i; r++) {
            var o = e[1 + r], s = n ? n[r] : 0;
            t[r] = o + s
        }
    }, s.prototype._unFilterType3 = function (e, t, i) {
        for (var n = this._xComparison, r = n - 1, o = this._lastLine, s = 0; s < i; s++) {
            var a = e[1 + s], l = o ? o[s] : 0, c = s > r ? t[s - n] : 0, u = Math.floor((c + l) / 2);
            t[s] = a + u
        }
    }, s.prototype._unFilterType4 = function (e, t, i) {
        for (var n = this._xComparison, o = n - 1, s = this._lastLine, a = 0; a < i; a++) {
            var l = e[1 + a], c = s ? s[a] : 0, u = a > o ? t[a - n] : 0, d = a > o && s ? s[a - n] : 0, h = r(u, c, d);
            t[a] = l + h
        }
    }, s.prototype._reverseFilterLine = function (e) {
        var t, i = e[0], n = this._images[this._imageIndex], r = n.byteWidth;
        if (0 === i) t = e.slice(1, r + 1); else switch (t = new Buffer(r), i) {
            case 1:
                this._unFilterType1(e, t, r);
                break;
            case 2:
                this._unFilterType2(e, t, r);
                break;
            case 3:
                this._unFilterType3(e, t, r);
                break;
            case 4:
                this._unFilterType4(e, t, r);
                break;
            default:
                throw new Error("Unrecognised filter type - " + i)
        }
        this.write(t), n.lineIndex++, n.lineIndex >= n.height ? (this._lastLine = null, this._imageIndex++, n = this._images[this._imageIndex]) : this._lastLine = t, n ? this.read(n.byteWidth + 1, this._reverseFilterLine.bind(this)) : (this._lastLine = null, this.complete())
    }
}, function (e, t, i) {
    "use strict";
    var n = [{x: [0], y: [0]}, {x: [4], y: [0]}, {x: [0, 4], y: [4]}, {x: [2, 6], y: [0, 4]}, {
        x: [0, 2, 4, 6],
        y: [2, 6]
    }, {x: [1, 3, 5, 7], y: [0, 2, 4, 6]}, {x: [0, 1, 2, 3, 4, 5, 6, 7], y: [1, 3, 5, 7]}];
    t.getImagePasses = function (e, t) {
        for (var i = [], r = e % 8, o = t % 8, s = (e - r) / 8, a = (t - o) / 8, l = 0; l < n.length; l++) {
            for (var c = n[l], u = s * c.x.length, d = a * c.y.length, h = 0; h < c.x.length && c.x[h] < r; h++) u++;
            for (h = 0; h < c.y.length && c.y[h] < o; h++) d++;
            u > 0 && d > 0 && i.push({width: u, height: d, index: l})
        }
        return i
    }, t.getInterlaceIterator = function (e) {
        return function (t, i, r) {
            var o = t % n[r].x.length, s = (t - o) / n[r].x.length * 8 + n[r].x[o], a = i % n[r].y.length;
            return 4 * s + ((i - a) / n[r].y.length * 8 + n[r].y[a]) * e * 4
        }
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t, i) {
        var n = e + t - i, r = Math.abs(n - e), o = Math.abs(n - t), s = Math.abs(n - i);
        return r <= o && r <= s ? e : o <= s ? t : i
    }
}, function (e, t, i) {
    "use strict";
    var n = i(265), r = i(765), o = e.exports = function (e, t) {
        this._options = e, e.checkCRC = !1 !== e.checkCRC, this._hasIHDR = !1, this._hasIEND = !1, this._palette = [], this._colorType = 0, this._chunks = {}, this._chunks[n.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[n.TYPE_IEND] = this._handleIEND.bind(this), this._chunks[n.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[n.TYPE_PLTE] = this._handlePLTE.bind(this), this._chunks[n.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[n.TYPE_gAMA] = this._handleGAMA.bind(this), this.read = t.read, this.error = t.error, this.metadata = t.metadata, this.gamma = t.gamma, this.transColor = t.transColor, this.palette = t.palette, this.parsed = t.parsed, this.inflateData = t.inflateData, this.finished = t.finished
    };
    o.prototype.start = function () {
        this.read(n.PNG_SIGNATURE.length, this._parseSignature.bind(this))
    }, o.prototype._parseSignature = function (e) {
        for (var t = n.PNG_SIGNATURE, i = 0; i < t.length; i++) if (e[i] !== t[i]) return void this.error(new Error("Invalid file signature"));
        this.read(8, this._parseChunkBegin.bind(this))
    }, o.prototype._parseChunkBegin = function (e) {
        for (var t = e.readUInt32BE(0), i = e.readUInt32BE(4), o = "", s = 4; s < 8; s++) o += String.fromCharCode(e[s]);
        var a = Boolean(32 & e[4]);
        if (this._hasIHDR || i === n.TYPE_IHDR) {
            if (this._crc = new r, this._crc.write(new Buffer(o)), this._chunks[i]) return this._chunks[i](t);
            a ? this.read(t + 4, this._skipChunk.bind(this)) : this.error(new Error("Unsupported critical chunk type " + o))
        } else this.error(new Error("Expected IHDR on beggining"))
    }, o.prototype._skipChunk = function () {
        this.read(8, this._parseChunkBegin.bind(this))
    }, o.prototype._handleChunkEnd = function () {
        this.read(4, this._parseChunkEnd.bind(this))
    }, o.prototype._parseChunkEnd = function (e) {
        var t = e.readInt32BE(0), i = this._crc.crc32();
        this._options.checkCRC && i !== t ? this.error(new Error("Crc error - " + t + " - " + i)) : this._hasIEND || this.read(8, this._parseChunkBegin.bind(this))
    }, o.prototype._handleIHDR = function (e) {
        this.read(e, this._parseIHDR.bind(this))
    }, o.prototype._parseIHDR = function (e) {
        this._crc.write(e);
        var t = e.readUInt32BE(0), i = e.readUInt32BE(4), r = e[8], o = e[9], s = e[10], a = e[11], l = e[12];
        if (8 === r || 4 === r || 2 === r || 1 === r || 16 === r) if (o in n.COLORTYPE_TO_BPP_MAP) if (0 === s) if (0 === a) if (0 === l || 1 === l) {
            this._colorType = o;
            var c = n.COLORTYPE_TO_BPP_MAP[this._colorType];
            this._hasIHDR = !0, this.metadata({
                width: t,
                height: i,
                depth: r,
                interlace: Boolean(l),
                palette: Boolean(o & n.COLORTYPE_PALETTE),
                color: Boolean(o & n.COLORTYPE_COLOR),
                alpha: Boolean(o & n.COLORTYPE_ALPHA),
                bpp: c,
                colorType: o
            }), this._handleChunkEnd()
        } else this.error(new Error("Unsupported interlace method")); else this.error(new Error("Unsupported filter method")); else this.error(new Error("Unsupported compression method")); else this.error(new Error("Unsupported color type")); else this.error(new Error("Unsupported bit depth " + r))
    }, o.prototype._handlePLTE = function (e) {
        this.read(e, this._parsePLTE.bind(this))
    }, o.prototype._parsePLTE = function (e) {
        this._crc.write(e);
        for (var t = Math.floor(e.length / 3), i = 0; i < t; i++) this._palette.push([e[3 * i], e[3 * i + 1], e[3 * i + 2], 255]);
        this.palette(this._palette), this._handleChunkEnd()
    }, o.prototype._handleTRNS = function (e) {
        this.read(e, this._parseTRNS.bind(this))
    }, o.prototype._parseTRNS = function (e) {
        if (this._crc.write(e), this._colorType === n.COLORTYPE_PALETTE_COLOR) {
            if (0 === this._palette.length) return void this.error(new Error("Transparency chunk must be after palette"));
            if (e.length > this._palette.length) return void this.error(new Error("More transparent colors than palette size"));
            for (var t = 0; t < e.length; t++) this._palette[t][3] = e[t];
            this.palette(this._palette)
        }
        this._colorType === n.COLORTYPE_GRAYSCALE && this.transColor([e.readUInt16BE(0)]), this._colorType === n.COLORTYPE_COLOR && this.transColor([e.readUInt16BE(0), e.readUInt16BE(2), e.readUInt16BE(4)]), this._handleChunkEnd()
    }, o.prototype._handleGAMA = function (e) {
        this.read(e, this._parseGAMA.bind(this))
    }, o.prototype._parseGAMA = function (e) {
        this._crc.write(e), this.gamma(e.readUInt32BE(0) / n.GAMMA_DIVISION), this._handleChunkEnd()
    }, o.prototype._handleIDAT = function (e) {
        this.read(-e, this._parseIDAT.bind(this, e))
    }, o.prototype._parseIDAT = function (e, t) {
        if (this._crc.write(t), this._colorType === n.COLORTYPE_PALETTE_COLOR && 0 === this._palette.length) throw new Error("Expected palette not found");
        this.inflateData(t);
        var i = e - t.length;
        i > 0 ? this._handleIDAT(i) : this._handleChunkEnd()
    }, o.prototype._handleIEND = function (e) {
        this.read(e, this._parseIEND.bind(this))
    }, o.prototype._parseIEND = function (e) {
        this._crc.write(e), this._hasIEND = !0, this._handleChunkEnd(), this.finished && this.finished()
    }
}, function (e, t, i) {
    "use strict";
    var n = [];
    !function () {
        for (var e = 0; e < 256; e++) {
            for (var t = e, i = 0; i < 8; i++) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
            n[e] = t
        }
    }();
    var r = e.exports = function () {
        this._crc = -1
    };
    r.prototype.write = function (e) {
        for (var t = 0; t < e.length; t++) this._crc = n[255 & (this._crc ^ e[t])] ^ this._crc >>> 8;
        return !0
    }, r.prototype.crc32 = function () {
        return -1 ^ this._crc
    }, r.crc32 = function (e) {
        for (var t = -1, i = 0; i < e.length; i++) t = n[255 & (t ^ e[i])] ^ t >>> 8;
        return -1 ^ t
    }
}, function (e, t, i) {
    "use strict";
    var n = i(762), r = {
        1: {0: 0, 1: 0, 2: 0, 3: 255},
        2: {0: 0, 1: 0, 2: 0, 3: 1},
        3: {0: 0, 1: 1, 2: 2, 3: 255},
        4: {0: 0, 1: 1, 2: 2, 3: 3}
    };

    function o(e, t, i, n, o, s) {
        for (var a = e.width, l = e.height, c = e.index, u = 0; u < l; u++) for (var d = 0; d < a; d++) {
            for (var h = i(d, u, c), f = 0; f < 4; f++) {
                var p = r[n][f];
                if (255 === p) t[h + f] = 255; else {
                    var v = p + s;
                    if (v === o.length) throw new Error("Ran out of data");
                    t[h + f] = o[v]
                }
            }
            s += n
        }
        return s
    }

    function s(e, t, i, n, o, s) {
        for (var a = e.width, l = e.height, c = e.index, u = 0; u < l; u++) {
            for (var d = 0; d < a; d++) for (var h = o.get(n), f = i(d, u, c), p = 0; p < 4; p++) {
                var v = r[n][p];
                t[f + p] = 255 !== v ? h[v] : s
            }
            o.resetAfterLine()
        }
    }

    t.dataToBitMap = function (e, t) {
        var i, r = t.width, a = t.height, l = t.depth, c = t.bpp, u = t.interlace;
        if (8 !== l) var d = function (e, t) {
            var i = [], n = 0;

            function r() {
                if (n === e.length) throw new Error("Ran out of data");
                var r, o, s, a, l, c, u, d, h = e[n];
                switch (n++, t) {
                    default:
                        throw new Error("unrecognised depth");
                    case 16:
                        u = e[n], n++, i.push((h << 8) + u);
                        break;
                    case 4:
                        u = 15 & h, d = h >> 4, i.push(d, u);
                        break;
                    case 2:
                        l = 3 & h, c = h >> 2 & 3, u = h >> 4 & 3, d = h >> 6 & 3, i.push(d, u, c, l);
                        break;
                    case 1:
                        r = 1 & h, o = h >> 1 & 1, s = h >> 2 & 1, a = h >> 3 & 1, l = h >> 4 & 1, c = h >> 5 & 1, u = h >> 6 & 1, d = h >> 7 & 1, i.push(d, u, c, l, a, s, o, r)
                }
            }

            return {
                get: function (e) {
                    for (; i.length < e;) r();
                    var t = i.slice(0, e);
                    return i = i.slice(e), t
                }, resetAfterLine: function () {
                    i.length = 0
                }, end: function () {
                    if (n !== e.length) throw new Error("extra data found")
                }
            }
        }(e, l);
        i = l <= 8 ? new Buffer(r * a * 4) : new Uint16Array(r * a * 4);
        var h, f, p = Math.pow(2, l) - 1, v = 0;
        if (u) h = n.getImagePasses(r, a), f = n.getInterlaceIterator(r, a); else {
            var m = 0;
            f = function () {
                var e = m;
                return m += 4, e
            }, h = [{width: r, height: a}]
        }
        for (var g = 0; g < h.length; g++) 8 === l ? v = o(h[g], i, f, c, e, v) : s(h[g], i, f, c, d, p);
        if (8 === l) {
            if (v !== e.length) throw new Error("extra data found")
        } else d.end();
        return i
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        var i = t.depth, n = t.width, r = t.height, o = t.colorType, s = t.transColor, a = t.palette, l = e;
        return 3 === o ? function (e, t, i, n, r) {
            for (var o = 0, s = 0; s < n; s++) for (var a = 0; a < i; a++) {
                var l = r[e[o]];
                if (!l) throw new Error("index " + e[o] + " not in palette");
                for (var c = 0; c < 4; c++) t[o + c] = l[c];
                o += 4
            }
        }(e, l, n, r, a) : (s && function (e, t, i, n, r) {
            for (var o = 0, s = 0; s < n; s++) for (var a = 0; a < i; a++) {
                var l = !1;
                if (1 === r.length ? r[0] === e[o] && (l = !0) : r[0] === e[o] && r[1] === e[o + 1] && r[2] === e[o + 2] && (l = !0), l) for (var c = 0; c < 4; c++) t[o + c] = 0;
                o += 4
            }
        }(e, l, n, r, s), 8 !== i && (16 === i && (l = new Buffer(n * r * 4)), function (e, t, i, n, r) {
            for (var o = Math.pow(2, r) - 1, s = 0, a = 0; a < n; a++) for (var l = 0; l < i; l++) {
                for (var c = 0; c < 4; c++) t[s + c] = Math.floor(255 * e[s + c] / o + .5);
                s += 4
            }
        }(e, l, n, r, i))), l
    }
}, function (e, t, i) {
    "use strict";
    var n = i(265), r = i(765), o = i(1092), s = i(1093), a = i(55), l = e.exports = function (e) {
        if (this._options = e, e.deflateChunkSize = e.deflateChunkSize || 32768, e.deflateLevel = null != e.deflateLevel ? e.deflateLevel : 9, e.deflateStrategy = null != e.deflateStrategy ? e.deflateStrategy : 3, e.inputHasAlpha = null == e.inputHasAlpha || e.inputHasAlpha, e.deflateFactory = e.deflateFactory || a.createDeflate, e.bitDepth = e.bitDepth || 8, e.colorType = "number" == typeof e.colorType ? e.colorType : n.COLORTYPE_COLOR_ALPHA, e.inputColorType = "number" == typeof e.inputColorType ? e.inputColorType : n.COLORTYPE_COLOR_ALPHA, -1 === [n.COLORTYPE_GRAYSCALE, n.COLORTYPE_COLOR, n.COLORTYPE_COLOR_ALPHA, n.COLORTYPE_ALPHA].indexOf(e.colorType)) throw new Error("option color type:" + e.colorType + " is not supported at present");
        if (-1 === [n.COLORTYPE_GRAYSCALE, n.COLORTYPE_COLOR, n.COLORTYPE_COLOR_ALPHA, n.COLORTYPE_ALPHA].indexOf(e.inputColorType)) throw new Error("option input color type:" + e.inputColorType + " is not supported at present");
        if (8 !== e.bitDepth && 16 !== e.bitDepth) throw new Error("option bit depth:" + e.bitDepth + " is not supported at present")
    };
    l.prototype.getDeflateOptions = function () {
        return {
            chunkSize: this._options.deflateChunkSize,
            level: this._options.deflateLevel,
            strategy: this._options.deflateStrategy
        }
    }, l.prototype.createDeflate = function () {
        return this._options.deflateFactory(this.getDeflateOptions())
    }, l.prototype.filterData = function (e, t, i) {
        var r = o(e, t, i, this._options), a = n.COLORTYPE_TO_BPP_MAP[this._options.colorType];
        return s(r, t, i, this._options, a)
    }, l.prototype._packChunk = function (e, t) {
        var i = t ? t.length : 0, n = new Buffer(i + 12);
        return n.writeUInt32BE(i, 0), n.writeUInt32BE(e, 4), t && t.copy(n, 8), n.writeInt32BE(r.crc32(n.slice(4, n.length - 4)), n.length - 4), n
    }, l.prototype.packGAMA = function (e) {
        var t = new Buffer(4);
        return t.writeUInt32BE(Math.floor(e * n.GAMMA_DIVISION), 0), this._packChunk(n.TYPE_gAMA, t)
    }, l.prototype.packIHDR = function (e, t) {
        var i = new Buffer(13);
        return i.writeUInt32BE(e, 0), i.writeUInt32BE(t, 4), i[8] = this._options.bitDepth, i[9] = this._options.colorType, i[10] = 0, i[11] = 0, i[12] = 0, this._packChunk(n.TYPE_IHDR, i)
    }, l.prototype.packIDAT = function (e) {
        return this._packChunk(n.TYPE_IDAT, e)
    }, l.prototype.packIEND = function () {
        return this._packChunk(n.TYPE_IEND, null)
    }
}, function (e, t, i) {
    "use strict";
    var n = e.exports = function (e) {
        this._buffer = e, this._reads = []
    };
    n.prototype.read = function (e, t) {
        this._reads.push({length: Math.abs(e), allowLess: e < 0, func: t})
    }, n.prototype.process = function () {
        for (; this._reads.length > 0 && this._buffer.length;) {
            var e = this._reads[0];
            if (!this._buffer.length || !(this._buffer.length >= e.length || e.allowLess)) break;
            this._reads.shift();
            var t = this._buffer;
            this._buffer = t.slice(e.length), e.func.call(this, t.slice(0, e.length))
        }
        return this._reads.length > 0 ? new Error("There are some read requests waitng on finished stream") : this._buffer.length > 0 ? new Error("unrecognised content at end of stream") : void 0
    }
}, function (e, t, i) {
    var n = i(289);

    function r(e, t) {
        var i = e.a / 255, n = t + '="' + e.hex + '"';
        return i < 1 ? n + " " + t + '-opacity="' + i.toFixed(2).slice(1) + '"' : n
    }

    function o(e, t, i) {
        var n = e + t;
        return void 0 !== i && (n += " " + i), n
    }

    t.render = function (e, t, i) {
        var s = n.getOptions(t), a = e.modules.size, l = e.modules.data, c = a + 2 * s.margin,
            u = s.color.light.a ? "<path " + r(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
            d = "<path " + r(s.color.dark, "stroke") + ' d="' + function (e, t, i) {
                for (var n = "", r = 0, s = !1, a = 0, l = 0; l < e.length; l++) {
                    var c = Math.floor(l % t), u = Math.floor(l / t);
                    c || s || (s = !0), e[l] ? (a++, l > 0 && c > 0 && e[l - 1] || (n += s ? o("M", c + i, .5 + u + i) : o("m", r, 0), r = 0, s = !1), c + 1 < t && e[l + 1] || (n += o("h", a), a = 0)) : r++
                }
                return n
            }(l, a, s.margin) + '"/>', h = 'viewBox="0 0 ' + c + " " + c + '"',
            f = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + h + ' shape-rendering="crispEdges">' + u + d + "</svg>\n";
        return "function" == typeof i && i(null, f), f
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, i) {
    i(41), e.exports = i(1031)
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(27);
    n.CommonIPCRenderer.rendererCommunicator.initialize("messageBoxRendererContext"), n.CommonIPCRenderer.rendererCommunicator.connect();
    const r = i(42), o = i(30), s = i(1032), a = i(241);
    i(43), i(88);
    const l = i(45);
    i(50);
    const c = i(1).default.getLogger("MessageBoxRenderer"), u = i(242);
    r.PerformanceMonitorStatNS.init("message-box-renderer"), o.default.use(a.default), o.default.use(u), new o.default({
        components: {App: s.default},
        render: e => e("app")
    }).$mount("#app"), l.ThunderToolsNS.enableDevTools().catch(e => {
        c.warning(e)
    }), l.ThunderToolsNS.enableDragOpenFile()
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(620), r = i(468);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(1105), i(1106), i(612), i(613), i(1107), i(1108), i(1109), i(1110), i(1111), i(1112), i(1113), i(1114), i(1115);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\app.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(640), r = i(470);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\about.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(626), r = i(472);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\confirm.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(641), r = i(474);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\message-box.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(648), r = i(476);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\plan-task.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(650), r = i(478);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\task-rename.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(653), r = i(480);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bt-repeat-task.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(657), r = i(482);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bt-repeat-file.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(661), r = i(484);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-set-password.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(624), r = i(486);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-verify-password.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(665), r = i(488);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(1043);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-phone-verify.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    var n = i(1282);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(662), r = i(490);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-download-setting.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(668), r = i(492);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\common\\views\\path-selector.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(660), r = i(494);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-task-manager.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(659), r = i(496);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\multi-repeat-task.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(658), r = i(498);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\batch-new-task-ctrl.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(647), r = i(500);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\book-marks.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(646), r = i(502);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\book-list.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(643), r = i(504);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\subtitle-task-filelist.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(631), r = i(506);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\subtitle-search.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(645), r = i(508);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\browser-config-guide.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(623), r = i(510);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\xmp-fix.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(652), r = i(512);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\xmp-fix-ex.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(654), r = i(514);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(1057);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bird-key-show.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    var n = i(1284);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(655), r = i(516);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(602), i(603);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\total-tabs.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(656), r = i(518);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\index.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(672), r = i(520);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\pane-skin-custom.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(614), r = i(522);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\pane-skin-featured.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(674), r = i(524);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\pane-skin-speedcurve.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(639), r = i(526);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\add-proxy.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(638), r = i(528);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    i(1065);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bird-key-pwdcheck.vue", t.default = a.exports
}, function (e, t, i) {
    "use strict";
    var n = i(1286);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(637), r = i(530);
    for (var o in r) "default" !== o && function (e) {
        i.d(t, e, function () {
            return r[e]
        })
    }(o);
    var s = i(0), a = Object(s.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\shoulei-qrcode.vue", t.default = a.exports
}, function (e, t, i) {
    e.exports = i(1068)
}, function (e, t, i) {
    var n = i(1069), r = i(755), o = i(1087), s = i(1099), a = i(1100), l = i(1101);

    function c(e, t, i) {
        if (void 0 === e) throw new Error("String required as first argument");
        if (void 0 === i && (i = t, t = {}), "function" != typeof i) {
            if (!n()) throw new Error("Callback required as last argument");
            t = i || {}, i = null
        }
        return {opts: t, cb: i}
    }

    function u(e) {
        switch (e) {
            case"svg":
                return l;
            case"txt":
            case"utf8":
                return s;
            case"png":
            case"image/png":
            default:
                return o
        }
    }

    function d(e, t, i) {
        if (!i.cb) return new Promise(function (n, o) {
            try {
                var s = r.create(t, i.opts);
                return e(s, i.opts, function (e, t) {
                    return e ? o(e) : n(t)
                })
            } catch (e) {
                o(e)
            }
        });
        try {
            var n = r.create(t, i.opts);
            return e(n, i.opts, i.cb)
        } catch (e) {
            i.cb(e)
        }
    }

    t.create = r.create, t.toCanvas = i(1102).toCanvas, t.toString = function (e, t, i) {
        var n = c(e, t, i);
        return d(function (e) {
            switch (e) {
                case"svg":
                    return l;
                case"terminal":
                    return a;
                case"utf8":
                default:
                    return s
            }
        }(n.opts.type).render, e, n)
    }, t.toDataURL = function (e, t, i) {
        var n = c(e, t, i);
        return d(u(n.opts.type).renderToDataURL, e, n)
    }, t.toBuffer = function (e, t, i) {
        var n = c(e, t, i);
        return d(u(n.opts.type).renderToBuffer, e, n)
    }, t.toFile = function (e, t, i, r) {
        if ("string" != typeof e || "string" != typeof t && "object" != typeof t) throw new Error("Invalid argument");
        if (arguments.length < 3 && !n()) throw new Error("Too few arguments provided");
        var o = c(t, i, r);
        return d(u(o.opts.type || function (e) {
            return e.slice(2 + (e.lastIndexOf(".") - 1 >>> 0)).toLowerCase()
        }(e)).renderToFile.bind(null, e), t, o)
    }, t.toFileStream = function (e, t, i) {
        if (arguments.length < 2) throw new Error("Too few arguments provided");
        var n = c(t, i, e.emit.bind(e, "error"));
        d(u("png").renderToFileStream.bind(null, e), t, n)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(1070);
    e.exports = function () {
        return "function" == typeof n.Promise && "function" == typeof n.Promise.prototype.then
    }
}, function (e, t, i) {
    "use strict";
    e.exports = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this
}, function (e, t) {
    function i() {
        this.buffer = [], this.length = 0
    }

    i.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
        }, put: function (e, t) {
            for (var i = 0; i < t; i++) this.putBit(1 == (e >>> t - i - 1 & 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    }, e.exports = i
}, function (e, t, i) {
    var n = i(240);

    function r(e) {
        if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = e, this.data = new n(e * e), this.data.fill(0), this.reservedBit = new n(e * e), this.reservedBit.fill(0)
    }

    r.prototype.set = function (e, t, i, n) {
        var r = e * this.size + t;
        this.data[r] = i, n && (this.reservedBit[r] = !0)
    }, r.prototype.get = function (e, t) {
        return this.data[e * this.size + t]
    }, r.prototype.xor = function (e, t, i) {
        this.data[e * this.size + t] ^= i
    }, r.prototype.isReserved = function (e, t) {
        return this.reservedBit[e * this.size + t]
    }, e.exports = r
}, function (e, t, i) {
    var n = i(209).getSymbolSize;
    t.getRowColCoords = function (e) {
        if (1 === e) return [];
        for (var t = Math.floor(e / 7) + 2, i = n(e), r = 145 === i ? 26 : 2 * Math.ceil((i - 13) / (2 * t - 2)), o = [i - 7], s = 1; s < t - 1; s++) o[s] = o[s - 1] - r;
        return o.push(6), o.reverse()
    }, t.getPositions = function (e) {
        for (var i = [], n = t.getRowColCoords(e), r = n.length, o = 0; o < r; o++) for (var s = 0; s < r; s++) 0 === o && 0 === s || 0 === o && s === r - 1 || o === r - 1 && 0 === s || i.push([n[o], n[s]]);
        return i
    }
}, function (e, t, i) {
    var n = i(209).getSymbolSize;
    t.getPositions = function (e) {
        var t = n(e);
        return [[0, 0], [t - 7, 0], [0, t - 7]]
    }
}, function (e, t) {
    t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var i = 3, n = 3, r = 40, o = 10;

    function s(e, i, n) {
        switch (e) {
            case t.Patterns.PATTERN000:
                return (i + n) % 2 == 0;
            case t.Patterns.PATTERN001:
                return i % 2 == 0;
            case t.Patterns.PATTERN010:
                return n % 3 == 0;
            case t.Patterns.PATTERN011:
                return (i + n) % 3 == 0;
            case t.Patterns.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(n / 3)) % 2 == 0;
            case t.Patterns.PATTERN101:
                return i * n % 2 + i * n % 3 == 0;
            case t.Patterns.PATTERN110:
                return (i * n % 2 + i * n % 3) % 2 == 0;
            case t.Patterns.PATTERN111:
                return (i * n % 3 + (i + n) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + e)
        }
    }

    t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
    }, t.from = function (e) {
        return t.isValid(e) ? parseInt(e, 10) : void 0
    }, t.getPenaltyN1 = function (e) {
        for (var t = e.size, n = 0, r = 0, o = 0, s = null, a = null, l = 0; l < t; l++) {
            r = o = 0, s = a = null;
            for (var c = 0; c < t; c++) {
                var u = e.get(l, c);
                u === s ? r++ : (r >= 5 && (n += i + (r - 5)), s = u, r = 1), (u = e.get(c, l)) === a ? o++ : (o >= 5 && (n += i + (o - 5)), a = u, o = 1)
            }
            r >= 5 && (n += i + (r - 5)), o >= 5 && (n += i + (o - 5))
        }
        return n
    }, t.getPenaltyN2 = function (e) {
        for (var t = e.size, i = 0, r = 0; r < t - 1; r++) for (var o = 0; o < t - 1; o++) {
            var s = e.get(r, o) + e.get(r, o + 1) + e.get(r + 1, o) + e.get(r + 1, o + 1);
            4 !== s && 0 !== s || i++
        }
        return i * n
    }, t.getPenaltyN3 = function (e) {
        for (var t = e.size, i = 0, n = 0, o = 0, s = 0; s < t; s++) {
            n = o = 0;
            for (var a = 0; a < t; a++) n = n << 1 & 2047 | e.get(s, a), a >= 10 && (1488 === n || 93 === n) && i++, o = o << 1 & 2047 | e.get(a, s), a >= 10 && (1488 === o || 93 === o) && i++
        }
        return i * r
    }, t.getPenaltyN4 = function (e) {
        for (var t = 0, i = e.data.length, n = 0; n < i; n++) t += e.data[n];
        return Math.abs(Math.ceil(100 * t / i / 5) - 10) * o
    }, t.applyMask = function (e, t) {
        for (var i = t.size, n = 0; n < i; n++) for (var r = 0; r < i; r++) t.isReserved(r, n) || t.xor(r, n, s(e, r, n))
    }, t.getBestMask = function (e, i) {
        for (var n = Object.keys(t.Patterns).length, r = 0, o = 1 / 0, s = 0; s < n; s++) {
            i(s), t.applyMask(s, e);
            var a = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
            t.applyMask(s, e), a < o && (o = a, r = s)
        }
        return r
    }
}, function (e, t, i) {
    var n = i(240), r = i(1077);

    function o(e) {
        this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
    }

    o.prototype.initialize = function (e) {
        this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
    }, o.prototype.encode = function (e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        var t = new n(this.degree);
        t.fill(0);
        var i = n.concat([e, t], e.length + this.degree), o = r.mod(i, this.genPoly), s = this.degree - o.length;
        if (s > 0) {
            var a = new n(this.degree);
            return a.fill(0), o.copy(a, s), a
        }
        return o
    }, e.exports = o
}, function (e, t, i) {
    var n = i(240), r = i(1078);
    t.mul = function (e, t) {
        var i = new n(e.length + t.length - 1);
        i.fill(0);
        for (var o = 0; o < e.length; o++) for (var s = 0; s < t.length; s++) i[o + s] ^= r.mul(e[o], t[s]);
        return i
    }, t.mod = function (e, t) {
        for (var i = new n(e); i.length - t.length >= 0;) {
            for (var o = i[0], s = 0; s < t.length; s++) i[s] ^= r.mul(t[s], o);
            for (var a = 0; a < i.length && 0 === i[a];) a++;
            i = i.slice(a)
        }
        return i
    }, t.generateECPolynomial = function (e) {
        for (var i = new n([1]), o = 0; o < e; o++) i = t.mul(i, [1, r.exp(o)]);
        return i
    }
}, function (e, t, i) {
    var n = i(240);
    if (n.alloc) var r = n.alloc(512), o = n.alloc(256); else r = new n(512), o = new n(256);
    !function () {
        for (var e = 1, t = 0; t < 255; t++) r[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
        for (t = 255; t < 512; t++) r[t] = r[t - 255]
    }(), t.log = function (e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return o[e]
    }, t.exp = function (e) {
        return r[e]
    }, t.mul = function (e, t) {
        return 0 === e || 0 === t ? 0 : r[o[e] + o[t]]
    }
}, function (e, t, i) {
    var n = i(209), r = i(756), o = i(611), s = i(210), a = i(757), l = i(759), c = n.getBCHDigit(7973);

    function u(e, t) {
        return s.getCharCountIndicator(e, t) + 4
    }

    function d(e, t) {
        var i = 0;
        return e.forEach(function (e) {
            var n = u(e.mode, t);
            i += n + e.getBitsLength()
        }), i
    }

    t.from = function (e, t) {
        return a.isValid(e) ? parseInt(e, 10) : t
    }, t.getCapacity = function (e, t, i) {
        if (!a.isValid(e)) throw new Error("Invalid QR Code version");
        void 0 === i && (i = s.BYTE);
        var o = 8 * (n.getSymbolTotalCodewords(e) - r.getTotalCodewordsCount(e, t));
        if (i === s.MIXED) return o;
        var l = o - u(i, e);
        switch (i) {
            case s.NUMERIC:
                return Math.floor(l / 10 * 3);
            case s.ALPHANUMERIC:
                return Math.floor(l / 11 * 2);
            case s.KANJI:
                return Math.floor(l / 13);
            case s.BYTE:
            default:
                return Math.floor(l / 8)
        }
    }, t.getBestVersionForData = function (e, i) {
        var n, r = o.from(i, o.M);
        if (l(e)) {
            if (e.length > 1) return function (e, i) {
                for (var n = 1; n <= 40; n++) if (d(e, n) <= t.getCapacity(n, i, s.MIXED)) return n
            }(e, r);
            if (0 === e.length) return 1;
            n = e[0]
        } else n = e;
        return function (e, i, n) {
            for (var r = 1; r <= 40; r++) if (i <= t.getCapacity(r, n, e)) return r
        }(n.mode, n.getLength(), r)
    }, t.getEncodedBits = function (e) {
        if (!a.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
        for (var t = e << 12; n.getBCHDigit(t) - c >= 0;) t ^= 7973 << n.getBCHDigit(t) - c;
        return e << 12 | t
    }
}, function (e, t, i) {
    var n = i(209), r = n.getBCHDigit(1335);
    t.getEncodedBits = function (e, t) {
        for (var i = e.bit << 3 | t, o = i << 10; n.getBCHDigit(o) - r >= 0;) o ^= 1335 << n.getBCHDigit(o) - r;
        return 21522 ^ (i << 10 | o)
    }
}, function (e, t, i) {
    var n = i(210), r = i(1082), o = i(1083), s = i(1084), a = i(1085), l = i(758), c = i(209), u = i(1086);

    function d(e) {
        return unescape(encodeURIComponent(e)).length
    }

    function h(e, t, i) {
        for (var n, r = []; null !== (n = e.exec(i));) r.push({
            data: n[0],
            index: n.index,
            mode: t,
            length: n[0].length
        });
        return r
    }

    function f(e) {
        var t, i, r = h(l.NUMERIC, n.NUMERIC, e), o = h(l.ALPHANUMERIC, n.ALPHANUMERIC, e);
        return c.isKanjiModeEnabled() ? (t = h(l.BYTE, n.BYTE, e), i = h(l.KANJI, n.KANJI, e)) : (t = h(l.BYTE_KANJI, n.BYTE, e), i = []), r.concat(o, t, i).sort(function (e, t) {
            return e.index - t.index
        }).map(function (e) {
            return {data: e.data, mode: e.mode, length: e.length}
        })
    }

    function p(e, t) {
        switch (t) {
            case n.NUMERIC:
                return r.getBitsLength(e);
            case n.ALPHANUMERIC:
                return o.getBitsLength(e);
            case n.KANJI:
                return a.getBitsLength(e);
            case n.BYTE:
                return s.getBitsLength(e)
        }
    }

    function v(e, t) {
        var i, l = n.getBestModeForData(e);
        if ((i = n.from(t, l)) !== n.BYTE && i.bit < l.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(i) + ".\n Suggested mode is: " + n.toString(l));
        switch (i !== n.KANJI || c.isKanjiModeEnabled() || (i = n.BYTE), i) {
            case n.NUMERIC:
                return new r(e);
            case n.ALPHANUMERIC:
                return new o(e);
            case n.KANJI:
                return new a(e);
            case n.BYTE:
                return new s(e)
        }
    }

    t.fromArray = function (e) {
        return e.reduce(function (e, t) {
            return "string" == typeof t ? e.push(v(t, null)) : t.data && e.push(v(t.data, t.mode)), e
        }, [])
    }, t.fromString = function (e, i) {
        for (var r = function (e, t) {
            for (var i = {}, r = {start: {}}, o = ["start"], s = 0; s < e.length; s++) {
                for (var a = e[s], l = [], c = 0; c < a.length; c++) {
                    var u = a[c], d = "" + s + c;
                    l.push(d), i[d] = {node: u, lastCount: 0}, r[d] = {};
                    for (var h = 0; h < o.length; h++) {
                        var f = o[h];
                        i[f] && i[f].node.mode === u.mode ? (r[f][d] = p(i[f].lastCount + u.length, u.mode) - p(i[f].lastCount, u.mode), i[f].lastCount += u.length) : (i[f] && (i[f].lastCount = u.length), r[f][d] = p(u.length, u.mode) + 4 + n.getCharCountIndicator(u.mode, t))
                    }
                }
                o = l
            }
            for (h = 0; h < o.length; h++) r[o[h]].end = 0;
            return {map: r, table: i}
        }(function (e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var r = e[i];
                switch (r.mode) {
                    case n.NUMERIC:
                        t.push([r, {data: r.data, mode: n.ALPHANUMERIC, length: r.length}, {
                            data: r.data,
                            mode: n.BYTE,
                            length: r.length
                        }]);
                        break;
                    case n.ALPHANUMERIC:
                        t.push([r, {data: r.data, mode: n.BYTE, length: r.length}]);
                        break;
                    case n.KANJI:
                        t.push([r, {data: r.data, mode: n.BYTE, length: d(r.data)}]);
                        break;
                    case n.BYTE:
                        t.push([{data: r.data, mode: n.BYTE, length: d(r.data)}])
                }
            }
            return t
        }(f(e, c.isKanjiModeEnabled())), i), o = u.find_path(r.map, "start", "end"), s = [], a = 1; a < o.length - 1; a++) s.push(r.table[o[a]].node);
        return t.fromArray(function (e) {
            return e.reduce(function (e, t) {
                var i = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return i && i.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
            }, [])
        }(s))
    }, t.rawSplit = function (e) {
        return t.fromArray(f(e, c.isKanjiModeEnabled()))
    }
}, function (e, t, i) {
    var n = i(210);

    function r(e) {
        this.mode = n.NUMERIC, this.data = e.toString()
    }

    r.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
    }, r.prototype.getLength = function () {
        return this.data.length
    }, r.prototype.getBitsLength = function () {
        return r.getBitsLength(this.data.length)
    }, r.prototype.write = function (e) {
        var t, i, n;
        for (t = 0; t + 3 <= this.data.length; t += 3) i = this.data.substr(t, 3), n = parseInt(i, 10), e.put(n, 10);
        var r = this.data.length - t;
        r > 0 && (i = this.data.substr(t), n = parseInt(i, 10), e.put(n, 3 * r + 1))
    }, e.exports = r
}, function (e, t, i) {
    var n = i(210),
        r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

    function o(e) {
        this.mode = n.ALPHANUMERIC, this.data = e
    }

    o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + e % 2 * 6
    }, o.prototype.getLength = function () {
        return this.data.length
    }, o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
    }, o.prototype.write = function (e) {
        var t;
        for (t = 0; t + 2 <= this.data.length; t += 2) {
            var i = 45 * r.indexOf(this.data[t]);
            i += r.indexOf(this.data[t + 1]), e.put(i, 11)
        }
        this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6)
    }, e.exports = o
}, function (e, t, i) {
    var n = i(240), r = i(210);

    function o(e) {
        this.mode = r.BYTE, this.data = new n(e)
    }

    o.getBitsLength = function (e) {
        return 8 * e
    }, o.prototype.getLength = function () {
        return this.data.length
    }, o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
    }, o.prototype.write = function (e) {
        for (var t = 0, i = this.data.length; t < i; t++) e.put(this.data[t], 8)
    }, e.exports = o
}, function (e, t, i) {
    var n = i(210), r = i(209);

    function o(e) {
        this.mode = n.KANJI, this.data = e
    }

    o.getBitsLength = function (e) {
        return 13 * e
    }, o.prototype.getLength = function () {
        return this.data.length
    }, o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
    }, o.prototype.write = function (e) {
        var t;
        for (t = 0; t < this.data.length; t++) {
            var i = r.toSJIS(this.data[t]);
            if (i >= 33088 && i <= 40956) i -= 33088; else {
                if (!(i >= 57408 && i <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                i -= 49472
            }
            i = 192 * (i >>> 8 & 255) + (255 & i), e.put(i, 13)
        }
    }, e.exports = o
}, function (e, t, i) {
    "use strict";
    var n = {
        single_source_shortest_paths: function (e, t, i) {
            var r = {}, o = {};
            o[t] = 0;
            var s, a, l, c, u, d, h, f = n.PriorityQueue.make();
            for (f.push(t, 0); !f.empty();) for (l in a = (s = f.pop()).value, c = s.cost, u = e[a] || {}) u.hasOwnProperty(l) && (d = c + u[l], h = o[l], (void 0 === o[l] || h > d) && (o[l] = d, f.push(l, d), r[l] = a));
            if (void 0 !== i && void 0 === o[i]) {
                var p = ["Could not find a path from ", t, " to ", i, "."].join("");
                throw new Error(p)
            }
            return r
        }, extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var i = [], n = t; n;) i.push(n), e[n], n = e[n];
            return i.reverse(), i
        }, find_path: function (e, t, i) {
            var r = n.single_source_shortest_paths(e, t, i);
            return n.extract_shortest_path_from_predecessor_list(r, i)
        }, PriorityQueue: {
            make: function (e) {
                var t, i = n.PriorityQueue, r = {};
                for (t in e = e || {}, i) i.hasOwnProperty(t) && (r[t] = i[t]);
                return r.queue = [], r.sorter = e.sorter || i.default_sorter, r
            }, default_sorter: function (e, t) {
                return e.cost - t.cost
            }, push: function (e, t) {
                var i = {value: e, cost: t};
                this.queue.push(i), this.queue.sort(this.sorter)
            }, pop: function () {
                return this.queue.shift()
            }, empty: function () {
                return 0 === this.queue.length
            }
        }
    };
    e.exports = n
}, function (e, t, i) {
    var n = i(17), r = i(1088).PNG, o = i(289);
    t.render = function (e, t) {
        var i = o.getOptions(t), n = i.rendererOpts, s = o.getImageWidth(e.modules.size, i);
        n.width = s, n.height = s;
        var a = new r(n);
        return o.qrToImageData(a.data, e, i), a
    }, t.renderToDataURL = function (e, i, n) {
        void 0 === n && (n = i, i = void 0), t.renderToBuffer(e, i, function (e, t) {
            e && n(e);
            var i = "data:image/png;base64,";
            i += t.toString("base64"), n(null, i)
        })
    }, t.renderToBuffer = function (e, i, n) {
        void 0 === n && (n = i, i = void 0);
        var r = t.render(e, i), o = [];
        r.on("error", n), r.on("data", function (e) {
            o.push(e)
        }), r.on("end", function () {
            n(null, Buffer.concat(o))
        }), r.pack()
    }, t.renderToFile = function (e, i, r, o) {
        void 0 === o && (o = r, r = void 0);
        var s = n.createWriteStream(e);
        s.on("error", o), s.on("close", o), t.renderToFileStream(s, i, r)
    }, t.renderToFileStream = function (e, i, n) {
        t.render(i, n).pack().pipe(e)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(6), r = i(81), o = i(1089), s = i(1091), a = i(1094), l = t.PNG = function (e) {
        r.call(this), e = e || {}, this.width = 0 | e.width, this.height = 0 | e.height, this.data = this.width > 0 && this.height > 0 ? new Buffer(4 * this.width * this.height) : null, e.fill && this.data && this.data.fill(0), this.gamma = 0, this.readable = this.writable = !0, this._parser = new o(e), this._parser.on("error", this.emit.bind(this, "error")), this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), this._parser.on("gamma", this._gamma.bind(this)), this._parser.on("parsed", function (e) {
            this.data = e, this.emit("parsed", e)
        }.bind(this)), this._packer = new s(e), this._packer.on("data", this.emit.bind(this, "data")), this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), this._packer.on("error", this.emit.bind(this, "error"))
    };
    n.inherits(l, r), l.sync = a, l.prototype.pack = function () {
        return this.data && this.data.length ? (process.nextTick(function () {
            this._packer.pack(this.data, this.width, this.height, this.gamma)
        }.bind(this)), this) : (this.emit("error", "No data provided"), this)
    }, l.prototype.parse = function (e, t) {
        var i, n;
        t && (i = function (e) {
            this.removeListener("error", n), this.data = e, t(null, this)
        }.bind(this), n = function (e) {
            this.removeListener("parsed", i), t(e, null)
        }.bind(this), this.once("parsed", i), this.once("error", n));
        return this.end(e), this
    }, l.prototype.write = function (e) {
        return this._parser.write(e), !0
    }, l.prototype.end = function (e) {
        this._parser.end(e)
    }, l.prototype._metadata = function (e) {
        this.width = e.width, this.height = e.height, this.emit("metadata", e)
    }, l.prototype._gamma = function (e) {
        this.gamma = e
    }, l.prototype._handleClose = function () {
        this._parser.writable || this._packer.readable || this.emit("close")
    }, l.bitblt = function (e, t, i, n, r, o, s, a) {
        if (n |= 0, r |= 0, o |= 0, s |= 0, a |= 0, (i |= 0) > e.width || n > e.height || i + r > e.width || n + o > e.height) throw new Error("bitblt reading outside image");
        if (s > t.width || a > t.height || s + r > t.width || a + o > t.height) throw new Error("bitblt writing outside image");
        for (var l = 0; l < o; l++) e.data.copy(t.data, (a + l) * t.width + s << 2, (n + l) * e.width + i << 2, (n + l) * e.width + i + r << 2)
    }, l.prototype.bitblt = function (e, t, i, n, r, o, s) {
        return l.bitblt(this, e, t, i, n, r, o, s), this
    }, l.adjustGamma = function (e) {
        if (e.gamma) {
            for (var t = 0; t < e.height; t++) for (var i = 0; i < e.width; i++) for (var n = e.width * t + i << 2, r = 0; r < 3; r++) {
                var o = e.data[n + r] / 255;
                o = Math.pow(o, 1 / 2.2 / e.gamma), e.data[n + r] = Math.round(255 * o)
            }
            e.gamma = 0
        }
    }, l.prototype.adjustGamma = function () {
        l.adjustGamma(this)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(6), r = i(55), o = i(760), s = i(1090), a = i(764), l = i(766), c = i(767), u = e.exports = function (e) {
        o.call(this), this._parser = new a(e, {
            read: this.read.bind(this),
            error: this._handleError.bind(this),
            metadata: this._handleMetaData.bind(this),
            gamma: this.emit.bind(this, "gamma"),
            palette: this._handlePalette.bind(this),
            transColor: this._handleTransColor.bind(this),
            finished: this._finished.bind(this),
            inflateData: this._inflateData.bind(this)
        }), this._options = e, this.writable = !0, this._parser.start()
    };
    n.inherits(u, o), u.prototype._handleError = function (e) {
        this.emit("error", e), this.writable = !1, this.destroy(), this._inflate && this._inflate.destroy && this._inflate.destroy(), this._filter && (this._filter.destroy(), this._filter.on("error", function () {
        })), this.errord = !0
    }, u.prototype._inflateData = function (e) {
        if (!this._inflate) if (this._bitmapInfo.interlace) this._inflate = r.createInflate(), this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), this._inflate.pipe(this._filter); else {
            var t = (1 + (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3)) * this._bitmapInfo.height,
                i = Math.max(t, r.Z_MIN_CHUNK);
            this._inflate = r.createInflate({chunkSize: i});
            var n = t, o = this.emit.bind(this, "error");
            this._inflate.on("error", function (e) {
                n && o(e)
            }), this._filter.on("complete", this._complete.bind(this));
            var s = this._filter.write.bind(this._filter);
            this._inflate.on("data", function (e) {
                n && (e.length > n && (e = e.slice(0, n)), n -= e.length, s(e))
            }), this._inflate.on("end", this._filter.end.bind(this._filter))
        }
        this._inflate.write(e)
    }, u.prototype._handleMetaData = function (e) {
        this.emit("metadata", e), this._bitmapInfo = Object.create(e), this._filter = new s(this._bitmapInfo)
    }, u.prototype._handleTransColor = function (e) {
        this._bitmapInfo.transColor = e
    }, u.prototype._handlePalette = function (e) {
        this._bitmapInfo.palette = e
    }, u.prototype._finished = function () {
        this.errord || (this._inflate ? this._inflate.end() : this.emit("error", "No Inflate block"), this.destroySoon())
    }, u.prototype._complete = function (e) {
        if (!this.errord) {
            try {
                var t = l.dataToBitMap(e, this._bitmapInfo), i = c(t, this._bitmapInfo);
                t = null
            } catch (e) {
                return void this._handleError(e)
            }
            this.emit("parsed", i)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(6), r = i(760), o = i(761), s = e.exports = function (e) {
        r.call(this);
        var t = [], i = this;
        this._filter = new o(e, {
            read: this.read.bind(this), write: function (e) {
                t.push(e)
            }, complete: function () {
                i.emit("complete", Buffer.concat(t))
            }
        }), this._filter.start()
    };
    n.inherits(s, r)
}, function (e, t, i) {
    "use strict";
    var n = i(6), r = i(81), o = i(265), s = i(768), a = e.exports = function (e) {
        r.call(this);
        var t = e || {};
        this._packer = new s(t), this._deflate = this._packer.createDeflate(), this.readable = !0
    };
    n.inherits(a, r), a.prototype.pack = function (e, t, i, n) {
        this.emit("data", new Buffer(o.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(t, i)), n && this.emit("data", this._packer.packGAMA(n));
        var r = this._packer.filterData(e, t, i);
        this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on("data", function (e) {
            this.emit("data", this._packer.packIDAT(e))
        }.bind(this)), this._deflate.on("end", function () {
            this.emit("data", this._packer.packIEND()), this.emit("end")
        }.bind(this)), this._deflate.end(r)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(265);
    e.exports = function (e, t, i, r) {
        var o, s = -1 !== [n.COLORTYPE_COLOR_ALPHA, n.COLORTYPE_ALPHA].indexOf(r.colorType);
        if (r.colorType === r.inputColorType) {
            var a = (o = new ArrayBuffer(2), new DataView(o).setInt16(0, 256, !0), 256 !== new Int16Array(o)[0]);
            if (8 === r.bitDepth || 16 === r.bitDepth && a) return e
        }
        var l = 16 !== r.bitDepth ? e : new Uint16Array(e.buffer), c = 255,
            u = n.COLORTYPE_TO_BPP_MAP[r.inputColorType];
        4 != u || r.inputHasAlpha || (u = 3);
        var d = n.COLORTYPE_TO_BPP_MAP[r.colorType];
        16 === r.bitDepth && (c = 65535, d *= 2);
        var h = new Buffer(t * i * d), f = 0, p = 0, v = r.bgColor || {};

        function m(e, t) {
            var i, o, a, l = c;
            switch (r.inputColorType) {
                case n.COLORTYPE_COLOR_ALPHA:
                    l = e[t + 3], i = e[t], o = e[t + 1], a = e[t + 2];
                    break;
                case n.COLORTYPE_COLOR:
                    i = e[t], o = e[t + 1], a = e[t + 2];
                    break;
                case n.COLORTYPE_ALPHA:
                    l = e[t + 1], o = i = e[t], a = i;
                    break;
                case n.COLORTYPE_GRAYSCALE:
                    o = i = e[t], a = i;
                    break;
                default:
                    throw new Error("input color type:" + r.inputColorType + " is not supported at present")
            }
            return r.inputHasAlpha && (s || (l /= c, i = Math.min(Math.max(Math.round((1 - l) * v.red + l * i), 0), c), o = Math.min(Math.max(Math.round((1 - l) * v.green + l * o), 0), c), a = Math.min(Math.max(Math.round((1 - l) * v.blue + l * a), 0), c))), {
                red: i,
                green: o,
                blue: a,
                alpha: l
            }
        }

        void 0 === v.red && (v.red = c), void 0 === v.green && (v.green = c), void 0 === v.blue && (v.blue = c);
        for (var g = 0; g < i; g++) for (var _ = 0; _ < t; _++) {
            var y = m(l, f);
            switch (r.colorType) {
                case n.COLORTYPE_COLOR_ALPHA:
                case n.COLORTYPE_COLOR:
                    8 === r.bitDepth ? (h[p] = y.red, h[p + 1] = y.green, h[p + 2] = y.blue, s && (h[p + 3] = y.alpha)) : (h.writeUInt16BE(y.red, p), h.writeUInt16BE(y.green, p + 2), h.writeUInt16BE(y.blue, p + 4), s && h.writeUInt16BE(y.alpha, p + 6));
                    break;
                case n.COLORTYPE_ALPHA:
                case n.COLORTYPE_GRAYSCALE:
                    var b = (y.red + y.green + y.blue) / 3;
                    8 === r.bitDepth ? (h[p] = b, s && (h[p + 1] = y.alpha)) : (h.writeUInt16BE(b, p), s && h.writeUInt16BE(y.alpha, p + 2))
            }
            f += u, p += d
        }
        return h
    }
}, function (e, t, i) {
    "use strict";
    var n = i(763);
    var r = {
        0: function (e, t, i, n, r) {
            for (var o = 0; o < i; o++) n[r + o] = e[t + o]
        }, 1: function (e, t, i, n, r, o) {
            for (var s = 0; s < i; s++) {
                var a = s >= o ? e[t + s - o] : 0, l = e[t + s] - a;
                n[r + s] = l
            }
        }, 2: function (e, t, i, n, r) {
            for (var o = 0; o < i; o++) {
                var s = t > 0 ? e[t + o - i] : 0, a = e[t + o] - s;
                n[r + o] = a
            }
        }, 3: function (e, t, i, n, r, o) {
            for (var s = 0; s < i; s++) {
                var a = s >= o ? e[t + s - o] : 0, l = t > 0 ? e[t + s - i] : 0, c = e[t + s] - (a + l >> 1);
                n[r + s] = c
            }
        }, 4: function (e, t, i, r, o, s) {
            for (var a = 0; a < i; a++) {
                var l = a >= s ? e[t + a - s] : 0, c = t > 0 ? e[t + a - i] : 0,
                    u = t > 0 && a >= s ? e[t + a - (i + s)] : 0, d = e[t + a] - n(l, c, u);
                r[o + a] = d
            }
        }
    }, o = {
        0: function (e, t, i) {
            for (var n = 0, r = t + i, o = t; o < r; o++) n += Math.abs(e[o]);
            return n
        }, 1: function (e, t, i, n) {
            for (var r = 0, o = 0; o < i; o++) {
                var s = o >= n ? e[t + o - n] : 0, a = e[t + o] - s;
                r += Math.abs(a)
            }
            return r
        }, 2: function (e, t, i) {
            for (var n = 0, r = t + i, o = t; o < r; o++) {
                var s = t > 0 ? e[o - i] : 0, a = e[o] - s;
                n += Math.abs(a)
            }
            return n
        }, 3: function (e, t, i, n) {
            for (var r = 0, o = 0; o < i; o++) {
                var s = o >= n ? e[t + o - n] : 0, a = t > 0 ? e[t + o - i] : 0, l = e[t + o] - (s + a >> 1);
                r += Math.abs(l)
            }
            return r
        }, 4: function (e, t, i, r) {
            for (var o = 0, s = 0; s < i; s++) {
                var a = s >= r ? e[t + s - r] : 0, l = t > 0 ? e[t + s - i] : 0,
                    c = t > 0 && s >= r ? e[t + s - (i + r)] : 0, u = e[t + s] - n(a, l, c);
                o += Math.abs(u)
            }
            return o
        }
    };
    e.exports = function (e, t, i, n, s) {
        var a;
        if ("filterType" in n && -1 !== n.filterType) {
            if ("number" != typeof n.filterType) throw new Error("unrecognised filter types");
            a = [n.filterType]
        } else a = [0, 1, 2, 3, 4];
        16 === n.bitDepth && (s *= 2);
        for (var l = t * s, c = 0, u = 0, d = new Buffer((l + 1) * i), h = a[0], f = 0; f < i; f++) {
            if (a.length > 1) for (var p = 1 / 0, v = 0; v < a.length; v++) {
                var m = o[a[v]](e, u, l, s);
                m < p && (h = a[v], p = m)
            }
            d[c] = h, c++, r[h](e, u, l, d, c, s), c += l, u += l
        }
        return d
    }
}, function (e, t, i) {
    "use strict";
    var n = i(1095), r = i(1098);
    t.read = function (e, t) {
        return n(e, t || {})
    }, t.write = function (e, t) {
        return r(e, t)
    }
}, function (e, t, i) {
    "use strict";
    var n = !0, r = i(55), o = i(1096);
    r.deflateSync || (n = !1);
    var s = i(769), a = i(1097), l = i(764), c = i(766), u = i(767);
    e.exports = function (e, t) {
        if (!n) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
        var i, d, h;
        var f = [];
        var p = new s(e);
        if (new l(t, {
            read: p.read.bind(p), error: function (e) {
                i = e
            }, metadata: function (e) {
                d = e
            }, gamma: function (e) {
                h = e
            }, palette: function (e) {
                d.palette = e
            }, transColor: function (e) {
                d.transColor = e
            }, inflateData: function (e) {
                f.push(e)
            }
        }).start(), p.process(), i) throw i;
        var v, m = Buffer.concat(f);
        if (f.length = 0, d.interlace) v = r.inflateSync(m); else {
            var g = (1 + (d.width * d.bpp * d.depth + 7 >> 3)) * d.height;
            v = o(m, {chunkSize: g, maxLength: g})
        }
        if (m = null, !v || !v.length) throw new Error("bad png - invalid inflate data response");
        var _ = a.process(v, d);
        m = null;
        var y = c.dataToBitMap(_, d);
        _ = null;
        var b = u(y, d);
        return d.data = b, d.gamma = h || 0, d
    }
}, function (e, t, i) {
    "use strict";
    var n = i(91).ok, r = i(55), o = i(6), s = i(149).kMaxLength;

    function a(e) {
        if (!(this instanceof a)) return new a(e);
        e && e.chunkSize < r.Z_MIN_CHUNK && (e.chunkSize = r.Z_MIN_CHUNK), r.Inflate.call(this, e), this._offset = void 0 === this._offset ? this._outOffset : this._offset, this._buffer = this._buffer || this._outBuffer, e && null != e.maxLength && (this._maxLength = e.maxLength)
    }

    function l(e, t) {
        t && process.nextTick(t), e._handle && (e._handle.close(), e._handle = null)
    }

    function c(e, t) {
        return function (e, t) {
            if ("string" == typeof t && (t = Buffer.from(t)), !(t instanceof Buffer)) throw new TypeError("Not a string or buffer");
            var i = e._finishFlushFlag;
            return null == i && (i = r.Z_FINISH), e._processChunk(t, i)
        }(new a(t), e)
    }

    a.prototype._processChunk = function (e, t, i) {
        if ("function" == typeof i) return r.Inflate._processChunk.call(this, e, t, i);
        var o, a = this, c = e && e.length, u = this._chunkSize - this._offset, d = this._maxLength, h = 0, f = [],
            p = 0;

        function v(e, t) {
            if (!a._hadError) {
                var i = u - t;
                if (n(i >= 0, "have should not go down"), i > 0) {
                    var r = a._buffer.slice(a._offset, a._offset + i);
                    if (a._offset += i, r.length > d && (r = r.slice(0, d)), f.push(r), p += r.length, 0 === (d -= r.length)) return !1
                }
                return (0 === t || a._offset >= a._chunkSize) && (u = a._chunkSize, a._offset = 0, a._buffer = Buffer.allocUnsafe(a._chunkSize)), 0 === t && (h += c - e, c = e, !0)
            }
        }

        this.on("error", function (e) {
            o = e
        }), n(this._handle, "zlib binding closed");
        do {
            var m = this._handle.writeSync(t, e, h, c, this._buffer, this._offset, u);
            m = m || this._writeState
        } while (!this._hadError && v(m[0], m[1]));
        if (this._hadError) throw o;
        if (p >= s) throw l(this), new RangeError("Cannot create final Buffer. It would be larger than 0x" + s.toString(16) + " bytes");
        var g = Buffer.concat(f, p);
        return l(this), g
    }, o.inherits(a, r.Inflate), e.exports = t = c, t.Inflate = a, t.createInflate = function (e) {
        return new a(e)
    }, t.inflateSync = c
}, function (e, t, i) {
    "use strict";
    var n = i(769), r = i(761);
    t.process = function (e, t) {
        var i = [], o = new n(e);
        return new r(t, {
            read: o.read.bind(o), write: function (e) {
                i.push(e)
            }, complete: function () {
            }
        }).start(), o.process(), Buffer.concat(i)
    }
}, function (e, t, i) {
    "use strict";
    var n = !0, r = i(55);
    r.deflateSync || (n = !1);
    var o = i(265), s = i(768);
    e.exports = function (e, t) {
        if (!n) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
        var i = new s(t || {}), a = [];
        a.push(new Buffer(o.PNG_SIGNATURE)), a.push(i.packIHDR(e.width, e.height)), e.gamma && a.push(i.packGAMA(e.gamma));
        var l = i.filterData(e.data, e.width, e.height), c = r.deflateSync(l, i.getDeflateOptions());
        if (l = null, !c || !c.length) throw new Error("bad png - invalid compressed data response");
        return a.push(i.packIDAT(c)), a.push(i.packIEND()), Buffer.concat(a)
    }
}, function (e, t, i) {
    var n = i(289), r = {WW: " ", WB: "▄", BB: "█", BW: "▀"};
    t.render = function (e, t, i) {
        var o = e.modules.size, s = e.modules.data, a = n.getOptions(t), l = "",
            c = Array(o + 2 * a.margin + 1).join(r.WW);
        c = Array(a.margin / 2 + 1).join(c + "\n");
        var u, d, h = Array(a.margin + 1).join(r.WW);
        l += c;
        for (var f = 0; f < o; f += 2) {
            l += h;
            for (var p = 0; p < o; p++) {
                var v = s[f * o + p], m = s[(f + 1) * o + p];
                l += (d = m, (u = v) && d ? r.BB : u && !d ? r.BW : !u && d ? r.WB : r.WW)
            }
            l += h + "\n"
        }
        return l += c.slice(0, -1), "function" == typeof i && i(null, l), l
    }, t.renderToFile = function (e, n, r, o) {
        void 0 === o && (o = r, r = void 0);
        var s = i(17), a = t.render(n, r);
        s.writeFile(e, a, o)
    }
}, function (e, t) {
    t.render = function (e, t, i) {
        var n = e.modules.size, r = e.modules.data, o = "[47m  [0m", s = "", a = Array(n + 3).join(o),
            l = Array(2).join(o);
        s += a + "\n";
        for (var c = 0; c < n; ++c) {
            s += o;
            for (var u = 0; u < n; u++) s += r[c * n + u] ? "[40m  [0m" : o;
            s += l + "\n"
        }
        return s += a + "\n", "function" == typeof i && i(null, s), s
    }
}, function (e, t, i) {
    var n = i(770);
    t.render = n.render, t.renderToFile = function (e, n, r, o) {
        void 0 === o && (o = r, r = void 0);
        var s = i(17),
            a = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + t.render(n, r);
        s.writeFile(e, a, o)
    }
}, function (e, t, i) {
    var n = i(1103), r = i(755), o = i(1104), s = i(770);

    function a(e, t, i, o, s) {
        var a = [].slice.call(arguments, 1), l = a.length, c = "function" == typeof a[l - 1];
        if (!c && !n()) throw new Error("Callback required as last argument");
        if (!c) {
            if (l < 1) throw new Error("Too few arguments provided");
            return 1 === l ? (i = t, t = o = void 0) : 2 !== l || t.getContext || (o = i, i = t, t = void 0), new Promise(function (n, s) {
                try {
                    var a = r.create(i, o);
                    n(e(a, t, o))
                } catch (e) {
                    s(e)
                }
            })
        }
        if (l < 2) throw new Error("Too few arguments provided");
        2 === l ? (s = i, i = t, t = o = void 0) : 3 === l && (t.getContext && void 0 === s ? (s = o, o = void 0) : (s = o, o = i, i = t, t = void 0));
        try {
            var u = r.create(i, o);
            s(null, e(u, t, o))
        } catch (e) {
            s(e)
        }
    }

    t.create = r.create, t.toCanvas = a.bind(null, o.render), t.toDataURL = a.bind(null, o.renderToDataURL), t.toString = a.bind(null, function (e, t, i) {
        return s.render(e, i)
    })
}, function (e, t) {
    e.exports = function () {
        return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
    }
}, function (e, t, i) {
    var n = i(289);
    t.render = function (e, t, i) {
        var r = i, o = t;
        void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (o = function () {
            try {
                return document.createElement("canvas")
            } catch (e) {
                throw new Error("You need to specify a canvas element")
            }
        }()), r = n.getOptions(r);
        var s = n.getImageWidth(e.modules.size, r), a = o.getContext("2d"), l = a.createImageData(s, s);
        return n.qrToImageData(l.data, e, r), function (e, t, i) {
            e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = i, t.width = i, t.style.height = i + "px", t.style.width = i + "px"
        }(a, o, s), a.putImageData(l, 0, 0), o
    }, t.renderToDataURL = function (e, i, n) {
        var r = n;
        void 0 !== r || i && i.getContext || (r = i, i = void 0), r || (r = {});
        var o = t.render(e, i, r), s = r.type || "image/png", a = r.rendererOpts || {};
        return o.toDataURL(s, a.quality)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(1288);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1290);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1297);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1299);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1301);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1304);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1306);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1309);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1312);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1316);
    i.n(n).a
}, function (e, t, i) {
    "use strict";
    var n = i(1318);
    i.n(n).a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
}, , function (e, t) {
}, , , , function (e, t) {
}, , , function (e, t) {
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , , function (e, t) {
}, , , , function (e, t) {
}, , function (e, t) {
}]);
//# sourceMappingURL=renderer.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2019/03/17 */
/*! https://www.luochenzhimu.com */