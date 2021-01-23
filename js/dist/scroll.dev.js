"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cb = function cb(el, isIntersecting) {
  if (isIntersecting) {
    animate(el);
  }
};

function animate(el) {
  el.classList.toggle("inview");
}

var ScrollObserver =
/*#__PURE__*/
function () {
  function ScrollObserver(els, cb, options) {
    _classCallCheck(this, ScrollObserver);

    this.els = document.querySelectorAll(els);
    this.cb = cb;
    var defaltOptions = {
      root: null,
      //交差判定のベースとなる要素を指定
      rootMargin: "0px",
      //画面の内側、下から300px監視対象の範囲
      threshold: 0,
      //SectionTopTitleの下辺が500px内に入りきった時
      once: true //監視停止の判定に用いる

    };
    this.options = Object.assign(defaltOptions, options); //defaltOptionsとoptionsの設定をマージ　optionsで渡された設定が優先される

    this.once = this.options.once;

    this._init();
  }

  _createClass(ScrollObserver, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      var callback = function callback(entries, observer) {
        var _this = this;

        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            //監視対象のDOMが画面上に入ってきた時イベント
            _this.cb(entry.target, true);

            if (_this.once) {
              observer.unobserve(entry.target); //監視の停止 entry.target = SectionTopTitleのこと
            }
          } else {
            _this.cb(entry.target, false);
          }
        });
      };

      this.io = new IntersectionObserver(callback.bind(this), this.options);
      this.io.POLL_INTERVAL = 100;
      this.els.forEach(function (el) {
        return _this2.io.observe(el);
      }); //監視対象のDOMを登録
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.io.disconnect();
    }
  }]);

  return ScrollObserver;
}();

var so = new ScrollObserver(".card", cb);