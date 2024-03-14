import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between p-4 mx-4 items-center border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;