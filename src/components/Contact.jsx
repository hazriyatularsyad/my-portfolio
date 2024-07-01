import link from "../assets/ink.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import linkind from "../assets/inkedin.png"
import phone from "../assets/phone.png"
import email from "../assets/email.png"

function Contact() {
  return (
    <div className="contact">
      <h3 className="mx-auto justify-center text-center font-bold text-with-shadow text-gray-600 text-3xl mt-10">
        Contact Me
      </h3>
      <p className="mx-auto justify-center text-center mt-3 font-mono">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, harum?
      </p>

      <div className="container grid grid-cols-2 mx-auto w-full gap-3 mt-4">
        <form className=" mx-auto p-4 pt-6 mb-4 border border-slate-700 rounded shadow-lg mt-7 w-full">
          <div className="grid grid-cols-1 ">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your Name"
              className="w-full p-2 pl-2 text-sm text-gray-700 border border-gray-500 rounded"
            />
            <br />

            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 pl-2 text-sm text-gray-700 border border-gray-500 rounded"
            />
            <div className="form-group mt-4">
              <textarea
                className="w-full p-2 border border-gray-500 rounded"
                name="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <br />
            <br />
            <input
              type="submit"
              value="Send"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
          </div>
        </form>
        <div className="grid grid-rows-2 ">
          <div className="justify-center items-center mx-auto text-center w-full border border-gray-700 shadow-2xl rounded-md mt-6 ">
            <h3 className="font-serif font-semibold p-7"> Social Media</h3>
            <div className="justify-center items-center mx-auto text-center">
              <img className="mx-auto w-10" src={link} alt="" />
            </div>
            <div className="mx-auto justify-center items-center inline-flex gap-6 mt-3">
              <a href=" https://www.instagram.com/?hl=id" target="_blank">
                <img
                  src={instagram}
                  alt=""
                  className="hover:bg-slate-400 rounded-lg"
                />
              </a>
              <a href=" https://x.com/i/flow/login" target="_blank">
                <img
                  src={twitter}
                  alt=""
                  className="hover:bg-slate-400 rounded-lg"
                />
              </a>
              <a href=" https://www.linkedin.com/login" target="_blank">
                <img
                  src={linkind}
                  alt=""
                  className="hover:bg-slate-400 rounded-lg"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-700 shadow-2xl mb-3 mt-3 rounded-md">
              <div className="mx-auto justify-center items-center text-center py-11">
                <img className="mx-auto" src={phone} alt="" />
                <h3 className="mt-3 font-serif font-medium  ">Call Me</h3>
                <p>+62822-8850-1234</p>
              </div>
            </div>
            <div className="border border-gray-700 shadow-2xl mb-3 mt-3 rounded-md">
              <div className="mx-auto justify-center items-center text-center py-11">
                <img className="mx-auto" src={email} alt="" />
                <h3 className="mt-3 font-serif font-medium  ">Call Me</h3>
                <p>+62822-8850-1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
