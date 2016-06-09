console.log("main running");
var coins = 30;
var lvl = 1;
var inventory = "";
var badge = "";
var x = "Beginner";
var y = "Inermediate";
var z = "Expert";
var q = "God";
var test;
$(document).ready(function(){
	setInterval(function(){ coins++; $("#coins").html("You have " +coins +" coins");}, 10000);
	$("#spin").click(function(){
		$("#opt1").html("");
		$("#opt2").html("");
		$("#opt3").html("");
		$("#opt4").html("");
		$("#opt5").html("");
		$("#opt5").html("");
		$("#invent1").html("");
		$("#invent2").html("");
		$("#invent3").html("");
		$("#invent4").html("");
		$("#invent5").html("");
		console.log("spun");
		if (coins > 2){
			coins = coins-3;
			var num1 = Math.floor(((Math.random())* 3) + 1);
			var num2 = Math.floor(((Math.random())* 3) + 1);
			var num3 = Math.floor(((Math.random())* 3) + 1);
			$("#txt1").html(num1);
			$("#txt2").html(num2);
            $("#txt3").html(num3);
			if (num1 == num2 && num2 == num3){
			console.log("they matched")
			coins = coins + 20;
			$("#settxt").html("You Win!");
			$("#coins").html("You have " +coins +" coins");
			}else{
			console.log("no match");
			$("#settxt").html("You lose try again");
			$("#coins").html("You have " +coins +" coins");

		}
		}
		else{
			$("#settxt").html("not enough coins");
		}
	});
	$("#Store").click(function(){
		console.log(inventory.indexOf(x)+"" +inventory.indexOf(y)+"" +inventory.indexOf(z)+"" +inventory.indexOf(q));
		$("#invent1").html("");
		$("#invent2").html("");
		$("#invent3").html("");
		$("#invent4").html("");
		$("#invent5").html("");
		console.log("store");
		$("#opt1").html("click to buy " +x +" badge for 5 coins");
		$("#opt2").html("click to buy " +y +" badge for 10 coins");
		$("#opt3").html("click to buy "+z +" badge for 15 coins");
		$("#opt4").html("click to buy " +q +" badge for 20 coins");
		$("#opt5").html("click to close store");
		$("#opt5").click(function(){
			if(inventory.indexOf(x) > -1 && inventory.indexOf(y)> -1 && inventory.indexOf(z)> -1 && inventory.indexOf(q)> -1){
				lvl++;
				$("#lvl").html("level " +lvl);
				inventory = null;
				alert("Congrats you have reached level "+lvl +" your inventory has now been cleared");
				$("#badge").html("");
			}
			console.log("close store");
			$("#opt1").html(" ");
			$("#opt2").html(" ");
			$("#opt3").html(" ");
			$("#opt4").html(" ");
			$("#opt5").html(" ");
			$("#opt5").html(" ");
		});
		$("#opt1").click(function(){
		var testx = inventory.indexOf(x);
			if(testx > -1){
				$("#settxt").html("you already have this badge");
			}
			else if (coins > 4){
				console.log("invent store");
				inventory = inventory + x;
				coins = coins - 5;
				$("#coins").html("You have " +coins +" coins");
			}
			else if (coins < 5){
				alert("not enough coins for this badge");
			}
		});
		$("#opt2").click(function(){
			test = inventory.indexOf(y);
			if(test > -1){
				$("#settxt").html("you already have this badge");
			}
			else if (coins > 9){
				inventory = inventory + y;
				coins = coins - 10;
				$("#coins").html("You have " +coins +" coins");
			}
			else if (coins < 10){
				alert("you do not have enough coins for this badge");
			}
		});
		$("#opt3").click(function(){
			test = inventory.indexOf(z);
			if(test > -1){
				$("#settxt").html("you already have this badge");
			}
			else if (coins > 14){
				inventory = inventory + z;
				coins = coins - 15;
				$("#coins").html("You have " +coins +" coins");
			}
			else if (coins < 15){
				alert("you do not have enough coins for this badge");
			}
		});
		$("#opt4").click(function(){
			test = inventory.indexOf(q);
			if(test > -1){
				a$("#settxt").html("you already have this badge");
			}
			else if (coins > 19){
				inventory = inventory + q;
				coins = coins - 20;
				$("#coins").html("You have " +coins +" coins");
			}
			else if (coins < 20){
				alert("you do not have enough coins for this badge");
			}
		});

	});
	$("#Inventory").click(function(){
		$("#opt1").html("");
		$("#opt2").html("");
		$("#opt3").html("");
		$("#opt4").html("");
		$("#opt5").html("");
		$("#opt5").html("");
		test = inventory.indexOf(x);
		if(test > -1){
			$("#invent1").html("Click to equip " +x);
		}
		if(inventory == ""){
			alert("you have no badges");
		}else{
			$("#invent5").html("Click to close inventory");
		}
		test = inventory.indexOf(y);
		if(test > -1){
			$("#invent2").html("Click to equip " +y);
		}
		test = inventory.indexOf(z);
		if(test > -1){
			$("#invent3").html("Click to equip " +z);
		}
		test = inventory.indexOf(q);
		if(test > -1){
			$("#invent4").html("Click to equip " +q);
		}
		test = inventory.indexOf(x);
		$("#invent1").click(function(){
			 if (test > -1){
			 	$("#badge").html(x);
			}

		});
		$("#invent2").click(function(){
			test = inventory.indexOf(y);
			 if (test > -1){
			 	$("#badge").html(y);
			}

		});
		$("#invent3").click(function(){
			test = inventory.indexOf(z);
			 if (test > -1){
			 	$("#badge").html(z);
			}

		});
		$("#invent4").click(function(){
			test = inventory.indexOf(q);
			 if (test > -1){
			 	$("#badge").html(q);
			}

		});
		$("#invent5").click(function(){
			$("#invent1").html("");
			$("#invent2").html("");
			$("#invent3").html("");
			$("#invent4").html("");
			$("#invent5").html("");
		});
	});
});
Spinner.jsOpen
3 of 3 items
highscore.txtSpinner.htmlSpinner.js
Displaying Spinner.html.
