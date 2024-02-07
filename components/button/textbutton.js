export default function TextButton({ buttonName, isBorder }) {
  return (
    <button
      className={`w-auto h-[60px] text-center px-3 ${
        isBorder ? "border-r-2 border-red-500" : "border-2"
      }`}
    >
      {buttonName}
    </button>
  );
}
