import java.awt.BorderLayout;
import java.awt.Dimension;

import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JFrame;

public class MVCView extends JFrame {

	JPanel panel;
	MVCController controller;
	JList<String> list;
	JButton button;
	
	public MVCView (MVCModel model, MVCController controller){
		super();
		this.controller = controller;
		this.setVisible(false);
		
		panel = new  JPanel();
		panel.setLayout(new BorderLayout());
		
		list = new JList <String>(model.getNombres());
		
		panel.add(list, BorderLayout.CENTER);
		
		button = new JButton();
		button.setText("Actualizar");
		panel.add(button, BorderLayout.SOUTH);
		
		button.addActionListener(controller);
		
		this.setSize(new Dimension(300,300));
		this.add(panel);
		
	}
	
	public void actualizarLista(String[] nombres){
		DefaultListModel<String> listModel = new DefaultListModel<String>();
		listModel.addElement(nombres[0]);
		listModel.addElement(nombres[1]);
		listModel.addElement(nombres[2]);
		listModel.addElement(nombres[3]);				
	
	
		list.setModel(listModel);
	
		this.validate();
	
		System.out.println("Componente Listo Listo");
	
	}
}
