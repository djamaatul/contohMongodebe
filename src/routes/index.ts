import { Router } from "express";
// import { getBooks } from "../controllers/books";
import { createBarang, deleteBarang, getBarang, getSatuan } from "../controllers/barang.controller";
const router = Router();

// router.get("/books", getBooks);
router.get("/barang", getBarang);
router.get("/satuan", getSatuan);
router.post("/barang", createBarang);
router.delete("/barang", deleteBarang);

export default router;
