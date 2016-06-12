var api = 'http://pokeapi.co/api/v2/pokemon/';

function getPokeInfo(callback){
    $.ajax({
      url: api+$('#pokemon').val(),
      type: 'GET',
      dataType: 'json',
      success: function(pokemon){
        console.debug(pokemon);
        var html = "";
        html += "<h4>Name: "+pokemon.name+"</h4>";
        html += "<h4>Abilities: </h4><br/>";
        var abilities = '<ul>';
        for (i in pokemon.abilities) {
          abilities += '<li>'+pokemon.abilities[i].ability.name+'</li>';
        }
        abilities += '</ul>';
        html += abilities;

        html += "<h4>Types: </h4>";
        var types = '<ul>';
        for (i in pokemon.types) {
          types += '<li>'+pokemon.types[i].type.name+'</li>';
        }
        types += '</ul>';
        html += types;

        html += "<h4>Stats: </h4>";
        var stats = '<ul>';
        for (i in pokemon.stats) {
          stats += '<li>'+pokemon.stats[i].stat.name+': '+pokemon.stats[i].base_stat+'</li>';
        }
        stats += '</ul>';
        html += stats;

        $('#div-poke').html(html);
        $('#poke-icon').attr('src', pokemon.sprites.front_default);
        callback();
      },
      error: function(){
        alert('Nenhum pokemon encontrado. Tente outro!');
        $('.loading').hide();
      }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    $('.loading').hide();
    $('#btn-poke').on('click', function(){
      $('.loading').show();
      getPokeInfo(function(){
        $('#divLeft').animate({
          marginLeft: '-430px'
        }, 600);
        $('.loading').hide();
        $('#pokemon').empty();
      });
    });
    $('#btn-back').on('click', function(){
      //getPokeInfo();
      $('#divLeft').animate({
        marginLeft: '0'
      }, 600);
    });
});
