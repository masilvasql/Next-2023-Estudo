// SSR: Server Side Rendering

export function getServerSideProps(){
    console.log('[Server] gerando props para o componente...')
    return{
        props:{
            numero: Math.random()
        }
    }
} //executado no servidor node toda vez que a página é acessada


export default function Dinamico1(props:any){
    console.log('[Cliente] renderizando o componente...')
    return(
        <div>
            <h1>Dinâmico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}