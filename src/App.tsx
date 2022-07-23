import { Container } from './components/Container';
import { Content } from './components/Content'

const App = () => {
  return (
      <Container>
        <Content>
          <div id="leftSide" className="h-auto md:h-2/5 lg:h-full xl:w-3/5">
            
              <h1 className="text-3xl font-bold lg:text-4xl">Simple Way To Start <br /> Eating Healthier</h1>

              <p className="my-8 md:w-9/12 lg:w-10/12 lg:my-12 lg:text-lg">Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter or in the cupboard. Keep healthy food in easily accessible and visible places in your home and workplace. </p>

              <a href="" className="px-8 py-2 border-2 border-solid border-zinc-500 hover:text-white hover:border-white hover:transition-all hover:ease-in hover:duration-300">Learn More</a>

          </div>

          <div id="rightSide" className="pt-14 md:mt-12 md:pt-0 lg:h-full lg:mt-0 xl:flex-1">

            <img src="https://images01.nicepage.com/4c/2f/4c2f84046ac84f02a4918dba9938ea7e.jpeg" alt="" className="md:w-4/5 md:max-h-80 md:mx-auto lg:w-full lg:h-5/6"/>

            <h1 className="-mt-11 text-8xl text-white text-right sm:-mt-24 sm:text-9xl md:-mt-20 md:text-center lg:-mt-16 lg:text-left xl:text-center">Salads</h1>

          </div>
        </Content>
      </Container>
  )
}

export default App;