import type React from 'react';

import { useTabState } from '../../hooks/useTabState'
import { Tab, TabContent, TabLabel, TabLabelList } from '../../components/Tab';

import './index.css'

const Home = () => {
  const { state, handleSetState } = useTabState('tab1')
  const handleTabSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedValue = event.currentTarget.getAttribute('aria-controls')
    if (selectedValue === null) {
      return
    }
    handleSetState(selectedValue)
  };
  return (
    <div className="home">
      <h1>Tab</h1>
      <Tab>
        <TabLabelList>
          <TabLabel
            controlLabel="tab1"
            label="Tab1"
            onClick={handleTabSelect}
            isSelected={state === 'tab1'}
          />
          <TabLabel
            controlLabel="tab2"
            label="Tab2"
            onClick={handleTabSelect}
            isSelected={state === 'tab2'}
          />
        </TabLabelList>
        <TabContent id="tab1" isHidden={state !== 'tab1'}>
          <p>Tab1</p>
        </TabContent>
        <TabContent id="tab2" isHidden={state !== 'tab2'}>
          <p>Tab2</p>
        </TabContent>
      </Tab>
    </div>
  );
};

export default Home;
