import { HodlerState } from "../../config/constants/types";
import { loadCoinPrices } from "../../utils";
import Photo from "../Photo";

export const TXTYPES = {
  0: "COINSBOUGHT",
  1: "HOLDINGS",
};

interface TxHistoryProps {
  txType: string;
  hodler: HodlerState;
  coin: any
}

export default function TxHistoryCard(props: TxHistoryProps) {
  const renderCoinName = (coinName: string) => {
    return <span className="uppercase">{coinName + " "}</span>;
  };

  console.log(props.hodler);


  return (
    <div className="w-full flex items-center justify-between text-white mb-10 md:mb-6">
      <div className="flex items-center">
        <div className=" w-fit ">
          <Photo
            alt=""
            userId={props.hodler.user.accountId}
            src={props.hodler.user.photo}
            className="h-12 w-12 rounded-full mr-3"
            style={{ border: "6px solid #141922" }}
          />
        </div>
        {props.txType === TXTYPES[0] ?
          <div>
            <p className="text-xs md:text-sm font-bold text-white mb-0.5">
              ${renderCoinName(props.hodler.coin)}
            </p>
            <p className="flex text-[10px] md:text-xs md:min-w-[200px] font-medium  text-muted">
              {props.hodler.balance ? (
                <>
                  {props.hodler.user.accountId + " "}
                  Owns {props.hodler.balance.balance} $
                  {props.txType === TXTYPES[1] ?
                    <>
                      {renderCoinName(props.coin)}
                    </> :
                    <>
                      {renderCoinName(props.hodler.coin)}
                    </>}
                  {" "} coins
                </>
              ) : (
                ""
              )}
            </p>
          </div>
          :
          <div>
            <p className="text-xs md:text-sm font-bold text-white mb-0.5">
              {props.hodler.user.accountId}
            </p>
            <p className="flex text-[10px] md:text-xs md:min-w-[200px] font-medium  text-muted">
              {props.hodler.balance ? (
                <>
                  Owns {props.hodler.balance.balance} $
                  {props.txType === TXTYPES[1] ?
                    <>
                      {renderCoinName(props.coin)}
                    </> :
                    <>
                      {renderCoinName(props.hodler.coin)}
                    </>}
                  {" "} coins
                </>
              ) : (
                ""
              )}
            </p>
          </div>
        }
      </div>
      {props.txType === TXTYPES[1] ? (
        <div className="flex flex-col items-center">
          <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
            {props.hodler.user.accountType}
          </p>
          <p className="text-[10px] md:text-xs font-medium  text-muted">
            Type of user
          </p>
        </div>
      ) : null}
      <div className="flex flex-col items-end">
        <p className="text-xs md:text-sm font-semibold text-white mb-0.5">
          {props.hodler.balance.balance} LZR
        </p>
        <p className="text-[10px] md:text-xs font-medium  text-muted">
          {props.hodler.balance ? `~$${props.hodler.balance.balanceUSD}` : ""}
        </p>
      </div>
    </div>
  );
} 