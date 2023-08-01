type UserIconType = {
  size?: number;
};

export const UserIcon: React.FC = (props: UserIconType) => {
  const { size = 24 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9059 14.8232C13.9059 13.8929 13.9059 13.4277 13.7911 13.0491C13.5326 12.1969 12.8656 11.5299 12.0134 11.2714C11.6348 11.1566 11.1696 11.1566 10.2393 11.1566H6.90593C5.97555 11.1566 5.51036 11.1566 5.13183 11.2714C4.27956 11.5299 3.61262 12.1969 3.35408 13.0491C3.23926 13.4277 3.23926 13.8929 3.23926 14.8232M11.5726 5.82324C11.5726 7.4801 10.2294 8.82324 8.57259 8.82324C6.91574 8.82324 5.57259 7.4801 5.57259 5.82324C5.57259 4.16639 6.91574 2.82324 8.57259 2.82324C10.2294 2.82324 11.5726 4.16639 11.5726 5.82324Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
