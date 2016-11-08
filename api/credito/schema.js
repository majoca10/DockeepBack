module.exports = function(mongoose){
	var creditoSchema = mongoose.Schema({
	    nombre			: String,
	    created 		: { type: Date, default: Date.now },
	    metadata 		: Object
	});

	return mongoose.model('credito', creditoSchema, 'credito');
}