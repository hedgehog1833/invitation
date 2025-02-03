import { timeTableContent } from "../../content/content";
import ContentLayout from "../ContentLayout";

const TimeTable = () => {
  return (
    <ContentLayout edgesTop>
      {timeTableContent.map((content) => (
        <div>
          <h1>{content.header}</h1>
          {content.content.map((text) => (
            <p>{text}</p>
          ))}
        </div>
      ))}
    </ContentLayout>
  );
};

export default TimeTable;
