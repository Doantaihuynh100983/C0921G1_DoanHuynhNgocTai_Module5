package vn.codegym.repository.employee;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

//    @Query(value = "SELECT * FROM Employee WHERE flag_delete_customer = 1",nativeQuery = true)
//    List<Employee> getAllEmployee();

    @Modifying
    @Query(value = "UPDATE Employee SET flag_delete_customer = 0 WHERE  id = :id ", nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Query(value = "select * from Employee where name like %:name% and address " +
            "like %:address%  and position_id " +
            "like %:position% and education_id " +
            "like %:education% and division_id " +
            "like %:division% and flag_delete_customer = 1", nativeQuery = true)
    Page<Employee> searchAllEmployee(@Param("name") String name,
                                     @Param("address") String address,
                                     @Param("position") String position,
                                     @Param("education") String education,
                                     @Param("division") String division,
                                     Pageable pageable);
}


