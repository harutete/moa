import './index.css';
import { Tab, TabContentWrap, TabContent, TabLabel, TabLabelList } from '../../components/Tab'

const Home = () => (
  <div>
    <h1>Tab</h1>
    <Tab>
      <TabLabelList>
        <TabLabel label="Tab1" />
        <TabLabel label="Tab2" />
      </TabLabelList>
      <TabContentWrap>
        <TabContent>
          <p>Tab1</p>
        </TabContent>
        <TabContent>
          <p>Tab2</p>
        </TabContent>
      </TabContentWrap>
    </Tab>
  </div>
);

export default Home;
