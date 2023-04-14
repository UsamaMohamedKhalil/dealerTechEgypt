import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/1project.png';
import project2 from '../../public/images/projects/2project.png';
import project3 from '../../public/images/projects/3project.png';
import project4 from '../../public/images/projects/4project.png';
import Image from 'next/image'

const FeaturedProject = ({type , title , summary , img , link , github}) =>
   {
      return (
         <article 
         className='w-full flex items-center justify-between 
         rounded-3xl relative rounded-br-2xl
         border border-solid border-dark bg-light shadow-2xl p-12 
         dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
         <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
         rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
               <Image src={img} alt={title} className='w-full h-auto' priority
                sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw'/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
               <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                  {type}
               </span>
               <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                  <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
               </Link>
               <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
               <div className='mt-2 flex items-center'>
                  <Link href={github} className='w-10'>
                     <GithubIcon />
                  </Link>
                  <Link href={link}
                  className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                  dark:bg-light dark:text-dark
                  sm:px-4 sm:text-base'>
                     Visit Project
                  </Link>
               </div>
               </div>
         </article>
      )
   }


const Project = ({title,type,img,link,github}) =>{

   return(
      <article className='w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
       <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
         rounded-br-3xl dark:bg-light'/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
               <Image src={img} alt={title} className='w-full h-auto' priority
               sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
               <span className='text-primary font-medium text-xl dark:text-primaryDark'>
                  {type}
               </span>
               <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                  <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
               </Link>
               <div className='w-full mt-2 flex items-center justify-between'>
               <Link href={link}
                  className='text-lg font-semibold underline
                  '>
                     Visit
                  </Link>
                  <Link href={github} className='w-8'>
                     <GithubIcon />{" "}
                  </Link>
               </div>
               </div>
      </article>
   )
}

const projects = () => {
  return (
    <>
      <Head>
         <title>DealerTech | Projects Page</title>
         <meta name='description' content='projects page'/>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
         <Layout className='pt-16'>
            <AnimatedText text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
               <div className='col-span-12'>
                  <FeaturedProject 
                  title='ELMATBKH | FOOD'
                  img={project1}
                  summary='Web application enable user to order from menu and pay in multi ways
                  and enable the owner to manage the data and see all orders also can change in status of an order 
                  to send new status order to the client and more.....'
                  link='https://matb5h.vercel.app/login'
                  github='https://github.com/UsamaMohamedKhalil/matbkhaklat'/>
               </div>
               <div className='col-span-6 sm:col-span-12'>
               <Project 
                  title='weather App'
                  img={project2}
                  summary='Web application enable user to enter city and view all weather status of current day and full weak .
                  Use fast APIs and specail UI for you.....'
                  link='https://weather-app-v1-lemon.vercel.app/'
                  github='https://github.com/UsamaMohamedKhalil/Weather-App-V1'/>
               </div>
               <div className='col-span-6 sm:col-span-12'>
               <Project 
                  title='To Do App'
                  img={project3}
                  summary='Web application enable user to enter tasks and also edit it view more..'
                  link='https://to-do-app-v1-rho.vercel.app/'
                  github='https://github.com/UsamaMohamedKhalil/To-Do-App-v1'/>
               </div>
               <div className='col-span-12'>
               <FeaturedProject 
                  title='NIKE STORE WEB APP'
                  img={project4}
                  summary='Web application enable user to view all products with modern web design 
                  use React JS and TailWindCSS and Redux store'
                  link='https://nike-store-usama.vercel.app/'
                  github='https://github.com/UsamaMohamedKhalil/nike-store-usama'/>
               </div>
           {/*     <div className='col-span-6'>
                  Project-3
               </div>
               <div className='col-span-6'>
                  Project-4
               </div> */}
            </div>
         </Layout>
      </main>
    </>
  )
}

export default projects
