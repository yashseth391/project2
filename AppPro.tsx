import React from 'react' ;
import 
{   View,
    Text,
    StyleSheet,
    useColorScheme

} from 'react-native' ;

function AppPro() :JSX.Element
{
    const isdarkmode=useColorScheme()=='dark'
    const styles= StyleSheet.create(
        {
            container : {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            whiteText : {
                color: 'white',
            },
            darkText : {
                color :'blue',
            }
        }
    );
    return(
        <View style={styles.container}>
            <Text style={isdarkmode ? styles.darkText :styles.whiteText }>HELLO</Text>
        </View>
    )
}
export default AppPro