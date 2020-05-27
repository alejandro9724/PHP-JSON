function cargar(){
    
    $.ajax({
       type: 'GET',
       url: 'https://jsonplaceholder.typicode.com/albums',
       data: {get_param: 'value'},
       dataType: 'json',
       success: function(data){
           $('#respuesta').append('<tr><td>Id</td><td>Titulo</td></tr>');
           $.each(data, function(index, element){
               $('#respuesta').append('<tr>');
               $('#respuesta').append($('<td>',{
                   text: element.id
               },'</td>'));
               $('#respuesta').append($('<td>',{
                   text: element.title
               },'</td>'));
               $('#respuesta').append('</tr>');
           });
       }
    });
    
}

function buscar(){
    
    var valor=document.getElementById("id").value;
    
    $.ajax({
       type: 'GET',
       url: 'https://jsonplaceholder.typicode.com/albums',
       data: { id: valor},
       dataType: 'json',
       success: function(data){
           $('#respuesta').append('<tr><td>Id</td><td>Titulo</td></tr>');
           $.each(data, function(index, element){
               $('#respuesta').append('<tr>');
               $('#respuesta').append($('<td>',{
                   text: element.id
               },'</td>'));
               $('#respuesta').append($('<td>',{
                   text: element.title
               },'</td>'));
               $('#respuesta').append('</tr>');
           });
       }
    });
    
}