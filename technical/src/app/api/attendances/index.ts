import { NextApiRequest, NextApiResponse } from 'next';
import { Attendance } from '../../../types/Attendance';
import { sendEmail } from '@/utils/emailService';

let attendances: Attendance[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(attendances);
    } else if (req.method === 'POST') {
        const newAttendance: Attendance = req.body;
        attendances.push({ ...newAttendance, id: attendances.length + 1 });
        // Send email notification
        sendEmail('employee@example.com', 'Attendance Recorded', `Attendance for ${newAttendance.date} recorded.`);
        res.status(201).json(newAttendance);
    }
}
