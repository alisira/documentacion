import 
java.util.Collection;
public class DAO_TOTest {
	
	public static void main (String[] args){
		
		//crea el requerido DAO Factory
		DAOFactory cloudscapeFactory = DAOFactory.getDAOFactory(DAOFactory.CLOUDSCAPE);
		
		//Crea un DAO
		CustomerDAO custDAO = cloudscapeFactory.getCustomerDAO();
	
		
		//Crea un nuevo cliente
		int newCustNO = custDAO.insertCustomer();
		
		//Encuentra un cliente
		Customer cust = custDAO.findCustomer();
		
		
		String streetAddres = "Caracas";
		//modifica el valos en el TO
		cust.setStreetAddress (streetAddres);
		
		//actualizar el customer object usando DAO
		custDAO.updateCustomer(cust);
		
		//delete a customer object
		custDAO.deleteCustomer();
		
		//select all customers in the same city
		Customer criteria = new Customer();
		
		criteria.setCity("New York");
		Collection customerList = custDAO.selectCustomersTO(criteria);
		//return customersList = collection of Customer
		//Transferc Object. Iterate throgh this collection to get values
		
		
	}
	

}
