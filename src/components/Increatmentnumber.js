import React ,{useState} from 'react'




export default function Increatmentnumber() {
    const state = useState();

    const [count , setCount] = useState(2);

    const IncNum = () => {

        if (count <=10) {
            // count  = 0;
            setCount(count+1 );
          }
          else{
          console.log("Number is now greater tha 11 ");
          alert("Number is now greater than 10");

        }
        // console.log("Clicked"+ count++);
    }


  return (
    <>

<div>
        <h1> {count } </h1>
        <button type="button" onClick={IncNum} className="btn btn-primary">Primary</button>

</div>
    </>
  )
}
