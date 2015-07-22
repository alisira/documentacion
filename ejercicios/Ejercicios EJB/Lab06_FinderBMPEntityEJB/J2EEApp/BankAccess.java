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

            java.util.Collection al = ba.myAccountHome.findByCustomerID(myID);
            if (al == null) {
                System.out.println("No accounts were found for customerID: " + myID );
            }
            else {
                java.util.Iterator ali = al.iterator();
                System.out.println("The list of accounts for customerID " + myID + " is: ");
                while ( ali.hasNext() ) {
                    System.out.println(((Account)ali.next()).getAccountData());
                }
            }

            java.util.Vector customers = myBankMgr.getAllCustomers();
            myBankMgr.remove();

            if (customers == null)
                System.out.println("customers is null in BankAccess.main()");
            else {
                java.util.Iterator cli = customers.iterator();
                System.out.println("The list of customers is: ");
                while (cli.hasNext()) {
                    System.out.println((CustomerData)cli.next());
                }
            }
        }
        catch (Exception e) {
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