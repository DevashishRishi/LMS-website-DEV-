require("dotenv").config();
import { Response } from "express";
import { IUser } from "../models/user_model1";
import { redis } from "./redis";

interface ITokenOption {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure?: boolean;
}

export const sendToken = (user: IUser, statusCode: number, res: Response) => {
  const accessToken = user.SignAccessToken();
  const refreshToken = user.SignRefreshToken();

  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET) {
    throw new Error(
      "Missing environment variables: ACCESS_TOKEN_SECRET or REFRESH_TOKEN_SECRET"
    );
  }

  //upload session to redis
  redis.set(user._id, JSON.stringify(user) as any);

  //parse enviroment variables to integrate with fallback values
  const accessTokenExpire = parseInt(
    process.env.ACCESS_TOKEN_EXPIRE || "300",
    10
  );
  const refreshTokenExpire = parseInt(
    process.env.REFRESH_TOKEN_EXPIRE || "1200",
    10
  );

  //OPTIONS FOR COOKIES
  const accessTokenOptions: ITokenOption = {
    expires: new Date(Date.now() + accessTokenExpire * 1000),
    maxAge: refreshTokenExpire * 1000,
    httpOnly: true,
    sameSite: "lax",
  };

  //only set secure to true in production
  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true;
  }

  const refreshTokenOptions: ITokenOption = {
    expires: new Date(Date.now() + refreshTokenExpire * 1000),
    maxAge: refreshTokenExpire * 1000,
    httpOnly: true,
    sameSite: "lax",
  };

  //only set secure to true in production
  if (process.env.NODE_ENV === "production") {
    refreshTokenOptions.secure = true;
  }

  res.cookie("access_token", accessToken, accessTokenOptions);
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);

  res.status(statusCode).json({
    sucess: true,
    user,
    accessToken,
  });
};
