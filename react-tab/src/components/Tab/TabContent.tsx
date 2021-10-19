import type React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode
}

export const TabContent: React.FC<Props> = ({ children }) => <div className="tabContent">{children}</div>