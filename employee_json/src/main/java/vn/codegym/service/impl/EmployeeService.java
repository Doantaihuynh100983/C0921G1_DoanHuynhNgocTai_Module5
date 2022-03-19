package vn.codegym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.codegym.model.Employee;
import vn.codegym.repository.employee.IEmployeeRepository;
import vn.codegym.service.IEmployeeService;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository iEmployeeRepository;
//    @Override
//    public List<Employee> getAllEmployee() {
//        return iEmployeeRepository.getAllEmployee();
//    }

    @Override
    public Employee addNew(Employee employee) {
        return iEmployeeRepository.save(employee);
    }

    @Override
    public Optional<Employee> findById(int id) {
        return iEmployeeRepository.findById(id);
    }

    @Override
    public void deleteEmployee(int id) {
        iEmployeeRepository.deleteById(id);
    }

    @Override
    public Page<Employee> searchAllEmployee(String name,
                                            String address,
                                            String position,
                                            String education,
                                            String division,
                                            Pageable pageable) {

        return iEmployeeRepository.searchAllEmployee(name, address, position, education, division, pageable);
    }


}
