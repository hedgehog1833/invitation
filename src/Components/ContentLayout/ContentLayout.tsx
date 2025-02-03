import { PropsWithChildren } from "react";
import styles from "./ContentLayout.module.scss";
import clsx from "clsx";

interface ContentLayoutProps extends PropsWithChildren {
  edgesTop?: boolean;
  backgroundColor: string;
}
const ContentLayout = ({
  edgesTop,
  backgroundColor,
  children,
}: ContentLayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right,${backgroundColor} 0%,rgb(240, 251, 255) 80%)`,
      }}
      className={clsx(styles.contentLayout, edgesTop && styles.edgesTop)}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
