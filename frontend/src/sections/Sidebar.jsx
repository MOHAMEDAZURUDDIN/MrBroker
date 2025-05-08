import { BiSolidUserAccount } from "react-icons/bi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdDomainDisabled } from "react-icons/md";
import { TbBedFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { isAuthenticated } = useSelector((state) => state.authState);

  const links = [
    {
      id: 1,
      child: (
        <>
          <BiSolidUserAccount size={30} />
        </>
      ),
      href: isAuthenticated ? "/myprofile" : "/login",
    },
    {
      id: 2,
      child: (
        <>
          <HiOutlineHomeModern size={30} />
        </>
      ),
      href: "",
    },
    {
      id: 3,
      child: (
        <>
          <TbBedFilled size={30} />
        </>
      ),
      href: "",
    },
    {
      id: 4,
      child: (
        <>
          <MdDomainDisabled size={30} />
        </>
      ),
      href: "",
    },
  ];
  return (
    <div className="flex-col top-[35%] opacity-100 z-20 right-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:rotate-12 bg-gradient-to-bl from-red-500 to-orange-700 via-yellow-500 hover:to-green-500 hover:rounded-md duration-300 `}
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full font-semibold text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
