const bcrypt = require('bcryptjs');
const db = require('../dataaccess/db');
const Employee = db.Employee;

module.exports = {
    getAll,
    getById,
    create, 
    update
};


async function getAll() {
    return await Employee.find().select('-hash');
}

async function getById(id) {
    return await Employee.findById(id).select('-hash');
}

async function create(employeParam) {

    const Employee = new Employee(employeParam);
    await Employee.save();
}

async function update(id, EmployeParam) {
    const Employee = await Employee.findById(id);

    
    if (!Employee) throw 'Employee not found';
    
    // copy EmployeParam properties to Employee
    Object.assign(Employee, EmployeParam);

    await Employee.save();
}