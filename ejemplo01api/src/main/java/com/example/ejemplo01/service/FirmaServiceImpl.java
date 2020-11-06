package com.example.ejemplo01.service;

import com.example.ejemplo01.exception.ResourceNotFoundException;
import com.example.ejemplo01.model.Firma;
import com.example.ejemplo01.repository.FirmaRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.ServletContext;
import javax.transaction.Transactional;
import java.io.FileOutputStream;

@Service
@Transactional
public class FirmaServiceImpl  implements FirmaService{
    @Autowired
    private FirmaRepository firmaRepository;
    ServletContext servletContext;

    @Override
    public Firma createFirma(Firma firma) {
        //This will decode the String which is encoded by using Base64 class
        //byte[] imageByte = Base64.decodeBase64(firma.getFirmajpg());
        //String directory = servletContext.getRealPath("/")+"images/firmas/sample.jpg";
        try{
            //new FileOutputStream(directory).write(imageByte);
            return firmaRepository.save(firma);
        }catch (Exception e)
        {
             throw new ResourceNotFoundException(e.getMessage());
        }
    }
}
