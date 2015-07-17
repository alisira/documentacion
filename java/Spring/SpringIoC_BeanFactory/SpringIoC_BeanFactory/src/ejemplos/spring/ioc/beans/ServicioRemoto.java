/*
 * ServicioRemoto.java
 *
 * Creada el 13-dic-2010, 20:34:45
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
 * @date 13-dic-2010
 */
public class ServicioRemoto
{
    private Proceso proceso;
    private Integer repeticiones;

    public ServicioRemoto()
    {
    }

    public ServicioRemoto(Proceso proceso)
    {
        this.proceso = proceso;
    }

    public Object consultaDato()
    {
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < repeticiones; i++)
        {
            stringBuilder.append(i + 1).append(" - ").append(proceso.ejecuta()).append("\n");
        }

        return stringBuilder.toString();
    }

    public void setRepeticiones(Integer repeticiones)
    {
        this.repeticiones = repeticiones;
    }
}
