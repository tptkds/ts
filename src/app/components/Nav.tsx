import Links from './Links';

export default function Nav() {
  return (
    <div className="flex m-4 header-bottom sticky h-16 shadow-md rounded-xl bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60 dark:text-white">
      <nav className="w-full">
        <ul className=" flex flex-row  items-center h-full font-semibold text-sm">
          <Links />
        </ul>
      </nav>
    </div>
  );
}
