import React, { useEffect, useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';
import AttendanceForm from '../components/AttendanceForm';
import AttendanceReport from '../components/AttendanceReport';
// import { Employee } from './types/Employee';
import { Attendance } from '../types/Attendance';
import axios from 'axios';

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [attendances, setAttendances] = useState<Attendance[]>([]);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        fetchEmployees();
        fetchAttendances();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get<Employee[]>('/api/employees');
        setEmployees(response.data);
    };

    const fetchAttendances = async () => {
        const response = await axios.get<Attendance[]>('/api/attendances');
        setAttendances(response.data);
    };

    const handleAddOrUpdateEmployee = async (employee: Employee) => {
        if (editingEmployee) {
            await axios.put(`/api/employees/${editingEmployee.id}`, employee);
        } else {
            await axios.post('/api/employees', employee);
        }
        setEditingEmployee(null);
        fetchEmployees();
    };

    const handleAttendanceSubmit = async (attendance: Attendance) => {
        await axios.post('/api/attendances', attendance);
        fetchAttendances();
    };

    const handleEdit = (employee: Employee) => {
        setEditingEmployee(employee);
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeForm onSubmit={handleAddOrUpdateEmployee} existingEmployee={editingEmployee} />
            <EmployeeList employees={employees} onEdit={handleEdit} />
            <h2>Record Attendance</h2>
            {employees.map(employee => (
                <AttendanceForm key={employee.id} employeeId={employee.id!} onSubmit={handleAttendanceSubmit} />
            ))}
            <AttendanceReport records={attendances} />
        </div>
    );
};

export default Employees;
