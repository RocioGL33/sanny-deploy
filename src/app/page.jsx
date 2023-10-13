"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "@/components/ContactForm";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverFlow, Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <>
      <div className="justify-center m-5 block md:hidden">
        <div className="flex justify-center items-center">
          <img src="./img/logo.jpg" alt="" className="w-36" />
        </div>
      </div>

      {/* NavBar */}
      <div className="navbar">
        <div className="flex-1">
          <a className="hidden md:block pl-2">
            <img src="./img/logo.jpg" alt="" className="w-36" />
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 dark:text-white">
            <li>
              <a
                href="https://spotify.link/BaXBksbaFDb"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/spotify.png" alt="" className="w-5" /> Spotify
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@sanny__sg"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/youtube.png" alt="" className="w-5" /> Youtube
              </a>
            </li>

            <li className="mr-3 text-white">
              <details>
                <summary>Redes Sociales</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a
                      href="https://instagram.com/sanny__sg?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="./img/instagram.png" alt="" className="w-4" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@sanny__sg?_t=8gGtveXp4a5&_r=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="./img/tiktok.png" alt="" className="w-5" />
                      Tiktok
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Carousel */}
      <div className="m-5">
        <Swiper
          grabCursor={true}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickeable: true,
          }}
          className="w-[80%] md:w-[20%]"
          //style={{ width: "35%" }}
        >
          <SwiperSlide>
            <img src="/utils/c_5.jpeg" alt="" className="swiper-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/utils/c_1.jpeg" alt="" className="swiper-image " />
          </SwiperSlide>
          {/*<SwiperSlide>
            <img
              src="/utils/c_2.jpeg"
              alt=""
              style={{ width: "50%", height: "50%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/utils/c_3.jpeg"
              alt=""
              style={{ width: "50%", height: "50%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/utils/c_4.jpeg"
              alt=""
              style={{ width: "50%", height: "50%" }}
            />
          </SwiperSlide>*/}

          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
      </div>

      {/* Sobre mi */}
      <div className="p-3 text-center">
        <h1 className="text-lg">
          <span className="text-primary">SANNY</span>, artista nacida en la
          ciudad de Mercedes Buenos Aires,
        </h1>
        <h1 className="text-lg">
          compositora, con solo 23 años crece junto a su música,
        </h1>
        <h1 className="text-lg"> y fiel creyente de cada una de sus letras.</h1>
      </div>

      {/* EP */}
      <div className="flex flex-col justify-center md:flex-row">
        <div className="card bg-base-100 shadow-xl m-3 self-center md:card-side mt-8">
          <figure>
            <Image src="/utils/ep.jpeg" alt="" width={380} height={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white">EP - Transcendence</h2>
            <p className="dark:text-white">Escuchalo ahora en Spotify</p>
            <div className="card-actions justify-end ">
              <a
                href="https://spotify.link/uKSYSHVELDb"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary mt-10 ">Escuchar</button>
              </a>
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="card w-96 bg-base-100 self-center md:mt-5">
          <figure>
            <Image
              src="/utils/lastrelease.jpeg"
              alt=""
              width={400}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white">
              Mi último lanzamiento
            </h2>
            <div className="card-actions justify-end">
              <a
                href="https://www.youtube.com/watch?v=EPgyNMJ3UvI"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary mt-5">Escuchar ahora</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      {/* footer */}
      <footer className="footer footer-center p-10  text-base-content rounded mt-5">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://spotify.link/BaXBksbaFDb"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/spotify.png" alt="" className="w-5" />
            </a>
            <a
              href="https://www.youtube.com/@sanny__sg"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/youtube.png" alt="" className="w-5" />
            </a>

            {/*<a
              href="mailto:solgarcia848@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/google.png" alt="" className="w-5" />
            </a>*/}

            <a
              href="https://instagram.com/sanny__sg?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/instagram.png" alt="" className="w-5" />
            </a>

            <a
              href="https://www.tiktok.com/@sanny__sg?_t=8gGtveXp4a5&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/tiktok.png" alt="" className="w-5" />
            </a>
          </div>
        </nav>
        <div className="flex">
          <img src="./img/google.png" alt="" className="w-5" />
          <aside>
            <p>solgarcia848@gmail.com</p>
          </aside>
        </div>
        <aside>
          <p>Copyright © 2023 - Created with 🖤 by RGL</p>
        </aside>
      </footer>
    </>
  );
}
