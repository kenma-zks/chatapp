import { useQuery } from "react-query";
import { IChatHeadData, IUserData } from "../Types/types";
import { getAllUsersWithChatData } from "../api/api";
import avatar from "../assets/avatar.svg";
// import { dummyData } from "../assets/data";
import { useAppSelector } from "../store/hooks";
// import { useState, useEffect } from "react";

const Chatlist = ({
  handleChatHeadClick,
}: {
  handleChatHeadClick: (chatData: IChatHeadData) => void;
}) => {
  const { data: chatData } = useQuery<IUserData[]>({
    queryKey: ["chatData"],
    queryFn: getAllUsersWithChatData,
  });

  const searchQuery = useAppSelector((state) => state.search);

  if (!chatData) {
    return <p>No data</p>;
  }

  const filteredChatList = chatData.filter((chatListNames) =>
    chatListNames.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredChatList.length === 0 ? (
        <p className="flex h-full mt-[100%] items-center justify-center">
          No contact found
        </p>
      ) : (
        filteredChatList.map((data, index) => (
          <div
            key={index}
            className="flex flex-row w-[364px] h-[72px] px-[16px] py-[8px] items-center gap-[16px] flex-shrink-0 self-stretch hover:cursor-pointer hover:bg-[#F5F5F5]"
            onClick={() => {
              const chatData = Array.isArray(data.chatData)
                ? data.chatData[0]
                : data.chatData;
              handleChatHeadClick(chatData);
            }}
          >
            <img
              src={data.chatData[0]?.Image || avatar}
              className="flex w-[48px] h-[48px] rounded-full flex-shrink-0 items-center justify-center object-cover"
            />
            <div className="flex-col gap-[4px]">
              <div className="flex flex-row w-[268px] h-[24px] justify-between items-center">
                <p className="text-[#011627] text-[16px] font-semibold line-[20px]">
                  {data.username}
                </p>
                <p className="w-[32px] h-[16px] text-[#707991] text-[12px] line-[16px]">
                  {data.chatData[0]?.Time}
                </p>
              </div>
              <div className="flex flex-row w-[268px] h-[18px] justify-between items-center">
                <p className="text-[#707991] text-[14px] line-[18px]">
                  {data.chatData[0]?.messages?.length
                    ? data.chatData[0]?.messages.slice(-1)[0].text
                    : ""}
                </p>

                <div className="w-[16px] h-[16px] bg-[#78E378] rounded-full flex items-center justify-center">
                  <p className="text-white text-[12px]">{2}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Chatlist;
