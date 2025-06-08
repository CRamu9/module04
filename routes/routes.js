import express from 'express'
import {getallEmployees, getEmployee, createEmployee,updateEmployee, deleteEmployee} from '../controllers/employees.js'
const router = express.Router()

router.route('/api/employees')

    .get(getallEmployees)
    .post(createEmployee)
    
router.route('/api/employees/:id')
//    .get(getEmployee)
//    .patch(updateEmployee)
.delete(deleteEmployee)

export default router