/*
 * Main.java
 *
 * Creada el 13-dic-2010, 20:10:18
 *
 * Clase Java desarrollada por Alex para el blog http://javatutoriales.blogspot.com/ el día 13-dic-2010
 *
 * Para informacion sobre el uso de esta clase, asi como bugs, actualizaciones, o mejoras enviar un mail a
 * programadorjavablog@gmail.com
 *
 * No olviden hacerse fans del grupo de Java Tutoriales en facebook  http://www.facebook.com/pages/Java-Tutoriales/121935157864634
 *
 */
package ejemplos.spring.ioc;

import ejemplos.spring.ioc.beans.ServicioRemoto;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * @author Alex
 * @version 1.0
 * @author-mail programadorjavablog@gmail.com
 * @date 13-dic-2010
 */
public class Main
{
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext("ejemplos.spring.ioc.beans");
        ServicioRemoto servicioRemoto = applicationContext.getBean("servicioRemoto", ServicioRemoto.class);

        System.out.println("El valor es: " + servicioRemoto.consultaDato());
    }
}
