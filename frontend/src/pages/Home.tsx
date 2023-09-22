import { IChatHeadData } from "../Types/types";
import Chatbox from "../UI/Chatbox";
import Chatlist from "../UI/Chatlist";
import Searchbar from "../UI/Searchbar";
import chatbg from "../assets/chatbg.jpg";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setSearchQuery } from "../store/searchSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { RiSettings4Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useQuery } from "react-query";
import { getUser } from "../api/api";

const Home = () => {
  const [selectedChat, setSelectedChat] = useState<IChatHeadData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChatHeadClick = (chatData: IChatHeadData) => {
    setSelectedChat(chatData);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleSearch = (searchTerm: string) => {
    dispatch(setSearchQuery(searchTerm));
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuContent = isMenuOpen ? (
    <div
      ref={dropdownRef}
      className="absolute top-10 left-10 w-60 bg-white border-gray-100 border h-auto flex flex-col px-[8px] py-[8px] gap-[12px] shadow-lg rounded-lg"
    >
      <div className="w-full flex flex-row items-center justify-start gap-[10px] px-[4px] py-[4px] rounded-md h-10 hover:cursor-pointer hover:bg-[#F5F5F5]">
        <div className="rounded-full bg-gray-200 w-[30px] h-[30px] px-[6px] py-[6px]  flex items-center justify-center">
          <RiSettings4Fill className="w-full h-full" />
        </div>
        Preferences
      </div>
      <div>{user?.username}</div>
      <div className="w-full border ml-[4px] border-gray-300 " />
      <div
        className="w-full flex flex-row items-center justify-start px-[4px] py-[4px] gap-[10px] rounded-md h-10 hover:cursor-pointer hover:bg-[#F5F5F5]"
        onClick={handleLogout}
      >
        <div className="rounded-full bg-gray-200 w-[30px] h-[30px] px-[6px] py-[6px]  flex items-center justify-center">
          <FiLogOut className="w-full h-full" />
        </div>
        Logout
      </div>
    </div>
  ) : null;

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col border-r-2 border-solid border-[#D9DCE0] ">
        <div className="flex flex-row w-[364px] h-[56px] px-[16px] py-[8px] items-center gap-[16px] flex-shrink-0 self-stretch bg-white ">
          <div
            className={`flex w-[40px] h-[40px] flex-shrink-0 items-center justify-center hover:cursor-pointer hover:bg-[#F5F5F5] bg-${
              isMenuOpen ? "[#F5F5F5]" : "white"
            }`}
            onClick={handleMenuClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.99999 17H21C21.2549 17.0003 21.5 17.0979 21.6854 17.2728C21.8707 17.4478 21.9822 17.687 21.9972 17.9414C22.0121 18.1958 21.9293 18.4464 21.7657 18.6418C21.6021 18.8373 21.3701 18.9629 21.117 18.993L21 19H2.99999C2.74511 18.9997 2.49996 18.9021 2.31462 18.7272C2.12929 18.5522 2.01776 18.313 2.00282 18.0586C1.98788 17.8042 2.07067 17.5536 2.23426 17.3582C2.39785 17.1627 2.62989 17.0371 2.88299 17.007L2.99999 17H21H2.99999ZM2.99999 11L21 10.998C21.2549 10.9983 21.5 11.0959 21.6854 11.2708C21.8707 11.4458 21.9822 11.685 21.9972 11.9394C22.0121 12.1938 21.9293 12.4444 21.7657 12.6398C21.6021 12.8353 21.3701 12.9609 21.117 12.991L21 12.998L2.99999 13C2.74511 12.9997 2.49996 12.9021 2.31462 12.7272C2.12929 12.5522 2.01776 12.313 2.00282 12.0586C1.98788 11.8042 2.07067 11.5536 2.23426 11.3582C2.39785 11.1627 2.62989 11.0371 2.88299 11.007L2.99999 11L21 10.998L2.99999 11ZM2.99999 5H21C21.2549 5.00028 21.5 5.09788 21.6854 5.27285C21.8707 5.44782 21.9822 5.68695 21.9972 5.94139C22.0121 6.19584 21.9293 6.44638 21.7657 6.64183C21.6021 6.83729 21.3701 6.9629 21.117 6.993L21 7H2.99999C2.74511 6.99972 2.49996 6.90212 2.31462 6.72715C2.12929 6.55218 2.01776 6.31305 2.00282 6.05861C1.98788 5.80416 2.07067 5.55362 2.23426 5.35817C2.39785 5.16271 2.62989 5.0371 2.88299 5.007L2.99999 5H21H2.99999Z"
                fill="#707991"
              />
            </svg>
          </div>
          {menuContent}
          <Searchbar onSubmit={handleSearch} />
        </div>
        <div className="flex-grow overflow-y-auto ">
          <Chatlist handleChatHeadClick={handleChatHeadClick} />
        </div>
      </div>
      <div className="flex flex-1 ">
        {selectedChat ? (
          <Chatbox chatData={selectedChat} backgroundImage={chatbg} />
        ) : (
          <img src={chatbg} alt="Chat Background" className="object-cover" />
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
