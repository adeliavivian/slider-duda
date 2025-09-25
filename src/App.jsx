import { useState } from 'react'
import './App.css'
import Burguer1 from './assets/burguer1.jpg'
import Burguer2 from './assets/batata.jpg'
import Burguer3 from './assets/refrigerante.webp'
import LogoBurguer from './assets/burguer-logo.webp'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import Slider1 from './assets/Amor na primeira mordida/1.jpg'
import Slider2 from './assets/Amor na primeira mordida/2.jpg'
import Slider3 from './assets/Amor na primeira mordida/3.jpg'
import Slider4 from './assets/Amor na primeira mordida/4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        {/* Aqui fica o SLIDER*/}
        <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
    >
      <SwiperSlide>
        <img src={Slider1} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Slider2} alt="" />
      </SwiperSlide>
        
      <SwiperSlide>
      <img src={Slider3} alt="" />
      </SwiperSlide>

      <SwiperSlide>
      <img src={Slider4} alt="" />
      </SwiperSlide>
    </Swiper>

        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Burguer1} alt="" className="img-card"/>
              <h2>Burger Artesanal</h2>
              <p className="desc">Pão, hamburguer artesanal (120g), queijo, bacon, salada e maionese especial  </p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (107)</p>
              <p className="preco">R$ 18,90</p>
              <p className="off">- 1%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Burguer2} alt="" className="img-card"/>
              <h2> Batata Média</h2>
              <p className="desc">  (150g)</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (56)</p>
              <p className="preco">R$ 16,00</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Burguer3} alt="" className="img-card"/>
              <h2>Refrigerante lata</h2>
              <p className="desc">Guárana, Coca-Cola, Pepsi e Sprite(350ml)</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (98)</p>
              <p className="preco">R$ 6,50</p>
              <p className="off">- 2%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/VsDtnTvgDB0?autoplay=1&mute=1&controls=0&loop=1&playlist=VsDtnTvgDB0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={LogoBurguer} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="instagram.com//" target="_blank">
              <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
             <div className="icon-social">
              <a href="#" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
              <div className="icon-social">
                <a href="#" target="_blank">
                  <img src={LogoWhats} alt="" className="whatsapp" />
                </a>
            </div>
          </div>

          <p className="txt-footer">
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
