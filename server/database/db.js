import mongoose from "mongoose";



export const Connection = async (username , password) => {
  
  const URL =  `mongodb+srv://${username}:${password}@ecommerce-web.yeuzzux.mongodb.net/`;
  try {
    await mongoose.connect(URL);
    console.log("database connected");
  } catch (error) {
    console.log("Error while connecting to db", error.message);
  }
};

export default Connection;
