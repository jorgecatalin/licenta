import React from "react"
import "../index.css"
import Intrebare from "./Intrebare.js"
import Raspunsuri from "./Raspunsuri.js"
import Meniu from "./Meniu.js"
import Intrebari from "./Intrebari.js"

let intrebari = []

<<<<<<< HEAD
intrebari.push(
  new Intrebari("Prima 111 21Intrebare", ["Da", "Nu"], [true, false])
)
=======
intrebari.push(new Intrebari("Prima!2 Intrebare", ["Da", "Nu"], [true, false]))
>>>>>>> 5692b25161ba793b5f0e0fc2341dc6b9a556c564

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.getRaspunsCurent = this.getRaspunsCurent.bind(this)
    this.schimbaIntrebarea = this.schimbaIntrebarea.bind(this)
    this.state = {
      i: 0,
      raspunsCurent: 4
    }
  }
  render() {
    return (
      <div className="Content">
        <Intrebare text={intrebari[this.state.i].text} />
        <Raspunsuri
          date={{
            intrebariText: intrebari[this.state.i].raspunsuriText,
            raspunsuri: intrebari[this.state.i].raspunsuri,
            getRaspunsCurent: this.getRaspunsCurent
          }}
        />
        <Meniu />
      </div>
    )
  }

  getRaspunsCurent(_raspuns) {
    this.setState({
      raspunsCurent: _raspuns
    })
    this.schimbaIntrebarea()
  }
  schimbaIntrebarea() {
    console.log("Am schimbat intrebarea!")
  }
}

export default Content