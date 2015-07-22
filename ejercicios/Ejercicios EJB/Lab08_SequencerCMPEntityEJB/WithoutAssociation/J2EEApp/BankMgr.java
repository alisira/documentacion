/*
 * BankMgr.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface BankMgr extends EJBObject {

    public String loginUser(java.lang.String pUsername,java.lang.String pPassword)
        throws RemoteException;

    public CustomerData getCustomerData(String customerID)
        throws RemoteException;

    public java.util.Vector getAllCustomers()
        throws RemoteException;
}