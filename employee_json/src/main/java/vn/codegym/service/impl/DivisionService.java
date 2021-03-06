package vn.codegym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.model.Division;
import vn.codegym.repository.employee.IDivisionRepository;
import vn.codegym.service.IDivisionService;

import java.util.List;

@Service
public class DivisionService implements IDivisionService {
    @Autowired
    private IDivisionRepository iDivisionRepository;
    @Override
    public List<Division> getAllDivision() {
        return iDivisionRepository.findAll();
    }
}
