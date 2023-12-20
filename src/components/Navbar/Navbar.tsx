import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    { name: "About Steven", path: "/", icon: <FaLaptopCode /> },
    { name: "FitFuelPlanner App", path: "/project", icon: <MdPhoneIphone /> },
];

const Navbar = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !(dropdownRef.current as HTMLElement).contains(
                    event.target as Node
                )
            ) {
                setProfileDropdown(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex flex-row items-center justify-between w-full px-4 md:px-6 lg:px-24 h-20 bg-white fixed z-10 border-b-[1px] border-gray-300">
            <div className="text-3xl font-semibold italic">
                <Link to="/">Travel Stride</Link>
            </div>

            <ul className="hidden lg:flex flex-row list-none space-x-6 text-md font-medium">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }: { isActive: boolean }) =>
                                `rounded-md p-3 flex flex-row items-center space-x-2 hover:bg-purple-background hover:text-purple-primary ${
                                    isActive
                                        ? "bg-purple-background text-purple-primary"
                                        : ""
                                }`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="hidden relative lg:block" ref={dropdownRef}>
                <button
                    className="flex flex-row items-center space-x-2 z-10 cursor-pointer"
                    onClick={() => setProfileDropdown(!profileDropdown)}
                >
                    <span className="text-3xl text-gray-700">
                        <CgProfile />
                    </span>

                    <span
                        className={`${
                            profileDropdown ? "rotate-0" : "rotate-180"
                        } text-xl text-gray-700`}
                    >
                        <IoIosArrowUp />
                    </span>
                </button>

                {profileDropdown && (
                    <div className="absolute top-10 -left-6 bg-white z-20">
                        <div className="border-2 border-b-0 border-slate-300 w-32 py-1 text-center">
                            <a
                                href="https://github.com/stevenGarciaDev"
                                target="_blank"
                                onClick={() => setProfileDropdown(false)}
                                className="block w-full"
                            >
                                GitHub
                            </a>
                        </div>
                        <div className="border-2 border-slate-300 w-32 py-1 text-center">
                            <a
                                href="https://stevencodecraft.com/about"
                                target="_blank"
                                onClick={() => setProfileDropdown(false)}
                                className="block w-full"
                            >
                                Personal Website
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <div className="lg:hidden">
                <button
                    className="text-4xl text-gray-700"
                    onClick={() => setMenuExpanded(!menuExpanded)}
                >
                    {menuExpanded ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {menuExpanded && (
                <div
                    className={`lg:hidden bg-white z-10 w-full fixed left-0 top-20 transition-transform duration-300 transform ${
                        menuExpanded ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={() => setMenuExpanded(false)}
                >
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name} className="border-b-2">
                                <Link
                                    to={item.path}
                                    className="w-full block text-center py-2"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className="border-b-2">
                            <Link
                                to="https://github.com/stevenGarciaDev"
                                className="w-full block text-center py-2"
                                target="_blank"
                            >
                                GitHub Profile
                            </Link>
                        </li>
                        <li className="border-b-2">
                            <Link
                                to="https://stevencodecraft.com/"
                                className="w-full block text-center py-2"
                                target="_blank"
                            >
                                Personal Website
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
