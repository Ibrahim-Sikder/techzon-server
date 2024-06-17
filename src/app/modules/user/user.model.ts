/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from "mongoose";

import { TUser } from "./user.interface";
import { UserStatus } from "./user.constant";
import bcrypt from 'bcrypt'
import config from "../../config";
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

userSchema.post('save',  function (doc, next) {
 doc.password = ''
  next();
});



  export const User = model<TUser>('User',userSchema)