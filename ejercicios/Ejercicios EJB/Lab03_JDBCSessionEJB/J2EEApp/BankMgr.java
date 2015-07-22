/*
 * BankMgr.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface BankMgr extends EJBObject {

    public String loginUser(String pUsername,String pPassword) throws RemoteException;
}