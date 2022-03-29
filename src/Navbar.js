import Popup from "./Popup";

export default function Navbar({ handleButtonClick }) {
  return (
    <div className="flex flex-start w-full items-center bg-third h-14">
      <button className="ml-5 font-semibold">Home</button>
      <button
        className="ml-10 font-semibold"
        onClick={() => handleButtonClick(true)}
      >
        Create Activity
      </button>
    </div>
  );
}
