`use client`;
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { Col } from "antd";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";


function App() {
    return (
        <>
        <h1 className="text-black">test</h1>
        <Col span={12} style={{}}>
            <WalletSelector />
        </Col>
        {console.log(useWallet())}
        </>
      );
  }
   
  export default App;