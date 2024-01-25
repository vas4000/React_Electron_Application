//File: src/components/Recommended/Recommended.js
//this is seperate course recomendation component

import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Course Categories</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Courses" />
                  <Button onClickHandler={handleClick} value="Genio jr bot" title="Genio jr bot" />   
                  <Button onClickHandler={handleClick} value="Duplo pieces" title="Duplo pieces" />
                  <Button onClickHandler={handleClick} value="Wedo 1" title="Wedo 1" />
                  <Button onClickHandler={handleClick} value="Wedo 2.0" title="Wedo 2.0" />
                  <Button onClickHandler={handleClick} value="Lego kit" title="Lego kit" />
                  <Button onClickHandler={handleClick} value="Kodu software" title="Kodu software" />
                 
              </div>
              <div className="recommended-flex">
                  <Button onClickHandler={handleClick} value="Scratch Software" title="Scratch Software" />
                  <Button onClickHandler={handleClick} value="EV3 Robots" title="EV3 Robots" />
                  <Button onClickHandler={handleClick} value="Arduino Kits" title="Arduino Kits" />
                  <Button onClickHandler={handleClick} value="Web development" title="Web development" />
                  <Button onClickHandler={handleClick} value="Programming" title="Programming" />
                  <Button onClickHandler={handleClick} value="Tetrix" title="Tetrix" />
                  <Button onClickHandler={handleClick} value="Competition training" title="Competition training" />
              </div>
      </div>
    </>
  );
};

export default Recommended;
