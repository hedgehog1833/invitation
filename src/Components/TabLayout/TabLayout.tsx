import { PropsWithChildren } from "react";
import styles from "./TabLayout.module.scss";

const TabLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.tabLayout}>{children}</div>;
};

export default TabLayout;
