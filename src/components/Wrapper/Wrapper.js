import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;

// import React from "react";

// const HelloBootstrap = () => (
//   <div className="container">
//     <div className="jumbotron">
//       <h1>Hello, Enrique!!!!!!!!!!!</h1>
//       <p>I'm a jumbotron!</p>
//       <p>
//         <button className="btn btn-primary btn-lg">
//           Learn more
//         </button>
//       </p>
//     </div>
//     <div className="card mb-4">
//       <div className="card-header">
//         <h3>Card title</h3>
//       </div>
//       <div className="card-body">
//         <p className="card-text">Card content</p>
//       </div>
//     </div>
//     <div className="card mb-4">
//       <div className="card-header">
//         <h3>Card title</h3>
//       </div>
//       <div className="card-body">
//         <p className="card-text">Card content</p>
//       </div>
//     </div>
//   </div>
// );

// export default HelloBootstrap;

