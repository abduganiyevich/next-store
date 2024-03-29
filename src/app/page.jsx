import Image from "next/image"
import myImage from '../../public/hero.webp'
import './globals.css'
function page() {
  return (
    <div className="container">
      <div className="hero-wrapper">
      <div className="hero-left">
        <h1>
        We are changing the way people shop

        </h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p>

        <button>our products</button>
      </div>
      <div className="hero-right">
      <Image src={myImage} width={600} height={450}></Image>
      <Image src={myImage} width={600} height={450}></Image>
      <Image src={myImage} width={600} height={450}></Image>
      </div>
      </div>
    </div>
  )
}

export default page