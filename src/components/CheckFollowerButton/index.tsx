import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import User from '../../config/constants/models/user';
import { getIndividualProfile } from "../../state/user/userActions";
import { useFollowCallback, useUnFollowCallback } from '../../state/user/hooks/follows';
import { useCheckFollowerCallback } from '../../state/user/hooks/useAccount';

export default function Index(props: any) { 
    const dispatch = useDispatch();
    const [checkFollower, setCheckFollower] = useState("") 
    const { getCheckFollower } = useCheckFollowerCallback()
    const { handleFollow } = useFollowCallback();
    const { handleUnFollow } = useUnFollowCallback();

    const CheckFollowers =async () => { 
        if(props.otheruser?.id){ 
            const result: any = await getCheckFollower(props.otheruser?.id); 
            setCheckFollower(result) 
            console.log(result); 
        }
    } 

    React.useEffect(() => { 
        CheckFollowers()
    },) 

    const onFollow = async (user: User) => { 
        await handleFollow(user.id);
        dispatch(getIndividualProfile(props.otheruser.accountDomain));
    };
    
    const onUnFollow = async (user: User) => { 
        await handleUnFollow(user.id);
        dispatch(getIndividualProfile(props.otheruser.accountDomain));
    }; 

    return (
        <div> 
            {props.otheruser?.id !== props.user?.id && props.otheruser?.id && (
                <>
                  {!checkFollower ? ( 
                    <button
                      onClick={() => onFollow(props.otheruser)}
                      className="py-[14.1px] px-3 w-40 sm:px-6 md:px-7 text-xs md:text-sm font-medium bg-dark-700 rounded-full mb-4 my-2"
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => onUnFollow(props.otheruser)}
                      className="py-[14.1px] px-3 w-40 sm:px-6 md:px-7 text-xs md:text-sm font-medium bg-dark-700 rounded-full mb-4 my-2"
                    >
                      UnFollow
                    </button>
                  )}
                </>
              )}
        </div>
    )
} 