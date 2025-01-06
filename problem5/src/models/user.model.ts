import { Schema, model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const User = model<IUser>('User', userSchema);
