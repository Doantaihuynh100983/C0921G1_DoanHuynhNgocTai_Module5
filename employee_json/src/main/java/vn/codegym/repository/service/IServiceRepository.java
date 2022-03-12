package vn.codegym.repository.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.codegym.model.Service;

@Repository
public interface IServiceRepository extends JpaRepository<Service,Integer> {
}
