import styled from "styled-components";
import { PlaceInfo } from "../models/TravelDestination.model";
import { Colors } from "../styles/Styles";

type CourseItemProps = {
  placeItem: PlaceInfo
}

export default function CourseItemView(props: CourseItemProps) {

  return(
    <CourseItemContainer className="course-item">
      <div className="pin">
        <img src="/images/ic_course.png" alt="course" />
        <span>{props.placeItem.courseNum}</span>
      </div>

      <div className="cont">
        <div className="name-address">
          <p className="name">{props.placeItem.name}</p>
          <p className="address">{props.placeItem.address}</p>
        </div>
        {props.placeItem.memo !== "" && (
          <p className="memo">{props.placeItem.memo}</p>
        )}
        {props.placeItem.imageList.length !== 0 && (
          <ul className="image-list">
            {props.placeItem.imageList.filter((v, i) => i < 4).map((imgItem, iIndex) => (
              <li key={`${iIndex}`}
                className={(props.placeItem.imageList.length > 4 && iIndex === 3) ? 'more' : ''}
              >
                <img src={imgItem} alt="test" />
                {(props.placeItem.imageList.length > 4 && iIndex === 3) && (
                  <span>+{props.placeItem.imageList.length - 3}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </CourseItemContainer>
  )
}


const CourseItemContainer = styled.li`
  display: flex;
  position: relative;
  + li.course-item{
    margin-top: 36px;
  }
  &:not(:last-child)::before{
    content: '';
    width: 1px;
    height: calc(100% + 36px);
    background-color: ${Colors.gray_e};
    position: absolute;
    top: 0;
    left: 16px;
    transform: translateX(-50%);
  }

  .pin{
    position: relative;
    img{
      width: 32px;
    }
    span{
      font-size: 12px;
      position: absolute;
      top: 3.5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .cont{
    width: calc(100% - 32px - 12px);
    margin-left: 12px;
    .name-address{
      padding: 4px 0;
      display: flex;
      align-items: flex-end;
      .address{
        margin-left: 6px;
        font-size: 11px;
        color: ${Colors.gray_5}
      }
    }

    .memo{
      margin-top: 8px;
      font-size: 12px;
    }

    .image-list{
      margin-top: 12px;
      display: flex;

      li{
        + li{
          margin-left: 10px;
        }
        &.more{
        position: relative;
        &::after{
          content: '';
          width: 100%;
          height: 100%;
          border-radius: 6px;
          background-color: rgba(0, 0, 0, .3);
          position: absolute;
          top: 0;
          left: 0;
        }
        span{
          color: ${Colors.white};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
      }

        img{
          border-radius: 6px;
        }
      }
    }
  }
`