var store = [{
        "title": "Css",
        "excerpt":"1. css란?마크업 언어(html)가 실제 표시되는 방법을 기술하는 언어***2. css사용법 head안쪽 style태그 내부에 작성 사용할 요소의 style속성에 정의 외부 스타일 시트를 사용, link태그를 사용, href속성에 경로를 입력*** 1.css선택자 html페이지 내부의 모든 요소에 같은 css속성을 적용합니다. margin이나 padding값을 초기화하는 등, 기본값을 정할 때 주로 사용합니다. 다만 문서의 모든 요소를 읽기 때문에 페이지...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-09-css/",
        "teaser":null},{
        "title": "Html",
        "excerpt":"#HTML##html 기본####1. HTML은?마크업 언어, “하이퍼 텍스트”####2. 웹 표준W3C, 웹표준####3. 웹 접근성WCAG 웹 콘텐츠를 더 접근성 있게 만드는 권고안의 넓은 범위####4. HTML의 기본구조&lt;!DOCTYPE html&gt;-&gt; doctype은 문서 유형을 지정&lt;head&gt; &lt;title&gt;Document&lt;/title&gt;&lt;/head&gt;-&gt; html문서에 관한 기본 정보를 포함&lt;body&gt;&lt;/body&gt;&lt;/html&gt;-&gt; 로 이루어진 요소를 '테그'라 부릅니다.####5. 주석주석은 자주 습관적으로 사용하는 것이 좋습니다.####6.태그의 요소와 속성&lt;요소 속성=\"값&gt;-&gt; 스스로 닫는 태그...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-09-html/",
        "teaser":null},{
        "title": "Git",
        "excerpt":"협업시 팁General 저장소 연동 관련 git 문서 git은 파일을 데이터배이스에 저장할 때 까지의 3가지 단계를 가지고 있는데 Modified, Stage, Committed 로 나누어 진다. 수정된 modified 파일은 add 를 통해 stage상태를 넘어 가고 (데이터 베이스로 올려지기 전 상태) Committed를 통해 데이터배이스 저장소에 저장한다. Untracked, 관리대상이 아닌 파일들을 지칭하며 git status 명령어에도...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-11-git/",
        "teaser":null},{
        "title": "Python",
        "excerpt":"pyenv, virtualenv, iPython설치 및 설정pyenvpyenv는 프로젝트별로 파이썬 버전을 따로 관리할 수 있도록 도와주는 라이브러리이다. 여러 프로젝트를 동시에 진행하다보면, 어떤 프로젝트에서는 2.7을, 어떤 프로젝트에서는 3.4를 사용하는 식으로 다양한 버전의 사용할 수도 있고, 각각에 설치된 라이브러리간 충돌이 일어날 수도 있는데, 이러한 파이썬 버전간의 충돌을 방지하기 위해 사용한다.virtualenvvirtualenv는 파이썬 개발환경을 프로젝트별로 분리해서 관리할...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-12-python/",
        "teaser":null},{
        "title": "Pyenv,virtualenv",
        "excerpt":"  가상환경 만들기pyenv virtualenv 버전 가상환경이름  가상환경 지우기pyenv uninstall 가상환경 이름  기존 세팅된 가상환경 확인pyenv versions  폴더 안에서 가상환경 버전확인    pyenv version        패키지 설치해당 폴더로 이동하여pip install","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-13-pyenv,virtualenv/",
        "teaser":null},{
        "title": "Python_script",
        "excerpt":"  제터레이터의 원리와 yield 의 용범에 대하여 자세히 설명해 놓은 브롤그http://bluese05.tistory.com/56","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-14-python_script/",
        "teaser":null},{
        "title": "Vim관련",
        "excerpt":"vim 커스텀 세팅관련터미널에서 vi ~/.vimrc 실행syntax onset tabstop=4set expandtabset softtabstop행=4set shiftwidth=4set numberset backspace=2filetype indent oncolorscheme industryvim에서 여러줄 주석처리하기명령어 모드에서v 를 누르면 visual 모드로 전환hjkl을 이용하여 이동하며 블럭 설정(화살표키로 하면 안됨. VIM에서 커서의 이동키는 hjkl !!)블럭이 설정되면: 를 누르면'&lt;,'&gt; 이 나타나고norm i&lt;원하는문자&gt; 를 입력즉,:norm i#이라고 하면 # 모양의 주석이 들어감반대로 주석...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-14-vim%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "Pycharm",
        "excerpt":"인터프리터에 새로 만든 가상환경(pyenv)이 적용되지 않았을 경우 적용하는 방법인터프리터 설정 창에서 add local -&gt; 홈폴더-&gt; .pyenv 폴더-&gt; versions-&gt;해당 가상환경 폴더 -&gt; bin폴더 -&gt; python파일 선택파이참 에서 장고 디버그 세팅관련 참조사진파이참 professional version에서 django template 언어 적용하기메뉴바 file -&gt; settings -&gt; python template languages 검색 -&gt; template language 선택창에서 django 선택...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-21-pycharm/",
        "teaser":null},{
        "title": "Cli",
        "excerpt":"rm -r 폴더이름or파일이름폴더를 지울 때는 -r 옵션을 넣어야 지워진다.(폴더안에 폴더가 있으면 또 지워야 되니까 리커시브 옵션) ,지울껀지 물어보는데 f 옵션을 주어서 물어보지 않게 바로 지울 수 있다. ex) rm -rf 폴더이름or파일이름 cp 복사대상파일경로 복사할위치 mv 기존이름 바꿀이름파일이동, 혹은 파일이름변경 가동되고 있는 서버 확인 ps -ax | grep runserver 서버죽이기(예시) kill...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-25-CLI/",
        "teaser":null},{
        "title": "Django",
        "excerpt":"장고프로젝트를 처음 시작할 때 프로젝트를 시작할 폴더를 만들고 해당 폴더로 이동한다. git init gitignore작성 / gitignore 내부에서 가장 상단에 # Custom 쓰고 다음줄에 .idea/ 입력해준다.(파이참 관련 파일인데 custom 으로 추가해 줘야함) pyenv virtualenv 가상환경이름 으로 가상환경 생성 pyenv local로 가상환경 적용 git hub에 프로젝트 저장소 추가 로컬 git에 remote 저장소...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-25-django/",
        "teaser":null},{
        "title": "Pycharm_shortcut",
        "excerpt":"ctrl + shift + ffind in path : 프로젝트 안에서 단어 찾기alt + j같은 형식의 단어 다중선택ctrl + alt + u커서가 위치한 곳의 상속관계를 보여주는 미니맵shift + enter아래로 줄 추가하면서 커서이동ctrl + alt + enter위로 줄 추가하면서 커서이동","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-25-pycharm_shortcut/",
        "teaser":null},{
        "title": "Localkey, publickey,깃헙 관련",
        "excerpt":"","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-28-localkey,%20publickey,%EA%B9%83%ED%97%99%20%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "Atom_settings",
        "excerpt":"아톰에서 markdown-preview 단축키(ctrl+shift+m) 안먹힐 때ctrl+.를 눌러서 확인해 보면 emmet의 라인합치기 단축키와  겹쳐서 emmet 을 설치했을 경우 해당 문제가 발생하는 것 같다(추측)해결 방법으로는: settings -&gt; open config folder 클릭 -&gt; keymap.cson 파일 열기 -&gt; 아래내용 입력 및 저장—아래—'.editor:not(.mini)':  'ctrl-shift-M': 'markdown-preview:toggle'","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-30-atom_settings/",
        "teaser":null},{
        "title": "Ubuntu_shortcut",
        "excerpt":"일반ctrl + alt L화면 잠금super(윈도우키) + D모든 창 내리기super + w현재 작업공간에 열려있는 창 작게 보여주기(화살표로 선택가능)super + shift + w모든 작업공간에 열려있는 창 적게 보기여주기(화살표로 선택가능)ctrl + w현재의 작업공간이나, 모든 작업공간에 열려있는 창을 띄운다음에(super + w나 super + shift + w)ctrl + w명령을 통해 선택된 창을 하나씩 종료시킬 수...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-30-ubuntu_shortcut/",
        "teaser":null},{
        "title": "Ubuntu_설정관련",
        "excerpt":"ubuntu 에서 한글입력기 설정 방법한글 설치sudo apt-get install fcitx-hangul로 한글을 설치한다.System Settings &gt; Language Support를 실행해서 아직 완전히 설치되지 않다고 표시되는데 잠시 기다려서 모두 설치한다.Keyboard input method system:을 ibus가 아닌 fcitx로 변경한다.재부팅한다.한영 전환 설정Shortcut 설정AllSettings &gt; Keyboard &gt; Shortcuts Tab &gt; Typing을 선택한다.Switch to Next source, Switch to Previous sourc,...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-09-30-ubuntu_%EC%84%A4%EC%A0%95%EA%B4%80%EB%A0%A8/",
        "teaser":null},{
        "title": "Sql",
        "excerpt":"SQL 기본 문법SQL이란 무엇인가? SQL은 구조화 된 쿼리 언어 SQL을 사용하면 데이터베이스에 액세스하고 조작 할 수 있습니다. SQL은 ANSI (American National Standards Institute) 표준입니다.웹사이트에서 SQL 사용데이터베이스의 데이터를 보여주는 웹 사이트를 구축하려면 다음이 필요합니다. RDBMS 데이터베이스 프로그램 (예 : MS Access, SQL Server, MySQL) PHP 또는 ASP와 같은 서버 측 스크립팅...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-10-03-SQL/",
        "teaser":null},{
        "title": "Test!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update","records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-10-09-welcome-to-jekyll/",
        "teaser":null},{
        "title": "Django_document",
        "excerpt":"Field option 중 choices choices 에서 앞쪽이 데이터베이스 에서 인식하는 벨류값, 뒤쪽이 클라이언트 화면에서 보이는 값example)from django.db import modelsclass Person(models.Model): SHIRT_SIZES = ( ('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ) name = models.CharField(max_length=60) shirt_size = models.CharField(max_length=1, choices=SHIRT_SIZES)null값과 blanknull값은 데이터베이스에 어떠한 데이터도 갖고 있지 않다는 것을 말한다. (datetime 이나 integerfield에는 비어있는...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-10-10-django_document/",
        "teaser":null},{
        "title": "Django_model_fieldtype",
        "excerpt":"Model field referenceField typesAutoField(**options) 추가하는 인스턴스마다 자동으로 사용가능한 ID값을 할당하는 IntegerField. 기본적으로 primary key field가 자동으로 추가해 주기 때문에 필요한 경우에 사용하면 됩니다.BigAutoField(**options) 사용 할 수 있는 숫자가 1부터 9223372036854775807까지 보장되는 AutoField와 유사한 필드입니다.BigIntegerField(**options) 9223372036854775807까지의 숫자를 맞출 수 있다는 것을 제외하고는 IntegerField와 매우 흡사 한 64 비트 정수입니다.이 필드의 기본...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-10-13-django_model_fieldtype-/",
        "teaser":null},{
        "title": "Dajngo_queryset_method",
        "excerpt":"QuerySet APIMethods that return new QuerySetsfilter()지정된 검색 매개 변수와 일치하는 객체가 포함 된 새 QuerySet을 반환합니다.복잡한 쿼리문을 사용해야 할 경우 Q objects를 사용할 수 있습니다.exclude()지정된 검색 매개변수와 일치하는 객체가 포함되지 않은 새 QuerySet을 반환합니다.annotate()제공된 쿼리 식 목록으로 QuerySet의 각 개체에 주석을 첨부합니다.제공된 쿼리 식 목록으로 QuerySet의 각 개체에 주석을 첨부합니다....","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-10-14-dajngo_querySet_method/",
        "teaser":null},{
        "title": "Postgresql",
        "excerpt":"명령어 기록 (ubuntu-1604)데이터베이스 생성커맨드창 에서 ‘zoozoo’라는 계정 이름으로 testname이라는 데이터베이스를 생성createdb testname --owner=zoozoo데이터베이스 접속 후 위와 같은 데이터베이스 생성CREATE DATABASE testname OWNER zoozoo;데이터베이스 이름이 대문자인 경우 \"\"(쌍따옴표)로 데이터베이스 이름을 감싸서 명령을 실행시켜야 실행이 된다.기본생성된 사용자 이름으로 postgresql연결postgres 사용자로 psql을 실행하고 postgres 데이터베이스에 연결한다.sudo -u postgres psqlpostgres 사용자로 다른 데이터베이스 연결postgres...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-10-15-postgresql/",
        "teaser":null},{
        "title": "Ecs",
        "excerpt":"도커만 올려서 바로 배포할 수 있는 ecs라는 서비스가 있는데 나중에 사용방법 확인해서 elastic beanstalk과 비교해서 어떤게 더 편하게 배포할 수 있는지 확인해 보기","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-11-16-ECS/",
        "teaser":null},{
        "title": "Docker관련",
        "excerpt":"Docker 세팅도커를 처음 설치하고 나서 다음 명령어로 우분투 이미지를 다운받고 해당 운영체제를 실행할 수 있다.docker run ubuntu:16.04docker run --rm it ubuntu:16:04 /bin/bash켜진 도커환경 안에서는 처음부터 root권한이 주어지기 때문에 sudo입력 없이도 여러가지 설치 명령을 실행시킬 수 있다.Dockerfile.base 이미지 만드는 명령어sudo docker build -t base -f Dockerfile.base .Dockerfile.base를 기준으로 우리가 쓸 도커(container)...","categories": ["records"],
        "tags": [],
        "url": "http://localhost:4000/records/2017-11-16-docker%EA%B4%80%EB%A0%A8/",
        "teaser":null}]
