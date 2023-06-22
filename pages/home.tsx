import type { NextPage } from "next";
import Products from "../components/Products";
import TopBar from "../components/TopBar";

const Login: NextPage = () => {
  return (
    <div>
      <TopBar />
      <Products />
    </div>
  );
};

export default Login;
