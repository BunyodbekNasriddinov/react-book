import { Container } from '@/components/GlobalStyle'
import React from 'react'
import { Block, Image, Title } from './BookCard.style'

export const BookCard = ({ img, title, text }) => {
  return (
    <>
      <Block>
        <Image src={img} width='190' height='283' alt={title} />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Block>
    </>
  )
}
