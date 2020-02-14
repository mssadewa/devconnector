const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try{
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	}catch(err){
		console.log(err.message);
		// When failure exit with code 1
		process.exit(1);
	}
}

module.exports = connectDB;