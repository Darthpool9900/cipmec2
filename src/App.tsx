import Card from './components/card'
import { Title } from './components/Title'

function App() {
 

  return (
    <>
      <div className="w-full h-screen bg-gray-950 flex items-center justify-center flex-col ">
        <div className='flex items-start w-4/5'>
          <Title word="Nossos planos"/>
        </div>
      <div className='h-3/5 flex  m-10'>
        <Card title='Plano silver' sub='Perfeito para iniciantes' price={29.99} benefit={['ferramentas básicas','Projetos individuais','Suporte 24/7']}/>
        <Card title='Plano silver' sub='Perfeito para iniciantes' price={29.99} benefit={['ferramentas básicas','ferramentas avançadas','Projetos em equipes','Suporte 24/7']}/>
        <Card title='Plano silver' sub='Perfeito para iniciantes' price={29.99} benefit={['ferramentas básicas','Projetos individuais','Suporte 24/7']}/>
        </div>
        <div className='flex items-start w-4/5 gap-4'>
          <Title word="Envie seu email"/>
        </div>
      </div>
    </>
  )
}

export default App
