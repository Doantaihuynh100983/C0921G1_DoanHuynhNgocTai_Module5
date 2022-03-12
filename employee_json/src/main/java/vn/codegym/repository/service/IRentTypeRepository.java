package vn.codegym.repository.service;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.codegym.model.RentType;

@Repository
public interface IRentTypeRepository extends JpaRepository<RentType,Integer> {
}
