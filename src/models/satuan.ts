import { Schema, model } from "mongoose";

const Satuan = new Schema({
	_id:{
		type:Schema.Types.ObjectId,
		_id:true,
		auto:true
	},
	name:String,
});


export default model("Satuan", Satuan,'satuan');
