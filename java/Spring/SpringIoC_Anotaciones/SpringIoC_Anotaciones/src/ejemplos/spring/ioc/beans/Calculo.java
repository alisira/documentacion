/*
 * Calculo.java
 *
 * Creada el 20/12/2010, 10:40:07 PM
 *
 * Clase Java desarrollada por Alex Montoya para la empresa Metrica Publicidad el día 20/12/2010
 *
 * Para informacion sobre el uso de esta clase, asi como bugs, actualizaciones, o mejoras enviar un mail a
 * amontoya@7i.com.mx o a amonmar2000@gmail.com
 *
 */

package ejemplos.spring.ioc.beans;

import org.springframework.stereotype.Service;

/**
 * @author Alex Montoya
 * @version 1.0
 * @author-mail amonmar2000@gmail.com
 * @date 20/12/2010
 */
@Service
public class Calculo implements Proceso
{
    public Object ejecuta()
    {
        return (int)(Math.random()*100.0);
    }
}
