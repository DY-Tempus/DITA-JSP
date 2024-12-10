# DITA-JSP Main Project

## 목차
1. 개요
2. 기술스택
3. 주요기능
4. 설치 방법
5. 실행 방법
6. 파일 구조
7. 프로젝트 네트워크 구조
8. 쇼케이스
9. 데이터베이스

## 개요
이 프로젝트는 React를 사용하여 프론트엔드를 구축하고, Node.js 및 Express를 사용하여 백엔드를 구성한 웹 애플리케이션입니다. 사용자는 이 애플리케이션을 통해 음악과 관련된 다양한 기능을 활용할 수 있습니다.

## 기술 스택
- **프론트엔드**: React
- **백엔드**: Node.js, Express
- **데이터베이스**: MySQL, HeidiSQL(Tool)
- **패키지**:
  - `axios`: 서버와의 HTTP 요청을 위한 라이브러리
  - `express`: Node.js 웹 애플리케이션 프레임워크
  - `express-fileupload`: 파일 업로드 기능 지원

## 주요 기능
- 사용자 로그인 및 회원 가입
- 음악과 아티스트의 상세 정보 조회
- 파일 업로드 기능을 통한 파일 관리

## 설치 방법

1. **프로젝트 클론**:
   ```bash
   git clone https://github.com/your-repo/DITA-JSP-main.git
   cd DITA-JSP-main

2. **의존성 설치**

    ```
    npm install
    ```

4. **환경 변수 설정**: 프로젝트 루트에 .env 파일을 생성하여 필요한 환경 변수를 설정합니다.
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password

## 실행 방법

1. **서버 실행**

   ```bash
   cd muse_Back/
   ```
   ```
   node app.js
   ```

3. **프론트 실행**
   ```bash
   cd muse/
   ```
   ```
   npm start
   ```

## 파일 구조

프로젝트 파일과 주요 구조는 다음과 같습니다.
```
DITA-JSP-main/
├── bin/                   # 빌드된 파일 저장
├── css/                   # 스타일시트 파일
├── javascript/            # 프론트엔드 JavaScript 파일
├── muse/                  # React 앱 소스 코드
├── muse_Back/             # 백엔드 소스 코드
├── node_modules/          # 설치된 패키지들
├── package.json           # Node.js 의존성 관리 파일
└── ...
```

## 프로젝트 네트워크 구조도
<img width="441" alt="MUSE 구조도" src="https://github.com/user-attachments/assets/22eb5192-fa6b-42d8-9eb8-4f44ba0c3e47">

## 쇼케이스
<img width="720" alt="MUSE 사진" src="https://github.com/user-attachments/assets/96178fc1-e3d9-4211-8c61-7e4b069d2e94">
홈 페이지

![image](https://github.com/user-attachments/assets/15008b10-6fa1-4f92-8cdf-e78bc05b98f1)
곡 디테일 페이지

![image](https://github.com/user-attachments/assets/ddb1f72d-1725-4453-bd31-b960387cb16f)
앨범 페이지

## 데이터베이스
![image](https://github.com/user-attachments/assets/6e273950-cb97-41c6-9a90-fbdf0bfeb301)



```
tbl_boardsCREATE TABLE GENRE
(
  GNAME VARCHAR(30) NOT NULL,       -- 장르 이름
  
  PRIMARY KEY (GNAME)
);

CREATE TABLE USER
(
  ID VARCHAR(20) NOT NULL,         -- 사용자 ID
  PASSWORD VARCHAR(50) NOT null,   -- 사용자 PW
  EMAIL VARCHAR(30) not null,      -- 사용자 E-MAIL
  IMG MEDIUMBLOB,               -- 프로필 이미지
  NAME VARCHAR(20) NOT NULL,         -- 사용자 이름(닉네임)
  GENRE1 VARCHAR(30),            -- 선호 장르1 (외래키)
  GENRE2 VARCHAR(30),            -- 선호 장르2 (외래키)
  
  FOREIGN KEY (GENRE1) REFERENCES GENRE(GNAME),
  FOREIGN KEY (GENRE2) REFERENCES GENRE(GNAME),
  PRIMARY KEY (ID)
);

CREATE TABLE ALBUM
(
  AID INT NOT NULL AUTO_INCREMENT,  -- 앨범 번호 (기본 키)
  ANAME VARCHAR(200) NOT NULL,       -- 앨범 이름 (리밋 200)
  ADATE DATE,                        -- 앨범 업로드 날짜
  ATEXT TEXT,                  -- 앨범 설명
  AIMG MEDIUMBLOB,               -- 앨범 커버 이미지
  ALIKES INT DEFAULT 0,            -- 앨범 좋아요
  AVIEWS INT DEFAULT 0,            -- 앨범 조회수
  ARATE INT DEFAULT 0,            -- 앨범 평점
  ID VARCHAR(20) NOT NULL,          -- 사용자 ID (외래 키)
  AGENRE VARCHAR(30) not null,      -- 앨범 장르 (외래 키)
  PRIMARY KEY (AID),
  FOREIGN KEY (ID) REFERENCES USER(ID) ON DELETE CASCADE,
  FOREIGN KEY (AGENRE) REFERENCES GENRE(GNAME)
);

CREATE TABLE MUSIC
(
  MID INT NOT NULL AUTO_INCREMENT,   -- 음악 번호(기본 키)
  MNAME VARCHAR(200) NOT NULL,      -- 음악 제목(200으로 리밋)
  MFILE LONGBLOB not null,         -- 음악 파일
  MIMG MEDIUMBLOB,               -- 음악 커버 이미지(추가)
  MLYRICS TEXT,                     -- 가사
  MLIKES INT DEFAULT 0,            -- 음악 좋아요
  MVIEWS INT DEFAULT 0,             -- 조회수
  MDATE DATE,                        -- 음악 업로드 날짜
  MRATE INT DEFAULT 0,            -- 음악 평점
  MGENRE VARCHAR(30),                 -- 장르 (외래 키)
  ID VARCHAR(20) NOT NULL,          -- 사용자 ID (외래 키)
  AID INT,                          -- 앨범 ID (외래 키)
  PRIMARY KEY (MID),
  FOREIGN KEY (MGENRE) REFERENCES GENRE(GNAME),
  FOREIGN KEY (ID) REFERENCES USER(ID) ON DELETE CASCADE,
  FOREIGN KEY (AID) REFERENCES ALBUM(AID) ON DELETE CASCADE
);

CREATE TABLE PLAYLIST
(
  PID INT NOT NULL AUTO_INCREMENT,   -- 플레이리스트 번호(기본 키)
  PNAME VARCHAR(50) NOT NULL,      -- 플레이리스트 제목
  PDATE DATE,                        -- 플레이리스트 업로드 날짜
  PLIKES INT DEFAULT 0,            -- 플레이리스트 좋아요
  PVIEWS INT DEFAULT 0,             -- 조회수
  ID VARCHAR(20) NOT null,         -- 사용자 ID (외래 키)
  PRIMARY KEY (PID),
  FOREIGN KEY (ID) REFERENCES USER(ID) ON DELETE CASCADE
);

CREATE TABLE PLAYLIST_MUSIC
(
  PID INT NOT NULL,               -- 플레이리스트 번호(외래 키, 기본 키)
  MID INT NOT NULL,                -- 음악 번호 (외래 키, 기본 키)
  PRIMARY KEY (PID, MID),
  FOREIGN KEY (PID) REFERENCES PLAYLIST(PID) ON DELETE CASCADE,
  FOREIGN KEY (MID) REFERENCES MUSIC(MID) ON DELETE CASCADE
);

CREATE TABLE COMMENT
(
  CID INT NOT NULL AUTO_INCREMENT,   -- 댓글 번호 (기본 키)
  MID INT,                           -- 음악 ID (외래 키, 음악에 달린 댓글일 경우)
  AID INT,                           -- 앨범 ID (외래 키, 앨범에 달린 댓글일 경우)
  ID VARCHAR(20) NOT NULL,           -- 사용자 ID (외래 키)
  COMMENT_TEXT TEXT NOT NULL,        -- 댓글 내용
  CDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 댓글 작성 시간
  PRIMARY KEY (CID),
  FOREIGN KEY (MID) REFERENCES MUSIC(MID) ON DELETE CASCADE,  -- 음악 삭제 시 댓글도 삭제
  FOREIGN KEY (AID) REFERENCES ALBUM(AID) ON DELETE CASCADE,  -- 앨범 삭제 시 댓글도 삭제
  FOREIGN KEY (ID) REFERENCES USER(ID) ON DELETE CASCADE      -- 사용자 삭제 시 댓글도 삭제
);

CREATE TABLE RECENTLY_PLAYED (
    UID VARCHAR(20) NOT NULL,          -- 사용자 ID (외래키)
    MID INT NOT NULL,                  -- 음악 ID (외래키)
    PLAYED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 재생 시간
    PRIMARY KEY (UID, MID, PLAYED_AT),
    FOREIGN KEY (UID) REFERENCES USER(ID) ON DELETE CASCADE,
    FOREIGN KEY (MID) REFERENCES MUSIC(MID) ON DELETE CASCADE
);

CREATE TABLE SEARCH_HISTORY (
    UID VARCHAR(20) NOT NULL,          -- 사용자 ID (외래키)
    SEARCH_TERM VARCHAR(255) NOT NULL, -- 사용자가 입력한 검색어
    SEARCHED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 검색한 시간
    PRIMARY KEY (UID, SEARCHED_AT),
    FOREIGN KEY (UID) REFERENCES USER(ID) ON DELETE CASCADE
);`user`
```
