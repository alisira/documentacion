
public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub;
		Fachada fachada = new Fachada();
		
		System.out.println("Antes de procesar el request-> " + fachada.getStatusRequest());
		
		fachada.processRequest();
		
		System.out.println("Despues de procesar el request-> " + fachada.getStatusRequest());
		
		System.out.println("Numero aleatorio-> " + fachada.getNumber());

	}

}
