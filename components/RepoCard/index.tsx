import Link from 'next/link';
import React from 'react';
import { IRepositories } from '../../interfaces/repositories';
import { Container } from './style';

interface RepoCardProps {
  data: IRepositories
}

function RepoCard({data: { description,html_url,name, stargazers_count }}: RepoCardProps) {
  return (
      <Container>
        <h1>{name}</h1>
        <p>{description}</p>
        <span>Estrelas: {stargazers_count}</span>
        <Link href={html_url}>Acessar</Link>
      </Container>
  );
}

export default RepoCard;