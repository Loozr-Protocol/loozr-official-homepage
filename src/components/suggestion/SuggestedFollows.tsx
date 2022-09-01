import React, { useEffect, useState } from "react";
import Memoji from "../../assets/img/memoji.png";
import { IUser } from "../../config/constants/types";
import { useGetSuggestedFollowsCallback } from "../../state/user/hooks/useAccount";

const SuggestedFollows = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { getSuggestedFollows } = useGetSuggestedFollowsCallback()

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      const suggestedUsers = await getSuggestedFollows();
      setUsers(suggestedUsers);
    };
    fetchSuggestedUsers();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <p className="text-sm font-semibold text-white">Suggested For You</p>
        {/* <p className="text-xs font-medium text-muted">View all</p> */}
      </div>

      {users.map((user, index) => (
        <div key={index} className="flex justify-between items-center mb-9">
          <div className="flex items-center text-muted">
            <img
              src={Memoji}
              alt=""
              className="h-[45px] w-[45px] rounded-full mr-2"
              style={{ border: "6px solid #141922" }}
            />
            <div>
              <p className="text-sm font-semibold text-white">{user.account_id}</p>
              <p className="flex items-center">
                {user.is_artist ? (<span className="text-muted text-[11px] font-bold mr-1">
                  $HARTY
                </span>) : null}
                <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
                {/* <span className="text-[11px] text-muted font-medium">
                  $3,001.99
                </span> */}
              </p>
            </div>
          </div>
          <p className="text-[11px] font-medium text-loozr-purple">Follow</p>
        </div>
      ))}
    </>
  );
};

export default SuggestedFollows;
