import type React from 'react';

type Props = {
  controlLabel: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean
};

export const TabLabel: React.FC<Props> = ({ controlLabel, label, onClick, isSelected }) => (
  <li className="tabLabel">
    <button role="tab" aria-controls={controlLabel} onClick={onClick} aria-selected={isSelected} className="tabLabelButton">
      {label}
    </button>
  </li>
);
