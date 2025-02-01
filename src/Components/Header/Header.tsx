import styles from "./Header.module.scss";
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
          src="src/Components/Header/assets/header.png"
          alt="Wir heiraten"
        />
      </div>
      {showImages && (
        <div className={styles.headerImage}>
          <img
            className={styles.headerImageLeft}
            src="src/Components/Header/assets/drinking-p.png"
            alt="Frau trinkt aufgeschlitztes Dosenbier"
          />
          <img
            className={styles.headerImageRight}
            src="src/Components/Header/assets/drinking-n.png"
            alt="Mann in Kutte hält Dosenbier"
          />
        </div>
      )}
      {headerText && <h1>{headerText}</h1>}
    </div>
  );
};

export default Header;
