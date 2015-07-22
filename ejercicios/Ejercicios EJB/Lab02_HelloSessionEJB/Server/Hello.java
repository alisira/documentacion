/*
 * Hello.java
 */

package Server;

import java.rmi.RemoteException;
import javax.ejb.*;


public interface Hello extends EJBObject {

    public String sayHello() throws RemoteException;
}