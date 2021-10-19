import type React from 'react';
import './index.css';

type Props = {
  controlLabel: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TabLabel: React.FC<Props> = ({ controlLabel, label, onClick }) => (
  <li className="tabLabel">
    <button role="tab" aria-controls={controlLabel} onClick={onClick}>
      {label}
    </button>
  </li>
);
