import React from "react";
import PropTypes from "prop-types";


function NoneTxt(props){
  return (
    <div>
      <div className="container">
        <div>
          <p className="description">You search, but nothing seems to be there...</p>
        </div>
        <div className="button">
          <button className="buttonStyle" onClick={props.noItemsFound}>Next</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.4);
          border: 5px ridge #e8e8e8;
          margin: 0;
          height: 70px;
          color: #e8e8e8;
          font-size: 24px;
        }
        .button {
          align-self: flex-end;
          margin: 0;
          position: absolute;
        }
        .buttonStyle:hover {
          cursor: pointer;
        }
        .buttonStyle {
          font-size: 15px;
          margin-right: 6px;
          margin-bottom: 4px;
          border-radius: 50px;
          background-color: #58ad27;
          padding-right: 10px;
          padding-left: 9px;
        }
        .description{
          padding: 2px;
        }
    `}</style>
    </div>
  );
}
NoneTxt.propTypes = {
  noItemsFound: PropTypes.func.isRequired,
};

export default NoneTxt;
