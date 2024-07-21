export default {
// This is the JSON Object description
// Using the flaticon.es library you can find icons to add in the icon property

	items () {
		let items = 
				{
					"options" : [
						{
							"mainOption" : "Ingredients",
							"icon":"rr-calendar",
							"subOptions" :  [
								{
									"item" : "Types",
									"icon":"rr-chart-histogram",
									"type" : "Navigation / Other",
									"navTo" : "Ingredient Types"
								},
								{
									"item" : "Ingredients",
									"icon":"rr-chart-histogram",
									"type" : "Navigation / Other",
									"navTo" : "Ingredients"
								},
								{
									"item" : "Shopping",
									"icon":"rr-list-check",
									"type" : "Navigation / Other",
									"navTo" : "Shopping"
								},
								{
									"item" : "Batches",
									"icon":"rr-list-check",
									"type" : "Navigation / Other",
									"navTo" : "Ingredient Batches"
								}
							]
						},
						{
							"mainOption" : "Products",
							"icon":"rr-calendar",
							"subOptions" :  [
								{
									"item" : "Types",
									"icon":"rr-chart-histogram",
									"type" : "Navigation / Other",
									"navTo" : "Product Types"
								},
								{
									"item" : "Products",
									"icon":"rr-chart-histogram",
									"type" : "Navigation / Other",
									"navTo" : "Products"
								},
								{
									"item" : "Batches",
									"icon":"rr-list-check",
									"type" : "Navigation / Other",
									"navTo" : "Product Batches"
								}
							]
						},
						{
							"mainOption" : "Your Business",
							"icon":"rr-settings",
							"subOptions" :  [
								{
									"item" : "Vendors",
									"icon":"rr-user",
									"type" : "Navigation / Other",
									"navTo" : "Vendors"
								},
								{
									"item" : "Brands",
									"icon":"rr-download",
									"type" : "Navigation / Other",
									"navTo" : "Brands"
								},
								{
									"item" : "Team Members",
									"icon":"rr-settings-sliders",
									"type" : "Navigation / Other",
									"navTo" : "Team Members"
								}
							]
						}
					]
				};
		storeValue('menu',items)
		return items;
	}
}