import React, { useState } from 'react';

import { Tab, TabContent, TabLabel, TabLabelList } from '../../components/Tab';

import './index.css';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  const handleTabSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ event });
  };
  return (
    <div>
      <h1>Tab</h1>
      <Tab>
        <TabLabelList>
          <TabLabel
            controlLabel="tab1"
            label="Tab1"
            onClick={handleTabSelect}
            isSelected={selectedTab === 'tab1'}
          />
          <TabLabel
            controlLabel="tab2"
            label="Tab2"
            onClick={handleTabSelect}
            isSelected={selectedTab === 'tab2'}
          />
        </TabLabelList>
        <TabContent id="tab1" isHidden={selectedTab !== 'tab1'}>
          <p>Tab1</p>
        </TabContent>
        <TabContent id="tab2" isHidden={selectedTab !== 'tab2'}>
          <p>Tab2</p>
        </TabContent>
      </Tab>
    </div>
  );
};

export default Home;
