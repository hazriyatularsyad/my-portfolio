import killua from "../assets/killua.png"

function About() {
  return (
    <section className="px-4 py-16 ">
      <div className="text-center mb-8 font-mono ">
        <h2 className="text-3xl font-bold text-with-shadow">About Me</h2>
        <p className="text-gray-600 mt-2">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-white mx-auto gap-4">
        {/* Kolom Kiri */}
        <div className="col-span-1 bg-second p-4 rounded-xl flex items-center justify-center">
          <img
            className="max-w-full h-auto rounded-lg"
            src={killua}
            alt="Killua"
          />
        </div>

        {/* Kolom Tengah */}
        <div className="col-span-1 bg-second rounded-xl p-10">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <ul className="list-disc ml-8">
            <li className="mt-4">
              <p>Name: Hazriyatul Arsyad</p>
            </li>
            <li className="mt-4">
              <p>Location: Padang, Sumatra Barat</p>
            </li>
            <li className="mt-4">
              <p>Email: example@gmail.com</p>
            </li>
            <li className="mt-4">
              <p>Phone: 0822123123</p>
            </li>
            <li className="mt-4">
              <p>Website: www.example.com</p>
            </li>
          </ul>
        </div>

        {/* Kolom Kanan */}
        <div className="col-span-1 bg-second p-10 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Additional Information</h2>
          <p>
            <span className="font-bold text-3xl text-yellow-300">Lorem</span> ipsum dolor sit, amet consectetur adipisicing
            elit. Rerum, odio? Aliquam officiis quod, dolor sapiente quibusdam
            amet ab. Quae, voluptates? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim, sunt nisi id labore quo quam a recusandae
            sequi incidunt exercitationem facere ea dolores! Eaque cupiditate
            accusantium repellat dolores tenetur, sed aliquam reprehenderit ipsa
            facere corporis atque possimus neque quos, debitis provident
            repellendus totam, temporibus ad dolorem corrupti at modi.
            Necessitatibus?
          </p>
          {/* <ul className="list-disc ml-8">
            <li className="mt-4">
              <p>City: Sumatra Barat</p>
            </li>
            <li className="mt-4">
              <p>Phone: 0822123123</p>
            </li>
            <li className="mt-4">
              <p>Website: www.example.com</p>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  )
}

export default About
