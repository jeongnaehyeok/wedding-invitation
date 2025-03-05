// NOTICE: 데이터 형식을 지켜주세요.

export const KAKAO_MAP_API_KEY =
  process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY || "";

export const GROOM = {
  name: "홍길동",
  account: {
    number: "123-456-7890",
    bank: "국민은행",
  },
  phone: "010-1234-5678",
};
export const BRIDE = {
  name: "홍길순",
  account: {
    number: "123-456-7890",
    bank: "국민은행",
  },
  phone: "010-1234-5678",
};

export const WEDDING_DATE = "2025-02-28";
export const WEDDING_TIME = "14:50";

export const WEDDING_LOCATION = "서울신라호텔";
export const WEDDING_LOCATION_DETAIL = "대연회장 마이너스티";
export const WEDDING_COORDINATE = {
  latitude: 37.5566875,
  longitude: 127.0060625,
};
export const MAP_URL = {
  naver: "https://naver.me/xSFaF13y",
  kakao: "https://kko.kakao.com/NmUhTiF6y9",
  tmap: "https://tmap.life/6b495c73",
};
export const DIRECTION_LIST = [
  {
    way: "자가용",
    detail: [
      "[분당방면] 한남대교-장충단길-서울신라호텔/신라면세점",
      "[강남방면] 동호대교-장충체육관 앞 사거리에서 좌회전-서울신라호텔/신라면세점",
      "[용산방면] 남산 2호터널 통과 후 좌회전-서울신라호텔/신라면세점",
    ],
  },
  {
    way: "버스",
    detail: ["장충체육관 앞 하차(노선번호:144, 301, 7212)"],
  },
  {
    way: "지하철",
    detail: ["지하철 3호선 동대입구역 5번출구"],
  },
];
