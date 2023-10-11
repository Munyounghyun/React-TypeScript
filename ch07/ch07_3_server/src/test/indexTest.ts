import * as M from "../mongodb";

const connectDB = async (db: M.MongoDB) => {
  try {
    const user = db.collection("user");
    try {
      await user.drop();
    } catch (e) {}
    const jack = await user.insertOne({ name: "Jack", age: 32 });
    console.log("jack : ", jack);

    const janeAndTom = await user.insertMany([
      { name: "Jane", age: 22 },
      { name: "Tom", age: 11 },
    ]);
    console.log("jane and tom : ", janeAndTom);
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

const insertTest = () => {
  M.connectAndUseDB(connectDB, "mydb");
};

insertTest();
