/*
 * Concatenacion.java
 *
 * Creada el 20/12/2010, 10:41:32 PM
 *
 * Clase Java desarrollada por Alex para el blog http://javatutoriales.blogspot.com/ el día 13-dic-2010
 *
 * Para informacion sobre el uso de esta clase, asi como bugs, actualizaciones, o mejoras enviar un mail a
 * programadorjavablog@gmail.com
 *
 * No olviden hacerse fans del grupo de Java Tutoriales en facebook  http://www.facebook.com/pages/Java-Tutoriales/121935157864634
 *
 */
package ejemplos.spring.ioc.beans;

/**
 * @author Alex
 * @version 1.0
 * @author-mail programadorjavablog@gmail.com
 * @date 20/12/2010
 */
public class Concatenacion implements Proceso
{
    public Object ejecuta()
    {
        return new StringBuilder().append("Hola ").append(" mundo");
    }
}
