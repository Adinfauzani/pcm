export default function ApplicationLogo(props) {
  return (
    <div
      {...props}
      className={`flex items-center justify-center ${props.className || ""}`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <rect width="48" height="48" rx="12" fill="#1F7A4C" />
        <path d="M24 12L14 36H34L24 12Z" fill="white" />
        <circle cx="24" cy="30" r="3" fill="#1F7A4C" />
      </svg>
    </div>
  );
}
