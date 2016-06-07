var api = 'http://pokeapi.co/api/v2/pokemon/';

function getPokeInfo(){
    $.ajax({
      url: api+$('#pokemon').val(),
      type: 'GET',
      dataType: 'json',
      success: function(pokemon){
        var html = "";
        html += "<p>"+pokemon.name+"</p><br/>";
        html += "<p>"+pokemon.abilities[0].ability.name+"</p><br/>";
        html += "<p>"+pokemon.types[0].type.name+"</p><br/>";
        $('#div-poke').html(html);
        $('#toHide').show();
      },
      error: function(){
        alert('quebrou');
      }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    $('#btn-poke').on('click', function(){
      $('#toHide').hide();
      getPokeInfo();
    });
});
