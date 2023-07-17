import useArrakis from "@/modules/dashboard/hooks/useArrakis";
import { formatUnits } from "ethers";

const VAULT_ADDRESS = "0x3055C602454ddE1BDa3e98B1bCfD2Ed68ab9789E";

export default function Arrakis() {
  const data = useArrakis();

  return (
    <section className="py-8 flex flex-col gap-4">
      <h2 className="font-bold">Arrakis</h2>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
        // <dl className='grid grid-cols-2'>
        //     <dt>Total in Vault</dt>
        //     <dd>???</dd>
        //     <dt>Amount BREAD</dt>
        //     <dd>???</dd>
        //     <dt>Amount DAI</dt>
        //     <dd>???</dd>
        // </dl>
      )}
    </section>
  );
}
