package vn.codegym.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.model.Home;
import vn.codegym.repository.IHomeRepository;
import vn.codegym.service.IHomeService;

import java.util.List;

@Service
public class HomeService implements IHomeService {
    @Autowired
    private IHomeRepository iHomeRepository;
    @Override
    public List<Home> getAllHome() {
        return iHomeRepository.findAll();
    }
}
