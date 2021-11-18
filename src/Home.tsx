//import { useEffect, useState } from "react";
import styled from "styled-components";
import Mint from "./components/mint/Mint";
import * as anchor from "@project-serum/anchor";
import NavBar from "./components/nav/NavBar";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const MintWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 100px auto;
  max-width: 800px;
  text-align: center;
`;

const Home = (props: HomeProps) => {
  return (
    <main>
      <NavBar />
      <Title>Mad minting below</Title>
      <MintWrapper>
        <Mint
          candyMachineId={props.candyMachineId}
          config={props.config}
          connection={props.connection}
          startDate={props.startDate}
          treasury={props.treasury}
          txTimeout={props.txTimeout}
        />
      </MintWrapper>
    </main>
  );
};

export default Home;
