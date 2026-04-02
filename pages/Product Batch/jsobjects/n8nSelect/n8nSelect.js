export default {
	page_load: async () => {
	await storeValue("setClearsBody", ["product_batch_id","product_id"]);
  await n8nVals.clearVals();
  await product_batches_grid.run();
	await rpt_batch_wrksht_hdr.run();
  await rpt_batch_wrksht_ingr.run();
	await rpt_batch_wrksht_tasks.run();
	},
	product_id: async () => {
	await storeValue("setValsBody", [{ param_name: "product_id", param_val: SelProduct.selectedOptionValue }]);
	await n8nVals.setVals();
	// create recipe report
  await product_batches_grid.run();
	await storeValue("setClearsBody", ["product_batch_id"]);
  await n8nVals.clearVals();
  },
product_batch_id: async () => {
	await storeValue("setValsBody", [{ param_name: "product_batch_id", param_val: grid.selectedRow.id }]);
	await n8nVals.setVals();
	// create recipe report
  await rpt_batch_wrksht_hdr.run();
  await rpt_batch_wrksht_ingr.run();
	await rpt_batch_wrksht_tasks.run();
  }
}