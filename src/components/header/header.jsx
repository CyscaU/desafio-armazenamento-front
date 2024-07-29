import { NavBar } from "./navBar";



export const Header = () => {
    return (
       <header className='flex relative items-center justify-between w-full bg-blue-400 h-16  '>
<div>
    <h1 className="text-black text-2xl font-bold ml-6"  >BYTE4FUTURE</h1>
</div>

<section className='flex relative gap-10 mr-8'>
    <NavBar/>
</section>
       </header>
    )
}
export default Header;