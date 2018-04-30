const Employee = require('../../model/Employee');
const Client = require('../../model/Clients');
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

handleEmployeeFetch = (req, res, next) => {
    let page = req.query.page
    let query = {}
    Employee.find(query, (err, employee) => {
        let paginationData = pagination(employee, itemsPerPage, page)
        const employeeData = {
            pageCount: paginationData.pageCount,
            results: paginationData.results,
            totalCount: paginationData.totalCount,
            page: Number(page)
        }
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: employeeData
            });
        }
    });
}

fetchSingleEmployee = (req, res) => {
    let employeeID = req.query.employeeID
    Employee.findOne({employeeID}, (err, employee) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            if (!employee) {
                res.json({
                    success: false,
                    data: "Employee not found"
                });
            } else {
                res.json({
                    success: true,
                    data: employee
                });
            }
           
        }
    })
}

fetchSingleClient = (req, res) => {
    const { clientID } = req.query
    Client.findOne({clientID}, (err, client) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            if (!client) {
                res.json({
                    success: false,
                    data: "Client not found"
                });
            } else {
                res.json({
                    success: true,
                    data: client
                });
            }
           
        }
    })
}

fetchEmployeeByUsername = (req, res) => {
    const { username } = req.query

    Employee.findOne({username}, (err, employees) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            if (!employees) {
                res.json({
                    success: false,
                    data: "Employee not found"
                });
            } else {
                res.json({
                    success: true,
                    data: employees
                });
            }
           
        }
    })
}

module.exports = { 
    fetchSingleClient,
    handleEmployeeFetch, 
    fetchSingleEmployee,
    fetchEmployeeByUsername
}