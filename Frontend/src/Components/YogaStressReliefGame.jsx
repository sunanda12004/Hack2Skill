import React, { useState, useEffect } from 'react';

const yogaPoses = [
  {
    name: "Child's Pose (Balasana)",
    img: "https://t3.ftcdn.net/jpg/13/82/08/02/360_F_1382080265_wx0O2rV6Fwvz6QQzgeon7SBoON3FOxxK.jpg",
    desc: "A gentle resting pose that calms the mind and relieves stress."
  },
  {
    name: "Cat-Cow Stretch",
    img: "https://media.post.rvohealth.io/wp-content/uploads/2019/07/Cat-Cow-stretch.gif",
    desc: "Flowing between Cat and Cow helps release tension in the spine."
  },
  {
    name: "Tree Pose (Vrikshasana)",
    img: "https://thumbs.dreamstime.com/b/yoga-pose-vrikshasana-girl-s-asana-beach-tree-37535302.jpg",
    desc: "Improves balance, focus, and inner calm."
  },
  {
    name: "Warrior II (Virabhadrasana II)",
    img: "https://media.gettyimages.com/id/160346273/photo/yoga-virabhadrasana-ii.jpg?s=612x612&w=0&k=20&c=GojcKOwecgDhOcYmuDGjXN_vjwG27ZDPCoLbE0uXmb0=",
    desc: "Builds strength and stability while releasing stress."
  },
  {
    name: "Wheel Pose (Chakrasana)",
    img: "https://t3.ftcdn.net/jpg/04/91/05/94/360_F_491059453_2mWg6cBDjXqcgx5EoeYHDJTuMGkjf7C5.jpg",
    desc: "An advanced backbend that energizes and strengthens the body."
  }
];


function YogaGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  const handleNextPose = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex < yogaPoses.length - 1) {
        return prevIndex + 1;
      } else {
        alert("🎉 Congratulations! You completed all yoga poses!");
        return 0; 
      }
    });
  };

  useEffect(() => {
    const advancePoseTimeout = setTimeout(handleNextPose, 120 * 1000);
    const updateDisplayInterval = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    setTimeLeft(120);

    return () => {
      clearTimeout(advancePoseTimeout);
      clearInterval(updateDisplayInterval);
    };
  }, [currentIndex]); 


  const currentPose = yogaPoses[currentIndex];


  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black font-sans text-white p-4">
      
      {/* ForGame */}
      <div className="text-center bg-white/10 p-7 rounded-2xl shadow-2xl shadow-black/50 w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-5 text-fuchsia-300">🧘 Yoga Stress Relief Game</h1>
        
        {/* Card pose details */}
        <div className="bg-black/40 rounded-xl p-5 mb-5">
          <img 
            src={currentPose.img} 
            alt={currentPose.name}
            className="w-full h-72 object-cover rounded-lg mb-4 border-2 border-white/20" 
          />
          <h2 className="text-2xl my-2.5 text-teal-300 font-semibold">{currentPose.name}</h2>
          <p className="text-gray-300 text-sm h-10">{currentPose.desc}</p>
          
          {/* Timer Display */}
          <div className="text-3xl my-4 text-yellow-400 font-mono">
            {minutes}:{seconds}
          </div>
        </div>
        
        {/* Next Pose Button */}
        <button 
          onClick={handleNextPose}
          className="py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500"
        >
          Next Pose ➡
        </button>
      </div>
    </div>
  );
}

export default YogaGame;