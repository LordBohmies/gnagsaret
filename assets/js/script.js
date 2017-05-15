$(document).ready(function(){
        var sveImgLink = "./assets/img/schweden.gif";
    	var engImgLink = "./assets/img/Grossbritanien.gif";

		var imgBtnSel = $('#imgBtnSel');
		var imgBtnSve = $('#imgBtnSve');
		var imgBtnEng = $('#imgBtnEng');

		var imgNavSel = $('#imgNavSel');
		var imgNavSve = $('#imgNavSve');
		var imgNavEng = $('#imgNavEng');

		var spanNavSel = $('#lanNavSel');
		var spanBtnSel = $('#lanBtnSel');

		imgBtnSel.attr("src",sveImgLink);
		imgBtnSve.attr("src",sveImgLink);
		imgBtnEng.attr("src",engImgLink);

		imgNavSel.attr("src",sveImgLink);
		imgNavSve.attr("src",sveImgLink);
		imgNavEng.attr("src",engImgLink);

		$( ".language" ).on( "click", function( event ) {
			var currentId = $(this).attr('id');

			if(currentId == "navSve") {
				imgNavSel.attr("src",sveImgLink);
				spanNavSel.text("SVE");
			} else if (currentId == "navEng") {
				imgNavSel.attr("src",engImgLink);
				spanNavSel.text("ENG");
			}

			if(currentId == "btnSve") {
				imgBtnSel.attr("src",sveImgLink);
				spanBtnSel.text("SVE");
			} else if (currentId == "btnEng") {
				imgBtnSel.attr("src",engImgLink);
				spanBtnSel.text("ENG");
			}

		});
});
