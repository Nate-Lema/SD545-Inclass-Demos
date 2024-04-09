// import { useContext } from "react";
// import {createContext} from "react";

// export default function App() {
//   const msg = "this is app message";
//   return (
//     <div>
//       <MsgContext.Provider value={msg}>
//         this is App
//         <A />
//       </MsgContext.Provider>
//     </div>
//   );
// }

// // function B() {
// //   return <div>this is B component, {msg}</div>;
// // }
// function B() {
//   const msg = useContext(MsgContext);

//   return (
//     <MsgContext.Consumer>
//       {(msg) => <div>this is B component, {msg}</div>}
//     </MsgContext.Consumer>
//   );
// }
