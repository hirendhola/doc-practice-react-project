import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function trimString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.substring(0, maxLength) + "...";
  }
}

function Card({ data, reference }) {
  const trimmedDesc = trimString(data.desc, 70);

  return (
    <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900 rounded-[1.7rem] text-white py-10 px-6 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-snug">{trimmedDesc}</p>
      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="flex item-center justify-between py-4 px-10 ">
          <h5>{data.filesize}</h5>
          <section className="bg-zinc-600 flex items-center justify-center w-6 h-6 rounded-full self-center ">
            {data.close ? (
              <IoClose
                className="cursor-pointer self-center text-base"
                color="#eee"
              />
            ) : (
              <MdOutlineFileDownload
                className="cursor-pointer self-center text-base"
                color="#eee"
              />
            )}
          </section>
        </div>
        {data.tag.isopen ? (
          <div className={`tag w-full bg-[${data.tag.tagColor}] flex justify-center items-center py-2`}>
            <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
