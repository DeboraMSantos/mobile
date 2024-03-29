import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
// import { Picker } from '@react-native-community/picker';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { Feather } from '@expo/vector-icons';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  function handleToggleFiltersVisible(){
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color={  '#FFF' } />
            {/* {isFiltersVisible && <Text style={styles.label}>Ocultar</Text>}
            {!isFiltersVisible && <Text style={styles.label}>Mostrar</Text>} */}
          </BorderlessButton>
        )}>

        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
            <Feather style={styles.submitButtonFeather} name="filter" size={20} color={  '#FFF' } />
            <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
