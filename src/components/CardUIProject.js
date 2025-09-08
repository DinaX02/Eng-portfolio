import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #1c1c1c;
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f2f4f7;
  color: #555;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
`;

const Button = styled(Link)`
  margin-top: auto;
  display: inline-block;
  text-align: center;
  padding: 0.6rem 1.2rem;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 12px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const ProjectUICard = ({ image, title, year, tags, link }) => (
  <Card>
    <CardImage src={image} alt={title} />
    <CardContent>
      <TitleRow>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </TitleRow>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
      <Button to={link}>View Details</Button>
    </CardContent>
  </Card>
);

export default ProjectUICard;