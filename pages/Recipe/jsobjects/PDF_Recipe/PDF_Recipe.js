export default {

buildPDF () {
		const doc = jspdf.jsPDF();
		doc.text("",0,0);
		doc.setFont('times')
// Build Report
		PDF_Constants.rptConstants(doc)
		this.rptName(doc);
		this.rptData(doc)

		return doc.output("dataurlstring")
},
rptName(doc) {
// Set the Content for Report Name
	const title = "Recipe: ";
	const name = entity_Select.data[0].name;
	const desc = entity_Select.data[0].descr
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
    const totalWidth = titleWidth + nameWidth
// Format Report Name and info
    const startX = (210 - totalWidth) / 2; // Center the text
    doc.text(title, startX, 20);
    doc.setFont("times", "bold");
    doc.text(name, startX + titleWidth, 20);
// Format Product Description
		doc.setFontSize(12);
		doc.setFont("times", 'italic')
	  doc.setTextColor("blue");  // light red
		doc.text(desc, 105, 28, 
				{ maxWidth: 120, align: "center" },"center");	  
	
	  return doc;
 },
	
rptData(doc) {
// Extract headers dynamically from the first object in the data array
		var tblHead = [Object.keys(entity_PDF.data[0])];
// Map the data to match the headers
		var tblData = entity_PDF.data.map(item => Object.values(item));
	  var tblBody = [tblHead].concat(tblData);
		jspdf_autotable.default(doc, {
// Ingredient name bold and yellow
		columnStyles: { 
      1: { fillColor: '#ffffe6', fontStyle: 'bold' }
    },
		font: 'times',
		head: tblBody[0],
		body: tblData,
		theme: 'grid',
		startY: 50, // Adjust the Y position as needed
		halign: 'left',
		});
		return doc;
}
}