import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import Checkout from "../components/Checkout";

const Check: NextPage = () => {
  return (
    <div>
      <TopBar />
      <Checkout />
    </div>
  );
};

export default Check;
