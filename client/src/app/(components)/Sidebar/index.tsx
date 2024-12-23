"use client";
import { setIsSidebardCollapsed } from "@/app/state";
import { useAppSelector } from "@/redux";
import {
	Archive,
	CircleDollarSign,
	Clipboard,
	Layout,
	LucideIcon,
	Menu,
	SlidersHorizontal,
	User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	label: string;
	isCollapsed: boolean;
}

const SidebarLink = ({
	href,
	icon: Icon,
	label,
	isCollapsed,
}: SidebarLinkProps) => {
	const pathName = usePathname();
	const isActive =
		pathName === href || (pathName === "/" && href === "/dasboard");
	return (
		<Link href={href}>
			<div
				className={`cursor-pointer flex items-center ${
					isCollapsed
						? "justify-center py-4"
						: "justify-start px-8 py-4"
				} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
					isActive ? "bg-blue-200 text-white" : ""
				}`}
			>
				<Icon className="w-6 h-6 !text-gray-700" />
				<span
					className={`${
						isCollapsed ? "hidden" : "block"
					} font-medium text-gray-700`}
				>
					{label}
				</span>
			</div>
		</Link>
	);
};

const Sidebar = () => {
	const dispatch = useDispatch();
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed
	);

	const toggleSideBard = () => {
		dispatch(setIsSidebardCollapsed(!isSidebarCollapsed));
	};

	const sideBardClassnames = `fixed flex flex-col ${
		isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
	} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

	return (
		<div className={sideBardClassnames}>
			<div
				className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
					isSidebarCollapsed ? "px-5" : "px-8"
				}`}
			>
				<div>Logo</div>
				<h1
					className={` ${
						isSidebarCollapsed ? "hiden" : "block"
					} font-extrabold text-2xl`}
				>
					ORI
				</h1>
				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={toggleSideBard}
				>
					<Menu className="w-4 h-4" />
				</button>
			</div>
			<div className="flex-grow mt-8">
				<SidebarLink
					href="/dashboard"
					icon={Layout}
					label="Dashboard"
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/inventory"
					icon={Archive}
					label="Invetory"
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/products"
					icon={Clipboard}
					label="Products"
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/users"
					icon={User}
					label="Users"
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/settings"
					icon={SlidersHorizontal}
					label="Settings"
					isCollapsed={isSidebarCollapsed}
				/>
				<SidebarLink
					href="/expenses"
					icon={CircleDollarSign}
					label="Expenses"
					isCollapsed={isSidebarCollapsed}
				/>
			</div>

			<div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
				<p className="text-center text-xs text-gray-500">&copy; 2024</p>
			</div>
		</div>
	);
};
export default Sidebar;