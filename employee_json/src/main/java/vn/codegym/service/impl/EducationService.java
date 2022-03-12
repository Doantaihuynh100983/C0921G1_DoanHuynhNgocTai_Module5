package vn.codegym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.model.Education;
import vn.codegym.repository.employee.IEducationRepository;
import vn.codegym.service.IEducdtionService;

import java.util.List;

@Service
public class EducationService implements IEducdtionService {
    @Autowired
    private IEducationRepository iEducationRepository;
    @Override
    public List<Education> getAllEducation() {
        return iEducationRepository.findAll();
    }
}
