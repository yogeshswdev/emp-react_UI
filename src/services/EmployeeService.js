import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8076/api/v1/";
class EmployeeService{
    getEMployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService()