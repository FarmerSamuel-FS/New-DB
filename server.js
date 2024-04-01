require("dotenv").config();
const app = require("./app");
const connectDB = require("./app/db/config");

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1); 
    }
};

startServer();
