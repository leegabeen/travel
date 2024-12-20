import styled from "styled-components"
import { Colors } from "../styles/Styles"

type HeaderProps = {
  name: string
  leftBtnType?: "prev" | "back"
  onClickLeftBtn?: () => void
  rightBtnType?: "next"
  onClickRightBtn?: () => void
}

export default function HeaderView(props: HeaderProps) {
  return(
    <HeaderContainer>
      {props.leftBtnType && (
        <button className="btn-left" onClick={props.onClickLeftBtn}>
          <img src={`/images/ic_arrow_${props.leftBtnType === 'back' ? "back" : 'prev'}.png`} alt="prev" />
        </button>
      )}
      <p>{props.name}</p>
      {props.rightBtnType && (
        <button className="btn-right" onClick={props.onClickRightBtn}>
          <img src="/images/ic_arrow_next.png" alt="next" />
        </button>
      )}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: ${Colors.white};
  position: relative;
  button{
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1px;
    &.btn-left{
      left: 0;
    }
    &.btn-right{
      right: 0;
    }
    img{
      width: 24px;
      height: 24px;
    }
  }
  p{
    height: 100%;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`