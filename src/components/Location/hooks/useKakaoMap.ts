import { KAKAO_MAP_API_KEY, WEDDING_COORDINATE } from "@/constants";
import { useEffect, useRef } from "react";

const useKakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(
            WEDDING_COORDINATE.latitude,
            WEDDING_COORDINATE.longitude
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          WEDDING_COORDINATE.latitude,
          WEDDING_COORDINATE.longitude
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return { mapRef };
};

export default useKakaoMap;
