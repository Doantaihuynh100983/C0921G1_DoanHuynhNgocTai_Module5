package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vn.codegym.model.RentType;
import vn.codegym.model.Service;
import vn.codegym.model.ServiceType;
import vn.codegym.service.IRentType;
import vn.codegym.service.IServiceService;
import vn.codegym.service.IServiceTypeService;

import java.util.List;

@RestController
@RequestMapping("/api/service")
@CrossOrigin(origins = "*")
public class ServiceController {
    @Autowired
    private IServiceService iServiceService;
    @Autowired
    private IRentType iRentType;
    @Autowired
    private IServiceTypeService iServiceTypeService;

//    @GetMapping("/list")
//    public ResponseEntity<List<Service>> getAllService() {
//        List<Service> serviceList = iServiceService.getAllService();
//        if (serviceList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(serviceList, HttpStatus.OK);
//    }


    @GetMapping("/search")
    public ResponseEntity<List<Service>> getSearchAllService(@RequestParam(defaultValue = "") String name,
                                                             @RequestParam(defaultValue = "") String rentType,
                                                             @RequestParam(defaultValue = "") String serviceType) {
        List<Service> serviceList = iServiceService.searchService(name,rentType,serviceType);
        if (serviceList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(serviceList, HttpStatus.OK);
    }



    @GetMapping("/rentType")
    public ResponseEntity<List<RentType>> getAllRenType(){
        List<RentType> rentTypeList = iRentType.getAllRentType();
        if (rentTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(rentTypeList, HttpStatus.OK);
    }


    @GetMapping("/serviceType")
    public ResponseEntity<List<ServiceType>> getAllServiceType(){
        List<ServiceType> serviceTypeList = iServiceTypeService.getAllServiceType();
        if (serviceTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(serviceTypeList, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Service> saveService(@RequestBody Service service){
        return new ResponseEntity<>(iServiceService.save(service), HttpStatus.CREATED);

    }
}
