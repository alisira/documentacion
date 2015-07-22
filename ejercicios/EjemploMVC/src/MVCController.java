import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;


public class MVCController implements ActionListener {
	
	static Logger logger = Logger.getLogger(MVCController.class);
	
	MVCModel model;
	MVCView view;
	boolean visible = false;
	
	public MVCController(){
		super();
		BasicConfigurator.configure();
		
		model = new MVCModel();
		view = new MVCView (model, this);
		
		logger.info("Controlador Listo");
		
	}
	
	public MVCView getView(){
		return view;
	}
	
	public void setVisible(boolean visible){
		this.visible = visible;
		view.setVisible(visible);
	}
	
	public void actionPerformed(ActionEvent e){
		logger.info("Atrapando el evento boton");
		model.actualizarLista();
		view.actualizarLista(model.getNombres());
		
	}

}
