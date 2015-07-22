/*
 * Controller.java
 */

/**
* package J2EEApp;
**/

package J2EEApp;

import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.*;
import javax.naming.*;

/**
 * MVC controller...web tier entry point to banking application.
 * Provides processing logic for screen navigation and bean management.
**/

public class Controller extends HttpServlet {

  private BankMgrHome myBankMgrHome;

  private static String LOGIN_SCREEN = "/J2EEApp/Login";
  private static String QUIT_SCREEN = "/J2EEApp/QuitMessage";
  private static String LOGIN_ERROR_SCREEN = "/J2EEApp/LoginError";
  private static String CUSTOMER_SCREEN = "/J2EEApp/ShowCustomerAccts.jsp";
  private static String DEFAULT_SCREEN = LOGIN_SCREEN;

  public void init(ServletConfig config) throws ServletException {
    super.init(config);
    initMyBankMgrHome();
  }

  public void destroy() { }

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, java.io.IOException {
    processRequest(request, response);
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, java.io.IOException {
    processRequest(request, response);
  }

  public String getServletInfo() {
    return "This servlet is the main controller for the Banking Application";
  }

  /*************************************************************************/

  protected void processRequest(HttpServletRequest request,HttpServletResponse response) throws ServletException, java.io.IOException {

    System.out.println("Entering controller.processRequest()");
    String url = null;

    // get session...create if first time in
    HttpSession session = request.getSession(true);

    // retrieve/initialize action and display results in output screen
    String currAction = (request.getParameter("action") != null) ? request.getParameter("action") : null;
    System.out.println("The current action is: " + ((currAction != null) ? currAction : "null"));

    if (currAction == null) {
      // display first screen...login screen
      System.out.println("currAction is null");
      url = LOGIN_SCREEN;
    }
    else {

      //**************************************************
      // start validateLogin
      //**************************************************
      if (currAction.equals("validateLogin")) {
        System.out.println("In action validateLogin");

        String un = request.getParameter("username");
        String pw = request.getParameter("password");

        if ((un == null) || !(loginUser(un, pw, session))) {
          System.out.println("Error: invalid login attempt for userName: " +
                                un + " and password: " + pw);
          url = LOGIN_ERROR_SCREEN;
        }
        else {
          System.out.println("In action validateLogin for userName: " +
                              un + " and password: " + pw);
          url = CUSTOMER_SCREEN;
        }
      }
      //**************************************************
      // end validateLogin
      //**************************************************

      //**************************************************
      // start loginErrorConfirmed
      //**************************************************
      else if (currAction.equals("loginErrorConfirmed")) {
        System.out.println("In action loginErrorConfirmed");
        url = LOGIN_SCREEN;
      }
      //**************************************************
      // end loginErrorConfirmed
      //**************************************************

      //**************************************************
      // start quit
      //**************************************************
      else if (currAction.equals("quit")) {
        System.out.println("In action quit");
        session.invalidate();
        url = QUIT_SCREEN;
      }
      //**************************************************
      // end quit
      //**************************************************
      else {
        System.out.println("Encountered unhandled action: " + currAction + " in controller");
        url = DEFAULT_SCREEN;
      }
    }
    System.out.println("Set url to: " + url);

    if (url == CUSTOMER_SCREEN) {
      // display customer data
      try {
        BankMgr bm = myBankMgrHome.create();
        session.setAttribute("cwad",
          bm.getCustomerWithAcctsData((String)session.getAttribute("userID")));
        bm.remove();
        ServletContext sc = getServletContext();
        RequestDispatcher rd = sc.getRequestDispatcher(url);
        System.out.println("Leaving controller to display customer info");
        rd.forward(request,response);
      } catch (Exception e) {
        System.out.println("Exception retrieving CustomerWithAcctsData");
        System.out.println("Error: " + e);
       }
    }
    else {
      if (url == LOGIN_ERROR_SCREEN) {
        displayLoginErrorScreen(response);
      }
      else if (url == QUIT_SCREEN) {
        displayQuitScreen(response);
      }
      else if ((url == DEFAULT_SCREEN) || (url == LOGIN_SCREEN)) {
        displayLoginScreen(response);
      }
      else {
        System.out.println("Unhandled URL...reverting to login screen");
        displayLoginScreen(response);
      }
    }
  } // end of processRequest()


/***********************************************************************************/

  private  void displayLoginScreen(HttpServletResponse response) throws java.io.IOException {
    System.out.println("Entering controller.displayLoginScreen()");
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<html><title>User Login</title>");
    out.println("<form method=\"get\">");
    displayLoginDataFields(out);
    out.println("</form></html>");
    if (out != null) out.close();
    System.out.println("Leaving controller.displayLoginScreen()");
    return;
  }

  private  void displayLoginErrorScreen(HttpServletResponse response) throws java.io.IOException {
    System.out.println("Entering controller.displayLoginErrorScreen()");
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<html><title>Login Error</title>");
    out.println("<form method=\"get\">");
    out.println("<h3>Error validating user login request...<p>");
    displayLoginDataFields(out);
    out.println("</form></html>");
    if (out != null) out.close();
    System.out.println("Leaving controller.displayLoginErrorScreen()");
    return;
  }

  private void displayLoginDataFields(java.io.PrintWriter out) {
    out.println("<h3>Please enter your username and password:");
    out.println("<table><tr><td>Username:<td><input name=\"username\" type=\"text\">");
    out.println("<tr><td>Password:<td><input name=\"password\" type=\"password\">");
    out.println("</table>");
    out.println("<input type=\"submit\" value=\"Login\" name=\"LOGIN\">");
    out.println("<input type=\"reset\" name=\"resetButton\" value=\"Reset\">");
    out.println("<input type=\"hidden\" name=\"action\" value=\"validateLogin\">");
    return;
  }

  /*
  private void displayCustomerWithAccts(HttpServletResponse response, CustomerWithAcctsData pCWAD)
  	throws java.io.IOException {
    System.out.println("Entering controller.displayCustomerWithAccts()");
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<html><title>Customer Data</title>");
    out.println("<form method=\"GET\">");
    out.println("<h1>Accounts for:<br>");
    out.println((pCWAD.getCustomerData()).getFirstName());
    out.println(" ");
    out.println((pCWAD.getCustomerData()).getLastName());
    out.println("</h1>");
    out.flush();
    if ((pCWAD.getAccounts()).isEmpty()) {
      out.println("<p><h3><strong>No accounts found!</strong>");
      out.println("</h3><p>");
    }
    else {
      //start table
      out.println("<p><table border=\"1\">");
      //output row headers
      out.println("<tr><th><strong>Account Number</strong>");
      out.println("<th><strong>Balance</strong>");
      out.println("<th><strong>Description</strong></tr>");
      //output row data
      Iterator i = (pCWAD.getAccounts()).iterator();
      AccountData acct = null;
      while (i.hasNext()) {
        acct = (AccountData)i.next();
        out.println("<tr><td>");
        out.println(acct.getAcctNumber());
        out.println("</td><td>");
        out.println(acct.getBalance());
        out.println("</td><td>");
        out.println(acct.getDescription());
        out.println("</td></tr>");
      }
      //end table
      out.println("</table><p>");
    }
    //output logout button
    out.println("<p><h3><input type=\"submit\" value=\"Quit\"");
    out.println(" name=\"QUIT\"></h3>");
    out.println("<input type=\"hidden\" name=\"action\" value=\"quit\">");
    out.println("</body></html>");
    if (out != null) out.close();
    System.out.println("Leaving controller.displayCustomerWithAccts()");
    return;
  }
  */

  private void displayQuitScreen(HttpServletResponse response) throws java.io.IOException {
    System.out.println("Entering controller.displayQuitScreen ()");
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<html><title>QUIT</title>");
    out.println("<body><h1>Logout successful...");
    out.println("<br>Session cancelled...");
    out.println("<br>Goodbye</h1></body></html>");
    if (out != null) out.close();
    System.out.println("Leaving controller.displayQuitScreen ()");
  }

  private void initMyBankMgrHome() {
    System.out.println("Entering Controller.initMyBankMgrHome()");
    try {
      Context c = new InitialContext();
      Object result = c.lookup("bankmgrServer");
      myBankMgrHome =
        (BankMgrHome)javax.rmi.PortableRemoteObject.
          narrow(result,BankMgrHome.class);
    }
    catch (Exception e) { System.out.println(e); }
    System.out.println("Leaving Controller.initMyBankMgrHome()");
  }

  private boolean loginUser(java.lang.String username,java.lang.String password, HttpSession session) {
    System.out.println("Entering controller.loginUser()");
    String uid = null;
    try {
      BankMgr bm = myBankMgrHome.create();
      uid = bm.loginUser(username, password);
      System.out.println("UID for username: " + username + " with password: " + password + " is: " + uid);
      session.setAttribute("userID", uid);
      bm.remove();
    } catch (Exception e) {
      System.out.println("Exception in controller.loginUser()");
    }
    System.out.println("Leaving controller.loginUser()");
    return (uid != null);
  }

} // end of controller