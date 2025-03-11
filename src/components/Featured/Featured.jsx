import React from 'react';
import './Featured.scss';
import { NavLink } from 'react-router-dom';
import { AccountBalance, AttachMoney, TrendingUp, ThumbUp } from '@mui/icons-material';

const Featured = () => {
    return (
        <section className="featured" id="featured">
            <h1>How It Works</h1>
            <h4>
                Get quick and easy access to instant loans in just a few steps. Our streamlined process ensures fast approval and secure transactions directly to your M-Pesa.
            </h4>
            <div className="wrapper">
                <NavLink to={''} className="item" title="Apply for a Loan">
                    <AccountBalance className="img" />
                    <h3>Apply for a Loan</h3>
                </NavLink>
                <NavLink to={''} className="item" title="Loan Approval">
                    <ThumbUp className="img" />
                    <h3>Loan Approval</h3>
                </NavLink>
                <NavLink to={''} className="item" title="Receive Funds">
                    <AttachMoney className="img" />
                    <h3>Receive Funds</h3>
                </NavLink>
                <NavLink to={''} className="item" title="Flexible Repayment">
                    <TrendingUp className="img" />
                    <h3>Flexible Repayment</h3>
                </NavLink>
            </div>
        </section>
    );
};

export default Featured;
