import { GithubBtn } from "@/components/auth_btns/GithubBtn";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const login = async () => {
  const session = await auth();
  if (session?.user) redirect("/department");
  return (
    <>
      <GithubBtn />
    </>
  );
};

export default login;
