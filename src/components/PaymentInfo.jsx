import React from "react";

function Payment(){
    return(
        <div className='form'>
            <h1>Payment Info</h1>
            <h3>Please complete below and verify before proceeding.</h3>
            <h4>A payment of $1.00 is required to conitnue, even the free option</h4>
            <h4>Plan: </h4>
            <h4>Subtotal:</h4>

            <form>
                <input type='text' placeholder="Card Number"/>
                <input type='text' placeholder='Name on the Card'/>
                <input type='text' placeholder='Expiration'/>
                <input type='number' placeholder='Security Code'/>
            </form>
            <button>Back</button>
            <button>Pay & Proceed</button>
        </div>
    )

}