import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

export function SingleInput({
  register,
  control,
  type,
  name,
  isRequired,
  error,
}) {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
    
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "This field is required" }}
      render={({ field: { onChange, value, name } }) => (
        <Input
          label={capitalizeFirstLetter(name)}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          color={error ? "danger" : "default"}
          errorMessage={error && error.message}
        />
      )}
    />
  );
}
