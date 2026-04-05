export default {
  page_load: async () => {
	await storeValue("setClearsBody", ["product_batch_id","product_id"]);
  await n8nVals.clearVals();
  await rpt_recipe_hdr.run();
  await rpt_recipe_body.run();
	},
	product_id: async () => {
  await storeValue("setValsBody", [{ param_name: "product_id", param_val: grid.selectedRow.id }]);
  await n8nVals.setVals();
  await rpt_recipe_hdr.run()
  await rpt_recipe_body.run()
}
}