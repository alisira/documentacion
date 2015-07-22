
public class MathEngine {
	double number = -1;
	
	public MathEngine(){
		System.out.println("Generando -number ramdom");
		number = Math.random()*5;
	}
	
	public double getNumber(){
		return number;
	}

}
