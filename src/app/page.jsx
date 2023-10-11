"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* NavBar */}
      <div className="navbar">
        <div className="flex-1">
          <a className="block pl-2 ">
            <img src="./img/logo.jpg" alt="" className="w-36" />
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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

            <li>
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

      <div className="flex justify-center flex-col mt-16  md:flex-row ">
        {/* Carrousel */}
        <div className="carousel carousel-center p-4 space-x-4 bg-base-100 rounded-box md:space-x-4 md:flex">
          <div className="carousel-item">
            <Image src="/utils/c_1.jpeg" alt="" width={560} height={200} />
          </div>
          <div className="carousel-item">
            <Image src="/utils/c_2.jpeg" alt="" width={560} height={200} />
          </div>
        </div>

        {/* Sobre mi */}
      </div>
      <div className="ml-7 pt-5 text-center">
        <h1 className="text-xl">
          <span className="text-primary">SANNY</span>, artista nacida en la
          ciudad de Mercedes Buenos Aires,
        </h1>
        <h1 className="text-xl">
          compositora, con solo 23 años crece junto a su música,
        </h1>
        <h1 className="text-xl"> y fiel creyente de cada una de sus letras.</h1>
      </div>

      <div>
        <h1></h1>
      </div>

      {/* EP */}
      <div className="flex justify-center pt-5">
        <div className="card lg:card-side bg-base-100 shadow-xl w-2/5 mr-5">
          <figure>
            <Image src="/utils/ep.jpeg" alt="" width={400} height={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mi primer EP</h2>
            <p>Podés escucharlo en Spotify clickeando el botón de abajo.</p>
            <div className="card-actions justify-end">
              <a
                href="https://spotify.link/uKSYSHVELDb"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary">Escuchar</button>
              </a>
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="/utils/lastrelease.jpeg"
              alt=""
              width={400}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mi último lanzamiento</h2>
            <div className="card-actions justify-end">
              <a
                href="https://www.youtube.com/watch?v=EPgyNMJ3UvI"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary mt-12">
                  Escuchar ahora
                </button>
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
