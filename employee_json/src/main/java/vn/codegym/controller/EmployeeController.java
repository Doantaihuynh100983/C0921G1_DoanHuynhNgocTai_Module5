package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.codegym.model.Division;
import vn.codegym.model.Education;
import vn.codegym.model.Employee;
import vn.codegym.model.Position;
import vn.codegym.service.IDivisionService;
import vn.codegym.service.IEducdtionService;
import vn.codegym.service.IEmployeeService;
import vn.codegym.service.IPositionService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private IEmployeeService iEmployeeService;
    @Autowired
    private IPositionService iPositionService;
    @Autowired
    private IEducdtionService iEducdtionService;
    @Autowired
    private IDivisionService iDivisionService;

    @GetMapping("/list")
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> employeeList = iEmployeeService.getAllEmployee();
        if (!employeeList.isEmpty()) {
            return new ResponseEntity<>(employeeList, HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/position")
    public ResponseEntity<List<Position>> getAllPosition() {
        List<Position> positionList = iPositionService.getAllPosition();
        if (!positionList.isEmpty()) {
            return new ResponseEntity<>(positionList, HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/education")
    public ResponseEntity<List<Education>> getAllEducation() {
        List<Education> educationList = iEducdtionService.getAllEducation();
        if (!educationList.isEmpty()) {
            return new ResponseEntity<>(educationList, HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/division")
    public ResponseEntity<List<Division>> getAllDivision() {
        List<Division> divisionList = iDivisionService.getAllDivision();
        if (!divisionList.isEmpty()) {
            return new ResponseEntity<>(divisionList, HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
        

    @PostMapping("/add")
    public ResponseEntity<Employee> addNew(@RequestBody Employee employee) {
        return new ResponseEntity<>(iEmployeeService.addNew(employee), HttpStatus.CREATED);
    }




    @GetMapping("/detail/{id}")
    public ResponseEntity<Employee> findById(@PathVariable Integer id){
           Optional<Employee> employee = iEmployeeService.findById(id);
           if (employee.isPresent()){
                    return new ResponseEntity<>(employee.get(),HttpStatus.OK);
           }
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> edit(@PathVariable Integer id,@RequestBody Employee employee){
            Optional<Employee> employeeOptional = iEmployeeService.findById(id);
            if (!employeeOptional.isPresent()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        employee.setId(employeeOptional.get().getId());
        return new ResponseEntity<>(iEmployeeService.addNew(employee), HttpStatus.OK);

    }

    @PutMapping("delete")
    public ResponseEntity<?> delete(@RequestParam Integer id){
       iEmployeeService.deleteEmployee(id);
       return ResponseEntity.ok("");
    }

}
