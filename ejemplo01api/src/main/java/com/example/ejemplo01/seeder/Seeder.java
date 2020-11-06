package com.example.ejemplo01.seeder;

import com.example.ejemplo01.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import com.example.ejemplo01.model.Persona;
import org.springframework.stereotype.Component;

@Component
public class Seeder {
    @Autowired
    private PersonaRepository personaRepository;
    @EventListener
    public void seed(ContextRefreshedEvent event)
    {
        seedPersonTable();
    }
    private void seedPersonTable()
    {
        Persona persona = new Persona();
        persona.setNombre("Marvin");
        persona.setApellido("Calvo");
        persona.setLongitud("-85.183941");
        persona.setLatitud("9.861398");
        persona.setImagen("http://novacoders.myuniversidad.com/images/our-team/MarvinCalvo.jpeg");
        personaRepository.save(persona);
        persona = new Persona();
        persona.setNombre("Christhian ");
        persona.setApellido("Montes");
        persona.setLongitud("-84.038479");
        persona.setLatitud("9.897948");
        persona.setImagen("http://novacoders.myuniversidad.com/images/our-team/CristianMontes.jpeg");
        personaRepository.save(persona);
        persona = new Persona();
        persona.setNombre("Daniela");
        persona.setApellido("García");
        persona.setLongitud("-84.487805");
        persona.setLatitud("10.61867");
        persona.setImagen("http://novacoders.myuniversidad.com/images/our-team/Danny.jpeg");
        personaRepository.save(persona);
        persona = new Persona();
        persona.setNombre("Dennis");
        persona.setApellido("Granados");
        persona.setLongitud("-83.138293");
        persona.setLatitud("9.614296");
        persona.setImagen("http://novacoders.myuniversidad.com/images/our-team/DennisGranados.jpeg");
        personaRepository.save(persona);
        persona = new Persona();
        persona.setNombre("Denilson");
        persona.setApellido("Vargas");
        persona.setLongitud("-83.337705");
        persona.setLatitud("9.10181");
        persona.setImagen("http://novacoders.myuniversidad.com/images/our-team/DenilsonVargas.jpeg");
        personaRepository.save(persona);

    }
}
