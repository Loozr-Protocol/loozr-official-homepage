import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Memoji from "../../assets/img/memoji.png";
import { MIXER_ACCOUNT } from "../../config/constants";
import User from "../../config/constants/models/user";
import {
  useFollowCallback,
  usePollSuggestedFollows,
} from "../../state/user/hooks/follows";
import Photo from "../Photo";

const SuggestedFollows = (props: any) => {
  const users = usePollSuggestedFollows();
  const { handleFollow } = useFollowCallback();
  const navigate = useNavigate()

  const onFollow = async (user: User) => {
    await handleFollow(user.id);
    const userIndex = users.indexOf(user);
    if (userIndex > -1) {
      users.splice(userIndex, 1);
    }
  }; 

  const Loop = ({ user }: { user: User }) => (
    <div className=' w-full flex justify-between my-2 items-center ' >

      <Photo
        alt=""
        className="object-contain w-10 h-10 rounded-full "
        style={{ border: "3px solid #141922" }}
      />
      {/* <div className=' w-10 h-10 rounded-full bg-red-600 border-[3px] border-[#222A3B] ' /> */}
      <div onClick={() => navigate(`/${user.accountDomain}`)} className=' ml-3 ' >
        <div className=' flex -mt-1 items-center ' >
          <p className=' text-[13px] font-semibold ' > {user.accountId}</p>
        </div>
        <div className=' flex -mt-1 items-center ' >
          <p className=' text-[11px] font-semibold text-[#536079] ' >{user.accountDomain}</p> 
        </div>
      </div>
      <p onClick={() => onFollow(user)} className=' text-[12px] ml-auto font-bold text-[#8369F4] cursor-pointer ' >Follow</p>
    </div>
  )

  const renderUsers = (users: User[]) => {
    const shortenedUserList = users.slice(0, 3);
    return shortenedUserList.map((user: User, index) => (
      <Loop user={user} key={index} />
    ))
  }

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <p className="text-sm font-semibold text-white">Suggested For You</p>
        <p onClick={() => props.modal(true)} className="text-xs cursor-pointer font-medium text-muted">View all</p>
      </div>
      {users
        ? renderUsers(users)
        : null}
    </>
  );
};

export default SuggestedFollows; 