import { SafeAreaView ,StyleSheet,Text} from 'react-native';
import  React  from "react";
class Home extends React.Component{
render(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Wish List</Text>
        </SafeAreaView>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red"
    }
})
export default Home;