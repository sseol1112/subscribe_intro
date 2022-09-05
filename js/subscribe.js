(function () {
    const subscribe = {
        settings : function() {
            const self = this;            

            self.$containerEl = $('.container');
            self.$section1 = self.$containerEl.find('.sec1');
            self.$section2 = self.$containerEl.find('.sec2');
            self.$section3 = self.$containerEl.find('.sec3');
            self.$section4 = self.$containerEl.find('.sec4');
            self.$section5 = self.$containerEl.find('.sec5');
            self.$allDiv = $('section div');
            self.$allImg = $('section img');


            self.sec1Text = document.querySelector('.sec1 .text_area');
            self.sec1Img = document.querySelectorAll('.sec1 .img_area img');
            self.sec2Img = document.querySelector('.sec2 .img_area img.ico_02');
            self.sec3Img = document.querySelectorAll('.sec3 .img_area img');
            self.sec4Img = document.querySelectorAll('.sec4 .img_area img');
            self.sec5Img = document.querySelector('.sec5 .sec_icon img');

        },
        init : function() {
            const self = this;
            //console.log('init');
            self.settings();
            self.bindEvents();


            setTimeout(function() {
                self.sec1Text.classList.add('on');

                for(let i=0; i<self.sec1Img.length; i++) {
                    self.sec1Img[i].classList.add('on');
                }
                
                // self.sec2Img.classList.add('on');

                // if(self.sec2Img.classList.contains('on')){
                //     self.sec2Img.setAttribute('src','/images/sec2_prod_02_on.png')
                // }

                // for(let i=0; i<self.sec3Img.length; i++) {
                //     self.sec3Img[i].classList.add('on');
                // }
                // for(let i=0; i<self.sec4Img.length; i++) {
                //     self.sec4Img[i].classList.add('on');
                // }

                // self.sec5Img.classList.add('on');
            }, 1000);
        },
        bindEvents : function() {
            const self = this;
            console.log('bind events');
            
            //스크롤 다운시 하단 이벤트 발생!
            window.addEventListener('scroll', function(){
                self.sec2Img.setAttribute('src','/images/sec2_prod_02_mo.png')
                self.$allDiv.removeClass("on");
                self.$allImg.removeClass("on");


                const sec1T = self.$section1.offset().top,
                      sec1H = self.$section1.outerHeight(),
                      sec2T = self.$section2.offset().top,
                      sec2H = self.$section2.outerHeight(),
                      sec3T = self.$section3.offset().top,
                      sec3H = self.$section3.outerHeight(),
                      sec4T = self.$section4.offset().top,
                      sec4H = self.$section4.outerHeight(),
                      sec5T = self.$section5.offset().top,
                      sec5H = self.$section5.outerHeight(),
                      wH = $(window).height(),
                      wS = $(this).scrollTop();


                if (wS > (sec1T+sec1H-wH) && wS < (sec2T+sec2H-wH)){
                    self.sec1Text.classList.add('on');

                    for(let i=0; i<self.sec1Img.length; i++) {
                        self.sec1Img[i].classList.add('on');
                    }
                    console.log('섹션1 실행')
                } else if(wS > (sec2T+sec2H-wH) && wS < (sec3T+sec3H-wH)) {
                    self.sec2Img.classList.add('on');
                    if(self.sec2Img.classList.contains('on')){
                        self.sec2Img.setAttribute('src','/images/sec2_prod_02_on.png')
                    }
                    console.log('섹션2 실행')
                } else if(wS > (sec3T+sec3H-wH) && wS < (sec4T+sec4H-wH)) {
                    for(let i=0; i<self.sec3Img.length; i++) {
                        self.sec3Img[i].classList.add('on');
                    }
                    console.log('섹션3 실행')
                } else if(wS > (sec4T+sec4H-wH) && wS < 1900) {
                    for(let i=0; i<self.sec4Img.length; i++) {
                        self.sec4Img[i].classList.add('on');
                    }
                    console.log('섹션4 실행')
                } else if(wS >= 1900) {
                    self.sec5Img.classList.add('on');
                    console.log('섹션5 실행');
                } else {
                    console.log("Error!, 잘못된 형식입니다.");
                }
            })
        },
    }
    subscribe.init();
}());
