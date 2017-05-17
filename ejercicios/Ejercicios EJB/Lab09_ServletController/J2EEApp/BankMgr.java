/*
 * BankMgr.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface BankMgr extends EJBObject {

    public String loginUser(String pUsername, String pPassword)
        throws RemoteException;

    public CustomerData getCustomerData(String customerID)
        throws RemoteException;

    public java.util.Vector getAllCustomers()
        throws RemoteException;
    
    public CustomerWithAcctsData getCustomerWithAcctsData(String customerID) 
        throws RemoteException;

}