import React, { useState, useEffect } from 'react'; 
import { StyleSheet } from 'react-native';

const AddProducts = () => {

    const [formData, setFormData] = useState({
        descricao: '',
        saldo: '',
        solicitante: '',
        motivo: ''
    })

    const moveProducts = (produto:any, _tipoMov:string) => {
        try {
          fetch('http://127.0.0.1:5000/alterar-estoque', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              descricao: produto.descricao,
              saldo: produto.saldo,
              unidade: 'UN',
              dataMov: new Date(),
              tipoMov: _tipoMov,
              solicitante: produto.solicitante,
              motivo: produto.motivo
            })
          })
        } catch(e){
            console.error(e)
        }
      }

    return (
        <div style={{backgroundColor:"white"}}>
            <form>
                <div>
                    <div style={styles.inputBox}>
                        <label>Produto: </label>
                        <input type="text" />
                    </div>
                    
                    <div style={styles.inputBox}>
                        <label>Saldo: </label>
                        <input type="text" />
                    </div>

                    <div style={styles.inputBox}>
                        <label>Responsável: </label>
                        <input type="text" />
                    </div>

                    <div style={styles.inputBox}>
                        <label>Motivo: </label>
                        <input type="text" />
                    </div>                
                    
                </div>
            </form>
        </div>
    )

}

export default AddProducts

const styles = StyleSheet.create({ 
    inputBox: {
        margin:15
    }
  });