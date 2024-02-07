import NavButton from "./navbutton";
import SearchBar from "./searchbar";

export default function CenterMenu({ children }) {
  const link = [
    { name: "홈", endPoint: "/" },
    { name: "Button1", endPoint: "/button1" },
    { name: "Button2", endPoint: "/button2" },
    { name: "Button3", endPoint: "/button3" },
  ];
  return (
    <nav className="w-full h-[60px] flex">
      <NavButton pageInfo={{ name: "로고", endPoint: "/" }} />
      <SearchBar className="" />
      <div className="flex flex-1 justify-center items-center">
        {link.map((comp) => {
          return (
            <NavButton className="" key={comp.name} pageInfo={comp}></NavButton>
          );
        })}
      </div>
      {children}
    </nav>
  );
}
