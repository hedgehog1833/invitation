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
        <div className={styles.paragraphWrapper}>
          <h1>Die Trauzeugen</h1>
          <div className={styles.imageWrapper}>
            <img
              className={styles.pic}
              src={agImage}
              alt="Hübscher Mann mit schulterlangem dunklen Haar"
            />
            <p>Alex Gerardomont</p>
            <p>Nils' Trauzeuge</p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.pic}
              src={tkImage}
              alt="Hübscher Mann mit Glatze und Vollbart"
            />
            <p>Tobebe Klêtre</p>
            <p>Paulas Trauzeuge</p>
          </div>
        </div>
        <div className={styles.paragraphWrapper}>
          <h1>Das Paar</h1>
          <img
            className={styles.pic}
            src={pnImage}
            alt="Ein sexy junges Paar an einem Stehtisch"
          />
        </div>
        <h1>The Masterminds</h1>
        <div className={styles.imageWrapper}>
          <img
            className={styles.pic}
            src={gAndMImage}
            alt="Zwei süße Katzen nebeneinander auf einem Stuhl"
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.pic}
            src={gPoseImage}
            alt="Süße rote Katze die sich putzt"
          />
          <p>Gaumbert</p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.pic}
            src={longMImage}
            alt="Süße braune Katze auf einem Schoß"
          />
          <p>Matzala</p>
        </div>
      </div>
    </ContentLayout>
  );
};

export default AboutUs;
