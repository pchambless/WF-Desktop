export default {
	emailList() {
    const emailList = tbl_users.selectedRows.map(row => row.email);
    
    // Join the extracted emails with semicolons
    const taggedEmails = emailList.join(', ');
    
    console.log(taggedEmails);
    return taggedEmails; 
	}
}