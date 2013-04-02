Ext.onReady(function(){

	var ctree = new Ext.tree.ColumnTree({
		width: 550,
		height: 500,
		rootVisible:false,
		autoScroll:true,
		title: 'Example Tasks',
		renderTo: 'example5',
		enableDD: true, /* required as of MultiSelectTree v1.1 */
		columns:[{
			header:'Task',
			width:330,
			dataIndex:'task'
		},{
			header:'Duration',
			width:100,
			dataIndex:'duration'
		},{
			header:'Assigned To',
			width:100,
			dataIndex:'user'
		}],
		loader: new Ext.tree.TreeLoader({
			dataUrl:'column-data.json',
			uiProviders:{
				'col': Ext.tree.ColumnNodeUI
			}
		}),
		root: new Ext.tree.AsyncTreeNode({
			text:'Tasks'
		})
	});

});