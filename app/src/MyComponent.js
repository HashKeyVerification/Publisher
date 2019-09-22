import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "@drizzle/react-components";

import logo from "./Images/key.png";

var publisher = ""
var version = ""

export default ({ accounts }) => (
  <div className="App">
    <table>
      <tr className="NoMargin">
        <td className="NoMargin">
          <img className="LeftImage" src={logo} alt="drizzle-logo" height='100'width='100'/>
        </td>
        <td className="NoMargin">
          <div>
            <h1 className="MainHeader">Hash Key</h1>
            <p className="HeaderDescription"> An ethereum Dapp that allows software publishers to sign their assemblies via an NFT for latter verification during runime.</p>
          </div>
        </td>
      </tr>
    </table>

    <hr className="LineStyle"/>

    <div className="section">
      <div className="LeftAlignDiv">
        <h2>Publisher</h2>
          <div>
              <input type="text"
                      className="TextInputStyle"></input>
          </div>
        </div>
      </div>

    <div className="section">
      <div className="LeftAlignDiv">
        <h2>Version</h2>
          <div>
              <input type="text"
                    className="TextInputStyle"></input>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="LeftAlignDiv">
          <h2>File</h2>
          <table>
            <tr className="NoMargin">
              <td class>
                  <div>
                    <p>FileName.exe</p>
                  </div>
              </td>
            </tr>
          </table>

        </div>
      </div>

      <div>
        <button>
          <p>Ship It</p>
        </button>
      </div>
  </div>
);
