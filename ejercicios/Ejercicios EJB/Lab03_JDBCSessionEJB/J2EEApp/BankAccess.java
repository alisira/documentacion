/*
 * BankAccess.java
 */

package J2EEApp;

import javax.naming.*;
import javax.rmi.PortableRemoteObject;

public class BankAccess extends Object {

    private BankMgrHome myBankMgrHome;

    /** Creates new BankAccess */
    public BankAccess() {}

    public static void main (String args[]) {
        System.out.println("Entering BankAccess.main()");
        BankAccess ba = new BankAccess();
        String myID = null;
        try {
            ba.init();
            BankMgr myBankMgr = ba.myBankMgrHome.create();
            myID = myBankMgr.loginUser("Al", "password");
            System.out.println("User ID for user Al is: " + myID);
            myID = myBankMgr.loginUser("Anita", "password");
            System.out.println ("User ID for user Anita is: " + myID);
            myID = myBankMgr.loginUser("Bryan", "password");
            System.out.println("User ID for user Bryan is: " + myID);
			myBankMgr.remove();
        }
        catch (Exception e) { System.out.println("Error: " + e); }
    }

    public void init() {
        System.out.println("Entering BankAccess.init()");
        try {
            if (myBankMgrHome == null) initMyBankMgrHome();
        }
        catch (Exception e) {
            System.out.println("Error in BankAccess.init(): " + e);
        }
        System.out.println("Leaving BankAccess.init()");
    }

    private void initMyBankMgrHome() {
        System.out.println("Entering BankAccess.initMyBankMgrHome()");
        try {
            Context c = new InitialContext();
            Object result = c.lookup("bankmgrServer");
            myBankMgrHome =
                (BankMgrHome)javax.rmi.PortableRemoteObject.
                    narrow(result,BankMgrHome.class);
        }
        catch (Exception e) { System.out.println(e); }
        System.out.println("Leaving BankAccess.initMyBankMgrHome()");
    }

}