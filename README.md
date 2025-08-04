# YouTube Clone (Estsoft First Project)
- 프론트엔드 기술을 기반으로 제작한 유튜브 클론 웹사이트입니다. 실제 유튜브의 주요 UI 요소와 반응형 레이아웃을 HTML/CSS/JavaScript만으로 구현하였습니다.

## 프로젝트 개요
- 진행 기간
  - 7월 21일(월) ~ 8월 6일(수) 11:50
- 목표
  - HTML/CSS/JavaScript로 UI를 구현
  - YouTube의 기본적인 기능과 UI를 모방하여 구조적 사고력 훈련
  - 추후 백엔드 연동을 위한 웹 컴포넌트 설계 이해
  - 모바일 대응 반응형 레이아웃 적용 실습
- 배포 주소
  - ㅇㅇ
- 시연 영상
  - ㅇㅇ
- 프로젝트 타임라인

- UI 구성도
  <img width="1927" height="1031" alt="image" src="https://github.com/user-attachments/assets/d441b8c3-050e-4285-9505-c4ff4d922776" />


## 사용 기술
- HTML5: 시멘틱 태그를 활용한 구조적 마크업
- CSS: grid, margin, padding과 같은 구조적 디자인과 웹 브라우저 크기에 따른 반응형 디자인 설계 
- JavaScrit: DOM 조작, click 이벤트 처리 구현

## 주요 기능
| 기능 | 설명 |
| --- | --- |
| 홈 화면 | 로고, 사용자 설정, 사이드바 메뉴, hover 기능 구현 / 영상썸네일, 제목, 채널명, 조회수 표시 |
| 영상 상세 | videoId 쿼리로 이동, iframe 임베딩, 좋아효&싫어요 버튼, 댓글 작성 기능 구현 |
| 반응형 메뉴 | 메뉴 토글 및 아이콘 반응 구현 |

## 폴더 구조 예시
/youtube-clone
├── main_page.html
├── subscribe_page.html
├── video_page.html
├── css/
│ └── style.css
├── js/
│ └── function.js
└── icon/
└── thumbnails/

## 문제 상황 및 해결 방법
- Bootstrap 사용 문제
  - 문제 상황: Bootstrap으로 구현한 부분들 중 상세히 수정하려는 의도가 반영되지 않음
  - 원인 분석: Bootstrap 사용법을 온전히 알지 못함
  - 해결 방법: Bootstrap으로 구현한 프로젝트를 삭제하고, 직접 html, css로 구현 
- 이미지 요소와 글자 요소가 같이 있을 때의 배치 문제
  - 문제 상황: 아이콘과 명칭이 같이 있는 버튼, 썸네일과 영상 제목/설명 배치에 어려움을 겪음
  - 원인 분석: html 요소 배치에 대한 커맨드를 알지 못함
  - 해결 방법: display, flex-direction, align-items, justify-content와 같은 요소 학습 및 적용
- 반응형 디자인 설계 문제
  - 문제 상황: 반응형 디자인 적용 시 기존 레이아웃 구조가 일그러지는 문제 발생
  - 원인 분석: @media 반응형 관련 코드 정보(매개변수 값, 구조)에 비정상적인 값 대입
  - 해결 방법: 직접 값을 넣어가며 바뀌는 결과물을 보며 수정
