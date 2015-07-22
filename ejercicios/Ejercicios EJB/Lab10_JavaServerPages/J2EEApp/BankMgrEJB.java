/*
 * BankMgrEJB.java
 */

package J2EEApp;

import javax.ejb.*;
import java.sql.*;
import javax.sql.*;
import javax.naming.*;

public class BankMgrEJB implements SessionBean {

    private javax.sql.DataSource jdbcFactory;
    private CustomerHome myCustomerHome;

    public BankMgrEJB() { }

    public void ejbCreate() {
        System.out.println("Entering BankMgrEJB.ejbCreate()");
        Context c = null;
        Object result = null;
        if (this.jdbcFactory == null) {
            System.out.println("jdbcFactory is null in ejbCreate()");
            try {
                c = new InitialContext();
                this.jdbcFactory =
                  (javax.sql.DataSource)c.lookup("java:comp/env/jdbc/BankMgrDB");
            } catch (Exception e){ System.out.println("Error: " + e); }
        }
        if (this.myCustomerHome == null) {
            try {
                c = new InitialContext();
                result = c.lookup("customerServer");
                myCustomerHome =
                    (CustomerHome)javax.rmi.PortableRemoteObject.narrow
                        (result,CustomerHome.class);
            }
            catch (Exception e) { System.out.println("Error: " + e); }
        }
	System.out.println("Leaving BankMgrEJB.ejbCreate()");
    }

    public void setSessionContext(SessionContext sc) { }

    public void ejbRemove() { }

    public void ejbActivate() { }

    public void ejbPassivate() { }

    public String loginUser(java.lang.String pUsername,java.lang.String pPassword) {
        System.out.println("Entering BankMgrEJB.loginUser()");
        String theID = null;
        try {
            Connection conn = this.jdbcFactory.getConnection();
            Statement  stmt = conn.createStatement();
            String sqlString =
                "select UserID from J2EEAPPUSER where Username = '" +
                    pUsername + "' and Password = '" + pPassword + "'";
            System.out.println(sqlString);
            ResultSet rs = stmt.executeQuery(sqlString);
            if ( rs.next() ) {
                theID = rs.getString("UserID");
                System.out.println("userID is: " + theID);
            }
            rs.close();
            stmt.close();
            conn.close();
        }
        catch ( Exception e ) { System.out.println("Error: " + e); }
        System.out.println("Leaving BankMgrEJB.loginUser()");
        return theID;
    }

    public java.util.Vector getAllCustomers() {
        System.out.println("Entering BankMgrEJB.getAllCustomers()");
        java.util.Vector customerList = new java.util.Vector();
        try {
            java.util.Collection cl = myCustomerHome.findAll();
            if (cl == null) { customerList = null; }
            else {
                java.util.Iterator cli = cl.iterator();
                while ( cli.hasNext() ) {
                    customerList.addElement(((Customer)cli.next()).getCustomerData());
                }
            }
        } catch (Exception e) {
            System.out.println("Error in BankMgrEJB.getAllCustomers(): " + e);
        }
        System.out.println("Leaving BankMgrEJB.getAllCustomers()");
        return customerList;
	}

    public CustomerData getCustomerData(String customerID) {
        System.out.println("Entering BankMgrEJB.getCustomerData()");
        CustomerData myCD = null;
        try {
            Customer myCustomer =
                myCustomerHome.findByPrimaryKey(customerID);
            if (myCustomer != null) {
                myCD = myCustomer.getCustomerData();
                System.out.println("Customer data is: "+ myCD);
            }
        }
        catch (Exception e) {
            System.out.println("Error in BankMgrEJB.getCustomerData(): " + e);
        }
        System.out.println("Leaving BankMgrEJB.getCustomerData()");
        return myCD;
    }
    public CustomerWithAcctsData getCustomerWithAcctsData(String customerID) {
        System.out.println("Entering BankMgrEJB.getCustomerWithAcctsData()");
        CustomerWithAcctsData myCWAD = null;
        try {
            Customer myCustomer =
                myCustomerHome.findByPrimaryKey(customerID);
            if (myCustomer != null) {
                myCWAD = myCustomer.getCustomerWithAcctsData();
                System.out.println("CustomerWithAcctsData is: " + myCWAD);
            }
        }
        catch (Exception e) {
            System.out.println("Error in BankMgrEJB.getCustomerWithAcctsData(): " + e);
        }
        System.out.println("Leaving BankMgrEJB.getCustomerWithAcctsData()");
        return myCWAD;
    }

}