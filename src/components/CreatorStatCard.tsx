import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import User from "../config/constants/models/user";
import { getCoinPrice } from "../state/artist/actions";
import { AppState } from "../state/store";

const data = [
  { name: "May", uv: 70000 },
  { name: "May", uv: 70000 },
  { name: "May", uv: 70000 },
  { name: "Feb", uv: 63000 },
  { name: "Jan", uv: 27000 },
  { name: "Mar", uv: 40000 },
  { name: "Apr", uv: 10000 },
  { name: "Jun", uv: 43000 },
  { name: "Dec", uv: 32000 },
];



export default function CreatorStatCard({ user }: { user: User }) {
  const dispatch = useDispatch();
  const bpsDenominator = 100;
  const coinInfo = useSelector((state: AppState) => state.artist.coinInfo);

  useEffect(() => {
    dispatch(getCoinPrice(user.id));
  }, [user])

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </div>
      );
    }

    return null;
  };

  return coinInfo ? (
    <div style={{ background: "linear-gradient(180deg, #12161F 0%, rgba(18, 22, 31, 0) 100%)" }}  className="w-full px-3 md:!pl-10 rounded-t-[14px] pt-7 min-h-[210px]">
      <div className="grid grid-cols-1 md:flex">
        <div className="flex-1">
          <p className="font-medium text-xs text-muted mb-2 md:mb-[22px]">
           Artist Coin name
          </p>
          <p className="font-extrabold uppercase text-[22px] md:text-3xl text-white mb-6">
            ${user.tokenName}
          </p>
          <div className="flex items-center justify-between mb-6 md:mb-auto">
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mt-[15px] mb-0">
                ${coinInfo.priceUSD} 
              </p>
              <p className="text-muted text-xs font-medium">Coin price</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mt-[15px] mb-0">
                ${coinInfo.marketCap}
              </p>
              <p className="text-muted text-xs font-medium">Market cap</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mt-[15px] mb-0">
                {coinInfo.coinHolders}
              </p>
              <p className="text-muted text-xs font-medium">Holders</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mt-[15px] mb-0">
                {coinInfo.founderReward / bpsDenominator}%
              </p>
              <p className="text-muted text-xs font-medium">% Reward</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="md:pl-24 flex md:flex-col items-center">
            <div>
              <p className="font-medium text-xs text-muted mb-6">
              Artist Coin chart
              </p>
              <p className="mb-1 font-semibold text-[13px]">87%</p>
              <p className="mb-2 font-medium text-[13px] text-[#15FFAB]">+4.5%</p>
            </div>
            <ResponsiveContainer className="pl-2" width={170} height={80}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15FFAB" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#15FFAB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
                <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#15FFAB"
                  // fill="#15FFAB"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
