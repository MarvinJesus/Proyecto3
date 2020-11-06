package com.example.ejemplo01.service;

import com.example.ejemplo01.exception.ResourceNotFoundException;
import com.example.ejemplo01.model.Persona;
import com.example.ejemplo01.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PersonaServiceImpl implements PersonaService {
    @Autowired
    private PersonaRepository personaRepository;
    @Override
    public Persona createPersona(Persona persona) {
        return personaRepository.save(persona);
    }

    @Override
    public Persona updatePersona(Persona persona) {
        Optional<Persona> personaDb = this.personaRepository.findById(persona.getId());
        if(personaDb.isPresent()) {
            Persona personaUpdate = personaDb.get();
            personaUpdate.setId(persona.getId());
            personaUpdate.setNombre(persona.getNombre());
            personaUpdate.setApellido(persona.getApellido());
            personaUpdate.setLatitud(persona.getLatitud());
            personaUpdate.setLongitud(persona.getLongitud());
            if(personaUpdate.getFirma() == null){
                personaUpdate.setFirma(persona.getFirma());
                personaUpdate.getFirma().setPersona(personaUpdate);
            }
            return personaRepository.save(personaUpdate);
        }
        else {
            throw new ResourceNotFoundException("Record not found with id" + persona.getId());
        }
    }

    @Override
    public List<Persona> getAllPersona() {
        return this.personaRepository.findAll();
    }

    @Override
    public Persona getPersonaById(long personaId) {
        Optional<Persona> personaDb = this.personaRepository.findById(personaId);
        if(personaDb.isPresent()){
            return personaDb.get();
        }else{
            throw new ResourceNotFoundException("Record not found with id" + personaId);
        }
    }

    @Override
    public void deletePersona(long id) {
        Optional<Persona> personaDb = this.personaRepository.findById(id);
        if (personaDb.isPresent()){
            this.personaRepository.delete(personaDb.get());
        }else{
            throw new ResourceNotFoundException("Record not found with id" + id);
        }
    }
}
