import styles from "./Header.module.scss";
import headerImage from "../../assets/header.png";
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
      {showImages && (
        <div className={styles.headerImage}>
          <img
            className={styles.headerImageLeft}
            src="/drinking-p.png"
            alt="Frau trinkt aufgeschlitztes Dosenbier"
          />
          <img
            className={styles.headerImageRight}
            src="/drinking-n.png"
            alt="Mann in Kutte hält Dosenbier"
          />
        </div>
      )}
      {headerText && <h1>{headerText}</h1>}
    </div>
  );
};

export default Header;
