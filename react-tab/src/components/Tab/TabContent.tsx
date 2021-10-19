import type React from 'react';
import './index.css';

type Props = {
  id: string;
  children: React.ReactNode;
};

export const TabContent: React.FC<Props> = ({ id, children }) => (
  <div className="tabContent" id={id}>
    {children}
  </div>
);
