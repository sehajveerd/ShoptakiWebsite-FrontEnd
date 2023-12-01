import React, { useState } from 'react';

const AnnouncementCard = ({
  fullText,
  MemberName,
  maxShortTextLength,
  commenttime,
  commenttype,
  title,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);

  const shortText =
    fullText.length <= maxShortTextLength
      ? fullText
      : `${fullText.slice(0, maxShortTextLength)}...`;

  console.log(shortText);
  return (
    <div className="border border-solid border-neutralgray-200 py-5 px-6 w-full font-poppins">
      <div className="p-3xs md:px-5xl items-center flex justify-between gap-2.5">
        <img
          loading="lazy"
          src="/listing/Announcement.png"
          className="aspect-square object-cover w-5 shrink-0"
        />
        <div className="text-neutralgray-400 text-base font-base leading-6 self-stretch grow whitespace-nowrap lowercase">
          {commenttype}
        </div>
        <button
          className="text-3xl text-neutralgray-400 bg-transparent"
          style={{ width: '24px', height: '24px' }}
          onClick={toggleText}
        >
          +
        </button>
      </div>
      <div className="flex justify-between gap-4 mt-6">
        <img
          loading="lazy"
          src="/listing/ProfilePhoto.png"
          className="aspect-square object-cover object-center w-8 h-8 rounded-full"
        />
        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="items-stretch flex justify-between gap-2">
            <div className="text-neutral-gray-600 font-poppins text-base font-semibold">
              {MemberName}
            </div>
            <div className="text-neutral-500 text-sm font-medium leading-5">
              {commenttime}
            </div>
          </div>
          <div className="overflow-hidden text-neutralgray-600 text-sm leading-6 mt-5">
            <span className="font-bold">
              {title}
              <br />
            </span>
            <span className="font-sm">
              <br />
              {isExpanded ? fullText : `${shortText}`}
              <button onClick={toggleText} className="text-sky-700">
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </span>
          </div>
        </div>
      </div>
      <div
        className="h-16xl px-5 py-3 rounded-lg bg-primaryblue-500 text-white text-center text-medium cursor-pointer mt-6"
        // eslint-disable-next-line no-undef
        onClick={toggleText}
      >
        Go to community
      </div>
    </div>
  );
};

export default AnnouncementCard;
