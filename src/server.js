require ("./db/connection")
const express = require("express");  
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(movieRouter);
//app.use("/static", express.static("public"));

app.listen (port, () =>{
    console.log(`listening on port ${port}`);
});

