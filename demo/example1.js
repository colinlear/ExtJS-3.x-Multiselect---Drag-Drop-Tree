Ext.onReady(function(){

	var tree = new Ext.ux.MultiSelectTreePanel({
		title: 'Table of Contents',
		autoScroll:true,
		width:400,
		height:500,
		animate:true,
		containerScroll: true,
		ddGroup: 'book',
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		root: new Ext.tree.AsyncTreeNode({
			text: 'A Book',
			draggable:false,
			id:'node0'
		}),
		loader: new Ext.tree.TreeLoader({
			dataUrl:'bookdata.json'
		})
	});
	tree.render('example1');	
	tree.getRootNode().expand();
 	
});