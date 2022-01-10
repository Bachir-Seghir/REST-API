import axios from 'axios';
import React, {useState, useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51INOBtDZsHpjbdoLCwlCUin7N8xrwRVz9bOa2NHO5xgMilHaL29IFWaEE89eaRJtYEF6bjWi5KOW5a0k9IQSyL8100HahIGj9E"
const Pay = () => {
    const [stripeToken, setStripeToken ] = useState(null)
    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:3001/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StripeCheckout
                name='WI-Store'
                billingAddress
                shippingAddress
                description='Your total is 20$'
                amount={2000}
                token={onToken}
                stripeKey={KEY}

            >

            <button style={{ backgroundColor: 'black', padding: 15, color: 'white'}}>
                Pay Now
            </button>
            </StripeCheckout>
        </div>
    )
}

export default Pay
