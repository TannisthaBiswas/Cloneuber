import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components/dist/tailwind'
import Link from 'next/link'
import Map from './components/Map'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL
        })
      } else{
        setUser(null)
        router.push('/login')
      }
    })
  }, [])
 
return (
    <Wrapper>
      <Map />
      <ActionItems >
       {/* Header*/}
       <Header>
         <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
         <Profile>
           <Name>{user && user.name}</Name>
           <UserImage 
           src={user && user.photoUrl} onClick ={() => signOut(auth)}
           />
         </Profile>
         </Header>

       {/* ActionButtons*/}
       
       <ActionButtons>
       <Link href="/search">
         <ActionButton>
           <ActionButtonImage src="https://i.ibb.co/Xx4G91m/uberblack.png"/>
           Uber Go
         </ActionButton>
         </Link>
         <Link href="/search">
         <ActionButton>
         <ActionButtonImage src="https://i.ibb.co/YDYMKny/uberxl.png"/>
           Premier
         </ActionButton>
         </Link>
         <Link href="/search">
         <ActionButton>
         <ActionButtonImage src="https://i.ibb.co/1nStPWT/uberblacksuv.png"/>
           Schedule
         </ActionButton>
         </Link>
        




       </ActionButtons>
       
       {/* Inputbutton*/}
       <Link href="/search">
       <InputButton href='/search'>
       Where to?
       </InputButton>
       </Link>



      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-sm font-semibold 
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div`
flex
`
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
