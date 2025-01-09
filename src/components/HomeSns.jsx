import React from "react";
import { Link } from "react-router-dom";

const HomeSns = () => {
  return (
    <div className="homeSns">
      <ul className="snsList">
        <li>
          <img src={process.env.PUBLIC_URL + "./images/facebook_logo.png"} alt="facebookLogo"/>
          <Link className="facebook" to="https://www.facebook.com/1982doosanbears"></Link>
        </li>
        <li>
            <img src={process.env.PUBLIC_URL + "./images/x_logo.png"} alt="xLogo" />
            <Link className="x" to="https://x.com/doosanbears1982?mx=2"></Link>
        </li>
        <li>
            <img src={process.env.PUBLIC_URL + "./images/instagram_logo.png"} alt="instaLogo"/>
            <Link className="insta" to="https://www.instagram.com/doosanbears.1982/#"></Link>
        </li>
        <li>
            <img src={process.env.PUBLIC_URL + "./images/youtube_logo.png"} alt="youtubeLogo" />
            <Link className="youtube" to="https://www.youtube.com/channel/UCsebzRfMhwYfjeBIxNX1brg" ></Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeSns;
