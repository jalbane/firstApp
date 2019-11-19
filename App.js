import React, {Component} from 'react'
import {Text,SafeAreaView, View, Button, StyleSheet} from 'react-native'

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

  levelTwo(){
    this.setState({block: [
                      true, false, false, false, true, 
                      false, true, true, true, false, 
                      false, true, false, true, false,
                      false, true, true, true, false, 
                      true, false, false, false, true
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
    let display = this.state.winner?<Text>You won!</Text>:<Text>Play</Text>
    const styles = StyleSheet.create({
    box:{
          backgroundColor: 'orange',
          fontSize: 40
        }
    })
    
    return (
      <SafeAreaView>
    
              <Text style = {{width: 340, textAlign: 'center', fontSize: 60 }}>{display}</Text>
                <Text style = {{marginLeft: 100, marginTop: 60}}>  
                    <Text style={styles.box} onPress = {() => this.handleButtonSwap(0)}>{Number(this.state.block[0])}{"  "}</Text>
                    <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(1)}>{Number(this.state.block[1])}{"  "}</Text>
                    <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(2)}>{Number(this.state.block[2])}{"  "}</Text>
                    <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(3)}>{Number(this.state.block[3])}{"  "}</Text>
                    <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(4)}>{Number(this.state.block[4])}{"  "}</Text>
                </Text> 
                <Text style = {{marginLeft: 100, marginTop: 20}}>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(5)}>{Number(this.state.block[5])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(6)}>{Number(this.state.block[6])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(7)}>{Number(this.state.block[7])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(8)}>{Number(this.state.block[8])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(9)}>{Number(this.state.block[9])}{"  "}</Text>
                </Text>
                <Text style = {{marginLeft: 100, marginTop: 20}}>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(10)}>{Number(this.state.block[10])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(11)}>{Number(this.state.block[11])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(12)}>{Number(this.state.block[12])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(13)}>{Number(this.state.block[13])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(14)}>{Number(this.state.block[14])}{"  "}</Text>
                </Text>
                <Text style = {{marginLeft: 100, marginTop: 20}}>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(15)}>{Number(this.state.block[15])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(16)}>{Number(this.state.block[16])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(17)}>{Number(this.state.block[17])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(18)}>{Number(this.state.block[18])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(19)}>{Number(this.state.block[19])}{"  "}</Text>
                </Text>
                <Text style = {{marginLeft: 100, marginTop: 20}}>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(20)}>{Number(this.state.block[20])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(21)}>{Number(this.state.block[21])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(22)}>{Number(this.state.block[22])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(23)}>{Number(this.state.block[23])}{"  "}</Text>
                  <Text style={{fontSize: 40}} onPress = {() => this.handleButtonSwap(24)}>{Number(this.state.block[24])}{"  "}</Text>
                </Text>{/*
                  <Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(1) }></Button>
                  <Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(2) }></Button>
                  <Text>{Number(this.state.block[3])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(3) }></Button>
                  <Text>{Number(this.state.block[4])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(4) }></Button>
                  <Text>{Number(this.state.block[5])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(5) }></Button>
                  <Text>{Number(this.state.block[6])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(6) }></Button>               
                  <Text>{Number(this.state.block[7])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(7) }></Button>              
                  <Text>{Number(this.state.block[8])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(8) }></Button>                 
                  <Text>{Number(this.state.block[9])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(9) }></Button>
                  <Text>{Number(this.state.block[10])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(10) }></Button>
                  <Text>{Number(this.state.block[11])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(11) }></Button>
                  <Text>{Number(this.state.block[12])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(12) }></Button>
                  <Text>{Number(this.state.block[13])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(13) }></Button>
                  <Text>{Number(this.state.block[14])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(14) }></Button>          
                  <Text>{Number(this.state.block[15])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(15) }></Button>
                  <Text>{Number(this.state.block[16])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(16) }></Button>
                  <Text>{Number(this.state.block[17])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(17) }></Button>
                  <Text>{Number(this.state.block[18])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(18) }></Button>
                  <Text>{Number(this.state.block[19])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(19) }></Button>             
                  <Text>{Number(this.state.block[20])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(20) }></Button>
                  <Text>{Number(this.state.block[21])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(21) }></Button>
                  <Text>{Number(this.state.block[22])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(22) }></Button>
                  <Text>{Number(this.state.block[23])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(23) }></Button>
                  <Text>{Number(this.state.block[24])}</Text><Button title = 'b'className = 'Button' onPress = { () => this.handleButtonSwap(24) }></Button> */}
              <Button style = {{color: 'black', fontSize: 40}} title ='Stuck? Reset here' onPress = { () => this.ResetGame()}>
              </Button>

              <Button style = {{color: 'black', fontSize: 40}} title ='Level 2' onPress = { () => this.levelTwo()}>
              </Button>
    </SafeAreaView>
    );
  }
}

export default App;