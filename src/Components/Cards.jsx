import React, { useState } from "react";
import { Edit, Copy, Star, Share2, Trash, MoreVertical , CircleX} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Cards() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const menuItems = [
        { label: "Edit", Icon: Edit },
        { label: "Duplicate", Icon: Copy },
        { label: "Favourite", Icon: Star },
        { label: "Share", Icon: Share2 },
      ];


  return (
    <main className="relative md:items-center px-4 py-10">
      <div className=" flex items-center justify-center">

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-2xl border shadow-md"
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.99 }}
        >
          <MoreVertical className="text-gray-500" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <div className="z-10 w-full absolute flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex flex-col items-center border border-slate-400 shadow-md rounded-xl bg-white overflow-hidden"
              >
                <div className="w-full py-1.5 px-3 bg-slate-50 border-b flex flex-row justify-between">
                  <span className="text-sm text-slate-500">More Options</span>
                  <CircleX onClick={()=>setIsOpen(!isOpen)} className="text-xs"/>
                </div>
                <div className="w-full flex flex-col p-2 py-2 gap-1">
                  {menuItems.map(({ label, Icon }) => (
                    <button
                      key={Icon}
                      className={`flex items-center justify-start rounded-xl p-3 w-full hover:bg-gray-50`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="mr-4" />
                      <span className="pt-0.5">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-2 p-2 border-t overflow-hidden h-[67px] shrink-0">
                  <motion.button
                    className="flex items-center text-red-500 justify-start rounded-xl p-3 w-full hover:bg-red-50 duration-300 transition-transform"
                    style={{
                      y: isDeleteOpen ? -69 : 0,
                    }}
                    onClick={() => setIsDeleteOpen(true)}
                  >
                    <Trash className="mr-3" />
                    <span className="pt-0.5">Delete</span>
                  </motion.button>
                  <motion.div
                    className="flex items-center justify-center w-full gap-2 duration-300 transition-transform"
                    style={{
                      y: isDeleteOpen ? -58 : 0,
                    }}
                  >
                    <button className="flex items-center justify-center p-3 w-full rounded-xl bg-red-500 text-white">
                      <span className="text-xs">Yes, Delete</span>
                    </button>
                    <button
                      className="flex items-center justify-center p-3 w-full rounded-xl bg-white border border-slate-100 shadow"
                      onClick={() => setIsDeleteOpen(false)}
                    >
                      <span className="text-sm">Cancel</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="z-0 relative inline-block overflow-hidden cursor-pointer my-2"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-0 font-semibold text-sm"
          >
           So, I've added something.
          </motion.div>

          <motion.div
            animate={{ y: isHovered ? "-100%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" text-sm font-semibold"
          >
          Cards - credit by LN in on his website.
          
          </motion.div>
     </div>

    </main>
  )
}
