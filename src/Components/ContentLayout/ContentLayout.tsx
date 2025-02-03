import { PropsWithChildren } from "react";
import styles from "./ContentLayout.module.scss";
import clsx from "clsx";

interface ContentLayoutProps extends PropsWithChildren {
  edgesTop?: boolean;
}
const ContentLayout = ({ edgesTop, children }: ContentLayoutProps) => {
  return (
    <div className={clsx(styles.contentLayout, edgesTop && styles.edgesTop)}>
      {children}
    </div>
  );
};

export default ContentLayout;
