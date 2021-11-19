import React from 'react';

import './Company.scss';

import Logo from 'assets/trackfarm_logo.png';
import Img1 from 'assets/company-elementor.jpg';

const Company = () => {
  return (
    <div className='main'>
      <div className='elementor-container'>
        <img src={Img1} alt='img1'></img>
        <h1 className='elementor-label'>
          TRACK FARM LAB.
        </h1>
      </div>
      <div className='discription-container'>
        <div className='discription-wrapper'>
          <div className='discription-left'>
            <h3 className='discription-heading'>
              Innovation for future Livestock
            </h3>
            <h2 className='discription-heading-2'>
            Innovative & sustainable<br/>
            Farming solution Provider
            </h2>
            <img className='logo' src={Logo} alt='logo' />
            <div className='about-btn'>
              About Us
            </div>
          </div>
          <div className='discription-right'>
            <p className='bold'>Serious employment reality of pig farms</p>
            <p>Livestock industry of pig farms is shrinking. The decline and aging of the farm labor population, and the 3D industry have led to severe reluctance among young farmers and foreign workers, but they are experiencing many problems such as various malignant diseases</p>
            <p className='bold'>High mortality and low productivity of domestic pig farms</p>
            <p>The mortality rate of pigs in Korean pig farms is close to 20%. Compared to farms in major overseas countries, the situation is two to four times more serious. Compared to overseas pig farms, Korean pig farms have lower recovery costs, so the quality of pig house management and facilities is relatively low. The productivity of Korea is 60% of that of overseas, and the input cost of feed is 1.5 times.</p>
            <p className='bold'>Practical management issues in pig farms</p>
            <p>Due to the shortage of farm workers, there are difficulties in managing sows due to insufficient management of sows, lack of a respiratory disease (PRRS) management health status monitoring system, and early weaning piglets management. For example, during an outbreak of African swine fever in one region, more than 430,000 pigs on 261 farms are culled per day.</p>
          </div>
        </div>
      </div>
      <div className='grid-container'>
        <div className='grid-row'>
          <div className='grid-item grid-item-1'>
            <div className='item-wrapper'>
              <h2 className='item-title'>
                Deep Learning Solution
              </h2>
              <p className='item-discription'>
                Track Farm monitors the movements of all pigs (one per 132㎡) with AI cameras in the farm. With motion AI technology and sensors, you can manage pig health data within the integrated analysis service by collecting and analyzing all behavioral pattern data, such as the number of pig meals, defecation, moving distance, and where they stay.<br/><br/> - Detects all specific abnormal behaviors and suspicious symptoms, notifies the farmer when a problem is found, then makes a diagnosis according to the algorithm and suggests a countermeasure.
              </p>
            </div>
          </div>
          <div className='grid-item grid-item-2'>
            <div className='item-wrapper'>
              <h2 className='item-title'>
                Deep Learning Solution
              </h2>
              <p className='item-discription'>
                Currently, smart farms in the livestock industry are mainly focusing on automation technology for facilities, such as time-dependent feed distribution and temperature control to match the standard temperature.<br/><br/> - Track Farm provides farmers with a daily report for each pig each day so that they can respond accurately and quickly. This minimizes damage and creates a healthy and efficient farm management system. In addition, we provide a solution for improving the productivity of farms by making all these platforms a platform and using them for R&D and building an integrated management platform for each region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
