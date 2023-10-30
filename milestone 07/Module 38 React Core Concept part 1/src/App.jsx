import React from "react";
import './App.css'
import Actor from "./components/Actor/Actor";
import Singer from "./components/Singer/Singer";

const App = () => {
  const actors = ['sakib', 'musfiq', 'mahmudullah', 'tamim'];

  const singers = [
    {id:1, name: 'Dr.Mahfuz', age:68}, 
    {id:2, name: 'Mahfuz', age:38}, 
    {id:3, name: 'kawsar', age:10},
    {id:4, name: 'kabir', age: 18} 
  ]
  return (
    <div>
     {/* <Actor />
     {
      actors.map(actor =><Actor  actor= {actor}/>)
     } */}
    <h1>Display Singer List</h1>
     {
      singers.map(singer => <Singer key={singer.id}  singer ={singer}/>)
     }
    </div>
  );
};

export default App;
