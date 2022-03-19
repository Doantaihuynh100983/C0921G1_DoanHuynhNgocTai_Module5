package vn.codegym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.model.Home;

public interface IHomeRepository extends JpaRepository<Home,Integer> {
}
