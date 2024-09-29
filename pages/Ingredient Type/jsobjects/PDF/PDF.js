export default {

buildPDF () {
		// Initialize jsPDF
		const doc = jspdf.jsPDF();
		doc.text("",0,0);
		doc.setFont('times')
		this.tblHeader(doc);
		this.tblData(doc)

		return doc.output("dataurlstring")

},
 tblHeader(doc) {
	 // Define the header content
	const acctName = appsmith.store.acct_name;
	const title = "Ingredient Type: " + tbl_Entity.selectedRow.name + " (as of " + moment().format('YYYY-MM-DD') + ')';
	 	doc.addImage(appsmith.store.wfLogo, 'JPEG', 10, 5, 20, 20)
		doc.setFontSize(18);
	  doc.setFont(undefined, 'bold')
		doc.setTextColor("red");
		doc.text(acctName, 105, 13, null, null, "center"); 
		doc.setFontSize(14);
		doc.setTextColor("black");
		doc.text(title, 105, 22, null, null, "center"); 
		doc.setLineWidth(.3);
		doc.rect(10, 5, 190, 20);

	 return doc;
 },
	
tblData(doc) {
// Extract headers dynamically from the first object in the data array
		var tblHead = [Object.keys(entity_PDF.data[0])];
// Map the data to match the headers
		var tblData = entity_PDF.data.map(item => Object.values(item));
	  var tblBody = [tblHead].concat(tblData);
		console.log(tblData);
		jspdf_autotable.default(doc, {
    fillColor: 'green',
		font: 'times',
		head: tblBody[0],
		body: tblData,
		theme: 'striped',
		startY: 30, // Adjust the Y position as needed
		halign: 'left',
		});
		return doc;
}
}