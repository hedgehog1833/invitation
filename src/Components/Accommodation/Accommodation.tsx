import ContentLayout from "../ContentLayout";
import {accommodationContent} from "../../content/content.ts";

const Accommodation = () => {
  return (
    <ContentLayout>
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
