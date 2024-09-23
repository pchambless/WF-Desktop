export default {
  autoTblTest() {
    const doc = jspdf.jsPDF('p', 'pt', 'letter');

    // Supply data via script
    var headers = ['SL.No', 'Product Name', 'Price', 'Model'];
    var body = [
      [1, 'I-phone', 75000, '2021'],
      [2, 'Realme', 25000, '2022'],
      [3, 'Oneplus', 30000, '2021'],
    ];

    // Generate auto table with body
    var y = 10;
    doc.setLineWidth(2);
    doc.text(200, (y = y + 30), 'Product detailed report');

    // Use jspdf_autotable to add the table
    jspdf_autotable.default(doc, {
      startY: 70,
      head: [headers],
      body: body,
      theme: 'grid',
    });

    return doc.output('dataurlstring');
  },
};