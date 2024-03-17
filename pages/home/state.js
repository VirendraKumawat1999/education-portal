import React from "react";
import Image from 'next/image'
const StateComponent = () =>{
    const states = [
        { name: "Andaman & Nicobar Islands", value: "AN" },
        { name: "Andhra Pradesh (Old)", value: "AP_OLD" },
        { name: "Arunachal Pradesh", value: "AR" },
        { name: "Assam", value: "AS" },
        { name: "Bihar", value: "BR" },
        { name: "Chandigarh", value: "CH" },
        { name: "Chhattisgarh", value: "CG" },
        { name: "Dadra & Nagar Haveli", value: "DN" },
        { name: "Daman & Diu", value: "DD" },
        
      ];

      const states2 = [
        { name: "Delhi", value: "DL" },
        { name: "Goa", value: "GA" },
        { name: "Gujarat", value: "GJ" },
        { name: "Haryana", value: "HR" },
        { name: "Himachal Pradesh", value: "HP" },
        { name: "Jammu & Kashmir", value: "JK" },
        { name: "Jharkhand", value: "JH" },
        { name: "Karnataka", value: "KA" },
        { name: "Kerala", value: "KL" },
       
      ];
      const state3=[
        { name: "Lakshadweep", value: "LD" },
        { name: "Madhya Pradesh", value: "MP" },
        { name: "Maharashtra", value: "MH" },
        { name: "Manipur", value: "MN" },
        { name: "Meghalaya", value: "ML" },
        { name: "Mizoram", value: "MZ" },
        { name: "Nagaland", value: "NL" },
        { name: "Odisha", value: "OD" },
        { name: "Puducherry", value: "PY" },
        
      ];
        const states4=[
            { name: "Punjab", value: "PB" },
        { name: "Rajasthan", value: "RJ" },
        { name: "Sikkim", value: "SK" },
        { name: "Tamil Nadu", value: "TN" },
        { name: "Tripura", value: "TR" },
        { name: "Uttar Pradesh", value: "UP" },
        { name: "Uttarakhand", value: "UT" },
        { name: "West Bengal", value: "WB" },
        { name: "Telangana", value: "TG" },
        // { name: "Andhra Pradesh", value: "AP" },
        // { name: "Ladakh", value: "LA" }
   
        ];
      return (
        <>

<section className='states_section'>

<div className="card-section">
    <h3 className="heading3">
        <Image src={require('../../public/assets/images/states/ranking.svg')} className="sIcon" alt="" />States</h3>
    {/* <p style={{paddingBottom:'20px',textAlign:'center',color: '#666666',fontSize: '14px',lineHeight: '21px';} }>All University updates, Results, Exam Notifications, Question Papers and more..</p> */}

    <div className="row" style={{ display: 'flex' }}>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
            <ul className="List-of-University">
               
                 {states.map((state, index) => (
                        <li key={index}>

                        <Image src={require('../../public/assets/images/states/AU-L.png')} alt=""/>
                            <a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> {state.name}</a>
                        </li>
                 ))}       
                
                        
            </ul>

        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ margin: '0 65px' }}>
            {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
            <ul className="List-of-University">
            {states2.map((state, index) => (
                        <li key={index}>

                        <Image src={require('../../public/assets/images/states/AU-L.png')} alt=""/>
                            <a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> {state.name}</a>
                        </li>
                 ))}   
               
            </ul>

        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ marginRight: '60px' }}>
            {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
            <ul className="List-of-University">
            {state3.map((state, index) => (
                        <li key={index}>

                        <Image src={require('../../public/assets/images/states/AU-L.png')} alt=""/>
                            <a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> {state.name}</a>
                        </li>
                 ))}   
                
            </ul>

        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
            <ul className="List-of-University">
            {states4.map((state, index) => (
                        <li key={index}>

                        <Image src={require('../../public/assets/images/states/AU-L.png')} alt=""/>
                            <a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> {state.name}</a>
                        </li>
                 ))}   
                
            </ul>

        </div>

    </div>
</div>
</section>
        </>
    );

}



export default StateComponent;