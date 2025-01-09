import React from "react";

const HomeVideo = () => {
  return (
    <div className="homeVideo">

      <iframe
        // height={}
        src="https://www.youtube.com/embed/wcwCaRci-Jc?version=3&vq=hd1080&autoplay=1&mute=1&loop=1&playlist=wcwCaRci-Jc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowfullscreen
      ></iframe>
      {/* &autoplay=1&mute=1&loop=1 */}
    </div>
  );
};

export default HomeVideo;
