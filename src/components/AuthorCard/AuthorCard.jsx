import { ContentBlock, Image } from "./AuthorCard.styled";
import { Block, Text, Title } from "./AuthorCard.styled";
import Avloniy from "@images/avloniy.png";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/API/url";

export const AuthorCard = ({ obj }) => {
  const { id, first_name, last_name, image, date_of_birth, date_of_death } = obj;

  return (
    <Link className="col-md-3 text-decoration-none" to={`/author/${id}`}>
      <Block>
        <Image src={BASE_URL + image} width="292" height="230" alt="Abdulla Avloniy" />
        <ContentBlock className="card-body">
          <Title>{first_name} {last_name}</Title>
          <Text>{date_of_birth} - {date_of_death}</Text>
        </ContentBlock>
      </Block>
    </Link>
  );
};
