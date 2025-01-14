import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import YouTube from "react-youtube";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videoIds = ["le_8PKRBaT0", "1fHwM49NXQ8", "UOaf0ir9ojc", "Z8-byDLKxyY"];
// const modalVideoIds = [
//   "XkJqWiTSafY", "NYMrEyl2S-A", "gWU93qOx5jg", "pR2oQve6p7U",
//   "HlEdu7Ah3no", "ufNdSTGMh7U", "-_3GlCYq9pI", "mTj1DRw_HHE"
// ];


const HomeBearsVideo = () => {
  // const [swiperRef, setSwiperRef] = useState(null);
  // const [isModalOpen, setModalOpen] = useState(Array(modalVideoIds.length).fill(false));

  const onSlideChange = (swiper) => {
    // 모든 플레이어를 순회하며 일시정지
    document.querySelectorAll("iframe").forEach((iframe) => {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  };

  // const openModal = (index) => {
  //   setModalOpen((prev) => prev.map((open, i) => (i === index ? true : open)));
  // };

  // const closeModal = (index) => {
  //   setModalOpen((prev) => prev.map((open, i) => (i === index ? false : open)));
  // };

  return (
    <>
      <div className="swiper_container">
        <Swiper
          // onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={1}
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
      {/* <div id="video_list" className="layout_fix">
        <ul className="video_list">
        {modalVideoIds.map((videoId, index) => (
          <li key={videoId}>
            <ModalVideo 
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isModalOpen[index]}
              videoId={videoId}
              onClose={() => closeModal(index)}
            />
            <button className="btn-primary" onClick={() => openModal(index)}>
                VIEW DEMO
              </button>
              <img
                src={`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`}
                alt={`Video thumbnail for ${videoId}`}
              />
          </li>
        )
      )}
        </ul>
      </div> */}
    </>
  );
};

export default HomeBearsVideo;
