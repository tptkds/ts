import DarkModeToggleButton from './DarkModeToggleButton';
import Links from './Links';
import Search from './Search';

export default function Nav() {
  return (
    <div className="flex m-4 header-bottom sticky h-16 shadow-md rounded-xl bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-60 dark:text-white">
      <nav className="w-full">
        <ul className=" flex flex-row  items-center h-full font-semibold text-sm">
          <li className="basis-1/4">
            <ul className="flex">
              <li className="ml-12">
                <h1>showfinnmore</h1>
              </li>
              <li className="flex">
                <DarkModeToggleButton />
              </li>
            </ul>
          </li>
          <Links />
        </ul>
      </nav>
    </div>
  );
}
