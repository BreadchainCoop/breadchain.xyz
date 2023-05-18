import EconomyDisplay from "@/components/EconomyDisplay";
import Layout from "@/components/layout";
import UserDisplay from "../components/UserDisplay";

export default function Home() {
  return (
    <Layout>
      <EconomyDisplay />
      <UserDisplay />
    </Layout>
  );
}
