$(document).ready(function(){
  
  $(".draggable").css("opacity", "0");
  $(".draggable").css("pointer-events", "none");

$('.draggable').draggable({
    appendTo: 'body',
    start: function(event, ui) {
        isDraggingMedia = true;
    },
    stop: function(event, ui) {
        isDraggingMedia = false;
        // blah
    }
});
$('.img_rnd').resizable();


$(".Places").click(function(){
  $(".draggable.PlacesBut1").css("opacity", "1");
  $(".draggable.PlacesBut1").css("pointer-events", "initial");
});
$(".PlacesBut1").dblclick(function(){
  $(".draggable.PlacesBut1").css("opacity", "0");
  $(".draggable.PlacesBut1").css("pointer-events", "none");
});
$(".Places").click(function(){
  $(".draggable.PlacesBut2").css("opacity", "1");
  $(".draggable.PlacesBut2").css("pointer-events", "initial");
});
$(".PlacesBut2").dblclick(function(){
  $(".draggable.PlacesBut2").css("opacity", "0");
  $(".draggable.PlacesBut2").css("pointer-events", "none");
});
$(".Places").click(function(){
  $(".draggable.PlacesBut3").css("opacity", "1");
  $(".draggable.PlacesBut3").css("pointer-events", "initial");
});
$(".PlacesBut3").dblclick(function(){
  $(".draggable.PlacesBut3").css("opacity", "0");
  $(".draggable.PlacesBut3").css("pointer-events", "none");
});


$(".Fears").click(function(){
  $(".draggable.FearsBut1").css("opacity", "1");
  $(".draggable.FearsBut1").css("pointer-events", "initial");
});
$(".FearsBut1").dblclick(function(){
  $(".draggable.FearsBut1").css("opacity", "0");
  $(".draggable.FearsBut1").css("pointer-events", "none");
});
$(".Fears").click(function(){
  $(".draggable.FearsBut2").css("opacity", "1");
  $(".draggable.FearsBut2").css("pointer-events", "initial");
});
$(".FearsBut2").dblclick(function(){
  $(".draggable.FearsBut2").css("opacity", "0");
  $(".draggable.FearsBut2").css("pointer-events", "none");
});
$(".Fears").click(function(){
  $(".draggable.FearsBut3").css("opacity", "1");
  $(".draggable.FearsBut3").css("pointer-events", "initial");
});
$(".FearsBut3").dblclick(function(){
  $(".draggable.FearsBut3").css("opacity", "0");
  $(".draggable.FearsBut3").css("pointer-events", "none");
});


$(".Objects").click(function(){
  $(".draggable.ObjectsBut1").css("opacity", "1");
  $(".draggable.ObjectsBut1").css("pointer-events", "initial");
});
$(".ObjectsBut1").dblclick(function(){
  $(".draggable.ObjectsBut1").css("opacity", "0");
  $(".draggable.ObjectsBut1").css("pointer-events", "none");
});
$(".Objects").click(function(){
  $(".draggable.ObjectsBut2").css("opacity", "1");
  $(".draggable.ObjectsBut2").css("pointer-events", "initial");
});
$(".ObjectsBut2").dblclick(function(){
  $(".draggable.ObjectsBut2").css("opacity", "0");
  $(".draggable.ObjectsBut2").css("pointer-events", "none");
});
$(".Objects").click(function(){
  $(".draggable.ObjectsBut3").css("opacity", "1");
  $(".draggable.ObjectsBut3").css("pointer-events", "initial");
});
$(".ObjectsBut3").dblclick(function(){
  $(".draggable.ObjectsBut3").css("opacity", "0");
  $(".draggable.ObjectsBut3").css("pointer-events", "none");
});


$(".Supermarket").click(function(){
  $(".draggable.SupermarketBut1").css("opacity", "1");
  $(".draggable.SupermarketBut1").css("pointer-events", "initial");
});
$(".SupermarketBut1").dblclick(function(){
  $(".draggable.SupermarketBut1").css("opacity", "0");
  $(".draggable.SupermarketBut1").css("pointer-events", "none");
});
$(".Supermarket").click(function(){
  $(".draggable.SupermarketBut2").css("opacity", "1");
  $(".draggable.SupermarketBut2").css("pointer-events", "initial");
});
$(".SupermarketBut2").dblclick(function(){
  $(".draggable.SupermarketBut2").css("opacity", "0");
  $(".draggable.SupermarketBut2").css("pointer-events", "none");
});
$(".Supermarket").click(function(){
  $(".draggable.SupermarketBut3").css("opacity", "1");
  $(".draggable.SupermarketBut3").css("pointer-events", "initial");
});
$(".SupermarketBut3").dblclick(function(){
  $(".draggable.SupermarketBut3").css("opacity", "0");
  $(".draggable.SupermarketBut3").css("pointer-events", "none");
});


$(".Hardware").click(function(){
  $(".draggable.HardwareBut1").css("opacity", "1");
  $(".draggable.HardwareBut1").css("pointer-events", "initial");
});
$(".HardwareBut1").dblclick(function(){
  $(".draggable.HardwareBut1").css("opacity", "0");
  $(".draggable.HardwareBut1").css("pointer-events", "none");
});
$(".Hardware").click(function(){
  $(".draggable.HardwareBut2").css("opacity", "1");
  $(".draggable.HardwareBut2").css("pointer-events", "initial");
});
$(".HardwareBut2").dblclick(function(){
  $(".draggable.HardwareBut2").css("opacity", "0");
  $(".draggable.HardwareBut2").css("pointer-events", "none");
});
$(".Hardware").click(function(){
  $(".draggable.HardwareBut3").css("opacity", "1");
  $(".draggable.HardwareBut3").css("pointer-events", "initial");
});
$(".HardwareBut3").dblclick(function(){
  $(".draggable.HardwareBut3").css("opacity", "0");
  $(".draggable.HardwareBut3").css("pointer-events", "none");
});


$(".Abstract").click(function(){
  $(".draggable.AbstractBut1").css("opacity", "1");
  $(".draggable.AbstractBut1").css("pointer-events", "initial");
});
$(".AbstractBut1").dblclick(function(){
  $(".draggable.AbstractBut1").css("opacity", "0");
  $(".draggable.AbstractBut1").css("pointer-events", "none");
});
$(".Abstract").click(function(){
  $(".draggable.AbstractBut2").css("opacity", "1");
  $(".draggable.AbstractBut2").css("pointer-events", "initial");
});
$(".AbstractBut2").dblclick(function(){
  $(".draggable.AbstractBut2").css("opacity", "0");
  $(".draggable.AbstractBut2").css("pointer-events", "none");
});
$(".Abstract").click(function(){
  $(".draggable.AbstractBut3").css("opacity", "1");
  $(".draggable.AbstractBut3").css("pointer-events", "initial");
});
$(".AbstractBut3").dblclick(function(){
  $(".draggable.AbstractBut3").css("opacity", "0");
  $(".draggable.AbstractBut3").css("pointer-events", "none");
});


$(".Physical").click(function(){
  $(".draggable.PhysicalBut1").css("opacity", "1");
  $(".draggable.PhysicalBut1").css("pointer-events", "initial");
});
$(".PhysicalBut1").dblclick(function(){
  $(".draggable.PhysicalBut1").css("opacity", "0");
  $(".draggable.PhysicalBut1").css("pointer-events", "none");
});
$(".Physical").click(function(){
  $(".draggable.PhysicalBut2").css("opacity", "1");
  $(".draggable.PhysicalBut2").css("pointer-events", "initial");
});
$(".PhysicalBut2").dblclick(function(){
  $(".draggable.PhysicalBut2").css("opacity", "0");
  $(".draggable.PhysicalBut2").css("pointer-events", "none");
});
$(".Physical").click(function(){
  $(".draggable.PhysicalBut3").css("opacity", "1");
  $(".draggable.PhysicalBut3").css("pointer-events", "initial");
});
$(".PhysicalBut3").dblclick(function(){
  $(".draggable.PhysicalBut3").css("opacity", "0");
  $(".draggable.PhysicalBut3").css("pointer-events", "none");
});


$(".Influential").click(function(){
  $(".draggable.InfluentialBut1").css("opacity", "1");
  $(".draggable.InfluentialBut1").css("pointer-events", "initial");
});
$(".InfluentialBut1").dblclick(function(){
  $(".draggable.InfluentialBut1").css("opacity", "0");
  $(".draggable.InfluentialBut1").css("pointer-events", "none");
});
$(".Influential").click(function(){
  $(".draggable.InfluentialBut2").css("opacity", "1");
  $(".draggable.InfluentialBut2").css("pointer-events", "initial");
});
$(".InfluentialBut2").dblclick(function(){
  $(".draggable.InfluentialBut2").css("opacity", "0");
  $(".draggable.InfluentialBut2").css("pointer-events", "none");
});
$(".Influential").click(function(){
  $(".draggable.InfluentialBut3").css("opacity", "1");
  $(".draggable.InfluentialBut3").css("pointer-events", "initial");
});
$(".InfluentialBut3").dblclick(function(){
  $(".draggable.InfluentialBut3").css("opacity", "0");
  $(".draggable.InfluentialBut3").css("pointer-events", "none");
});


$(".Events").click(function(){
  $(".draggable.EventsBut1").css("opacity", "1");
  $(".draggable.EventsBut1").css("pointer-events", "initial");
});
$(".EventsBut1").dblclick(function(){
  $(".draggable.EventsBut1").css("opacity", "0");
  $(".draggable.EventsBut1").css("pointer-events", "none");
});
$(".Events").click(function(){
  $(".draggable.EventsBut2").css("opacity", "1");
  $(".draggable.EventsBut2").css("pointer-events", "initial");
});
$(".EventsBut2").dblclick(function(){
  $(".draggable.EventsBut2").css("opacity", "0");
  $(".draggable.EventsBut2").css("pointer-events", "none");
});
$(".Events").click(function(){
  $(".draggable.EventsBut3").css("opacity", "1");
  $(".draggable.EventsBut3").css("pointer-events", "initial");
});
$(".EventsBut3").dblclick(function(){
  $(".draggable.EventsBut3").css("opacity", "0");
  $(".draggable.EventsBut3").css("pointer-events", "none");
});


$(".Films").click(function(){
  $(".draggable.FilmsBut1").css("opacity", "1");
  $(".draggable.FilmsBut1").css("pointer-events", "initial");
});
$(".FilmsBut1").dblclick(function(){
  $(".draggable.FilmsBut1").css("opacity", "0");
  $(".draggable.FilmsBut1").css("pointer-events", "none");
});
$(".Films").click(function(){
  $(".draggable.FilmsBut2").css("opacity", "1");
  $(".draggable.FilmsBut2").css("pointer-events", "initial");
});
$(".FilmsBut2").dblclick(function(){
  $(".draggable.FilmsBut2").css("opacity", "0");
  $(".draggable.FilmsBut2").css("pointer-events", "none");
});
$(".Films").click(function(){
  $(".draggable.FilmsBut3").css("opacity", "1");
  $(".draggable.FilmsBut3").css("pointer-events", "initial");
});
$(".FilmsBut3").dblclick(function(){
  $(".draggable.FilmsBut3").css("opacity", "0");
  $(".draggable.FilmsBut3").css("pointer-events", "none");
});


$(".Designers").click(function(){
  $(".draggable.DesignersBut1").css("opacity", "1");
  $(".draggable.DesignersBut1").css("pointer-events", "initial");
});
$(".DesignersBut1").dblclick(function(){
  $(".draggable.DesignersBut1").css("opacity", "0");
  $(".draggable.DesignersBut1").css("pointer-events", "none");
});
$(".Designers").click(function(){
  $(".draggable.DesignersBut2").css("opacity", "1");
  $(".draggable.DesignersBut2").css("pointer-events", "initial");
});
$(".DesignersBut2").dblclick(function(){
  $(".draggable.DesignersBut2").css("opacity", "0");
  $(".draggable.DesignersBut2").css("pointer-events", "none");
});
$(".Designers").click(function(){
  $(".draggable.DesignersBut3").css("opacity", "1");
  $(".draggable.DesignersBut3").css("pointer-events", "initial");
});
$(".DesignersBut3").dblclick(function(){
  $(".draggable.DesignersBut3").css("opacity", "0");
  $(".draggable.DesignersBut3").css("pointer-events", "none");
});


$(".Books").click(function(){
  $(".draggable.BooksBut1").css("opacity", "1");
  $(".draggable.BooksBut1").css("pointer-events", "initial");
});
$(".BooksBut1").dblclick(function(){
  $(".draggable.BooksBut1").css("opacity", "0");
  $(".draggable.BooksBut1").css("pointer-events", "none");
});
$(".Books").click(function(){
  $(".draggable.BooksBut2").css("opacity", "1");
  $(".draggable.BooksBut2").css("pointer-events", "initial");
});
$(".BooksBut2").dblclick(function(){
  $(".draggable.BooksBut2").css("opacity", "0");
  $(".draggable.BooksBut2").css("pointer-events", "none");
});
$(".Books").click(function(){
  $(".draggable.BooksBut3").css("opacity", "1");
  $(".draggable.BooksBut3").css("pointer-events", "initial");
});
$(".BooksBut3").dblclick(function(){
  $(".draggable.BooksBut3").css("opacity", "0");
  $(".draggable.BooksBut3").css("pointer-events", "none");
});


$(".Websites").click(function(){
  $(".draggable.WebsitesBut1").css("opacity", "1");
  $(".draggable.WebsitesBut1").css("pointer-events", "initial");
});
$(".WebsitesBut1").dblclick(function(){
  $(".draggable.WebsitesBut1").css("opacity", "0");
  $(".draggable.WebsitesBut1").css("pointer-events", "none");
});
$(".Websites").click(function(){
  $(".draggable.WebsitesBut2").css("opacity", "1");
  $(".draggable.WebsitesBut2").css("pointer-events", "initial");
});
$(".WebsitesBut2").dblclick(function(){
  $(".draggable.WebsitesBut2").css("opacity", "0");
  $(".draggable.WebsitesBut2").css("pointer-events", "none");
});
$(".Websites").click(function(){
  $(".draggable.WebsitesBut3").css("opacity", "1");
  $(".draggable.WebsitesBut3").css("pointer-events", "initial");
});
$(".WebsitesBut3").dblclick(function(){
  $(".draggable.WebsitesBut3").css("opacity", "0");
  $(".draggable.WebsitesBut3").css("pointer-events", "none");
});


// $(".Links").click(function(){
//   $(".draggable.LinksBut1").css("opacity", "1");
//   $(".draggable.LinksBut1").css("pointer-events", "initial");
// });
// $(".LinksBut1").dblclick(function(){
//   $(".draggable.LinksBut1").css("opacity", "0");
//   $(".draggable.LinksBut1").css("pointer-events", "none");
// });

$(".Try").click(function(){
  $(".draggable.Try1").css("opacity", "1");
  $(".draggable.Try1").css("pointer-events", "initial");
});
$(".Try1").dblclick(function(){
  $(".draggable.Try1").css("opacity", "0");
  $(".draggable.Try1").css("pointer-events", "none");
});
$(".Try").click(function(){
  $(".draggable.Try2").css("opacity", "1");
  $(".draggable.Try2").css("pointer-events", "initial");
});
$(".Try2").dblclick(function(){
  $(".draggable.Try2").css("opacity", "0");
  $(".draggable.Try2").css("pointer-events", "none");
});
$(".Try").click(function(){
  $(".draggable.Try3").css("opacity", "1");
  $(".draggable.Try3").css("pointer-events", "initial");
});
$(".Try3").dblclick(function(){
  $(".draggable.Try3").css("opacity", "0");
  $(".draggable.Try3").css("pointer-events", "none");
});


$(".draggable").click(function(){
  $(this).toggleClass("clicked");
});



});