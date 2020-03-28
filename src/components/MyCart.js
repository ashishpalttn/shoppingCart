import { SafeAreaView ,StyleSheet,Text, View,Image, TouchableOpacity} from 'react-native';
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
                    <Text>QTY:  1 ▾  |  SIZE:  XL ▾</Text>
                </View>
                
            </View>
            <View style={styles.saveParentView}>
                <View style={styles.saveView}>
                   <TouchableOpacity>
                       <Text style={styles.saveFor}>SAVE FOR LATER</Text>
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <Text style={{color:'red'}}>Remove</Text>
                   </TouchableOpacity>
                </View>
                 <TouchableOpacity>
                    <View style={styles.signView}>
                        <Text style={{fontWeight:'bold'}}>Sign In</Text>
                        <Text> to earn loyalty points.</Text>
                    </View>
                 </TouchableOpacity>   
                <View style={[styles.line,{backgroundColor:'#808080'}]}></View>
                <View style={styles.shippingView}>
                    <View style={styles.freeShippingView}>
                        <View style={styles.cycleImage}>
                            <Image style={{width:30,height:30}} source={{uri:'https://img.icons8.com/android/2x/box.png'}}>
                            </Image>
                        </View>
                        <Text style={{fontWeight:'bold'}}>FREE SHIPPING</Text>
                        <Text>on all orders above</Text>
                        <Text>AED 250</Text>
                    </View>
                    <View style={styles.freeShippingView}>
                        <View style={[styles.cycleImage,{justifyContent:'center'}]}>
                            <Image style={{width:30,height:30}} source={{uri:"https://img.icons8.com/dotty/2x/shopping-bag.png"}}>
                            </Image>
                        </View>
                        <Text style={{fontWeight:'bold'}}>SHOP &amp; COLLECT</Text>
                        <Text>FREE Collect On all</Text>
                        <Text>order above AED 100</Text>
                    </View>
                    <View style={styles.freeShippingView}>
                        <View style={[styles.cycleImage,{justifyContent:'center'}]}>
                            <Image style={{width:30,height:30}} source={{uri:'https://img.icons8.com/windows/2x/cash-in-hand.png'}}>
                            </Image>
                        </View>
                        <Text style={{fontWeight:'bold'}}>CASH ON DELIVERY</Text>
                        <Text>find your easiest way</Text>
                        <Text>make payment</Text>
                    </View>
                </View>
                <View style={[styles.line,{backgroundColor:'#bababa'}]}></View>
                <View  style={styles.deliveryView} >
                    <Text>Delivery</Text>
                </View>
                <View style={styles.totalParentView}>
                    <View style={styles.totalView}>
                        <Text>Total :</Text>
                        <Text style={{fontWeight:'bold'}}> AED 65</Text>
                        <Text> Incl. of VAT</Text>
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text>(included delivery charges)</Text>
                    </View>
                    
                </View>
                <View style={styles.checkoutParantView}>
                    <TouchableOpacity>
                        <Text style={styles.checkout}>CHECKOUT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.apply}>APPLY PAY</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.whiteLine}></View>
            </View>
         
           
        </SafeAreaView>
    )
}
}
/*          style={styles.}        */
const styles=StyleSheet.create({
    checkout:{
        backgroundColor:'#e0c143',
        paddingVertical:19,
        paddingHorizontal:50,
        marginLeft:15,
        fontWeight:'bold'
    },
    apply:{
        backgroundColor:'black',
        paddingVertical:19,
        paddingHorizontal:50,
        marginRight:15,
        fontWeight:'bold',
        color:"white"
    },
    checkoutParantView:{
        height:55,
        backgroundColor:'white',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        // paddingBottom:10
    },
    totalView:{
        width:'50%',
        flexDirection:'row',
      
        paddingLeft:15     
    },
    totalParentView:{
        backgroundColor:'white',
        height:40,
        flexDirection:'row',
        alignItems:'center' ,
       
    },
    deliveryView:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        marginTop:15,
        justifyContent:"center",
        paddingLeft:25,
        borderTopWidth:1,
        borderTopColor:"#bababa",
        borderBottomWidth:1,
        borderBottomColor:"#bababa",

        // alignItems:'center'
    },
    cycleImage:{
        borderRadius:20,
        borderWidth:1,
        width:40,
        height:40,
        marginBottom:10,
        alignItems:'center'
    },
    freeShippingView:{
        width:'33.33%',
        backgroundColor:'#edeff2',
        alignItems:'center',
        justifyContent:"center"

    },
    shippingView:{
        width:"100%",
        height:150,
        backgroundColor:'green',
        flexDirection:'row'
    },
    signView:{
        width:"100%",
        height:50,
        backgroundColor:'#fcefbb',
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center'
    },
    saveFor:{
        borderWidth:1,
        marginHorizontal:20,
        paddingVertical:12,
        paddingHorizontal:25
    },
    saveView:{
        width:"100%",
        height:60,
        backgroundColor:'white',
        marginTop:2,
        flexDirection:"row",
        alignItems:'center'
    },
    saveParentView:{flex:1,
        backgroundColor:'#edeff2',
         width:"100%"
        },
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    myCartView:{
        width:"100%",
        height:80,
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
        height:10,
        backgroundColor:'white'
    },
    manImageView:{
        backgroundColor:"white" ,
        width:"30%",
        // justifyContent:"center"
    },
    imageMan:{
        width:100,
        height:140,
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