import styled from "styled-components";
import { Colors } from "../../styles/Styles";

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 420px;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
  background-color: ${Colors.white};

  header, nav{
    width: 100%;
    min-width: 320px;
    max-width: 420px;
    position: fixed;
    z-index: 10;
  }

  header{
    height: 50px;
    border-bottom: 1px solid ${Colors.gray_e};
    top: 0;
  }

  main{
    width: 100%;
    height: 100%;
    /* padding: 20px; */
    /* background-color: ${Colors.gray_f6}; */
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  nav{
    height: 60px;
    border-top: 1px solid ${Colors.gray_e};
    background-color: ${Colors.white};
    display: flex;
    justify-content: space-around;
    bottom: 0;

    button{
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 24px;
        margin: 0 0 4px;
      }
      span{
        font-size: 11px;
      }
    }
  }

  /* common */
  /* [class^='card']{
    
  } */
  /* .card{
    width: 100%;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(34, 34, 34, 0.1) 2px 2px 6px 2px;

    &-sub-ttl{
      font-size: 12px;
      color: #555;
      span{
        margin-left: 6px;
        font-size: 10px;
        color: inherit;
      }
    }

    &-head{
      width: 100%;
      padding: 20px 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-body{
      padding: 15px 20px 20px;
    }
  }

  .depth1{
    &-ttl{
      span{
        font-size: 12px;
        color: #555;
      }
    }
    &-cont{
      font-size: 16px;
      font-weight: bold;
    }
    &.expense{
      .depth1-cont{
        color: ;
      }
    }
    &.saving{
      .depth1-cont{
        color: ;
      }
    }
    &.income{
      .depth1-cont{
        color: ;
      }
    }
  } */
`