<%@ page import="J2EEApp.CustomerWithAcctsData, J2EEApp.AccountData,
                   J2EEApp.CustomerData, java.util.*" 
            isErrorPage="false" %>
<html>
<head><title> Customer Data </title></head>
<body>

<form method="get" >

<jsp:useBean id="cwad" scope="session" class="J2EEApp.CustomerWithAcctsData" /> 

<h1>Accounts for:<br>
    <%= ((cwad.getCustomerData()).getFirstName() + 
        " " +  
        (cwad.getCustomerData()).getLastName()) %>
</h1>
<%
if ((cwad.getAccounts()).isEmpty()) {
%>
    <p><h3><strong>No accounts found!</strong></h3><p>

<%    
}
else {
%>
    
    <%-- start table --%>
    <p><table border="1">

        <%-- output row headers --%>
        <tr><th><strong>Account Number</strong>
        <th><strong>Balance</strong>
        <th><strong>Description</strong></tr>
      
    <%-- output row data --%>
    <%
    Iterator i = (cwad.getAccounts()).iterator();
    AccountData acct = null;
    while (i.hasNext()) {
        acct = (AccountData)i.next();
    %>
        <tr>
            <td> <%= acct.getAcctNumber() %> </td>
            <td> <%= acct.getBalance() %> </td>
            <td> <%= acct.getDescription() %> </td>
        </tr>
    <%
    }
    %>

    </table>

<%
}
%>

    <h3> 
        <p> 
        <input type="submit" value="Quit" name="QUIT">
        <input type="hidden" name="action" value="quit">
    </h3>

</form>

</body></html>