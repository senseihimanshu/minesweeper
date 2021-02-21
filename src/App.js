import './App.css';

import Board from './Board';

function createMatrix(size){
  const matrix = [];

  const bombs = new Set();
  
  for(let i = 0; i < size*size/2; i++){
      bombs.add(Math.floor(Math.random() * Math.floor(size*size)));
  }

  console.log(bombs);

  for(let row = 0; row < size; row++){
      matrix[row] = [];
      for(let col = 0; col < size; col++){
          let cell = size * row + col;
          if(bombs.has(cell)){
              matrix[row][col] = -1;
          }
      }
  }

  for(let row = 0; row < size; row++){
      for(let col = 0; col < size; col++){
          if(matrix[row][col] !== -1){
              let num = 0;
              if(row-1 >= 0){
                  col-1 >= 0 && matrix[row-1][col-1] === -1 && num++;
                  matrix[row-1][col] === -1 && num++;
                  col+1 < size && matrix[row-1][col+1] === -1 && num++;
              }
              
              col-1 >= 0 && matrix[row][col-1] === -1 && num++;
              col+1 < size && matrix[row][col+1] === -1 && num++;
              
              if(row+1 < size){
                  col-1 >= 0 && matrix[row+1][col-1] === -1 && num++;
                  matrix[row+1][col] === -1 && num++;
                  col+1 < size && matrix[row+1][col+1] === -1 && num++;
              }

              matrix[row][col] = num;
          }
      }
  }

  return { board: matrix, bombsCount: bombs.size };
}

function App() {
  var size = 10;
  const { board, bombsCount } = createMatrix(size);
  console.log(board);
  return (
    <div className="App">
      <Board board={board} bombsCount={bombsCount} size={size} />
    </div>
  );
}

export default App;
