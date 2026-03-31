export default {
  page_load: async () => {
	await storeValue("setClearsBody", ["ingredient_batch_id","ingredient_id"]);
  await n8nVals.clearVals();
  await grid_ingredient_batches.run();
	await rpt_srce_trgt_hdr.run();
  await rpt_srce_trgt_body.run();
	},
	ingredient_id: async () => {
  await storeValue("setValsBody", [{ param_name: "ingredient_id", param_val: selIngredient.selectedOptionValue }]);
  await n8nVals.setVals();
  grid_ingredient_batches.run()
  await storeValue("setClearsBody", ["ingredient_batch_id"]);
  await n8nVals.clearVals();
},
	ingredient_batch_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_batch_id", param_val: tbl_Entity.selectedRow.id }]);
	await n8nVals.setVals();
  await rpt_srce_trgt_hdr.run();
  await rpt_srce_trgt_body.run();
  },
}