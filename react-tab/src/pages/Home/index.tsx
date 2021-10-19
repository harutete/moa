import './index.css';
import { Tab, TabContent, TabLabel, TabLabelList } from '../../components/Tab';

const Home = () => (
  <div>
    <h1>Tab</h1>
    <Tab>
      <TabLabelList>
        <TabLabel label="Tab1" />
        <TabLabel label="Tab2" />
      </TabLabelList>
      <TabContent id="tab1">
        <p>Tab1</p>
      </TabContent>
      <TabContent id="tab2">
        <p>Tab2</p>
      </TabContent>
    </Tab>
  </div>
);

export default Home;
