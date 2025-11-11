"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  size?: "large" | "small";
  rows?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  className?: string;
};

const FormTextArea = ({
  name,
  size,
  value,
  placeholder,
  label,
  rows = 4,
  className,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col w-full space-y-2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Textarea
            id={name}
            placeholder={placeholder}
            rows={rows}
            {...field}
            value={field.value ?? value ?? ""}
            className={`bg-card border-border focus:border-accent focus:ring-accent/20 ${
              className ?? ""
            } ${size === "large" ? "min-h-[120px]" : "min-h-[80px]"}`}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
