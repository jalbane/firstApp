import React, {Component} from 'react'
import {Text,SafeAreaView, View, Button, StyleSheet} from 'react-native'
import Leveltwo from './Leveltwo'

class App extends Component{


  constructor(){
    super()
    this.state ={
      block: [
          false, false, true, false, false, 
                  false, true, false, true, false, 
                  true, false, false, false, true,
                  false, true, false, true, false, 
                  false, false, true, false, false
                  ],
      winner: false
    }
  }

  Leveltwo(){
    this.setState({block: [
                      true, false, false, false, true, 
                      false, true, true, true, false, 
                      false, true, false, true, false,
                      false, true, true, true, false, 
                      true, false, false, false, true
                         ],
                    winner: false})

  }

  ResetGame(){
  
      this.setState({block: [
                        false, false, true, false, false, 
                        false, true, false, true, false, 
                        true, false, false, false, true,
                        false, true, false, true, false, 
                        false, false, true, false, false
                           ],
                      winner: false})
  }

  handleButtonSwap(index){
  let copy = this.state.block.slice()
  let hasNeighborTop
  let hasNeighborBottom
  let hasNeighborLeft
  let hasNeighborRight
  if (!this.state.winner){
    switch (index){
      case 0:
        hasNeighborRight = true
        hasNeighborLeft = false
        hasNeighborTop = false
        hasNeighborBottom = true
        break
      case 1:
      case 2:
      case 3:
        hasNeighborRight = true
        hasNeighborLeft = true
        hasNeighborTop = false
        hasNeighborBottom = true
        break
      case 4: 
        hasNeighborRight = false
        hasNeighborLeft = true
        hasNeighborTop = false
        hasNeighborBottom = true
        break
      case 5:
        hasNeighborRight = true
        hasNeighborLeft = false
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 6:
      case 7:
      case 8:
        hasNeighborRight = true
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 9: 
        hasNeighborRight = false
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 10:
        hasNeighborRight = true
        hasNeighborLeft = false
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 11:
      case 12:
      case 13:
        hasNeighborRight = true
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 14: 
        hasNeighborRight = false
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 15:
        hasNeighborRight = true
        hasNeighborLeft = false
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 16:
      case 17:
      case 18:
        hasNeighborRight = true
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 19: 
        hasNeighborRight = false
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = true
        break
      case 20:
        hasNeighborRight = true
        hasNeighborLeft = false
        hasNeighborTop = true
        hasNeighborBottom = false
        break
      case 21:
      case 22:
      case 23:
        hasNeighborRight = true
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = false
        break
      case 24: 
        hasNeighborRight = false
        hasNeighborLeft = true
        hasNeighborTop = true
        hasNeighborBottom = false
        break
    }

    const copy = this.state.block.slice()
      if (this.state.block[index])
        copy[index] = !this.state.block[index]
      else
        copy[index] = !this.state.block[index]

      if (hasNeighborTop){
        const neighborTop = index - 5
        copy[neighborTop] = !this.state.block[neighborTop]
      }

      if (hasNeighborBottom){
        const neighborBottom = index + 5   
        copy[neighborBottom] = !this.state.block[neighborBottom]
      }

      if (hasNeighborRight){
        const neighborRight = index + 1 
        copy[neighborRight] = !this.state.block[neighborRight]
      }

      if (hasNeighborLeft){
        const neighborLeft = index - 1
        copy[neighborLeft] = !this.state.block[neighborLeft]
      }
      
    let winCondition = copy.every( (index) => index === true  )
    this.setState({block: copy, winner: winCondition})
    }
  }

  render(){
    let display = this.state.winner?<Text>You won!</Text> :<Text>Play</Text>
    let color = this.state.block.map(x => {return x ? '#336699' : '#ff4500' })
    let placeholderText = '00'
    let levelTwoButton = this.state.winner? <Button title ='Try level 2 here' onPress = { () => this.Leveltwo()} ></Button>: null

    return (
      <SafeAreaView>
        <Text style = {{textAlign: 'center', fontSize: 60 }}>{display}</Text>
          <Text style = {{marginTop: 60, textAlign: 'center'}}>  
            <Text style={{backgroundColor: `${color[0]}`, color: `${color[0]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(0)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[1]}`, color: `${color[1]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(1)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[2]}`, color: `${color[2]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(2)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[3]}`, color: `${color[3]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(3)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[4]}`, color: `${color[4]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(4)}>{placeholderText}</Text>
            </Text> 
            <Text style = {{textAlign: 'center'}}>
              <Text style={{backgroundColor: `${color[5]}`, color: `${color[5]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(5)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[6]}`, color: `${color[6]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(6)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[7]}`, color: `${color[7]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(7)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[8]}`, color: `${color[8]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(8)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[9]}`, color: `${color[9]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(9)}>{placeholderText}</Text>
            </Text>
            <Text style = {{textAlign: 'center'}}>
              <Text style={{backgroundColor: `${color[10]}`, color: `${color[10]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(10)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[11]}`, color: `${color[11]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(11)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[12]}`, color: `${color[12]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(12)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[13]}`, color: `${color[13]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(13)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[14]}`, color: `${color[14]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(14)}>{placeholderText}</Text>
            </Text>
            <Text style = {{textAlign: 'center'}}>
              <Text style={{backgroundColor: `${color[15]}`, color: `${color[15]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(15)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[16]}`, color: `${color[16]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(16)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[17]}`, color: `${color[17]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(17)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[18]}`, color: `${color[18]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(18)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[19]}`, color: `${color[19]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(19)}>{placeholderText}</Text>
            </Text>
            <Text style = {{textAlign: 'center'}}>
              <Text style={{backgroundColor: `${color[20]}`, color: `${color[20]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(20)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[21]}`, color: `${color[21]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(21)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[22]}`, color: `${color[22]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(22)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[23]}`, color: `${color[23]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(23)}>{placeholderText}</Text>
              <Text style={{backgroundColor: `${color[24]}`, color: `${color[24]}`,fontSize: 50}} onPress = {() => this.handleButtonSwap(24)}>{placeholderText}</Text>
            </Text>
          <Button style = {{marginTop: 100}} title ='Stuck? Reset here' onPress = { () => this.ResetGame()}></Button> 
          {levelTwoButton}
      </SafeAreaView>
    );
  }
}

export default App;