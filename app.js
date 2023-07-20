const heading = React.createElement("h1",
    {id: "heading"},
    "Hello World From React!"
    );

    const parent = React.createElement("div" , {id: "parent"}, 
    [React.createElement("div" , {id: "child"}, 
    React.createElement("h1" , {}, "I am an H1 Tag"),
    React.createElement("div" , {id: "child2"}, 
    React.createElement("h2" , {}, "I am an H1 Tag")))]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);