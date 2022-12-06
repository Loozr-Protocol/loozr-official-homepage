import { HodlerState } from "../../config/constants/types";
import Photo from "../Photo";

export const TXTYPES = {
  0: "COINSBOUGHT",
  1: "HOLDINGS",
};

interface TxHistoryProps {
  txType: string;
  hodler: HodlerState;
}

export default function TxHistoryCard(props: TxHistoryProps) {
  const renderCoinName = (coinName: string) => {
    return <span className="uppercase">{coinName}</span>;
  };

  return (
    <div className="w-full flex items-center justify-between text-white mb-10 md:mb-6">
      <div className="flex items-center">
        <div className=" w-fit ">
          <Photo
            alt=""
            userId={props.hodler.user.accountId}
            className="h-12 w-12 rounded-full mr-3"
            style={{ border: "6px solid #141922" }}
          />
        </div>
        <div>
          <p className="text-xs md:text-sm font-bold text-white mb-0.5">
            {props.hodler.user.accountId}
          </p>
          <p className="text-[10px] md:text-xs md:w-[200px] md:font-medium font-light text-muted">
            {props.hodler.balance ? (
              <>
                Owns {props.hodler.balance.balance} $ {props.hodler.user.tokenName+" "}
                {/* {renderCoinName(props.hodler.coin)}  */}
                coins
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      {props.txType === TXTYPES[1] ? (
        <div>
          <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
            {props.hodler.user.accountType}
          </p>
          <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
            Type of user
          </p>
        </div>
      ) : null}
      <div>
        <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
          {props.hodler.balance ? `~$${props.hodler.balance.balanceUSD}` : ""}
        </p>
        <p className="text-[10px] md:text-xs md:font-medium font-light text-muted">
          USD value
        </p>
      </div>
    </div>
  );
}
