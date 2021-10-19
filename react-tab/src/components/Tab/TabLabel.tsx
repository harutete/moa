import type React from 'react';
import './index.css';

type Props = {
  label: string;
};

export const TabLabel: React.FC<Props> = ({ label }) => (
  <li className="tabLabel">{label}</li>
);
