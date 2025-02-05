export default {
  buildPDF() {
    // Header Info
    const orientation = 'p';
    const title = 'Ingredient Tracing: ';
    const name = sel_ingr.selectedOptionLabel;
    const descr = 'Product Batches created using this Ingredient Batch';
    let result = pdfBundle.genHeader(orientation, appsmith.store.acct_name, title, name, descr);
// Generate the Ingredient Batch Info table
    const selectedColumns = [
      'ingr_btch_nbr',
      'purch_date', 
      'vndr_name', 
      'brnd_name', 
      'purch_dtl',
      'purch_amt'
    ];
    const columnRenames = { // Define the column renames
      'ingr_btch_nbr': 'Ingredient Batch',
      'purch_date': 'Purchase Date',
      'vndr_name': 'Vendor Name',
      'brnd_name': 'Brand Name',
      'purch_dtl': 'Purchase Detail',
      'purch_amt': 'Purchase Amount'
    };

 // Get the pivoted data with selected columns and renames
		console.log('entity_Select: ', entity_Select.data[0])
    const hdrBatch = this.pivotData(entity_Select.data[0], selectedColumns, columnRenames);
		console.log('hdrBatch: ',hdrBatch)
 // Column Styles for Batch Info
    const hdrStyles = { 
      0: { cellWidth: 100, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      1: { cellWidth: 150, halign: 'left', fontStyle: 'bold' },
    };
		
// Create Ingredient Batch info
    result = pdfBundle.genTable(result.doc, hdrBatch, hdrStyles, result.finalY + 25);
		console.log('past 1st Table', result.finalY)
		
// Batches Header
		let startY = result.finalY + 35
    result.doc.setFontSize(14);
    result.doc.setFont(undefined, 'bold');
    result.doc.setTextColor('red');
    result.doc.text('Product Batches', 70, startY, null, null, 'center');

    const columnStyles = { 
      0: { cellWidth: 200, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
			1: { cellWidth: 70, halign: 'center' },
      2: { cellWidth: 70, halign: 'center' },
      3: { cellWidth: 90, halign: 'center' },
      4: { cellWidth: 90, halign: 'center' },
    };

    // Create the second table using the updated finalY position
    result = pdfBundle.genTable(result.doc, tracePdf.data, columnStyles, startY +  7); // Add some padding

    return result.doc.output("dataurlstring");
  },

  // Function to Pivot the data with selected columns and rename them
  pivotData(item, selectedColumns, columnRenames) {
    const result = [];
    for (const [key, value] of Object.entries(item)) {
      if (selectedColumns.includes(key)) {
        const newKey = columnRenames[key] || key;
        result.push({ Property: newKey, Value: value });
      }
    }
    return result;
  }
}
