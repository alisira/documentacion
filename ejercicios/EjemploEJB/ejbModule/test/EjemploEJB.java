package test;

import javax.ejb.Stateless;

/**
 * Session Bean implementation class EjemploEJB
 */
@Stateless
public class EjemploEJB implements EjemploEJBRemote, EjemploEJBLocal {

    /**
     * Default constructor. 
     */
    public EjemploEJB() {
        // TODO Auto-generated constructor stub
    }

	public String digaHola() {
		// TODO Auto-generated method stub
		return "Epa";
	}

}
