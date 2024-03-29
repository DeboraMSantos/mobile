import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';



function TeacherItem() {
  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/debora/debfinanceiro.jpeg')}
        />

        <View style={styles.profileInfo} >
          <Text style={styles.name}>Débora Money</Text>
          <Text style={styles.subject}>Gestão Financeira</Text>
        </View>        
      </View>

      <Text style={styles.bio}>  
        Matemática Financeira.{'\n'} 
        Juros simples e compostos. {'\n'}
        Aulas práticas e dinâmicas.
      </Text>

      <View style={styles.footer}>

        <Text style={styles.price}>
          Preço/hora: {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}/> */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsAppIcon}/>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>

        </View>

      </View>

    </View>
  );
}

export default TeacherItem;
