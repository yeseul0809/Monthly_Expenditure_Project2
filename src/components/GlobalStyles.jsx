import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    :root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    font-family: "Gowun Dodum", sans-serif;
    font-weight: 400;
    font-style: normal;
    }

    h1 {
    font-size: 2.5rem;
    margin: 15px;
    font-weight: 700;
    }

    .swal2-icon {
    display: flex !important;
    justify-content: center !important;
    margin: auto;
    padding: 5px;
    }
    .swal2-icon-content {
       color: #e22a2a;
    }
    
    .swal2-popup{
        width: 34rem;
    }


    .swal2-confirm.swal2-styled{
    background-color: #e98282;
    border: #e98282;
    }
   
`;

export default GlobalStyles;
