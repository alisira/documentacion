/*
 * BankAccess.java
 */

package J2EEApp;

public class BankAccess extends Object {

    /** Creates new BankAccess */
    public BankAccess() {}

    public static void main (String args[]) {
        System.out.println("Entering BankAccess.main()");
        AccountData myAccountData = new AccountData("1",1000.00,"Savings");
        CustomerData myCustomerData = new CustomerData("11", "Tom", "Thumb", "555-123-4567");
        System.out.println("myAccountData is: " + myAccountData);
        System.out.println("myCustomerData is: " + myCustomerData);
        System.out.println("Leaving BankAccess.main()");
    }
}