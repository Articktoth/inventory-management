"use client";

import {
	CheckCircle,
	Package,
	Tag,
	TrendingDown,
	TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchasesSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchasesSummary />
			<CardExpenseSummary />
			<StatCard
				dateRange="22 - 29 October 2024"
				details={[
					{
						title: "Customer Growth",
						amount: "175.00",
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: "Expenses",
						amount: "10.00",
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
				primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
				title="Customer & expenses"
			/>
			<StatCard
				dateRange="22 - 29 October 2024"
				details={[
					{
						title: "Dues",
						amount: "250.00",
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: "Pending Orders",
						amount: "147",
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
				primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
				title="Dues & Pendings Orders"
			/>
			<StatCard
				dateRange="22 - 29 October 2024"
				details={[
					{
						title: "Sales",
						amount: "1000.00",
						changePercentage: 20,
						IconComponent: TrendingUp,
					},
					{
						title: "Discount",
						amount: "200.00",
						changePercentage: -10,
						IconComponent: TrendingDown,
					},
				]}
				primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
				title="Sales & Discount"
			/>
		</div>
	);
};
export default Dashboard;
