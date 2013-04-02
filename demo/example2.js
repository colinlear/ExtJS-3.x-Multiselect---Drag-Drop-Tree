Ext.onReady(function(){

	var gtree = new Ext.ux.MultiSelectTreePanel({
		title: 'Groups',
		autoScroll:true,
		width:400,
		height:500,
		animate:true,
		rootVisible:false,
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		ddAppendOnly: true,
		containerScroll: true,
		loader: new Ext.tree.TreeLoader({
			dataUrl:'treetest.json'
		}),
		root: new Ext.tree.AsyncTreeNode({
			text: 'Groups',
			draggable:false,
   			id:'0'
		})
	});
	
	// add a tree sorter in folder mode
	new Ext.tree.TreeSorter(gtree, {folderSort:false});
	gtree.render('example2');
 	gtree.getRootNode().expand();
 	
});