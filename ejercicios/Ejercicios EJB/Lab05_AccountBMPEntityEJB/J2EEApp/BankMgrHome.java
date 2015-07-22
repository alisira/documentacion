/*
 * BankMgrHome.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface BankMgrHome extends EJBHome {

        public BankMgr create() throws RemoteException, CreateException;
}