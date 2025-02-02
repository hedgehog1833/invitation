import ContentLayout from "../ContentLayout";
import {aboutUsContent} from "../../content/content.ts";

const AboutUs = () => {
  return (
    <ContentLayout>
        {aboutUsContent.map((content) => (
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

export default AboutUs;
