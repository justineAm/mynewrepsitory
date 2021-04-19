$(document).ready(function(){
    $.get('tasks.txt', function (data) {  
        var myHrefCollection = '<div>';  
        var myData = data.split("\n");  
        for (i = 0; i < myData.length; i++) {  
            if (myData[i] != null || myData[i] != undefined)  
                myHrefCollection += '<p>' + myData[i] + '</p>';  
        }  
        myHrefCollection += '</div>';  
        $('#display').html(myHrefCollection);  

    });  
    

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
                $.get('tasks.txt', function (data) {  
                    var myHrefCollection = '<div>';  
                    var myData = data.split("\n");  
                    for (i = 0; i < myData.length; i++) {  
                        if (myData[i] != null || myData[i] != undefined)  
                            myHrefCollection += '<p>' + myData[i] + '</p>';  
                    }  
                    myHrefCollection += '</div>';  
                    $('#display').html(myHrefCollection);  
                });     
                
            }
        })
    })


})
