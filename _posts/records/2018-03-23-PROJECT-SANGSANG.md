# 작은방 미술 교습소 '상상' 홈페이지를 만들며 남긴 기록입니다.

## 찾아보지 않고도 기억하고 싶은 부트스트랩 클래스

* `.sr-only`
  [문서](https://getbootstrap.com/docs/4.0/utilities/screenreaders/)에 보면 아래와 같이 확인할 수 있다.
  > Use screenreader utilities to hide elements on all devices except screen readers.

  페이지에 label 없이 input태그를 사용하려고 할 때 스크린리더와 관련된 문제가 생길 수 있다. 스크린리더가 페이지를 읽어 나갈 때 input태그에 label을 붙이지 않는다면 온란을 겪기 때문에 label을 붙여줘야 한다. 그래서 위와같은 문제를 `sr_only`클래스를 통해 해결해주는 것

* `mt-4`, `my-5` `mb-1` 등
  - bootstrap의 spacing utilities에서 확인할 수 있다.[문서](https://getbootstrap.com/docs/4.0/utilities/spacing/)
  - 첫 번째 단어는 mrgin과 padding을 구분하고 두 번째 단어는 방향을 가리킨다.
  - 숫자는 정도의 차이를 가리킨다.

* `w-25`, `h-50`등
  - sizing에서 확인할 수 있다.[문서](https://getbootstrap.com/docs/4.0/utilities/sizing//)
  - 요소의 크기를 조절 할 수 있는 도구

* `fa`, `fa-book`등
  - bootstrap아이콘을 사용하는 태그(font awesome icon)
  - mdb [문서](https://mdbootstrap.com/content/icons-list/)

## 화면에서 보여주는 것 중에 이름을 몰라서 검색이 어려웠던 웹 테크닉

* Parallax(시차를 이용한 효과)
  - 스크롤 하면 아래에 있는 요소가 위의 요소를 덮어나가는 것 같이 보이게 하는 기술
  - 생활코딩에서 알려주는 웹 레시피에 관련 설명 [링크](https://opentutorials.org/module/2398/13856)
  - 기본적으로 css에서 background의 이미지를 고정 시켜서 효과를 내는 것
  - mdb의 랜딩페이지 튜토리얼 에서는 `background: url("./bg.jpg")no-repeat center center fixed;`와 같이 background를 fixed 효과를 넣음으로서 parallax효과를 주었다.
  - 생활코딩이나 w3s에서는`background-attachment: fixed;`를 적용시켜서 관련 효과를 적용하는 방법을 선택했다.
  - 랜딩페이지 튜토리얼의 방법은 속성으로 적용하는 방법이다. [w3s에서 css background에 관한 설명 링크](https://www.w3schools.com/css/css_background.asp)
