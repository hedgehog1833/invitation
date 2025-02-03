import ContentLayout from "../ContentLayout";
import styles from "./AboutUs.module.scss";
import gAndMImage from "../../assets/g-m.jpg";
import gPoseImage from "../../assets/g-pose.jpg";
import longMImage from "../../assets/long-m.jpg";
import agImage from "../../assets/a-g.jpg";
import tkImage from "../../assets/t-k.jpg";
import pnImage from "../../assets/p-n.jpg";

const AboutUs = () => {
  return (
    <ContentLayout edgesTop backgroundColor="rgb(136, 202, 226)">
      <div className={styles.rowWrapper}>
        <div className={styles.picRow}>
          <img
            className={styles.catPics}
            src={agImage}
            alt="Hübscher Mann mit schulterlangem dunklen Haar"
          />
          <img
            className={styles.catPics}
            src={pnImage}
            alt="Ein sexy junges Paar an einem Stehtisch"
          />
          <img
            className={styles.catPics}
            src={tkImage}
            alt="Hübscher Mann mit Glatze und Vollbart"
          />
        </div>
        <div className={styles.picRow}>
          <img
            className={styles.catPics}
            src={gAndMImage}
            alt="Zwei süße Katzen nebeneinander auf einem Stuhl"
          />
          <img
            className={styles.catPics}
            src={gPoseImage}
            alt="Süße rote Katze die sich putzt"
          />
          <img
            className={styles.catPics}
            src={longMImage}
            alt="Süße braune Katze auf einem Schoß"
          />
        </div>
      </div>
    </ContentLayout>
  );
};

export default AboutUs;
