package vn.codegym.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.model.ServiceType;
import vn.codegym.repository.service.IServiceTypeRepository;
import vn.codegym.service.IServiceTypeService;

import java.util.List;

@Service
public class ServiceTypeService implements IServiceTypeService {
    @Autowired
    private IServiceTypeRepository iServiceTypeRepository;
    @Override
    public List<ServiceType> getAllServiceType() {
        return iServiceTypeRepository.findAll();
    }
}
