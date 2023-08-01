import { useState, useEffect } from "react";

function UseEffectHook() {
    // ? What are the lifecycle funtions?
    // * ComponentDidMount - when component is mounted (loaded)
    // * ComponentDidUpdate - when component is updated with new state/prop
    // * ComponentWillUnmount - before a page rerenders, the component is unmounted

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth); // innerWidth tells us how wide the window is
    const [ name, setName ] = useState("");

    // In this example, useEffectHook will render every time a component is rendered
    // ! NO MATTER WHAT, ANY AND ALL useEffectHook will render when page is rendered
    useEffect(() => {
        console.log("I rerendered");
    });

    // In this example, useEffect has Dependency Array
    // Dependency Array is empty so since it's not dependent on any state or properties, this useEffect will only render once.
    // !    First render only - ComponentDidMount alternative
    useEffect(() => {
        console.log("The component is mounted");
    }, []);

    // In this example, the dependency array has states
    // When the state changes in the component, this useEffect will be triggered (function is dependent on the dependency array)
    // If the code block has the variable and the dependency array doesn't, an error will be thrown
    // !    First render + whenever variable in dependency array changes - ComponentDidUpdate alternative
    useEffect(() => {
        console.log(`The dependency variable name changed to the following: ${name}`);
        console.log(`This name change triggers the component to rerender`);
    }, [ name ]);


    // In this example, the useEffect has a cleanup function
    // Before the page rerenders, this function quickly unmounts the component
    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth); // resize event fires when window width changes

        // cleanup function
        // return () => {
        //     // every rerender we remove the addEventlistener
        //     window.removeEventListener("resize", updateWindowWidth);
        //     console.log(`This component will be unmounted`);
        // }
    }, []);

    // helper function for componentWillUnmount example above
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    return(
        <div>
            <center>
                <h1>UseEffectHook</h1>
                <h2>The window width is: {windowWidth}</h2>

                <input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter a name">
                </input>
            </center>
        </div> 
    );
}

export default UseEffectHook;