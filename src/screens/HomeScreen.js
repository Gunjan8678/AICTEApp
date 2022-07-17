import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Banner from '../components/BannerCarousel/Banner';
import {COLORS, SIZES} from '../constants/styles';
const BannerData = [
  {
    title: 'Title Slide1',
    url: 'https://oistbpl.com/images/oriental-banner-07.jpg.pagespeed.ce.c5E12w5G0i.jpg',
    // url: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Title slide 2',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvHRP3GySEMXx6c8-MvvHLj58X-HmEvQZQpTIcvq09DAyEoKeQUTym0v-uGk4XNNLVxw&usqp=CAU',
    // url: 'https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Title Slide 3',
    url: 'https://i.pinimg.com/736x/15/b9/6a/15b96a08662ebabe3280a555fb867990.jpg',
    // url: 'https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: 'https://theacademicinsights.com/wp-content/uploads/2020/10/AICTE-logo.jpeg',
        }}
        style={{width: '100%', height: 80}}
      />
      <View style={styles.bannerContainer}>
        <Text style={styles.text}>AICTE affiliated colleges</Text>
        <Banner data={BannerData} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    margin: SIZES.extraLarge,
    fontSize: SIZES.large,
    fontWeight: '700',
    alignSelf: 'center',
    color: COLORS.white,
  },
  bannerContainer: {
    width: '100%',
    // height: 300,
    backgroundColor: COLORS.primary,
  },
});

// webClientId - 262331036605-brp7bfqchsrub5n5vtecnh421op7u6gn.apps.googleusercontent.com
// yourClientSecret - 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

// iosClientId - 262331036605-7t46udhkdj13i5sholujmn82lsqa8uom.apps.googleusercontent.com
