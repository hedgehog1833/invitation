import { PropsWithChildren } from "react";
import Header from "../Components/Header";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps extends PropsWithChildren {
  showImages?: boolean;
  headerText?: string;
}
const MainLayout = ({ showImages, headerText, children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header showImages={showImages} headerText={headerText} />
      <div className={styles.childrenLayout}>{children}</div>
    </div>
  );
};

export default MainLayout;
