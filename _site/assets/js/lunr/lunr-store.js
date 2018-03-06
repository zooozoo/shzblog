var store = [{
        "title": "Css",
        "excerpt":"1. css란?마크업 언어(html)가 실제 표시되는 방법을 기술하는 언어***2. css사용법 head안쪽 style태그 내부에 작성 사용할 요소의 style속성에 정의 외부 스타일 시트를 사용, link태그를 사용, href속성에 경로를 입력*** 1.css선택자 html페이지 내부의 모든 요소에 같은 css속성을 적용합니다. margin이나 padding값을 초기화하는 등, 기본값을 정할 때 주로 사용합니다. 다만 문서의 모든 요소를 읽기 때문에 페이지...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-09-css/",
        "teaser":null},{
        "title": "Html",
        "excerpt":"#HTML##html 기본####1. HTML은?마크업 언어, “하이퍼 텍스트”####2. 웹 표준W3C, 웹표준####3. 웹 접근성WCAG 웹 콘텐츠를 더 접근성 있게 만드는 권고안의 넓은 범위####4. HTML의 기본구조&lt;!DOCTYPE html&gt;-&gt; doctype은 문서 유형을 지정&lt;head&gt; &lt;title&gt;Document&lt;/title&gt;&lt;/head&gt;-&gt; html문서에 관한 기본 정보를 포함&lt;body&gt;&lt;/body&gt;&lt;/html&gt;-&gt; &lt;와 &gt;로 이루어진 요소를 ‘테그’라 부릅니다.####5. 주석주석은 자주 습관적으로 사용하는 것이 좋습니다.####6.태그의 요소와 속성&lt;요소 속성=\"값&gt;-&gt; 스스로 닫는...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-09-html/",
        "teaser":null},{
        "title": "Git",
        "excerpt":"협업시 팁General 저장소 연동 관련 git 문서 git은 파일을 데이터배이스에 저장할 때 까지의 3가지 단계를 가지고 있는데 Modified, Stage, Committed 로 나누어 진다. 수정된 modified 파일은 add 를 통해 stage상태를 넘어 가고 (데이터 베이스로 올려지기 전 상태) Committed를 통해 데이터배이스 저장소에 저장한다. Untracked, 관리대상이 아닌 파일들을 지칭하며 git status 명령어에도...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-11-git/",
        "teaser":null},{
        "title": "Python",
        "excerpt":"pyenv, virtualenv, iPython설치 및 설정pyenvpyenv는 프로젝트별로 파이썬 버전을 따로 관리할 수 있도록 도와주는 라이브러리이다. 여러 프로젝트를 동시에 진행하다보면, 어떤 프로젝트에서는 2.7을, 어떤 프로젝트에서는 3.4를 사용하는 식으로 다양한 버전의 사용할 수도 있고, 각각에 설치된 라이브러리간 충돌이 일어날 수도 있는데, 이러한 파이썬 버전간의 충돌을 방지하기 위해 사용한다.virtualenvvirtualenv는 파이썬 개발환경을 프로젝트별로 분리해서 관리할...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-12-python/",
        "teaser":null},{
        "title": "Pyenv,virtualenv",
        "excerpt":"  가상환경 만들기pyenv virtualenv 버전 가상환경이름  가상환경 지우기pyenv uninstall 가상환경 이름  기존 세팅된 가상환경 확인pyenv versions  폴더 안에서 가상환경 버전확인    pyenv version        패키지 설치해당 폴더로 이동하여pip install","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-13-pyenv,virtualenv/",
        "teaser":null},{
        "title": "Python_script",
        "excerpt":"  제터레이터의 원리와 yield 의 용범에 대하여 자세히 설명해 놓은 브롤그http://bluese05.tistory.com/56","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-14-python_script/",
        "teaser":null},{
        "title": "Vim관련",
        "excerpt":"vim 커스텀 세팅관련터미널에서 vi ~/.vimrc 실행syntax onset tabstop=4set expandtabset softtabstop행=4set shiftwidth=4set numberset backspace=2filetype indent oncolorscheme industryvim에서 여러줄 주석처리하기명령어 모드에서v 를 누르면 visual 모드로 전환hjkl을 이용하여 이동하며 블럭 설정(화살표키로 하면 안됨. VIM에서 커서의 이동키는 hjkl !!)블럭이 설정되면: 를 누르면'&lt;,'&gt; 이 나타나고norm i&lt;원하는문자&gt; 를 입력즉,:norm i#이라고 하면 # 모양의 주석이 들어감반대로 주석...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-14-vim%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "Pycharm",
        "excerpt":"인터프리터에 새로 만든 가상환경(pyenv)이 적용되지 않았을 경우 적용하는 방법인터프리터 설정 창에서 add local -&gt; 홈폴더-&gt; .pyenv 폴더-&gt; versions-&gt;해당 가상환경 폴더 -&gt; bin폴더 -&gt; python파일 선택파이참 에서 장고 디버그 세팅관련 참조사진파이참 professional version에서 django template 언어 적용하기메뉴바 file -&gt; settings -&gt; python template languages 검색 -&gt; template language 선택창에서 django 선택...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-21-pycharm/",
        "teaser":null},{
        "title": "Cli",
        "excerpt":"rm -r 폴더이름or파일이름폴더를 지울 때는 -r 옵션을 넣어야 지워진다.(폴더안에 폴더가 있으면 또 지워야 되니까 리커시브 옵션) ,지울껀지 물어보는데 f 옵션을 주어서 물어보지 않게 바로 지울 수 있다. ex) rm -rf 폴더이름or파일이름 cp 복사대상파일경로 복사할위치 폴더안에 있는 모든 파일 복사하기cp -a /source/. /dest/ mv 기존이름 바꿀이름파일이동, 혹은 파일이름변경 가동되고 있는 서버...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-25-CLI/",
        "teaser":null},{
        "title": "Django",
        "excerpt":"장고프로젝트를 처음 시작할 때 프로젝트를 시작할 폴더를 만들고 해당 폴더로 이동한다. git init gitignore작성 / gitignore 내부에서 가장 상단에 # Custom 쓰고 다음줄에 .idea/ 입력해준다.(파이참 관련 파일인데 custom 으로 추가해 줘야함) pyenv virtualenv 3.6.2 가상환경이름 으로 가상환경 생성(3.6.2는 python 버전, 다른 버전도 설치 가능하다) pyenv local로 가상환경 적용 git hub에...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-25-django/",
        "teaser":null},{
        "title": "Pycharm_shortcut",
        "excerpt":"ctrl + shift + ffind in path : 프로젝트 안에서 단어 찾기alt + j같은 형식의 단어 다중선택ctrl + alt + u커서가 위치한 곳의 상속관계를 보여주는 미니맵shift + enter아래로 줄 추가하면서 커서이동ctrl + alt + enter위로 줄 추가하면서 커서이동","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-25-pycharm_shortcut/",
        "teaser":null},{
        "title": "Localkey, publickey,깃헙 관련",
        "excerpt":"","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-28-localkey,%20publickey,%EA%B9%83%ED%97%99%20%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "Atom_settings",
        "excerpt":"아톰에서 markdown-preview 단축키(ctrl+shift+m) 안먹힐 때ctrl+.를 눌러서 확인해 보면 emmet의 라인합치기 단축키와  겹쳐서 emmet 을 설치했을 경우 해당 문제가 발생하는 것 같다(추측)해결 방법으로는: settings -&gt; open config folder 클릭 -&gt; keymap.cson 파일 열기 -&gt; 아래내용 입력 및 저장—아래—'.editor:not(.mini)':  'ctrl-shift-M': 'markdown-preview:toggle'","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-30-atom_settings/",
        "teaser":null},{
        "title": "Ubuntu_shortcut",
        "excerpt":"일반ctrl + alt L화면 잠금super(윈도우키) + D모든 창 내리기super + w현재 작업공간에 열려있는 창 작게 보여주기(화살표로 선택가능)super + shift + w모든 작업공간에 열려있는 창 적게 보기여주기(화살표로 선택가능)ctrl + w현재의 작업공간이나, 모든 작업공간에 열려있는 창을 띄운다음에(super + w나 super + shift + w)ctrl + w명령을 통해 선택된 창을 하나씩 종료시킬 수...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-30-ubuntu_shortcut/",
        "teaser":null},{
        "title": "Ubuntu_설정관련",
        "excerpt":"ubuntu 에서 한글입력기 설정 방법한글 설치sudo apt-get install fcitx-hangul로 한글을 설치한다.System Settings &gt; Language Support를 실행해서 아직 완전히 설치되지 않다고 표시되는데 잠시 기다려서 모두 설치한다.Keyboard input method system:을 ibus가 아닌 fcitx로 변경한다.재부팅한다.한영 전환 설정Shortcut 설정AllSettings &gt; Keyboard &gt; Shortcuts Tab &gt; Typing을 선택한다.Switch to Next source, Switch to Previous sourc,...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-09-30-ubuntu_%EC%84%A4%EC%A0%95%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "Sql",
        "excerpt":"SQL 기본 문법SQL이란 무엇인가? SQL은 구조화 된 쿼리 언어 SQL을 사용하면 데이터베이스에 액세스하고 조작 할 수 있습니다. SQL은 ANSI (American National Standards Institute) 표준입니다.웹사이트에서 SQL 사용데이터베이스의 데이터를 보여주는 웹 사이트를 구축하려면 다음이 필요합니다. RDBMS 데이터베이스 프로그램 (예 : MS Access, SQL Server, MySQL) PHP 또는 ASP와 같은 서버 측 스크립팅...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-03-SQL/",
        "teaser":null},{
        "title": "Test!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update","records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-09-welcome-to-jekyll/",
        "teaser":null},{
        "title": "Django_document",
        "excerpt":"Field option 중 choices choices 에서 앞쪽이 데이터베이스 에서 인식하는 벨류값, 뒤쪽이 클라이언트 화면에서 보이는 값example)from django.db import modelsclass Person(models.Model): SHIRT_SIZES = ( ('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ) name = models.CharField(max_length=60) shirt_size = models.CharField(max_length=1, choices=SHIRT_SIZES)null값과 blanknull값은 데이터베이스에 어떠한 데이터도 갖고 있지 않다는 것을 말한다. (datetime 이나 integerfield에는 비어있는...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-10-django_document/",
        "teaser":null},{
        "title": "Django_model_makingqueries",
        "excerpt":"Making Queries장고문서 를 공부하며 기록한 내용입니다.&gt;&gt;&gt; from blog.models import Blog&gt;&gt;&gt; b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')&gt;&gt;&gt; b.save() This performs an INSERT SQL statement behind the scenes. Django doesn’t hit the database until you explicitly call save().안쪽에서는 sql 문이 작동되는데, 장고는 save() method가 실행되기 전까지는 database를 치지 않는다.Creating...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-13-django_model_MakingQueries/",
        "teaser":null},{
        "title": "Django_model_fieldtype",
        "excerpt":"Model field referenceField typesAutoField(**options) 추가하는 인스턴스마다 자동으로 사용가능한 ID값을 할당하는 IntegerField. 기본적으로 primary key field가 자동으로 추가해 주기 때문에 필요한 경우에 사용하면 됩니다.BigAutoField(**options) 사용 할 수 있는 숫자가 1부터 9223372036854775807까지 보장되는 AutoField와 유사한 필드입니다.BigIntegerField(**options) 9223372036854775807까지의 숫자를 맞출 수 있다는 것을 제외하고는 IntegerField와 매우 흡사 한 64 비트 정수입니다.이 필드의 기본...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-13-django_model_fieldtype-/",
        "teaser":null},{
        "title": "Dajngo_queryset_method",
        "excerpt":"QuerySet APIMethods that return new QuerySetsfilter()지정된 검색 매개 변수와 일치하는 객체가 포함 된 새 QuerySet을 반환합니다.복잡한 쿼리문을 사용해야 할 경우 Q objects를 사용할 수 있습니다.exclude()지정된 검색 매개변수와 일치하는 객체가 포함되지 않은 새 QuerySet을 반환합니다.annotate()제공된 쿼리 식 목록으로 QuerySet의 각 개체에 주석을 첨부합니다.제공된 쿼리 식 목록으로 QuerySet의 각 개체에 주석을 첨부합니다....","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-14-dajngo_querySet_method/",
        "teaser":null},{
        "title": "Postgresql",
        "excerpt":"명령어 기록 (ubuntu-1604)데이터베이스 생성커맨드창 에서 ‘zoozoo’라는 계정 이름으로 testname이라는 데이터베이스를 생성createdb testname --owner=zoozoo데이터베이스 접속 후 위와 같은 데이터베이스 생성CREATE DATABASE testname OWNER zoozoo;데이터베이스 이름이 대문자인 경우 \"\"(쌍따옴표)로 데이터베이스 이름을 감싸서 명령을 실행시켜야 실행이 된다.기본생성된 사용자 이름으로 postgresql연결postgres 사용자로 psql을 실행하고 postgres 데이터베이스에 연결한다.sudo -u postgres psqlpostgres 사용자로 다른 데이터베이스 연결postgres...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-10-15-postgresql/",
        "teaser":null},{
        "title": "Ecs",
        "excerpt":"도커만 올려서 바로 배포할 수 있는 ecs라는 서비스가 있는데 나중에 사용방법 확인해서 elastic beanstalk과 비교해서 어떤게 더 편하게 배포할 수 있는지 확인해 보기","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-11-16-ECS/",
        "teaser":null},{
        "title": "Docker관련",
        "excerpt":"Docker 세팅도커를 처음 설치하고 나서 다음 명령어로 우분투 이미지를 다운받고 해당 운영체제를 실행할 수 있다.docker run ubuntu:16.04docker run --rm it ubuntu:16:04 /bin/bash켜진 도커환경 안에서는 처음부터 root권한이 주어지기 때문에 sudo입력 없이도 여러가지 설치 명령을 실행시킬 수 있다.Dockerfile.base 이미지 만드는 명령어sudo docker build -t base -f Dockerfile.base .Dockerfile.base를 기준으로 우리가 쓸 도커(container)...","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2017-11-16-docker%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "TIL 시작",
        "excerpt":"초보몽키라는 이름의 블로그를 운영하고 계신 이현주님의 블로그를 보면 Today I Learned 라는 카테고리로 포스팅을 해놓았습니다.&gt; 블로그 바로가기그것을 보는 순간!‘오~!!!!! 괜찮은 방법이다.’ 싶었습니다.그래서 저도 하루하루 제가 했던 일들에 대하여, 혹은 공부한 것 들에 대하여 기록하려고 합니다.사실 이렇게 누군가에게 알리고 싶지도 않고, 매일매일 공부하려는 다짐에 자신감도 조금 부족하지만이렇게 포스팅 하는 것 자체가...","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-14-TIL/",
        "teaser":null},{
        "title": "1월15일~21일",
        "excerpt":"1월 15일 월요일 커니핸 교수의 hello digital world 공부1월 17일 수요일 커니핸 교수의 hello digital world 공부1월 19일 금요일 블로그 만들기 posts sidebar navigations에 자동으로 태그 목록 보여주도록 설정 개별 post 들어 갔을 때 sidebar가 제대로 표시되지 않았는데 header에 sidebar변수가 인식되지 않는 현상 발견-&gt; 형식에 맞는 새로운 sidebar html 파일을...","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-15-1%EC%9B%9415%EC%9D%BC~21%EC%9D%BC/",
        "teaser":null},{
        "title": "UX/UI fontsize customzing at atom editor",
        "excerpt":"아톰 에디터에서 UX/UI 글씨크기 바꾸기블로그 작성을 위해서 아톰 editor를 사용하는데왼쪽 프로젝트의 파일 목록이 나오는 부분과, 파일명을 보여주는 부분의 글씨가 너무 작아서불편함을 느끼고 있었다. 운영체제의 디스플레이 세팅을 통해서 글씨를 키워볼까 했는데다른 부분은 모두 만족하고 사용하고 있었기 때문에 건들이기 싫었고 atom의 글씨 크기만바꾸고 싶었다.그래서 검색!그리고 찾았다!! 아래는 해당 링크 https://github.com/atom/atom/issues/2530좀 더 자세히...","categories": ["posts"],
        "tags": ["ide","atom"],
        "url": "https://zooozoo.github.io/posts/2018-01-17-atom/",
        "teaser":null},{
        "title": "1월22일~28일",
        "excerpt":"1월 22일 월요일 Try-Django-Tutorial youtube 강의 9커밋까지 완료 하루3분 네트워크 독서 블로그 정리 about page 내용 작성 및 records 내용 정리-&gt; 이전부터 쭉 작성해 왔던 것들인데 미완성 된 부분도 있고 구성에 일관성이 없어서 한번 다시 쭉 정리해야할 필요성을 느낌 1월 23일 화요일 Try-Django-Tutorial youtube 강의 17커밋까지 완료 class based view...","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-22-1%EC%9B%9422%EC%9D%BC~28%EC%9D%BC/",
        "teaser":null},{
        "title": "1월29일~2월04일",
        "excerpt":"1월 30일 화요일오늘 한일 Try-Django-Tutorial youtube 강의 42커밋까지 완료1월 31일 수요일오늘 한일 Try-Django-Tutorial youtube 강의 45커밋까지 완료 -&gt; 완성2월 01일 목요일오늘 한일 처음시작하는 파이썬 복습 135p2월 02일 금요일오늘 한일 처음시작하는 파이썬 복습클로져(closure)와 데커레이터(decorator)에 대해서 제대로 이해할 수 있었다. 참고한 블로그 링크클로져(closure)데커레이커(decorator) 결론적으로는 파이썬의 내부함수와, 클로져를 잘 이해하고 있어야 데커레이터를 이해할...","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-22-1%EC%9B%9429%EC%9D%BC~2%EC%9B%9404%EC%9D%BC/",
        "teaser":null},{
        "title": "2월05일~2월11일",
        "excerpt":"2월 06일 화요일오늘 한일 처음시작하는 파이썬 6장~7장 복습2월 07일 수요일오늘 한일 처음시작하는 파이썬 7장~12장 복습(완료)이전에는 6장까지 주로 공부했었는데, 이번에 전체를 다시 복습하면서 1장부터 6장까지의 내용중에서도 또 새롭게 알게되거나 더 잘 이해할 수 있었던 부분이 많았다. 나머지 부분에서는 네트워크나, 비동기처리, 테스트나 여러가지 모듈을 사용하는 방법들이 기억에 남았다. 이전에 6장 이후의 내용들을...","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-22-2%EC%9B%9405%EC%9D%BC~2%EC%9B%9411%EC%9D%BC/",
        "teaser":null},{
        "title": "2월12일~2월18일",
        "excerpt":"2월 12일 월요일오늘 한일  커니핸 교수의 Hello, Digital World 복습(잽터4 - 챕터7: 소프트웨어)2월 13일 화요일오늘 한일  커니핸 교수의 Hello, Digital World 복습(잽터8 - 챕터9: 통신, 인터넷)","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-22-2%EC%9B%9412%EC%9D%BC~2%EC%9B%9418%EC%9D%BC/",
        "teaser":null},{
        "title": "2월26일~3월02일",
        "excerpt":"2월 28일 수요일 한동한 til 작성에 미진했다. 한주씩 번갈아가며 아프고 나니 의욕 급상실… 아무것도 안한건 아니고 커니핸교수의 Hello Digital World2회독, 하루3분 네트워크교실2회독을 마무리 했다. 독후감이라도 써놔서 증거로 남겨야하나 싶다. 이렇게 공개적으로 써놓으니 누군가 보지도 않을것 같지만 뭔가 지키지도 못할 약속을 함부로 써놓기가 부담이 된다. (물론 이렇게 부담가지고 공부 열심히 하려고...","categories": ["til"],
        "tags": [],
        "url": "https://zooozoo.github.io/til/2018-01-22-2%EC%9B%9426%EC%9D%BC~3%EC%9B%9402%EC%9D%BC/",
        "teaser":null},{
        "title": "전문가를 위한 파이썬",
        "excerpt":"","categories": ["records"],
        "tags": [],
        "url": "https://zooozoo.github.io/records/2018-01-23-Fluent_Python/",
        "teaser":null},{
        "title": "Spanning multi-valued relationships",
        "excerpt":"장고의 모델 문서를 공부하다가(Making Queries) 이전에 패캠에서 수업들을 때 한번 이해 했던 내용인데 다시보니 너무 헷갈려서 폭풍써치를 감행했고 비로소 이해를 하게 되었다. (하… 내 시간…)해당 내용을 이미 알고 있고 스압을 느끼신다면 stackoverflow 의 답변으로 바로 가보시길…해당 부분은 Spanning multi-valued relationships 라는 부분인데 ForeignKey나 Many-to-Many관계에있는 모델중에서 관계된 모델을 조건으로 해서 filtering...","categories": ["posts"],
        "tags": ["django"],
        "url": "https://zooozoo.github.io/posts/2018-01-24-Django_Spanning%20multi-valued%20relationships/",
        "teaser":null},{
        "title": "Url과uri",
        "excerpt":"URL과 URI그림으로 배우는 http &amp; network basic을 공부하다가 URL과 URI에 대한 이야기가 나와서 해당 내용에 대한 정확한 개념을 잡고 기록으로 남겨놓으려 한다. (물론 구글에 치면 진짜 잘나온다…)먼저 무엇에 대한 약자인지 알아봅시다. URL - Uniform Resource Locator URI - Uniform Resource Identifier문자 그대로 해석해 보자면 URL은 “정형화된 리소스 위치표시” 라고 할...","categories": ["posts"],
        "tags": [],
        "url": "https://zooozoo.github.io/posts/2018-03-03-URL%EA%B3%BCURI/",
        "teaser":null},{
        "title": "If __name__ == \"__main__\": 의미",
        "excerpt":"if __name__ == \"__main__\": 의미해당내용을 패스트캠퍼스 수업시간에 한번 들은적이 있는데 다시보면 헷갈리고 명확하게 개념을 이해하고 싶어서 구글검색을 감행했다.원래 처음의 생각은 검색으로 나온 정보를 내 언어로 다시 정리하려고 했다.(그래야 이해도 잘 되고, 내가 궁금한 부분을 명확하게 정리할 수 있기 때문이다)그러나 구글신은 이러한 나의 마음을 이미 알기라고 한듯 이미 미친듯이 잘 정리된...","categories": ["posts"],
        "tags": [],
        "url": "https://zooozoo.github.io/posts/2018-03-03-if%20__name__%20==%20%22__main__%22:%20%EC%9D%98%EB%AF%B8/",
        "teaser":null}]
