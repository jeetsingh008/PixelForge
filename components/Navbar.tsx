import Image from "next/image";
import Link from "next/link";
import logo from "../public/code.png";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const links = [
    { id: 1, url: "/", title: "Home" },
    { id: 2, url: "", title: "Services" },
    { id: 3, url: "", title: "About Us" },
    { id: 4, url: "", title: "Our Team" },
    { id: 5, url: "", title: "Contact Us" },
  ];

  return (
    <div className="container relative z-10 flex justify-between items-center overflow-x-hidden p-2">
      {/* logo part */}
      <div className="flex justify-between">
        <div className="flex gap-1 justify-center items-center">
          <div className="w-10 h-10">
            <Image
              src={logo}
              alt="Logo"
              layout="fixed"
              height={500}
              width={300}
            />
          </div>
          <h1 className="font-semibold text-xl">PixelForge</h1>
        </div>
      </div>
      {/* Menu Section */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-3">
          {links.map((obj) => (
            <li key={obj.id}>
              <Link className="inline-block py-2 font-medium hover:text-secondary relative group" href={obj.url}> <div className="w-2 h-2 bg-secondary absolute left-1/2 top-1/2 -translate-x-1/2 bottom-0 hidden group-hover:block rounded-full">
                </div> {obj.title}</Link>
            </li>
          ))}
          <button className="primary-btn text-sm">Sign in</button>
        </ul>
      </div>

      {/* Mobile Hamburger Menu section */}
      <div className="md:hidden">
        <IoMdMenu className="text-4xl" />
      </div>
    </div>
  );
};

export default Navbar;
