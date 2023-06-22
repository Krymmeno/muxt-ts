import type { NextPage } from "next";
import TopBar from "../components/TopBar";
import React from "react";
import ProfileComp from "../components/ProfileComp";

const Login: NextPage = () => {
  return (
    <div>
      <TopBar />
      <ProfileComp />
    </div>
  );
};

export default Login;
