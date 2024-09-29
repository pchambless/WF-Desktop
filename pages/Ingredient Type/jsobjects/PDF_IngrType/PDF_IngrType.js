export default {

buildPDF () {
// Initialize jsPDF
		var doc = jspdf.jsPDF({
			orientation: 'portrait'});
		doc.text("",0,0);
		doc.setFont('times');
// Build Report
// Set the Content for Report Title, Title Value and Description
		const title = `Ingredient Type: `;
		const name = tbl_Entity.selectedRow.name;
	  const descr = tbl_Entity.selectedRow.description;
		PDF_Constants.rptConstants(doc,title,name,descr);
		this.rptData(doc)

		return doc.output("dataurlstring")
},
	
rptData(doc) {
// Extract headers dynamically from the first object in the data array
		var tblHead = [Object.keys(entity_PDF.data[0])];
// Map the data to match the headers
		var tblData = entity_PDF.data.map(item => Object.values(item));
	  var tblBody = [tblHead].concat(tblData);
		jspdf_autotable.default(doc, {
// Name attributes
		columnStyles: { 
      1: { fillColor: '#ffffe6', fontStyle: 'bold' , cellWidth: 40 },
			0: { cellWidth: 15, halign: 'center', fontStyle: 'bold' },
			2: { cellWidth: 17, halign: 'right' },
			5: {cellWidth: 17, halign: 'center'}
			
    },
		
		font: 'times',
		head: tblBody[0],
		body: tblData,
		theme: 'grid',
		startY: 46, // Adjust the Y position as needed
		halign: 'left'

		});
		return doc;
}
}