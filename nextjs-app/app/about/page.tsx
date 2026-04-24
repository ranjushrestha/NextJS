import Link from 'next/link'

const About = () => {
  return (
   <>
   <h1 className='m-20'>About Page</h1>
   <button className='border-2'><Link href="/">Home Page</Link></button>
   </>
  )
}

export default About
