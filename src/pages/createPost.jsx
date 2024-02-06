import { useForm } from "react-hook-form";

function App() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <>
        <h1 className="text 3xl font-bold underline">This is a text form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register("name")} placeholder="name"/>
  
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("email", { required: true })} placeholder="email" />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
  
          <input type="submit" />
        </form>
      </>
    );
  }