import React, { useEffect, useState } from 'react';
import Header from "../components/universal/Header.js";
import Footer from "../components/universal/Footer.js";
import Question from "../components/universal/Question.js";
import Menu from "../components/universal/LeftMenu.js"
import styles from "../styles/MainPage.module.css";
import axios from 'axios';

function BigNews() {
  const [bannerInfo, setBannerInfo] = useState(null);

  function getBanner() {
    axios('http://localhost:8000/news/banner/', { withCredentials: true })
    .then((response) => { 
        setBannerInfo(response.data)
    })
  }
  useEffect(() => {getBanner()}, [])

  if (bannerInfo != null) {
    return (
        <div className={styles.bannerSection}>
          <div className={styles.bigNewsSection}>
            <span className={styles.titleSection}>
              <img src={"http://localhost:8000" + bannerInfo.titleIcon} alt="" style={{width: 34 +"px", height: 44 +"px"}}/>
              <a className={styles.newsTitleBanner} href="http://localhost:3000/news">{bannerInfo.title}<br/><span style={{color: '#F46628'}}>{bannerInfo.special}</span></a>
            </span>
            <span className={styles.top}>
              <img src={"http://localhost:8000" + bannerInfo.subtitleIcon} alt="" style={{width: 25 +"px", height: 25 +"px"}}/>
              <p>{bannerInfo.subtitle}</p>
            </span>
          </div>
        </div>
    )
  }
  else return null;
}
function DSService() {
  return (
    <div className={styles.DSService}>
      <div className={styles.sectionTitle}><span style={{color: '#F46628'}}>DS </span>SERVICE</div>
      <div className={styles.buyersInfo}>
        <span className={styles.buyers}>
        <span  class="tooltip">
          <span style={{display: "flex"}} className={styles.buyersTitle}>
            Shorten delivery dates
            <img src="icons/time.svg" alt="" style={{marginLeft: 10+"px"}}/>
          </span>
          <span class="promt">
            <p>You may request express delivery in case of emergency or if parts are required urgently. <a href="http://localhost:3000/buyers">Learn more</a></p>
          </span>
        </span>
          <p className={styles.buyersText}>Express delivery of the nozzles<br/>and accessory equipment.</p>
        </span>
        <span className={styles.buyers}>
        <span  class="tooltip">
          <span style={{display: "flex"}} className={styles.buyersTitle}>
            We make your work easier
            <img src="icons/check.svg" alt="" style={{marginLeft: 10+"px"}}/>
          </span>
          <span class="promt">
            <p>The enterprise offers you an express diagnostics of parts on DS equipment with up to 50% discount in case of DS nozzles’ malfunction. <a href="http://localhost:3000/buyers">Learn more</a></p>
          </span>
        </span>
          <p className={styles.buyersText}>Express diagnostics of<br/>nozzles</p>
        </span>
      </div>
    </div>
  )
}
function SmallNews(props) {
  return (
      <span className={styles.smallNews}>
        <p className={styles.newsTitle}>{props.title}<span style ={{color: '#F46628'}}>{props.special}</span></p>
        <span  class="tooltip">
          <img src="icons/help.svg" alt="" />
          <span class="promt">
            {props.promt}
            {props.link != null ? <a href={props.link}>Learn more</a> : null}
          </span>
        </span>
      </span>
  )
}

function MainPage() {
  return (
    <>
      <Header/>
      <Question/>
      <div className="contentSection">
        <div className="content">
          <Menu page='main'/>
          <div className={styles.banner}>
            <BigNews/>
            <DSService/>
            <div className={styles.smallNewsSection}>
              <SmallNews
                title="REPLACEMENT TO USED AND DEFECRIVE DS EURO 2 NOZZLES FOR NEW ONES "
                special="WITH UP TO 30% DISCOUNT"
                promt="We offer you to replace your defective DS Euro 2 Nozzles for new ones at a substantial discount. "
                link = "http://localhost:3000/news"
              />
              <SmallNews
                title="QUALITY CONTROL OF "
                special="DS PRODUCTS"
                promt = "You can check the authenticity of DS Products on the website of official representatives in the section “DS Authentication / DS Quality Control”. "
                link="http://localhost:3000/buyers#quelityControl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MainPage;