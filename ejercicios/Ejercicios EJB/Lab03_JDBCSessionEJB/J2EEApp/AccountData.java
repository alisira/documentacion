/*
 * AccountData.java
 */

package J2EEApp;

import java.beans.*;

public class AccountData extends Object implements java.io.Serializable {

    private String acctNumber;
    private double balance;
    private String description;

    /** Creates new AccountData */
    public AccountData () {}

    public AccountData(String pAcctNumber, double pBalance, String pDescription) {
        System.out.println("Creating new AccountData");
        this.acctNumber = pAcctNumber;
        this.balance = pBalance;
        this.description = pDescription;
    }

    public String getAcctNumber() { return acctNumber; }

    public double getBalance() { return balance; }
 
    public String getDescription() { return description; }
    
    public String toString() {
        String theString = "\nacctNumber: " + this.acctNumber +
                            "\ndescription: " + this.description +
                            "\nbalance: " + this.balance;
        return theString;
    }
}