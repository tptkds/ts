import Links from './Links';
import Search from './Search';

export default function Nav() {
  return (
    <div className="flex m-4 header-bottom sticky h-16	shadow-md rounded-xl bg-opacity-50 bg-white">
      <nav className="w-full">
        <ul className="flex flex-row justify-around items-center h-full text-gray-700 font-semibold text-sm">
          <li className="">showfinnmore</li>
          <li>DARKMODE</li>
          <li>HOME</li>
          <Links />
          <Search />
        </ul>
      </nav>
    </div>
  );
}
