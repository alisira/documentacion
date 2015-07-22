<%-- 
  begin: insert new code
  
  page directives
  
  - import the following elements...
    
    J2EEApp.CustomerWithAcctsData
    J2EEApp.AccountData
    J2EEApp.CustomerData
    java.util.*
    
  - indicate that the page is not an error page
  
  end: insert new code
--%>

<html>
<head><title> Customer Data </title></head>
<body>

<form method="get" >

<%-- 
  begin: insert new code
  
  useBean
  
  - retrive the CustomerWithAcctsData oject named "cwad" with session scope
    cwad was stored to the session in the servlet controller
  
  end: insert new code
--%>

<%--
  ********************************************************************
  - locate the JSP scripting elements in the remainder of the page
    and delimit them appropriately
  ********************************************************************
--%>

<h1>Accounts for:<br>

    ((cwad.getCustomerData()).getFirstName() + 
     " " +  
     (cwad.getCustomerData()).getLastName())

</h1>

if ((cwad.getAccounts()).isEmpty()) {

    <p><h3><strong>No accounts found!</strong></h3><p>

}
else {
    
    <%-- start table --%>
    <p><table border="1">

        <%-- output row headers --%>
        <tr><th><strong>Account Number</strong>
        <th><strong>Balance</strong>
        <th><strong>Description</strong></tr>
      
    <%-- output row data --%>
    Iterator i = (cwad.getAccounts()).iterator();
    AccountData acct = null;
    while (i.hasNext()) {
        acct = (AccountData)i.next();
        <tr>
            <td> acct.getAcctNumber() </td>
            <td> acct.getBalance() </td>
            <td> acct.getDescription() </td>
        </tr>
    }

    </table>

}

    <h3> 
        <p> 
        <input type="submit" value="Quit" name="QUIT">
        <input type="hidden" name="action" value="quit">
    </h3>

</form>

</body></html>