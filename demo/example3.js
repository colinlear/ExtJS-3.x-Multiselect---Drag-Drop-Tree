Ext.onReady(function(){

	var onetree = new Ext.ux.MultiSelectTreePanel({
		title: 'Table of Contents',
		autoScroll:true,
		width:400,
		height:500,
		renderTo: 'example3_one',
		animate:true,
		containerScroll: true,
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		ddGroup: 'twotrees',
		dropConfig: {
			ddGroup: 'twotrees',
			allowContainerDrop: true		
		},
		root: new Ext.tree.AsyncTreeNode({
			text: 'A Book',
			draggable:false,
			id:'node0'
		}),
		loader: new Ext.tree.TreeLoader({
			dataUrl:'bookdata.json'
		})
	});
	onetree.expandAll();

	var twotree = new Ext.ux.MultiSelectTreePanel({
		title: 'Favourite Parts',
		autoScroll:true,
		width:400,
		height:500,
		renderTo: 'example3_two',
		animate:true,
		containerScroll: true,
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		ddGroup: 'twotrees',
		dropConfig: {
			ddGroup: 'twotrees',
			allowContainerDrop: true		
		},
		root: new Ext.tree.TreeNode({
			text: 'Favourites',
			draggable:false,
			leaf: false,
			id:'node0'
		})
	});

});