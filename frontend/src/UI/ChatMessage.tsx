import { IChatMessage } from "../Types/types";

const ChatMessage = ({ text, time, type }: IChatMessage) => {
  const fillColor = type === "incoming" ? "black" : "white";

  return (
    <div
      className={`flex flex-col ${
        type === "incoming" ? "items-start" : "items-end"
      }`}
    >
      <div
        className={`flex flex-col w-auto min-w-[60px] gap-[4px] max-w-[402px] h-auto px-[12px] py-[4px] bg-${
          type === "incoming" ? "white" : "[#78E378]"
        } rounded-lg`}
      >
        <div
          className="flex flex-col items-start justify-start w-auto min-w-[60px] max-w-[378px] h-auto text-[16px]"
          style={{
            lineHeight: "20px",
          }}
        >
          {text}
        </div>
        <div
          className="flex flex-row items-center justify-end gap-[4px]"
          style={{
            lineHeight: "16px",
          }}
        >
          <div
            className={`text-[12px]  ${
              type === "incoming" ? "text-[#011627]" : "text-white"
            }`}
          >
            {time}
          </div>
          <div className={`w-[14px] h-[14px] fill-${fillColor}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z"
                fill={fillColor}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
