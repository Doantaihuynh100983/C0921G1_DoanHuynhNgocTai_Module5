package vn.codegym.service;


import org.springframework.data.repository.query.Param;
import vn.codegym.model.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeService {
//    List<Employee> getAllEmployee();
    Employee addNew(Employee employee);
   Optional<Employee>  findById(int id);
    void deleteEmployee(int id);
    List<Employee> searchAllEmployee( String name, String address, String position, String education, String division);
}
