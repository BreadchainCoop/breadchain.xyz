import EconomyDisplay from "@/modules/dashboard/components/EconomyDisplay";
import UserDisplay from "@/modules/dashboard/components/UserDisplay";
import Layout from "@/modules/core/components/Layout";

export default function Home() {
  return (
    <Layout>
      <EconomyDisplay />
      {/* <UserDisplay /> */}
    </Layout>
  );
}
