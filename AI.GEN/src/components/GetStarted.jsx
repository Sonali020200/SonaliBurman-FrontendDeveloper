
import arrow from '../../src/assets/arrow.png'
import '../styles/GetStarted.css'



export const GetStarted=()=> {
 
    return (
        <section className='getstarted img-animate-down-up animation2-down-up '>
         <div>
          <button>Get Started <img src={arrow} alt='arrow' className='animate-left-right w-16 arrow'/>
          </button> 
          
     </div>
        </section>
    )
}