

const Banner = () => {
    return (
        <div className="hero h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/1GDY3MS/Rectangle-4281.png'}}>
  <div className="hero-overlay bg-opacity-90 bg-white"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-2xl font-bold text-black">I Grow By Helping People In Need</h1>
      <div class="flex flex-col sm:flex-row items-center justify-center">
  <input class="input input-bordered join-item rounded-full mb-2 sm:mb-0 sm:mr-2" placeholder="Search here...." />
  <button class="btn join-item rounded-full bg-orange-600 text-white">Search</button>
</div>
    </div>
  </div>
</div>

    );
};

export default Banner;