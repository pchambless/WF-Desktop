export default {

buildPDF () {
// Initialize jsPDF
		var doc = jspdf.jsPDF({
			orientation: 'portrait'});
		doc.text("",0,0);
		doc.setFont('times');
// Build Report
// Set the Content for Report Title, Title Value and Description
		const title = "Vendor Count:  ";
		const name = `${entity_PDF.data.length}`;
	  const descr = 'Your list of all Active Vendors.  (If you no longer use a Vendor, you can delete them, and they will no longer show up in your dropdowns.)'
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
      0: { fillColor: '#ffffe6', fontStyle: 'bold' , cellWidth: 40 },
			1: { cellWidth: 22},
			2: { cellWidth: 15, halign: 'right' },
			3: { cellWidth: 19, halign: 'right' },
			4: { cellWidth: 30, halign: 'left' },
			5: { cellWidth: 26, halign: 'left' },
			6: { cellWidth: 26, halign: 'left' }
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