import { PropsWithChildren } from "react";
import Header from "../Components/Header";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps extends PropsWithChildren {
  showImages?: boolean;
}
const MainLayout = ({ showImages, children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header showImages={showImages} />
      {children}
    </div>
  );
};

export default MainLayout;
