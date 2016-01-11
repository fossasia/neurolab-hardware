from random import randint

print "Welcome to Treasure Hunt \n"

q="@"     #For checking the treasure
board = []  #Board

for x in range(0,4):
    board.append(["0"] * 4)   # It creates 4x4 Board with 0 everywhere

treasure = 9
while treasure:                # Randomly spread treasure
 r = randint(0, len(board)-1)
 c = randint(0, len(board[0])-1)
 if board[r][c] != "@":
 		board[r][c]="@"
 	 	treasure -= 1

print "-------------------------------"
print "\n Treasures are here "
print "\n-------------------------------\n"
for row in board:
	print "     ".join(row)                  # Give output of board
	print "\n"


def hunt(a,b):              #Hunt function searches for treasure around the given land
	first = a-1
	second = b-1
	third = a+1
	fourth = b+1
	#i = (a-1)
	if(first < 0):
		first = first + 1;
	if(second < 0):
		second = second + 1;
	if(third == 4):
		third = third - 1;
	if(fourth == 4):
		fourth = fourth -1;

	h=0
	for i in range(first,third + 1):
		#j=b-1
		for j in range(second,fourth + 1):
			if(q==board[i][j]):
				h=h+1;
				board[a][b] = h

for k in range(len(board)):
	for l in range(len(row)):
		if(q!=board[k][l]):
			hunt(k,l)

#print "\n".join(map(str, board))
for row in board:
    print "   ".join(map(str,row))