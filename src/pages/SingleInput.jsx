import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

export function SingleInput({ control, name, error, patternValue }) {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: "This field is required.",
        },
        pattern: {
          value: new RegExp(`^${patternValue}$`),
          message: "This is not a valid input",
        },
      }}
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
