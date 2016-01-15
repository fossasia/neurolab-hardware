(function($){
	
	var Checkers = {
		
		// set game globals
		playing: false,
		moving: false,
		turn:"black",
		boardId: document.getElementById("board"),
		board: document.getElementById("board").getContext("2d"),
		tiles: 64,
		tileSize: 50,
		clickedTile: [],
		cols: 8,
		rows: 8,
		numPieces: 24,
		pieceSize: 40,
		pieceCoordinates: [],
		selectedPiece: [null, null, null],
		kings: [],
		selectedKing: [false, false],
		justJumped: false,
		init: function(){

			Checkers.drawBoard();
			Checkers.pieces();

		},
		drawBoard: function(){
		
			// set a color trigger for setting red/black for tiles
			// x/y coordinates
			var color = 0,
				x = 0,
				y = 0;

			// build the board
			for(i=0;i<Checkers.tiles;i++){
				
				// set color
				if(color === 1){
					Checkers.board.fillStyle = "#376180";
				} else {
					Checkers.board.fillStyle = "#000000";
				}
				
				// draw tile
				Checkers.board.fillRect((x * Checkers.tileSize), (y * Checkers.tileSize), Checkers.tileSize, Checkers.tileSize);
				
				// change color variable to ensure alternating colors
				if(color === 1){
					color = 0;
				} else {
					color = 1;
				}
				
				// increment across the board horizontally
				x++

				// check to see if we are at the edge of the board
				if(x % Checkers.cols === 0){
					
					// if so, move to the next row
					y++
					
					// reset the column
					x = 0;
					
					// reset the colors to make sure they stagger properly
					if(color === 0){
						color = 1;
					} else {
						color = 0;
					}
					
				}

			}
			
		},
		pieces: function(selected){
			
			// set a color trigger for setting red/black for tiles
			// x/y coordinates
			var color = 0,
				radius = Checkers.pieceSize / 2;
				x = 0,
				y = 0;
			
			if(Checkers.moving === false){

				// make the pieces
				for(i=0;i<Checkers.numPieces;i++){

					// if we have iterated through the first set of play pieces, set x & y to the appropriate coordinates across the board
					if(i === 12){
						x = 1;
						y = 5;
						color = 1;
					}
				
					Checkers.pieceCoordinates.push([x,y]);

					// draw pieces
					Checkers.board.beginPath();
					// piece's location is getting calculated based on it's center point, have to add radius width to center in the tile
					Checkers.board.arc(((x * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) /2 )) + radius), ((y * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) /2 )) + radius), radius, 0, Math.PI*2, false);
					Checkers.board.closePath();
				
					// on redraw for click detect, add a white border if selected
					if(i === selected){
						Checkers.board.strokeStyle = "#ffffff";
						Checkers.board.stroke();
					}

					// set color
					if(color === 1){
						Checkers.board.fillStyle = "#a784ec";
						Checkers.board.fill();
					} else {
						Checkers.board.fillStyle = "#21a9ec";
						Checkers.board.fill();
					}

					// increment across the board horizontally every other space
					x += 2;

					// check to see if we are at the edge of the board
					if(x === 8 || x === 9){

						// if so, move to the next row
						y++

						// conditionals to make sure we are getting proper staggering depending on what row we are on
						if(y === 1){
							x = 1;
						} else if(y === 2) {
							x = 0;
						}
					
						if(y === 6){
							x = 0;
						} else if(y === 7){
							x = 1;
						}

					}

				}
			
			} else {


				// make the pieces
				for(i=0;i<Checkers.numPieces;i++){
										
					// if we have iterated through the first set of play pieces, set x & y to the appropriate coordinates across the board
					if(i === 12){
						color = 1;
					}

					var kingChecker = Checkers.kingChecker(Checkers.pieceCoordinates[i]);

					if(kingChecker[0] === true){

						// draw pieces
						Checkers.board.beginPath();
						// piece's location is getting calculated based on it's center point, have to add radius width to center in the tile
						Checkers.board.arc(((Checkers.pieceCoordinates[i][0] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), ((Checkers.pieceCoordinates[i][1] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), radius, 0, Math.PI*2, false);
						Checkers.board.closePath();

						// on redraw for click detect, add a white border if selected
						if(i === selected){
							Checkers.board.strokeStyle = "#ffffff";
							Checkers.board.stroke();
						}

						var gradient = Checkers.board.createRadialGradient(((Checkers.pieceCoordinates[i][0] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), ((Checkers.pieceCoordinates[i][1] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), 2, ((Checkers.pieceCoordinates[i][0] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), ((Checkers.pieceCoordinates[i][1] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), 20);
						
						// set color
						if(color === 1){
							gradient.addColorStop(0, '#ffffff');
							gradient.addColorStop(1, '#a784ec');
							Checkers.board.fillStyle = gradient;
							Checkers.board.fill();
						} else {
							gradient.addColorStop(0, '#ffffff');
							gradient.addColorStop(1, '#21a9ec');
							Checkers.board.fillStyle = gradient;
							Checkers.board.fill();
						}

					} else {
												
						// draw pieces
						Checkers.board.beginPath();
						// piece's location is getting calculated based on it's center point, have to add radius width to center in the tile
						Checkers.board.arc(((Checkers.pieceCoordinates[i][0] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), ((Checkers.pieceCoordinates[i][1] * Checkers.tileSize + ((Checkers.tileSize - Checkers.pieceSize) / 2 )) + radius), radius, 0, Math.PI*2, false);
						Checkers.board.closePath();

						// on redraw for click detect, add a white border if selected
						if(i === selected){
							Checkers.board.strokeStyle = "#ffffff";
							Checkers.board.stroke();
						}						
						// set color
						if(color === 1){
							Checkers.board.fillStyle = '#a784ec';
							Checkers.board.fill();
						} else {
							Checkers.board.fillStyle = '#21a9ec';
							Checkers.board.fill();
						}
						
					}
					
				}
				
			}
				
			if(Checkers.playing === false){
				Checkers.playing = true;
				Checkers.move.whichTile();
			}
				
		},
		kingChecker:function(piece){

			var kingTotal = Checkers.kings.length;
									
			if(kingTotal > 0){
	
				for(m=0;m<kingTotal;m++){
					
					if(Checkers.kings[m][0] === piece[0] && Checkers.kings[m][1] === piece[1]){
						var bool = true,
							index = m;
						return [bool, index];
					}
					
				}
				
				return [];
				
			} else {
				return [];
			}

		},
		move:{
			
			whichTile:function(){
				
				var cursorX, 
					cursorY,
					thisPieceCoordinates,
					pieceIndex;
					
				$(Checkers.boardId).click(function(e){

					// get the coordinates
					for(i=0;i<=8;i++){

						if(e.offsetX > (i * Checkers.tileSize) && e.offsetX < ((i + 1) * Checkers.tileSize)){
							cursorX = i;
						}

						if( e.offsetY > (i * Checkers.tileSize) && e.offsetY < ((i + 1) * Checkers.tileSize)){
							cursorY = i;
						}

					}

					Checkers.clickedTile = [cursorX, cursorY];
					Checkers.move.selectPiece();

				});
		
			},
			selectPiece: function(){

				// match the coordinates to retreive the index
				for(j=0;j<Checkers.numPieces;j++){
					
					if(Checkers.pieceCoordinates[j][0] === Checkers.clickedTile[0] && Checkers.pieceCoordinates[j][1] === Checkers.clickedTile[1]){

						if(j < 12 && Checkers.turn === "black"){

							
							Checkers.selectedPiece = [j, Checkers.clickedTile];
							var kingChecker = Checkers.kingChecker(Checkers.selectedPiece[1]);		

							if(kingChecker[0] === true){
								Checkers.selectedPiece[2] = "king";
								Checkers.selectedKing = kingChecker;
							}
							
							Checkers.drawBoard();
							Checkers.pieces(j);
							break;
							
						} else if(j > 11 && Checkers.turn === "red") {
							
							Checkers.selectedPiece = [j, Checkers.clickedTile];
							var kingChecker = Checkers.kingChecker(Checkers.selectedPiece[1]);		

							if(kingChecker[0] === true){
								Checkers.selectedPiece[2] = "king";
								Checkers.selectedKing = kingChecker;
							}
							
							Checkers.drawBoard();
							Checkers.pieces(j);
							break;
						}

					}

				}
				
				Checkers.move.mover();

			},
			validMove:function(){
				
				// check for pieces ocuppying the clicked tile
				for(i=0;i<Checkers.numPieces;i++){

					if(Checkers.pieceCoordinates[i][0] === Checkers.clickedTile[0] && Checkers.pieceCoordinates[i][1] === Checkers.clickedTile[1]){
						return true;
						break;
					}

				}

				return false;
	
			},
			multiJump:function(){
						
				if(Checkers.justJumped === false){
										
					if(Checkers.turn === "black"){
						Checkers.turn = "red";
					} else {
						Checkers.turn = "black";
					}

				} else {

					var potentialLeftShape = Checkers.justJumped[1][0] - 1,
						potentialRightShape = Checkers.justJumped[1][0] + 1,
						potentialLeft = Checkers.justJumped[1][0] - 2,
						potentialRight = Checkers.justJumped[1][0] + 2,
						shapeDetect = [false, false];

					if(Checkers.turn === "black"){

						for(i=12;i<Checkers.numPieces;i++){

							if((Checkers.pieceCoordinates[i][0] === potentialLeftShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] + 1)){

								for(j=12;j<Checkers.numPieces;j++){
									
									if((Checkers.pieceCoordinates[j][0] === potentialLeft && Checkers.pieceCoordinates[j][1] === Checkers.justJumped[1][1] + 2)){
										shapeDetect[0] = true;
										break;
									}

									if(j === Checkers.numPieces - 1){
										Checkers.clickedTile = [potentialLeft, Checkers.justJumped[1][1] + 2];
									}

								}
								

							} else if ((Checkers.pieceCoordinates[i][0] === potentialRightShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] + 1)){
								
								for(k=12;k<Checkers.numPieces;k++){
		
									if((Checkers.pieceCoordinates[k][0] === potentialRight && Checkers.pieceCoordinates[k][1] === Checkers.justJumped[1][1] + 2)){							
										shapeDetect[1] = true;
										break;
									}
								
									if(k === Checkers.numPieces - 1){
										Checkers.clickedTile = [potentialRight, Checkers.justJumped[1][1] + 2];
									}
								
								}

							}
							
							if(Checkers.selectedPiece[2] === "king"){
																
								if((Checkers.pieceCoordinates[i][0] === potentialLeftShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] - 1)){

									for(l=12;l<Checkers.numPieces;l++){

										if((Checkers.pieceCoordinates[l][0] === potentialLeft && Checkers.pieceCoordinates[l][1] === Checkers.justJumped[1][1] - 2)){
											shapeDetect[0] = true;
											break;
										}

										if(l === Checkers.numPieces -1){
											Checkers.clickedTile = [potentialLeft, Checkers.justJumped[1][1] - 2];
										}

									}


								} else if ((Checkers.pieceCoordinates[i][0] === potentialRightShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] - 1)){

									for(n=12;n<Checkers.numPieces;n++){

										if((Checkers.pieceCoordinates[n][0] === potentialRight && Checkers.pieceCoordinates[n][1] === Checkers.justJumped[1][1] - 2)){							
											shapeDetect[1] = true;
											break;
										}

										if(n === Checkers.numPieces -1){
											Checkers.clickedTile = [potentialRight, Checkers.justJumped[1][1] - 2];
										}

									}

								}
								
							}
							
						}
						
						
						if ((potentialLeft < 0 || potentialRight > 7 || (Checkers.justJumped[1][1] + 2) > 7) && Checkers.selectedPiece[2] != "king"){								
							shapeDetect[0] = true;
							shapeDetect[1] = true;
						}												
						
						if(shapeDetect[0] === true && shapeDetect[1] === true){
							Checkers.justJumped = false;
							Checkers.selectedPiece = [null, null, null];
							Checkers.turn = "red";
						} else if(Checkers.move.validMove() === false) {
							Checkers.clickedTile = Checkers.justJumped[1];
							Checkers.move.selectPiece(Checkers.justJumped[0]);
							if(Checkers.selectedPiece[2] === "king"){
								Checkers.selectedPiece = [Checkers.justJumped[0], Checkers.justJumped[1], "king"];
							} else {
								Checkers.selectedPiece = [Checkers.justJumped[0], Checkers.justJumped[1], null];
							}
							Checkers.turn = "black";
							return;
						} else {
							Checkers.justJumped = false;
							Checkers.selectedPiece = [null, null, null];
							Checkers.turn = "red";
						}

					} else {
						
						for(i=0;i<12;i++){

							if((Checkers.pieceCoordinates[i][0] === potentialLeftShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] - 1)){

								for(j=0;j<12;j++){
									
									if((Checkers.pieceCoordinates[j][0] === potentialLeft && Checkers.pieceCoordinates[j][1] === Checkers.justJumped[1][1] - 2)){
										shapeDetect[0] = true;
										break;
									}

									if(j === 11){
										Checkers.clickedTile = [potentialLeft, Checkers.justJumped[1][1] - 2];
									}

								}
								

							} else if ((Checkers.pieceCoordinates[i][0] === potentialRightShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] + 1)){
								
								for(k=0;k<12;k++){
		
									if((Checkers.pieceCoordinates[k][0] === potentialRight && Checkers.pieceCoordinates[k][1] === Checkers.justJumped[1][1] + 2)){							
										shapeDetect[1] = true;
										break;
									}
								
									if(k === 11){
										Checkers.clickedTile = [potentialRight, Checkers.justJumped[1][1] - 2];
									}
								
								}

							}
							
							if(Checkers.selectedPiece[2] === "king"){
																
								if((Checkers.pieceCoordinates[i][0] === potentialLeftShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] + 1)){

									for(l=0;l<12;l++){

										if((Checkers.pieceCoordinates[l][0] === potentialLeft && Checkers.pieceCoordinates[l][1] === Checkers.justJumped[1][1] + 2)){
											shapeDetect[0] = true;
											break;
										}
										if(l === 11){
											Checkers.clickedTile = [potentialLeft, Checkers.justJumped[1][1] + 2];
										}

									}


								} else if ((Checkers.pieceCoordinates[i][0] === potentialRightShape && Checkers.pieceCoordinates[i][1] === Checkers.justJumped[1][1] - 1)){

									for(n=0;n<12;n++){

										if((Checkers.pieceCoordinates[n][0] === potentialRight && Checkers.pieceCoordinates[n][1] === Checkers.justJumped[1][1] - 2)){							
											shapeDetect[1] = true;
											break;
										}

										if(n === 11){
											Checkers.clickedTile = [potentialRight, Checkers.justJumped[1][1] + 2];
										}

									}

								}
								
							}
							
						}
												
						if ((potentialLeft < 0 || potentialRight > 7 || (Checkers.justJumped[1][1] - 2) < 0)  && Checkers.selectedPiece[2] != "king"){								
							shapeDetect[0] = true;
							shapeDetect[1] = true;
						}												
						
						if(shapeDetect[0] === true && shapeDetect[1] === true){
							Checkers.justJumped = false;
							Checkers.selectedPiece = [null, null, null];
							Checkers.turn = "black";
						} else if(Checkers.move.validMove() === false) {
							Checkers.clickedTile = Checkers.justJumped[1];
							Checkers.move.selectPiece(Checkers.justJumped[0]);
							if(Checkers.selectedPiece[2] === "king"){
								Checkers.selectedPiece = [Checkers.justJumped[0], Checkers.justJumped[1], "king"];
							} else {
								Checkers.selectedPiece = [Checkers.justJumped[0], Checkers.justJumped[1], null];
							}
							Checkers.turn = "red";
							return;
						} else {
							Checkers.justJumped = false;
							Checkers.selectedPiece = [null, null, null];
							Checkers.turn = "black";
						}

					}

				}

			},
			mover:function(){

				// set the difference in x coordinates
				try{
					var xDif = Checkers.clickedTile[0] - Checkers.selectedPiece[1][0],
						yDif = Checkers.clickedTile[1] - Checkers.selectedPiece[1][1];
				} catch(e) {
					console.log(e);
				}
				
				
				if(Checkers.turn === "black"){

					if((xDif === 1 || xDif === -1) && yDif === 1 && Checkers.justJumped === false){
						// move one space
						if(Checkers.move.validMove() === false){
							(document.getElementById("howto")).style.backgroundColor = "#a784ec";
							Checkers.selectedPiece[1][0] += xDif
							Checkers.selectedPiece[1][1]++
							Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
							if(Checkers.selectedPiece[1][1] === 7){
								(document.getElementById("howto")).style.backgroundColor = "#a784ec";
								Checkers.kings.push(Checkers.selectedPiece[1]);
							}
							if(Checkers.selectedPiece[2] === "king"){
								(document.getElementById("howto")).style.backgroundColor = "#a784ec";
								Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
								Checkers.kings[Checkers.selectedKing[1]][1]--
							}
							Checkers.moving = true;
							Checkers.drawBoard();
							Checkers.pieces();
							Checkers.turn = "red";
						}

					} else if((xDif === 2 || xDif === -2) && yDif === 2) {

						// try to jump
						if(xDif === 2){
							(document.getElementById("howto")).style.backgroundColor = "#a784ec";
							var xPieceCheck = Checkers.clickedTile[0] - 1;
						} else{
							(document.getElementById("howto")).style.backgroundColor = "#a784ec";
							var xPieceCheck = Checkers.clickedTile[0] + 1;
						}

						for(i=12;i<Checkers.numPieces;i++){
							
							// detect if jump is possible, iterate through piece array to see if there is piece match for possible shape jumps													
							if(Checkers.pieceCoordinates[i][0] === xPieceCheck && Checkers.pieceCoordinates[i][1] === (Checkers.clickedTile[1] - 1)){
								
								var shapeIndex = i;
																
								// move jumping shape, clear jumped shap
								if(Checkers.move.validMove() === false){
									Checkers.selectedPiece[1][0] += xDif;
									Checkers.selectedPiece[1][1] += 2;
									Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
									if(Checkers.selectedPiece[1][1] === 7 && Checkers.selectedKing[0] === false){
										Checkers.kings.push(Checkers.selectedPiece[1]);
									}
									if(Checkers.selectedPiece[2] === "king"){
										Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
										Checkers.kings[Checkers.selectedKing[1]][1] += 2;
									}	
									Checkers.justJumped = Checkers.selectedPiece;
									Checkers.pieceCoordinates[shapeIndex] = [-1, -1]
									Checkers.moving = true;
									Checkers.drawBoard();
									Checkers.pieces();
									Checkers.move.multiJump();
									break;
								}
								
							}
							
						}
						
					}
					
					if(Checkers.selectedPiece[2] === "king"){
							
						if((xDif === 1 || xDif === -1) && yDif === -1 && Checkers.justJumped === false){
														
							// move one space
							if(Checkers.move.validMove() === false){
								(document.getElementById("howto")).style.backgroundColor = "#a784ec";
								Checkers.selectedPiece[1][0] += xDif;
								Checkers.selectedPiece[1][1]--
								Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
								Checkers.kings[Checkers.selectedKing[1]][1]--
								Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
								Checkers.moving = true;
								Checkers.drawBoard();
								Checkers.pieces();
								Checkers.selectedPiece = [null, null, null];
								Checkers.turn = "red";
							}

						} else if((xDif === 2 || xDif === -2) && yDif === -2) {

							// try to jump
							if(xDif === 2){
								
								var xPieceCheck = Checkers.clickedTile[0] - 1;
							} else{
								(document.getElementById("howto")).style.backgroundColor = "#a784ec";
								var xPieceCheck = Checkers.clickedTile[0] + 1;
							}

							for(i=12;i<Checkers.numPieces;i++){

								// detect if jump is possible, iterate through piece array to see if there is piece match for possible shape jumps													
								if(Checkers.pieceCoordinates[i][0] === xPieceCheck && Checkers.pieceCoordinates[i][1] === (Checkers.clickedTile[1] + 1)){

									var shapeIndex = i;

									// move jumping shape, clear jumped shap
									if(Checkers.move.validMove() === false){
										Checkers.selectedPiece[1][0] += xDif;
										Checkers.selectedPiece[1][1] -= 2;
										Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
										Checkers.kings[Checkers.selectedKing[1]][1] -= 2;
										Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
										Checkers.justJumped = Checkers.selectedPiece;
										Checkers.pieceCoordinates[shapeIndex] = [-1, -1]
										Checkers.moving = true;
										Checkers.drawBoard();
										Checkers.pieces();
										Checkers.move.multiJump();
										break;
									}

								}

							}

						}
						
					}
					
				} else if(Checkers.turn === "red") {
					
										
					if((xDif === 1 || xDif === -1) && yDif === -1 && Checkers.justJumped === false){
						
						// move one space
						if(Checkers.move.validMove() === false){
							(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
							Checkers.selectedPiece[1][0] += xDif
							Checkers.selectedPiece[1][1]--
							Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
							if(Checkers.selectedPiece[1][1] === 0){
								(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
								Checkers.kings.push(Checkers.selectedPiece[1]);
							}
							if(Checkers.selectedPiece[2] === "king"){
								(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
								Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
								Checkers.kings[Checkers.selectedKing[1]][1]--
							}
							Checkers.moving = true;
							Checkers.drawBoard();
							Checkers.pieces();
							Checkers.selectedPiece = [null, null, null];
							Checkers.turn = "black";
						}
						
					} else if((xDif === 2 || xDif === -2) && yDif === -2) {

						// try to jump
						if(xDif === 2){
							(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
							var xPieceCheck = Checkers.clickedTile[0] - 1;
						} else{
							(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
							var xPieceCheck = Checkers.clickedTile[0] + 1;
						}

						for(i=0;i<12;i++){
														
							// detect if jump is possible, iterate through piece array to see if there is piece match for possible shape jumps													
							if(Checkers.pieceCoordinates[i][0] === xPieceCheck && Checkers.pieceCoordinates[i][1] === (Checkers.clickedTile[1] + 1)){
								
								var shapeIndex = i;
								
								// move jumping shape, clear jumped shap
								if(Checkers.move.validMove() === false){
									Checkers.selectedPiece[1][0] += xDif;
									Checkers.selectedPiece[1][1] -= 2;
									Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
									if(Checkers.selectedPiece[1][1] === 0){
										Checkers.kings.push(Checkers.selectedPiece[1]);
									}
									if(Checkers.selectedPiece[2] === "king"){
										Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
										Checkers.kings[Checkers.selectedKing[1]][1] -= 2;
									}
									Checkers.justJumped = Checkers.selectedPiece;
									Checkers.pieceCoordinates[shapeIndex] = [-1, -1]
									Checkers.moving = true;
									Checkers.drawBoard();
									Checkers.pieces();
									Checkers.move.multiJump();
									break;
								}
								
							}
							
						}
						
					}
					
					if(Checkers.selectedPiece[2] === "king"){
						
						if((xDif === 1 || xDif === -1) && yDif === 1 && Checkers.justJumped === false){

							// move one space
							if(Checkers.move.validMove() === false){
								(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
								Checkers.selectedPiece[1][0] += xDif
								Checkers.selectedPiece[1][1]++
								Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
								Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
								Checkers.kings[Checkers.selectedKing[1]][1]++
								Checkers.moving = true;
								Checkers.drawBoard();
								Checkers.pieces();
								Checkers.selectedPiece = [null, null, null];
								Checkers.turn = "black";
							}

						} else if((xDif === 2 || xDif === -2) && yDif === 2) {

							// try to jump
							if(xDif === 2){
								(document.getElementById("howto")).style.backgroundColor = "#21a9ec";
								var xPieceCheck = Checkers.clickedTile[0] - 1;
							} else{
								var xPieceCheck = Checkers.clickedTile[0] + 1;
							}

							for(i=0;i<12;i++){

								// detect if jump is possible, iterate through piece array to see if there is piece match for possible shape jumps													
								if(Checkers.pieceCoordinates[i][0] === xPieceCheck && Checkers.pieceCoordinates[i][1] === (Checkers.clickedTile[1] - 1)){

									var shapeIndex = i;

									// move jumping shape, clear jumped shap
									if(Checkers.move.validMove() === false){
										Checkers.selectedPiece[1][0] += xDif;
										Checkers.selectedPiece[1][1] += 2;
										Checkers.pieceCoordinates[Checkers.selectedPiece[0]] = Checkers.selectedPiece[1];
										Checkers.kings[Checkers.selectedKing[1]][0] += xDif;
										Checkers.kings[Checkers.selectedKing[1]][1] += 2;
										Checkers.justJumped = Checkers.selectedPiece;
										Checkers.pieceCoordinates[shapeIndex] = [-1, -1]
										Checkers.moving = true;
										Checkers.drawBoard();
										Checkers.pieces();
										Checkers.move.multiJump();
										break;
									}

								}

							}

						}
						
					}
					
				}
				
			}
			
		} 
		
	}; Checkers.init();
	
})(jQuery);
