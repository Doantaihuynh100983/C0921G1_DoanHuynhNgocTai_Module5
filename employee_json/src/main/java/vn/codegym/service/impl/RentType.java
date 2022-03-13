package vn.codegym.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.repository.service.IRentTypeRepository;
import vn.codegym.service.IRentType;

import java.util.List;

@Service
public class RentType implements IRentType {
    @Autowired
    private IRentTypeRepository iRentTypeRepository;
    @Override
    public List<vn.codegym.model.RentType> getAllRentType() {
        return iRentTypeRepository.findAll();
    }
}
