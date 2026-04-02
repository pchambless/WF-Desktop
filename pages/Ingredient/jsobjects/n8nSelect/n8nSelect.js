export default {
	ingredient_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_id", param_val: tbl_Entity.selectedRow.id }]);
	await n8nVals.setVals();
  },
	ingredient_type_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_type_id", param_val: selIngredientType.selectedOptionValue }]);
	await n8nVals.setVals();
  ingredient_grid.run()
  }
}