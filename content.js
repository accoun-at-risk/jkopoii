var f;
if (!window.__idm_init__ && navigator.platform.startsWith("Win") && "html" == document.documentElement.localName) {
    window.__idm_init__ = !0;
    String.prototype.replaceAll || (String.prototype.replaceAll = function(a, b) {
        return this.split(a).join(b)
    }
    );
    Array.prototype.includes || (Array.prototype.includes = function(a, b) {
        return 0 <= this.indexOf(a, b)
    }
    );
    Array.prototype.G || (Array.prototype.G = function(a) {
        0 > a && (a += this.length);
        return this[a]
    }
    );
    NodeList.prototype[Symbol.iterator] || (NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
    HTMLCollection.prototype[Symbol.iterator] || (HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
    "undefined" == typeof browser && (browser = chrome);
    navigator.userAgent.includes("Edge/");
    navigator.userAgent.includes("Firefox/");
    navigator.userAgent.includes("OPR/");
    var w = RegExp.prototype.test
      , z = Array.from
      , A = Array.prototype.includes
      , G = Function.call.bind(Array.prototype.slice)
      , H = Function.apply.bind(Array.prototype.push)
      , I = Function.call.bind(Array.prototype.forEach)
      , J = "dotAll"in RegExp.prototype ? "s" : ""
      , L = {
        16: !0,
        17: !0,
        18: !0,
        45: !0,
        46: !0
    }
      , M = A.bind(["video", "audio", "object", "embed"])
      , O = /(?!)/
      , aa = / *[$~]([<>{}&*+=@|!#%:?^~-])(\d*) */
      , ba = w.bind(/^rgba?\(\d+,\s*\d+,\s*\d+,\s*0\)/)
      , P = window.self === window.top
      , Q = window.origin || document.origin || location.origin
      , R = location
      , S = location.hostname.toLowerCase() + location.pathname + location.search
      , X = location.hostname.toLowerCase().split(".").G(-2)
      , Y = "idmrs://" + X + "/"
      , ca = X ? RegExp("^(?:\\(\\d+\\)\\s+)?(.+?)\\s+[-|@]+\\s*" + X + "$", "i") : O;
    function T() {
        browser.runtime.getFrameId ? this.Z = browser.runtime.getFrameId(window) : P && (this.Z = 0);
        this.ja = [];
        this.aa = [];
        this.fa = [];
        this.f = {};
        this.Ya();
        window.__idm_connect__ = this.Ya.bind(this, !0);
        this.b(1, window, "resize", this.Wb);
        this.b(1, window, "scroll", this.Xb);
        this.b(1, window, "blur", this.Ob);
        this.b(1, window, "keydown", this.fb, !0);
        this.b(1, window, "keyup", this.fb, !0);
        this.b(1, window, "mousedown", this.Qb, !0);
        this.b(1, window, "mouseup", this.Sb, !0);
        this.b(1, window, "mousemove", this.Rb, !0);
        this.b(1, window, "click", this.Pb, !0);
        this.b(1, document, "beforeload", this.Mb, !0);
        this.b(1, document, "DOMContentLoaded", this.eb);
        "interactive" != document.readyState && "complete" != document.readyState || this.eb()
    }
    f = T.prototype;
    f.i = 0;
    f.s = 0;
    f.ka = -1;
    f.la = -1;
    f.ib = 1;
    f.O = 0;
    f.g = "";
    f.Ia = "";
    f.H = "";
    f.Oa = O;
    f.Ta = RegExp(E('\\olgpst\\.frg\\(\\{(?=.*?"RKCREVZRAG_SYNTF":)(?=.*?"FGF":(\\q{5,})\\o|)(?=.*?"QNGNFLAP_VQ":"(.+?)"|)(?=.*?"YBTTRQ_VA":(\\j+)\\o|)(?=.*?"RBZ_IVFVGBE_QNGN":"(.+?)"|)(?=.*?"IVFVGBE_QNGN":"(.+?)"|)(?=.*?"CYNLRE_WF_HEY":"(.+?)"|)'), J);
    f.I = O;
    f.Va = RegExp(E("^/(?:jngpu\\?(?:.*?&)?i=|fubegf/|rzorq/)([\\j-]{10,12})(?:[/?&#]|$)"));
    f.F = {};
    f.Pa = O;
    f.Qa = O;
    f.Ra = O;
    f.Sa = O;
    f.Ua = E('$> *[ebyr="znva"]:abg(uvqqra) ivqrb');
    f.R = E("$< qvi#vayvar-cerivrj-cynlre $< n#zrqvn-pbagnvare-yvax");
    f.Wa = E("$= lg.pbasvt_.RBZ_IVFVGBE_QNGN $= lgpst.qngn_.RBZ_IVFVGBE_QNGN $= lg.pbasvt_.IVFVGBE_QNGN $= lgpst.qngn_.IVFVGBE_QNGN");
    f.ua = O;
    f.pa = ":root:empty";
    f.sa = 'div[id^="mount_0_"] >div:is([class=""],:not([class])) >div[class=""] >div:first-child';
    f.m = ":root:empty";
    f.ta = ":root:empty";
    f.C = ":root:empty";
    f.o = "$< div >:not(:only-child):not(video:first-child,img:first-child:nth-last-child(2)) <";
    f.va = "$> div[data-video-id] $= data-video-id";
    f.oa = "a:not([target])";
    f.D = ":root:empty";
    f.ra = 4;
    f.qa = O;
    f.za = O;
    f.Ga = ":root:empty";
    f.Aa = '$& div.xxzkxad $& :scope >div[class] $& section main[role="main"] $& div.xw7yly9 >div >div[style]:only-child $& div >article <';
    f.Da = '$& div.xxzkxad $& :scope >div[class] $& section main[role="main"] $& div:first-child >div[role="button"][aria-hidden], article[role="presentation"] $& div:first-child >div[style]:first-child:empty < $& div[role="presentation"] >div >ul';
    f.Ha = "$& div.xxzkxad $& section.x5qyhuo $& :scope >div >div:only-child $& section >div";
    f.ya = '$+ article:scope, div.x1xfsgkm:scope $* main[role="main"] article, main[role="main"] >div >div.x1xfsgkm';
    f.Ca = '$& div[role="dialog"] div[role="dialog"] >div';
    f.P = "$* video";
    f.Ea = "$= poster $< <<<<<< $> div:scope >img:first-child, div[data-instancekey] div >img:first-child $= src";
    f.Fa = "*.return.return.memoizedProps.videoFBID";
    f.Ba = /\/(?:p|reel|reels|stories\/[\w.-]+)\/([\w-]{11}|\d{19})(?:[/?#]|$)/;
    f.Ja = O;
    f.Ka = /^(?:[^/]+|player\.vimeo\.com\/video)\/(\d{2,})/;
    f.Na = "$| video:scope $| video";
    f.La = "$> :scope >div.player";
    f.Ma = "$& div.vp-video $& div.vp-telecine";
    f.Ya = function(a) {
        this.gb(-1);
        this.a = a = browser.runtime.connect({
            name: (P ? "top" : "sub") + (a ? ":retry" : "") + ("file:" == location.protocol ? ":file" : "")
        });
        this.b(-1, a, "onMessage", this.Ub);
        this.b(-1, a, "onDisconnect", this.Tb)
    }
    ;
    f.Tb = function() {
        browser.runtime.lastError;
        this.gb();
        this.a = this.ba = null;
        window.__idm_init__ = !1;
        window.__idm_connect__ = null
    }
    ;
    f.Ub = function(a) {
        switch (a.shift()) {
        case 11:
            this.wb.apply(this, a);
            break;
        case 17:
            this.xb.apply(this, a);
            break;
        case 12:
            this.yb.apply(this, a);
            break;
        case 13:
            this.nb = a.shift();
            break;
        case 14:
            this.Bb.apply(this, a);
            break;
        case 15:
            this.Cb.apply(this, a);
            break;
        case 16:
            this.Db.apply(this, a);
            break;
        case 18:
            this.Ab.apply(this, a)
        }
    }
    ;
    f.Zb = function(a, b) {
        var c = 94 <= this.$
          , d = 101 <= this.$;
        switch (this.c = a) {
        case 1:
            this.h = this.ob = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.Oa = RegExp(a, J);
            if (a = b.shift())
                this.I = RegExp(a);
            if (a = b.shift())
                this.Va = RegExp(a);
            if (a = b.shift())
                this.F = a.split(/[|:]/).reduce(da, {});
            if (a = b.shift())
                this.Pa = RegExp(a);
            if (a = b.shift())
                this.Qa = RegExp(a, J);
            if (a = b.shift())
                this.Ra = RegExp(a, J);
            if (a = b.shift())
                this.Sa = RegExp(a, J);
            (a = b.shift()) && d && (this.Ta = RegExp(a, J));
            if (a = b.shift())
                this.Ua = a;
            if (a = b.shift())
                this.R = a;
            if (a = b.shift())
                this.pb = a;
            if (a = b.shift())
                this.Wa = a;
            break;
        case 2:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.H = a;
            if (a = b.shift())
                this.ua = RegExp(a);
            if (a = b.shift())
                this.pa = a;
            (a = b.shift()) && c && (this.sa = a);
            b.shift();
            if (a = b.shift())
                this.m = a;
            if (a = b.shift())
                this.ta = a;
            if (a = b.shift())
                this.C = a;
            if (a = b.shift())
                this.o = a;
            if (a = b.shift())
                this.va = a;
            if (a = b.shift())
                this.oa = a;
            if (a = b.shift())
                this.D = a;
            (d = b.shift()) && c && (this.ra = d);
            if (a = b.shift())
                this.kb = a;
            if (a = b.shift())
                this.qa = RegExp(a);
            break;
        case 4:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.Ia = a;
            if (a = b.shift())
                this.H = a;
            if (a = b.shift())
                this.za = RegExp(a);
            if (a = b.shift())
                this.Ga = a;
            if (!c)
                break;
            if (a = b.shift())
                this.Aa = a;
            if (a = b.shift())
                this.Da = a;
            if (a = b.shift())
                this.Ha = a;
            if (a = b.shift())
                this.ya = a;
            if (a = b.shift())
                this.Ca = a;
            if (a = b.shift())
                this.P = a;
            if (a = b.shift())
                this.Ea = a;
            b.shift();
            if (a = b.shift())
                this.Fa = a;
            if (a = b.shift())
                this.Ba = RegExp(a);
            break;
        case 3:
            if (a = b.shift())
                this.Ja = RegExp(a);
            if (a = b.shift())
                this.Ka = RegExp(a);
            if (a = b.shift())
                this.Na = a;
            if (a = b.shift())
                this.La = a;
            if (a = b.shift())
                this.Ma = a;
            break;
        case 5:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.H = a;
            if (a = b.shift())
                this.mb = a;
            break;
        default:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.xa = a
        }
        this.g.includes("^/") && ((b = this.Ia) ? b = "https?://" + b.slice(+b.startsWith("^"), -b.endsWith("$") || void 0) : b = Q.replaceAll(".", "\\."),
        this.g = this.g.replaceAll("^/", "^(?:" + b + ")?/"))
    }
    ;
    f.Y = function(a) {
        if (this.c && this.N(arguments))
            switch (this.c) {
            case 1:
                this.Lb(a);
                break;
            case 2:
                this.Hb(a);
                break;
            case 4:
                this.Ib(a);
                break;
            case 3:
                this.Kb(a);
                break;
            case 5:
                this.Jb(a)
            }
    }
    ;
    f.T = function(a) {
        var b = this.a, c;
        for (c of document.getElementsByTagName("script"))
            !c.src && a.test(c.text) && b.postMessage([34, null, -1, c.text]);
        b.postMessage([34, this.u()])
    }
    ;
    f.ea = function(a, b, c, d) {
        if (this.jb && c) {
            var e = a instanceof Element ? this.M(a) : 0
              , h = this.fa
              , l = h.indexOf(null);
            0 > l && (l = h.length);
            h[l] = [a, b, d];
            window.postMessage([1229212980, l, e, c], "/")
        } else
            d(a, b)
    }
    ;
    f.Vb = function(a, b) {
        var c = this.fa.splice(a, 1, null).shift();
        if (c) {
            a = c[0];
            var d = c[1];
            c = c[2];
            a instanceof Element && !document.contains(a) && (b = void 0);
            c(a, d, b)
        }
    }
    ;
    f.Yb = function(a) {
        var b = a.data;
        if (Array.isArray(b) && a.origin == Q)
            switch (b[0]) {
            case 1229212977:
                window.postMessage([1229212978, this.ba, this.h, this.ob, this.g, this.H], "/");
                this.jb = !0;
                break;
            case 1229212979:
                this.a.postMessage([36, b[1], b[2]]);
                break;
            case 1229212981:
                this.Vb(b[1], b[2])
            }
    }
    ;
    f.U = function() {
        var a = window.devicePixelRatio
          , b = document.width
          , c = document.body.scrollWidth;
        b && c && (a = b == c ? 0 : b / c);
        return a
    }
    ;
    f.M = function(a) {
        var b = a.l;
        b || (b = a.l = this.ba << 13 | this.ib++,
        a.setAttribute("__idm_id__", b),
        this.f[b] = a);
        return b
    }
    ;
    f.K = function(a) {
        a.A && (window.clearTimeout(a.A),
        a.A = null);
        a.f && (a.f.disconnect(),
        a.f = null);
        this.v && this.v.unobserve(a);
        this.j && this.j.unobserve(a);
        delete this.f[a.l];
        a.l = a.c = a.a = null
    }
    ;
    f.Xa = function(a, b, c) {
        var d = this.M(a);
        if (b || c) {
            for (var e of Z(this.f))
                if (b ? b == e.c : c == e.a)
                    return;
            a.a = c || Y + a.localName + "/" + b;
            a.c = b
        }
        a.f || (b = a.f = new MutationObserver(this.ca.bind(this)),
        b.observe(a, {
            attributes: !0,
            attributeFilter: ["style"]
        }),
        b.observe(a.parentElement, {
            childList: !0
        }),
        this.v && this.v.observe(a));
        1 == this.c && t(a, this.R) && (a.j = !0,
        a.v = 10);
        return d
    }
    ;
    f.B = function(a, b, c, d) {
        if (b = this.Xa(a, b, c))
            d && this.j && this.j.observe(a),
            d = this.L(a),
            this.a.postMessage([41, b, a.localName, a.src || a.data, a.a, a.c, d])
    }
    ;
    f.vb = function(a, b, c, d, e, h) {
        var l, m, p, k = window.getComputedStyle.bind(window);
        try {
            var g = 0;
            var q = document.activeElement;
            q && M(q.localName) || (q = document.elementFromPoint(this.ka, this.la)) && !M(q.localName) && (q = null);
            for (var n of document.querySelectorAll("video,audio,object,embed")) {
                var r = n.localName, u, v = "object" == r || "embed" == r;
                if (v) {
                    var x = n.type.toLowerCase();
                    if (x.startsWith("text/") || x.startsWith("image/"))
                        continue;
                    if ("embed" == r && "application/x-shockwave-flash" != x)
                        continue
                }
                if (n.a && !n.j && (e || h))
                    if (e ? e == n.c : h == n.a)
                        var y = n;
                    else
                        continue;
                else if (u = n.src || n.data)
                    u != a && u != b || (y = n);
                else if (!v)
                    for (var K of n.getElementsByTagName("source"))
                        if ((u = K.src) && (u == a || u == b) && (y = n))
                            break;
                if (y)
                    if ("cover" == k(n).objectFit) {
                        var B = n;
                        y = null
                    } else
                        break;
                if (!(B || q || l)) {
                    if (u) {
                        if ((u == c || u == d) && (l = n))
                            continue;
                        if ("video" == r && u.startsWith("data:audio/"))
                            continue
                    }
                    var C = n.clientWidth
                      , F = n.clientHeight;
                    if (C && F) {
                        var U = n.getBoundingClientRect();
                        if (!(0 >= U.right + window.scrollX || 0 >= U.bottom + window.scrollY))
                            if ("hidden" == k(n).visibility || n.W)
                                "video" == r && (p || (p = n));
                            else {
                                v = C * F;
                                if (g < v && 1.35 * C > F && C < 3 * F) {
                                    g = v;
                                    var ea = n
                                }
                                m || (m = n)
                            }
                    }
                }
            }
        } catch (ha) {}
        (n = y || B || q || l) ? "video" != n.localName && "hidden" == k(n).visibility && (n = null) : n = ea || m || p;
        n && ("embed" != n.localName || n.clientWidth || n.clientHeight || (a = n.parentElement,
        "object" == a.localName && (n = a)),
        this.Xa(n, e, h));
        return n
    }
    ;
    f.ub = function(a, b, c) {
        var d = null, e, h = browser.runtime.getFrameId, l;
        for (l of document.getElementsByTagName("iframe")) {
            var m = l.h;
            null == m && h && (m = l.h = h(l));
            if (m == a) {
                d = l;
                break
            } else
                d || !(e = l.src) || e != b && e != c || (d = l)
        }
        return d && this.M(d)
    }
    ;
    f.L = function(a) {
        var b = null;
        try {
            var c = window.getComputedStyle(a)
              , d = a.getBoundingClientRect()
              , e = this.O
              , h = Math.round(d.width)
              , l = Math.round(d.height);
            if ("hidden" == c.visibility && !a.contentWindow)
                return h > 5 * l ? null : !1;
            if (0 == c.opacity || a.W)
                return !1;
            if (1 == this.c && 0 == a.offsetTop + a.offsetHeight) {
                for (var m = a; m = m.parentElement; ) {
                    var p = window.getComputedStyle(m);
                    if ("block" != p.display)
                        break;
                    if (0 == p.opacity)
                        return !1
                }
                d = a.parentElement.parentElement.getBoundingClientRect();
                e = 0
            }
            var k = Math.round(d.left) + a.clientLeft
              , g = Math.round(d.top) + a.clientTop
              , q = d = 0;
            m = a;
            p = c;
            for (var n, r; e-- && "block" == p.display && (n = m.parentElement) && "div" == n.localName; m = n,
            p = r) {
                r = window.getComputedStyle(n);
                d -= m.offsetLeft;
                q -= m.offsetTop;
                if ("hidden" == r.overflowX) {
                    var u = h - n.offsetWidth - d;
                    0 < d && (h -= d,
                    k += d);
                    0 < u && (h -= u);
                    e = 0
                }
                if ("hidden" == r.overflowY) {
                    var v = l - n.offsetHeight - q;
                    0 < q && (l -= q,
                    g += q);
                    0 < v && (l -= v);
                    e = 0
                }
            }
            switch (a.localName) {
            case "video":
                document.contains(a) && (a.videoWidth || a.a || 1 > a.readyState && 2 == a.networkState) && (b = !1);
                if (15 > h || 10 > l)
                    return b;
                break;
            case "audio":
                if (1 > h && 1 > l)
                    return b;
                var x = !0
            }
            var y = document.documentElement
              , K = y.scrollWidth || y.clientWidth || document.body.scrollWidth
              , B = y.scrollHeight || y.clientHeight || document.body.scrollHeight;
            if (k >= K || g >= B || x && !k && !g)
                return b;
            0 == k && g == -B && h == K && l == B && (g = 0);
            var C = this.U();
            q = a.v || 0;
            b = [k, g + q, k + h, g + l - q, C]
        } catch (F) {}
        return b
    }
    ;
    f.qb = function(a) {
        var b = a.Eb;
        if (b) {
            b = document.elementsFromPoint((b.left + b.right) / 2, (b.top + b.bottom) / 2);
            for (var c, d; (c = b.shift()) && !c.isSameNode(a); ) {
                var e = window.getComputedStyle(c);
                if ("visible" == e.visibility && "0" != e.opacity && !ba(e.backgroundColor)) {
                    d = !0;
                    break
                }
            }
            a.W = d
        }
    }
    ;
    f.u = function() {
        var a = P ? 80 : 90;
        try {
            var b = window.top.document.title
        } catch (c) {}
        b || (b = (b = document.head.querySelector('meta[property="og:title"]')) && b.getAttribute("content"),
        a = 70);
        b && (b = b.replace(/^\(\d+\)/, "").replace(/[ \t\r\n\u25B6]+/g, " "),
        b = new String(b.trim()),
        b.src = a);
        return b
    }
    ;
    f.zb = function() {
        if (!document.elementsFromPoint)
            return 0;
        var a = document.documentElement
          , b = a.clientWidth || a.offsetWidth;
        a = (a.clientHeight || window.innerHeight) / 4;
        var c = document.elementsFromPoint(0, 0), d = 0, e = 0, h = 0, l;
        for (l of c)
            if (l.offsetWidth >= b) {
                var m = window.getComputedStyle(l);
                .95 <= m.opacity && (c = m.zIndex,
                "fixed" == m.position ? (m = l.offsetHeight + l.offsetTop,
                d < m && m < a && (d = m,
                e = c)) : h < c && (h = c))
            }
        e < h && (d = 0);
        return d
    }
    ;
    f.wb = function(a, b, c, d, e, h, l, m, p) {
        m && V("text/javascript", m);
        this.$ = a;
        this.ba = b;
        if (d) {
            this.Z = d;
            try {
                window.frameElement && (window.frameElement.h = d)
            } catch (k) {}
        }
        this.ab(h);
        e && this.Zb(e, G(arguments, 9));
        p && (this.b(2, window, "message", this.Yb),
        V("text/javascript", p));
        "loading" == document.readyState ? this.ma = !0 : this.Y()
    }
    ;
    f.xb = function(a) {
        S = location.hostname.toLowerCase() + location.pathname + location.search;
        this.na && this.i && (this.i = 0,
        this.wa = window.setTimeout(this.da.bind(this, !1), 3E3));
        this.Y(!0);
        a && this.ab();
        for (var b of Z(this.f))
            this.qb(b)
    }
    ;
    f.ab = function(a) {
        if (this.N(arguments)) {
            var b = [21, R.href, document.referrer];
            a && b.push(document.getElementsByTagName("video").length, document.getElementsByTagName("audio").length);
            this.a.postMessage(b)
        }
    }
    ;
    f.Bb = function(a) {
        var b = a ? this.N(arguments) : 1;
        if (0 < b || 0 > b && 1 != this.c) {
            b = this.u();
            var c = this.U()
              , d = this.zb();
            this.a.postMessage([24, b, b && b.src, c, d])
        }
    }
    ;
    f.Db = function(a, b, c, d, e) {
        c || (c = this.ub(b, d, e));
        d = (d = c && this.f[c]) && this.L(d);
        this.a.postMessage([22, a, b, c, d])
    }
    ;
    f.Ab = function(a, b) {
        var c = document.getElementsByTagName("a"), d;
        for (d of c)
            try {
                if (d.href == b) {
                    var e = d.download || null;
                    var h = d.innerText.trim() || d.title || null;
                    break
                }
            } catch (l) {}
        this.a.postMessage([35, a, e, h])
    }
    ;
    f.Cb = function(a, b, c, d, e, h, l, m) {
        if (this.N(arguments)) {
            var p = [23, a, b, !1], k, g, q;
            if (b)
                b && ((k = this.f[b]) || (p[3] = !0));
            else {
                if (k = this.vb(c, d, e, h, m, l)) {
                    if (this.xa && (g = t(k, this.xa)))
                        var n = 200;
                    else if (g = k.getAttribute("operadetachedviewtitle"))
                        n = 130;
                    p[2] = b = k.l;
                    p[5] = k.localName;
                    p[6] = k.src || k.data
                } else if (m || l)
                    p[3] = !0;
                !g && (g = this.u()) && (n = g.src,
                (q = ca.exec(g)) && (g = q[1]));
                p[7] = g;
                p[8] = n
            }
            if (k)
                if (g = this.L(k),
                null != g || document.contains(k)) {
                    if (p[4] = g,
                    a && 1 == this.c && this.ga)
                        try {
                            p[9] = window.sessionStorage.getItem(this.ga)
                        } catch (r) {}
                } else
                    this.K(k),
                    p[3] = !0;
            this.a.postMessage(p)
        }
    }
    ;
    f.yb = function(a, b, c, d) {
        var e = d ? RegExp(d, "i") : null;
        d = this.$a(document, e, b);
        var h = document.getElementsByTagName("iframe"), l;
        for (l of h)
            try {
                var m = l.contentDocument;
                m && !l.src && H(d, this.$a(m, e, b))
            } catch (p) {}
        a = [27, a, this.Z, d.length];
        c || (a[4] = d,
        a[5] = R.href,
        P && (a[6] = R.href,
        a[7] = document.title));
        this.a.postMessage(a)
    }
    ;
    f.$a = function(a, b, c) {
        var d = []
          , e = {}
          , h = ""
          , l = ""
          , m = !c;
        if (c) {
            var p = a.getSelection();
            if (!p || p.isCollapsed && !p.toString().trim())
                return d
        }
        for (var k of a.getElementsByTagName("a"))
            if (m || p.containsNode(k, !0))
                try {
                    var g = k.href;
                    g && !e[g] && b.test(g) && (e[g] = d.push([g, 2, k.download || null, k.innerText.trim() || k.title]));
                    c && e[g] && (l += k.innerText,
                    l += "\n")
                } catch (n) {}
        for (k of a.getElementsByTagName("area"))
            if (m || p.containsNode(k, !0))
                try {
                    (g = k.href) && !e[g] && b.test(g) && (e[g] = d.push([g, 2, null, k.alt]))
                } catch (n) {}
        for (k of a.getElementsByTagName("img"))
            if (m || p.containsNode(k, !0))
                try {
                    (g = k.src) && !e[g] && b.test(g) && (e[g] = d.push([g, 3, null, "<<<=IDMTRANSMITIMGPREFIX=>>>" + k.alt])),
                    m && k.onclick && (h += k.onclick,
                    h += "\n")
                } catch (n) {}
        if (c) {
            if (h = p.toString()) {
                c = this.J(l);
                for (g of this.J(h))
                    g && !e[g] && b.test(g) && !c.includes(g) && (e[g] = d.push([g, 1]))
            }
            for (k of a.getElementsByTagName("textarea"))
                if (a = k.selectionStart,
                h = k.selectionEnd,
                (c = p.isCollapsed && a < h) || p.containsNode(k, !0))
                    try {
                        var q = c ? k.value.substring(a, h) : k.value;
                        for (g of this.J(q))
                            g && !e[g] && b.test(g) && (e[g] = d.push([g, 1]))
                    } catch (n) {}
        } else {
            for (k of a.getElementsByTagName("iframe"))
                try {
                    (g = k.src) && !e[g] && b.test(g) && (e[g] = d.push([g, 4]))
                } catch (n) {}
            for (k of a.getElementsByTagName("script"))
                h += k.innerText,
                h += "\n";
            if (h)
                for (g of this.J(h))
                    g && !e[g] && b.test(g) && (e[g] = d.push([g, 5]))
        }
        return d
    }
    ;
    f.J = function(a) {
        if (!this.ia) {
            var b = "\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g, function(d) {
                return this[d]
            }
            .bind({
                "%H": "\\w\\-\u00a0-\ufeff",
                "%T": "\\w\\-.+*()$!,%\u00a0-\ufeff",
                "%Q": "^\\s\\[\\]{}()"
            }));
            this.ia = RegExp(b, "gi")
        }
        for (var c = []; b = this.ia.exec(a); )
            c.push(b.shift());
        return c
    }
    ;
    f.N = function(a) {
        var b = this.i;
        b || (a = z(a && a.callee ? a : arguments),
        a.unshift(arguments.callee.caller),
        this.aa.push(a));
        return b
    }
    ;
    f.eb = function(a) {
        try {
            var b = window.top.document.getElementsByTagName("title")[0]
        } catch (c) {}
        this.i = a && b ? -1 : 1;
        b && (a = this.na,
        a || (a = this.na = new MutationObserver(this.da.bind(this))),
        a.observe(b, {
            childList: !0
        }));
        try {
            this.v = new ResizeObserver(this.ca.bind(this))
        } catch (c) {}
        try {
            this.j = new IntersectionObserver(this.ca.bind(this),{
                threshold: .2
            })
        } catch (c) {}
        this.ma && (this.ma = !1,
        this.Y());
        for (a = this.aa; b = a.shift(); )
            b.shift().apply(this, b)
    }
    ;
    f.ca = function(a) {
        if (this.a)
            for (var b of a)
                if (a = b.target,
                a.l)
                    if (document.contains(a)) {
                        var c = b.isIntersecting;
                        null != c && (a.W = !c,
                        a.Eb = c ? b.intersectionRect : null);
                        a.A && window.clearTimeout(a.A);
                        a.A = window.setTimeout(this.Nb.bind(this, a), 200)
                    } else
                        this.a.postMessage([23, null, a.l, !0]),
                        this.K(a)
    }
    ;
    f.Nb = function(a) {
        if (!this.a)
            return this.K(a);
        a.A = null;
        var b = document.contains(a);
        if (b) {
            var c = this.L(a);
            if (1 == this.c && a.j)
                if (c) {
                    var d = t(a, this.R);
                    d && d.href && d.href != a.a && this.B(a, null, d.href)
                } else
                    a.a = a.c = null,
                    b = !1
        } else
            this.K(a);
        this.a.postMessage([23, null, a.l, !b, c])
    }
    ;
    f.da = function(a) {
        if (a)
            window.clearTimeout(this.wa),
            this.wa = window.setTimeout(this.da.bind(this, !1), 1E3);
        else {
            0 > this.i ? this.i = 1 : ++this.i;
            for (var b = this.aa; a = b.shift(); )
                a.shift().apply(this, a)
        }
    }
    ;
    f.Mb = function(a) {
        var b = a.target
          , c = b.localName;
        M(c) && a.url && (b = this.M(b),
        this.a.postMessage([25, b, c, a.url]))
    }
    ;
    f.fb = function(a) {
        !a.repeat && L[a.keyCode] && this.a.postMessage([31, a.keyCode, "keydown" == a.type])
    }
    ;
    f.Qb = function(a) {
        this.nb && this.a.postMessage([28]);
        if (0 == a.button) {
            var b = a.view.getSelection();
            b && b.isCollapsed && !b.toString().trim() && (this.s = 1);
            this.a.postMessage([32, a.button, !0])
        }
    }
    ;
    f.Sb = function(a) {
        if (0 == a.button) {
            this.ka = a.clientX;
            this.la = a.clientY;
            this.a.postMessage([32, a.button, !1]);
            var b = a.view.getSelection();
            b && this.s && (this.s = b.isCollapsed && !b.toString().trim() ? 0 : 2) && this.a.postMessage([26, a.clientX, a.clientY, this.U()])
        }
    }
    ;
    f.Rb = function() {
        2 == this.s && (this.s = 0)
    }
    ;
    f.Pb = function(a) {
        a = a.target;
        "a" == a.localName && this.a.postMessage([39, a.hasAttribute("download"), a.href, a.download])
    }
    ;
    f.Xb = function() {
        this.a.postMessage([29])
    }
    ;
    f.Wb = function(a) {
        a = a.target;
        this.a.postMessage([30, a.innerWidth, a.innerHeight])
    }
    ;
    f.Ob = function() {
        this.s = 0;
        this.a.postMessage([33])
    }
    ;
    f.b = function(a, b, c, d, e) {
        var h = z(arguments);
        h[3] = d.bind(this);
        this.ja.push(h);
        0 > a ? (b = b[c],
        b.addListener.apply(b, h.slice(3))) : b.addEventListener.apply(b, h.slice(2))
    }
    ;
    f.gb = function(a) {
        for (var b = this.ja, c = 0; c < b.length; c++) {
            var d = b[c][0];
            if (!a || a == d) {
                var e = b.splice(c--, 1).pop()
                  , h = e.splice(0, 2).pop();
                0 > d ? (h = h[e.shift()],
                h.removeListener.apply(h, e)) : h.removeEventListener.apply(h, e)
            }
        }
    }
    ;
    f.Lb = function(a) {
        var b = this.Va.exec(R.pathname + R.search);
        if (b) {
            var c = t(document.body, this.Ua);
            c && this.B(c, b[1])
        }
        if (!a) {
            X = "youtube";
            Y = "idmrs://youtube/";
            this.O = 2;
            var d, e, h;
            a = 0;
            for (var l of document.getElementsByTagName("script")) {
                if (l.src) {
                    if (b = this.I.exec(l.src))
                        a |= 1,
                        this.F[b[1]] ? h = b[1] : d = l.src
                } else if (b = this.Ta.exec(l.text)) {
                    a |= 2;
                    var m = b[1] && parseInt(b[1], 10);
                    var p = b[2];
                    var k = "true" == b[3];
                    var g = b[4] || b[5];
                    if (b = this.I.exec(b[6]))
                        this.F[b[1]] ? h = b[1] : e = Q + b[0]
                } else if (this.Oa.test(l.text)) {
                    a |= 4;
                    var q = l.outerHTML
                }
                if (7 == a)
                    break
            }
            b = 101 <= this.$;
            (l = k ? p : g) ? this.ga = W(l) : this.ea(window, k || !b ? 136 : 138, k ? this.pb : this.Wa, this.ac.bind(this));
            if (h || m || p || g || null != k) {
                var n = {};
                n[124] = h;
                n[118] = m;
                n[136] = k || b ? p : g;
                n[138] = g;
                n[139] = k
            }
            d || (d = e) ? (e = new XMLHttpRequest,
            e.responseType = "text",
            e.timeout = 1E4,
            e.onreadystatechange = this.bc.bind(this, d, n, q, e),
            e.open("GET", d, !0),
            e.send()) : (n && this.a.postMessage([37, 1, 2, n]),
            q && this.a.postMessage([34, this.u(), null, q]))
        }
    }
    ;
    f.bc = function(a, b, c, d) {
        if (4 == d.readyState) {
            var e = this.I.exec(a);
            if ((a = (a = this.Pa.exec(d.response)) && parseInt(a[1] || a[2], 10)) && (!this.F[a] || !this.F[e[1]])) {
                var h = this.Qa.exec(d.response)
                  , l = this.Ra.exec(d.response);
                d = this.Sa.exec(d.response);
                if (h && l && h[2] == l[1] && d) {
                    e = e && e[1];
                    var m = {};
                    m[118] = a;
                    m[119] = h[0];
                    m[120] = l[0];
                    m[135] = d[0];
                    m[124] = e;
                    this.a.postMessage([37, 1, 1, m])
                }
            }
            b && this.a.postMessage([37, 1, 2, b]);
            c && this.a.postMessage([34, this.u(), null, c])
        }
    }
    ;
    f.ac = function(a, b, c) {
        c && (a = {},
        a[b] = c,
        this.ga = W(c),
        this.a.postMessage([37, 1, 2, a]))
    }
    ;
    function W(a) {
        var b = 0, c = 6038198, d = 0, e;
        for (e = a.length >> 1; b < e; b++)
            c = 31 * c + a.charCodeAt(b) | 0;
        for (e = a.length; b < e; b++)
            d = 31 * d + a.charCodeAt(b) | 0;
        return c.toString(16) + d.toString(16)
    }
    f.Hb = function d(b, c) {
        b ? (c && b.shift().disconnect(),
        this.V.disconnect(),
        this.ha.disconnect(),
        this.hb.clear()) : (this.T(this.ua),
        this.V = new MutationObserver(this.sb.bind(this)),
        this.ha = new MutationObserver(this.rb.bind(this)),
        this.hb = new Set,
        this.O = 3,
        this.m.startsWith("$") || (this.m = "$<" + this.m.slice(1) + "<"),
        this.o.startsWith("$") || (this.o = "$<" + this.o.slice(1) + "<"),
        this.C.startsWith("$") || (this.C = "$*" + this.C),
        this.D.startsWith("$") || (this.D = "$*" + this.D));
        if (c = this.lb = t(document.body, this.sa)) {
            if (b = this.V,
            b.observe(c, {
                childList: !0
            }),
            !this.Za(c, !0) && (c = t(c, this.ta))) {
                var e = t(c, this.m);
                e ? (b.observe(e, {
                    childList: !0
                }),
                b.observe(c, {
                    childList: !0
                })) : b.observe(c.parentNode, {
                    childList: !0
                })
            }
        } else
            !b && (c = t(document.body, this.pa)) && (e = new MutationObserver(d.bind(this, b = [])),
            b.push(e),
            e.observe(c, {
                childList: !0
            }))
    }
    ;
    f.Za = function(b, c) {
        var d = this.V, e = this.m, h = this.C, l = this.ha, m = this.hb, p = 0, k;
        for (k of t(b, h, []))
            m.has(k) || t(k, h) || (m.add(k),
            l.observe(k, {
                childList: !0,
                subtree: !0
            }),
            c && (b = t(k, e)) && (p++,
            d.observe(b, {
                childList: !0
            })),
            I(k.getElementsByTagName("video"), this.S.bind(this)));
        return p
    }
    ;
    f.sb = function(b) {
        var c = this.lb, d;
        for (d of b) {
            b = d.target.isSameNode(c);
            for (var e of d.addedNodes)
                1 == e.nodeType && this.Za(e, b)
        }
    }
    ;
    f.rb = function(b) {
        var c = this.fa, d = this.o, e;
        for (e of b)
            for (var h of e.addedNodes)
                if (1 == h.nodeType)
                    if (b = h.getElementsByTagName("video"),
                    b.length)
                        I(b, this.S.bind(this));
                    else
                        for (var l of c)
                            if (l) {
                                b = l[0];
                                var m = t(b, d);
                                m && m.contains(h) && this.S(b, !0)
                            }
    }
    ;
    f.S = function(b, c) {
        if (!b.a) {
            var d = t(b, this.o), e, h = d && t(d, this.va);
            if (!h) {
                for (var l = this.oa, m = this.ra, p = A.bind(["div", "span", "a"]), k, g, q, n, r, u = d; u && m-- && p(u.localName); u = u.parentNode) {
                    var v = g = u
                      , x = l + ":scope:first-child:only-of-type";
                    for (e = 0; "<" == x[e]; e++)
                        ;
                    e && (x = x.slice(e));
                    for (v = v.closest(x); v && e--; v = v.parentElement)
                        ;
                    if (e = v)
                        break;
                    if ((q = u.previousSibling) && "div" == q.localName) {
                        k || (k = u.querySelector('div[role="slider"]'));
                        1 == (r = u.querySelectorAll(l)).length ? e = r[0] : (n = u.nextSibling) && 1 == (r = n.querySelectorAll("ul:scope " + l)).length ? e = r[0] : k && 1 < (r = q.querySelectorAll(l)).length && (e = r[r.length - 1]);
                        break
                    }
                }
                !e && g && 1 == (r = t(g, this.D, [])).length && (e = r[0]);
                !e && d && (e = d.querySelector(":scope >" + l));
                e && (e = e.href);
                !e && 1 == document.getElementsByTagName("video").length && (h = this.qa.exec(R.href)) && (h = h[1])
            }
            h || e ? this.B(b, h, e) : c || this.ea(b, 0, this.kb, this.tb.bind(this))
        }
    }
    ;
    f.tb = function(b, c, d) {
        d && this.B(b, d)
    }
    ;
    f.Ib = function(b) {
        !b && (this.T(this.za),
        b = t(document.body, this.Ga)) && (D(b, this.Aa, this.Fb.bind(this)),
        D(b, this.Da, this.X.bind(this)),
        D(b, this.Ha, this.X.bind(this)),
        D(document.body, this.Ca, this.X.bind(this)))
    }
    ;
    f.bb = function(b, c, d) {
        !c && 1 == document.getElementsByTagName("video").length && (c = this.Ba.exec(R.href)) && (c = c[1]);
        this.B(b, c, d, !0)
    }
    ;
    f.Fb = function(b) {
        for (var c of t(b, this.ya, []))
            I(t(c, this.P, []), this.cb.bind(this))
    }
    ;
    f.X = function(b) {
        I(t(b, this.P, []), this.cb.bind(this))
    }
    ;
    f.cb = function(b) {
        if (!b.a) {
            var c = t(b, this.Ea);
            c ? this.bb(b, null, c) : this.ea(b, 0, this.Fa, this.Gb.bind(this))
        }
    }
    ;
    f.Gb = function(b, c, d) {
        d && this.bb(b, d)
    }
    ;
    f.Kb = function(b) {
        b || (this.T(this.Ja),
        (b = t(document.body, this.La)) && D(b, this.Ma, this.$b.bind(this)))
    }
    ;
    f.$b = function(b) {
        if (b = t(b, this.Na)) {
            var c = this.Ka.exec(S);
            c && this.B(b, c[1])
        }
    }
    ;
    f.Jb = function(b) {
        if (!b) {
            var c = t(document.body, this.mb);
            c && (b = this.u(),
            c = c.outerHTML,
            this.a.postMessage([34, b, null, c.slice(0, c.indexOf(">") + 1)]))
        }
    }
    ;
    function V(b, c) {
        var d = b.startsWith("image/") ? "img" : "script";
        d = document.createElement(d);
        d.src = "data:" + b + ";base64," + c;
        d.onload = d.remove.bind(d);
        document.documentElement.appendChild(d)
    }
    function t(b, c, d) {
        function e(q, n, r) {
            for (; r && n--; )
                r = r.parentElement;
            r && (isNaN(q) || this.push(q),
            this.push(r));
            return r
        }
        if (!c)
            return d;
        var h, l, m = !0, p = d || [], k = c.split(aa);
        1 == k.length ? (k[0].startsWith("<") && k.unshift(k.shift().slice(1) + "<"),
        k.unshift(">", NaN)) : k.shift();
        for (; b && (h = k.shift()); ) {
            c = parseInt(k.shift(), 10);
            var g = k.shift().trim();
            for (l = 1; "<" == g[g.length - l]; l++)
                ;
            --l && (g = g.slice(0, -l).trim());
            switch (h) {
            case "<":
                b = N(g ? b.closest(g) : b, l);
                m = !0;
                break;
            case ">":
                b = N(b.querySelector(g), l);
                m = !0;
                break;
            case "{":
                b.closest(g) && (b = null);
                break;
            case "}":
                b.querySelector(g) && (b = null);
                break;
            case "|":
                if (g = g.endsWith(":scope") ? b.closest(g) : b.querySelector(g))
                    return N(g, l);
                m = !1;
                break;
            case "&":
                b = e.call(p, c, l, b.querySelector(g));
                m = !1;
                break;
            case "*":
                b.querySelectorAll(g).forEach(e.bind(p, c, l));
                m = !1;
                break;
            case "+":
                g = g ? g.endsWith(":scope") ? b.closest(g) : b.querySelector(g) : b;
                e.call(p, c, l, g);
                m = !1;
                break;
            case "=":
                if (g = b.getAttribute(g))
                    return g;
                m = !1;
                break;
            case "@":
                if (g = b.textContent.trim())
                    return g;
                m = !1
            }
        }
        return p.length ? p : m && b || d
    }
    function D(b, c, d, e, h, l) {
        if (null == e) {
            e = t(b, c, []);
            l = new MutationObserver(D.bind(null, b, c, d, e));
            l.observe(b, {
                childList: !0
            });
            for (var m of e)
                l.observe(m, {
                    childList: !0
                });
            e.length && d(e.G(-1))
        } else
            for (var p of h) {
                for (var k of p.addedNodes)
                    if (1 == k.nodeType) {
                        h = t(b, c, []).slice(e.length);
                        var g = h.G(-1);
                        if (g && k.contains(g)) {
                            H(e, h);
                            for (m of h)
                                l.observe(m, {
                                    childList: !0
                                });
                            for (var q of g.children)
                                d(q)
                        } else
                            p.target.isSameNode(e.G(-1) || b) && d(k)
                    }
                for (k of p.removedNodes)
                    if (1 == k.nodeType)
                        for (h = 0; h < e.length; h++)
                            if (k.contains(e[h])) {
                                e.splice(h);
                                break
                            }
            }
    }
    function N(b, c) {
        for (; b && c--; b = b.parentElement)
            ;
        return b
    }
    function E(b) {
        var c = Function.prototype.apply.bind(String.prototype.charCodeAt)
          , d = String.fromCharCode;
        return b.replace(/[a-z]/gi, function(e) {
            return d((e = c(e)) + (13 < (e & 31) ? -13 : 13))
        })
    }
    function da(b, c) {
        c && (b[c] = !0);
        return b
    }
    var fa = Function.bind.bind(function(b) {
        return this[b]
    })
      , Z = Object.values;
    Z || (Z = function(b) {
        return Object.keys(b).map(fa(b))
    }
    );
    new T
}
!0;
