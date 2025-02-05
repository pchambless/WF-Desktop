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
      'ingr_btch_nbr', 'purch_date', 'vndr_name', 'brnd_name', 'purch_dtl', 'purch_amt'
    ];
    const columnRenames = { // Define the column renames
      'ingr_btch_nbr': 'Ingredient Batch', 'purch_date': 'Purchase Date',
      'vndr_name': 'Vendor Name', 'brnd_name': 'Brand Name',
      'purch_dtl': 'Purchase Detail', 'purch_amt': 'Purchase Amount'
    };

 // Get the pivoted data with selected columns and renames
    const hdrBatch = pdfBundle.pivotData(entity_Trace.data[0], selectedColumns, columnRenames);
 // Column Styles for Batch Info
    const hdrStyles = { 
      0: { cellWidth: 100, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
      1: { cellWidth: 150, halign: 'left', fontStyle: 'bold' },
    };
		
// Create Ingredient Batch info
    result = pdfBundle.genTable(result.doc, hdrBatch, hdrStyles, result.finalY);
		
// Build Table Header
  result = pdfBundle.genTblHeader(result.doc, 'Product Batches', result.finalY);

    const columnStyles = { 
      0: { cellWidth: 70, halign: 'center', fontStyle: 'bold', fillColor: '#ffffe6' },
			1: { cellWidth: 200, halign: 'left', fontStyle: 'bold' },
      2: { cellWidth: 70, halign: 'center' },
      3: { cellWidth: 60, halign: 'center' },
      4: { cellWidth: 100, halign: 'center' },
    };

    // Create the second table using the updated finalY position
    result = pdfBundle.genTable(result.doc, pdfTrace.data, columnStyles, result.finalY); // Add some padding

    return result.doc.output("dataurlstring");
  }
}
