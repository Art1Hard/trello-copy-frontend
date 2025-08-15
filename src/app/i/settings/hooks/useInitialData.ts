import { useProfile } from "@/hooks/useProfile";
import { TypeUserForm } from "@/types/user.types";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

const useInitialData = (reset: UseFormReset<TypeUserForm>) => {
	const { data, isSuccess } = useProfile();

	useEffect(() => {
		if (!data || !isSuccess) return;

		reset({
			email: data.user.email,
			name: data.user.name,
			breakInterval: data.user.breakInterval,
			intervalsCount: data.user.intervalsCount,
			workInterval: data.user.workInterval,
		});
	}, [isSuccess]);
};

export default useInitialData;
