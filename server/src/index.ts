import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from "cors";
import groupRoutes from "./routes";
import mongoose from 'mongoose';
import {swagger} from "../swagger";

const app = express();
const PORT: string | number = process.env.PORT || 4000;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(groupRoutes);

// app.use(urlencodedParser)
// const uri:string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@bill-split.fls9cod.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=bill-split`
const uri:string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@bill-split.fls9cod.mongodb.net/${process.env.MONGO_DB}?`

// const uri: string = `mongodb+srv://:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)

swagger(app)

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });