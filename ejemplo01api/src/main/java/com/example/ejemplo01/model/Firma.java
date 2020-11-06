package com.example.ejemplo01.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name= "firmas")
public class Firma {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "firmajpg")
    @Lob
    private String firmajpg;

    @Column(name = "firmahashcode", length = 4000)
    private String firmahashcode;
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Persona persona;

    public Firma() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirmajpg() {
        return firmajpg;
    }

    public void setFirmajpg(String firmajpg) {
        this.firmajpg = firmajpg;
    }

    public String getFirmahashcode() {
        return firmahashcode;
    }

    public void setFirmahashcode(String firmahascode) {
        this.firmahashcode = firmahascode;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }
}
