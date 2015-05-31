$(function(){
  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  })

  // Alternative syntax
  // $.get('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //   console.log(data);
  // }, 'json')
});
