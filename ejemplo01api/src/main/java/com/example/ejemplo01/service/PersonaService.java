package com.example.ejemplo01.service;

import com.example.ejemplo01.model.Persona;

import java.util.List;

public interface PersonaService {
    Persona createPersona(Persona persona);
    Persona updatePersona(Persona persona);
    List<Persona> getAllPersona();
    Persona getPersonaById(long personaId);
    void deletePersona(long id);
}
