import React, { useState, useEffect } from 'react'; 
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const ProductsTable = () => {

    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/get-produtos')
      const json = await response.json();
      setData(json)
      console.log(json)
    }catch (error){
      console.error(error);
    }finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getProducts()
  }, [])
    return (
        <DataTable style={styles.container}>
             <DataTable.Header style={styles.tableHeader}> 
                <DataTable.Title>Produto</DataTable.Title> 
                <DataTable.Title>Saldo</DataTable.Title>
            </DataTable.Header> 
            {data.map((prod:any) => (
                <DataTable.Row style={styles.tableBody} key={prod.id}>
                    <DataTable.Cell style={styles.colunaNome}><div>{prod.descricao}</div></DataTable.Cell>
                    <DataTable.Cell style={styles.colunaSaldo}><div>{`${prod.saldo} UN`}</div></DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>
    )
}


export default ProductsTable

const styles = StyleSheet.create({ 
    container: { 
      padding:0
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