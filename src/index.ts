import mongoose from "mongoose";
import app from "./app";



async function mainEngine() {
  try {
    await mongoose.connect(`db`);

    app.listen(3000, () => {
      console.log(`app is listening on Port`);
    });
  } catch (error) {
    console.log(error);

  }
}


mainEngine()