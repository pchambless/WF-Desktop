export default {
	async pageTree() {
		const data = pageTree.data; // Ensure pageTree.data is correctly defined and accessible
		const parentToChildren = [];
		data.forEach((row) => {
			const parent = row.parentName;
			const child = row.childName;
			if (!parentToChildren[parent]) {
				parentToChildren[parent] = [];
			}
				parentToChildren[parent].push(child);
			});
	},
	buildTree(parent, parentToChildren) {
		const children = parentToChildren[parent] || [];
		const tree = children.map((child) => {
		return {
			label: child,
			value: child,
			children: this.buildTree(child), // Recurse for nested children
		};
		});
		return tree;
	}
}