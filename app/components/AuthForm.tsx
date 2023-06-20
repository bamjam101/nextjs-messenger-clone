"use client";

import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type Variant = "Login" | "Register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("Login");
  const [isLoading, setIsLoading] = useState(false);

  // Variant toggler function to switch between Registeration mode and Sign In mode.
  // Note: useCallback is used to prevent a component from re-rendering unless its props have changed.
  const toggleVariant = useCallback(() => {
    if (variant === "Login") {
      setVariant("Register");
    } else {
      setVariant("Login");
    }
  }, [variant]);

  // Use case for react-hook-form which bundles the onSubmit function with handleSubmit (exposed by reack-hook-form) and drills data (that it stores based on state changes) into onSubmit function (custom function).
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Custom submit function:
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (variant === "Register") {
      // axios call to register route
      axios
        .post("/api/register", data)
        .catch((error) => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "Login") {
      // NextAuth sign in
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged In!");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  // Unknown right now, prolly allows for sign up using social media authentication.
  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials!");
        }

        if (callback?.ok) {
          toast.success("Logged In!");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="mt-8  sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {variant === "Register" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            label="Email"
            id="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div className="grid place-items-center mt-6">
            <Button type="submit" fullWidth={true}>
              {variant === "Login" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex gap-1 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "Login"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div
            className="underline cursor-pointer hover:text-gray-900"
            onClick={toggleVariant}
          >
            {variant === "Login" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
