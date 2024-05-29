import clsx from 'clsx';

export default function LoadingSpinner({
  className,
  light=true
} : {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg
      className={clsx(
        "loader", 
        className,
        light 
          ? "light-loader"
          : "dark-loader"
      )}
      viewBox="0 0 40 40"
      height="40"
      width="40"
    >
      <circle 
        className="track"
        cx="20" 
        cy="20" 
        r="17.5" 
        pathLength="100" 
        stroke-width="5px" 
        fill="none" 
      />
      <circle 
        className="car"
        cx="20" 
        cy="20" 
        r="17.5" 
        pathLength="100" 
        stroke-width="5px" 
        fill="none" 
      />
    </svg>
  );
}
