import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import User from '../../config/constants/models/user';
import { useFollowCallback, useUnFollowCallback } from '../../state/user/hooks/follows';
import { useCheckFollowerCallback } from '../../state/user/hooks/useAccount';
import { removeSuggestedUser } from '../../state/user/userReducer';

export default function Index(props: any) { 

    const { getCheckFollower } = useCheckFollowerCallback()
    const { handleFollow } = useFollowCallback();
    const { handleUnFollow } = useUnFollowCallback();
    const [checkFollower, setCheckFollower] = useState("")

    const CheckFollowers =async () => { 
        if(props.otheruser?.id){ 
          const result: any = await getCheckFollower(props.otheruser?.id); 
          setCheckFollower(result) 
          console.log(result); 
        }
    }

    React.useEffect(() => { 
        CheckFollowers()
    },[]) 
     
    const onFollow = async (user: User) => { 
        await handleFollow(user.id);
        CheckFollowers()
    };
    
    const onUnFollow = async (user: User) => {  
        await handleUnFollow(user.id); 
        CheckFollowers()
    };


    return ( 
        <div className=" text-[11px] ml-auto relative z-[100] " >      
            {props.current?.id === props.user?.id && (
                <>
                    {!checkFollower && ( 
                        <button
                            onClick={() => onFollow(props.otheruser)}
                            className="py-[8px] px-3 sm:px-6 md:px-4 font-medium bg-dark-700 rounded-full "
                        >
                            Follow
                        </button>
                    )}
                    {checkFollower &&  (
                        <button
                            onClick={() => onUnFollow(props.otheruser)}
                            className="py-[8px] px-3 sm:px-6 md:px-4 font-medium bg-dark-700 rounded-full "
                        >
                            UnFollow
                        </button>
                    )}
                </>
            )}
        </div>
    )
}  

