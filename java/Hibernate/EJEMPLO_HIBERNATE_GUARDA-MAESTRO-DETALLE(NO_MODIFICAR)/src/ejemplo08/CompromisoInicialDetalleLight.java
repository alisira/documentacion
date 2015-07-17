package ejemplo08;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="compromisoinicialdetalle")
public class CompromisoInicialDetalleLight implements Serializable  {  
    
    @Id
    @Column(name="id_compromiso_inicial_detalle")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int idCompromisoInicialDetalle;

    @Column(name="monto")
    private Double monto;

    @ManyToOne
    @JoinColumn(name="id_compromiso_inicial")
    private CompromisoInicialLight compromisoInicial;

    public CompromisoInicialDetalleLight(){
    }

    
    
    public CompromisoInicialDetalleLight(CompromisoInicialLight comproIni, Double monto){
        //this.compromisoInicial = comproIni;           
        this.monto = monto;           
    }   

    public int getIdCompromisoInicialDetalle() {
        return idCompromisoInicialDetalle;
    }

    public void setIdCompromisoInicialDetalle(int idCompromisoInicialDetalle) {
        this.idCompromisoInicialDetalle = idCompromisoInicialDetalle;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public CompromisoInicialLight getCompromisoinicial() {
        return compromisoInicial;
    }

    public void setCompromisoinicial(CompromisoInicialLight compromisoinicial) {
        this.compromisoInicial = compromisoinicial;
    }
	
}