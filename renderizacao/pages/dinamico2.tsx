
export async function getServerSideProps() {

    const resposta = await fetch('http://localhost:3000/api/produtos')

    const produtos = await resposta.json()

    return {
        props: {
            produtos
        }
    }
}
export default function Dinamico2(props: any) {

    function renderizarProdutos() {
        return props.produtos.map((produto: any) => {
            return <li key={produto.id}>{produto.id} - {produto.nome} tem preço de R$ {produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}