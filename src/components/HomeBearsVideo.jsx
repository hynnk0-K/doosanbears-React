import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import YouTube from "react-youtube";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videoIds = ["pvBm2rS86mU", "_s7XCWN6bBg", "K4_NczZmAWI", "2VSnLWb47yM"];

const HomeBearsVideo = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const onSlideChange = (swiper) => {
    // 모든 플레이어를 순회하며 일시정지
    document.querySelectorAll("iframe").forEach((iframe) => {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  };

  return (
    <>
    <div className="swiper_container">
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={2}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        onSlideChange={onSlideChange}
      >
        {videoIds.map((videoId) => (
          <SwiperSlide key={videoId}>
            <YouTube
              videoId={videoId}
              opts={{ width: "516px", height: "350px" }}
              showinfo={0}
              controls={0}
              autohide={1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default HomeBearsVideo;



{/* <div id="video_list" className="layout_fix">
<ul className="video_list">
  <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi/XkJqWiTSafY/sddefault.jpg" alt="" />
  </li>
  <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi/NYMrEyl2S-A/sddefault.jpg" alt="" />
  </li>
  <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi_webp/gWU93qOx5jg/sddefault.webp" alt="" />
  </li>
   <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi_webp/pR2oQve6p7U/sddefault.webp" alt="" />
   </li>
   <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi_webp/HlEdu7Ah3no/sddefault.webp" alt="" />
   </li>
  <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi_webp/ufNdSTGMh7U/sddefault.webp" alt="" />
  </li>
   <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi_webp/-_3GlCYq9pI/sddefault.webp" alt="" />
   </li>
   <li>
    <Link></Link>
    <img src="https://i.ytimg.com/vi/mTj1DRw_HHE/sddefault.jpg" alt="" />
   </li>
</ul>
</div> */}
