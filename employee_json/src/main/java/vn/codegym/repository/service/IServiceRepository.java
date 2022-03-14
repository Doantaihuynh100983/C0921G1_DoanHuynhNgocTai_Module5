package vn.codegym.repository.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.codegym.model.Service;

import java.util.List;

@Repository
public interface IServiceRepository extends JpaRepository<Service,Integer> {
    @Query(value = "select * from Service where name like %:name% " +
            " and rent_type_id " + "like %:rentType%" +
            " and service_type_id " + "like %:serviceType% and flag_delete_service = 1", nativeQuery = true)
    List<Service> searchService(@Param("name") String name,
                                @Param("rentType") String rentType,
                                @Param("serviceType") String serviceType);


    @Modifying
    @Query(value = "UPDATE Service SET flag_delete_service = 0 WHERE  id = :id ", nativeQuery = true)
    void deleteById(@Param("id") int id);
}
