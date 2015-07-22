
public class Lookupservice {
	
	public BusinessService getService(int service){
		switch (service){
		case BusinessDelegate.SERVICE1:
			return new BusinessService1();			
		case BusinessDelegate.SERVICE2:
			return new BusinessService2();
		default:
			return null;
		}
	}
	

}
