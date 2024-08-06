import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

const AddProducts = ({produtoSelecionado, atualizarLista}:any) => {

  const [formData, setFormData] = useState({
    descricao: '',
    saldo: '',
    solicitante: '',
    motivo: ''
  })

  const atualizarSaldo = async (mov:number) => {
    try {
      await fetch('http://127.0.0.1:5000/atualizar-saldo', {
        method:'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:produtoSelecionado.id,
          nome:produtoSelecionado.nomeProduto,
          movimentacao:mov
        })
      })
      atualizarLista()
    } catch (e){
      console.error(e)
    }
  }

  const moveProducts = (produto: any, _tipoMov: string) => {
    try {
      fetch('http://127.0.0.1:5000/alterar-estoque', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          descricao: produtoSelecionado.nomeProduto,
          saldo: produto.saldo,
          unidade: 'UN',
          dataMov: new Date(),
          tipoMov: _tipoMov,
          solicitante: produto.solicitante,
          motivo: produto.motivo
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: any, tipoMov: string) => {
    e.preventDefault()
    moveProducts(formData, tipoMov)
    if(tipoMov == 'adicao'){
      let _saldo = Number(formData.saldo)
      atualizarSaldo(_saldo)
    }else{
      let _saldo = Number(formData.saldo) * -1
      atualizarSaldo(_saldo)
    }
    setFormData({
      descricao:'',
      saldo:'',
      solicitante:'',
      motivo:''
    })
  }

  if (produtoSelecionado) {
    return (
    <div style={styles.container}>
      <div style={{display:'flex', justifyContent:'center'}}>
        <span>{produtoSelecionado.nomeProduto}</span>
      </div>

      <form>
        <div>

          <div style={styles.inputBox}>
            <label>Saldo: </label>
            <input type="text" name="saldo" value={formData.saldo} onChange={handleChange} />
          </div>

          <div style={styles.inputBox}>
            <label>Responsável: </label>
            <input type="text" name="solicitante" value={formData.solicitante} onChange={handleChange} />
          </div>

          <div style={styles.inputBox}>
            <label>Motivo: </label>
            <input type="text" name="motivo" value={formData.motivo} onChange={handleChange} />
          </div>

        </div>

        <div>
          <button style={{backgroundColor:'#14A44D', marginRight:15, border:'none', height:'30px', borderRadius:'5px'}} onClick={(e) => handleSubmit(e, 'adicao')}>Adicionar</button>
          <button style={{backgroundColor:'red', marginRight:15, border:'none', height:'30px', borderRadius:'5px'}} onClick={(e) => handleSubmit(e, 'remocao')}>Remover</button>
        </div>
        
      </form>
    </div>)
  }


  else {return (<div></div>)}

}

export default AddProducts

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white", 
    marginTop: 35,
    borderColor:"black" 
  },
  inputBox: {
    margin: 15
  },
  btnContainer:{
    display:'flex',
    justifyContent:'center'
  },
  btnStyle:{
    marginRight:15
  }
});