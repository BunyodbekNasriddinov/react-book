import { ContentBlock, Image } from "./AuthorCard.styled";
import { Block, Text, Title } from "./AuthorCard.styled";
import Avloniy from "@images/avloniy.png";

export const AuthorCard = () => {
  return (
    <Block>
      <Image src={Avloniy} width="295" height="224" alt="Abdulla Avloniy" />

      <ContentBlock>
        <Title>Abdulla Avloniy</Title>
        <Text>1878-1934</Text>
      </ContentBlock>
    </Block>
  );
};
