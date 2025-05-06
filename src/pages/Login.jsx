import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth() || {};
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success('Login Sucessfully')  
      loginUser(data);
      navigate("/dashboard");
    },
    onError: () => toast.error("Login failed"),
  });
  const onSubmit = (data) => {
    mutation.mutate({ username: data.username, password: data.password });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Username"
        {...register("username", { required: true })}
        className="w-full mb-2 p-2 border"
      />
      {errors.username && <p className="text-red-500">Username is required</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
        className="w-full mb-4 p-2 border"
      />
      {errors.password && <p className="text-red-500">Password is required</p>}

      <button type="submit" className="w-full bg-blue-500 text-white p-2">
        {mutation.isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
