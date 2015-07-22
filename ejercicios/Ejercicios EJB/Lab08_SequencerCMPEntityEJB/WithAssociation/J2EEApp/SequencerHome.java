/*
 * SequencerHome.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface SequencerHome extends EJBHome {
    
    public Sequencer findByPrimaryKey(String key) 
        throws RemoteException, FinderException;
}