document.addEventListener('DOMContentLoaded',function(){
    const hero = new HeroSlider('.swiper');
    hero.start();

    const _textAnimation = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', _textAnimation);

    const _invewAnimation = function (el, inview) {
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('invuew');
        }
    }

    const so2 = new ScrollObserver('.cover-slide', _invewAnimation);
});