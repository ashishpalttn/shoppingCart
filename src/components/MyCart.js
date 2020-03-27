import { SafeAreaView ,StyleSheet,Text, View,Image} from 'react-native';
import  React  from "react";
class Home extends React.Component{
render(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.myCartView}>
                <Text style={styles.myCart}>My Cart</Text>
                <Text>1 Item</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{height:70,flexDirection:'row'}}  >
                <View style={styles.vanImageView}>
                    <Image style={styles.image} source={{uri:'https://img.icons8.com/small/2x/tow-truck.png'}}></Image>
                </View>
                <View style={styles.vanTextView} >
                    <Text style={{fontSize:11}}>FIRST STANDARD DELIVERY ON ORDERS ABOVE AED 250</Text>
                    <View style={styles.lineFree}></View>
                    <Text style={{fontSize:11}}>AHOP &amp; COLLECT FOR FREE ON ORDER ABOVE AED 100</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.whiteLine}></View>
            <View style={{flexDirection:"row", height:150,}}>
                <View style={styles.manImageView}>
                <Image style={styles.imageMan} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlAuLnPB3BiVEoezkKg-eDiwyeyDaPlFE-hj-mo-UWJjkiPbsT'}}></Image>
               
                </View>
                <View style={styles.tassoView}>
                    <Text style={{marginBottom:10,marginTop:5}}  >Tasso Elba</Text>
                    <Text style={{color:'black'}}>Men's Pallo Chandigan Sewater, Ether</Text>
                    <Text style={styles.aed}  >AED 52</Text>
                    <Text>QTY:  1 ▾  |  SIZE: XL ▾</Text>
                </View>
                <View style={{flex:1,backgroundColor:'red'}}>

                </View>
            </View>
           
        </SafeAreaView>
    )
}
}
/*          style={styles.}        */
const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink"
    },
    myCartView:{
        width:"100%",
        height:100,
        backgroundColor:'white',
        justifyContent:"center",
        alignItems:"center",
    },
    myCart:{
        fontSize:20,
        marginBottom:10
    },
    line:{
        width:"100%",
        height:1,
        backgroundColor:'black'
    },
    vanImageView:{
        width:'20%',
        backgroundColor:'white',
        justifyContent:"center",
        alignItems:"flex-end",
        
    },
    vanTextView:{
        width:'80%',
        backgroundColor:"white",
        justifyContent:"center",
        
    },
    image:{
     
        width:30,
        height:30,
        marginRight:10
    },
    lineFree:{
        marginLeft:20,
        marginVertical:10,
        width:'80%',
        height:.5,
        backgroundColor:'black'
    },
    whiteLine:{
        width:"100%",
        height:35,
        backgroundColor:'white'
    },
    manImageView:{
        backgroundColor:"white" ,
        width:"30%",
        // justifyContent:"center"
    },
    imageMan:{
        width:100,
        height:150,
        alignSelf:'flex-end'
    },
    tassoView:{
        backgroundColor:"white",
        width:'70%',
        paddingLeft:15
    },
    aed:{
        marginTop:30,
        fontSize:20,
        paddingBottom:20
    }
})
export default Home;