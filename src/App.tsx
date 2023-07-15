import React from 'react';
import TreeComponent from './components/TreeComponent';
import { treeData } from './constants/api';
import { ListItem } from './types/listItem';
import './index.css';

function App() {
    const [getCurrentState, setGetCurrentState] = React.useState(false)
    const printCurrentState = (data: ListItem[]) => {
        console.log(data)
        setGetCurrentState(false)
    }
  return (
    <div className="flex flex-col justify-center px-6 py-12">
        <TreeComponent data={treeData} getCurrentState={getCurrentState} printCurrentState={printCurrentState}/>
        <button className="px-5 py-2 bg-blue-500 text-white max-w-fit ml-16" onClick={() => setGetCurrentState(true)}>Get Current State</button>
    </div>
  );
}

export default App
