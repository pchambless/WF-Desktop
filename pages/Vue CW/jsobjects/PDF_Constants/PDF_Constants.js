export default {

rptConstants (doc, title, name, descr) {

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
	this.rptName(doc, title, name, descr)
	
	return doc;
},
	
rptName(doc, title, name, descr) {
	
// Report Name and Info
	doc.setFontSize(14);
	doc.setTextColor("black");
// Set title, name, and date on the same line
    doc.setFontSize(14);
    doc.setTextColor("black");
    doc.setFont("times", "normal");
// Get Report Name element widths    
    const titleWidth = doc.getTextWidth(title);
    const nameWidth = doc.getTextWidth(name);
    const totalWidth = titleWidth + nameWidth;
// Format Report Name and info
    const startX = (210 - totalWidth) / 2; // Center the text
    doc.text(title, startX, 20);
    doc.setFont("times", "bold");
    doc.text(name, startX + titleWidth, 20);
// Format Description
		doc.setFontSize(12);
		doc.setFont("times", 'italic')
	  doc.setTextColor("blue");  // light red
		doc.text(descr, 105, 28, 
				{ maxWidth: 140, align: "center" },"center");	 
	
	  return doc;
 },
}