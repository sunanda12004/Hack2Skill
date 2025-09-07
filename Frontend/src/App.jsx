import React from 'react';

function App() {
  return (
    <>
      {   }
      <div className="h-[500px] w-full bg-purple-200 flex justify-center items-center m-1">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">BetterYou</h1>
          <div className="grid grid-cols-[200px_auto] gap-5 items-center">
            <div className="text-xl font-semibold">It's okay to <br /> not be okay</div>
            <div className="text-lg">We're here for you anytime <br /> DAY or NIGHT</div>
            <div><button className="bg-pink-500 text-white px-4 py-2 rounded">LEARN MORE</button></div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="h-[400px] w-full bg-gradient-to-br from-blue-900 to-pink-500 flex justify-center items-center text-white text-center p-12 m-1 font-sans">
        <div>
          <h1 className="text-4xl font-bold mb-2">Healthcare services</h1>
          <p className="mb-6">Find the best support for your mental wellbeing</p>
          <div className="flex gap-5 justify-center flex-wrap">
            {[
              { title: 'Councelling', text: 'It is not weakness, it is the wisdom of choosing healing', img: '/public/councilling.png' },
              { title: 'Meditation', text: 'Transform your life with just 15 mins of daily meditation', img: '/public/brain.png' },
              { title: 'Audio therapy', text: 'Healing can be as simple as closing your eyes and listening', img: '/public/headph.png' },
              { title: 'Journaling', text: 'Each page of a journal is a step toward healing and self discovery' },
            ].map(({ title, text, img }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-5 w-[200px] m-2">
                {img && <img src={img} alt={title} className="mb-2 mx-auto" />}
                <h3 className="text-pink-300 font-bold mb-2">{title}</h3>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy  */}
      <div className="h-[400px] w-full bg-gradient-to-b from-blue-900 to-pink-500 flex justify-center items-center text-white text-center p-12 font-sans">
        <div>
          <h1 className="text-4xl font-bold mb-4">Your Privacy, Our Priority</h1>
          <div className="bg-white/10 rounded-2xl p-4 w-[900px] h-[250px] mx-auto">
            <img src="/public/icon.png" alt="icon" className="mx-auto mb-4" />
            <h3 className="text-lg">
              We understand how important privacy is. That's why BetterYou provides you the option to stay completely anonymous
            </h3>
          </div>
        </div>
      </div>

      {/* Empty */}
      <div className="h-[400px] w-full bg-gradient-to-br from-blue-900 to-pink-500 flex justify-center items-center text-white text-center p-12 font-sans m-1">
        <div></div>
      </div>

      {/* Content */}
      <div className="h-[400px] w-full bg-purple-700 flex justify-center items-center text-white text-left font-sans">
        <div className="max-w-[700px] p-10">
          <h1 className="text-5xl text-center mb-6">Question?</h1>
          <div className="grid grid-cols-[200px_auto] gap-5 items-center">
            <div className="font-bold text-pink-300">Headquarters</div>
            <div>Hatiberia, Haldia, Purba Medinipur, 721657, West Bengal, India</div>

            <div className="font-bold text-pink-300">Email Address</div>
            <div>betteryou@gmail.com</div>

            <div className="font-bold text-pink-300">Phone Number</div>
            <div>9768* *****</div>

            <div className="font-bold text-pink-300">Social Media</div>
            <div>@betteryousite</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;