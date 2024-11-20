export default {
buildPDF() {
// Header Info
	const orientation = 'landscape'
	const title = 'Ingredient Tracing: ';
	const name = sel_ingr.selectedOptionLabel + ':  ' + tbl_Entity.selectedRow.batch_number;
	const descr = 'Product Batches created using this Ingredient Batch';
	var doc = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
	
const selectedColumns = ['purch_date', 'vndr_name', 'brnd_name', 'purch_dtl']; // Define the selected columns
const columnRenames = { // Define the column renames
  'purch_date': 'Purchase Date',
  'vndr_name': 'Vendor Name',
  'brnd_name': 'Brand Name',
  'purch_dtl': 'Purchase Detail'
};

// Get the pivoted data with selected columns and renames
const hdrBatch = this.pivotData(entity_Trace.data[0], selectedColumns, columnRenames);


// Column Styles for Batch Info
const hdrStyles = { 
   0: { cellWidth: 100, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      1: { cellWidth: 150, halign: 'left', fontStyle: 'bold' },
  };
// Create the table
  doc = pdfBundle.genTable(doc, hdrBatch, hdrStyles, 91);
// Batches Header
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.setTextColor('red');
  doc.text('Product Batches', 90, 200, null, null, 'center');
const columnStyles = { 
   0: { cellWidth: 200, halign: 'left', fontStyle: 'bold' },
      1: { cellWidth: 70, halign: 'center', fontStyle: 'bold', fillColor: '#ffffe6' },
      2: { cellWidth: 70, halign: 'center' },
      3: { cellWidth: 60, halign: 'center' },
      4: { cellWidth: 100, halign: 'center' },
  };
// Create the table
  doc = pdfBundle.genTable(doc, pdfTrace.data, columnStyles, 210);

	return doc.output("dataurlstring");
},
// Function to transform the data with selected columns
// Function to transform the data with selected columns and rename them
pivotData(item, selectedColumns, columnRenames) {
  const result = [];
  for (const [key, value] of Object.entries(item)) {
    if (selectedColumns.includes(key)) {
      const newKey = columnRenames[key] || key; // Use the new name if it exists, otherwise use the original key
      result.push({ Property: newKey, Value: value });
    }
  }
  return result;
}


}