// App.js

/**
 * <div id="parent">
 *    <div id="child1">
 *           <h1 id="grandchild1"> i am h1 tag </h1>
 *           <h2 id="grandchild2"> i am h1 tag </h2>
 *    </div>
 *    <div id="child2">
 *          <h1 id="grandchild21"> i am h1 tag </h1>
 *          <h2 id="grandchild22"> i am h1 tag </h2>
 *    </div>
 * </div>
 * 
 * React.createElement(object) => HTML (Browser understands)
 */
const parent =React.createElement("div" ,
     {id:"parent"} , 
      [   React.createElement("div" ,
         {id:"child1"} ,
        [ React.createElement("h1" , {id:"grandchild1"} , "i am h1 tag "), 
          React.createElement("h2" , {id:"grandchild2"} , "i am h2 tag ")
        ] 
    ),   React.createElement("div" ,
         {id:"child2"} ,
        [ React.createElement("h1" , {id:"grandchild21"} , "i am h1 tag "), 
          React.createElement("h2" , {id:"grandchild22"} , "i am h2 tag ")
        ] 
    )
     ]
    );

console.log(parent); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
