export default {
buildPDF() {
// Header Info
	const orientation = 'l'
	const title = 'Product Type: ';
	const name = tbl_Entity.selectedRow.name;
	const descr = 'Products';
	var result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);

// Products Header
		result = pdfBundle.genTblHeader (result.doc, name + ': Products', result.finalY)

// Prep the Products Table
	let columnStyles = { 
	0: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
	1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
	2: { cellWidth: 340, halign: 'left' },
	3: { cellWidth: 60, halign: 'center' },
	4: { cellWidth: 60, halign: 'center' },
	5: { cellWidth: 100, halign: 'center' },
  };
// Create Products table
  result = pdfBundle.genTable(result.doc, entity_PDF.data, columnStyles, result.finalY + 5);
	
// Tasks Header
		result = pdfBundle.genTblHeader (result.doc, name + ': Tasks', result.finalY + 25)

// Build the Product Task table
	columnStyles = { 
		0: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
		1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
		2: { cellWidth: 300, halign: 'left' }
}
// Create the table
  result = pdfBundle.genTable(result.doc, task_List.data, columnStyles, result.finalY);

	return result.doc.output("dataurlstring");
}
}

