import styled from "styled-components";
import { Colors } from "../../styles/Styles";

export const Container = styled.main`
  padding: 20px 20px 0;

  .btn-add-destination{
    width: 100%;
    height: 40px;
    border: 1px solid ${Colors.gray_e};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 18px;
      margin-right: 10px;
    }
  }

  ul{
    li{
      margin: 20px 0 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      img{
        border-radius: 6px;
      }
      .info{
        flex: 1;
        padding: 0 0 0 20px;
        .title{
          font-size: 16px;
        }
        p:not(.title){
          margin-top: 4px;
          font-size: 12px;
          color: ${Colors.gray_5};
          span{
            font-size: inherit;
            color: inherit;
            + span{
              margin-left: 8px;
              position: relative;
              &::before{
                content: '';
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: ${Colors.gray_5};
                position: absolute;
                top: 50%;
                left: -4px;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }
      .btn-action{
        width: 36px;
        height: 60px;
        margin-right: -12px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 20px;
        }
      }
    }
  }
`

export const AddTravelContainer = styled.main`
`

export const TravelDetailContainer = styled.main` 
  .inner{
    height: 100%;
    &.none{
      padding: 20px 20px 0;

      .group-btn.create-schedule{
        display: flex;
        column-gap: 20px;
        button{
          flex: 1;
          height: 180px;
          border: 1px solid ${Colors.gray_e};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .cont-wrap{
    height: calc(100% - 40px);
    padding: 20px;
    overflow: auto;
    .course-list{
      margin-top: 20px;
    }

    .btn-add-schedule{
      height: 40px;
      margin: 40px auto 0;
      padding: 0 20px;
      border-radius: 20px;
      border: 1px solid ${Colors.black};
      display: block;
    }
  }
`