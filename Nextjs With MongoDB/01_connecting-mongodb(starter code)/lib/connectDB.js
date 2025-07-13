import mongoose from 'mongoose'

const DB_URL = "mongodb+srv://root:root@cluster0.klfbmop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const connectDB = async () => {
    try {
        if(mongoose.connection.readyState === 1) {
            console.log('Already Connected');
            return;
        }
        await mongoose.connect(DB_URL, {
            dbName: 'todoApp'
        })
        console.log('Database Connected!');
    } catch (error) {
        console.log(error)
        console.log('Database not connected!');
        process.exit(1);
    }
}



