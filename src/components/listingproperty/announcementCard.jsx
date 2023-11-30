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
    <div className="border border-solid border-neutralgray-200 p-10  w-2/3 mt-4">
      <div className="items-center flex justify-between gap-2.5">
        <img
          loading="lazy"
          src="/listing/Announcement.png"
          className="aspect-square object-cover w-5 shrink-0"
        />
        <div className="text-neutralgray-400 text-base font-medium leading-6 self-stretch grow whitespace-nowrap">
          {commenttype}
        </div>
        <button
          className="text-3xl text-neutralgray-400 bg-transparent mb-3"
          style={{ width: '10px', height: '10px' }}
          onClick={toggleText}
        >
          +
        </button>
      </div>
      <div className="flex justify-between gap-4 mt-9">
        <img
          loading="lazy"
          src="/listing/ProfilePhoto.png"
          className="aspect-square object-cover object-center w-8 h-8 rounded-full"
        />
        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="items-stretch flex justify-between gap-2">
            <div className="text-neutralgray-600 text-base font-semibold leading-6">
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
            <span className="font-medium">
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
        className="mt-6 mb-5 px-5 py-3 rounded-lg bg-sky-700 text-white text-center cursor-pointer"
        // eslint-disable-next-line no-undef
        onClick={toggleText}
      >
        Go to community
      </div>
    </div>
  );
};

export default AnnouncementCard;
