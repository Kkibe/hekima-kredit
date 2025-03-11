import React from 'react';
import Image1 from '../../assets/personal.png';
import Image2 from '../../assets/payday.png'
import Image3 from '../../assets/business.png';
import Image4 from '../../assets/mortgage.png';

import './Services.scss'
import { NavLink } from 'react-router-dom';

const Data = [
  {
    id: 1,
    name: "Learn more",
    title: "Personal Loan",
    img: Image1,
    desc: "Get access to quick and flexible personal loans to cover unexpected expenses, medical bills, or any urgent financial needs with easy repayment terms."
  },

  {
    id: 2,
    name: "Learn more",
    title: "Payday Loan",
    img: Image2,
    desc: "Need cash before your next paycheck? Our payday loans offer instant short-term financial relief with fast approval and no paperwork."
  },

  {
    id: 3,
    name: "Learn More",
    title: "Business Loan",
    img: Image3,
    desc: "Empower your business with the right funding. Whether for expansion, inventory, or daily operations, our business loans offer the financial boost you need."
  },

  {
    id: 4,
    name: "Learn more",
    title: "Mortgage/Home Loan",
    img: Image4,
    desc: "Turn your dream home into reality with affordable mortgage and home loan solutions. Enjoy competitive interest rates and flexible repayment plans."
  }
];

export default function Services() {

  function Service({ item }) {
    return (
      <div className='service'>
        <img src={item.img} alt={item.title.split(" ").join("_")} />
        <h3>{item.title}</h3>
        <p>
          {item.desc}
        </p>
      </div>)
  };


  return (
    <div className='services'>
      <div className="post-container">
        {
          Data.map(item => {
            return <Service item={item} key={item.id} />
          })
        }
      </div>
    </div>
  )
}
