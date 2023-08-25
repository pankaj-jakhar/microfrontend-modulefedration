import dynamic from 'next/dynamic'

const CounterAppOne = dynamic(() => import('host/test2'))
const App1 = dynamic(() => import('app1/CounterAppOne'),{ssr: false})

const Test = () =>{
    return(
        <div>Test
            <CounterAppOne />
            <App1 />
        </div>
    )
}
export default Test