export default {

buildPDF () {
// Initialize jsPDF
		var doc = jspdf.jsPDF();
		doc.text("",0,0);
		doc.setFont('times')
// Build Report
// Set the Content for Report Name and Description
		const title = "Ingredient Type: ";
		const name = tbl_Entity.selectedRow.name;
	  const descr = tbl_Entity.selectedRow.description || 'No Description'
		PDF_Constants.rptConstants(doc,title,name,descr);
		this.rptData(doc)

		return doc.output("dataurlstring")
},
	
rptData(doc) {
// Extract headers dynamically from the first object in the data array
		var tblHead = [Object.keys(entity_ingrList.data[0])];
// Map the data to match the headers
		var tblData = entity_ingrList.data.map(item => Object.values(item));
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
		startY: 46, // Adjust the Y position as needed
		halign: 'left',
		});
		return doc;
}
}