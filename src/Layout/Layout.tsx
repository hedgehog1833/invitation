import { PropsWithChildren } from "react";
import Header from "../Components/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
