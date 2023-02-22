import { BASE_URL } from '@/API/url';
import { BookLink, Image, Texts, Title } from './BookCard.style';

export const BookCard = ({ obj, author }) => {
  const { id, image, title, description } = obj;

  return (
    <>
      <BookLink className='col-md-3  mt-5 p-0 text-decoration-none' to={`book/bookId/${id}`}>
        <Image src={BASE_URL + image} width='190' height='283' alt={title} />
        <Title>{title}</Title>
        <Texts>{author ? `${author.first_name}  ${author.last_name}` : description.split(" ").splice(0, 10).join(" ")}</Texts>
      </BookLink>
    </>
  )
}
