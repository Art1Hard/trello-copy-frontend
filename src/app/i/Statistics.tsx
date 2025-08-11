"use client";
import Loader from "@/components/ui/Loader";
import { useProfile } from "@/hooks/useProfile";
import React from "react";

const Statistics = () => {
	const { data, isLoading } = useProfile();

	if (isLoading) return <Loader />;

	return (
		<div className="grid grid-cols-4 gap-12 mt-7">
			{data?.statistics.length ? (
				data.statistics.map((statistic) => (
					<div
						className="bg-border/50 rounded p-6 text-center transition-transform duration-500"
						key={statistic.label}>
						<div className="text-xl">{statistic.label}</div>
						<div className="text-3xl font-semibold">{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	);
};

export default Statistics;
