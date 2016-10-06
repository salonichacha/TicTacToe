	function startGame(){
			clearbox();	
			document.winner = null;
			document.turn = "X";
			document.last = null;
			document.undoUsed = false;

			if(Math.random() < 0.5){
				document.turn = "O";
			}
			setMessage(document.turn + " Get to start");
		}
	
		function setMessage(msg){
			document.getElementById("message").innerText = msg;

		}

		function nextMove(square){

			if(document.winner != null){

			}
			else if(square.innerText == ''){	
					square.innerText = document.turn;
					document.last = square.id;

					if(document.turn == "X")document.turn ="O";	
				 	else document.turn = "X";
				 	document.undoUsed = false;

				 	setMessage(document.turn + " Get to start")
				 	
				 	var isX = isWinner('X');
					var isO = isWinner('O');

					if(isX) {
						alert('Winner is X'); document.winner = 'X'; document.undoUsed = true; setMessage("Congratulations! X is the Winner");
					}
					if(isO) {
						alert('Winner is O'); document.winner = 'O'; document.undoUsed = true; setMessage("Congratulations! O is the Winner");
					}		

					var isDraw = draw();

					if(!isX && !isO && isDraw){
						setMessage("Well Played Players!");
					}
			}

		}	

		function draw(){
			var isDraw = false;
			var counter = 0 ;
			for(var i = 1 ; i < 10 ; i++){
				if(document.getElementById("s"+i).innerText != ''){
					counter++;
				}
			}

			if(counter == 9) {
				document.undoUsed = true;
				isDraw = true;
			}	

			return isDraw;
		}

		function isWinner(move){

		var result = false;
			if(checkRow(1,2,3,move) ||  checkRow(1,4,7,move) || checkRow(2,5,8,move) || checkRow(3,6,9,move) || checkRow(4,5,6,move) || checkRow(7,8,9,move) || checkRow(1,5,9,move) || checkRow(3,5,7,move)){
				result = true;	
			}

			return result;
		}

		function checkRow(a, b, c, move){
			if(document.getElementById("s"+a).innerText == move && document.getElementById("s"+b).innerText == move && document.getElementById("s"+c).innerText == move) return true;
			else return false;
		}

		function clearbox(){
			for(var i = 1 ; i < 10 ;i++ ){
				document.getElementById("s"+i).innerText = "";
			}
		}

		function undo(){
			
			if(document.undoUsed == false){
			document.getElementById(document.last).innerText = '';
			if(document.turn == "X"){
				document.turn = "O";
			}
			else {
				document.turn = "X";
			}

			setMessage(document.turn + " Get to start");
			document.undoUsed = true;
			}
		}