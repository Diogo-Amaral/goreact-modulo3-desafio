import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 80%;
  width: 200px;
  top: 0;
  left: 0;
  max-width: 400px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  margin: 20px;
  font-size: 13px;
  line-height: 2;
  color: #6b6b76;
  outline: none;

  p {
    font-size: 16px;
  }
`;

export const Developer = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    img {
      width: 50px;
      height: 50px;
    }

    strong {
      font-size: 14px;
    }

    small {
      font-size: 10px;
    }
  }
`;
