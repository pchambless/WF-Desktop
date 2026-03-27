export default {
	product_id: async () => {
	await storeValue("setValsBody", [{ param_name: "product_id", param_val: SelProduct.selectedOptionValue }]);
	await n8nvals.setVals();
	// create recipe report
  await grid_product_batches.run();
  }
}