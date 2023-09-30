import { useRouter } from "next/router";

export default function params() {

  const router = useRouter();
  const nome = router.query.nome;
  const id = router.query.id;
 
  return (
    <div>
      <h1>Rotas Params</h1>
      {nome} / {id}
    </div>
  );
}
