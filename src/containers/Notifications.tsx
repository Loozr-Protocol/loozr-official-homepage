import React from "react";
import VerificationBadge from "../assets/icons/verified_badge.svg";
import Arrow225Deg from "../assets/icons/arrow-225deg.svg";
import Arlene from "../assets/img/artists/arlene.png";

import Filter from "../assets/icons/filter.svg";
import CaretDown from "../assets/icons/caret-down.svg";

const notifications = [
  {
    type: "follow",
    time: "3 min ago",
    read: false,
    detail: "Nina Slough followed you",
  },
  {
    type: "trx",
    time: "2 days ago",
    read: false,
    detail: "Anderson Gibbs sent you 10 LZR coin (~$109.50)",
  },
  {
    type: "trx",
    time: "7:39AM, 3rd Aug",
    read: false,
    detail: "Anderson Gibbs sent you 106 $DAVIDO coin (~$50.3K)",
  },
  {
    type: "follow",
    time: "3:28 PM 4th Aug",
    read: false,
    detail: "Nina Slough followed you",
  },
  {
    type: "follow",
    time: "3 days ago",
    read: true,
    detail: "Nina Slough followed you",
  },
  {
    type: "follow",
    time: "3 days ago",
    read: true,
    detail: "Nina Slough followed you",
  },
  {
    type: "trx",
    time: "7:39AM, 3rd Aug",
    read: true,
    detail: "Anderson Gibbs sent you 106 $DAVIDO coin (~$50.3K)",
  },
  {
    type: "follow",
    time: "3 days ago",
    read: true,
    detail: "Nina Slough followed you",
  },
  {
    type: "trx",
    time: "7:39AM, 3rd Aug",
    read: true,
    detail: "Anderson Gibbs sent you 106 $DAVIDO coin (~$50.3K)",
  },
  {
    type: "trx",
    time: "7:39AM, 3rd Aug",
    read: true,
    detail: "Anderson Gibbs sent you 106 $DAVIDO coin (~$50.3K)",
  },
  {
    type: "verification",
    time: "8 secs ago",
    read: true,
    detail: "You have earned the VERIFIED badge!",
  },
];

const Notifications = () => {
  const renderNotificationIcon = (type: string, read: boolean) => {
    switch (type) {
      case "verification":
        return (
          <img
            src={VerificationBadge}
            alt=""
            width={44}
            height={44}
            className="w-11 h-11"
          />
        );
      case "trx":
        return (
          <div
            className={`rounded-full h-11 w-11 ${
              read ? "bg-loozr-purple" : "bg-dark-700"
            } flex items-center justify-center`}
          >
            <img src={Arrow225Deg} alt="" className="object-cover w-3 h-4" />
          </div>
        );
      case "follow":
        return (
          <img
            src={Arlene}
            alt=""
            className="h-11 w-11 rounded-full"
            style={{ border: "6px solid #141922" }}
          />
        );
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center cursor-pointer mb-16">
        <img src={Filter} alt="" className="w-[22px] h-[16px] mr-6" />
        <p className="text-xl text-muted font-medium mr-3">
          Filter notifications
        </p>
        <img src={CaretDown} alt="" className="w-[11px] h-1.5" />
      </div>
      {notifications.map((notification, index) => (
        <div key={index} className="flex items-center mb-9">
          {!notification.read && (
            <div className="h-3.5 w-3.5 bg-loozr-green rounded-full mr-10" />
          )}
          {renderNotificationIcon(notification.type, notification.read)}
          <div className="ml-6">
            <p className="mb-0.5 font-medium text-xl text-white">
              {notification.detail}
            </p>
            <p className="text-base font-semibold text-[#536079]">
              {notification.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
