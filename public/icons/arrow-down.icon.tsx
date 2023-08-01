type ArrowDownIconType = {
  size?: number;
};

export const ArrowDownIcon: React.FC<ArrowDownIconType> = (
  props: ArrowDownIconType
) => {
  const { size = 12 } = props;

  return (
    <svg
      width={size}
      height={size * 0.66}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
