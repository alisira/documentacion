/*
 * Account.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface Account extends EJBObject {

    public AccountData getAccountData() throws RemoteException;
    
}