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

  return coinInfo ? (
    <div className="w-full bg-dark-700 px-3 md:!pl-10 pt-7 pb- mb-[52px] min-h-[260px]">
      <div className="grid grid-cols-1 md:flex">
        <div className="flex-1">
          <p className="font-medium text-sm text-muted mb-2 md:mb-[22px]">
            Coin name
          </p>
          <p className="font-extrabold uppercase text-2xl md:text-3xl text-white mb-6">
            ${user.tokenName}
          </p>
          <div className="flex items-center justify-between mb-6 md:mb-auto">
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                ${coinInfo.priceUSD}
              </p>
              <p className="text-muted text-xs font-medium">Coin price</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                ${coinInfo.marketCap}
              </p>
              <p className="text-muted text-xs font-medium">Market cap</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                {coinInfo.coinHolders}
              </p>
              <p className="text-muted text-xs font-medium">Holders</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-sm md:text-sm text-white text-left mb-1">
                {coinInfo.founderReward / bpsDenominator}%
              </p>
              <p className="text-muted text-xs font-medium">% Reward</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="md:pl-24 flex md:flex-col kitems-center">
            <div>
              <p className="font-medium text-sm text-muted mb-6">
                Coin chart
              </p>
              <p className="mb-1 font-semibold text-sm">87%</p>
              <p className="mb-3.5 font-medium text-sm text-[#15FFAB]">+4.5%</p>
            </div>
            <ResponsiveContainer width={170} height={80}>
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15FFAB" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#15FFAB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />

                <Tooltip />

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