/*
 * HelloWorld.java
 */

package Client;

import Server.*;
import javax.naming.*;
import javax.rmi.*;

public class HelloWorld extends Object {

    public HelloWorld() {
    }
    
    public static void main (String args[]) {
        try {
            //get home object
            Context c = new InitialContext();
            Object result = c.lookup("helloServer");
            // cast the object to a home object
            HelloHome h = 
                (HelloHome)javax.rmi.PortableRemoteObject.narrow
                    (result,HelloHome.class);
            //get session bean instance and make request
            Hello r = h.create();
            System.out.println("Server says:" + r.sayHello());
            // remove session bean instance
            r.remove();
        }
        catch (Exception e) { System.out.println("Error: " + e); }
    }
}