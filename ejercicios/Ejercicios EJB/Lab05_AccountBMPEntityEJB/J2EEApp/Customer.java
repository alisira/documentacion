/*
 * Customer.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface Customer extends EJBObject {

    public CustomerData getCustomerData() throws RemoteException;
}