Ext.onReady(function(){

	var mseltree = new Ext.ux.MultiSelectTreePanel({
		title: 'Multi-Select Tree',
		autoScroll:true,
		width:400,
		height:500,
		renderTo: 'example4_multi',
		animate:true,
		containerScroll: true,
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		ddGroup: 'mixedtrees',
		root: new Ext.tree.AsyncTreeNode({
			text: 'A Book',
			draggable:false,
			id:'node0'
		}),
		loader: new Ext.tree.TreeLoader({
			dataUrl:'bookdata.json'
		})
	});
	mseltree.getRootNode().expand();

	var deftree = new Ext.tree.TreePanel({
		title: 'Normal Ext Tree',
		autoScroll:true,
		width:400,
		height:500,
		renderTo: 'example4_orig',
		animate:true,
		containerScroll: true,
		ddGroup: 'mixedtrees',
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		root: new Ext.tree.AsyncTreeNode({
			text: 'Normal Tree',
			draggable:false,
			id:'node0'
		}),
		loader: new Ext.tree.TreeLoader({
			dataUrl:'bookdata.json'
		})
	});
	deftree.getRootNode().expand();
	
});
