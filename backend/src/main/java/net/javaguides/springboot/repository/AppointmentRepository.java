package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Account;
import net.javaguides.springboot.model.Appointment;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	List<Appointment> findByDate(String date);
	List<Appointment> findByPersonId(Long person_Id);
	List<Appointment> findByPersonIdAndDate(Long person_Id, String date);
	List<Appointment> findByPersonIdAndDoctorId(Long person_Id, Long doctor_Id);
	List<Appointment> findByDoctorId(Long doctor_Id);
	List<Appointment> findByDoctorIdAndDate(Long doctor_Id,String date);
}
