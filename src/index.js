import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";

{
  /* <div>
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
</div>  */
}

// const li1 = React.createElement("li", { key: "l1" }, "A");
// const li2 = React.createElement("li", { key: "l2" }, "B");
// const li5 = React.createElement("li", { key: "l5" }, "1");
// const li3 = React.createElement("li", { key: "l3" }, "C");
// const li4 = React.createElement("li", { key: "l4" }, "D");
// const ul1 = React.createElement("ul", {}, [li1, li2, li5, li3, li4]);

// JSX => createElement by babel => object => htmlElement

// const head1 = (
//   <h1 pooja="hello" key="12">
//     HELLO REACT
//   </h1>
// );

// const head2 = (
//   <h2 pooja="hello" key="123">
//     HELLO REACT
//   </h2>
// );

// const cotainer = <div>{[head1, head2]}</div>;

/**
 *
 * <div>
 * <ul>
 * <li>
 * <li>
 *  </ul>
 * </div>
 *
 * 10 days
 * client side validation
 * Netscape --- > js
 * chrome -- v8 engine --> int a =10
 * firefox ---spider monkey --> integer a = 10
 * ECMA script---(function test(), var a = 10 ) ,  es 6 (() => {}, let a = 10 , const, map, filter, find )
 * a = array.map(a => a *10)
  const Header = () => {
  return <h1>Hello React</h1>;
};

const Body = () => {
  return <h1>Body</h1>;
};

const Footer = () => {
  return <h1>FOOTER</h1>;
};

const MainContainer = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
 *
 * div
 * ----header
 * -----body
 * -----footer
 *
 * COMPONENT
 * 1.Functional Component --> js function which return some jsx
 * 2.class based component
 *-------------------------------------------------------------------------------------
 *
 * 
 * mainLayout--
 *      --Header
 *          --logo/title
 *          --nav items
 *      --Body
 *          -- Restaurants
 *                  ---img
 *                  ---name
 *                  ---rating
 *                  ---cuisines
 *                  ----timeToDeliver
 * 
 *    ---Footer
 *        --copyright details
 */

const AppLayout = () => {
  return (
    // <React.Fragment>
    <>
      <Header />
      <Body />
      <Footer />
    </>
    // </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
