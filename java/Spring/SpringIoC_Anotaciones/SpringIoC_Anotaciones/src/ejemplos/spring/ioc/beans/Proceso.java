/*
 * Proceso.java
 *
 * Creada el 13-dic-2010, 20:34:45
 *
 * Interface Java desarrollada por Alex para el blog http://javatutoriales.blogspot.com/ el día 13-dic-2010
 *
 * Para informacion sobre el uso de esta interface, asi como bugs, actualizaciones, o mejoras enviar un mail a
 * programadorjavablog@gmail.com
 *
 * No olviden hacerse fans del grupo de Java Tutoriales en facebook  http://www.facebook.com/pages/Java-Tutoriales/121935157864634
 *
 */
package ejemplos.spring.ioc.beans;

import org.springframework.stereotype.Service;

/**
 * @author Alex
 * @version 1.0
 * @author-mail programadorjavablog@gmail.com
 * @date 13-dic-2010
 */
@Service
public interface Proceso
{
    Object ejecuta();
}
