package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

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

//    @GetMapping("/list")
//    public ResponseEntity<List<Employee>> getAllEmployee(
//    @RequestParam(value = "last_item") int last_item) {
//Pageable  pageable = PageRequest.of(last_item, 5);
//        List<Employee> employeeList = iEmployeeService.getAllEmployee();
//        if (!employeeList.isEmpty()) {
//            return new ResponseEntity<>(employeeList, HttpStatus.OK);
//
//        }
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }


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
    public ResponseEntity<?> delete(@RequestBody Employee employee){
       iEmployeeService.deleteEmployee(employee.getId());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Employee>> searchEmployee(@RequestParam(defaultValue = "") String name,
                                                         @RequestParam(defaultValue = "") String address,
                                                         @RequestParam(defaultValue = "") String position,
                                                         @RequestParam(defaultValue = "") String education,
                                                         @RequestParam(defaultValue = "") String division,
                                                         @RequestParam(value = "last_item") int last_item){
        //d??ng pageRequest truy???n tham s??? cho page
        Pageable  pageable = PageRequest.of(last_item, 5);
        Page<Employee> employeeList = iEmployeeService.searchAllEmployee(name,address,position,education,division,pageable);
        if (employeeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employeeList,HttpStatus.OK);
    }

}
