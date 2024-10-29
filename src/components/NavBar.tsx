import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

function NavBar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/*left*/}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          KHEMZ Social
        </Link>
      </div>

      {/*center*/}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link className="flex gap-2 items-center" href="/">
            <Image src="/home.png" alt="Home" width={16} height={16}  className="w-4 h-4"/>
            <span>Homepage</span>
          </Link>
          <Link className="flex gap-2 items-center" href="/">
            <Image src="/friends.png" alt="Home" width={16} height={16}  className="w-4 h-4"/>
            <span>Friends</span>
          </Link>
          <Link className="flex gap-2 items-center" href="/">
            <Image src="/stories.png" alt="Home" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      {/*right*/}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
}

export default NavBar;
