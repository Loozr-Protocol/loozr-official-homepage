import React from "react";
import Memoji from "../../assets/img/memoji.png";
import { MIXER_ACCOUNT } from "../../config/constants";
import { IUser } from "../../config/constants/types";
import {
  useFollowCallback,
  usePollSuggestedFollows,
} from "../../state/user/hooks/follows";

const SuggestedFollows = () => {
  const users = usePollSuggestedFollows();
  const { handleFollow } = useFollowCallback();

  const onFollow = async (user: IUser) => {
    await handleFollow(user.id);
    const userIndex = users.indexOf(user);
    if (userIndex > -1) {
      users.splice(userIndex, 1);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <p className="text-sm font-semibold text-white">Suggested For You</p>
        {/* <p className="text-xs font-medium text-muted">View all</p> */}
      </div>
      {users
        ? users.map((user, index) => (
            <div key={index} className="flex justify-between items-center mb-9">
              <div className="flex items-center text-muted">
                <img
                  src={Memoji}
                  alt=""
                  className="h-[45px] w-[45px] rounded-full mr-2"
                  style={{ border: "6px solid #141922" }}
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {user.account_id}
                  </p>
                  <p className="flex items-center">
                    <span className="text-muted text-[11px] font-bold mr-1">
                      {user.account_id}.{MIXER_ACCOUNT}
                    </span>
                    <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
                    {/* <span className="text-[11px] text-muted font-medium">
                  $3,001.99
                </span> */}
                  </p>
                </div>
              </div>
              <p
                className="text-[11px] font-medium text-loozr-purple"
                onClick={() => onFollow(user)}
              >
                Follow
              </p>
            </div>
          ))
        : null}
    </>
  );
};

export default SuggestedFollows;
