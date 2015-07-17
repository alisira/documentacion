/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ejemplos.spring.ioc;

import ejemplos.spring.ioc.beans.ServicioRemoto;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author Alex Montoya
 */
public class Main
{
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        ServicioRemoto servicioRemoto = applicationContext.getBean("servicioRemoto", ServicioRemoto.class);

        System.out.println("El valor es: " + servicioRemoto.consultaDato());
    }
}
