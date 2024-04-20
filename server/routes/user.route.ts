import express from "express";
import {
  activateUser,
  registrationUser,
  loginUser,
  // registerForPlacement,
} from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

// userRouter.post("/placement", registerForPlacement);

export default userRouter;
