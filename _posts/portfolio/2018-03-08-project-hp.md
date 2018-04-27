---
header:
  teaser: /assets/images/comming-soon.jpg
title: Project-HP
excerpt: project portfolio
---

## 참고한 사이트 모음
* [html 레이아웃 관련](https://www.codeproject.com/Articles/546960/HTML-Quick-Start-Web-Application)


* [프로젝트 Github : https://github.com/zooozoo/homepage-project](https://github.com/zooozoo/homepage-project)
* if statement에서 else를 쓰는게 좋은지 아니면 그냥 return 하는게 좋은지에 관한 이야기, 속도나 기능적인 부분에서 차이는 없고
얼마나 읽기 편한지와같은 문제가 고려되는데 else를 쓰기보다는 바로 return하는 방식이 더 좋다는 의견이 많다. 관련 논쟁 스택오버플로우 링크
[https://stackoverflow.com/questions/14844531/is-it-preferable-to-use-an-else-in-python-when-its-not-necessary](https://stackoverflow.com/questions/14844531/is-it-preferable-to-use-an-else-in-python-when-its-not-necessary)
[https://stackoverflow.com/questions/9191388/it-is-more-efficient-to-use-if-return-return-or-if-else-return](https://stackoverflow.com/questions/9191388/it-is-more-efficient-to-use-if-return-return-or-if-else-return)


## 다음 단계

* user가 선택한 뉴스만 기억해서 보여주도록 main 템플렛 수정



## 나중에 해야할 일

* header 파트 레이아웃 리팩터링 필요 
  -> 부트스트랩 레이아웃 사용해서 해결

* 크롤링한 데이터에서 '문답'과 같은 요소들 없애기
  -> 글자수에 조건을 걸어서 해결

* nav에 news_select_section에서 한글로 언론사이름 보여줄 수 있게 수정
  -> filed에 verbose name 설정하고, index.html의 card header 부분에 field.name을 field.value로 변경해서 해결

* main에 checkbox form에 initial data 전달하는거 더 효율적으로 할 수 있는지 살펴보기
  -> model form 이기 때문에 데이터베이스에서 가져온 모델 인스턴스를 전달함으로써 initiated된 폼을 사용할 수 있음

* 에러가 나면 데이터베이스에 있는 내용을 끌어올 수 있도록 만들기


## 배포과정에 대한 기록

1. aws계정 생성
   1. IAM 유저와, 보안그룹 생성
   2. aws cli를 활용해 기본정보 등록
2. local 에서 postgres 연결 확인
3. settings 를 패키지로 만들고 deploy 와 dev용 setting 모듈 분리
4. RDS, S3와 연결되고 로컬에서 80번port로 접속 가능한 docker만들기
  * docker를 만드는 과정에서 있었던 일
  docker를 만드는 과정에서 basedocker를 새로 구성할 필요가 있어서 간단하게 새 명령어를 집어넣고 새로 buil를 하는데 pyenv를 의존성문제를 해결하기 위한 구성을 다울로드 하는 과정에 에러가 발생했다.
  ```docker
  E: Failed to fetch http://security.ubuntu.com/ubuntu/pool/main/t/tzdata/tzdata_2016j-0ubuntu0.16.04_all.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/libd/libdrm/libdrm2_2.4.76-1~ubuntu16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://security.ubuntu.com/ubuntu/pool/main/i/icu/libicu55_55.1-7ubuntu0.3_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://security.ubuntu.com/ubuntu/pool/main/libx/libxml2/libxml2_2.9.3+dfsg1-1ubuntu0.3_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://security.ubuntu.com/ubuntu/pool/main/c/curl/curl_7.47.0-1ubuntu2.4_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/libd/libdrm/libdrm-amdgpu1_2.4.76-1~ubuntu16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/libd/libdrm/libdrm-intel1_2.4.76-1~ubuntu16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/libd/libdrm/libdrm-nouveau2_2.4.76-1~ubuntu16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/libd/libdrm/libdrm-radeon1_2.4.76-1~ubuntu16.04.1_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/m/mesa/libglapi-mesa_17.0.7-0ubuntu0.16.04.2_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/m/mesa/libgl1-mesa-dri_17.0.7-0ubuntu0.16.04.2_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/m/mesa/libgl1-mesa-glx_17.0.7-0ubuntu0.16.04.2_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl-dev_1.0.2g-1ubuntu4.8_amd64.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Failed to fetch http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl-doc_1.0.2g-1ubuntu4.8_all.deb  404  Not Found [IP: 91.189.88.152 80]

  E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
  The command '/bin/sh -c apt-get install -y make build-essential             libssl-dev zlib1g-dev libbz2-dev             libreadline-dev libsqlite3-dev wget             curl llvm libncurses5-dev libncursesw5-dev             xz-utils tk-dev' returned a non-zero code: 100
  ```
  대략 이런 에러였는데 `apt-get update`부분을 살펴보니 이전에 같은 태그명으로 생성했던 적이 있어서 캐시를 사용해 build 하는 것을 확인했다. 캐쉬를 쓰지 않고 생으로 docker를 빌드하기 위한 명령어는 `--no-cache`명령어를 붙여주면 된다.
  [관련 답변내용 link](https://stackoverflow.com/questions/35594987/how-to-force-docker-for-clean-build-of-an-image?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

  설치중에 `debconf: delaying package configuration, since apt-utils is not installed`이런 에러가 있었는데 해당 내용이 [링크](https://github.com/phusion/baseimage-docker/issues/319)에 논의된 적이 있었고 일단 빌드가 완성되는 것으로 보아 별 문제가 없다고 판단 계속 진행하도록 하겠다. (추후 무슨 문제가 생겼을 경우 해결하기 위한 기록)
5. elasticbeanstalk 구축하기
  * 키페어 profile 설정문제
    awscli에서 사용하는 기본 프로파일은 환경변수로 설정되어 있다.
    `export AWS_PROFILE=user2`명령을 통해 환경변수를 설정함으로써 매번 profile을 지정하지 않아도 된다.
    [관련링크](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-multiple-profiles.html)
  * elasticbeanstalk에서 최신버전의 docker를 지원하지 않아 발생하는 문제라고 생각 -> docker를 삭제하고 다시 설치하기로 결정
    * 삭제하려고 하는데 docker를 찾지 못함 -> `dpkg -l | grep -i docker` 명령어로 설치된 `docker-ce`확인후에 삭제
      [관련링크](https://askubuntu.com/questions/935569/how-to-completely-uninstall-docker?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
    * 특정버전의 docker를 설치 [관련링크](https://askubuntu.com/questions/935569/how-to-completely-uninstall-docker?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
  * docker를 재설치 해도 같은문제가 발생했고, 문제는 `.gitignore`에 `Dockerfile`이 포함되어 있기 때문이었다. -> `.ebignore`추가
  * 결론적으로는 docker의 버전이 다른게 문제가 되는지는 정확하기 확인하진 못했지만 그래도 일단 버전을 맞추는게 좋을 것으로 판단된다.

## 크롤링을 중에 한글이 깨지는 현상에 대하여
 Beautifulsoup 에서 깨지는걸로 생각했는데, request모듈에서의 encoding문제였다. 참고한 블로그와 사이트
 [http://sfixer.tistory.com/entry/python3-beautifulsoup-%ED%95%9C%EA%B8%80-%EA%B9%A8%EC%A7%90](http://sfixer.tistory.com/entry/python3-beautifulsoup-%ED%95%9C%EA%B8%80-%EA%B9%A8%EC%A7%90)
 [http://pythonstudy.xyz/python/article/403-%ED%8C%8C%EC%9D%B4%EC%8D%AC-Web-Scraping](http://pythonstudy.xyz/python/article/403-%ED%8C%8C%EC%9D%B4%EC%8D%AC-Web-Scraping)
