import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (req: Request, res: Response) => {
	try {
		const expensesByCategory = await prisma.expenseByCategory.findMany({
			orderBy: {
				date: "desc",
			},
		});

		const expensesByCategorySumary = expensesByCategory.map((item) => ({
			...item,
			amount: item.amount.toString(),
		}));
		res.status(200).json(expensesByCategorySumary);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Error retrieving expenses by category",
		});
	}
};
