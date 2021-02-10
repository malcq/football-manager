import React, { useState } from 'react';
import styled from 'styled-components';

import { paginate, getCountPages, renderPages } from '../../utils';
import { Colors } from '../../styles/variables';

const maxPerPage = 15;
const titles = [ 'title', 'homeTeam', 'awayTeam', 'winner', 'status'];
const ByLeagueTable = ({ list }) => {
  const [activePage, setActivePage ] = useState(1);
  const paginatedList = paginate(list, maxPerPage, activePage);
  const pages = getCountPages(list, maxPerPage);

  return (
    <>
      <STable className="table">
        <thead>
          <tr>
            {titles.map((title, idx) => <th key={idx}>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {paginatedList.map(
          ({ id, homeTeam, awayTeam, score, status }) =>
            (<tr key={id}>
              <td>{homeTeam.name} vs {awayTeam.name}</td>
              <td>{homeTeam.name}</td>
              <td>{awayTeam.name}</td>
              <td>{score.winner}</td>
              <td>{status}</td>
            </tr>)
          )}
        </tbody>
      </STable>
      {renderPages(pages).map((page, idx) => (
        <Page 
          key={idx}
          className='page'
          isActive={activePage === page}
          onClick={setActivePage.bind(null, page)}
        >
          {page}
        </Page>
      ))}
    </>)
}

export default React.memo(ByLeagueTable);

const { white, black, blue, grey } = Colors;

const Page = styled.span`
  display: inline-block;
  margin: 5px;
  width: 30px;
  padding: 5px;
  color: ${props => props.isActive ? blue : black};
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
const STable = styled.table`
  width: 100%; 
  border-collapse: collapse; 
  margin: 15px 0;
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