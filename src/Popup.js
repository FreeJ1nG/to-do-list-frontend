export default function Popup({ children, handleButtonClick }) {
  return (
    <div className="fixed w-full h-full bg-black/50 flex justify-center items-center">
      <div className="relative p-8 w-full max-w-[640px] bg-third rounded-xl p-5">
        <button
          className="absolute right-3 top-3"
          onClick={() => handleButtonClick(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
