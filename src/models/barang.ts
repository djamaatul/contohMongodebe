import { Schema, model } from "mongoose";
import satuan from "./satuan";

const Barang = new Schema({
	_id:{
		type:Schema.Types.ObjectId,
		_id:true,
		auto:true
	},
	name:String,
	value:Number,
	satuanId:{
		type:Schema.Types.ObjectId,
		ref:satuan,
	}
},{
	versionKey:false
});


export default model("Barang", Barang,'barang');
