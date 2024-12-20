import React from 'react';
import { Link } from 'react-router-dom';

const HomeVideo = () => {
    return (
        <div className='homeContainer'>
            <div className="homeVideo layout_fix">

            </div>
            <div className="homeSns">
                <Link className='facebook' to="https://www.facebook.com/1982doosanbears"></Link>
                <Link to="https://x.com/doosanbears1982?mx=2"></Link>
                <Link to="https://www.instagram.com/doosanbears.1982/#"></Link>
                <Link to="https://www.youtube.com/channel/UCsebzRfMhwYfjeBIxNX1brg"></Link>
            </div>
        </div>
    );
};

export default HomeVideo;