"use client";
import React, { useContext, useEffect } from "react";
import { authProvider } from "@/app/providers/authProvider";
import { AuthentificationContext } from "@/app/context/AuthentificationContextProvider";
import { useRouter } from "next/router";

export default function IsAuthenticated({ children }) {
  const router = useRouter();
  const { user, setUser } = useContext(AuthentificationContext);

  useEffect(() => {
    const verifyAuthentication = async () => {
      try {
        const user = await authProvider.verifyAuthenticationByToken();
        setUser(user);
      } catch (error) {
        router.push("/login");
      }
    };

    if (!user) {
      verifyAuthentication();
    }
  }, [user, setUser, router]);

  return <>{user ? children : null}</>;
}
