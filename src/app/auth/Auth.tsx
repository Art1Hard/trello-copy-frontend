"use client";
import { Button } from "@/components/ui/buttons/Button";
import { Field } from "@/components/ui/fields/Field";
import { Heading } from "@/components/ui/Heading";
import useAuth from "./hooks/useAuth";
const Auth = () => {
	const { register, handleSubmit, onSubmit, changeToRegister, changeToLogin } =
		useAuth();

	return (
		<div className="flex min-h-screen">
			<form
				className="w-md m-auto shadow bg-sidebar rounded-xl p-6"
				onSubmit={handleSubmit(onSubmit)}>
				<Heading title="Auth" />
				<Field
					id="email"
					label="Email:"
					placeholder="Enter email:"
					extra="mb-4"
					{...register("email", {
						required: "Email is required!",
					})}
				/>

				<Field
					id="password"
					label="Password:"
					placeholder="Enter password:"
					extra="mb-6"
					type="password"
					{...register("password", {
						required: "Password is required!",
					})}
				/>
				<div className="flex items-center gap-5 justify-center">
					<Button onClick={changeToLogin}>Login</Button>
					<Button onClick={changeToRegister}>Register</Button>
				</div>
			</form>
		</div>
	);
};

export default Auth;
