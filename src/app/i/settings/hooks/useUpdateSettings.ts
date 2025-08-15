import userService from "@/services/user.service";
import { TypeUserForm } from "@/types/user.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useUpdateSettings = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ["update profile"],
		mutationFn: (data: TypeUserForm) => userService.update(data),
		onSuccess() {
			toast.success("Successfully update profile!");
			queryClient.invalidateQueries({ queryKey: ["profile"] });
		},
	});

	return { mutate, isPending };
};

export default useUpdateSettings;
