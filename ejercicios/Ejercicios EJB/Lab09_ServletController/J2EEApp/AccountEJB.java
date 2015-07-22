/*
 * AccountEJB.java
 */

package J2EEApp;

import javax.ejb.*;
import java.sql.*;
import javax.naming.*;
import javax.sql.*;
import java.util.*;

public class AccountEJB implements EntityBean {

    private String acctNumber;
    private String customerID;
    private String description;
    private double balance;

    private EntityContext context;

    public AccountEJB() { }

        public String ejbCreate (String customerID, String description, double balance)
            throws DuplicateKeyException,CreateException {
        System.out.println("Entering AccountEJB.ejbCreate() w/sequencer");
        try {
            Context c = new InitialContext();
            Object result = c.lookup("sequencerServer");
            SequencerHome seqHome =
                (SequencerHome)javax.rmi.PortableRemoteObject.
                    narrow(result,SequencerHome.class);
            Sequencer seq = seqHome.findByPrimaryKey(new String("ACCOUNT"));
            this.acctNumber = seq.getNextSequenceValue();
        } catch (Exception e) {
            System.out.println("Error obtaiing seq# in AccountEJB.ejbCreate()");
            throw new CreateException ("Exception in create:" + e);
        }
        System.out.println("New sequence number is: " + this.acctNumber);
        this.customerID = customerID;
        this.description = description;
        this.balance = balance;
        AccountDAO ADAO = new AccountDAO();
        ADAO.setAcctNumber(this.acctNumber);
        ADAO.setCustomerID(customerID);
        ADAO.setDescription(description);
        ADAO.setBalance(balance);
        try{
						Connection dbConnection = getDBConnection();
            ADAO.create(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new CreateException ("SQL Exception in create:" + se);
        }
        System.out.println("Leaving AccountEJB.ejbCreate() w/sequencer");
        return (acctNumber);
    }

    public String ejbCreate (String acctNumber, String customerID,
                                String description, double balance)
            throws DuplicateKeyException,CreateException {
        System.out.println("Entering AccountEJB.ejbCreate()");
        this.acctNumber = acctNumber;
        this.customerID = customerID;
        this.description = description;
        this.balance = balance;
        AccountDAO ADAO = new AccountDAO();
        ADAO.setAcctNumber(acctNumber);
        ADAO.setCustomerID(customerID);
        ADAO.setDescription(description);
        ADAO.setBalance(balance);
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
        ADAO.setAcctNumber((String)context.getPrimaryKey());
        try{
						Connection dbConnection = getDBConnection();
            ADAO.remove(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new RemoveException ("SQL Exception in remove");
        }
        System.out.println("Leaving AccountEJB.ejbRemove()");
    }

    public void ejbLoad() {
        System.out.println("Entering AccountEJB.ejbLoad()");
        AccountDAO ADAO = new AccountDAO();
        ADAO.setAcctNumber((String)context.getPrimaryKey());
        try{
						Connection dbConnection = getDBConnection();
            ADAO.load(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new EJBException (se);
        }
        acctNumber = ADAO.getAcctNumber();
        customerID = ADAO.getCustomerID();
        description = ADAO.getDescription();
        balance = ADAO.getBalance();
        System.out.println("Leaving AccountEJB.ejbLoad()");
    }

    public void ejbStore() {
        System.out.println("Entering AccountEJB.ejbStore()");
        AccountDAO ADAO = new AccountDAO();
        ADAO.setAcctNumber((String)context.getPrimaryKey());
        ADAO.setCustomerID(customerID);
        ADAO.setDescription(description);
        ADAO.setBalance(balance);
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

    public Collection ejbFindByCustomerID(String customerID) throws FinderException {
        System.out.println("Entering AccountEJB.ejbFindByCustomerID()");
        AccountDAO ADAO = new AccountDAO();
        ADAO.setCustomerID(customerID);
        Collection col = null;
        try{
						Connection dbConnection = getDBConnection();
            col = ADAO.findByCustomerID(dbConnection);
            dbConnection.close();
        } catch (java.sql.SQLException se) {
            throw new FinderException ("SQL Exception in find by customerID");
        }
        System.out.println("Leaving AccountEJB.ejbFindByCustomerID()");
        return col;
    }

    public void ejbPostCreate(String acctNumber, String customerID,
                                String description, double balance)
        throws DuplicateKeyException,CreateException {
    }

    public void ejbPostCreate(String customerID,
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