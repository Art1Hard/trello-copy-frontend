"use client";
import Loader from "@/components/ui/Loader";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const GlobalLoader = () => {
	const isMutating = useIsMutating();
	const isFetching = useIsFetching();

	return isFetching || isMutating ? (
		<div className="fixed top-8 right-8 z-50">
			<Loader />
		</div>
	) : null;
};

export default GlobalLoader;
