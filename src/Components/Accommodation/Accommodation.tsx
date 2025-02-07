import ContentLayout from "../ContentLayout";
import { accommodationContent } from "../../content/content.ts";
import styles from "./Accommodation.module.scss";

const Accommodation = () => {
  return (
    <ContentLayout edgesTop backgroundColor="rgb(212, 180, 223)">
      <div>
        <h1>Unterkunft</h1>
        <p>
          Die Hammesmühle selbst bietet eine Hand voll Zimmer. Bitte seht uns
          nach, dass wir diese für die Familie reserviert haben.
        </p>
        <p>
          Wenn ihr plant, nach der Feier in der Gegend zu übernachten, sprecht
          uns an und wir helfen euch bei der Suche nach einer passenden
          Unterkunft!
        </p>
        {accommodationContent.map((content, index) => (
          <div key={index}>
            <h2>{content.header}</h2>
            <div className={styles.links}>
              {content.links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
        <h2>Camper</h2>
        <p>
          Direkt an der Location ist ein großer Parkplatz, auf dem Anreisende
          auch mit Vans oder Wohnmobilen für die Nacht stehen können.
        </p>
      </div>
    </ContentLayout>
  );
};

export default Accommodation;
