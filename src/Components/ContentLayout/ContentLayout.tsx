import { PropsWithChildren } from "react";
import styles from "./ContentLayout.module.scss";

const ContentLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.contentLayout}>{children}</div>;
};

export default ContentLayout;
