/*
 * BankAccess.java
 */

package J2EEApp;

import javax.naming.*;

public class BankAccess extends Object {

    private BankMgrHome myBankMgrHome;
    private AccountHome myAccountHome;

    /** Creates new BankAccess */
    public BankAccess() {}

    public static void main (String args[]) {
        BankAccess ba = new BankAccess();
        try {
            ba.init();
            String myID = null;
            BankMgr myBankMgr = ba.myBankMgrHome.create();
            myID = myBankMgr.loginUser("Al", "password");
			myBankMgr.remove();

            AccountData myAccountData = null;
            Account myAccount =
                ba.myAccountHome.create(myID, "discover", 20000.00);
            myAccountData = myAccount.getAccountData();
            System.out.println("\nThe account data for account # " +
                                myAccountData.getAcctNumber() + " is: " +
                                myAccountData);
            myAccount.remove();
        } catch (Exception e) {
            System.out.println("Error in BankAccess.main(): " + e);
        }
    }

    public void init() {
        System.out.println("Entering BankAccess.init()");
        try {
            if (myBankMgrHome == null) initMyBankMgrHome();
            if (myAccountHome == null) initMyAccountHome();
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

    private void initMyAccountHome() {
    System.out.println("Entering BankAccess.initMyAccountHome()");
    try {
        Context c = new InitialContext();
        if (c == null) System.out.println("c is null");
        Object result = c.lookup("accountServer");
        if (result == null) System.out.println("result is null");
        myAccountHome =
            (AccountHome)javax.rmi.PortableRemoteObject.narrow
                (result,AccountHome.class);
    }
    catch (Exception e) { System.out.println(e); }
    System.out.println("Leaving BankAccess.initMyAccountHome()");
    }
}