import React, { Component /* ,  useState */ } from 'react';
import './App.css';

// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UseerInput/UserInput';
 import Person from './Person/person';



class App extends Component {

  /* 
    state = {
      UserName : "Nour"
    }

    ChangeHandlerUserName = (event) =>{
      this.setState({
        UserName : event.target.value
      })
    }

    render(){
      return (
        <div>
          <UserInput changed={this.ChangeHandlerUserName} currentName={this.state.UserName} />
          <UserOutput UserName={this.state.UserName}/>
          <UserOutput UserName='Salah'/>
          <UserOutput UserName='Medhat'/>
        </div>
      
      );
    } 
  */

  // 4-Working with lists and condetionals
  /*  state ={
    persons:[
      {id: 'N-26',name:'Nour', age:'26'},
      {id: 'M-28',name:'Mohsen', age:'28'},
      {id: 'M-22',name:'Menna', age:'22'},
      {id: 'M-56',name:'Mama', age:'56'},
      {id: 'B-60',name:'Baba', age:'60'}
    ],
    showPersons : false
  }

  DeletePerosn = (PersonIndex) => {
    console.log(PersonIndex);
    
    //const persons = this.state.persons;  
     const persons = this.state.persons.slice();  
    //const persons = [...this.state.persons];
    persons.splice(PersonIndex,1);  
    console.log(persons);
    
    this.setState({persons:persons});
  }

  SwitchNamesHandler = (NewName) =>{
      this.setState({
        person: [
          {id: 'N-26',name:NewName, age:'26'},
        {id: 'M-28',name:NewName, age:'28'},
        {id: 'M-22',name:NewName, age:'22'},
        {id: 'M-56',name:NewName, age:'56'},
        {id: 'B-60',name:NewName, age:'60'}
        ]
      })    
  }

  nameChangeHandler = (event , id) =>{
    const PersonIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {...this.state.persons[PersonIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[PersonIndex]=person;

    this.setState({persons: persons});
  }

  TogglePeronsDivs = () =>{
    const toggleValue = this.state.showPersons;
    this.setState({showPersons : !toggleValue})
  }

  render() {

    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.persons.map( (person,index) => {
              return  <Person key={person.id} 
              name={person.name} 
              age={person.age} 
              click={ () => this.DeletePerosn(index)} 
              changed={(event) => this.nameChangeHandler(event , person.id)} />

            })
          }
            {/* 
              <Person 
                name={this.state.person[0].name}  
                age={this.state.person[0].age}
                click={this.SwitchNamesHandler.bind(this,'Taaaatttaaaaatttaaaaa')}
                changed={this.nameChangeHandler}
                />
                <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
                <Person name="swsn" age="26">bew bew bew </Person> 
            //}
          </div>
      );
    }
    return (
      <div className="App">
       <div>hiiiiiiiiiiiiiiiiii</div>
          {/* <button onClick={ () => this.SwitchNamesHandler('Heheheheeheh')}>switch names</button> //}
              <button onClick={ this.TogglePeronsDivs }>Toggle persons</button>
              {persons}
              </div>
            );
  } */

  // Assigment 4-Working with lists and condetionals
  render(){
    return (
      <div className='App'>

      </div>
    );
  }
}

export default App;




/* const App =  props =>  {

  const [personsState , setPersonState] = useState( {
    person:[
      {name:'Nour', age:'26'},
      {name:'Mohsen', age:'28'},
    ]
  });

  const SwitchNamesHandler = () => {
    setPersonState({
        person: [
          {name:'NourAlaah', age:'50'},
          {name:'Mohsen', age:'28'},
        ]
      })    
  }
    return (
      <div className="App">
       <div>hiiiiiiiiiiiiiiiiii</div>
       <button onClick={SwitchNamesHandler}>switch names</button>
       <Person name={personsState.person[0].name} age={personsState.person[0].age}/>
       <Person name={personsState.person[1].name} age={personsState.person[1].age}/>
       <Person name="swsn" age="26">bew bew bew </Person>

      </div>
    );
} 

export default App; */
