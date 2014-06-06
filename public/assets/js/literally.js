$(function(){
	var socket = io();

	$('.literally').literallycanvas({
		imageURLPrefix: '/assets/literallycanvas-0.3/img',
		onInit: function(lc) {
			lc.on('drawingChange', function() {
				socket.emit('drawing', lc.getSnapshotJSON());
			});

			socket.on('repaint', function(data) {
				lc.loadSnapshotJSON(data);
			});
    	}
    });


});
