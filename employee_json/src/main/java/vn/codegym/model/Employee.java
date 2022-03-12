package vn.codegym.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    private String name;
    private String birthDay;
    private Integer idCard;
    private Integer salary;
    private Integer phone;
    private String email;
    private String address;

    @Column(columnDefinition = "integer default 1")
    private Integer flagDeleteCustomer;


    @ManyToOne
    @JoinColumn(name = "positionId", referencedColumnName = "id")
    private Position position;


    @ManyToOne
    @JoinColumn(name = "educationId", referencedColumnName = "id")
    private Education education;



    @ManyToOne
    @JoinColumn(name = "divisionId", referencedColumnName = "id")
    private Division division;

    public Employee() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(String birthDay) {
        this.birthDay = birthDay;
    }

    public Integer getIdCard() {
        return idCard;
    }

    public void setIdCard(Integer idCard) {
        this.idCard = idCard;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    public Division getDivision() {
        return division;
    }

    public void setDivision(Division division) {
        this.division = division;
    }

    public Integer getFlagDeleteCustomer() {
        return flagDeleteCustomer;
    }

    public void setFlagDeleteCustomer(Integer flagDeleteCustomer) {
        this.flagDeleteCustomer = flagDeleteCustomer;
    }
}
