import React from 'react';
import '../scss/Footer.scss';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="top">
                <div class="inner layout_fix">
                    <div class="link_wrap">
                        <ul>
                            <li><a href="/about/provision">이용약관</a></li>
                            <li><a href="/about/personal">개인정보 처리방침</a></li>
                            <li><a href="/about/emailDeny">이메일주소 무단 수집거부</a></li>
                            <li><a href="/about/ethics">정도경영 사이버 신문고</a></li>
                            <li><a href="/about/mediaMenual">영상정보처리기기 운영/관리 방침</a></li>
                        </ul>
                    </div>
                    <div class="btn_wrap">
                        <button type="button" class="btn_bg round"><img src={process.env.PUBLIC_URL + "./images/facebook_logo.png"} alt="facebookLogo"/><span class="hide">페이스북</span></button>
                        <button type="button" class="btn_bg round"><img src={process.env.PUBLIC_URL + "./images/x_logo.png"} alt="xLogo" /><span class="hide">트위터</span></button>
                        <button type="button" class="btn_bg round"><img src={process.env.PUBLIC_URL + "./images/instagram_logo.png"} alt="instaLogo"/><span class="hide">인스타그램</span></button>
                        <button type="button" class="btn_bg round"><img src={process.env.PUBLIC_URL + "./images/youtube_logo.png"} alt="youtubeLogo" /><span class="hide">유튜브</span></button>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="inner layout_fix">
                    <div class="left">
                        <div class="info_wrap">
                            <a href="tel:0222401777" className="tel">02.2240.1777</a>
                            <p><span>대표이사 : 고영섭</span><span>서울특별시 송파구 올림픽로 25 잠실야구장내 두산베어스</span></p>
                            <p><span>사업자등록번호 : 107-81-13241</span><span style={{marginLeft: "4px"}}>통신판매허가번호 : 서울시 송파구청 제 1775호</span></p>
                        </div>
                        <p class="copyright">Copyrightⓒ 2019 Doosan Bears Inc. All Rights Reserved</p>
                    </div>
                    <div class="right">
                        <img alt="nice 고객지키미 개인정보보호 배상책임보험 기업" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{color:"transparent"}} 
                        srcset={process.env.PUBLIC_URL + "./images/image.webp"} type="image/webp" src={process.env.PUBLIC_URL + "./images/image.webp"}/>
                        <img alt="두산" loading="lazy" width="160" height="21" decoding="async" data-nimg="1" className="logo_doosan" 
                        style={{color:"transparent"}} src={process.env.PUBLIC_URL + "./images/logo_dosan_gray.svg"}/>
                        <p>DOOSAN BEARS is operated by<br/>DOOSAN BEARS Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;