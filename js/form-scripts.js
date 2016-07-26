


$(document).ready(function(){
    $("#form-submit").bind("click",function(event) {
      var A = $("#A").val();
      var B = $("#B").val();
      var D = $("#D").val();
   

     $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "A=" + A+"&B=" + B+"&D=" + D ,
        success : function(text){
                                    
                                                               
                                        //   $("#D").after(text);
    var msgClasses = "h3 text-center tada animated text-success";
   $("#msgSubmit").removeClass().addClass(msgClasses).text(text);  
                     //  alert (text);    
                                }

                                     //  $("#D").next().remove();

        } )



} ) ;



 });




   /*
$("#contactForm").on("submit", function (event) {
   alert ('ok!');
  var name = $("#name").val();
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name ,
        success : function(text){

                alert (text);

        }
    });

});

*/