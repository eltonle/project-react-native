
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Button, SafeAreaView } from 'react-native'
import TweetContent from '../../components/TweetContent';

const TweetDetailsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {params} = route;

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: params.tweet.author.name,
        });
    },[]);

  return (
    <SafeAreaView style={{ flex:1 }}>
       {/* <Button title="Go back" onPress={()=>navigation.goBack()}/> */}
      <TweetContent tweet={params.tweet}/>
    </SafeAreaView>
  )
}

export default TweetDetailsScreen
