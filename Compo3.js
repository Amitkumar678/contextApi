import React from "react";
import { FirstName, LastName } from "../App";

const Compo3 = () => {
  return (
    <>
      <FirstName.Consumer>
        {(name) => {
          return (
            <LastName.Consumer>
              {(Last) => {
                return (
                  <h1>
                    THIS IS{name}AND {Last}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};
export default Compo3;
