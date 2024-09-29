export default {

rptConstants (doc, title, name, descr) {

// WF Logo
	doc.addImage(appsmith.store.wfLogo, 'JPEG', 10, 5, 20, 20)
// Account Name
	const acctName = appsmith.store.acct_name;
	doc.setFontSize(18);
	doc.setFont(undefined, 'bold')
	doc.setTextColor("#ff6666");  // light red
	doc.text(acctName, 115, 13, null, null, "center");
// Report Date
	const date = "Date: " + moment().format('YYYY-MM-DD');
	doc.setFontSize(12);
	doc.setFont(undefined, 'normal')
	doc.setTextColor("black");
	doc.text(date, 200, 13, null, null, "right");
// set Header border
	doc.setLineWidth(0.5);
	doc.rect(10, 5, 197, 40);
	this.rptTitle(doc, title, name, descr)
	
	return doc;
},
	
rptTitle(doc, title, titleVal, descr) {
	
// Report Name and Info
	doc.setFontSize(14);
	doc.setTextColor("black");
// Set title, name, and date on the same line
    doc.setFontSize(14);
    doc.setTextColor("black");
    doc.setFont("times", "normal");
// Get Report Name element widths    
    const titleWidth = doc.getTextWidth(title);
    const nameWidth = doc.getTextWidth(titleVal);
    const totalWidth = titleWidth + nameWidth;
// Format Report Name and info
    const startX = (230 - totalWidth) / 2; // Center the text
    doc.text(title, startX, 20);
    doc.setFont("times", "bold");
    doc.text(titleVal, startX + titleWidth, 20);
// Format Description
		doc.setFontSize(12);
		doc.setFont("times", 'italic')
	  doc.setTextColor("blue");  // light red
		doc.text(descr, 115, 28, 
				{ maxWidth: 135, align: "center" },"center");	 
	
	  return doc;
 },
	
}