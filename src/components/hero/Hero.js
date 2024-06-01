
import './Hero.css'



const Hero = () => {
  return (
    <div className='hero'>
      <div className='bio'>
       <div className='btnWel'>Welcome, I'm</div>
       <div className='name'><h1>Onkar Singh</h1></div>
       <div className='job'>Software Engineer</div>
       <div className='des'>Passionate software engineer dedicated to crafting elegant solutions to complex problems. Proficient in multiple programming languages and technologies. Committed to continuous learning and staying abreast of industry trends.</div>
      </div>
      {/* bg edit  */}
      <div className='portrait'>
        <div className='design'>
          <div className='midCircle'></div>
          <div className='outCircle'></div>
          <div className='innerCircle'></div>
          <div className='imgr'></div>
        </div>
      </div>


      <div className='socials'>FOLLOW ME ON :_______ <a href="#"><i class="lab la-instagram"></i></a> <a href="#"><i class="lab la-twitter"></i></a> <a href="#"><i class="lab la-linkedin"></i></a></div>
    </div>
  )
}

export default Hero


