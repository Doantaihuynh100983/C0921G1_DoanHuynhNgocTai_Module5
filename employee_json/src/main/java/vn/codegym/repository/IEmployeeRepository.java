package vn.codegym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.codegym.model.Employee;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface IEmployeeRepository extends JpaRepository<Employee,Integer> {

    @Query(value = "SELECT * FROM Employee WHERE flag_delete_customer = 1",nativeQuery = true)
    List<Employee> getAllEmployee();

    @Modifying
    @Query(value = "UPDATE Employee SET flag_delete_customer = 0 WHERE  id = :id ", nativeQuery = true)
    void deleteById(@Param("id") int id);
}
