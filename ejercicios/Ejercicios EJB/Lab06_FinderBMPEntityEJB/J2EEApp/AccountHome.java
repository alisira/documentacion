/*
 * AccountHome.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface AccountHome extends EJBHome {

    public Account create(String acctNumber, String customerID,
                            String description, double balance)
        throws RemoteException, DuplicateKeyException, CreateException;

    public Account findByPrimaryKey(String key)
        throws RemoteException, FinderException;

    public java.util.Collection findByCustomerID(String customerID)
        throws RemoteException, FinderException;

}