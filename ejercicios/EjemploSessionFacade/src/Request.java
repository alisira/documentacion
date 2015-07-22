
public class Request {

	boolean status = false;
	
	public Request(){
		super();
		System.out.println("Request Creado");
	}
	
	public boolean isStatus(){
		return status;
	}
	
	public void setStatus(boolean status){
		this.status = status;
	}
	
	public void procesar(){
		System.out.println("Procesando Request!!");
		status = true;
	}
	
}
