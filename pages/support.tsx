import type { NextPage } from "next";
import Products from "../components/Products";
import TopBar from "../components/TopBar";
import ContactForm from "../components/ContactForm";

const Login: NextPage = () => {
  return (
    <div>
      <TopBar />
      <ContactForm />
    </div>
  );
};

export default Login;
