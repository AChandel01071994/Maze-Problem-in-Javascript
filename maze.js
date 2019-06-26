    // Rat in a maze problem (7 x 7 maze) (This will give all possible paths,
    // to find only shortest path BFS  would be a better choice)
{

     function main(){ 

     let maze = [
        [1,0,0,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,1,1,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,0,0,1,0,1,1],
        [1,1,1,1,0,1,1],
     ];
     let visited = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
     ];
         // maze (row and column) size
         let rowSize = 7;
         let columnSize = 7;
        
         // start row & column
         let sRow = 0;
         let sCol = 0;

         // destination row & column
         let desRow = 3;
         let desCol = 3;

         // uncomment to traverse path all ways
//         let pathRow = [-1,-1,-1,0,0,+1,+1,+1];
//         let pathCol = [-1,0,+1,-1,+1,-1,0,+1];
        // traverse path (NEWS)
         let pathRow = [-1, 0, 0, +1];
         let pathCol = [0, -1, +1, 0];

         // init visited
         visited[sRow][sCol] = 1;
          // move counter
         let move = 1;

         function DFSBackTrack(currentRow, currentCol){
                // base condition (cell found)
                if(currentRow === desRow && currentCol === desCol){
                    // print result
                    for(let i = 0; i < visited.length; i++){
                        let str = '';
                        for (let j = 0; j < visited.length; j++){
                            str += `${visited[i][j]},`
                        }
                        console.log(`${str}`)
                    }
                    console.log(`=================`);
                } else {
                    for(let i = 0; i < pathRow.length; i++){
                        let newcurrentRow = currentRow + pathRow[i];
                        let newcurrentCol = currentCol + pathCol[i];
                        if(isValidMove(newcurrentRow, newcurrentCol)) {
                            move++;
                            visited[newcurrentRow][newcurrentCol] = move;
                            DFSBackTrack(newcurrentRow, newcurrentCol);
                            move--;
                            visited[newcurrentRow][newcurrentCol] = 0;
                        }
                    }
                }
         }
         // checks whether next move is valid or not
         function isValidMove(row, col){
            return row >=0 && col >= 0 && row < rowSize && col < columnSize && visited[row][col] === 0 && maze[row][col] === 1;
        }

         return DFSBackTrack(sRow, sCol);
     }

     // call main function
     main()
}
