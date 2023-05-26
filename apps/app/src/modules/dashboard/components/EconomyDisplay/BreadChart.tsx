import { gql, useQuery } from '@apollo/client';
import { formatUnits,  } from 'ethers';
import { useEffect, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TOKEN_WEEKLY_QUERY = gql`
  query TokenWeeklySnapshots($skip: Int, $first: Int) {
    tokenWeeklySnapshots(skip: $skip, first: $first, orderBy: timestamp, orderDirection: desc) {
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

function BreadChart() {

    const { loading, data, fetchMore } = useQuery(TOKEN_WEEKLY_QUERY, {
        variables: {
          first: 200,
          skip: 0
        },
      });    
      
      useEffect(() => {
        if (!data) return
        fetchMore({
            variables: {
                skip: data.tokenWeeklySnapshots.length
            },
            })
      }, [data,
         fetchMore,
        ])

    const chartData = useMemo(() => {
        return data ? data.tokenWeeklySnapshots.map((day: any) => {
            const date = new Date(day.timestamp*1000).toDateString()
            const supply = parseInt(formatUnits(day.weeklyTotalSupply, 18) )
            return {
                date,
                supply
            }
        }).reverse() : null
    }, [data])
    

    return (
        <section className='h-[300px]'>
            {loading && <h1>Loading...</h1>}
            {!loading && chartData && (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <Line dot={false} type="natural" dataKey="supply" stroke="#8884d8" />
                        {/* <CartesianGrid stroke="#ccc" /> */}
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </section>
    )
}

export default BreadChart