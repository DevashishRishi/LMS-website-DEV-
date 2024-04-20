require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import ErrorHandeler from "../utils/ErrorHandeler";
import { Jwt, Secret } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/senMail";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { sendToken } from "../utils/jwt";
import userModel, { IUser } from "../models/user_model1";
// Register user
interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export const registrationUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
      return next(new ErrorHandeler("Email already exists", 400));
    }

    // Create user object
    const user: IRegistrationBody = {
      name,
      email,
      password,
    };

    // Generate activation token
    const activationToken = createActivationToken(user);

    // Prepare data for email template
    const data = { user, activationCode: activationToken.activationCode };

    // Render email template
    const html = await ejs.renderFile(
      path.join(__dirname, "../mails/activation-mail.ejs"),
      data
    );

    try {
      // Send activation email
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        template: "activation-mail.ejs",
        data,
      });

      // Return success response
      res.status(201).json({
        success: true,
        message: `Please check your email: ${user.email} to activate your account!`,
        activationToken: activationToken.token,
      });
    } catch (error: any) {
      // Handle email sending error
      return next(new ErrorHandeler(error.message, 400));
    }
  } catch (error: any) {
    // Handle other errors
    return next(new ErrorHandeler(error.message, 400));
  }
};

// Interface for activation token
interface IActivationToken {
  token: string;
  activationCode: string;
}

// Function to create activation token
export const createActivationToken = (user: any): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "5m",
    }
  );

  return { token, activationCode };
};

//activate user
interface IActivationRequest {
  activation_token: string;
  activation_code: string;
}

export const activateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { activation_token, activation_code } =
      req.body as IActivationRequest;

    const newUser: { user: IUser; activationCode: string } = jwt.verify(
      activation_token,
      process.env.ACTIVATION_SECRET as string
    ) as { user: IUser; activationCode: string };

    if (newUser.activationCode !== activation_code) {
      return next(new ErrorHandeler("Invalid activation code", 400));
    }

    const { name, email, password } = newUser.user;

    const existUser = await userModel.findOne({ email });

    if (existUser) {
      return next(new ErrorHandeler("Email already exists", 400));
    }
    const user = await userModel.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      sucess: true,
    });
  } catch (error: any) {
    return next(new ErrorHandeler(error.message, 400));
  }
};

//Login user
interface ILoginRequest {
  email: string;
  password: string;
}

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body as ILoginRequest;

    if (!email || !password) {
      return next(new ErrorHandeler("Please enter email and password", 400));
    }

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandeler("Invalid email or password", 400));
    }

    const userData = user as IUser;

    const isPasswordMatch: boolean = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return next(new ErrorHandeler("Invalid email or password", 400));
    }
    res.status(200).json({
      success: true,
      token: sendToken(userData, 200, res), // Assuming sendToken returns the token
    });
  } catch (error: any) {
    return next(new ErrorHandeler(error.message, 400));
  }
};