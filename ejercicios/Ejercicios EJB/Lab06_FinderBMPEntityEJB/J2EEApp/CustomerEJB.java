/*
   CustomerEJB.java
 */

package J2EEApp;

import java.sql.*;
import javax.sql.*;
import javax.ejb.*;
import javax.naming.*;
import java.util.*;

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
        Connection dbConnection = initDBConnection();
        Statement stmt = dbConnection.createStatement();
        String queryStr = "SELECT firstname, lastname, address, phone "
            + " FROM J2EECUSTOMER WHERE customerid = "
            + "'" + this.customerID + "'";
        System.out.println("queryString is: "+ queryStr);
        ResultSet result = stmt.executeQuery(queryStr);
        if (result.next()) {
            int i = 1;
            firstName = (result.getString(i++)).trim();
            lastName = (result.getString(i++)).trim();
            address = (result.getString(i++)).trim();
            phone = (result.getString(i++)).trim();
            stmt.close();
            dbConnection.close();
        }
        else {
            stmt.close();
            dbConnection.close();
            throw new NoSuchEntityException("Row for id " + customerID +
                                            " not found in database.");
        }
        System.out.println("Entering CustomerEJB.loadRow()");
    }

    public void ejbStore() {
        System.out.println("Entering CustomerEJB.ejbStore()");
        customerID = (String)context.getPrimaryKey();
        try {
            storeRow();
        } catch (Exception ex) {
            throw new EJBException("ejbLoad: " + ex.getMessage());
        }
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
        Connection dbConnection = initDBConnection();
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "SELECT customerid FROM J2EECUSTOMER WHERE customerid = "
            + "'" + key + "'";
        System.out.println("queryString is: "+ queryStr);
        ResultSet rs = stmt.executeQuery(queryStr);
        boolean result = rs.next();
        stmt.close();
        dbConnection.close();
        System.out.println("Leaving CustomerEJB.selectByPrimaryKey()");
        return result;
    }

    public Collection ejbFindAll() throws FinderException {
        System.out.println("Entering CustomerEJB.ejbFindAll()");
        try {
            Collection col = selectAll();
            if (col.isEmpty())
                System.out.println("No customers found in ejbFindAll()");
            return col;
        } catch (Exception ex) {
            throw new EJBException("CustomerEJB.ejbFindAll " + ex.getMessage());
        }
    }

    private Collection selectAll() throws SQLException {
        System.out.println("Entering CustomerEJB.selectAll()");
        Connection dbConnection = initDBConnection();
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "SELECT * FROM J2EECUSTOMER";
        System.out.println("queryString is: "+ queryStr);
        ResultSet rs = stmt.executeQuery(queryStr);
        ArrayList a = new ArrayList();
        while (rs.next()) {
            String customerid = rs.getString(1);
            a.add(customerid);
        }
        stmt.close();
        dbConnection.close();
        System.out.println("Leaving CustomerEJB.selectAll()");
        return a;
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
