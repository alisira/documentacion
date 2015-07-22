import java.util.Collection;
import javax.sql.RowSet;

public interface CustomerDAO {

	public int insertCustomer();
	public boolean deleteCustomer();
	public Customer findCustomer();
	public boolean updateCustomer(Customer customer);
	public RowSet selectCustomersRS();
	public Collection selectCustomersTO(Customer customer);
	
}
