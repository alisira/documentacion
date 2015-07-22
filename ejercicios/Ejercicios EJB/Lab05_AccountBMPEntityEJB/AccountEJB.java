/*
 * AccountEJB.java
 */

package J2EEApp;

import javax.ejb.*;
import java.sql.*;
import javax.naming.*;
import javax.sql.*;

public class AccountEJB implements EntityBean {

    private String acctNumber;
    private String customerID;
    private String description;
    private double balance;

    private EntityContext context;

    public AccountEJB() { }

    public String ejbCreate (String acctNumber, String customerID,
                              String description, double balance)
            throws DuplicateKeyException,CreateException {
        System.out.println("Entering AccountEJB.ejbCreate()");
        // begin: insert new code
        // initilize the bean's persistent fields using the method arguments
        // end: insert new code
        AccountDAO ADAO = new AccountDAO();
        // begin: insert new code
		// initilize the DAO's fields using the method arguments
        // end: insert new code
        try{
            Connection dbConnection = getDBConnection();
            ADAO.create(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new CreateException ("SQL Exception in create:" + se);
        }
        System.out.println("Leaving AccountEJB.ejbCreate()");
        return (acctNumber);
    }

    public void setEntityContext(EntityContext ec) {
        System.out.println("Entering AccountEJB.setEntityContext()");
        this.context = ec;
        System.out.println("Leaving AccountEJB.setEntityContext()");
    }

    public void unsetEntityContext() {
        System.out.println("Entering AccountEJB.unsetEntityContext()");
        System.out.println("Leaving AccountEJB.unsetEntityContext()");
    }

    public void ejbRemove() throws RemoveException {
        System.out.println("Entering AccountEJB.ejbRemove()");
        AccountDAO ADAO = new AccountDAO();
        // begin: insert new code
		// initilize the DAO's acctNumber field with the EJB's primary key value
        // end: insert new code
        try{
            // begin: insert new code
            // get a database connection
            // call the DAO's remove method
            // close the database connection
            // end: insert new code
        } catch (java.sql.SQLException se) {
            throw new RemoveException ("SQL Exception in remove");
        }
        System.out.println("Leaving AccountEJB.ejbRemove()");
    }

    public void ejbLoad() {
        System.out.println("Entering AccountEJB.ejbLoad()");
        // begin: insert new code
        // create a new DAO named ADAO
		// initilize the DAO's acctNumber field with the EJB's primary key value
        // end: insert new code
        try{
            Connection dbConnection = getDBConnection();
            ADAO.load(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new EJBException (se);
        }
        // begin: insert new code
        // set the EJB's persistent fields to the values of the corresponding DAO fields
        // end: insert new code
        System.out.println("Leaving AccountEJB.ejbLoad()");
    }

    public void ejbStore() {
        System.out.println("Entering AccountEJB.ejbStore()");
        AccountDAO ADAO = new AccountDAO();
        // begin: insert new code
        // initialize the DAO's acctNumber field with the bean's primary key value
		// initilize the other DAO fields using the EJB's persistent field values
        // end: insert new code
        try{
            Connection dbConnection = getDBConnection();
            ADAO.store(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new EJBException (se);
        }
        System.out.println("Leaving AccountEJB.ejbStore()");
    }

    public void ejbActivate() {
        System.out.println("Entering AccountEJB.ejbActivate()");
        acctNumber = (String)context.getPrimaryKey();
        System.out.println("Leaving AccountEJB.ejbActivate()");
    }

    public void ejbPassivate() {
        System.out.println("Entering AccountEJB.ejbPassivate()");
        acctNumber = null;
        System.out.println("Leaving AccountEJB.ejbPassivate()");
    }

    public String ejbFindByPrimaryKey(String key)
        throws FinderException {
        System.out.println("Entering AccountEJB.ejbFindByPrimaryKey()");
        AccountDAO ADAO = new AccountDAO();
        ADAO.setAcctNumber(key);
        String theKey = null;
        try{
            Connection dbConnection = getDBConnection();
            theKey = ADAO.findByPrimaryKey(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new FinderException ("SQL Exception in find by primary key");
        }
        System.out.println("Leaving AccountEJB.ejbFindByPrimaryKey()");
        return theKey;
    }

    public void ejbPostCreate(String acctNumber, String customerID,
                            String description, double balance)
        throws DuplicateKeyException,CreateException {
    }

    // business methods
    public AccountData getAccountData() {
        return (new AccountData(acctNumber, balance, description));
    }

    // utility methods
    private Connection getDBConnection() throws SQLException {
        System.out.println("Entering AccountEJB.getDBConnection()");
        Connection connection;
        try {
            InitialContext ic = new InitialContext();
            DataSource ds = (DataSource)ic.lookup("java:comp/env/jdbc/BankMgrDB");
            connection = ds.getConnection();
        } catch (NamingException ne) { throw new EJBException(ne); }
        catch (SQLException se) { throw new EJBException(se); }
        System.out.println("Leaving AccountEJB.getDBConnection()");
        return connection;
    }
}