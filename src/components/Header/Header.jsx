import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between md:flex max-w-7xl mx-auto p-5 items-center border-b-4'>
      <h1 className="text-3xl ">Vite + React</h1>

      <img src={profile} alt="" />
    </div>
  )
};

export default Header;
