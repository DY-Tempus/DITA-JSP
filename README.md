# DITA-JSP Main Project

## 개요
이 프로젝트는 React를 사용하여 프론트엔드를 구축하고, Node.js 및 Express를 사용하여 백엔드를 구성한 웹 애플리케이션입니다. 사용자는 이 애플리케이션을 통해 음악과 관련된 다양한 기능을 활용할 수 있습니다.

## 기술 스택
- **프론트엔드**: React
- **백엔드**: Node.js, Express
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
   npm install

3. **환경 변수 설정**: 프로젝트 루트에 .env 파일을 생성하여 필요한 환경 변수를 설정합니다.
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password

## 실행 방법

1. **서버 실행**
   node app.js

2. **프론트 실행**
   npm start

## 파일 구조

프로젝트 파일과 주요 구조는 다음과 같습니다.
DITA-JSP-main/
├── bin/                   # 빌드된 파일 저장
├── css/                   # 스타일시트 파일
├── javascript/            # 프론트엔드 JavaScript 파일
├── muse/                  # React 앱 소스 코드
├── node_modules/          # 설치된 패키지들
├── package.json           # Node.js 의존성 관리 파일
└── ...

## 기여 방법
1. 이 프로젝트를 포크합니다.
2. 새로운 브랜치를 생성합니다 (git checkout -b feature/AmazingFeature).
3. 변경 사항을 커밋합니다 (git commit -m 'Add some AmazingFeature').
4. 브랜치에 푸시합니다 (git push origin feature/AmazingFeature).
5. 풀 리퀘스트를 생성합니다.
