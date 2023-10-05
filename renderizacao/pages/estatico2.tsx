
export function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
} //no modo de desenvolvimento, o getStaticProps é executado a cada requisição, mas no modo de produção, ele é executado apenas uma vez, no momento da build

export default function  Estatico2(props:any){

    return(
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}