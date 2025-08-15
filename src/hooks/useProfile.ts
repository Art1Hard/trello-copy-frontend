import userService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ["profile"],
		queryFn: () => userService.getProfile(),
	});

	return { data, isLoading, isSuccess };
};
