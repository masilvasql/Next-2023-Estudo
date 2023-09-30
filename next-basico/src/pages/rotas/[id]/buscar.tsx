import { useRouter } from "next/router";

export default function buscar() {
  const router = useRouter();
  const codigo = router.query.id;
  return (
    <div>
      <h1>Buscar</h1>
      <div>{codigo}</div>
    </div>
  );
}
