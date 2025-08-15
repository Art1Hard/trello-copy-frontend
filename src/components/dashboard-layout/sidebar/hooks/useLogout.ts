import authService from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLogout = () => {
	const { replace } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authService.logout(),
		onSuccess: () => replace("/auth"),
	});

	return { mutate };
};

export default useLogout;
