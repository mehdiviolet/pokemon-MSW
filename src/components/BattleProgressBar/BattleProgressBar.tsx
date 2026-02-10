import "./BattleProgressBar.scss";
import { type JobStatus } from "../../types/Pokemon";

interface BattleProgressBarProps {
  progress: number;
  status: JobStatus;
  isVisible: boolean;
}

export const BattleProgressBar = ({
  progress,
  status,
  isVisible,
}: BattleProgressBarProps) => {
  // Se non deve essere visibile e non è fallito, nascondi tutto (ritorna null)
  // Nota: Se è 'failed', vogliamo mostrarlo per far vedere l'errore
  if (!isVisible && status !== "failed") return null;

  const isFailed = status === "failed";
  const isDone = status === "done";

  return (
    <div className="battle-progress">
      <div className="battle-progress__bar">
        <div
          className={`battle-progress__fill ${isFailed ? "battle-progress__fill--failed" : ""} ${isDone ? "battle-progress__fill--done" : ""}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="battle-progress__text">
        {isFailed ? "❌" : `${Math.round(progress)}%`}
      </span>
    </div>
  );
};
