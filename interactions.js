$(document).ready(function(){
    // $.get('tasks.txt', function (data) {  
    //     var myHrefCollection = '<ol type="1">';  
    //     var myData = data.split("\n");  
    //     for (i = 0; i < myData.length; i++) {  
    //         if (myData[i] != null || myData[i] != undefined)  
    //             myHrefCollection += '<li>' + myData[i] + '</li>';  
    //     }  
    //     myHrefCollection += '<ol>';  
    //     $('#display').html(myHrefCollection);  

    // });  
    $("#taskform").submit(function(e){
        e.preventDefault();
        $.ajax({
            type:"POST",
            url: "session.php",
            data: $(this).serialize(),
            success: function(response){
                var jsonData = JSON.parse(response)
                alert("Task successfully added!");
                //console.log(response);

                console.log(jsonData)
                jsonData.forEach(element => {
                    //console.log(element);
                   return element;
                });
                $('#display').append('<ul><li>'+element+'</li></ul>');
                
              
                    


                
                // $.get('session.php', function (data) {  
                //     var myHrefCollection = '<ol type="1">';  
                //     var myData = data.split("\n");  
                //     for (i = 0; i < myData.length; i++) {  
                //         if (myData[i] != null || myData[i] != undefined)  
                //             myHrefCollection += '<li>' + myData[i] + '</li>';  
                //     }  
                //     myHrefCollection += '</ol>';  
                //     $('#display').html(myHrefCollection);  
                // });     
                
            }
        })
    })
    $('#clearSession').on('click',function(e){
        e.preventDefault();
        $.ajax({
            type:"POST",
            url: "clearSession.php",
            success :function(response){
                var jsonData = JSON.parse(response)
                console.log(jsonData)

            }
        })
    })


})
