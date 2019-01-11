import React from 'react'
import styled from 'styled-components'
import { Text, EmptyStateCard } from '@aragon/ui'

import Box from '../components/Box'

import emptyIcon from '../assets/empty-card.svg'

const EmptyIcon = <img src={emptyIcon} alt="" />

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-gap: 2rem;
`

const RFIs = [
  {
    title: 'RFI #1',
    description: 'Some message here..',
    completed: true,
  },
  {
    title: 'RFI #2',
    description: 'Some message here..',
    completed: true,
  },
  {
    title: 'RFI #3',
    description: 'Some message here..',
    completed: true,
  },
  {
    title: 'RFI #4',
    description: 'Some message here..',
    completed: true,
  },
  {
    title: 'RFI #5',
    description: 'Some message here..',
    completed: false,
  },
  {
    title: 'RFI #6',
    description: 'Some message here..',
    completed: false,
  },
  {
    title: 'RFI #7',
    description: 'Some message here..',
    completed: false,
  },
]

export default props => (
  <div>
    {!props.rfiVotes.length && (
      <EmptyContainer>
        <EmptyStateCard
          icon={EmptyIcon}
          title="No RFIs"
          text="Waiting for RFIs..."
        />
      </EmptyContainer>
    )}
    {!!props.rfiVotes.length && (
      <div>
        <Box mb="0.5rem">
          <Text weight="bold">Open RFIs</Text>
        </Box>
        <ItemContainer>
          {console.log(props.rfiVotes)}
          {props.rfiVotes
            .filter(({ state }) => state === '0')
            .map(({ RFIid }) => (
              <EmptyStateCard
                key={RFIid}
                icon={EmptyIcon}
                title={`RFI #${RFIid}`}
                text={'Description...'}
                actionText="View"
                onActivate={() => props.forward(`RFI #${RFIid}`)}
              />
            ))}
        </ItemContainer>
      </div>
    )}
    {!!props.rfiVotes.length && (
      <Box mt="2rem">
        <Box mb="0.5rem">
          <Text weight="bold">Past RFIs</Text>
        </Box>
        <ItemContainer>
          {props.rfiVotes
            .filter(({ state }) => state !== '0')
            .map(({ RFIid }) => (
              <EmptyStateCard
                key={RFIid}
                icon={EmptyIcon}
                title={`RFI #${RFIid}`}
                text={'Description...'}
                actionText="View"
                onActivate={() => props.forward(`RFI #${RFIid}`)}
              />
            ))}
        </ItemContainer>
      </Box>
    )}
  </div>
)
