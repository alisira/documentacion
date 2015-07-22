/*
 * HelloEJB.java
 */

package Server;

import javax.ejb.*;

public class HelloEJB implements SessionBean {

    public HelloEJB() {
    } 
	
    public void ejbCreate() { 
    }
	
    public void setSessionContext(SessionContext sc) { 
    }
	
    public void ejbRemove() {
    }
	
    public void ejbActivate() {
    }
	
    public void ejbPassivate() {
    }

    public String sayHello() {
        return "Look, Mom, I'm an EJB!";
    }
}