import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

// Route: /api/v1/auth/register (POST)
const register = catchAsync(async (req, res) => {
    const result = await AuthServices.register(req.body);
    sendResponse(res, result);
});

// Route: /api/v1/auth/login (POST)
const login = catchAsync(async (req, res) => {
    const { refreshToken, ...result } = await AuthServices.login(req.body);

    res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 604800000, // 7d
    });

    sendResponse(res, result);
});

// Route: /api/v1/auth/refresh-token (POST)
const refreshToken = catchAsync(async (req, res) => {
    const { refresh_token } = req.cookies;
    const result = await AuthServices.refreshToken(refresh_token);
    sendResponse(res, result);
});

// Route: /api/v1/auth/change-password (PUT)
const changePassword = catchAsync(async (req, res) => {
    const result = await AuthServices.changePassword(req.user._id, req.body);
    sendResponse(res, result);
});

// Route: /api/v1/auth/forget-password (POST)
const forgetPassword = catchAsync(async (req, res) => {
    const result = await AuthServices.forgetPassword(req.body.email);
    sendResponse(res, result);
});

// Route: /api/v1/auth/reset-password (PUT)
const resetPassword = catchAsync(async (req, res) => {
    const result = await AuthServices.resetPassword(req.body);
    sendResponse(res, result);
});

export const AuthControllers = {
    register,
    login,
    refreshToken,
    changePassword,
    forgetPassword,
    resetPassword,
};
