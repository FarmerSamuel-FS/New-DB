require("dotenv").config();
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = require("./app");
const connectDB = require("./app/db/config");

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 3000;

        const expressApp = express();

        expressApp.use(cors());

        expressApp.use(app);

        expressApp.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1); 
    }
};

startServer();

