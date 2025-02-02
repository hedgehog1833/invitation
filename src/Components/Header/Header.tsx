import styles from "./Header.module.scss";
import headerImage from "../../assets/header.png";
import drinkingP from "../../assets/drinking-p.png";
import drinkingN from "../../assets/drinking-n.png";

interface HeaderProps {
  showImages?: boolean;
  headerText?: string;
}

const Header = ({ showImages, headerText }: HeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <img
          className={styles.headerLogo}
          src={headerImage}
          alt="Wir heiraten"
        />
      </div>
      <div className={styles.imageAndTextContainer}>
        {showImages && (
          <div className={styles.headerImage}>
            <img
              className={styles.headerImageLeft}
              src={drinkingP}
              alt="Frau trinkt aufgeschlitztes Dosenbier"
            />
            <img
              className={styles.headerImageRight}
              src={drinkingN}
              alt="Mann in Kutte hält Dosenbier"
            />
          </div>
        )}
        {headerText && <h1>{headerText}</h1>}
      </div>
    </div>
  );
};

export default Header;
