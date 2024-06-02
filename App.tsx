import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import Elevatedcard from './components/Elevatedcard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>   
        <Flatcards/>
        <Elevatedcard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default App;
