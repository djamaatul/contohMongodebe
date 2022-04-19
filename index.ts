import express, {
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
} from "express";
import db from "./src/config/db";
import mongoose from "mongoose";
import router from "./src/routes";
const port = 5000;
const app = express();

// const db = mongoose.createConnection("mongodb://localhost:27017/bookstore");

// let checking = setInterval(() => {
// 	try {
// 		if (db.readyState === 1) {
// 			console.log("db connected");
// 			clearInterval(checking);
// 		} else if (db.readyState == 2) {
// 			console.log("connecting");
// 		} else {
// 			console.log("not connected");
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }, 1000);

db.then().catch((e) => {
	console.log(e);
});

app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).json({
		status: "healt oke",
		uptime: process.uptime(),
	});
});

app.use("/api/v1/", router);

app.use("*", (req, res) => {
	res.status(404).send({
		message: "route not found",
		code: 0,
	});
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
	res.status(501).send({
		message: error.message,
		// code: error.code,
	});
});

app.listen(port, () => {
	console.log("server oke on port ", port);
});
