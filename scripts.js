$(document).ready(function(){

// VESTIGIAL DRAGS
    // $(".Places").click(function(){
    //   $("#mydiv.PlacesBut").toggleClass("clicked");
    // });
    // $(".Places").click(function(){
    //   $("#mydiv.PlacesBut2").toggleClass("clicked");
    // });
    // $("#close.PlacesBut").click(function(){
    //   $("#mydiv.PlacesBut").toggleClass("clicked");
    // });

    // $(".Fears").click(function(){
    //   $("#mydiv.FearsBut").toggleClass("clicked");
    // });
    // $("#close.FearsBut").click(function(){
    //   $("#mydiv.FearsBut").toggleClass("clicked");
    // });

// NEW DRAGS
    $( function() {
      $(".draggable").draggable();
    });

    $(".Places").click(function(){
      $(".draggable.PlacesBut").toggleClass("appear");
    });
    $("#close.PlacesBut").click(function(){
      $(".draggable.PlacesBut").toggleClass("appear");
    });
    $(".Places").click(function(){
      $(".draggable.Places2But").toggleClass("appear");
    });
    $("#close.Places2But").click(function(){
      $(".draggable.Places2But").toggleClass("appear");
    });
    $(".Places").click(function(){
      $(".draggable.Places3But").toggleClass("appear");
    });
    $("#close.Places3But").click(function(){
      $(".draggable.Places3But").toggleClass("appear");
    });

    $(".Fears").click(function(){
      $(".draggable.FearsBut").toggleClass("appear");
    });
    $("#close.FearsBut").click(function(){
      $(".draggable.FearsBut").toggleClass("appear");
    });
    $(".Fears").click(function(){
      $(".draggable.Fears2But").toggleClass("appear");
    });
    $("#close.Fears2But").click(function(){
      $(".draggable.Fears2But").toggleClass("appear");
    });
    $(".Fears").click(function(){
      $(".draggable.Fears3But").toggleClass("appear");
    });
    $("#close.Fears3But").click(function(){
      $(".draggable.Fears3But").toggleClass("appear");
    });
    

    $(".draggable").click(function(){
    	$(this).toggleClass("clicked");
    });


});

// OLDEST DRAGS
	// //Make the DIV element draggagle:
	// dragElement(document.getElementById(("mydiv")));

	// function dragElement(elmnt) {
	//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	//   if (document.getElementById(elmnt.id + "header")) {
	//     /* if present, the header is where you move the DIV from:*/
	//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	//   } else {
	//     /* otherwise, move the DIV from anywhere inside the DIV:*/
	//     elmnt.onmousedown = dragMouseDown;
	//   }

	//   function dragMouseDown(e) {
	//     e = e || window.event;
	//     // get the mouse cursor position at startup:
	//     pos3 = e.clientX;
	//     pos4 = e.clientY;
	//     document.onmouseup = closeDragElement;
	//     // call a function whenever the cursor moves:
	//     document.onmousemove = elementDrag;
	//   }

	//   function elementDrag(e) {
	//     e = e || window.event;
	//     // calculate the new cursor position:
	//     pos1 = pos3 - e.clientX;
	//     pos2 = pos4 - e.clientY;
	//     pos3 = e.clientX;
	//     pos4 = e.clientY;
	//     // set the element's new position:
	//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	//   }

	//   function closeDragElement() {
	//     /* stop moving when mouse button is released:*/
	//     document.onmouseup = null;
	//     document.onmousemove = null;
	//   }
	// }