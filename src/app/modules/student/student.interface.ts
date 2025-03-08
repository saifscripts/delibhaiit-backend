import mongoose from 'mongoose';

export interface IStudent {
    _id: mongoose.Types.ObjectId;
    certificateId: string;
    name: string;
    // email: string;
    // phone: string;
    // course: string;
    startDate: Date;
    completionDate: Date;
    // profileImage?: string; // Optional profile picture URL
    // skills: string[]; // List of skills
    // projects: Project[]; // List of projects
    // qrCode?: string; // Optional QR Code URL
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}
