// import React from "react";

// function Demo(){
//     const a=5;
//     let num="large"
//     if(a<10){
//         num="small"
//     }
//     const x=num

//     return(
//         <>
//         <h1>Hello World. {num}</h1>
//         <h1>ternary operator "condition ? expressionIfTrue : expressionIfFalse;"</h1>
//         <h4>{(a<10)?"small":"large"}</h4>
//         </>
//     )
// }

// export default Demo






// import React from "react";

// function Myself(props){

//     return(
//         <div>
//             <h1>My Name is : {props.name}</h1>
//             <h1>Age : {props.age}</h1>
//         </div>
//     )
// }

// export default Myself






// import React from "react";

// function Me(props){

//     return(
//         <div>
//             <h1>
//             Name: {props.dtls.name} <br/>
//             Age: {props.dtls.age} <br />
//             Phone: {props.dtls.num} <br />
//             </h1>
//         </div>
//     )
// }

// export default Me










import React, { useState } from "react";

function Count(){

    const [count , setCount] = useState(0);

    const Incr = () => {
        setCount(count + 1);
    }
    const Dec = () => {
        setCount(count - 1);
    }

    return(
        <div>
        {count}
        <button onClick={Incr}>Increment</button>
        <button onClick={Dec}>Decrement</button>
        </div>
    )
}

export default Count