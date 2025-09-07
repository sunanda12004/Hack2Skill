import React from "react";

function App() {
  const services = [
    {
      title: "Councelling",
      text: "It is not weakness, it is the wisdom of choosing healing",
      img: "/councilling.png",
    },
    {
      title: "Meditation",
      text: "Transform your life with just 15 mins of daily meditation",
      img: "/brain.png",
    },
    {
      title: "Audio therapy",
      text: "Healing can be as simple as closing your eyes and listening",
      img: "/headph.png",
    },
    {
      title: "Journaling",
      text: "Each page of a journal is a step toward healing and self discovery",
    },
  ];

  return (
    <>
      {/* HeroSec */}
      <section className="relative h-auto min-h-[500px] w-full bg-purple-200 flex justify-center items-center p-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* LeftTextWithFlowers */}
          <div className="space-y-4 text-center md:text-left relative">
            {/* LeftFlower */}
            <img
              src="/flower.png"
              alt="flower"
              className="absolute -top-7 -left-[-28px] sm:-top-17 sm:-left-18 w-19 sm:w-30 animate-bounce-slow"
            />

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-purple-900 leading-tight relative z-10">
              𝕚𝕥’𝕤 𝕠𝕜𝕒𝕪 𝕥𝕠 <br /> 𝕟𝕠𝕥 𝕓𝕖 𝕠𝕜𝕒𝕪
            </h1>

            {/* RightFlower */}
            <img
              src="/flower.png"
              alt="flower"
              className="absolute -bottom-[-4px] -right-[-70px] sm:-bottom-5 sm:-right-[-100px] w-19 sm:w-30 animate-bounce-slow"
            />

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
              𝓦𝓮’𝓻𝓮 𝓱𝓮𝓻𝓮 𝓯𝓸𝓻 𝔂𝓸𝓾 𝓪𝓷𝔂𝓽𝓲𝓶𝓮, <br /> 𝓓𝓐𝓨 𝓸𝓻 𝓝𝓘𝓖𝓗𝓣
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition">
              𝓛𝓔𝓐𝓡𝓝 𝓜𝓞𝓡𝓔....
            </button>
          </div>

          {/* RightImage */}
          <div className="flex justify-center mt-6 md:mt-0">
            <img
              src="/councilling.png"
              alt="BetterYou"
              className="max-h-[300px] sm:max-h-[350px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ServicesSection */}
      <section className="h-auto w-full bg-gradient-to-br from-blue-600 to-pink-500 flex justify-center items-center text-white text-center p-8 sm:p-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            ℍ𝕖𝕒𝕝𝕥𝕙𝕔𝕒𝕣𝕖 𝕊𝕖𝕣𝕧𝕚𝕔𝕖𝕤
          </h1>
          <p className="mb-6 text-sm sm:text-base">
            𝒇𝒊𝒏𝒅 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒇𝒐𝒓 𝒚𝒐𝒖𝒓 𝒎𝒆𝒏𝒕𝒂𝒍 𝒘𝒆𝒍𝒍𝒃𝒆𝒊𝒏𝒈
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            {services.map(({ title, text, img }) => (
              <div
                key={title}
                className="bg-white/10 rounded-2xl p-5 w-[180px] sm:w-[280px] m-2 backdrop-blur-sm 
                           transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                {img && (
                  <img
                    src={img}
                    alt={title}
                    className="mb-2 mx-auto w-16 sm:w-45 object-contain"
                  />
                )}
                <h3 className="text-pink-300 font-bold mb-2">{title}</h3>
                <p className="text-xs sm:text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PrivacySection */}
      <section className="h-auto min-h-[400px] w-full bg-gradient-to-b from-blue-900 to-pink-500 flex justify-center items-center text-white text-center p-8 sm:p-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            𝕐𝕠𝕦𝕣 ℙ𝕣𝕚𝕧𝕒𝕔𝕪, 𝕆𝕦𝕣 ℙ𝕣𝕚𝕠𝕣𝕚𝕥𝕪
          </h1>
          <div className="bg-white/10 rounded-2xl p-4 w-[95%] md:w-[900px] min-h-[250px] mx-auto backdrop-blur-sm">
            <img src="/icon.png" alt="icon" className="mx-auto mb-4 w-76" />
            <h3 className="text-base sm:text-lg">
              𝒲𝑒 𝓊𝓃𝒹𝑒𝓇𝓈𝓉𝒶𝓃𝒹 𝒽𝑜𝓌 𝒾𝓂𝓅𝑜𝓇𝓉𝒶𝓃𝓉 𝓅𝓇𝒾𝓋𝒶𝒸𝓎 𝒾𝓈. 𝒯𝒽𝒶𝓉'𝓈 𝓌𝒽𝓎 𝒷𝑒𝓉𝓉𝑒𝓇𝒴𝑜𝓊 𝓅𝓇𝑜𝓋𝒾𝒹𝑒𝓈 𝓎𝑜𝓊 𝓉𝒽𝑒 𝑜𝓅𝓉𝒾𝑜𝓃 𝓉𝑜 𝓈𝓉𝒶𝓎 𝒸𝑜𝓂𝓅𝓁𝑒𝓉𝑒𝓁𝓎 𝒶𝓃𝑜𝓃𝓎𝓂ℴ𝓊𝓈
            </h3>
          </div>
        </div>
      </section>

      {/* EmptySection */}
      <section className="h-[150px] sm:h-[200px] w-full bg-gradient-to-br from-blue-900 to-pink-500"></section>

      {/* ContactSection */}
      <section className="h-auto w-full bg-purple-700 flex justify-center items-center text-white text-left font-sans py-12">
        <div className="max-w-[700px] p-6 sm:p-10">
          <h1 className="text-4xl sm:text-5xl text-center mb-6">𝕼𝖚𝖊𝖘𝖙𝖎𝖔𝖓?</h1>
          <div className="grid grid-cols-1 sm:grid-cols-[200px_auto] gap-5 items-center text-sm sm:text-base">
            <div className="font-bold text-pink-300">ℍ𝕖𝕒𝕕𝕢𝕦𝕒𝕣𝕥𝕖𝕣𝕤</div>
            <div>
              Hatiberia, Haldia, Purba Medinipur, 721657, West Bengal, India
            </div>

            <div className="font-bold text-pink-300">𝔼𝕞𝕒𝕚𝕝 𝔸𝕕𝕕𝕣𝕖𝕤𝕤</div>
            <div>betteryou@gmail.com</div>

            <div className="font-bold text-pink-300">ℙ𝕙𝕠𝕟𝕖 ℕ𝕦𝕞𝕓𝕖𝕣</div>
            <div>9768* *****</div>

            <div className="font-bold text-pink-300">𝕊𝕠𝕔𝕚𝕒𝕝 𝕄𝕖𝕕𝕚𝕒</div>
            <div>@betteryousite</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
