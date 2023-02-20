import styled from "styled-components";
import CardBgi from "@images/author-card-bgi.png";

export const Block = styled.div`
  max-width: 295px;
  width: 100%;
  background-image: url(${CardBgi});
  background-repeat: no-repeat;
  border-radius: 22px;
`;

export const Image = styled.img``;

export const ContentBlock = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  margin: 12px 0 0;
  padding: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Text = styled.p`
  margin: 6px 0 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  flex: none;
  order: 0;
  flex-grow: 0;
`;
