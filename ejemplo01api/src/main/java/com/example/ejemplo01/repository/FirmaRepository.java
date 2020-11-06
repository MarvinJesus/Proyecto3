package com.example.ejemplo01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ejemplo01.model.Firma;
@Repository
public interface FirmaRepository extends JpaRepository<Firma, Long> {
}
