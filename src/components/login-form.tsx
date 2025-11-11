/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { useUserLoginMutation } from "@/redux/api/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import GitHubIcon from "./Icons/GitHubIcon";
import GoogleIconIcon from "./Icons/GoogleIcon";
import { Form } from "./ReusableComponents/Form";
import FormInput from "./ReusableComponents/FormInput";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await userLogin({
        email: data.email,
        password: data.password,
      }).unwrap();

      if (result?.signin?.userError) {
        toast.error(result.signin.userError);
        return;
      }

      if (result?.signin?.token) {
        localStorage.setItem("token", result?.signin?.token);
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error: any) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <Form submitHandler={handleSubmit} className="space-y-5">
      <FormInput
        name="email"
        type="email"
        label="Email address"
        placeholder="you@example.com"
        required
        className="border border-red-300 py-2 w-full rounded-sm placeholder:text-gray-700 px-5"
      />

      <FormInput
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        required
        className="border border-red-300 py-2 w-full rounded-sm placeholder:text-gray-700 px-5"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked: boolean) =>
              setRememberMe(checked as boolean)
            }
          />
          <Label
            htmlFor="remember"
            className="text-sm text-muted-foreground cursor-pointer font-normal"
          >
            Remember me
          </Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full h-11 text-base cursor-pointer"
        size="lg"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* ✅ Social Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          type="button"
          className="h-11 bg-transparent cursor-pointer"
        >
          <GoogleIconIcon />
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          className="h-11 bg-transparent cursor-pointer"
        >
          <GitHubIcon />
          GitHub
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
