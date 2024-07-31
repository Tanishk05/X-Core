"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }: any) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return <>{domLoaded && <SessionProvider>{children}</SessionProvider>}</>;
};

export default SessionWrapper;
