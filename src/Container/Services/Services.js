import React from 'react';
import './Services.css';
import Card from '../../Components/ServicesCard/ServicesCard';
import Text from '../../Components/ServicesText/ServicesText';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaLaptopMedical } from 'react-icons/fa';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';

const ServicesDb = [
  {
    icon: FaChalkboardTeacher,
    title: 'Online Session',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya'
  },
  {
    icon: FaLaptopMedical,
    title: 'Mental Kit',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya'
  },
  {
    icon: FaAssistiveListeningSystems,
    title: 'Listeners',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya'
  },
  {
    icon: MdPeople,
    title: 'Community',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya'
  }
];

function App() {

  return (
    <div className="AppMain">
      <div className='appmain__services'>
        <Text />
        <div className="cardbox">
          <Card icon={ServicesDb[0].icon} title={ServicesDb[0].title} content={ServicesDb[0].content} />
          <Card icon={ServicesDb[1].icon} title={ServicesDb[1].title} content={ServicesDb[1].content} />
          <Card icon={ServicesDb[2].icon} title={ServicesDb[2].title} content={ServicesDb[2].content} />
          <Card icon={ServicesDb[3].icon} title={ServicesDb[3].title} content={ServicesDb[3].content} />
        </div>
      </div>
    </div>
  );
}

export default App;
