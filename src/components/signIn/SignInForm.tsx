import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useLogin } from "@/service/auth/useLogin";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [email, setEmail] = useState("john@mail.com");
  const [password, setPassword] = useState("changeme");
  const login = useLogin(email, password);
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col items-center justify-center w-full h-screen gap-y-5"
    >
      <h1 className="md:text-3xl">로그인</h1>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">email</Label>
        <Input
          className="text-black border-black"
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="text-black border-black"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>

      <Button className="w-1/5 text-sm">로그인</Button>
      <Button className="w-1/5 text-sm" type="button">
        Sign Up
      </Button>
    </form>
  );
}
