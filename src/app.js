const express =require('express');
const app = express();
const port = process.env.PORT||8000
require("./DBConnection/conn");
const employeeRoute = require("./Routers/employeeRoute");

app.use(express.json())
app.use(employeeRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  