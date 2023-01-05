import moongose from "mongoose";

moongose
  .connect("mongodb://localhost/companydb")
  .then((db) => console.log("DB is conected"))
  .catch((error) => console.log(error));
