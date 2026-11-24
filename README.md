# 실습과제 #3 : 살아 움직이는 영화 보드
- 이름 / 학번 : 김수민 / 2651011
- 사이트 주소 : https://tnals0522.github.io/web-hw3/
- 사용한 API 1 : TMDB (
https://image.tmdb.org/t/p/w342/hY4TTJ4yPCTThV6WkfmVNfLtoPT.jpg #진상을 말씀드립니다 / 2025-04-25 / 6.1,
https://image.tmdb.org/t/p/w342/5NJmR3IA7Rk3inlA4AeQy5ZC5cA.jpg 오늘 밤, 세계에서 이 사랑이 사라진다 해도 / 
2022-07-29 / 7.6
https://image.tmdb.org/t/p/w342/df4rpubfWy0g7HCzBNtPLLKnoMH.jpg 옵세션 / 2026-05-13 / 8.1
https://image.tmdb.org/t/p/w342/9XkAF2pl2uliiuAORaWTgPmr6zG.jpg 범죄도시 2 / 2022-05-18 / 7.3
https://image.tmdb.org/t/p/w342/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg 오디세이 / 2026-07-15 / 8.0
https://image.tmdb.org/t/p/w342/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg 극장판 치이카와: 인어 섬의 비밀 /2026-09-30 / 7.4
https://image.tmdb.org/t/p/w342/c55ijsOdntj6P25vDwHLdgsBpmV.jpg 암살자(들) / 2026-09-23 / 7.2
https://image.tmdb.org/t/p/w342/wkm9BQLok7U2KihcCspCa663Qse.jpg 실낙원 / 2026-10-21 / 8.0 
https://image.tmdb.org/t/p/w342/ueigb5zra1tj6FTK9yhh2P33P9B.jpg 타짜: 벨제붑의 노래 / 2026-09-23 / 7.0
https://image.tmdb.org/t/p/w342/LSGpoSAlitss0KOvVakkeUToZo.jpg 클레이페이스/2026-10-21 / 7.6),
KOBIS(일별 박스오피스, 기준일 2026-10-25)
## 구현 항목 체크(기능 체크표)
| 요구사항 | 상태 | 한 줄 메모 |
|---|---|---|
| 1 렌더링 |구현함| |
| 2 검색 |구현함| |
| 3 정렬 3종 |구현함| |
| 4 보기 필터와 getView |구현함| |
| 5 찜과 저장 |구현함| |
| 6 빈 결과 |구현함| |
| 7 상세 대화상자 |구현함| |
| 8 인라인 이벤트 속성 없음, 콘솔 오류 0 |구현함| |
| 보너스(했다면 이름) |못 함| |
## 어려웠던 점 3가지와 해결
영상을 보면서 만들어서 어려운건 없었어요.
## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
12주차떄 올라온 영상
## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 :화면에 영화가 안나와서 이유를 물어봄
- 답변 요약 :liked 변수가 선언되기 전에 renderCards가 먼저 실행되면서 ReferenceError가 발생해 코드가 멈추기 때문
- 채택 여부 :위치를 바꾸면 되는 것을 채택하여 영상을 보며 위치를 찾아보며 바꿈