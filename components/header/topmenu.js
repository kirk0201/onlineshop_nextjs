import NavButton from "../navbutton";

export default function TopMenu({ children }) {
  return (
    <div className="w-full h-[60px] bg-black text-white flex justify-center items-center">
      광고{children}
    </div>
  );
}
