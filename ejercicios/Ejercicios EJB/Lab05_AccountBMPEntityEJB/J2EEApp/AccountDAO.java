/*
 * AccountDAO.java
 */

package J2EEApp;

import java.sql.*;
import java.rmi.RemoteException;
import javax.ejb.*;
import java.util.*;

public class AccountDAO extends Object {

    private String acctNumber;
    private String customerID;
    private String description;
    private double balance;

    private Connection dbConnection = null;

    /** Creates new AccountDAO */
    public AccountDAO() {
    }

    // get and set methods for the instance variables
    public String getAcctNumber(){ return acctNumber; }
    public void setAcctNumber(String acctNumber){
        this.acctNumber = acctNumber;
    }

    public String getCustomerID(){ return customerID; }
    public void setCustomerID(String customerID){
        this.customerID = customerID;
    }
    public String getDescription(){return description; }
    public void setDescription(String description){
        this.description = description;
    }
    public double getBalance(){ return balance; }
    public void setBalance(double balance){
        this.balance = balance;
    }

    // public methods
    public void load( Connection con ) throws SQLException {
        System.out.println("Entering AccountDAO.load()");
        dbConnection = con;
        selectAccount();
        System.out.println("Leaving AccountDAO.load()");
    }

    public void store( Connection con ) throws SQLException {
        System.out.println("Entering AccountDAO.store()");
        dbConnection = con;
        updateAccount();
        System.out.println("Leaving AccountDAO.store()");
    }

    public void remove( Connection con ) throws SQLException {
        System.out.println("Entering AccountDAO.remove()");
        dbConnection = con;
        deleteAccount();
        System.out.println("Leaving AccountDAO.remove()");
    }

    public void create(Connection con)
        throws SQLException, DuplicateKeyException {
        System.out.println("Entering AccountDAO.create()");
        dbConnection = con;
        insertAccount();
        System.out.println("Leaving AccountDAO.create()");
    }

    public String findByPrimaryKey(Connection con) throws SQLException {
        System.out.println("Entering AccountDAO.findByPrimaryKey()");
        dbConnection = con;
        if (accountExists(acctNumber)) return (acctNumber);
        throw new SQLException ("primary key not found:" + acctNumber);
    }

    public Collection findByCustomerID(Connection con) throws SQLException {
        System.out.println("Entering AccountDAO.findByCustomerID()");
        dbConnection = con;
        try {
            Collection result = selectByCustomerID();
            if (result.isEmpty()) {
                throw new ObjectNotFoundException("No rows found.");
            }
            else return result;
        } catch (Exception ex) {
            throw new EJBException("ejbFindByLastName " + ex.getMessage());
        }
    }

    // private methods
    private Collection selectByCustomerID() throws SQLException {
        System.out.println("Entering AccountDAO.selectByCustomerID()");
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "SELECT acctnumber FROM J2EEACCOUNT WHERE customerid = "
            + "'" + this.customerID + "'";
        System.out.println("queryString is: "+ queryStr);
        ResultSet rs = stmt.executeQuery(queryStr);
        ArrayList a = new ArrayList();
        while (rs.next()) {
            String acctnumber = rs.getString(1);
            a.add(acctnumber);
        }
        stmt.close();
        System.out.println("Leaving AccountDAO.selectByCustomerID()");
        return a;
    }

    private boolean accountExists (String pAccountID) throws SQLException {
        System.out.println("Entering AccountDAO.accountExists()");
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "SELECT acctnumber FROM J2EEACCOUNT WHERE acctnumber = "
            + "'" + acctNumber + "'";
        System.out.println("queryString is: "+ queryStr);
        ResultSet result = stmt.executeQuery(queryStr);
        if (result.next()) {
            acctNumber = result.getString(1);
            stmt.close();
            System.out.println("Leaving AccountDAO.accountExists() - true");
            return true;
        }
        else {
            stmt.close();
            System.out.println("Leaving AccountDAO.accountExists() - false");
            return false;
        }
    }

    private void selectAccount () throws SQLException {
        System.out.println("Entering AccountDAO.selectAccount()");
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "SELECT acctnumber, customerid, description, balance "
            + " FROM J2EEACCOUNT WHERE acctnumber = "
            + "'" + acctNumber + "'";
        System.out.println("queryString is: "+ queryStr);
        ResultSet result = stmt.executeQuery(queryStr);
        if ( !result.next() )
            throw new SQLException("No record for primary key " + acctNumber);
        int i = 1;
        acctNumber = (result.getString(i++)).trim();
        customerID = (result.getString(i++)).trim();
        description = (result.getString(i++)).trim();
        balance = result.getDouble(i++);
        stmt.close();
        System.out.println("Leaving AccountDAO.selectAccount()");
    }

    private void insertAccount() throws SQLException,DuplicateKeyException {
        System.out.println("Entering AccountDAO.insertAccount()");
        if (accountExists(acctNumber))
            throw new DuplicateKeyException ("Account Exists:   " + acctNumber );
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "INSERT INTO J2EEACCOUNT"
            + "(acctnumber,customerid,description,balance)" + "VALUES ("
            + "'" + acctNumber.trim() + "',"
            + "'" + customerID.trim() + "',"
            + "'" + description.trim() + "'," + balance + ")";
        System.out.println("queryString is: "+ queryStr);
        int resultCount = stmt.executeUpdate(queryStr);
        if ( resultCount != 1 ) {
            System.out.println("Error in AccountDAO.insertAccount()");
            throw new SQLException("ERROR in account INSERT !! resultCount = " +
                                       resultCount);
        }
        stmt.close();
        System.out.println("Leaving AccountDAO.insertAccount()");
    }

    private void deleteAccount() throws SQLException {
        System.out.println("Entering AccountDAO.deleteAccount()");
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "DELETE FROM J2EEACCOUNT WHERE acctnumber = "
            + "'" + acctNumber + "'";
        System.out.println("queryString is: "+ queryStr);
        int resultCount = stmt.executeUpdate(queryStr);
        if ( resultCount != 1 )
            throw new SQLException("ERROR deleting account!! resultCount = "
                                  + resultCount);
        stmt.close();
        System.out.println("Leaving AccountDAO.deleteAccount()");
    }

    private void updateAccount() throws SQLException {
        System.out.println("Entering AccountDAO.updateAccount()");
        Statement stmt = dbConnection.createStatement();
        String queryStr =
            "UPDATE J2EEACCOUNT"
            + " SET customerid = '" + customerID.trim()
            + "', description = '" + description.trim()
            + "', balance = " + balance
            + " WHERE acctnumber = " + "'" + acctNumber + "'";
        System.out.println("queryString is: "+ queryStr);
        int resultCount = stmt.executeUpdate(queryStr);
        if ( resultCount != 1 )
            throw new SQLException("ERROR updating account!! resultCount = "
                                  + resultCount);
        stmt.close();
        System.out.println("Leaving AccountDAO.updateAccount()");
    }
}