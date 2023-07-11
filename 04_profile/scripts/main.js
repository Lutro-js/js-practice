class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector(".mobile-menu__btn");
        this.DOM.cover = document.querySelector(".mobile-menu__cover");
        this.DOM.container = document.querySelector("#global-container");
        this.eventType = this._getEventType();
        this._addEvent();
        this.isOpen = false; // メニューが開いているかどうかを管理するフラグ
    }

    _getEventType() {
        const isTouchCapable =
        "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);
        return isTouchCapable ? "touchstart" : "click";
    }

    _toggle() {
        this.isOpen = !this.isOpen; // メニューの開閉状態を反転させる
        this.DOM.container.classList.toggle("menu-open", this.isOpen); // メニューが開いている場合のみクラスを追加
    }

    _close() {
        if (this.isOpen) {
        this._toggle();
        }
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        window.addEventListener('scroll', this._handleScroll.bind(this)); // スクロールイベントを追加
      }
      
      _toggle() {
        this.DOM.container.classList.toggle('menu-open');
      }
      
      _handleScroll() {
        if (window.scrollY > 0) {
          this.DOM.container.classList.remove('menu-open');
        }
      }
      
    }      

    new MobileMenu();