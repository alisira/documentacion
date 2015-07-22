package test;

import java.util.Properties;
import javax.naming.InitialContext;
import javax.naming.Context;
import javax.naming.NamingException;


public class ClienteEJB {
    /*location of JBoss JNDI Service provider the client will use.
    It should be URL string.*/
    private static final String PROVIDER_URL = "jnp://127.0.0.1:1099";
    //private static final String PROVIDER_URL = "jnp://127.0.0.1:4447";
    
     
    /*specifying the list of package prefixes to use when
    loading in URL context factories. colon separated*/
    private static final String JNP_INTERFACES = "org.jboss.naming:org.jnp.interfaces";
     
    /*Factory that creates initial context objects.
    fully qualified class name. */
    private static final String INITIAL_CONTEXT_FACTORY = "org.jnp.interfaces.NamingContextFactory";
    
    private static Context initialContext;
    
    private static final String LOOKUP_STRING = "EjemploEJB/remote";
    
	private static void configurarContexto() {
		if (initialContext == null) {
            //Properties extends HashTable
            Properties prop = new Properties();                  
            prop.put(Context.INITIAL_CONTEXT_FACTORY, INITIAL_CONTEXT_FACTORY);
            prop.put(Context.URL_PKG_PREFIXES, JNP_INTERFACES);
            prop.put(Context.PROVIDER_URL, PROVIDER_URL);
            
            try {
				initialContext = new InitialContext(prop);
				System.out.println("Contexto Inicial Creado!!");
			} catch (NamingException e) {
				System.out.println("Exception al crear el contexto inicial");
				e.printStackTrace();
			}			
        }
	}

	public static void main(String[] args) {
		configurarContexto();
		EjemploEJBRemote bean = hacerLookup();
        //3. Call business logic
		//System.out.println(bean.digaHola());
		System.out.println(bean.digaHola());

	}
	
    private static EjemploEJBRemote hacerLookup(){
    	EjemploEJBRemote  bean = null;
        try{
                bean = (EjemploEJBRemote)initialContext.lookup(LOOKUP_STRING);
                System.out.println(bean.toString());
                
        }catch(NamingException e){
            e.printStackTrace();
        }
        return bean;
    }

}