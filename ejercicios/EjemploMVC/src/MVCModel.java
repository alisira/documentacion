
public class MVCModel {

	String[] nombres;
	
	public MVCModel(){
		super();
		nombres = new String[4];
		nombres[0]= "Jose";
		nombres[1]= "Pedro";
		nombres[2]= "Luis";
		nombres[3]= "Carlos";
	}
	
	public String[] getNombres(){
		return nombres;
	}
	
	public void setNombres (String[] nombres){
		this.nombres = nombres;
	}
	
	public void actualizarLista(){
		nombres = new String[4];
		nombres[0]= "Carla";
		nombres[1]= "Maria";
		nombres[2]= "Carolina";
		nombres[3]= "Paola";
		System.out.println("Lista Actualizada");
		
	}
	
	
}
