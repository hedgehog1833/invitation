import * as Tabs from "@radix-ui/react-tabs";
import styles from "./TabMenu.module.scss";
import TimeTable from "../TimeTable";
import Accomodation from "../Accomodation";
import AboutUs from "../AboutUs";
const TabMenu = () => {
  return (
    <Tabs.Root defaultValue="time-table">
      <Tabs.List className={styles.tabsList} aria-label="Tab-Menü">
        <Tabs.Trigger value="time-table">Time Table</Tabs.Trigger>
        <Tabs.Trigger value="about-us">Über uns</Tabs.Trigger>
        <Tabs.Trigger value="accomodation">Unterkunft</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={styles.tabsContent} value="time-table">
        <TimeTable />
      </Tabs.Content>
      <Tabs.Content className={styles.tabsContent} value="about-us">
        <AboutUs />
      </Tabs.Content>
      <Tabs.Content className={styles.tabsContent} value="accomodation">
        <Accomodation />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabMenu;
