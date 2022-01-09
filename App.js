import React, { useState ,Component} from "react";
import {  Text, View , StyleSheet, FlatList, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";

const estilos=StyleSheet.create({
  upv: {
    backgroundColor: 'purple', 
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12, 
    textAlign: 'left', 
    color: 'grey',
    },
    florida: { 
      backgroundColor: 'red', 
      fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12, 
    textAlign: 'right',
    },
    impares: {
      backgroundColor:'#F8BBD0',
    },
    pares: {
      backgroundColor:'#F48FB1',
    },
});

const estilo='upv';
const isAdmin=false;
const modulos2Dam=[
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
	{ nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
	{ nombre: 'PMDM', profesor: 'Fran', horas: 100 },
	{ nombre: 'PSP', profesor: 'Fran', horas: 60 },
	{ nombre: 'SGE', profesor: 'Belén', horas: 100 },
	{ nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
	{ nombre: 'EIE', profesor: 'Manuel', horas: 60 },
];

const nombre=(nombreCompleto)=>{
  return(
    <Text style={{fontSize:20, textAlign:'left', color:'#4682b4'}}>{nombreCompleto}</Text>
  );
}


const datos=(label)=>{

  return(
     <View style={estilo === 'florida' ? estilos.florida : estilos.upv}>
       <TextInput
          label={label}
          placeholder="Nombre"
          placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
          left={<TextInput.Icon name='eye'/>}
       />
       <TextInput
          label={label}
          placeholder="Nombre"
          placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
          left={<TextInput.Icon name='eye'/>}
       />
    </View>
  );
}

const mostrarInformes=()=>{
  return(
    <View>
       <Button
        icon='format-list-bulleted'
        mode="contained"
       >
         INFORMES
       </Button>
    </View>
  )
}


class Proyecto extends Component{
  render(){
    return(
      <>
        {nombre('Alin Varzaru')}
        {datos('Introduce tus datos')}
        {isAdmin && mostrarInformes()}
        <ScrollView>
          {modulos2Dam.map((item,posicion)=>{
              return(
                <View 
                style={posicion % 2 === 0 ? estilos.pares : estilos.impares}
                key={posicion} >
               
                  <Text>{posicion + 1}</Text>
                  <Text>{item.nombre}</Text>
                  <Text>{item.profesor}</Text>
                  <Text>{item.horas}</Text>
                </View>
              );
            })}
        </ScrollView>
      </>
    );
  }
}

export default Proyecto;