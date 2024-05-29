import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import Elevatedcard from './components/Elevatedcard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>   
        <Flatcards/>
        <Elevatedcard/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default App;
