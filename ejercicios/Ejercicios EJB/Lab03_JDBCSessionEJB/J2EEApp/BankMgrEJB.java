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

    public BankMgrEJB() { }

    public void ejbCreate() {
        System.out.println("Entering BankMgrEJB.ejbCreate()");
        Context c = null;
        if (this.jdbcFactory == null) {
            try {
                c = new InitialContext();
                this.jdbcFactory =
                  (javax.sql.DataSource)c.lookup("java:comp/env/jdbc/BankMgrDB");
            } catch (Exception e){ System.out.println("Error: " + e); }
	}
	System.out.println("Leaving BankMgrEJB.ejbCreate()");
    }

    public String loginUser(String pUsername, String pPassword) {
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

    public void setSessionContext(SessionContext sc) { }

    public void ejbRemove() { }

    public void ejbActivate() { }

    public void ejbPassivate() { }

}