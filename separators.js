// JavaScript Document
function thounsands_separators(a)
{

hello and hello,hello to meet you

   num+='';
  var y=num.indexOf('.'); 
  m=Math.floor(num);
  st=m+'';
  st=st.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
  return (st+num.substring(y));
}
module.exports = thousands_separators;
