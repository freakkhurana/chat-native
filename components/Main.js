import {
  StyleSheet,
  TextInput, // 1. <- Add this 
  View,
  TouchableOpacity, // <- Add TouchableOpacity
  View,
} from 'react-native';
...
class Main extends React.Component {
  state = { name: '' } // 2. <- Add the component state
  onChangeText = name => this.setState({ name });
  onPress = () => {
  // 1.
  this.props.navigation.navigate('Chat', { name: this.state.name });
   }
  render() {
    return (
      <View>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          value={this.state.name}
        />
         // 2. Add the title
        <Text style={styles.title}>Enter your name:</Text> 
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        // 3. Add a button
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
   title: { // 4.
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { // 5.
    marginLeft: offset,
    fontSize: offset,
  },
});