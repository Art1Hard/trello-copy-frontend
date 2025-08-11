import cn from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
	return (
		<button
			className={cn(
				"linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-brand-700 cursor-pointer",
				className
			)}
			{...rest}>
			{children}
		</button>
	);
}
