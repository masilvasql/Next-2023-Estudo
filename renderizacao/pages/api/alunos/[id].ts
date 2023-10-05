
export default function handler(req:any, res:any){
    const id = +req.query.id;
    res.status(200).json({
        id:id,
        nome: `João ${id}`,
        email: `jjjjaaallll@gmail.com`,
    })
} 