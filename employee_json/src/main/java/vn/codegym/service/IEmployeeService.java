package vn.codegym.service;


import vn.codegym.model.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeService {
    List<Employee> getAllEmployee();
    Employee addNew(Employee employee);
   Optional<Employee>  findById(int id);
    void deleteEmployee(int id);
}
