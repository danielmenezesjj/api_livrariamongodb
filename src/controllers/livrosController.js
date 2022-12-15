import livros from "../models/Livro.js";

class LivroController{
    
    static listarLivros = (req, res)=>{
        console.log('teste')
        livros.find()
        .populate('autor')
        .exec((err, livros)=>{
            res.status(200).send(livros)
        })
        
    }

    static listarLivroPorId = (req, res)=>{
        const id = req.params.id
        livros.findById(id) 
        .populate('autor', 'nome')
        .exec((err, livros) =>{
            if(!err){
                res.status(200).send(livros)
            }else{
                res.status(400).send({message: `${err.mensage} - Id do livro não localizado!`})
            }
        })
    }

    static cadastrarLivro = (req, res) =>{
        let livro = new livros (req.body);
        livro.save((err) =>{
            if(err){
                res.status(500).send({mensage: `${err.mensage} falha ao cadastrar livro! `})
            }else{
                res.status(201).send(livro.toJSON())
            }
        });
    }

    static atualizarLivro = (req, res) =>{
        const id = req.params.id
        console.log(req.body.numeroPaginas)
        livros.findByIdAndUpdate(id, {$set: req.body }, (err) =>{
        if(!err){
            console.log('if')
            res.status(200).send({mensage: 'Livro atualizado com sucesso!'})
        }else{
            res.status(500).send({mensage: err.mensage})
        }
        })
    }


    static deleteLivro = (req, res)=>{
        const id = req.params.id
        livros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({mensage: 'livro deletado com sucesso!'})
            }else{
                res.status(500).send({mensage: err.mensage})
            }

        })
    }

}

export default LivroController