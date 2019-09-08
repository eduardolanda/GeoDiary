import React, { Component } from "react";
import CardDiary from "./CardDiary";
import { data } from "../data";
import Fade from "react-reveal/Fade";

export default class ListDiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diaryItems: data
    };
  }

  render() {
    return (
      <>
        <div className="ContainerList">
          <Fade left>
            {this.state.diaryItems.map(item => (
              <CardDiary
                className="Card"
                key={item.id}
                title={item.Location}
                date={item.Date}
                description={item.description}
                latitud={item.latitud}
                longitud={item.longitud}
                id={item.id}
              />
            ))}
          </Fade>
        </div>
      </>
    );
  }
}
