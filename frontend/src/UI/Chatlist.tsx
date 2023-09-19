import { IChatHeadData } from "../Types/types";
import avatar from "../assets/avatar.svg";
import { dummyData } from "../assets/data";

const Chatlist = ({
  handleChatHeadClick,
}: {
  handleChatHeadClick: (chatData: IChatHeadData) => void;
}) => {
  return (
    <div>
      {dummyData.map((data) => (
        <div
          key={data.id}
          className="flex flex-row w-[364px] h-[72px] px-[16px] py-[8px] items-center gap-[16px] flex-shrink-0 self-stretch"
          onClick={() => {
            handleChatHeadClick(data);
          }}
        >
          <img
            src={data.Image || avatar}
            className="flex w-[48px] h-[48px] rounded-full flex-shrink-0 items-center justify-center object-cover"
          />
          <div className="flex-col gap-[4px]">
            <div className="flex flex-row w-[268px] h-[24px] justify-between items-center">
              <p className="text-[#011627] text-[16px] font-semibold line-[20px]">
                {data.Name}
              </p>
              <p className="w-[32px] h-[16px] text-[#707991] text-[12px] line-[16px]">
                {data.Time}
              </p>
            </div>
            <div className="flex flex-row w-[268px] h-[18px] justify-between items-center">
              <p className="text-[#707991] text-[14px] line-[18px]">
                {data.messages.slice(-1)[0].text}
              </p>
              <div className="w-[16px] h-[16px] bg-[#78E378] rounded-full flex items-center justify-center">
                <p className="text-white text-[12px]">{2}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chatlist;
