import styled from "styled-components";
import TravelDestination, { Day } from "../models/TravelDestination.model";
import { Colors } from "../styles/Styles";
import moment from "moment";

type TabsProps = {
  list: TravelDestination
  activeItem: Day
  setActiveItem: (value: Day) => void
}

export default function TabsView(props: TabsProps) {

  return(
    <TabsContainer>
      {props.list.dayList.map((dayItem, dIndex) => (
        <li key={dayItem.id}
          className={dayItem.date === props.activeItem.date ? 'active' : ''}
        >
          <button
            onClick={() => props.setActiveItem(dayItem)}
          >Day{Math.abs(moment(props.list.startDate).diff(dayItem.date, 'days') - 1)}</button>
        </li>
      ))}
    </TabsContainer>
  )
}

const TabsContainer = styled.ul`
  height: 40px;
  display: flex;
  background-color: ${Colors.white};
  position: sticky;
  top: 0;
  z-index: 10;
  &::after{
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dbdbdb;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  li{
    &.active{
      position: relative;
      &::before{
        content: '';
        width: calc(100% - 20px);
        height: 2px;
        background-color: ${Colors.black};
        position: absolute;
        left: 10px;
        bottom: 0;
        z-index: 1;
      }
    }

    button{
      height: 100%;
      padding: 0 12px;
    }
  }
`