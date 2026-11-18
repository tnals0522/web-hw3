const movies = [
    {
        title: "#진상을 말씀드립니다", year: 2025, date: "2025-04-25", rating: 6.1,
        audience: 0, poster: "https://image.tmdb.org/t/p/w342/hY4TTJ4yPCTThV6WkfmVNfLtoPT.jpg", type: "mine", rank: null,  overview:"경비원 \'키리야마\'는 야간 근무 중 경비실에서 인기 라이브 스트리밍 방송 \'#진상을 말씀드립니다\'를 시청한다."
    },

    {
        title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도", year: 2022, date: "2022-07-29", rating: 7.6,
        audience: 0, poster: "https://image.tmdb.org/t/p/w342/5NJmR3IA7Rk3inlA4AeQy5ZC5cA.jpg", type: "mine", rank: null,  overview:"카미야 토루에 대해 잊지 말 것\” 자고 일어나면 전날의 기억을 잃는 \‘선행성 기억상실증\’에 걸린 소녀 \‘마오리\’ \“내일의 마오리도 내가 즐겁게 해줄 거야\”"
    },

    {
        title: "옵세션", year: 2026, date: "2026-05-13", rating: 8.1,
        audience: 0, poster: "https://image.tmdb.org/t/p/w342/df4rpubfWy0g7HCzBNtPLLKnoMH.jpg", type: "mine", rank: null,  overview:"니키\’를 짝사랑하던 \‘베어\’는 골동품 상점에서 구입한 \‘원 위시 윌로우\’에 \‘니키\’가 자신을 가장 사랑하게 해달라고 소원을 빈다."
    },

    {
        title: "범죄도시 2", year: 2022, date: "2022-05-18", rating: 7.3,
        audience: 0, poster: "https://image.tmdb.org/t/p/w342/9XkAF2pl2uliiuAORaWTgPmr6zG.jpg", type: "mine", rank: null,  overview:"가리봉동 소탕작전으로부터 4년이 지난 2008년, 금천경찰서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다." 
    },

    {
        title: "오디세이", year: 2026, date: "2026-07-15", rating: 8.0,
        audience: 0, poster: "https://image.tmdb.org/t/p/w342/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg", type: "mine", rank: null,  overview:"10년간 이어진 트로이 전쟁을 승리로 이끈 영웅 \'오디세우스\'는 왕의 부재를 틈타 침탈과 권력 다툼이 벌어진 왕국에서 그를 기다리고 있는 아내 \'페넬로페\'와 아들 \'텔레마코스\'에게 돌아가기 위한 여정에 나선다."
    },


    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.4,
        audience: 2248126, poster: "https://image.tmdb.org/t/p/w342/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1,  overview:"어느 날, 광장에서 쉬고 있던 치이카와와 가르마 앞에 얼굴에 전단지를 붙인 토끼가 나타난다."
    },

    {
        title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
        audience: 3374510, poster: "https://image.tmdb.org/t/p/w342/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2,  overview:"1974년 8월 15일, 제29회 광복절 경축식. 전 국민이 지켜보는 생중계 현장에서 영부인이 저격당하는 초유의 사태가 발생한다."
    },

    {
        title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
        audience: 104874, poster: "https://image.tmdb.org/t/p/w342/wkm9BQLok7U2KihcCspCa663Qse.jpg", type: "boxoffice", rank: 3,  overview:"9년 전 캠핑스쿨 버스 실종 사건으로 아들을 잃은 류소영은 \'낙원의 아이들\'이라는 AI 프로그램을 통해 어린 시절의 아들과 만나며 하루하루를 버텨낸다."
    },

    {
        title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.0,
        audience: 1999477, poster: "https://image.tmdb.org/t/p/w342/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 4,  overview:"타고난 끗발로 사람의 마음을 사로잡는 장태영과 천부적인 머리와 노력으로 스스로를 증명하는 박태영. 학창 시절부터 절친한 친구인 두 사람은 온라인 카지노 사업에 뛰어들며 승승장구하고, 사업의 성공이 커질수록 럭키한 장태만 주목받자, 박태의 질투는 조용히 자라난다."
    },

    {
        title: "클레이페이스", year: 2026, date: "2026-10-21", rating: 7.6,
        audience: 77153, poster: "https://image.tmdb.org/t/p/w342/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5, overview:"할리우드의 주연 배우로 유명 영화제 수상을 눈 앞에 두며 꿈을 이루기 직전인 ‘맷 헤이건’. 그러나 한 순간의 실수로 범죄 조직의 타겟이 되어 얼굴이 처참하게 훼손되며 그의 빛나던 인생은 하루 아침에 비극으로 뒤바뀐다."
    },


];