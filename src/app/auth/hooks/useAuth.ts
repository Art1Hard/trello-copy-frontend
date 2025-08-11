import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import authService from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const useAuth = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: "onChange",
	});

	const [isLogin, setIsLogin] = useState(false);

	const changeToRegister = () => setIsLogin(false);
	const changeToLogin = () => setIsLogin(true);

	const { replace } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ["auth"],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLogin ? "login" : "register", data),
		onSuccess() {
			toast.success("Successfully login!");
			reset();
			replace(DASHBOARD_PAGES.HOME);
		},
	});

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		mutate(data);
	};
	return { register, handleSubmit, onSubmit, changeToRegister, changeToLogin };
};

export default useAuth;
