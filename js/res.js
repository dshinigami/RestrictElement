//Initialize Function restrict(elem)
function restrict(elem){
  //store the element into tf(target field)
  var tf = _(elem);
  var rx = new RegExp;

  if(elem == "field"){
    rx = /[^a-z ]/gi;
  }
  //replace unwanted char or string with ""
  tf.value = tf.value.replace(rx, "");
}
