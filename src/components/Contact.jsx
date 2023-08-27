// import img from "../source/images/ben.png";

const Contact = () => {
  return (
    <div className="w-full font-texturina h-screen border-b border-slate-700 bg-dark-night bg-cover text-slate-50">
        <h1 className="text-center text-4xl pt-6 sms:text-2xl uppercase sms:pt-2">Contact</h1>
      <div className="w-full h-screen flex flex-row items-start justify-center mt-12 sms:mt-8">
        <form
          action=""
          className="p-12 w-1/2 flex sms:p-4 flex-col items-start mmmd:ml-32 justify-center gap-4 font-texturina mmd:mr-36 ml-12 ssm:ml-20 sms:ml-0 ll:ml-0 ll:p-0"
        >
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="" className="uppercase text-xs pb-1">
              name surname:
            </label>
            <input
              type="text"
              placeholder="e.g Tom Bombadil"
              className="p-1 w-inp rounded-md text-bblack mmmd:w-inp2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-xs pb-1">
              email:
            </label>
            <input
              type="email"
              placeholder="e.g dberke00@gmail.com"
              className="p-1 w-inp rounded-md text-bblack mmmd:w-inp2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-xs pb-1">
              message:
            </label>
            <textarea
              type="text"
              placeholder="e.g fuck you!"
              className="p-1 rounded-md text-bblack w-inp mmmd:w-inp2"
              rows={6}
            />
          </div>
        </form>
        {/* <div className="w-1/2 flex items-center justify-center">
          <img src={img} alt="" className="h-wrapper rounded-full opacity-50"/>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
