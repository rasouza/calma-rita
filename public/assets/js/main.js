$(function(){
	var socket = io();

	// Real-time Literally Canvas
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

	// Chat Engine
	$('button.chat').click(function() {
		var d = new Date();

        var text = '<div class="messages-item"><img src="img/example/user/dmitry_s.jpg"class="img-circle img-thumbnail"/>';
        text += '<div class="messages-item-text">';
        text += $('input.chat').val();
        text += '</div>';
        text += '<div class="messages-item-date">';
        text += d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        text += '</div></div>'
        $('div.mCSB_container').append(text);
        $('input.chat').val('');
	});

});
