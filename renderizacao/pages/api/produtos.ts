function numeroAleatorio(min:number = 1, max:number = 1000000) {
    return parseInt((Math.random() * (max - min) + min).toFixed(0));
}

export default function handler(req:any, res:any){
    res.status(200).json(
        [
            {
                id: numeroAleatorio(),
                nome: "Caneta",
                preco: 5.60
            },
            {
                id: numeroAleatorio(),	
                nome: "Caderno",
                preco: 15.60
            },
            {
                id: numeroAleatorio(),	
                nome: "Borracha",
                preco: 7.60
            },
            {
                id: numeroAleatorio(),	
                nome: "Lápis",
                preco: 2.60
            }
        ]
    )
} 