export default class TravelDestination {
  id: number = -1;
  travelTitle: string = "";
  city: string[] = [];
  startDate: string = "";
  endDate: string = "";
  dayList: Day[] = [];
}

export class Day {
  id: number = -1;
  date: string = "";
  placeList: PlaceInfo[] = [];
}

export class PlaceInfo {
  id: number = -1;
  courseNum: number = -1;
  name: string = "";
  address: string = "";
  memo: string = "";
  imageList: string[] = [];
  bookmark: boolean = false;
}

export const TravelList: TravelDestination[] = [
  {id: 2, travelTitle: "강원도 여행", city: ["속초", "강릉"], startDate: "2024-10-10", endDate: "2024-10-12",
    dayList: [
      {id: 1, date: "2024-10-10", placeList: [
        {id: 1, courseNum: 1, name: "왕박골식당", address: "강원 속초시 중앙로 431-1", memo: "장칼국수, 꿩만두가 유명해서 시켰는데 맛있었음", imageList: [], bookmark: false},
        {id: 2, courseNum: 2, name: "영랑호", address: "강원 속초시 장사동", memo: "", imageList: ["/images/test-img.png", "/images/test-img.png", "/images/test-img.png", "/images/test-img.png", "/images/test-img.png", "/images/test-img.png"], bookmark: false},
        {id: 3, courseNum: 3, name: "별빛상점", address: "강원 속초시 미시령로 3395", memo: "", imageList: ["/images/test-img.png", "/images/test-img.png", "/images/test-img.png", "/images/test-img.png"], bookmark: false},
        {id: 4, courseNum: 4, name: "코코넛그루브", address: "강원 속초시 동해대로3930번길 58-2", memo: "커피도 맛있지만 스콘, 휘낭시에에 진심인곳! 라떼 고소해서 너무 맛있었음", imageList: [], bookmark: false},
        {id: 5, courseNum: 5, name: "속초항아리물회", address: "강원 속초시 해오름로188번길 11", memo: "물회 맛있고 해산물 가득 들어있어서 물회국물이랑 섞어서 먹어야 되는데 해물산물이 넘칠 정도라 잘 비비지도 못하고 해산물을 그냥 먼저 먹을 정도로 많이 푸짐했어요. 물회국물은 달콤새콤하면서 감칠맛이 있어서 해삼 전복 같은 해산물의 고소한 맛이 더 살아났고 바다의 향에 가득 신선한 재료들 덕분에 속초 왔다는 게 더 실감나고 맛있게 식사할 수 있어서 기분이 좋았어요!", imageList: [], bookmark: false},
        {id: 6, courseNum: 6, name: "롯데리조트속초", address: "강원 속초시 대포항길 186", memo: "뒤로는 설악산 앞으로는 동해바다가 보이는 찐뷰맛집 리조트입니다. 특히 가족단위로 여행오기 좋은 속초 숙소로 부대시설도 알차게 있어 리조트 안에서 모든걸 다 해결할 수 있어 좋았습니다. 호텔형 스위트룸에서 묵었는데 1박만 머무른게 정말 아쉬울정도로 좋았어요. 또 방문하고 싶은 속초 숙소입니다", imageList: [], bookmark: false},
      ]},
      {id: 2, date: "2024-10-11", placeList: [
        {id: 1, courseNum: 1, name: "식당", address: "강원 속초시 중앙로 431-1", memo: "", imageList: [], bookmark: false},
        {id: 2, courseNum: 2, name: "식당", address: "강원 속초시 중앙로 431-1", memo: "", imageList: [], bookmark: false},
      ]},
      {id: 3, date: "2024-10-12", placeList: []},
    ]
  },
  {id: 1, travelTitle: "부산 여행", city: ["부산"], startDate: "2024-08-02", endDate: "2024-08-05",
    dayList: []
  },
]