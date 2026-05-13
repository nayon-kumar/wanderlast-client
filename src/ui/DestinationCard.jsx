import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiCalendarBold, PiMapPinLineLight } from "react-icons/pi";

const DestinationCard = ({ destination }) => {
  const { imageUrl, country, destinationName, price, duration } = destination;
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
      <Link href="/">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            className="rounded-t-xl"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-4">
            <PiMapPinLineLight size={20} />
            <span className="capitalize">{country}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-[#0C0B0B] capitalize font-medium text-2xl">
              {destinationName}
            </h3>
            <h2>
              <span className="text-[#0C0B0B] font-medium text-2xl">
                ${price}
              </span>
              <span className="text-[#6C696D]">/Person</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-2">
            <PiCalendarBold size={20} />
            <span className="capitalize">{duration}</span>
          </div>
          <div className="uppercase flex items-center text-[#15A1BF] hover:text-green-500 my-2 gap-1 ">
            <span className="border-[#15A1BF] border-b hover:border-green-500">
              Book Now
            </span>{" "}
            <MdOutlineArrowOutward size={20} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
