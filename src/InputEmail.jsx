export function InputEmail() {
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        {...register("email", {
          required: {
            value: true,
            message: "This is a required field",
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "This is not a valid email",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
    </div>
  );
}
