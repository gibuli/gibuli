
$(function() {
	var $ele = $('.demo1_6 .des');
	var maxH = 44;
	if($ele.height() <= maxH) {
		$ele.height("auto");
	} else {
		while($ele.height() > maxH){
			$ele.text($ele.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
		}
	}

	$ele.css('visibility','visible');

	/*canvas 绘制关闭按钮*/
	function close_button(x,y,side){
		ctx.fillStyle="#fff";
		ctx.fillRect(x, y, side, side);

		ctx.beginPath();
		ctx.moveTo(0 , 0 );
		ctx.lineTo(50 , 50 );
		ctx.moveTo(50 , 0 );
		ctx.lineTo(0 , 50 );
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 4;
		ctx.stroke();
	}

	var c = document.getElementById("close-canvas");
	var ctx = c.getContext("2d");
	c.width = 50;
	c.height = 50;

	close_button(0, 0, 50);
	/*canvas 绘制关闭按钮*/

});

