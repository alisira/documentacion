/*
 * Sequencer.java
 */

package J2EEApp;

import java.rmi.RemoteException;
import javax.ejb.*;

public interface Sequencer extends EJBObject {

    public String getNextSequenceValue() throws RemoteException;
}