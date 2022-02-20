
// import Counter from "components/Counter";
// import ColorPicker from "components/ColorPicker";
// import DropDown from "components/TestComp/DropDown";
// import ToggleButton from "components/ToggleButton";

import React, {Component} from "react";
import LoginForm from "../FormMax/FormMax";
import Form from "../Forms";



class App extends Component {
  state ={};

  formOnSubmit = (data) => {
    console.log(data);
}
  render() {

    return (
      <>  
         {/* <Counter />  */}
         {/* <DropDown />  */}
        {/* <ColorPicker />  */}
        {/* <Form onSubmit={this.formOnSubmit}/> */}
        <LoginForm />
      </>
  );
  }
}

export default App;