import React from 'react';
import styled from 'styled-components';

const Card = ({title,des,tag,img}) => {
  return (
    <StyledWrapper>
      <div className="card mt-7">
        <div className="image_container">
         <img src={img} alt="" />
        </div>
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="size">
          <span>{des}</span>
          <ul className="list-size">
            <li className="item-list"><button className="item-list-button">{tag}</button></li>
            
          </ul>
        </div>
      
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    width: 14rem;
    background-color: var(--bg-card);
    border-radius: 1rem;
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 5;
    width: 100%;
    height: 8rem;
    background-color: var(--primary-800);
    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;
    padding: 0.5rem;
    background-color: var(--zinc-800);
    font-size: 0.75rem;
    color: var(--light);
    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }

  .item-list-button:focus {
    background-color: var(--primary);
    border: 2px solid var(--primary-shadow);
    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* New Download Button Styles */
  .download-button {
    position: relative;
    width: 100%;
    height: 2.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: var(--bg-linear);
    border: 2px solid hsla(262, 18%, 57%, 0.5);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .button-text {
    color: var(--light);
    font-weight: 750;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .button-icon {
    position: absolute;
    height: 100%;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-800);
    right: -2.5rem;
    transition: all 0.3s ease;
  }

  .download-svg {
    width: 1.25rem;
    fill: var(--light);
  }

  .download-button:hover {
    background: var(--primary-800);
  }

  .download-button:hover .button-text {
    transform: translateX(-1.25rem);
    opacity: 0;
  }

  .download-button:hover .button-icon {
    right: 0;
    width: 100%;
  }

  .download-button:active {
    transform: scale(0.95);
  }

  .download-button:active .button-icon {
    background-color: var(--primary-shadow);
  }`;

export default Card;
