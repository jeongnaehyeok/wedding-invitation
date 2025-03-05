"use client";

import { DIRECTION_LIST, MAP_URL } from "@/constants";
import NaverIcon from "./icons/NaverIcon";
import KakaoIcon from "./icons/KakaoIcon";
import TMapIcon from "./icons/TMapIcon";

import useKakaoMap from "./hooks/useKakaoMap";

const Location = () => {
  const { mapRef } = useKakaoMap();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl text-main font-bold">오시는 길</h1>
        <div className="flex flex-col w-full">
          <div id="map" ref={mapRef} className="h-96 w-full" />
          <div className="flex bg-gray-100 items-center">
            <a
              href={MAP_URL.naver}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 text-sm h-11 w-full text-gray-600"
            >
              <NaverIcon /> 네이버지도
            </a>
            <div className="w-0.5 h-4 bg-gray-600" />
            <a
              href={MAP_URL.kakao}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 text-sm h-11 w-full text-gray-600"
            >
              <KakaoIcon /> 카카오맵
            </a>
            <div className="w-0.5 h-4 bg-gray-600" />
            <a
              href={MAP_URL.tmap}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-sm h-11 w-full text-gray-600"
            >
              <TMapIcon /> 티맵
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full px-6">
          {DIRECTION_LIST.map((direction, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-lg text-gray-500 font-light">
                {direction.way}
              </p>
              <ul className="flex flex-col">
                {direction.detail.map((detail, index) => (
                  <li
                    key={index}
                    className="text-base text-gray-500 break-words"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Location;
