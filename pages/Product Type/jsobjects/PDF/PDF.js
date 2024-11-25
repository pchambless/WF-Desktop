export default {
buildPDF() {
// Header Info
	const orientation = 'landscape'
	const title = 'Product Type: ';
	const name = tbl_Entity.selectedRow.name;
	const descr = 'Products';
	var doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);

// build Tables
	let startY = 105;
// Products Header
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor('red');
    doc.text(name + ': Products', 30, startY, null, null, 'left');

// Prep the Products Table
	startY +=10;
	let columnStyles = { 
	0: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
	1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
	2: { cellWidth: 300, halign: 'left' },
	3: { cellWidth: 60, halign: 'center' },
	4: { cellWidth: 60, halign: 'center' },
	5: { cellWidth: 100, halign: 'center' },
  };
// Create Products table
  result = pdfBundle.genTable(doc, entity_PDF.data, columnStyles, startY);
	
// Tasks Header
		doc = result.doc
		startY = result.finalY + 80
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor('red');
    doc.text(name + ': Tasks', 30, startY, null, null, 'left');

	startY += 8
// Build the Product Task table
	columnStyles = { 
		0: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
		1: { cellWidth: 160, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
		2: { cellWidth: 300, halign: 'left' }
}
// Create the table
  var result = pdfBundle.genTable(doc, task_List.data, columnStyles, startY);

	return result.doc.output("dataurlstring");
}
}

