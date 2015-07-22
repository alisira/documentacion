/*
 * SequencerEJB.java
 */

package J2EEApp;

import javax.ejb.*;

public class SequencerEJB implements EntityBean {

    public String sequenceType;
    public int sequenceValue;
    private EntityContext context;

    public SequencerEJB() { } 
    
    public void setEntityContext(EntityContext ec) { 
        this.context = ec;
    }
  
    public void ejbActivate() { 
        sequenceType = (String)context.getPrimaryKey(); 
    }
  
    public void ejbPassivate() { 
        sequenceType = null; 
        sequenceValue = 0; 
    } 

    public void unsetEntityContext() { }
    public void ejbRemove() throws RemoveException { }
    public void ejbLoad() { }
    public void ejbStore() { }

    // business methods
    public String getNextSequenceValue() {
        System.out.println("Entering SequencerEJB.getNextSequenceValue()");
        System.out.println("sequenceValue is: " + this.sequenceValue);
        this.sequenceValue += 1;
        System.out.println("sequenceValue set to: " + this.sequenceValue);
        System.out.println("Leaving SequencerEJB.getNextSequenceValue()");
        return (new Integer(sequenceValue)).toString();
    }
}