import { timeTableContent } from "../../content/content";
import ContentLayout from "../ContentLayout";
import styles from "./TimeTable.module.scss";

const TimeTable = () => {
  return (
    <ContentLayout edgesTop backgroundColor="rgb(223, 184, 180)">
      <ul className={styles.timeTableList}>
        {timeTableContent.map((content, index) => (
          <li key={index}>
            <h1>{content.header}</h1>
            {content.content.map((text) => (
              <p>{text}</p>
            ))}
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
};

export default TimeTable;
