/*
 * Ordenamiento.java
 *
 * Creada el 20/12/2010, 11:29:32 PM
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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author Alex
 * @version 1.0
 * @author-mail programadorjavablog@gmail.com
 * @date 20/12/2010
 */
public class Ordenamiento implements Proceso
{
    public Object ejecuta()
    {
        List< Integer> listaEnteros = new ArrayList<Integer>();

        listaEnteros.add(9);
        listaEnteros.add(3);
        listaEnteros.add(1);
        listaEnteros.add(6);
        listaEnteros.add(5);
        listaEnteros.add(10);

        Collections.sort(listaEnteros);

        return listaEnteros;
    }
}
