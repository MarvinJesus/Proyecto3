package com.example.ejemplo01.exception;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1;
    public ResourceNotFoundException(String pmessage)
    {
        super(pmessage);
    }
    public ResourceNotFoundException(String pmessage, Throwable pthrowable)
    {
        super(pmessage,pthrowable);
    }
}
