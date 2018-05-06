import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Slider
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTaxAmount, updateTaxRate } from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Input Amount: </Text>
        <TextInput
          textInput={styles.textInput}
          value={this.props.taxAmount.toString()}
          onChangeText={updatedValue => this.props.updateTaxAmount(parseFloat(updatedValue))}
        />
        <Slider
          style={styles.slider}
          minimumValue={0.05}
          maximumValue={0.40}
          value={this.props.taxRate}
          onValueChange={ updatedRate => this.props.updateTaxRate(parseFloat(updatedRate))}
        />
        <Text>Current tax rate is: {this.props.taxRate}</Text>
        <Text>Current tax is: {this.props.taxAmount * this.props.taxRate}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  textInput: {
    textAlign: 'center',
    width: 50,
    margin: 10,
  },
  button: {
    textAlign: 'center'
  },
  slider:{
    width: 200
  }
});

const mapStateToProps = state => {
  return {
    taxAmount: state.tax.amount,
    taxRate: state.tax.rate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTaxAmount: bindActionCreators(updateTaxAmount, dispatch),
    updateTaxRate: bindActionCreators(updateTaxRate, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)