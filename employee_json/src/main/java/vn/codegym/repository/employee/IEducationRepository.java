package vn.codegym.repository.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.model.Education;

public interface IEducationRepository extends JpaRepository<Education,Integer> {
}
