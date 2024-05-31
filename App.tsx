import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import Elevatedcard from './components/Elevatedcard';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>   
        <Flatcards/>
        <Elevatedcard/>
        <FancyCard/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default App;
