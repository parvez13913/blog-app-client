/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";

import { useUserRegisterMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import GitHubIcon from "./Icons/GitHubIcon";
import GoogleIconIcon from "./Icons/GoogleIcon";
import { Form } from "./ReusableComponents/Form";
import FormInput from "./ReusableComponents/FormInput";
import FormTextArea from "./ReusableComponents/FormTextArea";

const RegisterForm = () => {
  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await userRegister({
        name: data.name,
        email: data.email,
        password: data.password,
        bio: data.bio,
      }).unwrap();

      if (result?.signup?.userError) {
        toast.error(result.signup.userError);
        return;
      }

      if (result?.signup?.token) {
        localStorage.setItem("token", result?.signup?.token);
        toast.success("Account created successful!");
        router.push("/");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error: any) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Form submitHandler={handleSubmit} className="space-y-5">
      <FormInput
        name="name"
        type="text"
        label="Full Name"
        placeholder="Parvez Rahman"
        required
        className="border border-red-300 py-2 w-full rounded-sm placeholder:text-gray-700 px-5"
      />
      <FormInput
        name="email"
        type="email"
        label="Email address"
        placeholder="parvezz13913@gmail.com"
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

      <FormTextArea
        name="bio"
        label="Bio"
        placeholder="Enter your Bio"
        className="border border-red-300 py-2 w-full rounded-sm placeholder:text-gray-700 px-5"
      />

      <Button
        type="submit"
        className="w-full h-11 text-base cursor-pointer"
        size="lg"
      >
        {isLoading ? "Creating..." : "Create Account"}
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

export default RegisterForm;
