import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const HomeGallery = () => {
  return (
    <div className="contents">
        <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{}}
        className="mySwiper"
      >
        <SwiperSlide className="gallery gallery1">
            <div className="img">
                <img src={process.env.PUBLIC_URL + "./images/gallery01.webp"} alt="[구단행사] 2024시즌 홈경기 최종전 선수단 감사 인사 및 응원가 레이저쇼 스케치 HL" />
            </div>
            <div className="text">
                <p class="tit"> [구단행사] 2024시즌 홈경기 최종전 선수단 감사 인사 및 응원가 레이저쇼 스케치 HL</p>
                <p class="txt">
                    <span>2024-09-25</span>
                    <span>조회수 1723</span>
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="gallery gallery2">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "./images/gallery02.webp"} alt="[경기사진] 240924 잠실 vs NC다이노스 HL" />
                </div>
                <div className="text">
                    <p class="tit">
                      [경기사진] 240924 잠실 vs NC다이노스 HL
                    </p>
                    <p class="txt">
                      <span>2024-09-25</span>
                      <span>조회수 411</span>
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide className="gallery gallery3">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "./images/gallery03.webp"} alt="[경기사진] 240923 잠실 vs SSG랜더스 HL" />
                </div>
                <div className="text">
                    <p class="page_tit__CyPpc tit">
                      [경기사진] 240923 잠실 vs SSG랜더스 HL
                    </p>
                    <p class="page_txt__4_4e0 txt">
                      <span>2024-09-24</span>
                      <span>조회수 250</span>
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide className="gallery gallery4">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "./images/gallery04.webp"} alt="[경기사진] 240821 포항 vs 삼성라이온즈 HL" />
                </div>
                <div className="text">
                    <p class="page_tit__CyPpc tit">
                      [경기사진] 240821 포항 vs 삼성라이온즈 HL
                    </p>
                    <p class="page_txt__4_4e0 txt">
                      <span>2024-09-22</span>
                      <span>조회수 187</span>
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide className="gallery gallery5">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "./images/gallery05.webp"} alt="[경기사진] 240921 잠실 vs LG트윈스 DH1차전 HL" />
                </div>
                <div className="text">
                    <p class="page_tit__CyPpc tit">
                      [경기사진] 240921 잠실 vs LG트윈스 DH1차전 HL
                    </p>
                    <p class="page_txt__4_4e0 txt">
                      <span>2024-09-22</span>
                      <span>조회수 202</span>
                    </p>
                </div>
        </SwiperSlide>
        <SwiperSlide className="gallery gallery6">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "./images/gallery06.webp"} alt="[경기사진] 240919 잠실 vs KIA타이거즈 HL" />
                </div>
                <div className="text">
                    <p class="page_tit__CyPpc tit">
                      [경기사진] 240919 잠실 vs KIA타이거즈 HL
                    </p>
                    <p class="page_txt__4_4e0 txt">
                      <span>2024-09-20</span>
                      <span>조회수 280</span>
                    </p>
                </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeGallery;
