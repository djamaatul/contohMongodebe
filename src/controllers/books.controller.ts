// import { NextFunction, Request, Response } from "express";
// import books from "../models/books";

// interface Books {
// 	title: String;
// 	author: String;
// 	pages: Number;
// 	genres: String[];
// 	rating: Number;
// }

// export async function getBooks(
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ) {
// 	try {
// 		const data: Books[] = await books.find();
// 		// res.status(200).send(data);
// 		throw new Error("NEW ERRROR");
// 	} catch (error) {
// 		next(error);
// 	}
// }
