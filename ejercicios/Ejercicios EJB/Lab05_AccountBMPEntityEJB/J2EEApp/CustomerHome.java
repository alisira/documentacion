/*
 * CustomerHome.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface CustomerHome extends EJBHome {
 
    public Customer findByPrimaryKey(java.lang.String customerID) 
        throws RemoteException, FinderException;
    
}