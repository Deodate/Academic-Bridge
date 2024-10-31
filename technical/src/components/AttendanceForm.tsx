import React, { useState } from 'react';
import { Attendance } from '../types/Attendance';

interface AttendanceFormProps {
    employeeId: number;
    onSubmit: (attendance: Attendance) => void;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({ employeeId, onSubmit }) => {
    const [arrivalTime, setArrivalTime] = useState('');
    const [departureTime, setDepartureTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ employeeId, date: new Date().toISOString().split('T')[0], arrivalTime, departureTime });
        setArrivalTime('');
        setDepartureTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="time" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} required />
            <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
            <button type="submit">Record Attendance</button>
        </form>
    );
};

export default AttendanceForm;
