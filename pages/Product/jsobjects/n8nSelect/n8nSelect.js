export default {
  page_load: async () => {
	await storeValue("setClearsBody", ["product_batch_id","product_id"]);
  await n8nVals.clearVals();
  await rpt_recipe_hdr.run();
  await rpt_recipe_body.run();
	},
	product_id: async () => {
  await storeValue("setValsBody", [{ param_name: "product_id", param_val: SelProduct.selectedOptionValue }]);
  await n8nVals.setVals();
  ingredient_batches_grid.run()
  await storeValue("setClearsBody", ["ingredient_batch_id"]);
  await n8nVals.clearVals();
},
	ingredient_batch_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_batch_id", param_val: grid.selectedRow.id }]);
	await n8nVals.setVals();
  await rpt_srce_trgt_hdr.run();
  await rpt_srce_trgt_body.run();
  },
}