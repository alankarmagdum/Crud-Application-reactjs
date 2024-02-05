// import "./App.css";
// import Create from "./Compontent/Create";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Read from "./Compontent/Read";
// import Update from "./Compontent/Update";


// function App() {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Create />} />
//           <Route path="/read" element={<Read/>}/>
//           <Route path="/update" element={<Update/>}/>

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Compontent/Read";
import Create from "./Compontent/Create";
import Update from "./Compontent/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;