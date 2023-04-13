import { ReactNode } from "react";
import { Title } from "./styles";

interface TitleProps {
  children: ReactNode;
}

export function PageTitle({children}: TitleProps) {
  return <Title>{children}</Title>
}