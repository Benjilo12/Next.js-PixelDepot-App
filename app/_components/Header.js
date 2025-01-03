import Logo from "./Logo";
import Navigate from "./Navigate";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-2 bg-slate-950 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigate />
      </div>
    </header>
  );
}

export default Header;
