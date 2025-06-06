import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";

export default function HeaderDetails() {
  const menuItems = [
    {
      title: "Search Events",
      icon: <FaMagnifyingGlass className="h-5 w-5" />,
    },
    {
      title: "Follow Art Organizations",
      icon: <FaRegHeart className="h-5 w-5" />,
    },
    { title: "Highlight Video", icon: <FaRegStar className="h-5 w-5" /> },
    { title: "Latest News", icon: <BsMegaphone className="h-5 w-5" /> },
    { title: "Watch", icon: <BiMoviePlay className="h-5 w-5" /> },
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-[365px] h-[485px] bg-[#1E1F22] rounded-lg shadow-lg z-50 ">
      <div className="pt-6 px-6 border-b-1 border-b-[rgb(16,16,16)]">
        <h2 className="text-white text-lg font-semibold">
          Create your account!
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Get personalized event recommendations tailored just for you!
        </p>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white py-2 rounded-full font-semibold">
            Sign up
          </button>
          <button className="flex-1 bg-black text-white  py-2 rounded-full font-semibold">
            Log in
          </button>
        </div>
      </div>

      <ul className="">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center h-[45px] gap-5 w-[365px] mt-4 border-b-1 last:border-b-0  border-b-[rgb(16,16,16)] px-6"
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
