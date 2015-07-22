
package javahello;

public class HelloWorld extends Object {

    /** Creates new HelloWorld */
    public HelloWorld() {
    }

    public static void main (String args[]) {
        System.out.println("Entering HelloWorld.main()");
        HelloWorld hw = new HelloWorld();
        hw.sayHello();
        System.out.println("Leaving HelloWorld.main()");
    }

    public void sayHello() {
        System.out.println("Entering HelloWorld.sayHello()");
        System.out.println("Hello, World");
        System.out.println("Leaving HelloWorld.sayHello()");
    }
}