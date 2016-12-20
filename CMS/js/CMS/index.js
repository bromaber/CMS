define(function(require, exports){
	exports.copy = function(){
		var mediaList = $(".media_id");
		return mediaList;
	};

	$(function(){
		var dropdown = $(".btn-drop");
		dropdown.click(function(){
			if ($(this).text() == "+") {
				$(this).text("-")
			}else{
				$(this).text("+")
			}
			$(this).parents("tr").next().toggle();
		})




		var mediaList = $(".media_id");
		 console.log(mediaList);
		for(var i = 0; i < mediaList.length; i++){
			var _media = mediaList[i];
			console.log(_media);
			var td = $(_media).find("td");
			console.log(td);
			var id = $(td).eq(0).text();
			var name = $(td).eq(1).text();
			var cnum = $(td).eq(2).text();
			var anum = $(td).eq(3).text();
			var stat = $(td).eq(4).text();
			var ntime = $(td).eq(5).text();
			var otime = $(td).eq(6).text();
			console.log(id+name+cnum+anum+stat+ntime+otime);
		}
	})
})