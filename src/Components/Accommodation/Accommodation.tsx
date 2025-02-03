import ContentLayout from "../ContentLayout";
import { accommodationContent } from "../../content/content.ts";

const Accommodation = () => {
  return (
    <ContentLayout edgesTop backgroundColor="rgb(212, 180, 223)">
      {accommodationContent.map((content) => (
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

export default Accommodation;
