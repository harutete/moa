import type React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Tab: React.FC<Props> = ({ children }) => {
  return <div className="tab">{children}</div>;
};
