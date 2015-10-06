
            function upArrowPressed() {
			var element = document.getElementById("image");
            			
			if(parseInt(element.style.top)<=0){}
				else{
            element.style.top = parseInt(element.style.top) - 5 + 'px';
            
				}
            }

            function downArrowPressed() {
				
            var element = document.getElementById("image");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
            }

            function moveSelection(evt) {
				
			var plane= document.getElementById("image");
			var plane_pos_top= plane.style.top;
			var plane_pos_left=plane.style.left;
			console.log(plane_pos_top);
			
			var barA= document.getElementById("bar1");
			var barA_pos_top=barA.style.top;
			var barA_pos_left=barA.style.left;
			
			var barB= document.getElementById("bar2");
			var barB_pos_top=barB.style.top;
			var barB_pos_left=barB.style.left;
			var barC= document.getElementById("bar3");
			var barC_pos_top=barC.style.top;
			var barC_pos_left=barC.style.left;
			var barD= document.getElementById("bar4");
			var barD_pos_top=barD.style.top;
			var barD_pos_left=barD.style.left;
				
			var barE= document.getElementById("bar5");
			var barE_pos_top=barE.style.top;
			var barE_pos_left=barE.style.left;
			console.log(barE_pos_top);
			
			if(plane_pos_top >= barE_pos_top){console.log("game over");}
				
				var element = document.getElementById("image");
                
				switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
                    break;
                    case 40:{
					if(parseInt(element.style.top)<=260){
					downArrowPressed();}
					else{}
                    break;}
					
                    }
                };

        function docReady()
        {
          window.addEventListener('keydown', moveSelection);
        }
		
