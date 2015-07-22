package J2EEApp;

import java.beans.*;

public class CustomerWithAcctsData extends Object implements java.io.Serializable {

    private CustomerData customerData;
    private java.util.Vector accounts;

    public CustomerWithAcctsData() { }

    public CustomerWithAcctsData(CustomerData pCustomerData, java.util.Vector pAccounts) {
        System.out.println("Entering new CustomerWithAcctsData");
        this.customerData = pCustomerData;
        this.accounts = pAccounts;
        System.out.println("Leaving new CustomerWithAcctsData");
    }

    public java.lang.String toString() {
        String theString = (this.customerData).toString() + this.accounts;
        return theString;
    }

    public CustomerData getCustomerData() { return this.customerData; }

    public void setCustomerData(CustomerData customerData) {
        this.customerData = customerData;
    }

    public java.util.Vector getAccounts() { return this.accounts; }
    public void setAccounts(java.util.Vector accounts) {
        this.accounts = accounts;
    }
}    