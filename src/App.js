
import './App.css';

function App() {
  return (
   <div>Hello Worldddd</div>
  );
}

export default App;

/*
class accountInfo{
  constructor(nameF, nameL, occupation, password){
    this.nameF = nameF ; 
    this.nameL = nameL ;
    this.occupation = occupation ;
   

  }

}
*/


class expense{
  static time(){
    
  }

  constructor(amount, storeName, category){
    this._amount = amount ; 
    this._storeName = storeName ;
    this._category = category ;
    this._time = Date.now() ;
  }


}

/*
class income{
  constructor(amount, description, date){
    this._amount = amount ;
    this._description = description ;
    this._date = Date.now()

  }
}
*/