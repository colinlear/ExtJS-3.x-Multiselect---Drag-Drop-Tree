Ext.onReady(function(){

	var containertree = new Ext.ux.MultiSelectTreePanel({
		title: 'Container Drop Example',
		autoScroll:true,
		width:400,
		height:500,
		animate:true,
		containerScroll: true,
		renderTo: 'allowContainerDrop_demo',
		dropConfig: {
			ddGroup: 'book',
			allowContainerDrop: true		
		},
		ddGroup: 'book',
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		root: new Ext.tree.AsyncTreeNode({
			text: 'A Book',
			draggable:false,
			id:'node0'
		}),
		loader: new Ext.tree.TreeLoader({
			dataUrl:'nested_data.json'
		})
	});
	containertree.getRootNode().expand();
 	
});