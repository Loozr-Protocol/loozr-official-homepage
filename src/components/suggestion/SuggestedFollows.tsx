import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../config/constants/models/user";
import { AppState } from "../../state/store";
import {
  useFollowCallback,
} from "../../state/user/hooks/follows";
import { getSuggestedUsers } from "../../state/user/userActions";
import { removeSuggestedUser } from "../../state/user/userReducer";
import Photo from "../Photo";

const SuggestedFollows = (props: any) => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.user.suggestedUsers.users);
  const { handleFollow } = useFollowCallback();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getSuggestedUsers(''));
  }, []);

  const onFollow = async (user: User) => {
    dispatch(removeSuggestedUser(user.id));
    await handleFollow(user.id);
  }; 

  const SuggestedUserTable = ({ user }: { user: User }) => (
    <div className=' w-full flex justify-between my-2 items-center ' >

      <Photo
        alt=""
        className="object-contain flex justify-center items-center w-10 h-10 rounded-full "
        style={{ border: "3px solid #141922" }}
      />
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
      <SuggestedUserTable user={user} key={index} />
    ));
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