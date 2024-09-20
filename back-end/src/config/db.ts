import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  try {
    const con = await mongoose.connect(uri);

    console.log("Datebase connected", con.connection.host);
  } catch (error) {
    console.log("Database cannot be connected");
  }
};
