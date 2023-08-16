import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import KnappComp from './KnappComp';


const ListaComp = () => {
  const [todos, setTodos] = useState([
    {id: 1, task: 'task1', isDone: false, isEditable: false},
    {id: 2, task: 'task2', isDone: false, isEditable: false},
    {id: 3, task: 'task3', isDone: false, isEditable: false},
  ]) 



  return (
    <View style={styles.list}>
         <FlatList  
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({item}) => ( 
                                 
                  <KnappComp  item={item} />
               
                )}
            />
    </View>
  )
}

export default ListaComp

const styles = StyleSheet.create({
    list: {
      flex: 1,
      backgroundColor: '#fdeca6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
