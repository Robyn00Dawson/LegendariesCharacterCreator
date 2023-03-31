//runTheNumbers function updates the numbers (check, XP, GP) based on the values the user inputs into the form.
function runTheNumbers(){

  // grab all the values from the form.
  var intChar = 1*document.getElementById("int-char").value; 
  var intEqp = 1*document.getElementById("int-eqp").value;
  var awrChar = 1*document.getElementById("awr-char").value; 
  var awrEqp = 1*document.getElementById("awr-eqp").value;
  var socChar = 1*document.getElementById("soc-char").value; 
  var socEqp = 1*document.getElementById("soc-eqp").value;
  var strChar = 1*document.getElementById("str-char").value; 
  var strEqp = 1*document.getElementById("str-eqp").value;
  var spdChar = 1*document.getElementById("spd-char").value; 
  var spdEqp = 1*document.getElementById("spd-eqp").value;
  var lckChar = 1*document.getElementById("lck-char").value; 
  var lckEqp = 1*document.getElementById("lck-eqp").value;
  var fnsChar = 1*document.getElementById("fns-char").value; 
  var fnsEqp = 1*document.getElementById("fns-eqp").value;

  // calculate check values by adding character number plus equipment number. Update check value in the html.
  var checkValue = intChar+intEqp;
  document.getElementById('intCheck').innerText = `${checkValue}`;
  var checkValue = awrChar+awrEqp;
  document.getElementById('awrCheck').innerText = `${checkValue}`;
  var checkValue = socChar+socEqp;
  document.getElementById('socCheck').innerText = `${checkValue}`;
  var checkValue = strChar+strEqp;
  document.getElementById('strCheck').innerText = `${checkValue}`;
  var checkValue = spdChar+spdEqp;
  document.getElementById('spdCheck').innerText = `${checkValue}`;
  var checkValue = lckChar+lckEqp;
  document.getElementById('lckCheck').innerText = `${checkValue}`;
  var checkValue = fnsChar+fnsEqp;
  document.getElementById('fnsCheck').innerText = `${checkValue}`;

  // calculate xp total. update the html.
  // The XP cost to increase the character number of an attribute by 1 is equal to the new value of the attribute. For example it costs 8 XP to raise your Awareness from 7 to 8. total XP cost for each attribute is equal to number*(number+1)/2
  var xpValue = (intChar*(intChar+1)/2) + (awrChar*(awrChar+1)/2) + (socChar*(socChar+1)/2) + (strChar*(strChar+1)/2) + (spdChar*(spdChar+1)/2) + (lckChar*(lckChar+1)/2) + (fnsChar*(fnsChar+1)/2)
  document.getElementById('xpTotal').innerText = `${xpValue}`;
 
 // calculate the gp total. update the html
 // This is just like the XP total except for equipment values instead of character values.
 var gpValue = (intEqp*(intEqp+1)/2) + (awrEqp*(awrEqp+1)/2) + (socEqp*(socEqp+1)/2) + (strEqp*(strEqp+1)/2) + (spdEqp*(spdEqp+1)/2) + (lckEqp*(lckEqp+1)/2) + (fnsEqp*(fnsEqp+1)/2)
  document.getElementById('gpTotal').innerText = `${gpValue}`;
}
