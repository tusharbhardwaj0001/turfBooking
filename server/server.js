import app from './app.js';
import connectToDB from './configs/dbConnection.js';



const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});