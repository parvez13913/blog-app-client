"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Size = "large" | "small";

interface IInputProps {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  size?: Size;
  value?: string | string[];
  id?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<IInputProps> = ({
  name,
  type = "text",
  size,
  value,
  id,
  placeholder,
  label,
  required,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id || name}
          className="block text-sm font-medium text-gray-700"
        >
          {required && <span className="text-red-500 ml-1 text-2xl">*</span>}
          {label}
        </label>
      )}

      <div className="relative">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              id={id || name}
              type={inputType}
              placeholder={placeholder}
              {...field}
              value={value ?? field.value ?? ""}
              className={`${className ?? ""}`}
            />
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-4 cursor-pointer" />
            ) : (
              <Eye className="size-4 cursor-pointer" />
            )}
          </button>
        )}
      </div>

      {errorMessage && (
        <small className="text-red-500 text-xs">{errorMessage}</small>
      )}
    </div>
  );
};

export default FormInput;
