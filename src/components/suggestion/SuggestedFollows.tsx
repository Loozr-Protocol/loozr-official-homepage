import React from "react";
import { Link } from "react-router-dom";
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

  const onFollow = async (user: User) => {
    await handleFollow(user.id);
    const userIndex = users.indexOf(user);
    if (userIndex > -1) {
      users.splice(userIndex, 1);
    }
  };

  const art = ["two", "two", "two", "two", "two"]

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <p className="text-sm font-semibold text-white">Suggested For You</p>
        <p onClick={()=> props.modal(true)} className="text-xs cursor-pointer font-medium text-muted">View all</p>
      </div>
      {art.map((item: any) => {
        return(

          <div key={item} className="flex justify-between items-center mb-4">
            <div className="flex items-center text-muted">
              <Photo
                alt=""
                className="h-[45px] w-[45px] rounded-full mr-2"
                style={{ border: "5px solid #141922" }}
              />
              <Link to={`/profile`}>
                <p className="text-sm font-semibold text-white name-tag">
                  Nathan Jose
                </p>
                <p className="flex items-center">
                  <span className="text-muted text-[11px] font-medium mr-1 name-tag">
                    $HARTY
                  </span>
                  <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
                  <span className="text-[11px] text-muted font-medium">
                $3,001.99
              </span>
                </p>
              </Link>
            </div>
            <p
              className="text-[11px] font-medium text-loozr-purple"
              // onClick={() => onFollow(user)}
            >
              Follow
            </p>
          </div>
        )
      })}
    </>
  );
};

export default SuggestedFollows;



// {users
//   ? users.map((user, index) => (
//       <div key={index} className="flex justify-between items-center mb-9">
//         <div className="flex items-center text-muted">
//           <Photo
//             alt=""
//             className="h-[45px] w-[45px] rounded-full mr-2"
//             style={{ border: "6px solid #141922" }}
//           />
//           <Link to={`/profile/${user.id}`}>
//             <p className="text-sm font-semibold text-white name-tag">
//               {user.accountId}
//             </p>
//             <p className="flex items-center">
//               <span className="text-muted text-[11px] font-bold mr-1 name-tag">
//                 {user.accountId}.
//                 {MIXER_ACCOUNT}
//               </span>
//               <span className="bg-muted rounded-full h-1 w-1 mr-1" />{" "}
//               {/* <span className="text-[11px] text-muted font-medium">
//             $3,001.99
//           </span> */}
//             </p>
//           </Link>
//         </div>
//         <p
//           className="text-[11px] font-medium text-loozr-purple"
//           onClick={() => onFollow(user)}
//         >
//           Follow
//         </p>
//       </div>
//     ))
//   : null}