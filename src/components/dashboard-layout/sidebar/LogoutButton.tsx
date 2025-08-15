"use client";

import { LogOut } from "lucide-react";
import useLogout from "./hooks/useLogout";

const LogoutButton = () => {
	const { mutate } = useLogout();

	return (
		<div className="absolute top-1 right-1">
			<button
				className="opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
				onClick={() => mutate()}>
				<LogOut size={20} />
			</button>
		</div>
	);
};

export default LogoutButton;
