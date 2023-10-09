//Es App.jsx, por que quiero que se comporte como jsx, que me renderice todo pa
//Exporto el componente para que main.jsx me lo reciba, pero quiero crear mi componente con nombre y todo entonces lo creo como TwitterFollowCard(){
import './main.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

//}   <> <React.Fragment>

//Evitar usar margin-top o bottom, para eso mejor lo manejo desde aca con un seccion
export function App(){
    return(
        <section className="App">
        <TwitterFollowCard 
        userName={"devk96"} 
        name={"Duvan Rodriguez"}
        />
        <TwitterFollowCard 
        userName={"pepito299"} 
        name={"Pipe Perez"}
        />

        </section>
    )
}