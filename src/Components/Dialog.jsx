import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CircleX, CircleAlert } from "lucide-react";

export default function Dialog() {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <main className=''>
    <div className='flex flex-col'>
            <motion.button
                onClick={()=>setIsOpen(true)}
                initial={{ 
                    x: 0, 
                    width: "100%" 
                }}
                animate={{
                x: isOpen ? 150 : 0,
                width: isOpen ? "40%" : "100%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className='bg-red-400 relative text-center z-10 text-white font-medium rounded-4xl px-30 py-3 my-2'
            >
                Delete
            </motion.button>
            <AnimatePresence>

                    {
                        isOpen && (
                        <motion.div
                            className="shadow-2xl rounded-xl bg-white absolute top-[210px] z-0 h-[230px] w-[400px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ ease:'easeIn', type:"spring", stiffness:300, damping: 20,  duration: 0.5 }}
                        >
                            <div className='p-4'>
                                <div className='flex flex-row justify-between'>
                                    <CircleAlert className="text-xs text-red-500"/>
                                    <CircleX onClick={()=>setIsOpen(!isOpen)} className="text-xs"/>
                                </div>
                                <div className='flex flex-col space-y-2 my-4'>
                                    <h4 className='font-semibold text-lg'>Are you sure ?</h4>
                                    <p className='text-sm'>
                                        This action cannot be undone. 
                                        Once deleted, the file will be permanently 
                                        removed from your system and cannot be recovered. 
                                        Please confirm if you wish to proceed.
                                    </p>

                                </div>
                                <button 
                                className='bg-slate-200 font-medium rounded-3xl px-9 py-3'
                                onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>

                            </div>
                        </motion.div>
                        )
                    }
        </AnimatePresence>

    </div>
   </main>
  )
}
