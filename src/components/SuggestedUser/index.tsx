import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../config/constants/models/user";
import { AppState } from "../../state/store";
import { useFollowCallback } from "../../state/user/hooks/follows";
import { getSuggestedUsers } from "../../state/user/userActions";
import { changeSuggestedPage, removeSuggestedUser } from "../../state/user/userReducer";
import Pagination from "../Pagination";
import Photo from "../Photo";

const SuggestUsersTable = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleFollow } = useFollowCallback();

  const onFollow = async (user: User) => {
    dispatch(removeSuggestedUser(user.id));
    await handleFollow(user.id);
  };

  return (
    <div
      onScroll={props.onScroll}
      ref={props.listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {props.dataList
        ? props.dataList.map((user: User, index: number) => (
            <div
              key={index}
              className=" w-full flex justify-between my-2 items-center "
            >
              <Photo
                alt=""
                className="object-contain w-10 h-10 rounded-full "
                style={{ border: "3px solid #141922" }}
              />
              <div
                onClick={() => navigate(`/${user.accountDomain}`)}
                className=" ml-3 "
              >
                <div className=" flex -mt-1 items-center ">
                  <p className=" text-[13px] font-semibold ">
                    {" "}
                    {user.accountId}
                  </p>
                </div>
                <div className=" flex -mt-1 items-center ">
                  <p className=" text-[11px] font-semibold text-[#536079] ">
                    {user.accountDomain}
                  </p>
                </div>
              </div>
              <p
                onClick={() => onFollow(user)}
                className=" text-[12px] ml-auto font-bold text-[#8369F4] cursor-pointer "
              >
                Follow
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default function Index(props: any) {
  const dispatch = useDispatch();
  const users = useSelector(
    (state: AppState) => state.user.suggestedUsers.users
  );
  const pagination = useSelector(
    (state: AppState) => state.user.suggestedUsers.pagination
  );

  return (
    <div className=" w-full px-6 md:py-4 md:h-[60vh] h-full flex flex-1 flex-col overflow-y-auto ">
      <Pagination
        reachMaxLimit={pagination.reachMaxLimit}
        dataList={users}
        prevPage={pagination.prevPage}
        onFetchData={() => dispatch(getSuggestedUsers(pagination.current))}
        currentPage={pagination.current}
        onSetCurrentPage={(page: number) => dispatch(changeSuggestedPage(page))}
      >
        <SuggestUsersTable />
      </Pagination>
    </div>
  );
}
