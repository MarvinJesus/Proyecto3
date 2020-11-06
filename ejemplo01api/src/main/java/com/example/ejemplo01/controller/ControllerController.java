package com.example.ejemplo01.controller;

import com.example.ejemplo01.model.Firma;
import com.example.ejemplo01.model.Persona;
import com.example.ejemplo01.service.PersonaService;
import com.example.ejemplo01.service.FirmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ControllerController {
    @Autowired
    private PersonaService personaService;
    @Autowired
    private FirmaService firmaService;
    @GetMapping("/api/persona/all")
    public ResponseEntity<List<Persona>> getAllPersona()
    {
        return ResponseEntity.ok().body(personaService.getAllPersona());
    }
    @GetMapping("/api/persona/{id}")
    public ResponseEntity<Persona> getPersonaById(@PathVariable long id)
    {
        return ResponseEntity.ok().body(personaService.getPersonaById(id));
    }
    @PostMapping("/api/persona")
    public ResponseEntity<Persona> createPersona(@RequestBody Persona persona)
    {
        return ResponseEntity.ok().body(this.personaService.createPersona(persona));
    }
    @PutMapping("/api/persona/{id}")
    public  ResponseEntity<Persona> updatePersona(@PathVariable long id, @RequestBody Persona persona)
    {
        persona.setId(id);
        return ResponseEntity.ok().body(this.personaService.updatePersona(persona));

    }
    @DeleteMapping("/api/persona/{id}")
    public HttpStatus deletePersona(@PathVariable long id)
    {

        this.personaService.deletePersona(id);
        return HttpStatus.OK;
    }

    @PostMapping("/api/persona/firma")
    public ResponseEntity<Firma> createPersona(@RequestBody Firma firma)
    {
        System.out.println(firma.getFirmajpg());
        return ResponseEntity.ok().body(this.firmaService.createFirma(firma));
    }
}
