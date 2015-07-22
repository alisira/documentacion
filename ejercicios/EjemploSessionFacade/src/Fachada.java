
public class Fachada implements InterfaceFachada {
	Request req;
	MathEngine engine;
	
	public Fachada (){
		req = new Request();
		engine = new MathEngine();
	}

	public double getNumber(){
		return engine.getNumber();
	}
	
	public void processRequest(){
		req.procesar();
	}
	
	public boolean getStatusRequest(){
		System.out.println("Obteniendo estatus del request");
		return req.isStatus();
	}
}
