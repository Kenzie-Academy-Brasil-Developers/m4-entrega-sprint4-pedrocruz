import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { handleError } from "./errors/handle.error";
import { sessionRoutes } from "./routes/session.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);

app.use(handleError);

export default app;
