import Selfie from '../assets/images/SELFIE.png'; // Import your image

const AboutMe = () => {
  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='bg-white border-2 border-[#FCB97D] p-64 mb-64'>
        <h1 className='text-2xl font-bold mb-4'>About Me</h1>
        <div className='rounded-full overflow-hidden w-32 h-32 mb-4'>
          <img src={Selfie} alt='Joel' className='w-full h-full object-cover' />
        </div>
        <p className='text-[#3f00b]'>
        Greetings, I'm Joel, and I invite you to explore my React-powered portfolio! While this portfolio is still a work in progress, it serves as a testament to my initial grasp of React. I'm excited to enhance and showcase my skills with continued practice and development.  
        </p>
      </div>
    </section>
  );
}

export default AboutMe;