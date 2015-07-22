 
public abstract class DAOFactory {
	//Lista de tipos de DAO soportados por la fatorya
	
	
	public static final int CLOUDSCAPE = 1;
	public static final int ORACLE = 2;	
	public static final int  SYBASE =3;
	
	/*Habra un metodo por cada DAO que pueda ser creado
	 * TThe concrete factories wil have to implement this metodos
	 * 
	 */
	
	public abstract CustomerDAO getCustomerDAO();
	
	public static DAOFactory getDAOFactory (int whichFactory){
		
		switch(whichFactory){
			case CLOUDSCAPE:
				return new CloudscapeDAOFactory();
			case ORACLE:
				//return new OracleDAOFactory;
			case SYBASE:
				//return SybaseDAOFactory;
			default:
				return null;
		}
	}
	

}
