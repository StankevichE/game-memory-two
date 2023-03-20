import './App.css';
import Board from "./components/Board";
import {useEffect, useState} from "react";

function App() {

    const [board, setBoard]=useState(Array(12).fill(null).map((el)=>(
        {id: Math.random().toString(),
            img: null,
            isOpen: false,

        }
    )))
    const emodjy= ["❤", "💋", "🤦‍♀️", "🍭", "😍", "🐱‍💻"]
    const emodjyBoard = () => {
        const newBoard = board.map(el=>
            ({...el, img:null}))
        for (let i = 0; i<emodjy.length; i++){
            for (let j = 1; j<=2; j++){
                let index
                do {
                    index=Math.trunc(Math.random()*12)
                }
                while (newBoard[index].img !== null)
                    newBoard[index].img = emodjy[i]
                }
        }
        setBoard(newBoard)
    }
    useEffect(() => {
        emodjyBoard()
    }, [])

  return (
    <div className="App">
        <h1>Memory game!</h1>
<Board
    board={board}/>
    </div>
  );
}

export default App;
