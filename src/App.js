import React, { useState } from 'react';
import './App.css';
import CheckerBoard from './components/CheckerBoard';

function App() {
    const [size, setSize] = useState(0);

    return (
        <div className="container">
            <h1>Checker Game</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="boardSize">Board Size</label>
                    <input type="text" 
                        className="form-control" 
                        id="boardSize" 
                        aria-describedby="board-size" 
                        placeholder="Enter a board size (N X N)" 
                        value={size}
                        onChange={e => setSize(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                <CheckerBoard size={size}/> 
            </form>
        
        </div>
    );
}

export default App;
