import { NextFunction, Request, Response } from "express";
import Barang from "../models/barang";
import Satuan from "../models/satuan";

interface Query {
	limit?: number;
	page?: number | undefined;
	sort?: string | undefined;
}

export const getBarang = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { limit, sort, page }: Query = req.query;

		let query: Query = {};

		if (page) {
			query.page = page;
		}

		if (limit) {
			query.limit = limit;
		}

		if (sort) {
			query.sort = sort.toLocaleLowerCase();
		}

		console.log(query);
		const data = await Barang.find()
			.sort({ value: query.sort === "desc" ? -1 : 1, _id: -1 })
			.skip(query?.page === undefined ? 0 : query.page && query.limit ? query.limit * (query.page - 1) : 0)
			.limit(query?.limit === undefined ? 0 : query?.limit)
			.populate("satuanId");

		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

export const getSatuan = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await Satuan.find();
		res.status(200).send(data);
	} catch (error) {
		next(error);
	}
};

interface Barang {
	name: String;
	value: Number;
	satuanId: String;
}

export const createBarang = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const dataBarang: Barang = req.body;
		const data = await Barang.create(dataBarang);
		res.status(200).send(data);
	} catch (error) {
		next(error);
	}
};

export const deleteBarang = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { barangId } = req.body;

		if (!barangId) throw new Error("Id required");

		const data = await Barang.remove({ _id: barangId });
		res.status(200).send(data);
	} catch (error) {
		next(error);
	}
};
