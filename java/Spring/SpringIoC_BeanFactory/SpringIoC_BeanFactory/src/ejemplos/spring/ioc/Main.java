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
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

/**
 * @author Alex
 * @version 1.0
 * @author-mail programadorjavablog@gmail.com
 * @date 13-dic-2010
 */
public class Main
{
    /**
     * @param args argumentos recibidos por la linea de comandos
     */
    public static void main(String[] args)
    {
        BeanFactory beanFactory = new XmlBeanFactory(new ClassPathResource("applicationContext.xml"));
        
        ServicioRemoto servicio = beanFactory.getBean("servicioRemoto", ServicioRemoto.class);
        
        System.out.println("El valor es " + servicio.consultaDato());

    }

}
