import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import { USER_STATUS } from '../modules/user/user.constant';
import { IUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';

const auth = (...authorizedRoles: IUserRole[]): RequestHandler => {
    return catchAsync(async (req, _res, next) => {
        const token = req.cookies?.auth_token;

        if (!token) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                'You are not authorized!',
            );
        }

        const decoded = jwt.verify(
            token,
            config.jwt_access_secret as string,
        ) as JwtPayload;

        const { _id } = decoded;

        const user = await User.findById(_id);

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
        }

        if (user.isDeleted) {
            throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
        }

        if (user.status === USER_STATUS.BLOCKED) {
            throw new AppError(httpStatus.BAD_REQUEST, 'User is blocked!');
        }

        if (authorizedRoles && !authorizedRoles.includes(user.role)) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                'You are not authorized!',
            );
        }

        req.user = user;
        next();
    });
};

export default auth;
