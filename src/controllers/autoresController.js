import autores from "../models/Autor.js";

class AutorController{

    static listarAutores = (req, res)=>{
        autores.find((err, autores)=>{
            res.status(200).send(autores)
        })
        
    }

    static listarAutorPorId = (req, res)=>{
        const id = req.params.id
        autores.findById(id, (err, autores) =>{
            if(!err){
                res.status(200).send(autores)
            }else{
                res.status(400).send({message: `${err.mensage} - Id do Autor não localizado!`})
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores (req.body);
        autor.save((err) =>{
            if(err){
                res.status(500).send({mensage: `${err.mensage} falha ao cadastrar Autor! `})
            }else{
                res.status(201).send(autor.toJSON())
            }
        });
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body }, (err) =>{
        if(!err){
            res.status(200).send({mensage: 'Autor atualizado com sucesso!'})
        }else{
            res.status(500).send({mensage: err.mensage})
        }
        })
    }


    static deleteAutor = (req, res)=>{
        const id = req.params.id
        autores.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({mensage: 'Autor deletado com sucesso!'})
            }else{
                res.status(500).send({mensage: err.mensage})
            }

        })
    }

}

export default AutorController