import React from 'react'
import { useNavigate } from 'react-router-dom';
import Memoji from "../../assets/img/memoji.png";
import { MIXER_ACCOUNT } from "../../config/constants";
import User from "../../config/constants/models/user";
import {
  useFollowCallback,
  usePollSuggestedFollows,
} from "../../state/user/hooks/follows";

export default function Index(props: any) {

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
  
  return (
    <div className=' w-full px-6 md:py-4 md:h-[60vh] h-full flex flex-1 flex-col overflow-y-auto ' > 
      {users
        ? users.map((user, index) => (
            <div key={index} className=' w-full flex justify-between my-2 items-center ' > 
                <div className=' w-10 h-10 rounded-full bg-red-600 border-[3px] border-[#222A3B] ' />
                <div onClick={()=> navigate(`/${user.accountDomain}`)} className=' ml-3 ' >
                    <div className=' flex -mt-1 items-center ' > 
                        <p className=' text-[13px] font-semibold ' > {user.accountId}</p>
                    </div>
                    <div className=' flex -mt-1 items-center ' > 
                        <p className=' text-[11px] font-semibold text-[#536079] ' >{user.accountDomain}</p>
                        <div className=' w-1 h-1 rounded-full bg-[#536079] mx-1 ' />
                        <p className=' text-[11px] font-semibold text-[#536079] ' >$3,001.99</p>
                    </div>
                </div> 
                <p onClick={() => onFollow(user)} className=' text-[12px] ml-auto font-bold text-[#8369F4] cursor-pointer ' >Follow</p>
            </div> 
        ))
        : null} 
    </div>
  )
}
