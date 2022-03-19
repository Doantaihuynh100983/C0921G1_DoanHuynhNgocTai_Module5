package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import vn.codegym.model.Home;
import vn.codegym.service.IHomeService;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
public class HomeController {
    @Autowired
    private IHomeService iHomeService;



    @GetMapping("/home")
    public ResponseEntity<List<Home>> getAllHome(){
        List<Home> homeList = iHomeService.getAllHome();
        if (!homeList.isEmpty()){
            return new ResponseEntity<>(homeList,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
