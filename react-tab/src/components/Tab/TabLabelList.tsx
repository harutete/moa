import type React from 'react';

type Props = {
  children: React.ReactNode;
};

export const TabLabelList: React.FC<Props> = ({ children }) => (
  <ul className="tabLabelList">{children}</ul>
);
