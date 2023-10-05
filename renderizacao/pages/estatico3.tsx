
export function getStaticProps() {
    return {
        revalidate: 7, //em segundos - a cada 7 segundos, a página será revalidada e o conteúdo será atualizado
        props: {
            numero: Math.random()
        }
    }
}
export default function Estatico3(props: any) {

    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}