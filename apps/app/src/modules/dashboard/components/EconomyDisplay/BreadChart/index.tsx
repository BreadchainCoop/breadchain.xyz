import { gql, useQuery } from "@apollo/client";
import { formatUnits } from "ethers";
import { useEffect, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Chart from "./Chart";

const TOKEN_WEEKLY_QUERY = gql`
  query TokenWeeklySnapshots($skip: Int, $first: Int) {
    tokenWeeklySnapshots(
      skip: $skip
      first: $first
      orderBy: timestamp
      orderDirection: desc
    ) {
      timestamp
      weeklyTotalSupply
    }
    tokens {
      id
      minted
      burned
      transfers
      supply
    }
  }
`;

export interface IWeeklySnapshot {
  date: string;
  supply: number;
}

function BreadChart() {
  // TODO type api response
  const { loading, data, fetchMore } = useQuery(TOKEN_WEEKLY_QUERY, {
    variables: {
      first: 200,
      skip: 0,
    },
  });

  useEffect(() => {
    if (!data) return;
    fetchMore({
      variables: {
        skip: data.tokenWeeklySnapshots.length,
      },
    });
  }, [data, fetchMore]);

  const chartData: null | IWeeklySnapshot[] = useMemo(() => {
    return data
      ? data.tokenWeeklySnapshots
          .map((day: any) => {
            const date = new Date(day.timestamp * 1000).toDateString();
            const supply = parseInt(formatUnits(day.weeklyTotalSupply, 18));
            return {
              date,
              supply,
            };
          })
          .reverse()
      : null;
  }, [data]);

  return (
    <section className="h-[300px] w-full">
      {loading && <h1>Loading...</h1>}
      {!loading && chartData && <Chart chartData={chartData} />}
    </section>
  );
}

export default BreadChart;
