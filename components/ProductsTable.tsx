import React, { useState, useEffect } from 'react'; 
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import AddProducts from './AddProducts';

const ProductsTable = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

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

  const selectProduct = (product:any) => {
    console.log(product)
    setSelectedProduct(product)
  }

    return (
      <div style={styles.tableContainer}>
          <DataTable style={styles.container}>
             <DataTable.Header style={styles.tableHeader}> 
                <DataTable.Title>Produto</DataTable.Title> 
                <DataTable.Title>Saldo</DataTable.Title>
            </DataTable.Header> 
            {data.map((prod:any) => (
                <DataTable.Row style={styles.tableBody} key={prod.id}>
                    <DataTable.Cell style={styles.colunaNome}><div>{prod.nomeProduto}</div></DataTable.Cell>
                    <DataTable.Cell style={styles.colunaSaldo}><div>{`${prod.saldoTotal} UN`}</div></DataTable.Cell>
                    <DataTable.Cell><button onClick={() => selectProduct(prod)}>Alterar Saldo</button></DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>

        <div>
            <AddProducts 
              produtoSelecionado={selectedProduct}
              atualizarLista={getProducts}>
            </AddProducts>          
        </div>

      </div>
        
    )
}


export default ProductsTable

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