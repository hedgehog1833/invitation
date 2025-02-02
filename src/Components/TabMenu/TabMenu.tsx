import * as Tabs from "@radix-ui/react-tabs";
import styles from "./TabMenu.module.scss";
import TimeTable from "../TimeTable";
import Accommodation from "../Accommodation";
import AboutUs from "../AboutUs";
const TabMenu = () => {
  return (
    <Tabs.Root className={styles.tabsWrapper} defaultValue="time-table">
      <Tabs.List className={styles.tabsList} aria-label="Tab-Menü">
        <Tabs.Trigger className={styles.trigger} value="time-table">
          Timetable
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.trigger} value="about-us">
          Das Team
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.trigger} value="accomodation">
          Unterkunft
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={styles.tabsContent} value="time-table">
        <TimeTable />
      </Tabs.Content>
      <Tabs.Content className={styles.tabsContent} value="about-us">
        <AboutUs />
      </Tabs.Content>
      <Tabs.Content className={styles.tabsContent} value="accomodation">
        <Accommodation />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabMenu;
