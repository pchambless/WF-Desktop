export default {
buildPDF() {
// Header Info
	const orientation = 'l'
	const title = 'Worksheet: ';
	const name = sel_Type.selectedOptionLabel + ': ' + sel_prod.selectedOptionLabel;
	const descr = 'Batch: ' + tbl_Entity.selectedRow.batch_number + ' - ' + tbl_Entity.selectedRow.comments
	var result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);

// Products Header
		result = pdfBundle.genTblHeader (result.doc, tbl_Entity.selectedRow.batch_number + ': Ingredients', result.finalY)

// Prep the Products Table
	let columnStyles = { 
	0: { cellWidth: 45, halign: 'center', fontStyle: 'bold' },
	1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
	2: { cellWidth: 290, halign: 'left' },
	3: { cellWidth: 290, halign: 'left' },
  };
// Create Products table
  result = pdfBundle.genTable(result.doc, pdfWrkSht_Ingr.data, columnStyles, result.finalY);
	
// Tasks Header
		result = pdfBundle.genTblHeader (result.doc, tbl_Entity.selectedRow.batch_number + ': Tasks', result.finalY)

// Build the Product Task table
	columnStyles = { 
		0: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
		1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
		2: { cellWidth: 300, halign: 'left' }
}
// Create the table
  result = pdfBundle.genTable(result.doc, pdfWrlSht_Task.data, columnStyles, result.finalY);

	return result.doc.output("dataurlstring");
}
}

