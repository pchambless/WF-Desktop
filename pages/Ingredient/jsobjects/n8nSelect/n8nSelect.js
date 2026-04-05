export default {
	ingredient_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_id", param_val: grid.selectedRow.id }]);
	await n8nVals.setVals();
  }
}