import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Call backend API to register user
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      {errors.name && <span>Name is required</span>}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}

      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Password"
      />
      {errors.password && <span>Password is required</span>}

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
