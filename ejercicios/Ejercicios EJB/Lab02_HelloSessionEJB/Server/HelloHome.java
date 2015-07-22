/*
 * HelloHome.java
 */

package Server;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface HelloHome extends EJBHome {
    public Hello create() throws RemoteException, CreateException;
}