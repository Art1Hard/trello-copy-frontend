import { Heading } from "@/components/ui/Heading";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import Statistics from "./Statistics";

export const metadata: Metadata = {
	title: "Dashboard",
	...NO_INDEX_PAGE,
};

export default function Dashboard() {
	return (
		<div>
			<Heading title="Statistics" />
			<Statistics />
		</div>
	);
}
