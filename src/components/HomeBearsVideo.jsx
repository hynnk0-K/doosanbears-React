import React from "react";
import Swiper from "swiper";
import "swiper/css";

const HomeBearsVideo = () => {
  window.addEventListener("load", onLoadEvent);

  let tag = document.createElement("script");
  tag.src = "https://youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = {};

  function makeYoutube(id, link) {
    player[id] = new YT.player(id, {
      height: "315",
      width: "560",
      playerVars: { autoplay: 1, controls: 0 },
      videoId: link,
      events: {
        onReady: onPlayerReady,
      },
    });
    function onPlayerReady(event){
        event.target.playVideo();
    }
  }

  function youtubeOnClick(){
    [].forEach.call(document.querySelectorAll('.youtube'), function(el, index){
        el.addEventListener('click', function(){
            let thisYoutubeLink = this.getAttribute('data-youtubeLink');
            this.id = makeRandomId();
            makeYoutube(this.id, thisYoutubeLink)
        })
    })
  }

  function onLoadEvent(){
    youtubeOnClick();
    mySwiper.on('slideChangeTransitionEnd', youtubeAllStop)
  }

  function youtubeAllStop(){
    for(let youtube in player){
        player[youtube].pauseVideo();
    }
  }

  let makeRandomId = function(){
    let text = '';
    let possible  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-';
    
    for(let i = 0; i < 11; i++){
        test += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    
    return text;
  }

  return (
    <div className="swiper_container">
      <div className="swiper_wrapper">
        <div className="swiper-slide">
          <div className="video-container">
            <div className="youtube" data-id="pvBm2rS86mU"></div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="video-container">
            <div className="youtube" data-id="_s7XCWN6bBg"></div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="video-container">
            <div className="youtube" data-id="K4_NczZmAWI"></div>
          </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default HomeBearsVideo;
