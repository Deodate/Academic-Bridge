import React from 'react';
import { Attendance } from '../types/Attendance';

interface AttendanceReportProps {
    records: Attendance[];
}

const AttendanceReport: React.FC<AttendanceReportProps> = ({ records }) => {
    return (
        <div>
            <h3>Attendance Report</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record => (
                        <tr key={record.id}>
                            <td>{record.date}</td>
                            <td>{record.arrivalTime}</td>
                            <td>{record.departureTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceReport;
