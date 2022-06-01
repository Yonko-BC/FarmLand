import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ethers } from "ethers";
import { contract } from "../../interacting/main";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const signer_address = signer.getAddress();



export const Cards = (props) => {
  const { id, statuS, claimDay } = props;
  async function claim(investmentPoolId) {
    const claim_Tx = await contract.claim(investmentPoolId);
    console.log("Claimed");
  }
  return (
    <Card style={{ width: "18rem" }} className="mt-5 ">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Img variant="top" src="https://via.placeholder.com/80.png" />
      <Card.Body>
        <Card.Title>Investment id : {id}</Card.Title>
        <Card.Text>Invesment Status: {statuS}</Card.Text>
        <Card.Text>Invesment claim date : {claimDay}</Card.Text>
        {statuS === "2" ? (
          <Button variant="primary" onClick={() => claim(id)}>Claim</Button>
        ) : (
          <Button variant="primary" disabled>
            {" "}
            Claim
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export const InvestedPool = () => {
  const [invests, setInvests] = useState([]);
  const [pools, setPools] = useState([]);


  

  useEffect(() => {
    const getInvestorInvestments = async () => {
      const allInvestments = await contract._investementIds();
      for (let index = 1; index <= allInvestments; index++) {
        const investDetail = await contract.getInvstementPoolDetail(index);
        const invest_investors = investDetail.investors;
        // console.log("investors ", invest_investors[0]);
        //console.log("signer ", signer_address);
        for (let index_2 = 0; index_2 < invest_investors.length; index_2++) {
          if ((await signer_address) === invest_investors[index_2]) {
            let pool = pools;
            pool.push(investDetail);
            setPools(pool);
          }
        }
      }
      const getInvestorInvestments_Tx = await  contract.getInvestorInvestments(
        signer_address
      );
      const invest = await getInvestorInvestments_Tx;
      setInvests(invest);
    };

    getInvestorInvestments();
  }, []);
  console.log("TEST");
  return (

    <>
      {invests.length > 0 ? (
        invests.map((invest) => {
          // console.log("detailed",pools[invest-1]);
          // console.log("alndID",invest.toString())
          //console.log("HOW MUCH !");
          return (
            <Col>
              <Cards
                id={pools[invest - 1].id.toString()}
                statuS={pools[invest - 1].status.toString()}
                claimDay={pools[invest - 1].createdAt.toString()}
              ></Cards>
            </Col>
          );
        })
      ) : (
        <h1>NO DATA</h1>
      )}
    </>
  );
};
