import type React from 'react';
import './index.css';

type Props = {
  id: string;
  isHidden: boolean;
  children: React.ReactNode;
};

export const TabContent: React.FC<Props> = ({ id, isHidden, children }) => (
  <div role="tabpanel" className="tabContent" id={id}>
    {children}
  </div>
);
