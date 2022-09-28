import React from 'react';
import certik from '../assets/img/company/certik.svg';
import google from '../assets/img/company/google.svg';
import aptos from '../assets/img/company/aptos.svg';
import meta from '../assets/img/company/meta.png';
import pontem_white from '../assets/img/company/pontem-white.png';
import nansen from '../assets/img/company/nansen.svg';
import colorSharpRight from "../assets/img/color-sharp2.png"

export const Brands = () => (
  <div className="brand">
    <img className="background-image-right" src={colorSharpRight} alt="Image" />
    <div>
      <img src={pontem_white} alt="pontem logo"/>
    </div>
    <div>
      <img src={aptos} alt="aptos logo"/>
    </div>
    <div>
      <img src={certik} alt="certik logo"/>
    </div>
    <div>
      <img src={nansen} alt="stanford logo"/>
    </div>
    <div>
      <img src={google} alt="google logo"/>
    </div>
    <div>
      <img src={meta} alt="meta logo"/>
    </div>
  </div>
);