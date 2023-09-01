// import img from "../source/images/ben.png";

import { useRef, useState } from "react";

const Contact = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)


  const [message, setMessage] = useState({
    isSuccess: false,
    message:'',
  })

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]:e.target.value})
  }

  const handleMessage = (e) => {
    e.preventDefault();
    if(inputs.name.length !== 0 && inputs.email.length !== 0 && inputs.message.length !== 0) {
      setMessage({
        isSuccess:true,
        message: 'Successfull! I am not going to receive that message tho, but thanks for your effort. <3'
      })
      setTimeout(() => {
        setMessage('')
      },6000)
      nameRef.current.value = ''
      emailRef.current.value = ''
      messageRef.current.value = ''
      setInputs({
        name:'',
        email:'',
        message:''
      })

    } else {
      setMessage({
        isSuccess: false,
        message: 'Fill all empty inputs please!'
      })
      setTimeout(() => {
        setMessage('')
      },3000)
  
    }

  }

  return (
    <div
      className="w-full font-texturina h-fit border-b border-slate-700 bg-dark-night bg-cover text-slate-50 relative"
      id="contact"
    >
      <h1 className="text-center gia:text-6xl text-4xl pt-6 sms:text-2xl uppercase sms:pt-2">
        Contact
      </h1>
      {message?.message?.length > 1 && <div className={`w-skill mmmd:w-mes-div mes absolute left-0 top-12 ml-10 text-slate-50 ll:p-2 ll:ml-4 lg:top-4 p-4 rounded-lg mmmd:text-xs font-bold tracking-wide ${message.isSuccess ? 'bg-lime-900' : 'bg-red-900'}`}><p>{message.message}</p></div>}
      <div className="w-full h-screen flex flex-row items-start justify-center mt-12 sms:mt-8">
        <form
          action=""
          className="pl-12 pr-12 w-1/2 flex sms:p-4 flex-col items-center mmd:items-start mmmd:ml-32 justify-center gap-4 font-texturina mmd:mr-36 ml-12 ssm:ml-20 sms:ml-0 ll:ml-0 ll:p-0"
        >
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="" className="uppercase gia:text-lg text-xs pb-1">
              name surname:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name and Surname"
              ref={nameRef}
              name="name"
              onChange={handleChange}
              className="p-2 w-inp gia:h-12 gia:text-2xl rounded-md text-bblack mmmd:w-inp2 xxl:w-inp3 ss:w-skill"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-xs pb-1 gia:text-lg">
              email:
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="p-2 w-inp rounded-md text-bblack gia:h-12 gia:text-2xl mmmd:w-inp2 xxl:w-inp3 ss:w-skill"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-xs pb-1 gia:text-lg">
              message:
            </label>
            <textarea
              type="text"
              id="message"
              ref={messageRef}
              name="message"
              onChange={handleChange}
              placeholder="Message"
              className="p-2 rounded-md text-bblack w-inp mmmd:w-inp2 xxl:w-inp3 gia:text-2xl ss:w-skill"
              rows={6}
            />
          </div>
            <button onClick={handleMessage} className="bg-slate-50 ssm:text-sm text-bblack pr-10 pl-10 pt-1 pb-1 hover:bg-slate-400 transition-all duration-500 active:bg-slate-50 uppercase font-bold">
              Send
            </button>
        </form>
        {/* <div className="w-1/2 flex items-center justify-center">
          <img src={img} alt="" className="h-wrapper rounded-full opacity-50"/>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
