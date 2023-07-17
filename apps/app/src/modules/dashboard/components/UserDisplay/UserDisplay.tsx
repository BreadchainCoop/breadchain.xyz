import useUserAccount from "@/modules/dashboard/hooks/useUserAccount";
import { useMemo } from "react";

export default function UserDisplay() {
  const { data } = useUserAccount("0x088af5983f222628b417a58859e5d37ecc81e5bb");
  // chart data
  // find timestamp for most recent sunday and
  // const chartData = useMemo(() => {
  //   return data?.balancesSnapshot.reduce((acc: any[], snapshot) => {
  //     let newAcc = [...acc]
  //     // from most recent sunday keep adding week slots
  //     // find correct slot for snapshot and add it
  //     return newAcc
  //   }, [])
  // }, [data])

  return (
    <section className="py-8 flex flex-col gap-4">
      <h2 className="font-bold">User</h2>
      {data && (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          {/* <dl className='grid grid-cols-2'>
            <dt>Current Yield:</dt>
            <dd>{data.currentYield}</dd>
            <dt>% of Pool:</dt>
            <dd>{data.poolPercentage}</dd>
        </dl> */}
        </>
      )}
    </section>
  );
}
