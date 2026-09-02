import app from './app.js';
import envConfig from './config/env.config.js';
import connectDB from './config/db.config.js';

connectDB();

const PORT = envConfig.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});