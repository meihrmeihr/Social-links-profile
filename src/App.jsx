import avatar from "./assets/images/avatar-jessica.jpeg";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <main className='min-h-screen min-w-screen flex flex-col justify-center gap-y-10 items-center px-2 font-inter text-white bg-[#141414]'>
      {/* container */}
      <section className='bg-[#1f1f1f] w-full max-w-88 rounded-md p-4'>
        {/* image , name and loacation are here */}
        <div className='flex flex-col justify-center items-center mb-6'>
          <img
            src={avatar}
            className='w-24 h-24 rounded-full mb-6'
            alt='face of a woman'
          />
          <h1 className='font-semibold text-2xl tracking-wide pb-2'>
            Jessica Randall
          </h1>
          <p className='text-[#c5f82a] text-[14px] font-semibold'>
            London, United Kingdom
          </p>
        </div>
        {/* links are here */}
        <div className='flex flex-col justify-center items-center gap-y-3 text-center'>
          <p>"Front-end developer and avid reader."</p>
          <Link
            to={`https://github.com/`}
            target='blank'
            className='bg-[#333333] w-full h-10 rounded-sm p-2 transition-colors duration-100 hover:bg-[#298711]'
          >
            GitHub
          </Link>
          <Link
            to={`https://www.frontendmentor.io/`}
            target='blank'
            className='bg-[#333333] w-full h-10 rounded-sm p-2 transition-colors duration-100 hover:bg-[#298711]'
          >
            Frontend Mentor
          </Link>
          <Link
            to={`https://www.linkedin.com`}
            target='blank'
            className='bg-[#333333] w-full h-10 rounded-sm p-2 transition-colors duration-100 hover:bg-[#298711]'
          >
            LinkedIn
          </Link>
          <Link
            to={`https://x.com`}
            target='blank'
            className='bg-[#333333] w-full h-10 rounded-sm p-2 transition-colors duration-100 hover:bg-[#298711]'
          >
            Twitter
          </Link>
          <Link
            to={`https://www.instagram.com`}
            target='blank'
            className='bg-[#333333] w-full h-10 rounded-sm p-2 transition-colors duration-100 hover:bg-[#298711]'
          >
            Instagram
          </Link>
        </div>
      </section>
      <footer className='text-[0.6875rem] text-center'>
        Challenge by{" "}
        <Link
          to='https://www.frontendmentor.io?ref=challenge'
          className='text-[#3e52a3]'
        >
          Frontend Mentor
        </Link>
        .{" "} Coded by{" "}
        <Link to='https://github.com/meihrmeihr' className='text-[#3e52a3]'>
          Mahir
        </Link>
        .
      </footer>
    </main>
  );
};

export default App;
