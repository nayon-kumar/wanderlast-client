import { LoginForm } from "@/components/Admin/LoginForm";
import MyContainer from "@/components/Common/MyContainer";
import React from "react";

const page = () => {
  return (
    <MyContainer className="pt-35 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          Login Your Account
        </h3>
        <p className="mt-4 text-[#6C696D] ">
          Resume your adventure with Wanderlust
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 max-w-3xl mx-auto">
        <LoginForm />
      </div>
    </MyContainer>
  );
};

export default page;
