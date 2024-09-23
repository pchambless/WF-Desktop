export default {

rptConstants (doc) {

// WF Logo
	doc.addImage(appsmith.store.wfLogo, 'JPEG', 10, 5, 20, 20)
// Account Name
	const acctName = appsmith.store.acct_name;
	doc.setFontSize(18);
	doc.setFont(undefined, 'bold')
	doc.setTextColor("#ff6666");  // light red
	doc.text(acctName, 105, 13, null, null, "center");
// Report Date
	const date = "Date: " + moment().format('YYYY-MM-DD');
	doc.setFontSize(12);
	doc.setFont(undefined, 'normal')
	doc.setTextColor("black");
	doc.text(date, 195, 13, null, null, "right");
// set Header border
	doc.setLineWidth(0.5);
	doc.rect(10, 5, 190, 40);
	
	return doc;
}
}