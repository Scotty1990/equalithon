import React from "react";

function Plans(){
return (
    <div>
        <h1>Plans</h1>
        <h4>Please select the plan that fits you</h4>
        <h5>A payment of $1.00 is required to continue, even the free option.</h5>
    <form>
        <label>Free</label>
        <input type='checkbox' name='free'/>
        <label>Bronze- Free Trail for 30 Days then $30/month or $270/year</label>
        <input type='checkbox' name='bronze'/>
        <label>Silver $49/month or $500/year</label>
        <input type='checkbox' name='silver'/>
        <label>Gold $65/month or $750/year</label>
        <input type='checkbox' name='gold'/>
        <label>Platinum $850/year</label>
        <input type='checkbox' name='platinum'/>
    </form>
    <button>Back</button>
    <button>Payment Info</button>
    </div>
)
}

export default Plans