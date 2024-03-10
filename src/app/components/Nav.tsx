import DarkModeToggleButton from './DarkModeToggleButton';
import Links from './Links';
import Search from './Search';

export default function Nav() {
  return (
    <div className="flex m-4 header-bottom sticky h-16	shadow-md rounded-xl bg-opacity-50">
      <nav className="w-full">
        <ul className=" flex flex-row justify-around items-center h-full text-gray-700 font-semibold text-sm">
          <li>
            <ul className="flex">
              <li className="">
                <h1>showfinnmore</h1>
              </li>
              <li className="flex">
                <DarkModeToggleButton />
              </li>
            </ul>
          </li>

          <Links />
          <Search />
        </ul>
      </nav>
    </div>
  );
}
