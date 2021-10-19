import type React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode
}

export const TabContentWrap: React.FC<Props> = ({ children }) => <div className="tabContentWrap">{children}</div>