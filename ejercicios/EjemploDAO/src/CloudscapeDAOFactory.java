import java.sql.*;

public class CloudscapeDAOFactory extends DAOFactory {
	
	public static final String DRIVER = "COM.cloudscape.core.RmiJdbcDriver";
	public static final String DBURL = "jdbc:cloudscape:rmi://localhost:1099/core/CoreJ2EEDB";
	
	public static Connection createConnection(){
		//use driever and DBURL to create a connection
		//Recommend connectio n pool implementation/usage
		Connection c = null;
		return c;
	}
	
	public CustomerDAO getCustomerDAO(){
		return new CloudscapeCustomerDAO();
	}

}
