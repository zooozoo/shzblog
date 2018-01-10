# 명령어 기록 (ubuntu-1604)

### 데이터베이스 생성
커맨드창 에서 'zoozoo'라는 계정 이름으로 `testname`이라는 데이터베이스를 생성
```
createdb testname --owner=zoozoo
```
데이터베이스 접속 후 위와 같은 데이터베이스 생성
```
CREATE DATABASE testname OWNER zoozoo;
```
데이터베이스 이름이 대문자인 경우 `""`(쌍따옴표)로 데이터베이스 이름을 감싸서 명령을 실행시켜야 실행이 된다.

### 기본생성된 사용자 이름으로 postgresql연결

postgres 사용자로 psql을 실행하고 postgres 데이터베이스에 연결한다.

```
sudo -u postgres psql
```

### postgres 사용자로 다른 데이터베이스 연결

postgres 사용자로 psql을 실행하고 testdb 데이터베이스에 연결한다.
```
sudo -u postgres psql testdb
```

### 데이터베이스 삭제(터미널 창에서)
```
sudo -u postgres dropdb <name>
```
데이터베이스 접속 후 위와 같은 데이터베이스 삭제
```
DROP DATABASE <name>
```

### 데이터베이스 목록확인 (데이터베이스 명령어)
```
\ㅣ
```

### 특정 데이터베이스에 접속
ex) database명 instagram
```
psql instagram
```

### 위의 특정 데이터베이스에 접속 후 관련 테이블 확인
```
dt\
```

### 테이블의 전체 내용 확인
```
select * from 테이블명
```


### 사용자 비밀번호 변경하기

1. `sudo -u postgres psql template1` 명령을 통해 데이터베이스 접속
2. `ALTER USER postgres with encrypted password 'your_password';` 명령을 통해 패스워드 변경 아래는 예시
```
ALTER USER James with encrypted password 'asldkhf';
```
3. `sudo systemctl restart postgresql.service`명령을 통해 postgresql 재시작
