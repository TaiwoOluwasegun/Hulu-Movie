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
   <header>
   <div>
       <HeaderItem title='HOME' Icon={HomeIcon}/>
       <HeaderItem title='TRENDING' Icon={BoltIcon}/>
       <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
       <HeaderItem title='COLLECTIONS' Icon={FolderOpenIcon}/>
       <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
       <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
   </div>
     <Image
     src='https://links.papareact.com/ua6'
     className='object-containn'
     alt='hulu logo'
     width={200}
     height={100}
     />
   </header>
  )
}

export default Header