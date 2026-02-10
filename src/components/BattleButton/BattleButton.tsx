import React from "react";
import "./BattleButton.scss";

interface BattleButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const BattleButton = ({
  onClick,
  disabled = false,
  children,
}: BattleButtonProps) => {
  return (
    <button className="battle-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
