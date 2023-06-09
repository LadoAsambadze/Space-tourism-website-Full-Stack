export default function Header() {
  return (
    <div className="w-full absolute px-6 pt-6 flex flex-row justify-between items-center md:hidden">
      <img src="shared/logo.svg" alt="logo" />
      <img
        src="shared/icon-hamburger.svg"
        alt="hamburger icon"
        className="w-6 h-5 pointer"
      />
    </div>
  );
}
