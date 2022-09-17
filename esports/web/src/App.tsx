import './styles/main.css'
import logo from "./assets/Logo.svg"
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img className='max-w-[15rem]'  src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black">Seu <span className='bg bg-basic-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/img2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Teste</strong>
            <span className='text-zinc-300 text-sm'> 1 anuncio</span>
          </div>
        </a>

        <a href="" className='relative'>
          <img src="/img1.png" alt="" />
        </a>

        <a href="" className='relative'>
          <img src="/img3.png" alt="" />
        </a>

        <a href="" className='relative'>
          <img src="/img4.png" alt="" />
        </a>
        <a href="" className='relative'>
          <img src="/img5.png" alt="" />
        </a>

        <a href="" className='relative'>
          <img src="/img6.png" alt="" />
        </a>    
      </div>

      <div className='pt-1 bg-basic-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 text-sm block'>Publique um anúncio para encontrar novos players</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
