export function getStaticPaths(){
    return{
        paths:[
            {params:{id:'1'}},
            {params:{id:'2'}},
            {params:{id:'3'}},
        ],
        fallback:'blocking' 
        //fallback: false -> retorna 404 se a pagina não foi gerada de forma estatica
        //fallback: true -> se a pagina não foi gerada de forma estatica, ele gera a pagina no momento do acesso
        //fallback: blocking -> se a pagina não foi gerada de forma estatica, ele gera a pagina no servidor node, ou seja, ele gera a pagina no momento do acesso, mas gera no servidor node, e não no client
        
    }
}//este metodo é usado para gerar as rotas estaticas, ou seja, as rotas que não são geradas no momento da build, mas sim no momento em que o usuario acessa a pagina, o fallback: blocking faz com que a pagina só seja carregada quando os dados estiverem prontos, ou seja, quando o getStaticProps for executado

export async function getStaticProps(context:any){
    const dadosAluno = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await dadosAluno.json()
    return{
        props:{
            aluno
        }
    }
}


export default function AlunoPorId(props:any){
    return(
        <div>
            <h1>Detalhes do aluno</h1>
            <ul>
                <li>{props.aluno.id}</li>
                <li>{props.aluno.nome}</li>
                <li>{props.aluno.email}</li>
            </ul>
        </div>
    )
}