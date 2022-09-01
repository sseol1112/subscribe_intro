(function () {
    const subscribe = {
        settings : function() {
            const self = this;
            self.containerEl = document.getElementsByClassName('container');
            self.section1 = document.querySelector('.sec1');
            self.section2 = document.getElementsByClassName('sec2');
            self.section3 = document.querySelector('.sec3');
            self.section4 = document.querySelector('.sec4');
            console.log('setting1')


            self.sec1Text = document.querySelector('.sec1 .text_area');
            self.sec1Img = document.querySelectorAll('.sec1 .img_area img');
            self.sec2Img = document.querySelector('.sec2 .img_area img.ico_02');
            self.sec3Img = document.querySelectorAll('.sec3 .img_area img');
            self.sec4Img = document.querySelectorAll('.sec4 .img_area img');
        },
        init : function() {
            const self = this;
            console.log('init');
            self.settings();
            self.bindEvents();


            setTimeout(function() { 
                // $('.sec1 .text_area').addClass("on");
                self.sec1Text.classList.add('on');

                for(let i=0; i<self.sec1Img.length; i++) {
                    self.sec1Img[i].classList.add('on');
                }

                self.sec2Img.classList.add('on');

                for(let i=0; i<self.sec3Img.length; i++) {
                    self.sec3Img[i].classList.add('on');
                }
                for(let i=0; i<self.sec4Img.length; i++) {
                    self.sec4Img[i].classList.add('on');
                }

                if(self.sec2Img.classList.contains('on')){
                    self.sec2Img.setAttribute('src','/images/sec2_prod_02_on.png')
                }
            }, 1000);
        },
        bindEvents : function() {
            console.log('bind events');
            
            //self.sectionTop = section1.scrollTop();
            // containerEl.addEventListener('scroll', function(){
                
                
            // })
        }
    }
    subscribe.init();
}());