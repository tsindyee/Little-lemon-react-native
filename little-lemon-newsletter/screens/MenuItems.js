import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  useColorScheme,
} from 'react-native';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Item = ({name, price, isDarkMode}) => (
    <View style={[menuStyles.innerContainer, {backgroundColor: isDarkMode ? '#333' : '#f9f9f9'}]}>
        <Text style={[menuStyles.itemText, {color: isDarkMode ? '#FFF' : '#333'}]}>{name}</Text>
        <Text style={[menuStyles.itemText, {color: isDarkMode ? '#F4CE14' : '#EE9972'}]}>{price}</Text>
    </View>
)

const MenuItems = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} isDarkMode={isDarkMode} />;
    
    const renderSectionHeader = ({ section: { title } }) => (
        <View style={[menuStyles.headerStyle, {backgroundColor: isDarkMode ? '#555' : '#F4CE14'}]}>
          <Text style={[menuStyles.sectionHeader, {color: isDarkMode ? '#FFF' : '#333'}]}>{title}</Text>
        </View>
      );

    return (
      <View style={[menuStyles.container, {backgroundColor: isDarkMode ? '#000' : '#FFF'}]}>
        <SectionList
          sections={menuItemsToDisplay}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  itemText: {
    fontSize: 18,
  },
  headerStyle: {
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuItems;
