const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
/* setattribute - html 내용생성 */
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

// lodash 사용 라이브러리 함수 줄이기
// _.throttle(함수, 시간)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x: 0
        });
    }
    
        else{
            gsap.to(badgeEl, .6, {
                opacity: 1,
                display: 'block'
            });

            gsap.to(toTopEl, .2, {
                x: 100
            });
        }
    }, 300));

    
    toTopEl.addEventListener('click', function(){
        gsap.to(window, .7, {
            scrollTo: 0,


        })
    });

// gsap cdn 애니메이션 라이브러리
// gsap.to(요소, 지속시간, 옵션);
// 문자입력할때는 자바스크립트에는 ''값을 넣어야된다.

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, // 0.7, 1.4 , 2.1, 2.7
        opacity: 1
    }); 

});

// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
direction: 'vertical',
 autoplay: true, //자동 슬라이드 재생
 loop: true //반복재생

});

new Swiper('.promotion .swiper-container', {
    // direciton: 'horizontal' - 기본값
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 500 // .5초마다 슬라이드가 자동재생
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어

    },
    navigation:{
        prevEl: '.promotion .swiper-prev', //이전 슬라이드
        nextEl: '.promotion .swiper-next'  //다음 슬라이드
    }
});

new Swiper('.awards .swiper-container', {
    direction: 'horizontal', //수평슬라이드 기본값임
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion // !반댓값으로 전환시켜줌
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide');
    } 
    else{
        promotionEl.classList.remove('hide');
        //보임 처리
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingobject(selector, delay, size){
// gsap.to(요소, 시간, 옵션)
gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //-1 무한반복
    yoyo: true, //재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut,
    delay: random(0, delay)
});
}

floatingobject('.floating1', 1, 15);
floatingobject('.floating2', .5, 15);
floatingobject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-say');
spyEls.forEach(function(spyEl){
new ScrollMagic
    .Scene({
        triggerElement: spyEl,//보여짐 여부를 감시할 요소를 말함
        triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); // 올해 숫자


