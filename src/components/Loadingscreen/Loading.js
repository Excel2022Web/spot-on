import React from 'react'
import { motion } from 'framer-motion';
import centreimg from '../../assets/centerimg.svg'

const Loading = () => {
  return (
    <motion.div
    animate={{ opacity: 0, y: -200 }}
    transition={{duration:1,delay:3}}
     className='bg-black h-[100vh] flex flex-col items-center justify-center'>
        <motion.img 
        className='w-[200px] h-[200px]  '
        animate={{rotateY:180}}
        transition={{duration:2,repeat:Infinity}}
        src={centreimg} alt="loading" />
        <motion.div className='w-[100px] h-[20px] outline-1 text-3xl text-white'>
            Loading...

        </motion.div>

    </motion.div>
  )
}

export default Loading