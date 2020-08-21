
var all_votes = 100;

function minus_votes(){

	total = parseInt(document.getElementById("total").innerHTML);

	if (total == 0){
		document.getElementById("total").innerHTML = 0;
	}
	else{

	laycon = parseInt(document.getElementById("laycon").value);
	dorathy = parseInt(document.getElementById("dorathy").value);
	erica = parseInt(document.getElementById("erica").value);
	ozo = parseInt(document.getElementById("ozo").value);
	kiddwaya = parseInt(document.getElementById("kiddwaya").value);
	nengi = parseInt(document.getElementById("nengi").value);

	counted_votes = laycon + dorathy + erica + ozo + kiddwaya + nengi;
	total = all_votes - counted_votes;

	document.getElementById("total").innerHTML = total;

	document.getElementById("vote-ranges").value = total;

	}	

}

// Laycon vote code starts

function laycon_vote(){
	var input = parseInt(document.getElementById("laycon").value,10);

	if (document.getElementById("total").innerHTML !=0) {
		input++;

		document.getElementById("laycon").value = input;	
	}
	
	if (document.getElementById("laycon").value <= all_votes) {
		minus_votes();
	}
	if (document.getElementById("laycon").value > all_votes) {
		document.getElementById("laycon").value = all_votes;
	}
	
	if (document.getElementById("total").innerHTML == "0") {

		document.getElementById("max1").innerHTML = "Maximum vote reached";	
		document.getElementById("finish").innerHTML = "";	
	}

}

function laycon_unvote(){
	var input = parseInt(document.getElementById("laycon").value,10);
	input--;
	document.getElementById("laycon").value = input;
	if (document.getElementById("laycon").value >= 0) {
	add_votes();	
	}
	if (document.getElementById("laycon").value < 0) {
		document.getElementById("laycon").value = 0;
	}

	if (document.getElementById("total").innerHTML != "0") {

		document.getElementById("max1").innerHTML = "";		
	}

}

//Laycon vote code ends


// Dorathy vote code starts

function dorathy_vote(){
	var input = parseInt(document.getElementById("dorathy").value,10);
	if (document.getElementById("total").innerHTML !=0) {
	input++;
	document.getElementById("dorathy").value = input;
	}
	if (document.getElementById("dorathy").value <= all_votes) {
		minus_votes();
	}
	if (document.getElementById("dorathy").value > all_votes) {
		document.getElementById("dorathy").value = all_votes;
	}
	if (document.getElementById("total").innerHTML == "0") {

		document.getElementById("max2").innerHTML = "Maximum vote reached";	
		document.getElementById("finish").innerHTML = "";	
	}


}

function dorathy_unvote(){
	var input = parseInt(document.getElementById("dorathy").value,10);
	input--;
	document.getElementById("dorathy").value = input;
	if (document.getElementById("dorathy").value >= 0) {
	add_votes();	
	}
	if (document.getElementById("dorathy").value < 0) {
		document.getElementById("dorathy").value = 0;
	}
	if (document.getElementById("total").innerHTML != "0") {

		document.getElementById("max2").innerHTML = "";		
	}

}

// Dorathy vote code ends


// Erica vote code start

function erica_vote(){
	var input = parseInt(document.getElementById("erica").value,10);
	if (document.getElementById("total").innerHTML !=0) {
	input++;
	document.getElementById("erica").value = input;
	}
	if (document.getElementById("erica").value <= all_votes) {
		minus_votes();
	}
	if (document.getElementById("erica").value > all_votes) {
		document.getElementById("erica").value = all_votes;
	}

	if (document.getElementById("total").innerHTML == "0") {

		document.getElementById("max3").innerHTML = "Maximum vote reached";	
		document.getElementById("finish").innerHTML = "";	
	}
	

}

function erica_unvote(){
	var input = parseInt(document.getElementById("erica").value,10);
	input--;
	document.getElementById("erica").value = input;
	if (document.getElementById("erica").value >= 0) {
	add_votes();	
	}
	if (document.getElementById("erica").value < 0) {
		document.getElementById("erica").value = 0;
	}
	if (document.getElementById("total").innerHTML != "0") {

		document.getElementById("max3").innerHTML = "";		
	}


}

//Erica vote code ends


// Nendi vote code starts

function nengi_vote(){
	var input = parseInt(document.getElementById("nengi").value,10);
	if (document.getElementById("total").innerHTML !=0) {
	input++;
	document.getElementById("nengi").value = input;
	}
	if (document.getElementById("nengi").value <= all_votes) {
		minus_votes();
	}
	if (document.getElementById("nengi").value > all_votes) {
		document.getElementById("nengi").value = all_votes;
	}

	if (document.getElementById("total").innerHTML == "0") {

		document.getElementById("max4").innerHTML = "Maximum vote reached";	
		document.getElementById("finish").innerHTML = "";	
	}
	

}

function nengi_unvote(){
	var input = parseInt(document.getElementById("nengi").value,10);
	input--;
	document.getElementById("nengi").value = input;
	if (document.getElementById("nengi").value >= 0) {
	add_votes();	
	}
	if (document.getElementById("nengi").value < 0) {
		document.getElementById("nengi").value = 0;
	}
	if (document.getElementById("total").innerHTML != "0") {

		document.getElementById("max4").innerHTML = "";		
	}

}

//Nengi vote code ends


// Kidd Waya code starts

function kiddwaya_vote(){
	var input = parseInt(document.getElementById("kiddwaya").value,10);
	if (document.getElementById("total").innerHTML !=0) {
	input++;
	document.getElementById("kiddwaya").value = input;
	}
	if (document.getElementById("kiddwaya").value <= all_votes) {
		minus_votes();
	}
	if (document.getElementById("kiddwaya").value > all_votes) {
		document.getElementById("kiddwaya").value = all_votes;
	}

	if (document.getElementById("total").innerHTML == "0") {

		document.getElementById("max5").innerHTML = "Maximum vote reached";	
		document.getElementById("finish").innerHTML = "";	
	}
	

}

function kiddwaya_unvote(){
	var input = parseInt(document.getElementById("kiddwaya").value,10);
	input--;
	document.getElementById("kiddwaya").value = input;
	if (document.getElementById("kiddwaya").value >= 0) {
	add_votes();	
	}
	if (document.getElementById("kiddwaya").value < 0) {
		document.getElementById("kiddwaya").value = 0;
	}
	if (document.getElementById("total").innerHTML != "0") {

		document.getElementById("max5").innerHTML = "";		
	}

}

//Kiddwaya vote code ends



// ozo vote code starts

function ozo_vote(){
	var input = parseInt(document.getElementById("ozo").value,10);
	if (document.getElementById("total").innerHTML !=0) {
	input++;
	document.getElementById("ozo").value = input;
	}
	if (document.getElementById("ozo").value <= all_votes) {
		minus_votes();
	}
	if (document.getElementById("ozo").value > all_votes) {
		document.getElementById("ozo").value = all_votes;
	}

	if (document.getElementById("total").innerHTML == "0") {

		document.getElementById("max6").innerHTML = "Maximum vote reached";	
		document.getElementById("finish").innerHTML = "";
	}

}

function ozo_unvote(){
	var input = parseInt(document.getElementById("ozo").value,10);
	input--;
	document.getElementById("ozo").value = input;
	if (document.getElementById("ozo").value >= 0) {
	add_votes();	
	}
	if (document.getElementById("ozo").value < 0) {
		document.getElementById("ozo").value = 0;
	}
	if (document.getElementById("total").innerHTML != "0") {

		document.getElementById("max6").innerHTML = "";		
	}

}

//Ozo vote code ends

function add_votes(){

	total = parseInt(document.getElementById("total").innerHTML);

	if (total > 100){
		document.getElementById("total").innerHTML = 0;
	}
	else{

	laycon = parseInt(document.getElementById("laycon").value);
	dorathy = parseInt(document.getElementById("dorathy").value);
	erica = parseInt(document.getElementById("erica").value);
	ozo = parseInt(document.getElementById("ozo").value);
	kiddwaya = parseInt(document.getElementById("kiddwaya").value);
	nengi = parseInt(document.getElementById("nengi").value);

	counted_votes = laycon + dorathy + erica + ozo + kiddwaya + nengi;
	total = all_votes - counted_votes;

	document.getElementById("total").innerHTML = total;

	document.getElementById("vote-ranges").value = total;

	}	

}


//Code to record votes starts 
function count() {

    laycon = parseInt(document.getElementById("laycon").value);
    dorathy = parseInt(document.getElementById("dorathy").value);
    erica = parseInt(document.getElementById("erica").value);
    kiddwaya = parseInt(document.getElementById("kiddwaya").value);
    nengi = parseInt(document.getElementById("nengi").value);
    ozo = parseInt(document.getElementById("ozo").value);

    counts = laycon+dorathy+erica+kiddwaya+nengi+ozo;
 
    sessionStorage.setItem("laycon_votes",laycon);
    sessionStorage.setItem("dorathy_votes", dorathy);
    sessionStorage.setItem("erica_votes", erica);
    sessionStorage.setItem("kiddwaya_votes", kiddwaya);
    sessionStorage.setItem("nengi_votes", nengi);
    sessionStorage.setItem("ozo_votes", ozo);
    sessionStorage.setItem("all_votes", counts);

    if (counts < 100) {
    	document.getElementById("finish").innerHTML = "Finish your votes";
    }else{

    	location.href='vote.html';
    }

    

    }

    //Code to record votes ends