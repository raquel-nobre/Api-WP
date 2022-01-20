
import React,{ Component } from 'react';
import { StyleSheet,Text, View, Platform, FlatList } from 'react-native';


export default class App extends Component {
  //an empty array
  state={
    data:[]
  }

  fetchData= async() =>{

    // response
    const response = await 
    fetch('https://obrasilianista.com.br/wp-json/wp/v2/posts')

    //posts
    const posts = await response.json();

    this.setState({data:posts});
  }

  componentDidMount(){
    // page load
    this.fetchData();

  }

  render() {
 return(
   <View style={styles.container}>
     <Text>O Brasilianista</Text>

     <FlatList
      data={this.state.data}
      keyExtractor={(x,i) =>i}
      renderItem={({item}) =>
      <View style={{marginTop:10,padding:10, 
            borderWidth:1,borderColor:'red'}}>
      <Text
      style={{fontSize:18,fontWeight:'bold'}}>{item.title.rendered}</Text>
      <Text>{item.content.rendered}</Text>
      </View>  

      }
     />
   </View>

 );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },

});


