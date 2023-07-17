import {
  Area,
  ComposedChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IWeeklySnapshot } from ".";

export default function Chart({ chartData }: { chartData: IWeeklySnapshot[] }) {
  console.log({ chartData });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={chartData}>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#E429A6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A416AD" stopOpacity={1} />
            <stop offset="95%" stopColor="#FF99E2" stopOpacity={0.6} />
          </linearGradient>
        </defs>
        {/* <Line dot={false} type="natural" dataKey="supply" stroke="#8884d8" /> */}
        <Area
          type="monotone"
          dataKey="supply"
          strokeWidth={4}
          fillOpacity={1}
          stroke="url(#lineGrad)"
          fill="url(#areaGrad)"
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        {/* <XAxis dataKey="date" /> */}
        {/* <YAxis /> */}
        <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
