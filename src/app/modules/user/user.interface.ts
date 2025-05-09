import mongoose, { Model } from 'mongoose';
import { UserRoles, UserStatus } from './user.constant';

export type IUserRole = (typeof UserRoles)[number];
export type IUserStatus = (typeof UserStatus)[number];

export type ISubscription = {
    startDate: Date;
    endDate: Date;
};

export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password?: string;
    phone: string;
    avatarURL?: string;
    role: IUserRole;
    status: IUserStatus;
    isDeleted: boolean;
}

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface UserModel extends Model<IUser> {
    comparePassword(plain: string, hashed: string): Promise<boolean>;
}
