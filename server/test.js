import mongoose from "mongoose";

const uri =
  "mongodb://nishantrajwal_db_user:cJpENtUGFAD1Tz3I@ac-vaepwf4-shard-00-00.fs8hbna.mongodb.net:27017,ac-vaepwf4-shard-00-01.fs8hbna.mongodb.net:27017,ac-vaepwf4-shard-00-02.fs8hbna.mongodb.net:27017/?ssl=true&replicaSet=atlas-i6k4x3-shard-0&authSource=admin&appName=Cluster0";

try {
  await mongoose.connect(uri);
  console.log("Connected!");
} catch (err) {
  console.error(err);
}

process.exit();