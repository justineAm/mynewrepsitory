$(document).ready(function(){

    $("#taskform").submit(function(e){
        e.preventDefault();
        $.ajax({
            type:"POST",
            url: "index.php",
            data: $(this).serialize(),
            success: function(response){
                var jsonData = JSON.parse(response)
                alert("Task successfully added!");
                console.log(jsonData)
                //  $.get('tasks.txt', function(textData) {
                //      //var aLines = textData
                // //     //$('#display').append(textData + '\nStatus = ' + status);
                //     var le = textData.length;
                //     //alert (le);
                //      document.getElementById("display").innerHTML = (textData );   // this works, all lines
                    
                // //     $.each(aLines, function(n, sLine) {
                // //       //$('#display').append('<div>' + sLine + '</div>'); // ?????
                // //        //document.append(n + ' - ' + aLines[n]);      // this also work
                // //     });
                    
                //   });

                $.get('tasks.txt', function (data) {  
                    var myHrefCollection = '<ul>';  
                    var myData = data.split("\n");  
                    for (i = 0; i < myData.length; i++) {  
                        if (myData[i] != null || myData[i] != undefined)  
                            myHrefCollection += '<li>' + myData[i] + '</li>';  
                    }  
                    myHrefCollection += '</ul>';  
                    $('#display').html(myHrefCollection);  
                        
                });  
                
            }
        })
    })


})