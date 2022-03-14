package vn.codegym.service;

import org.springframework.data.repository.query.Param;
import vn.codegym.model.Employee;
import vn.codegym.model.Service;

import java.util.List;
import java.util.Optional;

public interface IServiceService {
//    List<Service> getAllService();
    List<Service> searchService(String name, String rentType, String serviceType);
    Service save(Service service);
    Optional<Service> findById(Integer id);
    void deleteById(int id);
}
