// import {useState,useRef,useEffect} from "react";
import {useState} from "react";
// import { FaMapSigns } from "react-icons/fa";
// import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
// import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
const Alumni =()=>{

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const NameChangeHandler=(e)=>{
    const value=e.target.value;
    setName(value);
    // console.log(name);
  }

  const EmailChangeHandler=(e)=>{
    const value=e.target.value;
    setEmail(value);
    // console.log(email)
  }

  const MessageChangeHandler=(e)=>{
    const value=e.target.value;
    setMessage(value);
    // console.log(message)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      alert("Submitted")
      await axios.post("http://localhost:8000/api/v1/users/register",{
        name:name,
        email:email,
        message:message
      })
    }
    catch(e){
      console.log("Error sending frontEnd data to backend using POST API : ",e)
    }
  };

  const formTab = [
    { 
      title:"Name",
      placeholder:"Enter Your name",
      type:"text",
      Name: "", 
      onChange:NameChangeHandler
    },
    { 
      title:"Email",
      placeholder:"Enter Your Email-ID",
      type:"text",
      Email: "" ,
      onChange:EmailChangeHandler
    }, 
    { 
      title:"Message",
      placeholder:"Enter Your Message",
      type:"textarea",
      Message: "" ,
      onChange:MessageChangeHandler
    }
  ];
  const contactTab = [
    {
    //   icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `KIIT University, Bhubaneswar, Odisha, India`,
      pic:""
    },
    {
      
      title: "Contact Number",
      desription: `+91 7782037428`,
    },
    {
      
      title: "Email Address",
      desription: `sahdebsaha909@gmail.com`,
    },
    {
      
      title: "Website",
      desription: <a href="/">Home</a>,
    },
  ];

  return (
    <>
      <div>
        <div className=" w-[100%] flex-col flex  mx-auto max-w-full bg-cover  bg-center bg-no-repeat ">
          <div className="flex justify-center sm:mt-[10%] md:mt-[8%] xs:mt-[20%]">
            <p className="font-Rajdhani text-5xl font-bold">Contact Me</p>
          </div>
      {/* Cards */}
        {/* <div className="container mx-auto mt-[10%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto  ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className='py-6'>
        <div className="relative container mx-auto mt-[0%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.slice(0, 3).map((x, index) => {
              return (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={x.pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{x.title}</h2>
                    <p>{x.desription}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">More details</button>
                    </div>
                </div>
              </div>
              );
            })}
          </div>
          <div className="relative container mx-auto mt-[5%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.slice(3, 5).map((x, index) => {
              return (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={x.pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{x.title}</h2>
                    <p>{x.desription}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
              </div>
              );
            })}
        </div>
      </div>
    </div>
        </div>
        <div className={` w-[100%] h-screen flex-col flex  mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg`} >
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form action="POST" className="  shadow-lg rounded-md px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
              {formTab.map((x, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">{x.title}</span>
                    </label>
                    {x.type === "textarea" ? (
                      <textarea
                      rows="10"
                      cols="50"
                      placeholder={x.placeholder}
                      className="input input-bordered w-full p-2"
                      onChange={x.onChange}
                    />
                    ):(
                      <input
                      type={x.type}
                      placeholder={x.placeholder}
                      className="input input-bordered w-full  p-2"
                      onChange={x.onChange}
                      />
                      )}
                      </div>
                    );
                  })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div> 
      </div>
    </>
  )
}

export default Alumni;