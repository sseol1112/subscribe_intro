(function () {
    const subscribe = {
        settings : function() {
            const self = this;            
            self.targets = document.querySelectorAll('.active .img_area img');
            self.options = { root: null, threshold: 0.1, rootMargin: "-0px" };
            
            self.$containerEl = $('.container');
            self.$section1 = self.$containerEl.find('.sec1');
            self.$section2 = self.$containerEl.find('.sec2');
            self.$section3 = self.$containerEl.find('.sec3');
            self.$section4 = self.$containerEl.find('.sec4');

            self.sec1Img = document.querySelectorAll('.sec1 .img_area img');        
            self.sec2Img = document.querySelector('.sec2 .img_area img.ico_02');
            self.sec3Img = document.querySelectorAll('.sec3 .img_area img');
            self.sec4Img = document.querySelectorAll('.sec4 .img_area img');

        },
        init : function() {
            const self = this;
            //console.log('init');
            self.settings();
            self.bindEvents();

            // setTimeout(function() {
            //     self.sec2Img.classList.remove('on');
            //     subscribe.scrollChk();
            // }, 100);
        },
        bindEvents : function() {
            const self = this;
            //console.log('bind events');
            
            //스크롤 이벤트 대신 하단 web API 사용하였음.(Intersection Observer API)
            //intersection observer는 viewport와 교차하는 엘리먼트를 비동기식으로 관찰하는 기능을 제공한다.
            //즉, 현재 화면에 표시되는 엘리먼트들에 대해서 속성 적용해줄 수 있음.

            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach((entry) => {
                const container = entry.target;
                if (entry.isIntersecting) {
                    container.classList.add("on");
                    subscribe.activeImgChk();
                } else {
                    container.classList.remove("on");
                    subscribe.activeImgChk();
                }
                });
            }, self.options);

            self.targets.forEach((target) => {
                observer.observe(target);
            });
        },
        activeImgChk : function(){
            const self = this;
            if(self.sec2Img.classList.contains('on')){
                setTimeout(function() {
                    self.sec2Img.setAttribute('src','/images/sec2_prod_02_on.png') 
                    self.sec2Img.style.scale = '2.0';
                }, 1200);
                
            } else {
                self.sec2Img.style.scale = '1.0';
                self.sec2Img.setAttribute('src','/images/sec2_prod_02_mo.png')
            }
        }
    }
    subscribe.init();
}());
