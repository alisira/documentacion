
public class BusinessDelegate {
	public static final int SERVICE1 = 10;
	public static final int SERVICE2 = 20;
	
	Lookupservice look;
	BusinessService bs1;
	BusinessService bs2;
	
	public BusinessDelegate(){
		look = new Lookupservice();
	}
	
	public void executeService1(){
		bs1 = look.getService(BusinessDelegate.SERVICE1);
		bs1.execute();
	}
	
	public void executeService2(){
		bs2 = look.getService(BusinessDelegate.SERVICE2);
		bs2.execute();
	}
	
	
	

}
