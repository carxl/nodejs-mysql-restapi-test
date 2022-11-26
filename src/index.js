import app from "./app.js";
import { SY_PORT } from "./config.js";

app.listen(SY_PORT);
console.log(`Server listening ${SY_PORT}`);
