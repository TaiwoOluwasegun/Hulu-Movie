import Image from 'next/image'
// import hulu from "../assets/hulu.png"
import HeaderItem from './HeaderItem'
import { FolderOpenIcon,
    CheckBadgeIcon,
HomeIcon,
BoltIcon,
MagnifyingGlassIcon,
UserIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
   <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
   <div className='flex row flex-grow justify-evenly max-w-2xl'>
       <HeaderItem title='HOME' Icon={HomeIcon}/>
       <HeaderItem title='TRENDING' Icon={BoltIcon}/>
       <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
       <HeaderItem title='COLLECTIONS' Icon={FolderOpenIcon}/>
       <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
       <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
   </div>
     <Image
     src='https://links.papareact.com/ua6'
     className='object-contain'
     alt='hulu logo'
     width={130}
     height={100}
     />
   </header>
  )
}

export default Header