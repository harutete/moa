import type React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
};

export const Tab: React.FC<Props> = ({ children }) => {
  return <div className="tab">{children}</div>;
};
