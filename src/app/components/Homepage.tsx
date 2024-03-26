"use client";
import Image from "next/image";
import data from "@/assets/tickets";
import { useState } from "react";
import index from "@/assets/info";

export const HomePage=()=> {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode:()=>void = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div  className={`${darkMode && "dark"} w-screen`}>
      <main className=' px-10 py-10 w-full dark:bg-[#292B32] bg-[#f1f1f1]'>
        <p className='text-2xl font-bold underline underline-offset-4  decoration-blue-500 dark:text-[#FFFFFF] '>
          Sports
        </p>

        <div className=' w-full flex flex-col items-center  justify-center justify-items-center'>
          {/*----------------------- FIRST COMPONENT START------------------------------*/}
          <div className='flex flex-col justify-center justify-items-center'>
            <div className='flex py-11 flex-wrap gap-3  justify-center justify-items-center component1'>
              <div className='  flex gap-4 justify-items-center  items-center justify-start flex-wrap'>
                {index.map((el, i) => (
                  <div
                    className=' bg-white h-[34rem] shadow-[#d7d3d3]  shadow-lg p-3 dark:bg-[#3B3E47] dark:shadow-none'
                    key={i}
                    style={{}}
                  >
                    <div className=''>
                      <Image
                        src={el.image}
                        alt=''
                        width={300}
                        height={250}
                        className=' w-[15rem] h-96 object-cover'
                      />
                    </div>
                    <h6 className='  font-medium text-xl pt-3 px-1 dark:text-[#FFFFFF]'>
                      {el.name}
                    </h6>
                    <div className='flex bg-[#F7F7F8] dark:bg-[#292B32] border-2 w-fullh-fit px-3 py-3 align-middle justify-between justify-items-center mt-4 dark:border-[#292B32]'>
                      <div className=''>
                        <p className=' text-[#525965] dark:text-[#DFDFDF]'>
                          {el.totalEvents?.label}
                        </p>
                        <p className=' font-medium dark:text-[#FFFFFF]'>
                          {el.totalEvents?.num} Events
                        </p>
                      </div>
                      <div>
                        <p className=' text-[#525965] dark:text-[#DFDFDF]'>
                          {el.sports?.label}
                        </p>
                        <p className=' font-medium dark:text-[#FFFFFF]'>
                          {el.sports?.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className=' bg-white h-[34rem] shadow-[#d7d3d3]  shadow-lg p-2 w-[16rem] dark:bg-[#3B3E47] dark:shadow-none'>
                  <div className='relative'>
                    <Image
                      src='/ad.jpg'
                      alt=''
                      width={300}
                      height={300}
                      className='mb-3 relative'
                    ></Image>
                    <p className='text-white bg-black w-fit h-fit px-3 py-1 top-0 absolute right-0'>
                      Ad
                    </p>
                  </div>
                  <div className=' py-4 px-5'>
                    <h1 className=' text-center font-semibold text-xl py-2 dark:text-[#e0e0e0]'>
                      Advertisement title
                    </h1>
                    <p className=' text-sm text-justify text-[#525965] dark:text-[#DFDFDF]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqu. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#2C9CF0] px-7 py-3 text-white w-32 h-[3rem] justify-center'>
            <p>See More</p>
          </div>
          {/*----------------------- FIRST COMPONENT END------------------------------*/}

          {/*----------------------- SECOND COMPONENT START------------------------------*/}
          <div className='  dark:bg-gradient-to-r from-[#18282A] to-[#221A2C] mt-9'>
            <h3 className='py-8 text-center h2 text-5xl collection dark:text-[#DFDFDF]'>
              Collection Spotlight
            </h3>
            <h2 className='text-center px-6 dark:text-[#DFDFDF] '>
              Discover Extraordinary moments with our Spotlight Collection
              metatickets--exclusively access to premium events for an
              unforgettable
              <br /> experience. Grab yours today!
            </h2>

            <div className='flex flex-row gap-3 justify-center justify-items-center pt-10 flex-wrap '>
              {data.map((el, i) => (
                <div
                  key={i}
                  className='parentComponent p-2 pt-4 relative flex flex-col object-contain flex-wrap dark:bg-bg2 '
                >
                  <div className=' justify-items-center'>
                    <Image
                      src={el.image}
                      width={260}
                      height={300}
                      alt=''
                      className=' w-[240px] h-[400px] object-contain '
                    ></Image>

                    <span className=' max-w-full text-2xl px-3 py-2 text-[#A9ACB2]'>
                      - - - - - - - - - - - - - - - 
                    </span>
                  </div>
                  <div className='flex flex-col gap-1 justify-center justify-items-center items-center'>
                    <p className=' text-wrap text-center font-bold text-lg dark:text-[#ffffff] dark:font-normal'>
                      {el.name}
                    </p>
                    <p className=' text-wrap text-center font-thin details text-[#323232] text-[0.96rem] dark:text-[#ffffff]'>
                      {el.details}
                    </p>
                    <p className=' text-wrap text-center text-[#525965] dark:text-[#DFDFDF]'>
                      {el.location}
                    </p>
                    <button className='bg-[black] w-fit px-8 py-2 text-white'>
                      Take Flight Collection
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className=' w-14 h-14 right-1 top-2 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black fixed'
            onClick={toggleDarkMode}
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </div>
      </main>
    </div>
  );
}
