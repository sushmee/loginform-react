import React, {useState} from "react";
const App = () => {
    const [fullName, setFullName]=useState(
        {
            fname: "" ,
            lname:  "",
            email: "",
            phone: "",
        }
    );

   const inputEvent= (event)=>
   {

console.log(event.target.value);
console.log(event.target.name);

const {name, value}=event.target;
setFullName((prevalue)=>
{
    console.log(prevalue);
    return{
        ...prevalue,
        [name]:value,
    }
})
};
const onSubmits = (event) =>{
    event.preventDefault ();
    alert ("form submitted");
};
return(
    <>
   <div className="main_div">
       <form onSubmit={onSubmits}>
           <div>
       <h1> Hello {fullName.fname}{fullName.lname}</h1>
       <p> {fullName.email}</p>
       <p> {fullName.phone}</p>

       <input type ="text"
       placeholder ="Enter your name"
       name="fname"
      onChange={inputEvent}
      value={fullName.fname}
      />
      <br/>
      <input type ="text"
       placeholder ="Enter your lastname"
       name="lname"
      onChange={inputEvent}
      value={fullName.lname}
      />
      <input type ="email"
       placeholder ="Enter your email"
       name="email"
      onChange={inputEvent}
      value={fullName.email}
      />
      <input type ="number"
       placeholder ="Enter your phone number"
       name="phone"
      onChange={inputEvent}
      value={fullName.phone}
      />
       < button type="Submit"> Submit Me </button>
       </div> 
     </form>
     </div>
    </>
);
};
export default App;
