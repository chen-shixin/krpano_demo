/*!
 * autohome.media.platform - player
 * version:2.3.6
 * build:2018-5-24 14:56:24
 */
!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            'i': r,
            'l': !1,
            'exports': {}
        };
        return e[r].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.i = function(e) {
        return e
    }
    ,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            'configurable': !1,
            'enumerable': !0,
            'get': r
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e['default']
        }
        : function() {
            return e
        }
        ;
        return t.d(n, 'a', n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = '',
    t(t.s = 80)
}([function(t, n, r) {
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var o = r(4)
      , a = o.isBoolean
      , l = function(e) {
        var t = 0
          , n = 0
          , r = document.documentElement
          , i = document.body;
        try {
            if (e || (e = window.event),
            e.changedTouches) {
                var o = e.changedTouches[0];
                t = o.pageX,
                n = o.pageY
            } else
                window.pageYOffset ? (t = window.pageXOffset,
                n = window.pageYOffset) : (t = (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                n = (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                t += e.clientX,
                n += e.clientY
        } catch (a) {}
        return {
            'x': t,
            'y': n
        }
    }
      , s = function(t) {
        if (t.getBoundingClientRect)
            return t.getBoundingClientRect();
        for (var n = e.offsetLeft, r = e.offsetTop; e = e.offsetParent; )
            n += e.offsetLeft,
            r += e.offsetTop;
        return {
            'left': n,
            'top': r
        }
    }
      , u = function(e) {
        if (e && e.parentNode)
            return e.parentNode.removeChild(e)
    }
      , c = function(e, t) {
        for (var n in t) {
            var r = t[n];
            a(r) ? r ? e.setAttribute(n, '') : e.removeAttribute(n) : e.setAttribute(n, r)
        }
    }
      , f = function(e, t) {
        var n = document.createElement('div');
        n.innerHTML = e;
        var r = u(n.childNodes[0]);
        return t && c(r, t),
        r
    }
      , d = function(e, t, n) {
        var r = f(t, n);
        return e.appendChild(r),
        r
    }
      , p = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
        e.style.display = t
    }
      , v = function(e) {
        e.style.display = 'none'
    }
      , h = function(e, t) {
        return !!e && (e.classList ? e.classList.contains(t) : new RegExp('(\\s|^)' + t + '(\\s|$)').test(e.className))
    }
      , m = function(e, t) {
        if (!e)
            return !1;
        e.classList ? e.classList.add(t) : h(e, t) || (e.className += ' ' + t)
    }
      , y = function(e, t) {
        if (!e)
            return !1;
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp('\\b' + t + '\\b','g'), '')
    }
      , g = function(e, t, n) {
        if (!e)
            return !1;
        if (e.classList)
            e.classList[n ? 'add' : 'remove'](t);
        else {
            var r = (' ' + e.className + ' ').replace(/\s+/g, ' ').replace(' ' + t + ' ', '');
            e.className = r + (n ? ' ' + t : '')
        }
    }
      , _ = function b(e, t, n) {
        i(this, b);
        var r = void 0
          , o = function(e) {
            r = l(e)
        }
          , a = function(e) {
            var i = l(e);
            Math.abs(i.x - r.x) < 10 && Math.abs(i.y - r.y) < 10 && t.apply(n, [])
        };
        e.addEventListener('touchstart', o, !1),
        e.addEventListener('touchend', a, !1)
    };
    t.exports = {
        'hasClass': h,
        'addClass': m,
        'removeClass': y,
        'toggleClass': g,
        'getMousePos': l,
        'getPos': s,
        'remove': u,
        'create': f,
        'append': d,
        'setAttributes': c,
        'show': p,
        'hide': v,
        'StrictClick': _
    }
}
, function(e, t) {
    var n = {};
    n.FLASH = 'flash',
    n.HTML5 = 'html5';
    var r = {};
    r.PreRoll = 'pre-roll',
    r.PauRoll = 'pre-roll',
    r.MidRoll = 'pre-roll',
    r.Overlay = 'overlay',
    r.Endlay = 'endlay',
    r.TextOverlay = 'text-overlay';
    var i = {};
    i.MediaPlatform = '//p-vp.autohome.com.cn',
    i.JSPlayerEntrance = i.MediaPlatform + '/api/player',
    i.GetPlayInfo = i.MediaPlatform + '/api/gpi',
    i.PlayDomain = i.MediaPlatform + '/play',
    i.PluginDomain = i.PlayDomain + '/plugins/',
    i.FlashPlayerURL = 'https://img-sn-vp.autohome.com.cn/play/ahvplayer.swf';
    var o = {};
    o.PLAYER_INIT = 'playerInit',
    o.PLAY_START = 'playStart',
    o.VIDEO_START = 'videoStart',
    o.QUALITY_CHANGED = 'qualityChanged',
    o.VOLUME_CHANGED = 'volumeChanged',
    o.PLAY_PAUSE = 'playPause',
    o.PLAY_RESUME = 'playResume',
    o.PLAY_FINISH = 'playFinish',
    o.PLAY_CLICK_CUEPOINT = 'clickCuePoint',
    o.STOP = 'stop',
    o.ERROR = 'error',
    o.BUFFER_EMPTY = 'bufferEmpty',
    o.BUFFER_FULL = 'bufferFull',
    o.FULLSCREEN = 'fullScreen',
    o.DESTROY = 'destroy',
    o.PLAY_NEXT = 'playNext';
    var a = function(e) {
        switch (e) {
        case 0:
            return '';
        case -200:
            return '\u89c6\u9891\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u540e\u89c2\u770b\u3002';
        case -401:
            return '\u89c6\u9891\u672a\u627e\u5230';
        case -402:
            return '\u89c6\u9891\u5df2\u5220\u9664';
        case -403:
            return '\u89c6\u9891\u8f6c\u7801\u5931\u8d25';
        case 107:
            return '\u7b7e\u540d\u9519\u8bef';
        case -10:
            return '\u83b7\u53d6\u89c6\u9891\u6570\u636e\u5931\u8d25';
        case -20:
            return '\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002';
        case -30:
            return '\u89c6\u9891\u64ad\u653e\u5931\u8d25';
        default:
            return '\u5f53\u524d\u4e0d\u80fd\u64ad\u653e'
        }
    };
    e.exports = {
        'URL': i,
        'EVENT': o,
        'PLAYER_TYPE': n,
        'AD_TYPE': r,
        'MSG': a
    }
}
, function(e, t) {
    e.exports = function() {
        var e = this
          , t = {}
          , n = {}
          , r = {}
          , i = function(e) {
            var t = n[e];
            return t || (t = n[e] = []),
            t
        }
          , o = function(e, n) {
            var r = t[e];
            if (r) {
                for (var i = -1, o = r.length, a = 0; a < o; a++)
                    if (n === r[a].callback) {
                        i = a;
                        break
                    }
                i >= 0 && r.splice(i, 1)
            }
        }
          , a = function(e, n, r, i) {
            var o = t[e];
            o || (o = t[e] = []);
            for (var a = o.length, l = 0; l < a; l++)
                if (n === o[l].callback)
                    return void (o[l].target = r);
            o.push({
                'callback': n,
                'target': r,
                'once': i
            })
        }
          , l = function(e) {
            delete t[e],
            delete r[e]
        };
        this.allOff = function() {
            for (var e in t)
                r[e] ? i(e).push([l, e]) : l(e)
        }
        ,
        this.off = function(t, n) {
            return r[t] ? i(t).push([o, t, n]) : o(t, n),
            e
        }
        ,
        this.on = function(t, n, o, l) {
            return r[t] ? i(t).push([a, t, n, o, l]) : a(t, n, o, l),
            e
        }
        ,
        this.once = function(t, n, r) {
            return e.on(t, n, r, !0)
        }
        ,
        this.dispatchEvent = function(n) {
            var a = n.type;
            r[a] = !0;
            var l = t[a];
            if (l) {
                n.target = e;
                for (var s = i(a), u = l.length, c = 0; c < u; c++) {
                    var f = l[c];
                    f.callback.apply(f.target, [n]);
                    f.once && s.push([o, a, f.callback])
                }
                for (; s.length > 0; ) {
                    var d = s.shift();
                    d.shift().apply(null, d)
                }
                r[a] = !1
            }
        }
        ,
        this.trigger = function(t, n) {
            return e.dispatchEvent({
                'type': t,
                'value': n
            })
        }
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(2);
    e.exports = function(e) {
        function t(e, n) {
            r(this, t);
            var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            o.delay = e,
            o.repeatCount = n,
            o.running = !1,
            o.paused = !1,
            o.currentCount = 0;
            var a = o;
            return o.checkOffset = function() {
                var e = a.offsetIntervalId >= 0;
                return e && (clearInterval(a.offsetIntervalId),
                a.offsetIntervalId = -1),
                e
            }
            ,
            o.onTransition = function() {
                var e = (new Date).getTime();
                a.checkOffset() && (a.offset = 0,
                a.intervalId = setInterval(a.onTransition, a.delay)),
                a.time = e,
                a.currentCount++,
                a.trigger('timer'),
                a.repeatCount > 0 && --a.repeatCount <= 0 && (a.stop(),
                a.trigger('timerComplete'))
            }
            ,
            o
        }
        return o(t, e),
        a(t, [{
            'key': 'start',
            'value': function() {
                this.running || (this.running = !0,
                this.currentCount = 0,
                this.time = (new Date).getTime(),
                this.intervalId = setInterval(this.onTransition, this.delay))
            }
        }, {
            'key': 'pause',
            'value': function() {
                if (this.running && !this.paused) {
                    this.paused = !0;
                    var e = (new Date).getTime();
                    this.checkOffset() ? this.offset -= e - this.time : this.offset = this.delay - (e - this.time),
                    clearInterval(this.intervalId),
                    this.intervalId = -1
                }
            }
        }, {
            'key': 'resume',
            'value': function() {
                this.running && this.paused && (this.paused = !1,
                this.time = (new Date).getTime(),
                this.offsetIntervalId = setInterval(this.onTransition, this.offset))
            }
        }, {
            'key': 'stop',
            'value': function() {
                this.running && (this.running = !1,
                clearInterval(this.intervalId),
                this.intervalId = -1)
            }
        }]),
        t
    }(l)
}
, function(e, t) {
    var n = '[object Null]'
      , r = '[object Undefined]'
      , i = '[object Array]'
      , o = '[object Object]'
      , a = '[object String]'
      , l = '[object Number]'
      , s = '[object Boolean]'
      , u = function(e) {
        return Object.prototype.toString.call(e)
    }
      , c = function(e, t) {
        return u(e) === t
    }
      , f = function(e) {
        return c(e, n)
    }
      , d = function(e) {
        return c(e, r)
    }
      , p = function(e) {
        return !f(e) && !d(e)
    }
      , v = function(e) {
        return c(e, i)
    }
      , h = function(e) {
        return c(e, o)
    }
      , m = function(e) {
        return c(e, a)
    }
      , y = function(e) {
        return c(e, l)
    }
      , g = function(e) {
        return c(e, s)
    };
    e.exports = {
        'NULL': n,
        'UNDEFINED': r,
        'ARRAY': i,
        'OBJECT': o,
        'STRING': a,
        'NUMBER': l,
        'BOOLEAN': s,
        'type': u,
        'is': c,
        'isNull': f,
        'isUndefined': d,
        'isValue': p,
        'isArray': v,
        'isObject': h,
        'isString': m,
        'isNumber': y,
        'isBoolean': g
    }
}
, function(e, t) {
    var n = navigator.userAgent
      , r = navigator.platform
      , i = {}
      , o = {}
      , a = n.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
      , l = n.match(/(Android);?[\s\/]+([\d.]+)?/)
      , s = !!n.match(/\(Macintosh\; Intel /)
      , u = n.match(/(iPad).*OS\s([\d_]+)/)
      , c = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , f = !u && n.match(/(iPhone\sOS)\s([\d_]+)/)
      , d = n.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
      , p = /Win\d{2}|Windows/.test(r)
      , v = n.match(/Windows Phone ([\d.]+)/)
      , h = d && n.match(/TouchPad/)
      , m = n.match(/Kindle\/([\d.]+)/)
      , y = n.match(/Silk\/([\d._]+)/)
      , g = n.match(/(BlackBerry).*Version\/([\d.]+)/)
      , _ = n.match(/(BB10).*Version\/([\d.]+)/)
      , b = n.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
      , w = n.match(/PlayBook/)
      , E = n.match(/Chrome\/([\d.]+)/) || n.match(/CriOS\/([\d.]+)/)
      , x = n.match(/Firefox\/([\d.]+)/)
      , T = n.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/)
      , S = n.match(/MSIE\s([\d.]+)/) || n.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
      , P = !E && n.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
      , O = P || n.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    (o.webkit = !!a) && (o.version = a[1]),
    l && (i.android = !0,
    i.version = l[2]),
    f && !c && (i.ios = i.iphone = !0,
    i.version = f[2].replace(/_/g, '.')),
    u && (i.ios = i.ipad = !0,
    i.version = u[2].replace(/_/g, '.')),
    c && (i.ios = i.ipod = !0,
    i.version = c[3] ? c[3].replace(/_/g, '.') : null),
    v && (i.wp = !0,
    i.version = v[1]),
    d && (i.webos = !0,
    i.version = d[2]),
    h && (i.touchpad = !0),
    g && (i.blackberry = !0,
    i.version = g[2]),
    _ && (i.bb10 = !0,
    i.version = _[2]),
    b && (i.rimtabletos = !0,
    i.version = b[2]),
    w && (o.playbook = !0),
    m && (i.kindle = !0,
    i.version = m[1]),
    y && (o.silk = !0,
    o.version = y[1]),
    !y && i.android && n.match(/Kindle Fire/) && (o.silk = !0),
    E && (o.chrome = !0,
    o.version = E[1]),
    x && (o.firefox = !0,
    o.version = x[1]),
    T && (i.firefoxos = !0,
    i.version = T[1]),
    S && (o.ie = !0,
    o.version = S[1]),
    O && (s || i.ios || p) && (o.safari = !0,
    i.ios || (o.version = O[1])),
    P && (o.webview = !0),
    i.tablet = !!(u || c || w || l && !n.match(/Mobile/) || x && n.match(/Tablet/) || S && !n.match(/Phone/) && n.match(/Touch/)),
    i.phone = !(i.tablet || i.ipod || !(l || f || d || g || _ || E && n.match(/Android/) || E && n.match(/CriOS\/([\d.]+)/) || x && n.match(/Mobile/) || S && n.match(/Touch/))),
    e.exports = {
        'os': i,
        'browser': o
    }
}
, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , i = function(e, t) {
        for (var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0', r = e.toString(); r.length < t; )
            r = n + r;
        return r
    }
      , o = function() {
        function e() {
            n(this, e),
            this.actions = []
        }
        return r(e, [{
            'key': 'addAction',
            'value': function(e, t, n) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';
                return this.actions.push({
                    'num': e,
                    'complement': t,
                    'append': n,
                    'complementWith': r
                }),
                this
            }
        }, {
            'key': 'format',
            'value': function(e) {
                e = Math.floor(e);
                for (var t = this.actions.length, n = '', r = 0; r < t; r++) {
                    var o = this.actions[r]
                      , a = void 0
                      , l = o.num;
                    l > 0 ? (a = e % l,
                    e -= a,
                    e /= l) : (a = e,
                    e -= a),
                    n = i(a, o.complement, o.complementWith) + o.append + n
                }
                return n
            }
        }]),
        e
    }();
    o.PLAYER = (new o).addAction(60, 2, '').addAction(-1, 2, ':'),
    o.SRT = (new o).addAction(1e3, 3, '').addAction(60, 2, ',').addAction(60, 2, ':').addAction(-1, 2, ':'),
    e.exports = o
}
, function(e, t) {
    var n = {
        'js': '2.3.6',
        'html5': '2.2.6',
        'flash': '1.7.2'
    };
    e.exports = {
        'PLAYER_CSS': '_20180504',
        'Build': '20180524',
        'PlayerVersion': n
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(2)
      , s = n(31)
      , u = '_jpcb_';
    e.exports = function(e) {
        function t(e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'callback';
            r(this, t);
            var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e || (e = s()),
            o.token = e,
            o.key = n,
            o
        }
        return o(t, e),
        a(t, [{
            'key': 'load',
            'value': function(e, t) {
                var n = this
                  , r = void 0
                  , i = document.getElementsByTagName('head')[0] || document.documentElement
                  , o = -1 == e.indexOf('?') ? '?' : '&';
                e += o + this.key + '=' + u + this.token,
                isNaN(t) && (t = 3e4);
                var a = setTimeout(function() {
                    r && (n.trigger('error'),
                    n.cancel())
                }, t);
                this.cancel = function() {
                    clearTimeout(a),
                    r && r.parentNode && i.removeChild(r),
                    r = null,
                    delete window[u + n.token]
                }
                ,
                window[u + this.token] = function(e) {
                    n.trigger('success', e),
                    n.cancel()
                }
                ,
                setTimeout(function() {
                    r = document.createElement('script'),
                    r.src = e,
                    i.insertBefore(r, i.firstChild)
                }, 0)
            }
        }]),
        t
    }(l)
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(24)
      , s = n(30)
      , u = n(1)
      , c = u.EVENT
      , f = n(35)
      , d = n(37)
      , p = n(38)
      , v = n(41)
      , h = n(45)
      , m = n(18)
      , y = n(43)
      , g = n(19)
      , _ = g.loadStyle;
    e.exports = function(e) {
        function t() {
            return r(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e),
        a(t, [{
            'key': 'init',
            'value': function(e) {
                var t = this;
                e.on(c.DESTROY, function(e) {
                    t.trigger('PlayerDestroy'),
                    t.allOff()
                });
                var n = e.params
                  , r = this.stores.create('params');
                r.define('wrapper', e),
                r.define('playerType', this.playerType);
                for (var i in n)
                    r.define(i.toString().toLocaleLowerCase(), n[i]);
                var o = this.stores.create('storage');
                o.define('player', s('ahplayer')),
                o.define('media', s('ahplayer-' + n.mid)),
                this.add(new p),
                this.add(new h),
                this.add(new v),
                this.add(new f),
                this.add(new d),
                this.add(new m),
                this.initPlayer(),
                this.startup()
            }
        }, {
            'key': 'initPlayer',
            'value': function() {
                var e = this
                  , t = 0
                  , n = void 0;
                this.on({
                    'PreparationStartCheck_load': function(r) {
                        0 === t && (n = e.stores.store('preparation_load'),
                        n.addItem(e.playerType))
                    }
                }),
                _(this.playerStyle, function(r) {
                    t = r ? 1 : -1,
                    r && (e.createUI(),
                    n && n.setItemReady(e.playerType))
                })
            }
        }, {
            'key': 'startup',
            'value': function() {
                this.add(new y)
            }
        }]),
        t
    }(l)
}
, function(e, t, n) {
    var r = n(1)
      , i = r.URL
      , o = {}
      , a = {}
      , l = function(e, t) {
        var n = o[e];
        n || (n = o[e] = []),
        n.push(t)
    }
      , s = function(e, t) {
        var n = o[e];
        n && n.forEach(function(e) {
            return e(t())
        }),
        delete o[e]
    }
      , u = function(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2e3
          , r = a[e];
        if (r)
            1 === r.state ? t(r.factory()) : 0 === r.state && l(e, t);
        else {
            l(e, t),
            r = a[e] = {
                'state': 0
            };
            var o = document.getElementsByTagName('head')[0] || document.documentElement
              , u = document.createElement('script');
            u.src = i.PluginDomain + e + '.js?t=20180422',
            setTimeout(function() {
                o.removeChild(u),
                1 !== r.state && (delete a[e],
                s(e, function() {
                    return null
                }))
            }, n),
            o.insertBefore(u, o.firstChild)
        }
    }
      , c = function(e, t) {
        var n = a[e];
        n || (n = a[e] = {}),
        n.factory = t,
        n.state = 1,
        s(e, t)
    };
    e.exports = {
        'add': c,
        'createPlugin': u
    }
}
, function(e, t) {
    var n = function(e) {
        return document[e] ? document[e] : -1 !== navigator.appName.indexOf('Microsoft Internet') ? document.getElementById(e) : document.embeds && document.embeds[e] ? document.embeds[e] : void 0
    };
    n.support = function() {
        var e = void 0;
        try {
            document.all ? e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash') : navigator.plugins && 0 < navigator.plugins.length && (e = navigator.plugins['Shockwave Flash'])
        } catch (e) {}
        return null != e
    }
    ,
    e.exports = n
}
, function(e, t, n) {
    var r = n(4)
      , i = r.isUndefined
      , o = r.isValue
      , a = 'webkit o moz ms khtml'.split(' ')
      , l = !1
      , s = ''
      , u = void 0
      , c = void 0
      , f = void 0
      , d = void 0
      , p = void 0
      , v = void 0
      , h = void 0
      , m = void 0
      , y = void 0;
    if (o(document.cancelFullScreen))
        l = !0,
        s = '';
    else if (o(document.msExitFullscreen) && o(document.msFullscreenEnabled))
        l = !0,
        s = 'ms';
    else
        for (var g = 0, _ = a.length; g < _; g++)
            if (s = a[g],
            o(document[s + 'CancelFullScreen'])) {
                l = !0;
                break
            }
    if (l) {
        switch ('ms' === s ? s + 'fullscreenchange' : 'MSFullscreenChange',
        s) {
        case '':
            v = 'fullscreenElement';
            break;
        case 'moz':
            v = 'mozFullScreenElement';
            break;
        default:
            v = s + 'FullscreenElement'
        }
        switch (s) {
        case '':
            h = 'requestFullScreen',
            m = 'cancelFullScreen',
            y = 'fullscreenElement';
            break;
        case 'ms':
            h = s + 'RequestFullscreen',
            m = s + 'ExitFullscreen',
            y = s + 'FullscreenElement';
            break;
        default:
            h = s + 'RequestFullScreen',
            m = s + 'CancelFullScreen',
            y = s + 'FullscreenElement'
        }
        u = function(e) {
            return i(e) && (e = document.body),
            document[v] === e
        }
        ,
        c = function(e) {
            return i(e) && (e = document.body),
            e[h]()
        }
        ,
        f = function() {
            return document[m]()
        }
        ,
        d = function() {
            return document[y]
        }
    } else
        u = function() {
            return !1
        }
        ,
        c = function() {
            return null
        }
        ,
        f = function() {
            return null
        }
        ,
        d = function() {
            return null
        }
        ;
    p = function() {
        return l
    }
    ,
    e.exports = {
        'isFullScreen': u,
        'requestFullScreen': c,
        'cancelFullScreen': f,
        'element': d,
        'support': p
    }
}
, function(e, t) {
    var n = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        return function(n, r) {
            return e(n) < e(r) === t ? 1 : -1
        }
    }
      , r = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        return n(function(t) {
            return t[e]
        }, t)
    };
    e.exports = {
        'byNumber': n,
        'byNumberKey': r
    }
}
, function(e, t) {
    e.exports = function() {
        function e() {
            var e = window.screenTop ? window.screenTop : window.screenY
              , t = window.screenLeft ? window.screenLeft : window.screenX
              , n = screen.width + screen.height + e + t + document.body.clientHeight + document.body.clientWidth;
            if ('undefined' !== window.performance && ('function' == typeof window.performance.now && (n += performance.now()),
            'undefined' != typeof window.performance.memory)) {
                var r = performance.memory;
                n += r.totalJSHeapSize + r.usedJSHeapSize + r.jsHeapSizeLimit
            }
            return n
        }
        var t = (new Date).getTime() + e();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(e) {
            var n = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16),
            ('x' == e ? n : 3 & n | 8).toString(16)
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.remove
      , o = (r.hasClass,
    r.append)
      , a = r.toggleClass
      , l = n(3)
      , s = function(e) {
        return '<div class="ahvp-ad-left-time ">\u5e7f\u544a\u8fd8\u6709<span class="time">' + e + '</span>\u79d2</div>'
    }
      , u = void 0
      , c = function(e) {
        i(e),
        a(u, 'ahvp-ad-visible', !1)
    }
      , f = void 0
      , d = void 0
      , p = function() {
        f && (f.stop(),
        f = null,
        d && i(d))
    }
      , v = function(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (t > 0) {
            f = new l(1e3);
            var n = void 0;
            d = o(u, s(t)),
            f.stop(),
            f.on('timer', function(e) {
                d && (n = u.querySelector('.time'),
                n.innerHTML = t - f.currentCount)
            }),
            f.on('timerComplete', function(t) {
                e && e(),
                f.stop(),
                f = null,
                i(d)
            }),
            f.repeatCount = t,
            f.start(),
            a(d, 'ahvp-ad-left-time-visible', !0)
        }
        a(u, 'ahvp-ad-visible', !0)
    }
      , h = function(e) {
        e.querySelector('.ahvp-ad') || (u = document.createElement('div'),
        u.className = 'ahvp-ad',
        e.append(u))
    }
      , m = function() {
        return u
    };
    e.exports = {
        'getADContainerElem': m,
        'adContainer': h,
        'createCloseTimer': v,
        'cancelTimer': p,
        'clean': c
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(2)
      , s = n(8)
      , u = n(14)
      , c = n(5)
      , f = c.os
      , d = 4841
      , p = '//pcmx.autohome.com.cn/app/impress?'
      , v = function(e) {
        function t() {
            return r(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return o(t, e),
        a(t, [{
            'key': 'onError',
            'value': function(e) {
                this.cancel()
            }
        }, {
            'key': 'onSuccess',
            'value': function(e) {
                this.cancel();
                var t = e.value;
                if (0 == t.returncode && t.result) {
                    var n = [];
                    for (k in t.result)
                        n.push(t.result[k]);
                    if (n && n.length > 0) {
                        (function() {
                            for (var e = n[0], t = 0; t < e.length; t++)
                                if ('1' === e[t].ishavead)
                                    return !0;
                            return !1
                        }
                        )() && this.trigger('pcmx_data_success', n[0])
                    }
                }
            }
        }, {
            'key': 'send',
            'value': function() {
                this.loader = new s('pcmx'),
                this.loader.on('error', this.onError.bind(this)),
                this.loader.on('success', this.onSuccess.bind(this)),
                this.loader.load(this.getInfoURL(), 3e3)
            }
        }, {
            'key': 'getInfoURL',
            'value': function() {
                var e = '';
                e = f.ios ? 1 : f.android ? 2 : 3;
                var t = window.Config ? window.Config.InfoId : ''
                  , n = window.Auto
                  , r = ''
                  , i = '';
                return n && (r = n.areautil && n.areautil.getCityId ? n.areautil.getCityId() : '',
                i = n.areautil && n.areautil.getProvinceId ? n.areautil.getProvinceId() : ''),
                p + 'platform=3&islistmodel=1&src=3&a=0&deviceid=&areaid=' + d + '&pageid=' + u() + '&cheplus=' + t + '&city=' + r + '&province=' + i + '&cheplus=' + t + '&screen_width=' + window.screen.width + '&screen_hight=' + window.screen.height + '&pm=' + e
            }
        }, {
            'key': 'cancel',
            'value': function() {
                this.loader.off('error', this.onError.bind(this)),
                this.loader.off('success', this.onSuccess.bind(this))
            }
        }, {
            'key': 'report',
            'value': function(e) {
                e && '' != e && ((new Image).src = e)
            }
        }]),
        t
    }(l);
    e.exports = {
        'ADSInfoServer': v,
        'END_ROLL_ID': d
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(1)
      , a = o.URL;
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'logo'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.accessor
                  , n = e('info').content.player.logo
                  , r = !0
                  , i = n.page
                  , o = n.domain;
                if (o && i) {
                    if (o.length > 0) {
                        r = !1;
                        var l = window.location.href;
                        for (var s in o)
                            if (-1 !== l.indexOf(o[s])) {
                                r = !0;
                                break
                            }
                    }
                }
                t.define('url', n.url ? a.PlayDomain + '/images/logo.png' : ''),
                t.define('instation', r),
                r || t.define('link', i)
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(10)
      , a = o.createPlugin
      , l = 'plugin_';
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'plugins'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.accessor
                  , n = this.trigger
                  , r = this.del
                  , i = this.add
                  , o = this.on
                  , s = (this.off,
                {})
                  , u = {}
                  , c = void 0
                  , f = !0
                  , d = !1
                  , p = function(e) {
                    var t = u[e];
                    c && t && t.checkReady && c.setItemReady(l + e)
                }
                  , v = function(e) {
                    var t = u[e];
                    if (d && t && 0 === t.value) {
                        var r = l + e;
                        t.checkReady && c.addItem(r),
                        n('PluginCreateStart', {
                            'name': e,
                            'state': 0
                        }),
                        a(e, function(t) {
                            var o = void 0
                              , a = u[e];
                            0 === a.value && (t ? (t.name = r,
                            t.params = s[e],
                            i(t),
                            a.value = 1,
                            o = 'PluginCreateSuccess') : (a.value = -1,
                            o = 'PluginCreateError'),
                            n(o, {
                                'name': e,
                                'state': a.value,
                                'plugin': t
                            }),
                            p(e))
                        })
                    }
                }
                  , h = function(e) {
                    return s.hasOwnProperty(e)
                }
                  , m = function(e) {
                    h(e) && (r(l + e),
                    p(e),
                    delete s[e],
                    delete u[e],
                    n('PluginRemove', {
                        'name': e,
                        'state': -1
                    }))
                }
                  , y = function(t, n) {
                    (!!n && n.useInMobile || 'html-m' !== e('params').playerType) && (h(t) || (s[t] = n,
                    u[t] = {
                        'value': 0,
                        'checkReady': f
                    },
                    v(t)))
                }
                  , g = function(e) {
                    for (var t in e)
                        y(t, e[t])
                };
                o({
                    'PreparationStartCheck_load': function(t) {
                        if (e('info').valid) {
                            g(e('info').content.player.plugins),
                            g(e('params').plugins),
                            c = e('preparation_load'),
                            f = !1,
                            d = !0;
                            for (var n in s)
                                v(n)
                        }
                    }
                }),
                t.define('has', h),
                t.define('add', y),
                t.define('del', m)
            }
        }]),
        e
    }()
}
, function(e, t) {
    var n = {}
      , r = {}
      , i = 0
      , o = function(e) {
        return 'ahplayer-style' + (e > 0 ? '-' + e : '')
    }
      , a = function(e, t) {
        var r = n[e];
        r || (r = n[e] = []),
        r.push(t)
    }
      , l = function(e, t, r) {
        var i = n[e];
        i && i.forEach(function(e) {
            return e(t, r)
        }),
        delete n[e]
    }
      , s = function(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2e3
          , s = void 0
          , u = r[e];
        if (u)
            if (s = document.getElementById(o(u.index)),
            1 === u.state) {
                if (s && s === u.style)
                    return void (t && t(!0, s))
            } else if (0 === u.state && s)
                return void (t && a(e, t));
        t && a(e, t),
        s = document.createElement('link'),
        u = r[e] = {
            'state': 0,
            'style': s,
            'index': i
        },
        s.id = o(i),
        s.rel = 'stylesheet',
        s.href = e,
        i++;
        var c = document.getElementsByTagName('head')[0] || document.documentElement
          , f = setTimeout(function() {
            delete r[e],
            c.removeChild(s),
            l(e, !1, null)
        }, n);
        s.onload = function() {
            s.onload = null,
            clearTimeout(f),
            u.state = 1,
            l(e, !0, s)
        }
        ,
        c.insertBefore(s, c.firstChild)
    };
    e.exports = {
        'loadStyle': s
    }
}
, function(e, t, n) {
    var r = n(1)
      , i = r.EVENT
      , o = r.URL
      , a = n(46)
      , l = {}
      , s = []
      , u = function(e) {
        var t = e.value;
        delete l[t.params.pid];
        var n = t.params.index;
        t === s[n] && (s[n] = null)
    }
      , c = function(e) {
        l[e.params.pid] = e,
        s.push(e),
        e.on(i.DESTROY, u)
    }
      , f = function(e) {
        if (!isNaN(e))
            return s[e];
        if (-1 !== e.indexOf('_'))
            return l[e];
        var t = [];
        for (var n in l)
            -1 !== n.indexOf(e) && t.push(l[n]);
        return t.length > 0 ? t : void 0
    };
    f.forEach = function(e) {
        s.forEach(function(t, n) {
            null !== t && e(t, t.params.pid, n)
        })
    }
    ;
    var d = function(e) {
        var t = {};
        if (e)
            for (var n = e.split('&'), r = 0; r < n.length; r++) {
                var i = n[r].split('=');
                t[i[0]] = i[1]
            }
        return t
    }
      , p = function(e, t) {
        if (e) {
            if (!isNaN(e))
                return e + 'px';
            var n = parseInt(e);
            if (e.indexOf('%') > 0)
                return n + '%';
            if (e.indexOf('px') > 0)
                return n + 'px'
        }
        return t || '100%'
    }
      , v = function(e, t, n, r) {
        if (!e.mid) {
            if (!e.vid)
                return;
            e.mid = e.vid
        }
        if (!n && e.container && (n = document.getElementById(e.container)),
        n) {
            var i = e.autostart ? e.autostart.toString() : '0';
            e.autostart = '1' === i || 'true' === i,
            e.mid = e.vid = decodeURI(e.mid).split(' ').join(''),
            e.width = p(e.width),
            e.height = p(e.height),
            e.index = s.length,
            e.pid = 'ahmp_player_' + e.mid + '_' + e.index;
            var o = document.createElement('div');
            o.id = e.pid,
            o.style.width = e.width,
            o.style.height = e.height,
            o.innerHTML = '\u64ad\u653e\u5668\u52a0\u8f7d\u4e2d...',
            r ? n.parentNode.replaceChild(o, n) : n.appendChild(o);
            var l = a(e);
            if (c(l),
            t)
                for (var u in t)
                    l.on(u, t[u]);
            return l
        }
    }
      , h = function() {
        for (var e = document.getElementsByTagName('script'), t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            0 !== r.src.indexOf(o.JSPlayerEntrance) && 0 !== r.src.indexOf('http:' + o.JSPlayerEntrance) && 0 !== r.src.indexOf('https:' + o.JSPlayerEntrance) && 0 !== r.src.indexOf('http://p.vp.autohome.com.cn/api/player') || t.push(r)
        }
        for (var i = 0; i < t.length; i++) {
            var a = t[i]
              , l = a.src;
            if (-1 !== l.indexOf('?')) {
                var s = d(l.split('?')[1]);
                if (s.mid || s.vid) {
                    a.src = '';
                    var u = void 0;
                    s.container ? (a.parentNode.removeChild(a),
                    u = v(s)) : u = v(s, null, a, !0),
                    s.callback && window[s.callback] && window[s.callback](u)
                }
            }
        }
    };
    e.exports = {
        'player': f,
        'newPlayer': v,
        'render': h
    }
}
, function(e, t, n) {
    var r, i;
    /*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
    !function(o, a) {
        'use strict';
        r = a,
        (i = 'function' == typeof r ? r.call(t, n, t, e) : r) !== undefined && (e.exports = i)
    }(0, function() {
        var e, t, n, r, i = Function.call, o = Object.prototype, a = i.bind(o.hasOwnProperty), l = i.bind(o.propertyIsEnumerable), s = i.bind(o.toString), u = a(o, '__defineGetter__');
        u && (e = i.bind(o.__defineGetter__),
        t = i.bind(o.__defineSetter__),
        n = i.bind(o.__lookupGetter__),
        r = i.bind(o.__lookupSetter__));
        var c = function(e) {
            return null == e || 'object' != typeof e && 'function' != typeof e
        };
        Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
            var t = e.__proto__;
            return t || null === t ? t : '[object Function]' === s(e.constructor) ? e.constructor.prototype : e instanceof Object ? o : null
        }
        );
        var f = function(e) {
            try {
                return e.sentinel = 0,
                0 === Object.getOwnPropertyDescriptor(e, 'sentinel').value
            } catch (o) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var d = f({});
            if (!('undefined' == typeof document || f(document.createElement('div'))) || !d)
                var p = Object.getOwnPropertyDescriptor
        }
        if (!Object.getOwnPropertyDescriptor || p) {
            Object.getOwnPropertyDescriptor = function(e, t) {
                if (c(e))
                    throw new TypeError('Object.getOwnPropertyDescriptor called on a non-object: ' + e);
                if (p)
                    try {
                        return p.call(Object, e, t)
                    } catch (e) {}
                var i;
                if (!a(e, t))
                    return i;
                if (i = {
                    'enumerable': l(e, t),
                    'configurable': !0
                },
                u) {
                    var s = e.__proto__
                      , f = e !== o;
                    f && (e.__proto__ = o);
                    var d = n(e, t)
                      , v = r(e, t);
                    if (f && (e.__proto__ = s),
                    d || v)
                        return d && (i.get = d),
                        v && (i.set = v),
                        i
                }
                return i.value = e[t],
                i.writable = !0,
                i
            }
        }
        if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
            return Object.keys(e)
        }
        ),
        !Object.create) {
            var v, h = !({
                '__proto__': null
            }instanceof Object), m = function() {
                if (!document.domain)
                    return !1;
                try {
                    return !!new ActiveXObject('htmlfile')
                } catch (i) {
                    return !1
                }
            }, y = function() {
                var e, t;
                t = new ActiveXObject('htmlfile');
                var n = 'script';
                return t.write('<' + n + '></' + n + '>'),
                t.close(),
                e = t.parentWindow.Object.prototype,
                t = null,
                e
            }, g = function() {
                var e, t = document.createElement('iframe'), n = document.body || document.documentElement;
                return t.style.display = 'none',
                n.appendChild(t),
                t.src = 'javascript:',
                e = t.contentWindow.Object.prototype,
                n.removeChild(t),
                t = null,
                e
            };
            v = h || 'undefined' == typeof document ? function() {
                return {
                    '__proto__': null
                }
            }
            : function() {
                var e = m() ? y() : g();
                delete e.constructor,
                delete e.hasOwnProperty,
                delete e.propertyIsEnumerable,
                delete e.isPrototypeOf,
                delete e.toLocaleString,
                delete e.toString,
                delete e.valueOf;
                var t = function() {};
                return t.prototype = e,
                v = function() {
                    return new t
                }
                ,
                new t
            }
            ,
            Object.create = function(e, t) {
                var n, r = function() {};
                if (null === e)
                    n = v();
                else {
                    if (null !== e && c(e))
                        throw new TypeError('Object prototype may only be an Object or null');
                    r.prototype = e,
                    n = new r,
                    n.__proto__ = e
                }
                return void 0 !== t && Object.defineProperties(n, t),
                n
            }
        }
        var _ = function(e) {
            try {
                return Object.defineProperty(e, 'sentinel', {}),
                'sentinel'in e
            } catch (o) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var b = _({})
              , w = 'undefined' == typeof document || _(document.createElement('div'));
            if (!b || !w)
                var E = Object.defineProperty
                  , x = Object.defineProperties
        }
        if (!Object.defineProperty || E) {
            Object.defineProperty = function(i, a, l) {
                if (c(i))
                    throw new TypeError('Object.defineProperty called on non-object: ' + i);
                if (c(l))
                    throw new TypeError('Property description must be an object: ' + l);
                if (E)
                    try {
                        return E.call(Object, i, a, l)
                    } catch (s) {}
                if ('value'in l)
                    if (u && (n(i, a) || r(i, a))) {
                        var s = i.__proto__;
                        i.__proto__ = o,
                        delete i[a],
                        i[a] = l.value,
                        i.__proto__ = s
                    } else
                        i[a] = l.value;
                else {
                    var f = 'get'in l
                      , d = 'set'in l;
                    if (!u && (f || d))
                        throw new TypeError('getters & setters can not be defined on this javascript engine');
                    f && e(i, a, l.get),
                    d && t(i, a, l.set)
                }
                return i
            }
        }
        Object.defineProperties && !x || (Object.defineProperties = function(e, t) {
            if (x)
                try {
                    return x.call(Object, e, t)
                } catch (a) {}
            return Object.keys(t).forEach(function(n) {
                '__proto__' !== n && Object.defineProperty(e, n, t[n])
            }),
            e
        }
        ),
        Object.seal || (Object.seal = function(e) {
            if (Object(e) !== e)
                throw new TypeError('Object.seal can only be called on Objects.');
            return e
        }
        ),
        Object.freeze || (Object.freeze = function(e) {
            if (Object(e) !== e)
                throw new TypeError('Object.freeze can only be called on Objects.');
            return e
        }
        );
        try {
            Object.freeze(function() {})
        } catch (T) {
            Object.freeze = function(e) {
                return function(t) {
                    return 'function' == typeof t ? t : e(t)
                }
            }(Object.freeze)
        }
        Object.preventExtensions || (Object.preventExtensions = function(e) {
            if (Object(e) !== e)
                throw new TypeError('Object.preventExtensions can only be called on Objects.');
            return e
        }
        ),
        Object.isSealed || (Object.isSealed = function(e) {
            if (Object(e) !== e)
                throw new TypeError('Object.isSealed can only be called on Objects.');
            return !1
        }
        ),
        Object.isFrozen || (Object.isFrozen = function(e) {
            if (Object(e) !== e)
                throw new TypeError('Object.isFrozen can only be called on Objects.');
            return !1
        }
        ),
        Object.isExtensible || (Object.isExtensible = function(e) {
            if (Object(e) !== e)
                throw new TypeError('Object.isExtensible can only be called on Objects.');
            for (var t = ''; a(e, t); )
                t += '?';
            e[t] = !0;
            var n = a(e, t);
            return delete e[t],
            n
        }
        )
    })
}
, function(e, t, n) {
    var r, i;
    /*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
    !function(o, a) {
        'use strict';
        r = a,
        (i = 'function' == typeof r ? r.call(t, n, t, e) : r) !== undefined && (e.exports = i)
    }(0, function() {
        var e, t, n = Array, r = n.prototype, i = Object, o = i.prototype, a = Function, l = a.prototype, s = String, u = s.prototype, c = Number, f = c.prototype, d = r.slice, p = r.splice, v = r.push, h = r.unshift, m = r.concat, y = r.join, g = l.call, _ = l.apply, b = Math.max, w = Math.min, E = o.toString, x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag, T = Function.prototype.toString, S = /^\s*class /, P = function(e) {
            try {
                var t = T.call(e)
                  , n = t.replace(/\/\/.*\n/g, '')
                  , r = n.replace(/\/\*[.\s\S]*\*\//g, '')
                  , i = r.replace(/\n/gm, ' ').replace(/ {2}/g, ' ');
                return S.test(i)
            } catch (l) {
                return !1
            }
        }, O = function(e) {
            try {
                return !P(e) && (T.call(e),
                !0)
            } catch (r) {
                return !1
            }
        }, k = '[object Function]', L = '[object GeneratorFunction]', e = function(e) {
            if (!e)
                return !1;
            if ('function' != typeof e && 'object' != typeof e)
                return !1;
            if (x)
                return O(e);
            if (P(e))
                return !1;
            var t = E.call(e);
            return t === k || t === L
        }, M = RegExp.prototype.exec, C = function(e) {
            try {
                return M.call(e),
                !0
            } catch (r) {
                return !1
            }
        };
        t = function(e) {
            return 'object' == typeof e && (x ? C(e) : '[object RegExp]' === E.call(e))
        }
        ;
        var j, N = String.prototype.valueOf, R = function(e) {
            try {
                return N.call(e),
                !0
            } catch (r) {
                return !1
            }
        };
        j = function(e) {
            return 'string' == typeof e || 'object' == typeof e && (x ? R(e) : '[object String]' === E.call(e))
        }
        ;
        var I = i.defineProperty && function() {
            try {
                var e = {};
                i.defineProperty(e, 'x', {
                    'enumerable': !1,
                    'value': e
                });
                for (var t in e)
                    return !1;
                return e.x === e
            } catch (o) {
                return !1
            }
        }()
          , D = function(e) {
            var t;
            return t = I ? function(e, t, n, r) {
                !r && t in e || i.defineProperty(e, t, {
                    'configurable': !0,
                    'enumerable': !1,
                    'writable': !0,
                    'value': n
                })
            }
            : function(e, t, n, r) {
                !r && t in e || (e[t] = n)
            }
            ,
            function(n, r, i) {
                for (var o in r)
                    e.call(r, o) && t(n, o, r[o], i)
            }
        }(o.hasOwnProperty)
          , F = function(e) {
            var t = typeof e;
            return null === e || 'object' !== t && 'function' !== t
        }
          , A = c.isNaN || function(e) {
            return e !== e
        }
          , q = {
            'ToInteger': function(e) {
                var t = +e;
                return A(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))),
                t
            },
            'ToPrimitive': function(t) {
                var n, r, i;
                if (F(t))
                    return t;
                if (r = t.valueOf,
                e(r) && (n = r.call(t),
                F(n)))
                    return n;
                if (i = t.toString,
                e(i) && (n = i.call(t),
                F(n)))
                    return n;
                throw new TypeError
            },
            'ToObject': function(e) {
                if (null == e)
                    throw new TypeError('can\'t convert ' + e + ' to object');
                return i(e)
            },
            'ToUint32': function(e) {
                return e >>> 0
            }
        }
          , B = function() {};
        D(l, {
            'bind': function(t) {
                var n = this;
                if (!e(n))
                    throw new TypeError('Function.prototype.bind called on incompatible ' + n);
                for (var r, o = d.call(arguments, 1), l = function() {
                    if (this instanceof r) {
                        var e = _.call(n, this, m.call(o, d.call(arguments)));
                        return i(e) === e ? e : this
                    }
                    return _.call(n, t, m.call(o, d.call(arguments)))
                }, s = b(0, n.length - o.length), u = [], c = 0; c < s; c++)
                    v.call(u, '$' + c);
                return r = a('binder', 'return function (' + y.call(u, ',') + '){ return binder.apply(this, arguments); }')(l),
                n.prototype && (B.prototype = n.prototype,
                r.prototype = new B,
                B.prototype = null),
                r
            }
        });
        var Q = g.bind(o.hasOwnProperty)
          , H = g.bind(o.toString)
          , U = g.bind(d)
          , V = _.bind(d);
        if ('object' == typeof document && document && document.documentElement)
            try {
                U(document.documentElement.childNodes)
            } catch (Ct) {
                var Y = U
                  , z = V;
                U = function(e) {
                    for (var t = [], n = e.length; n-- > 0; )
                        t[n] = e[n];
                    return z(t, Y(arguments, 1))
                }
                ,
                V = function(e, t) {
                    return z(U(e), t)
                }
            }
        var W = g.bind(u.slice)
          , G = g.bind(u.split)
          , $ = g.bind(u.indexOf)
          , J = g.bind(v)
          , X = g.bind(o.propertyIsEnumerable)
          , Z = g.bind(r.sort)
          , K = n.isArray || function(e) {
            return '[object Array]' === H(e)
        }
          , ee = 1 !== [].unshift(0);
        D(r, {
            'unshift': function() {
                return h.apply(this, arguments),
                this.length
            }
        }, ee),
        D(n, {
            'isArray': K
        });
        var te = i('a')
          , ne = 'a' !== te[0] || !(0 in te)
          , re = function(e) {
            var t = !0
              , n = !0
              , r = !1;
            if (e)
                try {
                    e.call('foo', function(e, n, r) {
                        'object' != typeof r && (t = !1)
                    }),
                    e.call([1], function() {
                        'use strict';
                        n = 'string' == typeof this
                    }, 'x')
                } catch (a) {
                    r = !0
                }
            return !!e && !r && t && n
        };
        D(r, {
            'forEach': function(t) {
                var n, r = q.ToObject(this), i = ne && j(this) ? G(this, '') : r, o = -1, a = q.ToUint32(i.length);
                if (arguments.length > 1 && (n = arguments[1]),
                !e(t))
                    throw new TypeError('Array.prototype.forEach callback must be a function');
                for (; ++o < a; )
                    o in i && (void 0 === n ? t(i[o], o, r) : t.call(n, i[o], o, r))
            }
        }, !re(r.forEach)),
        D(r, {
            'map': function(t) {
                var r, i = q.ToObject(this), o = ne && j(this) ? G(this, '') : i, a = q.ToUint32(o.length), l = n(a);
                if (arguments.length > 1 && (r = arguments[1]),
                !e(t))
                    throw new TypeError('Array.prototype.map callback must be a function');
                for (var s = 0; s < a; s++)
                    s in o && (l[s] = void 0 === r ? t(o[s], s, i) : t.call(r, o[s], s, i));
                return l
            }
        }, !re(r.map)),
        D(r, {
            'filter': function(t) {
                var n, r, i = q.ToObject(this), o = ne && j(this) ? G(this, '') : i, a = q.ToUint32(o.length), l = [];
                if (arguments.length > 1 && (r = arguments[1]),
                !e(t))
                    throw new TypeError('Array.prototype.filter callback must be a function');
                for (var s = 0; s < a; s++)
                    s in o && (n = o[s],
                    (void 0 === r ? t(n, s, i) : t.call(r, n, s, i)) && J(l, n));
                return l
            }
        }, !re(r.filter)),
        D(r, {
            'every': function(t) {
                var n, r = q.ToObject(this), i = ne && j(this) ? G(this, '') : r, o = q.ToUint32(i.length);
                if (arguments.length > 1 && (n = arguments[1]),
                !e(t))
                    throw new TypeError('Array.prototype.every callback must be a function');
                for (var a = 0; a < o; a++)
                    if (a in i && !(void 0 === n ? t(i[a], a, r) : t.call(n, i[a], a, r)))
                        return !1;
                return !0
            }
        }, !re(r.every)),
        D(r, {
            'some': function(t) {
                var n, r = q.ToObject(this), i = ne && j(this) ? G(this, '') : r, o = q.ToUint32(i.length);
                if (arguments.length > 1 && (n = arguments[1]),
                !e(t))
                    throw new TypeError('Array.prototype.some callback must be a function');
                for (var a = 0; a < o; a++)
                    if (a in i && (void 0 === n ? t(i[a], a, r) : t.call(n, i[a], a, r)))
                        return !0;
                return !1
            }
        }, !re(r.some));
        var ie = !1;
        r.reduce && (ie = 'object' == typeof r.reduce.call('es5', function(e, t, n, r) {
            return r
        })),
        D(r, {
            'reduce': function(t) {
                var n = q.ToObject(this)
                  , r = ne && j(this) ? G(this, '') : n
                  , i = q.ToUint32(r.length);
                if (!e(t))
                    throw new TypeError('Array.prototype.reduce callback must be a function');
                if (0 === i && 1 === arguments.length)
                    throw new TypeError('reduce of empty array with no initial value');
                var o, a = 0;
                if (arguments.length >= 2)
                    o = arguments[1];
                else
                    for (; ; ) {
                        if (a in r) {
                            o = r[a++];
                            break
                        }
                        if (++a >= i)
                            throw new TypeError('reduce of empty array with no initial value')
                    }
                for (; a < i; a++)
                    a in r && (o = t(o, r[a], a, n));
                return o
            }
        }, !ie);
        var oe = !1;
        r.reduceRight && (oe = 'object' == typeof r.reduceRight.call('es5', function(e, t, n, r) {
            return r
        })),
        D(r, {
            'reduceRight': function(t) {
                var n = q.ToObject(this)
                  , r = ne && j(this) ? G(this, '') : n
                  , i = q.ToUint32(r.length);
                if (!e(t))
                    throw new TypeError('Array.prototype.reduceRight callback must be a function');
                if (0 === i && 1 === arguments.length)
                    throw new TypeError('reduceRight of empty array with no initial value');
                var o, a = i - 1;
                if (arguments.length >= 2)
                    o = arguments[1];
                else
                    for (; ; ) {
                        if (a in r) {
                            o = r[a--];
                            break
                        }
                        if (--a < 0)
                            throw new TypeError('reduceRight of empty array with no initial value')
                    }
                if (a < 0)
                    return o;
                do {
                    a in r && (o = t(o, r[a], a, n))
                } while (a--);return o
            }
        }, !oe);
        var ae = r.indexOf && -1 !== [0, 1].indexOf(1, 2);
        D(r, {
            'indexOf': function(e) {
                var t = ne && j(this) ? G(this, '') : q.ToObject(this)
                  , n = q.ToUint32(t.length);
                if (0 === n)
                    return -1;
                var r = 0;
                for (arguments.length > 1 && (r = q.ToInteger(arguments[1])),
                r = r >= 0 ? r : b(0, n + r); r < n; r++)
                    if (r in t && t[r] === e)
                        return r;
                return -1
            }
        }, ae);
        var le = r.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
        D(r, {
            'lastIndexOf': function(e) {
                var t = ne && j(this) ? G(this, '') : q.ToObject(this)
                  , n = q.ToUint32(t.length);
                if (0 === n)
                    return -1;
                var r = n - 1;
                for (arguments.length > 1 && (r = w(r, q.ToInteger(arguments[1]))),
                r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
                    if (r in t && e === t[r])
                        return r;
                return -1
            }
        }, le);
        var se = function() {
            var e = [1, 2]
              , t = e.splice();
            return 2 === e.length && K(t) && 0 === t.length
        }();
        D(r, {
            'splice': function(e, t) {
                return 0 === arguments.length ? [] : p.apply(this, arguments)
            }
        }, !se);
        var ue = function() {
            var e = {};
            return r.splice.call(e, 0, 0, 1),
            1 === e.length
        }();
        D(r, {
            'splice': function(e, t) {
                if (0 === arguments.length)
                    return [];
                var n = arguments;
                return this.length = b(q.ToInteger(this.length), 0),
                arguments.length > 0 && 'number' != typeof t && (n = U(arguments),
                n.length < 2 ? J(n, this.length - e) : n[1] = q.ToInteger(t)),
                p.apply(this, n)
            }
        }, !ue);
        var ce = function() {
            var e = new n(1e5);
            return e[8] = 'x',
            e.splice(1, 1),
            7 === e.indexOf('x')
        }()
          , fe = function() {
            var e = 256
              , t = [];
            return t[e] = 'a',
            t.splice(e + 1, 0, 'b'),
            'a' === t[e]
        }();
        D(r, {
            'splice': function(e, t) {
                for (var n, r = q.ToObject(this), i = [], o = q.ToUint32(r.length), a = q.ToInteger(e), l = a < 0 ? b(o + a, 0) : w(a, o), u = w(b(q.ToInteger(t), 0), o - l), c = 0; c < u; )
                    n = s(l + c),
                    Q(r, n) && (i[c] = r[n]),
                    c += 1;
                var f, d = U(arguments, 2), p = d.length;
                if (p < u) {
                    c = l;
                    for (var v = o - u; c < v; )
                        n = s(c + u),
                        f = s(c + p),
                        Q(r, n) ? r[f] = r[n] : delete r[f],
                        c += 1;
                    c = o;
                    for (var h = o - u + p; c > h; )
                        delete r[c - 1],
                        c -= 1
                } else if (p > u)
                    for (c = o - u; c > l; )
                        n = s(c + u - 1),
                        f = s(c + p - 1),
                        Q(r, n) ? r[f] = r[n] : delete r[f],
                        c -= 1;
                c = l;
                for (var m = 0; m < d.length; ++m)
                    r[c] = d[m],
                    c += 1;
                return r.length = o - u + p,
                i
            }
        }, !ce || !fe);
        var de, pe = r.join;
        try {
            de = '1,2,3' !== Array.prototype.join.call('123', ',')
        } catch (Ct) {
            de = !0
        }
        de && D(r, {
            'join': function(e) {
                var t = void 0 === e ? ',' : e;
                return pe.call(j(this) ? G(this, '') : this, t)
            }
        }, de);
        var ve = '1,2' !== [1, 2].join(undefined);
        ve && D(r, {
            'join': function(e) {
                var t = void 0 === e ? ',' : e;
                return pe.call(this, t)
            }
        }, ve);
        var he = function(e) {
            for (var t = q.ToObject(this), n = q.ToUint32(t.length), r = 0; r < arguments.length; )
                t[n + r] = arguments[r],
                r += 1;
            return t.length = n + r,
            n + r
        }
          , me = function() {
            var e = {};
            return 1 !== Array.prototype.push.call(e, undefined) || 1 !== e.length || 'undefined' != typeof e[0] || !Q(e, 0)
        }();
        D(r, {
            'push': function(e) {
                return K(this) ? v.apply(this, arguments) : he.apply(this, arguments)
            }
        }, me);
        var ye = function() {
            var e = [];
            return 1 !== e.push(undefined) || 1 !== e.length || 'undefined' != typeof e[0] || !Q(e, 0)
        }();
        D(r, {
            'push': he
        }, ye),
        D(r, {
            'slice': function(e, t) {
                var n = j(this) ? G(this, '') : this;
                return V(n, arguments)
            }
        }, ne);
        var ge = function() {
            try {
                [1, 2].sort(null)
            } catch (n) {
                try {
                    [1, 2].sort({})
                } catch (r) {
                    return !1
                }
            }
            return !0
        }()
          , _e = function() {
            try {
                return [1, 2].sort(/a/),
                !1
            } catch (n) {}
            return !0
        }()
          , be = function() {
            try {
                return [1, 2].sort(undefined),
                !0
            } catch (n) {}
            return !1
        }();
        D(r, {
            'sort': function(t) {
                if (void 0 === t)
                    return Z(this);
                if (!e(t))
                    throw new TypeError('Array.prototype.sort callback must be a function');
                return Z(this, t)
            }
        }, ge || !be || !_e);
        var we = !X({
            'toString': null
        }, 'toString')
          , Ee = X(function() {}, 'prototype')
          , xe = !Q('x', '0')
          , Te = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
        }
          , Se = {
            '$window': !0,
            '$console': !0,
            '$parent': !0,
            '$self': !0,
            '$frame': !0,
            '$frames': !0,
            '$frameElement': !0,
            '$webkitIndexedDB': !0,
            '$webkitStorageInfo': !0,
            '$external': !0,
            '$width': !0,
            '$height': !0,
            '$top': !0,
            '$localStorage': !0
        }
          , Pe = function() {
            if ('undefined' == typeof window)
                return !1;
            for (var e in window)
                try {
                    !Se['$' + e] && Q(window, e) && null !== window[e] && 'object' == typeof window[e] && Te(window[e])
                } catch (r) {
                    return !0
                }
            return !1
        }()
          , Oe = function(e) {
            if ('undefined' == typeof window || !Pe)
                return Te(e);
            try {
                return Te(e)
            } catch (r) {
                return !1
            }
        }
          , ke = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']
          , Le = ke.length
          , Me = function(e) {
            return '[object Arguments]' === H(e)
        }
          , Ce = function(t) {
            return null !== t && 'object' == typeof t && 'number' == typeof t.length && t.length >= 0 && !K(t) && e(t.callee)
        }
          , je = Me(arguments) ? Me : Ce;
        D(i, {
            'keys': function(t) {
                var n = e(t)
                  , r = je(t)
                  , i = null !== t && 'object' == typeof t
                  , o = i && j(t);
                if (!i && !n && !r)
                    throw new TypeError('Object.keys called on a non-object');
                var a = []
                  , l = Ee && n;
                if (o && xe || r)
                    for (var u = 0; u < t.length; ++u)
                        J(a, s(u));
                if (!r)
                    for (var c in t)
                        l && 'prototype' === c || !Q(t, c) || J(a, s(c));
                if (we)
                    for (var f = Oe(t), d = 0; d < Le; d++) {
                        var p = ke[d];
                        f && 'constructor' === p || !Q(t, p) || J(a, p)
                    }
                return a
            }
        });
        var Ne = i.keys && function() {
            return 2 === i.keys(arguments).length
        }(1, 2)
          , Re = i.keys && function() {
            var e = i.keys(arguments);
            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
        }(1)
          , Ie = i.keys;
        D(i, {
            'keys': function(e) {
                return Ie(je(e) ? U(e) : e)
            }
        }, !Ne || Re);
        var De, Fe, Ae = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(), qe = new Date(-0x55d318d56a724), Be = new Date(14496624e5), Qe = 'Mon, 01 Jan -45875 11:59:59 GMT' !== qe.toUTCString();
        qe.getTimezoneOffset() < -720 ? (De = 'Tue Jan 02 -45875' !== qe.toDateString(),
        Fe = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Be))) : (De = 'Mon Jan 01 -45875' !== qe.toDateString(),
        Fe = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Be)));
        var He = g.bind(Date.prototype.getFullYear)
          , Ue = g.bind(Date.prototype.getMonth)
          , Ve = g.bind(Date.prototype.getDate)
          , Ye = g.bind(Date.prototype.getUTCFullYear)
          , ze = g.bind(Date.prototype.getUTCMonth)
          , We = g.bind(Date.prototype.getUTCDate)
          , Ge = g.bind(Date.prototype.getUTCDay)
          , $e = g.bind(Date.prototype.getUTCHours)
          , Je = g.bind(Date.prototype.getUTCMinutes)
          , Xe = g.bind(Date.prototype.getUTCSeconds)
          , Ze = g.bind(Date.prototype.getUTCMilliseconds)
          , Ke = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          , et = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          , tt = function(e, t) {
            return Ve(new Date(t,e,0))
        };
        D(Date.prototype, {
            'getFullYear': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = He(this);
                return e < 0 && Ue(this) > 11 ? e + 1 : e
            },
            'getMonth': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = He(this)
                  , t = Ue(this);
                return e < 0 && t > 11 ? 0 : t
            },
            'getDate': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = He(this)
                  , t = Ue(this)
                  , n = Ve(this);
                if (e < 0 && t > 11) {
                    if (12 === t)
                        return n;
                    return tt(0, e + 1) - n + 1
                }
                return n
            },
            'getUTCFullYear': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = Ye(this);
                return e < 0 && ze(this) > 11 ? e + 1 : e
            },
            'getUTCMonth': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = Ye(this)
                  , t = ze(this);
                return e < 0 && t > 11 ? 0 : t
            },
            'getUTCDate': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = Ye(this)
                  , t = ze(this)
                  , n = We(this);
                if (e < 0 && t > 11) {
                    if (12 === t)
                        return n;
                    return tt(0, e + 1) - n + 1
                }
                return n
            }
        }, Ae),
        D(Date.prototype, {
            'toUTCString': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = Ge(this)
                  , t = We(this)
                  , n = ze(this)
                  , r = Ye(this)
                  , i = $e(this)
                  , o = Je(this)
                  , a = Xe(this);
                return Ke[e] + ', ' + (t < 10 ? '0' + t : t) + ' ' + et[n] + ' ' + r + ' ' + (i < 10 ? '0' + i : i) + ':' + (o < 10 ? '0' + o : o) + ':' + (a < 10 ? '0' + a : a) + ' GMT'
            }
        }, Ae || Qe),
        D(Date.prototype, {
            'toDateString': function() {
                if (!(this && this instanceof Date))
                    throw new TypeError('this is not a Date object.');
                var e = this.getDay()
                  , t = this.getDate()
                  , n = this.getMonth()
                  , r = this.getFullYear();
                return Ke[e] + ' ' + et[n] + ' ' + (t < 10 ? '0' + t : t) + ' ' + r
            }
        }, Ae || De),
        (Ae || Fe) && (Date.prototype.toString = function() {
            if (!(this && this instanceof Date))
                throw new TypeError('this is not a Date object.');
            var e = this.getDay()
              , t = this.getDate()
              , n = this.getMonth()
              , r = this.getFullYear()
              , i = this.getHours()
              , o = this.getMinutes()
              , a = this.getSeconds()
              , l = this.getTimezoneOffset()
              , s = Math.floor(Math.abs(l) / 60)
              , u = Math.floor(Math.abs(l) % 60);
            return Ke[e] + ' ' + et[n] + ' ' + (t < 10 ? '0' + t : t) + ' ' + r + ' ' + (i < 10 ? '0' + i : i) + ':' + (o < 10 ? '0' + o : o) + ':' + (a < 10 ? '0' + a : a) + ' GMT' + (l > 0 ? '-' : '+') + (s < 10 ? '0' + s : s) + (u < 10 ? '0' + u : u)
        }
        ,
        I && i.defineProperty(Date.prototype, 'toString', {
            'configurable': !0,
            'enumerable': !1,
            'writable': !0
        }));
        var nt = -621987552e5
          , rt = '-000001'
          , it = Date.prototype.toISOString && -1 === new Date(nt).toISOString().indexOf(rt)
          , ot = Date.prototype.toISOString && '1969-12-31T23:59:59.999Z' !== new Date(-1).toISOString()
          , at = g.bind(Date.prototype.getTime);
        D(Date.prototype, {
            'toISOString': function() {
                if (!isFinite(this) || !isFinite(at(this)))
                    throw new RangeError('Date.prototype.toISOString called on non-finite value.');
                var e = Ye(this)
                  , t = ze(this);
                e += Math.floor(t / 12),
                t = (t % 12 + 12) % 12;
                var n = [t + 1, We(this), $e(this), Je(this), Xe(this)];
                e = (e < 0 ? '-' : e > 9999 ? '+' : '') + W('00000' + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                for (var r = 0; r < n.length; ++r)
                    n[r] = W('00' + n[r], -2);
                return e + '-' + U(n, 0, 2).join('-') + 'T' + U(n, 2).join(':') + '.' + W('000' + Ze(this), -3) + 'Z'
            }
        }, it || ot),
        function() {
            try {
                return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(nt).toJSON().indexOf(rt) && Date.prototype.toJSON.call({
                    'toISOString': function() {
                        return !0
                    }
                })
            } catch (n) {
                return !1
            }
        }() || (Date.prototype.toJSON = function(t) {
            var n = i(this)
              , r = q.ToPrimitive(n);
            if ('number' == typeof r && !isFinite(r))
                return null;
            var o = n.toISOString;
            if (!e(o))
                throw new TypeError('toISOString property is not callable');
            return o.call(n)
        }
        );
        var lt = 1e15 === Date.parse('+033658-09-27T01:46:40.000Z')
          , st = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
        if (isNaN(Date.parse('2000-01-01T00:00:00.000Z')) || st || !lt) {
            var ut = Math.pow(2, 31) - 1
              , ct = A(new Date(1970,0,1,0,0,0,ut + 1).getTime());
            Date = function(e) {
                var t = function(n, r, i, o, a, l, u) {
                    var c, f = arguments.length;
                    if (this instanceof e) {
                        var d = l
                          , p = u;
                        if (ct && f >= 7 && u > ut) {
                            var v = Math.floor(u / ut) * ut
                              , h = Math.floor(v / 1e3);
                            d += h,
                            p -= 1e3 * h
                        }
                        c = 1 === f && s(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n,r,i,o,a,d,p) : f >= 6 ? new e(n,r,i,o,a,d) : f >= 5 ? new e(n,r,i,o,a) : f >= 4 ? new e(n,r,i,o) : f >= 3 ? new e(n,r,i) : f >= 2 ? new e(n,r) : f >= 1 ? new e(n instanceof e ? +n : n) : new e
                    } else
                        c = e.apply(this, arguments);
                    return F(c) || D(c, {
                        'constructor': t
                    }, !0),
                    c
                }
                  , n = new RegExp('^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$')
                  , r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
                  , i = function(e, t) {
                    var n = t > 1 ? 1 : 0;
                    return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                }
                  , o = function(t) {
                    var n = 0
                      , r = t;
                    if (ct && r > ut) {
                        var i = Math.floor(r / ut) * ut
                          , o = Math.floor(i / 1e3);
                        n += o,
                        r -= 1e3 * o
                    }
                    return c(new e(1970,0,1,0,0,n,r))
                };
                for (var a in e)
                    Q(e, a) && (t[a] = e[a]);
                return D(t, {
                    'now': e.now,
                    'UTC': e.UTC
                }, !0),
                t.prototype = e.prototype,
                D(t.prototype, {
                    'constructor': t
                }, !0),
                D(t, {
                    'parse': function(t) {
                        var r = n.exec(t);
                        if (r) {
                            var a, l = c(r[1]), s = c(r[2] || 1) - 1, u = c(r[3] || 1) - 1, f = c(r[4] || 0), d = c(r[5] || 0), p = c(r[6] || 0), v = Math.floor(1e3 * c(r[7] || 0)), h = Boolean(r[4] && !r[8]), m = '-' === r[9] ? 1 : -1, y = c(r[10] || 0), g = c(r[11] || 0);
                            return f < (d > 0 || p > 0 || v > 0 ? 24 : 25) && d < 60 && p < 60 && v < 1e3 && s > -1 && s < 12 && y < 24 && g < 60 && u > -1 && u < i(l, s + 1) - i(l, s) && (a = 60 * (24 * (i(l, s) + u) + f + y * m),
                            a = 1e3 * (60 * (a + d + g * m) + p) + v,
                            h && (a = o(a)),
                            -864e13 <= a && a <= 864e13) ? a : NaN
                        }
                        return e.parse.apply(this, arguments)
                    }
                }),
                t
            }(Date)
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }
        );
        var ft = f.toFixed && ('0.000' !== 8e-5.toFixed(3) || '1' !== .9.toFixed(0) || '1.25' !== 1.255.toFixed(2) || '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))
          , dt = {
            'base': 1e7,
            'size': 6,
            'data': [0, 0, 0, 0, 0, 0],
            'multiply': function(e, t) {
                for (var n = -1, r = t; ++n < dt.size; )
                    r += e * dt.data[n],
                    dt.data[n] = r % dt.base,
                    r = Math.floor(r / dt.base)
            },
            'divide': function(e) {
                for (var t = dt.size, n = 0; --t >= 0; )
                    n += dt.data[t],
                    dt.data[t] = Math.floor(n / e),
                    n = n % e * dt.base
            },
            'numToString': function() {
                for (var e = dt.size, t = ''; --e >= 0; )
                    if ('' !== t || 0 === e || 0 !== dt.data[e]) {
                        var n = s(dt.data[e]);
                        '' === t ? t = n : t += W('0000000', 0, 7 - n.length) + n
                    }
                return t
            },
            'pow': function jt(e, t, n) {
                return 0 === t ? n : t % 2 == 1 ? jt(e, t - 1, n * e) : jt(e * e, t / 2, n)
            },
            'log': function(e) {
                for (var t = 0, n = e; n >= 4096; )
                    t += 12,
                    n /= 4096;
                for (; n >= 2; )
                    t += 1,
                    n /= 2;
                return t
            }
        }
          , pt = function(e) {
            var t, n, r, i, o, a, l, u;
            if (t = c(e),
            (t = A(t) ? 0 : Math.floor(t)) < 0 || t > 20)
                throw new RangeError('Number.toFixed called with invalid number of decimals');
            if (n = c(this),
            A(n))
                return 'NaN';
            if (n <= -1e21 || n >= 1e21)
                return s(n);
            if (r = '',
            n < 0 && (r = '-',
            n = -n),
            i = '0',
            n > 1e-21)
                if (o = dt.log(n * dt.pow(2, 69, 1)) - 69,
                a = o < 0 ? n * dt.pow(2, -o, 1) : n / dt.pow(2, o, 1),
                a *= 4503599627370496,
                (o = 52 - o) > 0) {
                    for (dt.multiply(0, a),
                    l = t; l >= 7; )
                        dt.multiply(1e7, 0),
                        l -= 7;
                    for (dt.multiply(dt.pow(10, l, 1), 0),
                    l = o - 1; l >= 23; )
                        dt.divide(1 << 23),
                        l -= 23;
                    dt.divide(1 << l),
                    dt.multiply(1, 1),
                    dt.divide(2),
                    i = dt.numToString()
                } else
                    dt.multiply(0, a),
                    dt.multiply(1 << -o, 0),
                    i = dt.numToString() + W('0.00000000000000000000', 2, 2 + t);
            return t > 0 ? (u = i.length,
            i = u <= t ? r + W('0.0000000000000000000', 0, t - u + 2) + i : r + W(i, 0, u - t) + '.' + W(i, u - t)) : i = r + i,
            i
        };
        D(f, {
            'toFixed': pt
        }, ft);
        var vt = function() {
            try {
                return '1' === 1..toPrecision(undefined)
            } catch (n) {
                return !0
            }
        }()
          , ht = f.toPrecision;
        D(f, {
            'toPrecision': function(e) {
                return void 0 === e ? ht.call(this) : ht.call(this, e)
            }
        }, vt),
        2 !== 'ab'.split(/(?:ab)*/).length || 4 !== '.'.split(/(.?)(.?)/).length || 't' === 'tesst'.split(/(s)*/)[1] || 4 !== 'test'.split(/(?:)/, -1).length || ''.split(/.?/).length || '.'.split(/()()/).length > 1 ? function() {
            var e = 'undefined' == typeof /()??/.exec('')[1]
              , n = Math.pow(2, 32) - 1;
            u.split = function(r, i) {
                var o = String(this);
                if (void 0 === r && 0 === i)
                    return [];
                if (!t(r))
                    return G(this, r, i);
                var a, l, s, u, c = [], f = (r.ignoreCase ? 'i' : '') + (r.multiline ? 'm' : '') + (r.unicode ? 'u' : '') + (r.sticky ? 'y' : ''), d = 0, p = new RegExp(r.source,f + 'g');
                e || (a = new RegExp('^' + p.source + '$(?!\\s)',f));
                var h = void 0 === i ? n : q.ToUint32(i);
                for (l = p.exec(o); l && !((s = l.index + l[0].length) > d && (J(c, W(o, d, l.index)),
                !e && l.length > 1 && l[0].replace(a, function() {
                    for (var e = 1; e < arguments.length - 2; e++)
                        'undefined' == typeof arguments[e] && (l[e] = void 0)
                }),
                l.length > 1 && l.index < o.length && v.apply(c, U(l, 1)),
                u = l[0].length,
                d = s,
                c.length >= h)); )
                    p.lastIndex === l.index && p.lastIndex++,
                    l = p.exec(o);
                return d === o.length ? !u && p.test('') || J(c, '') : J(c, W(o, d)),
                c.length > h ? U(c, 0, h) : c
            }
        }() : '0'.split(void 0, 0).length && (u.split = function(e, t) {
            return void 0 === e && 0 === t ? [] : G(this, e, t)
        }
        );
        var mt = u.replace;
        (function() {
            var e = [];
            return 'x'.replace(/x(.)?/g, function(t, n) {
                J(e, n)
            }),
            1 === e.length && 'undefined' == typeof e[0]
        }
        )() || (u.replace = function(n, r) {
            var i = e(r)
              , o = t(n) && /\)[*?]/.test(n.source);
            if (i && o) {
                var a = function(e) {
                    var t = arguments.length
                      , i = n.lastIndex;
                    n.lastIndex = 0;
                    var o = n.exec(e) || [];
                    return n.lastIndex = i,
                    J(o, arguments[t - 2], arguments[t - 1]),
                    r.apply(this, o)
                };
                return mt.call(this, n, a)
            }
            return mt.call(this, n, r)
        }
        );
        var yt = u.substr
          , gt = ''.substr && 'b' !== '0b'.substr(-1);
        D(u, {
            'substr': function(e, t) {
                var n = e;
                return e < 0 && (n = b(this.length + e, 0)),
                yt.call(this, n, t)
            }
        }, gt);
        var _t = '\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff'
          , bt = '\u200b'
          , wt = '[' + _t + ']'
          , Et = new RegExp('^' + wt + wt + '*')
          , xt = new RegExp(wt + wt + '*$')
          , Tt = u.trim && (_t.trim() || !bt.trim());
        D(u, {
            'trim': function() {
                if (void 0 === this || null === this)
                    throw new TypeError('can\'t convert ' + this + ' to object');
                return s(this).replace(Et, '').replace(xt, '')
            }
        }, Tt);
        var St = g.bind(String.prototype.trim)
          , Pt = u.lastIndexOf && -1 !== 'abc\u3042\u3044'.lastIndexOf('\u3042\u3044', 2);
        D(u, {
            'lastIndexOf': function(e) {
                if (void 0 === this || null === this)
                    throw new TypeError('can\'t convert ' + this + ' to object');
                for (var t = s(this), n = s(e), r = arguments.length > 1 ? c(arguments[1]) : NaN, i = A(r) ? Infinity : q.ToInteger(r), o = w(b(i, 0), t.length), a = n.length, l = o + a; l > 0; ) {
                    l = b(0, l - a);
                    var u = $(W(t, l, o + a), n);
                    if (-1 !== u)
                        return l + u
                }
                return -1
            }
        }, Pt);
        var Ot = u.lastIndexOf;
        if (D(u, {
            'lastIndexOf': function(e) {
                return Ot.apply(this, arguments)
            }
        }, 1 !== u.lastIndexOf.length),
        8 === parseInt(_t + '08') && 22 === parseInt(_t + '0x16') || (parseInt = function(e) {
            var t = /^[-+]?0[xX]/;
            return function(n, r) {
                var i = St(String(n))
                  , o = c(r) || (t.test(i) ? 16 : 10);
                return e(i, o)
            }
        }(parseInt)),
        1 / parseFloat('-0') != -Infinity && (parseFloat = function(e) {
            return function(t) {
                var n = St(String(t))
                  , r = e(n);
                return 0 === r && '-' === W(n, 0, 1) ? -0 : r
            }
        }(parseFloat)),
        'RangeError: test' !== String(new RangeError('test'))) {
            var kt = function() {
                if (void 0 === this || null === this)
                    throw new TypeError('can\'t convert ' + this + ' to object');
                var e = this.name;
                void 0 === e ? e = 'Error' : 'string' != typeof e && (e = s(e));
                var t = this.message;
                return void 0 === t ? t = '' : 'string' != typeof t && (t = s(t)),
                e ? t ? e + ': ' + t : e : t
            };
            Error.prototype.toString = kt
        }
        if (I) {
            var Lt = function(e, t) {
                if (X(e, t)) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.configurable && (n.enumerable = !1,
                    Object.defineProperty(e, t, n))
                }
            };
            Lt(Error.prototype, 'message'),
            '' !== Error.prototype.message && (Error.prototype.message = ''),
            Lt(Error.prototype, 'name')
        }
        if ('/a/gim' !== String(/a/gim)) {
            var Mt = function() {
                var e = '/' + this.source + '/';
                return this.global && (e += 'g'),
                this.ignoreCase && (e += 'i'),
                this.multiline && (e += 'm'),
                e
            };
            RegExp.prototype.toString = Mt
        }
    })
}
, function(e, t) {
    var n = window.cancelAnimationFrame || window.mozCancelAnimationFrame
      , r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
      , i = function() {
        return r && r
    };
    e.exports = {
        'supportAnimationFrame': i,
        'cancelAnimationFrame': n,
        'requestAnimationFrame': r
    }
}
, function(e, t, n) {
    function r() {
        var e = new a
          , t = new Map;
        this.allOff = function() {
            e.allOff(),
            t.clear()
        }
        ,
        this.off = function(n) {
            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                i[o - 1] = arguments[o];
            var a = t.get(n);
            if (a)
                if (i && i.length >= 1)
                    i.forEach(function(t) {
                        e.off(t, a[t]),
                        delete a[t]
                    });
                else {
                    for (var l in a)
                        e.off(l, a[l]);
                    t['delete'](n)
                }
        }
        ,
        this.on = function(n, r) {
            var i = t.get(n);
            i || (i = {});
            for (var o in r) {
                i[o] && e.off(o, i[o]);
                var a = r[o].bind(n);
                i[o] = a,
                e.on(o, a)
            }
            t.set(n, i)
        }
        ,
        this.trigger = function(t, n) {
            e.trigger(t, n)
        }
    }
    function i() {
        var e = {};
        this.undefine = function(t) {
            return delete e[t]
        }
        ,
        this.define = function(t, n, r) {
            return s(e, t, n, r)
        }
        ,
        this.store = function() {
            return e
        }
    }
    function o() {
        var e = {};
        this.create = function(t) {
            return e[t] = new i
        }
        ,
        this.remove = function(t) {
            return delete e[t]
        }
        ,
        this.accessor = function(t) {
            return e[t]
        }
        ,
        this.store = function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            var i = n.length;
            if (1 !== i) {
                for (var o = {}, a = 0; a < i; a++) {
                    var l = n[a]
                      , s = e[l];
                    s && (o[l] = s.store())
                }
                return o
            }
            var u = e[n[0]];
            if (u)
                return u.store()
        }
        ,
        this.store.forEach = function(t) {
            for (var n in e)
                t(n, e[n].store())
        }
    }
    var a = n(2)
      , l = n(27)
      , s = (l.merge,
    l.define);
    n(28)(),
    e.exports = function() {
        var e = new o
          , t = new r
          , n = function(e) {
            t.on(this, e)
        }
          , i = function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
            t.off.apply(t, [this].concat(n))
        }
          , a = function c(t, r) {
            return r || (r = {}),
            r.store = e.store,
            r.off = i.bind(r),
            r.on = n.bind(r),
            r.display = c,
            t(r)
        }
          , l = {}
          , s = function(n, r) {
            var i = l[n];
            if (i)
                return i.destroy && i.destroy(),
                t.off(i),
                delete l[n],
                r || e.remove(n),
                i
        }
          , u = function f(r, o) {
            var u = r.name;
            s(u, o),
            l[u] = r;
            var c = void 0;
            return o && (c = e.accessor(u)),
            c || (c = e.create(u)),
            r.accessor = c,
            r.store = e.store,
            r.trigger = t.trigger,
            r.display = a,
            r.del = s,
            r.add = f,
            r.off = i.bind(r),
            r.on = n.bind(r),
            r.init && r.init(),
            r
        };
        this.stores = e,
        this.on = n,
        this.off = i,
        this.del = s,
        this.add = u,
        this.display = a,
        this.trigger = t.trigger,
        this.allOff = t.allOff
    }
}
, function(e, t, n) {
    var r = n(3);
    e.exports = function(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click'
          , i = new r(300)
          , o = function(e) {
            i.stop(),
            t(!1)
        }
          , a = function(e) {
            i.running ? (i.stop(),
            t(!0)) : i.start()
        };
        return i.on('timer', o),
        e.addEventListener(n, a),
        {
            'cancel': function() {
                i.stop(),
                i.off('timer', o),
                e.removeEventListener(n, a)
            }
        }
    }
}
, function(e, t, n) {
    var r = n(3)
      , i = n(2)
      , o = n(4)
      , a = o.is
      , l = function(e) {
        var t = e.buffered
          , n = e.duration;
        if (!n || !t || !t.length)
            return 0;
        for (var r = e.currentTime, i = 0, o = t.length; o - i > 1; ) {
            var a = i + Math.ceil((o - i) / 2) - 1
              , l = t.end(a);
            r >= t.start(a) && r <= l ? i = o = a : r > l ? i = a + 1 : o = a
        }
        var s = t.end(i);
        return s > n && (s = n),
        s
    }
      , s = 0
      , u = 10
      , c = 11
      , f = 20
      , d = 21
      , p = 30;
    e.exports = function(e) {
        var t = this
          , n = new i;
        this.on = n.on.bind(n),
        this.off = n.off.bind(n),
        this.trigger = n.trigger.bind(n),
        this.element = e;
        var o = s
          , v = new r(100)
          , h = {
            'loaded': 0,
            'played': 0,
            'total': 0
        }
          , m = function() {
            return o === s
        }
          , y = function() {
            return o >= u && o < p
        }
          , g = function() {
            return y() && o !== c
        }
          , _ = function() {
            return o === u
        }
          , b = function() {
            return o === c
        }
          , w = function() {
            return o === p
        }
          , E = function() {
            return o === f
        }
          , x = function() {
            return o === d
        }
          , T = function() {
            return E() || x()
        }
          , S = void 0
          , P = void 0
          , O = void 0
          , k = void 0
          , L = void 0
          , M = 0
          , C = function() {
            S > 0 && t.seek(S)
        };
        v.on('timer', function(n) {
            if (h.total > 0) {
                var r = e.currentTime;
                if (O && g()) {
                    if (!isNaN(P)) {
                        var i = P !== r && r > .1;
                        if (_())
                            L && !i && ++M >= 11 && (o = d,
                            M = 0,
                            t.trigger('bufferEmpty'));
                        else if (T() && i) {
                            var a = o;
                            o = u,
                            L ? a === f ? t.trigger('seekFull') : a === d && t.trigger('bufferFull') : (L = !0,
                            t.trigger('ready')),
                            C()
                        }
                    }
                    P = r
                }
                _() && !isNaN(r) && (h.played = r),
                h.loaded = l(e),
                t.trigger('progress', {
                    'time': h,
                    'state': o
                })
            }
        });
        var j = function(t) {
            if (y()) {
                if (v.stop(),
                o = s,
                P = NaN,
                h.loaded = 0,
                h.played = 0,
                t) {
                    var n = function r(n) {
                        e.removeEventListener('abort', r),
                        t(!0)
                    };
                    e.addEventListener('abort', n)
                }
                e.src = ''
            } else
                t && t(!1)
        };
        this.stop = function() {
            return j()
        }
        ,
        this.init = function(n, r, i) {
            k = L = !1,
            isNaN(r) && (r = 0),
            j(function() {
                h.played = S = r,
                e.src = t.source = n,
                i && t.start()
            })
        }
        ,
        this.start = function() {
            if (m() && t.source) {
                var n = e.play();
                n && n['catch'](function(e) {
                    t.trigger('startNotAllowed'),
                    o = s
                })
            }
        }
        ,
        this.resume = function() {
            b() || w() ? (o = f,
            e.play()) : t.start()
        }
        ,
        this.pause = function() {
            g() && (o = c,
            e.pause())
        }
        ,
        this.togglePlay = function() {
            w() || b() ? t.resume() : y() ? t.pause() : t.start()
        }
        ,
        this.seek = function(n) {
            h.total <= 0 || isNaN(n) || (n < 0 && (n = 0),
            n >= h.total && (n = Math.max(0, h.total - 5)),
            E() || t.trigger('seekStart'),
            w() && t.resume(),
            b() || (o = f),
            O = !1,
            e.currentTime = h.played = n)
        }
        ,
        this.setVolume = function(n) {
            e.volume = n = Math.max(0, n),
            t.trigger('volume', n)
        }
        ,
        this.getVolume = function() {
            return e.volume
        }
        ,
        this.time = h;
        var N = function(n) {
            var r = 0
              , i = 0
              , o = 0;
            a(e, '[object HTMLVideoElement]') && (i = e.videoWidth,
            o = e.videoHeight),
            e.duration > 0 && (h.total = r = e.duration),
            t.width = i,
            t.height = o,
            t.trigger('metadata', {
                'duration': r,
                'width': i,
                'height': o
            })
        }
          , R = {
            'loadedmetadata': N,
            'play': function(e) {
                v.start(),
                o = f,
                t.trigger(k ? 'resume' : 'start'),
                O = k = !0,
                P = NaN
            },
            'pause': function(e) {
                h.total > 0 && Math.abs(h.total - h.played) > .5 && (o = c,
                t.trigger('pause'))
            },
            'ended': function(e) {
                v.stop(),
                h.played = h.total,
                o = p,
                t.trigger('finish')
            },
            'seeked': function(e) {
                S = 0,
                P = NaN,
                O = !0
            },
            'error': function(e) {
                v.stop(),
                o = 40,
                t.trigger('error')
            },
            'webkitbeginfullscreen': function(e) {
                return t.trigger('fullScreen')
            },
            'webkitendfullscreen': function(n) {
                e.controls = !1,
                t.trigger('normalScreen')
            }
        };
        for (var I in R)
            e.addEventListener(I, R[I])
    }
}
, function(e, t) {
    var n = function(e) {
        var t = {};
        for (var n in e)
            t[n] = e[n];
        return t
    }
      , r = function(e, t) {
        var r = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
        e = n(e);
        for (var i in t)
            e.hasOwnProperty(i) && !r || (e[i] = t[i]);
        return e
    }
      , i = {
        'enumerable': !0,
        'configurable': !0
    }
      , o = function(e, t, n, o, a) {
        a = a ? r(i, a) : i;
        var l = o ? {
            'set': n,
            'get': o
        } : {
            'value': n,
            'writable': !1
        };
        Object.defineProperty(e, t, r(l, a))
    };
    e.exports = {
        'shallowCopy': n,
        'merge': r,
        'define': o
    }
}
, function(e, t) {
    e.exports = function() {
        window.Map || (window.Map = function() {
            var e = this
              , t = []
              , n = []
              , r = function(t) {
                Object.defineProperty(e, 'size', {
                    'value': t,
                    'writable': !1,
                    'enumerable': !0,
                    'configurable': !0
                })
            };
            this.set = function(e, i) {
                var o = t.indexOf(e);
                o >= 0 ? n[o] = i : (t.push(e),
                n.push(i),
                r(n.length))
            }
            ,
            this.clear = function() {
                t = [],
                n = [],
                r(0)
            }
            ,
            this['delete'] = function(e) {
                var i = t.indexOf(e);
                i >= 0 && (t.splice(i, 1),
                n.splice(i, 1),
                r(n.length))
            }
            ,
            this.has = function(e) {
                return t.indexOf(e) >= 0
            }
            ,
            this.get = function(e) {
                var r = t.indexOf(e);
                if (r >= 0)
                    return n[r]
            }
            ,
            this.forEach = function(r) {
                r && t.forEach(function(t, i) {
                    r(n[i], t, e)
                })
            }
        }
        )
    }
}
, function(e, t, n) {
    var r = n(12)
      , i = r.isFullScreen
      , o = n(23)
      , a = o.cancelAnimationFrame
      , l = o.requestAnimationFrame
      , s = o.supportAnimationFrame
      , u = n(3);
    e.exports = function(e, t) {
        var n = {
            'full': i(e),
            'width': e.offsetWidth,
            'height': e.offsetHeight
        }
          , r = function() {
            var r = e.offsetWidth
              , o = e.offsetHeight
              , a = i(e);
            r === n.width && o === n.height && a === n.full || (n.width = r,
            n.height = o,
            n.full = a,
            t(r, o, a))
        };
        if (s) {
            var o = void 0
              , c = function d() {
                r(),
                o = l(d)
            };
            o = l(c),
            n.cancel = function() {
                return a(o)
            }
        } else if (window.attachEvent)
            attachEvent('onresize', r),
            n.cancel = function() {
                return e.detachEvent('onresize', r)
            }
            ;
        else {
            var f = new u(32);
            f.on('timer', r),
            f.start(),
            n.cancel = function() {
                return f.stop()
            }
        }
        return n
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(4)
      , a = o.isBoolean
      , l = o.isString
      , s = {}
      , u = {}
      , c = void 0
      , f = function() {
        if (a(c))
            return c;
        'localStorage'in window || (c = !1);
        try {
            window.localStorage.setItem('___test', 'OK');
            var e = window.localStorage.getItem('___test');
            window.localStorage.removeItem('___test'),
            c = 'OK' === e
        } catch (t) {
            c = !1
        }
        return c
    }
      , d = function() {
        function e(t) {
            if (r(this, e),
            this.name = t,
            f()) {
                var n = window.localStorage.getItem(t);
                if (l(n))
                    return void (u[t] = JSON.parse(n))
            }
            u[t] = {}
        }
        return i(e, [{
            'key': 'getValue',
            'value': function(e) {
                return u[this.name][e]
            }
        }, {
            'key': 'setValue',
            'value': function(e, t) {
                var n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2]
                  , r = u[this.name];
                r[e] !== t && (r[e] = t,
                n && this.save())
            }
        }, {
            'key': 'delValue',
            'value': function(e) {
                var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
                delete u[this.name][e],
                t && this.save()
            }
        }, {
            'key': 'save',
            'value': function() {
                if (f()) {
                    var e = u[this.name]
                      , t = JSON.stringify(e);
                    window.localStorage.setItem(this.name, t)
                }
            }
        }, {
            'key': 'del',
            'value': function() {
                u[this.name] = {},
                f() && window.localStorage.removeItem(this.name)
            }
        }]),
        e
    }();
    e.exports = function(e) {
        var t = s[e];
        return t || (t = s[e] = new d(e)),
        t
    }
}
, function(e, t) {
    e.exports = function() {
        return (new Date).getTime() + '_' + Math.round(1e5 * Math.random())
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(15)
      , a = o.adContainer
      , l = n(16)
      , s = l.ADSInfoServer
      , u = n(33);
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'ads'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.display
                  , n = this.accessor
                  , r = this.trigger
                  , i = (this.del,
                this.add,
                this.on)
                  , o = void this.off
                  , l = void 0
                  , c = void 0
                  , f = function() {
                    return o.cancel()
                }
                  , d = function() {
                    if (l)
                        for (var e = 0; e < l.length; e++)
                            if (l[e] && l[e].thirdadurl)
                                for (var t = l[e].thirdadurl.split(','), n = 0; n < t.length; n++)
                                    o.report(decodeURIComponent(t[n]))
                }
                  , p = function() {
                    o || (o = new s),
                    o.on('pcmx_data_success', function(e) {
                        l = e.value,
                        d()
                    }),
                    o.send()
                };
                n.define('getRollData', function(e) {
                    if (l && l.length > 0)
                        for (var t = 0; t < l.length; t++) {
                            if ('0' == l[t].ishavead)
                                return null;
                            if (l[t].type == e)
                                return l[t]
                        }
                    return null
                }),
                n.define('thirdadReport', d),
                n.define('cancel', f),
                n.define('report', function(e) {
                    return o.report(e)
                });
                var v = ['//chejiahao.m.autohome.com.cn/info/', '//chejiahao4.m.autohome.com.cn/info/']
                  , h = window.location.href;
                for (var m in v)
                    if (-1 !== h.indexOf(v[m])) {
                        p();
                        var y = e('params').wrapper.container;
                        a(y),
                        t(u, {
                            'container': y
                        }),
                        i({
                            'MediaFinish': function(e) {
                                r('ADEndRoll', {
                                    'type': 'ADEndRoll'
                                }),
                                c = !0
                            },
                            'MediaResume': function(e) {
                                c && (c = !1,
                                p())
                            },
                            'PlayerDestroy': f
                        });
                        break
                    }
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    var r = n(0)
      , i = r.append
      , o = r.StrictClick
      , a = n(15)
      , l = a.getADContainerElem
      , s = a.createCloseTimer
      , u = a.cancelTimer
      , c = a.clean
      , f = n(16)
      , d = f.END_ROLL_ID;
    e.exports = function(e) {
        var t = this
          , n = e.store
          , r = e.on
          , a = (e.off,
        e.container)
          , f = void e.dispatcher
          , p = function() {
            var e = i(l(), '<div class="ahvp-ad-end"><a class="ahvp-ad-link" href="" target="_blank" ><img class="endroll-endingImg"></a><span class="endroll-tips">\u5e7f\u544a</span><span class="endroll-replaybtn">\u91cd\u64ad</span></div>')
              , r = a.querySelector('.ahvp-ad-link');
            r.href = f.url,
            new o(r,function(e) {
                return n('ads').report(f.thurl)
            }
            ,t),
            s(function() {
                return c(e)
            }, f.playtime ? f.playtime : 15);
            var d = a.querySelector('.endroll-replaybtn');
            new o(d,function(t) {
                u(),
                c(e),
                n('api').play()
            }
            ,t);
            var p = a.querySelector('.endroll-endingImg');
            p.src = f.imgpath,
            p.onload = function() {
                return n('ads').report(f.rdposturl + 'pvid=' + f.pvid + '&tp=0')
            }
        };
        r({
            'ADEndRoll': function(e) {
                (f = n('ads').getRollData(d)) && (n('ads').report(f.rdposturl + 'pvid=' + f.pvid + '&tp=1'),
                p())
            }
        })
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(1)
      , a = o.AD_TYPE;
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'ad'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.on
                  , n = this.accessor
                  , r = this.trigger
                  , i = e('info').content.player.info.adtype;
                if (n.define('adtype', i),
                1 === i) {
                    var o = e('preparation_pre_play');
                    n.define('setPreRollLoadStart', function() {
                        return o.addItem(a.PreRoll)
                    }),
                    n.define('setPreRollStart', function() {
                        return r('ADStart', {
                            'type': a.PreRoll
                        })
                    }),
                    n.define('setPreRollFinish', function() {
                        r('ADFinish', {
                            'type': a.PreRoll
                        }),
                        o.setItemReady(a.PreRoll)
                    });
                    var l = function(t) {
                        e('qualities').enable = t,
                        e('time').enable = t;
                        var n = e('stage');
                        t ? (n.enable = !0,
                        n.play()) : (n.pause(),
                        n.enable = !1)
                    };
                    n.define('setMidRollLoadStart', function() {
                        return null
                    }),
                    n.define('setMidRollStart', function() {
                        r('ADStart', {
                            'type': a.MidRoll
                        }),
                        l(!1)
                    }),
                    n.define('setMidRollFinish', function() {
                        r('ADFinish', {
                            'type': a.MidRoll
                        }),
                        l(!1)
                    }),
                    n.define('setADClick', function() {
                        e('api').pause()
                    }),
                    t({
                        'PreparationStartCheck_pre_play': function(e) {
                            r('ADRequest', {
                                'type': a.PreRoll
                            })
                        },
                        'MediaPause': function(e) {
                            r('ADRequest', {
                                'type': a.PauRoll
                            })
                        },
                        'MediaResume': function(e) {
                            r('ADClear', {
                                'type': a.PauRoll
                            })
                        },
                        'MediaFinish': function(e) {
                            r('ADEnding', {
                                'type': a.Endlay
                            })
                        }
                    })
                }
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(1)
      , a = o.EVENT
      , l = o.URL
      , s = n(19)
      , u = s.loadStyle;
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'api'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this
                  , t = this.accessor
                  , n = this.store
                  , r = this.on
                  , i = function(e, t) {
                    for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                        i[o - 2] = arguments[o];
                    var a = n(e);
                    a && a.hasOwnProperty(t) && a[t].apply(null, i)
                }
                  , o = function(e, t, r) {
                    var i = n(e);
                    i && i.hasOwnProperty(t) && (i[t] = r)
                }
                  , s = function(e, t, r) {
                    var i = n(e);
                    return i && i.hasOwnProperty(t) ? i[t] : r
                };
                t.define('loadStyle', function(e, t, n) {
                    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2e3;
                    1 === e && (t = l.PluginDomain + t),
                    u(t, n, r)
                });
                var c = void 0;
                t.define('numOptions', function() {
                    return null
                }, function() {
                    return c ? c.length : 0
                }),
                t.define('settingOption', function() {
                    return c ? c[0] : null
                }),
                t.define('play', function() {
                    return i('stage', 'play')
                }),
                t.define('pause', function() {
                    return i('stage', 'pause')
                }),
                t.define('togglePlay', function() {
                    return i('stage', 'togglePlay')
                }),
                t.define('seek', function(e) {
                    return i('time', 'seek', e)
                }),
                t.define('position', function(e) {
                    return o('time', 'played', e)
                }, function() {
                    return s('time', 'played', 0)
                }),
                t.define('duration', function() {
                    return null
                }, function() {
                    return s('time', 'total', 0)
                }),
                t.define('setQuality', function(e) {
                    return i('qualities', 'setQuality', e)
                }),
                t.define('getQuality', function() {
                    return s('qualities', 'quality', 0)
                }),
                t.define('fullScreen', function(e) {
                    return o('screen', 'full', e)
                }, function() {
                    return s('screen', 'full', !1)
                }),
                t.define('volume', function(e) {
                    return o('volume', 'value', e)
                }, function() {
                    return s('volume', 'value', 1)
                }),
                t.define('applyPlugin', function(e, t) {
                    return i('plugins', 'add', e, t)
                }),
                t.define('removePlugin', function(e) {
                    return i('plugins', 'del', e)
                });
                var f = this.store('params')
                  , d = f.wrapper
                  , p = t.store();
                d.type = f.playerType,
                d.play = p.play,
                d.pause = p.pause,
                d.togglePlay = p.togglePlay,
                d.seek = p.seek,
                d.timePlayed = function() {
                    return p.position
                }
                ,
                d.timeTotal = function() {
                    return p.duration
                }
                ,
                d.setQuality = p.setQuality,
                d.getQuality = p.getQuality,
                d.isFullScreen = function() {
                    return p.fullScreen
                }
                ,
                d.fullScreen = function(e) {
                    return p.fullScreen = e
                }
                ,
                d.normalScreen = function() {
                    return p.fullScreen = !1
                }
                ,
                d.getVolume = function() {
                    return p.volume
                }
                ,
                d.setVolume = function(e) {
                    return p.volume = e
                }
                ,
                d.applyPlugin = d.addExternalWidget = p.applyPlugin,
                d.removePlugin = d.removeExternalWidget = p.removePlugin,
                d.initOptionsItem = function(t) {
                    (c = t) && c.length > 0 && e.trigger('InitOptionsItem')
                }
                ,
                r({
                    'PlayerReady': function(e) {
                        d.controllable = !0,
                        d.trigger(a.PLAYER_INIT)
                    },
                    'QualityChanged': function(e) {
                        return d.trigger(a.QUALITY_CHANGED, e.value)
                    },
                    'VolumeChange': function(e) {
                        return d.trigger(a.VOLUME_CHANGED, e.value)
                    }
                })
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(13)
      , a = o.byNumberKey;
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'cuepoints'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this
                  , t = this.store('info').content.media.cuepoints
                  , n = a('time');
                t.sort(n);
                var r = this.accessor;
                r.define('add', function(r) {
                    t.push(r),
                    t.sort(n),
                    e.trigger('CuePoint_Add', r)
                }),
                r.define('delete', function(n) {
                    for (var r = void 0, i = 0; i < t.length; i++) {
                        var o = t[i];
                        if (o.id === n) {
                            r = o,
                            t.splice(i, 1);
                            break
                        }
                    }
                    r && e.trigger('CuePoint_Delete', r)
                }),
                r.define('update', function(n) {
                    for (var r = void 0, i = 0; i < t.length; i++) {
                        if (t[i].id === n.id) {
                            r = n,
                            t[i] = n;
                            break
                        }
                    }
                    r && e.trigger('CuePoint_Update', r)
                }),
                r.define('length', function(e) {
                    return null
                }, function() {
                    return t.length
                }),
                r.define('get', function(e) {
                    return t[e]
                }),
                r.define('has', function(e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n].time === e)
                            return !0;
                    return !1
                })
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(5)
      , a = o.os
      , l = n(8)
      , s = n(1)
      , u = s.EVENT
      , c = s.MSG
      , f = s.URL;
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'info'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.accessor
                  , n = this.trigger
                  , r = this.on
                  , i = e('params')
                  , o = i.wrapper
                  , s = i.mid
                  , d = i.pid
                  , p = i.cover
                  , v = i.verify
                  , h = i.userid
                  , m = i._appid
                  , y = i._timestamp
                  , g = i._sign
                  , _ = new l(d)
                  , b = f.GetPlayInfo;
                b += '?mid=' + s,
                b += '&ft=',
                b += a.ios ? 'm3u8' : 'mp4',
                b += '&strategy=',
                b += a.phone || a.tablet ? '2' : '1',
                1 === v && (b += '&verify=1',
                b += '&userid=' + h,
                b += '&_appid=' + m,
                b += '&_timestamp=' + y,
                b += '&_sign=' + g),
                b += '&r=' + Math.random();
                var w = function(e, r) {
                    _.off('error', E),
                    _.off('success', x);
                    var i = c(r);
                    t.define('code', r),
                    t.define('msg', i),
                    e ? n('PlayInfoSuccess', {
                        'code': r,
                        'msg': i
                    }) : (n('PlayInfoError', {
                        'code': r,
                        'msg': i
                    }),
                    o.trigger(u.ERROR, {
                        'error_code': r,
                        'error_msg': i,
                        'error_type': 0
                    }))
                }
                  , E = function(e) {
                    return w(!1, -10)
                }
                  , x = function(e) {
                    var n = e.value
                      , r = n.returncode
                      , i = (n.message,
                    0 === r);
                    if (t.define('valid', i),
                    i)
                        if (n.result.media.qualities.length > 0) {
                            p = p ? decodeURIComponent(p) : n.result.media.images.cover;
                            var o = n.result.media.info;
                            t.define('content', n.result),
                            t.define('cover', p);
                            for (var a in o)
                                t.define(a, o[a]);
                            w(!0, 0)
                        } else
                            w(!1, -20);
                    else
                        w(!1, r)
                }
                  , T = function() {
                    _.off('error', E),
                    _.off('success', x),
                    _.cancel()
                };
                t.define('cancel', T),
                t.define('load', function() {
                    n('PlayInfoLoadStart'),
                    _.on('error', E),
                    _.on('success', x),
                    _.load(b, 1e4)
                }),
                t.define('valid', !1),
                r({
                    'PlayerDestroy': T
                })
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(26)
      , a = n(5)
      , l = a.os
      , s = n(1)
      , u = s.EVENT
      , c = s.MSG;
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'media'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.accessor
                  , t = this.store
                  , n = this.trigger
                  , r = this.on
                  , i = (this.off,
                t('params').wrapper)
                  , a = void 0
                  , s = {
                    'start': function(e) {
                        n('MediaState', 1),
                        n('MediaStart');
                        var r = t('params').mid
                          , o = t('info')
                          , a = o.vtag
                          , l = o.uid;
                        i.trigger(u.PLAY_START, {
                            'vtag': a,
                            'uid': l,
                            'mid': r
                        })
                    },
                    'startNotAllowed': function(e) {
                        n('StartNotAllowed')
                    },
                    'metadata': function(e) {
                        n('MediaMetaData', e.value)
                    },
                    'ready': function(e) {
                        n('MediaReady', a.time);
                        var t = a.source;
                        i.trigger(u.VIDEO_START, {
                            'videoSource': t
                        })
                    },
                    'progress': function(e) {
                        n('MediaProgress', a.time)
                    },
                    'pause': function(e) {
                        n('MediaState', 2),
                        n('MediaPause'),
                        i.trigger(u.PLAY_PAUSE)
                    },
                    'resume': function(e) {
                        n('MediaState', 1),
                        n('MediaResume'),
                        i.trigger(u.PLAY_RESUME)
                    },
                    'finish': function(e) {
                        n('MediaProgress', a.time),
                        n('MediaState', 3),
                        n('MediaFinish'),
                        i.trigger(u.PLAY_FINISH)
                    },
                    'stop': function(e) {
                        n('MediaState', 0),
                        i.trigger(u.STOP, e.value)
                    },
                    'bufferEmpty': function(e) {
                        n('MediaBuffer', 0),
                        i.trigger(u.BUFFER_EMPTY)
                    },
                    'bufferFull': function(e) {
                        n('MediaBuffer', 1),
                        i.trigger(u.BUFFER_FULL)
                    },
                    'error': function(e) {
                        var t = -30
                          , r = c(t);
                        n('MediaError', {
                            'code': t,
                            'msg': r
                        }),
                        i.trigger(u.ERROR, {
                            'error_code': t,
                            'error_msg': r,
                            'error_type': 3,
                            'videoSource': a.source
                        })
                    },
                    'fullScreen': function(e) {
                        l.iphone && n('iPhoneFullScreen', {
                            'flag': !0,
                            'pause': a.isPaused()
                        })
                    },
                    'normalScreen': function(e) {
                        l.iphone && n('iPhoneFullScreen', {
                            'flag': !1,
                            'pause': a.isPaused()
                        })
                    }
                }
                  , f = function() {
                    if (a) {
                        for (var e in s)
                            a.off(e, s[e]);
                        a.stop(),
                        a = null,
                        n('MediaInactive')
                    }
                };
                e.define('detach', f),
                e.define('attach', function(e) {
                    f(),
                    a = new o(e);
                    for (var t in s)
                        a.on(t, s[t]);
                    n('MediaActive', a)
                }),
                e.define('with', function(e, t) {
                    return a ? e(a) : t
                }),
                r({
                    'PlayerDestroy': f
                })
            }
        }]),
        e
    }()
}
, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }();
    e.exports = function() {
        function e() {
            n(this, e),
            this.name = 'preview'
        }
        return r(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store('info').content.media.images.preview
                  , t = this.accessor;
                t.define('unit', e.unit),
                t.define('length', e.urls.length),
                t.define('url', function(t) {
                    return e.urls[t]
                })
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(13)
      , a = o.byNumberKey
      , l = function(e) {
        return parseInt(e.toString().charAt(0))
    };
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'qualities'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.trigger
                  , n = this.accessor
                  , r = e('stage', 'info', 'storage', 'time', 'media')
                  , i = r.stage
                  , o = r.info
                  , s = r.storage
                  , u = r.time
                  , c = r.media
                  , f = a('value', !0)
                  , d = {}
                  , p = o.content.media.qualities;
                p.sort(f);
                for (var v = p.length, h = 0; h < v; h++) {
                    var m = p[h];
                    m.index = h,
                    m.value = l(m.value),
                    d[m.value] = m
                }
                var y = d[s.player.getValue('quality')];
                y || (y = d[l(o.content.player.info.defaultquality)]),
                y || (y = p[0]);
                var g = p[p.length - 1]
                  , _ = {}
                  , b = !1
                  , w = function(e) {
                    return null
                }
                  , E = function() {
                    var e = y.index + 1;
                    return e < p.length && (y = p[e],
                    !0)
                };
                n.define('enable', function(e) {
                    b = e,
                    t('QualitiesEnable', e)
                }, function() {
                    return b
                }),
                n.define('initRestrictions', function(e) {
                    e.sort(f),
                    e.forEach(function(e) {
                        var n = l(e['value']);
                        if (n !== g.value && (_[n] = !0,
                        i.value < 2 && 0 === e['allow'] && n === y.value)) {
                            var r = y;
                            E() && 1 === i.value && t('QualityChanged', {
                                'from': r,
                                'to': y
                            })
                        }
                    })
                }),
                n.define('restrict', function(e, t) {
                    (e = l(e)) !== g.value && (t ? _[e] = !0 : delete _[e])
                }),
                n.define('length', w, function() {
                    return p.length
                }),
                n.define('get', function(e) {
                    return p[e]
                }),
                n.define('getByValue', function(e) {
                    return d[e]
                }),
                n.define('has', function(e) {
                    return null !== d[e]
                }),
                n.define('quality', w, function() {
                    return y
                }),
                n.define('setQuality', function(e) {
                    if (b) {
                        var n = d[e];
                        if (n && y !== n) {
                            if (_[e])
                                return t('QualityLock', e),
                                !1;
                            s.player.setValue('quality', n.value),
                            u.enable = !1;
                            var r = y;
                            return y = n,
                            t('QualityChanged', {
                                'from': r,
                                'to': y
                            }),
                            c['with'](function(e) {
                                return e.init(y.copy, u.played, !0)
                            }),
                            !0
                        }
                    }
                    return !1
                })
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(12)
      , a = o.cancelFullScreen
      , l = o.requestFullScreen
      , s = o.support
      , u = n(1)
      , c = u.EVENT
      , f = n(29);
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'screen'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this
                  , t = this.store('params').wrapper
                  , n = t.container
                  , r = f(n, function(t, n, i) {
                    return e.trigger('Resize', r)
                });
                this.accessor.define('width', function() {
                    return null
                }, function() {
                    return r.width
                }),
                this.accessor.define('height', function() {
                    return null
                }, function() {
                    return r.height
                }),
                s() ? this.accessor.define('full', function(e) {
                    e === undefined && (e = !r.full),
                    t.trigger(c.FULLSCREEN, {
                        'flag': e
                    }),
                    e ? l(n) : a()
                }, function() {
                    return r.full
                }) : this.accessor.define('full', function(n) {
                    t.trigger(c.FULLSCREEN, {
                        'flag': !0
                    }),
                    e.store('media')['with'](function(e) {
                        var t = e.element;
                        t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitEnterFullscreen ? t.webkitEnterFullscreen() : t.webkitSupportsFullscreen && t.webkitEnterFullscreen()
                    })
                }, function() {
                    return !1
                }),
                this.on({
                    'PlayerDestroy': function() {
                        return r.cancel()
                    }
                })
            }
        }]),
        e
    }()
}
, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }();
    e.exports = function() {
        function e() {
            n(this, e),
            this.name = 'stage'
        }
        return r(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.accessor
                  , n = this.trigger
                  , r = this.on
                  , i = this.off
                  , o = e('media', 'time', 'qualities')
                  , a = o.media
                  , l = o.time
                  , s = o.qualities
                  , u = !0;
                t.define('value', 2),
                t.define('enable', function(e) {
                    u = e,
                    n('PlayEnable', e)
                }, function() {
                    return u
                }),
                t.define('play', function() {
                    u && a['with'](function(e) {
                        var t = s.quality.copy;
                        e.source !== t ? e.init(t, l.played, !0) : e.resume()
                    })
                }),
                t.define('pause', function() {
                    u && a['with'](function(e) {
                        e.pause()
                    })
                }),
                t.define('togglePlay', function() {
                    u && a['with'](function(e) {
                        e.togglePlay()
                    })
                }),
                t.define('stop', function() {
                    u && a['with'](function(e) {
                        e.stop()
                    })
                }),
                r({
                    'MediaReady': function(e) {
                        s.enable = !0,
                        l.enable = !0
                    },
                    'MediaError': function(e) {
                        l.enable = !1,
                        s.enable = !1,
                        t.store().enable = !1,
                        n('PlayerError', e.value)
                    },
                    'MediaStart': function(e) {
                        i('MediaStart'),
                        n('PlayerStart')
                    }
                }),
                t.store().play()
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(42)
      , a = n(44)
      , l = n(40)
      , s = n(39)
      , u = n(36)
      , c = n(17)
      , f = (n(34),
    'preparation_')
      , d = 'load'
      , p = 'pre_play'
      , v = function() {
        function e(t) {
            r(this, e),
            this.type = t,
            this.name = f + t
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this
                  , t = this.accessor
                  , n = this.trigger
                  , r = {}
                  , i = !1
                  , o = function() {
                    for (var e in r)
                        if (!r[e])
                            return !1;
                    return !0
                }
                  , a = function() {
                    i && o() && n('PreparationFinished_' + e.type)
                };
                t.define('hasItem', function(e) {
                    return null !== r[e]
                }),
                t.define('addItem', function(e) {
                    return r[e] = !1
                }),
                t.define('setItemReady', function(e) {
                    r[e] = !0,
                    a()
                }),
                t.define('checkFinish', function(t) {
                    i !== t && (t && n('PreparationStartCheck_' + e.type),
                    i = t,
                    a())
                }, function() {
                    return i
                })
            }
        }]),
        e
    }();
    e.exports = function() {
        function e() {
            r(this, e),
            this.name = 'stage'
        }
        return i(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.accessor
                  , n = this.trigger
                  , r = (this.del,
                this.add)
                  , i = this.on
                  , h = (this.off,
                e('params', 'info', 'media'))
                  , m = h.params
                  , y = h.info;
                h.media;
                t.define('value', 0),
                r(new v(d)),
                r(new v(p)),
                i({
                    'PlayInfoSuccess': function(t) {
                        r(new a),
                        r(new l),
                        r(new s),
                        r(new u),
                        r(new c),
                        e(f + d).checkFinish = !0
                    },
                    'PlayInfoError': function(t) {
                        e(f + d).checkFinish = !0
                    },
                    'PreparationFinished_load': function(r) {
                        if (!y.valid)
                            return void n('PlayerError', y);
                        var i = function() {
                            t.undefine('play'),
                            t.undefine('togglePlay'),
                            e(f + p).checkFinish = !0
                        };
                        t.define('play', i),
                        t.define('togglePlay', i),
                        t.define('value', 1),
                        n('PlayerReady'),
                        m.autostart && 'html-pc' === m.playerType ? i() : n('PlayerWaitStart')
                    },
                    'PreparationFinished_pre_play': function(e) {
                        r(new o, !0)
                    }
                }),
                y.load()
            }
        }, {
            'key': 'destroy',
            'value': function() {
                this.del(f + d),
                this.del(f + p)
            }
        }]),
        e
    }()
}
, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }();
    e.exports = function() {
        function e() {
            n(this, e),
            this.name = 'time'
        }
        return r(e, [{
            'key': 'init',
            'value': function() {
                var e = this.store
                  , t = this.on
                  , n = this.accessor
                  , r = e('info', 'params', 'storage', 'media')
                  , i = r.info
                  , o = r.params
                  , a = r.storage
                  , l = r.media
                  , s = 'html-pc' === o.playerType
                  , u = !1
                  , c = i.duration
                  , f = o.playtime
                  , d = function() {
                    return isNaN(f) || f < 0
                };
                s && d() && (f = a.media.getValue('progress')),
                d() && (f = 0);
                var p = f
                  , v = function(e) {
                    !u || e < 0 || e >= c || (f = e,
                    l['with'](function(t) {
                        return t.seek(e)
                    }))
                };
                t({
                    'MediaProgress': function(e) {
                        if (u) {
                            var t = e.value;
                            f = t.played,
                            p = t.loaded,
                            s && a.media.setValue('progress', f)
                        }
                    },
                    'MediaFinish': function(e) {
                        s && a.media.del()
                    }
                }),
                n.define('enable', function(e) {
                    return u = e
                }, function() {
                    return u
                }),
                n.define('total', c),
                n.define('loaded', function() {
                    return null
                }, function() {
                    return u && l['with'](function(e) {
                        return p = e.time.loaded
                    }),
                    p
                }),
                n.define('played', v, function() {
                    return u && l['with'](function(e) {
                        return f = e.time.played
                    }),
                    f
                }),
                n.define('seek', v)
            }
        }]),
        e
    }()
}
, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }();
    e.exports = function() {
        function e() {
            n(this, e),
            this.name = 'volume'
        }
        return r(e, [{
            'key': 'init',
            'value': function() {
                var e = this
                  , t = this.store('info', 'storage', 'media')
                  , n = (t.info,
                t.storage)
                  , r = t.media
                  , i = void 0
                  , o = n.player.getValue('volume');
                (isNaN(o) || o < 0) && (o = 1,
                n.player.setValue('volume', 1)),
                this.on({
                    'MediaActive': function(e) {
                        return e.value.setVolume(o)
                    }
                }),
                this.accessor.define('value', function(t) {
                    if (t < 0) {
                        var a = -1 === t;
                        if (!a && -2 !== t)
                            return;
                        t = o + (a ? .1 : -.1)
                    }
                    o = Math.round(100 * Math.max(0, Math.min(1, t))) / 100,
                    r['with'](function(e) {
                        return e.setVolume(o)
                    }),
                    e.trigger('VolumeChange', o),
                    clearTimeout(i),
                    i = setTimeout(function() {
                        return n.player.setValue('volume', o)
                    }, 1e3)
                }, function() {
                    return o
                })
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(5)
      , s = l.os
      , u = l.browser
      , c = n(2)
      , f = n(11)
      , d = n(0)
      , p = d.remove
      , v = n(1)
      , h = v.EVENT
      , m = v.PLAYER_TYPE
      , y = n(47)
      , g = n(49)
      , _ = n(48)
      , b = n(51)
      , w = n(50)
      , E = function(e) {
        function t(e, n, o) {
            r(this, t);
            var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return a.params = n,
            a.container = document.getElementById(n.pid),
            e.init(a),
            w(a, o),
            a
        }
        return o(t, e),
        a(t, [{
            'key': 'destroy',
            'value': function() {
                this.trigger(h.DESTROY, this),
                p(this.container),
                this.allOff()
            }
        }, {
            'key': 'addEventListener',
            'value': function(e, t, n) {
                this.on(e, t, n)
            }
        }, {
            'key': 'removeEventListener',
            'value': function(e, t) {
                this.off(e, t)
            }
        }]),
        t
    }(c);
    e.exports = function(e) {
        var t = void 0
          , n = s.phone || s.tablet;
        if (n)
            t = s.android || s.ios ? new _ : new b;
        else {
            var r = e.type;
            u.ie ? r = m.FLASH : r !== m.HTML5 && r !== m.FLASH && (r = m.HTML5);
            var i = !!document.createElement('video').canPlayType;
            t = r !== m.HTML5 && f.support() || !i ? new y : new g
        }
        return new E(t,e,n)
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , o = n(1)
      , a = o.EVENT
      , l = o.URL
      , s = n(7)
      , u = s.PlayerVersion
      , c = n(11);
    e.exports = function() {
        function e() {
            r(this, e)
        }
        return i(e, [{
            'key': 'init',
            'value': function(e) {
                e.type = 'flash';
                var t = e.container
                  , n = e.params
                  , r = n.mid
                  , i = n.autostart
                  , o = n.cover
                  , s = n.playtime
                  , f = n.index
                  , d = n.width
                  , p = n.height
                  , v = n.plugins
                  , h = n.verify
                  , m = n.userid
                  , y = n._appid
                  , g = n._timestamp
                  , _ = n._sign;
                v || (v = {});
                var b = void 0;
                if (e.applyPlugin = e.addExternalWidget = function(e, t) {
                    b ? b.addExternalWidget(e, t) : v[e] = t
                }
                ,
                e.removePlugin = e.removeExternalWidget = function(e) {
                    b ? b.removeExternalWidget(e) : delete v[e]
                }
                ,
                !c.support())
                    return void (t.innerHTML = '\u8bf7\u5b89\u88c5<a href="https://get.adobe.com/cn/flashplayer/">flashplayer</a>');
                var w = 'ahplayer_' + r + '_' + f;
                e.onFlashPlayerInit = function() {
                    if (b = c(w),
                    e.play = function() {
                        b.toPlay(!0)
                    }
                    ,
                    e.pause = function() {
                        b.toPlay(!1)
                    }
                    ,
                    e.togglePlay = function() {
                        b.toPlay()
                    }
                    ,
                    e.seek = function(e, t) {
                        b.seek(e, t)
                    }
                    ,
                    e.interrupt = function() {
                        b.interrupt()
                    }
                    ,
                    e.stop = function() {
                        b.toStop()
                    }
                    ,
                    e.setQuality = function(e) {
                        return b.setQuality(e)
                    }
                    ,
                    e.getQuality = function() {
                        return b.getQuality()
                    }
                    ,
                    e.timePlayed = function() {
                        return b.timePlayed()
                    }
                    ,
                    e.timeTotal = function() {
                        return b.timeTotal()
                    }
                    ,
                    e.getStreamInfo = function() {
                        return String(b.getStreamInfo())
                    }
                    ,
                    e.initOptionsItem = function(e) {
                        b.initOptionsItem(e)
                    }
                    ,
                    e.setPreview = function(e, t) {
                        b.setPreview(e, t)
                    }
                    ,
                    e.normalScreen = function() {
                        b.normalScreen()
                    }
                    ,
                    v)
                        for (var t in v)
                            b.addExternalWidget(t, v[t]);
                    e.ext = e.swf = b,
                    e.controllable = !0,
                    e.trigger(a.PLAYER_INIT)
                }
                ;
                var E = 'mid=' + r;
                i && (E += '&autostart=' + i),
                o && (E += '&cover=' + o),
                s && (E += '&playtime=' + s),
                1 === h && (E += '&verify=1',
                E += '&userid=' + m,
                E += '&_appid=' + y,
                E += '&_timestamp=' + g,
                E += '&_sign=' + _);
                var x = l.FlashPlayerURL + '?v=' + u.flash
                  , T = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="100%" height="100%" id="' + w + '">';
                T += '<param name="movie" value="' + x + '"/>',
                T += '<param name="flashvars" value="' + E + '" />',
                T += '<param name="wmode" value="opaque" />',
                T += '<param name="allowFullScreen" value="true" />',
                T += '<param name="allowScriptAccess" value="always" />',
                T += '<embed src="' + x + '" width="100%" height="100%" name="' + w + '" flashvars="' + E + '" wmode="opaque" allowFullScreen="true" allowScriptAccess="always" pluginspage="//www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" /></object>';
                var S = document.createElement('div');
                S.style.width = d,
                S.style.height = p,
                S.innerHTML = T,
                t.parentNode.replaceChild(S, t),
                e.container = S
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(9)
      , s = n(1)
      , u = s.URL
      , c = n(0)
      , f = c.addClass
      , d = n(2)
      , p = n(6)
      , v = n(57)
      , h = n(52)
      , m = n(53)
      , y = n(54)
      , g = n(55)
      , _ = n(56)
      , b = n(58)
      , w = n(32)
      , E = function(e, t, n) {
        return '\n<table style="border:none; padding:0; margin:0; width:' + e + '; height:' + t + ';">\n    <tr>\n        <td align="center" width="' + e + '" height="' + t + '" style="background:#000; border:none; padding:0; margin:0; color:#FFF; font-size:24px; -webkit-text-size-adjust:none;">' + n + '</td>\n    </tr>\n</table>\n'
    }
      , x = function(e, t, n) {
        return '\n<div class="ahmp-player-poster" style="background-image:url(' + e + ');"></div>\n<div class="ahmp-player-startbtn"></div>\n<video x-webkit-airplay webkit-playsinline playsinline class="ahmp__video__setup" poster="' + e + '"></video>\n<div class="ahmp-player-loading"></div>\n<span class="ahmp-player-toggleplay" style="top: 50%; display: none"></span>\n<section id="ahmp-player-controls" class="ahmp-player-fadeout">\n    <div class="ahmp-player-progressbar">\n        <div class="ahmp-player-loadbar">\n            <div class="ahmp-player-playbar">\n                <div class="ahmp-player-dragbtn"></div>\n            </div>\n        </div>\n    </div>\n    <div class="ahmp-player-time">\n        <em class="ahmp-player-timecurrent">00:00</em><em class="ahmp-player-timetotal">' + n + '</em>\n    </div>\n    <a href="javascript:;" class="ahmp-player-qualitybtn">' + t + '</a>\n    <ul class="ahmp-player-qualities"></ul>\n    <div class="ahmp-player-screenbtn">\n         <span class="ahmp-player-normalscreen"></span>\n        <span class="ahmp-player-fullscreen"></span>\n    </div>\n   \n</section>\n'
    };
    e.exports = function(e) {
        function t() {
            r(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.playerType = 'html-m',
            e.playerStyle = u.PlayDomain + '/css/skin.player.m.css?r=20180419_0941',
            e
        }
        return o(t, e),
        a(t, [{
            'key': 'createUI',
            'value': function() {
                var e = this;
                this.display(function(t) {
                    var n = t.store
                      , r = t.on
                      , i = t.display
                      , o = n('params', 'info', 'media')
                      , a = o.params
                      , l = o.info
                      , s = o.media
                      , u = a.width
                      , c = a.height
                      , T = (a.mid,
                    a.wrapper.container)
                      , S = new d;
                    f(T, 'ahmp-player-container'),
                    r({
                        'PlayerReady': function(t) {
                            var r = n('time', 'qualities')
                              , o = r.time
                              , a = r.qualities;
                            T.innerHTML = x(l.cover, a.quality.desc, p.PLAYER.format(o.total)),
                            s.attach(i(v, {
                                'container': T,
                                'dispatcher': S
                            })),
                            i(h, {
                                'container': T,
                                'dispatcher': S
                            }),
                            i(m, {
                                'container': T,
                                'dispatcher': S
                            }),
                            i(y, {
                                'container': T,
                                'dispatcher': S
                            }),
                            i(g, {
                                'container': T,
                                'dispatcher': S
                            }),
                            i(_, {
                                'container': T,
                                'dispatcher': S
                            }),
                            i(b, {
                                'container': T,
                                'dispatcher': S
                            }),
                            e.add(new w)
                        },
                        'PlayerError': function(e) {
                            T.innerHTML = E(u, c, e.value.msg)
                        }
                    })
                })
            }
        }]),
        t
    }(l)
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = function A(e, t, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, t);
        if (r === undefined) {
            var i = Object.getPrototypeOf(e);
            return null === i ? undefined : A(i, t, n)
        }
        if ('value'in r)
            return r.value;
        var o = r.get;
        return o === undefined ? undefined : o.call(n)
    }
      , s = n(9)
      , u = n(1)
      , c = (u.MSG,
    u.URL)
      , f = n(0)
      , d = f.remove
      , p = f.addClass
      , v = n(18)
      , h = n(60)
      , m = (h.addStyle,
    h.createStyle,
    h.playerSkinStyle)
      , y = n(2)
      , g = n(59)
      , _ = n(70)
      , b = n(63)
      , w = n(72)
      , E = n(73)
      , x = n(76)
      , T = n(71)
      , S = n(75)
      , P = n(61)
      , O = n(68)
      , k = n(66)
      , L = n(65)
      , M = n(74)
      , C = n(69)
      , j = n(62)
      , N = n(67)
      , R = n(64)
      , I = n(7)
      , D = I.PLAYER_CSS
      , F = '.ahvp__video__poster';
    e.exports = function(e) {
        function t() {
            r(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.playerType = 'html-pc',
            e.playerStyle = c.PlayDomain + '/css/skin.player' + D + '.css?r=' + Math.random(),
            e
        }
        return o(t, e),
        a(t, [{
            'key': 'initPlayer',
            'value': function() {
                this.add(new v),
                l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initPlayer', this).call(this)
            }
        }, {
            'key': 'createUI',
            'value': function() {
                this.display(function(e) {
                    var t = (e.params,
                    e.store)
                      , n = e.on
                      , r = e.display
                      , i = (t('api'),
                    t('params').wrapper.container)
                      , o = new y;
                    i.innerHTML = '<div class="ahvp__video__media"><div class = "ahvp__video__poster"></div><video class="ahvp__video__setup"></video><div class="ahvp__video__watermark ahvp__video__watermark--visible"><svg class="ahvp__video__watermark__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 0 88 35" width="88" height="35" ><defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB"><feFlood flood-color="#000" flood-opacity="1" result="result1"/><feComposite in2="SourceGraphic" in="result1" operator="in" result="result2"/><feGaussianBlur in="result2" stdDeviation="0.5,0.5" result="result3"/><feOffset in="result3" result="result4"/><feComposite in2="result4" in="SourceGraphic" result="result5"/><feColorMatrix in="result5" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.7 0" result="result6"/></filter><path fill="#FFF" d="M27.8 29.1q0-.3-.3-.5-.2-.2-.5-.2t-.5.3l-.2.4.2.6q.2.2.5.2l.6-.2.1-.6m8.3.2l.5-1-2-.8-.9-.3-.4 1 1 .4 1.8.7m.6-1.6l.4-1-1.6-.7-1-.3-.3 1 .9.3 1.6.7m-26.3-3.6l-9.3.3v1h4l-.2.4H1.5v1h2.9l-.3.4H.4v1.2h2.9Q2.1 30 .5 31l.6.9 1.3-1v3.9H10v-6H4.3l.3-.4h6.6v-1.1h-6l.3-.5H10v-1H5.8l.2-.5 4.3-.1v-1M9 29.8v.6H3.4v-.6H9m-5.5 3.8V33H9v.6H3.4m0-1.7v-.5H9v.5H3.4m13.9-8l-1-.6-.7 1.5h-3.3v1h2.6q-1.1 2.2-1.9 3v1.1h4.1v1.8H12v1h5.1v2.1h1v-2.1h4.5v-1h-4.5v-1.8h3.5v-1.1h-3.5v-2.2h-1v2.2h-2.8q.8-1 1.9-2.9h6.2v-1h-5.6l.4-1M3.6 21.3q1.7-2.7 3.2-7.1L3 12.1q-1.6 4.3-3 6.5l3.5 2.6m.4-9.5l.4.3 2.5-3.4Q5 7.2 2.6 6L.1 9.3l3.8 2.4M3 .4L.5 3.5q1.4.6 4.3 2.3l2.6-3.5q-2-1.1-4.3-2m15.1 10.1v-1H6.3v3.9h7.8q-.2 8 3.2 8 2.1-.3 3.8-2l-1-4.3q-.9 1.4-1.3 1.3-1 .9-.6-5.9m2.4-4.8V1.9h-8l.6-1.4L8.7.2Q7.7 3.4 5 6.5L8.3 9l1-1.1V9H19V6.2h-8.5l.5-.5h9.5m22 29.3l.6-.9q-1.2-.9-3-1.8l-1.6-.8-.4.9 1.5.8 2.9 1.8m.6-4.3v-1h-4.4q.3-1.3.3-2.8v-1.3l-1 .1v1.7q-.1 1.3-.4 2.3h-5.2v1h4.9q-.4.9-.9 1.3-1 .9-2.4 1.5l-1.4.3.1 1h.5l1.1-.3q1.7-.6 2.8-1.6.8-.8 1.3-2.1H43m-2-3.7l1 .4.5-1.7.1-.8v-1h-9.8v1h8.8l-.6 2.1m19.6 1.4l-.6-.2q-.3 0-.5.3l-.1.4.1.6.5.2q.4 0 .6-.2l.2-.6q0-.3-.2-.5M49.7 24l-1-.4L48 25h-3.3v1h2.7q-1.1 2.1-2 3v1h4.1v1.8h-5v1h5v2.1h1.1v-2.1h4.5v-1h-4.5V30h3.5v-1h-3.5v-2.3h-1V29h-2.8q.9-1.1 1.9-3h6.1v-1h-5.5l.4-1M42.4 6.8v-4h-8.9l.9-1.2L30.6 0l-1.9 2.8h-5.8v4h3.3l-1 1.2q-.3.5-.8.8v4.4h6.5v1.4h-8.4v4h8.4v2.8h4.4v-2.8h7.5v-4h-7.5v-1.3h6.1V9h-6.1V7.2h-4.4V9h-1.5l1.7-2.2h11.3M75 24.3h-9.2v6.3l-.1 1.4q-.2 1.1-.8 2l.8.6q.8-1 1-2.3.2-.7.2-1.6h2.9v3.2h1v-3.2H74l-.1 2.2-.1.6q-.2.3-1 .3v1q1.1 0 1.7-.4.5-.4.5-1.4v-8.7m-1.1 1.1V27h-3v-1.6h3m0 2.6v1.6h-3V28h3m-4.1-2.6V27H67v-1.6h2.8M67 29.7V28h2.8v1.6H67M64.5 7.1V3.3h-7q-.3-1.9-.8-3.3l-4.9.8.5 2 .1.5h-7v4.1h13.3q-3.2 3.4-8.3 5.7-2-1-3.6 1.2L45 16.4l-.8 1 3.4 3.3.3-.5 1.6-2q.5-.7 1.2-.2 3.9 3.4 14.1 2.4l.9-4.3q-8.5 1-10.8-.6 6-3.3 9.6-8.5m17.7 16.8l-1-.4-.7 1.4h-3.3v1H80q-1.2 2-2 2.9v1h4v1.8h-5v1.1h5v2.1h1.1v-2.1h4.5v-1.1h-4.5v-1.8h3.5v-1h-3.5v-2.2h-1v2.2h-2.8l1.9-2.9h6v-1h-5.5l.5-1m5.1-16.1V2h-7.5L79.3.3l-4.5.6.3 1.1h-7.6v5.8h1.3v1.4h2.9q-1 1-4 1.6h-.4l1.5 2.4q3-.3 6.4-2.7 0 .2.3.4l-.6.4q-4.4 2.4-7.6 3l1.8 2.8q3.7-.9 7.6-3.7l.1.5q-4.5 3.2-9.5 4.2l2 3q1.4-.4 4.5-1.7l1.5 2.2q3.3-.1 3.9-.3.8 0 1.4-.4.9-.8 1-2.8L85 21l.2.2 2.8-3.4-.3-.1q-2.5-2-3.9-3.6.9-.4 3.4-2.6l-2.3-2.3h.8V7.9h1.6m-4.4-2.5v.8h-11v-.8h11m-2.6 5.1q-.3-.7-.8-1.3h3q-1.2 1.2-1.9 1.5l-.3-.2m-4.5 8.1q1-.5 1.8-1.2.2 1.5-1.8 1.2z" id="a"/></defs><use xlink:href="#a" filter="url(#b)"/></svg></div><div class="ahvp__video__state"></div><div class="ahvp__video__startbutton"></div><div class="ahvp__video__toast"></div><div class="ahvp__video__startview"><div class="ahvp__video__assets"><div class="ahvp__video__logo" ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 136 54" width="136px" height="54px" viewBox="0 0 136 54"><defs><g id="Layer0_0_FILL"><path fill="#EB6D1D" stroke="none" d="M 126.85 36.85 L 125.4 36.2 Q 125.3 36.35 124.25 38.35 L 119.2 38.35 119.2 40.05 123.3 40.05 Q 121.45 43.1 120.2 44.45 L 120.2 46.05 126.6 46.05 126.6 48.75 118.65 48.75 118.65 50.45 126.6 50.45 126.6 53.7 128.25 53.7 128.25 50.45 135.2 50.45 135.2 48.75 128.25 48.75 128.25 46.05 133.65 46.05 133.65 44.45 128.25 44.45 128.25 41.05 126.6 41.05 126.6 44.45 122.35 44.45 Q 123.6 42.75 125.25 40.05 L 134.65 40.05 134.65 38.35 126.1 38.35 Q 126.7 37.2 126.85 36.85 M 65.6 54 L 66.5 52.6 Q 64.65 51.3 61.95 49.85 59.55 48.7 59.5 48.6 L 58.8 49.9 Q 58.85 50 61.1 51.2 63.8 52.7 65.6 54 M 20.05 44.45 L 20.05 46.15 26.4 46.15 26.4 48.85 18.5 48.85 18.5 50.45 26.4 50.45 26.4 53.7 28 53.7 28 50.45 34.95 50.45 34.95 48.85 28 48.85 28 46.15 33.4 46.15 33.4 44.45 28 44.45 28 41.1 26.4 41.1 26.4 44.45 22.15 44.45 Q 23.4 42.9 25 40.05 L 34.5 40.05 34.5 38.4 25.95 38.4 Q 26.55 37.2 26.6 36.95 L 25.25 36.2 Q 24.7 37.1 24.05 38.4 L 19 38.4 19 40.05 23.05 40.05 Q 21.3 43.2 20.05 44.45 M 7.55 39.1 L 7.35 39.75 2.15 39.75 2.15 41.35 6.55 41.35 6.15 42.05 0.55 42.05 0.55 43.75 5.1 43.75 Q 3.25 46.2 0.75 47.75 L 1.6 49.15 Q 2.7 48.5 3.7 47.65 L 3.7 53.7 15.45 53.7 15.45 44.45 6.65 44.45 7.1 43.75 17.2 43.75 17.2 42.05 8 42.05 8.4 41.35 15.6 41.35 15.6 39.75 9.05 39.75 Q 9.2 39.4 9.25 39.05 L 15.95 38.9 15.95 37.25 1.6 37.55 1.6 39.2 7.55 39.1 M 5.3 47 L 5.3 46.15 13.8 46.15 13.8 47 5.3 47 M 5.3 49.45 L 5.3 48.6 13.8 48.6 13.8 49.45 5.3 49.45 M 5.3 51.15 L 13.8 51.15 13.8 52 5.3 52 5.3 51.15 M 53.3 42.5 L 51.85 41.95 51.3 43.6 Q 51.45 43.6 52.8 44.05 54.3 44.65 55.55 45.2 L 56.25 43.75 Q 55 43.1 53.3 42.5 M 56.5 42.75 L 57.15 41.25 Q 56.1 40.65 54.55 40.1 L 53.15 39.65 52.7 41.25 53.95 41.65 Q 55.4 42.2 56.5 42.75 M 50 45.8 L 50 47.45 57.5 47.45 Q 56.95 48.7 56.15 49.45 54.7 50.75 52.4 51.6 50.4 52.15 50.3 52.15 L 50.55 53.75 Q 50.85 53.7 51.3 53.6 52.15 53.45 52.95 53.15 55.55 52.25 57.25 50.7 58.5 49.55 59.2 47.45 L 66.5 47.45 66.5 45.8 59.7 45.8 Q 60.1 43.9 60.2 41.6 60.25 40.4 60.2 39.5 L 58.55 39.65 Q 58.65 40.8 58.55 42.25 58.4 44.3 58 45.8 L 50 45.8 M 40.6 44.95 Q 40.6 45.45 40.9 45.8 41.2 46.15 41.65 46.15 42.15 46.15 42.5 45.8 42.8 45.45 42.8 44.95 42.8 44.5 42.5 44.2 42.15 43.9 41.65 43.9 41.2 43.9 40.9 44.2 40.6 44.5 40.6 44.95 M 50.6 37.2 L 50.6 38.8 64.1 38.8 Q 63.8 40.6 63.25 42.05 L 64.8 42.6 Q 65.3 41.45 65.6 40.05 65.8 39.2 65.8 38.8 L 65.8 37.2 50.6 37.2 M 101.6 38.35 Q 101.6 38.4 101.6 42.35 101.7 46.45 101.6 47 L 101.6 47.3 Q 101.6 48.6 101.4 49.45 101.1 51.05 100.15 52.45 L 101.45 53.45 Q 102.6 51.75 103 49.9 103.25 48.75 103.25 47.35 L 107.7 47.35 107.7 52.25 109.35 52.25 109.35 47.35 114.1 47.35 114.05 50.75 Q 114.05 51.55 113.9 51.7 113.6 52.15 112.25 52.15 L 112.25 53.75 Q 114.05 53.75 114.9 53.05 115.65 52.4 115.75 50.85 115.75 50.3 115.75 44.45 115.75 38.55 115.75 38.35 L 115.75 37.5 101.6 37.5 101.6 38.35 M 107.7 39.2 L 107.7 41.6 103.3 41.6 103.3 39.2 107.7 39.2 M 109.35 41.6 L 109.35 39.2 114.05 39.2 114.05 41.6 109.35 41.6 M 107.7 43.2 L 107.7 45.75 103.3 45.75 103.3 43.2 107.7 43.2 M 109.35 45.75 L 109.35 43.2 114.1 43.2 114.1 45.75 109.35 45.75 M 93.5 45.8 Q 93.85 45.45 93.85 44.95 93.85 44.5 93.5 44.2 93.15 43.9 92.65 43.9 92.2 43.9 91.9 44.2 91.6 44.5 91.6 44.95 91.6 45.45 91.9 45.8 92.2 46.15 92.65 46.15 93.15 46.15 93.5 45.8 M 84.55 40.05 L 84.55 38.4 76 38.4 Q 76.4 37.55 76.7 36.95 L 75.25 36.2 Q 74.75 37.2 74.15 38.4 L 69.05 38.4 69.05 40.05 73.15 40.05 Q 71.35 43.2 70.15 44.5 L 70.15 46.15 76.45 46.15 76.45 48.85 68.6 48.85 68.6 50.45 76.45 50.45 76.45 53.75 78.1 53.75 78.1 50.45 85.05 50.45 85.05 48.85 78.1 48.85 78.1 46.15 83.5 46.15 83.5 44.5 78.1 44.5 78.1 41.1 76.45 41.1 76.45 44.5 72.2 44.5 Q 73.55 42.8 75.1 40.05 L 84.55 40.05 Z"/><path fill="#013C91" stroke="none" d="M 10.25 21.9 L 4.5 18.65 Q 2.15 25.25 0 28.75 L 5.4 32.8 Q 7.95 28.7 10.25 21.9 M 5.95 18.05 Q 6.55 18.35 6.7 18.45 L 10.5 13.25 Q 7.8 11.05 4.1 9.25 L 0.15 14.35 Q 2.6 15.75 5.95 18.05 M 4.85 0.55 L 0.75 5.55 Q 2.85 6.4 7.5 9.1 L 11.4 3.8 Q 8.4 1.95 4.85 0.55 M 29.4 13.9 L 29.4 9.55 16.35 9.55 17.05 8.7 31.8 8.7 31.8 2.95 19.35 2.95 20.35 0.75 13.35 0.25 Q 11.95 5.25 7.85 9.95 L 12.75 13.9 Q 13.1 13.35 14.25 12.2 L 14.25 13.9 29.4 13.9 M 28.1 16.2 Q 28.1 15.2 28.15 14.6 L 9.7 14.6 9.7 20.65 21.75 20.65 Q 21.55 32.95 26.6 32.95 29.95 32.5 32.65 29.85 L 31.1 23.2 Q 29.65 25.45 29 25.3 27.55 26.7 28.1 16.2 M 65.45 10.5 L 65.45 4.25 51.75 4.25 53.1 2.4 47.2 0 44.3 4.25 35.4 4.25 35.4 10.5 40.35 10.5 38.95 12.35 Q 38.5 13.1 37.65 13.5 L 37.65 20.45 47.7 20.45 47.7 22.45 34.7 22.45 34.7 28.6 47.7 28.6 47.7 32.95 54.4 32.95 54.4 28.6 66.05 28.6 66.05 22.45 54.4 22.45 54.4 20.45 63.9 20.45 63.9 13.9 54.4 13.9 54.4 11.1 47.7 11.1 47.7 13.9 45.35 13.9 48 10.5 65.45 10.5 M 88.75 5 Q 88.25 2.15 87.6 0.1 L 79.95 1.15 Q 80.25 2.25 80.65 4.25 80.7 4.8 80.85 5 L 70.15 5 70.15 11.4 90.6 11.4 Q 85.65 16.65 77.85 20.15 74.7 18.65 72.2 22 71.85 22.6 69.45 25.45 68.5 26.6 68.3 26.9 L 73.55 32.1 Q 73.7 31.65 73.9 31.3 75.4 29.15 76.3 28.25 77.1 27.25 78.25 28 84.25 33.15 100 31.7 L 101.3 25.05 Q 88.25 26.55 84.8 24 94 19 99.45 10.95 L 99.45 5 88.75 5 M 134.7 11.95 L 134.7 3.1 123.05 3.1 122.35 0.45 115.45 1.45 115.8 3.1 104.15 3.1 104.15 11.95 106.1 11.95 106.1 14.1 110.55 14.1 Q 109.2 15.65 104.55 16.65 104 16.75 103.95 16.75 L 106.1 20.45 Q 110.7 19.9 115.95 16.2 116.1 16.45 116.5 16.9 L 115.6 17.45 Q 108.85 21.15 103.95 22.05 L 106.55 26.3 Q 112.35 25.05 118.35 20.75 L 118.6 21.45 Q 111.5 26.3 103.95 28 L 107 32.55 Q 109.05 32 113.9 30 L 116.2 33.35 Q 121.3 33.15 122.15 32.95 123.55 32.8 124.4 32.15 125.75 30.95 125.9 28 129.65 31.25 131.1 32.15 131.15 32.25 131.5 32.55 L 135.8 27.4 Q 135.5 27.4 135.25 27.1 131.4 24.15 129.3 21.7 130.65 20.9 134.55 17.6 L 131.1 14.1 132.35 14.1 132.35 11.95 134.7 11.95 M 127.95 8.25 L 127.95 9.35 110.95 9.35 110.95 8.25 127.95 8.25 M 127.4 14.1 Q 125.55 15.8 124.4 16.35 124.25 16.35 124 16.1 123.4 14.95 122.7 14.1 L 127.4 14.1 M 116.9 28.55 Q 118.5 27.75 119.75 26.7 120.05 29 116.9 28.55 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0)"><use xlink:href="#Layer0_0_FILL"/></g></svg></div><div class="ahvp__video__startview__loading"><div class="ahvp__video__startview_sp"></div><div class="ahvp__video__startview_sp"></div><div class="ahvp__video__startview_sp"></div></div></div></div><div class="ahvp__video__shadow"></div></div><div class="ahvp__video__controls" style="display:none"><div class="ahvp__video__progress"><input class="ahvp__video__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-video-ahvp="seek"><progress class="ahvp__video__progress--played" max="100" value="0"></progress><progress class="ahvp__video__progress--buffer" max="100" value="0"><span>0</span>% buffered</progress><span class="ahvp__video__tooltip">00:00</span></div><div class="ahvp__video__controls--left"><button type="button" class="ahvp__video__controls__button ahvp__video__play" data-video-ahvp="play"><span class="ahvp-video-play"></span><span class="ahvp__video__tooltip">\u64ad\u653e</span></button><button type="button" class="ahvp__video__controls__button ahvp__video__pause" data-video-ahvp="pause"><span class="ahvp-video-pause"></span><span class="ahvp__video__tooltip">\u6682\u505c</span></button></button><div class="ahvp__video__time"><span class="ahvp__video__time--current">00:00</span><span class="ahvp__video__time--divide">/</span><span class="ahvp__video__time--duration">00:00</span></div></div><div class="ahvp__video__controls--right"><div class="ahvp__video__quality"><button type="button" class="ahvp__video__controls__button ahvp__video__quality__current">\u6e05\u6670</button><ul class="ahvp__video__quality__list"></ul></div><div class="ahvp__video__volume"><button type="button" class="ahvp__video__controls__button ahvp__video__volumecontrols ahvp__video__mute" data-video-ahvp="mute"><span class="ahvp-video-volume-medium"></span></button><div class = "ahvp__video__volume_box"><input class="ahvp__video__volume--input" type="range" min="0" max="100" value="50" data-video-ahvp="volume"><progress class="ahvp__video__volume--display" max="100" value="50"></progress></div></div><button type="button" class="ahvp__video__controls__button ahvp__video__fullscreen" data-video-ahvp="fullscreen"><span class="ahvp-video-enlarge"></span><span class="ahvp-video-shrink"></span><span class="ahvp__video__tooltip">\u5168\u5c4f\u5207\u6362</span></button></div></div>',
                    r(m, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(g, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(j, {
                        'container': i,
                        'dispatcher': o
                    }),
                    p(i, 'ahvp-wrap'),
                    r(_, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(b, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(x, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(S, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(w, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(E, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(O, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(M, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(C, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(T, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(P, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(N, {
                        'container': i,
                        'dispatcher': o
                    }),
                    r(R, {
                        'container': i,
                        'dispatcher': o
                    });
                    var a = i.querySelector('.ahvp__video__controls')
                      , l = function() {
                        var e = i.querySelector(F);
                        e && (e.style.backgroundImage = 'url(' + t('info').cover + ')')
                    };
                    n({
                        'PlayerReady': function(e) {
                            a.removeAttribute('style', 'display:none'),
                            t('params').autostart || l(),
                            t('media').attach(i.getElementsByClassName('ahvp__video__setup')[0]),
                            r(k, {
                                'container': i,
                                'dispatcher': o
                            }),
                            r(L, {
                                'container': i,
                                'dispatcher': o
                            })
                        },
                        'MediaReady': function(e) {
                            d(i.querySelector(F))
                        },
                        'StartNotAllowed': function(e) {
                            return l()
                        },
                        'PlayerError': function(e) {
                            a.setAttribute('style', 'display:none')
                        },
                        'MediaState': function(e) {
                            1 == e.value && d(i.querySelector(F))
                        }
                    })
                })
            }
        }]),
        t
    }(s)
}
, function(e, t, n) {
    var r = n(3)
      , i = n(14)
      , o = n(1)
      , a = o.EVENT
      , l = document.getElementsByTagName('head')[0] || document.documentElement
      , s = function(e, t) {
        var n = document.createElement('script');
        n.type = 'text/javascript',
        n.async = t,
        n.src = e,
        l.insertBefore(n, l.firstChild)
    }
      , u = function() {
        return (new Date).getTime()
    }
      , c = function() {
        var e = ['', '', ''];
        return window.pvTrack && (isNaN(window.pvTrack.site) || (e[0] = window.pvTrack.site),
        isNaN(window.pvTrack.category) || (e[1] = window.pvTrack.category),
        isNaN(window.pvTrack.subcategory) || (e[2] = window.pvTrack.subcategory)),
        e.join('|')
    }
      , f = function(e) {
        var t = e.split('://', 2)[1];
        return t ? t.slice(0, t.indexOf('/')) : ''
    }
      , d = encodeURIComponent(window.location.toString())
      , p = '.flv,.mp4,.m3u8'.split(',')
      , v = function(e) {
        for (var t = 0; t < 3; t++)
            if (e.indexOf(p[t]) > 0)
                return t + 1;
        return 0
    };
    window._trackEvent || s('//x.autoimg.cn/bi/common/pvevent_all_s.js', !1),
    window._ahaq || (window._ahaq = [],
    s('//x.autoimg.cn/bi/common/ah_event_stats.min.js?d=20180524', !0));
    var h = function(e) {
        var t = void 0
          , n = void 0
          , r = void 0;
        this.value = function() {
            return r
        }
        ,
        this.getStart = function() {
            return t
        }
        ,
        this.start = function() {
            n = r = -1,
            t = u()
        }
        ,
        this.end = function() {
            n = u(),
            r = n - t
        }
        ,
        e && this.start()
    }
      , m = function(e) {
        for (var t = e + ''; t.length < 11; )
            t = '0' + t;
        for (var n = Math.floor(1e8 * Math.random()) + ''; n.length < 8; )
            n = '0' + n;
        var r = u() + t + n;
        this.value = function() {
            return r
        }
    };
    e.exports = function(e, t) {
        var n = void 0
          , o = void 0
          , l = void 0
          , s = void 0
          , p = void 0
          , y = void 0
          , g = void 0
          , _ = void 0
          , b = void 0
          , w = void 0
          , E = function(e, t) {
            _ahaq && (t.domain = p,
            t.vid = n,
            t.uid = o,
            t.upid = s.value(),
            t.file_type = y,
            t.send_time = u(),
            _ahaq.push(['_trackEvent', 'pk_video_quality', 'ahvp_play', e, t]))
        }
          , x = ['bbs-video_play', 'bbs-video_pause', 'bbs-video_full-screen']
          , T = function(e) {
            _ahaq && _ahaq.push(['_trackCustomEvent', 'auto_common_event', {
                'biz': 'media',
                'type': 'click',
                'action': x[e],
                'ctime': u(),
                'area': 'middle_content',
                'element': 'details',
                'pmark': 0
            }])
        }
          , S = new r(6e3);
        S.on('timer', function(e) {
            if (window._trackEvent) {
                var r = {
                    'val': 1,
                    'a1': 2,
                    'a2': l,
                    'a3': window.isc ? window.isc : 0,
                    'a4': c(),
                    'a6': 1,
                    'a7': 2,
                    'a8': d,
                    'a9': n,
                    'a10': s.value(),
                    'eid': t ? '2|1211001|553|3179|200106|300072' : '1|1|553|3179|200106|300072'
                };
                window._trackEvent.push(r)
            }
        }),
        e.on(a.DESTROY, function(e) {
            return S.stop()
        }),
        e.once(a.PLAY_START, function(e) {
            if (l = e.value.vtag,
            n = e.value.mid,
            o = e.value.uid,
            s = new m(l),
            T(0),
            window._trackEvent) {
                var r = {
                    'val': 1,
                    'a1': l,
                    'a3': window.isc ? window.isc : 0,
                    'a4': c(),
                    'a8': i(),
                    'a9': n,
                    'a10': s.value(),
                    'eid': t ? '2|1211001|155|590|200076|300072' : '1|1|155|590|200076|300072'
                };
                window._trackEvent.push(r)
            }
            b = 0,
            w = 0,
            g = new h(!0),
            S.stop(),
            S.start()
        }),
        e.once(a.VIDEO_START, function(e) {
            var t = e.value.videoSource;
            p = f(t),
            y = v(t),
            g.end(),
            E('video_start', {
                'first_duration': g.value()
            })
        }),
        e.on(a.PLAY_PAUSE, function(e) {
            T(1),
            S.pause()
        }),
        e.on(a.PLAY_RESUME, function(e) {
            return S.resume()
        }),
        e.on(a.PLAY_FINISH, function(e) {
            return S.pause()
        }),
        e.on(a.FULLSCREEN, function(e) {
            e.value.flag && T(2)
        }),
        e.on(a.BUFFER_EMPTY, function(e) {
            b++,
            _ = new h(!0),
            E('wait_start', {
                'buffer_empty_time': b
            })
        }),
        e.on(a.BUFFER_FULL, function(e) {
            _ && (_.end(),
            w++,
            E('wait_end', {
                'buffer_full_time': w,
                'buffer_empty_duration': _.value()
            }),
            _ = null)
        }),
        e.on(a.ERROR, function(e) {
            S.stop();
            var t = e.value
              , n = t.error_type
              , r = t.videoSource;
            !isNaN(n) && n > 0 && (p = f(r),
            y = v(r),
            E('play_fail', {
                'error_type': n
            }))
        }),
        e.on('clickCuePoint', function(e) {
            _ahaq && _ahaq.push(['_trackEvent', 'mda_video_cursor_trig', 'ahvp_play', 'mda_video_cursor_trig', {
                'playervid': n,
                'pos': e.value
            }])
        })
    }
}
, function(e, t, n) {
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
    function i(e, t) {
        if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !t || 'object' != typeof t && 'function' != typeof t ? e : t
    }
    function o(e, t) {
        if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            'constructor': {
                'value': e,
                'enumerable': !1,
                'writable': !0,
                'configurable': !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                'value'in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(9)
      , s = n(1)
      , u = s.URL;
    e.exports = function(e) {
        function t() {
            r(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.playerType = 'simple',
            e
        }
        return o(t, e),
        a(t, [{
            'key': 'initPlayer',
            'value': function() {
                this.display(function(e) {
                    var t = e.store
                      , n = e.on
                      , r = (e.off,
                    t('params'))
                      , i = r.wrapper.container
                      , o = r.width
                      , a = r.height;
                    n({
                        'PlayerReady': function(e) {
                            var n = t('info', 'qualities')
                              , r = n.info
                              , l = n.qualities;
                            i.innerHTML = '<table width=\'' + o + '\' height=\'' + a + '\' style=\'position:relative;\'><tr><td width=\'' + o + '\' height=\'' + a + '\' style=\'position:relative;\'><img src=\'' + r.cover + '\' width=\'' + o + '\' height=\'' + a + '\' style=\'width:' + o + '; height:' + a + ';\' /><a href=\'' + l.quality.copy + '\'><img src=\'' + u.PlayDomain + '/images/01.png\' style=\'position:absolute; top:50%; left:50%; margin:-25px 0 0 -35px; width:70px; height:50px;\' /></a></td></tr></table>'
                        },
                        'PlayerError': function(e) {
                            i.innerHTML = '<table><tr><td align=\'center\' width=\'' + o + '\' height=\'' + a + '\' style=\'background:#000; color:#FFF; font-size:30px; -webkit-text-size-adjust:none;\'>' + e.msg + '</td></tr></table>'
                        }
                    })
                })
            }
        }]),
        t
    }(l)
}
, function(e, t) {
    e.exports = function(e) {
        var t = (e.store,
        e.on)
          , n = (e.off,
        e.container)
          , r = e.dispatcher
          , i = n.getElementsByTagName('section')[0]
          , o = void 0
          , a = void 0
          , l = function() {
            'ahmp-player-fadein' !== i.className && (r.trigger('controlShow'),
            i.className = 'ahmp-player-fadein',
            a(!0))
        }
          , s = function() {
            i.className = 'ahmp-player-fadeout',
            r.trigger('controlHidden'),
            o && o >= 0 && (clearTimeout(o),
            o = -1)
        }
          , u = function() {
            'ahmp-player-fadein' === i.className ? s() : l()
        };
        a = function(e) {
            o && o >= 0 && clearTimeout(o),
            e && (o = setTimeout(function() {
                r.trigger('controlHidden'),
                s()
            }, 8e3))
        }
        ,
        r.on('progressbar-operating', function(e) {
            return a(e.value.flag)
        }),
        r.on('controlToggle', u),
        t({
            'MediaState': function(e) {
                0 !== e.value && 3 !== e.value || s()
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.StrictClick;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = e.container
          , o = (e.dispatcher,
        r.getElementsByClassName('ahmp-player-normalscreen')[0])
          , a = r.getElementsByClassName('ahmp-player-screenbtn')[0]
          , l = r.getElementsByClassName('ahmp-player-fullscreen')[0]
          , s = function() {
            var e = t('screen').full;
            l.style.display = e ? 'block' : 'none',
            o.style.display = e ? 'none' : 'block'
        };
        new i(a,function() {
            t('screen').full = undefined
        }
        ),
        n({
            'Resize': s
        }),
        s()
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.hide
      , o = r.show
      , a = r.StrictClick;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , l = e.dispatcher
          , s = t('api')
          , u = r.getElementsByClassName('ahmp-player-loading')[0]
          , c = r.getElementsByClassName('ahmp-player-startbtn')[0]
          , f = r.getElementsByClassName('ahmp-player-toggleplay')[0]
          , d = void 0
          , p = !1;
        new a(c,function() {
            p || v(!0),
            s.play()
        }
        ),
        new a(f,function() {
            return s.togglePlay()
        }
        ),
        l.on('controlHidden', function() {
            return i(f)
        }),
        l.on('controlShow', function() {
            return o(f)
        }),
        l.on('recommend_replay', function() {
            return s.play()
        });
        var v = function(e) {
            clearTimeout(d),
            d = setTimeout(function() {
                e ? o(u) : i(u)
            }, u ? 150 : 0)
        };
        n({
            'MediaState': function(e) {
                1 === e.value ? f.className = 'ahmp-player-togglepause' : (v(!1),
                f.className = 'ahmp-player-toggleplay')
            },
            'MediaBuffer': function(e) {
                v(!e.value)
            },
            'PlayerStart': function(e) {
                return v(!0)
            },
            'MediaReady': function(e) {
                return v(!1)
            },
            'iPhoneFullScreen': function(e) {
                e.value.flag || v(!1)
            },
            'QualityChanged': function(e) {
                return v(!0)
            },
            'MediaFinish': function(e) {
                return p = !0
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.getMousePos
      , o = r.getPos
      , a = n(6)
      , l = {}
      , s = function(e, t) {
        var n = l[e];
        n && document.removeEventListener(e, n, !1),
        delete l[e],
        t && (l[e] = t,
        document.addEventListener(e, t, !1))
    }
      , u = function() {
        for (var e in l)
            s(e, null)
    };
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = e.container
          , l = e.dispatcher
          , c = t('api')
          , f = r.getElementsByClassName('ahmp-player-progressbar')[0]
          , d = r.getElementsByClassName('ahmp-player-dragbtn')[0]
          , p = r.getElementsByClassName('ahmp-player-loadbar')[0]
          , v = r.getElementsByClassName('ahmp-player-playbar')[0]
          , h = r.getElementsByClassName('ahmp-player-timecurrent')[0]
          , m = r.getElementsByClassName('ahmp-player-timetotal')[0]
          , y = void 0
          , g = function(e) {
            v.style.width = e * (f.clientWidth - d.clientWidth) + 'px'
        }
          , _ = function(e, t) {
            var n = i(e);
            if (n) {
                var r = o(f)
                  , a = n.x - r.left - d.clientWidth / 2
                  , l = Math.max(0, Math.min(1, a / (f.clientWidth - d.clientWidth)));
                g(l),
                y = !t,
                t && c.seek(c.duration * l)
            }
        };
        f.addEventListener('touchstart', function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            u(),
            l.trigger('progressbar-operating', {
                'flag': !1
            }),
            _(e, !1);
            var t = function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                e = t,
                _(e, !1)
            }
              , n = function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                u(),
                _(e, !0),
                l.trigger('progressbar-operating', {
                    'flag': !0
                })
            };
            s('touchmove', t),
            s('touchend', n)
        }, !1),
        n({
            'MediaProgress': function(e) {
                var t = e.value
                  , n = t.played
                  , r = t.loaded
                  , i = t.total;
                y || g(n / i);
                var o = Math.round(r / i * f.clientWidth);
                p.style.width = o + 'px',
                h.innerHTML = a.PLAYER.format(n),
                m.innerHTML = a.PLAYER.format(i)
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.hide
      , o = r.show;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = e.container
          , a = e.dispatcher
          , l = r.getElementsByClassName('ahmp-player-qualitybtn')[0]
          , s = r.getElementsByClassName('ahmp-player-qualities')[0]
          , u = t('qualities')
          , c = function(e, t) {
            if (e != t) {
                var n = s.getElementsByTagName('li')[e];
                n.className = '',
                n = s.getElementsByTagName('li')[t],
                n.className = 'selected'
            }
        }
          , f = function(e) {
            return function() {
                return u.setQuality(e)
            }
        };
        l.addEventListener('touchstart', function(e) {
            'block' === s.style.display ? i(s) : o(s)
        }, !1);
        for (var d = u.quality, p = u.length, v = 0; v < p; v++) {
            var h = document.createElement('li')
              , m = document.createTextNode(u.get(v).desc);
            v === d.index && (h.className = 'selected'),
            h.addEventListener('touchstart', f(u.get(v).value), !1),
            h.appendChild(m),
            s.appendChild(h)
        }
        a.on('controlHidden', function(e) {
            return i(s)
        }),
        n({
            'QualityChanged': function(e) {
                var t = e.value;
                c(t.from.index, t.to.index),
                l.innerHTML = t.to.desc,
                i(s)
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.hide
      , o = r.show
      , a = r.StrictClick;
    e.exports = function(e) {
        var t = (e.store,
        e.on)
          , n = e.container
          , r = e.dispatcher
          , l = n.getElementsByTagName('video')[0];
        return new a(l,function() {
            return r.trigger('controlToggle')
        }
        ,this),
        i(l),
        t({
            'MediaState': function(e) {
                1 === e.value ? o(l) : 3 === e.value && i(l)
            },
            'iPhoneFullScreen': function(e) {
                !e.value.flag && e.value.pause && i(l)
            }
        }),
        l
    }
}
, function(e, t, n) {
    var r = n(4)
      , i = r.isValue
      , o = n(8)
      , a = n(0)
      , l = a.append
      , s = a.remove
      , u = a.StrictClick;
    e.exports = function(e) {
        var t = this
          , n = e.store
          , r = e.on
          , a = (e.off,
        e.container)
          , f = e.dispatcher
          , d = n('info').content.player.plugins;
        if (d.recommendations) {
            var p = d.recommendations.api
              , v = void 0
              , h = 2
              , m = void 0
              , y = void 0
              , g = void 0
              , _ = void 0
              , b = void 0
              , w = void 0
              , E = void 0
              , x = void 0
              , T = void 0
              , S = void 0
              , P = function(e) {
                return 'string' == typeof e ? document.getElementById(e) : e
            }
              , O = function(e) {
                e.touches.length > 1 || (T = e.touches[0].pageX)
            }
              , k = function(e) {
                var t = e.touches[0].pageX;
                S = t - T
            }
              , L = function(e) {
                if (S < -5) {
                    if (x >= y)
                        return;
                    x++
                } else if (S > 5) {
                    if (x <= 1)
                        return;
                    x--
                }
                E.style.cssText += '-webkit-transform:translate3d(' + 100 * -(x - 1) + '%,0px,0px);-webkit-transition:500ms',
                C(),
                S = 0
            }
              , M = function() {
                E = document.getElementById('recommendPages'),
                w.addEventListener('touchstart', function(e) {
                    O(e)
                }, !1),
                w.addEventListener('touchmove', function(e) {
                    k(e),
                    e.stopPropagation(),
                    e.preventDefault()
                }, !1),
                w.addEventListener('touchend', function(e) {
                    L(e)
                }, !1),
                w.addEventListener('touchcancel', function(e) {
                    L(e)
                }, !1),
                new u(b,function(e) {
                    v.style.display = 'none',
                    f.trigger('recommend_replay')
                }
                ,t)
            }
              , C = function() {
                for (var e = P('pagesNum').getElementsByTagName('div'), t = 0; t < e.length; t++)
                    e[t].className = t == x - 1 ? 'inRecommendPage' : 'outRecommendPage'
            }
              , j = function(e) {
                x = 1,
                y = Math.ceil(e.length / h);
                for (var t = 0; t < y; t++) {
                    var n = l(w, '<li id="recommendPage' + t + '" class="page-container"></li>');
                    n.style.left = 100 * t + '%';
                    for (var r = e.splice(0, 2), i = 0; i < h; i++) {
                        var o = r[i].coverimage2.split('160x90').join('240x135')
                          , a = l(n, '<a  id="recommenditem' + i + '"  class="recommend-item"><div class="recommend-img" style="background-image:url(' + o + ')"></div><div class="recommend-title">' + r[i].title + '</div></a>')
                          , s = r[i].link;
                        a.constData = '//v.m' + s.substr(s.indexOf('.autohome.com.cn')) + '#pvareaid=2028665',
                        a.addEventListener('touchstart', function(e) {
                            e.currentTarget.startX = e.touches[0].pageX
                        }, !1),
                        a.addEventListener('touchend', function(e) {
                            var t = e.changedTouches[0].pageX;
                            e.currentTarget.startX == t && (window.location.href = e.currentTarget.constData)
                        }, !1)
                    }
                }
                for (var u = 0; u < y; u++)
                    l(_, '<div class="outRecommendPage"></div>');
                C(),
                M()
            }
              , N = function(e) {
                var t = c(v, 'section', {
                    'className': 'recommend-list-container'
                });
                w = c(t, 'ul', {
                    'className': 'list-view-container',
                    'id': 'recommendPages'
                }),
                _ = l(v, '<div class="recommendPageNum" id="pagesNum"></div>>'),
                b = l(v, '<div class="replaybtn">\u91cd\u64ad</div>'),
                j(e)
            }
              , R = function D(e) {
                g.off('error', D),
                g.off('success', I)
            }
              , I = function F(e) {
                g.off('error', R),
                g.off('success', F);
                var t = e.value;
                0 == t.returncode && t.result.length > 0 ? (m = t.result,
                N(m)) : (v && s(v),
                f.trigger('recommend_error'))
            };
            r({
                'MediaState': function(e) {
                    3 == e.value ? (v || (v = c(a, 'div', {
                        'className': 'recommend-box'
                    }),
                    i(p) && '' != p && (g = new o,
                    g.on('error', R),
                    g.on('success', I),
                    g.load(p, 2e3))),
                    v.style.display = 'block') : v && (v.style.display = 'none')
                }
            })
        }
    }
    ;
    var c = function(e, t, n, r, i) {
        var o = document.createElement(t);
        if (n)
            for (var a in n)
                'className' == a ? o.className = n[a] : 'id' == a ? o.id = n[a] : o.setAttribute(a, n[a]);
        if (r)
            for (var l in r)
                o.style[l] = r[l];
        return i && o.appendChild(document.createTextNode(i)),
        e && e.appendChild(o),
        o
    }
}
, function(e, t, n) {
    var r = n(7)
      , i = r.Build
      , o = r.PlayerVersion
      , a = n(5)
      , l = a.browser
      , s = n(4)
      , u = s.isValue;
    e.exports = function(e) {
        var t = e.store
          , n = (e.on,
        e.off,
        e.container)
          , r = e.dispatcher
          , a = document.createElement('div');
        a.className = 'ahvp__video__menu',
        n.appendChild(a),
        n.oncontextmenu = function(e) {
            var t = window.event || e;
            return a.style.display = 'block',
            a.style.left = t.clientX + 'px',
            a.style.top = t.clientY + 'px',
            r.trigger('MenuOnStage'),
            !1
        }
        ;
        var s = null
          , c = function() {
            a.style.display = 'none',
            s && (window.clearTimeout(s),
            s = null),
            s = setTimeout(function() {
                r.trigger('MenuOutStage')
            }, 300)
        };
        document.onclick = function(e) {
            return c()
        }
        ,
        n.onclick = function(e) {
            return c()
        }
        ;
        var f = function(e, t) {
            if (u(e) || '' != e) {
                var n = document.createElement('div');
                n.className = 'menu_item',
                t && n.setAttribute('data-value', t),
                n.innerText = e,
                a.appendChild(n),
                n.onclick = function(e) {
                    var t = e || window.event
                      , n = t.currentTarget.getAttribute('data-value');
                    d(n)
                }
            }
        }
          , d = function(e) {
            switch (e) {
            case 'go_home':
                window.open('//v.autohome.com.cn');
                break;
            case 'pause':
                t('api').pause()
            }
        }
          , p = function() {
            var e = '';
            return l.ie ? e = 'ie' : l.chrome ? e = 'chrome' : l.firefox ? e = 'firefox' : l.safari && (e = 'safari'),
            e + ' ' + (l.version ? l.version : '')
        };
        f('\u6c7d\u8f66\u4e4b\u5bb6\u89c6\u9891\u64ad\u653e\u5668'),
        f(o.html5 + '_' + i),
        f(p())
    }
}
, function(e, t, n) {
    function r(e) {
        var t = e.store
          , n = e.container
          , r = e.on
          , i = void 0
          , p = void 0
          , v = void 0
          , h = void 0
          , m = void 0
          , y = t('screen')
          , g = !0
          , _ = void 0
          , b = void 0
          , w = void 0
          , E = function() {
            s(n, d, !0)
        }
          , x = function() {
            s(n, d, !1)
        }
          , T = function(e) {
            clearTimeout(_),
            w || (_ = setTimeout(function() {
                E()
            }, 2e3),
            a(n, d) && x())
        }
          , S = function(e) {
            e ? (n.addEventListener('mouseenter', T),
            n.addEventListener('mouseout', T),
            n.addEventListener('mousemove', T)) : (clearTimeout(_),
            n.removeEventListener('mouseenter', T),
            n.removeEventListener('mouseout', T),
            n.removeEventListener('mousemove', T))
        }
          , P = function(e) {
            v = e ? e.value.width : y.width,
            h = e ? e.value.height : y.height,
            m = y.full ? c : v < 400 || h < 255 ? u : f,
            i !== m && (l(n, i),
            o(n, m)),
            i = m,
            b = n.querySelector('.ahvp__video__controls'),
            b.addEventListener('mousemove', function(e) {
                return w = !0
            }, !1),
            b.addEventListener('mouseenter', function(e) {
                return w = !0
            }, !1),
            b.addEventListener('mouseleave', function(e) {
                w = !1,
                T()
            }, !1),
            s(n, d, g),
            S(g)
        };
        r({
            'Resize': function(e) {
                clearTimeout(p),
                p = setTimeout(P(e), 30)
            },
            'PlayerReady': function() {
                x()
            },
            'MediaReady': function() {
                T()
            }
        }),
        P()
    }
    var i = n(0)
      , o = i.addClass
      , a = i.hasClass
      , l = i.removeClass
      , s = i.toggleClass;
    n(77),
    n(79),
    n(78);
    var u = 'ahvp-wrap-miniwindow'
      , c = 'ahvp-wrap-fullwindow'
      , f = 'ahvp-wrap-normalwindow'
      , d = 'ahvp__video--hide-controls';
    e.exports = {
        'playerSkinStyle': r
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.remove;
    e.exports = function(e) {
        var t = this
          , n = e.store
          , r = e.on
          , o = (e.off,
        e.container)
          , a = e.dispatcher
          , l = o.getElementsByClassName('ahvp__video__progress')[0]
          , s = o.getElementsByClassName('ahvp__video__tooltip')[0]
          , u = void 0
          , c = void 0
          , f = void 0
          , d = function(e) {
            return (e / c * 100).toFixed(4)
        }
          , p = function() {
            for (var e = '', t = 0; t < u.length; t++) {
                var n = u.get(t)
                  , r = d(n.time) + '%';
                e += '<span class= ahvp__video__progress__anchor__item id=cuepoint_' + n.id + ' style="left: ' + r + ';">' + n.desc + '</span>'
            }
            f = document.createElement('div'),
            f.className = 'ahvp__video__progress__anchor',
            f.innerHTML = e,
            l.appendChild(f)
        }
          , v = function(e, n, r) {
            for (var i = 0; i < u.length; i++) {
                var o = u.get(i).time;
                e >= o - n && e <= o + n && r.call(t, u.get(i))
            }
        }
          , h = function(e) {
            v(e.value.percent, 5, function(e) {
                s.style.display = 'block',
                s.innerHTML = e.desc
            })
        };
        r({
            'PlayerReady': function(e) {
                c = n('time').total,
                u = n('cuepoints'),
                u.length > 0 && (p(),
                a.on('acrossprogress', h, !1))
            },
            'CuePoint_Add': function(e) {
                var t = d(e.value.time) + '%'
                  , n = document.createElement('span');
                n.className = 'ahvp__video__progress__anchor__item',
                n.id = 'cuepoint_' + e.value.id,
                n.innerText = e.value.desc,
                n.style = 'left: ' + t + ';',
                f.appendChild(n)
            },
            'CuePoint_Delete': function(e) {
                i(f.querySelector('#cuepoint_' + e.value.id))
            },
            'CuePoint_Update': function(e) {
                var t = f.querySelector('#cuepoint_' + e.value.id)
                  , n = d(e.value.time) + '%';
                t.innerText = e.value.desc,
                t.style = 'left: ' + n + ';'
            }
        })
    }
}
, function(e, t, n) {
    var r = n(4);
    r.isValue;
    e.exports = function(e) {
        var t = (e.store,
        e.on)
          , n = (e.off,
        e.container)
          , r = (e.dispatcher,
        function() {
            var e = n.querySelector('.ahvp__video__controls')
              , t = document.createElement('div');
            t.className = 'ahvp__video__errorcontainer',
            t.innerHTML = '<div class="ahvp__video__errorview"><div class="ahvp__video__warningimg"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="90px" height="81px" viewBox="0 0 90 81"><defs><g id="Layer0_0_FILL"><path fill="#FF9901" stroke="none" d="M 89.3 77.6 Q 90 76.4 90 75 90.05 72.85 88.6 70.3 L 50.85 4.25 Q 48.5 0 45 0 41.5 0 39.1 4.25 L 1.4 70.3 Q -0.05 72.8 0 75 0 76.4 0.7 77.6 2.45 80.65 7.35 80.65 L 82.65 80.65 Q 87.55 80.65 89.3 77.6 M 50.55 29.4 Q 49.8 38.7 49.05 43.8 48.05 50.4 46.5 55.7 L 42.4 55.7 Q 39.45 45.25 38.25 29.4 40.45 26.35 44.6 26.5 48.55 26.65 50.55 29.4 M 40.55 63.25 Q 42.35 61.45 44.85 61.45 47.35 61.45 49.1 63.25 50.9 65.05 50.9 67.55 50.9 70 49.1 71.8 47.35 73.6 44.85 73.6 42.35 73.6 40.55 71.8 38.75 70 38.75 67.55 38.75 65.05 40.55 63.25 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0)"><use xlink:href="#Layer0_0_FILL"/></g></svg></div><div class="ahvp__video__errormsg  ahvp__video__errordesc"></div><div class="ahvp__video__errormsg  ahvp__video__errormsg__errorcode"></div></div>',
            e ? n.insertBefore(t, e) : n.append(t)
        }
        );
        t({
            'PlayerError': function(e) {
                n.querySelector('.ahvp__video__errorcontainer') || r();
                var t = n.querySelector('.ahvp__video__errordesc')
                  , i = n.querySelector('.ahvp__video__errormsg__errorcode');
                t.innerText = e.value.msg,
                i.innerText = '\u4ee3\u7801:' + e.value.code
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.toggleClass;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , o = e.dispatcher
          , a = r.getElementsByClassName('ahvp__video__fullscreen')[0]
          , l = function() {
            return t('api').fullScreen = undefined
        };
        o.on('toolTipBar_fullscreen_handler', function(e) {
            return l()
        }),
        a.addEventListener('click', function(e) {
            return l()
        }),
        n({
            'Resize': function(e) {
                i(r, 'ahvp--fullscreen-active', e.value.full)
            }
        })
    }
}
, function(e, t) {
    var n = 37
      , r = 39;
    e.exports = function(e) {
        var t = e.store
          , i = (e.on,
        e.off,
        e.container)
          , o = void e.dispatcher
          , a = void 0
          , l = !1;
        i.onmouseover = function(e) {
            i.setAttribute('tabIndex', 0),
            i.style.outline = 'none',
            l = !0
        }
        ,
        i.onmouseout = function(e) {
            i.removeAttribute('tabIndex'),
            i.style.outline = 'block',
            l = !1
        }
        ;
        var s = function(e) {
            if (!a || !o || l) {
                var n = o ? 1 : 2;
                t('time').seek(t('time').played + n * e)
            }
        }
          , u = function(e) {
            l && (t('volume').value = e)
        };
        i.onkeyup = function(e) {
            switch (e.preventDefault(),
            e.keyCode) {
            case 32:
                t('api').togglePlay();
                break;
            case n:
                a = !1,
                s(-1);
                break;
            case r:
                o = !1,
                s(1)
            }
        }
        ,
        i.onkeydown = function(e) {
            switch (e = e || window.event,
            e.preventDefault(),
            e.keyCode) {
            case n:
                a = !0,
                s(-1);
                break;
            case r:
                o = !0,
                s(1);
                break;
            case 38:
                u(-1);
                break;
            case 40:
                u(-2)
            }
        }
    }
}
, function(e, t) {
    var n = function(e) {
        return '<a href= " ' + e + ' " style="text-decoration:none;" target="_Blank"><span class="ahvp-video-logobtn"></span></a>'
    };
    e.exports = function(e) {
        var t = e.store
          , r = (e.on,
        e.off,
        e.container);
        e.dispatcher;
        if (!t('logo').instation) {
            var i = r.querySelector('.ahvp__video__controls--right')
              , o = document.createElement('button');
            o.className = 'ahvp__video__controls__button ahvp__video__logobtn',
            o.innerHTML = n(t('logo').link),
            i.appendChild(o)
        }
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.toggleClass
      , o = n(4)
      , a = o.isValue
      , l = (n(17),
    'ahvp__video__watermark')
      , s = l + '--visible';
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , o = e.dispatcher
          , u = t('logo').url;
        if ('' !== u) {
            var c = void 0
              , f = 1
              , d = void 0
              , p = void 0
              , v = 16 / 9
              , h = r.querySelector('.ahvp__video__setup');
            h && a(u) && '' != u && (d = r.getElementsByClassName(l)[0],
            p = r.getElementsByClassName('ahvp__video__watermark__svg')[0]);
            var m = function() {
                i(d, s, !1),
                clearTimeout(c),
                c = setTimeout(function() {
                    var e = void 0
                      , n = void 0
                      , o = void 0
                      , a = void 0;
                    if (t('screen').full) {
                        var l = r.querySelector('.ahvp__video__media');
                        e = l.offsetWidth,
                        n = l.offsetHeight,
                        o = e * (1 - f) / 2,
                        a = n * (1 - f) / 2,
                        e *= f,
                        n *= f
                    } else
                        e = h.offsetWidth,
                        n = h.offsetHeight,
                        o = a = 0;
                    var u = void 0
                      , c = void 0;
                    e / n > v ? (u = n * v,
                    c = n) : (u = e,
                    c = e / v);
                    var m = (e - u) / 2 + o
                      , y = (n - c) / 2 + a
                      , g = Math.sqrt(c / 500)
                      , _ = parseInt(88 * g)
                      , b = parseInt(35 * g);
                    d.setAttribute('style', 'width:  ' + _ + 'px !important;height:' + b + 'px !important'),
                    p.setAttribute('style', 'width:  ' + _ + 'px !important;height:' + b + 'px !important'),
                    d.style.top = y + 10 + 'px',
                    d.style.right = m + 10 + 'px',
                    i(d, s, !0)
                }, 200)
            };
            o.on('videoscale', function(e) {
                f = e.value / 100,
                m()
            }),
            n({
                'Resize': m,
                'MediaMetaData': function(e) {
                    v = e.value.width / e.value.height,
                    m()
                }
            }),
            m()
        }
    }
}
, function(e, t, n) {
    var r = n(6)
      , i = n(0)
      , o = i.remove;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , i = (e.off,
        e.container)
          , a = (e.dispatcher,
        function(e) {
            var t = document.createElement('div');
            t.className = 'ahvp__video__memoryplayview',
            t.innerHTML = ' <div class= "ahvp__video__memoryplayview__bar" ></div>  <div class="ahvp__video__memoryplayview__rewindbtn">\u91cd\u65b0\u64ad\u653e</div>  <div class="ahvp__video__memoryplayview__close">X</div> ';
            var n = t.querySelector('.ahvp__video__memoryplayview__bar')
              , a = t.querySelector('.ahvp__video__memoryplayview__rewindbtn')
              , l = t.querySelector('.ahvp__video__memoryplayview__close');
            n.innerText = '\u4e0a\u6b21\u64ad\u653e\u5230 ' + r.PLAYER.format(e.played);
            var s = void 0
              , u = function() {
                o(t),
                clearTimeout(s)
            };
            s = setTimeout(u, 2500),
            a.onclick = function() {
                e.seek(0),
                u()
            }
            ,
            l.onclick = function() {
                return u()
            }
            ,
            i.appendChild(t)
        }
        );
        n({
            'PlayerStart': function(e) {
                var n = t('time');
                n.played > 0 && a(n)
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.toggleClass
      , o = 'ahvp__video__toast'
      , a = o + '--visible';
    e.exports = function(e) {
        var t = e.on
          , n = e.container
          , r = e.dispatcher
          , l = void 0
          , s = n.querySelector('.' + o)
          , u = function(e) {
            s.innerHTML = e,
            clearTimeout(l),
            i(s, a, !0),
            l = setTimeout(function() {
                i(s, a, !1)
            }, 1500)
        };
        r.on('playlist_change', function(e) {
            return u(e.value)
        }),
        t({
            'MediaState': function(e) {
                1 == e.value ? u('\u64ad\u653e') : 2 == e.value ? u('\u6682\u505c') : 3 == e.value && u('\u7ed3\u675f')
            },
            'VolumeChange': function(e) {
                var t = parseInt(100 * e.value);
                u('\u97f3\u91cf ' + t + '%')
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.hide
      , o = r.remove
      , a = r.show
      , l = n(3);
    n(1);
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = e.off
          , s = e.container
          , u = e.dispatcher
          , c = void 0
          , f = void 0
          , d = void 0
          , p = t('api')
          , v = t('params')
          , h = void 0
          , m = void 0
          , y = void 0
          , g = void 0
          , _ = 1
          , b = function() {
            v.wrapper.dispatchEvent({
                'type': 'playNext'
            })
        }
          , w = function() {
            if (!d && !s.querySelector('.ahvp__video__endingview')) {
                d = document.createElement('div'),
                d.className = 'ahvp__video__endingview',
                d.innerHTML = ' <div class= "ahvp__video__endingview__bar" >\u5373\u5c06\u4e3a\u60a8\u64ad\u653e\u4e0b\u4e00\u89c6\u9891\uff0c</div>  <div class="ahvp__video__endingview__playnow">\u7acb\u5373\u64ad\u653e</div>  <div class="ahvp__video__endingview__close">X</div> ';
                var e = d.querySelector('.ahvp__video__endingview__playnow');
                d.querySelector('.ahvp__video__endingview__close').onclick = function() {
                    r('MediaProgress'),
                    E()
                }
                ,
                e.onclick = function() {
                    b(),
                    E()
                }
                ,
                s.appendChild(d)
            }
        }
          , E = function() {
            o(d),
            d = null
        }
          , x = function() {
            _ ? (a(c, 'inline'),
            i(f)) : (i(c),
            a(f, 'inline'))
        }
          , T = function() {
            _ = _ ? 0 : 1,
            x(),
            u.trigger('playlist_change', _ ? '\u60a8\u5df2\u6253\u5f00\u8fde\u64ad' : '\u60a8\u5df2\u53d6\u6d88\u8fde\u64ad'),
            v.wrapper.dispatchEvent({
                'type': 'OptionsSetting',
                'id': y.id,
                'selected': _
            })
        }
          , S = function() {
            b(),
            E()
        }
          , P = function() {
            p.numOptions <= 0 || (y = p.settingOption(),
            _ = y.selected,
            x(),
            f.addEventListener('click', T, !1),
            c.addEventListener('click', T, !1))
        }
          , O = function() {
            n({
                'MediaProgress': function(e) {
                    h = m.played,
                    m.played >= m.total && (h = 0),
                    _ && h >= m.total - 5 ? w() : d && s.querySelector('.ahvp__video__endingview') && E()
                }
            })
        };
        n({
            'InitOptionsItem': function() {
                r('InitOptionsItem'),
                m = t('time'),
                g = new l(32),
                g.on('timer', S);
                var e = s.querySelector('.ahvp__video__fullscreen')
                  , n = s.querySelector('.ahvp__video__controls--right');
                if (!(p.numOptions <= 0) && e && n) {
                    var i = document.createElement('div');
                    i.className = 'ahvp__video__optionspanle',
                    i.innerHTML = '<button type="button" class="ahvp__video__controls__button ahvp__video__controls__playlist controls__playlist_continuous" data-video-ahvp="options"><span class="ahvp-video-continuous">\u8fde\u7eed\u8fde\u64ad</span></button><button type="button" class="ahvp__video__controls__button  ahvp__video__controls__playlist controls__playlist_uncontinuous" data-video-ahvp="options"><span class="ahvp-video-uncontinuous">\u53d6\u6d88\u8fde\u64ad</span></button>',
                    n.insertBefore(i, e),
                    c = s.getElementsByClassName('controls__playlist_uncontinuous')[0],
                    f = s.getElementsByClassName('controls__playlist_continuous')[0],
                    x(_),
                    O(),
                    P()
                }
            },
            'MediaState': function(e) {
                d && (3 == e.value ? E() : 2 == e.value ? d.style.display = 'none' : 1 == e.value && 'none' == d.style.display && (d.style.display = 'block'))
            },
            'MediaFinish': function(e) {
                b()
            }
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.addClass
      , o = r.hasClass
      , a = r.hide
      , l = r.removeClass
      , s = r.show
      , u = r.toggleClass
      , c = n(25);
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , f = e.dispatcher
          , d = t('api')
          , p = r.getElementsByClassName('ahmp-player-loading')[0]
          , v = r.getElementsByClassName('ahvp__video__play')[0]
          , h = r.getElementsByClassName('ahvp__video__pause')[0]
          , m = r.getElementsByClassName('ahvp__video__media')[0]
          , y = r.getElementsByClassName('ahvp-video-play')[0]
          , g = void 0
          , _ = !0;
        m.style.cursor = 'pointer',
        a(h),
        i(r, 'ahvp__video--stopped'),
        u(y, 'ahvp-video-play--disabled', !0);
        var b = function(e) {
            clearTimeout(g),
            g = setTimeout(function() {
                u(r, 'ahvp__video--loading', e)
            }, p ? 150 : 0)
        };
        v.addEventListener('click', function(e) {
            o(y, 'ahvp-video-play--disabled') || d.play()
        }, !1),
        h.addEventListener('click', function(e) {
            return d.pause()
        }, !1);
        c(m, function(e) {
            if (e)
                d.fullScreen = undefined;
            else {
                if (!_)
                    return;
                d.togglePlay()
            }
        });
        f.on('MenuOnStage', function() {
            return _ = !1
        }),
        f.on('MenuOutStage', function() {
            return _ = !0
        }),
        n({
            'PlayerError': function(e) {
                l(r, 'ahvp__video--stopped'),
                l(r, 'ahvp__video--playing'),
                i(r, 'ahvp__video--error'),
                u(y, 'ahvp-video-play--disabled', !0)
            },
            'PlayerReady': function(e) {
                u(y, 'ahvp-video-play--disabled', !1)
            },
            'MediaState': function(e) {
                1 == e.value ? (l(r, 'ahvp__video--stopped'),
                i(r, 'ahvp__video--playing'),
                a(v),
                s(h, 'inline')) : 0 == e.value || 3 == e.value ? (i(r, 'ahvp__video--stopped'),
                l(r, 'ahvp__video--playing'),
                a(h),
                s(v, 'inline')) : (b(!1),
                a(h),
                s(v, 'inline'))
            },
            'MediaBuffer': function(e) {
                return b(!e.value)
            },
            'PlayerStart': function(e) {
                return b(!0)
            },
            'QualityChanged': function(e) {
                return b(!0)
            },
            'MediaReady': function(e) {
                return b(!1)
            }
        })
    }
}
, function(e, t, n) {
    var r = n(6)
      , i = n(0)
      , o = i.addClass
      , a = i.hasClass
      , l = i.removeClass
      , s = i.toggleClass
      , u = 'ahvp__preview'
      , c = u + '--visible'
      , f = u + '__list'
      , d = u + '__item'
      , p = d + '--active'
      , v = u + '__thumb'
      , h = u + '__time'
      , m = function(e, t, n, i) {
        return '<li class=" ' + d + ' " data-time="' + e + '"><div class=" ' + v + ' " style="background-image: url(' + t + '); background-position: ' + n + ' ' + i + ';"></div><p class=" ' + h + '"> ' + r.PLAYER.format(e) + ' </p></li>'
    };
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , i = e.dispatcher
          , v = 130
          , h = r.getElementsByClassName('ahvp__video__progress')[0]
          , y = r.getElementsByClassName('ahvp__video__tooltip')[0]
          , g = void 0
          , _ = void 0
          , b = null
          , w = void 0
          , E = void 0
          , x = function(e) {
            for (var n = '<ul class="' + f + '">', i = 0; i < _ / g; i++) {
                var o = i * g
                  , a = t('preview').url(parseInt(i / 100, 10))
                  , l = parseInt(-i % 10 * 128, 10) + 'px'
                  , s = parseInt(-i / 10, 10) % 10 * 72 + 'px';
                n += m(o, a, l, s)
            }
            n += '</ul>',
            E = document.createElement('div'),
            E.className = u,
            E.innerHTML = n,
            r.appendChild(E),
            w = E.querySelector('.' + f)
        }
          , T = function() {
            var e = void 0
              , t = void 0;
            w.addEventListener('mousemove', function(n) {
                clearTimeout(e),
                e = setTimeout(function() {
                    (t = w.querySelector('.' + p)) && l(t, p);
                    var e = n.target
                      , r = n.target.parentNode
                      , i = a(e, d)
                      , s = a(r, d);
                    (i || s) && (t = i ? e : r,
                    o(t, p))
                }, 10)
            }, !1)
        }
          , S = function(e) {
            var n = e.target
              , r = e.target.parentNode
              , i = a(n, d)
              , o = a(r, d);
            if (i || o) {
                var l = i ? n.getAttribute('data-time') : r.getAttribute('data-time');
                t('time').seek(parseInt(l, 10))
            }
        }
          , P = function() {
            var e = null
              , t = function(t) {
                clearTimeout(e),
                e = setTimeout(function() {
                    s(E, c, 'mouseenter' === t.type)
                }, 500)
            };
            h.addEventListener('mouseenter', function(e) {
                return t(e)
            }, !1),
            h.addEventListener('mouseleave', function(e) {
                return t(e)
            }, !1),
            E.addEventListener('mouseenter', function(e) {
                return t(e)
            }, !1),
            E.addEventListener('mouseleave', function(e) {
                return t(e)
            }, !1)
        }
          , O = function(e) {
            (b = w.querySelector('.' + p)) && l(b, p);
            var t = parseInt(e.value.percent / g, 10);
            b = w.querySelectorAll('.' + d)[t],
            o(b, p);
            var n = '0px'
              , r = h.clientWidth
              , i = Math.round(e.value.percent / e.value.duration * r)
              , a = t * v + 1;
            n = i < v / 2 + 1 ? '-' + (e.value.percent < g ? a - 1 : a) + 'px' : i > r - v / 2 + 1 ? '-' + (a - r + v) + 'px' : '-' + (a - i + v / 2) + 'px',
            w.style.transform = 'translate3d(' + n + ', 0, 0)',
            y.style.display = 'none',
            y.style.bottom = '100px'
        };
        n({
            'PlayerReady': function(e) {
                _ = t('time').total,
                g = t('preview').unit,
                t('preview').length > 0 && (x(),
                P(),
                T(),
                w.addEventListener('click', S, !1),
                i.on('acrossprogress', O))
            }
        })
    }
}
, function(e, t, n) {
    var r = n(6)
      , i = n(5)
      , o = i.browser
      , a = n(0)
      , l = a.hasClass
      , s = a.toggleClass;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , i = (e.off,
        e.container)
          , a = e.dispatcher
          , u = i.getElementsByClassName('ahvp__video__time--current')[0]
          , c = i.getElementsByClassName('ahvp__video__time--duration')[0]
          , f = i.getElementsByClassName('ahvp__video__tooltip')[0]
          , d = i.getElementsByClassName('ahvp__video__progress')[0]
          , p = i.getElementsByClassName('ahvp__video__progress--buffer')[0]
          , v = i.getElementsByClassName('ahvp__video__progress--played')[0]
          , h = i.getElementsByClassName('ahvp__video__progress--seek')[0]
          , m = void 0;
        d.style['pointer-events'] = 'none';
        var y = function(e) {
            v.value = g(e, m),
            f.innerHTML = r.PLAYER.format(e),
            t('time').seek(e)
        }
          , g = function(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }
          , _ = function(e, t) {
            return Array.prototype.indexOf && -1 !== e.indexOf(t)
        }
          , b = function(e) {
            if (f && d && 0 !== m) {
                var t = d.getBoundingClientRect()
                  , n = 0
                  , i = 'ahvp__video__tooltip--visible';
                if (e)
                    n = 100 / t.width * (e.pageX - t.left);
                else {
                    if (!l(f, i))
                        return;
                    n = f.style.left.replace('%', '')
                }
                n < 0 ? n = 0 : n > 100 && (n = 100),
                f.innerHTML = r.PLAYER.format(n / 100 * m),
                f.style.left = n + '%',
                e && _(['mouseenter', 'mouseleave'], e.type) && s(f, i, 'mouseenter' === e.type),
                e && _(['mouseenter', 'mousemove'], e.type) && a.trigger('acrossprogress', {
                    'duration': parseInt(m, 10),
                    'percent': parseInt(m / 100 * n, 10)
                })
            }
        };
        h.addEventListener(o.ie ? 'change' : 'input', function(e) {
            y(h.value / 100 * m)
        }, !1),
        n({
            'PlayerStart': function(e) {
                return d.style['pointer-events'] = 'auto'
            },
            'MediaProgress': function(e) {
                u.innerHTML = r.PLAYER.format(t('time').played),
                h.value = g(t('time').played, m),
                v.value = g(t('time').played, m),
                p.value = g(t('time').loaded, m)
            },
            'PlayerReady': function(e) {
                (m = t('time').total) && c && (c.innerHTML = r.PLAYER.format(m))
            },
            'PlayerError': function(e) {
                d.style['pointer-events'] = 'none'
            }
        }),
        d.addEventListener('mouseenter', b, !1),
        d.addEventListener('mouseleave', b, !1),
        d.addEventListener('mousemove', b, !1)
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.append
      , o = n(3)
      , a = n(0)
      , l = a.hasClass
      , s = a.toggleClass
      , u = 'ahvp__video__quality'
      , c = u + '__current'
      , f = c + '--1080'
      , d = u + '__list'
      , p = d + '--visible'
      , v = 'ahvp__video__quality__current--disabled'
      , h = u + '__item'
      , m = h + '--active'
      , y = 22
      , g = 27;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , a = e.dispatcher
          , u = r.getElementsByClassName('ahvp__video__quality')[0]
          , _ = r.getElementsByClassName('ahvp__video__quality__current')[0]
          , b = r.getElementsByClassName('ahvp__video__quality__list')[0]
          , w = new o(200)
          , E = void 0
          , x = function(e) {
            E && E.length <= 1 && (e = !0),
            s(_, v, e)
        };
        x(!0);
        var T = function() {
            var e = 'ahvp__video__controls__button ' + c;
            4 == E.quality.value && (e += ' ' + f),
            _.className = e,
            _.innerHTML = E.quality.desc
        }
          , S = function(e, t) {
            if (e != t) {
                var n = b.getElementsByTagName('li')[e];
                n.className = h,
                n = b.getElementsByTagName('li')[t],
                n.className = h + ' ' + m
            }
        }
          , P = function(e) {
            var n = d;
            e ? n += ' ' + p : w.stop(),
            b.className = n,
            b.style.height = E.length * (t('screen').full ? g : y) + 'px'
        };
        w.on('timer', function(e) {
            return P(!1)
        }),
        u.addEventListener('mouseover', function(e) {
            return w.stop()
        }),
        u.addEventListener('mouseout', function(e) {
            return w.start()
        }),
        _.addEventListener('click', function(e) {
            E && E.enable && !l(_, v) && P(b.className == d)
        }, !1),
        n({
            'PlayerError': function(e) {
                x(!0)
            },
            'PlayerReady': function(e) {
                E = t('qualities'),
                _.innerHTML = E.quality.desc,
                b.style.height = E.length * (t('screen').full ? g : y) + 'px';
                for (var n = 0; n < E.length; n++) {
                    var r = n == E.quality.index ? ' ahvp__video__quality__item--active' : ''
                      , o = i(b, '<li class="' + h + r + '">' + E.get(n).desc + '</li>');
                    o.qualityValue = E.get(n).value,
                    o.addEventListener('click', function(e) {
                        E.setQuality(e.currentTarget.qualityValue),
                        P(!1)
                    }, !1)
                }
            },
            'PlayerStart': function(e) {
                T(),
                x(!1)
            },
            'QualityChanged': function(e) {
                T(),
                S(e.value.from.index, e.value.to.index)
            },
            'MediaState': function(e) {
                3 == e.value ? x(!0) : 1 == e.value && x(!1)
            }
        }),
        a.on('controlHidden', function(e) {
            return P(!1)
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.remove
      , o = r.toggleClass
      , a = 'ahvp__video__startview_blink';
    e.exports = function(e) {
        var t = (e.store,
        e.on)
          , n = e.off
          , r = e.container
          , l = (e.dispatcher,
        r.getElementsByClassName('ahvp__video__startview__loading')[0].children)
          , s = r.querySelector('.ahvp__video__startview')
          , u = 0
          , c = setInterval(function() {
            var e = l[u];
            if (u >= 3) {
                for (var t = 0; t < l.length; t++)
                    o(l[t], a, !1);
                u = 0
            }
            e && (o(e, a, !0),
            u++)
        }, 500)
          , f = function() {
            n(),
            clearInterval(c),
            i(s)
        };
        t({
            'PlayerReady': f,
            'PlayerError': f
        })
    }
}
, function(e, t, n) {
    var r = n(0)
      , i = r.hasClass
      , o = r.toggleClass
      , a = 'ahvp__video__scale'
      , l = a + '__list'
      , s = a + '__item'
      , u = s + '--active'
      , c = a + '__time'
      , f = a + '__fullscreen'
      , d = 'ahvp__video__media';
    e.exports = function(e) {
        var t = (e.store,
        e.on)
          , n = (e.off,
        e.container)
          , r = e.dispatcher
          , s = void 0
          , p = void 0
          , v = void 0
          , h = void 0
          , m = void 0
          , y = void 0
          , g = void 0
          , _ = void 0
          , b = n.getElementsByClassName('ahvp__video__controls')[0]
          , w = n.getElementsByClassName(d)[0];
        v = document.createElement('div'),
        v.className = a,
        v.style.display = 'none',
        v.innerHTML = '<ul class="ahvp__video__scale__list"><li class="ahvp__video__scale__item ahvp-video-fifty" data-scale="50">50%</li><li class="ahvp__video__scale__item  ahvp-video-seventyfive" data-scale="75">75%</li><li class="ahvp__video__scale__item ahvp-video-hundred ahvp__video__scale__item--active " data-scale="100">100%</li><li class="ahvp__video__scale__item scale-item-icon-full" data-scale="fill">\u6ee1\u5c4f</li></ul><div class="ahvp__video__scale--right"><div class="ahvp__video__scale__time">00:00</div><button class="ahvp__video__controls__button ahvp__video__scale__fullscreen" type="button"><span class="ahvp-video-shrink"></span></button></div>',
        h = v.querySelector('.' + l),
        m = v.querySelector('.' + u),
        y = v.querySelector('.' + c),
        g = v.querySelector('.' + f),
        b.appendChild(v),
        p = m.getAttribute('data-scale'),
        s = d + '--' + p,
        o(w, s, !0),
        h.addEventListener('click', function(e) {
            i(e.target, u) || (o(m, u, !1),
            o(w, s, !1),
            m = e.target,
            p = m.getAttribute('data-scale'),
            s = d + '--' + p,
            o(m, u, !0),
            o(w, s, !0),
            r.trigger('videoscale', p))
        }, !1),
        t({
            'Resize': function(e) {
                var t = e.value.full;
                v.style.display = t ? 'block' : 'none',
                t ? _ = setInterval(function() {
                    var e = new Date
                      , t = ('0' + e.getHours()).slice(-2)
                      , n = ('0' + e.getMinutes()).slice(-2);
                    y.innerHTML = t + ':' + n
                }, 1e3) : clearInterval(_)
            }
        }),
        g.addEventListener('click', function() {
            return r.trigger('toolTipBar_fullscreen_handler')
        }, !1)
    }
}
, function(e, t, n) {
    var r = n(5)
      , i = r.browser
      , o = n(3)
      , a = n(0)
      , l = a.hasClass;
    e.exports = function(e) {
        var t = e.store
          , n = e.on
          , r = (e.off,
        e.container)
          , a = e.dispatcher
          , s = r.getElementsByClassName('ahvp__video__controls__button ahvp__video__mute')[0]
          , u = r.querySelector('.ahvp__video__volume')
          , c = r.querySelector('.ahvp__video__volume_box')
          , f = r.getElementsByClassName('ahvp__video__volume--input')[0]
          , d = r.getElementsByClassName('ahvp__video__volume--display')[0]
          , p = t('volume')
          , v = new o(500);
        v.on('timer', function(e) {
            return h(!1)
        }),
        u.addEventListener('mouseover', function(e) {
            return v.stop()
        }),
        u.addEventListener('mouseout', function(e) {
            return v.start()
        });
        var h = function(e) {
            var t = 'ahvp__video__volume_box';
            e ? t += ' ahvp__video__volume_box-dispaly' : v.stop(),
            c.className = t
        };
        s.addEventListener('click', function(e) {
            h(!l(c, 'ahvp__video__volume_box-dispaly'))
        });
        var m = function() {
            var e = Math.round(100 * p.value);
            f.setAttribute('style', 'background-size:  ' + e + '%  100%')
        }
          , y = function(e) {
            f.value = 100 * e,
            d.value = 100 * e;
            var t = s.children[0];
            t.className = 'ahvp-video-volume-high'
        };
        f.addEventListener(i.ie ? 'change' : 'input', function(e) {
            p.value = f.value / 100
        }, !1),
        a.on('controlHidden', function(e) {
            return h(!1)
        }),
        n({
            'VolumeChange': function(e) {
                y(e.value),
                m()
            }
        }),
        m(),
        y(p.value)
    }
}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t, n) {
    n(22),
    n(21);
    var r = n(1)
      , i = r.EVENT
      , o = n(7)
      , a = o.PlayerVersion
      , l = n(20)
      , s = l.newPlayer
      , u = l.player
      , c = l.render
      , f = n(10)
      , d = f.add
      , p = window.AHVP;
    p || (p = window.AHVP = {});
    var v = p.versions;
    v || (v = p.versions = {}),
    v.player || (v.player = a,
    p.PLAYER_EVENT = i,
    p.addPlugin = d,
    p.newPlayer = s,
    p.renderPlayer = c,
    p.player = u,
    p.manager = {
        'render': c
    },
    window.on_ahp_init && window.on_ahp_init()),
    c()
}
]);
