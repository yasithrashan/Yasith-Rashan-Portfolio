const Hero = () => {
    return (
      <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">

                    <img
                    src="https://images.unsplash.com/photo-1654375408506-d46c2b43308f?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero Image"
                    className="border border-stone-900 rounded-3xl"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start mt-10">
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl"></h2>
                    <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight
                    text-transparent" > Software Engineer and Full Stack Developer</span>

                    <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">

                        
                        I’m Yasith Rashan, a computer science student at the University of Westminster, specializing in full-stack web development. I am passionate about creating innovative web solutions using modern technologies. I have experience with frameworks such as React, Node.js, and Spring Boot, and am skilled in both front-end and back-end development.

My goal is to leverage my technical expertise to build impactful applications that solve real-world problems. I’m always eager to learn, embrace new challenges, and collaborate with professionals in the tech industry to further refine my skills.
                         
                    </p>
                    <a href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                            Download CV
                            </a>
                </div>
            
            </div>
        </div>
    </div>
    );
  };
  
  export default Hero;
  