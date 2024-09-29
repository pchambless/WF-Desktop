export default {

buildPDF () {
// Initialize jsPDF
		var doc = jspdf.jsPDF({
			orientation: 'portrait'});
		doc.text("",0,0);
		doc.setFont('times');
// Build Report
// Set the Content for Report Title, Title Value and Description
		const title = sel_Type.selectedOptionLabel + ` Ingredients: `;
		const name = `${ingr_PDF.data.length}`;
	  const descr = 'Your list of Active Ingredients.  (If you no longer use an Ingredient(s), you can delete them, and they will no longer show up in your dropdowns.)'
		PDF_Constants.rptConstants(doc,title,name,descr);
		this.rptData(doc)

		return doc.output("dataurlstring")
},
	
rptData(doc) {
// Extract headers dynamically from the first object in the data array
		var tblHead = [Object.keys(ingr_PDF.data[0])];
// Map the data to match the headers
		var tblData = ingr_PDF.data.map(item => Object.values(item));
	  var tblBody = [tblHead].concat(tblData);
		jspdf_autotable.default(doc, {
// Name attributes
		columnStyles: { 
			0: { cellWidth: 16},
			1: { fillColor: '#ffffe6', fontStyle: 'bold' , cellWidth: 40 },
			2: { cellWidth: 23, halign: 'right' },
			3: { cellWidth: 20, halign: 'center' },
			4: { cellWidth: 20, halign: 'center' },
			5: { cellWidth: 18, halign: 'center' },
			6: { cellWidth: 20, halign: 'center' },
			7: { cellWidth: 18, halign: 'center' },
			8: { cellWidth: 18, halign: 'center' },
			9: { cellWidth: 18, halign: 'center' },
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