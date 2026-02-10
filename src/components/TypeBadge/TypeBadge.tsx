import "./TypeBadge.scss";

interface TypeBadgeProps {
  name: string;
  iconUrl: string;
}

export const TypeBadge = ({ name, iconUrl }: TypeBadgeProps) => {
  if (!name) return null;

  return (
    <div className="type-badge">
      <span>{name}</span>
      {iconUrl && <img src={iconUrl} alt="" className="type-badge__icon" />}
    </div>
  );
};
