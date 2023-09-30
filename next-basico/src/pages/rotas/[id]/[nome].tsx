import { useRouter } from "next/router";

export default function buscarNome() {
  const router = useRouter();
  const codigo = router.query.id;
    const nome = router.query.nome;
  return (
    <div>
      <h1>Buscar</h1>
      <div>{codigo}</div>
        <div>{nome}</div>
    </div>
  );
}
