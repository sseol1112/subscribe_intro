# subscribe_intro

* interactive page 연습. -> 정기구독 소개페이지
* Web API 'Intersection Observer API' 활용 <br/>
: Intersection Observer는 viewport와 교차하는 엘리먼트를 비동기식으로 관찰하는 기능을 제공한다. <br/>
: 즉, 현재 화면에 노출되는 영역에 대한 엘리먼트에 대해서 속성을 적용해 줄 수 있음 <br/>

* scroll 이벤트로 스크롤시, 각 영역별 인터랙티브 효과를 주려고 scrollTop()과, offset().top 활용하여 분기처리하였으나, 
스크롤 할 때마다, 해당 영역에 위치할 경우 스크롤 이벤트가 다중 동작하는 문제가 발생하여, 끊기고 버벅거리는 문제가 발생 -> 해당 웹 API를 사용하여 해결하였음. 
