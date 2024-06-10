
import arrow from '../../src/assets/arrow.png'
import '../styles/GetStarted.css'



export const GetStarted=()=> {
 
    return (
        <section className='getstarted'>
         <div>
          <button>Get Started <img src={arrow} alt='arrow' className='w-16 arrow'/>
          </button> 
          
     </div>
        </section>
    )
}