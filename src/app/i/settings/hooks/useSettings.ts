import { TypeUserForm } from "@/types/user.types";
import { SubmitHandler, useForm } from "react-hook-form";
import useInitialData from "./useInitialData";
import useUpdateSettings from "./useUpdateSettings";

const useSettings = () => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: "onChange",
	});

	useInitialData(reset);
	const { mutate, isPending } = useUpdateSettings();

	const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
		const { password, ...rest } = data;

		mutate({ ...rest, password: data.password || undefined });
	};

	return { register, handleSubmit, onSubmit, isPending };
};

export default useSettings;
