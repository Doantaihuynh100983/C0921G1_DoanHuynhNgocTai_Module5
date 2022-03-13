package vn.codegym.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.repository.service.IServiceRepository;
import vn.codegym.repository.service.IServiceTypeRepository;
import vn.codegym.service.IServiceService;

import java.util.List;

@Service
public class ServiceService implements IServiceService {
    @Autowired
    private IServiceRepository iServiceRepository;
//    @Override
//    public List<vn.codegym.model.Service> getAllService() {
//        return iServiceRepository.findAll();
//    }

    @Override
    public List<vn.codegym.model.Service> searchService(String name, String rentType, String serviceType) {
        return iServiceRepository.searchService(name,rentType,serviceType);
    }

    @Override
    public vn.codegym.model.Service save(vn.codegym.model.Service service) {
        return iServiceRepository.save(service);
    }
}
