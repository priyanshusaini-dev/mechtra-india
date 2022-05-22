import React from "react";

const Hamburgur = ({checkInput}) => {

  return (
    <>
      <style jsx>
        {`
          label {
            display: flex;
            position:fixed;
            flex-direction: column;
            z-index: 10;
            width: var(--hamburger-width);
            zoom: var(--hamburger-zoom);
            cursor: pointer;
            -moz-transform: scale(-1, 1);
            -webkit-transform: scale(-1, 1);
            -o-transform: scale(-1, 1);
            -ms-transform: scale(-1, 1);
            transform: scale(-1, 1);
          }
          label span {
            background: var(--green);
            border-radius: 10px;
            height: 7px;
            margin: 7px 0;
            transition: var(--ham-transition);
          }
          span:nth-of-type(1) {
            width: 50%;
          }
          span:nth-of-type(2) {
            width: 100%;
          }
          span:nth-of-type(3) {
            width: 75%;
          }
          input[type="checkbox"] {
            display: none;
          }
          input[type="checkbox"]:checked ~ span:nth-of-type(1) {
            transform-origin: bottom;
            transform: rotatez(45deg) translate(8px, 0px);
          }
          input[type="checkbox"]:checked ~ span:nth-of-type(2) {
            transform-origin: top;
            transform: rotatez(-45deg);
          }
          input[type="checkbox"]:checked ~ span:nth-of-type(3) {
            transform-origin: bottom;
            width: 50%;
            transform: translate(30px, -11px) rotatez(45deg);
          }
        `}
      </style>
      <label htmlFor="check" >
        <input type="checkbox" id="check" onClick={()=>checkInput()} />
        <span />
        <span />
        <span />
      </label>
    </>
  );
};

export default Hamburgur;
