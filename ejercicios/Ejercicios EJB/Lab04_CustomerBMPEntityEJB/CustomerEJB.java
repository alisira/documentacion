/*
   CustomerEJB.java
 */

package J2EEApp;

import java.sql.*;
import javax.sql.*;
import javax.ejb.*;
import javax.naming.*;

public class CustomerEJB implements EntityBean {

    private String customerID;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;

    private EntityContext context;

    public CustomerEJB() {}

    public void ejbRemove() throws RemoveException {}

    public void setEntityContext(EntityContext ec) {
        System.out.println("Entering CustomerEJB.setEntityContext()");
        this.context = ec;
        System.out.println("Leaving CustomerEJB.setEntityContext()");
    }

    public void unsetEntityContext() {
        System.out.println("Entering CustomerEJB.unsetEntityContext()");
        System.out.println("Leaving CustomerEJB.unsetEntityContext()");
    }

    public void ejbActivate() {
        System.out.println("Entering CustomerEJB.ejbActivate()");
        customerID = (String)context.getPrimaryKey();
        System.out.println("Leaving CustomerEJB.ejbActivate()");
    }

    public void ejbPassivate() {
        System.out.println("Entering CustomerEJB.ejbPassivate()");
        customerID = null;
        System.out.println("Leaving CustomerEJB.ejbPassivate()");
    }

    public void ejbLoad() {
        System.out.println("Entering CustomerEJB.ejbLoad()");
        String customerID = (String)context.getPrimaryKey();
        try {
            loadRow();
        } catch (Exception ex) {
            throw new EJBException("ejbLoad: " + ex.getMessage());
        }
        System.out.println("Leaving CustomerEJB.ejbLoad()");
    }

    private void loadRow() throws SQLException {
        System.out.println("Entering CustomerEJB.loadRow()");
        // begin: insert new code
        // get a database connection
        // create a statement using dbConnection
        // construct a query to retrieve the customer data from the J2EECUSTOMER table
        // execute the query
        // initialize the EJB's persistent fields with the ResuleSet values
        // close the statement object
        // close the database connection
        // throw a NoSuchEntityException if no row is found for the customer
        // end: insert new code
        System.out.println("Leaving CustomerEJB.loadRow()");
    }

    public void ejbStore() {
        System.out.println("Entering CustomerEJB.ejbStore()");
        // begin: insert new code
        // retrieve the primary key from the EntityContext
        // call storeRow()
        // handle any exceptions by throwing an EJBException
        // end: insert new code
        System.out.println("Leaving CustomerEJB.ejbStore()");
    }

    private void storeRow() throws SQLException {
        System.out.println("Entering CustomerEJB.storeRow()");
        Connection dbConnection = initDBConnection();
        Statement stmt = dbConnection.createStatement();
        String queryStr = "UPDATE J2EECUSTOMER SET"
            + " firstname = '" +  firstName.trim()
            + "', lastname = '" + lastName.trim()
            + "', address = '" + address.trim()
            + "', phone = '" + phone.trim()
            + "' WHERE customerid = " + "'" + customerID + "'";
        System.out.println("queryString is: "+ queryStr);
        int resultCount = stmt.executeUpdate(queryStr);
        stmt.close();
        dbConnection.close();
        if (resultCount == 0) {
            throw new EJBException("Storing row for customerID " +
                                    customerID + " failed.");
        }
        System.out.println("Leaving CustomerEJB.storeRow()");
    }

    public String ejbFindByPrimaryKey (String key) throws FinderException {
        System.out.println("Entering CustomerEJB.ejbFindByPrimaryKey()");
        customerID = key;
        try {
        if (!selectByPrimaryKey(customerID))
            throw new ObjectNotFoundException("Row for id " + key +
                                                " not found.");
        } catch (Exception ex) {
            throw new EJBException("ejbFindByPrimaryKey: " + ex.getMessage());
        }
        System.out.println("Leaving CustomerEJB.ejbFindByPrimaryKey()");
        return customerID;
    }

    private boolean selectByPrimaryKey(String key) throws SQLException {
        System.out.println("Entering CustomerEJB.selectByPrimaryKey()");
        // begin: insert new code
        // get a database connection
        // create a statement using dbConnection
        // construct a query to check for the existence of the customer in the J2EECUSTOMER table
        // execute the query
        // close the statement object
        // close the database connection
        // return true if a row is found; false otherwise
        // end: insert new code
        System.out.println("Leaving CustomerEJB.selectByPrimaryKey()");
        return result;
    }

    // business methods
    public CustomerData getCustomerData() {
        return (new CustomerData(customerID,firstName,lastName,phone));
    }

    // utility method
    private Connection initDBConnection() throws SQLException {
        System.out.println("Entering CustomerEJB.initDBConnection()");
        Connection c = null;
        try {
            InitialContext ic = new InitialContext();
            DataSource ds =
                (DataSource)ic.lookup("java:comp/env/jdbc/BankMgrDB");
            c = ds.getConnection();
        } catch (NamingException ne) { throw new EJBException(ne); }
        catch (SQLException se) { throw new EJBException(se); }
        System.out.println("Leaving CustomerEJB.initDBConnection()");
        return c;
    }
}
