import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Colors } from '../../styles/variables';

const titles = ['name', 'email', 'phone', 'flag'];
const TeamTable = ({ list }) => (
  <STable className="table">
    <thead>
      <tr>
        {titles.map((title, idx) => <th key={idx}>{title}</th>)}
      </tr>
    </thead>
    <tbody>
      {list.map(
      ({ id, name, email, phone, crestUrl }) =>
        (<tr key={id}>
          <td><SLink to={`/teams/${id}`} className='table__link'>{name}</SLink></td>
          <td>{email}</td>
          <td><a href={`tel:${phone}`}>{phone}</a></td>
          <SAvatar flag={crestUrl} ></SAvatar>
        </tr>)
      )}
    </tbody>
  </STable>
)

export default React.memo(TeamTable);

const { white, black, grey, blue } = Colors;

const SLink = styled(Link)`
  color: ${blue};
`;

const SAvatar = styled.td`
  background: url(${props => props.flag ? props.flag : './img/unknown-flag.png'}) no-repeat 50% 50%;
  background-size: contain;
`;

const STable = styled.table`
  width: 100%; 
  border-collapse: collapse; 
  margin-top: 15px;
  tr:nth-of-type(odd) { 
    background: ${grey}; 
  }
  th { 
    background: ${black}; 
    color: ${white}; 
    font-weight: 700; 
  }
  td, th { 
    padding: 5px; 
    border: 1px solid #ccc; 
    text-align: left;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }
    @media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
  td a {
    color: blue;
  }
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%;
    height: 19px;
	}
	
	td:before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "name"; }
	td:nth-of-type(2):before { content: "flag"; }
	td:nth-of-type(3):before { content: "country"; }
	td:nth-of-type(4):before { content: "code"; }
}
`;