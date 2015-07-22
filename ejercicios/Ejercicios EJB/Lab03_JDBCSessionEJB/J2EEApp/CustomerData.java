/*
 * CustomerData.java
 */

package J2EEApp;

import java.beans.*;

public class CustomerData extends Object implements java.io.Serializable {

    private String customerID;
    private String firstName;
    private String lastName;
    private String phone;

    /** Creates new CustomerData */
    public CustomerData () {}
 
    public CustomerData(String pCustomerID, String pFirstName, String pLastName, String pPhone) {
        System.out.println("Creating new CustomerData");
        this.customerID = pCustomerID;
        this.firstName = pFirstName;
        this.lastName = pLastName;
        this.phone = pPhone;
    }
    public String getCustomerID() { return customerID; }

    public String getFirstName() { return firstName; }

    public String getLastName() { return lastName; }

    public String getPhone() { return phone; }
    
    public String toString() {
        String theString = "\ncustomerID: " + this.customerID +
                            "\nfirstName: " + this.firstName +
                            "\nlastName: " + this.lastName +
                            "\nphone: " + this.phone;
        return theString;
    }
}