export default {
	product_id: async () => {
	await storeValue("setValsBody", [{ param_name: "product_id", param_val: SelProduct.selectedOptionValue }]);
	await n8nvals.setVals();
	// create recipe report
  await grid_product_batches.run();
  },
product_batch_id: async () => {
	await storeValue("setValsBody", [{ param_name: "product_batch_id", param_val: tbl_Entity.selectedRow.id }]);
	await n8nvals.setVals();
	// create recipe report
  await grid_product_batches.run();
  await rpt_batch_wrksht_hdr.run();
  await rpt_batch_wrksht_ingr.run();
	await rpt_batch_wrksht_tasks.run();
  }
}