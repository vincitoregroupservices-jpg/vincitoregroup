export const FilterLabel = ({ label, onClear }) => {
  return (
    <div
      onClick={onClear}
      className="capitalize flex gap-1 items-center bg-gold-light w-fit px-4 py-2 rounded cursor-pointer"
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-4 h-4 text-gold-dark"
      >
        <path
          d="M6 18L18 6M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
