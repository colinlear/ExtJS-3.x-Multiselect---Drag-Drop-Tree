ExtJS 3.x Multi-select & Drag and Drop Tree
===========================================

**This code is now legacy, and will probably not be updated.**

This extension adds support for dragging multiple selected nodes, and dropping them in other trees, or panels.

Development included finding & fixing several bugs in the default components.

Features
--------

* Select and drag multiple nodes.
* Full expanded tree visible in floating drag proxy.
* Supports dropping into the container. (ExtJS 3.x)
* Fixes flicking issue on non-started drag.
* Ctrl-click to toggle node selection.
* Shift-click for a range of nodes.
* Access all nodes being dragged in events using dragData.nodes (which is an array)
* Backwards compatible with vanilla trees.
* Support extensions for columns, or dropping onto grids/forms etc.

Usage
-----

Include JS/CSS files in header.

	<!DOCTYPE html>
	<html>
	<head>
		<title>Demo Page</title>
		<link rel="stylesheet" href="http://cdn.sencha.com/ext-3.4.0/resources/css/ext-all.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="../MultiSelectTree.css" type="text/css" media="screen" />
		<script type="text/javascript" src="http://cdn.sencha.com/ext-3.4.0/adapter/ext/ext-base.js"></script>
		<script type="text/javascript" src="http://cdn.sencha.com/ext-3.4.0/ext-all.js"></script>
		<script type="text/javascript" src="../MultiSelectTree.js"></script>
	...
	
Supports most tree options, identical to standard trees.

	var tree = new Ext.ux.MultiSelectTreePanel({
		autoScroll:true,
		width:400,
		height:500,
		animate:true,
		containerScroll: true,
		renderTo: 'target',
		enableDD: true, /* Required for Drag and Drop as of MultiSelectTree v1.1 */
		dropConfig: {
			ddGroup: 'books',
			allowContainerDrop: true /* allow container dropping */
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

Known Issues
------------

* Doesn't work properly with a TreeEditor. Changes to the selection events, mean that
single clicking a node will trigger the tree editor mode on the first click, rather a
later subsequent click.
* Selection of nodes doesn't work without at least enableDrag set to true. This is 
because I put the selection listener into the drag zone.
* Non-draggable or disabled nodes break single click deselect code, so drag filters these
nodes to allow dragging even if they are selected. However it still breaks if you have 
lots of non-draggable nodes selected. Avoid allowing non-draggable or disabled nodes to be
selected.
* Requires ExtJS 3.x [Component.mon()]

ExtJS 4.x
---------

ExtJS 4.x provides multiple selection, and functional drag and drop. It still has considerable bugs which don't seem to be getting fixed.

See [this project](https://github.com/colinlear/ExtJS-4.x-Tree-Drag-and-Drop-Fix "ExtJS 4.x Tree Fixes: Drag and Drop") for some basic fixes.




