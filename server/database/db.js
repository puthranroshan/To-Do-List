const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const USERNAME =process.env.db_username;
const PASSWORD=process.env.db_password;
//username is usertodo and password is mongodb123

const mongoURI=`mongodb+srv://${USERNAME}:${PASSWORD}@todolist.occk7hm.mongodb.net/?retryWrites=true&w=majority`;


async function connectToMongo(){
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}
 module.exports =connectToMongo