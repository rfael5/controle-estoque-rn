import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import Card from './small-components/Card';

const HistoricoMov = () => {
    const [isLoading, setLoading] = useState(true)
    const [historico, setHistorico] = useState([])

    useEffect(() => {
        buscarHistorico()
    }, [])

    const buscarHistorico = async () => {
        try{
            const res = await fetch("http://127.0.0.1:5000/historico")
            const json = await res.json()
            setHistorico(json)
            console.log(json)
        }catch(e){
            console.error(e)
        }finally{
            setLoading(false)
        }
    }

    return (
        <div style={styles.tableContainer}>
            <Card />
            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    
                    <DataTable.Title>Produto</DataTable.Title>
                    <DataTable.Title>Qtd Movimentada</DataTable.Title>
                    <DataTable.Title>Tipo movimentação</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title>Responsável</DataTable.Title>
                    <DataTable.Title>Motivo</DataTable.Title>
                    
                </DataTable.Header>
                <tbody>
                    {historico.map((mov:any) => (
                        <DataTable.Row style={styles.tableBody}>
                            <DataTable.Cell>{mov.descricao}</DataTable.Cell>
                            <DataTable.Cell>{mov.saldo}</DataTable.Cell>
                            <DataTable.Cell>{mov.tipoMov}</DataTable.Cell>
                            <DataTable.Cell>{mov.dataMov}</DataTable.Cell>
                            <DataTable.Cell>{mov.solicitante}</DataTable.Cell>
                            <DataTable.Cell>{mov.motivo}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </tbody>
            </DataTable>
        </div>
    )
}

export default HistoricoMov

const styles = StyleSheet.create({
    tableContainer:{
      marginBottom:50
    }, 
    container: { 
      padding:0,
      borderBlockColor:'black'
      //justifyContent:'center', 
    }, 
    tableHeader: { 
      backgroundColor: '#DCDCDC', 
    },
    tableBody: {
        backgroundColor:'white',
        height: 60
    },
    colunaSaldo: {
        paddingStart:30,
        width:5
    },
    colunaNome: {

        marginEnd: 1
    }
});