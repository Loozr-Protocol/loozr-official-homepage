import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../config/constants/models/user";
import { getHodlers, getHodlersBalance } from "../../state/artist/actions";
import Arlene from "../../assets/img/artists/arlene.png";
import { AppState } from "../../state/store";

export default function CoinHodlers({ user }: { user: User }) {
  const dispatch = useDispatch();
  const holders = useSelector((state: AppState) => state.artist.holders);

  useEffect(() => {
    dispatch(getHodlers(user.id));
  }, [user]);

  useEffect(() => {
    holders.map((_) => {
      dispatch(getHodlersBalance({ id: user.id, accountId: _.user.accountDomain }));
    });
  }, [holders]);

  return (
    <>
      {holders.map((hodler, index) => (
        <div
          className="w-full flex items-center justify-between text-white mb-6"
          key={index}
        >
          <div className="flex items-center">
            <img
              src={Arlene}
              alt=""
              className="h-12 w-12 rounded-full mr-3"
              style={{ border: "6px solid #141922" }}
            />
            <div>
              <p className="text-xs md:text-sm font-bold text-white mb-0.5">
                {hodler.user.accountId}
              </p>
              <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
                {hodler.balance ? `Owns ${hodler.balance.balance} LZR of
                your artiste token` : ""}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
              {hodler.user.accountType}
            </p>
            <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
              Type of user
            </p>
          </div>
          <div>
            <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
              {hodler.balance ? `~$${hodler.balance.balanceUSD}` : ""}
            </p>
            <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
              USD value
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
