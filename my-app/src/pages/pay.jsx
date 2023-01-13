import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from "axios";
// import { useNavigate } from 'react-router-dom'

const KEY = "pk_test_51MHNv9H3d7Yt6rBeaWK5qwrVsxr41iuH8mNHg3A9xSSqyNLbivB9nQB2mJXLdKaysFdsWl08humi8gBjEOayAP1C00J8db7Fk0"

const Pay = () => {
    const onToken = (token) => {
        setStripeToken(token);
    };

    const [ stripeToken, setStripeToken ] = useState(null);
    // const navigate = useNavigate()

    useEffect(() => {
        const makeRequest = async () => {
            try {
                    const res = await axios.post("http://localhost:4000/api/checkout/payment",
                    {
                        tokenId:stripeToken.id,
                        amount:2000, 
                    }
                );
                console.log(res.data);
                // navigate.push('/success')
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest()

    }, [stripeToken])

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >   
            <StripeCheckout 
                name='Duti_Tech Shop' 
                image='https://avatars.githubusercontent.com/u/1486366?v=4'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount= {2000}
                token={onToken}
                stripeKey={KEY}
                >
                <button 
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;