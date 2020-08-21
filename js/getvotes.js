	
	laycon = parseInt(sessionStorage.getItem("laycon_votes"));
    dorathy = parseInt(sessionStorage.getItem("dorathy_votes"));
    erica= parseInt(sessionStorage.getItem("erica_votes"));
    nengi = parseInt(sessionStorage.getItem("nengi_votes"));
    kiddwaya = parseInt(sessionStorage.getItem("kiddwaya_votes"));
    ozo = parseInt(sessionStorage.getItem("ozo_votes"));
    counts = sessionStorage.getItem("all_votes");

    var votes = [laycon,dorathy,erica,kiddwaya,nengi,ozo];
 
    for (let i = 0; i < votes.length; i++) {

    for (let j = i; j < votes.length; j++) {
      if (votes[i] < votes[j]) {
        let temp = votes[i]; 
        votes[i] = votes[j]; 
        votes[j] = temp; 
      }
    }
  }

    function laycon_check(weight){
    	return weight  <= laycon;
    }function dorathy_check(weight){
        return weight  <= dorathy;
    }function erica_check(weight){
        return weight  <= erica;
    }function nengi_check(weight){
        return weight  <= nengi;
    }function kiddwaya_check(weight){
        return weight  <= kiddwaya;
    }function ozo_check(weight){
        return weight  <= ozo;
    }
  

document.getElementById("one").innerHTML = votes.findIndex(laycon_check)+1;

document.getElementById("two").innerHTML = votes.findIndex(dorathy_check)+1;

document.getElementById("three").innerHTML = votes.findIndex(erica_check)+1;

document.getElementById("four").innerHTML = votes.findIndex(nengi_check)+1;
document.getElementById("five").innerHTML = votes.findIndex(kiddwaya_check)+1;

document.getElementById("six").innerHTML = votes.findIndex(ozo_check)+1;


 if (document.getElementById("one").innerHTML == "6") {
        document.getElementById("evicted").innerHTML = "laycon";
 }else if (document.getElementById("two").innerHTML == "6") {
        document.getElementById("evicted").innerHTML = "Dorathy";
 }else if (document.getElementById("three").innerHTML == "6") {
        document.getElementById("evicted").innerHTML = "Erica";
 }else if (document.getElementById("four").innerHTML == "6") {
        document.getElementById("evicted").innerHTML = "Nengi";
 }else if (document.getElementById("five").innerHTML == "6") {
        document.getElementById("evicted").innerHTML = "kiddwaya";
 }else if (document.getElementById("six").innerHTML == "6") {
        document.getElementById("evicted").innerHTML = "Ozo";
 }

