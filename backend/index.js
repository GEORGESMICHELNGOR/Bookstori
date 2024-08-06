import express from 'express';
import {PORT, mongoDBURL} from "./config.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome To MY WORL");
});

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);

});

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database");
 app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    
    });
    
})
  .catch((error) => {
   console.log(error);
  });