import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

export function SingleInput({ register, type, name, isRequired, error }) {
  return (
    <>
      <label>{name}</label>
      <input
        type={type}
        placeholder={name}
        {...register(name, {
          required: {
            value: isRequired,
            message: "This is a required field",
          },
        })}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
}
